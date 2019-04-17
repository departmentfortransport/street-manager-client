import { CommentTopic } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface CommentCreateRequest extends DelegatedUserIdentification {
    detail: string;
    topic: CommentTopic;
}
