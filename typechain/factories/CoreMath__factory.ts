/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CoreMath } from "../CoreMath";

export class CoreMath__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CoreMath> {
    return super.deploy(overrides || {}) as Promise<CoreMath>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoreMath {
    return super.attach(address) as CoreMath;
  }
  connect(signer: Signer): CoreMath__factory {
    return super.connect(signer) as CoreMath__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoreMath {
    return new Contract(address, _abi, signerOrProvider) as CoreMath;
  }
}

const _abi = [
  {
    inputs: [],
    name: "rad",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dividend",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "divisor",
        type: "uint256",
      },
    ],
    name: "radiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "ray",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "wad",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101c0806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063235e0cd814610051578063416a8b201461007a5780637df38c5b14610082578063ba83a2921461008a575b600080fd5b61006461005f366004610115565b610092565b6040516100719190610136565b60405180910390f35b6100646100d6565b6100646100e6565b6100646100f2565b60006100cf6100bd6100b7722cd76fe086b93ce2f768a00b22a000000000008661015f565b84610109565b6b033b2e3c9fd0803ce8000000610109565b9392505050565b6b033b2e3c9fd0803ce800000090565b670de0b6b3a764000090565b722cd76fe086b93ce2f768a00b22a0000000000090565b60006100cf828461013f565b60008060408385031215610127578182fd5b50508035926020909101359150565b90815260200190565b60008261015a57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561018557634e487b7160e01b81526011600452602481fd5b50029056fea264697066735822122012bcde28fb845bcb4b902db90c23aa1475d42dfabe26362dfd8dd40ca552b74864736f6c63430008000033";
