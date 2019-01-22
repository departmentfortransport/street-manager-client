import { InspectionCategory, InspectionOutcome, DefectFixedOnsite, InspectionType } from './referenceTypes';
import { FileResponse } from './fileResponse';
export interface InspectionResponse {
    inspection_reference_number: string;
    permit_id: number;
    inspection_type: InspectionType;
    inspection_start_date: Date;
    inspection_category: InspectionCategory;
    inspection_outcome: InspectionOutcome;
    defect_details?: string;
    unable_to_complete_details?: string;
    was_call_logged?: boolean;
    call_logged_to?: string;
    call_logged_summary?: string;
    defect_fixed_on_site?: DefectFixedOnsite;
    additional_failure_comments?: string;
    date_created: Date;
    date_modified: Date;
    files?: FileResponse[];
    work_reference_number: string;
    reinspection_date?: Date;
    reinspection_date_time?: Date;
}
