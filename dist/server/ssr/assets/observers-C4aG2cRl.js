import { i as __generator, n as __awaiter } from "./tslib.es6-BSnKF3gl.js";
import { t as getGlobalScope } from "./global-scope-C4bxlREa.js";
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/observers.js
var DEFAULT_MAX_BODY_SIZE_BYTES = 10240;
var BINARY_CONTENT_TYPE_PREFIXES = [
	"image/",
	"audio/",
	"video/",
	"application/octet-stream",
	"font/"
];
function isBinaryContentType(contentType) {
	if (!contentType) return false;
	return BINARY_CONTENT_TYPE_PREFIXES.some(function(prefix) {
		return contentType.toLowerCase().startsWith(prefix);
	});
}
function serializeRequestBody(body) {
	if (body === null || body === void 0) return void 0;
	if (typeof body === "string") return body;
	if (body instanceof URLSearchParams) return body.toString();
	if (body instanceof FormData) {
		var parts_1 = [];
		body.forEach(function(value, key) {
			parts_1.push("".concat(key, "=").concat(typeof value === "string" ? value : "[File]"));
		});
		return parts_1.join("&");
	}
}
function truncateToByteLimit(str, maxBytes) {
	if (new Blob([str]).size <= maxBytes) return {
		value: str,
		truncated: false
	};
	var lo = 0;
	var hi = Math.min(str.length, maxBytes);
	while (lo < hi) {
		var mid = Math.ceil((lo + hi) / 2);
		if (new Blob([str.slice(0, mid)]).size <= maxBytes) lo = mid;
		else hi = mid - 1;
	}
	if (lo > 0 && str.charCodeAt(lo - 1) >= 55296 && str.charCodeAt(lo - 1) <= 56319) lo -= 1;
	return {
		value: str.slice(0, lo),
		truncated: true
	};
}
var NetworkObservers = function() {
	function NetworkObservers() {
		this.fetchObserver = null;
	}
	NetworkObservers.prototype.start = function(eventCallback, networkConfig) {
		this.eventCallback = eventCallback;
		this.networkConfig = networkConfig;
		this.observeFetch();
	};
	NetworkObservers.prototype.stop = function() {
		var _a;
		(_a = this.fetchObserver) === null || _a === void 0 || _a.call(this);
		this.fetchObserver = null;
		this.eventCallback = void 0;
		this.networkConfig = void 0;
	};
	NetworkObservers.prototype.notifyEvent = function(event) {
		var _a;
		(_a = this.eventCallback) === null || _a === void 0 || _a.call(this, event);
	};
	NetworkObservers.prototype.observeFetch = function() {
		var _this = this;
		var globalScope = getGlobalScope();
		if (!globalScope) return;
		var originalFetch = globalScope.fetch;
		if (!originalFetch) return;
		globalScope.fetch = function(input, init) {
			return __awaiter(_this, void 0, void 0, function() {
				var startTime, requestEvent, bodyConfig, serialized, maxBytes, response, endTime, headers_1, contentType, cloned, error_1, endTime, typedError;
				var _this = this;
				var _a, _b;
				return __generator(this, function(_c) {
					switch (_c.label) {
						case 0:
							startTime = Date.now();
							requestEvent = {
								timestamp: startTime,
								type: "fetch",
								method: (init === null || init === void 0 ? void 0 : init.method) || "GET",
								url: input.toString(),
								requestHeaders: init === null || init === void 0 ? void 0 : init.headers
							};
							bodyConfig = (_a = this.networkConfig) === null || _a === void 0 ? void 0 : _a.body;
							if (bodyConfig === null || bodyConfig === void 0 ? void 0 : bodyConfig.request) {
								serialized = serializeRequestBody(init === null || init === void 0 ? void 0 : init.body);
								if (serialized !== void 0) {
									maxBytes = (_b = bodyConfig.maxBodySizeBytes) !== null && _b !== void 0 ? _b : DEFAULT_MAX_BODY_SIZE_BYTES;
									requestEvent.requestBody = truncateToByteLimit(serialized, maxBytes).value;
								}
							}
							_c.label = 1;
						case 1:
							_c.trys.push([
								1,
								3,
								,
								4
							]);
							return [4, originalFetch(input, init)];
						case 2:
							response = _c.sent();
							endTime = Date.now();
							requestEvent.status = response.status;
							requestEvent.duration = endTime - startTime;
							headers_1 = {};
							response.headers.forEach(function(value, key) {
								headers_1[key] = value;
							});
							requestEvent.responseHeaders = headers_1;
							if (bodyConfig === null || bodyConfig === void 0 ? void 0 : bodyConfig.response) {
								contentType = headers_1["content-type"] || null;
								if (isBinaryContentType(contentType)) {
									requestEvent.responseBodyStatus = "skipped_binary";
									this.notifyEvent(requestEvent);
								} else {
									cloned = response.clone();
									cloned.text().then(function(text) {
										var _a;
										var _b = truncateToByteLimit(text, (_a = bodyConfig.maxBodySizeBytes) !== null && _a !== void 0 ? _a : DEFAULT_MAX_BODY_SIZE_BYTES), value = _b.value, truncated = _b.truncated;
										requestEvent.responseBody = value;
										requestEvent.responseBodyStatus = truncated ? "truncated" : "captured";
										_this.notifyEvent(requestEvent);
									}, function() {
										requestEvent.responseBodyStatus = "error";
										_this.notifyEvent(requestEvent);
									});
								}
							} else this.notifyEvent(requestEvent);
							return [2, response];
						case 3:
							error_1 = _c.sent();
							endTime = Date.now();
							requestEvent.duration = endTime - startTime;
							typedError = error_1;
							requestEvent.error = {
								name: typedError.name || "UnknownError",
								message: typedError.message || "An unknown error occurred"
							};
							this.notifyEvent(requestEvent);
							throw error_1;
						case 4: return [2];
					}
				});
			});
		};
		this.fetchObserver = function() {
			globalScope.fetch = originalFetch;
		};
	};
	return NetworkObservers;
}();
//#endregion
export { NetworkObservers };
