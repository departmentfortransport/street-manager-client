import { LaneRentalAssessmentOutcome } from './referenceTypes'

export interface LaneRentalAssessmentSummaryResponse {
  outcome: LaneRentalAssessmentOutcome
  additional_details?: string
}
