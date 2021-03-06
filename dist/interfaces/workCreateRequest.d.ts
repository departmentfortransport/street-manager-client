import { ActivityType, TrafficManagementType, ApplicationType, CollaborationType, LocationType, WorkType, CloseFootway, HS2HighwayExemption } from './referenceTypes';
import { PermitCondition } from './permitCondition';
import { PermitASD } from './permitASD';
import { BaseWorkCreateRequest } from './baseWorkCreateRequest';
export interface WorkCreateRequest extends BaseWorkCreateRequest {
    /** Max length 24 characters
     * Must be unique in the system
     * Must contain only alphanumeric characters, dashes and underscores
     * If not supplied it will be auto-generated
     */
    work_reference_number?: string;
    /** Max length 100 characters */
    secondary_contact: string;
    /** Max length 100 characters */
    secondary_contact_number: string;
    /** Max length 100 characters */
    secondary_contact_email?: string;
    proposed_start_date: Date;
    /** proposed_start_time is required if proposed_start_date is in the past */
    proposed_start_time?: Date;
    /** proposed_end_date must be on or after proposed_start_date
     * If work_type = planned, the maximum date range between proposed_start_date and proposed_end_date is 5 years
     */
    proposed_end_date: Date;
    /** proposed_end_time is required if proposed_end_date is in the past
     * proposed_end_time must be after the date and time for proposed_start_time
     */
    proposed_end_time?: Date;
    /** Max length 500 characters */
    description_of_work: string;
    /** Whether an excavation will be required */
    excavation: boolean;
    /** Max length 100 characters */
    project_reference_number?: string;
    traffic_management_plan: boolean;
    lane_rental_applicable: boolean;
    /** Array values must be unique */
    permit_conditions?: PermitCondition[];
    environmental_health_notifiable: boolean;
    collaborative_working: boolean;
    /** Required if collaborative_working = true
     * Max length 500 characters
     */
    collaboration_details?: string;
    /** Optional but only saved if collaborative_working = true
     * Max length 500 characters
     * Work Reference Number of collaborative works
     */
    collaborative_works?: string;
    activity_type: ActivityType;
    traffic_management_type: TrafficManagementType;
    application_type: ApplicationType;
    /** Required if collaborative_working = true */
    collaboration_type?: CollaborationType;
    /** Array values must be unique */
    location_types: LocationType[];
    /** Array values must be unique
     * Must not contain null or undefined values
     * A file_id can only be associated with one section of Street Manager
     * See API specification Resource Guide > Works API > File upload for more information
     */
    file_ids?: number[];
    permit_asds?: PermitASD[];
    work_type: WorkType;
    /** Required when work_type is planned */
    is_ttro_required?: boolean;
    /** Required when work_type is immediate */
    immediate_risk?: boolean;
    /** See business rules section 3.4.6 - Early start */
    early_start_pre_approval?: boolean;
    /** Required if early_start_pre_approval = true
     * Max length 500 characters
     */
    pre_approval_details?: string;
    /** Required if early_start_pre_approval = true
     * Max length 100 characters
     */
    pre_approval_authoriser?: string;
    /** Required if early_start_pre_approval = false
     * Max length 500 characters
     */
    early_start_reason?: string;
    /** Max length 500 characters */
    additional_info?: string;
    close_footway: CloseFootway;
    /** Max length 500 characters */
    works_location_description: string;
    /** Must consist of 3 positive whole numbers */
    workstream_prefix?: string;
    /** Required if promoter_swa_code = '7374' */
    hs2_in_act_limits?: boolean;
    /** Date must occur today or a date in the future */
    hs2_consultation_requested_response_date?: Date;
    /** Required if work_type = 'hs2_highway_works' and hs2_in_act_limits = true */
    hs2_highway_exemption?: HS2HighwayExemption;
    /** Array Max length 2 items
     * Array values must be valid email addresses
     * Array values max length 100 characters
     */
    hs2_highway_emails?: string[];
    /** Max length 100 characters */
    additional_contact?: string;
    /** Max length 100 characters */
    additional_contact_number?: string;
    /** Max length 100 characters */
    additional_contact_email?: string;
    is_covid_19_response?: boolean;
    /** Array max length 10 items
     * Array values must be valid USRNs
     */
    hs2_additional_usrns?: number[];
}
