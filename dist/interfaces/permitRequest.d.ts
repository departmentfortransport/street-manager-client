import { ActivityType, TrafficManagementType, ApplicationType, CollaborationType, LocationType, WorkType, CloseFootway } from './referenceTypes';
import { PermitCondition } from './permitCondition';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface PermitRequest extends DelegatedUserIdentification {
    /** Max length 100 characters */
    secondary_contact: string;
    /** Max length 100 characters */
    secondary_contact_number: string;
    /** Max length 100 characters */
    secondary_contact_email?: string;
    proposed_start_date: Date;
    /** Required if work_type is immediate
     * proposed_start_time is required if proposed_start_date is in the past
     */
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
    /** Array values must be unique
     * See business rule ref. 1.11 - Permit conditions
     */
    permit_conditions?: PermitCondition[];
    /** Max length 500 characters */
    works_location_description: string;
    /** Must be a GeoJSON geometry (using British National Grid easting and northing coordinate pairs) and must be a point, line string or polygon */
    works_coordinates?: any;
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
    /** See business rule ref. 1.9 - Early start */
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
    work_type: WorkType;
    /** Required when work_type is planned */
    is_ttro_required?: boolean;
    /** Required when work_type is immediate */
    immediate_risk?: boolean;
    /** Array values must be unique
     * Must not contain null or undefined values
     * A file_id can only be associated with one section of Street Manager
     * See API specification Resource Guide > Works API > File upload for more information
     */
    file_ids?: number[];
    /** Max length 500 characters */
    additional_info?: string;
    close_footway: CloseFootway;
}
