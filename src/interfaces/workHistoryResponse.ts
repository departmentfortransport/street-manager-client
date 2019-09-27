export interface WorkHistoryResponse {
  action_date: Date,
  topic: string,
  details: string,
  username: string,
  object_reference?: string
  update_id: number
}
