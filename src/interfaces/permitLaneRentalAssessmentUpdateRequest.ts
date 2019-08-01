import { DelegatedUserIdentification } from './delegatedUserIdentification'
import { LaneRentalAssessmentOutcome, LaneRentalAsssessmentChargeBand } from './referenceTypes'

export interface PermitLaneRentalAssessmentUpdateRequest extends DelegatedUserIdentification {
  outcome: LaneRentalAssessmentOutcome
  /** Max length 500 characters */
  additional_details?: string
  charge_band?: LaneRentalAsssessmentChargeBand
  /** Whole number between 1 and 10000 */
  chargeable_days?: number
  /** Required if outcome = 'chargeable' */
  charges_agreed?: boolean
}
