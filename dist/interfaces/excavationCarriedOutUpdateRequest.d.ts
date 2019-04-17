import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface ExcavationCarriedOutUpdateRequest extends DelegatedUserIdentification {
    /** Permit must be in progress or closed
     * There are no reinstatements submitted for the permit
     */
    excavation_carried_out: boolean;
}
