import type { StructSpec } from '../../models'
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
