import { VDNBase } from './vdn-base'

/**
 * VXL boolean representation
 * @export
 * @interface VDNBoolean
 */
export interface VDNBoolean extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNBoolean
   */
  type: 'boolean'
  /**
   *
   * @type {boolean}
   * @memberof VDNBoolean
   */
  value: boolean
}
