import { VDN } from './vdn'

/**
 * Properties of a LocalFunctionCalled
 * @export
 * @interface LocalFunctionCalled
 */
export interface LocalFunctionCalled {
  /**
   * LocalFunctionCalled vxl statement
   * @type {string}
   * @memberof LocalFunctionCalled
   */
  statement: string

  /**
   * LocalFunctionCalled function
   * @type {string}
   * @memberof LocalFunctionCalled
   */
  function: string

  /**
   * LocalFunctionCalled subfunction
   * @type {string}
   * @memberof LocalFunctionCalled
   */
  subfunction: string

  /**
   * LocalFunctionCalled arguments

   */
  args: VDN[]

  /**
   * LocalFunctionCalled options
   * @type {Record<string, VDN>}
   * @memberof LocalFunctionCalled
   */
  options: Record<string, VDN>
}
