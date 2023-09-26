import type { SignatureOrTransactionHash } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Signatures.
 */
export class SignaturesApi extends BaseApi {
  /**
   * Submits a Signature or a Transaction Hash.
   */
  public submit(id: string, payload: SignatureOrTransactionHash[]): Promise<ApiResponse<void>> {
    return this.httpClient.post(`/signatures/submit/${id}`, payload)
  }
}
