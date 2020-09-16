import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface ExcavationCarriedOutUpdateRequest extends DelegatedUserIdentification {
  /** Whether an excavation was actually required or not
   * Can only update excavation_carried_out if excavation was requested in the active permit and work has started
   * Once an excavation reinstatement has been added this field can no longer be updated
   */
  excavation_carried_out: boolean
}
