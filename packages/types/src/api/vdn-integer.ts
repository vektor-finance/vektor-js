import { VDNBase } from './vdn-base'

/**
 * VXL integer representation
 * @export
 * @interface VDNInteger
 */
export interface VDNInteger extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNInteger
   */
  type: 'integer'
  /**
   *
   * @type {string}
   * @memberof VDNInteger
   */
  value: string
}
