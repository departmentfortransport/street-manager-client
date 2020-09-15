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
    ActivityType["works_for_road_purposes"] = "works_for_road_purposes";
    ActivityType["new_service_connection"] = "new_service_connection";
    ActivityType["optional_permit_no_fee"] = "optional_permit_no_fee";
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
    LocationType["parking_place"] = "parking_place";
    LocationType["bus_stop_or_stand"] = "bus_stop_or_stand";
    LocationType["cycle_hire_docking_station"] = "cycle_hire_docking_station";
    LocationType["taxi_rank"] = "taxi_rank";
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
var TrafficManagementTypeResponse;
(function (TrafficManagementTypeResponse) {
    TrafficManagementTypeResponse["road_closure"] = "road_closure";
    TrafficManagementTypeResponse["contra_flow"] = "contra_flow";
    TrafficManagementTypeResponse["lane_closure"] = "lane_closure";
    TrafficManagementTypeResponse["multi_way_signals"] = "multi_way_signals";
    TrafficManagementTypeResponse["two_way_signals"] = "two_way_signals";
    TrafficManagementTypeResponse["convoy_workings"] = "convoy_workings";
    TrafficManagementTypeResponse["stop_go_boards"] = "stop_go_boards";
    TrafficManagementTypeResponse["priority_working"] = "priority_working";
    TrafficManagementTypeResponse["give_and_take"] = "give_and_take";
    TrafficManagementTypeResponse["some_carriageway_incursion"] = "some_carriageway_incursion";
    TrafficManagementTypeResponse["no_carriageway_incursion"] = "no_carriageway_incursion";
    TrafficManagementTypeResponse["upcoming_enum"] = "upcoming_enum";
})(TrafficManagementTypeResponse = exports.TrafficManagementTypeResponse || (exports.TrafficManagementTypeResponse = {}));
var WorkType;
(function (WorkType) {
    WorkType["planned"] = "planned";
    WorkType["immediate"] = "immediate";
    WorkType["hs2_highway_works"] = "hs2_highway_works";
})(WorkType = exports.WorkType || (exports.WorkType = {}));
var WorkCategory;
(function (WorkCategory) {
    WorkCategory["minor"] = "minor";
    WorkCategory["standard"] = "standard";
    WorkCategory["major"] = "major";
    WorkCategory["immediate_urgent"] = "immediate_urgent";
    WorkCategory["immediate_emergency"] = "immediate_emergency";
    WorkCategory["paa"] = "paa";
    WorkCategory["hs2_highway"] = "hs2_highway";
})(WorkCategory = exports.WorkCategory || (exports.WorkCategory = {}));
var PermitStatus;
(function (PermitStatus) {
    PermitStatus["submitted"] = "submitted";
    PermitStatus["granted"] = "granted";
    PermitStatus["permit_modification_request"] = "permit_modification_request";
    PermitStatus["refused"] = "refused";
    PermitStatus["closed"] = "closed";
    PermitStatus["cancelled"] = "cancelled";
    PermitStatus["revoked"] = "revoked";
    PermitStatus["progressed"] = "progressed";
})(PermitStatus = exports.PermitStatus || (exports.PermitStatus = {}));
var AssessmentStatus;
(function (AssessmentStatus) {
    AssessmentStatus["granted"] = "granted";
    AssessmentStatus["granted_auto"] = "granted_auto";
    AssessmentStatus["refused"] = "refused";
    AssessmentStatus["refused_auto"] = "refused_auto";
    AssessmentStatus["permit_modification_request"] = "permit_modification_request";
    AssessmentStatus["revoked"] = "revoked";
})(AssessmentStatus = exports.AssessmentStatus || (exports.AssessmentStatus = {}));
var ForwardPlanStatus;
(function (ForwardPlanStatus) {
    ForwardPlanStatus["raised"] = "raised";
    ForwardPlanStatus["cancelled"] = "cancelled";
    ForwardPlanStatus["progressed"] = "progressed";
})(ForwardPlanStatus = exports.ForwardPlanStatus || (exports.ForwardPlanStatus = {}));
var ReinstatementStatus;
(function (ReinstatementStatus) {
    ReinstatementStatus["interim"] = "interim";
    ReinstatementStatus["permanent"] = "permanent";
})(ReinstatementStatus = exports.ReinstatementStatus || (exports.ReinstatementStatus = {}));
var InspectionType;
(function (InspectionType) {
    InspectionType["live_site"] = "live_site";
    InspectionType["reinstatement"] = "reinstatement";
    InspectionType["non_compliance_follow_up"] = "non_compliance_follow_up";
    InspectionType["section_81"] = "section_81";
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
    InspectionCategory["site_occupancy"] = "site_occupancy";
    InspectionCategory["conditions"] = "conditions";
})(InspectionCategory = exports.InspectionCategory || (exports.InspectionCategory = {}));
var InspectionOutcome;
(function (InspectionOutcome) {
    InspectionOutcome["passed"] = "passed";
    InspectionOutcome["unable_to_complete_inspection"] = "unable_to_complete_inspection";
    InspectionOutcome["failed_low"] = "failed_low";
    InspectionOutcome["failed_high"] = "failed_high";
    InspectionOutcome["further_inspections_required"] = "further_inspections_required";
    InspectionOutcome["agreed_site_compliance"] = "agreed_site_compliance";
    InspectionOutcome["non_compliant_with_conditions"] = "non_compliant_with_conditions";
    InspectionOutcome["works_stopped_apparatus_remaining"] = "works_stopped_apparatus_remaining";
    InspectionOutcome["works_in_progress_no_carriageway_incursion"] = "works_in_progress_no_carriageway_incursion";
    InspectionOutcome["works_in_progress"] = "works_in_progress";
    InspectionOutcome["works_stopped"] = "works_stopped";
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
    CommentTopic["FORWARD_PLAN"] = "FORWARD_PLAN";
    CommentTopic["CHANGE_REQUEST"] = "CHANGE_REQUEST";
    CommentTopic["IMPOSED_VARIATION"] = "IMPOSED_VARIATION";
    CommentTopic["DURATION_CHALLENGE"] = "DURATION_CHALLENGE";
    CommentTopic["SECTION_81"] = "SECTION_81";
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
    AlterationStatus["auto_applied"] = "auto_applied";
})(AlterationStatus = exports.AlterationStatus || (exports.AlterationStatus = {}));
var AlterationType;
(function (AlterationType) {
    AlterationType["PROMOTER_IMPOSED_CHANGE"] = "PROMOTER_IMPOSED_CHANGE";
    AlterationType["PROMOTER_CHANGE_REQUEST"] = "PROMOTER_CHANGE_REQUEST";
    AlterationType["HA_CHANGE_REQUEST"] = "HA_CHANGE_REQUEST";
    AlterationType["HA_IMPOSED_CHANGE"] = "HA_IMPOSED_CHANGE";
    AlterationType["WORK_EXTENSION"] = "WORK_EXTENSION";
    AlterationType["DURATION_CHALLENGE"] = "DURATION_CHALLENGE";
    AlterationType["MODIFIED_PERMIT"] = "MODIFIED_PERMIT";
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
var CloseFootway;
(function (CloseFootway) {
    CloseFootway["yes_provide_pedestrian_walkway"] = "yes_provide_pedestrian_walkway";
    CloseFootway["yes_provide_alternative_route"] = "yes_provide_alternative_route";
    CloseFootway["no"] = "no";
})(CloseFootway = exports.CloseFootway || (exports.CloseFootway = {}));
var ActivityActivityType;
(function (ActivityActivityType) {
    ActivityActivityType["skips"] = "skips";
    ActivityActivityType["scaffolding"] = "scaffolding";
    ActivityActivityType["hoarding"] = "hoarding";
    ActivityActivityType["crane_mobile_platform"] = "crane_mobile_platform";
    ActivityActivityType["event"] = "event";
    ActivityActivityType["section50"] = "section50";
    ActivityActivityType["section58"] = "section58";
    ActivityActivityType["compound"] = "compound";
    ActivityActivityType["other"] = "other";
})(ActivityActivityType = exports.ActivityActivityType || (exports.ActivityActivityType = {}));
var FailureReason;
(function (FailureReason) {
    FailureReason["live_site_signage"] = "live_site_signage";
    FailureReason["live_site_distance"] = "live_site_distance";
    FailureReason["live_site_safety_zone"] = "live_site_safety_zone";
    FailureReason["live_site_barriers"] = "live_site_barriers";
    FailureReason["live_site_traffic_control"] = "live_site_traffic_control";
    FailureReason["live_site_pedestrian_provision"] = "live_site_pedestrian_provision";
    FailureReason["live_site_cyclist_provision"] = "live_site_cyclist_provision";
    FailureReason["live_site_operative_qualification"] = "live_site_operative_qualification";
    FailureReason["live_site_equipment"] = "live_site_equipment";
    FailureReason["live_site_materials"] = "live_site_materials";
    FailureReason["live_site_compaction"] = "live_site_compaction";
    FailureReason["live_site_construction_layers"] = "live_site_construction_layers";
    FailureReason["live_site_storage_of_materials"] = "live_site_storage_of_materials";
    FailureReason["reinstatement_damage_to_surround_area"] = "reinstatement_damage_to_surround_area";
    FailureReason["reinstatement_saw_cutting"] = "reinstatement_saw_cutting";
    FailureReason["reinstatement_acute_angles"] = "reinstatement_acute_angles";
    FailureReason["reinstatement_verge"] = "reinstatement_verge";
    FailureReason["reinstatement_anti_skid"] = "reinstatement_anti_skid";
    FailureReason["reinstatement_fixed_features"] = "reinstatement_fixed_features";
    FailureReason["reinstatement_modular"] = "reinstatement_modular";
    FailureReason["reinstatement_proximity"] = "reinstatement_proximity";
    FailureReason["reinstatement_materials_incorrect"] = "reinstatement_materials_incorrect";
    FailureReason["reinstatement_materials_damaged"] = "reinstatement_materials_damaged";
    FailureReason["reinstatement_edge_sealant"] = "reinstatement_edge_sealant";
    FailureReason["reinstatement_over_banding"] = "reinstatement_over_banding";
    FailureReason["reinstatement_road_markings"] = "reinstatement_road_markings";
    FailureReason["reinstatement_infill_pointing"] = "reinstatement_infill_pointing";
    FailureReason["reinstatement_ironwork_apparatus"] = "reinstatement_ironwork_apparatus";
    FailureReason["reinstatement_breaking_out_fretting"] = "reinstatement_breaking_out_fretting";
    FailureReason["reinstatement_interface_cracking"] = "reinstatement_interface_cracking";
    FailureReason["reinstatement_crowning"] = "reinstatement_crowning";
    FailureReason["reinstatement_depression"] = "reinstatement_depression";
    FailureReason["reinstatement_as_laid_profile"] = "reinstatement_as_laid_profile";
    FailureReason["reinstatement_texture_depth"] = "reinstatement_texture_depth";
    FailureReason["reinstatement_edge_depression"] = "reinstatement_edge_depression";
})(FailureReason = exports.FailureReason || (exports.FailureReason = {}));
var LaneRentalAssessmentOutcome;
(function (LaneRentalAssessmentOutcome) {
    LaneRentalAssessmentOutcome["chargeable"] = "chargeable";
    LaneRentalAssessmentOutcome["potentially_chargeable"] = "potentially_chargeable";
    LaneRentalAssessmentOutcome["charges_waived"] = "charges_waived";
    LaneRentalAssessmentOutcome["exempt"] = "exempt";
    LaneRentalAssessmentOutcome["charges_not_applicable"] = "charges_not_applicable";
})(LaneRentalAssessmentOutcome = exports.LaneRentalAssessmentOutcome || (exports.LaneRentalAssessmentOutcome = {}));
var LaneRentalAssessmentChargeBand;
(function (LaneRentalAssessmentChargeBand) {
    LaneRentalAssessmentChargeBand["charge_band_1"] = "charge_band_1";
    LaneRentalAssessmentChargeBand["charge_band_2"] = "charge_band_2";
    LaneRentalAssessmentChargeBand["charge_band_3"] = "charge_band_3";
    LaneRentalAssessmentChargeBand["charge_band_4"] = "charge_band_4";
    LaneRentalAssessmentChargeBand["charge_band_5"] = "charge_band_5";
})(LaneRentalAssessmentChargeBand = exports.LaneRentalAssessmentChargeBand || (exports.LaneRentalAssessmentChargeBand = {}));
var WorkStatus;
(function (WorkStatus) {
    WorkStatus["planned"] = "planned";
    WorkStatus["in_progress"] = "in_progress";
    WorkStatus["completed"] = "completed";
    WorkStatus["cancelled"] = "cancelled";
    WorkStatus["unattributable"] = "unattributable";
    WorkStatus["historical"] = "historical";
    WorkStatus["non_notifiable"] = "non_notifiable";
    WorkStatus["section_81"] = "section_81";
})(WorkStatus = exports.WorkStatus || (exports.WorkStatus = {}));
var AuditEvent;
(function (AuditEvent) {
    AuditEvent["historic_action"] = "historic_action";
    AuditEvent["inspection_passed"] = "inspection_passed";
    AuditEvent["inspection_failed"] = "inspection_failed";
    AuditEvent["inspection_unable_to_carry_out"] = "inspection_unable_to_carry_out";
    AuditEvent["inspection_further_required"] = "inspection_further_required";
    AuditEvent["inspection_agreed_site_compliance"] = "inspection_agreed_site_compliance";
    AuditEvent["inspection_withdraw_defect"] = "inspection_withdraw_defect";
    AuditEvent["activity_submitted"] = "activity_submitted";
    AuditEvent["activity_edited"] = "activity_edited";
    AuditEvent["activity_cancelled"] = "activity_cancelled";
    AuditEvent["fpn_submitted"] = "fpn_submitted";
    AuditEvent["fpn_accepted"] = "fpn_accepted";
    AuditEvent["fpn_paid"] = "fpn_paid";
    AuditEvent["fpn_disputed"] = "fpn_disputed";
    AuditEvent["fpn_withdrawn"] = "fpn_withdrawn";
    AuditEvent["permit_granted"] = "permit_granted";
    AuditEvent["permit_refused"] = "permit_refused";
    AuditEvent["permit_cancelled"] = "permit_cancelled";
    AuditEvent["permit_revoked"] = "permit_revoked";
    AuditEvent["permit_deemed"] = "permit_deemed";
    AuditEvent["paa_granted"] = "paa_granted";
    AuditEvent["paa_refused"] = "paa_refused";
    AuditEvent["paa_cancelled"] = "paa_cancelled";
    AuditEvent["paa_revoked"] = "paa_revoked";
    AuditEvent["alteration_submitted"] = "alteration_submitted";
    AuditEvent["alteration_refused"] = "alteration_refused";
    AuditEvent["alteration_granted"] = "alteration_granted";
    AuditEvent["alteration_granted_with_duration_challenge"] = "alteration_granted_with_duration_challenge";
    AuditEvent["alteration_deemed"] = "alteration_deemed";
    AuditEvent["alteration_cancelled"] = "alteration_cancelled";
    AuditEvent["lane_rental_assessed"] = "lane_rental_assessed";
    AuditEvent["reinstatement_submitted"] = "reinstatement_submitted";
    AuditEvent["file_uploaded"] = "file_uploaded";
    AuditEvent["comment_submitted"] = "comment_submitted";
    AuditEvent["work_start_logged"] = "work_start_logged";
    AuditEvent["work_stop_logged"] = "work_stop_logged";
    AuditEvent["work_start_reverted"] = "work_start_reverted";
    AuditEvent["work_stop_reverted"] = "work_stop_reverted";
    AuditEvent["forward_plan_submitted"] = "forward_plan_submitted";
    AuditEvent["forward_plan_cancelled"] = "forward_plan_cancelled";
    AuditEvent["user_removed"] = "user_removed";
    AuditEvent["user_invited"] = "user_invited";
    AuditEvent["user_name_updated"] = "user_name_updated";
    AuditEvent["inspection_units_logged"] = "inspection_units_logged";
    AuditEvent["permit_submitted"] = "permit_submitted";
    AuditEvent["paa_submitted"] = "paa_submitted";
    AuditEvent["forward_plan_edited"] = "forward_plan_edited";
    AuditEvent["permit_discount_updated"] = "permit_discount_updated";
    AuditEvent["paa_discount_updated"] = "paa_discount_updated";
    AuditEvent["paa_deemed"] = "paa_deemed";
    AuditEvent["organisation_contract_added"] = "organisation_contract_added";
    AuditEvent["organisation_contract_removed"] = "organisation_contract_removed";
    AuditEvent["organisation_updated"] = "organisation_updated";
    AuditEvent["workstream_created"] = "workstream_created";
    AuditEvent["workstream_updated"] = "workstream_updated";
    AuditEvent["inspection_works_stopped"] = "inspection_works_stopped";
    AuditEvent["inspection_works_stopped_apparatus_remaining"] = "inspection_works_stopped_apparatus_remaining";
    AuditEvent["inspection_works_in_progress"] = "inspection_works_in_progress";
    AuditEvent["inspection_works_in_progress_no_carriageway_incursion"] = "inspection_works_in_progress_no_carriageway_incursion";
    AuditEvent["inspection_non_compliant_with_conditions"] = "inspection_non_compliant_with_conditions";
    AuditEvent["permit_modification_request"] = "permit_modification_request";
    AuditEvent["scheduled_inspection_cancelled"] = "scheduled_inspection_cancelled";
    AuditEvent["scheduled_inspection_created"] = "scheduled_inspection_created";
    AuditEvent["alteration_applied_auto"] = "alteration_applied_auto";
    AuditEvent["section_81_submitted"] = "section_81_submitted";
    AuditEvent["final_reinstatement_updated"] = "final_reinstatement_updated";
    AuditEvent["section_81_acknowledged"] = "section_81_acknowledged";
    AuditEvent["section_81_accepted"] = "section_81_accepted";
    AuditEvent["section_81_accepted_fixed"] = "section_81_accepted_fixed";
    AuditEvent["section_81_rejected"] = "section_81_rejected";
    AuditEvent["section_81_resolved_by_ha"] = "section_81_resolved_by_ha";
    AuditEvent["section_81_cancelled"] = "section_81_cancelled";
    AuditEvent["support_desk_action"] = "support_desk_action";
    AuditEvent["permit_hs2_acknowledged"] = "permit_hs2_acknowledged";
    AuditEvent["geographical_area_created"] = "geographical_area_created";
    AuditEvent["geographical_area_updated"] = "geographical_area_updated";
    AuditEvent["workstream_access_updated"] = "workstream_access_updated";
    AuditEvent["planned_works_record_created"] = "planned_works_record_created";
    AuditEvent["in_progress_works_record_created"] = "in_progress_works_record_created";
    AuditEvent["historic_works_record_created"] = "historic_works_record_created";
    AuditEvent["non_notifiable_works_record_created"] = "non_notifiable_works_record_created";
    AuditEvent["section_81_works_record_created"] = "section_81_works_record_created";
    AuditEvent["unattributable_works_record_created"] = "unattributable_works_record_created";
    AuditEvent["upcoming_event"] = "upcoming_event";
    AuditEvent["sample_inspection_target_created"] = "sample_inspection_target_created";
    AuditEvent["sample_inspection_target_updated"] = "sample_inspection_target_updated";
    AuditEvent["sample_inspection_created"] = "sample_inspection_created";
    AuditEvent["sample_inspection_completed"] = "sample_inspection_completed";
    AuditEvent["sample_inspection_removed"] = "sample_inspection_removed";
    AuditEvent["sample_inspection_expired"] = "sample_inspection_expired";
    AuditEvent["internal_comment_submitted"] = "internal_comment_submitted";
    AuditEvent["comment_read"] = "comment_read";
})(AuditEvent = exports.AuditEvent || (exports.AuditEvent = {}));
var ASDCode;
(function (ASDCode) {
    ASDCode[ASDCode["protected_street"] = 1] = "protected_street";
    ASDCode[ASDCode["traffic_sensitive"] = 2] = "traffic_sensitive";
    ASDCode[ASDCode["special_engineering_difficulty"] = 3] = "special_engineering_difficulty";
    ASDCode[ASDCode["proposed_special_engineering_difficulty"] = 6] = "proposed_special_engineering_difficulty";
    ASDCode[ASDCode["level_crossing_safety_zone"] = 8] = "level_crossing_safety_zone";
    ASDCode[ASDCode["environmentally_sensitive_areas"] = 9] = "environmentally_sensitive_areas";
    ASDCode[ASDCode["structures_not_designated_special_engineering_difficulty"] = 10] = "structures_not_designated_special_engineering_difficulty";
    ASDCode[ASDCode["pipelines_and_specialist_cables"] = 12] = "pipelines_and_specialist_cables";
    ASDCode[ASDCode["priority_lanes"] = 13] = "priority_lanes";
    ASDCode[ASDCode["lane_rental"] = 16] = "lane_rental";
    ASDCode[ASDCode["streets_subject_to_early_notification_of_immediate_activities"] = 17] = "streets_subject_to_early_notification_of_immediate_activities";
    ASDCode[ASDCode["special_events"] = 18] = "special_events";
    ASDCode[ASDCode["parking_bays_and_restrictions"] = 19] = "parking_bays_and_restrictions";
    ASDCode[ASDCode["pedestrian_crossings_traffic_signals_and_traffic_sensors"] = 20] = "pedestrian_crossings_traffic_signals_and_traffic_sensors";
    ASDCode[ASDCode["speed_limits"] = 21] = "speed_limits";
    ASDCode[ASDCode["transport_authority_critical_apparatus"] = 22] = "transport_authority_critical_apparatus";
    ASDCode[ASDCode["strategic_route"] = 23] = "strategic_route";
    ASDCode[ASDCode["street_lighting"] = 24] = "street_lighting";
    ASDCode[ASDCode["drainage_and_flood_risk"] = 25] = "drainage_and_flood_risk";
    ASDCode[ASDCode["unusual_traffic_layout"] = 26] = "unusual_traffic_layout";
    ASDCode[ASDCode["local_considerations"] = 27] = "local_considerations";
    ASDCode[ASDCode["winter_maintenance_routes"] = 28] = "winter_maintenance_routes";
    ASDCode[ASDCode["hgv_approved_routes"] = 29] = "hgv_approved_routes";
    ASDCode[ASDCode["emergency_services_routes"] = 30] = "emergency_services_routes";
})(ASDCode = exports.ASDCode || (exports.ASDCode = {}));
var ASDPeriodicityCode;
(function (ASDPeriodicityCode) {
    ASDPeriodicityCode[ASDPeriodicityCode["everyday"] = 1] = "everyday";
    ASDPeriodicityCode[ASDPeriodicityCode["working_days_only"] = 2] = "working_days_only";
    ASDPeriodicityCode[ASDPeriodicityCode["weekends"] = 3] = "weekends";
    ASDPeriodicityCode[ASDPeriodicityCode["monday_only"] = 7] = "monday_only";
    ASDPeriodicityCode[ASDPeriodicityCode["tuesday_only"] = 8] = "tuesday_only";
    ASDPeriodicityCode[ASDPeriodicityCode["wednesday_only"] = 9] = "wednesday_only";
    ASDPeriodicityCode[ASDPeriodicityCode["thursday_only"] = 10] = "thursday_only";
    ASDPeriodicityCode[ASDPeriodicityCode["friday_only"] = 11] = "friday_only";
    ASDPeriodicityCode[ASDPeriodicityCode["saturday_only"] = 12] = "saturday_only";
    ASDPeriodicityCode[ASDPeriodicityCode["sunday_only"] = 13] = "sunday_only";
    ASDPeriodicityCode[ASDPeriodicityCode["public_and_bank_holidays"] = 14] = "public_and_bank_holidays";
    ASDPeriodicityCode[ASDPeriodicityCode["continuous_62"] = 15] = "continuous_62";
    ASDPeriodicityCode[ASDPeriodicityCode["special_arrangements_63"] = 16] = "special_arrangements_63";
})(ASDPeriodicityCode = exports.ASDPeriodicityCode || (exports.ASDPeriodicityCode = {}));
var ReinstatementType;
(function (ReinstatementType) {
    ReinstatementType["excavation"] = "excavation";
    ReinstatementType["bar_holes"] = "bar_holes";
    ReinstatementType["core_holes"] = "core_holes";
    ReinstatementType["pole_testing"] = "pole_testing";
})(ReinstatementType = exports.ReinstatementType || (exports.ReinstatementType = {}));
var Section81Type;
(function (Section81Type) {
    Section81Type["tee_valve_access_covers"] = "tee_valve_access_covers";
    Section81Type["cabinet"] = "cabinet";
    Section81Type["marker_post"] = "marker_post";
    Section81Type["pole_post"] = "pole_post";
    Section81Type["overhead_cables_broken_low_encroaching_onto_highway"] = "overhead_cables_broken_low_encroaching_onto_highway";
    Section81Type["other"] = "other";
})(Section81Type = exports.Section81Type || (exports.Section81Type = {}));
var Section81Severity;
(function (Section81Severity) {
    Section81Severity["high"] = "high";
    Section81Severity["low"] = "low";
})(Section81Severity = exports.Section81Severity || (exports.Section81Severity = {}));
var Section81Status;
(function (Section81Status) {
    Section81Status["issued"] = "issued";
    Section81Status["acknowledged"] = "acknowledged";
    Section81Status["accepted"] = "accepted";
    Section81Status["accepted_fixed"] = "accepted_fixed";
    Section81Status["rejected"] = "rejected";
    Section81Status["resolved_by_ha"] = "resolved_by_ha";
    Section81Status["cancelled"] = "cancelled";
})(Section81Status = exports.Section81Status || (exports.Section81Status = {}));
var Section81WorkType;
(function (Section81WorkType) {
    Section81WorkType["permit_works"] = "permit_works";
    Section81WorkType["non_notifiable_works"] = "non_notifiable_works";
})(Section81WorkType = exports.Section81WorkType || (exports.Section81WorkType = {}));
var HS2HighwayExemption;
(function (HS2HighwayExemption) {
    HS2HighwayExemption["works_to_a_bridge"] = "works_to_a_bridge";
    HS2HighwayExemption["alteration_or_disturbance_to_apparatus"] = "alteration_or_disturbance_to_apparatus";
    HS2HighwayExemption["depositing_soil_or_materials"] = "depositing_soil_or_materials";
    HS2HighwayExemption["erection_of_scaffolding"] = "erection_of_scaffolding";
    HS2HighwayExemption["none_applicable"] = "none_applicable";
})(HS2HighwayExemption = exports.HS2HighwayExemption || (exports.HS2HighwayExemption = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["bank_transfer"] = "bank_transfer";
    PaymentMethod["card_payment"] = "card_payment";
    PaymentMethod["cash"] = "cash";
    PaymentMethod["cheque"] = "cheque";
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
var ForwardPlanWorkType;
(function (ForwardPlanWorkType) {
    ForwardPlanWorkType["planned"] = "planned";
    ForwardPlanWorkType["hs2_highway_works"] = "hs2_highway_works";
})(ForwardPlanWorkType = exports.ForwardPlanWorkType || (exports.ForwardPlanWorkType = {}));
