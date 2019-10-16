import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface ActivityCancelRequest extends DelegatedUserIdentification {
    /** Max length 500 characters */
    cancellation_reason?: string;
}
