import { VDNBase } from './vdn-base'

/**
 * VXL percentage representation
 * @export
 * @interface VDNPercentage
 */
export interface VDNPercentage extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNPercentage
   */
  type: 'percentage'
  /**
   *
   * @type {string}
   * @memberof VDNPercentage
   */
  value: string
}
