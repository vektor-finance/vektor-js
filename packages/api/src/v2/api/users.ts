import type { LoginRequest, LoginResponse, ResetPasswordRequest } from '@vektor-finance/types'

import { BaseApi } from '../base'

/**
 *
 */
export class UsersApi extends BaseApi {
  /**
   *
   */
  public login(payload: LoginRequest) {
    return this.httpClient.post<LoginResponse>('/users/auth/log_in', payload)
  }

  /**
   *
   */
  public logout() {
    return this.httpClient.delete<void>('/users/auth/log_out')
  }

  /**
   *
   */
  public resetPassword(payload: ResetPasswordRequest) {
    return this.httpClient.post<void>('/users/reset_password', payload)
  }
}
