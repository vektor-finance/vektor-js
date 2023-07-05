import type { Stream, StreamPatchParams } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Streams.
 */
export class StreamsApi extends BaseApi {
  /**
   * Deletes a stream with the specified ID.
   */
  public delete(streamId: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/streams/${streamId}`)
  }

  /**
   * Deletes all streams.
   */
  public deleteAll(): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/streams`)
  }

  /**
   * Retrieves a stream with the specified ID.
   */
  public get(streamId: string): Promise<ApiResponse<Stream>> {
    return this.httpClient.get<Stream>(`/streams/${streamId}`)
  }

  /**
   * Retrieves all streams.
   */
  public list(): Promise<ApiResponse<Stream[]>> {
    return this.httpClient.get<Stream[]>(`/streams`)
  }

  /**
   * Updates a stream with the specified ID.
   */
  public update(streamId: string, payload: StreamPatchParams): Promise<ApiResponse<void>> {
    return this.httpClient.patch<void>(`/streams/${streamId}`, payload)
  }
}
