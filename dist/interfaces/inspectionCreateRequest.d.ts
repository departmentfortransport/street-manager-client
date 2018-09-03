import { InspectionType, InspectionCategory, InspectionOutcome, DefectFixedOnsite } from './referenceTypes';
export interface InspectionCreateRequest {
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
    inspector_name: string;
}
