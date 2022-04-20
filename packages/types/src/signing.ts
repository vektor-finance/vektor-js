import { Asset, NetworkID } from '@vektor-finance/api'

import { TransactionPayload } from './transaction_payload'

/** Message format version */
export type MessageVersion = number

/**
 * Account and Sub Account identifier.
 * Specifies which account a particular object is associated with.
 */
export interface AccountIdentifier {
  address: string

  /**
   * Sub Account Identifier
   * e.g. ERC20 token identifier
   */
  sub_account?: {
    /**
     * Sub Account address
     * e.g. `0x...`
     */
    address: string
  }

  label?: string
}

/**
 *  Blockchain and network identification.
 *  Specifies which network a particular object is associated with.
 */
export interface NetworkIdentifier {
  /**
   * Blockchain identifier
   * e.g. `bitcoin`, `ethereum` etc
   */
  blockchain: string

  /**
   * Network identifier
   * e.g. `mainnet`, `ropsten`, `florencenet` etc
   */
  network: string

  /**
   * Sub Network identifier
   * e.g. specific shard or node
   */
  sub_network_identifier?: {
    /**
     * Sub Network identifier name
     * e.g. `shard_2`
     */
    network: string
  }
}

/** CurveType is the type of cryptographic curve associated with a PublicKey */
export type CurveType = 'secp256k1' | 'secp256r1' | 'edwards25519' | 'tweedle'

/** SignatureType is the type of a cryptographic signature */
export type SignatureType = 'ecdsa' | 'ecdsa_recovery' | 'ed25519' | 'schnorr_1' | 'schnorr_poseidon'

/**
 * SigningPayload is signed by the client with the keypair associated with an AccountIdentifier using the specified SignatureType
 * SignatureType can be optionally populated if there is a restriction on the signature scheme that can be used to sign the payload
 */
export interface SigningPayload {
  address?: string
  account_identifier?: AccountIdentifier
  hex_bytes: string
  signature_type?: SignatureType
}

export interface SigningRequest {
  /** Signing request uuid */
  id: string

  /** Account identification for payload */
  account_identifier: AccountIdentifier

  /** Blockchain and network (+ subnetwork) identification for payload */
  network_identifier: NetworkIdentifier

  /** Unsigned transaction payload to be passed to signer */
  unsigned_transaction: TransactionPayload

  /** Meta data regarding the signing request */
  meta: SigningRequestMeta
}

export interface SigningRequests {
  /** Payloads to be signed by signers */
  requests: SigningRequest[]
}

export interface SigningRequestCompleted {
  /** Signing request uuid */
  id: string
}

export interface SigningRequestCanceled {
  /** Signing request uuid */
  id: string

  /** Reason for cancelation */
  reason?: string
}

export interface AccountID {
  address: string
  label: string | null
  network_id: NetworkID
}

// Signing Request Meta Data

export interface EthereumNetworkFee {
  asset: Asset
  gas_limit: string
  gas_price: string
  fee: string
  fee_usd: string | null
}

export type NetworkFee = EthereumNetworkFee

export interface MetaBase {
  chain_id: number
  coin_type: number
  network_fee: NetworkFee
}

export interface MoveRequestMeta extends MetaBase {
  request_type: 'move_request'
  amount: string
  asset: Asset
  from: AccountID
  to: AccountID
}

export interface ApproveRequestMeta extends MetaBase {
  request_type: 'approve_request'
  amount: string
  asset: Asset
  grantor: AccountID
  spender: AccountID
}

export interface WrapRequestMeta extends MetaBase {
  request_type: 'wrap_request'
  spend_from_label: AccountID
  amount: string
  native_asset: Asset
  wrapped_native_asset: Asset
  action: 'wrap' | 'unwrap'
}

export type UniswapV3Fees = 'very_low' | 'low' | 'medium' | 'high'

export interface UniswapV2TradeInfo  {
  venue: string
  venue_type: 'uniswap_v2'
  path: Asset[]
}

export interface UniswapV3TradeInfo {
  venue: string
  venue_type: 'uniswap_v3'
  path: {
    assets: Asset[]
    fees: UniswapV3Fees[]
  }
}

export interface CurveTradeInfo {
  venue: string
  venue_type: 'curve'
  pool_name: string
  pool_address: string
}

export type TradeInfo = UniswapV2TradeInfo | UniswapV3TradeInfo | CurveTradeInfo
export type VenueType = TradeInfo['venue_type']

export interface BuyRequestMeta extends MetaBase {
  request_type: 'buy_request'
  spend_label: AccountID
  spend_asset: Asset
  spend_amount: string
  receive_asset: Asset
  receive_amount: string
  max_spend_amount: string
  slippage_tolerance: string
  exchange_rate: string
  trade_info: TradeInfo
}

export interface SellRequestMeta extends MetaBase {
  request_type: 'sell_request'
  spend_label: AccountID
  spend_asset: Asset
  receive_asset: Asset
  spend_amount: string
  receive_amount: string
  min_receive_amount: string
  exchange_rate: string
  slippage_tolerance: string
  trade_info: TradeInfo
}

export type SigningRequestMeta =
  | MoveRequestMeta
  | ApproveRequestMeta
  | WrapRequestMeta
  | BuyRequestMeta
  | SellRequestMeta

export type SigningRequestType = SigningRequestMeta['request_type']
