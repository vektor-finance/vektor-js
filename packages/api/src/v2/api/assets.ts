import { NetworkMode } from '../../models'
import { BaseApi } from '../base'

/**
 *
 */
export class AssetsApi extends BaseApi {
  /**
   *
   */
  public list(networkMode?: NetworkMode) {
    return this.httpClient.get('/assets', {
      params: {
        network_mode: networkMode,
      },
    })
  }

  /**
   *
   */
  public symbol(networkMode?: NetworkMode) {
    return this.httpClient.get('/assets/symbol', {
      params: {
        network_mode: networkMode,
      },
    })
  }
}
