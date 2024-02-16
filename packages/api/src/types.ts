/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AxiosError,
  type AxiosInstance,
  type AxiosInterceptorOptions,
  type AxiosResponse,
  type CreateAxiosDefaults,
  type InternalAxiosRequestConfig,
} from 'axios'

export interface InterceptorManager<V> {
  onSuccess?: ((value: V) => V | Promise<V>) | null
  onError?: ((error: any) => any) | null
  options?: AxiosInterceptorOptions
}

export interface Interceptors {
  request?: InterceptorManager<InternalAxiosRequestConfig>[]
  response?: InterceptorManager<AxiosResponse>[]
}

export interface ApiOptions {
  options?: CreateAxiosDefaults
  interceptors?: Interceptors
}

export type ApiResponse<T = unknown> = AxiosResponse<T>
export type HttpClient = AxiosInstance
export type ApiError<T = unknown, D = any> = AxiosError<T, D>
