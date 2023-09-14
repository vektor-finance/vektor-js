export interface FieldDisplayNumberFormat {
  type: 'default' | 'si' | 'raw' | 'duration'
  style: 'default' | 'change'
}

export const isFieldDisplayNumberFormat = (
  format: FieldDisplayNumberFormat | FieldDisplayStringFormat | FieldDisplayDateTimeFormat,
): format is FieldDisplayNumberFormat => 'style' in format

export interface FieldDisplayStringFormat {
  type: 'default' | 'url'
}

export interface FieldDisplayDateTimeFormat {
  type: 'default' | 'relative'
}

export interface FieldDisplay {
  hidden: boolean
  sensitive: boolean
  flex: string
  format: FieldDisplayNumberFormat | FieldDisplayStringFormat | FieldDisplayDateTimeFormat | null
  image_uri_prefix: string | null
}

export interface UnionDisplay {
  hidden: boolean
  flex: string
}

export interface StructDisplay {
  order: string[]
}

export interface ListDisplay {
  hidden: boolean
  flex: number
}

export type Display = StructDisplay | FieldDisplay | UnionDisplay | ListDisplay
