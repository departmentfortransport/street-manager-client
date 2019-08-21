import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface WorkStopRevertRequest extends DelegatedUserIdentification {
  /** revert_reason max length 500 characters
   * Permit must be closed
   * Work must be completed
   */
  revert_reason: string
}
