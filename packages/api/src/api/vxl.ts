import type {
  VXLSubmitRequest,
  VXLSubmitResponse,
  VXLValidateRequest,
  VXLValidateResponse,
} from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 *
 */
export class VxlApi extends BaseApi {
  /**
   *
   */
  public submit(payload: VXLSubmitRequest): Promise<ApiResponse<VXLSubmitResponse>> {
    return this.httpClient.post<VXLSubmitResponse>('/vxl/submit', payload)
  }

  /**
   *
   */
  public validate(payload: VXLValidateRequest): Promise<ApiResponse<VXLValidateResponse>> {
    return this.httpClient.post<VXLValidateResponse>('/vxl/validate', payload)
  }
}
