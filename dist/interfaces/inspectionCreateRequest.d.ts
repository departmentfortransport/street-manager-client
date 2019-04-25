import { InspectionType, InspectionCategory, InspectionOutcome, DefectFixedOnsite } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface InspectionCreateRequest extends DelegatedUserIdentification {
    inspection_type: InspectionType;
    /** inspection_start_date must be in the past */
    inspection_start_date: Date;
    /** See business rule ref. 3.2 - Inspection category */
    inspection_category: InspectionCategory;
    /** See business rule ref. 3.3 - Inspection outcome */
    inspection_outcome: InspectionOutcome;
    /** Required if inspection_outcome = failed_low or failed_high
     * Max length 500 characters
     */
    defect_details?: string;
    /** Required if inspection_outcome = unable_to_complete_inspection
     * Max length 500 characters
     */
    unable_to_complete_details?: string;
    /** Required if inspection_outcome = failed_low or failed_high and inspection_type = slg */
    was_call_logged?: boolean;
    /** Required if was_call_logged = true
     * Max length 100 characters
     */
    call_logged_to?: string;
    /** Required if was_call_logged = true
     * Max length 500 characters
     */
    call_logged_summary?: string;
    /** Required if inspection_outcome = failed_low or failed_high and inspection_type = slg */
    defect_fixed_on_site?: DefectFixedOnsite;
    /** Required if inspection_outcome = failed_low, failed_high, withdraw_defect or further_inspections_required
     * Max length 500 characters
     */
    additional_failure_comments?: string;
    /** Required if inspection_outcome = failed_low, failed_high, withdraw_defect or further_inspections_required */
    inspection_evidence?: boolean;
    /** Required if inspection_evidence = true
     * Array values must be unique
     * Must not contain null or undefined values
     * A file_id can only be associated with one section of Street Manager
     * See API specification Resource Guide > Works API > File upload for more information
     */
    file_ids?: number[];
    /** Optional if inspection_outcome = failed_low, failed_high, withdraw_defect or further_inspections_required
     * Date must occur today or a date in the future
     */
    reinspection_date?: Date;
    /** Optional if inspection_outcome = failed_low, failed_high, withdraw_defect or further_inspections_required
     * The date for reinspection_date_time must match the date for reinspection_date
     * Time must occur today or a date in the future
     */
    reinspection_date_time?: Date;
    /** Max length 50 characters
     * Should be populated with the user creating the inspection
     */
    username: string;
}
