import { VDNAddress } from './vdn-address'
import { VDNBase } from './vdn-base'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNInteger } from './vdn-integer'
import { VDNString } from './vdn-string'

/**
 * VXL nft representation
 * @export
 * @interface VDNNFT
 */
export interface VDNNFT extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNNFT
   */
  type: 'nft'
  /**
   *
   * @type {VDNNFTValue}
   * @memberof VDNNFT
   */
  value: VDNNFTValue
}

/**
 *
 * @export
 * @interface VDNNFTValue
 */
export interface VDNNFTValue {
  /**
   *
   * @type {VDNNFTCollection}
   * @memberof VDNNFTValue
   */
  collection: VDNNFTCollection
  /**
   *
   * @type {VDNInteger}
   * @memberof VDNNFTValue
   */
  id: VDNInteger
}

/**
 * VXL nft_collection representation
 * @export
 * @interface VDNNFTCollection
 */
export interface VDNNFTCollection extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNNFTCollection
   */
  type: 'nft_collection'
  /**
   *
   * @type {VDNNFTCollectionValue}
   * @memberof VDNNFTCollection
   */
  value: VDNNFTCollectionValue
}

/**
 *
 * @export
 * @interface VDNNFTCollectionValue
 */
export interface VDNNFTCollectionValue {
  /**
   *
   * @type {VDNAddress}
   * @memberof VDNNFTCollectionValue
   */
  address: VDNAddress
  /**
   *
   * @type {VDNBlockchain}
   * @memberof VDNNFTCollectionValue
   */
  blockchain: VDNBlockchain
  /**
   *
   * @type {VDNString}
   * @memberof VDNNFTCollectionValue
   */
  name: VDNString
}
