import { PermitAlterationSummaryResponse } from './permitAlterationSummaryResponse';
import { PermitResponse } from './permitResponse';
import { PermitStatusResponse } from './referenceTypes';
export interface PermitAlterationResponse extends PermitAlterationSummaryResponse {
    permit_status?: PermitStatusResponse;
    permit_status_string?: string;
    assessment_discount?: number;
    assessment_comments?: string;
    permit_alteration_reason: string;
    original: PermitResponse;
    proposed: PermitResponse;
}
