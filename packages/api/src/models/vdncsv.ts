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
import { VDNCSVValue } from './vdncsvvalue'

/**
 * VXL csv representation
 * @export
 * @interface VDNCSV
 */
export interface VDNCSV extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNCSV
   */
  type: 'csv'
  /**
   *
   * @type {VDNCSVValue}
   * @memberof VDNCSV
   */
  value: VDNCSVValue
}
