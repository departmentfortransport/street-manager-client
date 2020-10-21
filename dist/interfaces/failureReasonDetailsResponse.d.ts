import { FailureReason } from './referenceTypes';
import { SiteDetails } from './siteDetails';
export interface FailureReasonDetailsResponse {
    failure_reason: FailureReason;
    failure_reason_string: string;
    sites?: SiteDetails[];
    details: string;
    site_name?: string;
}
