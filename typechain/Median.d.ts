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

interface MedianInterface extends ethers.utils.Interface {
  functions: {
    "addContract(address)": FunctionFragment;
    "addOracle(address)": FunctionFragment;
    "bar()": FunctionFragment;
    "bud(address)": FunctionFragment;
    "feedCreatedAt()": FunctionFragment;
    "feedType()": FunctionFragment;
    "oracle(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "peek()": FunctionFragment;
    "poke(tuple[])": FunctionFragment;
    "read()": FunctionFragment;
    "recover(uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "slot(uint8)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addContract", values: [string]): string;
  encodeFunctionData(functionFragment: "addOracle", values: [string]): string;
  encodeFunctionData(functionFragment: "bar", values?: undefined): string;
  encodeFunctionData(functionFragment: "bud", values: [string]): string;
  encodeFunctionData(
    functionFragment: "feedCreatedAt",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feedType", values?: undefined): string;
  encodeFunctionData(functionFragment: "oracle", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "peek", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poke",
    values: [
      {
        value: BigNumberish;
        timestamp: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "read", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recover",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "slot", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addOracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bud", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feedCreatedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feedType", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peek", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "slot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "LogMedianPrice(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogMedianPrice"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class Median extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MedianInterface;

  functions: {
    addContract(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addContract(address)"(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addOracle(
      newOracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addOracle(address)"(
      newOracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    bar(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "bar()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    bud(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "bud(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    feedCreatedAt(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "feedCreatedAt()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    feedType(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "feedType()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    oracle(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "oracle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    peek(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    "peek()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    poke(
      data: {
        value: BigNumberish;
        timestamp: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "poke(tuple[])"(
      data: {
        value: BigNumberish;
        timestamp: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    read(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "read()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    recover(
      feedValue_: BigNumberish,
      feedTimestamp_: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "recover(uint256,uint256,uint8,bytes32,bytes32)"(
      feedValue_: BigNumberish,
      feedTimestamp_: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    slot(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "slot(uint8)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
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
  };

  addContract(
    contractAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addContract(address)"(
    contractAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addOracle(
    newOracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addOracle(address)"(
    newOracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  bar(overrides?: CallOverrides): Promise<BigNumber>;

  "bar()"(overrides?: CallOverrides): Promise<BigNumber>;

  bud(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "bud(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  feedCreatedAt(overrides?: CallOverrides): Promise<number>;

  "feedCreatedAt()"(overrides?: CallOverrides): Promise<number>;

  feedType(overrides?: CallOverrides): Promise<string>;

  "feedType()"(overrides?: CallOverrides): Promise<string>;

  oracle(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "oracle(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  peek(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: boolean;
  }>;

  "peek()"(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: boolean;
  }>;

  poke(
    data: {
      value: BigNumberish;
      timestamp: BigNumberish;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "poke(tuple[])"(
    data: {
      value: BigNumberish;
      timestamp: BigNumberish;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  read(overrides?: CallOverrides): Promise<BigNumber>;

  "read()"(overrides?: CallOverrides): Promise<BigNumber>;

  recover(
    feedValue_: BigNumberish,
    feedTimestamp_: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "recover(uint256,uint256,uint8,bytes32,bytes32)"(
    feedValue_: BigNumberish,
    feedTimestamp_: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  slot(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "slot(uint8)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addContract(
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addContract(address)"(
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addOracle(newOracle: string, overrides?: CallOverrides): Promise<void>;

    "addOracle(address)"(
      newOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    bar(overrides?: CallOverrides): Promise<BigNumber>;

    "bar()"(overrides?: CallOverrides): Promise<BigNumber>;

    bud(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "bud(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    feedCreatedAt(overrides?: CallOverrides): Promise<number>;

    "feedCreatedAt()"(overrides?: CallOverrides): Promise<number>;

    feedType(overrides?: CallOverrides): Promise<string>;

    "feedType()"(overrides?: CallOverrides): Promise<string>;

    oracle(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "oracle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    peek(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    "peek()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    poke(
      data: {
        value: BigNumberish;
        timestamp: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "poke(tuple[])"(
      data: {
        value: BigNumberish;
        timestamp: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    read(overrides?: CallOverrides): Promise<BigNumber>;

    "read()"(overrides?: CallOverrides): Promise<BigNumber>;

    recover(
      feedValue_: BigNumberish,
      feedTimestamp_: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "recover(uint256,uint256,uint8,bytes32,bytes32)"(
      feedValue_: BigNumberish,
      feedTimestamp_: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    slot(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "slot(uint8)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    LogMedianPrice(val: null, age: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    addContract(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addContract(address)"(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addOracle(newOracle: string, overrides?: Overrides): Promise<BigNumber>;

    "addOracle(address)"(
      newOracle: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    bar(overrides?: CallOverrides): Promise<BigNumber>;

    "bar()"(overrides?: CallOverrides): Promise<BigNumber>;

    bud(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "bud(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    feedCreatedAt(overrides?: CallOverrides): Promise<BigNumber>;

    "feedCreatedAt()"(overrides?: CallOverrides): Promise<BigNumber>;

    feedType(overrides?: CallOverrides): Promise<BigNumber>;

    "feedType()"(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "oracle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    peek(overrides?: CallOverrides): Promise<BigNumber>;

    "peek()"(overrides?: CallOverrides): Promise<BigNumber>;

    poke(
      data: {
        value: BigNumberish;
        timestamp: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "poke(tuple[])"(
      data: {
        value: BigNumberish;
        timestamp: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    read(overrides?: CallOverrides): Promise<BigNumber>;

    "read()"(overrides?: CallOverrides): Promise<BigNumber>;

    recover(
      feedValue_: BigNumberish,
      feedTimestamp_: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "recover(uint256,uint256,uint8,bytes32,bytes32)"(
      feedValue_: BigNumberish,
      feedTimestamp_: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    slot(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "slot(uint8)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addContract(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addContract(address)"(
      contractAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addOracle(
      newOracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addOracle(address)"(
      newOracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    bar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bar()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bud(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bud(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feedCreatedAt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feedCreatedAt()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feedType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feedType()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracle(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "oracle(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peek(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "peek()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poke(
      data: {
        value: BigNumberish;
        timestamp: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "poke(tuple[])"(
      data: {
        value: BigNumberish;
        timestamp: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    read(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "read()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recover(
      feedValue_: BigNumberish,
      feedTimestamp_: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "recover(uint256,uint256,uint8,bytes32,bytes32)"(
      feedValue_: BigNumberish,
      feedTimestamp_: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    slot(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "slot(uint8)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
