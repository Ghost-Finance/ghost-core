/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PositionVault } from "../PositionVault";

export class PositionVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _owner: string,
    overrides?: Overrides
  ): Promise<PositionVault> {
    return super.deploy(
      _token,
      _owner,
      overrides || {}
    ) as Promise<PositionVault>;
  }
  getDeployTransaction(
    _token: string,
    _owner: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _owner, overrides || {});
  }
  attach(address: string): PositionVault {
    return super.attach(address) as PositionVault;
  }
  connect(signer: Signer): PositionVault__factory {
    return super.connect(signer) as PositionVault__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PositionVault {
    return new Contract(address, _abi, signerOrProvider) as PositionVault;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract GTokenERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "position",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "positionVaultData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "position",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "removeDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract GTokenERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "position",
        type: "uint256",
      },
    ],
    name: "withdrawFullDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161063038038061063083398101604081905261002f91610060565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100b1565b60008060408385031215610072578182fd5b825161007d81610099565b602084015190925061008e81610099565b809150509250929050565b6001600160a01b03811681146100ae57600080fd5b50565b610570806100c06000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063884e2e931161005b578063884e2e93146100d35780638da5cb5b146100e6578063df267547146100fb578063fc0c546a1461010e5761007d565b806301c6adc31461008257806312d43f6d1461009757806375279e95146100c0575b600080fd5b6100956100903660046103b0565b610116565b005b6100aa6100a5366004610400565b6101d2565b6040516100b791906104ec565b60405180910390f35b6100956100ce366004610418565b6101e4565b6100aa6100e1366004610400565b6102c5565b6100ee610333565b6040516100b7919061044c565b610095610109366004610418565b610342565b6100ee61038a565b6001546001600160a01b031633146101495760405162461bcd60e51b8152600401610140906104c7565b60405180910390fd5b60005460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb9061017b9085908590600401610484565b602060405180830381600087803b15801561019557600080fd5b505af11580156101a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cd91906103d9565b505050565b60026020526000908152604090205481565b6001546001600160a01b0316331461020e5760405162461bcd60e51b8152600401610140906104c7565b6000546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061024290859030908690600401610460565b602060405180830381600087803b15801561025c57600080fd5b505af1158015610270573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029491906103d9565b61029d57600080fd5b600083815260026020526040812080548392906102bb9084906104f5565b9091555050505050565b6001546000906001600160a01b031633146102f25760405162461bcd60e51b8152600401610140906104c7565b60008281526002602052604090205461031d5760405162461bcd60e51b81526004016101409061049d565b506000818152600260205260409020545b919050565b6001546001600160a01b031681565b6001546001600160a01b0316331461036c5760405162461bcd60e51b8152600401610140906104c7565b600083815260026020526040812080548392906102bb90849061050d565b6000546001600160a01b031681565b80356001600160a01b038116811461032e57600080fd5b600080604083850312156103c2578182fd5b6103cb83610399565b946020939093013593505050565b6000602082840312156103ea578081fd5b815180151581146103f9578182fd5b9392505050565b600060208284031215610411578081fd5b5035919050565b60008060006060848603121561042c578081fd5b8335925061043c60208501610399565b9150604084013590509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526010908201526f24b73b30b634b2103837b9b4ba34b7b760811b604082015260600190565b6020808252600b908201526a4f6e6c79206f776e65722160a81b604082015260600190565b90815260200190565b6000821982111561050857610508610524565b500190565b60008282101561051f5761051f610524565b500390565b634e487b7160e01b600052601160045260246000fdfea26469706673582212205201aa349b9b681aa27882641473f7e79d56d48b8c1fd33a88c51d59fece1d0164736f6c63430008000033";
