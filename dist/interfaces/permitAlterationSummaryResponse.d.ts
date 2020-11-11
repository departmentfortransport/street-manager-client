import { AlterationStatusResponse, AlterationTypeResponse } from './referenceTypes';
export interface PermitAlterationSummaryResponse {
    permit_alteration_reference_number: string;
    date_created: Date;
    deadline_date: Date;
    alteration_status: AlterationStatusResponse;
    alteration_status_string: string;
    alteration_type: AlterationTypeResponse;
    alteration_type_string: string;
}
