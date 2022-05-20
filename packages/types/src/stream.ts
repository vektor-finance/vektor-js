import { VDN } from '@vektor-finance/api'

export interface Stream {
  id: string
  created_at: string
  updated_at: string
  last_value: VDN
  last_value_updated_at: string
  update_count: number
}
