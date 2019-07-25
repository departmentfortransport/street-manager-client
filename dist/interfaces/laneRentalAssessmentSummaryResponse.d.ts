import { LaneRentalAssessment } from './referenceTypes';
export interface LaneRentalAssessmentSummaryResponse {
    lane_rental_assessment: LaneRentalAssessment;
    additional_details?: string;
}
