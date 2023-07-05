// import type { RecursivePartial } from '@vektor-finance/utils'

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
 * User autocomplete settings
 * @export
 * @interface UserAutocompleteSettings
 */
export interface UserAutocompleteSettings {
  /**
   * If TRUE, pressing ENTER will accept an autocomplete suggestion. Otherwise, TAB is used
   * @type {boolean}
   * @memberof UserAutocompleteSettings
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
   * User's autocomplete settings
   * @type {UserAutocompleteSettings}
   * @memberof UserSettings
   */
  autocomplete: UserAutocompleteSettings
}

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> }

export type UserSettingsUpdateRequest = RecursivePartial<UserSettings>
export type UserSettingsUpdateResponse = RecursivePartial<UserSettings>
