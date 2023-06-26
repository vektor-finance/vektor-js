import type { Session } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Sessions.
 */
export class SessionsApi extends BaseApi {
  /**
   * Retrieves a session with the specified ID.
   */
  public get(sessionId: string): Promise<ApiResponse<Session>> {
    return this.httpClient.get<Session>(`/sessions/${sessionId}`)
  }

  /**
   * Retrieves all sessions.
   */
  public list(): Promise<ApiResponse<Session[]>> {
    return this.httpClient.get<Session[]>('/sessions')
  }
}
