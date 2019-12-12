import { Section81Status, Section81WorkType } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface Section81StatusUpdateRequest extends DelegatedUserIdentification {
    section_81_status: Section81Status;
    /** Required if Section81Status = rejected, accepted_fixed, resolved or cancelled
     * Max length 500 characters
     */
    status_reason?: string;
    /** Required if Section81Status = accepted */
    work_type?: Section81WorkType;
}
