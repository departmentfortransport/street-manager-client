import { PermitRequest } from './permitRequest';
import { HS2HighwayExemption } from './referenceTypes';
export interface PermitCreateRequest extends PermitRequest {
    /** Must consist of 3 positive whole numbers */
    workstream_prefix?: string;
    /** Required if promoter_swa_code = '7374' */
    hs2_in_act_limits?: boolean;
    /** Date must occur today or a date in the future */
    hs2_consultation_requested_response_date?: Date;
    /** Required if work_type = 'hs2_highway_works' and hs2_in_act_limits = true */
    hs2_highway_exemption?: HS2HighwayExemption;
    /** Array Max length 2 items
     * Array values must be valid email addresses
     * Array values max length 100 characters
     */
    hs2_highway_emails?: string[];
}
