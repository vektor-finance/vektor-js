import type {
  Component,
  ComponentUpdateRequest,
  Workspace,
  WorkspaceCreateRequest,
  WorkspacesListRequestParams,
  WorkspaceUpdateRequest,
  WorkspaceWithoutComponents,
} from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Workspaces.
 */
export class WorkspacesApi extends BaseApi {
  // Workspaces

  /**
   * Retrieves a Workspace with the specified ID.
   */
  public get(id: string): Promise<ApiResponse<Workspace>> {
    return this.httpClient.get(`/workspaces/${id}`)
  }

  /**
   * Retrieves all Workspaces.
   */
  public list(params?: WorkspacesListRequestParams): Promise<ApiResponse<WorkspaceWithoutComponents[]>> {
    return this.httpClient.get('/workspaces', { params })
  }

  /**
   * Creates a new Workspace.
   */
  public create(payload: WorkspaceCreateRequest): Promise<ApiResponse<Workspace>> {
    return this.httpClient.post('/workspaces', payload)
  }

  /**
   * Updates a Workspace.
   */
  public update(id: string, payload: WorkspaceUpdateRequest): Promise<ApiResponse<void>> {
    return this.httpClient.patch(`/workspaces/${id}`, payload)
  }

  /**
   * Opens a Workspace.
   */
  public open(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.post(`/workspaces/${id}/open`)
  }

  /**
   * Deletes a Workspace with the specified ID.
   */
  public delete(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/workspaces/${id}`)
  }

  // Components

  /**
   * Retrieves a Component with the specified ID.
   */
  public getComponent(id: string): Promise<ApiResponse<Component>> {
    return this.httpClient.get(`/workspaces/component/${id}`)
  }

  /**
   * Updates a Component with the specified ID.
   */
  public updateComponent(id: string, payload: ComponentUpdateRequest): Promise<ApiResponse<void>> {
    return this.httpClient.patch(`/workspaces/component/${id}`, payload)
  }

  /**
   * Deletes a Component with the specified ID.
   */
  public deleteComponent(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/workspaces/component/${id}`)
  }
}
