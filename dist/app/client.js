"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const http_status_codes_1 = require("http-status-codes");
const FormData = require("form-data");
const qs = require("qs");
const https_1 = require("https");
class StreetManagerApiClient {
    constructor(config) {
        this.config = config;
        const axiosRequestConfig = {
            baseURL: this.config.baseURL,
            timeout: this.config.timeout
        };
        if (this.config.disableCertificateVerification) {
            axiosRequestConfig.httpsAgent = new https_1.Agent({
                rejectUnauthorized: false
            });
        }
        this.axios = axios_1.default.create(axiosRequestConfig);
    }
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get('/status'));
        });
    }
    authenticate(requestConfig, authenticationRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/authenticate', authenticationRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    authenticateInitial(requestConfig, authenticationRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/authenticate/initial', authenticationRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createWork(requestConfig, workCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/works', workCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createPermit(requestConfig, workReferenceNumber, permitCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/permits`, permitCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getPermit(requestConfig, workReferenceNumber, permitReferenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}`, this.generateRequestConfig(requestConfig)));
        });
    }
    getWork(requestConfig, workReferenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${workReferenceNumber}`, this.generateRequestConfig(requestConfig)));
        });
    }
    updatePermitStatus(requestConfig, workReferenceNumber, permitReferenceNumber, updatePermitStatusRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/status`, updatePermitStatusRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateAssessmentStatus(requestConfig, workReferenceNumber, permitReferenceNumber, updateAssessmentStatusRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/assessment`, updateAssessmentStatusRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateWorkActualStartDate(requestConfig, workReferenceNumber, workStartUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/start`, workStartUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    revertWorkActualStartDate(requestConfig, workReferenceNumber, workStartRevertRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/revert-start`, workStartRevertRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateWorkActualStopDate(requestConfig, workReferenceNumber, workStopUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/stop`, workStopUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    revertWorkActualStopDate(requestConfig, workReferenceNumber, workStopRevertRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/revert-stop`, workStopRevertRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateInspectionUnits(requestConfig, workReferenceNumber, inspectionUnitsUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/inspection-units`, inspectionUnitsUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateFinalReinstatement(requestConfig, workReferenceNumber, finalReinstatementUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/final-reinstatement`, finalReinstatementUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateExcavationCarriedOut(requestConfig, workReferenceNumber, excavationCarriedOutUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/excavation-carried-out`, excavationCarriedOutUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    addFileToWork(requestConfig, workReferenceNumber, addFileToWorkRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/files`, addFileToWorkRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createSite(requestConfig, workReferenceNumber, siteCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/sites`, siteCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createReinstatement(requestConfig, workReferenceNumber, siteNumber, reinstatementCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/sites/${siteNumber}/reinstatements`, reinstatementCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getSite(requestConfig, workReferenceNumber, siteNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${workReferenceNumber}/sites/${siteNumber}`, this.generateRequestConfig(requestConfig)));
        });
    }
    createInspection(requestConfig, workReferenceNumber, inspectionCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/inspections`, inspectionCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getInspection(requestConfig, workReferenceNumber, inspectionReferenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${workReferenceNumber}/inspections/${inspectionReferenceNumber}`, this.generateRequestConfig(requestConfig)));
        });
    }
    createFPN(requestConfig, workReferenceNumber, fpnCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/fixed-penalty-notices`, fpnCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getFPN(requestConfig, workReferenceNumber, fpnReferenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${workReferenceNumber}/fixed-penalty-notices/${fpnReferenceNumber}`, this.generateRequestConfig(requestConfig)));
        });
    }
    updateFPNStatus(requestConfig, workReferenceNumber, fpnReferenceNumber, fpnStatusUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/fixed-penalty-notices/${fpnReferenceNumber}/status`, fpnStatusUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createComment(requestConfig, workReferenceNumber, commentCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/comments`, commentCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    markCommentAsRead(requestConfig, workReferenceNumber, commentReferenceNumber, commentReadRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/comments/${commentReferenceNumber}/read`, commentReadRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createPermitAlteration(requestConfig, workReferenceNumber, permitReferenceNumber, permitAlterationRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/alterations`, permitAlterationRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updatePermitAlterationStatus(requestConfig, workReferenceNumber, permitReferenceNumber, permitAlterationReferenceNumber, updatePermitAlterationStatusRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/alterations/${permitAlterationReferenceNumber}/status`, updatePermitAlterationStatusRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getPermitAlteration(requestConfig, workReferenceNumber, permitReferenceNumber, permitAlterationReferenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/alterations/${permitAlterationReferenceNumber}`, this.generateRequestConfig(requestConfig)));
        });
    }
    uploadFile(requestConfig, buffer, filename, swaCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const form = new FormData();
            form.append('file', buffer, filename);
            const config = this.generateRequestConfig(requestConfig, { swaCode: swaCode });
            Object.assign(config.headers, form.getHeaders());
            return this.httpHandler(() => this.axios.post('/files', form, config));
        });
    }
    createGeographicalArea(requestConfig, buffer, filename, internalUserIdentifier, internalUserName) {
        return __awaiter(this, void 0, void 0, function* () {
            const form = new FormData();
            form.append('file', buffer, filename);
            const config = this.generateRequestConfig(requestConfig, { internalUserIdentifier: internalUserIdentifier, internalUserName: internalUserName });
            Object.assign(config.headers, form.getHeaders());
            return this.httpHandler(() => this.axios.post('/geographical-areas', form, config));
        });
    }
    updateGeographicalArea(requestConfig, geographicalAreaReferenceNumber, buffer, filename, internalUserIdentifier, internalUserName) {
        return __awaiter(this, void 0, void 0, function* () {
            const form = new FormData();
            form.append('file', buffer, filename);
            const config = this.generateRequestConfig(requestConfig, { internalUserIdentifier: internalUserIdentifier, internalUserName: internalUserName });
            Object.assign(config.headers, form.getHeaders());
            return this.httpHandler(() => this.axios.put(`/geographical-areas/${geographicalAreaReferenceNumber}`, form, config));
        });
    }
    getFile(requestConfig, fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const config = this.generateRequestConfig(requestConfig);
                config.responseType = 'arraybuffer';
                config.transformResponse = (data) => data;
                return yield this.axios.get(`/files/${fileId}`, config);
            }
            catch (err) {
                return this.handleError(err);
            }
        });
    }
    deleteFile(requestConfig, fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.delete(`/files/${fileId}`, this.generateRequestConfig(requestConfig)));
        });
    }
    getWorkHistory(requestConfig, workReferenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${workReferenceNumber}/history`, this.generateRequestConfig(requestConfig)));
        });
    }
    getDuration(requestConfig, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/duration?startDate=${startDate}&endDate=${endDate}`, this.generateRequestConfig(requestConfig)));
        });
    }
    getWorkCategory(requestConfig, getWorkCategoryRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get('/permits/category', this.generateRequestConfig(requestConfig, getWorkCategoryRequest)));
        });
    }
    createActivity(requestConfig, activityCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/activity`, activityCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateActivity(requestConfig, activityUpdateRequest, activityReferenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/activity/${activityReferenceNumber}`, activityUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updatePermitLaneRentalAssessment(requestConfig, workReferenceNumber, permitReferenceNumber, permitLaneRentalAssessmentUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/lane-rental-assessments`, permitLaneRentalAssessmentUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getActivity(requestConfig, activityReferenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/activity/${activityReferenceNumber}`, this.generateRequestConfig(requestConfig)));
        });
    }
    cancelActivity(requestConfig, activityReferenceNumber, activityCancelRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/activity/${activityReferenceNumber}/cancel`, activityCancelRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createForwardPlan(requestConfig, forwardPlanCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/forward-plans`, forwardPlanCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getForwardPlan(requestConfig, workReferenceNumber, forwardPlanReferenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${workReferenceNumber}/forward-plans/${forwardPlanReferenceNumber}`, this.generateRequestConfig(requestConfig)));
        });
    }
    updateForwardPlan(requestConfig, workReferenceNumber, forwardPlanReferenceNumber, forwardPlanUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/forward-plans/${forwardPlanReferenceNumber}`, forwardPlanUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    cancelForwardPlan(requestConfig, workReferenceNumber, forwardPlanReferenceNumber, forwardPlanCancelRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/forward-plans/${forwardPlanReferenceNumber}/cancel`, forwardPlanCancelRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updatePermitDiscount(requestConfig, workReferenceNumber, permitReferenceNumber, permitDiscountUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/permit-discount`, permitDiscountUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createScheduledInspection(requestConfig, workReferenceNumber, scheduledInspectionCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/scheduled-inspections`, scheduledInspectionCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    cancelScheduledInspection(requestConfig, workReferenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.delete(`/works/${workReferenceNumber}/scheduled-inspections`, this.generateRequestConfig(requestConfig)));
        });
    }
    createSection81(requestConfig, section81CreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/section-81-works/section-81s`, section81CreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createHistoricFPN(requestConfig, historicFPNCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/historic-works/fixed-penalty-notices`, historicFPNCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createNonNotifiableSite(requestConfig, nonNotifiableSiteCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/non-notifiable-works/sites`, nonNotifiableSiteCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createHistoricInspection(requestConfig, historicInspectionCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/historic-works/inspections`, historicInspectionCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getSection81(requestConfig, workReferenceNumber, section81ReferenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${workReferenceNumber}/section-81s/${section81ReferenceNumber}`, this.generateRequestConfig(requestConfig)));
        });
    }
    updateSection81Status(requestConfig, workReferenceNumber, section81ReferenceNumber, updateSection81StatusRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/section-81s/${section81ReferenceNumber}/status`, updateSection81StatusRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    linkSection81ToPermit(requestConfig, workReferenceNumber, permitReferenceNumber, linkSection81ToPermitRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/link-section-81`, linkSection81ToPermitRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    acknowledgeHS2Permit(requestConfig, workReferenceNumber, permitReferenceNumber, hs2AcknowledgementRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/hs2_acknowledgement`, hs2AcknowledgementRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createSampleInspectionTarget(requestConfig, createSampleInspectionTargetRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/sample-inspection-targets', createSampleInspectionTargetRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateSampleInspectionTarget(requestConfig, sampleInspectionTargetReferenceNumber, updateSampleInspectionTargetRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/sample-inspection-targets/${sampleInspectionTargetReferenceNumber}`, updateSampleInspectionTargetRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    generateSampleInspection(requestConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/sample-inspection', null, this.generateRequestConfig(requestConfig)));
        });
    }
    httpHandler(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield request();
                if (response.data) {
                    return response.data;
                }
            }
            catch (err) {
                return this.handleError(err);
            }
        });
    }
    handleError(err) {
        err.status = err.response ? err.response.status : http_status_codes_1.INTERNAL_SERVER_ERROR;
        return Promise.reject(err);
    }
    generateRequestConfig(config, request) {
        const requestConfig = {
            headers: {
                'x-request-id': config.requestId
            }
        };
        if (config.token) {
            requestConfig.headers.token = config.token;
        }
        if (config.frontendToken) {
            requestConfig.headers.frontendToken = config.frontendToken;
        }
        if (!request) {
            requestConfig.params = {};
        }
        else {
            requestConfig.params = request;
            requestConfig.paramsSerializer = (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' });
            };
        }
        return requestConfig;
    }
}
exports.StreetManagerApiClient = StreetManagerApiClient;
