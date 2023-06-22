import { VDNAsset } from './vdn-asset'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNDecimal } from './vdn-decimal'
import { VDNVenue } from './vdn-venue'

export interface VDNQuoteValue {
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNBuyQuoteValue
   */
  blockchain: VDNBlockchain
  /**
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNQuoteValue
   */
  receive_amount: VDNDecimal
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNQuoteValue
   */
  receive_asset: VDNAsset
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNQuoteValue
   */
  spend_amount: VDNDecimal
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNQuoteValue
   */
  spend_asset: VDNAsset
  /**
   *
   * @type {VDNVenue}
   * @memberof VDNQuoteValue
   */
  venue: VDNVenue
}
