import { TrafficManagementType } from './referenceTypes';
import { PermitASD } from './permitASD';
import { BaseWorkCreateRequest } from './baseWorkCreateRequest';
export interface ForwardPlanCreateRequest extends BaseWorkCreateRequest {
    start_date: Date;
    /** end_date must be on or after start_date */
    end_date: Date;
    /** Max length 500 characters */
    description_of_work: string;
    /** Max length 100 characters */
    project_reference_number?: string;
    traffic_management_type?: TrafficManagementType;
    /** Max length 500 characters */
    additional_info?: string;
    forward_plan_asds?: PermitASD[];
    /** Max length 500 characters */
    works_location_description: string;
    /** Must consist of 3 positive whole numbers */
    workstream_prefix?: string;
}
