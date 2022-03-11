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

/**
 * Runtime error map
 * @export
 * @interface RuntimeError
 */
export interface RuntimeError {
  /**
   * Runtime error details
   * @type {object}
   * @memberof RuntimeError
   */
  data: Record<string, unknown>
  /**
   *
   * @type {string}
   * @memberof RuntimeError
   */
  type: RuntimeErrorTypeEnum
}

/**
 * @export
 * @enum {string}
 */
export enum RuntimeErrorTypeEnum {
  RuntimeError = 'runtime_error',
}
