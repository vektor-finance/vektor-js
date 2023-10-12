import { NetworkMode } from './network'

export interface Report {
  /**
   * ID
   * @type {string}
   * @memberof Report
   */
  id: string
  /**
   * Short ID
   * @type {string}
   * @memberof Report
   */
  short_id: string
  /**
   * Created at
   * @type {string}
   * @memberof Report
   */
  created_at: string
  /**
   * Name
   * @type {string}
   * @memberof Report
   */
  name: string | null
  /**
   * Period
   * @type {string}
   * @memberof Report
   */
  period: string
  /**
   * Delivery expression
   * @type {string}
   * @memberof Report
   */
  delivery_expression: string
  /**
   * Running state
   * @type {boolean}
   * @memberof Report
   */
  running: boolean
  /**
   * Last executed at
   * @type {string}
   * @memberof Report
   */
  last_executed_at: string | null
  /**
   * Last executed status
   * @type {boolean}
   * @memberof Report
   */
  last_executed_status: boolean | null
  /**
   * Network mode
   * @type {NetworkMode}
   * @memberof Report
   */
  network_mode: NetworkMode
}

export interface ReportsListRequestParams {
  canceled?: boolean
  network_mode?: NetworkMode
}
