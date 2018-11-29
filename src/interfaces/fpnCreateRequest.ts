import { OffenceCode } from './referenceTypes'

export interface FPNCreateRequest {
    fpn_evidence: boolean,
    file_ids?: number[]
    offence_date: Date,
    offence_code: OffenceCode,
    offence_details: string,
    authorising_officer: string,
    contact_details: string
}
