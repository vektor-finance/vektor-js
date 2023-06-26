import { VDNAssetSymbol } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNDecimal } from './vdn-decimal'
import { VDNNone } from './vdn-none'
import { VDNPercentage } from './vdn-percentage'

/**
 *
 * @export
 * @interface VDNPriceValue
 */
export interface VDNPriceValue {
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNPriceValue
   */
  asset: VDNAssetSymbol
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNPriceValue
   */
  change_1h: VDNPercentage | VDNNone
  /**
   *
   * @type {VDNPriceValueChange1h}
   * @memberof VDNPriceValue
   */
  change_1y: VDNPercentage | VDNNone
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNPriceValue
   */
  change_24h: VDNPercentage | VDNNone
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNPriceValue
   */
  change_30d: VDNPercentage | VDNNone
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNPriceValue
   */
  change_7d: VDNPercentage | VDNNone
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNPriceValue
   */
  market_cap: VDNDecimal | VDNNone
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNPriceValue
   */
  price: VDNDecimal
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNPriceValue
   */
  quote_asset: VDNAssetSymbol
}

/**
 * VXL price representation
 * @export
 * @interface VDNPrice
 */
export interface VDNPrice extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNPrice
   */
  type: 'price'
  /**
   *
   * @type {VDNPriceValue}
   * @memberof VDNPrice
   */
  value: VDNPriceValue
}
