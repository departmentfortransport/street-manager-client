import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface BaseWorkCreateRequest extends DelegatedUserIdentification {
  /** Max length 4 characters */
  promoter_swa_code: string
  /** Max length 4 characters */
  highway_authority_swa_code: string
  /** Must be a GeoJSON geometry (using British National Grid easting and northing coordinate pairs) and must be a point, line string or polygon */
  works_coordinates: any
  /** Max length 100 characters
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   * If not provided, populated with NSG data related to supplied USRN
   */
  street_name?: string
  /** Max length 100 characters
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   * If not provided, populated with NSG data related to supplied USRN
   */
  town?: string
  /** Max length 100 characters
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   * If not provided, populated with NSG data related to supplied USRN
   */
  area_name?: string
  /** Is whole number between 1000001 and 99999999 inclusive
   * See business rules section 1.4 - USRN
   */
  usrn: number
  /**
   * Is whole number between 0 and 4 inclusive
   * If not provided, populated with NSG data related to supplied USRN
   */
  road_category?: number
}
