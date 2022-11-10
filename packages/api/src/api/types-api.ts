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
import { StructSpec } from '../models'

/**
 * TypesApi - axios parameter creator
 * @export
 */
export const TypesApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * List structs, their fields and types for an authenticated user
     * @summary List structs, their fields and types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    structsList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/types/structs`
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
 * TypesApi - functional programming interface
 * @export
 */
export const TypesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TypesApiAxiosParamCreator(configuration)
  return {
    /**
     * List structs, their fields and types for an authenticated user
     * @summary List structs, their fields and types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async structsList(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<StructSpec>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.structsList(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * TypesApi - factory interface
 * @export
 */
export const TypesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = TypesApiFp(configuration)
  return {
    /**
     * List structs, their fields and types for an authenticated user
     * @summary List structs, their fields and types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    structsList(options?: any): AxiosPromise<Array<StructSpec>> {
      return localVarFp.structsList(options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * TypesApi - object-oriented interface
 * @export
 * @class TypesApi
 * @extends {BaseAPI}
 */
export class TypesApi extends BaseAPI {
  /**
   * List structs, their fields and types for an authenticated user
   * @summary List structs, their fields and types
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TypesApi
   */
  public structsList(options?: AxiosRequestConfig) {
    return TypesApiFp(this.configuration)
      .structsList(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
