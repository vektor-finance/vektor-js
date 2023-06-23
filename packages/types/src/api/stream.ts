import { RuntimeError, RuntimeSignatureMismatchError } from './error'
import { VDN } from './vdn'
import { VDNError } from './vdn-error'

export type StreamState = 'running' | 'paused'

/**
 * Object grouping pagination parameters.
 * @export
 * @interface StreamPagination
 */
export interface StreamPagination {
  /**
   * Maximum number of entries to be returned (max = 250)
   * @type {number}
   * @memberof StreamPagination
   */
  limit: number
  /**
   * Initial position from which to take entries (0-indexed).
   * @type {number}
   * @memberof StreamPagination
   */
  offset: number
  /**
   * The total number of entries the list holds.
   * @type {number}
   * @memberof StreamPagination
   */
  total_count: number | null
}

export type StreamError = RuntimeError | RuntimeSignatureMismatchError | VDNError

export type StreamClosureReason = 'user' | 'error'

export interface Stream {
  /**
   * ISO8601 Timestamp
   * @type {string}
   * @memberof Stream
   */
  created_at: string
  /**
   *
   * @type {StreamError}
   * @memberof Stream
   */
  error: StreamError | null
  /**
   * Universally unique identifier - UUID V4
   * @type {string}
   * @memberof Stream
   */
  id: string
  /**
   *
   * @type {VDN}
   * @memberof Stream
   */
  last_value: VDN | null
  /**
   * ISO8601 Timestamp
   * @type {string}
   * @memberof Stream
   */
  last_value_updated_at: string
  /**
   *
   * @type {StreamPagination}
   * @memberof Stream
   */
  pagination: StreamPagination | null
  /**
   *
   * @type {StreamClosureReason}
   * @memberof Stream
   */
  reason?: StreamClosureReason | null
  /**
   *
   * @type {StreamState}
   * @memberof Stream
   */
  state: StreamState
  /**
   * How many times the stream has been updated
   * @type {number}
   * @memberof Stream
   */
  update_count: number
  /**
   * ISO8601 Timestamp
   * @type {string}
   * @memberof Stream
   */
  updated_at: string
  /**
   * VXL statement that created the stream
   * @type {string}
   * @memberof Stream
   */
  vxl: string
}

export interface StreamPatchParams {
  /**
   * Maximum number of entries to be returned (max = 250)
   * @type {number}
   * @memberof StreamPatchParams
   */
  limit?: number
  /**
   * Initial position from which to take entries (0-indexed).
   * @type {number}
   * @memberof StreamPatchParams
   */
  offset?: number
  /**
   *
   * @type {StreamState}
   * @memberof StreamPatchParams
   */
  state?: StreamState
}
