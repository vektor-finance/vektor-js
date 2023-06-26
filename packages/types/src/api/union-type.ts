import { VXLType } from './vxl'

/**
 * A subfunction\'s option
 * @export
 * @interface UnionType
 */
export interface UnionType {
  type: 'union'
  types: VXLType[]
}

export const isUnionType = (type: VXLType): type is UnionType =>
  typeof type === 'object' && type.type === 'union' && typeof type.types === 'object'
