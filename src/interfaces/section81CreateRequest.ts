import { BaseWorkCreateRequest } from './baseWorkCreateRequest'
import { LocationType, InspectionType, InspectionCategory, Section81Type, Section81Severity } from './referenceTypes'

export interface Section81CreateRequest extends BaseWorkCreateRequest {
  /** Max length 500 characters */
  location_description: string
  /** Array values must be unique */
  location_types: LocationType[]
  /** Date must be today or a date in the past */
  inspection_date: Date
  section_81_type: Section81Type
  section_81_severity: Section81Severity
  made_safe_by_ha: boolean
  /** Max length 100 characters */
  inspector_name?: string
  /** Max length 100 characters */
  inspector_contact_number?: string
  /** Max length 500 characters */
  additional_details?: string
  /** Date must occur today or a date in the future */
  reinspection_date?: Date
  /**
   * The date for reinspection_date_time must match the date for reinspection_date
   * Time must occur today or a date in the future
   */
  reinspection_date_time?: Date
  /** Mandatory if reinspection_date is provided */
  reinspection_type?: InspectionType
  /**
   * See business rule ref. 3.2 - Inspection category
   * Mandatory if reinspection_date is provided
   */
  reinspection_category?: InspectionCategory
}