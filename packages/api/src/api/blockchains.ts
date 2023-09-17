import type { BlockchainsListRequestParams, BlockchainsSymbolsRequestParams, NetworkID } from '@vektor-finance/types'

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
    return this.httpClient.get<NetworkID[]>('/blockchains', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }

  /**
   * Retrieves all Blockchain symbols.
   */
  public symbols(params?: BlockchainsSymbolsRequestParams): Promise<ApiResponse<string[]>> {
    return this.httpClient.get<string[]>('/blockchains/symbols', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }
}
