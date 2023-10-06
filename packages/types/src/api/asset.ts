import { NetworkID, NetworkMode } from './network'

export interface Asset {
  /**
   * Assets\'s on-chain address (optional)
   * @type {string}
   * @memberof Asset
   */
  address?: string
  /**
   * Asset\'s decimal places
   * @type {number}
   * @memberof Asset
   */
  decimals: number
  /**
   * Asset\'s name
   * @type {string}
   * @memberof Asset
   */
  name: string
  /**
   *
   * @type {NetworkID}
   * @memberof Asset
   */
  network_id: NetworkID
  /**
   * Asset\'s symbol
   * @type {string}
   * @memberof Asset
   */
  symbol: string
}

export interface AssetsListRequestParams {
  networkMode?: NetworkMode
}
