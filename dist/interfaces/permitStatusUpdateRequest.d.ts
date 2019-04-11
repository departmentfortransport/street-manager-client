import { PermitStatus } from './referenceTypes';
export interface PermitStatusUpdateRequest {
    permit_status: PermitStatus;
    additional_comments?: string;
    assessment_discount?: number;
    revoke_reason?: string;
}
