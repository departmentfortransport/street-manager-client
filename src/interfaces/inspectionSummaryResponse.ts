import { InspectionResponseTypeResponse, InspectionStatusResponse, InspectionTypeResponse, InspectionCategoryResponse, InspectionOutcomeResponse } from './referenceTypes'

export interface InspectionSummaryResponse {
  inspection_date: Date
  inspection_response_type: InspectionResponseTypeResponse
  inspection_response_type_string: string
  inspection_reference_number?: string
  inspection_type: InspectionTypeResponse
  inspection_type_string: string
  inspection_status: InspectionStatusResponse
  inspection_status_string: string
  inspection_category?: InspectionCategoryResponse
  inspection_category_string?: string
  inspection_outcome?: InspectionOutcomeResponse
  inspection_outcome_string?: string
  reinspection_date_time?: Date
}
