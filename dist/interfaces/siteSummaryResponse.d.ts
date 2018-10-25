import { ReinstatementStatus } from './referenceTypes';
export interface SiteSummaryResponse {
    site_id: number;
    site_description: string;
    depth: number;
    completed_date: Date;
    guarantee_expiry: Date;
    status: ReinstatementStatus;
}
