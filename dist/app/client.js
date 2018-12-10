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
    createPermit(requestConfig, permitCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/permits', permitCreateRequest, this.generateRequestConfig(requestConfig)));
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
    updatePermitAssessmentStatus(requestConfig, workReferenceNumber, permitReferenceNumber, updateAssessmentStatusRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${workReferenceNumber}/permits/${permitReferenceNumber}/status`, updateAssessmentStatusRequest, this.generateRequestConfig(requestConfig)));
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
    getInspection(requestConfig, workReferenceNumber, inspectionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${workReferenceNumber}/inspections/${inspectionId}`, this.generateRequestConfig(requestConfig)));
        });
    }
    createFPN(requestConfig, workReferenceNumber, fpnCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/fixed-penalty-notices`, fpnCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    createComment(requestConfig, workReferenceNumber, commentCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${workReferenceNumber}/comments`, commentCreateRequest, this.generateRequestConfig(requestConfig)));
        });
    }
    uploadFile(requestConfig, buffer, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            let form = new FormData();
            form.append('file', buffer, filename);
            let config = this.generateRequestConfig(requestConfig);
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
    generateRequestConfig(config) {
        let headers = {};
        if (config.token) {
            headers['token'] = config.token;
        }
        headers['x-request-id'] = config.requestId;
        return { headers: headers, params: {} };
    }
}
exports.StreetManagerApiClient = StreetManagerApiClient;
