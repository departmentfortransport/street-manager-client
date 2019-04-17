import { CommentTopic } from './referenceTypes'
import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface CommentCreateRequest extends DelegatedUserIdentification {
  /** Max length 1500 characters */
  detail: string
  /** Only Highway Authorities can comment with the topic OVERRUN */
  topic: CommentTopic
}
