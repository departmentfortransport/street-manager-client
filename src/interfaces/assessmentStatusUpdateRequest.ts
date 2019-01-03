import { AssessmentStatus } from './referenceTypes'

export interface AssessmentStatusUpdateRequest {
  assessment_status: AssessmentStatus,
  assessment_comments?: string,
  assessment_discount?: number
}
