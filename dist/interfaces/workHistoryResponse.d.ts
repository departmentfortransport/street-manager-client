import { PaginationResponse } from './paginationResponse';
import { AuditEvent } from './referenceTypes';
export interface WorkHistoryResponse extends PaginationResponse {
    rows: WorkHistorySummaryResponse[];
}
export interface WorkHistorySummaryResponse {
    action_date: Date;
    topic: string;
    details: string;
    username: string;
    event: AuditEvent;
    event_string: string;
    object_reference?: string;
    update_id: number;
    internal_user_identifier?: string;
    internal_user_name?: string;
}
