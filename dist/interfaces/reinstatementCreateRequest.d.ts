import { ReinstatementStatus, LocationType } from './referenceTypes';
export interface ReinstatementCreateRequest {
    reinstatement_status: ReinstatementStatus;
    reinstatement_date: Date;
    depth: number;
    length: number;
    width: number;
    reinstatement_coordinates: any;
    location_description: string;
    location_types: LocationType[];
}
