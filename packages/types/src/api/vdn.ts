import { AnyRuntimeError } from './error'
import { VDNAddress } from './vdn-address'
import { VDNAlert, VDNAlertState } from './vdn-alert'
import { VDNAPY } from './vdn-apy'
import { VDNAsset, VDNAssetSymbol } from './vdn-asset'
import { VDNBalance } from './vdn-balance'
import { VDNBlock } from './vdn-block'
import { VDNBlockchain } from './vdn-blockchain'
import { VDNBoolean } from './vdn-boolean'
import { VDNBorrowAccount, VDNBorrowMarket, VDNBorrowPosition } from './vdn-borrow'
import { VDNBridgeQuote } from './vdn-bridge'
import { VDNBuyQuote } from './vdn-buy-quote'
import { VDNChangesetError } from './vdn-changeset-error'
import { VDNCSV } from './vdn-csv'
import { VDNDateTime } from './vdn-date-time'
import { VDNDecimal } from './vdn-decimal'
import { VDNError } from './vdn-error'
import { VDNFee } from './vdn-fee'
import { VDNFunctionSpec } from './vdn-function-spec'
import { VDNInteger } from './vdn-integer'
import { VDNLabel } from './vdn-label'
import { VDNLendMarket } from './vdn-lend-market'
import { VDNLendPosition } from './vdn-lend-position'
import { VDNList } from './vdn-list'
import { VDNLocalFunctionCall } from './vdn-local-function-call'
import { VDNLPPool, VDNLPPoolRange, VDNLPPoolType } from './vdn-lp-pool'
import { VDNLPPosition } from './vdn-lp-position'
import { VDNLPQuote } from './vdn-lp-quote'
import { VDNNFT, VDNNFTCollection } from './vdn-nft'
import { VDNNone } from './vdn-none'
import { VDNOrRuntimeError } from './vdn-or-runtime-error'
import { VDNPercentage } from './vdn-percentage'
import { VDNPositionType } from './vdn-position'
import { VDNPrice } from './vdn-price'
import { VDNSellQuote } from './vdn-sell-quote'
import { VDNStream } from './vdn-stream'
import { VDNString } from './vdn-string'
import { VDNSuccess } from './vdn-success'
import { VDNSymbol } from './vdn-symbol'
import { VDNTask } from './vdn-task'
import { VDNTransactionHash, VDNTransactionState, VDNTransactionType } from './vdn-transaction'
import { VDNURL } from './vdn-url'
import { VDNVenue, VDNVenueSymbol, VDNVenueType } from './vdn-venue'
import { VDNVXL } from './vdn-vxl'
import { VXLListType, VXLTaskType, VXLType } from './vxl'
// Concrete Types

/**
 * @type VDN
 * VXL data notation for concrete types
 * @export
 */
export type VDN =
  | VDNAddress
  | VDNAlert
  | VDNAlertState
  | VDNAPY
  | VDNAsset
  | VDNAssetSymbol
  | VDNBalance
  | VDNBlock
  | VDNBlockchain
  | VDNBoolean
  | VDNBorrowAccount
  | VDNBorrowMarket
  | VDNBorrowPosition
  | VDNBridgeQuote
  | VDNBuyQuote
  | VDNChangesetError
  | VDNCSV
  | VDNDateTime
  | VDNDecimal
  | VDNError
  | VDNFee
  | VDNFunctionSpec
  | VDNInteger
  | VDNLabel
  | VDNLendMarket
  | VDNLendPosition
  | VDNLocalFunctionCall
  | VDNLPPool
  | VDNLPPoolRange
  | VDNLPPoolType
  | VDNLPPosition
  | VDNLPQuote
  | VDNNFT
  | VDNNFTCollection
  | VDNNone
  | VDNPercentage
  | VDNPositionType
  | VDNPrice
  | VDNSellQuote
  | VDNStream
  | VDNString
  | VDNSuccess
  | VDNSymbol
  | VDNTransactionHash
  | VDNTransactionState
  | VDNTransactionType
  | VDNURL
  | VDNVenue
  | VDNVenueSymbol
  | VDNVenueType
  | VDNVXL

export type VDNType = VDN['type']
export type VDNValue = VDN['value']

// Generics

/**
 * @type VDN
 * VXL data notation for generic types
 * @export
 */
export type VDNGeneric = VDNTask | VDNList
export type VDNGenericType = VDNGeneric['type']
export type VDNGenericValue = VDNGeneric['value']

export type VDNOrVDNGeneric = VDN | VDNGeneric

// Type guards

export const isVDN = (vdn: VDNOrVDNGeneric): vdn is VDN => typeof vdn.type === 'string' && vdn.value !== undefined

export const isVDNType = (type: VXLType): type is VDNType => typeof type === 'string'

export const isVDNError = (vdn: VDNOrVDNGeneric): vdn is VDNError =>
  typeof vdn.type === 'string' && vdn.type.endsWith('_error')

export const isVDNStruct = (vdn: VDNOrVDNGeneric): vdn is VDN =>
  !isVDNGeneric(vdn) && typeof vdn.value === 'object' && vdn.value !== null

export const isVDNGeneric = (vdn: VDNOrVDNGeneric): vdn is VDNGeneric =>
  typeof vdn.type === 'object' &&
  'parameters' in vdn.type &&
  typeof vdn.type.type === 'string' &&
  vdn.value !== undefined

export const isVDNGenericType = (type: VXLType): type is VDNGenericType =>
  typeof type === 'object' && 'parameters' in type && 'type' in type

export const isVXLListType = (type: VXLType): type is VXLListType => isVDNGenericType(type) && type.type === 'list'

export const isVXLTaskType = (type: VXLType): type is VXLTaskType => isVDNGenericType(type) && type.type === 'task'

export const isVDNTask = (vdn: VDNOrVDNGeneric): vdn is VDNTask =>
  isVDNGeneric(vdn) && vdn.type.type === 'task' && typeof vdn.value === 'string'

export const isVDNList = (vdn: VDNOrVDNGeneric): vdn is VDNList =>
  isVDNGeneric(vdn) && vdn.type.type === 'list' && 'items' in vdn.type.parameters

export const isVDNStream = (vdn: VDNOrVDNGeneric): vdn is VDNStream =>
  vdn.type === 'stream' && typeof vdn.value === 'string'

export const isRuntimeError = (vdnOrRuntimeError: VDNOrRuntimeError): vdnOrRuntimeError is AnyRuntimeError =>
  [
    'runtime_error',
    'runtime_invalid_field_error',
    'runtime_signature_mismatch_error',
    'runtime_not_a_list_error',
  ].includes(vdnOrRuntimeError.type as string) &&
  'data' in vdnOrRuntimeError &&
  typeof vdnOrRuntimeError.data === 'object'
