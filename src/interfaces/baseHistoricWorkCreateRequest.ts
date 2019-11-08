import { BaseWorkCreateRequest } from './baseWorkCreateRequest'

export interface BaseHistoricWorkCreateRequest extends BaseWorkCreateRequest {
  /** Max length 24 characters
   * Must be unique in the system
   * Must contain only alphanumeric characters, dashes and underscores
   * If not supplied it will be auto-generated
   */
  work_reference_number?: string
  /** TODO */
  historical_permit_reference: string
  /** Max length 500 characters */
  works_location_description: string
  /** Max length 500 characters */
  description_of_works: string
  /** TODO */
  work_start_date?: Date
  /** TODO */
  work_end_date?: Date
}
