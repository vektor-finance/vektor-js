import { VDNAsset } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNDecimal } from './vdn-decimal'
import { VDNFee } from './vdn-fee'
import { VDNQuoteValue } from './vdn-quote-value'
import { VDNVenue } from './vdn-venue'

export interface VDNBuyQuoteValue {
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNBuyQuoteValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNFee}
   * @memberof VDNBuyQuoteValue
   */
  network_fee_est: VDNFee
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBuyQuoteValue
   */
  receive_amount: VDNDecimal
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNBuyQuoteValue
   */
  receive_asset: VDNAsset
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBuyQuoteValue
   */
  spend_amount: VDNDecimal
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNBuyQuoteValue
   */
  spend_asset: VDNAsset
  /**
   *
   * @type {VDNVenue}
   * @memberof VDNBuyQuoteValue
   */
  venue: VDNVenue
}

/**
 * VXL buy_quote representation
 * @export
 * @interface VDNBuyQuote
 */
export interface VDNBuyQuote extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNBuyQuote
   */
  type: 'buy_quote'
  /**
   *
   * @type {VDNQuoteValue}
   * @memberof VDNBuyQuote
   */
  value: VDNQuoteValue
}
