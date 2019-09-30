import { ReinstatementStatus } from './referenceTypes';
import { SiteDetails } from './siteDetails';
export interface SiteSummaryResponse extends SiteDetails {
    permit_id: number;
    depth: number;
    length: number;
    width: number;
    completed_date: Date;
    end_date: Date;
    site_status: ReinstatementStatus;
}
