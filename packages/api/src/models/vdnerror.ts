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

import { VDN } from "./vdn"

export const ALL_VDN_ERRORS = [
  'division_by_zero_error',
  'gas_limit_reached_error',
  'gas_uint64_overflow_error',
  'high_price_impact_error',
  'insufficient_borrowing_collateral_error',
  'insufficient_funds_error',
  'insufficient_funds_for_transfer_error',
  'intrinsic_gas_too_low_error',
  'invalid_asset_error',
  'invalid_asset_set_error',
  'invalid_list_length_error',
  'invalid_slippage_error',
  'invalid_venue_error',
  'market_not_found_error',
  'max_fee_per_gas_less_than_block_base_fee_error',
  'max_fee_per_gas_overflow_error',
  'max_priority_fee_per_gas_higher_than_max_fee_per_gas_error',
  'max_priority_fee_per_gas_overflow_error',
  'minimum_borrow_limit_error',
  'negative_amount_error',
  'no_route_error',
  'non_positive_amount_error',
  'nonce_too_high_error',
  'nonce_too_low_error',
  'not_found_error',
  'position_not_found_error',
  'sender_not_eoa_error',
  'transfer_amount_exceeds_allowance_error',
  'unexpected_error',
  'unsupported_asset_error',
  'venue_liquidity_insufficient_error',
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
   * Error values
   */
  value: Record<string, VDN>
}
