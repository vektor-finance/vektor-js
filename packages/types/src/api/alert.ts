export interface AlertsListRequestParams {
  triggered?: boolean
}

export type AlertState = 'running' | 'triggered' | 'delivered'

export interface Alert {
  /**
   * ISO8601 Timestamp
   * @type {string}
   * @memberof Alert
   */
  created_at: string
  /**
   * Alert VXL expression
   * @type {string}
   * @memberof Alert
   */
  expression: string
  /**
   * Alert id
   * @type {string}
   * @memberof Alert
   */
  id: string
  /**
   * Alert short id
   * @type {string}
   * @memberof Alert
   */
  short_id: string
  /**
   * Alert name
   * @type {string}
   * @memberof Alert
   */
  name: string
  /**
   *
   * @type {AlertState}
   * @memberof Alert
   */
  state: AlertState
  /**
   * ISO8601 Timestamp
   * @type {string}
   * @memberof Alert
   */
  state_updated_at: string
  /**
   * ISO8601 Timestamp
   * @type {string}
   * @memberof Alert
   */
  updated_at: string
}
