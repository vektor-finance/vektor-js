import type { Session } from '@vektor-finance/types'

import { BaseApi } from '../base'

/**
 *
 */
export class SessionsApi extends BaseApi {
  /**
   *
   */
  public get(sessionId: string) {
    return this.httpClient.get<Session>(`/sessions/${sessionId}`)
  }

  /**
   *
   */
  public list() {
    return this.httpClient.get<Session[]>('/sessions')
  }
}
