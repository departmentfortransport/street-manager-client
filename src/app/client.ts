import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { WorkCreateRequest } from '../interfaces/workCreateRequest'
import { WorkCreateResponse } from '../interfaces/workCreateResponse'
import { PermitCreateRequest } from '../interfaces/permitCreateRequest'
import { PermitCreateResponse } from '../interfaces/permitCreateResponse'
import { PermitResponse } from '../interfaces/permitResponse'
import { PermitStatusUpdateRequest } from '../interfaces/permitStatusUpdateRequest'
import { WorkResponse } from '../interfaces/workResponse'
import { WorkStartUpdateRequest } from '../interfaces/workStartUpdateRequest'
import { WorkStopUpdateRequest } from '../interfaces/workStopUpdateRequest'
import { ReinstatementCreateRequest } from '../interfaces/reinstatementCreateRequest'
import { ReinstatementCreateResponse } from '../interfaces/reinstatementCreateResponse'
import { InspectionCreateRequest } from '../interfaces/inspectionCreateRequest'
import { InspectionResponse } from '../interfaces/inspectionResponse'
import { FPNCreateRequest } from '../interfaces/fpnCreateRequest'
import { FPNCreateResponse } from '../interfaces/fpnCreateResponse'
import { AuthenticationResponse } from '../interfaces/authenticationResponse'
import { AuthenticationRequest } from '../interfaces/authenticationRequest'
import { FileSummaryResponse } from '../interfaces/fileSummaryResponse'
import * as FormData from 'form-data'
import { RequestConfig } from '../interfaces/requestConfig'
import { WorkHistoryResponse } from '../interfaces/workHistoryResponse'
import { SiteResponse } from '../interfaces/siteResponse'
import { SiteCreateResponse } from '../interfaces/siteCreateResponse'
import { InspectionUnitsUpdateRequest } from '../interfaces/inspectionUnitsUpdateRequest'
import { CommentCreateRequest } from '../interfaces/commentCreateRequest'
import { CommentCreateResponse } from '../interfaces/commentCreateResponse'
import { FPNResponse } from '../interfaces/fpnResponse'
import { FPNStatusUpdateRequest } from '../interfaces/fpnStatusUpdateRequest'
import { InspectionCreateResponse } from '../interfaces/inspectionCreateResponse'
import { DurationCalculationResponse } from '../interfaces/durationCalculationResponse'
import { PermitAlterationCreateResponse } from '../interfaces/permitAlterationCreateResponse'
import { PermitAlterationCreateRequest } from '../interfaces/permitAlterationCreateRequest'
import { PermitAlterationStatusUpdateRequest } from '../interfaces/permitAlterationStatusUpdateRequest'
import { PermitAlterationResponse } from '../interfaces/permitAlterationResponse'
import { WorkCategoryResponse } from '../interfaces/workCategoryResponse'
import { GetWorkCategoryRequest } from '../interfaces/getWorkCategoryRequest'
import { AddFileToWorkRequest } from '../interfaces/addFileToWorkRequest'
import * as qs from 'qs'
import { ActivityCreateRequest } from '../interfaces/activityCreateRequest'
import { ActivityCreateResponse } from '../interfaces/activityCreateResponse'
import { PermitLaneRentalAssessmentUpdateRequest } from '../interfaces/permitLaneRentalAssessmentUpdateRequest'
import { Agent } from 'https'
import { WorkStartRevertRequest } from '../interfaces/workStartRevertRequest'
import { ActivityResponse } from '../interfaces/activityResponse'
import { ActivityCancelRequest } from '../interfaces/activityCancelRequest'
import { WorkStopRevertRequest } from '../interfaces/workStopRevertRequest'
import { ForwardPlanCreateRequest } from '../interfaces/forwardPlanCreateRequest'
import { ForwardPlanCreateResponse } from '../interfaces/forwardPlanCreateResponse'
import { ActivityUpdateRequest } from '../interfaces/activityUpdateRequest'
import { InitialAuthenticationResponse } from '../interfaces/initialAuthenticationResponse'
import { PermitDiscountUpdateRequest } from '../interfaces/permitDiscountUpdateRequest'
import { ForwardPlanResponse } from '../interfaces/forwardPlanResponse'
import { ForwardPlanUpdateRequest } from '../interfaces/forwardPlanUpdateRequest'
import { ForwardPlanCancelRequest } from '../interfaces/forwardPlanCancelRequest'
import { ScheduledInspectionCreateRequest } from '../interfaces/scheduledInspectionCreateRequest'
import { SiteCreateRequest } from '../interfaces/siteCreateRequest'
import { Section81CreateRequest } from '../interfaces/section81CreateRequest'
import { Section81CreateResponse } from '../interfaces/section81CreateResponse'
import { FinalReinstatementUpdateRequest } from '../interfaces/finalReinstatementUpdateRequest'
import { PermitAssessmentUpdateRequest } from '../interfaces/permitAssessmentUpdateRequest'
import { HistoricFPNCreateRequest } from '../interfaces/historicFPNCreateRequest'
import { HistoricFPNCreateResponse } from '../interfaces/historicFPNCreateResponse'
import { NonNotifiableSiteCreateRequest } from '../interfaces/nonNotifiableSiteCreateRequest'
import { NonNotifiableSiteCreateResponse } from '../interfaces/nonNotifiableSiteCreateResponse'
import { HistoricInspectionCreateRequest } from '../interfaces/historicInspectionCreateRequest'
import { HistoricInspectionCreateResponse } from '../interfaces/historicInspectionCreateResponse'

