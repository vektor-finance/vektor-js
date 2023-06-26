import type { FunctionSpec } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Functions.
 */
export class FunctionsApi extends BaseApi {
  /**
   * Retrieves all functions.
   */
  public list(): Promise<ApiResponse<FunctionSpec[]>> {
    return this.httpClient.get<FunctionSpec[]>('/functions')
  }
}
