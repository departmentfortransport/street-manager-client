import { InspectionResponse } from './inspectionResponse'
import { SiteSummaryResponse } from './siteSummaryResponse'
import { PermitStatus } from './referenceTypes'
import { PermitSummaryResponse } from './permitSummaryResponse'
import { FPNSummaryResponse } from './fpnSummaryResponse'

export interface WorkResponse {
  work_id: number,
  work_reference_number: string,
  permit_reference_number: string,
  actual_start_date?: Date,
  actual_end_date?: Date,
  excavation_carried_out: boolean,
  inspection_units?: number,
  permit_status: PermitStatus,
  promoter_swa_code: string,
  highway_authority_swa_code: string,
  works_location_description: string,
  street_name: string,
  area_name: string,
  permits: PermitSummaryResponse[],
  sites?: SiteSummaryResponse[],
  inspections?: InspectionResponse[],
  fpns?: FPNSummaryResponse[]
}
