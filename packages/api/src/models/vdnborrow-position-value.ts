/* tslint:disable */
/* eslint-disable */
/**
 * vektor
 * Vektor API
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { VDNAsset } from './vdnasset'
import { VDNBlockchain } from './vdnblockchain'
import { VDNDecimal } from './vdndecimal'
import { VDNLabel } from './vdnlabel'
import { VDNPercent } from './vdnpercentage'
import { VDNVenue } from './vdnvenue'

/**
 *
 * @export
 * @interface VDNBorrowPositionValue
 */
export interface VDNBorrowPositionValue {
  /**
   *
   * @type {VDNAsset}
   * @memberof VDNBorrowPositionValue
   */
  asset: VDNAsset
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNBorrowPositionValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNPercent}
   * @memberof VDNBorrowPositionValue
   */
  borrow_apy: VDNPercent
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
   * @type {VDNVenue}
   * @memberof VDNBorrowPositionValue
   */
  venue: VDNVenue
}
