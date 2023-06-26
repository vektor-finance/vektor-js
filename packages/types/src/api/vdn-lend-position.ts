import { VDNAssetSymbol } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNBoolean } from './vdn-boolean'
import { VDNDecimal } from './vdn-decimal'
import { VDNLabel } from './vdn-label'
import { VDNLendMarket } from './vdn-lend-market'

export interface VDNLendPositionValue {
  /**
   *
   * @type {VDNBoolean}
   * @memberof VDNLendPositionValue
   */
  collateral_enabled: VDNBoolean
  /**
   *
   * @type {VDNLabel}
   * @memberof VDNLendPositionValue
   */
  label: VDNLabel
  /**
   *
   * @type {VDNLendMarket}
   * @memberof VDNLendPositionValue
   */
  market: VDNLendMarket
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNLendPositionValue
   */
  quote_asset: VDNAssetSymbol
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLendPositionValue
   */
  supplied_amount: VDNDecimal
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLendPositionValue
   */
  value: VDNDecimal
}

/**
 * VXL lend_supplied representation
 * @export
 * @interface VDNLendPosition
 */
export interface VDNLendPosition extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNLendPosition
   */
  type: 'lend_position'
  /**
   *
   * @type {VDNLendPositionValue}
   * @memberof VDNLendPosition
   */
  value: VDNLendPositionValue
}
