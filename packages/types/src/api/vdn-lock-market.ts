import { VDNAsset } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNVenue } from './vdn-venue'

/**
 *
 * @export
 * @interface VDNLockMarketValue
 */
export interface VDNLockMarketValue {
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNLockMarketValue
   */
  asset: VDNAsset
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNLockMarketValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNVenue}
   * @memberof VDNLockMarketValue
   */
  venue: VDNVenue
}

/**
 * VXL lock_market representation
 * @export
 * @interface VDNLockMarketValue
 */
export interface VDNLockMarket extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNLockMarket
   */
  type: 'lock_market'
  /**
   *
   * @type {VDNLockMarketValue}
   * @memberof VDNLockMarket
   */
  value: VDNLockMarketValue
}
