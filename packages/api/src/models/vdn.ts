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

import { ALL_VDN_ERRORS } from '.'
import { VDNAddress } from './vdnaddress'
import { VDNAsset } from './vdnasset'
import { VDNAssetSymbol } from './vdnasset-symbol'
import { VDNBalance } from './vdnbalance'
import { VDNBlock } from './vdnblock'
import { VDNBlockchain } from './vdnblockchain'
import { VDNBoolean } from './vdnboolean'
import { VDNBorrowQuote } from './vdnborrow-quote'
import { VDNBuyQuote } from './vdnbuy-quote'
import { VDNChangesetError } from './vdnchangeset-error'
import { VDNDateTime } from './vdndate-time'
import { VDNDecimal } from './vdndecimal'
import { VDNError } from './vdnerror'
import { VDNInteger } from './vdninteger'
import { VDNLabel } from './vdnlabel'
import { VDNLendBorrowed } from './vdnlend-borrowed'
import { VDNLendQuote } from './vdnlend-quote'
import { VDNLendSupplied } from './vdnlend-supplied'
import { VDNList } from './vdnlist'
import { VDNMap } from './vdnmap'
import { VDNNone } from './vdnnone'
import { VDNPrice } from './vdnprice'
import { VDNSellQuote } from './vdnsell-quote'
import { VDNStream } from './vdnstream'
import { VDNString } from './vdnstring'
import { VDNSymbol } from './vdnsymbol'
import { VDNTask } from './vdntask'
import { VDNTransactionHash } from './vdntransaction-hash'
import { VDNURL } from './vdnurl'
import { VDNVenue } from './vdnvenue'
import { VDNVenueType } from './vdnvenue-type'

/**
 * @type VDN
 * VXL data notation
 * @export
 */
export type VDN =
  | VDNAddress
  | VDNAsset
  | VDNAssetSymbol
  | VDNBalance
  | VDNBlock
  | VDNBlockchain
  | VDNBoolean
  | VDNBuyQuote
  | VDNChangesetError
  | VDNDateTime
  | VDNDecimal
  | VDNError
  | VDNInteger
  | VDNLabel
  | VDNLendBorrowed
  | VDNBorrowQuote
  | VDNLendQuote
  | VDNLendSupplied
  | VDNList
  | VDNMap
  | VDNNone
  | VDNPrice
  | VDNSellQuote
  | VDNStream
  | VDNString
  | VDNSymbol
  | VDNTask
  | VDNTransactionHash
  | VDNURL
  | VDNVenue
  | VDNVenueType

export type VDNType = VDN['type']
export type VDNValue = VDN['value']

export const isVDN = (vdn: VDN): vdn is VDN => vdn.type !== undefined && vdn.value !== undefined
export const isVDNError = (vdn: VDN): vdn is VDNError => vdn.type !== undefined && ALL_VDN_ERRORS.includes((vdn as VDNError).type)
