import type { Asset, AssetsListRequestParams } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Assets.
 */
export class AssetsApi extends BaseApi {
  /**
   * Retrieves all Assets.
   */
  public list(params?: AssetsListRequestParams): Promise<ApiResponse<Asset[]>> {
    return this.httpClient.get('/assets', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }
}
