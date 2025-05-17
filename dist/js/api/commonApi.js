"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchApi(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { method, url, headers, body } = options;
        const response = yield fetch(url, {
            method,
            headers: Object.assign({ "Content-Type": "application/json" }, headers),
            body: body ? JSON.stringify(body) : undefined,
        });
        const data = (yield response.json());
        return {
            data,
            status: response.status,
            ok: response.ok,
        };
    });
}
