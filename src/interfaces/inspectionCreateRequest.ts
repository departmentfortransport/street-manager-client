import { InspectionType, InspectionCategory, InspectionOutcome, DefectFixedOnsite } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface InspectionCreateRequest extends DelegatedUserIdentification {
    inspection_type: InspectionType,
    inspection_start_date: Date,
    inspection_category: InspectionCategory,
    inspection_outcome: InspectionOutcome,
    defect_details?: string,
    unable_to_complete_details?: string,
    was_call_logged?: boolean,
    call_logged_to?: string,
    call_logged_summary?: string,
    defect_fixed_on_site?: DefectFixedOnsite,
    additional_failure_comments?: string,
    inspection_evidence?: boolean,
    file_ids?: number[],
    reinspection_date?: Date,
    reinspection_date_time?: Date,
    username: string
}
