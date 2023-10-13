import { AnyRuntimeError } from './error'
import { LocalFunctionCall } from './local-function-call'
import { Pagination } from './pagination'
import { VDNOrVDNGeneric } from './vdn'

export interface VDNComponentContent {
  type: 'vdn'
  data: VDNOrVDNGeneric
}

export interface LocalFunctionComponentContent {
  type: 'local_function'
  data: LocalFunctionCall
}

export interface ErrorComponentContent {
  type: 'error'
  data: AnyRuntimeError
}

export type ComponentContent = LocalFunctionComponentContent | VDNComponentContent | ErrorComponentContent

export type ComponentContentPayloadType = ComponentContent['type']
export type ComponentContentPayloadData = ComponentContent['data']

export type ComponentSource = { type: 'live'; running: boolean } | { type: 'static' }
export type ComponentContentType = 'vdn' | 'local_function' | 'error'

export interface LayoutComponent {
  id: string
  layout_id: string
  index: number
  last_updated_at: string
  title: string
  source: ComponentSource
  content: ComponentContent | null
  pagination: Pagination
}

export type ComponentUpdateRequest = Partial<Pick<LayoutComponent, 'title' | 'pagination'>>
