import { NetworkMode } from '../../models'
import { BaseApi } from '../base'

/**
 *
 */
export class BlockchainsApi extends BaseApi {
  /**
   *
   */
  public list(networkMode?: NetworkMode) {
    return this.httpClient.get('/blockchains', {
      params: {
        network_mode: networkMode,
      },
    })
  }

  /**
   *
   */
  public symbols(networkMode?: NetworkMode) {
    return this.httpClient.get('/blockchains/symbols', {
      params: {
        network_mode: networkMode,
      },
    })
  }
}
