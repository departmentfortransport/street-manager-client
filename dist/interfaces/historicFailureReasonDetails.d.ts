import { FailureReason } from './referenceTypes';
export interface HistoricFailureReasonDetails {
    failure_reason: FailureReason;
    /** Max length 100 characters */
    site_name?: string;
    /** Max length 500 characters */
    details: string;
}
