import { VDNAddress } from './vdn-address'
import { VDNBase } from './vdn-base'
import { VDNDateTime } from './vdn-date-time'
import { VDNString } from './vdn-string'

/**
 *
 * @export
 * @interface VDNLabelValue
 */
export interface VDNLabelValue {
  /**
   *
   * @type {VDNAddress}
   * @memberof VDNLabelValue
   */
  address: VDNAddress
  /**
   *
   * @type {VDNDateTime}
   * @memberof VDNLabelValue
   */
  created_at: VDNDateTime
  /**
   *
   * @type {VDNString}
   * @memberof VDNLabelValue
   */
  name: VDNString
}

/**
 * VXL label representation
 * @export
 * @interface VDNLabel
 */
export interface VDNLabel extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNLabel
   */
  type: 'label'
  /**
   *
   * @type {VDNLabelValue}
   * @memberof VDNLabel
   */
  value: VDNLabelValue
}
