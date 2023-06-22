export type FieldDisplayNumberFormat = {
  type: 'default' | 'si' | 'raw' | 'duration'
  style: 'default' | 'change'
}

export const isFieldDisplayNumberFormat = (
  format: FieldDisplayNumberFormat | FieldDisplayStringFormat,
): format is FieldDisplayNumberFormat => 'style' in format

export type FieldDisplayStringFormat = {
  type: 'default' | 'url'
}

export type FieldDisplay = {
  hidden: boolean
  sensitive: boolean
  flex: string
  format: FieldDisplayNumberFormat | FieldDisplayStringFormat | null
  image_uri_prefix: string | null
}

export type UnionDisplay = {
  hidden: boolean
  flex: string
}

export type StructDisplay = {
  order: string[]
}

export type ListDisplay = {
  hidden: boolean
  flex: number
}

export type Display = StructDisplay | FieldDisplay | UnionDisplay | ListDisplay
