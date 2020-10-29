import { DefectFixedOnsiteResponse, InspectionStatusResponse, InspectionReasonForWithdrawalResponse, InspectionTypeResponse, InspectionCategoryResponse, InspectionOutcomeResponse } from './referenceTypes'
import { FileSummaryResponse } from './fileSummaryResponse'
import { FailureReasonDetailsResponse } from './failureReasonDetailsResponse'

export interface InspectionResponse {
  inspection_reference_number: string
  inspection_type: InspectionTypeResponse
  inspection_type_string: string
  inspection_start_date: Date
  inspection_category?: InspectionCategoryResponse
  inspection_category_string?: string
  inspection_outcome: InspectionOutcomeResponse
  inspection_outcome_string: string
  defect_details?: string
  failure_reason_details?: FailureReasonDetailsResponse[]
  inspection_outcome_details?: string
  was_call_logged?: boolean
  call_logged_to?: string
  call_logged_reference?: string
  call_logged_summary?: string
  defect_fixed_on_site?: DefectFixedOnsiteResponse
  defect_fixed_on_site_string?: string
  additional_comments?: string
  date_created: Date
  date_modified: Date
  files?: FileSummaryResponse[]
  work_reference_number: string
  reinspection_date?: Date
  reinspection_date_time?: Date
  username: string
  promoter_organisation: string
  highway_authority: string
  inspector_name?: string
  made_safe_by_ha?: boolean
  inspection_status: InspectionStatusResponse
  inspection_status_string: string
  inspection_reason_for_withdrawal?: InspectionReasonForWithdrawalResponse
  inspection_reason_for_withdrawal_string?: string
  withdrawal_details?: string
}
