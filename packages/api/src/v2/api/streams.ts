import type { Stream, StreamPatchParams } from '@vektor-finance/types'

import { BaseApi } from '../base'

/**
 *
 */
export class StreamsApi extends BaseApi {
  /**
   *
   */
  public _delete(streamId: string) {
    return this.httpClient.delete<void>(`/streams/${streamId}`)
  }

  /**
   *
   */
  public deleteAll() {
    return this.httpClient.delete<void>(`/streams`)
  }

  /**
   *
   */
  public get(streamId: string) {
    return this.httpClient.get<Stream>(`/streams/${streamId}`)
  }

  /**
   *
   */
  public list() {
    return this.httpClient.get<Stream[]>(`/streams`)
  }

  /**
   *
   */
  public update(streamId: string, payload: StreamPatchParams) {
    return this.httpClient.put<void>(`/streams/${streamId}`, payload)
  }
}
