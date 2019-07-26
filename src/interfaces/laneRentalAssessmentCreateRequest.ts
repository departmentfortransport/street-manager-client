import { DelegatedUserIdentification } from './delegatedUserIdentification'
import { LaneRentalAssessmentOutcome, LaneRentalAsssessmentChargeBand } from './referenceTypes'

export interface LaneRentalAssessmentCreateRequest extends DelegatedUserIdentification {
  lane_rental_assessment: LaneRentalAssessmentOutcome
  /** Max length 500 characters */
  additional_details?: string
  charge_band?: LaneRentalAsssessmentChargeBand
  chargeable_days?: number
  /** Required if lane_rental_assessment = 'chargeable' */
  charges_agreed?: boolean
}
