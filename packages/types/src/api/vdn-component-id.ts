import { VDNBase } from './vdn-base'

/**
 * VXL component ID representation
 * @export
 * @interface VDNComponentID
 */
export interface VDNComponentID extends VDNBase {
  type: 'component_id'
  value: string
}
