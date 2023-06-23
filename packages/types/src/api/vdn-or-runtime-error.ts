import { AnyRuntimeError } from './error'
import { VDN, VDNGeneric } from './vdn'

/**
 * @type VDNOrRuntimeError
 * VDN or RuntimeError
 * @export
 */
export type VDNOrRuntimeError = AnyRuntimeError | VDN | VDNGeneric
