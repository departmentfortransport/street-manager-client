import { FPNStatus } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface FPNStatusUpdateRequest extends DelegatedUserIdentification {
    fpn_status: FPNStatus;
    /** Required if FPNStatus = withdrawn or disputed
     * Optional if FPNStatus = accepted
     * Max length 500 characters
     */
    status_reason?: string;
}
