import { OffenceCode, PaymentMethod } from './referenceTypes'
import { BaseHistoricWorkCreateRequest } from './baseHistoricWorkCreateRequest'

export interface HistoricFPNCreateRequest extends BaseHistoricWorkCreateRequest {
  /** Whether FPN evidence has been supplied */
  fpn_evidence: boolean
  /** Required if fpn_evidence = true
   * Array values must be unique
   * Must not contain null or undefined values
   * A file_id can only be associated with one section of Street Manager
   * See API specification Resource Guide > Works API > File upload for more information
   */
  file_ids?: number[]
  /** offence_date must be in the past */
  offence_date: Date
  offence_code: OffenceCode
  /** Max length 500 characters */
  offence_details: string
  /** Max length 100 characters */
  authorised_officer: string
  /** Max length 100 characters */
  officer_contact_details: string
  /** Max length 500 characters */
  officer_address: string
  /** Max length 100 characters */
  representations_contact: string
  /** Max length 500 characters */
  representations_contact_address: string
  payment_methods: PaymentMethod[]
}
