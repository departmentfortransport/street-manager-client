import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface SampleInspectionTargetUpdateRequest extends DelegatedUserIdentification {
    /** Is whole number */
    agreed_category_a: number;
    /** Is whole number */
    agreed_category_b: number;
    /** Is whole number */
    agreed_category_c: number;
    /** Is whole number between 0 and 100 */
    cap_category_a: number;
    /** Is whole number between 0 and 100 */
    cap_category_b: number;
    /** Is whole number between 0 and 100 */
    cap_category_c: number;
}
