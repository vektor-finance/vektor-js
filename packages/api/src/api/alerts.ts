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
  public delete(alertId: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/alerts/${alertId}`)
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
  public get(alertId: string): Promise<ApiResponse<Alert>> {
    return this.httpClient.get(`/alerts/${alertId}`)
  }

  /**
   * Retrieves all Alerts.
   */
  public list(params?: AlertsListRequestParams): Promise<ApiResponse<Alert[]>> {
    return this.httpClient.get(`/alerts`, { params })
  }
}
