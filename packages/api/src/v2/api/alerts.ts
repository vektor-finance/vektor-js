import type { Alert } from '../../models/alert'
import { BaseApi } from '../base'

type AlertsListParams = {
  triggered?: boolean
}

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
