import { VDNBase } from './vdn-base'
import { VDNDateTime } from './vdn-date-time'
import { VDNError } from './vdn-error'
import { VDNNone } from './vdn-none'
import { VDNString } from './vdn-string'
import { VDNSuccess } from './vdn-success'
import { VDNVXL } from './vdn-vxl'

/**
 *
 * @export
 * @interface VDNReportHistoryEntryValue
 */
export interface VDNReportHistoryEntryValue {
  /**
   *
   * @type {VDNString}
   * @memberof VDNReportHistoryEntryValue
   */
  report_id: VDNString
  /**
   *
   * @type {VDNVXL}
   * @memberof VDNReportHistoryEntryValue
   */
  delivery_expression: VDNVXL
  /**
   *
   * @type {VDNSuccess | VDNError | VDNNone}
   * @memberof VDNReportHistoryEntryValue
   */
  executed_status: VDNSuccess | VDNError | VDNNone
  /**
   *
   * @type {VDNDateTime}
   * @memberof VDNReportHistoryEntryValue
   */
  executed_at: VDNDateTime
}

/**
 * VXL report history entry representation
 * @export
 * @interface VDNReportHistoryEntry
 */
export interface VDNReportHistoryEntry extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNReportHistoryEntry
   */
  type: 'report'
  /**
   *
   * @type {VDNReportHistoryEntryValue}
   * @memberof VDNReportHistoryEntry
   */
  value: VDNReportHistoryEntryValue
}
