import type { VDNType } from "./vdn"

/**
 * Represents VXL Type Protocol
 * @export
 * @interface VXLTypeProtocol
 */
export interface VXLTypeProtocol {
  /**
   * Protocol name
   * @type {string}
   * @memberof VXLTypeProtocol
   */
  protocol: string

  /**
   * Protocol implementations
   * @type {string}
   * @memberof VXLTypeProtocol
   */
  implementations: VDNType[]
}
