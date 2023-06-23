import type { Label, LabelCreateRequest, LabelsListRequestParams, LabelUpdateRequest } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 *
 */
export class LabelsApi extends BaseApi {
  /**
   *
   */
  public delete(labelId: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/labels/${labelId}`)
  }

  /**
   *
   */
  public create(payload: LabelCreateRequest): Promise<ApiResponse<Label>> {
    return this.httpClient.post<Label>('/labels', payload)
  }

  /**
   *
   */
  public get(labelId: string): Promise<ApiResponse<Label>> {
    return this.httpClient.get<Label>(`/labels/${labelId}`)
  }

  /**
   *
   */
  public list(params?: LabelsListRequestParams): Promise<ApiResponse<Label[]>> {
    return this.httpClient.get<Label[]>('/labels', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }

  /**
   *
   */
  public update(labelId: string, payload: LabelUpdateRequest): Promise<ApiResponse<Label>> {
    return this.httpClient.put<Label>(`/labels/${labelId}`, payload)
  }

  /**
   *
   */
  public updatePartial(labelId: string, payload: LabelUpdateRequest): Promise<ApiResponse<Label>> {
    return this.httpClient.patch<Label>(`/labels/${labelId}`, payload)
  }
}
