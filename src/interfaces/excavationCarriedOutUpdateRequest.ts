import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface ExcavationCarriedOutUpdateRequest extends DelegatedUserIdentification {
  excavation_carried_out: boolean
}
