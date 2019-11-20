import { ReinstatementCreateRequest } from './reinstatementCreateRequest'
import { ReinstatementType } from './referenceTypes'

export interface SiteCreateRequest extends ReinstatementCreateRequest {
  reinstatement_type: ReinstatementType
}
