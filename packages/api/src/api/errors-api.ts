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
import {
  createRequestFunction,
  DUMMY_BASE_URL,
  setBearerAuthToObject,
  setSearchParams,
  toPathString,
} from '../common'
import { Configuration } from '../configuration'
import { ErrorDescriptor } from '../models'
/**
 * ErrorsApi - axios parameter creator
 * @export
 */
export const ErrorsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * List all errors for an authenticated user
     * @summary List errors
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/errors`
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
 * ErrorsApi - functional programming interface
 * @export
 */
export const ErrorsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ErrorsApiAxiosParamCreator(configuration)
  return {
    /**
     * List all errors for an authenticated user
     * @summary List errors
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async list(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ErrorDescriptor>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.list(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ErrorsApi - factory interface
 * @export
 */
export const ErrorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = ErrorsApiFp(configuration)
  return {
    /**
     * List all errors for an authenticated user
     * @summary List errors
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(options?: any): AxiosPromise<Array<ErrorDescriptor>> {
      return localVarFp.list(options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * ErrorsApi - object-oriented interface
 * @export
 * @class ErrorsApi
 * @extends {BaseAPI}
 */
export class ErrorsApi extends BaseAPI {
  /**
   * List all errors for an authenticated user
   * @summary List errors
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ErrorsApi
   */
  public list(options?: AxiosRequestConfig) {
    return ErrorsApiFp(this.configuration)
      .list(options)
      .then((request) => request(this.axios, this.basePath))
  }
}