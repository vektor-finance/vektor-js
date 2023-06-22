import { VDN } from './vdn'

/**
 * Properties of a LocalFunctionCall
 * @export
 * @interface LocalFunctionCall
 */
export type LocalFunctionCall = {
  /**
   * LocalFunctionCall vxl statement
   * @type {string}
   * @memberof LocalFunctionCall
   */
  statement: string

  /**
   * LocalFunctionCall function
   * @type {string}
   * @memberof LocalFunctionCall
   */
  function: string

  /**
   * LocalFunctionCall subfunction
   * @type {string}
   * @memberof LocalFunctionCall
   */
  subfunction: string

  /**
   * LocalFunctionCall arguments
   * @type {Array<VDN>}
   * @memberof LocalFunctionCall
   */
  args: VDN[]

  /**
   * LocalFunctionCall options
   * @type {Record<string, VDN>}
   * @memberof LocalFunctionCall
   */
  options: Record<string, VDN>
}
