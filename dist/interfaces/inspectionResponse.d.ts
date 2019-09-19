import { InspectionCategory, InspectionOutcome, DefectFixedOnsite, InspectionType } from './referenceTypes';
import { FileSummaryResponse } from './fileSummaryResponse';
import { FailureReasonDetailsResponse } from './failureReasonDetailsResponse';
export interface InspectionResponse {
    inspection_reference_number: string;
    permit_id: number;
    inspection_type: InspectionType;
    inspection_start_date: Date;
    inspection_category: InspectionCategory;
    inspection_outcome: InspectionOutcome;
    defect_details?: string;
    failure_reason_details?: FailureReasonDetailsResponse[];
    unable_to_complete_details?: string;
    was_call_logged?: boolean;
    call_logged_to?: string;
    call_logged_summary?: string;
    defect_fixed_on_site?: DefectFixedOnsite;
    additional_failure_comments?: string;
    date_created: Date;
    date_modified: Date;
    files?: FileSummaryResponse[];
    work_reference_number: string;
    reinspection_date?: Date;
    reinspection_date_time?: Date;
    username: string;
    promoter_organisation: string;
    highway_authority: string;
    inspector_name?: string;
}
