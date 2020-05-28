import { CommentTopic } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface CommentCreateRequest extends DelegatedUserIdentification {
    /** Max length 1500 characters */
    detail: string;
    /** Only highway authorities can comment with the topic OVERRUN */
    topic: CommentTopic;
    /** Flag a comment as internal. Internal comments visible to members of authors organisation.
     * Defaults to false if not provided.
     */
    is_internal?: boolean;
}
