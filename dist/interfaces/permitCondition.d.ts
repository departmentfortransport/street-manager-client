import { PermitConditionType } from './referenceTypes';
export interface PermitCondition {
    condition: PermitConditionType;
    /** Max length 500 characters */
    comment?: string;
}
export interface PermitConditionResponse extends PermitCondition {
    condition_string: string;
}
