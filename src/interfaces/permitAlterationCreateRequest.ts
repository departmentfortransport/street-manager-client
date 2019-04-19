import { PermitRequest } from './permitRequest'

export interface PermitAlterationCreateRequest extends PermitRequest {
  permit_alteration_reason: string
}
