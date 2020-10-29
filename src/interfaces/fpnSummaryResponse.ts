import { OffenceCodeResponse, FPNStatusResponse } from './referenceTypes'

export interface FPNSummaryResponse {
  fpn_reference_number: string
  fpn_offence_type: OffenceCodeResponse
  fpn_offence_type_string: string
  issue_date_time: Date
  fpn_status: FPNStatusResponse
  fpn_status_string: string
  status_changed_date: Date
}
