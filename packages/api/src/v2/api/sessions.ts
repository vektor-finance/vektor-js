import type { Session } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 *
 */
export class SessionsApi extends BaseApi {
  /**
   *
   */
  public get(sessionId: string): Promise<ApiResponse<Session>> {
    return this.httpClient.get<Session>(`/sessions/${sessionId}`)
  }

  /**
   *
   */
  public list(): Promise<ApiResponse<Session[]>> {
    return this.httpClient.get<Session[]>('/sessions')
  }
}
