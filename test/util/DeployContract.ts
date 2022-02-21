/**
 * * Our pattern for deploying and expect-ing ethers objects is as follows:
 * 1. Declare ContractFactory object
 * 2. Declare Contract object
 * 3. 'Deploy and get reference test' by;
 *      a. ethers.getContractFactory
 *      b. test for expected ContractFactory properties
 *      b. ContractFactory.deploy()
 *      c. Contract.deployed()
 *      d. test for expected Contract properties
 *      e. test for expected Contract property values
 */

import { ethers } from 'hardhat';
import { expect } from 'chai';
import { Contract, ContractFactory } from 'ethers';
import { TokenDetails } from '../types/types';

/**
 * deploys a contract for unit testing and validates every step of the deployment tx
 * @param contractName The name of the contract artifact
 * @param tokenDetails optional argument: the array of type TokenDetails containing the smart contract constructor argument
 */
const deployContract = async (
  contractName: string,
  tokenDetails?: TokenDetails
): Promise<Contract> => {
  expect(contractName.length).to.be.greaterThan(
    0,
    'contractName param must not be an empty string'
  );

  // a running validity flag
  let isValid = false;

  // create contract factory
  let contractFactory = await ethers.getContractFactory(contractName);

  // check if contractFactory is a valid ContractFactory
  isValid = await isValidContractFactory(contractFactory);

  /**
   * Deploy (with constructors, if tokenDetails param was passed)
   * not using Contract.deployed() cause .deploy() allows for smart contract ctor arguments
   * https://github.com/ethers-io/ethers.js/blob/master/packages/contracts/src.ts/index.ts#L762
   *  */
  let contract;
  if (tokenDetails) {
    contract = await contractFactory.deploy(
      tokenDetails.name,
      tokenDetails.symbol
    );
  } else {
    contract = await contractFactory.deploy();
  }

  /**
   * https://github.com/ethers-io/ethers.js/blob/master/packages/contracts/src.ts/index.ts#L762 checks deployed, deploys otherwise
   *  */
  contract = await contract.deployed();

  // check contract is a valid Contract
  isValid = await isValidContract(contract, contractName);

  // If tokenDetails param was passed, check if created token indeed has expected token details
  if (tokenDetails) {
    isValid = await isValidERC20(contractName, contract, tokenDetails);
  }

  if (isValid) return contract;
  else throw console.error(contractName + ' is not valid');
};

/**
 *Checks that a contract is indeed a contract deployed with the name, symbol and decimals ERC20 ctor arguments
 * @param contractName The name of the contract artifact
 * @param contract The predeployed ethers.Contract object
 * @param tokenDetails the array of type TokenDetails containing the smart contract constructor argument
 */
const isValidERC20 = async (
  contractName: string,
  contract: Contract,
  tokenDetails: TokenDetails
): Promise<boolean> => {
  expect(contractName.length).to.be.greaterThan(
    0,
    'contractName param must not be an empty string'
  );
  expect(contract).to.not.be.null;
  expect(tokenDetails).to.not.be.null;
  expect(await contract.name()).to.be.equal(
    tokenDetails.name,
    contractName + ' name not as expected'
  );
  expect(await contract.symbol()).to.be.equal(
    tokenDetails.symbol,
    contractName + ' symbol not as expected'
  );

  return true;
};

/**
 * check that contract is indeed of type Contract
 * https://docs.ethers.io/v5/api/contract/contract/#Contract--properties
 * @param contract The predeployed ethers.Contract object
 * @param contractName The name of the contract artifact
 */
const isValidContract = async (
  contract: Contract,
  contractName: string
): Promise<boolean> => {
  expect(contract).to.not.be.null;
  expect(contractName.length).to.be.greaterThan(
    0,
    'contractName param must not be an empty string'
  );
  expect(contract).to.have.property('address');
  expect(contract).to.have.property('interface');
  expect(contract).to.have.property('provider');
  expect(contract).to.have.property('signer');

  // we only check that address is of a certain type because types specific to ethers lib don't seem to be recognised by Chai from the get go
  expect(contract.address).to.be.a(
    'string',
    contractName + '.address not of expected type string'
  );

  return true;
};

/**
 * check that contractFactory is indeed of type ContractFactory
 * https://docs.ethers.io/v5/api/contract/contract-factory/
 * @param contractFactory the pre instantiated ContractFactory object
 */
const isValidContractFactory = async (
  contractFactory: ContractFactory
): Promise<boolean> => {
  expect(contractFactory).to.not.be.null;
  expect(contractFactory).to.have.property('bytecode');
  expect(contractFactory).to.have.property('interface');
  expect(contractFactory).to.have.property('signer');
  return true;
};

export {
  deployContract,
  isValidERC20,
  isValidContract,
  isValidContractFactory,
};
