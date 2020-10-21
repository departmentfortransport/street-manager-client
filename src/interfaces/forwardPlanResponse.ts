import { ForwardPlanSummaryResponse } from './forwardPlanSummaryResponse'
import { TrafficManagementType, HS2HighwayExemption, ForwardPlanWorkType } from './referenceTypes'
import { PermitASDResponse } from './permitASD'

export interface ForwardPlanResponse extends ForwardPlanSummaryResponse {
  promoter_organisation: string
  promoter_swa_code: string
  promoter_contact_details: string
  highway_authority: string
  highway_authority_swa_code: string
  workstream_prefix: string
  works_coordinates: any
  street_name: string
  town?: string
  area_name?: string
  usrn: number
  road_category: number
  start_date: Date
  end_date: Date
  date_created: Date
  works_location_description: string
  description_of_work: string
  project_reference_number?: string
  traffic_management_type?: TrafficManagementType
  traffic_management_type_string?: string
  additional_info?: string
  forward_plan_asds?: PermitASDResponse[]
  cancelled_reason?: string
  hs2_in_act_limits?: boolean
  hs2_consultation_requested_response_date?: Date
  hs2_highway_exemption?: HS2HighwayExemption
  hs2_highway_exemption_string?: string
  hs2_works_type?: ForwardPlanWorkType
  hs2_works_type_string?: string
}
