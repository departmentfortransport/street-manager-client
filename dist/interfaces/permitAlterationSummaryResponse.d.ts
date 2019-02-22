import { AlterationStatus } from './referenceTypes';
export interface PermitAlterationSummaryResponse {
    permit_alteration_reference_number: string;
    date_created: Date;
    deadline_date: Date;
    alteration_status: AlterationStatus;
}
