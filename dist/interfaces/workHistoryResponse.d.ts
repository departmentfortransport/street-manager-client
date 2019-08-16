export interface WorkHistoryResponse {
    action_date: Date;
    topic: string;
    details: string;
    username: string;
    isComment?: boolean;
    object_reference?: string;
}
