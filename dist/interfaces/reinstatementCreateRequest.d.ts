import { ReinstatementStatus, LocationType } from './referenceTypes';
import { DelegatedUserIdentification } from './delegatedUserIdentification';
export interface ReinstatementCreateRequest extends DelegatedUserIdentification {
    reinstatement_status: ReinstatementStatus;
    reinstatement_date: Date;
    depth: number;
    length: number;
    width: number;
    reinstatement_coordinates: any;
    location_description: string;
    location_types: LocationType[];
    reinstatement_evidence: boolean;
    file_ids?: number[];
}
