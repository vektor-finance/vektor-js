import type { StructSpec } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 *
 */
export class TypesApi extends BaseApi {
  /**
   *
   */
  public structsList(): Promise<ApiResponse<StructSpec[]>> {
    return this.httpClient.get<StructSpec[]>('/types/structs')
  }
}
