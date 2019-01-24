import { PermitASD } from './permitASD'
import { PermitRequest } from './permitRequest'

export interface PermitCreateRequest extends PermitRequest {
  permit_asds?: PermitASD[]
}
