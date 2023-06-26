import type { LoginRequest, LoginResponse, ResetPasswordRequest } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 *
 */
export class UsersApi extends BaseApi {
  /**
   * Performs a login operation for the user.
   */
  public login(payload: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return this.httpClient.post<LoginResponse>('/users/auth/log_in', payload)
  }

  /**
   * Performs a logout operation for the user.
   */
  public logout(): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>('/users/auth/log_out')
  }

  /**
   * Initiates a password reset operation for the user.
   */
  public resetPassword(payload: ResetPasswordRequest): Promise<ApiResponse<void>> {
    return this.httpClient.post<void>('/users/reset_password', payload)
  }
}
