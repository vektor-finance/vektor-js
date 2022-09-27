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

import {
  AlertsApi,
  AssetsApi,
  BlockchainsApi,
  ErrorsApi,
  FunctionsApi,
  LabelsApi,
  SessionsApi,
  SignaturesApi,
  StreamsApi,
  UsersApi,
  VenuesApi,
  VxlApi,
} from './api/index'
import { Configuration } from './configuration'

export * from './api/index'
export interface APIOptions {
  configuration?: Configuration
  baseURL?: string
}

export type APIOptionsType = 'default' | 'local'

/** Option sets for connecting to Vektor's API */
export const options: Record<APIOptionsType, APIOptions> = {
  default: {
    baseURL: 'https://api.vektor.finance',
  },
  local: {
    baseURL: 'http://localhost:4000',
  },
}

export class API {
  public readonly assets: AssetsApi
  public readonly alerts: AlertsApi
  public readonly blockchains: BlockchainsApi
  public readonly errors: ErrorsApi
  public readonly functions: FunctionsApi
  public readonly labels: LabelsApi
  public readonly signatures: SignaturesApi
  public readonly sessions: SessionsApi
  public readonly streams: StreamsApi
  public readonly users: UsersApi
  public readonly venues: VenuesApi
  public readonly vxl: VxlApi

  constructor(protected readonly _options: APIOptions = options.default) {
    this.assets = new AssetsApi(_options?.configuration, _options?.baseURL)
    this.alerts = new AlertsApi(_options?.configuration, _options?.baseURL)
    this.blockchains = new BlockchainsApi(_options?.configuration, _options?.baseURL)
    this.errors = new ErrorsApi(_options?.configuration, _options?.baseURL)
    this.functions = new FunctionsApi(_options?.configuration, _options?.baseURL)
    this.labels = new LabelsApi(_options?.configuration, _options?.baseURL)
    this.sessions = new SessionsApi(_options?.configuration, _options?.baseURL)
    this.signatures = new SignaturesApi(_options?.configuration, _options?.baseURL)
    this.streams = new StreamsApi(_options?.configuration, _options?.baseURL)
    this.users = new UsersApi(_options?.configuration, _options?.baseURL)
    this.venues = new VenuesApi(_options?.configuration, _options?.baseURL)
    this.vxl = new VxlApi(_options?.configuration, _options?.baseURL)
  }
}
