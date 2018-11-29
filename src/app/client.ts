import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { PermitCreateRequest } from '../interfaces/permitCreateRequest'
import { PermitResponse } from '../interfaces/permitResponse'
import { AssessmentStatusUpdateRequest } from '../interfaces/assessmentStatusUpdateRequest'
import { WorkResponse } from '../interfaces/workResponse'
import { WorkStartUpdateRequest } from '../interfaces/workStartUpdateRequest'
import { WorkStopUpdateRequest } from '../interfaces/workStopUpdateRequest'
import { ExcavationCarriedOutUpdateRequest } from '../interfaces/excavationCarriedOutUpdateRequest'
import { ReinstatementCreateRequest } from '../interfaces/reinstatementCreateRequest'
import { ReinstatementCreateResponse } from '../interfaces/reinstatementCreateResponse'
import { InspectionCreateRequest } from '../interfaces/inspectionCreateRequest'
import { InspectionResponse } from '../interfaces/inspectionResponse'
import { FPNCreateRequest } from '../interfaces/fpnCreateRequest'
import { FPNResponse } from '../interfaces/fpnResponse'
import { AuthenticationResponse } from '../interfaces/authenticationResponse'
import { AuthenticationRequest } from '../interfaces/authenticationRequest'
import { FileResponse } from '../interfaces/fileResponse'
import * as FormData from 'form-data'
import { RequestConfig } from '../interfaces/requestConfig'
import { WorkHistoryResponse } from '../interfaces/workHistoryResponse'
import { SiteResponse } from '../interfaces/siteResponse'
import { SiteCreateResponse } from '../interfaces/siteCreateResponse'
import { InspectionUnitsUpdateRequest } from '../interfaces/inspectionUnitsUpdateRequest'


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

  public async status(): Promise<void> {
    return this.httpHandler<void>(() => this.axios.get('/status'))
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

  public async getWork(requestConfig: RequestConfig, referenceNumber: string): Promise<WorkResponse> {
    return this.httpHandler<WorkResponse>(() => this.axios.get(`/works/${referenceNumber}`, this.generateRequestConfig(requestConfig)))
  }

  public async updateAssessmentStatus(requestConfig: RequestConfig, referenceNumber: string, updateAssessmentStatusRequest: AssessmentStatusUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/permits/${referenceNumber}/status`, updateAssessmentStatusRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateWorkActualStartDate(requestConfig: RequestConfig, referenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${referenceNumber}/start`, workStartUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateWorkActualStopDate(requestConfig: RequestConfig, referenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${referenceNumber}/stop`, workStopUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateExcavationCarriedOut(requestConfig: RequestConfig, referenceNumber: string, excavationCarriedOutUpdateRequest: ExcavationCarriedOutUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${referenceNumber}/excavation`, excavationCarriedOutUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateInspectionUnits(requestConfig: RequestConfig, referenceNumber: string, inspectionUnitsUpdateRequest: InspectionUnitsUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${referenceNumber}/inspection-units`, inspectionUnitsUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createSite(requestConfig: RequestConfig, referenceNumber: string, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<SiteCreateResponse> {
    return this.httpHandler<SiteCreateResponse>(() => this.axios.post(`/works/${referenceNumber}/sites`, reinstatementCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createReinstatement(requestConfig: RequestConfig, referenceNumber: string, siteId: number, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<ReinstatementCreateResponse> {
    return this.httpHandler<ReinstatementCreateResponse>(() => this.axios.post(`/works/${referenceNumber}/sites/${siteId}/reinstatements`, reinstatementCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getSite(requestConfig: RequestConfig, referenceNumber: string, siteId: number): Promise<SiteResponse> {
    return this.httpHandler<SiteResponse>(() => this.axios.get(`/works/${referenceNumber}/sites/${siteId}`, this.generateRequestConfig(requestConfig)))
  }

  public async createInspection(requestConfig: RequestConfig, referenceNumber: string, inspectionCreateRequest: InspectionCreateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/works/${referenceNumber}/inspections`, inspectionCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getInspection(requestConfig: RequestConfig, referenceNumber: string, inspectionId: number): Promise<InspectionResponse> {
    return this.httpHandler<InspectionResponse>(() => this.axios.get(`/works/${referenceNumber}/inspections/${inspectionId}`, this.generateRequestConfig(requestConfig)))
  }

  public async createFPN(requestConfig: RequestConfig, referenceNumber: string, fpnCreateRequest: FPNCreateRequest): Promise<FPNResponse> {
    return this.httpHandler<FPNResponse>(() => this.axios.post(`/works/${referenceNumber}/fpns`, fpnCreateRequest, this.generateRequestConfig(requestConfig)))
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

  public async getWorkHistory(requestConfig: RequestConfig, referenceNumber: string): Promise<WorkHistoryResponse[]> {
    return this.httpHandler<WorkHistoryResponse[]>(() => this.axios.get(`/works/${referenceNumber}/history`, this.generateRequestConfig(requestConfig)))
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
    headers['x-request-id'] = config.requestId
    return { headers: headers, params: {} }
  }
}
