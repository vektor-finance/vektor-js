import type { Alert, AlertsListRequestParams } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Alerts.
 */
export class AlertsApi extends BaseApi {
  /**
   * Deletes an alert with the specified ID.
   */
  public delete(alertId: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/alerts/${alertId}`)
  }

  /**
   * Deletes all alerts.
   */
  public deleteAll(): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/alerts`)
  }

  /**
   * Retrieves an alert with the specified ID.
   */
  public get(alertId: string): Promise<ApiResponse<Alert>> {
    return this.httpClient.get<Alert>(`/alerts/${alertId}`)
  }

  /**
   * Retrieves all alerts.
   */
  public list(params?: AlertsListRequestParams): Promise<ApiResponse<Alert[]>> {
    return this.httpClient.get<Alert[]>(`/alerts`, { params })
  }
}
