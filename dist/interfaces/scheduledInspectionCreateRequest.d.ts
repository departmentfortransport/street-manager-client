import { InspectionType, InspectionCategory } from './referenceTypes';
export interface ScheduledInspectionCreateRequest {
    scheduled_inspection_type: InspectionType;
    /** See business rule ref. 3.2 - Inspection category */
    scheduled_inspection_category: InspectionCategory;
    /** Date must occur today or a date in the future */
    scheduled_inspection_date: Date;
    /** The date for scheduled_inspection_date_time must match the date for scheduled_inspection_date
     * Time must occur today or a date in the future
     */
    scheduled_inspection_date_time?: Date;
}
