import { ReinstatementResponse } from './reinstatementResponse'
import { SiteSummaryResponse } from './siteSummaryResponse'
import { LocationType } from './referenceTypes'

export interface SiteResponse extends SiteSummaryResponse {
  location_types: LocationType[]
  site_coordinates: any
  reinstatements: ReinstatementResponse[]
}
