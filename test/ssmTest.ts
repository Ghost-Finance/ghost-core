import { ethers, network } from 'hardhat';
import { expect } from 'chai';
import { set, reset } from 'mockdate';
import { BigNumber } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import { checkAddPriceEvent, checkChangeEvent } from './util/CheckEvent';

let ssmContractLabel: string = 'Ssm';
let gValueTestContractLabel = 'GValueTest';

describe('SSM', async function() {
  let Ssm, GValue, ssm, gValue, owner, accountOne, accounts, others;

  beforeEach(async function() {
    [owner, ...accounts] = await ethers.getSigners();
    [accountOne, ...others] = accounts;

    Ssm = await ethers.getContractFactory(ssmContractLabel);
    GValue = await ethers.getContractFactory(gValueTestContractLabel);

    gValue = await GValue.deploy();
    ssm = await Ssm.deploy(gValue.address);

    await ssm.grantRole(await ssm.READER_ROLE(), accountOne.address);
  });

  it('#stop validates account has the admin role', async function() {
    try {
      await ssm.connect(accountOne).stop();
    } catch (error) {
      expect(error.message).to.match(
        /0x0000000000000000000000000000000000000000000000000000000000000000/
      );
    }
  });

  it('#stop Should stop method poke', async function() {
    await ssm.stop();

    expect(await ssm.stopped()).to.be.equal(1);
    try {
      await ssm.poke();
    } catch (error) {
      expect(error.message).to.match(/Method stopped for ADMIN_ROLE/);
    }
  });

  it('#start validates account has the admin role', async function() {
    try {
      await ssm.connect(accountOne).start();
    } catch (error) {
      expect(error.message).to.match(
        /0x0000000000000000000000000000000000000000000000000000000000000000/
      );
    }
  });

  it('#start Should start method poke and return the first current value', async function() {
    await gValue.poke(BigNumber.from(parseEther('3')));

    await ssm.stop();
    expect(await ssm.stopped()).to.be.equal(1);

    await ssm.start();
    expect(await ssm.stopped()).to.be.equal(0);

    await ssm.connect(accountOne).poke();

    expect(
      await checkAddPriceEvent(
        ssm,
        accountOne.address,
        BigNumber.from(parseEther('0'))
      )
    ).to.be.true;
  });

  it('#step validates account has the admin role', async function() {
    try {
      await ssm.connect(accountOne).step(3600);
    } catch (error) {
      expect(error.message).to.match(
        /0x0000000000000000000000000000000000000000000000000000000000000000/
      );
    }
  });

  it('#step validates if the new time value is bigger than zero', async function() {
    try {
      await ssm.step(0);
    } catch (error) {
      expect(error.message).to.match(/Can't be zero!/);
    }
  });

  it('#step should save new time value if the admin change the value', async function() {
    await ssm.step(7200);

    expect(await ssm.hop()).to.be.equal(7200);
  });

  it('#change validates account has the admin role', async function() {
    let account = others[0].address;

    try {
      await ssm.connect(accountOne).change(account);
    } catch (error) {
      expect(error.message).to.match(
        /0x0000000000000000000000000000000000000000000000000000000000000000/
      );
    }
  });

  it('#change Should return success if the admin change medianizer contract', async function() {
    const address = others[0].address;

    ssm.change(address).then(_ =>
      checkChangeEvent(ssm, owner.address, address).then(data => {
        expect(data).to.be.true;
      })
    );
  });

  it('#peek validates account has the admin role', async function() {
    try {
      await ssm.connect(accounts[1]).peek();
    } catch (error) {
      expect(error.message).to.match(/AccessControl: account/);
    }
  });

  it('#poke validates if can execute with the method was stopped', async function() {
    await ssm.void();

    try {
      await gValue.poke(BigNumber.from(parseEther('3')));
      await ssm.connect(accountOne).poke();
    } catch (error) {
      expect(error.message).to.match(/Method stopped for ADMIN_ROLE/);
    }
  });

  it('#poke validates one hour pass before add a new price', async function() {
    await gValue.poke(BigNumber.from(parseEther('3')));
    await ssm.connect(accountOne).poke();
    const [nextPrice, valid] = await ssm.connect(accountOne).peep();
    expect(nextPrice.toString()).to.be.equal(BigNumber.from(parseEther('3')));
    expect(valid).to.be.true;

    // Save new price
    await gValue.poke(BigNumber.from(parseEther('2')));
    try {
      await ssm.connect(accountOne).poke();
    } catch (error) {
      expect(error.message).to.match(/Waiting for one hour/);
    }
  });

  it('#poke Should return success when one hour pass to add next price', async function() {
    await gValue.poke(BigNumber.from(parseEther('3')));
    ssm.connect(accountOne).poke();
    expect(
      await checkAddPriceEvent(
        ssm,
        accountOne.address,
        BigNumber.from(parseEther('0'))
      )
    ).to.be.true;

    const [priceOne, validOne] = await ssm.connect(accountOne).peek();
    expect(priceOne.toString()).to.be.equal(BigNumber.from(parseEther('0')));
    expect(validOne).to.false;

    const [nextPrice, valid] = await ssm.connect(accountOne).peep();
    expect(nextPrice.toString()).to.be.equal(BigNumber.from(parseEther('3')));
    expect(valid).to.be.true;

    try {
      await ssm.connect(accountOne).read();
    } catch (error) {
      expect(error.message).to.match(/Is not a current value/);
    }

    // Update timestamp in block
    await gValue.poke(BigNumber.from(parseEther('2')));
    await network.provider.send('evm_increaseTime', [
      (await ssm.zzz()).toNumber() + 3600,
    ]);
    await ssm.connect(accountOne).poke();
    ssm
      .connect(accountOne)
      .poke()
      .then(_ => {
        checkAddPriceEvent(
          ssm,
          accountOne.address,
          BigNumber.from(parseEther('3'))
        ).then(isValid => expect(isValid).to.be.true);
      })
      .catch(error => new Error(error.message));

    const [nextPriceTwo, nextValid] = await ssm.connect(accountOne).peep();
    expect(nextPriceTwo.toString()).to.be.equal(
      BigNumber.from(parseEther('2'))
    );
    expect(nextValid).to.be.true;

    const [currentPrice, validThree] = await ssm.connect(accountOne).peek();
    expect(currentPrice.toString()).to.be.equal(
      BigNumber.from(parseEther('3'))
    );
    expect(validThree).to.be.true;

    const price = await ssm.connect(accountOne).read();
    expect(price.toString()).to.be.equal(
      BigNumber.from(parseEther('3')).toString()
    );
  });
});
