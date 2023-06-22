import { VDNBase } from './vdn-base'

/**
 * VXL Success representation
 * @export
 * @interface VDNSuccess
 */
export interface VDNSuccess extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNSuccess
   */
  type: 'success'
  /**
   *
   * @type {any}
   * @memberof VDNSuccess
   */
  value: any
}
