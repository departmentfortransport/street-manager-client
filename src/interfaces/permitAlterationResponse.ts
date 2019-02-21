import { PermitAlterationSummaryResponse } from './permitAlterationSummaryResponse'
import { PermitResponse } from './permitResponse'
import { PermitStatus } from './referenceTypes'

export interface PermitAlterationResponse extends PermitAlterationSummaryResponse {
  permit_status?: PermitStatus,
  assessment_discount?: number,
  assessment_comments?: string,
  permit_alteration_reason: string,
  original: PermitResponse,
  proposed: PermitResponse
}
