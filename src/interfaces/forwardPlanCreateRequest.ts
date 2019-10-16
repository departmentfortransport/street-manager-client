import { TrafficManagementType } from './referenceTypes'
import { PermitASD } from './permitASD'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface ForwardPlanCreateRequest extends DelegatedUserIdentification {
    /** Max length 24 characters
     * Must be unique in the system
     * Must contain only alphanumeric characters, dashes and underscores
     * If not supplied it will be auto-generated
     */
    work_reference_number?: string
    /** Max length 4 characters */
    promoter_swa_code: string
    /** Max length 4 characters */
    highway_authority_swa_code: string
    /** Must consist of 3 positive whole numbers */
    workstream_prefix?: string
    /** Must be a GeoJSON geometry (using British National Grid easting and northing coordinate pairs) and must be a point, line string or polygon */
    works_coordinates: any
    /** Max length 100 characters
     * Use Street Lookup API endpoint /nsg/streets to lookup this information
     * If not provided, populated with NSG data related to supplied USRN
     */
    street_name?: string
    /** Max length 100 characters
     * Use Street Lookup API endpoint /nsg/streets to lookup this information
     * If not provided, populated with NSG data related to supplied USRN
     */
    area_name?: string
    /** Is whole number between 1000001 and 99999999 inclusive
     * See business rule ref. 1.12 - USRN
     */
    usrn: number
    /**
     * Is whole number between 0 and 4 inclusive
     * If not provided, populated with NSG data related to supplied USRN
     */
    road_category?: number
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
