import { InspectionType, InspectionCategory } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface ScheduledInspectionCreateRequest extends DelegatedUserIdentification {
    scheduled_inspection_type: InspectionType;
    /** See business rules section 10.2 - Inspection types and categories */
    scheduled_inspection_category?: InspectionCategory;
    /** Date must occur today or a date in the future */
    scheduled_inspection_date: Date;
    /** The date for scheduled_inspection_date_time must match the date for scheduled_inspection_date
     * Time must occur today or a date in the future
     */
    scheduled_inspection_date_time?: Date;
}
