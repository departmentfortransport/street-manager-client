import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface WorkStartRevertRequest extends DelegatedUserIdentification {
    /** revert_reason max length 100 characters
     * Permit must be in progress
     * Work must be planned
     * Work must not have any reinstatements
     */
    revert_reason: string;
}
