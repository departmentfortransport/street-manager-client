import { PermitCreateRequest } from '../interfaces/permitCreateRequest';
import { WorkResponse } from '../interfaces/workResponse';
import { WorkStatus } from '../interfaces/referenceTypes';
export interface StreetManagerApiClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerApiClient {
    private config;
    private axios;
    constructor(config: StreetManagerApiClientConfig);
    isAvailable(): Promise<boolean>;
    createWork(permitCreateRequest: PermitCreateRequest): Promise<WorkResponse>;
    getWork(referenceNumber: string): Promise<WorkResponse>;
    getWorks(status?: WorkStatus): Promise<WorkResponse[]>;
    private httpHandler;
}
