import { PermitRequest } from './permitRequest';
import { HS2HighwayExemption } from './referenceTypes';
export interface PermitCreateRequest extends PermitRequest {
    /** Must consist of 3 positive whole numbers */
    workstream_prefix?: string;
    /** Required if promoter_swa_code = '7374' */
    hs2_in_act_limits?: boolean;
    /** Required if work_type = 'hs2_highway_works' and hs2_in_act_limits = true */
    hs2_highway_exemption?: HS2HighwayExemption;
    is_covid_19_response?: boolean;
    /** Array max length 10 items
     * Array values must be valid USRNs
     */
    hs2_additional_usrns?: number[];
}
