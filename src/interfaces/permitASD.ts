export interface PermitASD {
  /** Max length 100 characters
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  street_special_desig_code: string
  /** Max length 255 characters
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  special_desig_location_text: string
  /** Max length 300 characters
   * Use Street Lookup API endpoint /nsg/streets to lookup this information
   */
  special_desig_description: string
}
