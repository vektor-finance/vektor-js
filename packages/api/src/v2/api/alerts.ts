import type { Alert, AlertsListParams } from '@vektor-finance/types'

import { BaseApi } from '../base'

/**
 *
 */
export class AlertsApi extends BaseApi {
  /**
   *
   */
  public delete(alertId: string) {
    return this.httpClient.delete<void>(`/alerts/${alertId}`)
  }

  /**
   *
   */
  public deleteAll() {
    return this.httpClient.delete<void>(`/alerts`)
  }

  /**
   *
   */
  public get(alertId: string) {
    return this.httpClient.get<Alert>(`/alerts/${alertId}`)
  }

  /**
   *
   */
  public list(params?: AlertsListParams) {
    return this.httpClient.get<Alert[]>(`/alerts`, { params })
  }
}
