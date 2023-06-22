import type { SignatureOrTransactionHash } from '../../models'
import { BaseApi } from '../base'

/**
 *
 */
export class SignaturesApi extends BaseApi {
  /**
   *
   */
  public submit(signatureId: string, signatureOrTransactionHash: SignatureOrTransactionHash[]) {
    return this.httpClient.post<void>(`/signatures/submit/${signatureId}`, signatureOrTransactionHash)
  }
}
