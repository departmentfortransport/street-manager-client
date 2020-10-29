import { FailureReasonResponse } from './referenceTypes';
import { SiteDetails } from './siteDetails';
export interface FailureReasonDetailsResponse {
    failure_reason: FailureReasonResponse;
    failure_reason_string: string;
    sites?: SiteDetails[];
    details: string;
    site_name?: string;
}
