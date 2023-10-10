import { NetworkMode } from './network'
import { Pane } from './pane'

export interface Workspace {
  id: string
  created_at: string
  updated_at: string
  name: string
  network_mode: NetworkMode
  panes: Pane[]
  open: boolean
}

export type WorkspaceWithoutPanes = Omit<Workspace, 'panes'>

export type WorkspaceCreateRequest = Partial<Pick<Workspace, 'name' | 'network_mode' | 'open'>>
export type WorkspaceUpdateRequest = Partial<Pick<Workspace, 'name'>>

export interface WorkspacesListRequestParams {
  network_mode?: NetworkMode
}
