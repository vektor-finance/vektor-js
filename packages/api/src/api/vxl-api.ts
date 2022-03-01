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

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'
import { Configuration } from '../configuration'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setBearerAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common'
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base'
// @ts-ignore
import { VXLSubmitRequest } from '../models'
// @ts-ignore
import { VXLSubmitResponse } from '../models'
/**
 * VxlApi - axios parameter creator
 * @export
 */
export const VxlApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Submit a VXL command and receive immediate response or task_id to asynchronous task
     * @summary Submit VXL command
     * @param {VXLSubmitRequest} vXLSubmitRequest VXL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submit: async (vXLSubmitRequest: VXLSubmitRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'vXLSubmitRequest' is not null or undefined
      assertParamExists('submit', 'vXLSubmitRequest', vXLSubmitRequest)
      const localVarPath = `/vxl/submit`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication authorization required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(vXLSubmitRequest, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * VxlApi - functional programming interface
 * @export
 */
export const VxlApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = VxlApiAxiosParamCreator(configuration)
  return {
    /**
     * Submit a VXL command and receive immediate response or task_id to asynchronous task
     * @summary Submit VXL command
     * @param {VXLSubmitRequest} vXLSubmitRequest VXL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async submit(
      vXLSubmitRequest: VXLSubmitRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VXLSubmitResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.submit(vXLSubmitRequest, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * VxlApi - factory interface
 * @export
 */
export const VxlApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = VxlApiFp(configuration)
  return {
    /**
     * Submit a VXL command and receive immediate response or task_id to asynchronous task
     * @summary Submit VXL command
     * @param {VXLSubmitRequest} vXLSubmitRequest VXL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submit(vXLSubmitRequest: VXLSubmitRequest, options?: any): AxiosPromise<VXLSubmitResponse> {
      return localVarFp.submit(vXLSubmitRequest, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * VxlApi - object-oriented interface
 * @export
 * @class VxlApi
 * @extends {BaseAPI}
 */
export class VxlApi extends BaseAPI {
  /**
   * Submit a VXL command and receive immediate response or task_id to asynchronous task
   * @summary Submit VXL command
   * @param {VXLSubmitRequest} vXLSubmitRequest VXL
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VxlApi
   */
  public submit(vXLSubmitRequest: VXLSubmitRequest, options?: AxiosRequestConfig) {
    return VxlApiFp(this.configuration)
      .submit(vXLSubmitRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
