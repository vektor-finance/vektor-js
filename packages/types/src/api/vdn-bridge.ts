import { VDNAsset } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNDecimal } from './vdn-decimal'
import { VDNFee } from './vdn-fee'
import { VDNInteger } from './vdn-integer'
import { VDNString } from './vdn-string'
import { VDNVenue } from './vdn-venue'

export interface VDNBridgeQuoteValue {
  /**
   *
   * @type {VDNFee}
   * @memberof VDNBridgeQuoteValue
   */
  network_fee_est: VDNFee
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBridgeQuoteValue
   */
  receive_amount: VDNDecimal
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNBridgeQuoteValue
   */
  receive_asset: VDNAsset
  /**
   *
   * @type {VDNInteger}
   * @memberof VDNBridgeQuoteValue
   */
  receive_time_est: VDNInteger
  /**
   *
   * @type {VDNString}
   * @memberof VDNBridgeQuoteValue
   */
  route: VDNString
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBridgeQuoteValue
   */
  send_amount: VDNDecimal
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNBridgeQuoteValue
   */
  send_asset: VDNAsset
  /**
   *
   * @type {VDNVenue}
   * @memberof VDNBridgeQuoteValue
   */
  venue: VDNVenue
}

/**
 * VXL bridge_quote representation
 * @export
 * @interface VDNBridgeQuote
 */
export interface VDNBridgeQuote extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNBridgeQuote
   */
  type: 'bridge_quote'
  /**
   *
   * @type {VDNBridgeQuoteValue}
   * @memberof VDNBridgeQuote
   */
  value: VDNBridgeQuoteValue
}
