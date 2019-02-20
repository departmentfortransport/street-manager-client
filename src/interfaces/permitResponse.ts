import { ActivityType, TrafficManagementType, ApplicationType, CollaborationType, LocationType, PermitStatus } from './referenceTypes'
import { PermitCondition } from './permitCondition'
import { FileResponse } from './fileResponse'
import { PermitASD } from './permitASD'
import { PermitSummaryResponse } from './permitSummaryResponse'
import { PermitAlterationSummaryResponse } from './permitAlterationSummaryResponse'

export interface PermitResponse extends PermitSummaryResponse {
  permit_id: number
  permit_reference_number: string
  work_id: number
  work_reference_number: string
  promoter_organisation: string
  promoter_swa_code: string
  promoter_contact_details: string
  approved_contractor: string
  contractor_contact_details: string
  proposed_start_time?: Date
  proposed_end_time?: Date
  calendar_day_duration: number
  working_day_duration: number
  description_of_work: string
  excavation: boolean
  project_reference_number?: string
  traffic_management_plan: boolean
  lane_rental_applicable: boolean
  permit_conditions?: PermitCondition[]
  street_name: string
  area_name: string
  usrn: number
  highway_authority: string
  highway_authority_swa_code: string
  road_category: number
  works_location_description: string
  works_coordinates: any
  environmental_health_notifiable: boolean
  collaborative_working: boolean
  collaboration_details?: string
  collaborative_works?: string
  date_created: Date
  date_modified: Date
  deadline_date: Date
  excavation_carried_out: boolean
  assessment_comments?: string
  activity_type: ActivityType
  traffic_management_type: TrafficManagementType
  application_type: ApplicationType
  collaboration_type?: CollaborationType
  location_types: LocationType[]
  assessment_status?: PermitStatus
  files?: FileResponse[]
  inspection_units?: number
  permit_asds: PermitASD[]
  assessment_discount?: number
  is_ttro_required?: boolean
  early_start_pre_approval?: boolean
  pre_approval_details?: string
  pre_approval_authoriser?: string
  early_start_reason?: string
  additional_info?: string
  permit_alterations?: PermitAlterationSummaryResponse[]
}
