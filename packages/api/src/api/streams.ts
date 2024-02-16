import type { Stream, StreamsListRequestParams, StreamUpdateRequest } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with streams.
 */
export class StreamsApi extends BaseApi {
  /**
   * Retrieves all Streams.
   */
  public list(params?: StreamsListRequestParams): Promise<ApiResponse<Stream[]>> {
    return this.httpClient.get('/streams', { params })
  }

  /**
   * Retrieves a Stream with the specified ID.
   */
  public get(id: string): Promise<ApiResponse<Stream>> {
    return this.httpClient.get(`/streams/${id}`)
  }

  /**
   * Deletes a Stream with the specified ID.
   */
  public delete(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/streams/${id}`)
  }

  /**
   * Updates a Stream partially with the specified ID.
   */
  public updatePartial(id: string, payload: StreamUpdateRequest): Promise<ApiResponse<Stream>> {
    return this.httpClient.patch(`/streams/${id}`, payload)
  }
}
