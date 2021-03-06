import { AssessmentStatus, ReasonForRefusal } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface PermitAssessmentUpdateRequest extends DelegatedUserIdentification {
  /** Can only be set to granted, refused, permit_modification_requested or revoked
   * See business rules section 5 - Revoking a PA
   */
  assessment_status: AssessmentStatus
  /** Required if assessment_status = refused or is_duration_challenged = true
   * Max length 500 characters
   */
  additional_comments?: string
  /** Array values must be unique
   * Must contain between 1 and 5 values
   * Required if assessment_status = refused
   */
  reasons_for_refusal?: ReasonForRefusal[]
  /** Required if assessment_status = granted and permit's work_category != hs2_highway
   * Is whole number between 0 and 100 inclusive
   */
  assessment_discount?: number
  /** Required if assessment_status = revoked
   * Max length 500 characters
   */
  revoke_reason?: string
  /** Required if assessment_status = permit_modification_request
   * Max length 500 characters
   */
  pending_change_details?: string
  /** Required if is_duration_challenged = true
   * Must be at least 2 working days from start date
   */
  reasonable_period_end_date?: Date
  is_duration_challenged?: boolean
}
