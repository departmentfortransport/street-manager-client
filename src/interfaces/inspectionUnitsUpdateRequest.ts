import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface InspectionUnitsUpdateRequest extends DelegatedUserIdentification {
  /** Is whole number between 1 and 999 inclusive
   * Permit must be in progress or closed
   * Can only add inspection_units if an excavation was carried out
   * Can only add inspection_units if the permit is in progress or closed
   */
  inspection_units: number
}
