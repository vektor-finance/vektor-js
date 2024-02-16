import { VDNBase } from './vdn-base'

/**
 * VXL stream ID representation
 * @export
 * @interface VDNStreamID
 */
export interface VDNStreamID extends VDNBase {
  type: 'stream_id'
  value: string
}
