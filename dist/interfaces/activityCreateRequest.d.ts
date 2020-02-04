import { TrafficManagementType, ActivityActivityType, LocationType } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface ActivityCreateRequest extends DelegatedUserIdentification {
    /** Is whole number between 1000001 and 99999999 inclusive
     * See business rules section 1.4 - USRN
     */
    usrn: number;
    /** Max length 100 characters
     * Use Street Lookup API endpoint /nsg/streets to lookup this information
     * If not provided, populated with NSG data related to supplied USRN
     */
    street_name?: string;
    /** Max length 100 characters
     * Use Street Lookup API endpoint /nsg/streets to lookup this information
     * If not provided, populated with NSG data related to supplied USRN
     */
    area_name?: string;
    /**
     * Is whole number between 0 and 4 inclusive
     * If not provided, populated with NSG data related to supplied USRN
     */
    road_category?: number;
    /** Must be a GeoJSON geometry (using British National Grid easting and northing coordinate pairs) and must be a point, line string or polygon */
    activity_coordinates: any;
    /** Max length 100 characters */
    activity_name: string;
    activity_activity_type: ActivityActivityType;
    /** Required if activity_activity_type = other
     * Max length 100 characters
     */
    activity_type_details?: string;
    /** Max length 100 characters */
    contact_name?: string;
    /** Max length 100 characters */
    contact_details?: string;
    /** Must be in the future */
    start_date: Date;
    /** Must be in the future */
    start_time?: Date;
    /** Must be after start_date */
    end_date: Date;
    /** Must be after start_date */
    end_time?: Date;
    /** Array values must be unique */
    location_types: LocationType[];
    /** Max length 500 characters */
    activity_location_description: string;
    traffic_management_type: TrafficManagementType;
    collaborative_working: boolean;
    /** Max length 500 characters */
    additional_info?: string;
}
