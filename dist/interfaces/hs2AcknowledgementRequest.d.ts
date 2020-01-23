import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface HS2AcknowledgementRequest extends DelegatedUserIdentification {
    /** Must be true */
    hs2_acknowledged: boolean;
}
