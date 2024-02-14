import { UnionType } from './union-type'
import { VDNGenericType, VDNType } from './vdn'
import { VDNOrRuntimeError } from './vdn-or-runtime-error'

/**
 * VXL history entry
 */
export interface VXLHistoryEntry {
  id: string
  short_id: string
  created_at: string
  entry: string
}

/**
 * VXL History request parameters
 */
export interface VXLHistoryRequestParams {
  /**
   * Maximum number of entries to be returned
   * @type {number}
   * @memberof VXLHistoryRequestParams
   */
  limit?: number
  /**
   * Initial position from which to take entries (0-indexed).
   * @type {number}
   * @memberof VXLHistoryRequestParams
   */
  offset?: number
}

/**
 * Response for VXL history
 */
export type VXLHistoryResponse = VXLHistoryEntry[]

/**
 * Response for a VXL submission
 * @export
 * @interface VXLSubmitResponse
 */
export interface VXLSubmitResponse {
  /**
   * Array with all responses for a VXL submission
   */
  results: VXLEvalResult[]
}

export type VXLSubmitMode = 'stream' | 'layout'

export interface VXLSubmitRequest {
  /**
   * Maximum number of entries to be returned
   * @type {number}
   * @memberof VXLSubmitRequest
   */
  limit?: number | null
  /**
   * Set submission mode i.e. create stream or layout component
   * @type {boolean}
   * @memberof VXLSubmitRequest
   */
  mode?: VXLSubmitMode
  /**
   * VXL command
   * @type {string}
   * @memberof VXLSubmitRequest
   */
  vxl: string
}

export interface VXLValidateResponse {
  /**
   * Response for multiple VXL validation errors
   */
  errors: Record<string, unknown>[]
}

export interface VXLValidateRequest {
  /**
   * VXL command
   * @type {string}
   * @memberof VXLValidateRequest
   */
  vxl: string
}

export type VXLType = VDNType | VDNGenericType | UnionType | 'function'

export interface VXLTaskType extends VXLGenericParameters {
  /**
   *
   * @type {string}
   * @memberof VXLTaskType
   */
  type: 'task'
}

export interface VXLListType extends VXLGenericParameters {
  /**
   *
   * @type {string}
   * @memberof VXLListType
   */
  type: 'list'
}

export interface VXLGenericParameters {
  /**
   * Generic type parameters
   * @type {object}
   * @memberof VXLGenericParameters
   *
   * example : "items": "integer" OR "items": "A"
   */
  parameters: {
    items: VXLType | string
  }
}

export interface VXLEvalResult {
  /**
   * VXL statement
   * @type {string}
   * @memberof VXLEvalResult
   */
  statement: string
  /**
   *
   * @type {VDNOrRuntimeError}
   * @memberof VXLEvalResult
   */
  result: VDNOrRuntimeError
}
