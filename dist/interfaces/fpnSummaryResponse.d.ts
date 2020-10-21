import { OffenceCode, FPNStatus } from './referenceTypes';
export interface FPNSummaryResponse {
    fpn_reference_number: string;
    fpn_offence_type: OffenceCode;
    issue_date_time: Date;
    fpn_status: FPNStatus;
    status_changed_date: Date;
}
