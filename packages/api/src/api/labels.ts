import type { Label, LabelCreateRequest, LabelsListRequestParams, LabelUpdateRequest } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Labels.
 */
export class LabelsApi extends BaseApi {
  /**
   * Deletes a Label with the specified ID.
   */
  public delete(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/labels/${id}`)
  }

  /**
   * Creates a new Label.
   */
  public create(payload: LabelCreateRequest): Promise<ApiResponse<Label>> {
    return this.httpClient.post('/labels', payload)
  }

  /**
   * Retrieves a Label with the specified ID.
   */
  public get(id: string): Promise<ApiResponse<Label>> {
    return this.httpClient.get(`/labels/${id}`)
  }

  /**
   * Retrieves all Labels.
   */
  public list(params?: LabelsListRequestParams): Promise<ApiResponse<Label[]>> {
    return this.httpClient.get('/labels', {
      params: {
        network_mode: params?.networkMode,
      },
    })
  }

  /**
   * Updates a Label with the specified ID.
   */
  public update(id: string, payload: LabelUpdateRequest): Promise<ApiResponse<Label>> {
    return this.httpClient.put(`/labels/${id}`, payload)
  }

  /**
   * Updates a Label partially with the specified ID.
   */
  public updatePartial(id: string, payload: LabelUpdateRequest): Promise<ApiResponse<Label>> {
    return this.httpClient.patch(`/labels/${id}`, payload)
  }
}
