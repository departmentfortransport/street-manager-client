import { AlterationStatus } from './referenceTypes'

export interface PermitAlterationSummaryResponse {
  permit_alteration_reference_number: string
  proposed_start_date: Date
  proposed_end_date: Date
  date_created: Date
  deadline_date: Date
  alteration_status: AlterationStatus
}
