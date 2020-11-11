import { ReinstatementResponse } from './reinstatementResponse';
import { SiteSummaryResponse } from './siteSummaryResponse';
import { LocationTypeResponse } from './referenceTypes';
export interface SiteResponse extends SiteSummaryResponse {
    location_types: LocationTypeResponse[];
    location_types_string: string[];
    site_coordinates: any;
    reinstatements: ReinstatementResponse[];
}
