import { ID } from './id'
import { NetworkMode } from './network'
import { Timestamps } from './timestamps'

/**
 * Common properties of a Label schema
 * @export
 * @interface LabelCommon
 */
export interface LabelCommon {
  /**
   * Unique name to identify the Label
   * @type {string}
   * @memberof LabelCommon
   */
  name: string
  /**
   * Network
   * @type {string}
   * @memberof LabelCommon
   */
  network: string
  /**
   * Label\'s address
   * @type {string}
   * @memberof LabelCommon
   */
  address?: string
}

/**
 * @type LabelUpdateRequest
 * Request to update a label
 * @export
 */
export type LabelUpdateRequest = LabelCommonOptional

/**
 * @type LabelCreateRequest
 * Request to create a label
 * @export
 */
export type LabelCreateRequest = LabelCommonRequired

/**
 * @type Label
 * Identifier to easily reference an Address or Transaction
 * @export
 */
export type Label = LabelCommonRequired & ID & Timestamps

/**
 * @type LabelResponse
 * Response for a single label
 * @export
 */
export type LabelResponse = Label

/**
 * Common properties of a Label (optional)
 * @export
 * @interface LabelCommonOptional
 */
export interface LabelCommonOptional {
  /**
   * Label\'s address
   * @type {string}
   * @memberof LabelCommonOptional
   */
  address?: string
  /**
   * Unique name to identify the Label
   * @type {string}
   * @memberof LabelCommonOptional
   */
  name?: string
  /**
   *
   * @type {NetworkMode}
   * @memberof LabelCommonOptional
   */
  network_mode?: NetworkMode
}

export interface LabelCommonRequired {
  /**
   * Label\'s address
   * @type {string}
   * @memberof LabelCommonRequired
   */
  address: string
  /**
   * Unique name to identify the Label
   * @type {string}
   * @memberof LabelCommonRequired
   */
  name: string
  /**
   *
   * @type {NetworkMode}
   * @memberof LabelCommonRequired
   */
  network_mode: NetworkMode
}

export interface LabelsListRequestParams {
  networkMode?: NetworkMode
}
