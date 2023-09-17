import { Pagination } from './pagination'

export type PaneSource = 'static'
export type PaneState = 'running'
export interface PaneContent {}

export interface Pane {
    id: string
    workspace_id: string
    index: string
    last_updated_at: string
    source: PaneSource
    state: PaneState
    title: string
    content: PaneContent
    pagination: Pagination
}
