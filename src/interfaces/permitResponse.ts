import { ActivityType, TrafficManagementType, ApplicationType, CollaborationType, LocationType, WorkType, ReasonForRefusal, CloseFootway, LaneRentalAssessmentOutcome, LaneRentalAssessmentChargeBand, WorkStatus, AssessmentStatus, HS2HighwayExemption } from './referenceTypes'
import { PermitCondition } from './permitCondition'
import { FileSummaryResponse } from './fileSummaryResponse'
import { PermitASD } from './permitASD'
import { PermitSummaryResponse } from './permitSummaryResponse'
import { PermitAlterationSummaryResponse } from './permitAlterationSummaryResponse'
import { LinkedSection81 } from './linkedSection81'

export interface PermitResponse extends PermitSummaryResponse {
  permit_reference_number: string
  work_reference_number: string
  promoter_organisation: string
  promoter_swa_code: string
  promoter_contact_details: string
  secondary_contact: string
  secondary_contact_number: string
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
  town?: string
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
  assessment_comments?: string
  reasons_for_refusal?: ReasonForRefusal[]
  activity_type: ActivityType
  traffic_management_type: TrafficManagementType
  application_type: ApplicationType
  collaboration_type?: CollaborationType
  location_types: LocationType[]
  assessment_status?: AssessmentStatus
  files?: FileSummaryResponse[]
  permit_asds: PermitASD[]
  permit_not_selected_asds: PermitASD[]
  assessment_discount?: number
  assessment_discount_reason?: string
  is_ttro_required?: boolean
  immediate_risk?: boolean
  is_early_start: boolean
  is_deemed: boolean
  early_start_pre_approval?: boolean
  pre_approval_details?: string
  pre_approval_authoriser?: string
  early_start_reason?: string
  additional_info?: string
  permit_alterations?: PermitAlterationSummaryResponse[]
  work_type: WorkType
  revoke_reason?: string
  sliding_end_date_candidate: boolean
  validity_period_end_date: Date
  final_reinstatement: boolean
  workstream_prefix: string
  close_footway: CloseFootway
  lane_rental_assessment_outcome?: LaneRentalAssessmentOutcome
  lane_rental_assessment_additional_details?: string
  lane_rental_assessment_charge_band?: LaneRentalAssessmentChargeBand
  lane_rental_assessment_chargeable_days?: number
  lane_rental_assessment_charges_agreed?: boolean
  is_lane_rental: boolean
  pending_change_details?: string
  work_status: WorkStatus
  hs2_in_act_limits?: boolean
  hs2_consultation_requested_response_date?: Date
  hs2_highway_exemption?: HS2HighwayExemption,
  hs2_is_consultation?: boolean
  hs2_is_consent?: boolean
  hs2_highway_emails?: string[]
  hs2_acknowledged?: boolean
  hs2_acknowledged_date_time?: Date
  additional_contact?: string
  additional_contact_number?: string
  additional_contact_email?: string
  ever_modification_requested: boolean
  is_duration_challenged?: boolean
  is_covid_19_response?: boolean
  hs2_additional_usrns?: number[]
  excavation_carried_out: boolean
  linked_section_81?: LinkedSection81
}
