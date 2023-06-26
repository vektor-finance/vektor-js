import { VDNBase } from './vdn-base'
import { VDNBoolean } from './vdn-boolean'
import { VDNString } from './vdn-string'

export interface VDNCSVValue {
  /**
   *
   * @type {VDNString}
   * @memberof VDNCSVValue
   */
  contents: VDNString
  /**
   *
   * @type {VDNString}
   * @memberof VDNCSVValue
   */
  decimal_sep: VDNString
  /**
   *
   * @type {VDNString}
   * @memberof VDNCSVValue
   */
  field_sep: VDNString
  /**
   *
   * @type {VDNBoolean}
   * @memberof VDNCSVValue
   */
  force_escaping: VDNBoolean
  /**
   *
   * @type {VDNString}
   * @memberof VDNCSVValue
   */
  line_sep: VDNString
  /**
   *
   * @type {VDNString}
   * @memberof VDNCSVValue
   */
  na_repr: VDNString
}

/**
 * VXL csv representation
 * @export
 * @interface VDNCSV
 */
export interface VDNCSV extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNCSV
   */
  type: 'csv'
  /**
   *
   * @type {VDNCSVValue}
   * @memberof VDNCSV
   */
  value: VDNCSVValue
}
