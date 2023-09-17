import type { Stream, StreamPatchParams } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Streams.
 */
export class StreamsApi extends BaseApi {
  /**
   * Deletes a Stream with the specified ID.
   */
  public delete(streamId: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/streams/${streamId}`)
  }

  /**
   * Deletes all Streams.
   */
  public deleteAll(): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/streams`)
  }

  /**
   * Retrieves a Stream with the specified ID.
   */
  public get(streamId: string): Promise<ApiResponse<Stream>> {
    return this.httpClient.get(`/streams/${streamId}`)
  }

  /**
   * Retrieves all Streams.
   */
  public list(): Promise<ApiResponse<Stream[]>> {
    return this.httpClient.get(`/streams`)
  }

  /**
   * Updates a Stream with the specified ID.
   */
  public update(streamId: string, payload: StreamPatchParams): Promise<ApiResponse<void>> {
    return this.httpClient.patch(`/streams/${streamId}`, payload)
  }
}
