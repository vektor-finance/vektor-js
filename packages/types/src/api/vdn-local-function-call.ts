import { VDNBase } from './vdn-base'
import { VDNJSON } from './vdn-json'
import { VDNString } from './vdn-string'

/**
 *
 * @export
 * @interface VDNLocalFunctionCallValue
 */
export interface VDNLocalFunctionCallValue {
  /**
   *
   * @type {VDNString}
   * @memberof VDNLocalFunctionCallValue
   */
  function: VDNString
  /**
   *
   * @type {VDNString}
   * @memberof VDNLocalFunctionCallValue
   */
  subfunction: VDNString
  /**
   *
   * @type {VDNJSON}
   * @memberof VDNLocalFunctionCallValue
   */
  args: VDNJSON[]
  /**
   *
   * @type {VDNJSON}
   * @memberof VDNLocalFunctionCallValue
   */
  options: VDNJSON
}


/**
 * VXL LocalFunctionCall representation
 * @export
 * @interface VDNLocalFunctionCall
 */
export interface VDNLocalFunctionCall extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNLocalFunctionCall
   */
  type: 'local_function_call'
  /**
   *
   * @type {VDNLocalFunctionCallValue}
   * @memberof VDNLocalFunctionCall
   */
  value: VDNLocalFunctionCallValue
}
