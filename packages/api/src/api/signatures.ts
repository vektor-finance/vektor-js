import type { SignatureOrTransactionHash } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 *
 */
export class SignaturesApi extends BaseApi {
  /**
   *
   */
  public submit(signatureId: string, payload: SignatureOrTransactionHash[]): Promise<ApiResponse<void>> {
    return this.httpClient.post<void>(`/signatures/submit/${signatureId}`, payload)
  }
}
