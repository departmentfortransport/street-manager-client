import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { OK } from 'http-status-codes'
import { PermitCreateRequest } from '../interfaces/permitCreateRequest'
import { WorkResponse } from '../interfaces/workResponse'
import { WorkStatus } from '../interfaces/referenceTypes'

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

  public async createWork(permitCreateRequest: PermitCreateRequest): Promise<WorkResponse> {
    return this.httpHandler<WorkResponse>(() => this.axios.post('/works', permitCreateRequest))
  }

  public async getWork(referenceNumber: string) {
    return this.httpHandler<WorkResponse>(() => this.axios.get(`/works/${referenceNumber}`))
  }

  public async getWorks(status?: WorkStatus): Promise<WorkResponse[]> {
    let config: AxiosRequestConfig = status ? { params: { status: status } } : {}
    return this.httpHandler<WorkResponse[]>(() => this.axios.get('/works', config))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      return response.data
    } catch (err) {
      let error = new Error(err.response.data.message)
      error['status'] = err.response.status
      return Promise.reject(error)
    }
  }
}
