import { VDNBase } from './vdn-base'
import { VDNString } from './vdn-string'

export interface VDNJSONValue {
  /**
   * JSON contents
   * @type {VDNString}
   * @memberof VDNJSONValue
   */
  contents: VDNString
}

/**
 * VXL JSON representation
 * @export
 * @interface VDNJSON
 */
export interface VDNJSON extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNJSON
   */
  type: 'json'
  /**
   *
   * @type {VDNJSONValue}
   * @memberof VDNJSON
   */
  value: VDNJSONValue
}
