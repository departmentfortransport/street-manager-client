import { TrafficManagementType } from './referenceTypes'
import { PermitASD } from './permitASD'

export interface ForwardPlanUpdateRequest {
    /** Must be a GeoJSON geometry (using British National Grid easting and northing coordinate pairs) and must be a point, line string or polygon */
    works_coordinates: any
    start_date: Date
    /** end_date must be on or after start_date */
    end_date: Date
    /** Max length 500 characters */
    works_location_description: string
    /** Max length 500 characters */
    description_of_work: string
    /** Max length 100 characters */
    project_reference_number?: string
    traffic_management_type?: TrafficManagementType
    /** Max length 500 characters */
    additional_info?: string,
    forward_plan_asds?: PermitASD[]
}
