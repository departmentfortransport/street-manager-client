import { TrafficManagementType, ActivityActivityType, LocationType } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface ActivityUpdateRequest extends DelegatedUserIdentification {
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
