import { BaseWorkCreateRequest } from './baseWorkCreateRequest'
import { LocationType, InspectionType, InspectionCategory, Section81Type, Section81Severity } from './referenceTypes'

export interface Section81CreateRequest extends BaseWorkCreateRequest {
  /** TODO */
  location_description: string
  /** TODO */
  location_types: LocationType[]
  /** TODO */
  inspection_date: Date
  /** TODO */
  section_81_type: Section81Type
  /** TODO */
  section_81_severity: Section81Severity
  /** TODO */
  made_safe_by_ha: boolean
  /** TODO */
  inspector_name?: string
  /** TODO */
  inspector_contact_number?: string
  /** TODO */
  additional_details?: string
  /** TODO */
  section_81_evidence: boolean
  /** TODO */
  file_ids?: number[]
  /** Date must occur today or a date in the future */
  reinspection_date?: Date
  /** The date for reinspection_date_time must match the date for reinspection_date
   * Time must occur today or a date in the future
   */
  reinspection_date_time?: Date
  /** Defaulted to inspection_type value if this and/or reinspection_category are not provided and reinspection_date is provided */
  reinspection_type?: InspectionType
  /**
   * See business rule ref. 3.2 - Inspection category
   * Defaulted to inspection_category value if this and/or reinspection_type are not provided and reinspection_date is provided
   */
  reinspection_category?: InspectionCategory
}
