import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface InspectionUnitsUpdateRequest extends DelegatedUserIdentification {
  inspection_units: number
}
