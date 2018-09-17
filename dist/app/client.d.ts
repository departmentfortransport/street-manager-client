import { PermitCreateRequest } from '../interfaces/permitCreateRequest';
import { PermitResponse } from '../interfaces/permitResponse';
import { AssessmentStatusUpdateRequest } from '../interfaces/assessmentStatusUpdateRequest';
import { WorkStartUpdateRequest } from '../interfaces/workStartUpdateRequest';
import { WorkStopUpdateRequest } from '../interfaces/workStopUpdateRequest';
import { ExcavationCarriedOutUpdateRequest } from '../interfaces/excavationCarriedOutUpdateRequest';
import { ReinstatementCreateRequest } from '../interfaces/reinstatementCreateRequest';
import { ReinstatementResponse } from '../interfaces/reinstatementResponse';
import { InspectionCreateRequest } from '../interfaces/inspectionCreateRequest';
import { PermitStatus } from '../interfaces/referenceTypes';
import { AuthenticationResponse } from '../interfaces/authenticationResponse';
import { AuthenticationRequest } from '../interfaces/authenticationRequest';
export interface StreetManagerApiClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerApiClient {
    private config;
    private axios;
    constructor(config: StreetManagerApiClientConfig);
    isAvailable(): Promise<boolean>;
    authenticate(authenticationRequest: AuthenticationRequest): Promise<AuthenticationResponse>;
    createPermit(token: string, permitCreateRequest: PermitCreateRequest): Promise<PermitResponse>;
    getPermit(token: string, referenceNumber: string): Promise<PermitResponse>;
    getPermits(token: string, status?: PermitStatus): Promise<PermitResponse[]>;
    updateAssessmentStatus(token: string, referenceNumber: string, updateAssessmentStatusRequest: AssessmentStatusUpdateRequest): Promise<void>;
    updateWorkActualStartDate(token: string, referenceNumber: string, workStartUpdateRequest: WorkStartUpdateRequest): Promise<void>;
    updateWorkActualStopDate(token: string, referenceNumber: string, workStopUpdateRequest: WorkStopUpdateRequest): Promise<void>;
    updateExcavationCarriedOut(token: string, referenceNumber: string, excavationCarriedOutUpdateRequest: ExcavationCarriedOutUpdateRequest): Promise<void>;
    createReinstatement(token: string, referenceNumber: string, reinstatementCreateRequest: ReinstatementCreateRequest): Promise<void>;
    getReinstatement(token: string, referenceNumber: string, reinstatementId: number): Promise<ReinstatementResponse>;
    createInspection(token: string, referenceNumber: string, inspectionCreateRequest: InspectionCreateRequest): Promise<void>;
    private httpHandler;
    private generateRequestConfig;
}
