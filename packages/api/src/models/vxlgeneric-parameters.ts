import { VXLType } from "./vxltype"

export interface VXLGenericParameters {
  /**
   * Generic type parameters
   * @type {object}
   * @memberof VXLGenericParameters
   *
   * example : "items": "integer" OR "items": "A"
   */
  parameters: {
    items: VXLType | string
  }
}
