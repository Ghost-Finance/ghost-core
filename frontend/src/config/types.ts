import { Tokens, NetworkNames } from './enums';

export type Balances = {
  [key in Tokens]: number;
};

export type Networks = {
  [key in NetworkNames]: string;
};
