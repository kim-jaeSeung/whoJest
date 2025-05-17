var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function apiFunc(url_1) {
    return __awaiter(this, arguments, void 0, function* (url, method = "GET", data = null) {
        method = method.toUpperCase();
        console.log(data);
        try {
            const apiFunc = yield fetch(`./json/${url}.json`, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: data ? JSON.stringify(data) : null,
            });
            const apiFuncJson = yield apiFunc.json();
            console.log("데이터 확인", apiFuncJson);
            return apiFuncJson;
        }
        catch (error) {
            console.error("데이터를 받아오는데 실패했습니다.", error);
            return {};
        }
    });
}
export default apiFunc;
//
