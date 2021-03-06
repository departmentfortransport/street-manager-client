import { ReinstatementStatus, LocationType } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface ReinstatementCreateRequest extends DelegatedUserIdentification {
    /** See business rules section 8.4 - Making interim sites permanent */
    reinstatement_status: ReinstatementStatus;
    /** reinstatement_date must be in the past
     * Must be after actual start date
     * Must be before actual end date (if entered)
     */
    reinstatement_date: Date;
    /** Is number between 0 and 99.99 inclusive, to two decimal places.
     * Required if reinstatement type is excavation.
     */
    depth?: number;
    /** Is number between 0 and 9999.99 inclusive, to two decimal places
     * Required if reinstatement type is excavation.
     */
    length?: number;
    /** Is number between 0 and 99.99 inclusive, to two decimal places
     * Required if reinstatement type is excavation.
     */
    width?: number;
    /** Must be a GeoJSON geometry (using British National Grid easting and northing coordinate pairs) and must be a point, line string or polygon */
    reinstatement_coordinates: any;
    /** Must be a GeoJSON geometry (using British National Grid easting and northing coordinate pairs) and must be a point, line string or polygon, if provided */
    secondary_reinstatement_coordinates?: any;
    /** Max length 500 characters */
    location_description: string;
    /** Array values must be unique
     * Must not contain null or undefined values
     */
    location_types: LocationType[];
    /** Whether reinstatement evidence has been supplied */
    reinstatement_evidence: boolean;
    /** Required if reinstatement_evidence = true
     * Array values must be unique
     * Must not contain null or undefined values
     * A file_id can only be associated with one section of Street Manager
     * See API specification Resource Guide > Works API > File upload for more information
     */
    file_ids?: number[];
    /**
     * Is whole number between 0 and 999 inclusive
     * Will default to previously provided value or 1.
     */
    inspection_units?: number;
    /** Whether it is a final reinstatement
     * Required if reinstatement type is excavation
     */
    final_reinstatement?: boolean;
    /** Must be a number between 0 and 100
     * Required if reinstatement type is not excavation
     */
    number_of_holes?: number;
}
