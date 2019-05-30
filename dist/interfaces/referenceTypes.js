"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActivityType;
(function (ActivityType) {
    ActivityType["highway_improvement_works"] = "highway_improvement_works";
    ActivityType["highway_repair_and_maintenance_works"] = "highway_repair_and_maintenance_works";
    ActivityType["utility_asset_works"] = "utility_asset_works";
    ActivityType["utility_repair_and_maintenance_works"] = "utility_repair_and_maintenance_works";
    ActivityType["diversionary_works"] = "diversionary_works";
    ActivityType["disconnection_or_alteration_of_supply"] = "disconnection_or_alteration_of_supply";
    ActivityType["permanent_reinstatement"] = "permanent_reinstatement";
    ActivityType["remedial_works"] = "remedial_works";
    ActivityType["section_58"] = "section_58";
    ActivityType["section_50"] = "section_50";
    ActivityType["core_sampling"] = "core_sampling";
    ActivityType["statutory_infrastructure_works"] = "statutory_infrastructure_works";
    ActivityType["works_for_rail_purposes"] = "works_for_rail_purposes";
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
var WorkType;
(function (WorkType) {
    WorkType["planned"] = "planned";
    WorkType["immediate"] = "immediate";
})(WorkType = exports.WorkType || (exports.WorkType = {}));
var WorkCategory;
(function (WorkCategory) {
    WorkCategory["minor"] = "minor";
    WorkCategory["standard"] = "standard";
    WorkCategory["major"] = "major";
    WorkCategory["immediate_urgent"] = "immediate_urgent";
    WorkCategory["immediate_emergency"] = "immediate_emergency";
    WorkCategory["paa"] = "paa";
})(WorkCategory = exports.WorkCategory || (exports.WorkCategory = {}));
var PermitStatus;
(function (PermitStatus) {
    PermitStatus["submitted"] = "submitted";
    PermitStatus["granted_proposed"] = "granted_proposed";
    PermitStatus["granted_with_changes"] = "granted_with_changes";
    PermitStatus["refused"] = "refused";
    PermitStatus["granted_in_progress"] = "granted_in_progress";
    PermitStatus["closed"] = "closed";
    PermitStatus["cancelled"] = "cancelled";
    PermitStatus["revoked_proposed"] = "revoked_proposed";
    PermitStatus["revoked_in_progress"] = "revoked_in_progress";
    PermitStatus["deemed_proposed"] = "deemed_proposed";
    PermitStatus["deemed_in_progress"] = "deemed_in_progress";
    PermitStatus["granted_auto"] = "granted_auto";
    PermitStatus["refused_auto"] = "refused_auto";
    PermitStatus["cancelled_auto"] = "cancelled_auto";
    PermitStatus["awaiting_assessment_in_progress"] = "awaiting_assessment_in_progress";
    PermitStatus["revoked_closed"] = "revoked_closed";
})(PermitStatus = exports.PermitStatus || (exports.PermitStatus = {}));
var ReinstatementStatus;
(function (ReinstatementStatus) {
    ReinstatementStatus["interim"] = "interim";
    ReinstatementStatus["permanent"] = "permanent";
})(ReinstatementStatus = exports.ReinstatementStatus || (exports.ReinstatementStatus = {}));
var InspectionType;
(function (InspectionType) {
    InspectionType["slg"] = "slg";
    InspectionType["reinstatement"] = "reinstatement";
    InspectionType["defect_inspection"] = "defect_inspection";
})(InspectionType = exports.InspectionType || (exports.InspectionType = {}));
var InspectionResponseType;
(function (InspectionResponseType) {
    InspectionResponseType["inspection"] = "inspection";
    InspectionResponseType["reinspection"] = "reinspection";
})(InspectionResponseType = exports.InspectionResponseType || (exports.InspectionResponseType = {}));
var InspectionCategory;
(function (InspectionCategory) {
    InspectionCategory["a"] = "a";
    InspectionCategory["b"] = "b";
    InspectionCategory["c"] = "c";
    InspectionCategory["third_party"] = "third_party";
    InspectionCategory["routine"] = "routine";
    InspectionCategory["joint_site_visit"] = "joint_site_visit";
    InspectionCategory["follow_up"] = "follow_up";
    InspectionCategory["follow_up_completion"] = "follow_up_completion";
})(InspectionCategory = exports.InspectionCategory || (exports.InspectionCategory = {}));
var InspectionOutcome;
(function (InspectionOutcome) {
    InspectionOutcome["passed"] = "passed";
    InspectionOutcome["unable_to_complete_inspection"] = "unable_to_complete_inspection";
    InspectionOutcome["failed_low"] = "failed_low";
    InspectionOutcome["failed_high"] = "failed_high";
    InspectionOutcome["further_inspections_required"] = "further_inspections_required";
    InspectionOutcome["withdraw_defect"] = "withdraw_defect";
})(InspectionOutcome = exports.InspectionOutcome || (exports.InspectionOutcome = {}));
var DefectFixedOnsite;
(function (DefectFixedOnsite) {
    DefectFixedOnsite["yes_by_inspector"] = "yes_by_inspector";
    DefectFixedOnsite["yes_by_onsite_members"] = "yes_by_onsite_members";
    DefectFixedOnsite["no"] = "no";
})(DefectFixedOnsite = exports.DefectFixedOnsite || (exports.DefectFixedOnsite = {}));
var PermitConditionType;
(function (PermitConditionType) {
    PermitConditionType["NCT01a"] = "NCT01a";
    PermitConditionType["NCT01b"] = "NCT01b";
    PermitConditionType["NCT02a"] = "NCT02a";
    PermitConditionType["NCT02b"] = "NCT02b";
    PermitConditionType["NCT04a"] = "NCT04a";
    PermitConditionType["NCT04b"] = "NCT04b";
    PermitConditionType["NCT05a"] = "NCT05a";
    PermitConditionType["NCT06a"] = "NCT06a";
    PermitConditionType["NCT07a"] = "NCT07a";
    PermitConditionType["NCT08a"] = "NCT08a";
    PermitConditionType["NCT08b"] = "NCT08b";
    PermitConditionType["NCT09a"] = "NCT09a";
    PermitConditionType["NCT09b"] = "NCT09b";
    PermitConditionType["NCT09c"] = "NCT09c";
    PermitConditionType["NCT10a"] = "NCT10a";
    PermitConditionType["NCT11a"] = "NCT11a";
    PermitConditionType["NCT11b"] = "NCT11b";
    PermitConditionType["NCT12a"] = "NCT12a";
})(PermitConditionType = exports.PermitConditionType || (exports.PermitConditionType = {}));
var OffenceCode;
(function (OffenceCode) {
    OffenceCode["offence_code_05"] = "offence_code_05";
    OffenceCode["offence_code_06"] = "offence_code_06";
    OffenceCode["offence_code_08"] = "offence_code_08";
    OffenceCode["offence_code_09"] = "offence_code_09";
})(OffenceCode = exports.OffenceCode || (exports.OffenceCode = {}));
var FPNStatus;
(function (FPNStatus) {
    FPNStatus["issued"] = "issued";
    FPNStatus["accepted"] = "accepted";
    FPNStatus["paid"] = "paid";
    FPNStatus["paid_discounted"] = "paid_discounted";
    FPNStatus["disputed"] = "disputed";
    FPNStatus["withdrawn"] = "withdrawn";
})(FPNStatus = exports.FPNStatus || (exports.FPNStatus = {}));
var CommentTopic;
(function (CommentTopic) {
    CommentTopic["GENERAL"] = "GENERAL";
    CommentTopic["SECTION_74"] = "SECTION_74";
    CommentTopic["INSPECTION"] = "INSPECTION";
    CommentTopic["FPN"] = "FPN";
    CommentTopic["OVERRUN"] = "OVERRUN";
})(CommentTopic = exports.CommentTopic || (exports.CommentTopic = {}));
var AlterationStatus;
(function (AlterationStatus) {
    AlterationStatus["submitted"] = "submitted";
    AlterationStatus["granted"] = "granted";
    AlterationStatus["granted_with_duration_challenge"] = "granted_with_duration_challenge";
    AlterationStatus["refused"] = "refused";
    AlterationStatus["deemed"] = "deemed";
    AlterationStatus["cancelled"] = "cancelled";
    AlterationStatus["revoked"] = "revoked";
})(AlterationStatus = exports.AlterationStatus || (exports.AlterationStatus = {}));
var AlterationType;
(function (AlterationType) {
    AlterationType["PROMOTER_CHANGE_REQUEST"] = "PROMOTER_CHANGE_REQUEST";
    AlterationType["HA_CHANGE_REQUEST"] = "HA_CHANGE_REQUEST";
    AlterationType["HA_IMPOSED_CHANGE"] = "HA_IMPOSED_CHANGE";
    AlterationType["WORK_EXTENSION"] = "WORK_EXTENSION";
    AlterationType["DURATION_CHALLENGE"] = "DURATION_CHALLENGE";
})(AlterationType = exports.AlterationType || (exports.AlterationType = {}));
var ReasonForRefusal;
(function (ReasonForRefusal) {
    ReasonForRefusal["RC10"] = "RC10";
    ReasonForRefusal["RC11"] = "RC11";
    ReasonForRefusal["RC12"] = "RC12";
    ReasonForRefusal["RC20"] = "RC20";
    ReasonForRefusal["RC21"] = "RC21";
    ReasonForRefusal["RC22"] = "RC22";
    ReasonForRefusal["RC23"] = "RC23";
    ReasonForRefusal["RC30"] = "RC30";
    ReasonForRefusal["RC31"] = "RC31";
    ReasonForRefusal["RC32"] = "RC32";
    ReasonForRefusal["RC33"] = "RC33";
    ReasonForRefusal["RC40"] = "RC40";
    ReasonForRefusal["RC41"] = "RC41";
    ReasonForRefusal["RC42"] = "RC42";
    ReasonForRefusal["RC43"] = "RC43";
    ReasonForRefusal["RC44"] = "RC44";
    ReasonForRefusal["RC50"] = "RC50";
})(ReasonForRefusal = exports.ReasonForRefusal || (exports.ReasonForRefusal = {}));
