import { AnyRuntimeError } from './error'
import { LocalFunctionCall } from './local-function-call'
import { Pagination } from './pagination'
import { VDNOrVDNGeneric } from './vdn'

export interface VDNPaneContent {
  type: 'vdn'
  data: VDNOrVDNGeneric
}

export interface LocalFunctionPaneContent {
  type: 'local_function'
  data: LocalFunctionCall
}

export interface ErrorPaneContent {
  type: 'error'
  data: AnyRuntimeError
}

export type PaneContent = LocalFunctionPaneContent | VDNPaneContent | ErrorPaneContent

export type PaneContentPayloadType = PaneContent['type']
export type PaneContentPayloadData = PaneContent['data']

export type PaneState = 'running' | 'paused' | 'loading' | 'closed'
export type PaneSource = 'live' | 'static'
export type PaneContentType = 'vdn' | 'local_function' | 'error'

export interface Pane {
  id: string
  workspace_id: string
  index: string
  last_updated_at: string
  title: string
  source: PaneSource
  content: PaneContent | null
  state: PaneState
  pagination: Pagination
}

export type PaneUpdateRequest = Partial<Pick<Pane, 'title'>>
