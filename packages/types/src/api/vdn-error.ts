import { VDN } from './vdn'
import { VDNBase } from './vdn-base'

/**
 * VXL error representation
 * @export
 * @interface VDNError
 */
export interface VDNError extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNError
   */
  type: string

  /**
   * Error values
   */
  value: Record<string, VDN>
}
