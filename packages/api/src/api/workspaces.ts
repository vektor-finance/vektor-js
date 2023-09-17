import type { Workspace, WorkspaceCreateRequest, WorkspacesListRequestParams } from '@vektor-finance/types'

import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Workspaces.
 */
export class WorkspacesApi extends BaseApi {
  // Workspaces

  /**
   * Creates a new Workspace.
   */
  public create(payload: WorkspaceCreateRequest): Promise<ApiResponse<Workspace>> {
    return this.httpClient.post<Workspace>('/workspaces/new', payload)
  }

  /**
   * Retrieves a Workspace with the specified ID.
   */
  public get(id: string): Promise<ApiResponse<Workspace>> {
    return this.httpClient.get<Workspace>(`/workspaces/${id}`)
  }

  /**
   * Retrieves all Workspaces.
   */
  public list(params?: WorkspacesListRequestParams): Promise<ApiResponse<Workspace[]>> {
    return this.httpClient.get<Workspace[]>('/workspaces', {
      params: {
        network_mode: params?.networkMode, // TODO: Remove this?
      },
    })
  }

  /**
   * Opens a Workspace.
   */
  public open(id: string): Promise<ApiResponse<Workspace>> {
    return this.httpClient.post<Workspace>(`/workspaces/${id}/open`)
  }

  /**
   * Deletes a Workspace with the specified ID.
   */
  public delete(workspaceId: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/workspaces/${workspaceId}`)
  }

  // Panes

  /**
   * Deletes a Pane with the specified ID.
   */
  public deletePane(paneId: string): Promise<ApiResponse<void>> {
    return this.httpClient.delete<void>(`/workspaces/pane/${paneId}`)
  }
}
