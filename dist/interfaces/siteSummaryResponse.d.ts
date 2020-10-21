import { ReinstatementStatus, ReinstatementType } from './referenceTypes';
import { SiteDetails } from './siteDetails';
export interface SiteSummaryResponse extends SiteDetails {
    permit_reference_number?: string;
    depth?: number;
    length?: number;
    width?: number;
    completed_date: Date;
    end_date: Date;
    site_status: ReinstatementStatus;
    site_status_string: string;
    reinstatement_type: ReinstatementType;
    reinstatement_type_string: string;
    number_of_holes?: number;
}
