import { NetworkMode } from './network'

export interface Session {
  /**
   * ISO8601 Timestamp
   * @type {string}
   * @memberof Session
   */
  created_at: string
  /**
   * Universally unique identifier - UUID V4
   * @type {string}
   * @memberof Session
   */
  id: string
  /**
   * Unique name to identify the Session
   * @type {string}
   * @memberof Session
   */
  name: string
  /**
   *
   * @type {NetworkMode}
   * @memberof Session
   */
  network_mode: NetworkMode
  /**
   * ISO8601 Timestamp
   * @type {string}
   * @memberof Session
   */
  updated_at: string
}

export type SessionResponse = Session
