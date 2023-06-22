import { VDNAPY } from './vdn-apy'
import { VDNAssetSymbol } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNBoolean } from './vdn-boolean'
import { VDNDecimal } from './vdn-decimal'
import { VDNList } from './vdn-list'
import { VDNPercentage } from './vdn-percentage'
import { VDNString } from './vdn-string'
import { VDNVenue } from './vdn-venue'

/**
 *
 * @export
 * @interface VDNLPPoolValue
 */
export interface VDNLPPoolValue {
  /**
   *
   * @type {VDNAPY}
   * @memberof VDNLPPoolValue
   */
  apys: VDNAPY
  /**
   *
   * @type {VDNList}
   * @memberof VDNLPPoolValue
   */
  assets: VDNList
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNLPPoolValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLPPoolValue
   */
  liquidity: VDNDecimal
  /**
   *
   * @type {VDNString}
   * @memberof VDNLPPoolValue
   */
  name: VDNString
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNLPPoolValue
   */
  pool_fee: VDNPercentage
  /**
   *
   * @type {VDNLPPoolType}
   * @memberof VDNLPPoolValue
   */
  pool_type: VDNLPPoolType
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNLPPoolValue
   */
  quote_asset: VDNAssetSymbol
  /**
   *
   * @type {VDNList}
   * @memberof VDNLPPoolValue
   */
  reserve_amounts: VDNList
  /**
   *
   * @type {VDNList}
   * @memberof VDNLPPoolValue
   */
  reserve_ratios: VDNList
  /**
   *
   * @type {VDNList}
   * @memberof VDNLPPoolValue
   */
  target_weights: VDNList
  /**
   *
   * @type {VDNVenue}
   * @memberof VDNLPPoolValue
   */
  venue: VDNVenue
}

/**
 * VXL lp_pool_type representation
 * @export
 * @interface VDNLPPoolType
 */
export interface VDNLPPoolType extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNLPPoolType
   */
  type: 'lp_pool_type'
  /**
   *
   * @type {string}
   * @memberof VDNLPPoolType
   */
  value: string
}

/**
 * VXL lp_pool_range representation
 * @export
 * @interface VDNLPPoolRange
 */
export interface VDNLPPoolRange extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNLPPoolRange
   */
  type: 'lp_pool_range'
  /**
   *
   * @type {VDNLPPoolRangeValue}
   * @memberof VDNLPPoolRange
   */
  value: VDNLPPoolRangeValue
}

export interface VDNLPPoolRangeValue {
  /**
   *
   * @type {VDNBoolean}
   * @memberof VDNLPPoolRangeValue
   */
  in_range: VDNBoolean
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLPPoolRangeValue
   */
  lower: VDNDecimal
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLPPoolRangeValue
   */
  price: VDNDecimal
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLPPoolRangeValue
   */
  upper: VDNDecimal
}

/**
 * VXL lp_pool representation
 * @export
 * @interface VDNLPPool
 */
export interface VDNLPPool extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNLPPool
   */
  type: 'lp_pool'
  /**
   *
   * @type {VDNLPPoolValue}
   * @memberof VDNLPPool
   */
  value: VDNLPPoolValue
}
