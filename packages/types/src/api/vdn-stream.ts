import { VDNBase } from './vdn-base'

/**
 * VXL stream representation
 * @export
 * @interface VDNStream
 */
export interface VDNStream extends VDNBase {
  type: 'stream'
  value: string
}
