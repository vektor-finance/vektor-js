import { VDNBase } from './vdn-base'

/**
 * VXL string representation
 * @export
 * @interface VDNString
 */
export interface VDNString extends VDNBase {
  type: 'string'
  value: string
}
