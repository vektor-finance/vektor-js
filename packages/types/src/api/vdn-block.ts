import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNDateTime } from './vdn-date-time'
import { VDNInteger } from './vdn-integer'
import { VDNString } from './vdn-string'

/**
 *
 * @export
 * @interface VDNBlockValue
 */
export interface VDNBlockValue {
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNBlockValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNString}
   * @memberof VDNBlockValue
   */
  hash: VDNString
  /**
   *
   * @type {VDNInteger}
   * @memberof VDNBlockValue
   */
  number: VDNInteger
  /**
   *
   * @type {VDNString}
   * @memberof VDNBlockValue
   */
  parent_hash: VDNString
  /**
   *
   * @type {VDNDateTime}
   * @memberof VDNBlockValue
   */
  timestamp: VDNDateTime
}

/**
 * VXL block representation
 * @export
 * @interface VDNBlock
 */
export interface VDNBlock extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNBlock
   */
  type: 'block'
  /**
   *
   * @type {VDNBlockValue}
   * @memberof VDNBlock
   */
  value: VDNBlockValue
}
