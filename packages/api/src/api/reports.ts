import type { Report, ReportsListRequestParams } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Reports.
 */
export class ReportsApi extends BaseApi {
  /**
   * Retrieves all Reports.
   */
  public list(params?: ReportsListRequestParams): Promise<ApiResponse<Report[]>> {
    return this.httpClient.get(`/reports`, { params })
  }
}
