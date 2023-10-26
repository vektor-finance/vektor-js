import { LayoutComponent } from './layout-component'
import { NetworkMode } from './network'

export interface Layout {
  id: string
  created_at: string
  updated_at: string
  name: string
  description: string | null
  network_mode: NetworkMode
  components: LayoutComponent[]
  open: boolean
}

export type LayoutWithoutComponents = Omit<Layout, 'components'>

export type LayoutCreateRequest = Pick<Layout, 'name' | 'network_mode'> & Partial<Pick<Layout, 'description' | 'open'>>
export type LayoutUpdateRequest = Partial<Pick<Layout, 'name' | 'description'>>

export interface LayoutsListRequestParams {
  network_mode?: NetworkMode
}
