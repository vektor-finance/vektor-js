import { NetworkMode } from './network'

export interface Label {
  address: string
  name: string
  network_mode: NetworkMode
  id: string
  created_at: string
  updated_at: string
}

export type LabelCreateRequest = Pick<Label, 'address' | 'name'> & Partial<Pick<Label, 'network_mode'>>
export type LabelUpdateRequest = Partial<Pick<Label, 'address' | 'name' | 'network_mode'>>

export interface LabelsListRequestParams {
  network_mode?: NetworkMode
}
