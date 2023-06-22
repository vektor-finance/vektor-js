/**
 * Public key format
 * @export
 * @interface PublicKey
 */
export type PublicKey = {
  /**
   * Curve type
   * @type {string}
   * @memberof PublicKey
   */
  curve_type?: string
  /**
   * Hex type
   * @type {string}
   * @memberof PublicKey
   */
  hex_type?: string
}
