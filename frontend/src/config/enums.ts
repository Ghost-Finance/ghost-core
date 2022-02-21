export enum ConnectState {
  UNAVAILABLE = 'Metamask not installed',
  DISCONNECTED = 'Disconnected',
  CONNECTED = 'Connected',
  ADDRESS_NOT_CONTRACT = 'Could not connect to Token contract',
  WRONG_NETWORK = 'Wrong network',
}

export enum Networks {
  MAINNET = '0x1',
  KOVAN = '0x2a',
  ROPSTEN = '0x3',
  RINKEBY = '0x4',
  GOERLI = '0x5',
  LOCAL = '0x539',
}

export enum NetworkNames {
  MAINNET = 'MAINNET',
  KOVAN = 'KOVAN',
  ROPSTEN = 'ROPSTEN',
  RINKEBY = 'RINKEBY',
  GOERLI = 'GOERLI',
  LOCAL = 'LOCALHOST:9545',
  UNKNOWN = 'UNKNOWN NETWORK',
}

export enum Tokens {
  // ETH = 'ETH',
  DAI = 'DAI',
  UBE = 'UBE',
}

export enum ChainError {
  REJECTED = 4001,
}

export enum ContractHelper {
  DECIMALPADDING = 100,
}
