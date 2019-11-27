import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface InspectionUnitsUpdateRequest extends DelegatedUserIdentification {
  /** Is whole number between 1 and 999 inclusive
   * Can only add inspection_units if there is a Site
   */
  inspection_units: number
}
