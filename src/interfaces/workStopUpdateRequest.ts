import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface WorkStopUpdateRequest extends DelegatedUserIdentification {
  /** actual_stop_date must be in the past
   * Must be after actual start date
   * Permit must be in progress
   */
  actual_stop_date: Date
}
