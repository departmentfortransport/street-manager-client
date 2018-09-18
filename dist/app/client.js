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
    isAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.axios.get('/status');
                return response.status === http_status_codes_1.OK;
            }
            catch (err) {
                return false;
            }
        });
    }
    authenticate(authenticationRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/authenticate', authenticationRequest));
        });
    }
    createPermit(token, permitCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/permits', permitCreateRequest, this.generateRequestConfig(token)));
        });
    }
    getPermit(token, referenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/permits/${referenceNumber}`, this.generateRequestConfig(token)));
        });
    }
    getPermits(token, status) {
        return __awaiter(this, void 0, void 0, function* () {
            let config = this.generateRequestConfig(token);
            if (status) {
                config.params = { status: status };
            }
            return this.httpHandler(() => this.axios.get('/permits', config));
        });
    }
    updateAssessmentStatus(token, referenceNumber, updateAssessmentStatusRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/permits/${referenceNumber}/status`, updateAssessmentStatusRequest, this.generateRequestConfig(token)));
        });
    }
    updateWorkActualStartDate(token, referenceNumber, workStartUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${referenceNumber}/start`, workStartUpdateRequest, this.generateRequestConfig(token)));
        });
    }
    updateWorkActualStopDate(token, referenceNumber, workStopUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${referenceNumber}/stop`, workStopUpdateRequest, this.generateRequestConfig(token)));
        });
    }
    updateExcavationCarriedOut(token, referenceNumber, excavationCarriedOutUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${referenceNumber}/excavation`, excavationCarriedOutUpdateRequest, this.generateRequestConfig(token)));
        });
    }
    createReinstatement(token, referenceNumber, reinstatementCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${referenceNumber}/reinstatements`, reinstatementCreateRequest, this.generateRequestConfig(token)));
        });
    }
    getReinstatement(token, referenceNumber, reinstatementId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${referenceNumber}/reinstatements/${reinstatementId}`, this.generateRequestConfig(token)));
        });
    }
    createInspection(token, referenceNumber, inspectionCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${referenceNumber}/inspection`, inspectionCreateRequest, this.generateRequestConfig(token)));
        });
    }
    uploadFile(token, file) {
        return __awaiter(this, void 0, void 0, function* () {
            let config = this.generateRequestConfig(token);
            config.headers['Content-Type'] = 'multipart/form-data';
            let form = new FormData();
            form.append('file', file.buffer);
            return this.httpHandler(() => this.axios.post('/files', form, config));
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
                err.status = err.response ? err.response.status : http_status_codes_1.INTERNAL_SERVER_ERROR;
                return Promise.reject(err);
            }
        });
    }
    generateRequestConfig(token) {
        return { headers: { Authorization: token }, params: {} };
    }
}
exports.StreetManagerApiClient = StreetManagerApiClient;
