import { ASDCode, ASDPeriodicityCode, ASDPeriodicityCodeResponse, ASDCodeResponse } from './referenceTypes'

export interface BasePermitASD {
  /** Max length 255 characters
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  special_desig_location_text?: string
  /** Max length 300 characters
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  special_desig_description?: string

  /**
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  special_desig_start_date?: Date

  /** Is whole number between 0 and 2400 inclusive
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  special_desig_start_time?: number
  /**
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  special_desig_end_date?: Date
  /**  Is whole number between 0 and 2400 inclusive
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  special_desig_end_time?: number
}

export interface PermitASD extends BasePermitASD {
  /**
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  street_special_desig_code: ASDCode
  /**
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  special_desig_periodicity_code?: ASDPeriodicityCode
}

export interface PermitASDResponse extends BasePermitASD {
  street_special_desig_code: ASDCodeResponse
  street_special_desig_code_string: string
  special_desig_periodicity_code?: ASDPeriodicityCodeResponse
  special_desig_periodicity_code_string?: string
}
