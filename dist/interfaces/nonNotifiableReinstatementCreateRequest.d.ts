import { ReinstatementStatus, LocationType, ReinstatementType } from './referenceTypes';
import { BaseWorkCreateRequest } from './baseWorkCreateRequest';
export interface ReinstatementCreateRequest extends BaseWorkCreateRequest {
    reinstatement_type: ReinstatementType;
    /** See business rule ref. 4.4 - Making interim site permanent */
    reinstatement_status: ReinstatementStatus;
    /** reinstatement_date must be in the past
     * Must be after actual start date
     * Must be before actual end date (if entered)
     */
    reinstatement_date: Date;
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
     * Is whole number between 1 and 999 inclusive
     * Will default to previously provided value or 1.
     */
    inspection_units?: number;
    /** Must be a number between *** and *** */
    number_of_holes: number;
    /** Must consist of 3 positive whole numbers */
    workstream_prefix?: string;
}
