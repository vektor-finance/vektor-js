import { API, APIOptions, options as apiOptions } from '@vektor-finance/api'
import { Gateway, GatewayOptions, options as gatewayOptions } from '@vektor-finance/gateway'
import { Socket } from 'phoenix'

/**
 * Configuration options for the Vektor Browser SDK.
 * @see Vektor for more information.
 */
export interface VektorOptions {
  /** API client options */
  api?: APIOptions

  /** Gateway client options */
  gateway?: GatewayOptions
}

export type VektorOptionsType = 'default' | 'local'

export const options: Record<VektorOptionsType, VektorOptions> = {
  default: {
    api: apiOptions.default,
    gateway: gatewayOptions.default,
  },
  local: {
    api: apiOptions.local,
    gateway: gatewayOptions.local,
  },
}

/**
 * The Vektor Browser SDK Client.
 *
 * @example
 *
 * ```
 * import { Vektor } from '@vektor-finance/browser';
 *
 * const vektor = new Vektor('<authToken>')
 * ```
 */
export class Vektor {
  public readonly api: API
  public readonly gateway: Gateway

  /**
   * Initializes the Vektor Browser SDK instance.
   *
   * @param authToken Authentication token.
   * @param options Options to configure the SDK and sub-clients.
   */
  public constructor(authToken: string, options?: VektorOptions) {
    this.api = new API(options?.api)
    this.gateway = new Gateway(Socket, authToken, options?.gateway)
  }
}
