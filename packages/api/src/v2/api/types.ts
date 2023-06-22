import type { StructSpec } from '@vektor-finance/types'

import { BaseApi } from '../base'

/**
 *
 */
export class TypesApi extends BaseApi {
  /**
   *
   */
  public structsList() {
    return this.httpClient.get<StructSpec[]>('/types/structs')
  }
}
