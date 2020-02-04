import { PermitStatus } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface PermitStatusUpdateRequest extends DelegatedUserIdentification {
  /** Can only be set to cancelled
   * See business rules section 3.4.9 - Cancelling PAA & PA
   * See business rules section 3.4.10 - PAA & PA statuses
   */
  permit_status: PermitStatus
  /** Required if permit_status = refused
   * Max length 500 characters
   */
  additional_comments?: string
}
