import type { VDN } from './api'

export interface TaskState {
  id: string
  state: 'success' | 'error'
  result: VDN
}
