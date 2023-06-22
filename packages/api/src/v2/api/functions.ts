import type { FunctionSpec } from '../../models'
import { BaseApi } from '../base'

/**
 *
 */
export class FunctionsApi extends BaseApi {
  /**
   *
   */
  public list() {
    return this.httpClient.get<FunctionSpec[]>('/functions')
  }
}
