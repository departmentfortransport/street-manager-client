import { BaseWorkCreateResponse } from './baseWorkCreateResponse';
export interface ForwardPlanCreateResponse extends BaseWorkCreateResponse {
    forward_plan_reference_number: string;
}
