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

import { VDNBlockchainValue } from './vdnblockchain-value'

/**
 * VXL blockchain representation
 * @export
 * @interface VDNBlockchain
 */
export interface VDNBlockchain {
  /**
   *
   * @type {string}
   * @memberof VDNBlockchain
   */
  type: 'blockchain'
  /**
   *
   * @type {VDNBlockchainValue}
   * @memberof VDNBlockchain
   */
  value: VDNBlockchainValue
}
