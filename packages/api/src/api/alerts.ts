import type { Alert, AlertsListRequestParams } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Alerts.
 */
export class AlertsApi extends BaseApi {
  /**
   * Deletes an Alert with the specified ID.
   */
  public delete(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/alerts/${id}`)
  }

  /**
   * Deletes all Alerts.
   */
  public deleteAll(): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/alerts`)
  }

  /**
   * Retrieves an Alert with the specified ID.
   */
  public get(id: string): Promise<ApiResponse<Alert>> {
    return this.httpClient.get(`/alerts/${id}`)
  }

  /**
   * Retrieves all Alerts.
   */
  public list(params?: AlertsListRequestParams): Promise<ApiResponse<Alert[]>> {
    return this.httpClient.get(`/alerts`, { params })
  }
}
