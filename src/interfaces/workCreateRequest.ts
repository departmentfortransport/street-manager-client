import { ActivityType, TrafficManagementType, ApplicationType, CollaborationType, LocationType, WorkType } from './referenceTypes'
import { PermitCondition } from './permitCondition'
import { PermitASD } from './permitASD'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface WorkCreateRequest extends DelegatedUserIdentification {
  /** Max length 24 characters
   * Must be unique in the system
   */
  work_reference_number: string
  /** Max length 100 characters */
  promoter_organisation: string
  /** Max length 4 characters */
  promoter_swa_code: string
  /** Max length 100 characters */
  promoter_contact_details: string
  /** Max length 100 characters */
  approved_contractor: string
  /** Max length 100 characters */
  contractor_contact_details: string
  /** Max length 100 characters */
  secondary_contact_email?: string
  proposed_start_date: Date
  /** proposed_start_time is required if proposed_start_date is in the past */
  proposed_start_time?: Date
  /** proposed_end_date must be on or after proposed_start_date
   * If work_type = planned, the maximum date range between proposed_start_date and proposed_end_date is 5 years
   */
  proposed_end_date: Date
  /** proposed_end_time is required if proposed_end_date is in the past
   * proposed_end_time must be after the date and time for proposed_start_time
   */
  proposed_end_time?: Date
  /** Max length 500 characters */
  description_of_work: string
  /** Whether an excavation will be required */
  excavation: boolean
  /** Max length 100 characters */
  project_reference_number?: string
  traffic_management_plan: boolean
  lane_rental_applicable: boolean
  /** Array values must be unique
   * See business rule ref. 1.11 - Permit conditions
   */
  permit_conditions?: PermitCondition[]
  /** Max length 100 characters
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  street_name: string
  /** Max length 100 characters
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  area_name?: string
  /** Is whole number between 1000001 and 99999999 inclusive
   * See business rule ref. 1.12 - USRN
   */
  usrn: number
  /** Max length 100 characters
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  highway_authority: string
  /** Max length 4 characters */
  highway_authority_swa_code: string
  /** Is whole number between 0 and 4 inclusive */
  road_category: number
  /** Max length 500 characters */
  works_location_description: string
  /** Must be a GeoJSON geometry (using British National Grid easting and northing coordinate pairs) and must be a point, line string or polygon */
  works_coordinates: any
  environmental_health_notifiable: boolean
  collaborative_working: boolean
  /** Required if collaborative_working = true
   * Max length 500 characters
   */
  collaboration_details?: string
  /** Optional but only saved if collaborative_working = true
   * Max length 500 characters
   */
  collaborative_works?: string
  activity_type: ActivityType
  traffic_management_type: TrafficManagementType
  application_type: ApplicationType
  /** Required if collaborative_working = true */
  collaboration_type?: CollaborationType
  /** Array values must be unique */
  location_types: LocationType[]
  /** Array values must be unique
   * Must not contain null or undefined values
   * A file_id can only be associated with one section of Street Manager
   * See API specification Resource Guide > Works API > File upload for more information
   */
  file_ids?: number[]
  permit_asds?: PermitASD[]
  work_type: WorkType
  /** Required when work_type is planned */
  is_ttro_required?: boolean
  /** Required when work_type is immediate */
  immediate_risk?: boolean
  /** See business rule ref. 1.9 - Early start */
  early_start_pre_approval?: boolean
  /** Required if early_start_pre_approval = true
   * Max length 500 characters
   */
  pre_approval_details?: string
  /** Required if early_start_pre_approval = true
   * Max length 100 characters
   */
  pre_approval_authoriser?: string
  /** Required if early_start_pre_approval = false
   * Max length 500 characters
   */
  early_start_reason?: string
  /** Max length 500 characters */
  additional_info?: string
  /** Must consist of 3 positive whole numbers */
  workstream_prefix?: string
}
