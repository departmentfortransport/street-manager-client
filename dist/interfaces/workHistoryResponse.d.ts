import { AuditEvent } from './referenceTypes';
export interface WorkHistoryResponse {
    action_date: Date;
    topic: string;
    details: string;
    username: string;
    event: AuditEvent;
    object_reference?: string;
    update_id: number;
    internal_user_identifier?: string;
    internal_user_name?: string;
}
