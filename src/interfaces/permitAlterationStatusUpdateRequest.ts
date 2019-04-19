import { AlterationStatus } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface PermitAlterationStatusUpdateRequest extends DelegatedUserIdentification {
  /** Can only be set to granted, refused or granted_with_duration_challenge
   */
  alteration_status: AlterationStatus,
  /** Required if alteration_status = refused or granted_with_duration_challenge
   * Max length 500 characters
   */
  assessment_comments?: string,
  /** Required if alteration_status = granted
   * Is whole number between 0 and 100 inclusive
   */
  assessment_discount?: number,
  /** Required if alteration_status = granted_with_duration_challenge
   * Must be on or after the permit proposed_end_date and before the alteration updated proposed_end_date
   */
  reasonable_period_end_date?: Date
}
