import { VDNAsset } from './vdn-asset'
import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNDecimal } from './vdn-decimal'
import { VDNPercentage } from './vdn-percentage'
import { VDNVenue } from './vdn-venue'

/**
 *
 * @export
 * @interface VDNLendMarketValue
 */
export interface VDNLendMarketValue {
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNLendMarketValue
   */
  asset: VDNAsset
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNLendMarketValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNLendMarketValue
   */
  supply_apy: VDNPercentage
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLendMarketValue
   */
  total_supply: VDNDecimal
  /**
   *
   * @type {VDNVenue}
   * @memberof VDNLendMarketValue
   */
  venue: VDNVenue
}

/**
 * VXL lend_market representation
 * @export
 * @interface VDNLendMarket
 */
export interface VDNLendMarket extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNLendMarket
   */
  type: 'lend_market'
  /**
   *
   * @type {VDNLendMarketValue}
   * @memberof VDNLendMarket
   */
  value: VDNLendMarketValue
}
