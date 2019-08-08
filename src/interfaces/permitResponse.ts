import { ActivityType, TrafficManagementType, ApplicationType, CollaborationType, LocationType, PermitStatus, WorkType, ReasonForRefusal, CloseFootway, LaneRentalAssessmentOutcome, LaneRentalAsssessmentChargeBand } from './referenceTypes'
import { PermitCondition } from './permitCondition'
import { FileSummaryResponse } from './fileSummaryResponse'
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
  secondary_contact_email?: string
  proposed_start_time?: Date
  proposed_end_time?: Date
  reasonable_period_end_date: Date
  calendar_day_duration: number
  working_day_duration: number
  description_of_work: string
  excavation: boolean
  project_reference_number?: string
  traffic_management_plan: boolean
  lane_rental_applicable: boolean
  permit_conditions?: PermitCondition[]
  street_name: string
  area_name?: string
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
  reasons_for_refusal?: ReasonForRefusal[]
  activity_type: ActivityType
  traffic_management_type: TrafficManagementType
  application_type: ApplicationType
  collaboration_type?: CollaborationType
  location_types: LocationType[]
  assessment_status?: PermitStatus
  files?: FileSummaryResponse[]
  inspection_units?: number
  permit_asds: PermitASD[]
  assessment_discount?: number
  is_ttro_required?: boolean
  immediate_risk?: boolean
  early_start_pre_approval?: boolean
  pre_approval_details?: string
  pre_approval_authoriser?: string
  early_start_reason?: string
  additional_info?: string
  permit_alterations?: PermitAlterationSummaryResponse[]
  work_type: WorkType
  is_progressed_paa?: boolean
  revoke_reason?: string
  sliding_end_date_candidate: boolean
  validity_period_end_date: Date
  final_reinstatement: boolean
  workstream_id: number
  close_footway: CloseFootway
  lane_rental_assessment_outcome?: LaneRentalAssessmentOutcome
  lane_rental_assessment_additional_details?: string
  lane_rental_assessment_charge_band?: LaneRentalAsssessmentChargeBand
  lane_rental_assessment_chargeable_days?: number
  lane_rental_assessment_charges_agreed?: boolean
  is_lane_rental?: boolean
}
