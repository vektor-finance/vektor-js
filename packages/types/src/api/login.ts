export type LoginRequest = {
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

export type LoginResponse = {
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
}
