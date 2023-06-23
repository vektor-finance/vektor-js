import type { HttpClient } from './types'

/**
 *
 */
export class BaseApi {
  constructor(protected httpClient: HttpClient) {}
}
