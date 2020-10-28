import { PermitStatus, WorkCategory } from './referenceTypes';
export interface PermitSummaryResponse {
    permit_reference_number: string;
    proposed_start_date: Date;
    proposed_end_date: Date;
    actual_start_date?: Date;
    actual_stop_date?: Date;
    permit_status: PermitStatus;
    permit_status_string: string;
    work_category: WorkCategory;
    work_category_string: string;
}
