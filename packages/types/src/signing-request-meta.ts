/* eslint-disable max-lines */
import type { Asset, NetworkID, Venue } from './api'
import { AccountID } from './signing'

export interface EVMLegacyGasFeeBase {
  gas_limit: string
  total_fee: string
  total_fee_usd: string
}

export interface EVMLegacyGasFee extends EVMLegacyGasFeeBase {
  type: 'evm_legacy'
  gas_price: string
}

export interface EVMEIP1559GasFee extends EVMLegacyGasFeeBase {
  type: 'evm_eip1559'
  max_fee_per_gas: string
  max_priority_fee_per_gas: string
}

export type EVMNetworkFee = EVMLegacyGasFee | EVMEIP1559GasFee

export interface NetworkFee {
  asset: Asset
  fee: EVMNetworkFee
}

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

export interface NFTCollection {
  address: string
  name: string
  network_id: NetworkID
}

export interface NFT {
  collection: NFTCollection
  id: number
}

export interface LockPosition {
  used: boolean
  unlocked_at: string
  voting_power: string
  locked_amount: string
  locked_asset: NFT
}

export interface ApproveRequestBaseMeta extends MetaBase {
  request_type: 'approve_request'
  amount: string
  grantor: AccountID
  spender: AccountID
}

export interface ApproveSpendRequestMeta extends ApproveRequestBaseMeta {
  asset: Asset
  type: 'spend_erc20'
}

export interface ApproveBorrowRequestMeta extends ApproveRequestBaseMeta {
  asset: Asset
  type: 'borrow_erc20'
}

export interface ApproveNFTRequestMeta extends ApproveRequestBaseMeta {
  asset: NFT
  type: 'spend_erc721'
}

export interface ApproveNFTCollectionRequestMeta extends ApproveRequestBaseMeta {
  asset: NFTCollection
  type: 'spend_erc721_collection'
}

export type ApproveRequestMeta =
  | ApproveSpendRequestMeta
  | ApproveBorrowRequestMeta
  | ApproveNFTRequestMeta
  | ApproveNFTCollectionRequestMeta

export interface WrapRequestMeta extends MetaBase {
  request_type: 'wrap_request'
  spend_from_label: AccountID
  amount: string
  native_asset: Asset
  wrapped_native_asset: Asset
  action: 'wrap' | 'unwrap'
}

export type UniswapV3Fees = 'very_low' | 'low' | 'medium' | 'high'

export interface UniswapV2TradeInfo {
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

export interface SolidlyTradeInfo {
  venue: string
  venue_type: 'solidly'
  path: Asset[]
}

export interface DexAggregatorTradeInfo {
  venue: string
  venue_type: 'dex_aggregator'
  route: string[]
}

export type TradeInfo =
  | UniswapV2TradeInfo
  | UniswapV3TradeInfo
  | CurveTradeInfo
  | SolidlyTradeInfo
  | DexAggregatorTradeInfo
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

export type SplitType = 'equal' | 'exact'

export interface Split {
  asset: Asset
  to_amount: string
  to_label: AccountID
}

export interface SplitRequestMeta extends MetaBase {
  request_type: 'split_request'
  from_amount: string
  from_label: AccountID
  split_type: SplitType
  splits: Split[]
}

export type APYType = 'fixed' | 'variable'

export interface LendRequestMeta extends MetaBase {
  request_type: 'lend_request'
  from: AccountID
  venue: Venue
  amount: string
  asset: Asset
  supply_apy: string
  supply_apy_type: APYType
}

export interface LendWithdrawRequestMeta extends MetaBase {
  request_type: 'lend_withdraw_request'
  from: AccountID
  venue: Venue
  amount: string
  lend_asset: Asset
  underlying_asset: Asset
}

export interface BorrowRequestMeta extends MetaBase {
  request_type: 'borrow_request'
  from: AccountID
  venue: Venue
  amount: string
  asset: Asset
  borrow_apy: string
  borrow_apy_type: APYType
}

export interface BorrowRepayRequestMeta extends MetaBase {
  request_type: 'borrow_repay_request'
  from: AccountID
  venue: Venue
  amount: string
  asset: Asset
}

export interface PermissionRequestMeta extends MetaBase {
  request_type: 'permission_request'
  grantor: AccountID
  spender: AccountID
  contract: AccountID
  permission: boolean
}

export type LPPoolType = 'pair' | 'multi' | 'weighted' | 'range'

export interface LPPoolInfo {
  name: string
  assets: Asset[]
  fee: string
  type: LPPoolType
  weights: string[]
}

export interface LPRange {
  lower: string
  upper: string
  in_range: boolean
}

export interface LPRangePositionInfo {
  id?: number
  range: LPRange
}

export interface LPDepositRequestMeta extends MetaBase {
  request_type: 'lp_deposit_request'
  venue: Venue
  assets: Asset[]
  amounts: string[]
  from: AccountID
  slippage_tolerance: string
  pool_info: LPPoolInfo
  position_info?: LPRangePositionInfo
}

export interface LPWithdrawRequestMeta extends MetaBase {
  request_type: 'lp_withdraw_request'
  venue: Venue
  assets: Asset[]
  amounts: string[]
  lp_amount: string
  from: AccountID
  slippage_tolerance: string
  pool_info: LPPoolInfo
  position_info?: LPRangePositionInfo
}

export interface BridgeRequestMeta extends MetaBase {
  request_type: 'bridge_request'
  send_amount: string
  receive_amount: string
  send_asset: Asset
  receive_asset: Asset
  sender: AccountID
  receiver: AccountID
  venue: Venue
  route: string
  receive_time_est: number
}

export interface CollateralRequestMeta extends MetaBase {
  request_type: 'collateral_request'
  from: AccountID
  asset: Asset
  venue: Venue
  action: 'enable' | 'disable'
}

export interface IncentivizeRequestMeta extends MetaBase {
  request_type: 'incentivize_request'
  venue: Venue
  asset: Asset
  amount: string
  from: AccountID
  pool_info: LPPoolInfo
  pool_venue: Venue
}

export interface LockRequestMeta extends MetaBase {
  request_type: 'lock_request'
  venue: Venue
  asset: Asset
  amount: string
  from: AccountID
  unlock_at: string
}

export interface VoteRequestMeta extends MetaBase {
  request_type: 'vote_request'
  pool_info: LPPoolInfo
  lock_position: LockPosition
  venue: Venue
  from: AccountID
}

export type SigningRequestMeta =
  | ApproveRequestMeta
  | BorrowRepayRequestMeta
  | BorrowRequestMeta
  | BridgeRequestMeta
  | BuyRequestMeta
  | LendRequestMeta
  | LendWithdrawRequestMeta
  | LPDepositRequestMeta
  | LPWithdrawRequestMeta
  | MoveRequestMeta
  | PermissionRequestMeta
  | SellRequestMeta
  | SplitRequestMeta
  | WrapRequestMeta
  | CollateralRequestMeta
  | IncentivizeRequestMeta
  | LockRequestMeta
  | VoteRequestMeta

export type SigningRequestType = SigningRequestMeta['request_type']
