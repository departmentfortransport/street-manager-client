import { LocationTypeResponse, ReinstatementStatusResponse } from './referenceTypes'
import { FileSummaryResponse } from './fileSummaryResponse'

export interface ReinstatementResponse {
  permit_reference_number?: string
  reinstatement_status: ReinstatementStatusResponse
  reinstatement_status_string: string
  reinstatement_date: Date
  depth?: number
  length?: number
  width?: number
  reinstatement_coordinates: any
  secondary_reinstatement_coordinates?: any
  location_description: string
  end_date: Date
  date_created: Date
  date_modified: Date
  location_types: LocationTypeResponse[]
  location_types_string: string[]
  reinstatement_evidence: boolean
  files?: FileSummaryResponse[]
  number_of_holes?: number
}
