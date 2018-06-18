import { WorkCreateRequest, WorkResponse } from 'street-manager-interfaces'
import axios, { AxiosInstance, AxiosResponse, AxiosPromise } from 'axios'
import { OK } from 'http-status-codes'

export interface StreetManagerApiClientConfig {
  baseURL: string,
  timeout?: number
}

export class StreetManagerApiClient {
  private axios: AxiosInstance
  constructor(private config: StreetManagerApiClientConfig) {
    this.axios = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout
    })
  }

  public async isAvailable(): Promise<boolean> {
    try {
      let response: AxiosResponse = await this.axios.get('/status')
      return response.status === OK
    } catch (err) {
      return false
    }
  }

  public async createWork(workCreateRequest: WorkCreateRequest): Promise<WorkResponse> {
    return this.httpHandler<WorkResponse>(() => this.axios.post('/works', workCreateRequest))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      return response.data
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
