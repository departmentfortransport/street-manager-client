import { AlterationStatus, AlterationType } from './referenceTypes'

export interface PermitAlterationSummaryResponse {
  permit_alteration_reference_number: string
  date_created: Date
  deadline_date: Date
  alteration_status: AlterationStatus
  alteration_status_string: string
  alteration_type: AlterationType
  alteration_type_string: string
}
