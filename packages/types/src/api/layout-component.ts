import { AnyRuntimeError } from './error'
import { LocalFunctionCall } from './local-function-call'
import { Pagination } from './pagination'
import { VDNOrVDNGeneric } from './vdn'

export interface VDNLayoutComponentContent {
  type: 'vdn'
  value: VDNOrVDNGeneric
}

export interface LocalFunctionLayoutComponentContent {
  type: 'local_function'
  value: LocalFunctionCall
}

export interface ErrorLayoutComponentContent {
  type: 'error'
  value: AnyRuntimeError
}

export type LayoutComponentContent =
  | LocalFunctionLayoutComponentContent
  | VDNLayoutComponentContent
  | ErrorLayoutComponentContent

export type LayoutComponentContentPayloadType = LayoutComponentContent['type']
export type LayoutComponentContentPayloadValue = LayoutComponentContent['value']

export type LayoutComponentSource = { type: 'live'; running: boolean } | { type: 'static' }
export type LayoutComponentContentType = 'vdn' | 'local_function' | 'error'

export interface LayoutComponent {
  id: string
  layout_id: string
  index: number
  last_updated_at: string
  title: string
  source: LayoutComponentSource
  content: LayoutComponentContent | null
  pagination: Pagination
}

export type ComponentUpdateRequest = Partial<Pick<LayoutComponent, 'title' | 'pagination'>>
