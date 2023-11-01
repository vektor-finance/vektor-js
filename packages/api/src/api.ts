import axios from 'axios'

import {
  AlertsApi,
  AssetsApi,
  BlockchainsApi,
  FunctionsApi,
  LabelsApi,
  ReportsApi,
  SignaturesApi,
  TransactionsApi,
  TypesApi,
  UsersApi,
  VenuesApi,
  VxlApi,
} from './api/index'
import { LayoutsApi } from './api/layouts'
import type { ApiConfig, HttpClient } from './types'

export const defaultApiConfig: ApiConfig = {
  options: {
    baseURL: 'https://api.vektor.finance',
  },
}

/**
 * API class for making HTTP requests to the Vektor API.
 */
export class Api {
  public readonly alerts: AlertsApi
  public readonly assets: AssetsApi
  public readonly blockchains: BlockchainsApi
  public readonly functions: FunctionsApi
  public readonly labels: LabelsApi
  public readonly layouts: LayoutsApi
  public readonly reports: ReportsApi
  public readonly signatures: SignaturesApi
  public readonly transactions: TransactionsApi
  public readonly types: TypesApi
  public readonly users: UsersApi
  public readonly venues: VenuesApi
  public readonly vxl: VxlApi

  private readonly httpClient: HttpClient

  /**
   * Creates a new instance of the API class with the specified configuration.
   * @param config The configuration to use for the API.
   */
  constructor(protected readonly config: ApiConfig = {}) {
    this.httpClient = this.makeHttpClient(this.mergeDefaultConfig(config))

    this.alerts = new AlertsApi(this.httpClient)
    this.assets = new AssetsApi(this.httpClient)
    this.blockchains = new BlockchainsApi(this.httpClient)
    this.functions = new FunctionsApi(this.httpClient)
    this.labels = new LabelsApi(this.httpClient)
    this.layouts = new LayoutsApi(this.httpClient)
    this.reports = new ReportsApi(this.httpClient)
    this.signatures = new SignaturesApi(this.httpClient)
    this.transactions = new TransactionsApi(this.httpClient)
    this.types = new TypesApi(this.httpClient)
    this.users = new UsersApi(this.httpClient)
    this.venues = new VenuesApi(this.httpClient)
    this.vxl = new VxlApi(this.httpClient)
  }

  /**
   * Sets the authorization token to use for API requests.
   * @param token The authorization token to use.
   * @param tokenType The type of authorization token (e.g. Bearer).
   */
  public setAuthToken(token: string, tokenType = 'Bearer'): void {
    this.httpClient.defaults.headers.common.Authorization = `${tokenType} ${token}`
  }

  /**
   * Removes the authorization token from API requests.
   */
  public removeAuthToken(): void {
    this.httpClient.defaults.headers.common.Authorization = undefined
  }

  /**
   * Merges the specified configuration with the default API configuration.
   * @param config The configuration to merge with the default configuration.
   */
  private mergeDefaultConfig(config: ApiConfig): ApiConfig {
    return {
      ...defaultApiConfig,
      ...config,
      options: { ...defaultApiConfig.options, ...config?.options },
    }
  }

  /**
   * Creates a new HTTP client with the specified configuration.
   * @param config The configuration to use for the HTTP client.
   */
  private makeHttpClient(config: ApiConfig): HttpClient {
    const httpClient = axios.create(config?.options)

    if (config?.interceptors?.request) {
      config.interceptors.request.forEach(({ onSuccess, onError, options }) => {
        httpClient.interceptors.request.use(onSuccess, onError, options)
      })
    }

    if (config?.interceptors?.response) {
      config.interceptors.response.forEach(({ onSuccess, onError, options }) => {
        httpClient.interceptors.response.use(onSuccess, onError, options)
      })
    }

    return httpClient
  }
}
