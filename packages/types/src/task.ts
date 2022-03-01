import { VDN } from '@vektor-finance/api'

export interface TaskState {
  id: string
  state: 'success' | 'error'
  result: VDN
}
