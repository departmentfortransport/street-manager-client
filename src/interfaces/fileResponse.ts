import { FileSummaryResponse } from './fileSummaryResponse'

export interface FileResponse extends FileSummaryResponse {
  created_date: Date,
  user_created_by: string,
  swa_code: string,
  organisation_name: string
}

