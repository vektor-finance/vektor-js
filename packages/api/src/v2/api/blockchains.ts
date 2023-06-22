import type { NetworkID, NetworkMode } from '../../models'
import { BaseApi } from '../base'

type BlockchainsApiListParams = {
  networkMode?: NetworkMode
}

type BlockchainsApiSymbolsParams = {
  networkMode?: NetworkMode
}

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
