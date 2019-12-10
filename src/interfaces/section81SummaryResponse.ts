import { Section81Severity, Section81Status } from './referenceTypes'

export interface Section81SummaryResponse {
  section_81_reference_number: string
  date_created: Date
  location_description: string
  section_81_severity: Section81Severity
  section_81_status: Section81Status
}
