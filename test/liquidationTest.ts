import { ethers } from 'hardhat';
import { expect } from 'chai';
import * as sinonTest from 'sinon-mocha-test';
import * as moment from 'moment';
import { BigNumber } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import {
  checkFlagLiquidateEvent,
  checkLiquidateEvent,
} from './util/CheckEvent';
import setup from './util/setup';

const amount = BigNumber.from(parseEther('500.0'));
const amountToDeposit = BigNumber.from(parseEther('180.0'));

describe('Liquidation tests', async function() {
  let state, synthTokenAddress, accountOne, accountTwo;

  beforeEach(async function() {
    state = await setup();
    accountOne = state.contractAccounts[0];
    accountTwo = state.contractAccounts[1];

    const feedSynth = await state.Feed.deploy(
      parseEther('1'),
      'Feed Synth Coin'
    );
    await state.minter.createSynth(
      'GDAI',
      'GDAI',
      amount,
      200,
      300,
      feedSynth.address
    );

    synthTokenAddress = await state.minter.getSynth(0);
    await state.token
      .connect(accountOne)
      .approve(state.minter.address, amountToDeposit);
    await state.token
      .connect(accountTwo)
      .approve(state.minter.address, amountToDeposit);

    await state.minter
      .connect(accountOne)
      .mint(
        synthTokenAddress,
        amountToDeposit,
        BigNumber.from(parseEther('20.0'))
      );

    await state.minter
      .connect(accountTwo)
      .mint(
        synthTokenAddress,
        amountToDeposit,
        BigNumber.from(parseEther('20.0'))
      );

    await state.feed.updatePrice(BigNumber.from(parseEther('0.2')));
  });

  describe('Flag account to liquidate', async function() {
    it("Should revert if the account hasn't collateral", async function() {
      const owner = state.contractCreatorOwner.address;

      try {
        await state.minter
          .connect(accountOne)
          .flagLiquidate(owner, synthTokenAddress);
      } catch (error) {
        expect(error.message).to.match(/User cannot be flagged for liquidate/);
      }
    });

    it('Should revert if the account is above passive C-Ratio of 300%', async function() {
      try {
        await state.minter
          .connect(accountOne)
          .flagLiquidate(accountTwo.address, synthTokenAddress);
      } catch (error) {
        expect(error.message).to.match(/Above cRatioPassivo/);
      }
    });

    it(
      'Should return success if the account is below passive C-Ratio of 300%',
      sinonTest.create({ useFakeTimers: false }, async function() {
        const day = moment()
          .add(10, 'days')
          .format('DD');

        const balanceOfBefore = await state.minter.balanceOfSynth(
          accountOne.address,
          synthTokenAddress
        );

        await state.minter
          .connect(accountOne)
          .flagLiquidate(accountTwo.address, synthTokenAddress);

        expect(
          await checkFlagLiquidateEvent(
            state.minter,
            accountTwo.address,
            accountOne.address,
            day
          )
        ).to.be.true;

        const balanceOfAfter = await state.minter.balanceOfSynth(
          accountOne.address,
          synthTokenAddress
        );
        expect(balanceOfAfter.toString()).to.be.equal(
          balanceOfBefore.add(BigNumber.from(parseEther('3.0')))
        );
      })
    );
  });

  describe('Liquidate', async function() {
    it('Should revert if the account liquidated is the same calling the liquidate method', async function() {
      await state.minter
        .connect(accountTwo)
        .flagLiquidate(accountOne.address, synthTokenAddress);

      try {
        await state.minter.liquidate(accountOne.address, synthTokenAddress);
      } catch (error) {
        expect(error.message).to.match(/Sender cannot be the liquidated/);
      }
    });

    it('Should revert if the period of the account flagged is not end', async function() {
      await state.minter
        .connect(accountTwo)
        .flagLiquidate(accountOne.address, synthTokenAddress);

      try {
        await state.feed.updatePrice(BigNumber.from(parseEther('1')));
        await state.minter
          .connect(accountTwo)
          .liquidate(accountOne.address, synthTokenAddress);
      } catch (error) {
        expect(error.message).to.match(/above cRatio/);
      }
    });

    it('Should return success if liquidated account try to mint another value', async function() {
      const amount = BigNumber.from(parseEther('1.7'));
      const amountToDeposit = BigNumber.from(parseEther('80.0'));
      await state.minter
        .connect(accountTwo)
        .flagLiquidate(accountOne.address, synthTokenAddress);
      await state.minter
        .connect(accountTwo)
        .liquidate(accountOne.address, synthTokenAddress);

      await state.token.transfer(accountOne.address, amountToDeposit);
      await state.token
        .connect(accountOne)
        .approve(state.minter.address, amountToDeposit);
      await state.minter
        .connect(accountOne)
        .mint(synthTokenAddress, amountToDeposit, amount);

      const balance = await state.minter.synthDebt(
        accountOne.address,
        synthTokenAddress
      );
      expect(balance.toString()).to.be.equal(amount);
    });

    it('Should liquidate user if is below active C-Ratio 200%', async function() {
      const date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      const balanceOfBefore = await state.minter.balanceOfSynth(
        accountTwo.address,
        synthTokenAddress
      );

      await state.minter
        .connect(accountTwo)
        .flagLiquidate(accountOne.address, synthTokenAddress);
      await state.minter
        .connect(accountTwo)
        .liquidate(accountOne.address, synthTokenAddress);

      expect(
        await checkLiquidateEvent(
          state.minter,
          state.auctionHouse,
          accountOne.address,
          accountTwo.address,
          synthTokenAddress,
          date
        )
      ).to.be.true;

      const balanceOfAfter = await state.minter.balanceOfSynth(
        accountTwo.address,
        synthTokenAddress
      );
      expect(balanceOfAfter.toString()).to.be.equal(
        balanceOfBefore.add(BigNumber.from(parseEther('6.68')))
      );
    });
  });
});
