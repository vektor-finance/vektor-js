import { VDNBase } from './vdn-base'
import { VDNString } from './vdn-string'

/**
 *
 * @export
 * @interface VDNURLValue
 */
export interface VDNURLValue {
  /**
   *
   * @type {VDNString}
   * @memberof VDNURLValue
   */
  address: VDNString
}

/**
 * VXL url representation
 * @export
 * @interface VDNURL
 */
export interface VDNURL extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNURL
   */
  type: 'url'
  /**
   *
   * @type {VDNURLValue}
   * @memberof VDNURL
   */
  value: VDNURLValue
}
