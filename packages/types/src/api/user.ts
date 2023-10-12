import type { RecursivePartial } from '@vektor-finance/utils'

/**
 * User display settings
 * @export
 * @interface UserDisplaySettings
 */
export interface UserDisplaySettings {
  /**
   * Number of decimals to show
   * @type {number}
   * @memberof UserDisplaySettings
   */
  decimals: number
  /**
   * If TRUE, icons for assets, venues, blockchains etc will be shown
   * @type {boolean}
   * @memberof UserDisplaySettings
   */
  show_icons: boolean
  /**
   * If TRUE, data is unformatted
   * @type {boolean}
   * @memberof UserDisplaySettings
   */
  show_unformatted_data: boolean
  /**
   * If TRUE, sensitive fields will not be obfuscated e.g. balances
   * @type {boolean}
   * @memberof UserDisplaySettings
   */
  show_sensitive_fields: boolean
}

/**
 * User command line settings
 * @export
 * @interface UserCommandLineSettings
 */
export interface UserCommandLineSettings {
  /**
   * If TRUE, command line will be shown
   * @type {boolean}
   * @memberof UserCommandLineSettings
   */
  show_command_line: boolean
  /**
   * If TRUE, pressing ENTER will accept an autocomplete suggestion. Otherwise, TAB is used
   * @type {boolean}
   * @memberof UserCommandLineSettings
   */
  enter_accepts_suggestions: boolean
}

/**
 * User settings
 * @export
 * @interface UserSettings
 */
export interface UserSettings {
  /**
   * User's display settings
   * @type {UserDisplaySettings}
   * @memberof UserSettings
   */
  display: UserDisplaySettings

  /**
   * User's command line settings
   * @type {UserCommandLineSettings}
   * @memberof UserSettings
   */
  command_line: UserCommandLineSettings
}

export type UserSettingsUpdateRequest = RecursivePartial<UserSettings>
export type UserSettingsUpdateResponse = UserSettings
