import { VDNAssetSymbol } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNDecimal } from './vdn-decimal'
import { VDNLabel } from './vdn-label'
import { VDNList } from './vdn-list'
import { VDNVenue } from './vdn-venue'

/**
 * VXL position representation
 * @export
 * @interface VDNPosition
 */
export interface VDNPosition extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNPosition
   */
  type: 'position'
  /**
   *
   * @type {VDNPositionValue}
   * @memberof VDNPosition
   */
  value: VDNPositionValue
}

/**
 *
 * @export
 * @interface VDNPositionValue
 */
export interface VDNPositionValue {
  /**
   *
   * @type {VDNList}
   * @memberof VDNPositionValue
   */
  amounts: VDNList
  /**
   *
   * @type {VDNList}
   * @memberof VDNPositionValue
   */
  assets: VDNList
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNPositionValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNLabel}
   * @memberof VDNPositionValue
   */
  label: VDNLabel
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNPositionValue
   */
  quote_asset: VDNAssetSymbol
  /**
   *
   * @type {VDNPositionType}
   * @memberof VDNPositionValue
   */
  type: VDNPositionType
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNPositionValue
   */
  value: VDNDecimal
  /**
   *
   * @type {VDNVenue}
   * @memberof VDNPositionValue
   */
  venue: VDNVenue
}

/**
 * VXL position_type representation
 * @export
 * @interface VDNPositionType
 */
export interface VDNPositionType extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNPositionType
   */
  type: 'position_type'
  /**
   *
   * @type {string}
   * @memberof VDNPositionType
   */
  value: string
}
