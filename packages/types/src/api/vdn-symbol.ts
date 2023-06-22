import { VDNBase } from './vdn-base'

/**
 * VXL symbol representation
 * @export
 * @interface VDNSymbol
 */
export interface VDNSymbol extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNSymbol
   */
  type: 'symbol'
  /**
   *
   * @type {string}
   * @memberof VDNSymbol
   */
  value: string
}
