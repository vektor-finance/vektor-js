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
import { VDNFunctionSpecValue } from './vdnfunction-spec-value'

/**
 * VXL function_spec representation
 * @export
 * @interface VDNFunctionSpec
 */
export interface VDNFunctionSpec extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNFunctionSpec
   */
  type: 'function_spec'
  /**
   *
   * @type {VDNFunctionSpecValue}
   * @memberof VDNFunctionSpec
   */
  value: VDNFunctionSpecValue
}
