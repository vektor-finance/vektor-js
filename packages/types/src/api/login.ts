export interface LoginRequest {
  /**
   * User\'s email address
   * @type {string}
   * @memberof LoginRequest
   */
  email: string
  /**
   * User\'s password
   * @type {string}
   * @memberof LoginRequest
   */
  password: string
}

export interface LoginResponse {
  /**
   * User\'s authentication token
   * @type {string}
   * @memberof LoginResponse
   */
  token: string
  /**
   * Universally unique identifier - UUID V4
   * @type {string}
   * @memberof LoginResponse
   */
  user_id: string

  /**
   * SHA256 hash of the user\'s id & Intercom secret key
   * @type {string}
   * @memberof LoginResponse
   */
  intercom_user_hash: string | null
}
