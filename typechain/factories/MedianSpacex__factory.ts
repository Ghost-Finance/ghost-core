/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MedianSpacex } from "../MedianSpacex";

export class MedianSpacex__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MedianSpacex> {
    return super.deploy(overrides || {}) as Promise<MedianSpacex>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MedianSpacex {
    return super.attach(address) as MedianSpacex;
  }
  connect(signer: Signer): MedianSpacex__factory {
    return super.connect(signer) as MedianSpacex__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MedianSpacex {
    return new Contract(address, _abi, signerOrProvider) as MedianSpacex;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
    ],
    name: "LogMedianPrice",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "age",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bar",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bud",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "diss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "diss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "drop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "kiss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "kiss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "lift",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "oracle",
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
    inputs: [],
    name: "peek",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct MedianSpacex.FeedData[]",
        name: "data",
        type: "tuple[]",
      },
    ],
    name: "poke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "read",
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
        name: "val_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "age_",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "recover",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bar_",
        type: "uint256",
      },
    ],
    name: "setBar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "slot",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wat",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526608ea6a082868ab60cb1b6002556003805534801561002257600080fd5b5061003361002e610038565b61003c565b61008c565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61152e8061009b6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063715018a6116100ad578063b3dd931611610071578063b3dd93161461024c578063eb37d3491461025f578063f29c29c414610272578063f2fde38b14610285578063febb0f7e146102985761012c565b8063715018a6146101f65780638d0e5a9a146101fe5780638da5cb5b1461021e57806391f2700a146102265780639adf926e146102395761012c565b80634ca29923116100f45780634ca299231461019d5780634fce7a2a146101b257806357de26a4146101c557806359e02dd7146101cd57806365c4ce7a146101e35761012c565b80631b25b65f14610131578063262a9dff14610146578063352d3fba146101645780633c278bd51461017757806346d4577d1461018a575b600080fd5b61014461013f366004610d93565b6102a0565b005b61014e6103bd565b60405161015b9190611327565b60405180910390f35b610144610172366004610f09565b6103d0565b610144610185366004610d65565b61045b565b610144610198366004610d93565b610540565b6101a56105f1565b60405161015b9190610fdc565b6101a56101c0366004610d65565b6105f7565b6101a5610609565b6101d561066a565b60405161015b929190611317565b6101446101f1366004610d65565b6106b0565b610144610709565b61021161020c366004610f67565b610754565b60405161015b9190610fc8565b61021161076f565b610144610234366004610d65565b61077e565b610211610247366004610f21565b6107fb565b61014461025a366004610e02565b6108a9565b6101a561026d366004610d65565b610bf0565b610144610280366004610d65565b610c02565b610144610293366004610d65565b610c84565b6101a5610cf5565b6102a8610cfb565b6001600160a01b03166102b961076f565b6001600160a01b0316146102e85760405162461bcd60e51b81526004016102df906111b4565b60405180910390fd5b60005b818110156103b857600083838381811061031557634e487b7160e01b600052603260045260246000fd5b905060200201602081019061032a9190610d65565b6001600160a01b031614156103515760405162461bcd60e51b81526004016102df906110b7565b60016005600085858581811061037757634e487b7160e01b600052603260045260246000fd5b905060200201602081019061038c9190610d65565b6001600160a01b03168152602081019190915260400160002055806103b081611491565b9150506102eb565b505050565b600154600160801b900463ffffffff1681565b6103d8610cfb565b6001600160a01b03166103e961076f565b6001600160a01b03161461040f5760405162461bcd60e51b81526004016102df906111b4565b6000811161042f5760405162461bcd60e51b81526004016102df90611080565b61043a6002826114ac565b6104565760405162461bcd60e51b81526004016102df9061125c565b600355565b610463610cfb565b6001600160a01b031661047461076f565b6001600160a01b03161461049a5760405162461bcd60e51b81526004016102df906111b4565b6001600160a01b0381166104c05760405162461bcd60e51b81526004016102df9061118b565b609881901c60ff81166000908152600660205260409020546001600160a01b0316156104fe5760405162461bcd60e51b81526004016102df906110ee565b6001600160a01b0390911660008181526004602090815260408083206001905560ff9094168252600690529190912080546001600160a01b0319169091179055565b610548610cfb565b6001600160a01b031661055961076f565b6001600160a01b03161461057f5760405162461bcd60e51b81526004016102df906111b4565b60005b818110156103b8576000600560008585858181106105b057634e487b7160e01b600052603260045260246000fd5b90506020020160208101906105c59190610d65565b6001600160a01b03168152602081019190915260400160002055806105e981611491565b915050610582565b60025481565b60056020526000908152604090205481565b336000908152600560205260408120546001146106385760405162461bcd60e51b81526004016102df9061111d565b60008061064361066a565b91509150806106645760405162461bcd60e51b81526004016102df906111e9565b50905090565b33600090815260056020526040812054819060011461069b5760405162461bcd60e51b81526004016102df9061111d565b50506001546001600160801b03168015159091565b6106b8610cfb565b6001600160a01b03166106c961076f565b6001600160a01b0316146106ef5760405162461bcd60e51b81526004016102df906111b4565b6001600160a01b0316600090815260056020526040812055565b610711610cfb565b6001600160a01b031661072261076f565b6001600160a01b0316146107485760405162461bcd60e51b81526004016102df906111b4565b6107526000610cff565b565b6006602052600090815260409020546001600160a01b031681565b6000546001600160a01b031690565b610786610cfb565b6001600160a01b031661079761076f565b6001600160a01b0316146107bd5760405162461bcd60e51b81526004016102df906111b4565b6001600160a01b038116600090815260046020908152604080832083905560989390931c60ff168252600690522080546001600160a01b0319169055565b60006001868660025460405160200161081693929190610fb2565b6040516020818303038152906040528051906020012060405160200161083c9190610f81565b60405160208183030381529060405280519060200120858585604051600081526020016040526040516108729493929190610fe5565b6020604051602081039080840390855afa158015610894573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b6003548151146108cb5760405162461bcd60e51b81526004016102df90611218565b6001546000908190600160801b900463ffffffff16815b8451811015610b32576000806109d287848151811061091157634e487b7160e01b600052603260045260246000fd5b60200260200101516000015188858151811061093d57634e487b7160e01b600052603260045260246000fd5b60200260200101516020015189868151811061096957634e487b7160e01b600052603260045260246000fd5b6020026020010151604001518a878151811061099557634e487b7160e01b600052603260045260246000fd5b6020026020010151606001518b88815181106109c157634e487b7160e01b600052603260045260246000fd5b6020026020010151608001516107fb565b6001600160a01b038116600090815260046020526040902054909150600114610a0d5760405162461bcd60e51b81526004016102df9061128a565b83878481518110610a2e57634e487b7160e01b600052603260045260246000fd5b60200260200101516020015111610a575760405162461bcd60e51b81526004016102df906112c1565b84878481518110610a7857634e487b7160e01b600052603260045260246000fd5b6020026020010151600001511015610aa25760405162461bcd60e51b81526004016102df90611049565b868381518110610ac257634e487b7160e01b600052603260045260246000fd5b60200260200101516000015194508060981c915060028260ff1687901c610ae991906114ac565b15610b065760405162461bcd60e51b81526004016102df90611154565b610b118260026113c0565b610b1b9087611362565b955050508080610b2a90611491565b9150506108e2565b508360018551901c81518110610b5857634e487b7160e01b600052603260045260246000fd5b602090810291909101015151600180546fffffffffffffffffffffffffffffffff19166001600160801b039283161763ffffffff60801b1916600160801b4263ffffffff908116820292909217928390556040517fb78ebc573f1f889ca9e1e0fb62c843c836f3d3a2e1f43ef62940e9b894f4ea4c94610be29490811693929004909116906112f8565b60405180910390a150505050565b60046020526000908152604090205481565b610c0a610cfb565b6001600160a01b0316610c1b61076f565b6001600160a01b031614610c415760405162461bcd60e51b81526004016102df906111b4565b6001600160a01b038116610c675760405162461bcd60e51b81526004016102df906110b7565b6001600160a01b0316600090815260056020526040902060019055565b610c8c610cfb565b6001600160a01b0316610c9d61076f565b6001600160a01b031614610cc35760405162461bcd60e51b81526004016102df906111b4565b6001600160a01b038116610ce95760405162461bcd60e51b81526004016102df90611003565b610cf281610cff565b50565b60035481565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803560ff81168114610d6057600080fd5b919050565b600060208284031215610d76578081fd5b81356001600160a01b0381168114610d8c578182fd5b9392505050565b60008060208385031215610da5578081fd5b823567ffffffffffffffff80821115610dbc578283fd5b818501915085601f830112610dcf578283fd5b813581811115610ddd578384fd5b8660208083028501011115610df0578384fd5b60209290920196919550909350505050565b60006020808385031215610e14578182fd5b823567ffffffffffffffff80821115610e2b578384fd5b818501915085601f830112610e3e578384fd5b813581811115610e5057610e506114e2565b610e5d8485830201611338565b8181528481019084860160a0808502870188018b1015610e7b578889fd5b8896505b84871015610efa5780828c031215610e95578889fd5b604080518281018181108982111715610eb057610eb06114e2565b825283358152898401358a820152610ec9848301610d4f565b9181019190915260608381013590820152608080840135908201528452600196909601959287019290810190610e7f565b50909998505050505050505050565b600060208284031215610f1a578081fd5b5035919050565b600080600080600060a08688031215610f38578081fd5b8535945060208601359350610f4f60408701610d4f565b94979396509394606081013594506080013592915050565b600060208284031215610f78578081fd5b610d8c82610d4f565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b9283526020830191909152604082015260600190565b6001600160a01b0391909116815260200190565b90815260200190565b93845260ff9290921660208401526040830152606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601b908201527f4d657373616765206973206e6f7420696e20746865206f726465720000000000604082015260600190565b6020808252601c908201527f4e6565647320746f206265206120706f7369746976652076616c756500000000604082015260600190565b60208082526017908201527f49742773206e6f742061207369676e65722076616c6964000000000000000000604082015260600190565b6020808252601590820152745369676e657220616c72656164792065786973747360581b604082015260600190565b6020808252601d908201527f41646472657373206e6f74207065726d697474656420746f2072656164000000604082015260600190565b6020808252601c908201527f5369676e6572206f7261636c6520616c72656164792073656e64656400000000604082015260600190565b6020808252600f908201526e125b9d985b1a59081858d8dbdd5b9d608a1b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b602080825260159082015274125b9d985b1a59081c1c9a58d9481d1bc81c995859605a1b604082015260600190565b60208082526024908201527f496e76616c6964206e756d626572206f6620616e7377657273206f66204f7261604082015263636c657360e01b606082015260800190565b6020808252601490820152732732b2b210313290309037b23210373ab6b132b960611b604082015260600190565b6020808252601c908201527f4e6f7420617574686f72697a6564206f7261636c65207369676e657200000000604082015260600190565b6020808252601d908201527f5369676e6572206f7261636c65206d6573736167652065787069726564000000604082015260600190565b6001600160801b0392909216825263ffffffff16602082015260400190565b9182521515602082015260400190565b63ffffffff91909116815260200190565b60405181810167ffffffffffffffff8111828210171561135a5761135a6114e2565b604052919050565b60008219821115611375576113756114cc565b500190565b80825b600180861161138c57506113b7565b81870482111561139e5761139e6114cc565b808616156113ab57918102915b9490941c93800261137d565b94509492505050565b6000610d8c60001960ff8516846000826113dc57506001610d8c565b816113e957506000610d8c565b81600181146113ff576002811461140957611436565b6001915050610d8c565b60ff84111561141a5761141a6114cc565b6001841b915084821115611430576114306114cc565b50610d8c565b5060208310610133831016604e8410600b8410161715611469575081810a83811115611464576114646114cc565b610d8c565b611476848484600161137a565b808604821115611488576114886114cc565b02949350505050565b60006000198214156114a5576114a56114cc565b5060010190565b6000826114c757634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122027b5e8ffc11660d671c8bcb2e48b6aa07e87e5a65f10a76002b264dd99a28eb164736f6c63430008000033";