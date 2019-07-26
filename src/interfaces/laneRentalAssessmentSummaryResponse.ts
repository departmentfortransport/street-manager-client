import { LaneRentalAssessmentOutcome } from './referenceTypes'

export interface LaneRentalAssessmentSummaryResponse {
  lane_rental_assessment: LaneRentalAssessmentOutcome
  additional_details?: string
}
