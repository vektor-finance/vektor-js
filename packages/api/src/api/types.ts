import type { StructSpec } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Types.
 */
export class TypesApi extends BaseApi {
  /**
   * Retrieves all structs.
   */
  public structsList(): Promise<ApiResponse<StructSpec[]>> {
    return this.httpClient.get<StructSpec[]>('/types/structs')
  }
  /**
   * Retrieves all VXL type actions.
   */
  public actonsList(): Promise<ApiResponse<StructSpec[]>> {
    return this.httpClient.get<StructSpec[]>('/types/actions')
  }
}
