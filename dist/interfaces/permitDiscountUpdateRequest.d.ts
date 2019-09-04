import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface PermitDiscountUpdateRequest extends DelegatedUserIdentification {
    /** Is whole number between 0 and 100 inclusive */
    assessment_discount: number;
    /** Max length 500 characters */
    assessment_discount_reason?: string;
}
