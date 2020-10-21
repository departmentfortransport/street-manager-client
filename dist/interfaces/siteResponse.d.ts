import { ReinstatementResponse } from './reinstatementResponse';
import { SiteSummaryResponse } from './siteSummaryResponse';
import { LocationType } from './referenceTypes';
export interface SiteResponse extends SiteSummaryResponse {
    location_types: LocationType[];
    location_types_string: string[];
    site_coordinates: any;
    reinstatements: ReinstatementResponse[];
}
