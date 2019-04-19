import { PermitStatus } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface PermitStatusUpdateRequest extends DelegatedUserIdentification {
  permit_status: PermitStatus
  additional_comments?: string
  assessment_discount?: number
  revoke_reason?: string
}
