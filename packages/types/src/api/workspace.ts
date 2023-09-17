import { NetworkMode } from './network'
import { Pane } from './pane'

export interface Workspace {
  id: string
  created_at: string
  updated_at: string
  name: string
  network_mode: NetworkMode
  panes: Pane[] | null
  open: boolean
}
