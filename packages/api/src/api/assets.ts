import type { Asset, NetworkMode } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

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
  public list(params?: AssetsApiListParams): Promise<ApiResponse<Asset[]>> {
    return this.httpClient.get<Asset[]>('/assets', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }

  /**
   *
   */
  public symbol(params?: AssetsApiSymbolParams): Promise<ApiResponse<string[]>> {
    return this.httpClient.get<string[]>('/assets/symbols', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }
}
