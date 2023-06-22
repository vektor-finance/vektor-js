import { VDNBase } from './vdn-base'
import { VDNQuoteValue } from './vdn-quote-value'

/**
 * VXL sell_quote representation
 * @export
 * @interface VDNSellQuote
 */
export interface VDNSellQuote extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNSellQuote
   */
  type: 'sell_quote'
  /**
   *
   * @type {VDNQuoteValue}
   * @memberof VDNSellQuote
   */
  value: VDNQuoteValue
}
