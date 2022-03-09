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

import { VXLEvalResult } from './vxleval-result'

/**
 * Response for a VXL submission
 * @export
 * @interface VXLSubmitResponse
 */
export interface VXLSubmitResponse {
  /**
   * Array with all responses for a VXL submission
   * @type {Array<VXLEvalResult>}
   * @memberof VXLSubmitResponse
   */
  results: Array<VXLEvalResult>
}
