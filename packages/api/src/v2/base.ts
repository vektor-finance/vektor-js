import { AxiosInstance } from 'axios'

/**
 *
 */
export class BaseApi {
  constructor(protected httpClient: AxiosInstance) {}
}
