import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface SampleInspectionTargetCreateRequest extends DelegatedUserIdentification {
    /** Is whole number */
    agreed_category_a: number;
    /** Is whole number */
    agreed_category_b: number;
    /** Is whole number */
    agreed_category_c: number;
    /** Is whole number between 0 and 100
     * If not provided, the value will be 0
     */
    cap_category_a?: number;
    /** Is whole number between 0 and 100
     * If not provided, the value will be 0
     */
    cap_category_b?: number;
    /** Is whole number between 0 and 100
     * If not provided, the value will be 0
     */
    cap_category_c?: number;
    /** Max length 4 characters */
    promoter_org_ref: string;
}
