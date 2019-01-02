import { FPNSummaryResponse } from './fpnSummaryResponse'
import { FileResponse } from './fileResponse'

export interface FPNResponse extends FPNSummaryResponse {
  location: string,
  offence_date: Date,
  offence_details: string,
  authorised_officer: string,
  officer_contact_details: string,
  work_reference_number: string,
  promoter_organisation_name: string,
  ha_organisation_name: string,
  files?: FileResponse[]
}
