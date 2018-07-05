import { WorkCreateRequest } from '../interfaces/workCreateRequest';
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
    createWork(workCreateRequest: WorkCreateRequest): Promise<WorkResponse>;
    getWorks(status?: WorkStatus): Promise<WorkResponse[]>;
    private httpHandler;
}
