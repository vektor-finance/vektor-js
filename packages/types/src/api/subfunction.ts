import { VXLType } from './vxl'

/**
 * A subfunction specification
 * @export
 * @interface SubfunctionSpec
 */
export interface SubfunctionSpec {
  /**
   * Subfunction description
   * @type {string}
   * @memberof SubfunctionSpec
   */
  description: string
  /**
   * Usage example
   * @type {string}
   * @memberof SubfunctionSpec
   */
  example?: string
  /**
   * Subfunction name
   * @type {string}
   * @memberof SubfunctionSpec
   */
  name: string
  /**
   *
   * @type {Array<SubfunctionOption>}
   * @memberof SubfunctionSpec
   */
  options: Array<SubfunctionOption>
  /**
   *
   * @type {Array<SubfunctionParameter>}
   * @memberof SubfunctionSpec
   */
  parameters: Array<SubfunctionParameter>
  /**
   *
   * @type {VXLType}
   * @memberof SubfunctionSpec
   */
  returns: VXLType
}

/**
 * A subfunction\'s option
 * @export
 * @interface SubfunctionOption
 */
export interface SubfunctionOption {
  /**
   * Default value if not provided
   * @type {string}
   * @memberof SubfunctionOption
   */
  default: string
  /**
   * Option description
   * @type {string}
   * @memberof SubfunctionOption
   */
  description: string
  /**
   * Option name
   * @type {string}
   * @memberof SubfunctionOption
   */
  name: string
  /**
   *
   * @type {VXLType}
   * @memberof SubfunctionOption
   */
  type: VXLType
}

/**
 * A subfunction\'s parameter
 * @export
 * @interface SubfunctionParameter
 */
export interface SubfunctionParameter {
  /**
   * Parameter description
   * @type {string}
   * @memberof SubfunctionParameter
   */
  description: string
  /**
   * Parameter index
   * @type {number}
   * @memberof SubfunctionParameter
   */
  index?: number
  /**
   * Parameter name
   * @type {string}
   * @memberof SubfunctionParameter
   */
  name: string
  /**
   *
   * @type {VXLType}
   * @memberof SubfunctionParameter
   */
  type: VXLType
}
