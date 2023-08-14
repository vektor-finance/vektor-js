import { VDNBase } from './vdn-base'

/**
 * VXL cron expression representation
 * @export
 * @interface VDNPeriodExpression
 */
export interface VDNPeriodExpression extends VDNBase {
  type: 'period_expression'
  value: string
}
