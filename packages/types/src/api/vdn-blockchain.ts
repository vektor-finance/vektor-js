import { VDNBase } from './vdn-base'
import { VDNInteger } from './vdn-integer'
import { VDNString } from './vdn-string'
import { VDNURL } from './vdn-url'

/**
 *
 * @export
 * @interface VDNBlockchainValue
 */
export interface VDNBlockchainValue {
  /**
   *
   * @type {VDNInteger}
   * @memberof VDNBlockchainValue
   */
  chain_id: VDNInteger
  /**
   *
   * @type {VDNURL}
   * @memberof VDNBlockchainValue
   */
  explorer: VDNURL
  /**
   *
   * @type {VDNString}
   * @memberof VDNBlockchainValue
   */
  name: VDNString
  /**
   *
   * @type {VDNString}
   * @memberof VDNBlockchainValue
   */
  network: VDNString
}

/**
 * VXL blockchain representation
 * @export
 * @interface VDNBlockchain
 */
export interface VDNBlockchain extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNBlockchain
   */
  type: 'blockchain'
  /**
   *
   * @type {VDNBlockchainValue}
   * @memberof VDNBlockchain
   */
  value: VDNBlockchainValue
}
