import { PermitResponse } from './permitResponse';
import { InspectionResponse } from './inspectionResponse';
import { SiteSummaryResponse } from './siteSummaryResponse';
import { FPNSummaryResponse } from './fpnSummaryResponse';
export interface WorkResponse {
    work_id: number;
    work_reference_number: string;
    permits: PermitResponse[];
    sites?: SiteSummaryResponse[];
    inspections?: InspectionResponse[];
    fpns?: FPNSummaryResponse[];
}
