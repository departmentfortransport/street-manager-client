import { WorkCreateRequest } from 'street-manager-interfaces'
import { WorkResponse } from 'street-manager-interfaces';

export interface StreetManagerApiClientConfig {
  baseURL: string,
  timeout?: number
}

export class StreetManagerApiClient {
  constructor(config: StreetManagerApiClientConfig)
  createWork(workCreateRequest: WorkCreateRequest): Promise<WorkResponse>
  isAvailable(): Promise<boolean>
}
