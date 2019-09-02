import { InspectionSummaryResponse } from './inspectionSummaryResponse'
import { SiteSummaryResponse } from './siteSummaryResponse'
import { PermitSummaryResponse } from './permitSummaryResponse'
import { FPNSummaryResponse } from './fpnSummaryResponse'
import { PermitResponse } from './permitResponse'
import { WorkHistoryResponse } from './workHistoryResponse'
import { FileResponse} from './fileResponse'
import { WorkStatus } from './referenceTypes'

export interface WorkResponse {
  work_id: number
  work_reference_number: string
  workstream_id: number
  promoter_swa_code: string
  highway_authority_swa_code: string
  street_name: string
  area_name?: string
  usrn: number
  work_status: WorkStatus
  active_permit?: PermitResponse
  permits?: PermitSummaryResponse[]
  history: WorkHistoryResponse[]
  sites?: SiteSummaryResponse[]
  inspections?: InspectionSummaryResponse[]
  fpns?: FPNSummaryResponse[]
  files?: FileResponse[]
}
