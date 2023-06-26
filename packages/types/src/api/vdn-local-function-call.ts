import { VDNBase } from './vdn-base'

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
   * @type {null}
   * @memberof VDNLocalFunctionCall
   */
  value: null
}
