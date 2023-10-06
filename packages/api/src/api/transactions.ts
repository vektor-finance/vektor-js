import type { Transaction, TransactionsListRequestParams } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Transactions.
 */
export class TransactionsApi extends BaseApi {
  /**
   * Retrieves all Transactions.
   */
  public list(params?: TransactionsListRequestParams): Promise<ApiResponse<Transaction[]>> {
    return this.httpClient.get(`/transactions`, { params })
  }
}
