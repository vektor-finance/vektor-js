import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNString } from './vdn-string'

/**
 *
 * @export
 * @interface VDNVenueValue
 */
export interface VDNVenueValue {
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNVenueValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNString}
   * @memberof VDNVenueValue
   */
  name: VDNString
  /**
   *
   * @type {VDNVenueSymbol}
   * @memberof VDNVenueValue
   */
  symbol: VDNVenueSymbol
  /**
   *
   * @type {VDNVenueType}
   * @memberof VDNVenueValue
   */
  type: VDNVenueType
  /**
   *
   * @type {VDNString}
   * @memberof VDNVenueValue
   */
  website: VDNString
}

/**
 * VXL venue_type representation
 * @export
 * @interface VDNVenueType
 */
export interface VDNVenueType extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNVenueType
   */
  type: 'venue_type'
  /**
   *
   * @type {string}
   * @memberof VDNVenueType
   */
  value: string
}

/**
 * VXL venue_symbol representation
 * @export
 * @interface VDNVenueSymbol
 */
export interface VDNVenueSymbol extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNVenueSymbol
   */
  type: 'venue_symbol'
  /**
   *
   * @type {string}
   * @memberof VDNVenueSymbol
   */
  value: string
}

/**
 * VXL venue representation
 * @export
 * @interface VDNVenue
 */
export interface VDNVenue extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNVenue
   */
  type: 'venue'
  /**
   *
   * @type {VDNVenueValue}
   * @memberof VDNVenue
   */
  value: VDNVenueValue
}
