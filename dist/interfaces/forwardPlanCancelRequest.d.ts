import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface ForwardPlanCancelRequest extends DelegatedUserIdentification {
    /** Max length 500 characters */
    cancelled_reason: string;
}
