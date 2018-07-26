import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { OK } from 'http-status-codes'
import { PermitCreateRequest } from '../interfaces/permitCreateRequest'
import { PermitResponse } from '../interfaces/permitResponse'
import { PermitStatus } from '../interfaces/referenceTypes'
import { AssessmentStatusUpdateRequest } from '../interfaces/assessmentStatusUpdateRequest'
import { WorkStartUpdateRequest } from '../interfaces/workStartUpdateRequest'

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

  public async createPermit(permitCreateRequest: PermitCreateRequest): Promise<PermitResponse> {
    return this.httpHandler<PermitResponse>(() => this.axios.post('/permits', permitCreateRequest))
  }

  public async getPermit(referenceNumber: string) {
    return this.httpHandler<PermitResponse>(() => this.axios.get(`/permits/${referenceNumber}`))
  }

  public async getPermits(status?: PermitStatus): Promise<PermitResponse[]> {
    let config: AxiosRequestConfig = status ? { params: { status: status } } : {}
    return this.httpHandler<PermitResponse[]>(() => this.axios.get('/permits', config))
  }

  public async updateAssessmentStatus(referenceNumber: string, updateAssessmentStatusRequest: AssessmentStatusUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() =>  this.axios.put(`/permits/${referenceNumber}/status`, updateAssessmentStatusRequest))
  }

  public async updateWorkActualStartDate(referenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() =>  this.axios.put(`/works/${referenceNumber}/start`, workStartUpdateRequest))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      if (response.data) {
        return response.data
      }
    } catch (err) {
      err.status = err.response.status
      return Promise.reject(err)
    }
  }
}
