import { VDNBase } from './vdn-base'

/**
 * VXL decimal representation
 * @export
 * @interface VDNDecimal
 */
export interface VDNDecimal extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNDecimal
   */
  type: 'decimal'
  /**
   *
   * @type {string}
   * @memberof VDNDecimal
   */
  value: string
}
