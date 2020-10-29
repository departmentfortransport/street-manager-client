import { Section81SummaryResponse } from './section81SummaryResponse'
import { LocationType, Section81Type, Section81WorkType, Section81Status } from './referenceTypes'
import { LinkedPermit } from './linkedPermit'
import { FileSummaryResponse } from './fileSummaryResponse'

export interface Section81Response extends Section81SummaryResponse {
  work_reference_number: string
  usrn: number
  street_name: string
  town?: string
  area?: string
  road_category: number
  works_coordinates: any
  highway_authority: string
  highway_authority_swa_code: string
  promoter_organisation: string
  promoter_swa_code: string
  workstream_prefix: string
  location_types: LocationType[]
  location_types_string: string[]
  inspection_date: Date
  section_81_type: Section81Type
  section_81_type_string: string
  other_type_details?: string
  made_safe_by_ha: boolean
  inspector_name?: string
  inspector_contact_number?: string
  additional_details: string
  status_changed_date: Date
  promoter_response?: string
  section_81_work_type?: Section81WorkType
  section_81_work_type_string?: string
  promoter_status?: Section81Status
  promoter_status_string?: string
  promoter_status_changed_date?: Date
  linked_permit?: LinkedPermit
  files?: FileSummaryResponse[]
}
