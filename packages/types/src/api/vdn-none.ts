import { VDNBase } from './vdn-base'

/**
 * VXL None representation
 * @export
 * @interface VDNNone
 */
export interface VDNNone extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNNone
   */
  type: 'none'
  /**
   *
   * @type {any}
   * @memberof VDNNone
   */
  value?: undefined
}
