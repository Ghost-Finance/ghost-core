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

interface SsmInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "READER_ROLE()": FunctionFragment;
    "change(address)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "hop()": FunctionFragment;
    "medianizer()": FunctionFragment;
    "pass()": FunctionFragment;
    "peek()": FunctionFragment;
    "peep()": FunctionFragment;
    "poke()": FunctionFragment;
    "read()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "start()": FunctionFragment;
    "step(uint16)": FunctionFragment;
    "stop()": FunctionFragment;
    "stopped()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "void()": FunctionFragment;
    "zzz()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "READER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "change", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "hop", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "medianizer",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pass", values?: undefined): string;
  encodeFunctionData(functionFragment: "peek", values?: undefined): string;
  encodeFunctionData(functionFragment: "peep", values?: undefined): string;
  encodeFunctionData(functionFragment: "poke", values?: undefined): string;
  encodeFunctionData(functionFragment: "read", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(functionFragment: "step", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "stop", values?: undefined): string;
  encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "void", values?: undefined): string;
  encodeFunctionData(functionFragment: "zzz", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "READER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "change", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "medianizer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pass", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peek", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peep", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "step", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "void", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zzz", data: BytesLike): Result;

  events: {
    "AddPrice(address,uint256)": EventFragment;
    "ChangeMedian(address,address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddPrice"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangeMedian"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export class Ssm extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SsmInterface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    READER_ROLE(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "READER_ROLE()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    change(
      medianizer_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "change(address)"(
      medianizer_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    hop(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "hop()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    medianizer(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "medianizer()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    pass(overrides?: CallOverrides): Promise<{
      ok: boolean;
      0: boolean;
    }>;

    "pass()"(overrides?: CallOverrides): Promise<{
      ok: boolean;
      0: boolean;
    }>;

    peek(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    "peek()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    peep(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    "peep()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    poke(overrides?: Overrides): Promise<ContractTransaction>;

    "poke()"(overrides?: Overrides): Promise<ContractTransaction>;

    read(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "read()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    start(overrides?: Overrides): Promise<ContractTransaction>;

    "start()"(overrides?: Overrides): Promise<ContractTransaction>;

    step(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "step(uint16)"(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stop(overrides?: Overrides): Promise<ContractTransaction>;

    "stop()"(overrides?: Overrides): Promise<ContractTransaction>;

    stopped(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "stopped()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    void(overrides?: Overrides): Promise<ContractTransaction>;

    "void()"(overrides?: Overrides): Promise<ContractTransaction>;

    zzz(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "zzz()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

  READER_ROLE(overrides?: CallOverrides): Promise<string>;

  "READER_ROLE()"(overrides?: CallOverrides): Promise<string>;

  change(
    medianizer_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "change(address)"(
    medianizer_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getRoleAdmin(bytes32)"(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "grantRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hop(overrides?: CallOverrides): Promise<number>;

  "hop()"(overrides?: CallOverrides): Promise<number>;

  medianizer(overrides?: CallOverrides): Promise<string>;

  "medianizer()"(overrides?: CallOverrides): Promise<string>;

  pass(overrides?: CallOverrides): Promise<boolean>;

  "pass()"(overrides?: CallOverrides): Promise<boolean>;

  peek(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: boolean;
  }>;

  "peek()"(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: boolean;
  }>;

  peep(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: boolean;
  }>;

  "peep()"(overrides?: CallOverrides): Promise<{
    0: BigNumber;
    1: boolean;
  }>;

  poke(overrides?: Overrides): Promise<ContractTransaction>;

  "poke()"(overrides?: Overrides): Promise<ContractTransaction>;

  read(overrides?: CallOverrides): Promise<BigNumber>;

  "read()"(overrides?: CallOverrides): Promise<BigNumber>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "renounceRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "revokeRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  start(overrides?: Overrides): Promise<ContractTransaction>;

  "start()"(overrides?: Overrides): Promise<ContractTransaction>;

  step(time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "step(uint16)"(
    time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stop(overrides?: Overrides): Promise<ContractTransaction>;

  "stop()"(overrides?: Overrides): Promise<ContractTransaction>;

  stopped(overrides?: CallOverrides): Promise<BigNumber>;

  "stopped()"(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  void(overrides?: Overrides): Promise<ContractTransaction>;

  "void()"(overrides?: Overrides): Promise<ContractTransaction>;

  zzz(overrides?: CallOverrides): Promise<BigNumber>;

  "zzz()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

    READER_ROLE(overrides?: CallOverrides): Promise<string>;

    "READER_ROLE()"(overrides?: CallOverrides): Promise<string>;

    change(medianizer_: string, overrides?: CallOverrides): Promise<void>;

    "change(address)"(
      medianizer_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hop(overrides?: CallOverrides): Promise<number>;

    "hop()"(overrides?: CallOverrides): Promise<number>;

    medianizer(overrides?: CallOverrides): Promise<string>;

    "medianizer()"(overrides?: CallOverrides): Promise<string>;

    pass(overrides?: CallOverrides): Promise<boolean>;

    "pass()"(overrides?: CallOverrides): Promise<boolean>;

    peek(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    "peek()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    peep(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    "peep()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    poke(overrides?: CallOverrides): Promise<void>;

    "poke()"(overrides?: CallOverrides): Promise<void>;

    read(overrides?: CallOverrides): Promise<BigNumber>;

    "read()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    start(overrides?: CallOverrides): Promise<void>;

    "start()"(overrides?: CallOverrides): Promise<void>;

    step(time: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "step(uint16)"(
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stop(overrides?: CallOverrides): Promise<void>;

    "stop()"(overrides?: CallOverrides): Promise<void>;

    stopped(overrides?: CallOverrides): Promise<BigNumber>;

    "stopped()"(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    void(overrides?: CallOverrides): Promise<void>;

    "void()"(overrides?: CallOverrides): Promise<void>;

    zzz(overrides?: CallOverrides): Promise<BigNumber>;

    "zzz()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    AddPrice(sender: null, val: null): EventFilter;

    ChangeMedian(sender: null, contractAddress: null): EventFilter;

    RoleAdminChanged(
      role: BytesLike | null,
      previousAdminRole: BytesLike | null,
      newAdminRole: BytesLike | null
    ): EventFilter;

    RoleGranted(
      role: BytesLike | null,
      account: string | null,
      sender: string | null
    ): EventFilter;

    RoleRevoked(
      role: BytesLike | null,
      account: string | null,
      sender: string | null
    ): EventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    READER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "READER_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    change(medianizer_: string, overrides?: Overrides): Promise<BigNumber>;

    "change(address)"(
      medianizer_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hop(overrides?: CallOverrides): Promise<BigNumber>;

    "hop()"(overrides?: CallOverrides): Promise<BigNumber>;

    medianizer(overrides?: CallOverrides): Promise<BigNumber>;

    "medianizer()"(overrides?: CallOverrides): Promise<BigNumber>;

    pass(overrides?: CallOverrides): Promise<BigNumber>;

    "pass()"(overrides?: CallOverrides): Promise<BigNumber>;

    peek(overrides?: CallOverrides): Promise<BigNumber>;

    "peek()"(overrides?: CallOverrides): Promise<BigNumber>;

    peep(overrides?: CallOverrides): Promise<BigNumber>;

    "peep()"(overrides?: CallOverrides): Promise<BigNumber>;

    poke(overrides?: Overrides): Promise<BigNumber>;

    "poke()"(overrides?: Overrides): Promise<BigNumber>;

    read(overrides?: CallOverrides): Promise<BigNumber>;

    "read()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    start(overrides?: Overrides): Promise<BigNumber>;

    "start()"(overrides?: Overrides): Promise<BigNumber>;

    step(time: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "step(uint16)"(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stop(overrides?: Overrides): Promise<BigNumber>;

    "stop()"(overrides?: Overrides): Promise<BigNumber>;

    stopped(overrides?: CallOverrides): Promise<BigNumber>;

    "stopped()"(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    void(overrides?: Overrides): Promise<BigNumber>;

    "void()"(overrides?: Overrides): Promise<BigNumber>;

    zzz(overrides?: CallOverrides): Promise<BigNumber>;

    "zzz()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "DEFAULT_ADMIN_ROLE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    READER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "READER_ROLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    change(
      medianizer_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "change(address)"(
      medianizer_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hop(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "hop()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    medianizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "medianizer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pass(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pass()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peek(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "peek()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peep(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "peep()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poke(overrides?: Overrides): Promise<PopulatedTransaction>;

    "poke()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    read(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "read()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    start(overrides?: Overrides): Promise<PopulatedTransaction>;

    "start()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    step(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "step(uint16)"(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stop(overrides?: Overrides): Promise<PopulatedTransaction>;

    "stop()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stopped()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    void(overrides?: Overrides): Promise<PopulatedTransaction>;

    "void()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    zzz(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "zzz()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
