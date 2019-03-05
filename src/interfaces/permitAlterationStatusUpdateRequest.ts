import { AlterationStatus } from './referenceTypes'

export interface PermitAlterationStatusUpdateRequest {
  alteration_status: AlterationStatus,
  assessment_comments?: string,
  assessment_discount?: number
}