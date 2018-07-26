import { PermitCreateRequest } from '../interfaces/permitCreateRequest';
import { PermitResponse } from '../interfaces/permitResponse';
import { PermitStatus } from '../interfaces/referenceTypes';
import { AssessmentStatusUpdateRequest } from '../interfaces/assessmentStatusUpdateRequest';
import { WorkStartUpdateRequest } from '../interfaces/workStartUpdateRequest';
import { WorkStopUpdateRequest } from '../interfaces/workStopUpdateRequest';
export interface StreetManagerApiClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerApiClient {
    private config;
    private axios;
    constructor(config: StreetManagerApiClientConfig);
    isAvailable(): Promise<boolean>;
    createPermit(permitCreateRequest: PermitCreateRequest): Promise<PermitResponse>;
    getPermit(referenceNumber: string): Promise<PermitResponse>;
    getPermits(status?: PermitStatus): Promise<PermitResponse[]>;
    updateAssessmentStatus(referenceNumber: string, updateAssessmentStatusRequest: AssessmentStatusUpdateRequest): Promise<void>;
    updateWorkActualStartDate(referenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void>;
    updateWorkActualStopDate(referenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void>;
    private httpHandler;
}
