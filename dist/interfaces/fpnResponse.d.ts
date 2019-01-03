import { FPNSummaryResponse } from './fpnSummaryResponse';
import { FileResponse } from './fileResponse';
export interface FPNResponse extends FPNSummaryResponse {
    location: string;
    offence_date: Date;
    offence_details: string;
    authorised_officer: string;
    officer_contact_details: string;
    work_reference_number: string;
    promoter_organisation: string;
    ha_organisation: string;
    files?: FileResponse[];
}
