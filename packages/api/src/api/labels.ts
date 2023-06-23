import type { Label, LabelCreateRequest, LabelUpdateRequest, NetworkMode } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

type LabelsApiListParams = {
  networkMode?: NetworkMode
}

/**
 *
 */
export class LabelsApi extends BaseApi {
  /**
   *
   */
  public _delete(labelId: string): Promise<ApiResponse<void>> {
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
  public list(params?: LabelsApiListParams): Promise<ApiResponse<Label[]>> {
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
