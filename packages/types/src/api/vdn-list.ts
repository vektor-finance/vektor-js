import { VDN } from './vdn'
import { VDNBase } from './vdn-base'
import { VXLListType } from './vxl'

/**
 * VDN list representation
 * @export
 * @interface VDNList
 */
export interface VDNList extends VDNBase {
  type: VXLListType
  value: VDN[]
}
