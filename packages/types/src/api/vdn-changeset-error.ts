import { VDNBase } from './vdn-base'
import { VDNString } from './vdn-string'

export interface VDNChangesetErrorValue {
  /**
   *
   * @type {VDNString}
   * @memberof VDNChangesetErrorValue
   */
  error: VDNString
  /**
   *
   * @type {VDNString}
   * @memberof VDNChangesetErrorValue
   */
  field: VDNString
}

/**
 * VXL changeset_error representation
 * @export
 * @interface VDNChangesetError
 */
export interface VDNChangesetError extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNChangesetError
   */
  type: 'changeset_error'
  /**
   *
   * @type {VDNChangesetErrorValue}
   * @memberof VDNChangesetError
   */
  value: VDNChangesetErrorValue
}
