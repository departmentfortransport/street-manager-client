import { PermitConditionType } from './referenceTypes'

export interface PermitCondition {
  condition: PermitConditionType,
  comment?: string
}
