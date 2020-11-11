import { WorkCategoryResponseEnum, PermitStatusResponse } from './referenceTypes';
export interface PermitSummaryResponse {
    permit_reference_number: string;
    proposed_start_date: Date;
    proposed_end_date: Date;
    actual_start_date?: Date;
    actual_stop_date?: Date;
    permit_status: PermitStatusResponse;
    permit_status_string: string;
    work_category: WorkCategoryResponseEnum;
    work_category_string: string;
}
