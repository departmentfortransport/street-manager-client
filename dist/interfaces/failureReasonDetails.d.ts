import { FailureReason } from './referenceTypes';
export interface FailureReasonDetails {
    failure_reason: FailureReason;
    /** Required if work has a reinstatement
     */
    site_ids?: number[];
    /** Max length 500 characters
     */
    details: string;
}
