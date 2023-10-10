import type { BlockchainsListRequestParams, NetworkID } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Blockchains.
 */
export class BlockchainsApi extends BaseApi {
  /**
   * Retrieves all Blockchains.
   */
  public list(params?: BlockchainsListRequestParams): Promise<ApiResponse<NetworkID[]>> {
    return this.httpClient.get('/blockchains', { params })
  }
}
