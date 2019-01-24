import { InspectionCategory, InspectionOutcome, InspectionType, InspectionResponseType } from './referenceTypes';
export interface InspectionSummaryResponse {
    inspection_date_time: Date;
    inspection_response_type: InspectionResponseType;
    inspection_reference_number?: string;
    reinspection_id?: number;
    inspection_type?: InspectionType;
    inspection_category?: InspectionCategory;
    inspection_outcome?: InspectionOutcome;
}
