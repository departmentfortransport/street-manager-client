import { ForwardPlanStatusResponse } from './referenceTypes'

export interface ForwardPlanSummaryResponse {
  work_reference_number: string
  forward_plan_reference_number: string
  start_date: Date
  end_date: Date
  forward_plan_status: ForwardPlanStatusResponse
  forward_plan_status_string: string
}
