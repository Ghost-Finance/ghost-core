import { ethers, network } from 'hardhat';
import { expect } from 'chai';
import { set, reset } from 'mockdate';
import { BigNumber } from 'ethers';
import { parseEther } from 'ethers/lib/utils';

let medianizerContractLabel: string = 'MedianSpacex';
let ssmContractLabel: string = 'Ssm';
let gSpotContractLabel: string = 'GSpot';

describe('GSpot', async function() {
  let GSpot,
    gSpot,
    Ssm,
    ssm,
    Median,
    median,
    owner,
    accountOne,
    accountTwo,
    accounts;

  beforeEach(async function() {
    [owner, accountOne, accountTwo, ...accounts] = await ethers.getSigners();

    GSpot = await ethers.getContractFactory(gSpotContractLabel);
    Median = await ethers.getContractFactory(medianizerContractLabel);
    Ssm = await ethers.getContractFactory(ssmContractLabel);

    median = await Median.deploy();
    gSpot = await GSpot.deploy();
    ssm = await Ssm.deploy(median.address);
  });

  it('#addSsm validates only owner can add new Ssm contract', async function() {
    const key: any = ethers.utils.formatBytes32String('GSPACEX');

    try {
      await gSpot.connect(accountOne).addSsm(key, ssm.address);
    } catch (error) {
      expect(error.message).to.match(/caller is not the owner/);
    }
  });

  it('#addSsm validates if address is zero', async function() {
    const key: any = ethers.utils.formatBytes32String('GSPACEX');

    try {
      await gSpot.addSsm(key, '0x0000000000000000000000000000000000000000');
    } catch (error) {
      expect(error.message).to.match(/Invalid address/);
    }
  });

  it('#addSsm validates if address already exists', async function() {
    const key: any = ethers.utils.formatBytes32String('GSPACEX');

    await gSpot.addSsm(key, ssm.address);
    expect(await gSpot.oracles(key)).to.equal(ssm.address);

    try {
      await gSpot.addSsm(key, ssm.address);
    } catch (error) {
      expect(error.message).to.match(/Address already exists/);
    }
  });

  it('#addSsm Should add a new ssm contract', async function() {
    const key: any = ethers.utils.formatBytes32String('GSPACEX');

    await gSpot.addSsm(key, ssm.address);

    expect(await gSpot.oracles(key)).to.equal(ssm.address);
  });

  it('#addSsm Should add multiples ssm contract', async function() {
    const keyOne: any = ethers.utils.formatBytes32String('GSPACEX');
    const keyTwo: any = ethers.utils.formatBytes32String('GMADEINSPACE');

    await gSpot.addSsm(keyOne, ssm.address);
    await gSpot.addSsm(keyTwo, ssm.address);

    expect(await gSpot.oracles(keyOne)).to.equal(ssm.address);
    expect(await gSpot.oracles(keyTwo)).to.equal(ssm.address);
  });

  it('#peek Should return a number and a boolean', async function() {
    await ssm.grantRole(await ssm.READER_ROLE(), gSpot.address);
    const key = ethers.utils.formatBytes32String('GSPACEX');

    await gSpot.addSsm(key, ssm.address);

    const [value, bool] = await gSpot.connect(accountOne).peek(key);
    expect(value).to.be.an.instanceof(BigNumber);
    expect(bool).to.be.false;
  });
});
