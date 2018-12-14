import { InspectionResponse } from './inspectionResponse'
import { SiteSummaryResponse } from './siteSummaryResponse'
import { PermitStatus } from './referenceTypes'
import { PermitSummaryResponse } from './permitSummaryResponse'

export interface WorkResponse {
  work_id: number,
  reference_number: string,
  permit_reference_number: string,
  actual_start_date?: Date,
  actual_end_date?: Date,
  excavation_carried_out: boolean,
  inspection_units?: number,
  permit_status: PermitStatus,
  promoter_swa_code: string,
  highway_authority_swa_code: string,
  permits: PermitSummaryResponse[],
  sites?: SiteSummaryResponse[]
  inspections?: InspectionResponse[]
}
