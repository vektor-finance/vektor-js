import { VDNBase } from './vdn-base'
/**
 * VXL code representation
 * @export
 * @interface VDNVXL
 */
export interface VDNVXL extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNVXL
   */
  type: 'vxl'
  /**
   *
   * @type {string}
   * @memberof VDNVXL
   */
  value: string
}
