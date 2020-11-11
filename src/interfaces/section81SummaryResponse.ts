import { Section81SeverityResponse, Section81StatusResponse } from './referenceTypes'

export interface Section81SummaryResponse {
  section_81_reference_number: string
  date_created: Date
  location_description: string
  section_81_severity: Section81SeverityResponse
  section_81_severity_string: string
  section_81_status: Section81StatusResponse
  section_81_status_string: string
}
