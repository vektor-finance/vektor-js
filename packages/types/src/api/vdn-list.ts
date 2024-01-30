import type { VDN } from './vdn'
import type { VDNBase } from './vdn-base'
import type { VDNListAttribute } from './vdn-list-attribute'
import type { VXLListType } from './vxl'
import type { VXLAction } from './vxl-action'

/**
 * VDN list representation
 * @export
 * @interface VDNList
 */
export interface VDNList extends VDNBase {
  /**
   *
   * @type {VXLListType}
   * @memberof VDNList
   */
  type: VXLListType

  /**
   *
   * @type {VDN}
   * @memberof VDNList
   */
  value: VDN[]

  /**
   *
   * @type {VXLAction[]}
   * @memberof VDNList
   */
  actions: VXLAction[]

  /**
   *
   * @type {VDNListAttribute[]}
   * @memberof VDNList
   */
  attributes: VDNListAttribute[]
}
