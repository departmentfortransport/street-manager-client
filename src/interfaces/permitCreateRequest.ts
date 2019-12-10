import { PermitASD } from './permitASD'
import { PermitRequest } from './permitRequest'

export interface PermitCreateRequest extends PermitRequest {
  permit_asds?: PermitASD[]
  /** Must consist of 3 positive whole numbers */
  workstream_prefix?: string
}
