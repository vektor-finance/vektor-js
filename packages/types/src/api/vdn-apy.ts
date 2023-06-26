import { VDNBase } from './vdn-base'
import { VDNList } from './vdn-list'
import { VDNNone } from './vdn-none'
import { VDNPercentage } from './vdn-percentage'

/**
 * VXL apy representation
 * @export
 * @interface VDNAPY
 */
export interface VDNAPY extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNAPY
   */
  type: 'apy'
  /**
   *
   * @type {VDNAPYValue}
   * @memberof VDNAPY
   */
  value: VDNAPYValue
}

export interface VDNAPYValue {
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNAPYValue
   */
  avg_30d: VDNPercentage | VDNNone
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNAPYValue
   */
  base: VDNPercentage | VDNNone
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNAPYValue
   */
  reward: VDNPercentage | VDNNone
  /**
   *
   * @type {VDNList}
   * @memberof VDNAPYValue
   */
  reward_assets: VDNList
  /**
   *
   * @type {VDNPercentage}
   * @memberof VDNAPYValue
   */
  total: VDNPercentage | VDNNone
}
