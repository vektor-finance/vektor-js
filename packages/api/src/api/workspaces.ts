import { BaseApi } from '../base'
import type { ApiResponse } from '../types'

/**
 * An API Client for interacting with Workspaces.
 */
export class WorkspacesApi extends BaseApi {
  // Workspaces

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
