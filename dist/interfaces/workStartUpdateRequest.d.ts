import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface WorkStartUpdateRequest extends DelegatedUserIdentification {
    /** actual_start_date must be in the past
     * Must be after proposed start date
     * Permit must be granted
     */
    actual_start_date: Date;
}
