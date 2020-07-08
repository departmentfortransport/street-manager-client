import { FPNSummaryResponse } from './fpnSummaryResponse';
import { FileSummaryResponse } from './fileSummaryResponse';
import { PaymentMethod } from './referenceTypes';
export interface FPNResponse extends FPNSummaryResponse {
    location: string;
    offence_date: Date;
    offence_details: string;
    authorised_officer: string;
    officer_contact_details: string;
    officer_address?: string;
    representations_contact?: string;
    representations_contact_address?: string;
    payment_methods?: PaymentMethod[];
    work_reference_number: string;
    promoter_organisation: string;
    ha_organisation: string;
    files?: FileSummaryResponse[];
    permit_reference_number?: string;
}
