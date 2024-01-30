import { VXLAction } from './vxl-action'

/**
 * VXL base type to inherit from
 * @export
 * @interface VDNBase
 */
export interface VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNBase
   */
  parent_type: string | null

  /**
   *
   * @type {VXLAction}
   * @memberof VDNBase
   */
  actions: VXLAction[]
}
