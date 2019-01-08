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
  granted_proposed = 'granted_proposed',
  granted_with_changes = 'granted_with_changes',
  refused = 'refused',
  granted_in_progress = 'granted_in_progress',
  closed = 'closed',
  cancelled = 'cancelled',
  revoked_proposed = 'revoked_proposed',
  revoked_in_progress = 'revoked_in_progress',
  deemed_proposed = 'deemed_proposed',
  deemed_in_progress = 'deemed_in_progress'
}

export enum AssessmentStatus {
  granted_proposed = 'granted_proposed',
  granted_with_changes = 'granted_with_changes',
  refused = 'refused',
  deemed_proposed = 'deemed_proposed'
}

export enum ReinstatementStatus {
  interim = 'interim',
  permanent = 'permanent'
}

export enum InspectionType {
  slg = 'slg',
  reinstatement = 'reinstatement'
}

export enum InspectionCategory {
  a = 'a',
  b = 'b',
  c = 'c',
  third_party = 'third_party',
  routine = 'routine'
}

export enum InspectionOutcome {
  passed = 'passed',
  unable_to_complete = 'unable_to_complete',
  failed_standard = 'failed_standard',
  failed_2_hour = 'failed_2_hour',
  failed_4_hour = 'failed_4_hour'
}

export enum DefectFixedOnsite {
  yes_by_inspector = 'yes_by_inspector',
  yes_by_onsite_members = 'yes_by_onsite_members',
  no = 'no'
}

export enum PermitConditionType {
  NCT01a = 'NCT01a',
  NCT01b = 'NCT01b',
  NCT02a = 'NCT02a',
  NCT02b = 'NCT02b',
  NCT04a = 'NCT04a',
  NCT04b = 'NCT04b',
  NCT05a = 'NCT05a',
  NCT06a = 'NCT06a',
  NCT07a = 'NCT07a',
  NCT08a = 'NCT08a',
  NCT08b = 'NCT08b',
  NCT09a = 'NCT09a',
  NCT09b = 'NCT09b',
  NCT09c = 'NCT09c',
  NCT10a = 'NCT10a',
  NCT11a = 'NCT11a',
  NCT11b = 'NCT11b',
  NCT12a = 'NCT12a'
}

export enum OffenceCode {
  offence_code_05 = 'offence_code_05',
  offence_code_06 = 'offence_code_06',
  offence_code_08 = 'offence_code_08',
  offence_code_09 = 'offence_code_09'
}

export enum FPNStatus {
  issued = 'issued',
  accepted = 'accepted',
  paid = 'paid',
  paid_discounted = 'paid_discounted',
  disputed = 'disputed',
  withdrawn = 'withdrawn'
}

export enum CommentTopic {
  GENERAL = 'GENERAL',
  SECTION_74 = 'SECTION_74',
  INSPECTION = 'INSPECTION',
  FPN = 'FPN'
}
