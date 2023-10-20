import { AnyRuntimeError } from './error'
import { LocalFunctionCall } from './local-function-call'
import { Pagination } from './pagination'
import { VDNOrVDNGeneric } from './vdn'

export interface VDNLayoutComponentContent {
  type: 'vdn'
  data: VDNOrVDNGeneric
}

export interface LocalFunctionLayoutComponentContent {
  type: 'local_function'
  data: LocalFunctionCall
}

export interface ErrorLayoutComponentContent {
  type: 'error'
  data: AnyRuntimeError
}

export type LayoutComponentContent =
  | LocalFunctionLayoutComponentContent
  | VDNLayoutComponentContent
  | ErrorLayoutComponentContent

export type LayoutComponentContentPayloadType = LayoutComponentContent['type']
export type LayoutComponentContentPayloadValue = LayoutComponentContent['data']

export type LayoutComponentSource = { type: 'live'; running: boolean } | { type: 'static' }
export type LayoutComponentContentType = 'vdn' | 'local_function' | 'error'

export type LayoutComponentExpectedType = 'list' | 'struct' | 'primitive'

export interface LayoutComponent {
  id: string
  layout_id: string
  index: number
  last_updated_at: string
  title: string
  source: LayoutComponentSource
  content: LayoutComponentContent | null
  expected_type: LayoutComponentExpectedType
  pagination: Pagination
}

export type ComponentUpdateRequest = Partial<Pick<LayoutComponent, 'title' | 'pagination'>>
