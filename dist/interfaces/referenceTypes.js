"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActivityType;
(function (ActivityType) {
    ActivityType["water_leak"] = "water_leak";
    ActivityType["gas_leak"] = "gas_leak";
    ActivityType["new_supply"] = "new_supply";
    ActivityType["resurfacing"] = "resurfacing";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
var ApplicationType;
(function (ApplicationType) {
    ApplicationType["permit"] = "permit";
    ApplicationType["notice"] = "notice";
})(ApplicationType = exports.ApplicationType || (exports.ApplicationType = {}));
var CollaborationType;
(function (CollaborationType) {
    CollaborationType["trench_sharing_primary_promoter"] = "trench_sharing_primary_promoter";
    CollaborationType["trench_sharing_secondary_promoter"] = "trench_sharing_secondary_promoter";
    CollaborationType["sharing_traffic_management_only"] = "sharing_traffic_management_only";
    CollaborationType["other"] = "other";
})(CollaborationType = exports.CollaborationType || (exports.CollaborationType = {}));
var LocationType;
(function (LocationType) {
    LocationType["footway"] = "footway";
    LocationType["carriageway"] = "carriageway";
    LocationType["verge"] = "verge";
    LocationType["cycleway"] = "cycleway";
    LocationType["footpath"] = "footpath";
})(LocationType = exports.LocationType || (exports.LocationType = {}));
var TrafficManagementType;
(function (TrafficManagementType) {
    TrafficManagementType["road_closure"] = "road_closure";
    TrafficManagementType["contra_flow"] = "contra_flow";
    TrafficManagementType["lane_closure"] = "lane_closure";
    TrafficManagementType["multi_way_signals"] = "multi_way_signals";
    TrafficManagementType["two_way_signals"] = "two_way_signals";
    TrafficManagementType["convoy_workings"] = "convoy_workings";
    TrafficManagementType["stop_go_boards"] = "stop_go_boards";
    TrafficManagementType["priority_working"] = "priority_working";
    TrafficManagementType["give_and_take"] = "give_and_take";
    TrafficManagementType["some_carriageway_incursion"] = "some_carriageway_incursion";
    TrafficManagementType["no_carriageway_incursion"] = "no_carriageway_incursion";
})(TrafficManagementType = exports.TrafficManagementType || (exports.TrafficManagementType = {}));
var WorkCategory;
(function (WorkCategory) {
    WorkCategory["minor"] = "minor";
    WorkCategory["standard"] = "standard";
    WorkCategory["major"] = "major";
    WorkCategory["immediate_urgent"] = "immediate_urgent";
    WorkCategory["immediate_emergency"] = "immediate_emergency";
})(WorkCategory = exports.WorkCategory || (exports.WorkCategory = {}));
var PermitStatus;
(function (PermitStatus) {
    PermitStatus["submitted"] = "submitted";
    PermitStatus["granted"] = "granted";
    PermitStatus["granted_with_changes"] = "granted_with_changes";
    PermitStatus["refuse"] = "refuse";
    PermitStatus["work_in_progress"] = "work_in_progress";
})(PermitStatus = exports.PermitStatus || (exports.PermitStatus = {}));
