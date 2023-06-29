import { VDNBase } from './vdn-base'
import { VDNDateTime } from './vdn-date-time'
import { VDNString } from './vdn-string'
import { VDNVXL } from './vdn-vxl'

/**
 *
 * @export
 * @interface VDNVXLHistoryEntryValue
 */
export interface VDNVXLHistoryEntryValue {
  /**
   *
   * @type {VDNString}
   * @memberof VDNVXLHistoryEntryValue
   */
  id: VDNString
  /**
   *
   * @type {VDNVXL}
   * @memberof VDNVXLHistoryEntryValue
   */
  entry: VDNVXL
  /**
   *
   * @type {VDNDateTime}
   * @memberof VDNVXLHistoryEntryValue
   */
  created_at: VDNDateTime
}

/**
 * VXL history entry representation
 * @export
 * @interface VDNVXLHistoryEntry
 */
export interface VDNVXLHistoryEntry extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNVXLHistoryEvent
   */
  type: 'vxl_history_event'
  /**
   *
   * @type {VDNBlockchainValue}
   * @memberof VDNVXLHistoryEvent
   */
  value: VDNVXLHistoryEntryValue
}
