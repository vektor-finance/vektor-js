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

import { VDNBlockchain } from './vdnblockchain'
import { VDNDateTime } from './vdndate-time'
import { VDNLabel } from './vdnlabel'
import { VDNNone } from './vdnnone'
import { VDNString } from './vdnstring'
import { VDNTransactionState } from './vdntransaction-state'
import { VDNTransactionType } from './vdntransaction-type'
import { VDNVXL } from './vdnvxl'

/**
 *
 * @export
 * @interface VDNTransactionValue
 */
export interface VDNTransactionValue {
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNTransactionValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNTransactionValueExplorer}
   * @memberof VDNTransactionValue
   */
  explorer: VDNString | VDNNone
  /**
   *
   * @type {VDNVXL}
   * @memberof VDNTransactionValue
   */
  expression: VDNVXL
  /**
   *
   * @type {VDNTransactionValueExplorer}
   * @memberof VDNTransactionValue
   */
  hash: VDNString | VDNNone
  /**
   *
   * @type {VDNString}
   * @memberof VDNTransactionValue
   */
  id: VDNString
  /**
   *
   * @type {VDNTransactionValueLabel}
   * @memberof VDNTransactionValue
   */
  label: VDNLabel | VDNNone
  /**
   *
   * @type {VDNTransactionState}
   * @memberof VDNTransactionValue
   */
  state: VDNTransactionState
  /**
   *
   * @type {VDNDateTime}
   * @memberof VDNTransactionValue
   */
  state_updated_at: VDNDateTime
  /**
   *
   * @type {VDNTransactionType}
   * @memberof VDNTransactionValue
   */
  type: VDNTransactionType
}
