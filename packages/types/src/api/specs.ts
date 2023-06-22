import { FieldDisplay, ListDisplay, StructDisplay, UnionDisplay } from './display'
import { isUnionType, UnionType } from './union-type'
import { isVXLListType } from './vdn'
import { VXLListType } from './vxl'

export type VDNSpec = StructSpec | UnionSpec | ListSpec | FieldSpec

export type StructSpec = {
  type: string
  display: StructDisplay
  fields: Record<string, VDNSpec>
}

export type UnionSpec = {
  type: UnionType
  display: UnionDisplay
  types: Record<string, VDNSpec>
}

export type FieldSpec = {
  type: string
  display: FieldDisplay
}

export type ListSpec = {
  type: VXLListType
  display: ListDisplay
  items: VDNSpec
}

// Type guards
export const isStructSpec = (spec: VDNSpec): spec is StructSpec => 'fields' in spec
export const isUnionSpec = (spec: VDNSpec): spec is UnionSpec => 'types' in spec && isUnionType(spec.type)
export const isListSpec = (spec: VDNSpec): spec is ListSpec => 'items' in spec && isVXLListType(spec.type)
export const isFieldSpec = (spec: VDNSpec): spec is FieldSpec =>
  !isStructSpec(spec) && !isUnionSpec(spec) && !isListSpec(spec)
