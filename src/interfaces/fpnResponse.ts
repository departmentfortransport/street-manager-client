import { OffenceCode, FPNStatus } from './referenceTypes'

export interface FPNResponse {
  fpn_id: number,
  work_id: number,
  work_reference_number: string,
  permit_id: number,
  permit_location_description: string,
  permit_street_name: string,
  permit_area_name: string,
  fpn_reference_number: string,
  fpn_evidence: boolean,
  file_ids?: number[]
  offence_date: Date,
  offence_code: OffenceCode,
  offence_details: string,
  authorising_officer: string,
  contact_details: string,
  issue_date_time: Date,
  issuing_ha_swa_code: string,
  works_promoter_swa_code: string,
  fpn_status: FPNStatus
}
