/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface UpdateHouseInterface extends ethers.utils.Interface {
  functions: {
    "createPosition(uint256,bytes32,uint8)": FunctionFragment;
    "data(uint256)": FunctionFragment;
    "debtPool()": FunctionFragment;
    "decreasePosition(uint256,uint256)": FunctionFragment;
    "finishPosition(uint256)": FunctionFragment;
    "getVault()": FunctionFragment;
    "increasePosition(uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "rad()": FunctionFragment;
    "radiv(uint256,uint256)": FunctionFragment;
    "ray()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setVault()": FunctionFragment;
    "spot()": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vault()": FunctionFragment;
    "wad()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createPosition",
    values: [BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "data", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "debtPool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreasePosition",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finishPosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increasePosition",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "rad", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "radiv",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ray", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setVault", values?: undefined): string;
  encodeFunctionData(functionFragment: "spot", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(functionFragment: "wad", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "createPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "debtPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finishPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rad", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "radiv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ray", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wad", data: BytesLike): Result;

  events: {
    "Create(address,tuple)": EventFragment;
    "Finish(address,uint8)": EventFragment;
    "Loser(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Winner(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Create"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Finish"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Loser"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Winner"): EventFragment;
}

export class UpdateHouse extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UpdateHouseInterface;

  functions: {
    createPosition(
      amount: BigNumberish,
      synthKey: BytesLike,
      direction_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createPosition(uint256,bytes32,uint8)"(
      amount: BigNumberish,
      synthKey: BytesLike,
      direction_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    data(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      account: string;
      direction: number;
      status: number;
      synth: string;
      initialPrice: BigNumber;
      lastPrice: BigNumber;
      tokenAmount: BigNumber;
      synthTokenAmount: BigNumber;
      created_at: BigNumber;
      updated_at: BigNumber;
      0: string;
      1: number;
      2: number;
      3: string;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: BigNumber;
    }>;

    "data(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      account: string;
      direction: number;
      status: number;
      synth: string;
      initialPrice: BigNumber;
      lastPrice: BigNumber;
      tokenAmount: BigNumber;
      synthTokenAmount: BigNumber;
      created_at: BigNumber;
      updated_at: BigNumber;
      0: string;
      1: number;
      2: number;
      3: string;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: BigNumber;
    }>;

    debtPool(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "debtPool()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    decreasePosition(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decreasePosition(uint256,uint256)"(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    finishPosition(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "finishPosition(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getVault(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "getVault()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    increasePosition(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increasePosition(uint256,uint256)"(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    rad(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "rad()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    radiv(
      dividend: BigNumberish,
      divisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "radiv(uint256,uint256)"(
      dividend: BigNumberish,
      divisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    ray(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "ray()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setVault(overrides?: Overrides): Promise<ContractTransaction>;

    "setVault()"(overrides?: Overrides): Promise<ContractTransaction>;

    spot(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "spot()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    token(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "token()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "vault()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    wad(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "wad()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  createPosition(
    amount: BigNumberish,
    synthKey: BytesLike,
    direction_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createPosition(uint256,bytes32,uint8)"(
    amount: BigNumberish,
    synthKey: BytesLike,
    direction_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  data(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    account: string;
    direction: number;
    status: number;
    synth: string;
    initialPrice: BigNumber;
    lastPrice: BigNumber;
    tokenAmount: BigNumber;
    synthTokenAmount: BigNumber;
    created_at: BigNumber;
    updated_at: BigNumber;
    0: string;
    1: number;
    2: number;
    3: string;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: BigNumber;
    8: BigNumber;
    9: BigNumber;
  }>;

  "data(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    account: string;
    direction: number;
    status: number;
    synth: string;
    initialPrice: BigNumber;
    lastPrice: BigNumber;
    tokenAmount: BigNumber;
    synthTokenAmount: BigNumber;
    created_at: BigNumber;
    updated_at: BigNumber;
    0: string;
    1: number;
    2: number;
    3: string;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: BigNumber;
    8: BigNumber;
    9: BigNumber;
  }>;

  debtPool(overrides?: CallOverrides): Promise<string>;

  "debtPool()"(overrides?: CallOverrides): Promise<string>;

  decreasePosition(
    index: BigNumberish,
    deltaAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decreasePosition(uint256,uint256)"(
    index: BigNumberish,
    deltaAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  finishPosition(
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "finishPosition(uint256)"(
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getVault(overrides?: CallOverrides): Promise<string>;

  "getVault()"(overrides?: CallOverrides): Promise<string>;

  increasePosition(
    index: BigNumberish,
    deltaAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increasePosition(uint256,uint256)"(
    index: BigNumberish,
    deltaAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  rad(overrides?: CallOverrides): Promise<BigNumber>;

  "rad()"(overrides?: CallOverrides): Promise<BigNumber>;

  radiv(
    dividend: BigNumberish,
    divisor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "radiv(uint256,uint256)"(
    dividend: BigNumberish,
    divisor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ray(overrides?: CallOverrides): Promise<BigNumber>;

  "ray()"(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setVault(overrides?: Overrides): Promise<ContractTransaction>;

  "setVault()"(overrides?: Overrides): Promise<ContractTransaction>;

  spot(overrides?: CallOverrides): Promise<string>;

  "spot()"(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  wad(overrides?: CallOverrides): Promise<BigNumber>;

  "wad()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    createPosition(
      amount: BigNumberish,
      synthKey: BytesLike,
      direction_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createPosition(uint256,bytes32,uint8)"(
      amount: BigNumberish,
      synthKey: BytesLike,
      direction_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    data(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      account: string;
      direction: number;
      status: number;
      synth: string;
      initialPrice: BigNumber;
      lastPrice: BigNumber;
      tokenAmount: BigNumber;
      synthTokenAmount: BigNumber;
      created_at: BigNumber;
      updated_at: BigNumber;
      0: string;
      1: number;
      2: number;
      3: string;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: BigNumber;
    }>;

    "data(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      account: string;
      direction: number;
      status: number;
      synth: string;
      initialPrice: BigNumber;
      lastPrice: BigNumber;
      tokenAmount: BigNumber;
      synthTokenAmount: BigNumber;
      created_at: BigNumber;
      updated_at: BigNumber;
      0: string;
      1: number;
      2: number;
      3: string;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: BigNumber;
    }>;

    debtPool(overrides?: CallOverrides): Promise<string>;

    "debtPool()"(overrides?: CallOverrides): Promise<string>;

    decreasePosition(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "decreasePosition(uint256,uint256)"(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    finishPosition(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "finishPosition(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getVault(overrides?: CallOverrides): Promise<string>;

    "getVault()"(overrides?: CallOverrides): Promise<string>;

    increasePosition(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "increasePosition(uint256,uint256)"(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    rad(overrides?: CallOverrides): Promise<BigNumber>;

    "rad()"(overrides?: CallOverrides): Promise<BigNumber>;

    radiv(
      dividend: BigNumberish,
      divisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "radiv(uint256,uint256)"(
      dividend: BigNumberish,
      divisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ray(overrides?: CallOverrides): Promise<BigNumber>;

    "ray()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setVault(overrides?: CallOverrides): Promise<void>;

    "setVault()"(overrides?: CallOverrides): Promise<void>;

    spot(overrides?: CallOverrides): Promise<string>;

    "spot()"(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;

    wad(overrides?: CallOverrides): Promise<BigNumber>;

    "wad()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Create(account: null, data: null): EventFilter;

    Finish(account: null, status: null): EventFilter;

    Loser(account: null, amount: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Winner(account: null, amount: null): EventFilter;
  };

  estimateGas: {
    createPosition(
      amount: BigNumberish,
      synthKey: BytesLike,
      direction_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createPosition(uint256,bytes32,uint8)"(
      amount: BigNumberish,
      synthKey: BytesLike,
      direction_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    data(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "data(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtPool(overrides?: CallOverrides): Promise<BigNumber>;

    "debtPool()"(overrides?: CallOverrides): Promise<BigNumber>;

    decreasePosition(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decreasePosition(uint256,uint256)"(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    finishPosition(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "finishPosition(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<BigNumber>;

    "getVault()"(overrides?: CallOverrides): Promise<BigNumber>;

    increasePosition(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increasePosition(uint256,uint256)"(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    rad(overrides?: CallOverrides): Promise<BigNumber>;

    "rad()"(overrides?: CallOverrides): Promise<BigNumber>;

    radiv(
      dividend: BigNumberish,
      divisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "radiv(uint256,uint256)"(
      dividend: BigNumberish,
      divisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ray(overrides?: CallOverrides): Promise<BigNumber>;

    "ray()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setVault(overrides?: Overrides): Promise<BigNumber>;

    "setVault()"(overrides?: Overrides): Promise<BigNumber>;

    spot(overrides?: CallOverrides): Promise<BigNumber>;

    "spot()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;

    wad(overrides?: CallOverrides): Promise<BigNumber>;

    "wad()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createPosition(
      amount: BigNumberish,
      synthKey: BytesLike,
      direction_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createPosition(uint256,bytes32,uint8)"(
      amount: BigNumberish,
      synthKey: BytesLike,
      direction_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    data(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "data(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debtPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "debtPool()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreasePosition(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decreasePosition(uint256,uint256)"(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    finishPosition(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "finishPosition(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getVault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increasePosition(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increasePosition(uint256,uint256)"(
      index: BigNumberish,
      deltaAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rad(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rad()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    radiv(
      dividend: BigNumberish,
      divisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "radiv(uint256,uint256)"(
      dividend: BigNumberish,
      divisor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ray(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ray()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setVault(overrides?: Overrides): Promise<PopulatedTransaction>;

    "setVault()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    spot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "spot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wad(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wad()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}