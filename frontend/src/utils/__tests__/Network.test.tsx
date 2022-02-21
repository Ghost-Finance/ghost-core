import 'react'
import { NetworkNames, Networks } from '../../config/enums'
import { getNetworkNameFromId } from '../Network'

describe('Network', () => {
  describe('getNetworkNameFromId()', () => {
    it('returns correct network name for kovan', () => {
      expect(getNetworkNameFromId(Networks.KOVAN)).toEqual(NetworkNames.KOVAN)
    })
    it('returns correct network name for mainnet', () => {
      expect(getNetworkNameFromId(Networks.MAINNET)).toEqual(
        NetworkNames.MAINNET
      )
    })
  })
})
