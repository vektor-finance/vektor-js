import type { StructSpec, VXLTypeActions } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Types.
 */
export class TypesApi extends BaseApi {
  /**
   * Retrieves all Structs.
   */
  public structsList(): Promise<ApiResponse<StructSpec[]>> {
    return this.httpClient.get('/types/structs')
  }
  /**
   * Retrieves all VXL Type Actions.
   */
  public actionsList(): Promise<ApiResponse<VXLTypeActions>> {
    return this.httpClient.get<VXLTypeActions>('/types/actions')
  }
}
