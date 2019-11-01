/// <reference types="node" />
import { AxiosResponse } from 'axios';
import { WorkCreateRequest } from '../interfaces/workCreateRequest';
import { WorkCreateResponse } from '../interfaces/workCreateResponse';
import { PermitCreateRequest } from '../interfaces/permitCreateRequest';
import { PermitCreateResponse } from '../interfaces/permitCreateResponse';
import { PermitResponse } from '../interfaces/permitResponse';
import { PermitStatusUpdateRequest } from '../interfaces/permitStatusUpdateRequest';
import { WorkResponse } from '../interfaces/workResponse';
import { WorkStartUpdateRequest } from '../interfaces/workStartUpdateRequest';
import { WorkStopUpdateRequest } from '../interfaces/workStopUpdateRequest';
import { ExcavationCarriedOutUpdateRequest } from '../interfaces/excavationCarriedOutUpdateRequest';
import { ReinstatementCreateRequest } from '../interfaces/reinstatementCreateRequest';
import { ReinstatementCreateResponse } from '../interfaces/reinstatementCreateResponse';
import { InspectionCreateRequest } from '../interfaces/inspectionCreateRequest';
import { InspectionResponse } from '../interfaces/inspectionResponse';
import { FPNCreateRequest } from '../interfaces/fpnCreateRequest';
import { FPNCreateResponse } from '../interfaces/fpnCreateResponse';
import { AuthenticationResponse } from '../interfaces/authenticationResponse';
import { AuthenticationRequest } from '../interfaces/authenticationRequest';
import { FileSummaryResponse } from '../interfaces/fileSummaryResponse';
import { RequestConfig } from '../interfaces/requestConfig';
import { WorkHistoryResponse } from '../interfaces/workHistoryResponse';
import { SiteResponse } from '../interfaces/siteResponse';
import { SiteCreateResponse } from '../interfaces/siteCreateResponse';
import { InspectionUnitsUpdateRequest } from '../interfaces/inspectionUnitsUpdateRequest';
import { CommentCreateRequest } from '../interfaces/commentCreateRequest';
import { CommentCreateResponse } from '../interfaces/commentCreateResponse';
import { FPNResponse } from '../interfaces/fpnResponse';
import { FPNStatusUpdateRequest } from '../interfaces/fpnStatusUpdateRequest';
import { InspectionCreateResponse } from '../interfaces/inspectionCreateResponse';
import { DurationCalculationResponse } from '../interfaces/durationCalculationResponse';
import { PermitAlterationCreateResponse } from '../interfaces/permitAlterationCreateResponse';
import { PermitAlterationCreateRequest } from '../interfaces/permitAlterationCreateRequest';
import { PermitAlterationStatusUpdateRequest } from '../interfaces/permitAlterationStatusUpdateRequest';
import { PermitAlterationResponse } from '../interfaces/permitAlterationResponse';
import { WorkCategoryResponse } from '../interfaces/workCategoryResponse';
import { GetWorkCategoryRequest } from '../interfaces/getWorkCategoryRequest';
import { AddFileToWorkRequest } from '../interfaces/addFileToWorkRequest';
import { ActivityCreateRequest } from '../interfaces/activityCreateRequest';
import { ActivityCreateResponse } from '../interfaces/activityCreateResponse';
import { PermitLaneRentalAssessmentUpdateRequest } from '../interfaces/permitLaneRentalAssessmentUpdateRequest';
import { WorkStartRevertRequest } from '../interfaces/workStartRevertRequest';
import { ActivityResponse } from '../interfaces/activityResponse';
import { ActivityCancelRequest } from '../interfaces/activityCancelRequest';
import { WorkStopRevertRequest } from '../interfaces/workStopRevertRequest';
import { ForwardPlanCreateRequest } from '../interfaces/forwardPlanCreateRequest';
import { ForwardPlanCreateResponse } from '../interfaces/forwardPlanCreateResponse';
import { ActivityUpdateRequest } from '../interfaces/activityUpdateRequest';
import { InitialAuthenticationResponse } from '../interfaces/initialAuthenticationResponse';
import { PermitDiscountUpdateRequest } from '../interfaces/permitDiscountUpdateRequest';
import { ForwardPlanResponse } from '../interfaces/forwardPlanResponse';
import { ForwardPlanUpdateRequest } from '../interfaces/forwardPlanUpdateRequest';
import { ForwardPlanCancelRequest } from '../interfaces/forwardPlanCancelRequest';
import { ScheduledInspectionCreateRequest } from '../interfaces/scheduledInspectionCreateRequest';
import { SiteCreateRequest } from '../interfaces/siteCreateRequest';
export interface StreetManagerApiClientConfig {
    baseURL: string;
    timeout?: number;
    disableCertificateVerification?: boolean;
}
export declare class StreetManagerApiClient {
    private config;
    private axios;
    constructor(config: StreetManagerApiClientConfig);
    status(): Promise<void>;
    authenticate(requestConfig: RequestConfig, authenticationRequest: AuthenticationRequest): Promise<AuthenticationResponse>;
    authenticateInitial(requestConfig: RequestConfig, authenticationRequest: AuthenticationRequest): Promise<InitialAuthenticationResponse>;
    createWork(requestConfig: RequestConfig, workCreateRequest: WorkCreateRequest): Promise<WorkCreateResponse>;
    createPermit(requestConfig: RequestConfig, workReferenceNumber: string, permitCreateRequest: PermitCreateRequest): Promise<PermitCreateResponse>;
    getPermit(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string): Promise<PermitResponse>;
    getWork(requestConfig: RequestConfig, workReferenceNumber: string): Promise<WorkResponse>;
    updatePermitStatus(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, updatePermitStatusRequest: PermitStatusUpdateRequest): Promise<void>;
    updateWorkActualStartDate(requestConfig: RequestConfig, workReferenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void>;
    revertWorkActualStartDate(requestConfig: RequestConfig, workReferenceNumber: string, workStartRevertRequest: WorkStartRevertRequest): Promise<void>;
    updateWorkActualStopDate(requestConfig: RequestConfig, workReferenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void>;
    revertWorkActualStopDate(requestConfig: RequestConfig, workReferenceNumber: string, workStopRevertRequest: WorkStopRevertRequest): Promise<void>;
    updateExcavationCarriedOut(requestConfig: RequestConfig, workReferenceNumber: string, excavationCarriedOutUpdateRequest: ExcavationCarriedOutUpdateRequest): Promise<void>;
    updateInspectionUnits(requestConfig: RequestConfig, workReferenceNumber: string, inspectionUnitsUpdateRequest: InspectionUnitsUpdateRequest): Promise<void>;
    addFileToWork(requestConfig: RequestConfig, workReferenceNumber: string, addFileToWorkRequest: AddFileToWorkRequest): Promise<void>;
    createSite(requestConfig: RequestConfig, workReferenceNumber: string, siteCreateRequest: SiteCreateRequest): Promise<SiteCreateResponse>;
    createReinstatement(requestConfig: RequestConfig, workReferenceNumber: string, siteId: number, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<ReinstatementCreateResponse>;
    getSite(requestConfig: RequestConfig, workReferenceNumber: string, siteId: number): Promise<SiteResponse>;
    createInspection(requestConfig: RequestConfig, workReferenceNumber: string, inspectionCreateRequest: InspectionCreateRequest): Promise<InspectionCreateResponse>;
    getInspection(requestConfig: RequestConfig, workReferenceNumber: string, inspectionReferenceNumber: string): Promise<InspectionResponse>;
    createFPN(requestConfig: RequestConfig, workReferenceNumber: string, fpnCreateRequest: FPNCreateRequest): Promise<FPNCreateResponse>;
    getFPN(requestConfig: RequestConfig, workReferenceNumber: string, fpnReferenceNumber: string): Promise<FPNResponse>;
    updateFPNStatus(requestConfig: RequestConfig, workReferenceNumber: string, fpnReferenceNumber: string, fpnStatusUpdateRequest: FPNStatusUpdateRequest): Promise<void>;
    createComment(requestConfig: RequestConfig, workReferenceNumber: string, commentCreateRequest: CommentCreateRequest): Promise<CommentCreateResponse>;
    createPermitAlteration(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, permitAlterationRequest: PermitAlterationCreateRequest): Promise<PermitAlterationCreateResponse>;
    updatePermitAlterationStatus(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, permitAlterationReferenceNumber: string, updatePermitAlterationStatusRequest: PermitAlterationStatusUpdateRequest): Promise<void>;
    getPermitAlteration(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, permitAlterationReferenceNumber: string): Promise<PermitAlterationResponse>;
    uploadFile(requestConfig: RequestConfig, buffer: Buffer, filename: string, swaCode?: string): Promise<FileSummaryResponse>;
    getFile(requestConfig: RequestConfig, fileId: number): Promise<AxiosResponse<Buffer>>;
    deleteFile(requestConfig: RequestConfig, fileId: number): Promise<void>;
    getWorkHistory(requestConfig: RequestConfig, workReferenceNumber: string): Promise<WorkHistoryResponse[]>;
    getDuration(requestConfig: RequestConfig, startDate: string, endDate: string): Promise<DurationCalculationResponse>;
    getWorkCategory(requestConfig: RequestConfig, getWorkCategoryRequest: GetWorkCategoryRequest): Promise<WorkCategoryResponse>;
    createActivity(requestConfig: RequestConfig, activityCreateRequest: ActivityCreateRequest): Promise<ActivityCreateResponse>;
    updateActivity(requestConfig: RequestConfig, activityUpdateRequest: ActivityUpdateRequest, activityReferenceNumber: string): Promise<void>;
    updatePermitLaneRentalAssessment(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, permitLaneRentalAssessmentUpdateRequest: PermitLaneRentalAssessmentUpdateRequest): Promise<void>;
    getActivity(requestConfig: RequestConfig, activityReferenceNumber: string): Promise<ActivityResponse>;
    cancelActivity(requestConfig: RequestConfig, activityReferenceNumber: string, activityCancelRequest: ActivityCancelRequest): Promise<void>;
    createForwardPlan(requestConfig: RequestConfig, forwardPlanCreateRequest: ForwardPlanCreateRequest): Promise<ForwardPlanCreateResponse>;
    getForwardPlan(requestConfig: RequestConfig, workReferenceNumber: string, forwardPlanReferenceNumber: string): Promise<ForwardPlanResponse>;
    updateForwardPlan(requestConfig: RequestConfig, workReferenceNumber: string, forwardPlanReferenceNumber: string, forwardPlanUpdateRequest: ForwardPlanUpdateRequest): Promise<void>;
    cancelForwardPlan(requestConfig: RequestConfig, workReferenceNumber: string, forwardPlanReferenceNumber: string, forwardPlanCancelRequest: ForwardPlanCancelRequest): Promise<void>;
    updatePermitDiscount(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, permitDiscountUpdateRequest: PermitDiscountUpdateRequest): Promise<void>;
    createScheduledInspection(requestConfig: RequestConfig, workReferenceNumber: string, scheduledInspectionCreateRequest: ScheduledInspectionCreateRequest): Promise<void>;
    cancelScheduledInspection(requestConfig: RequestConfig, workReferenceNumber: string): Promise<void>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
