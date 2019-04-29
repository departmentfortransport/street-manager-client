import { PermitRequest } from './permitRequest'

export interface PermitAlterationCreateRequest extends PermitRequest {
  /** Max length 500 characters */
  permit_alteration_reason: string
}
