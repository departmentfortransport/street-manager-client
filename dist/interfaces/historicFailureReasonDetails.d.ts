import { FailureReason } from './referenceTypes';
export interface HistoricFailureReasonDetails {
    failure_reason: FailureReason;
    /** TODO */
    site_name?: string;
    /** TODO */
    details: string;
}
