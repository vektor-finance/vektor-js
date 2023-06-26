import { VDNBase } from './vdn-base'
import { VDNDateTime } from './vdn-date-time'
import { VDNNone } from './vdn-none'
import { VDNString } from './vdn-string'

/**
 *
 * @export
 * @interface VDNAlertValue
 */
export interface VDNAlertValue {
  /**
   *
   * @type {VDNDateTime}
   * @memberof VDNAlertValue
   */
  created_at: VDNDateTime
  /**
   *
   * @type {VDNString}
   * @memberof VDNAlertValue
   */
  expression: VDNString
  /**
   *
   * @type {VDNString}
   * @memberof VDNAlertValue
   */
  id: VDNString
  /**
   *
   * @type {VDNAlertValueName}
   * @memberof VDNAlertValue
   */
  name: VDNString | VDNNone
  /**
   *
   * @type {VDNAlertState}
   * @memberof VDNAlertValue
   */
  state: VDNAlertState
  /**
   *
   * @type {VDNDateTime}
   * @memberof VDNAlertValue
   */
  state_updated_at: VDNDateTime
}

/**
 * VXL alert_state representation
 * @export
 * @interface VDNAlertState
 */
export interface VDNAlertState extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNAlertState
   */
  type: 'alert_state'
  /**
   *
   * @type {string}
   * @memberof VDNAlertState
   */
  value: 'running' | 'triggered' | 'delivered'
}

/**
 * VXL alert representation
 * @export
 * @interface VDNAlert
 */
export interface VDNAlert extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNAlert
   */
  type: 'alert'
  /**
   *
   * @type {VDNAlertValue}
   * @memberof VDNAlert
   */
  value: VDNAlertValue
}
