import type {
  ComponentUpdateRequest,
  Layout,
  LayoutComponent,
  LayoutCreateRequest,
  LayoutsListRequestParams,
  LayoutUpdateRequest,
  LayoutWithoutComponents,
} from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Layouts.
 */
export class LayoutsApi extends BaseApi {
  // Layouts

  /**
   * Retrieves a Layout with the specified ID.
   */
  public get(id: string): Promise<ApiResponse<Layout>> {
    return this.httpClient.get(`/layouts/${id}`)
  }

  /**
   * Retrieves all Layouts.
   */
  public list(params?: LayoutsListRequestParams): Promise<ApiResponse<LayoutWithoutComponents[]>> {
    return this.httpClient.get('/layouts', { params })
  }

  /**
   * Creates a new Layout.
   */
  public create(payload: LayoutCreateRequest): Promise<ApiResponse<Layout>> {
    return this.httpClient.post('/layouts', payload)
  }

  /**
   * Updates a Layout.
   */
  public update(id: string, payload: LayoutUpdateRequest): Promise<ApiResponse<void>> {
    return this.httpClient.patch(`/layouts/${id}`, payload)
  }

  /**
   * Opens a Layout.
   */
  public open(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.post(`/layouts/${id}/open`)
  }

  /**
   * Deletes a Layout with the specified ID.
   */
  public delete(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/layouts/${id}`)
  }

  // Components

  /**
   * Retrieves a LayoutComponent with the specified ID.
   */
  public getComponent(id: string): Promise<ApiResponse<LayoutComponent>> {
    return this.httpClient.get(`/layouts/component/${id}`)
  }

  /**
   * Updates a LayoutComponent with the specified ID.
   */
  public updateComponent(id: string, payload: ComponentUpdateRequest): Promise<ApiResponse<void>> {
    return this.httpClient.patch(`/layouts/component/${id}`, payload)
  }

  /**
   * Deletes a LayoutComponent with the specified ID.
   */
  public deleteComponent(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/layouts/component/${id}`)
  }
}
