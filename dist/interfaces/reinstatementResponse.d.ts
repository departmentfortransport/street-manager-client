import { ReinstatementStatus, LocationType } from './referenceTypes';
import { FileResponse } from './fileResponse';
export interface ReinstatementResponse {
    reinstatement_id: number;
    permit_id: number;
    reinstatement_status: ReinstatementStatus;
    reinstatement_date: Date;
    depth: number;
    length: number;
    width: number;
    reinstatement_coordinates: any;
    location_description: string;
    end_date: Date;
    date_created: Date;
    date_modified: Date;
    location_types: LocationType[];
    reinstatement_evidence: boolean;
    files?: FileResponse[];
}
