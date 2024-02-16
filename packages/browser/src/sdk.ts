import { Api, ApiConfig, defaultApiConfig } from '@vektor-finance/api'
import { defaultGatewayOptions, Gateway, GatewayOptions } from '@vektor-finance/gateway'
import { Socket } from 'phoenix'

/**
 * Configuration options for the Vektor Browser SDK.
 * @see Vektor for more information.
 */
export interface VektorOptions {
  /** API client options */
  api?: ApiConfig

  /** Gateway client options */
  gateway?: GatewayOptions
}

/**
 * Default options for Vektor class
 */
export const defaultVektorOptions: VektorOptions = {
  api: defaultApiConfig,
  gateway: defaultGatewayOptions,
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
  public readonly api: Api
  public readonly gateway: Gateway

  /**
   * Initializes the Vektor Browser SDK instance.
   *
   * @param authToken Authentication token.
   * @param options Options to configure the SDK and sub-clients.
   */
  public constructor(authToken: string, options?: VektorOptions) {
    this.api = new Api(options?.api)
    this.gateway = new Gateway(Socket, authToken, options?.gateway)
  }
}
