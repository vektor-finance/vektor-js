import { LayoutComponent } from './layout-component'
import { LayoutComponentsPositions } from './layout-components-positions'
import { NetworkMode } from './network'

export interface Layout {
  id: string
  created_at: string
  updated_at: string
  name: string
  description: string | null
  network_mode: NetworkMode
  components: LayoutComponent[]
  positions: LayoutComponentsPositions | null
  open: boolean
}

export type LayoutWithoutNested = Omit<Layout, 'components' | 'positions'>

export type LayoutCreateRequest = Pick<Layout, 'name'> & Partial<Pick<Layout, 'description' | 'open' | 'network_mode'>>
export type LayoutUpdateRequest = Partial<Pick<Layout, 'name' | 'description'>>
export type LayoutCloneRequest = Partial<Pick<Layout, 'name' | 'description'>>

export interface LayoutsListRequestParams {
  network_mode?: NetworkMode
}
