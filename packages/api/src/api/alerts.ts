import type { Alert, AlertsListRequestParams } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 *
 */
export class AlertsApi extends BaseApi {
  /**
   *
   */
  public delete(alertId: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/alerts/${alertId}`)
  }

  /**
   *
   */
  public deleteAll(): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/alerts`)
  }

  /**
   *
   */
  public get(alertId: string): Promise<ApiResponse<Alert>> {
    return this.httpClient.get<Alert>(`/alerts/${alertId}`)
  }

  /**
   *
   */
  public list(params?: AlertsListRequestParams): Promise<ApiResponse<Alert[]>> {
    return this.httpClient.get<Alert[]>(`/alerts`, { params })
  }
}
