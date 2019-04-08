import { InspectionSummaryResponse } from './inspectionSummaryResponse'
import { SiteSummaryResponse } from './siteSummaryResponse'
import { PermitSummaryResponse } from './permitSummaryResponse'
import { FPNSummaryResponse } from './fpnSummaryResponse'
import { PermitResponse } from './permitResponse'
import { WorkHistoryResponse } from './workHistoryResponse'

export interface WorkResponse {
  work_id: number
  work_reference_number: string
  active_permit: PermitResponse
  permits: PermitSummaryResponse[]
  history: WorkHistoryResponse[]
  sites?: SiteSummaryResponse[]
  inspections?: InspectionSummaryResponse[]
  fpns?: FPNSummaryResponse[]
}
