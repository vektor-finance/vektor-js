import { VDNAsset, VDNAssetSymbol } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNDecimal } from './vdn-decimal'

/**
 *
 * @export
 * @interface VDNFeeValue
 */
export interface VDNFeeValue {
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNFeeValue
   */
  amount: VDNDecimal
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNFeeValue
   */
  asset: VDNAsset
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNFeeValue
   */
  cost: VDNDecimal
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNFeeValue
   */
  quote_asset: VDNAssetSymbol
}

/**
 * VXL fee representation
 * @export
 * @interface VDNFee
 */
export interface VDNFee extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNFee
   */
  type: 'fee'
  /**
   *
   * @type {VDNFeeValue}
   * @memberof VDNFee
   */
  value: VDNFeeValue
}
