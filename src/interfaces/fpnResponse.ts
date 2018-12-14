import { FPNSummaryResponse } from './fpnSummaryResponse'
import { OffenceCode } from './referenceTypes'

export interface FPNResponse extends FPNSummaryResponse {
  offence_code: OffenceCode,
  location: string,
  offence_date: Date,
  offence_details: string,
  authorised_officer: string,
  officer_contact_details: string,
  fpn_evidence: boolean,
  file_ids?: number[],
  work_reference_number: string,
  promoter_organisation: string,
  highway_authority: string
}
