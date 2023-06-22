import type {
  VXLSubmitRequest,
  VXLSubmitResponse,
  VXLValidateRequest,
  VXLValidateResponse,
} from '@vektor-finance/types'

import { BaseApi } from '../base'

/**
 *
 */
export class VxlApi extends BaseApi {
  /**
   *
   */
  public submit(payload: VXLSubmitRequest) {
    return this.httpClient.post<VXLSubmitResponse>('/vxl/submit', payload)
  }

  /**
   *
   */
  public validate(payload: VXLValidateRequest) {
    return this.httpClient.post<VXLValidateResponse>('/vxl/validate', payload)
  }
}
