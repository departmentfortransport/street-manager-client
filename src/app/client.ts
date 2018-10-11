import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { PermitCreateRequest } from '../interfaces/permitCreateRequest'
import { PermitResponse } from '../interfaces/permitResponse'
import { AssessmentStatusUpdateRequest } from '../interfaces/assessmentStatusUpdateRequest'
import { WorkStartUpdateRequest } from '../interfaces/workStartUpdateRequest'
import { WorkStopUpdateRequest } from '../interfaces/workStopUpdateRequest'
import { ExcavationCarriedOutUpdateRequest } from '../interfaces/excavationCarriedOutUpdateRequest'
import { ReinstatementCreateRequest } from '../interfaces/reinstatementCreateRequest'
import { ReinstatementResponse } from '../interfaces/reinstatementResponse'
import { InspectionCreateRequest } from '../interfaces/inspectionCreateRequest'
import { InspectionResponse } from '../interfaces/inspectionResponse'
import { AuthenticationResponse } from '../interfaces/authenticationResponse'
import { AuthenticationRequest } from '../interfaces/authenticationRequest'
import { FileResponse } from '../interfaces/fileResponse'
import { GetPermitsRequest } from '../interfaces/getPermitsRequest'
import * as FormData from 'form-data'
import { RequestConfig } from '../interfaces/requestConfig'


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

  public async authenticate(requestConfig: RequestConfig, authenticationRequest: AuthenticationRequest): Promise<AuthenticationResponse> {
    return this.httpHandler<AuthenticationResponse>(() => this.axios.post('/authenticate', authenticationRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createPermit(requestConfig: RequestConfig, permitCreateRequest: PermitCreateRequest): Promise<PermitResponse> {
    return this.httpHandler<PermitResponse>(() => this.axios.post('/permits', permitCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getPermit(requestConfig: RequestConfig, referenceNumber: string) {
    return this.httpHandler<PermitResponse>(() => this.axios.get(`/permits/${referenceNumber}`, this.generateRequestConfig(requestConfig)))
  }

  public async getPermits(requestConfig: RequestConfig, getPermitsRequest: GetPermitsRequest): Promise<PermitResponse[]> {
    let config: AxiosRequestConfig = this.generateRequestConfig(requestConfig)

    config.params = getPermitsRequest

    return this.httpHandler<PermitResponse[]>(() => this.axios.get('/permits', config))
  }

  public async updateAssessmentStatus(requestConfig: RequestConfig, referenceNumber: string, updateAssessmentStatusRequest: AssessmentStatusUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() =>  this.axios.put(`/permits/${referenceNumber}/status`, updateAssessmentStatusRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateWorkActualStartDate(requestConfig: RequestConfig, referenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() =>  this.axios.put(`/works/${referenceNumber}/start`, workStartUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateWorkActualStopDate(requestConfig: RequestConfig, referenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() =>  this.axios.put(`/works/${referenceNumber}/stop`, workStopUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateExcavationCarriedOut(requestConfig: RequestConfig, referenceNumber: string, excavationCarriedOutUpdateRequest: ExcavationCarriedOutUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() =>  this.axios.put(`/works/${referenceNumber}/excavation`, excavationCarriedOutUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createReinstatement(requestConfig: RequestConfig, referenceNumber: string, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/works/${referenceNumber}/reinstatements`, reinstatementCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getReinstatement(requestConfig: RequestConfig, referenceNumber: string, reinstatementId: number): Promise<ReinstatementResponse> {
    return this.httpHandler<ReinstatementResponse>(() => this.axios.get(`/works/${referenceNumber}/reinstatements/${reinstatementId}`, this.generateRequestConfig(requestConfig)))
  }

  public async createInspection(requestConfig: RequestConfig, referenceNumber: string, inspectionCreateRequest: InspectionCreateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/works/${referenceNumber}/inspection`, inspectionCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getInspection(requestConfig: RequestConfig, referenceNumber: string, inspectionId: number): Promise<InspectionResponse> {
    return this.httpHandler<InspectionResponse>(() => this.axios.get(`/works/${referenceNumber}/inspections/${inspectionId}`, this.generateRequestConfig(requestConfig)))
  }

  public async uploadFile(requestConfig: RequestConfig, buffer: Buffer, filename: string): Promise<FileResponse> {
    let form: FormData = new FormData()
    form.append('file', buffer, filename)

    let config: AxiosRequestConfig = this.generateRequestConfig(requestConfig)
    Object.assign(config.headers, form.getHeaders())

    return this.httpHandler<FileResponse>(() => this.axios.post('/files', form, config))
  }

  public async getFile(requestConfig: RequestConfig, fileId: number): Promise<AxiosResponse<Buffer>> {
    try {
      let config: AxiosRequestConfig = this.generateRequestConfig(requestConfig)
      config.responseType = 'arraybuffer'
      config.transformResponse = (data) => data
      return await this.axios.get(`/files/${fileId}`, config)
    } catch (err) {
      return this.handleError(err)
    }
  }

  public async deleteFile(requestConfig: RequestConfig, fileId: number): Promise<void> {
    return this.httpHandler<void>(() => this.axios.delete(`/files/${fileId}`, this.generateRequestConfig(requestConfig)))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      if (response.data) {
        return response.data
      }
    } catch (err) {
      return this.handleError(err)
    }
  }

  private handleError(err) {
    err.status = err.response ? err.response.status : INTERNAL_SERVER_ERROR
    return Promise.reject(err)
  }

  private generateRequestConfig(config: RequestConfig): AxiosRequestConfig {
    let headers = {}
    if (config.token) {
      headers['token'] = config.token
    }
    headers['request-id'] = config.requestId
    return { headers: headers, params: {} }
  }
}
