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

import { VDN } from './vdn'
import { VXLListType } from './vxllist-type'

/**
 * VDN list representation
 * @export
 * @interface VDNList
 */
export interface VDNList {
  /**
   *
   * @type {VXLListType}
   * @memberof VDNList
   */
  type: VXLListType
  /**
   *
   * @type {Array<VDN>}
   * @memberof VDNList
   */
  value: Array<VDN>
}
