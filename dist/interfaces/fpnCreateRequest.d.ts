import { OffenceCode } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface FPNCreateRequest extends DelegatedUserIdentification {
    fpn_evidence: boolean;
    file_ids?: number[];
    offence_date: Date;
    offence_code: OffenceCode;
    offence_details: string;
    authorised_officer: string;
    officer_contact_details: string;
}
