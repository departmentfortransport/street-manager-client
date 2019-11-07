import { BaseWorkCreateResponse } from './baseWorkCreateResponse';
export interface WorkCreateResponse extends BaseWorkCreateResponse {
    permit_reference_number: string;
}
