import { PermitStatus, ActivityType, WorkCategory, TrafficManagementType, ApplicationType, CollaborationType, LocationType, AssessmentStatus } from './referenceTypes'
import { ReinstatementResponse } from './reinstatementResponse'

export interface PermitResponse {
  permit_id: number
  reference_number: string
  promoter_organisation: string
  promoter_contact_details: string
  approved_undertaker: string
  undertaker_contact_details: string
  proposed_start_date: Date
  proposed_start_time?: Date
  proposed_end_date: Date
  proposed_end_time?: Date
  duration: number
  description_of_work: string
  excavation: boolean
  project_reference_number?: string
  commercially_sensitive?: boolean
  traffic_management_plan: boolean
  lane_rental_applicable: boolean
  street_name: string
  area_name: string
  usrn: number
  highway_authority: string
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
  actual_start_date?: Date
  actual_stop_date?: Date
  excavation_carried_out: boolean
  permit_status: PermitStatus
  activity_type: ActivityType
  work_category: WorkCategory
  traffic_management_type: TrafficManagementType
  application_type: ApplicationType
  collaboration_type?: CollaborationType
  location_types: LocationType[]
  assessment_status?: AssessmentStatus
  reinstatements?: ReinstatementResponse[]
}
