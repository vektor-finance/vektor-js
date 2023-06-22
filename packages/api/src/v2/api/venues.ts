import type { Venue } from '../../models'
import { BaseApi } from '../base'

/**
 *
 */
export class VenuesApi extends BaseApi {
  /**
   *
   */
  public list() {
    return this.httpClient.get<Venue[]>('/venues')
  }

  /**
   *
   */
  public symbols() {
    return this.httpClient.get<string[]>('/venues/symbols')
  }
}
