import { VDNBase } from './vdn-base'

/**
 * VXL datetime representation
 * @export
 * @interface VDNDateTime
 */
export interface VDNDateTime extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNDateTime
   */
  type: 'date_time'
  /**
   *
   * @type {string}
   * @memberof VDNDateTime
   */
  value: string
}
