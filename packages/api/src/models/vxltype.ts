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

import { UnionType } from './union-type'
import { VDNGenericType, VDNType } from './vdn'

/**
 * @type VXLType
 * VXL Type
 * @export
 */
// HACK: add them on for local app support
export type VXLType = VDNType | VDNGenericType | UnionType | 'workspace' | 'function'
