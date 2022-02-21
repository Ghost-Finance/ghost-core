import { NetworkNames, Networks } from '../config/enums'

export const getNetworkNameFromId = (network: Networks) => {
  switch (network) {
    case Networks.MAINNET:
      return NetworkNames.MAINNET
    case Networks.KOVAN:
      return NetworkNames.KOVAN
    case Networks.ROPSTEN:
      return NetworkNames.ROPSTEN
    case Networks.RINKEBY:
      return NetworkNames.RINKEBY
    case Networks.GOERLI:
      return NetworkNames.GOERLI
    case Networks.LOCAL:
      return NetworkNames.LOCAL
    default:
      return NetworkNames.UNKNOWN
  }
}
