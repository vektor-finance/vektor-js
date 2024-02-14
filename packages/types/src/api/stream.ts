import { Content } from './content'
import { NetworkMode } from './network'
import type { Pagination, UpdatePagination } from './pagination'

export interface Stream {
  id: string
  content: Content | null
  last_updated_at: string | null
  pagination: Pagination | null
  vxl: string
}

export type StreamUpdateRequest = Partial<Pick<Stream, 'vxl'>> & {
  pagination?: UpdatePagination
}

export interface StreamsListRequestParams {
  network_mode?: NetworkMode
}
