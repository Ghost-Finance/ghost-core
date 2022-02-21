/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AuctionHouse } from "../AuctionHouse";

export class AuctionHouse__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AuctionHouse> {
    return super.deploy(overrides || {}) as Promise<AuctionHouse>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AuctionHouse {
    return super.attach(address) as AuctionHouse;
  }
  connect(signer: Signer): AuctionHouse__factory {
    return super.connect(signer) as AuctionHouse__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AuctionHouse {
    return new Contract(address, _abi, signerOrProvider) as AuctionHouse;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "cdp",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "keeper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "Start",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "keeper",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "Take",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "contract Minter",
        name: "minter",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "contract GTokenERC20",
        name: "tokenCollateral",
        type: "address",
      },
      {
        internalType: "contract GTokenERC20",
        name: "synthToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "synthAmount",
        type: "uint256",
      },
    ],
    name: "auctionFinishCallback",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "auctions",
    outputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "keeperAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "synthAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "auctionTarget",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialFeedPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "minterAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTimestamp",
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
        name: "debtBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
      },
    ],
    name: "calculateAmountToFixCollateral",
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
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "getAuction",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateralTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "keeperAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "collateralBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "synthAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "auctionTarget",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialFeedPrice",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "minterAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct AuctionHouse.Auction",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "price",
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
    inputs: [
      {
        internalType: "address",
        name: "user_",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress_",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralTokenAddress_",
        type: "address",
      },
      {
        internalType: "address",
        name: "keeperAddress_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralBalance_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralValue_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "auctionTarget_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialFeedPrice_",
        type: "uint256",
      },
    ],
    name: "start",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCollateralPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "take",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611462806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063571a26a01161005b578063571a26a0146100f157806378bd79351461011c578063b419c2941461013c578063b8509a581461014f57610088565b806309a7a4301461008d5780630ac045d5146100a2578063235e0cd8146100cb578063487a2395146100de575b600080fd5b6100a061009b366004610eba565b610162565b005b6100b56100b0366004610fea565b61044e565b6040516100c2919061133c565b60405180910390f35b6100b56100d9366004610fea565b610487565b6100b56100ec366004610fea565b6104cb565b6101046100ff366004610f59565b610519565b6040516100c29c9b9a99989796959493929190611058565b61012f61012a366004610f59565b61059b565b6040516100c29190611289565b6100a061014a36600461100b565b610678565b6100a061015d366004610f71565b610ca3565b4260006101728262093a80611390565b905060006040518061018001604052808c6001600160a01b031681526020018b6001600160a01b031681526020018a6001600160a01b03168152602001896001600160a01b0316815260200188815260200187815260200160008152602001868152602001858152602001336001600160a01b031681526020018481526020018381525090806001815401808255809150506001900390600052602060002090600c020160009091909190915060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160020160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816004015560a0820151816005015560c0820151816006015560e0820151816007015561010082015181600801556101208201518160090160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555061014082015181600a015561016082015181600b01555050866001600160a01b0316896001600160a01b03167f6da98559a575ee7b022dcfd0d5f5bfd8650e70446c2b2b663fa7b7f3a18b2d098885856040516103939392919061137a565b60405180910390a36040516323b872dd60e01b81526001600160a01b038916906323b872dd906103cb90339030908b906004016110c2565b602060405180830381600087803b1580156103e557600080fd5b505af11580156103f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041d9190610f39565b6104425760405162461bcd60e51b81526004016104399061120c565b60405180910390fd5b50505050505050505050565b6000808261045d8560096113c8565b61046791906113e7565b9050610475600160096113e7565b61047f90826113a8565b949350505050565b60006104c46104b26104ac722cd76fe086b93ce2f768a00b22a00000000000866113c8565b84610d14565b6b033b2e3c9fd0803ce8000000610d14565b9392505050565b60006104c48361051460646104ed6b033b2e3c9fd0803ce800000060636113c8565b6104f791906113a8565b610502605a876113a8565b6b033b2e3c9fd0803ce8000000610d20565b610dde565b6000818154811061052957600080fd5b60009182526020909120600c9091020180546001820154600283015460038401546004850154600586015460068701546007880154600889015460098a0154600a8b0154600b909b01546001600160a01b039a8b169c50988a169a978a1699968716989597949693959294919316918c565b6105a3610e2c565b600082815481106105c457634e487b7160e01b600052603260045260246000fd5b60009182526020918290206040805161018081018252600c90930290910180546001600160a01b0390811684526001820154811694840194909452600281015484169183019190915260038101548316606083015260048101546080830152600581015460a0830152600681015460c0830152600781015460e083015260088101546101008301526009810154909216610120820152600a820154610140820152600b909101546101608201529050919050565b600080858154811061069a57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600c020190506000806000861180156106c1575060008360070154115b6106dd5760405162461bcd60e51b8152600401610439906110ff565b82600a0154421180156106f3575082600b015442105b61070f5760405162461bcd60e51b8152600401610439906111af565b8260040154861115610727578260040154915061072b565b8591505b6000610745846008015485600a0154426100ec91906113e7565b9050808610156107675760405162461bcd60e51b815260040161043990611239565b6000670de0b6b3a764000061077c8584610e20565b61078691906113a8565b905060006107b58660070154670de0b6b3a76400008589600401546107ab91906113c8565b6100b091906113a8565b9050600081116107c457600080fd5b8181111561094157819350600a600b678ac7230489e800006107e691906113c8565b6107f091906113a8565b82876007015461080091906113e7565b1061084b5761080f8284610487565b94508186600701600082825461082591906113e7565b925050819055508486600401600082825461084091906113e7565b909155506109069050565b600a610860600b678ac7230489e800006113c8565b61086a91906113a8565b86600701541161088c5760405162461bcd60e51b8152600401610439906111df565b6108c3600a6108a4600b678ac7230489e800006113c8565b6108ae91906113a8565b87600701546108bd91906113e7565b84610487565b9450600a6108da600b678ac7230489e800006113c8565b6108e491906113a8565b86600701819055508486600401600082825461090091906113e7565b90915550505b670de0b6b3a76400006109198685610e20565b61092391906113a8565b8660060160008282546109369190611390565b9091555061098f9050565b80935061094e8184610487565b9450600086600701819055508486600401600082825461096e91906113e7565b92505081905550838660060160008282546109899190611390565b90915550505b600186015460028701546040516323b872dd60e01b81526001600160a01b03928316929091169082906323b872dd906109d090339030908b906004016110c2565b602060405180830381600087803b1580156109ea57600080fd5b505af11580156109fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a229190610f39565b610a3e5760405162461bcd60e51b815260040161043990611178565b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb90610a6c908c908b906004016110e6565b602060405180830381600087803b158015610a8657600080fd5b505af1158015610a9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abe9190610f39565b610ada5760405162461bcd60e51b815260040161043990611141565b6007880154610c415760098801546004808a015460405163095ea7b360e01b81526001600160a01b038581169463095ea7b394610b1c949290911692016110e6565b602060405180830381600087803b158015610b3657600080fd5b505af1158015610b4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6e9190610f39565b506009880154600689015460405163095ea7b360e01b81526001600160a01b038581169363095ea7b393610ba99392909116916004016110e6565b602060405180830381600087803b158015610bc357600080fd5b505af1158015610bd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfb9190610f39565b50610c418c8960090160009054906101000a90046001600160a01b03168a60000160009054906101000a90046001600160a01b031684868d600401548e60060154610ca3565b886001600160a01b0316336001600160a01b03168d7fdb2f6ee1f3a9cbaefcf499bd3bc673d1122a26182fca3bb4d31ab4337635b39a8a898d600b0154604051610c8d9392919061137a565b60405180910390a4505050505050505050505050565b604051631492eb7b60e01b81526001600160a01b03871690631492eb7b90610cd9908a9089908990899089908990600401611345565b600060405180830381600087803b158015610cf357600080fd5b505af1158015610d07573d6000803e3d6000fd5b5050505050505050505050565b60006104c482846113a8565b6000828015610dd257848015610dc757600185168015610d4257869350610d46565b8493505b50600284046002860495505b8515610dc1578687028760801c15610d6957600080fd5b81810181811015610d7957600080fd5b8690049750506001861615610db6578684028488820414158815151615610d9f57600080fd5b81810181811015610daf57600080fd5b8690049450505b600286049550610d52565b50610dcc565b600092505b50610dd6565b8291505b509392505050565b6000610dea8383610e20565b9050811580610e01575082610dff83836113a8565b145b610e0a57600080fd5b6104c4816b033b2e3c9fd0803ce8000000610d14565b60006104c482846113c8565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b600080600080600080600080610100898b031215610ed6578384fd5b8835610ee181611414565b97506020890135610ef181611414565b96506040890135610f0181611414565b95506060890135610f1181611414565b979a969950949760808101359660a0820135965060c0820135955060e0909101359350915050565b600060208284031215610f4a578081fd5b815180151581146104c4578182fd5b600060208284031215610f6a578081fd5b5035919050565b600080600080600080600060e0888a031215610f8b578283fd5b873596506020880135610f9d81611414565b95506040880135610fad81611414565b94506060880135610fbd81611414565b93506080880135610fcd81611414565b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610ffc578182fd5b50508035926020909101359150565b60008060008060808587031215611020578384fd5b843593506020850135925060408501359150606085013561104081611414565b939692955090935050565b6001600160a01b03169052565b6001600160a01b039c8d1681529a8c1660208c0152988b1660408b0152968a1660608a0152608089019590955260a088019390935260c087019190915260e08601526101008501529093166101208301526101408201929092526101608101919091526101800190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526022908201527f496e76616c696420616d6f756e74206f722061756374696f6e2066696e697368604082015261195960f21b606082015260800190565b6020808252601d908201527f7472616e7366657220746f6b656e20746f206b6565706572206661696c000000604082015260600190565b6020808252601f908201527f7472616e7366657220746f6b656e2066726f6d206b6565706572206661696c00604082015260600190565b602080825260169082015275105d58dd1a5bdb881c195c9a5bd9081a5b9d985b1a5960521b604082015260600190565b6020808252601390820152724e6f207061727469616c20707572636861736560681b604082015260600190565b6020808252601390820152721d1bdad95b881d1c985b9cd9995c8819985a5b606a1b604082015260600190565b60208082526030908201527f70726963652074696d6520686f75736520697320626967676572207468616e2060408201526f636f6c6c61746572616c20707269636560801b606082015260800190565b60006101808201905061129d82845161104b565b60208301516112af602084018261104b565b5060408301516112c2604084018261104b565b5060608301516112d5606084018261104b565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015161131d8285018261104b565b5050610140838101519083015261016092830151929091019190915290565b90815260200190565b9586526001600160a01b039485166020870152928416604086015292166060840152608083019190915260a082015260c00190565b9283526020830191909152604082015260600190565b600082198211156113a3576113a36113fe565b500190565b6000826113c357634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156113e2576113e26113fe565b500290565b6000828210156113f9576113f96113fe565b500390565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461142957600080fd5b5056fea264697066735822122043ee19ad84f18e12875009fccd4d34ff7e097b469cb940020df6ac6e3a50062764736f6c63430008000033";
