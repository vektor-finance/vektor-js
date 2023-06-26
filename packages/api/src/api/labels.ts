import type { Label, LabelCreateRequest, LabelsListRequestParams, LabelUpdateRequest } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Labels.
 */
export class LabelsApi extends BaseApi {
  /**
   * Deletes a label with the specified ID.
   */
  public delete(labelId: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/labels/${labelId}`)
  }

  /**
   * Creates a new label.
   */
  public create(payload: LabelCreateRequest): Promise<ApiResponse<Label>> {
    return this.httpClient.post<Label>('/labels', payload)
  }

  /**
   * Retrieves a label with the specified ID.
   */
  public get(labelId: string): Promise<ApiResponse<Label>> {
    return this.httpClient.get<Label>(`/labels/${labelId}`)
  }

  /**
   * Retrieves all labels.
   */
  public list(params?: LabelsListRequestParams): Promise<ApiResponse<Label[]>> {
    return this.httpClient.get<Label[]>('/labels', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }

  /**
   * Updates a label with the specified ID.
   */
  public update(labelId: string, payload: LabelUpdateRequest): Promise<ApiResponse<Label>> {
    return this.httpClient.put<Label>(`/labels/${labelId}`, payload)
  }

  /**
   * Updates a label partially with the specified ID.
   */
  public updatePartial(labelId: string, payload: LabelUpdateRequest): Promise<ApiResponse<Label>> {
    return this.httpClient.patch<Label>(`/labels/${labelId}`, payload)
  }
}
