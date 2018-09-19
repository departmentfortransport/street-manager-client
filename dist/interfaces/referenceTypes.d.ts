export declare enum ActivityType {
    water_leak = "water_leak",
    gas_leak = "gas_leak",
    new_supply = "new_supply",
    resurfacing = "resurfacing"
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
export declare enum WorkCategory {
    minor = "minor",
    standard = "standard"
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
    deemed_in_progress = "deemed_in_progress"
}
export declare enum AssessmentStatus {
    granted_proposed = "granted_proposed",
    granted_with_changes = "granted_with_changes",
    refused = "refused"
}
export declare enum ReinstatementStatus {
    interim = "interim",
    permanent = "permanent"
}
export declare enum InspectionType {
    slg = "slg",
    reinstatement = "reinstatement"
}
export declare enum InspectionCategory {
    a = "a",
    b = "b",
    c = "c",
    third_party = "third_party",
    routine = "routine"
}
export declare enum InspectionOutcome {
    passed = "passed",
    unable_to_complete = "unable_to_complete",
    failed_standard = "failed_standard",
    failed_2_hour = "failed_2_hour",
    failed_4_hour = "failed_4_hour"
}
export declare enum DefectFixedOnsite {
    yes_by_inspector = "yes_by_inspector",
    yes_by_onsite_members = "yes_by_onsite_members",
    no = "no"
}
