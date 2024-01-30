import { VXLAction } from './vxl-action'
import { VDN } from './vdn'
import { VDNBase } from './vdn-base'
import { VDNListAttribute } from './vdn-list-attribute'
import { VXLListType } from './vxl'

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
