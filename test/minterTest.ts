import { ethers } from 'hardhat';
import { expect } from 'chai';
import { BigNumber } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import {
  checkBurnEvent,
  checkCreateSynthEvent,
  checkDepositEvent,
  checkMintEvent,
  checkWithdrawalEvent,
} from './util/CheckEvent';
import setup from './util/setup';

describe('Minter', async function() {
  let state, amount;

  beforeEach(async function() {
    state = await setup();
    amount = BigNumber.from(parseEther('500.0'));
  });

  describe('Create a Synths', async function() {
    it('Should return error to create a synth if is not a owner', async function() {
      const feedSynth = await state.Feed.deploy(amount, 'Feed Coin');
      const account = state.contractAccounts[0];

      try {
        await state.minter
          .connect(account)
          .createSynth(
            'Test coin',
            'COIN',
            amount,
            100,
            200,
            feedSynth.address
          );
      } catch (error) {
        expect(error.message).to.match(/unauthorized/);
      }
    });

    it('Should return error if cRatioPassive is less or equal a cRatioActive', async function() {
      const feedSynth = await state.Feed.deploy(amount, 'Feed Coin');

      try {
        await state.minter.createSynth(
          'Test coin',
          'COIN',
          amount,
          300,
          200,
          feedSynth.address
        );
      } catch (error) {
        expect(error.message).to.match(/Invalid cRatioActive/);
      }
    });

    it('Success on create a new Synth', async function() {
      const feedSynth = await state.Feed.deploy(amount, 'Feed GDAI');

      await state.minter.createSynth(
        'Test coin',
        'COIN',
        amount,
        200,
        300,
        feedSynth.address
      );

      expect(
        await checkCreateSynthEvent(
          state.minter,
          'Test coin',
          'COIN',
          feedSynth.address
        )
      ).to.be.true;
      expect(await feedSynth.name()).to.equal('Feed GDAI');
      expect(await state.minter.getSynth(0)).to.exist;
    });
  });

  describe('Deposit Collateral', async function() {
    let debtPool, synthTokenAddress, amountToDeposit, accountOne;

    beforeEach(async function() {
      accountOne = state.contractAccounts[0];
      amountToDeposit = BigNumber.from(parseEther('180.0'));
      const feedSynth = await state.Feed.deploy(amount, 'Feed Coin');
      await state.minter.createSynth(
        'Test coin',
        'COIN',
        amount,
        200,
        300,
        feedSynth.address
      );

      synthTokenAddress = await state.minter.getSynth(0);
      debtPool = await state.DebtPool.deploy(
        synthTokenAddress,
        state.minter.address
      );
      await state.minter.addDebtPool(debtPool.address);
      await state.token
        .connect(accountOne)
        .approve(state.minter.address, amountToDeposit);
    });

    it('Should return error to deposit collateral if account has not collateral token to deposit', async function() {
      try {
        await state.minter
          .connect(accountOne)
          .mint(
            synthTokenAddress,
            BigNumber.from(parseEther('1000.0')),
            BigNumber.from(parseEther('10.0'))
          );
      } catch (error) {
        expect(error.message).to.match(/ERC20: insufficient allowance/);
      }
    });

    it('Should return error to deposit collateral if is a invalid token', async function() {
      try {
        await state.minter.mint(
          state.token.address,
          amountToDeposit,
          BigNumber.from(parseEther('20.0'))
        );
      } catch (error) {
        expect(error.message).to.match(/invalid token/);
      }
    });
  });

  describe('Mint/Burn a token', async function() {
    let debtPool,
      synthTokenAddress,
      amountToMint,
      amountToDeposit,
      accountOne,
      accountTwo;

    beforeEach(async function() {
      accountOne = state.contractAccounts[0];
      accountTwo = state.contractAccounts[1];
      amountToDeposit = BigNumber.from(parseEther('180.0'));
      amountToMint = BigNumber.from(parseEther('1'));
      const feedSynth = await state.Feed.deploy(amountToMint, 'Feed Coin');
      await state.minter.createSynth(
        'Test coin',
        'COIN',
        amount,
        200,
        300,
        feedSynth.address
      );

      synthTokenAddress = await state.minter.getSynth(0);
      debtPool = await state.DebtPool.deploy(
        synthTokenAddress,
        state.minter.address
      );
      await state.minter.addDebtPool(debtPool.address);
      await state.token
        .connect(accountOne)
        .approve(state.minter.address, amountToDeposit);
    });

    describe('Smoke tests', async function() {
      it('validates when is not the owner to update', async function() {
        try {
          await state.minter
            .connect(accountOne)
            .updateSynthCRatio(synthTokenAddress, 200, 300);
        } catch (error) {
          expect(error.message).to.match(/unauthorized/);
        }
      });

      it('validates active c-Ratio is bigger than passive c-Ratio', async function() {
        try {
          await state.minter.updateSynthCRatio(synthTokenAddress, 400, 300);
        } catch (error) {
          expect(error.message).to.match(/invalid cRatio/);
        }
      });

      it('Should return success when update cRatios', async function() {
        await state.minter.updateSynthCRatio(synthTokenAddress, 300, 400);

        expect(await state.minter.cRatioActive(synthTokenAddress)).to.be.equal(
          300
        );
        expect(await state.minter.cRatioPassive(synthTokenAddress)).to.be.equal(
          400
        );
      });
    });

    describe('Minter', async function() {
      it("Should return error to mint if account hasn't the collateral balance", async function() {
        try {
          await state.minter
            .connect(accountOne)
            .mint(synthTokenAddress, amountToDeposit, amountToMint);
        } catch (error) {
          expect(error.message).to.match(/Without collateral deposit/);
        }
      });

      it('Should return error to mint if account has below cRatio', async function() {
        try {
          await state.minter
            .connect(accountOne)
            .mint(synthTokenAddress, amountToDeposit, amountToMint);
        } catch (error) {
          expect(error.message).to.match(/Below cRatio/);
        }
      });

      it('Should return error to mint if token minted is the same as collateral', async function() {
        try {
          await state.minter
            .connect(accountOne)
            .mint(state.token.address, amountToDeposit, amountToMint);
        } catch (error) {
          expect(error.message).to.match(/invalid token/);
        }
      });

      it('Should return success when mint a synth', async function() {
        await state.minter
          .connect(accountOne)
          .mint(
            synthTokenAddress,
            amountToDeposit,
            BigNumber.from(parseEther('20.0'))
          );

        expect(
          await checkMintEvent(
            state.minter,
            accountOne.address,
            BigNumber.from(parseEther('20.0'))
          )
        ).to.be.true;
      });

      it('#simulateCRatio validates amount is positive', async function() {
        try {
          await state.minter.simulateCRatio(synthTokenAddress, 0, 0);
        } catch (error) {
          expect(error.message).to.match(/Incorrect values/);
        }
      });

      it('#simulateCRatio validates amounts are incorrect', async function() {
        try {
          await state.minter.simulateCRatio(
            synthTokenAddress,
            BigNumber.from(parseEther('2.0')).toString(),
            BigNumber.from(parseEther('3.0').toString())
          );
        } catch (error) {
          expect(error.message).to.match(/Incorrect values/);
        }
      });

      it('#simulateCRatio Should return a simulate c-Ratio', async function() {
        const cRatioValue = await state.minter.simulateCRatio(
          synthTokenAddress,
          BigNumber.from(parseEther('180.0')).toString(),
          BigNumber.from(parseEther('20.0').toString())
        );

        expect(cRatioValue.toString()).to.be.equal(
          BigNumber.from(parseEther('9.0').toString())
        );
      });

      it('#maximumByCollateral validates amount is positive', async function() {
        try {
          await state.minter.maximumByCollateral(synthTokenAddress, 0);
        } catch (error) {
          expect(error.message).to.match(/Incorrect values/);
        }
      });

      it('#maximumByCollateral Should return an expectation debt value', async function() {
        const value = await state.minter.maximumByCollateral(
          synthTokenAddress,
          BigNumber.from(parseEther('180.0'))
        );
        expect(value.toString()).to.be.equal(
          BigNumber.from(parseEther('20.0'))
        );
      });

      it('#maximumByDebt validates amount is positive', async function() {
        try {
          await state.minter.maximumByDebt(synthTokenAddress, 0);
        } catch (error) {
          expect(error.message).to.match(/Incorrect values/);
        }
      });

      it('#maximumByDebt Should return an expectation collateral value', async function() {
        const value = await state.minter.maximumByDebt(
          synthTokenAddress,
          BigNumber.from(parseEther('20'))
        );
        expect(value.toString()).to.be.equal(BigNumber.from(parseEther('180')));
      });
    });

    describe('Burn', async function() {
      it('validates when try to burn before mint gDai', async function() {
        try {
          await state.minter
            .connect(accountOne)
            .burn(synthTokenAddress, BigNumber.from(parseEther('20.0')));
        } catch (error) {
          expect(error.message).to.match(/ERC20: insufficient allowance/);
        }
      });

      it('validates when try to burn an amount exceeds the balance', async function() {
        await state.minter
          .connect(accountOne)
          .mint(
            synthTokenAddress,
            amountToDeposit,
            BigNumber.from(parseEther('20.0'))
          );

        try {
          await state.minter
            .connect(accountOne)
            .burn(synthTokenAddress, BigNumber.from(parseEther('200.0')));
        } catch (error) {
          expect(error.message).to.match(/ERC20: insufficient allowance/);
        }
      });

      it('Should burn with success when collateral price going down', async function() {
        await state.minter
          .connect(accountOne)
          .mint(
            synthTokenAddress,
            amountToDeposit,
            BigNumber.from(parseEther('20.0'))
          );
        const amountRatioBefore = await state.minter
          .connect(accountOne)
          .getCRatio(synthTokenAddress);

        expect(amountRatioBefore.toString()).to.be.equal(
          BigNumber.from(parseEther('9.0'))
        );

        // GHO price go down to 50% c-Ratio is 450%
        await state.feed.updatePrice(BigNumber.from(parseEther('0.5')));
        const amountRatioAfterPriceDown = await state.minter
          .connect(accountOne)
          .getCRatio(synthTokenAddress);

        expect(amountRatioAfterPriceDown.toString()).to.be.equal(
          BigNumber.from(parseEther('4.5'))
        );

        // Burn 10 gDai to readjust for 900%
        await state.Token.attach(synthTokenAddress)
          .connect(accountOne)
          .approve(state.minter.address, BigNumber.from(parseEther('10.0')));
        await state.minter
          .connect(accountOne)
          .burn(synthTokenAddress, BigNumber.from(parseEther('10.0')));
        const amountRatioAfter = await state.minter
          .connect(accountOne)
          .getCRatio(synthTokenAddress);

        expect(amountRatioAfter.toString()).to.be.equal(
          BigNumber.from(parseEther('9.0'))
        );
      });

      it('Should return success when burn a small part of gDai', async function() {
        const burnAmount = BigNumber.from(parseEther('5.0'));
        await state.minter
          .connect(accountOne)
          .mint(
            synthTokenAddress,
            amountToDeposit,
            BigNumber.from(parseEther('20.0'))
          );

        await state.Token.attach(synthTokenAddress)
          .connect(accountOne)
          .approve(state.minter.address, burnAmount);
        await state.minter
          .connect(accountOne)
          .burn(synthTokenAddress, burnAmount);
        const amountRatio = await state.minter
          .connect(accountOne)
          .getCRatio(synthTokenAddress);

        expect(
          await checkBurnEvent(
            state.minter,
            accountOne.address,
            synthTokenAddress,
            burnAmount
          )
        ).to.be.true;
        expect(amountRatio.toString()).to.be.equal(
          BigNumber.from(parseEther('12.0'))
        );
      });
    });

    describe('Withdrawn Collateral', async function() {
      it('validates account when insufficient amount', async function() {
        try {
          await state.minter
            .connect(accountTwo)
            .withdrawnCollateral(
              synthTokenAddress,
              BigNumber.from(parseEther('100.0'))
            );
        } catch (error) {
          expect(error.message).to.match(/Insufficient quantity/);
        }
      });

      it('validates account when amount exceeds allowance', async function() {
        await state.minter
          .connect(accountOne)
          .mint(
            synthTokenAddress,
            amountToDeposit,
            BigNumber.from(parseEther('20.0'))
          );

        try {
          await state.minter
            .connect(accountOne)
            .withdrawnCollateral(
              synthTokenAddress,
              BigNumber.from(parseEther('100.0'))
            );
        } catch (error) {
          expect(error.message).to.match(
            /ERC20: transfer amount exceeds allowance/
          );
        }
      });

      it('validates withdraw collateral is below C-Ratio', async function() {
        await state.minter
          .connect(accountOne)
          .mint(
            synthTokenAddress,
            BigNumber.from(parseEther('100.0')),
            BigNumber.from(parseEther('10.0'))
          );

        try {
          await state.feed.updatePrice(BigNumber.from(parseEther('0.2')));
          await state.minter
            .connect(accountOne)
            .withdrawnCollateral(
              synthTokenAddress,
              BigNumber.from(parseEther('10.0'))
            );
        } catch (error) {
          expect(error.message).to.match(/below cRatio/);
        }
      });

      it('Should return success when try to withdraw GHO', async function() {
        await state.minter
          .connect(accountOne)
          .mint(
            synthTokenAddress,
            amountToDeposit,
            BigNumber.from(parseEther('20.0'))
          );

        await state.minter
          .connect(accountOne)
          .withdrawnCollateral(
            synthTokenAddress,
            BigNumber.from(parseEther('10.0'))
          );
        const collateralAmount = await state.token.balanceOf(
          accountOne.address
        );
        const collateralBalanceGdai = await state.minter
          .connect(accountOne)
          .collateralBalance(accountOne.address, synthTokenAddress);

        expect(
          await checkWithdrawalEvent(
            state.minter,
            accountOne.address,
            synthTokenAddress,
            BigNumber.from(parseEther('10.0'))
          )
        ).to.be.true;
        expect(collateralAmount.toString()).to.be.equal(
          BigNumber.from(parseEther('10.0'))
        );
        expect(collateralBalanceGdai.toString()).to.be.equal(
          BigNumber.from(parseEther('170.0'))
        );
      });
    });
  });
});
