import { VDNAssetSymbol } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNDecimal } from './vdn-decimal'
import { VDNLabel } from './vdn-label'
import { VDNList } from './vdn-list'
import { VDNLPPool, VDNLPPoolRange } from './vdn-lp-pool'
import { VDNNone } from './vdn-none'
import { VDNPercentage } from './vdn-percentage'

/**
 *
 * @export
 * @interface VDNLPQuoteValue
 */
export interface VDNLPQuoteValue {
  /**
   *
   * @type {VDNList}
   * @memberof VDNLPQuoteValue
   */
  amounts: VDNList
  /**
   *
   * @type {VDNList}
   * @memberof VDNLPQuoteValue
   */
  amounts_delta: VDNList
  /**
   *
   * @type {VDNTransactionValueLabel}
   * @memberof VDNLPQuoteValue
   */
  label: VDNLabel | VDNNone
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNLPQuoteValue
   */
  ownership: VDNPercentage
  /**
   *
   * @type {VDNLPPool}
   * @memberof VDNLPQuoteValue
   */
  pool: VDNLPPool
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNLPQuoteValue
   */
  quote_asset: VDNAssetSymbol
  /**
   *
   * @type {VDNLPPoolRange}
   * @memberof VDNLPQuoteValue
   */
  range: VDNLPPoolRange | VDNNone
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLPQuoteValue
   */
  value: VDNDecimal
}

/**
 * VXL lp_quote representation
 * @export
 * @interface VDNLPQuote
 */
export interface VDNLPQuote extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNLPQuote
   */
  type: 'lp_quote'
  /**
   *
   * @type {VDNLPQuoteValue}
   * @memberof VDNLPQuote
   */
  value: VDNLPQuoteValue
}
