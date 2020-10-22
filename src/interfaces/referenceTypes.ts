export enum ActivityType {
  highway_improvement_works = 'highway_improvement_works',
  highway_repair_and_maintenance_works = 'highway_repair_and_maintenance_works',
  utility_asset_works = 'utility_asset_works',
  utility_repair_and_maintenance_works = 'utility_repair_and_maintenance_works',
  diversionary_works = 'diversionary_works',
  disconnection_or_alteration_of_supply = 'disconnection_or_alteration_of_supply',
  permanent_reinstatement = 'permanent_reinstatement',
  remedial_works = 'remedial_works',
  section_58 = 'section_58',
  section_50 = 'section_50',
  core_sampling = 'core_sampling',
  statutory_infrastructure_works = 'statutory_infrastructure_works',
  works_for_rail_purposes = 'works_for_rail_purposes',
  works_for_road_purposes = 'works_for_road_purposes',
  new_service_connection = 'new_service_connection',
  optional_permit_no_fee = 'optional_permit_no_fee'
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
  footpath = 'footpath',
  parking_place = 'parking_place',
  bus_stop_or_stand = 'bus_stop_or_stand',
  cycle_hire_docking_station = 'cycle_hire_docking_station',
  taxi_rank = 'taxi_rank'
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

export enum WorkType {
  planned = 'planned',
  immediate = 'immediate',
  hs2_highway_works = 'hs2_highway_works'
}

export enum WorkCategory {
  minor = 'minor',
  standard = 'standard',
  major = 'major',
  immediate_urgent = 'immediate_urgent',
  immediate_emergency = 'immediate_emergency',
  paa = 'paa',
  hs2_highway = 'hs2_highway'
}

export enum PermitStatus {
  submitted = 'submitted',
  granted = 'granted',
  permit_modification_request = 'permit_modification_request',
  refused = 'refused',
  closed = 'closed',
  cancelled = 'cancelled',
  revoked = 'revoked',
  progressed = 'progressed'
}

export enum AssessmentStatus {
  granted = 'granted',
  granted_auto = 'granted_auto',
  refused = 'refused',
  refused_auto = 'refused_auto',
  permit_modification_request = 'permit_modification_request',
  revoked = 'revoked'
}

export enum ForwardPlanStatus {
  raised = 'raised',
  cancelled = 'cancelled',
  progressed = 'progressed'
}

export enum ReinstatementStatus {
  interim = 'interim',
  permanent = 'permanent'
}

export enum InspectionType {
  live_site = 'live_site',
  reinstatement = 'reinstatement',
  non_compliance_follow_up = 'non_compliance_follow_up',
  section_81 = 'section_81'
}

export enum InspectionResponseType {
  inspection = 'inspection',
  reinspection = 'reinspection'
}

export enum InspectionCategory {
  a = 'a',
  b = 'b',
  c = 'c',
  third_party = 'third_party',
  routine = 'routine',
  joint_site_visit = 'joint_site_visit',
  follow_up = 'follow_up',
  follow_up_completion = 'follow_up_completion',
  site_occupancy = 'site_occupancy',
  conditions = 'conditions'
}

export enum InspectionOutcome {
  passed = 'passed',
  unable_to_complete_inspection = 'unable_to_complete_inspection',
  failed_low = 'failed_low',
  failed_high = 'failed_high',
  further_inspections_required = 'further_inspections_required',
  agreed_site_compliance = 'agreed_site_compliance',
  non_compliant_with_conditions = 'non_compliant_with_conditions',
  works_stopped_apparatus_remaining = 'works_stopped_apparatus_remaining',
  works_in_progress_no_carriageway_incursion = 'works_in_progress_no_carriageway_incursion',
  works_in_progress = 'works_in_progress',
  works_stopped = 'works_stopped'
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
  FPN = 'FPN',
  OVERRUN = 'OVERRUN',
  FORWARD_PLAN = 'FORWARD_PLAN',
  CHANGE_REQUEST = 'CHANGE_REQUEST',
  IMPOSED_VARIATION = 'IMPOSED_VARIATION',
  DURATION_CHALLENGE = 'DURATION_CHALLENGE',
  SECTION_81 = 'SECTION_81'
}

export enum AlterationStatus {
  submitted = 'submitted',
  granted = 'granted',
  granted_with_duration_challenge = 'granted_with_duration_challenge',
  refused = 'refused',
  deemed = 'deemed',
  cancelled = 'cancelled',
  revoked = 'revoked',
  auto_applied = 'auto_applied'
}

export enum AlterationType {
  PROMOTER_IMPOSED_CHANGE = 'PROMOTER_IMPOSED_CHANGE',
  PROMOTER_CHANGE_REQUEST = 'PROMOTER_CHANGE_REQUEST',
  HA_CHANGE_REQUEST = 'HA_CHANGE_REQUEST',
  HA_IMPOSED_CHANGE = 'HA_IMPOSED_CHANGE',
  WORK_EXTENSION = 'WORK_EXTENSION',
  DURATION_CHALLENGE = 'DURATION_CHALLENGE',
  MODIFIED_PERMIT = 'MODIFIED_PERMIT'
}

export enum ReasonForRefusal {
  RC10 = 'RC10',
  RC11 = 'RC11',
  RC12 = 'RC12',
  RC20 = 'RC20',
  RC21 = 'RC21',
  RC22 = 'RC22',
  RC23 = 'RC23',
  RC30 = 'RC30',
  RC31 = 'RC31',
  RC32 = 'RC32',
  RC33 = 'RC33',
  RC40 = 'RC40',
  RC41 = 'RC41',
  RC42 = 'RC42',
  RC43 = 'RC43',
  RC44 = 'RC44',
  RC50 = 'RC50'
}

export enum CloseFootway {
  yes_provide_pedestrian_walkway = 'yes_provide_pedestrian_walkway',
  yes_provide_alternative_route = 'yes_provide_alternative_route',
  no = 'no'
}

export enum ActivityActivityType {
  skips = 'skips',
  scaffolding = 'scaffolding',
  hoarding = 'hoarding',
  crane_mobile_platform = 'crane_mobile_platform',
  event = 'event',
  section50 = 'section50',
  section58 = 'section58',
  compound = 'compound',
  other = 'other'
}

export enum FailureReason {
  live_site_signage = 'live_site_signage',
  live_site_distance = 'live_site_distance',
  live_site_safety_zone = 'live_site_safety_zone',
  live_site_barriers = 'live_site_barriers',
  live_site_traffic_control = 'live_site_traffic_control',
  live_site_pedestrian_provision = 'live_site_pedestrian_provision',
  live_site_cyclist_provision = 'live_site_cyclist_provision',
  live_site_operative_qualification = 'live_site_operative_qualification',
  live_site_equipment = 'live_site_equipment',
  live_site_materials = 'live_site_materials',
  live_site_compaction = 'live_site_compaction',
  live_site_construction_layers = 'live_site_construction_layers',
  live_site_storage_of_materials = 'live_site_storage_of_materials',
  reinstatement_damage_to_surround_area = 'reinstatement_damage_to_surround_area',
  reinstatement_saw_cutting = 'reinstatement_saw_cutting',
  reinstatement_acute_angles = 'reinstatement_acute_angles',
  reinstatement_verge = 'reinstatement_verge',
  reinstatement_anti_skid = 'reinstatement_anti_skid',
  reinstatement_fixed_features = 'reinstatement_fixed_features',
  reinstatement_modular = 'reinstatement_modular',
  reinstatement_proximity = 'reinstatement_proximity',
  reinstatement_materials_incorrect = 'reinstatement_materials_incorrect',
  reinstatement_materials_damaged = 'reinstatement_materials_damaged',
  reinstatement_edge_sealant = 'reinstatement_edge_sealant',
  reinstatement_over_banding = 'reinstatement_over_banding',
  reinstatement_road_markings = 'reinstatement_road_markings',
  reinstatement_infill_pointing = 'reinstatement_infill_pointing',
  reinstatement_ironwork_apparatus = 'reinstatement_ironwork_apparatus',
  reinstatement_breaking_out_fretting = 'reinstatement_breaking_out_fretting',
  reinstatement_interface_cracking = 'reinstatement_interface_cracking',
  reinstatement_crowning = 'reinstatement_crowning',
  reinstatement_depression = 'reinstatement_depression',
  reinstatement_as_laid_profile = 'reinstatement_as_laid_profile',
  reinstatement_texture_depth = 'reinstatement_texture_depth',
  reinstatement_edge_depression = 'reinstatement_edge_depression'
}

export enum LaneRentalAssessmentOutcome {
  chargeable = 'chargeable',
  potentially_chargeable = 'potentially_chargeable',
  charges_waived = 'charges_waived',
  exempt = 'exempt',
  charges_not_applicable = 'charges_not_applicable'
}

export enum LaneRentalAssessmentChargeBand {
  charge_band_1 = 'charge_band_1',
  charge_band_2 = 'charge_band_2',
  charge_band_3 = 'charge_band_3',
  charge_band_4 = 'charge_band_4',
  charge_band_5 = 'charge_band_5'
}

export enum WorkStatus {
  planned = 'planned',
  in_progress = 'in_progress',
  completed = 'completed',
  cancelled = 'cancelled',
  unattributable = 'unattributable',
  historical = 'historical',
  non_notifiable = 'non_notifiable',
  section_81 = 'section_81'
}

export enum AuditEvent {
  historic_action = 'historic_action',
  inspection_passed = 'inspection_passed',
  inspection_failed = 'inspection_failed',
  inspection_unable_to_carry_out = 'inspection_unable_to_carry_out',
  inspection_further_required = 'inspection_further_required',
  inspection_agreed_site_compliance = 'inspection_agreed_site_compliance',
  inspection_withdraw_defect = 'inspection_withdraw_defect',
  activity_submitted = 'activity_submitted',
  activity_edited = 'activity_edited',
  activity_cancelled = 'activity_cancelled',
  fpn_submitted = 'fpn_submitted',
  fpn_accepted = 'fpn_accepted',
  fpn_paid = 'fpn_paid',
  fpn_disputed = 'fpn_disputed',
  fpn_withdrawn = 'fpn_withdrawn',
  permit_granted = 'permit_granted',
  permit_refused = 'permit_refused',
  permit_cancelled = 'permit_cancelled',
  permit_revoked = 'permit_revoked',
  permit_deemed = 'permit_deemed',
  paa_granted = 'paa_granted',
  paa_refused = 'paa_refused',
  paa_cancelled = 'paa_cancelled',
  paa_revoked = 'paa_revoked',
  alteration_submitted = 'alteration_submitted',
  alteration_refused = 'alteration_refused',
  alteration_granted = 'alteration_granted',
  alteration_granted_with_duration_challenge = 'alteration_granted_with_duration_challenge',
  alteration_deemed = 'alteration_deemed',
  alteration_cancelled = 'alteration_cancelled',
  lane_rental_assessed = 'lane_rental_assessed',
  reinstatement_submitted = 'reinstatement_submitted',
  file_uploaded = 'file_uploaded',
  comment_submitted = 'comment_submitted',
  work_start_logged = 'work_start_logged',
  work_stop_logged = 'work_stop_logged',
  work_start_reverted = 'work_start_reverted',
  work_stop_reverted = 'work_stop_reverted',
  forward_plan_submitted = 'forward_plan_submitted',
  forward_plan_cancelled = 'forward_plan_cancelled',
  user_removed = 'user_removed',
  user_invited = 'user_invited',
  user_name_updated = 'user_name_updated',
  inspection_units_logged = 'inspection_units_logged',
  permit_submitted = 'permit_submitted',
  paa_submitted = 'paa_submitted',
  forward_plan_edited = 'forward_plan_edited',
  permit_discount_updated = 'permit_discount_updated',
  paa_discount_updated = 'paa_discount_updated',
  paa_deemed = 'paa_deemed',
  organisation_contract_added = 'organisation_contract_added',
  organisation_contract_removed = 'organisation_contract_removed',
  organisation_updated = 'organisation_updated',
  workstream_created = 'workstream_created',
  workstream_updated = 'workstream_updated',
  inspection_works_stopped = 'inspection_works_stopped',
  inspection_works_stopped_apparatus_remaining = 'inspection_works_stopped_apparatus_remaining',
  inspection_works_in_progress = 'inspection_works_in_progress',
  inspection_works_in_progress_no_carriageway_incursion = 'inspection_works_in_progress_no_carriageway_incursion',
  inspection_non_compliant_with_conditions = 'inspection_non_compliant_with_conditions',
  permit_modification_request = 'permit_modification_request',
  scheduled_inspection_cancelled = 'scheduled_inspection_cancelled',
  scheduled_inspection_created = 'scheduled_inspection_created',
  alteration_applied_auto = 'alteration_applied_auto',
  section_81_submitted = 'section_81_submitted',
  final_reinstatement_updated = 'final_reinstatement_updated',
  section_81_acknowledged = 'section_81_acknowledged',
  section_81_accepted = 'section_81_accepted',
  section_81_accepted_fixed = 'section_81_accepted_fixed',
  section_81_rejected = 'section_81_rejected',
  section_81_resolved_by_ha = 'section_81_resolved_by_ha',
  section_81_cancelled = 'section_81_cancelled',
  support_desk_action = 'support_desk_action',
  permit_hs2_acknowledged = 'permit_hs2_acknowledged',
  geographical_area_created = 'geographical_area_created',
  geographical_area_updated = 'geographical_area_updated',
  workstream_access_updated = 'workstream_access_updated',
  planned_works_record_created = 'planned_works_record_created',
  in_progress_works_record_created = 'in_progress_works_record_created',
  historic_works_record_created = 'historic_works_record_created',
  non_notifiable_works_record_created = 'non_notifiable_works_record_created',
  section_81_works_record_created = 'section_81_works_record_created',
  unattributable_works_record_created = 'unattributable_works_record_created',
  upcoming_event = 'upcoming_event',
  sample_inspection_target_created = 'sample_inspection_target_created',
  sample_inspection_target_updated = 'sample_inspection_target_updated',
  sample_inspection_created = 'sample_inspection_created',
  sample_inspection_completed = 'sample_inspection_completed',
  sample_inspection_removed = 'sample_inspection_removed',
  sample_inspection_expired = 'sample_inspection_expired',
  internal_comment_submitted = 'internal_comment_submitted',
  comment_read = 'comment_read',
  excavation_carried_out_updated = 'excavation_carried_out_updated',
  section_81_linked_to_permit = 'section_81_linked_to_permit',
  section_81_unlinked_from_permit = 'section_81_unlinked_from_permit',
  section_81_reassigned = 'section_81_reassigned',
  permit_granted_with_duration_challenge = 'permit_granted_with_duration_challenge',
  inspection_withdrawn = 'inspection_withdrawn'
}

export enum ASDCode {
  protected_street = 1,
  traffic_sensitive = 2,
  special_engineering_difficulty = 3,
  proposed_special_engineering_difficulty = 6,
  level_crossing_safety_zone = 8,
  environmentally_sensitive_areas = 9,
  structures_not_designated_special_engineering_difficulty = 10,
  pipelines_and_specialist_cables = 12,
  priority_lanes = 13,
  lane_rental = 16,
  streets_subject_to_early_notification_of_immediate_activities = 17,
  special_events = 18,
  parking_bays_and_restrictions = 19,
  pedestrian_crossings_traffic_signals_and_traffic_sensors = 20,
  speed_limits = 21,
  transport_authority_critical_apparatus = 22,
  strategic_route = 23,
  street_lighting = 24,
  drainage_and_flood_risk = 25,
  unusual_traffic_layout = 26,
  local_considerations = 27,
  winter_maintenance_routes = 28,
  hgv_approved_routes = 29,
  emergency_services_routes = 30
}

export enum ASDPeriodicityCode {
  everyday = 1,
  working_days_only = 2,
  weekends = 3,
  monday_only = 7,
  tuesday_only = 8,
  wednesday_only = 9,
  thursday_only = 10,
  friday_only = 11,
  saturday_only = 12,
  sunday_only = 13,
  public_and_bank_holidays = 14,
  continuous_62 = 15,
  special_arrangements_63 = 16
}

export enum ReinstatementType {
  excavation = 'excavation',
  bar_holes = 'bar_holes',
  core_holes = 'core_holes',
  pole_testing = 'pole_testing'
}

export enum Section81Type {
  tee_valve_access_covers = 'tee_valve_access_covers',
  cabinet = 'cabinet',
  marker_post = 'marker_post',
  pole_post = 'pole_post',
  overhead_cables_broken_low_encroaching_onto_highway = 'overhead_cables_broken_low_encroaching_onto_highway',
  other = 'other'
}

export enum Section81Severity {
  high = 'high',
  low = 'low'
}

export enum Section81Status {
  issued = 'issued',
  acknowledged = 'acknowledged',
  accepted = 'accepted',
  accepted_fixed = 'accepted_fixed',
  rejected = 'rejected',
  resolved_by_ha = 'resolved_by_ha',
  cancelled = 'cancelled'
}

export enum Section81WorkType {
  permit_works = 'permit_works',
  non_notifiable_works = 'non_notifiable_works'
}

export enum HS2HighwayExemption {
  works_to_a_bridge = 'works_to_a_bridge',
  alteration_or_disturbance_to_apparatus = 'alteration_or_disturbance_to_apparatus',
  depositing_soil_or_materials = 'depositing_soil_or_materials',
  erection_of_scaffolding = 'erection_of_scaffolding',
  none_applicable = 'none_applicable'
}

export enum PaymentMethod {
  bank_transfer = 'bank_transfer',
  card_payment = 'card_payment',
  cash = 'cash',
  cheque = 'cheque'
}

export enum ForwardPlanWorkType {
  planned = 'planned',
  hs2_highway_works = 'hs2_highway_works'
}

export enum InspectionStatus {
  recorded = 'recorded',
  withdrawn = 'withdrawn',
  scheduled = 'scheduled'
}

export enum InspectionReasonForWithdrawal {
  incorrect_outcome_recorded = 'incorrect_outcome_recorded',
  wrong_works_or_organisation = 'wrong_works_or_organisation',
  wrong_details = 'wrong_details',
  outcome_changed = 'outcome_changed',
  other = 'other'
}
