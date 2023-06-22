import axios, {
  type AxiosInstance,
  type AxiosInterceptorOptions,
  type AxiosResponse,
  type CreateAxiosDefaults,
  type InternalAxiosRequestConfig,
} from 'axios'

export type InterceptorManager<V> = {
  onFulfilled?: ((value: V) => V | Promise<V>) | null
  onRejected?: ((error: unknown) => unknown) | null
  options?: AxiosInterceptorOptions
}

export type Interceptors = {
  request?: InterceptorManager<InternalAxiosRequestConfig>[]
  response?: InterceptorManager<AxiosResponse>[]
}

export type ApiConfig = {
  options?: CreateAxiosDefaults
  interceptors?: Interceptors
}

/**
 *
 */
export class Api {
  private readonly httpClient: AxiosInstance

  constructor(protected readonly config: ApiConfig) {
    this.httpClient = this.makeHttpClient(config)
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
