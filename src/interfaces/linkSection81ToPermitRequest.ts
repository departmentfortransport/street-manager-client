import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface LinkSection81ToPermitRequest extends DelegatedUserIdentification {
  /** Max length 28 characters */
  section_81_reference_number: string
}
