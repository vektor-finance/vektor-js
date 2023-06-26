import type { HttpClient } from './types'

/**
 * A base class for API Clients with common functionality.
 */
export class BaseApi {
  constructor(protected httpClient: HttpClient) {}
}
