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

export const ALL_VDN_ERRORS = [
    'gas_limit_reached_error',
    'gas_uint64_overflow_error',
    'insufficient_funds_error',
    'insufficient_funds_for_transfer_error',
    'intrinsic_gas_too_low_error',
    'fee_cap_very_high_error',
    'fee_cap_too_low_error',
    'tip_very_high_error',
    'tip_above_fee_cap_error',
    'nonce_too_high_error',
    'nonce_too_low_error',
    'sender_not_eoa_error',
    'runtime_error',
    'build_error',
    'broadcast_error',
    'invalid_asset_error',
    'non_positive_amount_error',
] as const

export type VDNErrorType = typeof ALL_VDN_ERRORS[number]

/**
 * VXL error representation
 * @export
 * @interface VDNError
 */
export interface VDNError {
  /**
   *
   * @type {string}
   * @memberof VDNError
   */
  type: VDNErrorType

  /**
   * Dummy value for Typescript inference
   */
  value?: undefined
}
