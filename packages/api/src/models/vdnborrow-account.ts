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

import { VDNBase } from './vdnbase'
import { VDNBorrowAccountValue } from './vdnborrow-account-value'

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
