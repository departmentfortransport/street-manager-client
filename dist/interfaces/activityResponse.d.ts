import { ActivityActivityType, LocationType, TrafficManagementType } from './referenceTypes';
export interface ActivityResponse {
    activity_reference_number: string;
    usrn: number;
    street_name?: string;
    area_name?: string;
    road_category?: number;
    activity_coordinates: any;
    activity_name: string;
    activity_activity_type: ActivityActivityType;
    activity_type_details?: string;
    contact_name?: string;
    contact_details?: string;
    start_date: Date;
    start_time?: Date;
    end_date: Date;
    end_time?: Date;
    location_types: LocationType[];
    activity_location_description: string;
    traffic_management_type: TrafficManagementType;
    collaborative_working: boolean;
    additional_info?: string;
    cancelled: boolean;
    cancelled_reason?: string;
    highway_authority_swa_code: string;
}
