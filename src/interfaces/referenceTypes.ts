export enum ActivityType {
  water_leak = 'water_leak',
  gas_leak = 'gas_leak',
  new_supply = 'new_supply',
  resurfacing = 'resurfacing'
}

export enum ApplicationType {
  permit = 'permit',
  notice = 'notice'
}

export enum CollaborationType {
  trench_sharing_primary_promoter = 'trench_sharing_primary_promoter',
  trench_sharing_secondary_promoter = 'trench_sharing_secondary_promoter',
  sharing_traffic_management_only = 'sharing_traffic_management_only',
  other = 'other'
}

export enum LocationType {
  footway = 'footway',
  carriageway = 'carriageway',
  verge = 'verge',
  cycleway = 'cycleway',
  footpath = 'footpath'
}

export enum TrafficManagementType {
  road_closure = 'road_closure',
  contra_flow = 'contra_flow',
  lane_closure = 'lane_closure',
  multi_way_signals = 'multi_way_signals',
  two_way_signals = 'two_way_signals',
  convoy_workings = 'convoy_workings',
  stop_go_boards = 'stop_go_boards',
  priority_working = 'priority_working',
  give_and_take = 'give_and_take',
  some_carriageway_incursion = 'some_carriageway_incursion',
  no_carriageway_incursion = 'no_carriageway_incursion'
}

export enum WorkCategory {
  minor = 'minor',
  standard = 'standard',
  major = 'major',
  immediate_urgent = 'immediate_urgent',
  immediate_emergency = 'immediate_emergency'
}

export enum PermitStatus {
  submitted = 'submitted',
  assessed = 'assessed',
  work_in_progress = 'work_in_progress'
}

export enum AssessmentStatus {
  granted = 'granted',
  granted_with_changes = 'granted_with_changes',
  refused = 'refused'
}
