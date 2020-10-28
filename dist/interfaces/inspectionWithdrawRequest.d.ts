import { InspectionReasonForWithdrawal } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface InspectionWithdrawRequest extends DelegatedUserIdentification {
    reason_for_withdrawal: InspectionReasonForWithdrawal;
    /** Max length 500 characters */
    withdrawal_details: string;
}
