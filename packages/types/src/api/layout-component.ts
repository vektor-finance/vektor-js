import type { Content } from './content'
import type { Pagination, UpdatePagination } from './pagination'

export type LayoutComponentSource = { type: 'live'; running: boolean } | { type: 'static' }
export type LayoutComponentExpectedType = 'list' | 'struct' | 'primitive' | 'local_function_call'

export interface LayoutComponent {
  id: string
  layout_id: string
  index: number
  last_updated_at: string
  title: string | null
  vxl: string
  source: LayoutComponentSource
  content: Content | null
  expected_type: LayoutComponentExpectedType
  pagination: Pagination | null
}

export type LayoutComponentUpdateRequest = Partial<Pick<LayoutComponent, 'title' | 'vxl'>> & {
  pagination?: UpdatePagination
}
