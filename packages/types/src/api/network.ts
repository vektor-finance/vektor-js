/**
 * Tuple to identify a blockchain:network pair
 * @export
 * @interface NetworkID
 */
export interface NetworkID {
  /**
   * Blockchain
   * @type {string}
   * @memberof NetworkID
   */
  blockchain: string
  /**
   * Blockchain\'s network
   * @type {string}
   * @memberof NetworkID
   */
  network: string
}

/**
 * Network mode
 * @export
 * @enum {string}
 */
export type NetworkMode = 'mainnet' | 'testnet' | 'simulation'
