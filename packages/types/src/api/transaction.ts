import { Label } from './label'
import { NetworkID, NetworkMode } from './network'

export type TransactionState = 'broadcasted'

export interface Transaction {
  /**
   * Transaction id
   * @type {string}
   * @memberof Transaction
   */
  id: string
  /**
   * Transaction short id
   * @type {string}
   * @memberof Transaction
   */
  short_id: string
  /**
   * ISO8601 Timestamp
   * @type {string}
   * @memberof Transaction
   */
  created_at: string
  /**
   * ISO8601 Timestamp
   * @type {string}
   * @memberof Transaction
   */
  state_updated_at: string
  /**
   * Transaction VXL expression
   * @type {string}
   * @memberof Transaction
   */
  expression: string | null
  /**
   * Transaction hash
   * @type {string}
   * @memberof Transaction
   */
  hash: string
  /**
   *
   * @type {TransactionState}
   * @memberof Transaction
   */
  state: TransactionState
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  type: string
  /**
   *
   * @type {NetworkID}
   * @memberof Transaction
   */
  network_id: NetworkID
  /**
   *
   * @type {Label}
   * @memberof Transaction
   */
  label: Label
}

export interface TransactionsListRequestParams {
  networkMode?: NetworkMode
}
