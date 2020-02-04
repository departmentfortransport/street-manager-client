import { InspectionType, InspectionCategory, InspectionOutcome, DefectFixedOnsite } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'
import { FailureReasonDetails } from './failureReasonDetails'

export interface InspectionCreateRequest extends DelegatedUserIdentification {
    inspection_type: InspectionType
    /** inspection_start_date must be in the past */
    inspection_start_date: Date
    /** See business rules section 10.2 - Inspection types and categories */
    inspection_category?: InspectionCategory
    /** See business rules section 10.3 - Inspection outcomes */
    inspection_outcome: InspectionOutcome
    /** See business rules section 10.3 - Inspection outcomes */
    failure_reason_details?: FailureReasonDetails[]
    /** Required if inspection_outcome = unable_to_complete_inspection or non_compliant_with_conditions
     * Max length 500 characters
     */
    inspection_outcome_details?: string
    /** Required if inspection_outcome = failed_high and inspection_type = live_site */
    was_call_logged?: boolean
    /** Required if was_call_logged = true
     * Max length 100 characters
     */
    call_logged_to?: string
    /** Required if was_call_logged = true
     * Max length 100 characters
     */
    call_logged_reference?: string
    /** Required if was_call_logged = true
     * Max length 500 characters
     */
    call_logged_summary?: string
    /** Required if inspection_outcome = failed_high and inspection_type = live_site */
    defect_fixed_on_site?: DefectFixedOnsite
    /** Max length 500 characters */
    additional_comments?: string
    inspection_evidence: boolean
    /** Required if inspection_evidence = true
     * Array values must be unique
     * Must not contain null or undefined values
     * A file_id can only be associated with one section of Street Manager
     * See API specification Resource Guide > Works API > File upload for more information
     */
    file_ids?: number[]
    /** Date must occur today or a date in the future */
    reinspection_date?: Date
    /** The date for reinspection_date_time must match the date for reinspection_date
     * Time must occur today or a date in the future
     */
    reinspection_date_time?: Date
    /** Defaulted to inspection_type value if this and/or reinspection_category are not provided and reinspection_date is provided */
    reinspection_type?: InspectionType
    /**
     * See business rules section 10.2 - Inspection types and categories
     * Defaulted to inspection_category value if this and/or reinspection_type are not provided and reinspection_date is provided
     */
    reinspection_category?: InspectionCategory
    /** Max length 50 characters
     * Should be populated with the user creating the inspection
     */
    username: string
    /** Max length 100 characters */
    inspector_name?: string
    /** Required if inspection_type = section 81 and inspection_outcome = Failed - high or Failed - low */
    made_safe_by_ha?: boolean
}
