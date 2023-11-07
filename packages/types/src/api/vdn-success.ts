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
   * @type {unknown}
   * @memberof VDNSuccess
   */
  value: unknown
}
