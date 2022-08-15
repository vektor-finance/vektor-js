import type { NetworkID } from '@vektor-finance/api'

import type { SigningRequestMeta } from './signing-request-meta'

// Copied from '@vektor-finance/signing-common' but had build issues
export interface EthereumTransaction {
  to: string
  value: string
  gasPrice: string
  gasLimit: string
  maxFeePerGas?: typeof undefined
  maxPriorityFeePerGas?: typeof undefined
  nonce: string
  data?: string
  chainId: number
  txType?: number
}

export type EthereumAccessList = {
  address: string
  storageKeys: string[]
}

export type EthereumTransactionEIP1559 = {
  to: string
  value: string
  gasLimit: string
  gasPrice?: typeof undefined
  nonce: string
  data?: string
  chainId: number
  maxFeePerGas: string
  maxPriorityFeePerGas: string
  accessList?: EthereumAccessList[]
}

export type EVMTransactionSigningRequestPayload = EthereumTransaction | EthereumTransactionEIP1559

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
  unsigned_transaction: EVMTransactionSigningRequestPayload

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
