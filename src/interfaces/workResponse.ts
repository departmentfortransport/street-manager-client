import { InspectionResponse } from './inspectionResponse'
import { SiteSummaryResponse } from './siteSummaryResponse'
import { PermitSummaryResponse } from './permitSummaryResponse'
import { FPNSummaryResponse } from './fpnSummaryResponse'
import { PermitResponse } from './permitResponse'

export interface WorkResponse {
  work_id: number
  work_reference_number: string
  active_permit: PermitResponse
  permits: PermitSummaryResponse[]
  sites?: SiteSummaryResponse[]
  inspections?: InspectionResponse[]
  fpns?: FPNSummaryResponse[]
}
