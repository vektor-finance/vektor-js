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


import { VDNPriceValue } from './vdnprice-value';

/**
 * VXL price representation
 * @export
 * @interface VDNPrice
 */
export interface VDNPrice {
  /**
   *
   * @type {string}
   * @memberof VDNPrice
   */
  type: 'price'
  /**
   *
   * @type {VDNPriceValue}
   * @memberof VDNPrice
   */
  value: VDNPriceValue
}
