import type { GatewayEvent } from '@vektor-finance/types'
import type { Channel, Push, Socket } from 'phoenix'

export interface GatewayOptions {
  // WebSocket url with prefix (ws:// or wss://)
  url: string

  // WebSocket timeout
  timeout: number

  // Socket callbacks to register
  socket?: {
    onOpen?: Parameters<Socket['onOpen']>[0]
    onClose?: Parameters<Socket['onClose']>[0]
    onMessage?: Parameters<Socket['onMessage']>[0]
    onError?: Parameters<Socket['onError']>[0]
  }
}

export type GatewayOptionsType = 'default' | 'local'

/** Option sets for connecting to Vektor's gateway service */
export const options: Record<GatewayOptionsType, GatewayOptions> = {
  default: {
    url: 'wss://api.vektor.finance/gateway',
    timeout: 10_000,
  },
  local: {
    url: 'ws://localhost:4000/gateway',
    timeout: 10_000,
  },
}

// Callback Signatures
export type ChannelResponseCallback = (response?: unknown) => void
export type GatewayEventReceivedCallback = (event: GatewayEvent) => void

/**
 * The Vektor SDK Signing Client.
 *
 * To use this module, create an instance via the constructor,
 * passing in the `authToken` and `userId` received after authentication
 *
 * @example
 * ```
 * import { Gateway } from '@vektor-finance/gateway'
 *
 * const gateway = new Gateway(Socket, authToken);
 * gateway.connect(userId);
 *
 * signing.subscribe((event) => {
 *     console.log(JSON.stringify(event))
 * })
 * ```
 *
 * @see {@link GatewayOptions} for documentation on configuration options.
 */
export class Gateway {
  public readonly _socket: Socket
  protected _channel?: Channel

  /**
   * Initializes this client instance.
   *
   * @param authToken Authentication token.
   * @param options Options for the client.
   */
  public constructor(
    private _socketClass: typeof Socket,
    authToken: string,
    protected readonly _options: GatewayOptions = options.default,
  ) {
    this._socket = new this._socketClass(this._options.url, { params: { token: authToken } })

    if (this._options.socket) {
      const { onOpen, onMessage, onClose, onError } = this._options.socket
      if (onOpen) this._socket.onOpen(onOpen)
      if (onClose) this._socket.onClose(onClose)
      if (onMessage) this._socket.onMessage(onMessage)
      if (onError) this._socket.onError(onError)
    }
  }

  /**
   *
   * @param userId User's uuid
   * @param okCallback Callback to handle successful sending (optional)
   * @param errorCallback Callback to handle failed sending (optional)
   */
  public connect(userId: string, okCallback?: ChannelResponseCallback, errorCallback?: ChannelResponseCallback): void {
    this._socket.connect()
    this._channel = this._socket.channel(userId)
    const p = this._channel.join()
    this._setupReceiveCallbacks(p, okCallback, errorCallback)
  }

  /**
   * Leave the channel and disconnect the socket
   * @param okCallback Callback called after disconnect (optional)
   */
  public disconnect(callback?: () => void): void {
    this._channel?.leave()
    this._channel = undefined
    this._socket.disconnect(callback)
  }

  /**
   * Subscribe to `event_received` events.
   * @param callback Callback to handle received events
   */
  public subscribe(callback: GatewayEventReceivedCallback): void {
    this._channel?.on('event_received', callback)
  }

  /**
   * Unsubscribe from `event_received` events.
   */
  public unsubscribe(): void {
    this._channel?.off('event_received')
  }

  /**
   *
   * @param p Push to attach callback to
   * @param okCallback Callback to handle successful sending (optional)
   * @param errorCallback Callback to handle failed sending (optional)
   */
  private _setupReceiveCallbacks(
    p: Push,
    okCallback?: ChannelResponseCallback,
    errorCallback?: ChannelResponseCallback,
  ): Push {
    if (okCallback !== undefined) {
      p.receive('ok', okCallback)
    }
    if (errorCallback !== undefined) {
      p.receive('error', errorCallback)
    }
    return p
  }
}
