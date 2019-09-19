import { InspectionType, InspectionCategory, InspectionOutcome, DefectFixedOnsite } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'
import { FailureReasonDetails } from './failureReasonDetails'

export interface InspectionCreateRequest extends DelegatedUserIdentification {
    inspection_type: InspectionType,
    /** inspection_start_date must be in the past */
    inspection_start_date: Date,
    /** See business rule ref. 3.2 - Inspection category */
    inspection_category: InspectionCategory,
    /** See business rule ref. 3.3 - Inspection outcome */
    inspection_outcome: InspectionOutcome,
    /** See business rule ref. 3.4 - Inspection failure reasons */
    failure_reasons_details?: FailureReasonDetails[],
    /** Required if inspection_outcome = unable_to_complete_inspection
     * Max length 500 characters
     */
    unable_to_complete_details?: string,
    /** Required if inspection_outcome = failed_low or failed_high and inspection_type = slg */
    was_call_logged?: boolean,
    /** Required if was_call_logged = true
     * Max length 100 characters
     */
    call_logged_to?: string,
    /** Required if was_call_logged = true
     * Max length 500 characters
     */
    call_logged_summary?: string,
    /** Required if inspection_outcome = failed_low or failed_high and inspection_type = slg */
    defect_fixed_on_site?: DefectFixedOnsite,
    /** Max length 500 characters */
    additional_failure_comments?: string,
    inspection_evidence?: boolean,
    /** Required if inspection_evidence = true
     * Array values must be unique
     * Must not contain null or undefined values
     * A file_id can only be associated with one section of Street Manager
     * See API specification Resource Guide > Works API > File upload for more information
     */
    file_ids?: number[],
    /** Date must occur today or a date in the future */
    reinspection_date?: Date,
    /** The date for reinspection_date_time must match the date for reinspection_date
     * Time must occur today or a date in the future
     */
    reinspection_date_time?: Date,
    /** Defaulted to inspection_type value if this and/or reinspection_category are not provided and reinspection_date is provided */
    reinspection_type?: InspectionType,
    /**
     * See business rule ref. 3.2 - Inspection category
     * Defaulted to inspection_category value if this and/or reinspection_type are not provided and reinspection_date is provided
     */
    reinspection_category?: InspectionCategory,
    /** Max length 50 characters
     * Should be populated with the user creating the inspection
     */
    username: string
    /** Max length 100 characters */
    inspector_name?: string
}
