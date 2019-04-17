import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface AddFileToWorkRequest extends DelegatedUserIdentification {
  /** Array values must be unique
   * Must not contain null or undefined values
   */
  file_ids: number[]
}
