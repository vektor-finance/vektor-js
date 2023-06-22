import { ID } from './id'
import { Timestamps } from './timestamps'

/**
 *
 * @export
 * @interface ResourceCommonAllOf
 */
export interface ResourceCommonAllOf {
  /**
   *
   * @type {ID}
   * @memberof ResourceCommonAllOf
   */
  id: ID
}

/**
 * @type ResourceCommon
 * Resource common values
 * @export
 */
export type ResourceCommon = ID & Timestamps
