export declare enum ActivityType {
    highway_improvement_works = "highway_improvement_works",
    highway_repair_and_maintenance_works = "highway_repair_and_maintenance_works",
    utility_asset_works = "utility_asset_works",
    utility_repair_and_maintenance_works = "utility_repair_and_maintenance_works",
    diversionary_works = "diversionary_works",
    disconnection_or_alteration_of_supply = "disconnection_or_alteration_of_supply",
    permanent_reinstatement = "permanent_reinstatement",
    remedial_works = "remedial_works",
    section_58 = "section_58",
    section_50 = "section_50",
    core_sampling = "core_sampling",
    statutory_infrastructure_works = "statutory_infrastructure_works",
    works_for_rail_purposes = "works_for_rail_purposes"
}
export declare enum ApplicationType {
    permit = "permit",
    notice = "notice"
}
export declare enum CollaborationType {
    trench_sharing_primary_promoter = "trench_sharing_primary_promoter",
    trench_sharing_secondary_promoter = "trench_sharing_secondary_promoter",
    sharing_traffic_management_only = "sharing_traffic_management_only",
    other = "other"
}
export declare enum LocationType {
    footway = "footway",
    carriageway = "carriageway",
    verge = "verge",
    cycleway = "cycleway",
    footpath = "footpath"
}
export declare enum TrafficManagementType {
    road_closure = "road_closure",
    contra_flow = "contra_flow",
    lane_closure = "lane_closure",
    multi_way_signals = "multi_way_signals",
    two_way_signals = "two_way_signals",
    convoy_workings = "convoy_workings",
    stop_go_boards = "stop_go_boards",
    priority_working = "priority_working",
    give_and_take = "give_and_take",
    some_carriageway_incursion = "some_carriageway_incursion",
    no_carriageway_incursion = "no_carriageway_incursion"
}
export declare enum WorkType {
    planned = "planned",
    immediate = "immediate"
}
export declare enum WorkCategory {
    minor = "minor",
    standard = "standard",
    major = "major",
    immediate_urgent = "immediate_urgent",
    immediate_emergency = "immediate_emergency",
    paa = "paa"
}
export declare enum PermitStatus {
    submitted = "submitted",
    granted_proposed = "granted_proposed",
    granted_with_changes = "granted_with_changes",
    refused = "refused",
    granted_in_progress = "granted_in_progress",
    closed = "closed",
    cancelled = "cancelled",
    revoked_proposed = "revoked_proposed",
    revoked_in_progress = "revoked_in_progress",
    deemed_proposed = "deemed_proposed",
    deemed_in_progress = "deemed_in_progress",
    granted_auto = "granted_auto",
    refused_auto = "refused_auto",
    cancelled_auto = "cancelled_auto",
    awaiting_assessment_in_progress = "awaiting_assessment_in_progress",
    revoked_closed = "revoked_closed"
}
export declare enum ReinstatementStatus {
    interim = "interim",
    permanent = "permanent"
}
export declare enum InspectionType {
    slg = "slg",
    reinstatement = "reinstatement",
    defect_inspection = "defect_inspection"
}
export declare enum InspectionResponseType {
    inspection = "inspection",
    reinspection = "reinspection"
}
export declare enum InspectionCategory {
    a = "a",
    b = "b",
    c = "c",
    third_party = "third_party",
    routine = "routine",
    joint_site_visit = "joint_site_visit",
    follow_up = "follow_up",
    follow_up_completion = "follow_up_completion"
}
export declare enum InspectionOutcome {
    passed = "passed",
    unable_to_complete_inspection = "unable_to_complete_inspection",
    failed_low = "failed_low",
    failed_high = "failed_high",
    further_inspections_required = "further_inspections_required",
    withdraw_defect = "withdraw_defect"
}
export declare enum DefectFixedOnsite {
    yes_by_inspector = "yes_by_inspector",
    yes_by_onsite_members = "yes_by_onsite_members",
    no = "no"
}
export declare enum PermitConditionType {
    NCT01a = "NCT01a",
    NCT01b = "NCT01b",
    NCT02a = "NCT02a",
    NCT02b = "NCT02b",
    NCT04a = "NCT04a",
    NCT04b = "NCT04b",
    NCT05a = "NCT05a",
    NCT06a = "NCT06a",
    NCT07a = "NCT07a",
    NCT08a = "NCT08a",
    NCT08b = "NCT08b",
    NCT09a = "NCT09a",
    NCT09b = "NCT09b",
    NCT09c = "NCT09c",
    NCT10a = "NCT10a",
    NCT11a = "NCT11a",
    NCT11b = "NCT11b",
    NCT12a = "NCT12a"
}
export declare enum OffenceCode {
    offence_code_05 = "offence_code_05",
    offence_code_06 = "offence_code_06",
    offence_code_08 = "offence_code_08",
    offence_code_09 = "offence_code_09"
}
export declare enum FPNStatus {
    issued = "issued",
    accepted = "accepted",
    paid = "paid",
    paid_discounted = "paid_discounted",
    disputed = "disputed",
    withdrawn = "withdrawn"
}
export declare enum CommentTopic {
    GENERAL = "GENERAL",
    SECTION_74 = "SECTION_74",
    INSPECTION = "INSPECTION",
    FPN = "FPN",
    OVERRUN = "OVERRUN"
}
export declare enum AlterationStatus {
    submitted = "submitted",
    granted = "granted",
    granted_with_duration_challenge = "granted_with_duration_challenge",
    refused = "refused",
    deemed = "deemed",
    cancelled = "cancelled",
    revoked = "revoked"
}
export declare enum AlterationType {
    PROMOTER_CHANGE_REQUEST = "PROMOTER_CHANGE_REQUEST",
    HA_CHANGE_REQUEST = "HA_CHANGE_REQUEST",
    HA_IMPOSED_CHANGE = "HA_IMPOSED_CHANGE",
    WORK_EXTENSION = "WORK_EXTENSION",
    DURATION_CHALLENGE = "DURATION_CHALLENGE"
}
export declare enum ReasonForRefusal {
    RC10 = "RC10",
    RC11 = "RC11",
    RC12 = "RC12",
    RC20 = "RC20",
    RC21 = "RC21",
    RC22 = "RC22",
    RC23 = "RC23",
    RC30 = "RC30",
    RC31 = "RC31",
    RC32 = "RC32",
    RC33 = "RC33",
    RC40 = "RC40",
    RC41 = "RC41",
    RC42 = "RC42",
    RC43 = "RC43",
    RC44 = "RC44",
    RC50 = "RC50"
}
export declare enum CloseFootway {
    yes_provide_pedestrian_walkway = "yes_provide_pedestrian_walkway",
    yes_provide_alternative_route = "yes_provide_alternative_route",
    no = "no"
}
export declare enum ActivityActivityType {
    skips = "skips",
    scaffolding = "scaffolding",
    hoarding = "hoarding",
    crane_mobile_platform = "crane_mobile_platform",
    event = "event",
    section50 = "section50",
    section58 = "section58",
    compound = "compound",
    other = "other"
}
export declare enum FailureReason {
    slg_signage = "slg_signage",
    slg_distance = "slg_distance",
    slg_safety_zone = "slg_safety_zone",
    slg_barriers = "slg_barriers",
    slg_traffic_control = "slg_traffic_control",
    slg_pedestrian_provision = "slg_pedestrian_provision",
    slg_cyclist_provision = "slg_cyclist_provision",
    slg_operative_qualification = "slg_operative_qualification",
    slg_equipment = "slg_equipment",
    slg_materials = "slg_materials",
    slg_compaction = "slg_compaction",
    slg_construction_layers = "slg_construction_layers",
    slg_storage_of_materials = "slg_storage_of_materials",
    reinstatement_damage_to_surround_area = "reinstatement_damage_to_surround_area",
    reinstatement_saw_cutting = "reinstatement_saw_cutting",
    reinstatement_acute_angles = "reinstatement_acute_angles",
    reinstatement_verge = "reinstatement_verge",
    reinstatement_anti_skid = "reinstatement_anti_skid",
    reinstatement_fixed_features = "reinstatement_fixed_features",
    reinstatement_modular = "reinstatement_modular",
    reinstatement_proximity = "reinstatement_proximity",
    reinstatement_materials_incorrect = "reinstatement_materials_incorrect",
    reinstatement_materials_damaged = "reinstatement_materials_damaged",
    reinstatement_edge_sealant = "reinstatement_edge_sealant",
    reinstatement_over_banding = "reinstatement_over_banding",
    reinstatement_road_markings = "reinstatement_road_markings",
    reinstatement_infill_pointing = "reinstatement_infill_pointing",
    reinstatement_ironwork_apparatus = "reinstatement_ironwork_apparatus",
    reinstatement_breaking_out_fretting = "reinstatement_breaking_out_fretting",
    reinstatement_interface_cracking = "reinstatement_interface_cracking",
    reinstatement_crowning = "reinstatement_crowning",
    reinstatement_depression = "reinstatement_depression",
    reinstatement_as_laid_profile = "reinstatement_as_laid_profile",
    reinstatement_texture_depth = "reinstatement_texture_depth",
    reinstatement_edge_depression = "reinstatement_edge_depression"
}
export declare enum LaneRentalAssessmentOutcome {
    chargeable = "chargeable",
    potentially_chargeable = "potentially_chargeable",
    charges_waived = "charges_waived",
    exempt = "exempt",
    charges_not_applicable = "charges_not_applicable"
}
export declare enum LaneRentalAssessmentChargeBand {
    charge_band_1 = "charge_band_1",
    charge_band_2 = "charge_band_2",
    charge_band_3 = "charge_band_3",
    charge_band_4 = "charge_band_4",
    charge_band_5 = "charge_band_5"
}
