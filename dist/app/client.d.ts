/// <reference types="node" />
import { AxiosResponse } from 'axios';
import { PermitCreateRequest } from '../interfaces/permitCreateRequest';
import { PermitResponse } from '../interfaces/permitResponse';
import { AssessmentStatusUpdateRequest } from '../interfaces/assessmentStatusUpdateRequest';
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
import { FileResponse } from '../interfaces/fileResponse';
import { RequestConfig } from '../interfaces/requestConfig';
import { WorkHistoryResponse } from '../interfaces/workHistoryResponse';
import { SiteResponse } from '../interfaces/siteResponse';
import { SiteCreateResponse } from '../interfaces/siteCreateResponse';
import { InspectionUnitsUpdateRequest } from '../interfaces/inspectionUnitsUpdateRequest';
import { CommentCreateRequest } from '../interfaces/commentCreateRequest';
import { CommentCreateResponse } from '../interfaces/commentCreateResponse';
export interface StreetManagerApiClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerApiClient {
    private config;
    private axios;
    constructor(config: StreetManagerApiClientConfig);
    status(): Promise<void>;
    authenticate(requestConfig: RequestConfig, authenticationRequest: AuthenticationRequest): Promise<AuthenticationResponse>;
    createPermit(requestConfig: RequestConfig, permitCreateRequest: PermitCreateRequest): Promise<PermitResponse>;
    getPermit(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string): Promise<PermitResponse>;
    getWork(requestConfig: RequestConfig, workReferenceNumber: string): Promise<WorkResponse>;
    updatePermitAssessmentStatus(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, updateAssessmentStatusRequest: AssessmentStatusUpdateRequest): Promise<void>;
    updateWorkActualStartDate(requestConfig: RequestConfig, workReferenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void>;
    updateWorkActualStopDate(requestConfig: RequestConfig, workReferenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void>;
    updateExcavationCarriedOut(requestConfig: RequestConfig, workReferenceNumber: string, excavationCarriedOutUpdateRequest: ExcavationCarriedOutUpdateRequest): Promise<void>;
    updateInspectionUnits(requestConfig: RequestConfig, workReferenceNumber: string, inspectionUnitsUpdateRequest: InspectionUnitsUpdateRequest): Promise<void>;
    createSite(requestConfig: RequestConfig, workReferenceNumber: string, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<SiteCreateResponse>;
    createReinstatement(requestConfig: RequestConfig, workReferenceNumber: string, siteId: number, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<ReinstatementCreateResponse>;
    getSite(requestConfig: RequestConfig, workReferenceNumber: string, siteId: number): Promise<SiteResponse>;
    createInspection(requestConfig: RequestConfig, workReferenceNumber: string, inspectionCreateRequest: InspectionCreateRequest): Promise<void>;
    getInspection(requestConfig: RequestConfig, workReferenceNumber: string, inspectionId: number): Promise<InspectionResponse>;
    createFPN(requestConfig: RequestConfig, workReferenceNumber: string, fpnCreateRequest: FPNCreateRequest): Promise<FPNCreateResponse>;
    createComment(requestConfig: RequestConfig, workReferenceNumber: string, commentCreateRequest: CommentCreateRequest): Promise<CommentCreateResponse>;
    uploadFile(requestConfig: RequestConfig, buffer: Buffer, filename: string): Promise<FileResponse>;
    getFile(requestConfig: RequestConfig, fileId: number): Promise<AxiosResponse<Buffer>>;
    deleteFile(requestConfig: RequestConfig, fileId: number): Promise<void>;
    getWorkHistory(requestConfig: RequestConfig, workReferenceNumber: string): Promise<WorkHistoryResponse[]>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
