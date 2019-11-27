import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface FinalReinstatementUpdateRequest extends DelegatedUserIdentification {
  /** Whether it is a final reinstatement
   * Can only add final_reinstatement if there is an Excavation Site
   */
  final_reinstatement: boolean
}
