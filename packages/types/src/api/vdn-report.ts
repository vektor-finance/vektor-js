import { VDNBase } from './vdn-base'
import { VDNBoolean } from './vdn-boolean'
import { VDNDateTime } from './vdn-date-time'
import { VDNError } from './vdn-error'
import { VDNNone } from './vdn-none'
import { VDNPeriodExpression } from './vdn-period-expression'
import { VDNString } from './vdn-string'
import { VDNSuccess } from './vdn-success'
import { VDNVXL } from './vdn-vxl'

/**
 *
 * @export
 * @interface VDNReportValue
 */
export interface VDNReportValue {
  /**
   *
   * @type {VDNString}
   * @memberof VDNReportValue
   */
  id: VDNString
  /**
   *
   * @type {VDNPeriodExpression}
   * @memberof VDNReportValue
   */
  period: VDNPeriodExpression
  /**
   *
   * @type {VDNVXL}
   * @memberof VDNReportValue
   */
  deliver_expression: VDNVXL
  /**
   *
   * @type {VDNString | VDNNone}
   * @memberof VDNReportValue
   */
  name: VDNString | VDNNone
  /**
   *
   * @type {VDNDateTime}
   * @memberof VDNReportValue
   */
  created_at: VDNDateTime
  /**
   *
   * @type {VDNBoolean}
   * @memberof VDNReportValue
   */
  running: VDNBoolean
  /**
   *
   * @type {VDNSuccess | VDNError | VDNNone}
   * @memberof VDNReportValue
   */
  last_executed_status: VDNSuccess | VDNError | VDNNone
  /**
   *
   * @type {VDNDateTime | VDNNone}
   * @memberof VDNReportValue
   */
  last_executed_at: VDNDateTime | VDNNone
}

/**
 * VXL report representation
 * @export
 * @interface VDNReport
 */
export interface VDNReport extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNReport
   */
  type: 'report'
  /**
   *
   * @type {VDNReportValue}
   * @memberof VDNReport
   */
  value: VDNReportValue
}
