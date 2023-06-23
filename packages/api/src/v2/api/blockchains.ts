import type { BlockchainsListRequestParams, BlockchainsSymbolsRequestParams, NetworkID } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 *
 */
export class BlockchainsApi extends BaseApi {
  /**
   *
   */
  public list(params?: BlockchainsListRequestParams): Promise<ApiResponse<NetworkID[]>> {
    return this.httpClient.get<NetworkID[]>('/blockchains', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }

  /**
   *
   */
  public symbols(params?: BlockchainsSymbolsRequestParams): Promise<ApiResponse<string[]>> {
    return this.httpClient.get<string[]>('/blockchains/symbols', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }
}
