import { SubfunctionSpec } from './subfunction'

/**
 * A root function specification
 * @export
 * @interface FunctionSpec
 */
export interface FunctionSpec {
  /**
   * Default subfunction name
   * @type {string}
   * @memberof FunctionSpec
   */
  default: string
  /**
   * Function description
   * @type {string}
   * @memberof FunctionSpec
   */
  description: string
  /**
   * Function mnemonic
   * @type {string}
   * @memberof FunctionSpec
   */
  mnemonic: string | null
  /**
   * Function name
   * @type {string}
   * @memberof FunctionSpec
   */
  name: string
  /**
   * Should use full name in UI?
   * @type {boolean}
   * @memberof FunctionSpec
   */
  use_full_name: boolean
  /**
   * Subfunctions
   * @type {Array<SubfunctionSpec>}
   * @memberof FunctionSpec
   */
  subfunctions: SubfunctionSpec[]
}
