import { DelegatedUserIdentification } from './delegatedUserIdentification'
import { LaneRentalAssessment, LaneRentalChargeBand } from './referenceTypes'

export interface LaneRentalAssessmentCreateRequest extends DelegatedUserIdentification {
  lane_rental_assessment: LaneRentalAssessment,
  /** Max length 500 characters */
  additional_details?: string,
  charge_band?: LaneRentalChargeBand,
  chargeable_days?: number,
  /** Required if lane_rental_assessment = 'chargeable' */
  charges_agreed?: boolean
}
