import type {
  VXLHistoryRequestParams,
  VXLHistoryResponse,
  VXLSubmitRequest,
  VXLSubmitResponse,
  VXLValidateRequest,
  VXLValidateResponse,
} from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with VXL.
 */
export class VxlApi extends BaseApi {
  /**
   * Submits a VXL request.
   */
  public submit(payload: VXLSubmitRequest): Promise<ApiResponse<VXLSubmitResponse>> {
    return this.httpClient.post('/vxl/submit', payload)
  }

  /**
   * Validates a VXL request.
   */
  public validate(payload: VXLValidateRequest): Promise<ApiResponse<VXLValidateResponse>> {
    return this.httpClient.post('/vxl/validate', payload)
  }

  /**
   * Returns VXL entries history.
   */
  public history(params?: VXLHistoryRequestParams): Promise<ApiResponse<VXLHistoryResponse>> {
    return this.httpClient.get('/vxl/history', { params })
  }
}
