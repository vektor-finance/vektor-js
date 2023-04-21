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
import { VDNTransactionHashValue } from './vdntransaction-hash-value'

/**
 * VXL transaction_hash representation
 * @export
 * @interface VDNTransactionHash
 */
export interface VDNTransactionHash extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNTransactionHash
   */
  type: 'transaction_hash'
  /**
   *
   * @type {VDNTransactionHashValue}
   * @memberof VDNTransactionHash
   */
  value: VDNTransactionHashValue
}
