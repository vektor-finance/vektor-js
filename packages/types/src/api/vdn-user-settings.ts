import { VDNBase } from './vdn-base'
import { VDNBoolean } from './vdn-boolean'
import { VDNInteger } from './vdn-integer'

/**
 *
 * @export
 * @interface VDNUserSettingsValue
 */
export interface VDNUserSettingsValue {
  /**
   *
   * @type {VDNInteger}
   * @memberof VDNUserSettingsValue
   */
  decimals: VDNInteger
  /**
   *
   * @type {VDNBoolean}
   * @memberof VDNUserSettingsValue
   */
  show_icons: VDNBoolean
  /**
   *
   * @type {VDNBoolean}
   * @memberof VDNUserSettingsValue
   */
  show_formatted_data: VDNBoolean
  /**
   *
   * @type {VDNBoolean}
   * @memberof VDNUserSettingsValue
   */
  show_sensitive_fields: VDNBoolean
  /**
   *
   * @type {VDNBoolean}
   * @memberof VDNUserSettingsValue
   */
  show_command_line: VDNBoolean
  /**
   *
   * @type {VDNBoolean}
   * @memberof VDNUserSettingsValue
   */
  enter_accepts_suggestions: VDNBoolean
}

/**
 * VXL user_settings representation
 * @export
 * @interface VDNUserSettings
 */
export interface VDNUserSettings extends VDNBase {
  /**
   *
   * @type {string}
   * @memberof VDNUserSettings
   */
  type: 'user_settings'
  /**
   *
   * @type {VDNUserSettingsValue}
   * @memberof VDNUserSettings
   */
  value: VDNUserSettingsValue
}
