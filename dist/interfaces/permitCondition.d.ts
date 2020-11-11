import { PermitConditionType, PermitConditionTypeResponse } from './referenceTypes';
export interface PermitCondition {
    condition: PermitConditionType;
    /** Max length 500 characters */
    comment?: string;
}
export interface PermitConditionResponse {
    condition: PermitConditionTypeResponse;
    condition_string: string;
    /** Max length 500 characters */
    comment?: string;
}
