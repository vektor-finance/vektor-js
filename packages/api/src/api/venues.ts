import type { Venue } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Venues.
 */
export class VenuesApi extends BaseApi {
  /**
   * Retrieves all Venues.
   */
  public list(): Promise<ApiResponse<Venue[]>> {
    return this.httpClient.get('/venues')
  }
}
