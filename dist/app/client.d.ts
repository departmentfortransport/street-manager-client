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
    getPermit(requestConfig: RequestConfig, referenceNumber: string): Promise<PermitResponse>;
    getWork(requestConfig: RequestConfig, referenceNumber: string): Promise<WorkResponse>;
    updateAssessmentStatus(requestConfig: RequestConfig, referenceNumber: string, updateAssessmentStatusRequest: AssessmentStatusUpdateRequest): Promise<void>;
    updateWorkActualStartDate(requestConfig: RequestConfig, referenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void>;
    updateWorkActualStopDate(requestConfig: RequestConfig, referenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void>;
    updateExcavationCarriedOut(requestConfig: RequestConfig, referenceNumber: string, excavationCarriedOutUpdateRequest: ExcavationCarriedOutUpdateRequest): Promise<void>;
    updateInspectionUnits(requestConfig: RequestConfig, referenceNumber: string, inspectionUnitsUpdateRequest: InspectionUnitsUpdateRequest): Promise<void>;
    createSite(requestConfig: RequestConfig, referenceNumber: string, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<SiteCreateResponse>;
    createReinstatement(requestConfig: RequestConfig, referenceNumber: string, siteId: number, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<ReinstatementCreateResponse>;
    getSite(requestConfig: RequestConfig, referenceNumber: string, siteId: number): Promise<SiteResponse>;
    createInspection(requestConfig: RequestConfig, referenceNumber: string, inspectionCreateRequest: InspectionCreateRequest): Promise<void>;
    getInspection(requestConfig: RequestConfig, referenceNumber: string, inspectionId: number): Promise<InspectionResponse>;
    createFPN(requestConfig: RequestConfig, referenceNumber: string, fpnCreateRequest: FPNCreateRequest): Promise<FPNCreateResponse>;
    uploadFile(requestConfig: RequestConfig, buffer: Buffer, filename: string): Promise<FileResponse>;
    getFile(requestConfig: RequestConfig, fileId: number): Promise<AxiosResponse<Buffer>>;
    deleteFile(requestConfig: RequestConfig, fileId: number): Promise<void>;
    getWorkHistory(requestConfig: RequestConfig, referenceNumber: string): Promise<WorkHistoryResponse[]>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
