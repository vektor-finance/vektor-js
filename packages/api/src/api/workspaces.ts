import type {
  Pane,
  PaneUpdateRequest,
  Workspace,
  WorkspaceCreateRequest,
  WorkspacesListRequestParams,
  WorkspaceUpdateRequest,
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
  public list(params?: WorkspacesListRequestParams): Promise<ApiResponse<Workspace[]>> {
    return this.httpClient.get('/workspaces', {
      params: {
        network_mode: params?.networkMode, // TODO: Remove this?
      },
    })
  }

  /**
   * Creates a new Workspace.
   */
  public create(payload: WorkspaceCreateRequest): Promise<ApiResponse<Workspace>> {
    return this.httpClient.post('/workspaces/new', payload)
  }

  /**
   * Updates a Workspace.
   */
  public update(id: string, payload: WorkspaceUpdateRequest): Promise<ApiResponse<Workspace>> {
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

  //   /**
  //    * Retrieves all Workspace symbols.
  //    */
  //   public symbols(): Promise<ApiResponse<string[]>> {
  //     return this.httpClient.get('/workspaces/symbols')
  //   }

  // Panes

  /**
   * Retrieves a Pane with the specified ID.
   */
  public getPane(id: string): Promise<ApiResponse<Pane>> {
    return this.httpClient.get(`/workspaces/pane/${id}`)
  }

  /**
   * Updates a Pane with the specified ID.
   */
  public updatePane(id: string, payload: PaneUpdateRequest): Promise<ApiResponse<Pane>> {
    return this.httpClient.patch(`/workspaces/pane/${id}`, payload)
  }

  /**
   * Deletes a Pane with the specified ID.
   */
  public deletePane(id: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete(`/workspaces/pane/${id}`)
  }
}
