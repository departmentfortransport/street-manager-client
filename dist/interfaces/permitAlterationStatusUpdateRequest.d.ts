import { AlterationStatus } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface PermitAlterationStatusUpdateRequest extends DelegatedUserIdentification {
    alteration_status: AlterationStatus;
    assessment_comments?: string;
    assessment_discount?: number;
    reasonable_period_end_date?: Date;
}
