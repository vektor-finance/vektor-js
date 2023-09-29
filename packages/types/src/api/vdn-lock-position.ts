import { VDNBase } from './vdn-base'
import { VDNBoolean } from './vdn-boolean'
import { VDNDateTime } from './vdn-date-time'
import { VDNDecimal } from './vdn-decimal'
import { VDNInfinity } from './vdn-infinity'
import { VDNInteger } from './vdn-integer'
import { VDNLabel } from './vdn-label'
import { VDNLockMarket } from './vdn-lock-market'

/**
 *
 * @export
 * @interface VDNLockPositionValue
 */
export interface VDNLockPositionValue {
  /**
   *
   * @type {VDNInteger}
   * @memberof VDNLockPositionValue
   */
  id: VDNInteger
  /**
   *
   * @type {VDNLabel}
   * @memberof VDNLockPositionValue
   */
  label: VDNLabel
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLockPositionValue
   */
  locked_amount: VDNDecimal
  /**
   *
   * @type {VDNLockMarket}
   * @memberof VDNLockPositionValue
   */
  market: VDNLockMarket
  /**
   *
   * @type {VDNLockPositionValueUnlockedAt}
   * @memberof VDNLockPositionValue
   */
  unlocked_at: VDNDateTime | VDNInfinity
  /**
   *
   * @type {VDNDecimal}
   * @memberof VDNLockPositionValue
   */
  voting_power: VDNDecimal
  /**
   *
   * @type {VDNBoolean}
   * @memberof VDNLockPositionValue
   */
  used: VDNBoolean
}

/**
 * VXL lock_position representation
 * @export
 * @interface VDNLockPosition
 */
export interface VDNLockPosition extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNLockPosition
   */
  type: 'lock_position'
  /**
   *
   * @type {VDNLockPositionValue}
   * @memberof VDNLockPosition
   */
  value: VDNLockPositionValue
}
