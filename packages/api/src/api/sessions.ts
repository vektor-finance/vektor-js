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
  public get(id: string): Promise<ApiResponse<Session>> {
    return this.httpClient.get(`/sessions/${id}`)
  }

  /**
   * Retrieves all sessions.
   */
  public list(): Promise<ApiResponse<Session[]>> {
    return this.httpClient.get('/sessions')
  }
}
