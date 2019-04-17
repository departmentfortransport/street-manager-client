import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface AddFileToWorkRequest extends DelegatedUserIdentification {
  file_ids: number[]
}
