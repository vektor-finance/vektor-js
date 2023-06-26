import { VDNAsset, VDNAssetSymbol } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNDecimal } from './vdn-decimal'
import { VDNLabel } from './vdn-label'

/**
 * VXL balance representation
 * @export
 * @interface VDNBalance
 */
export interface VDNBalance extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNBalance
   */
  type: 'balance'
  /**
   *
   * @type {VDNBalanceValue}
   * @memberof VDNBalance
   */
  value: VDNBalanceValue
}

/**
 *
 * @export
 * @interface VDNBalanceValue
 */
export interface VDNBalanceValue {
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBalanceValue
   */
  amount: VDNDecimal
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNBalanceValue
   */
  asset: VDNAsset
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNBalanceValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNLabel}
   * @memberof VDNBalanceValue
   */
  label: VDNLabel
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNBalanceValue
   */
  quote_asset: VDNAssetSymbol
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBalanceValue
   */
  value: VDNDecimal
}
