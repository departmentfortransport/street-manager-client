import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface SiteCreateResponse extends DelegatedUserIdentification {
  site_id: number
}
