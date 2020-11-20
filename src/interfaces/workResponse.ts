import { InspectionSummaryResponse } from './inspectionSummaryResponse'
import { SiteSummaryResponse } from './siteSummaryResponse'
import { PermitSummaryResponse } from './permitSummaryResponse'
import { FPNSummaryResponse } from './fpnSummaryResponse'
import { PermitResponse } from './permitResponse'
import { WorkHistorySummaryResponse } from './workHistoryResponse'
import { FileResponse} from './fileResponse'
import { WorkStatusResponse } from './referenceTypes'
import { ForwardPlanSummaryResponse } from './forwardPlanSummaryResponse'
import { Section81SummaryResponse } from './section81SummaryResponse'
import { SampleInspectionSummaryResponse } from './sampleInspectionSummaryResponse'

export interface WorkResponse {
  work_reference_number: string
  workstream_prefix: string
  promoter_swa_code: string
  promoter_organisation: string
  highway_authority_swa_code: string
  highway_authority: string
  street_name: string
  town?: string
  area_name?: string
  road_category: number
  works_coordinates: any
  usrn: number
  inspection_units?: number
  work_status: WorkStatusResponse
  work_status_string: string
  works_location_description: string
  work_start_date?: Date
  work_end_date?: Date
  work_start_time?: Date
  work_end_time?: Date
  description_of_work?: string
  active_permit?: PermitResponse
  forward_plan?: ForwardPlanSummaryResponse
  permits?: PermitSummaryResponse[]
  history: WorkHistorySummaryResponse[]
  sites?: SiteSummaryResponse[]
  inspections?: InspectionSummaryResponse[]
  fpns?: FPNSummaryResponse[]
  section_81?: Section81SummaryResponse
  files?: FileResponse[]
  sample_inspections?: SampleInspectionSummaryResponse[]
}
