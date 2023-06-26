import { VDNBase } from './vdn-base'
import { VDNNone } from './vdn-none'
import { VDNString } from './vdn-string'
import { VDNVXL } from './vdn-vxl'

/**
 * VXL function_spec representation
 * @export
 * @interface VDNFunctionSpec
 */
export interface VDNFunctionSpec extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNFunctionSpec
   */
  type: 'function_spec'
  /**
   *
   * @type {VDNFunctionSpecValue}
   * @memberof VDNFunctionSpec
   */
  value: VDNFunctionSpecValue
}

/**
 *
 * @export
 * @interface VDNFunctionSpecValue
 */
export interface VDNFunctionSpecValue {
  /**
   *
   * @type {VDNString}
   * @memberof VDNFunctionSpecValue
   */
  description: VDNString
  /**
   *
   * @type {VDNVXL}
   * @memberof VDNFunctionSpecValue
   */
  example: VDNVXL
  /**
   *
   * @type {VDNString}
   * @memberof VDNFunctionSpecValue
   */
  function: VDNString
  /**
   *
   * @type {VDNTransactionValueExplorer}
   * @memberof VDNFunctionSpecValue
   */
  subfunction: VDNString | VDNNone
}
