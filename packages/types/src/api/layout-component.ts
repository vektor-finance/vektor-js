import { AnyRuntimeError } from './error'
import { Pagination } from './pagination'
import { VDNOrVDNGeneric } from './vdn'

export interface VDNLayoutComponentContent {
  type: 'vdn'
  data: VDNOrVDNGeneric
}

export interface ErrorLayoutComponentContent {
  type: 'error'
  data: AnyRuntimeError
}

export type LayoutComponentContent = VDNLayoutComponentContent | ErrorLayoutComponentContent

export type LayoutComponentContentPayloadType = LayoutComponentContent['type']
export type LayoutComponentContentPayloadValue = LayoutComponentContent['data']

export type LayoutComponentSource = { type: 'live'; running: boolean } | { type: 'static' }
export type LayoutComponentContentType = 'vdn' | 'error'

export type LayoutComponentExpectedType = 'list' | 'struct' | 'primitive' | 'local_function_call'

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
