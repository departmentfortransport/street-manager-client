import { FPNStatus } from './referenceTypes';
export interface FPNStatusUpdateRequest {
    fpn_status: FPNStatus;
    status_reason?: string;
}
