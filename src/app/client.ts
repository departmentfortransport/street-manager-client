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
import { AuthenticationResponse } from '../interfaces/authenticationResponse'
import { AuthenticationRequest } from '../interfaces/authenticationRequest'
import { FileResponse } from '../interfaces/fileResponse'
import { InspectionResponse } from '../interfaces/inspectionResponse'
import { GetPermitsRequest } from '../interfaces/getPermitsRequest'
import * as FormData from 'form-data'


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

  public async authenticate(authenticationRequest: AuthenticationRequest): Promise<AuthenticationResponse> {
    return this.httpHandler<AuthenticationResponse>(() => this.axios.post('/authenticate', authenticationRequest))
  }

  public async createPermit(token: string, permitCreateRequest: PermitCreateRequest): Promise<PermitResponse> {
    return this.httpHandler<PermitResponse>(() => this.axios.post('/permits', permitCreateRequest, this.generateRequestConfig(token)))
  }

  public async getPermit(token: string, referenceNumber: string) {
    return this.httpHandler<PermitResponse>(() => this.axios.get(`/permits/${referenceNumber}`, this.generateRequestConfig(token)))
  }

  public async getPermits(token: string, getPermitsRequest: GetPermitsRequest): Promise<PermitResponse[]> {
    let config: AxiosRequestConfig = this.generateRequestConfig(token)

    config.params = getPermitsRequest

    return this.httpHandler<PermitResponse[]>(() => this.axios.get('/permits', config))
  }

  public async updateAssessmentStatus(token: string, referenceNumber: string, updateAssessmentStatusRequest: AssessmentStatusUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() =>  this.axios.put(`/permits/${referenceNumber}/status`, updateAssessmentStatusRequest, this.generateRequestConfig(token)))
  }

  public async updateWorkActualStartDate(token: string, referenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() =>  this.axios.put(`/works/${referenceNumber}/start`, workStartUpdateRequest, this.generateRequestConfig(token)))
  }

  public async updateWorkActualStopDate(token: string, referenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() =>  this.axios.put(`/works/${referenceNumber}/stop`, workStopUpdateRequest, this.generateRequestConfig(token)))
  }

  public async updateExcavationCarriedOut(token: string, referenceNumber: string, excavationCarriedOutUpdateRequest: ExcavationCarriedOutUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() =>  this.axios.put(`/works/${referenceNumber}/excavation`, excavationCarriedOutUpdateRequest, this.generateRequestConfig(token)))
  }

  public async createReinstatement(token: string, referenceNumber: string, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/works/${referenceNumber}/reinstatements`, reinstatementCreateRequest, this.generateRequestConfig(token)))
  }

  public async getReinstatement(token: string, referenceNumber: string, reinstatementId: number): Promise<ReinstatementResponse> {
    return this.httpHandler<ReinstatementResponse>(() => this.axios.get(`/works/${referenceNumber}/reinstatements/${reinstatementId}`, this.generateRequestConfig(token)))
  }

  public async createInspection(token: string, referenceNumber: string, inspectionCreateRequest: InspectionCreateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/works/${referenceNumber}/inspection`, inspectionCreateRequest, this.generateRequestConfig(token)))
  }

  public async getInspection(token: string, referenceNumber: string, inspectionId: number): Promise<InspectionResponse> {
    return this.httpHandler<InspectionResponse>(() => this.axios.get(`/works/${referenceNumber}/inspections/${inspectionId}`, this.generateRequestConfig(token)))
  }

  public async uploadFile(token: string, buffer: Buffer, filename: string): Promise<FileResponse> {
    let form: FormData = new FormData()
    form.append('file', buffer, filename)

    let config: AxiosRequestConfig = this.generateRequestConfig(token)
    Object.assign(config.headers, form.getHeaders())

    return this.httpHandler<FileResponse>(() => this.axios.post('/files', form, config))
  }

  public async deleteFile(token: string, fileId: number): Promise<void> {
    return this.httpHandler<void>(() => this.axios.delete(`/files/${fileId}`, this.generateRequestConfig(token)))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      if (response.data) {
        return response.data
      }
    } catch (err) {
      err.status = err.response ? err.response.status : INTERNAL_SERVER_ERROR
      return Promise.reject(err)
    }
  }

  private generateRequestConfig(token: string): AxiosRequestConfig {
    return { headers: { token: token }, params: {} }
  }
}
