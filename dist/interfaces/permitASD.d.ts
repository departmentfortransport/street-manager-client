import { ASDPeriodicityCode } from './referenceTypes';
export interface PermitASD {
    /** Max length 100 characters
     * Use Street Lookup API endpoint /nsg/streets to lookup this information
     */
    street_special_desig_code: string;
    /** Max length 255 characters
     * Use Street Lookup API endpoint /nsg/streets to lookup this information
     */
    special_desig_location_text: string;
    /** Max length 300 characters
     * Use Street Lookup API endpoint /nsg/streets to lookup this information
     */
    special_desig_description: string;
    /** Is whole number between 0 and 2400 inclusive
     * Use Street Lookup API endpoint /nsg/streets to lookup this information
     */
    special_desig_start_time?: number;
    /**  Is whole number between 0 and 2400 inclusive
     * Use Street Lookup API endpoint /nsg/streets to lookup this information
     */
    special_desig_end_time?: number;
    special_desig_periodicity_code?: ASDPeriodicityCode;
}
