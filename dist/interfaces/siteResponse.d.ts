import { ReinstatementResponse } from './reinstatementResponse';
import { SiteSummaryResponse } from './siteSummaryResponse';
export interface SiteResponse extends SiteSummaryResponse {
    site_area: string;
    site_coordinates: any;
    length: number;
    width: number;
    reinstatements?: ReinstatementResponse[];
}
