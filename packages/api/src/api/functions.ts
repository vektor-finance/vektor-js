import type { FunctionSpec } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 *
 */
export class FunctionsApi extends BaseApi {
  /**
   *
   */
  public list(): Promise<ApiResponse<FunctionSpec[]>> {
    return this.httpClient.get<FunctionSpec[]>('/functions')
  }
}
