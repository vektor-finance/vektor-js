import { VDNAddress } from './vdn-address'
import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNBoolean } from './vdn-boolean'
import { VDNInteger } from './vdn-integer'
import { VDNNone } from './vdn-none'
import { VDNString } from './vdn-string'

/**
 * VXL asset_symbol representation
 * @export
 * @interface VDNAssetSymbol
 */
export interface VDNAssetSymbol extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNAssetSymbol
   */
  type: 'asset_symbol'
  /**
   *
   * @type {string}
   * @memberof VDNAssetSymbol
   */
  value: string
}

/**
 * VXL asset representation
 * @export
 * @interface VDNAsset
 */
export interface VDNAsset extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNAsset
   */
  type: 'asset'
  /**
   *
   * @type {VDNAssetValue}
   * @memberof VDNAsset
   */
  value: VDNAssetValue
}

/**
 *
 * @export
 * @interface VDNAssetValue
 */
export interface VDNAssetValue {
  /**
   *
   * @type {VDNAssetValueAddress}
   * @memberof VDNAssetValue
   */
  address: VDNAddress | VDNNone
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNAssetValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNInteger}
   * @memberof VDNAssetValue
   */
  decimals: VDNInteger
  /**
   *
   * @type {VDNString}
   * @memberof VDNAssetValue
   */
  name: VDNString
  /**
   *
   * @type {VDNBoolean}
   * @memberof VDNAssetValue
   */
  registered: VDNBoolean
  /**
   *
   * @type {VDNAssetValueSymbol}
   * @memberof VDNAssetValue
   */
  symbol: VDNAssetSymbol | VDNString
}
