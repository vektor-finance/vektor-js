import { Asset, NetworkMode } from '../../models'
import { BaseApi } from '../base'

/**
 *
 */
export class AssetsApi extends BaseApi {
  /**
   *
   */
  public list(networkMode?: NetworkMode) {
    return this.httpClient.get<Asset[]>('/assets', {
      params: {
        network_mode: networkMode,
      },
    })
  }

  /**
   *
   */
  public symbol(networkMode?: NetworkMode) {
    return this.httpClient.get<string[]>('/assets/symbols', {
      params: {
        network_mode: networkMode,
      },
    })
  }
}
