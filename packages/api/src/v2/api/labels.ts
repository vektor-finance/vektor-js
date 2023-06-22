import type { Label, LabelCreateRequest, LabelUpdateRequest, NetworkMode } from '../../models'
import { BaseApi } from '../base'

/**
 *
 */
export class LabelsApi extends BaseApi {
  /**
   *
   */
  public _delete(labelId: string) {
    return this.httpClient.delete<void>(`/labels/${labelId}`)
  }

  /**
   *
   */
  public create(payload: LabelCreateRequest) {
    return this.httpClient.post<Label>('/labels', payload)
  }

  /**
   *
   */
  public get(labelId: string) {
    return this.httpClient.get<Label>(`/labels/${labelId}`)
  }

  /**
   *
   */
  public list(networkMode: NetworkMode) {
    return this.httpClient.get<Label[]>('/labels', {
      params: {
        network_mode: networkMode,
      },
    })
  }

  /**
   *
   */
  public update(labelId: string, payload: LabelUpdateRequest) {
    return this.httpClient.put<Label>(`/labels/${labelId}`, payload) // TODO: Check if should use the patch endpoint
  }
}
