import { FPNStatus } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface FPNStatusUpdateRequest extends DelegatedUserIdentification {
    fpn_status: FPNStatus;
    status_reason?: string;
}
