import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface AddFileToWorkRequest extends DelegatedUserIdentification {
    /** Array values must be unique
     * Must not contain null or undefined values
     * A file_id can only be associated with one section of Street Manager
     * See API specification Resource Guide > Works API > File upload for more information
     */
    file_ids: number[];
}
