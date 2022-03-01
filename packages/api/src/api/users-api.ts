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
import { ResetPasswordRequest } from '../models'
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Reset users password
     * @summary Reset user password
     * @param {ResetPasswordRequest} resetPasswordRequest Reset password request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    password: async (
      resetPasswordRequest: ResetPasswordRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'resetPasswordRequest' is not null or undefined
      assertParamExists('password', 'resetPasswordRequest', resetPasswordRequest)
      const localVarPath = `/users/reset_password`
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
      localVarRequestOptions.data = serializeDataIfNeeded(resetPasswordRequest, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
  return {
    /**
     * Reset users password
     * @summary Reset user password
     * @param {ResetPasswordRequest} resetPasswordRequest Reset password request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async resetPassword(
      resetPasswordRequest: ResetPasswordRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.password(resetPasswordRequest, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = UsersApiFp(configuration)
  return {
    /**
     * Reset users password
     * @summary Reset user password
     * @param {ResetPasswordRequest} resetPasswordRequest Reset password request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetPassword(resetPasswordRequest: ResetPasswordRequest, options?: any): AxiosPromise<void> {
      return localVarFp.resetPassword(resetPasswordRequest, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
  /**
   * Reset users password
   * @summary Reset user password
   * @param {ResetPasswordRequest} resetPasswordRequest Reset password request
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public resetPassword(resetPasswordRequest: ResetPasswordRequest, options?: AxiosRequestConfig) {
    return UsersApiFp(this.configuration)
      .resetPassword(resetPasswordRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
