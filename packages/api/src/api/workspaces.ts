import type { Workspace, WorkspaceCreateRequest } from '@vektor-finance/types'

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
