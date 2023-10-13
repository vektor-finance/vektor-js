import { LayoutComponent } from './component'
import { NetworkMode } from './network'

export interface Layout {
  id: string
  created_at: string
  updated_at: string
  name: string
  network_mode: NetworkMode
  components: LayoutComponent[]
  open: boolean
}

export type LayoutWithoutComponents = Omit<Layout, 'components'>

export type LayoutCreateRequest = Partial<Pick<Layout, 'name' | 'network_mode' | 'open'>>
export type LayoutUpdateRequest = Partial<Pick<Layout, 'name'>>

export interface LayoutsListRequestParams {
  network_mode?: NetworkMode
}
