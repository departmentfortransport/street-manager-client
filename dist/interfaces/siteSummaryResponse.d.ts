import { ReinstatementStatus } from './referenceTypes';
export interface SiteSummaryResponse {
    site_id: number;
    site_description: string;
    depth: number;
    completed_date: Date;
    guarantee_end_date: Date;
    site_status: ReinstatementStatus;
}
