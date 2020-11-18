import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface ReassignSection81Request extends DelegatedUserIdentification {
    /** Max length 4 characters */
    new_organisation_reference: string;
}
