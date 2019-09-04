import { ForwardPlanSummaryResponse } from './forwardPlanSummaryResponse';
import { TrafficManagementType } from './referenceTypes';
import { PermitASD } from './permitASD';
export interface ForwardPlanResponse extends ForwardPlanSummaryResponse {
    promoter_organisation: string;
    promoter_swa_code: string;
    promoter_contact_details: string;
    highway_authority: string;
    highway_authority_swa_code: string;
    workstream_id: number;
    works_coordinates: any;
    street_name?: string;
    area_name?: string;
    usrn: number;
    road_category?: number;
    start_date: Date;
    end_date: Date;
    date_created: Date;
    works_location_description: string;
    description_of_work: string;
    project_reference_number?: string;
    traffic_management_type?: TrafficManagementType;
    additional_info?: string;
    forward_plan_asds?: PermitASD[];
}