export interface StreetManagerApiClientConfig {
  baseURL: string,
  timeout?: number,
  disableCertificateVerification?: boolean
}

export class StreetManagerApiClient {
  private axios: AxiosInstance

  constructor (private config: StreetManagerApiClientConfig) {
    let axiosRequestConfig: AxiosRequestConfig = {
      baseURL: this.config.baseURL,
      timeout: this.config.timeout
    }

    if (this.config.disableCertificateVerification) {
      axiosRequestConfig.httpsAgent = new Agent({
        rejectUnauthorized: false
      })
    }

    this.axios = axios.create(axiosRequestConfig)
  }

  public async status(): Promise<void> {
    return this.httpHandler<void>(() => this.axios.get('/status'))
  }

  public async authenticate(requestConfig: RequestConfig, authenticationRequest: AuthenticationRequest): Promise<AuthenticationResponse> {
    return this.httpHandler<AuthenticationResponse>(() => this.axios.post('/authenticate', authenticationRequest, this.generateRequestConfig(requestConfig)))
  }

  public async authenticateInitial(requestConfig: RequestConfig, authenticationRequest: AuthenticationRequest): Promise<InitialAuthenticationResponse> {
    return this.httpHandler<InitialAuthenticationResponse>(() => this.axios.post('/authenticate/initial', authenticationRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createWork(requestConfig: RequestConfig, workCreateRequest: WorkCreateRequest): Promise<WorkCreateResponse> {
    return this.httpHandler<WorkCreateResponse>(() => this.axios.post('/works', workCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createPermit(requestConfig: RequestConfig, workReferenceNumber: string, permitCreateRequest: PermitCreateRequest): Promise<PermitCreateResponse> {
    return this.httpHandler<PermitCreateResponse>(() => this.axios.post(`/works/${workReferenceNumber}/permits`, permitCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getPermit(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string) {
    return this.httpHandler<PermitResponse>(() => this.axios.get(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}`, this.generateRequestConfig(requestConfig)))
  }

  public async getWork(requestConfig: RequestConfig, workReferenceNumber: string): Promise<WorkResponse> {
    return this.httpHandler<WorkResponse>(() => this.axios.get(`/works/${workReferenceNumber}`, this.generateRequestConfig(requestConfig)))
  }

  public async updatePermitStatus(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, updatePermitStatusRequest: PermitStatusUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/status`, updatePermitStatusRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateAssessmentStatus(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, updateAssessmentStatusRequest: PermitAssessmentUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/assessment`, updateAssessmentStatusRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateWorkActualStartDate(requestConfig: RequestConfig, workReferenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/start`, workStartUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async revertWorkActualStartDate(requestConfig: RequestConfig, workReferenceNumber: string, workStartRevertRequest: WorkStartRevertRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/revert-start`, workStartRevertRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateWorkActualStopDate(requestConfig: RequestConfig, workReferenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/stop`, workStopUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async revertWorkActualStopDate(requestConfig: RequestConfig, workReferenceNumber: string, workStopRevertRequest: WorkStopRevertRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/revert-stop`, workStopRevertRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateInspectionUnits(requestConfig: RequestConfig, workReferenceNumber: string, inspectionUnitsUpdateRequest: InspectionUnitsUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/inspection-units`, inspectionUnitsUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateFinalReinstatement(requestConfig: RequestConfig, workReferenceNumber: string, finalReinstatementUpdateRequest: FinalReinstatementUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/final-reinstatement`, finalReinstatementUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async addFileToWork(requestConfig: RequestConfig, workReferenceNumber: string, addFileToWorkRequest: AddFileToWorkRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/works/${workReferenceNumber}/files`, addFileToWorkRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createSite(requestConfig: RequestConfig, workReferenceNumber: string, siteCreateRequest: SiteCreateRequest): Promise<SiteCreateResponse> {
    return this.httpHandler<SiteCreateResponse>(() => this.axios.post(`/works/${workReferenceNumber}/sites`, siteCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createReinstatement(requestConfig: RequestConfig, workReferenceNumber: string, siteNumber: number, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<ReinstatementCreateResponse> {
    return this.httpHandler<ReinstatementCreateResponse>(() => this.axios.post(`/works/${workReferenceNumber}/sites/${siteNumber}/reinstatements`, reinstatementCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getSite(requestConfig: RequestConfig, workReferenceNumber: string, siteNumber: number): Promise<SiteResponse> {
    return this.httpHandler<SiteResponse>(() => this.axios.get(`/works/${workReferenceNumber}/sites/${siteNumber}`, this.generateRequestConfig(requestConfig)))
  }

  public async createInspection(requestConfig: RequestConfig, workReferenceNumber: string, inspectionCreateRequest: InspectionCreateRequest): Promise<InspectionCreateResponse> {
    return this.httpHandler<InspectionCreateResponse>(() => this.axios.post(`/works/${workReferenceNumber}/inspections`, inspectionCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getInspection(requestConfig: RequestConfig, workReferenceNumber: string, inspectionReferenceNumber: string): Promise<InspectionResponse> {
    return this.httpHandler<InspectionResponse>(() => this.axios.get(`/works/${workReferenceNumber}/inspections/${inspectionReferenceNumber}`, this.generateRequestConfig(requestConfig)))
  }

  public async createFPN(requestConfig: RequestConfig, workReferenceNumber: string, fpnCreateRequest: FPNCreateRequest): Promise<FPNCreateResponse> {
    return this.httpHandler<FPNCreateResponse>(() => this.axios.post(`/works/${workReferenceNumber}/fixed-penalty-notices`, fpnCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getFPN(requestConfig: RequestConfig, workReferenceNumber: string, fpnReferenceNumber: string): Promise<FPNResponse> {
    return this.httpHandler<FPNResponse>(() => this.axios.get(`/works/${workReferenceNumber}/fixed-penalty-notices/${fpnReferenceNumber}`, this.generateRequestConfig(requestConfig)))
  }

  public async updateFPNStatus(requestConfig: RequestConfig, workReferenceNumber: string, fpnReferenceNumber: string, fpnStatusUpdateRequest: FPNStatusUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/fixed-penalty-notices/${fpnReferenceNumber}/status`, fpnStatusUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createComment(requestConfig: RequestConfig, workReferenceNumber: string, commentCreateRequest: CommentCreateRequest): Promise<CommentCreateResponse> {
    return this.httpHandler<CommentCreateResponse>(() => this.axios.post(`/works/${workReferenceNumber}/comments`, commentCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createPermitAlteration(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, permitAlterationRequest: PermitAlterationCreateRequest): Promise<PermitAlterationCreateResponse> {
    return this.httpHandler<PermitAlterationCreateResponse>(() => this.axios.post(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/alterations`, permitAlterationRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updatePermitAlterationStatus(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, permitAlterationReferenceNumber: string, updatePermitAlterationStatusRequest: PermitAlterationStatusUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/alterations/${permitAlterationReferenceNumber}/status`, updatePermitAlterationStatusRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getPermitAlteration(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, permitAlterationReferenceNumber: string): Promise<PermitAlterationResponse> {
    return this.httpHandler<PermitAlterationResponse>(() => this.axios.get(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/alterations/${permitAlterationReferenceNumber}`, this.generateRequestConfig(requestConfig)))
  }

  public async uploadFile(requestConfig: RequestConfig, buffer: Buffer, filename: string, swaCode?: string): Promise<FileSummaryResponse> {
    let form: FormData = new FormData()
    form.append('file', buffer, filename)

    let config: AxiosRequestConfig = this.generateRequestConfig(requestConfig, { swaCode : swaCode })
    Object.assign(config.headers, form.getHeaders())

    return this.httpHandler<FileSummaryResponse>(() => this.axios.post('/files', form, config))
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

  public async getWorkHistory(requestConfig: RequestConfig, workReferenceNumber: string): Promise<WorkHistoryResponse[]> {
    return this.httpHandler<WorkHistoryResponse[]>(() => this.axios.get(`/works/${workReferenceNumber}/history`, this.generateRequestConfig(requestConfig)))
  }

  public async getDuration(requestConfig: RequestConfig, startDate: string, endDate: string): Promise<DurationCalculationResponse> {
    return this.httpHandler<DurationCalculationResponse>(() => this.axios.get(`/duration?startDate=${startDate}&endDate=${endDate}`, this.generateRequestConfig(requestConfig)))
  }

  public async getWorkCategory(requestConfig: RequestConfig, getWorkCategoryRequest: GetWorkCategoryRequest): Promise<WorkCategoryResponse> {
    return this.httpHandler<WorkCategoryResponse>(() => this.axios.get('/permits/category', this.generateRequestConfig(requestConfig, getWorkCategoryRequest)))
  }

  public async createActivity(requestConfig: RequestConfig, activityCreateRequest: ActivityCreateRequest): Promise<ActivityCreateResponse> {
    return this.httpHandler<ActivityCreateResponse>(() => this.axios.post(`/activity`, activityCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateActivity(requestConfig: RequestConfig, activityUpdateRequest: ActivityUpdateRequest, activityReferenceNumber: string): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/activity/${activityReferenceNumber}`, activityUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updatePermitLaneRentalAssessment(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, permitLaneRentalAssessmentUpdateRequest: PermitLaneRentalAssessmentUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/lane-rental-assessments`, permitLaneRentalAssessmentUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getActivity(requestConfig: RequestConfig, activityReferenceNumber: string): Promise<ActivityResponse> {
    return this.httpHandler<ActivityResponse>(() => this.axios.get(`/activity/${activityReferenceNumber}`, this.generateRequestConfig(requestConfig)))
  }

  public async cancelActivity(requestConfig: RequestConfig, activityReferenceNumber: string, activityCancelRequest: ActivityCancelRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/activity/${activityReferenceNumber}/cancel`, activityCancelRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createForwardPlan(requestConfig: RequestConfig, forwardPlanCreateRequest: ForwardPlanCreateRequest): Promise<ForwardPlanCreateResponse> {
    return this.httpHandler<ForwardPlanCreateResponse>(() => this.axios.post(`/forward-plans`, forwardPlanCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getForwardPlan(requestConfig: RequestConfig, workReferenceNumber: string, forwardPlanReferenceNumber: string): Promise<ForwardPlanResponse> {
    return this.httpHandler<ForwardPlanResponse>(() => this.axios.get(`/works/${workReferenceNumber}/forward-plans/${forwardPlanReferenceNumber}`, this.generateRequestConfig(requestConfig)))
  }

  public async updateForwardPlan(requestConfig: RequestConfig, workReferenceNumber: string, forwardPlanReferenceNumber: string, forwardPlanUpdateRequest: ForwardPlanUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/forward-plans/${forwardPlanReferenceNumber}`, forwardPlanUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async cancelForwardPlan(requestConfig: RequestConfig, workReferenceNumber: string, forwardPlanReferenceNumber: string, forwardPlanCancelRequest: ForwardPlanCancelRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/forward-plans/${forwardPlanReferenceNumber}/cancel`, forwardPlanCancelRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updatePermitDiscount(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, permitDiscountUpdateRequest: PermitDiscountUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/permit-discount`, permitDiscountUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createScheduledInspection(requestConfig: RequestConfig, workReferenceNumber: string, scheduledInspectionCreateRequest: ScheduledInspectionCreateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/works/${workReferenceNumber}/scheduled-inspections`, scheduledInspectionCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async cancelScheduledInspection(requestConfig: RequestConfig, workReferenceNumber: string): Promise<void> {
    return this.httpHandler<void>(() => this.axios.delete(`/works/${workReferenceNumber}/scheduled-inspections`, this.generateRequestConfig(requestConfig)))
  }

  public async createSection81(requestConfig: RequestConfig, section81CreateRequest: Section81CreateRequest): Promise<Section81CreateResponse> {
    return this.httpHandler<Section81CreateResponse>(() => this.axios.post(`/section-81-works/section-81s`, section81CreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createHistoricFPN(requestConfig: RequestConfig, historicFPNCreateRequest: HistoricFPNCreateRequest): Promise<HistoricFPNCreateResponse> {
    return this.httpHandler<HistoricFPNCreateResponse>(() => this.axios.post(`/historic-works/fixed-penalty-notices`, historicFPNCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createNonNotifiableSite(requestConfig: RequestConfig, nonNotifiableSiteCreateRequest: NonNotifiableSiteCreateRequest): Promise<NonNotifiableSiteCreateResponse> {
    return this.httpHandler<NonNotifiableSiteCreateResponse>(() => this.axios.post(`/non-notifiable-works/sites`, nonNotifiableSiteCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createHistoricInspection(requestConfig: RequestConfig, historicInspectionCreateRequest: HistoricInspectionCreateRequest): Promise<HistoricInspectionCreateResponse> {
    return this.httpHandler<HistoricInspectionCreateResponse>(() => this.axios.post(`/historic-works/inspections`, historicInspectionCreateRequest, this.generateRequestConfig(requestConfig)))
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

  private generateRequestConfig(config: RequestConfig, request?: any): AxiosRequestConfig {
    let requestConfig: AxiosRequestConfig = {
      headers: {
        'x-request-id': config.requestId
      }
    }

    if (config.token) {
      requestConfig.headers.token = config.token
    }

    if (config.frontendToken) {
      requestConfig.headers.frontendToken = config.frontendToken
    }

    if (!request) {
      requestConfig.params = {}
    } else {
      requestConfig.params = request
      requestConfig.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }

    return requestConfig
  }
}
