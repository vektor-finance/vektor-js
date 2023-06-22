import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNDateTime } from './vdn-date-time'
import { VDNLabel } from './vdn-label'
import { VDNNone } from './vdn-none'
import { VDNString } from './vdn-string'
import { VDNVXL } from './vdn-vxl'

/**
 *
 * @export
 * @interface VDNTransactionHashValue
 */
export interface VDNTransactionHashValue {
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNTransactionHashValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNString}
   * @memberof VDNTransactionHashValue
   */
  explorer_url: VDNString
  /**
   *
   * @type {VDNString}
   * @memberof VDNTransactionHashValue
   */
  hash: VDNString
}

/**
 * VXL transaction_hash representation
 * @export
 * @interface VDNTransactionHash
 */
export interface VDNTransactionHash extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNTransactionHash
   */
  type: 'transaction_hash'
  /**
   *
   * @type {VDNTransactionHashValue}
   * @memberof VDNTransactionHash
   */
  value: VDNTransactionHashValue
}

/**
 * VXL transaction_state representation
 * @export
 * @interface VDNTransactionState
 */
export interface VDNTransactionState extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNTransactionState
   */
  type: 'transaction_state'
  /**
   *
   * @type {string}
   * @memberof VDNTransactionState
   */
  value: string
}

/**
 * VXL transaction_type representation
 * @export
 * @interface VDNTransactionType
 */
export interface VDNTransactionType extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNTransactionType
   */
  type: 'transaction_type'
  /**
   *
   * @type {string}
   * @memberof VDNTransactionType
   */
  value: string
}

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

/**
 * VXL transaction representation
 * @export
 * @interface VDNTransaction
 */
export interface VDNTransaction extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNTransaction
   */
  type: 'transaction'
  /**
   *
   * @type {VDNTransactionValue}
   * @memberof VDNTransaction
   */
  value: VDNTransactionValue
}
