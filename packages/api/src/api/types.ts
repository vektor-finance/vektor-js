import type { StructSpec, VXLTypeActions, VXLTypeProtocol } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Types.
 */
export class TypesApi extends BaseApi {
  /**
   * Retrieves all Structs.
   */
  public structs(): Promise<ApiResponse<StructSpec[]>> {
    return this.httpClient.get('/types/structs')
  }

  /**
   * Retrieves all VXL Type Actions.
   */
  public actions(): Promise<ApiResponse<VXLTypeActions>> {
    return this.httpClient.get<VXLTypeActions>('/types/actions')
  }

  /**
   * Retrieves all VXL Type Protocols.
   */
  public protocols(): Promise<ApiResponse<VXLTypeProtocol[]>> {
    return this.httpClient.get<VXLTypeProtocol[]>('/types/protocols')
  }
}
