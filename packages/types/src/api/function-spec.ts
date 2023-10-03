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
   * Use full name in UI
   * @type {boolean}
   * @memberof FunctionSpec
   */
  use_full_name: boolean
  /**
   * Grouping in UI
   * @type {string}
   * @memberof FunctionSpec
   */
  group: string
  /**
   * Mark as featured in UI
   * @type {boolean}
   * @memberof FunctionSpec
   */
  featured: boolean
  /**
   * Mark as new in UI
   * @type {string}
   * @memberof FunctionSpec
   */
  new: boolean
  /**
   * Subfunctions
   * @type {Array<SubfunctionSpec>}
   * @memberof FunctionSpec
   */
  subfunctions: SubfunctionSpec[]
}
