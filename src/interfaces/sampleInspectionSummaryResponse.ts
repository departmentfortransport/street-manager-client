import { InspectionCategory } from './referenceTypes'

export interface SampleInspectionSummaryResponse {
  sample_inspection_reference_number: string
  inspection_category: InspectionCategory
  expiry_date: Date
}
