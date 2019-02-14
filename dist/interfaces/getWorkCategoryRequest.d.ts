import { WorkType } from './referenceTypes';
export interface GetWorkCategoryRequest {
    work_type: WorkType;
    start_date?: Date;
    end_date?: Date;
    is_ttro_required?: boolean;
    immediate_risk?: boolean;
    work_reference_number?: string;
}
