import type { Venue } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 *
 */
export class VenuesApi extends BaseApi {
  /**
   *
   */
  public list(): Promise<ApiResponse<Venue[]>> {
    return this.httpClient.get<Venue[]>('/venues')
  }

  /**
   *
   */
  public symbols(): Promise<ApiResponse<string[]>> {
    return this.httpClient.get<string[]>('/venues/symbols')
  }
}
