import { VDNBase } from './vdn-base'
import { VXLTaskType } from './vxl'

/**
 * VXL symbol representation
 * @export
 * @interface VDNTask
 */
export interface VDNTask extends VDNBase {
  /**
   *
   * @type {VXLTaskType}
   * @memberof VDNTask
   */
  type: VXLTaskType
  /**
   *
   * @type {string}
   * @memberof VDNTask
   */
  value: string
}
