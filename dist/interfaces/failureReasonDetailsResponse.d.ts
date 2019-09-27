import { FailureReason } from './referenceTypes';
import { SiteDetails } from './siteDetails';
export interface FailureReasonDetailsResponse {
    failure_reason: FailureReason;
    sites?: SiteDetails[];
    details: string;
}
