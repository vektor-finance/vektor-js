import type { SignatureOrTransactionHash } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Signatures.
 */
export class SignaturesApi extends BaseApi {
  /**
   * Submits a signature or a transaction hash.
   */
  public submit(signatureId: string, payload: SignatureOrTransactionHash[]): Promise<ApiResponse<void>> {
    return this.httpClient.post<void>(`/signatures/submit/${signatureId}`, payload)
  }
}
