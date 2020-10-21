import { InspectionCategory, InspectionOutcome, InspectionType, InspectionResponseType, InspectionStatus } from './referenceTypes'

export interface InspectionSummaryResponse {
  inspection_date: Date
  inspection_response_type: InspectionResponseType
  inspection_response_type_string: string
  inspection_reference_number?: string
  inspection_type: InspectionType
  inspection_type_string: string
  inspection_status: InspectionStatus
  inspection_status_string: string
  inspection_category?: InspectionCategory
  inspection_category_string?: string
  inspection_outcome?: InspectionOutcome
  inspection_outcome_string?: string
  reinspection_date_time?: Date
}
