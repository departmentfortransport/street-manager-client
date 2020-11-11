export interface PaginationResponse {
  pagination: PaginationDetails
}

export interface PaginationDetails {
  total_rows: number
  has_next_page: boolean
}
