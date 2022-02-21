import { ethers } from 'hardhat';
import { expect } from 'chai';
import { BigNumber } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import { checkAuctionHouseTakeEvent } from './util/CheckEvent';
import setup from './util/setup';

describe('Auction House tests', async function() {
  let state, synthTokenAddress, accountOne, accountTwo, gDai;
  const amount = BigNumber.from(parseEther('500.0'));
  const amountToDeposit = BigNumber.from(parseEther('180.0'));

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
    const GDAI = await ethers.getContractFactory('GTokenERC20');
    gDai = await GDAI.attach(synthTokenAddress);

    await state.token
      .connect(accountOne)
      .approve(state.minter.address, amountToDeposit);
    await state.token
      .connect(accountTwo)
      .approve(state.minter.address, amountToDeposit);

    // account One - liquidated account
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
    await state.minter
      .connect(accountTwo)
      .flagLiquidate(accountOne.address, synthTokenAddress);
    await state.minter
      .connect(accountTwo)
      .liquidate(accountOne.address, synthTokenAddress);
  });

  it('validates when price of time house is bigger than collateral price', async function() {
    const id = 0;
    const amount = BigNumber.from(parseEther('190.0'));

    try {
      await state.auctionHouse
        .connect(accountTwo)
        .take(
          id,
          amount,
          BigNumber.from(parseEther('0.1')),
          accountTwo.address
        );
    } catch (error) {
      expect(error.message).to.match(
        /'price time house is bigger than collateral price'/
      );
    }
  });

  it('validates when amount is zero', async function() {
    const id = 0;
    const amount = BigNumber.from(parseEther('0.0'));

    try {
      await state.auctionHouse
        .connect(accountTwo)
        .take(id, amount, BigNumber.from(parseEther('1')), accountTwo.address);
    } catch (error) {
      expect(error.message).to.match(/'Invalid amount or auction finished'/);
    }
  });

  it('validates when call take function after finish the auction time', async function() {
    const id = 0;
    const amount = BigNumber.from(parseEther('1.0'));

    // setup
    const now = Date.now() + 11 * 24 * 60 * 60 * 1000;
    await ethers.provider.send('evm_increaseTime', [now]);
    await ethers.provider.send('evm_mine', []);

    try {
      await state.auctionHouse
        .connect(accountTwo)
        .take(id, amount, amount, accountTwo.address);
    } catch (error) {
      expect(error.message).to.match(/'Auction period invalid'/);
    }
  });

  it('validates when auction finish and try to execute take again', async function() {
    const id = 0;
    const amount = BigNumber.from(parseEther('190.0'));

    await gDai
      .connect(accountTwo)
      .approve(state.auctionHouse.address, BigNumber.from(parseEther('100.0')));

    // First take
    await state.auctionHouse
      .connect(accountTwo)
      .take(id, amount, BigNumber.from(parseEther('1')), accountTwo.address);

    const auction = await state.auctionHouse.getAuction(id);
    expect(auction.auctionTarget.toString()).to.be.equal(
      BigNumber.from(parseEther('0.0'))
    );

    // Second take
    try {
      await state.auctionHouse
        .connect(accountTwo)
        .take(id, amount, BigNumber.from(parseEther('1')), accountTwo.address);
    } catch (error) {
      expect(error.message).to.match(/Invalid amount or auction finished/);
    }
  });

  it("validates when keeper hasn't enough funds to purchase", async function() {
    const id = 0;
    const amount = BigNumber.from(parseEther('20.0'));
    const accountWithoutFounds = state.contractAccounts[2];

    await state.token
      .attach(synthTokenAddress)
      .connect(accountWithoutFounds)
      .approve(state.auctionHouse.address, amount);

    try {
      await state.auctionHouse
        .connect(accountWithoutFounds)
        .take(
          id,
          amount,
          BigNumber.from(parseEther('1')),
          accountWithoutFounds.address
        );
    } catch (error) {
      expect(error.message).to.match(/ERC20: transfer amount exceeds balance/);
    }
  });

  it('Should return success when bidding an auction part', async function() {
    const id = 0;
    const amount = BigNumber.from(parseEther('20.0'));

    await gDai
      .connect(accountTwo)
      .approve(state.auctionHouse.address, BigNumber.from(parseEther('100.0')));

    await state.auctionHouse
      .connect(accountTwo)
      .take(id, amount, BigNumber.from(parseEther('1')), accountTwo.address);
    expect(
      await checkAuctionHouseTakeEvent(
        state.auctionHouse,
        accountTwo.address,
        accountTwo.address,
        amount,
        BigNumber.from(parseEther('0.2'))
      )
    ).to.be.true;

    const auction = await state.auctionHouse.getAuction(0);
    expect(auction.auctionTarget.toString()).to.be.equal(
      BigNumber.from(parseEther('21.3'))
    );

    const keeperBalanceOfGHO = await state.token.balanceOf(accountTwo.address);
    const keeperBalanceOfGDAI = await state.minter.balanceOfSynth(
      accountTwo.address,
      synthTokenAddress
    );
    expect(keeperBalanceOfGHO.toString()).to.be.equal(
      BigNumber.from(parseEther('20.0'))
    );
    expect(keeperBalanceOfGDAI.toString()).to.be.equal(
      BigNumber.from(parseEther('22.68'))
    );
  });

  it('Should decrease price when bidding an auction part', async function() {
    const id = 0;
    const amount = BigNumber.from(parseEther('20.0'));

    await gDai
      .connect(accountTwo)
      .approve(state.auctionHouse.address, BigNumber.from(parseEther('100.0')));

    // Before 90s
    await state.auctionHouse
      .connect(accountTwo)
      .take(id, amount, BigNumber.from(parseEther('1')), accountTwo.address);
    expect(
      await checkAuctionHouseTakeEvent(
        state.auctionHouse,
        accountTwo.address,
        accountTwo.address,
        amount,
        BigNumber.from(parseEther('0.2'))
      )
    ).to.be.true;

    // After 90s
    setTimeout(() => {
      state.auctionHouse
        .connect(accountTwo)
        .take(id, amount, BigNumber.from(parseEther('1')), accountTwo.address)
        .then(_ => {
          checkAuctionHouseTakeEvent(
            state.auctionHouse,
            accountTwo.address,
            accountTwo.address,
            amount,
            BigNumber.from(parseEther('2.0'))
          ).then(result => expect(result).to.be.true);
        });
    }, 90000);
  });

  it('Should return success when Keeper buy an auction twice', async function() {
    const id = 0;
    const expectedAmount = BigNumber.from(parseEther('71.5'));
    const amount = BigNumber.from(parseEther('75.0'));

    const auctionBefore = await state.auctionHouse.getAuction(id);
    expect(auctionBefore.auctionTarget.toString()).to.be.equal(
      BigNumber.from(parseEther('25.3'))
    );
    await gDai
      .connect(accountTwo)
      .approve(state.auctionHouse.address, BigNumber.from(parseEther('100.0')));

    await state.auctionHouse
      .connect(accountTwo)
      .take(id, amount, BigNumber.from(parseEther('0.2')), accountTwo.address);
    expect(
      await checkAuctionHouseTakeEvent(
        state.auctionHouse,
        accountTwo.address,
        accountTwo.address,
        expectedAmount,
        BigNumber.from(parseEther('0.2'))
      )
    ).to.be.true;
    const auctionAfter = await state.auctionHouse.getAuction(id);
    expect(auctionAfter.auctionTarget.toString()).to.be.equal(
      BigNumber.from(parseEther('11.0'))
    );

    await state.auctionHouse
      .connect(accountTwo)
      .take(
        id,
        BigNumber.from(parseEther('55.0')),
        BigNumber.from(parseEther('1.0')),
        accountTwo.address
      );

    const auctionLiquidity = await state.auctionHouse.getAuction(id);
    expect(auctionLiquidity.auctionTarget.toString()).to.be.equal(
      BigNumber.from(parseEther('0'))
    );

    const keeperBalanceOfGHO = await state.token.balanceOf(accountTwo.address);
    const keeperBalanceOfGDAI = await state.minter.balanceOfSynth(
      accountTwo.address,
      synthTokenAddress
    );
    expect(keeperBalanceOfGHO.toString()).to.be.equal(
      BigNumber.from(parseEther('119.8125'))
    );
    expect(keeperBalanceOfGDAI.toString()).to.be.equal(
      BigNumber.from(parseEther('2.0175'))
    );

    const userCollateral = await state.minter.collateralBalance(
      accountOne.address,
      synthTokenAddress
    );
    expect(userCollateral.toString()).to.be.equal(
      BigNumber.from(parseEther('60.1875'))
    );
    const userSynthDebt = await state.minter.synthDebt(
      accountOne.address,
      synthTokenAddress
    );
    expect(userSynthDebt.toString()).to.be.equal(
      BigNumber.from(parseEther('0'))
    );
  });

  it('Should return success when all auction is sold', function(done) {
    const id = 0;
    const amount = BigNumber.from(parseEther('190.0'));
    const expectedAmount = BigNumber.from(parseEther('119.8125'));

    gDai
      .connect(accountTwo)
      .approve(state.auctionHouse.address, BigNumber.from(parseEther('100.0')));

    state.auctionHouse
      .connect(accountTwo)
      .take(id, amount, BigNumber.from(parseEther('1.0')), accountTwo.address)
      .then(_ => {
        checkAuctionHouseTakeEvent(
          state.auctionHouse,
          accountTwo.address,
          accountTwo.address,
          expectedAmount,
          BigNumber.from(parseEther('0.2'))
        ).then(result => expect(result).to.be.true);

        state.auctionHouse
          .getAuction(0)
          .then(auction => {
            expect(auction.auctionTarget.toString()).to.be.equal(
              BigNumber.from(parseEther('0'))
            );
          })
          .catch(error => {
            throw error;
          });

        // GHO balance for accountTwo
        state.token
          .balanceOf(accountTwo.address)
          .then(balance => {
            expect(balance.toString()).to.be.equal(expectedAmount);
          })
          .catch(error => {
            throw error;
          });

        // GDAI balance for accountTwo
        state.minter
          .balanceOfSynth(accountTwo.address, synthTokenAddress)
          .then(balance => {
            expect(balance).to.be.equal(BigNumber.from(parseEther('2.7175')));
          })
          .catch(error => {
            throw error;
          });

        // GDAI balance for accountOne
        state.minter
          .balanceOfSynth(accountOne.address, synthTokenAddress)
          .then(balance => {
            expect(balance.toString()).to.be.equal(
              BigNumber.from(parseEther('20.0'))
            );
          })
          .catch(error => {
            throw error;
          });

        // Collateral balance for accountOne
        state.minter
          .collateralBalance(accountOne.address, synthTokenAddress)
          .then(balance => {
            expect(balance.toString()).to.be.equal(
              BigNumber.from(parseEther('60.1875'))
            );
          })
          .catch(error => {
            throw error;
          });
      })
      .then(done);
  });

  it('Should decrese price after time pass', async function() {
    let priceTimeHouse;
    const price = BigNumber.from(parseEther('10.0'));

    priceTimeHouse = await state.auctionHouse.price(price, 0);
    expect(priceTimeHouse.toString()).to.be.equal(price);

    priceTimeHouse = await state.auctionHouse.price(price, 89);
    expect(priceTimeHouse.toString()).to.be.equal(price);

    priceTimeHouse = await state.auctionHouse.price(price, 90);
    expect(priceTimeHouse.toString()).to.be.equal(
      BigNumber.from(parseEther('9.9'))
    );

    priceTimeHouse = await state.auctionHouse.price(price, 180);
    expect(priceTimeHouse.toString()).to.be.equal(
      BigNumber.from(parseEther('9.801'))
    );

    priceTimeHouse = await state.auctionHouse.price(price, 280);
    expect(priceTimeHouse.toString()).to.be.equal(
      BigNumber.from(parseEther('9.70299'))
    );

    priceTimeHouse = await state.auctionHouse.price(price, 380);
    expect(priceTimeHouse.toString()).to.be.equal(
      BigNumber.from(parseEther('9.6059601'))
    );
  });
});
