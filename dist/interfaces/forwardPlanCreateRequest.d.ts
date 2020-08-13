import { TrafficManagementType, HS2HighwayExemption, ForwardPlanWorkType } from './referenceTypes';
import { PermitASD } from './permitASD';
import { BaseWorkCreateRequest } from './baseWorkCreateRequest';
export interface ForwardPlanCreateRequest extends BaseWorkCreateRequest {
    /** Max length 24 characters
     * Must be unique in the system
     * Must contain only alphanumeric characters, dashes and underscores
     * If not supplied it will be auto-generated
     */
    work_reference_number?: string;
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
    /** Required if promoter_swa_code = '7374' */
    hs2_work_type?: ForwardPlanWorkType;
    /** Required if promoter_swa_code = '7374' */
    hs2_in_act_limits?: boolean;
    /** Date must occur today or a date in the future */
    hs2_consultation_requested_response_date?: Date;
    /** Required if hs2_work_type = 'hs2_highway_works' and hs2_in_act_limits = true */
    hs2_highway_exemption?: HS2HighwayExemption;
}
