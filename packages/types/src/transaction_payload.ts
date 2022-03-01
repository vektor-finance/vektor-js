export interface EthereumTransactionPayload {
  from: string
  to: string
  data: string
  gasPrice?: string
  gas?: string
  value?: string
  nonce?: string
  chainId?: string
}

export type TransactionPayload = EthereumTransactionPayload
