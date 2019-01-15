import { ReinstatementStatus } from './referenceTypes'

export interface SiteSummaryResponse {
  site_id: number,
  site_description: string,
  permit_id: number,
  depth: number,
  length: number,
  width: number,
  completed_date: Date,
  end_date: Date,
  site_status: ReinstatementStatus
}
