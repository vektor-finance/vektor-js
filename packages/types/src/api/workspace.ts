import { Component } from './component'
import { NetworkMode } from './network'

export interface Workspace {
  id: string
  created_at: string
  updated_at: string
  name: string
  network_mode: NetworkMode
  components: Component[]
  open: boolean
}

export type WorkspaceWithoutComponents = Omit<Workspace, 'components'>

export type WorkspaceCreateRequest = Partial<Pick<Workspace, 'name' | 'network_mode' | 'open'>>
export type WorkspaceUpdateRequest = Partial<Pick<Workspace, 'name'>>

export interface WorkspacesListRequestParams {
  network_mode?: NetworkMode
}
