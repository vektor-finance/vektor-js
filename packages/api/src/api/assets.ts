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
 * An API Client for interacting with Assets.
 */
export class AssetsApi extends BaseApi {
  /**
   * Retrieves all Assets.
   */
  public list(params?: AssetsApiListParams): Promise<ApiResponse<Asset[]>> {
    return this.httpClient.get<Asset[]>('/assets', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }

  /**
   * Retrieves all Asset symbols.
   */
  public symbol(params?: AssetsApiSymbolParams): Promise<ApiResponse<string[]>> {
    return this.httpClient.get<string[]>('/assets/symbols', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }
}
