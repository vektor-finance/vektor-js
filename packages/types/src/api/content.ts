import type { AnyRuntimeError } from './error'
import type { VDNOrVDNGeneric } from './vdn'

export interface ContentVDN {
  type: 'vdn'
  data: VDNOrVDNGeneric
}

export interface ContentError {
  type: 'error'
  data: AnyRuntimeError
}

export type Content = ContentVDN | ContentError

export type ContentPayloadType = Content['type']
export type ContentPayloadValue = Content['data']
