import { PermitStatus, ReasonForRefusal } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface PermitStatusUpdateRequest extends DelegatedUserIdentification {
  /** Can only be set to granted_proposed, refused, cancelled, revoked_proposed, or revoked_in_progress
   * See business rule ref. 6.1 - Revoking a permit
   * See business rule ref. 7.1 - Cancelling a permit before assessment
   * See business rule ref. 10.1 - Permit Status
   */
  permit_status: PermitStatus
  /** Required if permit_status = refused
   * Max length 500 characters
   */
  additional_comments?: string
  /** Required if permit_status = refused
   * Contains between 1 and 5 reasons
   * Must be one of RC10, RC11, RC12, RC20, RC21, RC22, RC23, RC30, RC31, RC32, RC33, RC40, RC41, RC42, RC43, RC44, RC50
   */
  reasons_for_refusal?: ReasonForRefusal[]
  /** Required if permit_status = granted_proposed or granted_with_changes
   * Is whole number between 0 and 100 inclusive
   */
  assessment_discount?: number
  /** Required if permit_status = revoked_proposed or revoked_in_progress
   * Max length 500 characters
   */
  revoke_reason?: string
}
