/* tslint:disable */
/* eslint-disable */
/**
 * vektor
 * Vektor API
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { StreamError } from './stream-error'
import { StreamReason } from './stream-reason'
import { StreamState } from './stream-state'
import { VDN } from './vdn'

/**
 * Properties of a Stream
 * @export
 * @interface Stream
 */
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
  last_value?: VDN
  /**
   * ISO8601 Timestamp
   * @type {string}
   * @memberof Stream
   */
  last_value_updated_at?: string
  /**
   *
   * @type {StreamReason}
   * @memberof Stream
   */
  reason: StreamReason | null
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
}
