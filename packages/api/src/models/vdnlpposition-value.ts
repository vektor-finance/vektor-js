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

import { VDNAssetSymbol } from './vdnasset-symbol'
import { VDNDecimal } from './vdndecimal'
import { VDNLPPool } from './vdnlppool'
import { VDNLabel } from './vdnlabel'
import { VDNList } from './vdnlist'
import { VDNPercentage } from './vdnpercentage'
import { VDNNone } from './vdnnone'
import { VDNLPPoolRange } from './vdnlppool-range'

/**
 *
 * @export
 * @interface VDNLPPositionValue
 */
export interface VDNLPPositionValue {
  /**
   *
   * @type {VDNList}
   * @memberof VDNLPPositionValue
   */
  amounts: VDNList
  /**
   *
   * @type {VDNLabel}
   * @memberof VDNLPPositionValue
   */
  label: VDNLabel
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNLPPositionValue
   */
  ownership: VDNPercentage
  /**
   *
   * @type {VDNLPPool}
   * @memberof VDNLPPositionValue
   */
  pool: VDNLPPool
  /**
   *
   * @type {VDNAssetSymbol}
   * @memberof VDNLPPositionValue
   */
  quote_asset: VDNAssetSymbol
  /**
   *
   * @type {VDNLPQuoteValueRange}
   * @memberof VDNLPPositionValue
   */
  range: VDNLPPoolRange | VDNNone
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLPPositionValue
   */
  value: VDNDecimal
}
