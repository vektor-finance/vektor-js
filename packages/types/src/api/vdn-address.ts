import { VDNBase } from './vdn-base'

/**
 * VXL blockchain address representation
 * @export
 * @interface VDNAddress
 */
export interface VDNAddress extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNAddress
   */
  type: 'address'
  /**
   *
   * @type {string}
   * @memberof VDNAddress
   */
  value: string
}
