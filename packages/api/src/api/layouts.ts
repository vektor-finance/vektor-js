import type {
  Layout,
  LayoutComponent,
  LayoutComponentsPositions,
  LayoutComponentsPositionsUpdateRequest,
  LayoutComponentUpdateRequest,
  LayoutCreateRequest,
  LayoutsListRequestParams,
  LayoutUpdateRequest,
  LayoutWithoutNested,
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
  public list(params?: LayoutsListRequestParams): Promise<ApiResponse<LayoutWithoutNested[]>> {
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

  /**
   * Clears a layout of components i.e. deletes them all
   */
  public clear(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/layouts/${id}/components`)
  }

  // Components

  /**
   * Retrieves a LayoutComponent with the specified ID.
   */
  public getLayoutComponent(id: string): Promise<ApiResponse<LayoutComponent>> {
    return this.httpClient.get(`/layouts/component/${id}`)
  }

  /**
   * Updates a LayoutComponent with the specified ID.
   */
  public updateLayoutComponent(id: string, payload: LayoutComponentUpdateRequest): Promise<ApiResponse<void>> {
    return this.httpClient.patch(`/layouts/component/${id}`, payload)
  }

  /**
   * Deletes a LayoutComponent with the specified ID.
   */
  public deleteLayoutComponent(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/layouts/component/${id}`)
  }

  // Positions

  /**
   * Retrieves a LayoutComponentsPositions with the specified layout ID.
   */
  public getLayoutComponentsPositions(id: string): Promise<ApiResponse<LayoutComponentsPositions>> {
    return this.httpClient.get(`/layouts/${id}/positions`)
  }

  /**
   * Updates a LayoutComponentsPositions with the specified ID.
   */
  public updateLayoutComponentsPositions(
    id: string,
    payload: LayoutComponentsPositionsUpdateRequest,
  ): Promise<ApiResponse<void>> {
    return this.httpClient.put(`/layouts/${id}/positions`, payload)
  }

  /**
   * Deletes a LayoutComponentsPositions with the specified ID.
   */
  public deleteLayoutComponentsPositions(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/layouts/${id}/positions`)
  }
}
