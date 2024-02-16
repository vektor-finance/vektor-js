import { Api, ApiOptions, defaultApiOptions } from '@vektor-finance/api'
import { defaultGatewayOptions, Gateway, GatewayOptions } from '@vektor-finance/gateway'
import { Socket } from 'phoenix-channels'

/**
 * Configuration options for the Vektor Browser SDK.
 * @see Vektor for more information.
 */
export interface VektorOptions {
  /** API client options */
  api?: ApiOptions

  /** Gateway client options */
  gateway?: GatewayOptions
}

export const defaultVektorOptions: VektorOptions = {
  api: defaultApiOptions,
  gateway: defaultGatewayOptions,
}

/**
 * The Vektor Node.js SDK Client.
 *
 * @example
 *
 * ```
 * import { Vektor } from '@vektor-finance/node';
 *
 * const vektor = new Vektor('<authToken>')
 * ```
 */
export class Vektor {
  public readonly api: Api
  public readonly gateway: Gateway

  /**
   * Initializes the Vektor Node.js SDK instance.
   *
   * @param authToken Authentication token.
   * @param options Options to configure the SDK and sub-clients.
   */
  public constructor(authToken: string, options?: VektorOptions) {
    this.api = new Api(options?.api)
    this.gateway = new Gateway(Socket, authToken, options?.gateway)
  }
}
