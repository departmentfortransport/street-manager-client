import { Section81SummaryResponse } from './section81SummaryResponse';
import { LocationType, Section81Type } from './referenceTypes';
export interface Section81Response extends Section81SummaryResponse {
    work_reference_number: string;
    usrn: number;
    street_name: string;
    area?: string;
    road_category: number;
    works_coordinates: any;
    highway_authority: string;
    highway_authority_swa_code: string;
    promoter_organisation: string;
    promoter_swa_code: string;
    workstream_id: number;
    location_types: LocationType[];
    inspection_date: Date;
    section_81_type: Section81Type;
    other_type_details?: string;
    made_safe_by_ha: boolean;
    inspector_name?: string;
    inspector_contact_number?: string;
    additional_details: string;
}
