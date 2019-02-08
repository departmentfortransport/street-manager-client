import { ActivityType, TrafficManagementType, ApplicationType, CollaborationType, LocationType, WorkType } from './referenceTypes';
import { PermitCondition } from './permitCondition';
export interface PermitRequest {
    promoter_contact_details: string;
    approved_contractor: string;
    contractor_contact_details: string;
    proposed_start_date: Date;
    proposed_start_time?: Date;
    proposed_end_date: Date;
    proposed_end_time?: Date;
    description_of_work: string;
    excavation: boolean;
    project_reference_number?: string;
    traffic_management_plan: boolean;
    lane_rental_applicable: boolean;
    permit_conditions?: PermitCondition[];
    works_location_description: string;
    environmental_health_notifiable: boolean;
    collaborative_working: boolean;
    collaboration_details?: string;
    collaborative_works?: string;
    activity_type: ActivityType;
    traffic_management_type: TrafficManagementType;
    application_type: ApplicationType;
    collaboration_type?: CollaborationType;
    location_types: LocationType[];
    early_start_pre_approval?: boolean;
    pre_approval_details?: string;
    pre_approval_authoriser?: string;
    early_start_reason?: string;
    work_type: WorkType;
    is_ttro_required?: boolean;
    immediate_risk?: boolean;
    file_ids?: number[];
    additional_info?: string;
}
