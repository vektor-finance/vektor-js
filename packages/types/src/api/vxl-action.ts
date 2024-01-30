/**
 * Represents VXL commands that act on a given output
 * @export
 * @interface VXLAction
 */
export interface VXLAction {
  /**
   * Action ID
   * @type {string}
   * @memberof VXLAction
   */
  id: string
  /**
   * Action Type
   * @type {string}
   * @memberof VXLAction
   */
  type: string
  /**
   * Action Name
   * @type {string}
   * @memberof VXLAction
   */
  name: string
  /**
   * Action Group
   * @type {string}
   * @memberof VXLAction
   */
  group: string | null
  /**
   * Action VXL command
   * @type {string}
   * @memberof VXLAction
   */
  vxl: string
}

export type VXLTypeActionsType = 'blockchain' | 'venue' | 'label'

/**
 * Represents VXL type actions
 * @export
 * @interface VXLTypeActions
 */
export type VXLTypeActions = Record<VXLTypeActionsType, Record<string, VXLAction[]>>
