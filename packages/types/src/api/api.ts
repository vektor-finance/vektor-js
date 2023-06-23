import {
  type AxiosInterceptorOptions,
  type AxiosResponse,
  type CreateAxiosDefaults,
  type InternalAxiosRequestConfig,
} from 'axios'

export interface InterceptorManager<V> {
  onFulfilled?: ((value: V) => V | Promise<V>) | null
  onRejected?: ((error: unknown) => unknown) | null
  options?: AxiosInterceptorOptions
}

export interface Interceptors {
  request?: InterceptorManager<InternalAxiosRequestConfig>[]
  response?: InterceptorManager<AxiosResponse>[]
}

export interface ApiConfig {
  options?: CreateAxiosDefaults
  interceptors?: Interceptors
}
