import type { SignatureOrTransactionHash } from '@vektor-finance/types'

import { BaseApi } from '../base'

/**
 *
 */
export class SignaturesApi extends BaseApi {
  /**
   *
   */
  public submit(signatureId: string, payload: SignatureOrTransactionHash[]) {
    return this.httpClient.post<void>(`/signatures/submit/${signatureId}`, payload)
  }
}
