import { WorkCategory } from './referenceTypes'
import { DurationCalculationResponse } from './durationCalculationResponse'

export interface WorkCategoryResponse {
  work_category: WorkCategory
  work_category_string: string
  duration: DurationCalculationResponse
  validity_period_end_date: Date
  is_early_start: boolean
}
