import { PermitResponse } from './permitResponse';
import { InspectionResponse } from './inspectionResponse';
import { SiteSummaryResponse } from './siteSummaryResponse';
export interface WorkResponse {
    work_id: number;
    reference_number: string;
    permits: PermitResponse[];
    sites?: SiteSummaryResponse[];
    inspections?: InspectionResponse[];
}
