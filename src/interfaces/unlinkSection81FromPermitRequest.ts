import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface UnlinkSection81FromPermitRequest extends DelegatedUserIdentification {
  /** Max length 28 characters */
  section_81_reference_number: string
  /** Max length 500 characters */
  unlink_reason: string
}
