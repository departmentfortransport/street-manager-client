import { TrafficManagementType, ActivityActivityType } from './referenceTypes'

export interface ActivityCreateRequest {
  usrn: number
  street_name?: string
  area_name?: string
  road_category?: number
  /** Must be a GeoJSON geometry (using British National Grid easting and northing coordinate pairs) and must be a point, line string or polygon */
  activity_coordinates: any
  activity_name: string
  activity_activity_type: ActivityActivityType
  activity_type_details?: string
  contact_name?: string
  contact_details?: string
  start_date: Date
  start_time?: Date
  end_date: Date
  end_time?: Date
  activity_location_description: string
  traffic_management_type: TrafficManagementType
  collaborative_working: boolean
  additional_info?: string
}
