import { BaseWorkCreateRequest } from './baseWorkCreateRequest'

export interface BaseHistoricWorkCreateRequest extends BaseWorkCreateRequest {
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
