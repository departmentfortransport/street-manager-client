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
    createPermit(permitCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/permits', permitCreateRequest));
        });
    }
    getPermit(referenceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/permits/${referenceNumber}`));
        });
    }
    getPermits(status) {
        return __awaiter(this, void 0, void 0, function* () {
            let config = status ? { params: { status: status } } : {};
            return this.httpHandler(() => this.axios.get('/permits', config));
        });
    }
    updateAssessmentStatus(referenceNumber, updateAssessmentStatusRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/permits/${referenceNumber}/status`, updateAssessmentStatusRequest));
        });
    }
    updateWorkActualStartDate(referenceNumber, workStartUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${referenceNumber}/start`, workStartUpdateRequest));
        });
    }
    updateWorkActualStopDate(referenceNumber, workStopUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${referenceNumber}/stop`, workStopUpdateRequest));
        });
    }
    updateExcavationCarriedOut(referenceNumber, excavationCarriedOutUpdateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.put(`/works/${referenceNumber}/excavation`, excavationCarriedOutUpdateRequest));
        });
    }
    createReinstatement(referenceNumber, reinstatementCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${referenceNumber}/reinstatements`, reinstatementCreateRequest));
        });
    }
    getReinstatement(referenceNumber, reinstatementId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get(`/works/${referenceNumber}/reinstatements/${reinstatementId}`));
        });
    }
    createInspection(referenceNumber, inspectionCreateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post(`/works/${referenceNumber}/inspection`, inspectionCreateRequest));
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
                err.status = err.response.status;
                return Promise.reject(err);
            }
        });
    }
}
exports.StreetManagerApiClient = StreetManagerApiClient;
