import type { BlockchainsApiListParams, BlockchainsApiSymbolsParams, NetworkID } from '@vektor-finance/types'

import { BaseApi } from '../base'

/**
 *
 */
export class BlockchainsApi extends BaseApi {
  /**
   *
   */
  public list(params?: BlockchainsApiListParams) {
    return this.httpClient.get<NetworkID[]>('/blockchains', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }

  /**
   *
   */
  public symbols(params?: BlockchainsApiSymbolsParams) {
    return this.httpClient.get<string[]>('/blockchains/symbols', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }
}
