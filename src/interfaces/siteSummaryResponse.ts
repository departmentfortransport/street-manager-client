import { ReinstatementStatus, ReinstatementType } from './referenceTypes'
import { SiteDetails } from './siteDetails'

export interface SiteSummaryResponse extends SiteDetails {
  permit_id?: number
  depth?: number
  length?: number
  width?: number
  completed_date: Date
  end_date: Date
  site_status: ReinstatementStatus
  reinstatement_type: ReinstatementType
  number_of_holes?: number
}
