/* tslint:disable */
/* eslint-disable */
/**
 * vektor
 * Vektor API
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RuntimeError, RuntimeSignatureMismatchError } from '../error'
import { VDNOrRuntimeError, VXLType } from '.'
import { VDNAddress } from './vdnaddress'
import { VDNAlert } from './vdnalert'
import { VDNAlertState } from './vdnalert-state'
import { VDNAsset } from './vdnasset'
import { VDNAssetSymbol } from './vdnasset-symbol'
import { VDNBalance } from './vdnbalance'
import { VDNBlock } from './vdnblock'
import { VDNBlockchain } from './vdnblockchain'
import { VDNBoolean } from './vdnboolean'
import { VDNBorrowAccount } from './vdnborrow-account'
import { VDNBorrowMarket } from './vdnborrow-market'
import { VDNBorrowPosition } from './vdnborrow-position'
import { VDNBuyQuote } from './vdnbuy-quote'
import { VDNChangesetError } from './vdnchangeset-error'
import { VDNDateTime } from './vdndate-time'
import { VDNDecimal } from './vdndecimal'
import { VDNError } from './vdnerror'
import { VDNInteger } from './vdninteger'
import { VDNLabel } from './vdnlabel'
import { VDNLendMarket } from './vdnlend-market'
import { VDNLendPosition } from './vdnlend-position'
import { VDNList } from './vdnlist'
import { VDNLPPool } from './vdnlppool'
import { VDNLPPoolType } from './vdnlppool-type'
import { VDNLPPosition } from './vdnlpposition'
import { VDNLPQuote } from './vdnlpquote'
import { VDNMap } from './vdnmap'
import { VDNNone } from './vdnnone'
import { VDNPercentage } from './vdnpercentage'
import { VDNPrice } from './vdnprice'
import { VDNSellQuote } from './vdnsell-quote'
import { VDNStream } from './vdnstream'
import { VDNString } from './vdnstring'
import { VDNSuccess } from './vdnsuccess'
import { VDNSymbol } from './vdnsymbol'
import { VDNTask } from './vdntask'
import { VDNTransactionHash } from './vdntransaction-hash'
import { VDNURL } from './vdnurl'
import { VDNVenue } from './vdnvenue'
import { VDNVenueSymbol } from './vdnvenue-symbol'
import { VDNVenueType } from './vdnvenue-type'

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
  | VDNAsset
  | VDNAssetSymbol
  | VDNBalance
  | VDNBlock
  | VDNBlockchain
  | VDNBoolean
  | VDNBorrowAccount
  | VDNBorrowMarket
  | VDNBorrowPosition
  | VDNBuyQuote
  | VDNChangesetError
  | VDNDateTime
  | VDNDecimal
  | VDNError
  | VDNInteger
  | VDNLabel
  | VDNLendMarket
  | VDNLendPosition
  | VDNLPPool
  | VDNLPPoolType
  | VDNLPPosition
  | VDNLPQuote
  | VDNMap
  | VDNNone
  | VDNPercentage
  | VDNPrice
  | VDNSellQuote
  | VDNStream
  | VDNString
  | VDNSuccess
  | VDNSymbol
  | VDNTransactionHash
  | VDNURL
  | VDNVenue
  | VDNVenueSymbol
  | VDNVenueType

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
  typeof vdn.type === 'string' && (vdn as VDNError).type.endsWith('_error')

export const isVDNGeneric = (vdn: VDNOrVDNGeneric): vdn is VDNGeneric =>
  typeof vdn.type === 'object' &&
  'parameters' in vdn.type &&
  typeof vdn.type.type === 'string' &&
  vdn.value !== undefined

export const isVDNGenericType = (type: VXLType): type is VDNGenericType =>
  typeof type === 'object' && 'parameters' in type && 'type' in type

export const isVDNTask = (vdn: VDNOrVDNGeneric): vdn is VDNTask =>
  isVDNGeneric(vdn) && vdn.type.type === 'task' && typeof vdn.value === 'string'

export const isVDNList = (vdn: VDNOrVDNGeneric): vdn is VDNList =>
  isVDNGeneric(vdn) && vdn.type.type === 'list' && 'items' in vdn.type.parameters

export const isVDNStream = (vdn: VDNOrVDNGeneric): vdn is VDNStream =>
  vdn.type === 'stream' && typeof vdn.value === 'string'

export const isRuntimeError = (
  vdnOrRuntimeError: VDNOrRuntimeError,
): vdnOrRuntimeError is RuntimeError | RuntimeSignatureMismatchError =>
  (vdnOrRuntimeError.type == 'runtime_error' || vdnOrRuntimeError.type === 'runtime_signature_mismatch_error') &&
  'data' in vdnOrRuntimeError &&
  typeof vdnOrRuntimeError.data === 'object'
