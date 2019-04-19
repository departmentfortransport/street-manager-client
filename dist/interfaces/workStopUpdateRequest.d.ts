import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface WorkStopUpdateRequest extends DelegatedUserIdentification {
    actual_stop_date: Date;
}
