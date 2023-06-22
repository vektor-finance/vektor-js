import type { ApiConfig } from '@vektor-finance/types'
import axios, { type AxiosInstance } from 'axios'

import {
  AlertsApi,
  AssetsApi,
  BlockchainsApi,
  FunctionsApi,
  LabelsApi,
  SessionsApi,
  SignaturesApi,
  StreamsApi,
  TypesApi,
  UsersApi,
  VenuesApi,
  VxlApi,
} from './api/index'

/**
 *
 */
export class Api {
  public readonly alerts: AlertsApi
  public readonly assets: AssetsApi
  public readonly blockchains: BlockchainsApi
  public readonly functions: FunctionsApi
  public readonly labels: LabelsApi
  public readonly sessions: SessionsApi
  public readonly signatures: SignaturesApi
  public readonly streams: StreamsApi
  public readonly types: TypesApi
  public readonly users: UsersApi
  public readonly venues: VenuesApi
  public readonly vxl: VxlApi

  private readonly httpClient: AxiosInstance

  constructor(protected readonly config: ApiConfig) {
    this.httpClient = this.makeHttpClient(config)

    this.alerts = new AlertsApi(this.httpClient)
    this.assets = new AssetsApi(this.httpClient)
    this.blockchains = new BlockchainsApi(this.httpClient)
    this.functions = new FunctionsApi(this.httpClient)
    this.labels = new LabelsApi(this.httpClient)
    this.sessions = new SessionsApi(this.httpClient)
    this.signatures = new SignaturesApi(this.httpClient)
    this.streams = new StreamsApi(this.httpClient)
    this.types = new TypesApi(this.httpClient)
    this.users = new UsersApi(this.httpClient)
    this.venues = new VenuesApi(this.httpClient)
    this.vxl = new VxlApi(this.httpClient)
  }

  /**
   *
   */
  private makeHttpClient(config: ApiConfig) {
    const httpClient = axios.create(config?.options)

    if (config?.interceptors?.request) {
      config.interceptors.request.forEach(({ onFulfilled, onRejected, options }) => {
        httpClient.interceptors.request.use(onFulfilled, onRejected, options)
      })
    }

    if (config?.interceptors?.response) {
      config.interceptors.response.forEach(({ onFulfilled, onRejected, options }) => {
        httpClient.interceptors.response.use(onFulfilled, onRejected, options)
      })
    }

    return httpClient
  }
}
