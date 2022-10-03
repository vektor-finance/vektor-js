import type { Asset, Venue } from '@vektor-finance/api'

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

export interface ApproveRequestMeta extends MetaBase {
  request_type: 'approve_request'
  amount: string
  asset: Asset
  grantor: AccountID
  spender: AccountID
  type: 'spend_erc20' | 'borrow_erc20'
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
  type: 'compound_v3_comet'
  permission: boolean
  contract_name: string
}

export type SigningRequestMeta =
  | ApproveRequestMeta
  | BuyRequestMeta
  | BorrowRequestMeta
  | BorrowRepayRequestMeta
  | LendRequestMeta
  | LendWithdrawRequestMeta
  | MoveRequestMeta
  | SellRequestMeta
  | SplitRequestMeta
  | PermissionRequestMeta
  | WrapRequestMeta

export type SigningRequestType = SigningRequestMeta['request_type']
