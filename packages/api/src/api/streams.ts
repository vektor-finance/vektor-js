import type { Stream, StreamPatchParams } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 *
 */
export class StreamsApi extends BaseApi {
  /**
   *
   */
  public delete(streamId: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/streams/${streamId}`)
  }

  /**
   *
   */
  public deleteAll(): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/streams`)
  }

  /**
   *
   */
  public get(streamId: string): Promise<ApiResponse<Stream>> {
    return this.httpClient.get<Stream>(`/streams/${streamId}`)
  }

  /**
   *
   */
  public list(): Promise<ApiResponse<Stream[]>> {
    return this.httpClient.get<Stream[]>(`/streams`)
  }

  /**
   *
   */
  public update(streamId: string, payload: StreamPatchParams): Promise<ApiResponse<void>> {
    return this.httpClient.put<void>(`/streams/${streamId}`, payload)
  }
}
