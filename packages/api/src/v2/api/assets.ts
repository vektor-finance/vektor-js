import type { Asset, NetworkMode } from '@vektor-finance/types'

import { BaseApi } from '../base'

type AssetsApiListParams = {
  networkMode?: NetworkMode
}

type AssetsApiSymbolParams = {
  networkMode?: NetworkMode
}

/**
 *
 */
export class AssetsApi extends BaseApi {
  /**
   *
   */
  public list(params?: AssetsApiListParams) {
    return this.httpClient.get<Asset[]>('/assets', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }

  /**
   *
   */
  public symbol(params?: AssetsApiSymbolParams) {
    return this.httpClient.get<string[]>('/assets/symbols', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }
}
