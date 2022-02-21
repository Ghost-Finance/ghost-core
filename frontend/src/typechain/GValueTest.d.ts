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

interface GValueTestInterface extends ethers.utils.Interface {
  functions: {
    "peek()": FunctionFragment;
    "poke(uint256)": FunctionFragment;
    "read()": FunctionFragment;
    "void()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "peek", values?: undefined): string;
  encodeFunctionData(functionFragment: "poke", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "read", values?: undefined): string;
  encodeFunctionData(functionFragment: "void", values?: undefined): string;

  decodeFunctionResult(functionFragment: "peek", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "void", data: BytesLike): Result;

  events: {};
}

export class GValueTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GValueTestInterface;

  functions: {
    peek(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    "peek()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    poke(
      wut: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "poke(uint256)"(
      wut: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    read(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "read()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    void(overrides?: Overrides): Promise<ContractTransaction>;

    "void()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  peek(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: boolean;
  }>;

  "peek()"(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: boolean;
  }>;

  poke(wut: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "poke(uint256)"(
    wut: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  read(overrides?: CallOverrides): Promise<BigNumber>;

  "read()"(overrides?: CallOverrides): Promise<BigNumber>;

  void(overrides?: Overrides): Promise<ContractTransaction>;

  "void()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    peek(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    "peek()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    poke(wut: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "poke(uint256)"(
      wut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    read(overrides?: CallOverrides): Promise<BigNumber>;

    "read()"(overrides?: CallOverrides): Promise<BigNumber>;

    void(overrides?: CallOverrides): Promise<void>;

    "void()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    peek(overrides?: CallOverrides): Promise<BigNumber>;

    "peek()"(overrides?: CallOverrides): Promise<BigNumber>;

    poke(wut: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "poke(uint256)"(
      wut: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    read(overrides?: CallOverrides): Promise<BigNumber>;

    "read()"(overrides?: CallOverrides): Promise<BigNumber>;

    void(overrides?: Overrides): Promise<BigNumber>;

    "void()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    peek(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "peek()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poke(
      wut: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "poke(uint256)"(
      wut: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    read(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "read()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    void(overrides?: Overrides): Promise<PopulatedTransaction>;

    "void()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
