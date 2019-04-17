import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface WorkStartUpdateRequest extends DelegatedUserIdentification {
  actual_start_date: Date
}
