import { ReinstatementStatus, LocationType } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface ReinstatementCreateRequest extends DelegatedUserIdentification {
  /** See business rule ref. 4.4 */
  reinstatement_status: ReinstatementStatus
  /** reinstatement_date must be in the past
   * Must be after actual start date
   * Must be before actual end date (if entered)
   */
  reinstatement_date: Date
  /** Is number between 0.01 and 99.99 inclusive, to two decimal places */
  depth: number
  /** Is number between 0.01 and 9999.99 inclusive, to two decimal places */
  length: number
  /** Is number between 0.01 and 99.99 inclusive, to two decimal places */
  width: number
  /** Must be a GeoJSON geometry (using British National Grid easting and northing coordinate pairs) and must be a point, line string or polygon */
  reinstatement_coordinates: any
  /** Max length 500 characters */
  location_description: string
  /** Array values must be unique
   * Must not contain null or undefined values
   */
  location_types: LocationType[]
  /** Whether reinstatement evidence has been supplied */
  reinstatement_evidence: boolean
  /** Required if reinstatement_evidence = true
   * Array values must be unique
   * Must not contain null or undefined values
   * A file_id can only be associated with one section of Street Manager
   */
  file_ids?: number[]
}
