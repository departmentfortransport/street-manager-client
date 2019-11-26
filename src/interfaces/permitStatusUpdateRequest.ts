import { PermitStatus } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface PermitStatusUpdateRequest extends DelegatedUserIdentification {
  /** Can only be set to cancelled
   * See business rule ref. 7.1 - Cancelling a permit before assessment
   * See business rule ref. 10.1 - Permit Status
   */
  permit_status: PermitStatus
  /** Required if permit_status = refused
   * Max length 500 characters
   */
  additional_comments?: string
}
