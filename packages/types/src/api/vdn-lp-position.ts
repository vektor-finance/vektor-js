import { VDNAssetSymbol } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNDecimal } from './vdn-decimal'
import { VDNLabel } from './vdn-label'
import { VDNList } from './vdn-list'
import { VDNLPPool, VDNLPPoolRange } from './vdn-lp-pool'
import { VDNNone } from './vdn-none'
import { VDNPercentage } from './vdn-percentage'

/**
 * VXL lp_position representation
 * @export
 * @interface VDNLPPosition
 */
export interface VDNLPPosition extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNLPPosition
   */
  type: 'lp_position'
  /**
   *
   * @type {VDNLPPositionValue}
   * @memberof VDNLPPosition
   */
  value: VDNLPPositionValue
}

export interface VDNLPPositionValue {
  /**
   *
   * @type {VDNList}
   * @memberof VDNLPPositionValue
   */
  amounts: VDNList
  /**
   *
   * @type {VDNLabel}
   * @memberof VDNLPPositionValue
   */
  label: VDNLabel
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNLPPositionValue
   */
  ownership: VDNPercentage
  /**
   *
   * @type {VDNLPPool}
   * @memberof VDNLPPositionValue
   */
  pool: VDNLPPool
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNLPPositionValue
   */
  quote_asset: VDNAssetSymbol
  /**
   *
   * @type {VDNLPQuoteValueRange}
   * @memberof VDNLPPositionValue
   */
  range: VDNLPPoolRange | VDNNone
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLPPositionValue
   */
  value: VDNDecimal
}
