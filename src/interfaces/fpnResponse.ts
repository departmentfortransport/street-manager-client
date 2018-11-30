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
  offence_type_id: number,
  offence_code: OffenceCode,
  offence_details: string,
  authorised_officer: string,
  officer_contact_details: string,
  issue_date_time: Date,
  ha_swa_code: string,
  promoter_swa_code: string,
  fpn_status_id: number,
  fpn_status: FPNStatus
}
