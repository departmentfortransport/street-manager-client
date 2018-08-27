/// <reference types="node" />
import { AxiosResponse } from 'axios';
import { PermitCreateRequest } from '../interfaces/permitCreateRequest';
import { PermitResponse } from '../interfaces/permitResponse';
import { AssessmentStatusUpdateRequest } from '../interfaces/assessmentStatusUpdateRequest';
import { WorkStartUpdateRequest } from '../interfaces/workStartUpdateRequest';
import { WorkStopUpdateRequest } from '../interfaces/workStopUpdateRequest';
import { ExcavationCarriedOutUpdateRequest } from '../interfaces/excavationCarriedOutUpdateRequest';
import { ReinstatementCreateRequest } from '../interfaces/reinstatementCreateRequest';
import { ReinstatementResponse } from '../interfaces/reinstatementResponse';
import { InspectionCreateRequest } from '../interfaces/inspectionCreateRequest';
import { InspectionResponse } from '../interfaces/inspectionResponse';
import { AuthenticationResponse } from '../interfaces/authenticationResponse';
import { AuthenticationRequest } from '../interfaces/authenticationRequest';
import { FileResponse } from '../interfaces/fileResponse';
import { GetPermitsRequest } from '../interfaces/getPermitsRequest';
import { RequestConfig } from '../interfaces/requestConfig';
import { WorkHistoryResponse } from '../interfaces/workHistoryResponse';
export interface StreetManagerApiClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerApiClient {
    private config;
    private axios;
    constructor(config: StreetManagerApiClientConfig);
<<<<<<< HEAD
    status(): Promise<boolean>;
    authenticate(authenticationRequest: AuthenticationRequest): Promise<AuthenticationResponse>;
    createPermit(token: string, permitCreateRequest: PermitCreateRequest): Promise<PermitResponse>;
    getPermit(token: string, referenceNumber: string): Promise<PermitResponse>;
    getPermits(token: string, getPermitsRequest: GetPermitsRequest): Promise<PermitResponse[]>;
    updateAssessmentStatus(token: string, referenceNumber: string, updateAssessmentStatusRequest: AssessmentStatusUpdateRequest): Promise<void>;
    updateWorkActualStartDate(token: string, referenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void>;
    updateWorkActualStopDate(token: string, referenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void>;
    updateExcavationCarriedOut(token: string, referenceNumber: string, excavationCarriedOutUpdateRequest: ExcavationCarriedOutUpdateRequest): Promise<void>;
    createReinstatement(token: string, referenceNumber: string, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<void>;
    getReinstatement(token: string, referenceNumber: string, reinstatementId: number): Promise<ReinstatementResponse>;
    createInspection(token: string, referenceNumber: string, inspectionCreateRequest: InspectionCreateRequest): Promise<void>;
    getInspection(token: string, referenceNumber: string, inspectionId: number): Promise<InspectionResponse>;
    uploadFile(token: string, buffer: Buffer, filename: string): Promise<FileResponse>;
    getFile(token: string, fileId: number): Promise<AxiosResponse<Buffer>>;
    deleteFile(token: string, fileId: number): Promise<void>;
=======
    status(): Promise<void>;
    authenticate(requestConfig: RequestConfig, authenticationRequest: AuthenticationRequest): Promise<AuthenticationResponse>;
    createPermit(requestConfig: RequestConfig, permitCreateRequest: PermitCreateRequest): Promise<PermitResponse>;
    getPermit(requestConfig: RequestConfig, referenceNumber: string): Promise<PermitResponse>;
    getPermits(requestConfig: RequestConfig, getPermitsRequest: GetPermitsRequest): Promise<PermitResponse[]>;
    updateAssessmentStatus(requestConfig: RequestConfig, referenceNumber: string, updateAssessmentStatusRequest: AssessmentStatusUpdateRequest): Promise<void>;
    updateWorkActualStartDate(requestConfig: RequestConfig, referenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void>;
    updateWorkActualStopDate(requestConfig: RequestConfig, referenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void>;
    updateExcavationCarriedOut(requestConfig: RequestConfig, referenceNumber: string, excavationCarriedOutUpdateRequest: ExcavationCarriedOutUpdateRequest): Promise<void>;
    createReinstatement(requestConfig: RequestConfig, referenceNumber: string, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<void>;
    getReinstatement(requestConfig: RequestConfig, referenceNumber: string, reinstatementId: number): Promise<ReinstatementResponse>;
    createInspection(requestConfig: RequestConfig, referenceNumber: string, inspectionCreateRequest: InspectionCreateRequest): Promise<void>;
    getInspection(requestConfig: RequestConfig, referenceNumber: string, inspectionId: number): Promise<InspectionResponse>;
    uploadFile(requestConfig: RequestConfig, buffer: Buffer, filename: string): Promise<FileResponse>;
    getFile(requestConfig: RequestConfig, fileId: number): Promise<AxiosResponse<Buffer>>;
    deleteFile(requestConfig: RequestConfig, fileId: number): Promise<void>;
    getWorkHistory(requestConfig: RequestConfig, referenceNumber: string): Promise<WorkHistoryResponse[]>;
>>>>>>> 250c4ff... upsate dist
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
