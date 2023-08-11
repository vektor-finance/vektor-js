import { VDNBase } from './vdn-base'

/**
 * VXL cron expression representation
 * @export
 * @interface VDNCronExpression
 */
export interface VDNCronExpression extends VDNBase {
  type: 'cron_expression'
  value: string
}
