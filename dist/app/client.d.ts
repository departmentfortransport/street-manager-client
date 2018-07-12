import { PermitCreateRequest } from '../interfaces/permitCreateRequest';
import { PermitResponse } from '../interfaces/permitResponse';
import { PermitStatus } from '../interfaces/referenceTypes';
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
    private httpHandler;
}
