import { OffenceCode } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface FPNCreateRequest extends DelegatedUserIdentification {
  /** Whether FPN evidence has been supplied */
  fpn_evidence: boolean,
  /** Required if fpn_evidence = true
   * Array values must be unique
   * Must not contain null or undefined values
   */
  file_ids?: number[]
  /** offence_date must be in the past */
  offence_date: Date,
  offence_code: OffenceCode,
  /** Max length 500 characters */
  offence_details: string,
  /** Max length 100 characters */
  authorised_officer: string,
  /** Max length 100 characters */
  officer_contact_details: string
}
