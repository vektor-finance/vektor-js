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

import globalAxios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'

import { BASE_PATH, BaseAPI, RequestArgs } from '../base'
import { createRequestFunction, DUMMY_BASE_URL, setBearerAuthToObject, setSearchParams, toPathString } from '../common'
import { Configuration } from '../configuration'
import { Venue } from '../models'
/**
 * VenuesApi - axios parameter creator
 * @export
 */
export const VenuesApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * List all supported venues for an authenticated user
     * @summary List supported venues
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/venues`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication authorization required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * List all supported venue symbols for an authenticated user
     * @summary List supported venue symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    symbols: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/venues/symbols`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication authorization required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * VenuesApi - functional programming interface
 * @export
 */
export const VenuesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = VenuesApiAxiosParamCreator(configuration)
  return {
    /**
     * List all supported venues for an authenticated user
     * @summary List supported venues
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async list(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Venue>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.list(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * List all supported venue symbols for an authenticated user
     * @summary List supported venue symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async symbols(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.symbols(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * VenuesApi - factory interface
 * @export
 */
export const VenuesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = VenuesApiFp(configuration)
  return {
    /**
     * List all supported venues for an authenticated user
     * @summary List supported venues
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(options?: any): AxiosPromise<Array<Venue>> {
      return localVarFp.list(options).then((request) => request(axios, basePath))
    },
    /**
     * List all supported venue symbols for an authenticated user
     * @summary List supported venue symbols
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    symbols(options?: any): AxiosPromise<Array<string>> {
      return localVarFp.symbols(options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * VenuesApi - object-oriented interface
 * @export
 * @class VenuesApi
 * @extends {BaseAPI}
 */
export class VenuesApi extends BaseAPI {
  /**
   * List all supported venues for an authenticated user
   * @summary List supported venues
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VenuesApi
   */
  public list(options?: AxiosRequestConfig) {
    return VenuesApiFp(this.configuration)
      .list(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List all supported venue symbols for an authenticated user
   * @summary List supported venue symbols
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VenuesApi
   */
  public symbols(options?: AxiosRequestConfig) {
    return VenuesApiFp(this.configuration)
      .symbols(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
