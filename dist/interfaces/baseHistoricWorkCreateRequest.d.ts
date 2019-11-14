import { BaseWorkCreateRequest } from './baseWorkCreateRequest';
export interface BaseHistoricWorkCreateRequest extends BaseWorkCreateRequest {
    /** Max length 24 characters
     * Must be unique in the system, this will become the work_reference_number
     * Must contain only alphanumeric characters, dashes and underscores
     */
    historical_permit_reference: string;
    /** Max length 500 characters */
    works_location_description: string;
    /** Max length 500 characters */
    description_of_work: string;
    /** Date must be in the past */
    work_start_date?: Date;
    /** Date must be in the past
     * work_end_date must be after the date and time for work_start_date
     */
    work_end_date?: Date;
}
