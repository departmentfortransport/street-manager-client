import { InspectionSummaryResponse } from './inspectionSummaryResponse'
import { SiteSummaryResponse } from './siteSummaryResponse'
import { PermitSummaryResponse } from './permitSummaryResponse'
import { FPNSummaryResponse } from './fpnSummaryResponse'
import { PermitResponse } from './permitResponse'
import { WorkHistoryResponse } from './workHistoryResponse'
import { FileResponse} from './fileResponse'
import { WorkStatus } from './referenceTypes'
import { ForwardPlanSummaryResponse } from './forwardPlanSummaryResponse'

export interface WorkResponse {
  work_id: number
  work_reference_number: string
  workstream_id: number
  promoter_swa_code: string
  promoter_organisation: string
  highway_authority_swa_code: string
  highway_authority: string
  street_name: string
  area_name?: string
  usrn: number
  work_status: WorkStatus
  active_permit?: PermitResponse
  forward_plan?: ForwardPlanSummaryResponse
  permits?: PermitSummaryResponse[]
  history: WorkHistoryResponse[]
  sites?: SiteSummaryResponse[]
  inspections?: InspectionSummaryResponse[]
  fpns?: FPNSummaryResponse[]
  files?: FileResponse[]
}
