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

import { VDNBorrowRateValue } from './vdnborrow-rate-value'

/**
 * VXL borrow_quote representation
 * @export
 * @interface VDNBorrowRate
 */
export interface VDNBorrowRate {
  /**
   *
   * @type {string}
   * @memberof VDNBorrowRate
   */
  type: 'borrow_rate'
  /**
   *
   * @type {VDNBorrowRateValue}
   * @memberof VDNBorrowRate
   */
  value: VDNBorrowRateValue
}