import { CommentTopic } from './referenceTypes';
export interface CommentCreateRequest {
    detail: string;
    topic: CommentTopic;
}
