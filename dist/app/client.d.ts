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
import { FileResponse } from '../interfaces/fileResponse';
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
    createWork(requestConfig: RequestConfig, workCreateRequest: WorkCreateRequest): Promise<WorkCreateResponse>;
    createPermit(requestConfig: RequestConfig, workReferenceNumber: string, permitCreateRequest: PermitCreateRequest): Promise<PermitCreateResponse>;
    getPermit(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string): Promise<PermitResponse>;
    getWork(requestConfig: RequestConfig, workReferenceNumber: string): Promise<WorkResponse>;
    updatePermitStatus(requestConfig: RequestConfig, workReferenceNumber: string, permitReferenceNumber: string, updatePermitStatusRequest: PermitStatusUpdateRequest): Promise<void>;
    updateWorkActualStartDate(requestConfig: RequestConfig, workReferenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void>;
    updateWorkActualStopDate(requestConfig: RequestConfig, workReferenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void>;
    updateExcavationCarriedOut(requestConfig: RequestConfig, workReferenceNumber: string, excavationCarriedOutUpdateRequest: ExcavationCarriedOutUpdateRequest): Promise<void>;
    updateInspectionUnits(requestConfig: RequestConfig, workReferenceNumber: string, inspectionUnitsUpdateRequest: InspectionUnitsUpdateRequest): Promise<void>;
    createSite(requestConfig: RequestConfig, workReferenceNumber: string, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<SiteCreateResponse>;
    createReinstatement(requestConfig: RequestConfig, workReferenceNumber: string, siteId: number, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<ReinstatementCreateResponse>;
    getSite(requestConfig: RequestConfig, workReferenceNumber: string, siteId: number): Promise<SiteResponse>;
    createInspection(requestConfig: RequestConfig, workReferenceNumber: string, inspectionCreateRequest: InspectionCreateRequest): Promise<InspectionCreateResponse>;
    getInspection(requestConfig: RequestConfig, workReferenceNumber: string, inspectionReferenceNumber: string): Promise<InspectionResponse>;
    createFPN(requestConfig: RequestConfig, workReferenceNumber: string, fpnCreateRequest: FPNCreateRequest): Promise<FPNCreateResponse>;
    getFPN(requestConfig: RequestConfig, workReferenceNumber: string, fpnReferenceNumber: string): Promise<FPNResponse>;
    updateFPNStatus(requestConfig: RequestConfig, workReferenceNumber: string, fpnReferenceNumber: string, fpnStatusUpdateRequest: FPNStatusUpdateRequest): Promise<void>;
    createComment(requestConfig: RequestConfig, workReferenceNumber: string, commentCreateRequest: CommentCreateRequest): Promise<CommentCreateResponse>;
    uploadFile(requestConfig: RequestConfig, buffer: Buffer, filename: string): Promise<FileResponse>;
    getFile(requestConfig: RequestConfig, fileId: number): Promise<AxiosResponse<Buffer>>;
    deleteFile(requestConfig: RequestConfig, fileId: number): Promise<void>;
    getWorkHistory(requestConfig: RequestConfig, workReferenceNumber: string): Promise<WorkHistoryResponse[]>;
    getDuration(requestConfig: RequestConfig, startDate: string, endDate: string): Promise<DurationCalculationResponse>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
