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
class StreetManagerApiClient {
    constructor(config) {
        this.config = config;
        this.axios = axios_1.default.create({
            baseURL: this.config.baseURL,
            timeout: this.config.timeout
        });
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
    updateWorkActualStartDate(requestConfig, workReferenceNumber, workStartUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/start`, workStartUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateWorkActualStopDate(requestConfig, workReferenceNumber, workStopUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/stop`, workStopUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateExcavationCarriedOut(requestConfig, workReferenceNumber, excavationCarriedOutUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/excavation`, excavationCarriedOutUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    updateInspectionUnits(requestConfig, workReferenceNumber, inspectionUnitsUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/inspection-units`, inspectionUnitsUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    addFileToWork(requestConfig, workReferenceNumber, addFileToWorkRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/files`, addFileToWorkRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createSite(requestConfig, workReferenceNumber, reinstatementCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/sites`, reinstatementCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createReinstatement(requestConfig, workReferenceNumber, siteId, reinstatementCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/sites/${siteId}/reinstatements`, reinstatementCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    getSite(requestConfig, workReferenceNumber, siteId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${workReferenceNumber}/sites/${siteId}`, this.generateRequestConfig(requestConfig)));
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
            let form = new FormData();
            form.append('file', buffer, filename);
            let config = this.generateRequestConfig(requestConfig, { swaCode: swaCode });
            Object.assign(config.headers, form.getHeaders());
            return this.httpHandler(() => this.axios.post('/files', form, config));
        });
    }
    getFile(requestConfig, fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let config = this.generateRequestConfig(requestConfig);
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
    updatePermitLaneRentalAssessment(requestConfig, workReferenceNumber, permitReferenceNumber, permitLaneRentalAssessmentUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/laneRentalAssessment`, permitLaneRentalAssessmentUpdateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    httpHandler(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield request();
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
        let requestConfig = {
            headers: {
                'x-request-id': config.requestId
            }
        };
        if (config.token) {
            requestConfig.headers.token = config.token;
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
