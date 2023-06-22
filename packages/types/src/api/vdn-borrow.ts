import { VDNAsset, VDNAssetSymbol } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNDecimal } from './vdn-decimal'
import { VDNLabel } from './vdn-label'
import { VDNPercentage } from './vdn-percentage'
import { VDNVenue } from './vdn-venue'

export interface VDNBorrowAccountValue {
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBorrowAccountValue
   */
  available_borrow: VDNDecimal
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNBorrowAccountValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBorrowAccountValue
   */
  health_factor: VDNDecimal
  /**
   *
   * @type {VDNLabel}
   * @memberof VDNBorrowAccountValue
   */
  label: VDNLabel
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNBorrowAccountValue
   */
  quote_asset: VDNAssetSymbol
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBorrowAccountValue
   */
  total_collateral: VDNDecimal
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBorrowAccountValue
   */
  total_debt: VDNDecimal
  /**
   *
   * @type {VDNVenue}
   * @memberof VDNBorrowAccountValue
   */
  venue: VDNVenue
}

/**
 * VXL borrow_account representation
 * @export
 * @interface VDNBorrowAccount
 */
export interface VDNBorrowAccount extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNBorrowAccount
   */
  type: 'borrow_account'
  /**
   *
   * @type {VDNBorrowAccountValue}
   * @memberof VDNBorrowAccount
   */
  value: VDNBorrowAccountValue
}

/**
 *
 * @export
 * @interface VDNBorrowMarketValue
 */
export interface VDNBorrowMarketValue {
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNBorrowMarketValue
   */
  asset: VDNAsset
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNBorrowMarketValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNBorrowMarketValue
   */
  borrow_apy: VDNPercentage
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBorrowMarketValue
   */
  total_debt: VDNDecimal
  /**
   *
   * @type {VDNVenue}
   * @memberof VDNBorrowMarketValue
   */
  venue: VDNVenue
}

/**
 * VXL borrow_market representation
 * @export
 * @interface VDNBorrowMarket
 */
export interface VDNBorrowMarket extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNBorrowMarket
   */
  type: 'borrow_market'
  /**
   *
   * @type {VDNBorrowMarketValue}
   * @memberof VDNBorrowMarket
   */
  value: VDNBorrowMarketValue
}

/**
 *
 * @export
 * @interface VDNBorrowPositionValue
 */
export interface VDNBorrowPositionValue {
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBorrowPositionValue
   */
  debt_amount: VDNDecimal
  /**
   *
   * @type {VDNLabel}
   * @memberof VDNBorrowPositionValue
   */
  label: VDNLabel
  /**
   *
   * @type {VDNBorrowMarket}
   * @memberof VDNBorrowPositionValue
   */
  market: VDNBorrowMarket
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNBorrowPositionValue
   */
  quote_asset: VDNAssetSymbol
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNBorrowPositionValue
   */
  value: VDNDecimal
}

/**
 * VXL lend_borrowed representation
 * @export
 * @interface VDNBorrowPosition
 */
export interface VDNBorrowPosition extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNBorrowPosition
   */
  type: 'borrow_position'
  /**
   *
   * @type {VDNBorrowPositionValue}
   * @memberof VDNBorrowPosition
   */
  value: VDNBorrowPositionValue
}
