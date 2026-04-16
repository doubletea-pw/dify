import { f as __commonJSMin, g as __require, v as __toESM } from "../index.js";
import { b as useTranslation, d as isElement, f as isHTMLElement, g as isShadowRoot, l as getWindow, m as isNode, x as require_shim } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { D as MARKETPLACE_API_PREFIX, F as PASSPORT_HEADER_NAME, I as PASSPORT_LOCAL_STORAGE_NAME, J as WEB_APP_SHARE_CODE_HEADER_NAME, R as PUBLIC_API_PREFIX, S as IS_CE_EDITION, a as API_PREFIX, c as CSRF_COOKIE_NAME, l as CSRF_HEADER_NAME, o as APP_VERSION, t as ACCESS_TOKEN_LOCAL_STORAGE_NAME, w as IS_MARKETPLACE } from "./config-Dopncj5R.js";
import { r as tabbable } from "./index.esm-D3POqxav.js";
import { b as useStableCallback, c as ownerVisuallyHidden, d as NOOP, f as isReactVersionAtLeast, g as formatErrorMessage, m as useButton, n as BASE_UI_SWIPE_IGNORE_SELECTOR, o as LEGACY_SWIPE_IGNORE_SELECTOR, t as useRenderElement, u as EMPTY_OBJECT, v as useIsoLayoutEffect, x as useRefWithInit, y as SafeReact } from "./useRenderElement-BTEjG3-d.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import { t as basePath } from "./var-DPpHtpXT.js";
import * as React$1 from "react";
import * as ReactDOM$1 from "react-dom";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.4/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React$2 = __require("react"), shim = require_shim();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React$2.useRef, useEffect = React$2.useEffect, useMemo = React$2.useMemo, useDebugValue = React$2.useDebugValue;
	exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
		var instRef = useRef(null);
		if (null === instRef.current) {
			var inst = {
				hasValue: !1,
				value: null
			};
			instRef.current = inst;
		} else inst = instRef.current;
		instRef = useMemo(function() {
			function memoizedSelector(nextSnapshot) {
				if (!hasMemo) {
					hasMemo = !0;
					memoizedSnapshot = nextSnapshot;
					nextSnapshot = selector(nextSnapshot);
					if (void 0 !== isEqual && inst.hasValue) {
						var currentSelection = inst.value;
						if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
					}
					return memoizedSelection = nextSnapshot;
				}
				currentSelection = memoizedSelection;
				if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
				var nextSelection = selector(nextSnapshot);
				if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
				memoizedSnapshot = nextSnapshot;
				return memoizedSelection = nextSelection;
			}
			var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
			return [function() {
				return memoizedSelector(getSnapshot());
			}, null === maybeGetServerSnapshot ? void 0 : function() {
				return memoizedSelector(maybeGetServerSnapshot());
			}];
		}, [
			getSnapshot,
			getServerSnapshot,
			selector,
			isEqual
		]);
		var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
		useEffect(function() {
			inst.hasValue = !0;
			inst.value = value;
		}, [value]);
		useDebugValue(value);
		return value;
	};
}));
//#endregion
//#region node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.4/node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_with_selector_production();
}));
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/string/escape.mjs
var htmlEscapes = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
function escape$1(str) {
	return str.replace(/[&<>"']/g, (match) => htmlEscapes[match]);
}
//#endregion
//#region utils/index.ts
var sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
async function asyncRunSafe(fn) {
	try {
		return [null, await fn];
	} catch (e) {
		return [e || /* @__PURE__ */ new Error("unknown error")];
	}
}
var getTextWidthWithCanvas = (text, font) => {
	const ctx = document.createElement("canvas").getContext("2d");
	if (ctx) {
		ctx.font = font ?? "12px Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"";
		return Number(ctx.measureText(text).width.toFixed(2));
	}
	return 0;
};
var getPurifyHref = (href) => {
	if (!href) return "";
	return escape$1(href);
};
async function fetchWithRetry(fn, retries = 3) {
	const [error, res] = await asyncRunSafe(fn);
	if (error) if (retries > 0) return await fetchWithRetry(fn, retries - 1);
	else {
		if (error instanceof Error) return [error];
		return [/* @__PURE__ */ new Error("unknown error")];
	}
	else return [null, res];
}
var correctModelProvider = (provider) => {
	if (!provider) return "";
	if (provider.includes("/")) return provider;
	if (["google"].includes(provider)) return "langgenius/gemini/google";
	return `langgenius/${provider}/${provider}`;
};
var correctToolProvider = (provider, toolInCollectionList) => {
	if (!provider) return "";
	if (toolInCollectionList) return provider;
	if (provider.includes("/")) return provider;
	if ([
		"stepfun",
		"jina",
		"siliconflow",
		"gitee_ai"
	].includes(provider)) return `langgenius/${provider}_tool/${provider}`;
	return `langgenius/${provider}/${provider}`;
};
var canFindTool = (providerId, oldToolId) => {
	return providerId === oldToolId || providerId === `langgenius/${oldToolId}/${oldToolId}` || providerId === `langgenius/${oldToolId}_tool/${oldToolId}`;
};
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/visuallyHidden.js
var visuallyHiddenBase = {
	clipPath: "inset(50%)",
	overflow: "hidden",
	whiteSpace: "nowrap",
	border: 0,
	padding: 0,
	width: 1,
	height: 1,
	margin: -1
};
var visuallyHidden = {
	...visuallyHiddenBase,
	position: "fixed",
	top: 0,
	left: 0
};
var visuallyHiddenInput = {
	...visuallyHiddenBase,
	position: "absolute"
};
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useId.js
var globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
	const [defaultId, setDefaultId] = React$1.useState(idOverride);
	const id = idOverride || defaultId;
	React$1.useEffect(() => {
		if (defaultId == null) {
			globalId += 1;
			setDefaultId(`${prefix}-${globalId}`);
		}
	}, [defaultId, prefix]);
	return id;
}
var maybeReactUseId = SafeReact.useId;
/**
*
* @example <div id={useId()} />
* @param idOverride
* @returns {string}
*/
function useId$1(idOverride, prefix) {
	if (maybeReactUseId !== void 0) {
		const reactId = maybeReactUseId();
		return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
	}
	return useGlobalId(idOverride, prefix);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/reason-parts.js
var none = "none";
var triggerPress = "trigger-press";
var triggerHover = "trigger-hover";
var triggerFocus = "trigger-focus";
var outsidePress = "outside-press";
var itemPress = "item-press";
var closePress = "close-press";
var trackPress = "track-press";
var incrementPress = "increment-press";
var decrementPress = "decrement-press";
var inputChange = "input-change";
var inputClear = "input-clear";
var inputBlur = "input-blur";
var inputPaste = "input-paste";
var focusOut = "focus-out";
var escapeKey = "escape-key";
var listNavigation = "list-navigation";
var keyboard = "keyboard";
var drag = "drag";
var cancelOpen = "cancel-open";
var siblingOpen = "sibling-open";
var disabled = "disabled";
var imperativeAction = "imperative-action";
var windowResize = "window-resize";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js
/**
* Maps a change `reason` string to the corresponding native event type.
*/
/**
* Details of custom change events emitted by Base UI components.
*/
/**
* Details of custom generic events emitted by Base UI components.
*/
/**
* Creates a Base UI event details object with the given reason and utilities
* for preventing Base UI's internal event handling.
*/
function createChangeEventDetails(reason, event, trigger, customProperties) {
	let canceled = false;
	let allowPropagation = false;
	const custom = customProperties ?? EMPTY_OBJECT;
	return {
		reason,
		event: event ?? new Event("base-ui"),
		cancel() {
			canceled = true;
		},
		allowPropagation() {
			allowPropagation = true;
		},
		get isCanceled() {
			return canceled;
		},
		get isPropagationAllowed() {
			return allowPropagation;
		},
		trigger,
		...custom
	};
}
function createGenericEventDetails(reason, event, customProperties) {
	const custom = customProperties ?? EMPTY_OBJECT;
	return {
		reason,
		event: event ?? new Event("base-ui"),
		...custom
	};
}
//#endregion
//#region node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs
/*! js-cookie v3.0.5 | MIT */
function assign(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];
		for (var key in source) target[key] = source[key];
	}
	return target;
}
var defaultConverter = {
	read: function(value) {
		if (value[0] === "\"") value = value.slice(1, -1);
		return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
	},
	write: function(value) {
		return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
	}
};
function init(converter, defaultAttributes) {
	function set(name, value, attributes) {
		if (typeof document === "undefined") return;
		attributes = assign({}, defaultAttributes, attributes);
		if (typeof attributes.expires === "number") attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
		if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
		name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
		var stringifiedAttributes = "";
		for (var attributeName in attributes) {
			if (!attributes[attributeName]) continue;
			stringifiedAttributes += "; " + attributeName;
			if (attributes[attributeName] === true) continue;
			stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
		}
		return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
	}
	function get(name) {
		if (typeof document === "undefined" || arguments.length && !name) return;
		var cookies = document.cookie ? document.cookie.split("; ") : [];
		var jar = {};
		for (var i = 0; i < cookies.length; i++) {
			var parts = cookies[i].split("=");
			var value = parts.slice(1).join("=");
			try {
				var found = decodeURIComponent(parts[0]);
				jar[found] = converter.read(value, found);
				if (name === found) break;
			} catch (e) {}
		}
		return name ? jar[name] : jar;
	}
	return Object.create({
		set,
		get,
		remove: function(name, attributes) {
			set(name, "", assign({}, attributes, { expires: -1 }));
		},
		withAttributes: function(attributes) {
			return init(this.converter, assign({}, this.attributes, attributes));
		},
		withConverter: function(converter) {
			return init(assign({}, this.converter, converter), this.attributes);
		}
	}, {
		attributes: { value: Object.freeze(defaultAttributes) },
		converter: { value: Object.freeze(converter) }
	});
}
var api = init(defaultConverter, { path: "/" });
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/HTTPError.js
var HTTPError = class extends Error {
	response;
	request;
	options;
	constructor(response, request, options) {
		const status = `${response.status || response.status === 0 ? response.status : ""} ${response.statusText ?? ""}`.trim();
		const reason = status ? `status code ${status}` : "an unknown error";
		super(`Request failed with ${reason}: ${request.method} ${request.url}`);
		this.name = "HTTPError";
		this.response = response;
		this.request = request;
		this.options = options;
	}
};
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/NonError.js
/**
Wrapper for non-Error values that were thrown.

In JavaScript, any value can be thrown (not just Error instances). This class wraps such values to ensure consistent error handling.
*/
var NonError = class extends Error {
	name = "NonError";
	value;
	constructor(value) {
		let message = "Non-error value was thrown";
		try {
			if (typeof value === "string") message = value;
			else if (value && typeof value === "object" && "message" in value && typeof value.message === "string") message = value.message;
		} catch {}
		super(message);
		this.value = value;
	}
};
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/ForceRetryError.js
/**
Internal error used to signal a forced retry from afterResponse hooks.
This is thrown when a user returns ky.retry() from an afterResponse hook.
*/
var ForceRetryError = class extends Error {
	name = "ForceRetryError";
	customDelay;
	code;
	customRequest;
	constructor(options) {
		const cause = options?.cause ? options.cause instanceof Error ? options.cause : new NonError(options.cause) : void 0;
		super(options?.code ? `Forced retry: ${options.code}` : "Forced retry", cause ? { cause } : void 0);
		this.customDelay = options?.delay;
		this.code = options?.code;
		this.customRequest = options?.request;
	}
};
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/constants.js
var supportsRequestStreams = (() => {
	let duplexAccessed = false;
	let hasContentType = false;
	const supportsReadableStream = typeof globalThis.ReadableStream === "function";
	const supportsRequest = typeof globalThis.Request === "function";
	if (supportsReadableStream && supportsRequest) try {
		hasContentType = new globalThis.Request("https://empty.invalid", {
			body: new globalThis.ReadableStream(),
			method: "POST",
			get duplex() {
				duplexAccessed = true;
				return "half";
			}
		}).headers.has("Content-Type");
	} catch (error) {
		if (error instanceof Error && error.message === "unsupported BodyInit type") return false;
		throw error;
	}
	return duplexAccessed && !hasContentType;
})();
var supportsAbortController = typeof globalThis.AbortController === "function";
var supportsAbortSignal = typeof globalThis.AbortSignal === "function" && typeof globalThis.AbortSignal.any === "function";
var supportsResponseStreams = typeof globalThis.ReadableStream === "function";
var supportsFormData = typeof globalThis.FormData === "function";
var requestMethods = [
	"get",
	"post",
	"put",
	"patch",
	"head",
	"delete"
];
var validate = () => void 0;
validate();
var responseTypes = {
	json: "application/json",
	text: "text/*",
	formData: "multipart/form-data",
	arrayBuffer: "*/*",
	blob: "*/*",
	bytes: "*/*"
};
var maxSafeTimeout = 2147483647;
var usualFormBoundarySize = new TextEncoder().encode("------WebKitFormBoundaryaxpyiPgbbPti10Rw").length;
var stop = Symbol("stop");
/**
Marker returned by ky.retry() to signal a forced retry from afterResponse hooks.
*/
var RetryMarker = class {
	options;
	constructor(options) {
		this.options = options;
	}
};
/**
Force a retry from an `afterResponse` hook.

This allows you to retry a request based on the response content, even if the response has a successful status code. The retry will respect the `retry.limit` option and skip the `shouldRetry` check. The forced retry is observable in `beforeRetry` hooks, where the error will be a `ForceRetryError`.

@param options - Optional configuration for the retry.

@example
```
import ky, {isForceRetryError} from 'ky';

const api = ky.extend({
hooks: {
afterResponse: [
async (request, options, response) => {
// Retry based on response body content
if (response.status === 200) {
const data = await response.clone().json();

// Simple retry with default delay
if (data.error?.code === 'TEMPORARY_ERROR') {
return ky.retry();
}

// Retry with custom delay from API response
if (data.error?.code === 'RATE_LIMIT') {
return ky.retry({
delay: data.error.retryAfter * 1000,
code: 'RATE_LIMIT'
});
}

// Retry with a modified request (e.g., fallback endpoint)
if (data.error?.code === 'FALLBACK_TO_BACKUP') {
return ky.retry({
request: new Request('https://backup-api.com/endpoint', {
method: request.method,
headers: request.headers,
}),
code: 'BACKUP_ENDPOINT'
});
}

// Retry with refreshed authentication
if (data.error?.code === 'TOKEN_REFRESH' && data.newToken) {
return ky.retry({
request: new Request(request, {
headers: {
...Object.fromEntries(request.headers),
'Authorization': `Bearer ${data.newToken}`
}
}),
code: 'TOKEN_REFRESHED'
});
}

// Retry with cause to preserve error chain
try {
validateResponse(data);
} catch (error) {
return ky.retry({
code: 'VALIDATION_FAILED',
cause: error
});
}
}
}
],
beforeRetry: [
({error, retryCount}) => {
// Observable in beforeRetry hooks
if (isForceRetryError(error)) {
console.log(`Forced retry #${retryCount}: ${error.message}`);
// Example output: "Forced retry #1: Forced retry: RATE_LIMIT"
}
}
]
}
});

const response = await api.get('https://example.com/api');
```
*/
var retry = (options) => new RetryMarker(options);
var kyOptionKeys = {
	json: true,
	parseJson: true,
	stringifyJson: true,
	searchParams: true,
	prefixUrl: true,
	retry: true,
	timeout: true,
	hooks: true,
	throwHttpErrors: true,
	onDownloadProgress: true,
	onUploadProgress: true,
	fetch: true,
	context: true
};
var vendorSpecificOptions = { next: true };
var requestOptionsRegistry = {
	method: true,
	headers: true,
	body: true,
	mode: true,
	credentials: true,
	cache: true,
	redirect: true,
	referrer: true,
	referrerPolicy: true,
	integrity: true,
	keepalive: true,
	signal: true,
	window: true,
	duplex: true
};
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/body.js
var getBodySize = (body) => {
	if (!body) return 0;
	if (body instanceof FormData) {
		let size = 0;
		for (const [key, value] of body) {
			size += usualFormBoundarySize;
			size += new TextEncoder().encode(`Content-Disposition: form-data; name="${key}"`).length;
			size += typeof value === "string" ? new TextEncoder().encode(value).length : value.size;
		}
		return size;
	}
	if (body instanceof Blob) return body.size;
	if (body instanceof ArrayBuffer) return body.byteLength;
	if (typeof body === "string") return new TextEncoder().encode(body).length;
	if (body instanceof URLSearchParams) return new TextEncoder().encode(body.toString()).length;
	if ("byteLength" in body) return body.byteLength;
	if (typeof body === "object" && body !== null) try {
		const jsonString = JSON.stringify(body);
		return new TextEncoder().encode(jsonString).length;
	} catch {
		return 0;
	}
	return 0;
};
var withProgress = (stream, totalBytes, onProgress) => {
	let previousChunk;
	let transferredBytes = 0;
	return stream.pipeThrough(new TransformStream({
		transform(currentChunk, controller) {
			controller.enqueue(currentChunk);
			if (previousChunk) {
				transferredBytes += previousChunk.byteLength;
				let percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
				if (percent >= 1) percent = 1 - Number.EPSILON;
				onProgress?.({
					percent,
					totalBytes: Math.max(totalBytes, transferredBytes),
					transferredBytes
				}, previousChunk);
			}
			previousChunk = currentChunk;
		},
		flush() {
			if (previousChunk) {
				transferredBytes += previousChunk.byteLength;
				onProgress?.({
					percent: 1,
					totalBytes: Math.max(totalBytes, transferredBytes),
					transferredBytes
				}, previousChunk);
			}
		}
	}));
};
var streamResponse = (response, onDownloadProgress) => {
	if (!response.body) return response;
	if (response.status === 204) return new Response(null, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});
	const totalBytes = Math.max(0, Number(response.headers.get("content-length")) || 0);
	return new Response(withProgress(response.body, totalBytes, onDownloadProgress), {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});
};
var streamRequest = (request, onUploadProgress, originalBody) => {
	if (!request.body) return request;
	const totalBytes = getBodySize(originalBody ?? request.body);
	return new Request(request, {
		duplex: "half",
		body: withProgress(request.body, totalBytes, onUploadProgress)
	});
};
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/is.js
var isObject = (value) => value !== null && typeof value === "object";
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/merge.js
var validateAndMerge = (...sources) => {
	for (const source of sources) if ((!isObject(source) || Array.isArray(source)) && source !== void 0) throw new TypeError("The `options` argument must be an object");
	return deepMerge({}, ...sources);
};
var mergeHeaders = (source1 = {}, source2 = {}) => {
	const result = new globalThis.Headers(source1);
	const isHeadersInstance = source2 instanceof globalThis.Headers;
	const source = new globalThis.Headers(source2);
	for (const [key, value] of source.entries()) if (isHeadersInstance && value === "undefined" || value === void 0) result.delete(key);
	else result.set(key, value);
	return result;
};
function newHookValue(original, incoming, property) {
	return Object.hasOwn(incoming, property) && incoming[property] === void 0 ? [] : deepMerge(original[property] ?? [], incoming[property] ?? []);
}
var mergeHooks = (original = {}, incoming = {}) => ({
	beforeRequest: newHookValue(original, incoming, "beforeRequest"),
	beforeRetry: newHookValue(original, incoming, "beforeRetry"),
	afterResponse: newHookValue(original, incoming, "afterResponse"),
	beforeError: newHookValue(original, incoming, "beforeError")
});
var appendSearchParameters = (target, source) => {
	const result = new URLSearchParams();
	for (const input of [target, source]) {
		if (input === void 0) continue;
		if (input instanceof URLSearchParams) for (const [key, value] of input.entries()) result.append(key, value);
		else if (Array.isArray(input)) for (const pair of input) {
			if (!Array.isArray(pair) || pair.length !== 2) throw new TypeError("Array search parameters must be provided in [[key, value], ...] format");
			result.append(String(pair[0]), String(pair[1]));
		}
		else if (isObject(input)) {
			for (const [key, value] of Object.entries(input)) if (value !== void 0) result.append(key, String(value));
		} else {
			const parameters = new URLSearchParams(input);
			for (const [key, value] of parameters.entries()) result.append(key, value);
		}
	}
	return result;
};
var deepMerge = (...sources) => {
	let returnValue = {};
	let headers = {};
	let hooks = {};
	let searchParameters;
	const signals = [];
	for (const source of sources) if (Array.isArray(source)) {
		if (!Array.isArray(returnValue)) returnValue = [];
		returnValue = [...returnValue, ...source];
	} else if (isObject(source)) {
		for (let [key, value] of Object.entries(source)) {
			if (key === "signal" && value instanceof globalThis.AbortSignal) {
				signals.push(value);
				continue;
			}
			if (key === "context") {
				if (value !== void 0 && value !== null && (!isObject(value) || Array.isArray(value))) throw new TypeError("The `context` option must be an object");
				returnValue = {
					...returnValue,
					context: value === void 0 || value === null ? {} : {
						...returnValue.context,
						...value
					}
				};
				continue;
			}
			if (key === "searchParams") {
				if (value === void 0 || value === null) searchParameters = void 0;
				else searchParameters = searchParameters === void 0 ? value : appendSearchParameters(searchParameters, value);
				continue;
			}
			if (isObject(value) && key in returnValue) value = deepMerge(returnValue[key], value);
			returnValue = {
				...returnValue,
				[key]: value
			};
		}
		if (isObject(source.hooks)) {
			hooks = mergeHooks(hooks, source.hooks);
			returnValue.hooks = hooks;
		}
		if (isObject(source.headers)) {
			headers = mergeHeaders(headers, source.headers);
			returnValue.headers = headers;
		}
	}
	if (searchParameters !== void 0) returnValue.searchParams = searchParameters;
	if (signals.length > 0) if (signals.length === 1) returnValue.signal = signals[0];
	else if (supportsAbortSignal) returnValue.signal = AbortSignal.any(signals);
	else returnValue.signal = signals.at(-1);
	return returnValue;
};
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/normalize.js
var normalizeRequestMethod = (input) => requestMethods.includes(input) ? input.toUpperCase() : input;
var defaultRetryOptions = {
	limit: 2,
	methods: [
		"get",
		"put",
		"head",
		"delete",
		"options",
		"trace"
	],
	statusCodes: [
		408,
		413,
		429,
		500,
		502,
		503,
		504
	],
	afterStatusCodes: [
		413,
		429,
		503
	],
	maxRetryAfter: Number.POSITIVE_INFINITY,
	backoffLimit: Number.POSITIVE_INFINITY,
	delay: (attemptCount) => .3 * 2 ** (attemptCount - 1) * 1e3,
	jitter: void 0,
	retryOnTimeout: false
};
var normalizeRetryOptions = (retry = {}) => {
	if (typeof retry === "number") return {
		...defaultRetryOptions,
		limit: retry
	};
	if (retry.methods && !Array.isArray(retry.methods)) throw new Error("retry.methods must be an array");
	retry.methods &&= retry.methods.map((method) => method.toLowerCase());
	if (retry.statusCodes && !Array.isArray(retry.statusCodes)) throw new Error("retry.statusCodes must be an array");
	const normalizedRetry = Object.fromEntries(Object.entries(retry).filter(([, value]) => value !== void 0));
	return {
		...defaultRetryOptions,
		...normalizedRetry
	};
};
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/errors/TimeoutError.js
var TimeoutError = class extends Error {
	request;
	constructor(request) {
		super(`Request timed out: ${request.method} ${request.url}`);
		this.name = "TimeoutError";
		this.request = request;
	}
};
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/timeout.js
async function timeout(request, init, abortController, options) {
	return new Promise((resolve, reject) => {
		const timeoutId = setTimeout(() => {
			if (abortController) abortController.abort();
			reject(new TimeoutError(request));
		}, options.timeout);
		options.fetch(request, init).then(resolve).catch(reject).then(() => {
			clearTimeout(timeoutId);
		});
	});
}
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/delay.js
async function delay(ms, { signal }) {
	return new Promise((resolve, reject) => {
		if (signal) {
			signal.throwIfAborted();
			signal.addEventListener("abort", abortHandler, { once: true });
		}
		function abortHandler() {
			clearTimeout(timeoutId);
			reject(signal.reason);
		}
		const timeoutId = setTimeout(() => {
			signal?.removeEventListener("abort", abortHandler);
			resolve();
		}, ms);
	});
}
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/options.js
var findUnknownOptions = (request, options) => {
	const unknownOptions = {};
	for (const key in options) {
		if (!Object.hasOwn(options, key)) continue;
		if (!(key in requestOptionsRegistry) && !(key in kyOptionKeys) && (!(key in request) || key in vendorSpecificOptions)) unknownOptions[key] = options[key];
	}
	return unknownOptions;
};
var hasSearchParameters = (search) => {
	if (search === void 0) return false;
	if (Array.isArray(search)) return search.length > 0;
	if (search instanceof URLSearchParams) return search.size > 0;
	if (typeof search === "object") return Object.keys(search).length > 0;
	if (typeof search === "string") return search.trim().length > 0;
	return Boolean(search);
};
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/utils/type-guards.js
/**
Type guard to check if an error is an HTTPError.

@param error - The error to check
@returns `true` if the error is an HTTPError, `false` otherwise

@example
```
import ky, {isHTTPError} from 'ky';
try {
const response = await ky.get('/api/data');
} catch (error) {
if (isHTTPError(error)) {
console.log('HTTP error status:', error.response.status);
}
}
```
*/
function isHTTPError(error) {
	return error instanceof HTTPError || error?.name === HTTPError.name;
}
/**
Type guard to check if an error is a TimeoutError.

@param error - The error to check
@returns `true` if the error is a TimeoutError, `false` otherwise

@example
```
import ky, {isTimeoutError} from 'ky';
try {
const response = await ky.get('/api/data', { timeout: 1000 });
} catch (error) {
if (isTimeoutError(error)) {
console.log('Request timed out:', error.request.url);
}
}
```
*/
function isTimeoutError(error) {
	return error instanceof TimeoutError || error?.name === TimeoutError.name;
}
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/core/Ky.js
var Ky = class Ky {
	static create(input, options) {
		const ky = new Ky(input, options);
		const function_ = async () => {
			if (typeof ky.#options.timeout === "number" && ky.#options.timeout > 2147483647) throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
			await Promise.resolve();
			let response = await ky.#fetch();
			for (const hook of ky.#options.hooks.afterResponse) {
				const clonedResponse = ky.#decorateResponse(response.clone());
				let modifiedResponse;
				try {
					modifiedResponse = await hook(ky.request, ky.#getNormalizedOptions(), clonedResponse, { retryCount: ky.#retryCount });
				} catch (error) {
					ky.#cancelResponseBody(clonedResponse);
					ky.#cancelResponseBody(response);
					throw error;
				}
				if (modifiedResponse instanceof RetryMarker) {
					ky.#cancelResponseBody(clonedResponse);
					ky.#cancelResponseBody(response);
					throw new ForceRetryError(modifiedResponse.options);
				}
				const nextResponse = modifiedResponse instanceof globalThis.Response ? modifiedResponse : response;
				if (clonedResponse !== nextResponse) ky.#cancelResponseBody(clonedResponse);
				if (response !== nextResponse) ky.#cancelResponseBody(response);
				response = nextResponse;
			}
			ky.#decorateResponse(response);
			if (!response.ok && (typeof ky.#options.throwHttpErrors === "function" ? ky.#options.throwHttpErrors(response.status) : ky.#options.throwHttpErrors)) {
				let error = new HTTPError(response, ky.request, ky.#getNormalizedOptions());
				for (const hook of ky.#options.hooks.beforeError) error = await hook(error, { retryCount: ky.#retryCount });
				throw error;
			}
			if (ky.#options.onDownloadProgress) {
				if (typeof ky.#options.onDownloadProgress !== "function") throw new TypeError("The `onDownloadProgress` option must be a function");
				if (!supportsResponseStreams) throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
				const progressResponse = response.clone();
				ky.#cancelResponseBody(response);
				return streamResponse(progressResponse, ky.#options.onDownloadProgress);
			}
			return response;
		};
		const result = ky.#retry(function_).finally(() => {
			const originalRequest = ky.#originalRequest;
			ky.#cancelBody(originalRequest?.body ?? void 0);
			ky.#cancelBody(ky.request.body ?? void 0);
		});
		for (const [type, mimeType] of Object.entries(responseTypes)) {
			if (type === "bytes" && typeof globalThis.Response?.prototype?.bytes !== "function") continue;
			result[type] = async () => {
				ky.request.headers.set("accept", ky.request.headers.get("accept") || mimeType);
				const response = await result;
				if (type === "json") {
					if (response.status === 204) return "";
					const text = await response.text();
					if (text === "") return "";
					if (options.parseJson) return options.parseJson(text);
					return JSON.parse(text);
				}
				return response[type]();
			};
		}
		return result;
	}
	static #normalizeSearchParams(searchParams) {
		if (searchParams && typeof searchParams === "object" && !Array.isArray(searchParams) && !(searchParams instanceof URLSearchParams)) return Object.fromEntries(Object.entries(searchParams).filter(([, value]) => value !== void 0));
		return searchParams;
	}
	request;
	#abortController;
	#retryCount = 0;
	#input;
	#options;
	#originalRequest;
	#userProvidedAbortSignal;
	#cachedNormalizedOptions;
	constructor(input, options = {}) {
		this.#input = input;
		this.#options = {
			...options,
			headers: mergeHeaders(this.#input.headers, options.headers),
			hooks: mergeHooks({
				beforeRequest: [],
				beforeRetry: [],
				beforeError: [],
				afterResponse: []
			}, options.hooks),
			method: normalizeRequestMethod(options.method ?? this.#input.method ?? "GET"),
			prefixUrl: String(options.prefixUrl || ""),
			retry: normalizeRetryOptions(options.retry),
			throwHttpErrors: options.throwHttpErrors ?? true,
			timeout: options.timeout ?? 1e4,
			fetch: options.fetch ?? globalThis.fetch.bind(globalThis),
			context: options.context ?? {}
		};
		if (typeof this.#input !== "string" && !(this.#input instanceof URL || this.#input instanceof globalThis.Request)) throw new TypeError("`input` must be a string, URL, or Request");
		if (this.#options.prefixUrl && typeof this.#input === "string") {
			if (this.#input.startsWith("/")) throw new Error("`input` must not begin with a slash when using `prefixUrl`");
			if (!this.#options.prefixUrl.endsWith("/")) this.#options.prefixUrl += "/";
			this.#input = this.#options.prefixUrl + this.#input;
		}
		if (supportsAbortController && supportsAbortSignal) {
			this.#userProvidedAbortSignal = this.#options.signal ?? this.#input.signal;
			this.#abortController = new globalThis.AbortController();
			this.#options.signal = this.#userProvidedAbortSignal ? AbortSignal.any([this.#userProvidedAbortSignal, this.#abortController.signal]) : this.#abortController.signal;
		}
		if (supportsRequestStreams) this.#options.duplex = "half";
		if (this.#options.json !== void 0) {
			this.#options.body = this.#options.stringifyJson?.(this.#options.json) ?? JSON.stringify(this.#options.json);
			this.#options.headers.set("content-type", this.#options.headers.get("content-type") ?? "application/json");
		}
		const userProvidedContentType = options.headers && new globalThis.Headers(options.headers).has("content-type");
		if (this.#input instanceof globalThis.Request && (supportsFormData && this.#options.body instanceof globalThis.FormData || this.#options.body instanceof URLSearchParams) && !userProvidedContentType) this.#options.headers.delete("content-type");
		this.request = new globalThis.Request(this.#input, this.#options);
		if (hasSearchParameters(this.#options.searchParams)) {
			const searchParams = "?" + (typeof this.#options.searchParams === "string" ? this.#options.searchParams.replace(/^\?/, "") : new URLSearchParams(Ky.#normalizeSearchParams(this.#options.searchParams)).toString());
			const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
			this.request = new globalThis.Request(url, this.#options);
		}
		if (this.#options.onUploadProgress) {
			if (typeof this.#options.onUploadProgress !== "function") throw new TypeError("The `onUploadProgress` option must be a function");
			if (!supportsRequestStreams) throw new Error("Request streams are not supported in your environment. The `duplex` option for `Request` is not available.");
			this.request = this.#wrapRequestWithUploadProgress(this.request, this.#options.body ?? void 0);
		}
	}
	#calculateDelay() {
		const retryDelay = this.#options.retry.delay(this.#retryCount);
		let jitteredDelay = retryDelay;
		if (this.#options.retry.jitter === true) jitteredDelay = Math.random() * retryDelay;
		else if (typeof this.#options.retry.jitter === "function") {
			jitteredDelay = this.#options.retry.jitter(retryDelay);
			if (!Number.isFinite(jitteredDelay) || jitteredDelay < 0) jitteredDelay = retryDelay;
		}
		const backoffLimit = this.#options.retry.backoffLimit ?? Number.POSITIVE_INFINITY;
		return Math.min(backoffLimit, jitteredDelay);
	}
	async #calculateRetryDelay(error) {
		this.#retryCount++;
		if (this.#retryCount > this.#options.retry.limit) throw error;
		const errorObject = error instanceof Error ? error : new NonError(error);
		if (errorObject instanceof ForceRetryError) return errorObject.customDelay ?? this.#calculateDelay();
		if (!this.#options.retry.methods.includes(this.request.method.toLowerCase())) throw error;
		if (this.#options.retry.shouldRetry !== void 0) {
			const result = await this.#options.retry.shouldRetry({
				error: errorObject,
				retryCount: this.#retryCount
			});
			if (result === false) throw error;
			if (result === true) return this.#calculateDelay();
		}
		if (isTimeoutError(error) && !this.#options.retry.retryOnTimeout) throw error;
		if (isHTTPError(error)) {
			if (!this.#options.retry.statusCodes.includes(error.response.status)) throw error;
			const retryAfter = error.response.headers.get("Retry-After") ?? error.response.headers.get("RateLimit-Reset") ?? error.response.headers.get("X-RateLimit-Retry-After") ?? error.response.headers.get("X-RateLimit-Reset") ?? error.response.headers.get("X-Rate-Limit-Reset");
			if (retryAfter && this.#options.retry.afterStatusCodes.includes(error.response.status)) {
				let after = Number(retryAfter) * 1e3;
				if (Number.isNaN(after)) after = Date.parse(retryAfter) - Date.now();
				else if (after >= Date.parse("2024-01-01")) after -= Date.now();
				const max = this.#options.retry.maxRetryAfter ?? after;
				return after < max ? after : max;
			}
			if (error.response.status === 413) throw error;
		}
		return this.#calculateDelay();
	}
	#decorateResponse(response) {
		if (this.#options.parseJson) response.json = async () => this.#options.parseJson(await response.text());
		return response;
	}
	#cancelBody(body) {
		if (!body) return;
		body.cancel().catch(() => void 0);
	}
	#cancelResponseBody(response) {
		this.#cancelBody(response.body ?? void 0);
	}
	async #retry(function_) {
		try {
			return await function_();
		} catch (error) {
			const ms = Math.min(await this.#calculateRetryDelay(error), maxSafeTimeout);
			if (this.#retryCount < 1) throw error;
			await delay(ms, this.#userProvidedAbortSignal ? { signal: this.#userProvidedAbortSignal } : {});
			if (error instanceof ForceRetryError && error.customRequest) {
				const managedRequest = this.#options.signal ? new globalThis.Request(error.customRequest, { signal: this.#options.signal }) : new globalThis.Request(error.customRequest);
				this.#assignRequest(managedRequest);
			}
			for (const hook of this.#options.hooks.beforeRetry) {
				const hookResult = await hook({
					request: this.request,
					options: this.#getNormalizedOptions(),
					error,
					retryCount: this.#retryCount
				});
				if (hookResult instanceof globalThis.Request) {
					this.#assignRequest(hookResult);
					break;
				}
				if (hookResult instanceof globalThis.Response) return hookResult;
				if (hookResult === stop) return;
			}
			return this.#retry(function_);
		}
	}
	async #fetch() {
		if (this.#abortController?.signal.aborted) {
			this.#abortController = new globalThis.AbortController();
			this.#options.signal = this.#userProvidedAbortSignal ? AbortSignal.any([this.#userProvidedAbortSignal, this.#abortController.signal]) : this.#abortController.signal;
			this.request = new globalThis.Request(this.request, { signal: this.#options.signal });
		}
		for (const hook of this.#options.hooks.beforeRequest) {
			const result = await hook(this.request, this.#getNormalizedOptions(), { retryCount: this.#retryCount });
			if (result instanceof Response) return result;
			if (result instanceof globalThis.Request) {
				this.#assignRequest(result);
				break;
			}
		}
		const nonRequestOptions = findUnknownOptions(this.request, this.#options);
		this.#originalRequest = this.request;
		this.request = this.#originalRequest.clone();
		if (this.#options.timeout === false) return this.#options.fetch(this.#originalRequest, nonRequestOptions);
		return timeout(this.#originalRequest, nonRequestOptions, this.#abortController, this.#options);
	}
	#getNormalizedOptions() {
		if (!this.#cachedNormalizedOptions) {
			const { hooks, ...normalizedOptions } = this.#options;
			this.#cachedNormalizedOptions = Object.freeze(normalizedOptions);
		}
		return this.#cachedNormalizedOptions;
	}
	#assignRequest(request) {
		this.#cachedNormalizedOptions = void 0;
		this.request = this.#wrapRequestWithUploadProgress(request);
	}
	#wrapRequestWithUploadProgress(request, originalBody) {
		if (!this.#options.onUploadProgress || !request.body) return request;
		return streamRequest(request, this.#options.onUploadProgress, originalBody ?? this.#options.body ?? void 0);
	}
};
//#endregion
//#region node_modules/.pnpm/ky@1.14.3/node_modules/ky/distribution/index.js
/*! MIT License © Sindre Sorhus */
var createInstance$1 = (defaults) => {
	const ky = (input, options) => Ky.create(input, validateAndMerge(defaults, options));
	for (const method of requestMethods) ky[method] = (input, options) => Ky.create(input, validateAndMerge(defaults, options, { method }));
	ky.create = (newDefaults) => createInstance$1(validateAndMerge(newDefaults));
	ky.extend = (newDefaults) => {
		if (typeof newDefaults === "function") newDefaults = newDefaults(defaults ?? {});
		return createInstance$1(validateAndMerge(defaults, newDefaults));
	};
	ky.stop = stop;
	ky.retry = retry;
	return ky;
};
var ky = createInstance$1();
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useOnMount.js
var EMPTY$2 = [];
/**
* A React.useEffect equivalent that runs once, when the component is mounted.
*/
function useOnMount(fn) {
	React$1.useEffect(fn, EMPTY$2);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/provider/ToastProviderContext.js
var ToastContext = /* @__PURE__ */ React$1.createContext(void 0);
function useToastProviderContext() {
	const context = React$1.useContext(ToastContext);
	if (!context) throw new Error(formatErrorMessage(73));
	return context;
}
//#endregion
//#region node_modules/.pnpm/reselect@5.1.1/node_modules/reselect/dist/reselect.mjs
var NOT_FOUND = /* @__PURE__ */ Symbol("NOT_FOUND");
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
	if (typeof func !== "function") throw new TypeError(errorMessage);
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
	if (typeof object !== "object") throw new TypeError(errorMessage);
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
	if (!array.every((item) => typeof item === "function")) {
		const itemTypes = array.map((item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item).join(", ");
		throw new TypeError(`${errorMessage}[${itemTypes}]`);
	}
}
var ensureIsArray = (item) => {
	return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
	const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
	assertIsArrayOfFunctions(dependencies, `createSelector expects all input-selectors to be functions, but received the following types: `);
	return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
	const inputSelectorResults = [];
	const { length } = dependencies;
	for (let i = 0; i < length; i++) inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
	return inputSelectorResults;
}
function createSingletonCache(equals) {
	let entry;
	return {
		get(key) {
			if (entry && equals(entry.key, key)) return entry.value;
			return NOT_FOUND;
		},
		put(key, value) {
			entry = {
				key,
				value
			};
		},
		getEntries() {
			return entry ? [entry] : [];
		},
		clear() {
			entry = void 0;
		}
	};
}
function createLruCache(maxSize, equals) {
	let entries = [];
	function get(key) {
		const cacheIndex = entries.findIndex((entry) => equals(key, entry.key));
		if (cacheIndex > -1) {
			const entry = entries[cacheIndex];
			if (cacheIndex > 0) {
				entries.splice(cacheIndex, 1);
				entries.unshift(entry);
			}
			return entry.value;
		}
		return NOT_FOUND;
	}
	function put(key, value) {
		if (get(key) === NOT_FOUND) {
			entries.unshift({
				key,
				value
			});
			if (entries.length > maxSize) entries.pop();
		}
	}
	function getEntries() {
		return entries;
	}
	function clear() {
		entries = [];
	}
	return {
		get,
		put,
		getEntries,
		clear
	};
}
var referenceEqualityCheck = (a, b) => a === b;
function createCacheKeyComparator(equalityCheck) {
	return function areArgumentsShallowlyEqual(prev, next) {
		if (prev === null || next === null || prev.length !== next.length) return false;
		const { length } = prev;
		for (let i = 0; i < length; i++) if (!equalityCheck(prev[i], next[i])) return false;
		return true;
	};
}
function lruMemoize(func, equalityCheckOrOptions) {
	const { equalityCheck = referenceEqualityCheck, maxSize = 1, resultEqualityCheck } = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : { equalityCheck: equalityCheckOrOptions };
	const comparator = createCacheKeyComparator(equalityCheck);
	let resultsCount = 0;
	const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
	function memoized() {
		let value = cache.get(arguments);
		if (value === NOT_FOUND) {
			value = func.apply(null, arguments);
			resultsCount++;
			if (resultEqualityCheck) {
				const matchingEntry = cache.getEntries().find((entry) => resultEqualityCheck(entry.value, value));
				if (matchingEntry) {
					value = matchingEntry.value;
					resultsCount !== 0 && resultsCount--;
				}
			}
			cache.put(arguments, value);
		}
		return value;
	}
	memoized.clearCache = () => {
		cache.clear();
		memoized.resetResultsCount();
	};
	memoized.resultsCount = () => resultsCount;
	memoized.resetResultsCount = () => {
		resultsCount = 0;
	};
	return memoized;
}
var StrongRef = class {
	constructor(value) {
		this.value = value;
	}
	deref() {
		return this.value;
	}
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
	return {
		s: UNTERMINATED,
		v: void 0,
		o: null,
		p: null
	};
}
function weakMapMemoize(func, options = {}) {
	let fnNode = createCacheNode();
	const { resultEqualityCheck } = options;
	let lastResult;
	let resultsCount = 0;
	function memoized() {
		let cacheNode = fnNode;
		const { length } = arguments;
		for (let i = 0, l = length; i < l; i++) {
			const arg = arguments[i];
			if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
				let objectCache = cacheNode.o;
				if (objectCache === null) cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
				const objectNode = objectCache.get(arg);
				if (objectNode === void 0) {
					cacheNode = createCacheNode();
					objectCache.set(arg, cacheNode);
				} else cacheNode = objectNode;
			} else {
				let primitiveCache = cacheNode.p;
				if (primitiveCache === null) cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
				const primitiveNode = primitiveCache.get(arg);
				if (primitiveNode === void 0) {
					cacheNode = createCacheNode();
					primitiveCache.set(arg, cacheNode);
				} else cacheNode = primitiveNode;
			}
		}
		const terminatedNode = cacheNode;
		let result;
		if (cacheNode.s === TERMINATED) result = cacheNode.v;
		else {
			result = func.apply(null, arguments);
			resultsCount++;
			if (resultEqualityCheck) {
				const lastResultValue = lastResult?.deref?.() ?? lastResult;
				if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
					result = lastResultValue;
					resultsCount !== 0 && resultsCount--;
				}
				lastResult = typeof result === "object" && result !== null || typeof result === "function" ? new Ref(result) : result;
			}
		}
		terminatedNode.s = TERMINATED;
		terminatedNode.v = result;
		return result;
	}
	memoized.clearCache = () => {
		fnNode = createCacheNode();
		memoized.resetResultsCount();
	};
	memoized.resultsCount = () => resultsCount;
	memoized.resetResultsCount = () => {
		resultsCount = 0;
	};
	return memoized;
}
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
	const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
		memoize: memoizeOrOptions,
		memoizeOptions: memoizeOptionsFromArgs
	} : memoizeOrOptions;
	const createSelector2 = (...createSelectorArgs) => {
		let recomputations = 0;
		let dependencyRecomputations = 0;
		let lastResult;
		let directlyPassedOptions = {};
		let resultFunc = createSelectorArgs.pop();
		if (typeof resultFunc === "object") {
			directlyPassedOptions = resultFunc;
			resultFunc = createSelectorArgs.pop();
		}
		assertIsFunction(resultFunc, `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`);
		const { memoize, memoizeOptions = [], argsMemoize = weakMapMemoize, argsMemoizeOptions = [], devModeChecks = {} } = {
			...createSelectorCreatorOptions,
			...directlyPassedOptions
		};
		const finalMemoizeOptions = ensureIsArray(memoizeOptions);
		const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
		const dependencies = getDependencies(createSelectorArgs);
		const memoizedResultFunc = memoize(function recomputationWrapper() {
			recomputations++;
			return resultFunc.apply(null, arguments);
		}, ...finalMemoizeOptions);
		const selector = argsMemoize(function dependenciesChecker() {
			dependencyRecomputations++;
			const inputSelectorResults = collectInputSelectorResults(dependencies, arguments);
			lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
			return lastResult;
		}, ...finalArgsMemoizeOptions);
		return Object.assign(selector, {
			resultFunc,
			memoizedResultFunc,
			dependencies,
			dependencyRecomputations: () => dependencyRecomputations,
			resetDependencyRecomputations: () => {
				dependencyRecomputations = 0;
			},
			lastResult: () => lastResult,
			recomputations: () => recomputations,
			resetRecomputations: () => {
				recomputations = 0;
			},
			memoize,
			argsMemoize
		});
	};
	Object.assign(createSelector2, { withTypes: () => createSelector2 });
	return createSelector2;
}
var createSelector$1 = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
var createStructuredSelector = Object.assign((inputSelectorsObject, selectorCreator = createSelector$1) => {
	assertIsObject(inputSelectorsObject, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`);
	const inputSelectorKeys = Object.keys(inputSelectorsObject);
	return selectorCreator(inputSelectorKeys.map((key) => inputSelectorsObject[key]), (...inputSelectorResults) => {
		return inputSelectorResults.reduce((composition, value, index) => {
			composition[inputSelectorKeys[index]] = value;
			return composition;
		}, {});
	});
}, { withTypes: () => createStructuredSelector });
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/store/createSelector.js
var reselectCreateSelector = createSelectorCreator({
	memoize: lruMemoize,
	memoizeOptions: {
		maxSize: 1,
		equalityCheck: Object.is
	}
});
/**
* Creates a selector function that can be used to derive values from the store's state.
* The selector can take up to three additional arguments that can be used in the selector logic.
* This function accepts up to six functions and combines them into a single selector function.
* The last parameter is the combiner function that combines the results of the previous selectors.
*
* @example
* const selector = createSelector(
*  (state) => state.disabled
* );
*
* @example
* const selector = createSelector(
*   (state) => state.disabled,
*   (state) => state.open,
*   (disabled, open) => ({ disabled, open })
* );
*
*/
var createSelector = (a, b, c, d, e, f, ...other) => {
	if (other.length > 0) throw new Error(formatErrorMessage(1));
	let selector;
	if (a && b && c && d && e && f) selector = (state, a1, a2, a3) => {
		return f(a(state, a1, a2, a3), b(state, a1, a2, a3), c(state, a1, a2, a3), d(state, a1, a2, a3), e(state, a1, a2, a3), a1, a2, a3);
	};
	else if (a && b && c && d && e) selector = (state, a1, a2, a3) => {
		return e(a(state, a1, a2, a3), b(state, a1, a2, a3), c(state, a1, a2, a3), d(state, a1, a2, a3), a1, a2, a3);
	};
	else if (a && b && c && d) selector = (state, a1, a2, a3) => {
		return d(a(state, a1, a2, a3), b(state, a1, a2, a3), c(state, a1, a2, a3), a1, a2, a3);
	};
	else if (a && b && c) selector = (state, a1, a2, a3) => {
		return c(a(state, a1, a2, a3), b(state, a1, a2, a3), a1, a2, a3);
	};
	else if (a && b) selector = (state, a1, a2, a3) => {
		return b(a(state, a1, a2, a3), a1, a2, a3);
	};
	else if (a) selector = a;
	else throw new Error("Missing arguments");
	return selector;
};
var createSelectorMemoized = (...selectors) => {
	const cache = /* @__PURE__ */ new WeakMap();
	let nextCacheId = 1;
	const combiner = selectors[selectors.length - 1];
	const nSelectors = selectors.length - 1 || 1;
	const argsLength = combiner.length - nSelectors;
	if (argsLength > 3) throw new Error(formatErrorMessage(2));
	const selector = (state, a1, a2, a3) => {
		let cacheKey = state.__cacheKey__;
		if (!cacheKey) {
			cacheKey = { id: nextCacheId };
			state.__cacheKey__ = cacheKey;
			nextCacheId += 1;
		}
		let fn = cache.get(cacheKey);
		if (!fn) {
			let reselectArgs = selectors;
			const selectorArgs = [
				void 0,
				void 0,
				void 0
			];
			switch (argsLength) {
				case 0: break;
				case 1:
					reselectArgs = [
						...selectors.slice(0, -1),
						() => selectorArgs[0],
						combiner
					];
					break;
				case 2:
					reselectArgs = [
						...selectors.slice(0, -1),
						() => selectorArgs[0],
						() => selectorArgs[1],
						combiner
					];
					break;
				case 3:
					reselectArgs = [
						...selectors.slice(0, -1),
						() => selectorArgs[0],
						() => selectorArgs[1],
						() => selectorArgs[2],
						combiner
					];
					break;
				default: throw new Error(formatErrorMessage(2));
			}
			fn = reselectCreateSelector(...reselectArgs);
			fn.selectorArgs = selectorArgs;
			cache.set(cacheKey, fn);
		}
		fn.selectorArgs[0] = a1;
		fn.selectorArgs[1] = a2;
		fn.selectorArgs[2] = a3;
		switch (argsLength) {
			case 0: return fn(state);
			case 1: return fn(state, a1);
			case 2: return fn(state, a1, a2);
			case 3: return fn(state, a1, a2, a3);
			default: throw new Error("unreachable");
		}
	};
	return selector;
};
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/fastHooks.js
var hooks = [];
var currentInstance = void 0;
function getInstance() {
	return currentInstance;
}
function register(hook) {
	hooks.push(hook);
}
function fastComponent(fn) {
	const FastComponent = (props, forwardedRef) => {
		const instance = useRefWithInit(createInstance).current;
		let result;
		try {
			currentInstance = instance;
			for (const hook of hooks) hook.before(instance);
			result = fn(props, forwardedRef);
			for (const hook of hooks) hook.after(instance);
			instance.didInitialize = true;
		} finally {
			currentInstance = void 0;
		}
		return result;
	};
	FastComponent.displayName = fn.displayName || fn.name;
	return FastComponent;
}
function fastComponentRef(fn) {
	return /* @__PURE__ */ React$1.forwardRef(fastComponent(fn));
}
function createInstance() {
	return { didInitialize: false };
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/store/useStore.js
var import_shim = require_shim();
var import_with_selector = /* @__PURE__ */ __toESM(require_with_selector());
var useStoreImplementation = isReactVersionAtLeast(19) ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
	return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
	const getSelection = React$1.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [
		store,
		selector,
		a1,
		a2,
		a3
	]);
	return (0, import_shim.useSyncExternalStore)(store.subscribe, getSelection, getSelection);
}
register({
	before(instance) {
		instance.syncIndex = 0;
		if (!instance.didInitialize) {
			instance.syncTick = 1;
			instance.syncHooks = [];
			instance.didChangeStore = true;
			instance.getSnapshot = () => {
				let didChange = false;
				for (let i = 0; i < instance.syncHooks.length; i += 1) {
					const hook = instance.syncHooks[i];
					const value = hook.selector(hook.store.state, hook.a1, hook.a2, hook.a3);
					if (hook.didChange || !Object.is(hook.value, value)) {
						didChange = true;
						hook.value = value;
						hook.didChange = false;
					}
				}
				if (didChange) instance.syncTick += 1;
				return instance.syncTick;
			};
		}
	},
	after(instance) {
		if (instance.syncHooks.length > 0) {
			if (instance.didChangeStore) {
				instance.didChangeStore = false;
				instance.subscribe = (onStoreChange) => {
					const stores = /* @__PURE__ */ new Set();
					for (const hook of instance.syncHooks) stores.add(hook.store);
					const unsubscribes = [];
					for (const store of stores) unsubscribes.push(store.subscribe(onStoreChange));
					return () => {
						for (const unsubscribe of unsubscribes) unsubscribe();
					};
				};
			}
			(0, import_shim.useSyncExternalStore)(instance.subscribe, instance.getSnapshot, instance.getSnapshot);
		}
	}
});
function useStoreFast(store, selector, a1, a2, a3) {
	const instance = getInstance();
	if (!instance) return useStoreR19(store, selector, a1, a2, a3);
	const index = instance.syncIndex;
	instance.syncIndex += 1;
	let hook;
	if (!instance.didInitialize) {
		hook = {
			store,
			selector,
			a1,
			a2,
			a3,
			value: selector(store.getSnapshot(), a1, a2, a3),
			didChange: false
		};
		instance.syncHooks.push(hook);
	} else {
		hook = instance.syncHooks[index];
		if (hook.store !== store || hook.selector !== selector || !Object.is(hook.a1, a1) || !Object.is(hook.a2, a2) || !Object.is(hook.a3, a3)) {
			if (hook.store !== store) instance.didChangeStore = true;
			hook.store = store;
			hook.selector = selector;
			hook.a1 = a1;
			hook.a2 = a2;
			hook.a3 = a3;
			hook.didChange = true;
		}
	}
	return hook.value;
}
function useStoreLegacy(store, selector, a1, a2, a3) {
	return (0, import_with_selector.useSyncExternalStoreWithSelector)(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/store/Store.js
/**
* A data store implementation that allows subscribing to state changes and updating the state.
* It uses an observer pattern to notify subscribers when the state changes.
*/
var Store = class {
	/**
	* The current state of the store.
	* This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
	* To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
	* The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
	*
	* Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
	*/
	constructor(state) {
		this.state = state;
		this.listeners = /* @__PURE__ */ new Set();
		this.updateTick = 0;
	}
	/**
	* Registers a listener that will be called whenever the store's state changes.
	*
	* @param fn The listener function to be called on state changes.
	* @returns A function to unsubscribe the listener.
	*/
	subscribe = (fn) => {
		this.listeners.add(fn);
		return () => {
			this.listeners.delete(fn);
		};
	};
	/**
	* Returns the current state of the store.
	*/
	getSnapshot = () => {
		return this.state;
	};
	/**
	* Updates the entire store's state and notifies all registered listeners.
	*
	* @param newState The new state to set for the store.
	*/
	setState(newState) {
		if (this.state === newState) return;
		this.state = newState;
		this.updateTick += 1;
		const currentTick = this.updateTick;
		for (const listener of this.listeners) {
			if (currentTick !== this.updateTick) return;
			listener(newState);
		}
	}
	/**
	* Merges the provided changes into the current state and notifies listeners if there are changes.
	*
	* @param changes An object containing the changes to apply to the current state.
	*/
	update(changes) {
		for (const key in changes) if (!Object.is(this.state[key], changes[key])) {
			this.setState({
				...this.state,
				...changes
			});
			return;
		}
	}
	/**
	* Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
	*
	* @param key The key in the store's state to update.
	* @param value The new value to set for the specified key.
	*/
	set(key, value) {
		if (!Object.is(this.state[key], value)) this.setState({
			...this.state,
			[key]: value
		});
	}
	/**
	* Gives the state a new reference and updates all registered listeners.
	*/
	notifyAll() {
		const newState = { ...this.state };
		this.setState(newState);
	}
	use(selector, a1, a2, a3) {
		return useStore(this, selector, a1, a2, a3);
	}
};
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/store/ReactStore.js
/**
* A Store that supports controlled state keys, non-reactive values and provides utility methods for React.
*/
var ReactStore = class extends Store {
	/**
	* Creates a new ReactStore instance.
	*
	* @param state Initial state of the store.
	* @param context Non-reactive context values.
	* @param selectors Optional selectors for use with `useState`.
	*/
	constructor(state, context = {}, selectors) {
		super(state);
		this.context = context;
		this.selectors = selectors;
	}
	/**
	* Non-reactive values such as refs, callbacks, etc.
	*/
	/**
	* Synchronizes a single external value into the store.
	*
	* Note that the while the value in `state` is updated immediately, the value returned
	* by `useState` is updated before the next render (similarly to React's `useState`).
	*/
	useSyncedValue(key, value) {
		React$1.useDebugValue(key);
		useIsoLayoutEffect(() => {
			if (this.state[key] !== value) this.set(key, value);
		}, [key, value]);
	}
	/**
	* Synchronizes a single external value into the store and
	* cleans it up (sets to `undefined`) on unmount.
	*
	* Note that the while the value in `state` is updated immediately, the value returned
	* by `useState` is updated before the next render (similarly to React's `useState`).
	*/
	useSyncedValueWithCleanup(key, value) {
		const store = this;
		useIsoLayoutEffect(() => {
			if (store.state[key] !== value) store.set(key, value);
			return () => {
				store.set(key, void 0);
			};
		}, [
			store,
			key,
			value
		]);
	}
	/**
	* Synchronizes multiple external values into the store.
	*
	* Note that the while the values in `state` are updated immediately, the values returned
	* by `useState` are updated before the next render (similarly to React's `useState`).
	*/
	useSyncedValues(statePart) {
		const store = this;
		useIsoLayoutEffect(() => {
			store.update(statePart);
		}, [store, ...Object.values(statePart)]);
	}
	/**
	* Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
	* is non-undefined, the store's state at `key` is updated to match `controlled`.
	*/
	useControlledProp(key, controlled) {
		React$1.useDebugValue(key);
		const isControlled = controlled !== void 0;
		useIsoLayoutEffect(() => {
			if (isControlled && !Object.is(this.state[key], controlled)) super.setState({
				...this.state,
				[key]: controlled
			});
		}, [
			key,
			controlled,
			isControlled
		]);
	}
	/** Gets the current value from the store using a selector with the provided key.
	*
	* @param key Key of the selector to use.
	*/
	select(key, a1, a2, a3) {
		const selector = this.selectors[key];
		return selector(this.state, a1, a2, a3);
	}
	/**
	* Returns a value from the store's state using a selector function.
	* Used to subscribe to specific parts of the state.
	* This methods causes a rerender whenever the selected state changes.
	*
	* @param key Key of the selector to use.
	*/
	useState(key, a1, a2, a3) {
		React$1.useDebugValue(key);
		return useStore(this, this.selectors[key], a1, a2, a3);
	}
	/**
	* Wraps a function with `useStableCallback` to ensure it has a stable reference
	* and assigns it to the context.
	*
	* @param key Key of the event callback. Must be a function in the context.
	* @param fn Function to assign.
	*/
	useContextCallback(key, fn) {
		React$1.useDebugValue(key);
		const stableFunction = useStableCallback(fn ?? NOOP);
		this.context[key] = stableFunction;
	}
	/**
	* Returns a stable setter function for a specific key in the store's state.
	* It's commonly used to pass as a ref callback to React elements.
	*
	* @param key Key of the state to set.
	*/
	useStateSetter(key) {
		const ref = React$1.useRef(void 0);
		if (ref.current === void 0) ref.current = (value) => {
			this.set(key, value);
		};
		return ref.current;
	}
	/**
	* Observes changes derived from the store's selectors and calls the listener when the selected value changes.
	*
	* @param key Key of the selector to observe.
	* @param listener Listener function called when the selector result changes.
	*/
	observe(selector, listener) {
		let selectFn;
		if (typeof selector === "function") selectFn = selector;
		else selectFn = this.selectors[selector];
		let prevValue = selectFn(this.state);
		listener(prevValue, prevValue, this);
		return this.subscribe((nextState) => {
			const nextValue = selectFn(nextState);
			if (!Object.is(prevValue, nextValue)) {
				const oldValue = prevValue;
				prevValue = nextValue;
				listener(nextValue, oldValue, this);
			}
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useAnimationFrame.js
/** Unlike `setTimeout`, rAF doesn't guarantee a positive integer return value, so we can't have
* a monomorphic `uint` type with `0` meaning empty.
* See warning note at:
* https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame#return_value */
var EMPTY$1 = null;
globalThis.requestAnimationFrame;
var Scheduler = class {
	callbacks = [];
	callbacksCount = 0;
	nextId = 1;
	startId = 1;
	isScheduled = false;
	tick = (timestamp) => {
		this.isScheduled = false;
		const currentCallbacks = this.callbacks;
		const currentCallbacksCount = this.callbacksCount;
		this.callbacks = [];
		this.callbacksCount = 0;
		this.startId = this.nextId;
		if (currentCallbacksCount > 0) for (let i = 0; i < currentCallbacks.length; i += 1) currentCallbacks[i]?.(timestamp);
	};
	request(fn) {
		const id = this.nextId;
		this.nextId += 1;
		this.callbacks.push(fn);
		this.callbacksCount += 1;
		if (!this.isScheduled || false) {
			requestAnimationFrame(this.tick);
			this.isScheduled = true;
		}
		return id;
	}
	cancel(id) {
		const index = id - this.startId;
		if (index < 0 || index >= this.callbacks.length) return;
		this.callbacks[index] = null;
		this.callbacksCount -= 1;
	}
};
var scheduler = new Scheduler();
var AnimationFrame = class AnimationFrame {
	static create() {
		return new AnimationFrame();
	}
	static request(fn) {
		return scheduler.request(fn);
	}
	static cancel(id) {
		return scheduler.cancel(id);
	}
	currentId = EMPTY$1;
	/**
	* Executes `fn` after `delay`, clearing any previously scheduled call.
	*/
	request(fn) {
		this.cancel();
		this.currentId = scheduler.request(() => {
			this.currentId = EMPTY$1;
			fn();
		});
	}
	cancel = () => {
		if (this.currentId !== EMPTY$1) {
			scheduler.cancel(this.currentId);
			this.currentId = EMPTY$1;
		}
	};
	disposeEffect = () => {
		return this.cancel;
	};
};
/**
* A `requestAnimationFrame` with automatic cleanup and guard.
*/
function useAnimationFrame() {
	const timeout = useRefWithInit(AnimationFrame.create).current;
	useOnMount(timeout.disposeEffect);
	return timeout;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/useTimeout.js
var EMPTY = 0;
var Timeout = class Timeout {
	static create() {
		return new Timeout();
	}
	currentId = EMPTY;
	/**
	* Executes `fn` after `delay`, clearing any previously scheduled call.
	*/
	start(delay, fn) {
		this.clear();
		this.currentId = setTimeout(() => {
			this.currentId = EMPTY;
			fn();
		}, delay);
	}
	isStarted() {
		return this.currentId !== EMPTY;
	}
	clear = () => {
		if (this.currentId !== EMPTY) {
			clearTimeout(this.currentId);
			this.currentId = EMPTY;
		}
	};
	disposeEffect = () => {
		return this.clear;
	};
};
/**
* A `setTimeout` with automatic cleanup and guard.
*/
function useTimeout() {
	const timeout = useRefWithInit(Timeout.create).current;
	useOnMount(timeout.disposeEffect);
	return timeout;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/generateId.js
var counter = 0;
function generateId(prefix) {
	counter += 1;
	return `${prefix}-${Math.random().toString(36).slice(2, 6)}-${counter}`;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/owner.js
function ownerDocument(node) {
	return node?.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/utils/resolvePromiseOptions.js
function resolvePromiseOptions(options, result) {
	if (typeof options === "string") return { description: options };
	if (typeof options === "function") {
		const resolvedOptions = options(result);
		return typeof resolvedOptions === "string" ? { description: resolvedOptions } : resolvedOptions;
	}
	return options;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/detectBrowser.js
var hasNavigator = typeof navigator !== "undefined";
var nav = getNavigatorData();
var platform = getPlatform();
var userAgent = getUserAgent();
var isWebKit = typeof CSS === "undefined" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter:none");
var isIOS = nav.platform === "MacIntel" && nav.maxTouchPoints > 1 ? true : /iP(hone|ad|od)|iOS/.test(nav.platform);
hasNavigator && /firefox/i.test(userAgent);
var isSafari = hasNavigator && /apple/i.test(navigator.vendor);
hasNavigator && /Edg/i.test(userAgent);
var isAndroid = hasNavigator && /android/i.test(platform) || /android/i.test(userAgent);
var isMac = hasNavigator && platform.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
var isJSDOM = userAgent.includes("jsdom/");
function getNavigatorData() {
	if (!hasNavigator) return {
		platform: "",
		maxTouchPoints: -1
	};
	const uaData = navigator.userAgentData;
	if (uaData?.platform) return {
		platform: uaData.platform,
		maxTouchPoints: navigator.maxTouchPoints
	};
	return {
		platform: navigator.platform ?? "",
		maxTouchPoints: navigator.maxTouchPoints ?? -1
	};
}
function getUserAgent() {
	if (!hasNavigator) return "";
	const uaData = navigator.userAgentData;
	if (uaData && Array.isArray(uaData.brands)) return uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ");
	return navigator.userAgent;
}
function getPlatform() {
	if (!hasNavigator) return "";
	const uaData = navigator.userAgentData;
	if (uaData?.platform) return uaData.platform;
	return navigator.platform ?? "";
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/constants.js
var FOCUSABLE_ATTRIBUTE = "data-base-ui-focusable";
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js
function activeElement(doc) {
	let element = doc.activeElement;
	while (element?.shadowRoot?.activeElement != null) element = element.shadowRoot.activeElement;
	return element;
}
function contains(parent, child) {
	if (!parent || !child) return false;
	const rootNode = child.getRootNode?.();
	if (parent.contains(child)) return true;
	if (rootNode && isShadowRoot(rootNode)) {
		let next = child;
		while (next) {
			if (parent === next) return true;
			next = next.parentNode || next.host;
		}
	}
	return false;
}
function isTargetInsideEnabledTrigger(target, triggerElements) {
	if (!isElement(target)) return false;
	const targetElement = target;
	if (triggerElements.hasElement(targetElement)) return !targetElement.hasAttribute("data-trigger-disabled");
	for (const [, trigger] of triggerElements.entries()) if (contains(trigger, targetElement)) return !trigger.hasAttribute("data-trigger-disabled");
	return false;
}
function getTarget(event) {
	if ("composedPath" in event) return event.composedPath()[0];
	return event.target;
}
function isEventTargetWithin(event, node) {
	if (node == null) return false;
	if ("composedPath" in event) return event.composedPath().includes(node);
	const eventAgain = event;
	return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
	return element.matches("html,body");
}
function isTypeableElement(element) {
	return isHTMLElement(element) && element.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])");
}
function isTypeableCombobox(element) {
	if (!element) return false;
	return element.getAttribute("role") === "combobox" && isTypeableElement(element);
}
function matchesFocusVisible(element) {
	if (!element || isJSDOM) return true;
	try {
		return element.matches(":focus-visible");
	} catch (_e) {
		return true;
	}
}
function getFloatingFocusElement(floatingElement) {
	if (!floatingElement) return null;
	return floatingElement.hasAttribute("data-base-ui-focusable") ? floatingElement : floatingElement.querySelector(`[data-base-ui-focusable]`) || floatingElement;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/tabbable.js
var getTabbableOptions = () => ({
	getShadowRoot: true,
	displayCheck: typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});
function getTabbableIn(container, dir) {
	const list = tabbable(container, getTabbableOptions());
	const len = list.length;
	if (len === 0) return;
	const active = activeElement(ownerDocument(container));
	const index = list.indexOf(active);
	return list[index === -1 ? dir === 1 ? 0 : len - 1 : index + dir];
}
function getNextTabbable(referenceElement) {
	return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
	return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
}
function getTabbableNearElement(referenceElement, dir) {
	if (!referenceElement) return null;
	const list = tabbable(ownerDocument(referenceElement).body, getTabbableOptions());
	const elementCount = list.length;
	if (elementCount === 0) return null;
	const index = list.indexOf(referenceElement);
	if (index === -1) return null;
	return list[(index + dir + elementCount) % elementCount];
}
function getTabbableAfterElement(referenceElement) {
	return getTabbableNearElement(referenceElement, 1);
}
function getTabbableBeforeElement(referenceElement) {
	return getTabbableNearElement(referenceElement, -1);
}
function isOutsideEvent(event, container) {
	const containerElement = container || event.currentTarget;
	const relatedTarget = event.relatedTarget;
	return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
	tabbable(container, getTabbableOptions()).forEach((element) => {
		element.dataset.tabindex = element.getAttribute("tabindex") || "";
		element.setAttribute("tabindex", "-1");
	});
}
function enableFocusInside(container) {
	container.querySelectorAll("[data-tabindex]").forEach((element) => {
		const tabindex = element.dataset.tabindex;
		delete element.dataset.tabindex;
		if (tabindex) element.setAttribute("tabindex", tabindex);
		else element.removeAttribute("tabindex");
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/store.js
var toastMapSelector = createSelectorMemoized((state) => state.toasts, (toasts) => {
	const map = /* @__PURE__ */ new Map();
	let visibleIndex = 0;
	let offsetY = 0;
	toasts.forEach((toast, toastIndex) => {
		const isEnding = toast.transitionStatus === "ending";
		map.set(toast.id, {
			value: toast,
			domIndex: toastIndex,
			visibleIndex: isEnding ? -1 : visibleIndex,
			offsetY
		});
		offsetY += toast.height || 0;
		if (!isEnding) visibleIndex += 1;
	});
	return map;
});
var selectors = {
	toasts: createSelector((state) => state.toasts),
	isEmpty: createSelector((state) => state.toasts.length === 0),
	toast: createSelector(toastMapSelector, (toastMap, id) => toastMap.get(id)?.value),
	toastIndex: createSelector(toastMapSelector, (toastMap, id) => toastMap.get(id)?.domIndex ?? -1),
	toastOffsetY: createSelector(toastMapSelector, (toastMap, id) => toastMap.get(id)?.offsetY ?? 0),
	toastVisibleIndex: createSelector(toastMapSelector, (toastMap, id) => toastMap.get(id)?.visibleIndex ?? -1),
	hovering: createSelector((state) => state.hovering),
	focused: createSelector((state) => state.focused),
	expanded: createSelector((state) => state.hovering || state.focused),
	expandedOrOutOfFocus: createSelector((state) => state.hovering || state.focused || !state.isWindowFocused),
	prevFocusElement: createSelector((state) => state.prevFocusElement)
};
var ToastStore = class extends ReactStore {
	timers = /* @__PURE__ */ new Map();
	areTimersPaused = false;
	constructor(initialState) {
		super(initialState, {}, selectors);
	}
	setFocused(focused) {
		this.set("focused", focused);
	}
	setHovering(hovering) {
		this.set("hovering", hovering);
	}
	setIsWindowFocused(isWindowFocused) {
		this.set("isWindowFocused", isWindowFocused);
	}
	setPrevFocusElement(prevFocusElement) {
		this.set("prevFocusElement", prevFocusElement);
	}
	setViewport = (viewport) => {
		this.set("viewport", viewport);
	};
	disposeEffect = () => {
		return () => {
			this.timers.forEach((timer) => {
				timer.timeout?.clear();
			});
			this.timers.clear();
		};
	};
	removeToast(toastId) {
		const index = selectors.toastIndex(this.state, toastId);
		if (index === -1) return;
		this.state.toasts[index]?.onRemove?.();
		const newToasts = [...this.state.toasts];
		newToasts.splice(index, 1);
		this.setToasts(newToasts);
	}
	addToast = (toast) => {
		const { toasts, timeout, limit } = this.state;
		const id = toast.id || generateId("toast");
		const toastToAdd = {
			...toast,
			id,
			transitionStatus: "starting"
		};
		const updatedToasts = [toastToAdd, ...toasts];
		const activeToasts = updatedToasts.filter((t) => t.transitionStatus !== "ending");
		if (activeToasts.length > limit) {
			const excessCount = activeToasts.length - limit;
			const oldestActiveToasts = activeToasts.slice(-excessCount);
			const limitedIds = new Set(oldestActiveToasts.map((t) => t.id));
			this.setToasts(updatedToasts.map((t) => {
				const limited = limitedIds.has(t.id);
				if (t.limited !== limited) return {
					...t,
					limited
				};
				return t;
			}));
		} else this.setToasts(updatedToasts.map((t) => t.limited ? {
			...t,
			limited: false
		} : t));
		const duration = toastToAdd.timeout ?? timeout;
		if (toastToAdd.type !== "loading" && duration > 0) this.scheduleTimer(id, duration, () => this.closeToast(id));
		if (selectors.expandedOrOutOfFocus(this.state)) this.pauseTimers();
		return id;
	};
	updateToast = (id, updates) => {
		this.updateToastInternal(id, updates);
	};
	updateToastInternal = (id, updates) => {
		const { timeout, toasts } = this.state;
		const prevToast = selectors.toast(this.state, id) ?? null;
		if (!prevToast) return;
		if (prevToast.transitionStatus === "ending") return;
		const nextToast = {
			...prevToast,
			...updates
		};
		this.setToasts(toasts.map((toast) => toast.id === id ? {
			...toast,
			...updates
		} : toast));
		const nextTimeout = nextToast.timeout ?? timeout;
		const prevTimeout = prevToast?.timeout ?? timeout;
		const timeoutUpdated = Object.hasOwn(updates, "timeout");
		const shouldHaveTimer = nextToast.transitionStatus !== "ending" && nextToast.type !== "loading" && nextTimeout > 0;
		const hasTimer = this.timers.has(id);
		const timeoutChanged = prevTimeout !== nextTimeout;
		const wasLoading = prevToast?.type === "loading";
		if (!shouldHaveTimer && hasTimer) {
			this.timers.get(id)?.timeout?.clear();
			this.timers.delete(id);
			return;
		}
		if (shouldHaveTimer && (!hasTimer || timeoutChanged || timeoutUpdated || wasLoading)) {
			const timer = this.timers.get(id);
			if (timer) {
				timer.timeout?.clear();
				this.timers.delete(id);
			}
			this.scheduleTimer(id, nextTimeout, () => this.closeToast(id));
			if (selectors.expandedOrOutOfFocus(this.state)) this.pauseTimers();
		}
	};
	closeToast = (toastId) => {
		const closeAll = toastId === void 0;
		const { limit, toasts } = this.state;
		let toastsToClose;
		if (closeAll) {
			toastsToClose = toasts;
			this.timers.forEach((timer) => {
				timer.timeout?.clear();
			});
			this.timers.clear();
		} else {
			const toast = selectors.toast(this.state, toastId);
			if (!toast) return;
			toastsToClose = [toast];
			const timer = this.timers.get(toastId);
			if (timer?.timeout) {
				timer.timeout.clear();
				this.timers.delete(toastId);
			}
		}
		let activeIndex = 0;
		const updates = { toasts: toasts.map((item) => {
			if (closeAll || item.id === toastId) return {
				...item,
				transitionStatus: "ending",
				height: 0
			};
			if (item.transitionStatus === "ending") return item;
			const isLimited = activeIndex >= limit;
			activeIndex += 1;
			return item.limited !== isLimited ? {
				...item,
				limited: isLimited
			} : item;
		}) };
		if (closeAll || toasts.length === 1) {
			updates.hovering = false;
			updates.focused = false;
		}
		this.update(updates);
		toastsToClose.forEach((toast) => {
			if (toast.transitionStatus !== "ending") toast.onClose?.();
		});
		this.handleFocusManagement(toastId);
	};
	promiseToast = (promiseValue, options) => {
		const loadingOptions = resolvePromiseOptions(options.loading);
		const id = this.addToast({
			...loadingOptions,
			type: "loading"
		});
		const handledPromise = promiseValue.then((result) => {
			const successOptions = resolvePromiseOptions(options.success, result);
			this.updateToast(id, {
				...successOptions,
				type: "success",
				timeout: successOptions.timeout
			});
			return result;
		}).catch((error) => {
			const errorOptions = resolvePromiseOptions(options.error, error);
			this.updateToast(id, {
				...errorOptions,
				type: "error",
				timeout: errorOptions.timeout
			});
			return Promise.reject(error);
		});
		if ({}.hasOwnProperty.call(options, "setPromise")) options.setPromise(handledPromise);
		return handledPromise;
	};
	pauseTimers() {
		if (this.areTimersPaused) return;
		this.areTimersPaused = true;
		this.timers.forEach((timer) => {
			if (timer.timeout) {
				timer.timeout.clear();
				const elapsed = Date.now() - timer.start;
				const remaining = timer.delay - elapsed;
				timer.remaining = remaining > 0 ? remaining : 0;
			}
		});
	}
	resumeTimers() {
		if (!this.areTimersPaused) return;
		this.areTimersPaused = false;
		this.timers.forEach((timer, id) => {
			timer.remaining = timer.remaining > 0 ? timer.remaining : timer.delay;
			timer.timeout ??= Timeout.create();
			timer.timeout.start(timer.remaining, () => {
				this.timers.delete(id);
				timer.callback();
			});
			timer.start = Date.now();
		});
	}
	restoreFocusToPrevElement() {
		this.state.prevFocusElement?.focus({ preventScroll: true });
	}
	handleDocumentPointerDown = (event) => {
		if (event.pointerType !== "touch") return;
		const target = getTarget(event);
		if (contains(this.state.viewport, target)) return;
		this.resumeTimers();
		this.update({
			hovering: false,
			focused: false
		});
	};
	scheduleTimer(id, delay, callback) {
		const start = Date.now();
		const shouldStartActive = !selectors.expandedOrOutOfFocus(this.state);
		const currentTimeout = shouldStartActive ? Timeout.create() : void 0;
		currentTimeout?.start(delay, () => {
			this.timers.delete(id);
			callback();
		});
		this.timers.set(id, {
			timeout: currentTimeout,
			start: shouldStartActive ? start : 0,
			delay,
			remaining: delay,
			callback
		});
	}
	setToasts(newToasts) {
		const updates = { toasts: newToasts };
		if (newToasts.length === 0) {
			updates.hovering = false;
			updates.focused = false;
		}
		this.update(updates);
	}
	handleFocusManagement(toastId) {
		const activeEl = activeElement(ownerDocument(this.state.viewport));
		if (!this.state.viewport || !contains(this.state.viewport, activeEl) || !matchesFocusVisible(activeEl)) return;
		if (toastId === void 0) {
			this.restoreFocusToPrevElement();
			return;
		}
		const toasts = selectors.toasts(this.state);
		const currentIndex = selectors.toastIndex(this.state, toastId);
		let nextToast = null;
		let index = currentIndex + 1;
		while (index < toasts.length) {
			if (toasts[index].transitionStatus !== "ending") {
				nextToast = toasts[index];
				break;
			}
			index += 1;
		}
		if (!nextToast) {
			index = currentIndex - 1;
			while (index >= 0) {
				if (toasts[index].transitionStatus !== "ending") {
					nextToast = toasts[index];
					break;
				}
				index -= 1;
			}
		}
		if (nextToast) nextToast.ref?.current?.focus();
		else this.restoreFocusToPrevElement();
	}
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/provider/ToastProvider.js
/**
* Provides a context for creating and managing toasts.
*
* Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
*/
var ToastProvider = function ToastProvider(props) {
	const { children, timeout = 5e3, limit = 3, toastManager } = props;
	const store = useRefWithInit(() => new ToastStore({
		timeout,
		limit,
		viewport: null,
		toasts: [],
		hovering: false,
		focused: false,
		isWindowFocused: true,
		prevFocusElement: null
	})).current;
	useOnMount(store.disposeEffect);
	React$1.useEffect(function subscribeToToastManager() {
		if (!toastManager) return;
		return toastManager[" subscribe"](({ action, options }) => {
			const id = options.id;
			if (action === "promise" && options.promise) store.promiseToast(options.promise, options);
			else if (action === "update" && id) store.updateToast(id, options);
			else if (action === "close") store.closeToast(id);
			else store.addToast(options);
		});
	}, [
		store,
		timeout,
		toastManager
	]);
	store.useSyncedValues({
		timeout,
		limit
	});
	return /* @__PURE__ */ jsx(ToastContext.Provider, {
		value: store,
		children
	});
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/FocusGuard.js
/**
* @internal
*/
var FocusGuard = /* @__PURE__ */ React$1.forwardRef(function FocusGuard(props, ref) {
	const [role, setRole] = React$1.useState();
	useIsoLayoutEffect(() => {
		if (isSafari) setRole("button");
	}, []);
	const restProps = {
		tabIndex: 0,
		role
	};
	return /* @__PURE__ */ jsx("span", {
		...props,
		ref,
		style: visuallyHidden,
		"aria-hidden": role ? void 0 : true,
		...restProps,
		"data-base-ui-focus-guard": ""
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/viewport/ToastViewportCssVars.js
var ToastViewportCssVars = /* @__PURE__ */ function(ToastViewportCssVars) {
	/**
	* Indicates the height of the frontmost toast.
	* @type {number}
	*/
	ToastViewportCssVars["frontmostHeight"] = "--toast-frontmost-height";
	return ToastViewportCssVars;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/viewport/ToastViewport.js
/**
* A container viewport for toasts.
* Renders a `<div>` element.
*
* Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
*/
var ToastViewport$1 = /* @__PURE__ */ React$1.forwardRef(function ToastViewport(componentProps, forwardedRef) {
	const { render, className, children, ...elementProps } = componentProps;
	const store = useToastProviderContext();
	const windowFocusTimeout = useTimeout();
	const handlingFocusGuardRef = React$1.useRef(false);
	const markedReadyForMouseLeaveRef = React$1.useRef(false);
	const isEmpty = store.useState("isEmpty");
	const toasts = store.useState("toasts");
	const focused = store.useState("focused");
	const expanded = store.useState("expanded");
	const prevFocusElement = store.useState("prevFocusElement");
	const frontmostHeight = toasts[0]?.height ?? 0;
	const hasTransitioningToasts = React$1.useMemo(() => toasts.some((toast) => toast.transitionStatus === "ending"), [toasts]);
	React$1.useEffect(() => {
		const viewport = store.state.viewport;
		if (!viewport) return;
		function handleGlobalKeyDown(event) {
			if (isEmpty) return;
			if (event.key === "F6" && event.target !== viewport) {
				event.preventDefault();
				store.setPrevFocusElement(activeElement(ownerDocument(viewport)));
				viewport?.focus({ preventScroll: true });
				store.pauseTimers();
				store.setFocused(true);
			}
		}
		const win = getWindow(viewport);
		win.addEventListener("keydown", handleGlobalKeyDown);
		return () => {
			win.removeEventListener("keydown", handleGlobalKeyDown);
		};
	}, [store, isEmpty]);
	React$1.useEffect(() => {
		const viewport = store.state.viewport;
		if (!viewport || isEmpty) return;
		const win = getWindow(viewport);
		function handleWindowBlur(event) {
			if (event.target !== win) return;
			store.setIsWindowFocused(false);
			store.pauseTimers();
		}
		function handleWindowFocus(event) {
			if (event.relatedTarget || event.target === win) return;
			const target = getTarget(event);
			const activeEl = activeElement(ownerDocument(viewport));
			if (!contains(viewport, target) || !matchesFocusVisible(activeEl)) store.resumeTimers();
			windowFocusTimeout.start(0, () => store.setIsWindowFocused(true));
		}
		win.addEventListener("blur", handleWindowBlur, true);
		win.addEventListener("focus", handleWindowFocus, true);
		return () => {
			win.removeEventListener("blur", handleWindowBlur, true);
			win.removeEventListener("focus", handleWindowFocus, true);
		};
	}, [
		store,
		windowFocusTimeout,
		isEmpty
	]);
	React$1.useEffect(() => {
		const viewport = store.state.viewport;
		if (!viewport || isEmpty) return;
		const doc = ownerDocument(viewport);
		doc.addEventListener("pointerdown", store.handleDocumentPointerDown, true);
		return () => {
			doc.removeEventListener("pointerdown", store.handleDocumentPointerDown, true);
		};
	}, [isEmpty, store]);
	function handleFocusGuard(event) {
		const viewport = store.state.viewport;
		if (!viewport) return;
		handlingFocusGuardRef.current = true;
		if (event.relatedTarget === viewport) toasts[0]?.ref?.current?.focus();
		else store.restoreFocusToPrevElement();
	}
	function handleKeyDown(event) {
		if (event.key === "Tab" && event.shiftKey && event.target === store.state.viewport) {
			event.preventDefault();
			store.restoreFocusToPrevElement();
			store.resumeTimers();
		}
	}
	React$1.useEffect(() => {
		if (!store.state.isWindowFocused || hasTransitioningToasts || !markedReadyForMouseLeaveRef.current) return;
		store.resumeTimers();
		store.setHovering(false);
		markedReadyForMouseLeaveRef.current = false;
	}, [hasTransitioningToasts, store]);
	function handleMouseEnter() {
		store.pauseTimers();
		store.setHovering(true);
		markedReadyForMouseLeaveRef.current = false;
	}
	function handleMouseLeave() {
		if (hasTransitioningToasts) markedReadyForMouseLeaveRef.current = true;
		else {
			store.resumeTimers();
			store.setHovering(false);
		}
	}
	function handleFocus() {
		if (handlingFocusGuardRef.current) {
			handlingFocusGuardRef.current = false;
			return;
		}
		if (focused) return;
		if (matchesFocusVisible(ownerDocument(store.state.viewport).activeElement)) {
			store.setFocused(true);
			store.pauseTimers();
		}
	}
	function handleBlur(event) {
		if (!focused || contains(store.state.viewport, event.relatedTarget)) return;
		store.setFocused(false);
		store.resumeTimers();
	}
	const defaultProps = {
		tabIndex: -1,
		role: "region",
		"aria-live": "polite",
		"aria-atomic": false,
		"aria-relevant": "additions text",
		"aria-label": "Notifications",
		onMouseEnter: handleMouseEnter,
		onMouseMove: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		onFocus: handleFocus,
		onBlur: handleBlur,
		onKeyDown: handleKeyDown,
		onClick: handleFocus
	};
	const state = { expanded };
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, store.setViewport],
		state,
		props: [
			defaultProps,
			{ style: { [ToastViewportCssVars.frontmostHeight]: frontmostHeight ? `${frontmostHeight}px` : void 0 } },
			elementProps,
			{ children: /* @__PURE__ */ jsxs(React$1.Fragment, { children: [
				!isEmpty && prevFocusElement && /* @__PURE__ */ jsx(FocusGuard, { onFocus: handleFocusGuard }),
				children,
				!isEmpty && prevFocusElement && /* @__PURE__ */ jsx(FocusGuard, { onFocus: handleFocusGuard })
			] }) }
		]
	});
	const highPriorityToasts = React$1.useMemo(() => toasts.filter((toast) => toast.priority === "high"), [toasts]);
	return /* @__PURE__ */ jsxs(React$1.Fragment, { children: [
		!isEmpty && prevFocusElement && /* @__PURE__ */ jsx(FocusGuard, { onFocus: handleFocusGuard }),
		element,
		!focused && highPriorityToasts.length > 0 && /* @__PURE__ */ jsx("div", {
			style: visuallyHidden,
			children: highPriorityToasts.map((toast) => /* @__PURE__ */ jsxs("div", {
				role: "alert",
				"aria-atomic": true,
				children: [/* @__PURE__ */ jsx("div", { children: toast.title }), /* @__PURE__ */ jsx("div", { children: toast.description })]
			}, toast.id))
		})
	] });
});
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.2.6_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/utils/esm/inertValue.js
function inertValue(value) {
	if (isReactVersionAtLeast(19)) return value;
	return value ? "true" : void 0;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/root/ToastRootContext.js
var ToastRootContext = /* @__PURE__ */ React$1.createContext(void 0);
function useToastRootContext() {
	const context = React$1.useContext(ToastRootContext);
	if (!context) throw new Error(formatErrorMessage(66));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js
var TransitionStatusDataAttributes = /* @__PURE__ */ function(TransitionStatusDataAttributes) {
	/**
	* Present when the component is animating in.
	*/
	TransitionStatusDataAttributes["startingStyle"] = "data-starting-style";
	/**
	* Present when the component is animating out.
	*/
	TransitionStatusDataAttributes["endingStyle"] = "data-ending-style";
	return TransitionStatusDataAttributes;
}({});
var STARTING_HOOK = { [TransitionStatusDataAttributes.startingStyle]: "" };
var ENDING_HOOK = { [TransitionStatusDataAttributes.endingStyle]: "" };
var transitionStatusMapping = { transitionStatus(value) {
	if (value === "starting") return STARTING_HOOK;
	if (value === "ending") return ENDING_HOOK;
	return null;
} };
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/resolveRef.js
/**
* If the provided argument is a ref object, returns its `current` value.
* Otherwise, returns the argument itself.
*/
function resolveRef(maybeRef) {
	if (maybeRef == null) return maybeRef;
	return "current" in maybeRef ? maybeRef.current : maybeRef;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useAnimationsFinished.js
/**
* Executes a function once all animations have finished on the provided element.
* @param elementOrRef - The element to watch for animations.
* @param waitForStartingStyleRemoved - Whether to wait for [data-starting-style] to be removed before checking for animations.
* @param treatAbortedAsFinished - Whether to treat aborted animations as finished. If `false`, and there are aborted animations,
*   the function will check again if any new animations have started and wait for them to finish.
* @returns A function that takes a callback to execute once all animations have finished, and an optional AbortSignal to abort the callback
*/
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
	const frame = useAnimationFrame();
	return useStableCallback((fnToExecute, signal = null) => {
		frame.cancel();
		function done() {
			ReactDOM$1.flushSync(fnToExecute);
		}
		const element = resolveRef(elementOrRef);
		if (element == null) return;
		const resolvedElement = element;
		if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) fnToExecute();
		else {
			function execWaitForStartingStyleRemoved() {
				const startingStyleAttribute = TransitionStatusDataAttributes.startingStyle;
				if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
					frame.request(exec);
					return;
				}
				const attributeObserver = new MutationObserver(() => {
					if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
						attributeObserver.disconnect();
						exec();
					}
				});
				attributeObserver.observe(resolvedElement, {
					attributes: true,
					attributeFilter: [startingStyleAttribute]
				});
				signal?.addEventListener("abort", () => attributeObserver.disconnect(), { once: true });
			}
			function exec() {
				Promise.all(resolvedElement.getAnimations().map((anim) => anim.finished)).then(() => {
					if (signal?.aborted) return;
					done();
				}).catch(() => {
					const currentAnimations = resolvedElement.getAnimations();
					if (treatAbortedAsFinished) {
						if (signal?.aborted) return;
						done();
					} else if (currentAnimations.length > 0 && currentAnimations.some((anim) => anim.pending || anim.playState !== "finished")) exec();
				});
			}
			if (waitForStartingStyleRemoved) {
				execWaitForStartingStyleRemoved();
				return;
			}
			frame.request(exec);
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/useOpenChangeComplete.js
/**
* Calls the provided function when the CSS open/close animation or transition completes.
*/
function useOpenChangeComplete(parameters) {
	const { enabled = true, open, ref, onComplete: onCompleteParam } = parameters;
	const onComplete = useStableCallback(onCompleteParam);
	const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
	React$1.useEffect(() => {
		if (!enabled) return;
		const abortController = new AbortController();
		runOnceAnimationsFinish(onComplete, abortController.signal);
		return () => {
			abortController.abort();
		};
	}, [
		enabled,
		open,
		onComplete,
		runOnceAnimationsFinish
	]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/root/ToastRootCssVars.js
var ToastRootCssVars = /* @__PURE__ */ function(ToastRootCssVars) {
	/**
	* Indicates the index of the toast in the list.
	* @type {number}
	*/
	ToastRootCssVars["index"] = "--toast-index";
	/**
	* Indicates the vertical pixels offset of the toast in the list when expanded.
	* @type {number}
	*/
	ToastRootCssVars["offsetY"] = "--toast-offset-y";
	/**
	* Indicates the measured natural height of the toast in pixels.
	* @type {number}
	*/
	ToastRootCssVars["height"] = "--toast-height";
	/**
	* Indicates the horizontal swipe movement of the toast.
	* @type {number}
	*/
	ToastRootCssVars["swipeMovementX"] = "--toast-swipe-movement-x";
	/**
	* Indicates the vertical swipe movement of the toast.
	* @type {number}
	*/
	ToastRootCssVars["swipeMovementY"] = "--toast-swipe-movement-y";
	return ToastRootCssVars;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/root/ToastRoot.js
var stateAttributesMapping = {
	...transitionStatusMapping,
	swipeDirection(value) {
		return value ? { "data-swipe-direction": value } : null;
	}
};
var SWIPE_THRESHOLD = 40;
var REVERSE_CANCEL_THRESHOLD = 10;
var OPPOSITE_DIRECTION_DAMPING_FACTOR = .5;
var MIN_DRAG_THRESHOLD = 1;
var TOAST_SWIPE_IGNORE_SELECTOR = `${BASE_UI_SWIPE_IGNORE_SELECTOR},${LEGACY_SWIPE_IGNORE_SELECTOR}`;
function getDisplacement(direction, deltaX, deltaY) {
	switch (direction) {
		case "up": return -deltaY;
		case "down": return deltaY;
		case "left": return -deltaX;
		case "right": return deltaX;
		default: return 0;
	}
}
function getElementTransform(element) {
	const transform = window.getComputedStyle(element).transform;
	let translateX = 0;
	let translateY = 0;
	let scale = 1;
	if (transform && transform !== "none") {
		const matrix = transform.match(/matrix(?:3d)?\(([^)]+)\)/);
		if (matrix) {
			const values = matrix[1].split(", ").map(parseFloat);
			if (values.length === 6) {
				translateX = values[4];
				translateY = values[5];
				scale = Math.sqrt(values[0] * values[0] + values[1] * values[1]);
			} else if (values.length === 16) {
				translateX = values[12];
				translateY = values[13];
				scale = values[0];
			}
		}
	}
	return {
		x: translateX,
		y: translateY,
		scale
	};
}
/**
* Groups all parts of an individual toast.
* Renders a `<div>` element.
*
* Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
*/
var ToastRoot = /* @__PURE__ */ React$1.forwardRef(function ToastRoot(componentProps, forwardedRef) {
	const { toast, render, className, swipeDirection = ["down", "right"], ...elementProps } = componentProps;
	const isAnchored = toast.positionerProps?.anchor !== void 0;
	let swipeDirections = [];
	if (!isAnchored) swipeDirections = Array.isArray(swipeDirection) ? swipeDirection : [swipeDirection];
	const swipeEnabled = swipeDirections.length > 0;
	const store = useToastProviderContext();
	const [currentSwipeDirection, setCurrentSwipeDirection] = React$1.useState(void 0);
	const [isSwiping, setIsSwiping] = React$1.useState(false);
	const [isRealSwipe, setIsRealSwipe] = React$1.useState(false);
	const [dragDismissed, setDragDismissed] = React$1.useState(false);
	const [dragOffset, setDragOffset] = React$1.useState({
		x: 0,
		y: 0
	});
	const [initialTransform, setInitialTransform] = React$1.useState({
		x: 0,
		y: 0,
		scale: 1
	});
	const [titleId, setTitleId] = React$1.useState();
	const [descriptionId, setDescriptionId] = React$1.useState();
	const [lockedDirection, setLockedDirection] = React$1.useState(null);
	const rootRef = React$1.useRef(null);
	const dragStartPosRef = React$1.useRef({
		x: 0,
		y: 0
	});
	const initialTransformRef = React$1.useRef({
		x: 0,
		y: 0,
		scale: 1
	});
	const intendedSwipeDirectionRef = React$1.useRef(void 0);
	const maxSwipeDisplacementRef = React$1.useRef(0);
	const cancelledSwipeRef = React$1.useRef(false);
	const swipeCancelBaselineRef = React$1.useRef({
		x: 0,
		y: 0
	});
	const isFirstPointerMoveRef = React$1.useRef(false);
	const domIndex = store.useState("toastIndex", toast.id);
	const visibleIndex = store.useState("toastVisibleIndex", toast.id);
	const offsetY = store.useState("toastOffsetY", toast.id);
	const focused = store.useState("focused");
	const expanded = store.useState("expanded");
	useOpenChangeComplete({
		open: toast.transitionStatus !== "ending",
		ref: rootRef,
		onComplete() {
			if (toast.transitionStatus === "ending") store.removeToast(toast.id);
		}
	});
	/**
	* Recalculates the natural height of the toast and updates it in the toast manager.
	* @param flushSync Whether to flush the update synchronously. Use in observer
	* callbacks to avoid visual flickers.
	*/
	const recalculateHeight = useStableCallback((flushSync = false) => {
		const element = rootRef.current;
		if (!element) return;
		const previousHeight = element.style.height;
		element.style.height = "auto";
		const height = element.offsetHeight;
		element.style.height = previousHeight;
		function update() {
			store.updateToastInternal(toast.id, {
				ref: rootRef,
				height,
				...toast.transitionStatus === "starting" ? { transitionStatus: void 0 } : {}
			});
		}
		if (flushSync) ReactDOM$1.flushSync(update);
		else update();
	});
	useIsoLayoutEffect(recalculateHeight, [recalculateHeight]);
	function applyDirectionalDamping(deltaX, deltaY) {
		let newDeltaX = deltaX;
		let newDeltaY = deltaY;
		if (!swipeDirections.includes("left") && !swipeDirections.includes("right")) newDeltaX = deltaX > 0 ? deltaX ** OPPOSITE_DIRECTION_DAMPING_FACTOR : -(Math.abs(deltaX) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
		else {
			if (!swipeDirections.includes("right") && deltaX > 0) newDeltaX = deltaX ** OPPOSITE_DIRECTION_DAMPING_FACTOR;
			if (!swipeDirections.includes("left") && deltaX < 0) newDeltaX = -(Math.abs(deltaX) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
		}
		if (!swipeDirections.includes("up") && !swipeDirections.includes("down")) newDeltaY = deltaY > 0 ? deltaY ** OPPOSITE_DIRECTION_DAMPING_FACTOR : -(Math.abs(deltaY) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
		else {
			if (!swipeDirections.includes("down") && deltaY > 0) newDeltaY = deltaY ** OPPOSITE_DIRECTION_DAMPING_FACTOR;
			if (!swipeDirections.includes("up") && deltaY < 0) newDeltaY = -(Math.abs(deltaY) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
		}
		return {
			x: newDeltaX,
			y: newDeltaY
		};
	}
	function handlePointerDown(event) {
		if (event.button !== 0) return;
		if (event.pointerType === "touch") store.pauseTimers();
		const target = getTarget(event.nativeEvent);
		if (target ? target.closest(`button,a,input,textarea,[role="button"],${TOAST_SWIPE_IGNORE_SELECTOR}`) : false) return;
		cancelledSwipeRef.current = false;
		intendedSwipeDirectionRef.current = void 0;
		maxSwipeDisplacementRef.current = 0;
		dragStartPosRef.current = {
			x: event.clientX,
			y: event.clientY
		};
		swipeCancelBaselineRef.current = dragStartPosRef.current;
		if (rootRef.current) {
			const transform = getElementTransform(rootRef.current);
			initialTransformRef.current = transform;
			setInitialTransform(transform);
			setDragOffset({
				x: transform.x,
				y: transform.y
			});
		}
		store.setHovering(true);
		setIsSwiping(true);
		setIsRealSwipe(false);
		setLockedDirection(null);
		isFirstPointerMoveRef.current = true;
		rootRef.current?.setPointerCapture(event.pointerId);
	}
	function handlePointerMove(event) {
		if (!isSwiping) return;
		event.preventDefault();
		if (isFirstPointerMoveRef.current) {
			dragStartPosRef.current = {
				x: event.clientX,
				y: event.clientY
			};
			isFirstPointerMoveRef.current = false;
		}
		const { clientY, clientX, movementX, movementY } = event;
		if (movementY < 0 && clientY > swipeCancelBaselineRef.current.y || movementY > 0 && clientY < swipeCancelBaselineRef.current.y) swipeCancelBaselineRef.current = {
			x: swipeCancelBaselineRef.current.x,
			y: clientY
		};
		if (movementX < 0 && clientX > swipeCancelBaselineRef.current.x || movementX > 0 && clientX < swipeCancelBaselineRef.current.x) swipeCancelBaselineRef.current = {
			x: clientX,
			y: swipeCancelBaselineRef.current.y
		};
		const deltaX = clientX - dragStartPosRef.current.x;
		const deltaY = clientY - dragStartPosRef.current.y;
		const cancelDeltaY = clientY - swipeCancelBaselineRef.current.y;
		const cancelDeltaX = clientX - swipeCancelBaselineRef.current.x;
		if (!isRealSwipe) {
			if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) >= MIN_DRAG_THRESHOLD) {
				setIsRealSwipe(true);
				if (lockedDirection === null) {
					const hasHorizontal = swipeDirections.includes("left") || swipeDirections.includes("right");
					const hasVertical = swipeDirections.includes("up") || swipeDirections.includes("down");
					if (hasHorizontal && hasVertical) setLockedDirection(Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical");
				}
			}
		}
		let candidate;
		if (!intendedSwipeDirectionRef.current) {
			if (lockedDirection === "vertical") {
				if (deltaY > 0) candidate = "down";
				else if (deltaY < 0) candidate = "up";
			} else if (lockedDirection === "horizontal") {
				if (deltaX > 0) candidate = "right";
				else if (deltaX < 0) candidate = "left";
			} else if (Math.abs(deltaX) >= Math.abs(deltaY)) candidate = deltaX > 0 ? "right" : "left";
			else candidate = deltaY > 0 ? "down" : "up";
			if (candidate && swipeDirections.includes(candidate)) {
				intendedSwipeDirectionRef.current = candidate;
				maxSwipeDisplacementRef.current = getDisplacement(candidate, deltaX, deltaY);
				setCurrentSwipeDirection(candidate);
			}
		} else {
			const direction = intendedSwipeDirectionRef.current;
			const currentDisplacement = getDisplacement(direction, cancelDeltaX, cancelDeltaY);
			if (currentDisplacement > SWIPE_THRESHOLD) {
				cancelledSwipeRef.current = false;
				setCurrentSwipeDirection(direction);
			} else if (!(swipeDirections.includes("left") && swipeDirections.includes("right")) && !(swipeDirections.includes("up") && swipeDirections.includes("down")) && maxSwipeDisplacementRef.current - currentDisplacement >= REVERSE_CANCEL_THRESHOLD) cancelledSwipeRef.current = true;
		}
		const dampedDelta = applyDirectionalDamping(deltaX, deltaY);
		let newOffsetX = initialTransformRef.current.x;
		let newOffsetY = initialTransformRef.current.y;
		if (lockedDirection === "horizontal") {
			if (swipeDirections.includes("left") || swipeDirections.includes("right")) newOffsetX += dampedDelta.x;
		} else if (lockedDirection === "vertical") {
			if (swipeDirections.includes("up") || swipeDirections.includes("down")) newOffsetY += dampedDelta.y;
		} else {
			if (swipeDirections.includes("left") || swipeDirections.includes("right")) newOffsetX += dampedDelta.x;
			if (swipeDirections.includes("up") || swipeDirections.includes("down")) newOffsetY += dampedDelta.y;
		}
		setDragOffset({
			x: newOffsetX,
			y: newOffsetY
		});
	}
	function handlePointerUp(event) {
		if (!isSwiping) return;
		setIsSwiping(false);
		setIsRealSwipe(false);
		setLockedDirection(null);
		rootRef.current?.releasePointerCapture(event.pointerId);
		if (cancelledSwipeRef.current) {
			setDragOffset({
				x: initialTransform.x,
				y: initialTransform.y
			});
			setCurrentSwipeDirection(void 0);
			return;
		}
		let shouldClose = false;
		const deltaX = dragOffset.x - initialTransform.x;
		const deltaY = dragOffset.y - initialTransform.y;
		let dismissDirection;
		for (const direction of swipeDirections) {
			switch (direction) {
				case "right":
					if (deltaX > SWIPE_THRESHOLD) {
						shouldClose = true;
						dismissDirection = "right";
					}
					break;
				case "left":
					if (deltaX < -SWIPE_THRESHOLD) {
						shouldClose = true;
						dismissDirection = "left";
					}
					break;
				case "down":
					if (deltaY > SWIPE_THRESHOLD) {
						shouldClose = true;
						dismissDirection = "down";
					}
					break;
				case "up":
					if (deltaY < -SWIPE_THRESHOLD) {
						shouldClose = true;
						dismissDirection = "up";
					}
					break;
				default: break;
			}
			if (shouldClose) break;
		}
		if (shouldClose) {
			setCurrentSwipeDirection(dismissDirection);
			setDragDismissed(true);
			store.closeToast(toast.id);
		} else {
			setDragOffset({
				x: initialTransform.x,
				y: initialTransform.y
			});
			setCurrentSwipeDirection(void 0);
		}
	}
	function handleKeyDown(event) {
		if (event.key === "Escape") {
			if (!rootRef.current || !contains(rootRef.current, activeElement(ownerDocument(rootRef.current)))) return;
			store.closeToast(toast.id);
		}
	}
	React$1.useEffect(() => {
		if (!swipeEnabled) return;
		const element = rootRef.current;
		if (!element) return;
		function preventDefaultTouchStart(event) {
			if (contains(element, event.target)) event.preventDefault();
		}
		element.addEventListener("touchmove", preventDefaultTouchStart, { passive: false });
		return () => {
			element.removeEventListener("touchmove", preventDefaultTouchStart);
		};
	}, [swipeEnabled]);
	function getDragStyles() {
		if (!isSwiping && dragOffset.x === initialTransform.x && dragOffset.y === initialTransform.y && !dragDismissed) return {
			[ToastRootCssVars.swipeMovementX]: "0px",
			[ToastRootCssVars.swipeMovementY]: "0px"
		};
		const deltaX = dragOffset.x - initialTransform.x;
		const deltaY = dragOffset.y - initialTransform.y;
		return {
			transition: isSwiping ? "none" : void 0,
			transform: isSwiping ? `translateX(${dragOffset.x}px) translateY(${dragOffset.y}px) scale(${initialTransform.scale})` : void 0,
			[ToastRootCssVars.swipeMovementX]: `${deltaX}px`,
			[ToastRootCssVars.swipeMovementY]: `${deltaY}px`
		};
	}
	const isHighPriority = toast.priority === "high";
	const defaultProps = {
		role: isHighPriority ? "alertdialog" : "dialog",
		tabIndex: 0,
		"aria-modal": false,
		"aria-labelledby": titleId,
		"aria-describedby": descriptionId,
		"aria-hidden": isHighPriority && !focused ? true : void 0,
		onPointerDown: swipeEnabled ? handlePointerDown : void 0,
		onPointerMove: swipeEnabled ? handlePointerMove : void 0,
		onPointerUp: swipeEnabled ? handlePointerUp : void 0,
		onKeyDown: handleKeyDown,
		inert: inertValue(toast.limited),
		style: {
			...getDragStyles(),
			[ToastRootCssVars.index]: toast.transitionStatus === "ending" ? domIndex : visibleIndex,
			[ToastRootCssVars.offsetY]: `${offsetY}px`,
			[ToastRootCssVars.height]: toast.height ? `${toast.height}px` : void 0
		}
	};
	const toastRoot = React$1.useMemo(() => ({
		rootRef,
		toast,
		titleId,
		setTitleId,
		descriptionId,
		setDescriptionId,
		swiping: isSwiping,
		swipeDirection: currentSwipeDirection,
		recalculateHeight,
		index: domIndex,
		visibleIndex,
		expanded
	}), [
		toast,
		titleId,
		descriptionId,
		isSwiping,
		currentSwipeDirection,
		recalculateHeight,
		domIndex,
		visibleIndex,
		expanded
	]);
	const state = {
		transitionStatus: toast.transitionStatus,
		expanded,
		limited: toast.limited || false,
		type: toast.type,
		swiping: toastRoot.swiping,
		swipeDirection: toastRoot.swipeDirection
	};
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, toastRoot.rootRef],
		state,
		stateAttributesMapping,
		props: [defaultProps, elementProps]
	});
	return /* @__PURE__ */ jsx(ToastRootContext.Provider, {
		value: toastRoot,
		children: element
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/content/ToastContent.js
/**
* A container for the contents of a toast.
* Renders a `<div>` element.
*
* Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
*/
var ToastContent = /* @__PURE__ */ React$1.forwardRef(function ToastContent(componentProps, forwardedRef) {
	const { render, className, ...elementProps } = componentProps;
	const { visibleIndex, expanded, recalculateHeight } = useToastRootContext();
	const contentRef = React$1.useRef(null);
	useIsoLayoutEffect(() => {
		const node = contentRef.current;
		if (!node) return;
		recalculateHeight();
		if (typeof ResizeObserver !== "function" || typeof MutationObserver !== "function") return;
		const resizeObserver = new ResizeObserver(() => recalculateHeight(true));
		const mutationObserver = new MutationObserver(() => recalculateHeight(true));
		resizeObserver.observe(node);
		mutationObserver.observe(node, {
			childList: true,
			subtree: true,
			characterData: true
		});
		return () => {
			resizeObserver.disconnect();
			mutationObserver.disconnect();
		};
	}, [recalculateHeight]);
	return useRenderElement("div", componentProps, {
		ref: [forwardedRef, contentRef],
		state: {
			expanded,
			behind: visibleIndex > 0
		},
		props: elementProps
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/description/ToastDescription.js
/**
* A description that describes the toast.
* Can be used as the default message for the toast when no title is provided.
* Renders a `<p>` element.
*
* Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
*/
var ToastDescription = /* @__PURE__ */ React$1.forwardRef(function ToastDescription(componentProps, forwardedRef) {
	const { render, className, id: idProp, children: childrenProp, ...elementProps } = componentProps;
	const { toast, setDescriptionId } = useToastRootContext();
	const children = childrenProp ?? toast.description;
	const shouldRender = Boolean(children);
	const id = useId$1(idProp);
	useIsoLayoutEffect(() => {
		if (!shouldRender) return;
		setDescriptionId(id);
		return () => {
			setDescriptionId(void 0);
		};
	}, [
		shouldRender,
		id,
		setDescriptionId
	]);
	const element = useRenderElement("p", componentProps, {
		ref: forwardedRef,
		state: { type: toast.type },
		props: {
			...elementProps,
			id,
			children
		}
	});
	if (!shouldRender) return null;
	return element;
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/title/ToastTitle.js
/**
* A title that labels the toast.
* Renders an `<h2>` element.
*
* Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
*/
var ToastTitle = /* @__PURE__ */ React$1.forwardRef(function ToastTitle(componentProps, forwardedRef) {
	const { render, className, id: idProp, children: childrenProp, ...elementProps } = componentProps;
	const { toast, setTitleId } = useToastRootContext();
	const children = childrenProp ?? toast.title;
	const shouldRender = Boolean(children);
	const id = useId$1(idProp);
	useIsoLayoutEffect(() => {
		if (!shouldRender) return;
		setTitleId(id);
		return () => {
			setTitleId(void 0);
		};
	}, [
		shouldRender,
		id,
		setTitleId
	]);
	const element = useRenderElement("h2", componentProps, {
		ref: forwardedRef,
		state: { type: toast.type },
		props: {
			...elementProps,
			id,
			children
		}
	});
	if (!shouldRender) return null;
	return element;
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/close/ToastClose.js
/**
* Closes the toast when clicked.
* Renders a `<button>` element.
*
* Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
*/
var ToastClose = /* @__PURE__ */ React$1.forwardRef(function ToastClose(componentProps, forwardedRef) {
	const { render, className, disabled, nativeButton = true, ...elementProps } = componentProps;
	const store = useToastProviderContext();
	const { toast } = useToastRootContext();
	const expanded = store.useState("expanded");
	const [hasFocus, setHasFocus] = React$1.useState(false);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const state = { type: toast.type };
	return useRenderElement("button", componentProps, {
		ref: [forwardedRef, buttonRef],
		state,
		props: [
			{
				"aria-hidden": !expanded && !hasFocus,
				onClick() {
					store.closeToast(toast.id);
				},
				onFocus() {
					setHasFocus(true);
				},
				onBlur() {
					setHasFocus(false);
				}
			},
			elementProps,
			getButtonProps
		]
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/action/ToastAction.js
/**
* Performs an action when clicked.
* Renders a `<button>` element.
*
* Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
*/
var ToastAction = /* @__PURE__ */ React$1.forwardRef(function ToastAction(componentProps, forwardedRef) {
	const { render, className, disabled, nativeButton = true, ...elementProps } = componentProps;
	const { toast } = useToastRootContext();
	const computedChildren = toast.actionProps?.children ?? elementProps.children;
	const shouldRender = Boolean(computedChildren);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const state = { type: toast.type };
	const element = useRenderElement("button", componentProps, {
		ref: [forwardedRef, buttonRef],
		state,
		props: [
			elementProps,
			toast.actionProps,
			getButtonProps,
			{ children: computedChildren }
		]
	});
	if (!shouldRender) return null;
	return element;
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/utils/createAttribute.js
function createAttribute(name) {
	return `data-base-ui-${name}`;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js
var PortalContext = /* @__PURE__ */ React$1.createContext(null);
var usePortalContext = () => React$1.useContext(PortalContext);
var attr = createAttribute("portal");
function useFloatingPortalNode(props = {}) {
	const { ref, container: containerProp, componentProps = EMPTY_OBJECT, elementProps } = props;
	const uniqueId = useId$1();
	const parentPortalNode = usePortalContext()?.portalNode;
	const [containerElement, setContainerElement] = React$1.useState(null);
	const [portalNode, setPortalNode] = React$1.useState(null);
	const setPortalNodeRef = useStableCallback((node) => {
		if (node !== null) setPortalNode(node);
	});
	const containerRef = React$1.useRef(null);
	useIsoLayoutEffect(() => {
		if (containerProp === null) {
			if (containerRef.current) {
				containerRef.current = null;
				setPortalNode(null);
				setContainerElement(null);
			}
			return;
		}
		if (uniqueId == null) return;
		const resolvedContainer = (containerProp && (isNode(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
		if (resolvedContainer == null) {
			if (containerRef.current) {
				containerRef.current = null;
				setPortalNode(null);
				setContainerElement(null);
			}
			return;
		}
		if (containerRef.current !== resolvedContainer) {
			containerRef.current = resolvedContainer;
			setPortalNode(null);
			setContainerElement(resolvedContainer);
		}
	}, [
		containerProp,
		parentPortalNode,
		uniqueId
	]);
	const portalElement = useRenderElement("div", componentProps, {
		ref: [ref, setPortalNodeRef],
		props: [{
			id: uniqueId,
			[attr]: ""
		}, elementProps]
	});
	return {
		portalNode,
		portalSubtree: containerElement && portalElement ? /* @__PURE__ */ ReactDOM$1.createPortal(portalElement, containerElement) : null
	};
}
/**
* Portals the floating element into a given container element — by default,
* outside of the app root and into the body.
* This is necessary to ensure the floating element can appear outside any
* potential parent containers that cause clipping (such as `overflow: hidden`),
* while retaining its location in the React tree.
* @see https://floating-ui.com/docs/FloatingPortal
* @internal
*/
var FloatingPortal = /* @__PURE__ */ React$1.forwardRef(function FloatingPortal(componentProps, forwardedRef) {
	const { children, container, className, render, renderGuards, ...elementProps } = componentProps;
	const { portalNode, portalSubtree } = useFloatingPortalNode({
		container,
		ref: forwardedRef,
		componentProps,
		elementProps
	});
	const beforeOutsideRef = React$1.useRef(null);
	const afterOutsideRef = React$1.useRef(null);
	const beforeInsideRef = React$1.useRef(null);
	const afterInsideRef = React$1.useRef(null);
	const [focusManagerState, setFocusManagerState] = React$1.useState(null);
	const modal = focusManagerState?.modal;
	const open = focusManagerState?.open;
	const shouldRenderGuards = typeof renderGuards === "boolean" ? renderGuards : !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
	React$1.useEffect(() => {
		if (!portalNode || modal) return;
		function onFocus(event) {
			if (portalNode && event.relatedTarget && isOutsideEvent(event)) (event.type === "focusin" ? enableFocusInside : disableFocusInside)(portalNode);
		}
		portalNode.addEventListener("focusin", onFocus, true);
		portalNode.addEventListener("focusout", onFocus, true);
		return () => {
			portalNode.removeEventListener("focusin", onFocus, true);
			portalNode.removeEventListener("focusout", onFocus, true);
		};
	}, [portalNode, modal]);
	React$1.useEffect(() => {
		if (!portalNode || open) return;
		enableFocusInside(portalNode);
	}, [open, portalNode]);
	const portalContextValue = React$1.useMemo(() => ({
		beforeOutsideRef,
		afterOutsideRef,
		beforeInsideRef,
		afterInsideRef,
		portalNode,
		setFocusManagerState
	}), [portalNode]);
	return /* @__PURE__ */ jsxs(React$1.Fragment, { children: [portalSubtree, /* @__PURE__ */ jsxs(PortalContext.Provider, {
		value: portalContextValue,
		children: [
			shouldRenderGuards && portalNode && /* @__PURE__ */ jsx(FocusGuard, {
				"data-type": "outside",
				ref: beforeOutsideRef,
				onFocus: (event) => {
					if (isOutsideEvent(event, portalNode)) beforeInsideRef.current?.focus();
					else getPreviousTabbable(focusManagerState ? focusManagerState.domReference : null)?.focus();
				}
			}),
			shouldRenderGuards && portalNode && /* @__PURE__ */ jsx("span", {
				"aria-owns": portalNode.id,
				style: ownerVisuallyHidden
			}),
			portalNode && /* @__PURE__ */ ReactDOM$1.createPortal(children, portalNode),
			shouldRenderGuards && portalNode && /* @__PURE__ */ jsx(FocusGuard, {
				"data-type": "outside",
				ref: afterOutsideRef,
				onFocus: (event) => {
					if (isOutsideEvent(event, portalNode)) afterInsideRef.current?.focus();
					else {
						getNextTabbable(focusManagerState ? focusManagerState.domReference : null)?.focus();
						if (focusManagerState?.closeOnFocusOut) focusManagerState?.onOpenChange(false, createChangeEventDetails("focus-out", event.nativeEvent));
					}
				}
			})
		]
	})] });
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/FloatingPortalLite.js
/**
* `FloatingPortal` includes tabbable logic handling for focus management.
* For components that don't need tabbable logic, use `FloatingPortalLite`.
* @internal
*/
var FloatingPortalLite = /* @__PURE__ */ React$1.forwardRef(function FloatingPortalLite(componentProps, forwardedRef) {
	const { children, container, className, render, ...elementProps } = componentProps;
	const { portalNode, portalSubtree } = useFloatingPortalNode({
		container,
		ref: forwardedRef,
		componentProps,
		elementProps
	});
	if (!portalSubtree && !portalNode) return null;
	return /* @__PURE__ */ jsxs(React$1.Fragment, { children: [portalSubtree, portalNode && /* @__PURE__ */ ReactDOM$1.createPortal(children, portalNode)] });
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/portal/ToastPortal.js
/**
* A portal element that moves the viewport to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
*/
var ToastPortal = FloatingPortalLite;
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/useToastManager.js
/**
* Returns the array of toasts and methods to manage them.
*/
function useToastManager() {
	const store = React$1.useContext(ToastContext);
	if (!store) throw new Error(formatErrorMessage(73));
	const toasts = store.useState("toasts");
	return React$1.useMemo(() => ({
		toasts,
		add: store.addToast,
		close: store.closeToast,
		update: store.updateToast,
		promise: store.promiseToast
	}), [toasts, store]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/toast/createToastManager.js
/**
* Creates a new toast manager.
*/
function createToastManager() {
	const listeners = /* @__PURE__ */ new Set();
	function emit(data) {
		listeners.forEach((listener) => listener(data));
	}
	return {
		" subscribe": function subscribe(listener) {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		},
		add(options) {
			const id = options.id || generateId("toast");
			emit({
				action: "add",
				options: {
					...options,
					id,
					transitionStatus: "starting"
				}
			});
			return id;
		},
		close(id) {
			emit({
				action: "close",
				options: { id }
			});
		},
		update(id, updates) {
			emit({
				action: "update",
				options: {
					...updates,
					id
				}
			});
		},
		promise(promiseValue, options) {
			let handledPromise = promiseValue;
			emit({
				action: "promise",
				options: {
					...options,
					promise: promiseValue,
					setPromise(promise) {
						handledPromise = promise;
					}
				}
			});
			return handledPromise;
		}
	};
}
//#endregion
//#region app/components/base/ui/toast/index.tsx
var TOAST_TONE_STYLES = {
	success: {
		iconClassName: "i-ri-checkbox-circle-fill text-text-success",
		gradientClassName: "from-components-badge-status-light-success-halo to-background-gradient-mask-transparent"
	},
	error: {
		iconClassName: "i-ri-error-warning-fill text-text-destructive",
		gradientClassName: "from-components-badge-status-light-error-halo to-background-gradient-mask-transparent"
	},
	warning: {
		iconClassName: "i-ri-alert-fill text-text-warning-secondary",
		gradientClassName: "from-components-badge-status-light-warning-halo to-background-gradient-mask-transparent"
	},
	info: {
		iconClassName: "i-ri-information-2-fill text-text-accent",
		gradientClassName: "from-components-badge-status-light-normal-halo to-background-gradient-mask-transparent"
	}
};
var toastManager = createToastManager();
function isToastType(type) {
	return Object.prototype.hasOwnProperty.call(TOAST_TONE_STYLES, type);
}
function getToastType(type) {
	return type && isToastType(type) ? type : void 0;
}
function addToast(options) {
	return toastManager.add(options);
}
var showToast = (title, options) => addToast({
	...options,
	title
});
var dismissToast = (toastId) => {
	toastManager.close(toastId);
};
function createTypedToast(type) {
	return (title, options) => addToast({
		...options,
		title,
		type
	});
}
function updateToast(toastId, options) {
	toastManager.update(toastId, options);
}
function promiseToast(promiseValue, options) {
	return toastManager.promise(promiseValue, options);
}
var toast = Object.assign(showToast, {
	success: createTypedToast("success"),
	error: createTypedToast("error"),
	warning: createTypedToast("warning"),
	info: createTypedToast("info"),
	dismiss: dismissToast,
	update: updateToast,
	promise: promiseToast
});
function ToastIcon({ type }) {
	return type ? /* @__PURE__ */ jsx("span", {
		"aria-hidden": "true",
		className: cn("h-5 w-5", TOAST_TONE_STYLES[type].iconClassName)
	}) : null;
}
function getToneGradientClasses(type) {
	if (type) return TOAST_TONE_STYLES[type].gradientClassName;
	return "from-background-default-subtle to-background-gradient-mask-transparent";
}
function ToastCard({ toast: toastItem }) {
	const { t } = useTranslation("common");
	const toastType = getToastType(toastItem.type);
	return /* @__PURE__ */ jsx(ToastRoot, {
		toast: toastItem,
		className: cn("pointer-events-auto absolute right-0 top-0 w-[360px] max-w-[calc(100vw-2rem)] origin-top cursor-default select-none rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-components-input-border-hover", "[--toast-current-height:var(--toast-frontmost-height,var(--toast-height))] [--toast-gap:8px] [--toast-peek:5px] [--toast-scale:calc(1-(var(--toast-index)*0.0225))] [--toast-shrink:calc(1-var(--toast-scale))]", "[height:var(--toast-current-height)] [z-index:calc(100-var(--toast-index))]", "[transition:transform_500ms_cubic-bezier(0.22,1,0.36,1),opacity_500ms,height_150ms] motion-reduce:transition-none", "translate-x-[var(--toast-swipe-movement-x)] translate-y-[calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--toast-peek))+(var(--toast-shrink)*var(--toast-current-height)))] scale-[var(--toast-scale)]", "data-[expanded]:translate-x-[var(--toast-swipe-movement-x)] data-[expanded]:translate-y-[calc(var(--toast-offset-y)+var(--toast-swipe-movement-y)+(var(--toast-index)*8px))] data-[expanded]:scale-100 data-[expanded]:[height:var(--toast-height)]", "data-[limited]:pointer-events-none data-[ending-style]:translate-y-[calc(var(--toast-swipe-movement-y)-150%)] data-[starting-style]:-translate-y-[150%] data-[ending-style]:opacity-0 data-[limited]:opacity-0 data-[starting-style]:opacity-0", "after:pointer-events-auto after:absolute after:left-0 after:top-full after:h-[calc(var(--toast-gap)+1px)] after:w-full after:content-['']"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative overflow-hidden rounded-xl border border-components-panel-border bg-components-panel-bg-blur shadow-lg shadow-shadow-shadow-5 backdrop-blur-[5px]",
			children: [/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: cn("absolute inset-[-1px] bg-gradient-to-r opacity-40", getToneGradientClasses(toastType))
			}), /* @__PURE__ */ jsxs(ToastContent, {
				className: "relative flex items-start gap-1 overflow-hidden p-3 transition-opacity duration-200 data-[behind]:opacity-0 data-[expanded]:opacity-100",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex shrink-0 items-center justify-center p-0.5",
						children: /* @__PURE__ */ jsx(ToastIcon, { type: toastType })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1 p-1",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex w-full items-center gap-1",
								children: toastItem.title != null && /* @__PURE__ */ jsx(ToastTitle, {
									className: "break-words text-text-primary system-sm-semibold",
									children: toastItem.title
								})
							}),
							toastItem.description != null && /* @__PURE__ */ jsx(ToastDescription, {
								className: "mt-1 break-words text-text-secondary system-xs-regular",
								children: toastItem.description
							}),
							toastItem.actionProps && /* @__PURE__ */ jsx("div", {
								className: "flex w-full items-start gap-1 pb-1 pt-2",
								children: /* @__PURE__ */ jsx(ToastAction, { className: cn("inline-flex items-center justify-center overflow-hidden rounded-md border-[0.5px] border-components-button-secondary-border bg-components-button-secondary-bg px-3 py-2 text-components-button-secondary-text shadow-xs shadow-shadow-shadow-3 backdrop-blur-[5px] system-sm-medium", "hover:bg-state-base-hover focus-visible:bg-state-base-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-components-input-border-hover") })
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex shrink-0 items-center justify-center rounded-md p-0.5",
						children: /* @__PURE__ */ jsx(ToastClose, {
							"aria-label": t("toast.close"),
							className: cn("flex h-5 w-5 items-center justify-center rounded-md hover:bg-state-base-hover focus-visible:bg-state-base-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-components-input-border-hover disabled:cursor-not-allowed disabled:opacity-50"),
							children: /* @__PURE__ */ jsx("span", {
								"aria-hidden": "true",
								className: "i-ri-close-line h-4 w-4 text-text-tertiary"
							})
						})
					})
				]
			})]
		})
	});
}
function ToastViewport() {
	const { t } = useTranslation("common");
	const { toasts } = useToastManager();
	return /* @__PURE__ */ jsx(ToastViewport$1, {
		"aria-label": t("toast.notifications"),
		className: cn("group/toast-viewport pointer-events-none fixed inset-0 z-[1101] overflow-visible"),
		children: /* @__PURE__ */ jsx("div", {
			className: cn("pointer-events-none absolute right-4 top-4 w-[360px] max-w-[calc(100vw-2rem)] sm:right-8"),
			children: toasts.map((toastItem) => /* @__PURE__ */ jsx(ToastCard, { toast: toastItem }, toastItem.id))
		})
	});
}
function ToastHost({ timeout, limit }) {
	return /* @__PURE__ */ jsx(ToastProvider, {
		toastManager,
		timeout,
		limit,
		children: /* @__PURE__ */ jsx(ToastPortal, { children: /* @__PURE__ */ jsx(ToastViewport, {}) })
	});
}
//#endregion
//#region service/webapp-auth.ts
function setWebAppAccessToken(token) {
	localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME, token);
}
function setWebAppPassport(shareCode, token) {
	localStorage.setItem(PASSPORT_LOCAL_STORAGE_NAME(shareCode), token);
}
function getWebAppAccessToken() {
	return localStorage.getItem("access_token") || "";
}
function getWebAppPassport(shareCode) {
	return localStorage.getItem(PASSPORT_LOCAL_STORAGE_NAME(shareCode)) || "";
}
function clearWebAppAccessToken() {
	localStorage.removeItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME);
}
function clearWebAppPassport(shareCode) {
	localStorage.removeItem(PASSPORT_LOCAL_STORAGE_NAME(shareCode));
}
async function webAppLoginStatus(shareCode, userId) {
	const params = new URLSearchParams({ app_code: shareCode });
	if (userId) params.append("user_id", userId);
	const { logged_in, app_logged_in } = await getPublic(`/login/status?${params.toString()}`);
	return {
		userLoggedIn: logged_in,
		appLoggedIn: app_logged_in
	};
}
async function webAppLogout(shareCode) {
	clearWebAppAccessToken();
	clearWebAppPassport(shareCode);
	await postPublic("/logout");
}
//#endregion
//#region service/fetch.ts
var TIME_OUT$1 = 1e5;
var ContentType = {
	json: "application/json",
	stream: "text/event-stream",
	audio: "audio/mpeg",
	form: "application/x-www-form-urlencoded; charset=UTF-8",
	download: "application/octet-stream",
	downloadZip: "application/zip",
	upload: "multipart/form-data"
};
var afterResponse204 = async (_request, _options, response) => {
	if (response.status === 204) return new Response(JSON.stringify({ result: "success" }), {
		status: 200,
		headers: { "Content-Type": ContentType.json }
	});
};
var afterResponseErrorCode = (otherOptions) => {
	return async (_request, _options, response) => {
		if (!/^([23])\d{2}$/.test(String(response.status))) {
			const errorData = await response.clone().json().then((data) => data).catch(() => null);
			if (response.status !== 401 && errorData && !otherOptions.silent) toast.error(errorData.message);
			if (response.status === 403 && errorData?.code === "already_setup") globalThis.location.href = `${globalThis.location.origin}/signin`;
		}
	};
};
var SHARE_ROUTE_DENY_LIST = new Set([
	"webapp-signin",
	"check-code",
	"login"
]);
var resolveShareCode = () => {
	const lastSegment = globalThis.location.pathname.split("/").filter(Boolean).at(-1) || "";
	if (lastSegment && !SHARE_ROUTE_DENY_LIST.has(lastSegment)) return lastSegment;
	const redirectParam = new URLSearchParams(globalThis.location.search).get("redirect_url");
	if (!redirectParam) return "";
	try {
		const redirectSegment = new URL(decodeURIComponent(redirectParam), globalThis.location.origin).pathname.split("/").filter(Boolean).at(-1) || "";
		return SHARE_ROUTE_DENY_LIST.has(redirectSegment) ? "" : redirectSegment;
	} catch {
		return "";
	}
};
var beforeRequestPublicWithCode = (request) => {
	const accessToken = getWebAppAccessToken();
	if (accessToken) request.headers.set("Authorization", `Bearer ${accessToken}`);
	else request.headers.delete("Authorization");
	const shareCode = resolveShareCode();
	if (!shareCode) return;
	request.headers.set(WEB_APP_SHARE_CODE_HEADER_NAME, shareCode);
	request.headers.set(PASSPORT_HEADER_NAME, getWebAppPassport(shareCode));
};
var baseHooks = { afterResponse: [afterResponse204] };
var baseClient = ky.create({
	hooks: baseHooks,
	timeout: TIME_OUT$1
});
var getBaseOptions = () => ({
	method: "GET",
	mode: "cors",
	credentials: "include",
	headers: new Headers({ "Content-Type": ContentType.json }),
	redirect: "follow"
});
async function base(url, options = {}, otherOptions = {}) {
	const { params, body, headers: headersFromProps, ...init } = {
		...otherOptions.fetchCompat ? {
			mode: "cors",
			credentials: "include",
			redirect: "follow"
		} : {
			mode: "cors",
			credentials: "include",
			headers: new Headers({ "Content-Type": ContentType.json }),
			method: "GET",
			redirect: "follow"
		},
		...options
	};
	const headers = new Headers(headersFromProps || {});
	const { isPublicAPI = false, isMarketplaceAPI = false, bodyStringify = true, needAllResponseContent, deleteContentType, getAbortController, fetchCompat = false, request } = otherOptions;
	let base;
	if (isMarketplaceAPI) base = MARKETPLACE_API_PREFIX;
	else if (isPublicAPI) base = PUBLIC_API_PREFIX;
	else base = API_PREFIX;
	if (getAbortController) {
		const abortController = new AbortController();
		getAbortController(abortController);
		options.signal = abortController.signal;
	}
	const fetchPathname = base + (url.startsWith("/") ? url : `/${url}`);
	if (!isMarketplaceAPI) headers.set(CSRF_HEADER_NAME, api.get(CSRF_COOKIE_NAME()) || "");
	if (deleteContentType) headers.delete("Content-Type");
	if (isMarketplaceAPI) headers.set("X-Dify-Version", !IS_MARKETPLACE ? APP_VERSION : "999.0.0");
	const client = baseClient.extend({ hooks: {
		...baseHooks,
		beforeRequest: [...baseHooks.beforeRequest || [], isPublicAPI && beforeRequestPublicWithCode].filter((h) => Boolean(h)),
		afterResponse: [...baseHooks.afterResponse || [], afterResponseErrorCode(otherOptions)]
	} });
	let res;
	try {
		res = await client(request || fetchPathname, {
			...init,
			headers,
			credentials: isMarketplaceAPI ? "omit" : options.credentials || "include",
			retry: { methods: [] },
			...bodyStringify && !fetchCompat ? { json: body } : { body },
			searchParams: !fetchCompat ? params : void 0,
			fetch(resource, options) {
				if (resource instanceof Request && options) {
					const mergedHeaders = new Headers(options.headers || {});
					resource.headers.forEach((value, key) => {
						mergedHeaders.append(key, value);
					});
					options.headers = mergedHeaders;
				}
				return globalThis.fetch(resource, options);
			}
		});
	} catch (error) {
		if (error instanceof HTTPError) throw error.response.clone();
		throw error;
	}
	if (needAllResponseContent || fetchCompat) return res;
	const contentType = res.headers.get("content-type");
	if (contentType && [
		ContentType.download,
		ContentType.audio,
		ContentType.downloadZip
	].includes(contentType)) return await res.blob();
	return await res.json();
}
/**
* Fire-and-forget POST with `keepalive: true` for use during page unload.
* Includes credentials, Authorization (if available), and CSRF header
* so the request is authenticated, matching the headers sent by the
* standard `base()` fetch wrapper.
*/
function postWithKeepalive(url, body) {
	const headers = {
		"Content-Type": ContentType.json,
		[CSRF_HEADER_NAME]: api.get(CSRF_COOKIE_NAME()) || ""
	};
	const accessToken = getWebAppAccessToken();
	if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
	globalThis.fetch(url, {
		method: "POST",
		keepalive: true,
		credentials: "include",
		headers,
		body: JSON.stringify(body)
	}).catch(() => {});
}
//#endregion
//#region service/refresh-token.ts
var LOCAL_STORAGE_KEY = "is_other_tab_refreshing";
var isRefreshing = false;
function waitUntilTokenRefreshed() {
	return new Promise((resolve) => {
		function _check() {
			const isRefreshingSign = globalThis.localStorage.getItem(LOCAL_STORAGE_KEY);
			if (isRefreshingSign && isRefreshingSign === "1" || isRefreshing) setTimeout(() => {
				_check();
			}, 1e3);
			else resolve();
		}
		_check();
	});
}
var isRefreshingSignAvailable = function(delta) {
	const nowTime = (/* @__PURE__ */ new Date()).getTime();
	const lastTime = globalThis.localStorage.getItem("last_refresh_time") || "0";
	return nowTime - Number.parseInt(lastTime) <= delta;
};
async function getNewAccessToken(timeout) {
	try {
		const isRefreshingSign = globalThis.localStorage.getItem(LOCAL_STORAGE_KEY);
		if (isRefreshingSign && isRefreshingSign === "1" && isRefreshingSignAvailable(timeout) || isRefreshing) await waitUntilTokenRefreshed();
		else {
			isRefreshing = true;
			globalThis.localStorage.setItem(LOCAL_STORAGE_KEY, "1");
			globalThis.localStorage.setItem("last_refresh_time", (/* @__PURE__ */ new Date()).getTime().toString());
			globalThis.addEventListener("beforeunload", releaseRefreshLock);
			const [error, ret] = await fetchWithRetry(globalThis.fetch(`${API_PREFIX}/refresh-token`, {
				method: "POST",
				credentials: "include",
				headers: { "Content-Type": "application/json;utf-8" }
			}));
			if (error) return Promise.reject(error);
			else if (ret.status === 401) return Promise.reject(ret);
		}
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	} finally {
		releaseRefreshLock();
	}
}
function releaseRefreshLock() {
	isRefreshing = false;
	globalThis.localStorage.removeItem(LOCAL_STORAGE_KEY);
	globalThis.localStorage.removeItem("last_refresh_time");
	globalThis.removeEventListener("beforeunload", releaseRefreshLock);
}
async function refreshAccessTokenOrReLogin(timeout) {
	return Promise.race([new Promise((resolve, reject) => setTimeout(() => {
		releaseRefreshLock();
		reject(/* @__PURE__ */ new Error("request timeout"));
	}, timeout)), getNewAccessToken(timeout)]);
}
//#endregion
//#region service/base.ts
var TIME_OUT = 1e5;
function jumpTo(url) {
	if (!url) return;
	if (new URL(url, globalThis.location.origin).pathname === globalThis.location.pathname) return;
	globalThis.location.href = url;
}
function unicodeToChar(text) {
	if (!text) return "";
	return text.replace(/\\u([0-9a-f]{4})/g, (_match, p1) => {
		return String.fromCharCode(Number.parseInt(p1, 16));
	});
}
var WBB_APP_LOGIN_PATH = "/webapp-signin";
function requiredWebSSOLogin(message, code) {
	const params = new URLSearchParams();
	if (globalThis.location.pathname === WBB_APP_LOGIN_PATH) return;
	params.append("redirect_url", encodeURIComponent(`${globalThis.location.pathname}${globalThis.location.search}`));
	if (message) params.append("message", message);
	if (code) params.append("code", String(code));
	globalThis.location.href = `${globalThis.location.origin}${basePath}${WBB_APP_LOGIN_PATH}?${params.toString()}`;
}
function formatURL(url, isPublicAPI) {
	const urlPrefix = isPublicAPI ? PUBLIC_API_PREFIX : API_PREFIX;
	if (url.startsWith("http://") || url.startsWith("https://")) return url;
	return `${urlPrefix}${url.startsWith("/") ? url : `/${url}`}`;
}
var handleStream = (response, onData, onCompleted, onThought, onMessageEnd, onMessageReplace, onFile, onWorkflowStarted, onWorkflowFinished, onNodeStarted, onNodeFinished, onIterationStart, onIterationNext, onIterationFinish, onLoopStart, onLoopNext, onLoopFinish, onNodeRetry, onParallelBranchStarted, onParallelBranchFinished, onTextChunk, onTTSChunk, onTTSEnd, onTextReplace, onAgentLog, onHumanInputRequired, onHumanInputFormFilled, onHumanInputFormTimeout, onWorkflowPaused, onDataSourceNodeProcessing, onDataSourceNodeCompleted, onDataSourceNodeError) => {
	if (!response.ok) throw new Error("Network response was not ok");
	const reader = response.body?.getReader();
	const decoder = new TextDecoder("utf-8");
	let buffer = "";
	let bufferObj;
	let isFirstMessage = true;
	function read() {
		let hasError = false;
		reader?.read().then((result) => {
			if (result.done) {
				onCompleted?.();
				return;
			}
			buffer += decoder.decode(result.value, { stream: true });
			const lines = buffer.split("\n");
			try {
				lines.forEach((message) => {
					if (message.startsWith("data: ")) {
						try {
							bufferObj = JSON.parse(message.substring(6));
						} catch {
							onData("", isFirstMessage, {
								conversationId: bufferObj?.conversation_id,
								messageId: bufferObj?.message_id
							});
							return;
						}
						if (!bufferObj || typeof bufferObj !== "object") {
							onData("", isFirstMessage, {
								conversationId: void 0,
								messageId: "",
								errorMessage: "Invalid response data",
								errorCode: "invalid_data"
							});
							hasError = true;
							onCompleted?.(true, "Invalid response data");
							return;
						}
						if (bufferObj.status === 400 || !bufferObj.event) {
							onData("", false, {
								conversationId: void 0,
								messageId: "",
								errorMessage: bufferObj?.message,
								errorCode: bufferObj?.code
							});
							hasError = true;
							onCompleted?.(true, bufferObj?.message);
							return;
						}
						if (bufferObj.event === "message" || bufferObj.event === "agent_message") {
							onData(unicodeToChar(bufferObj.answer), isFirstMessage, {
								conversationId: bufferObj.conversation_id,
								taskId: bufferObj.task_id,
								messageId: bufferObj.id
							});
							isFirstMessage = false;
						} else if (bufferObj.event === "agent_thought") onThought?.(bufferObj);
						else if (bufferObj.event === "message_file") onFile?.(bufferObj);
						else if (bufferObj.event === "message_end") onMessageEnd?.(bufferObj);
						else if (bufferObj.event === "message_replace") onMessageReplace?.(bufferObj);
						else if (bufferObj.event === "workflow_started") onWorkflowStarted?.(bufferObj);
						else if (bufferObj.event === "workflow_finished") onWorkflowFinished?.(bufferObj);
						else if (bufferObj.event === "node_started") onNodeStarted?.(bufferObj);
						else if (bufferObj.event === "node_finished") onNodeFinished?.(bufferObj);
						else if (bufferObj.event === "iteration_started") onIterationStart?.(bufferObj);
						else if (bufferObj.event === "iteration_next") onIterationNext?.(bufferObj);
						else if (bufferObj.event === "iteration_completed") onIterationFinish?.(bufferObj);
						else if (bufferObj.event === "loop_started") onLoopStart?.(bufferObj);
						else if (bufferObj.event === "loop_next") onLoopNext?.(bufferObj);
						else if (bufferObj.event === "loop_completed") onLoopFinish?.(bufferObj);
						else if (bufferObj.event === "node_retry") onNodeRetry?.(bufferObj);
						else if (bufferObj.event === "parallel_branch_started") onParallelBranchStarted?.(bufferObj);
						else if (bufferObj.event === "parallel_branch_finished") onParallelBranchFinished?.(bufferObj);
						else if (bufferObj.event === "text_chunk") onTextChunk?.(bufferObj);
						else if (bufferObj.event === "text_replace") onTextReplace?.(bufferObj);
						else if (bufferObj.event === "agent_log") onAgentLog?.(bufferObj);
						else if (bufferObj.event === "tts_message") onTTSChunk?.(bufferObj.message_id, bufferObj.audio, bufferObj.audio_type);
						else if (bufferObj.event === "tts_message_end") onTTSEnd?.(bufferObj.message_id, bufferObj.audio);
						else if (bufferObj.event === "human_input_required") onHumanInputRequired?.(bufferObj);
						else if (bufferObj.event === "human_input_form_filled") onHumanInputFormFilled?.(bufferObj);
						else if (bufferObj.event === "human_input_form_timeout") onHumanInputFormTimeout?.(bufferObj);
						else if (bufferObj.event === "workflow_paused") onWorkflowPaused?.(bufferObj);
						else if (bufferObj.event === "datasource_processing") onDataSourceNodeProcessing?.(bufferObj);
						else if (bufferObj.event === "datasource_completed") onDataSourceNodeCompleted?.(bufferObj);
						else if (bufferObj.event === "datasource_error") onDataSourceNodeError?.(bufferObj);
						else console.warn(`Unknown event: ${bufferObj.event}`, bufferObj);
					}
				});
				buffer = lines[lines.length - 1];
			} catch (e) {
				onData("", false, {
					conversationId: void 0,
					messageId: "",
					errorMessage: `${e}`
				});
				hasError = true;
				onCompleted?.(true, e);
				return;
			}
			if (!hasError) read();
		});
	}
	read();
};
var baseFetch = base;
var upload = async (options, isPublicAPI, url, searchParams) => {
	const urlPrefix = isPublicAPI ? PUBLIC_API_PREFIX : API_PREFIX;
	const shareCode = globalThis.location.pathname.split("/").slice(-1)[0];
	const defaultOptions = {
		method: "POST",
		url: (url ? `${urlPrefix}${url}` : `${urlPrefix}/files/upload`) + (searchParams || ""),
		headers: {
			[CSRF_HEADER_NAME]: api.get(CSRF_COOKIE_NAME()) || "",
			[PASSPORT_HEADER_NAME]: getWebAppPassport(shareCode),
			[WEB_APP_SHARE_CODE_HEADER_NAME]: shareCode
		}
	};
	const mergedOptions = {
		...defaultOptions,
		...options,
		url: options.url || defaultOptions.url,
		headers: {
			...defaultOptions.headers,
			...options.headers
		}
	};
	return new Promise((resolve, reject) => {
		const xhr = mergedOptions.xhr;
		xhr.open(mergedOptions.method, mergedOptions.url);
		for (const key in mergedOptions.headers) xhr.setRequestHeader(key, mergedOptions.headers[key]);
		xhr.withCredentials = true;
		xhr.responseType = "json";
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) if (xhr.status === 201) resolve(xhr.response);
			else reject(xhr);
		};
		if (mergedOptions.onprogress) xhr.upload.onprogress = mergedOptions.onprogress;
		xhr.send(mergedOptions.data);
	});
};
var ssePost = async (url, fetchOptions, otherOptions) => {
	const { isPublicAPI = false, onData, onCompleted, onThought, onFile, onMessageEnd, onMessageReplace, onWorkflowStarted, onWorkflowFinished, onNodeStarted, onNodeFinished, onIterationStart, onIterationNext, onIterationFinish, onNodeRetry, onParallelBranchStarted, onParallelBranchFinished, onTextChunk, onTTSChunk, onTTSEnd, onTextReplace, onAgentLog, onError, getAbortController, onLoopStart, onLoopNext, onLoopFinish, onHumanInputRequired, onHumanInputFormFilled, onHumanInputFormTimeout, onWorkflowPaused, onDataSourceNodeProcessing, onDataSourceNodeCompleted, onDataSourceNodeError } = otherOptions;
	const abortController = new AbortController();
	const baseOptions = getBaseOptions();
	const shareCode = globalThis.location.pathname.split("/").slice(-1)[0];
	const options = Object.assign({}, baseOptions, {
		method: "POST",
		signal: abortController.signal,
		headers: new Headers({
			[CSRF_HEADER_NAME]: api.get(CSRF_COOKIE_NAME()) || "",
			[WEB_APP_SHARE_CODE_HEADER_NAME]: shareCode,
			[PASSPORT_HEADER_NAME]: getWebAppPassport(shareCode)
		})
	}, fetchOptions);
	if (!options.headers.get("Content-Type")) options.headers.set("Content-Type", ContentType.json);
	getAbortController?.(abortController);
	const urlWithPrefix = formatURL(url, isPublicAPI);
	const { body } = options;
	if (body) options.body = JSON.stringify(body);
	globalThis.fetch(urlWithPrefix, options).then((res) => {
		if (!/^[23]\d{2}$/.test(String(res.status))) {
			if (res.status === 401) if (isPublicAPI) res.json().then((data) => {
				if (isPublicAPI) {
					if (data.code === "web_app_access_denied") requiredWebSSOLogin(data.message, 403);
					if (data.code === "web_sso_auth_required") requiredWebSSOLogin();
					if (data.code === "unauthorized") requiredWebSSOLogin();
				}
			});
			else refreshAccessTokenOrReLogin(TIME_OUT).then(() => {
				ssePost(url, fetchOptions, otherOptions);
			}).catch((err) => {
				console.error(err);
			});
			else {
				res.json().then((data) => {
					Toast.notify({
						type: "error",
						message: data.message || "Server Error"
					});
				});
				onError?.("Server Error");
			}
			return;
		}
		return handleStream(res, (str, isFirstMessage, moreInfo) => {
			if (moreInfo.errorMessage) {
				onError?.(moreInfo.errorMessage, moreInfo.errorCode);
				if (moreInfo.errorMessage !== "AbortError: The user aborted a request." && !moreInfo.errorMessage.includes("TypeError: Cannot assign to read only property")) Toast.notify({
					type: "error",
					message: moreInfo.errorMessage
				});
				return;
			}
			onData?.(str, isFirstMessage, moreInfo);
		}, onCompleted, onThought, onMessageEnd, onMessageReplace, onFile, onWorkflowStarted, onWorkflowFinished, onNodeStarted, onNodeFinished, onIterationStart, onIterationNext, onIterationFinish, onLoopStart, onLoopNext, onLoopFinish, onNodeRetry, onParallelBranchStarted, onParallelBranchFinished, onTextChunk, onTTSChunk, onTTSEnd, onTextReplace, onAgentLog, onHumanInputRequired, onHumanInputFormFilled, onHumanInputFormTimeout, onWorkflowPaused, onDataSourceNodeProcessing, onDataSourceNodeCompleted, onDataSourceNodeError);
	}).catch((e) => {
		if (e.toString() !== "AbortError: The user aborted a request." && !e.toString().errorMessage.includes("TypeError: Cannot assign to read only property")) Toast.notify({
			type: "error",
			message: e
		});
		onError?.(e);
	});
};
var sseGet = async (url, fetchOptions, otherOptions) => {
	const { isPublicAPI = false, onData, onCompleted, onThought, onFile, onMessageEnd, onMessageReplace, onWorkflowStarted, onWorkflowFinished, onNodeStarted, onNodeFinished, onIterationStart, onIterationNext, onIterationFinish, onNodeRetry, onParallelBranchStarted, onParallelBranchFinished, onTextChunk, onTTSChunk, onTTSEnd, onTextReplace, onAgentLog, onError, getAbortController, onLoopStart, onLoopNext, onLoopFinish, onHumanInputRequired, onHumanInputFormFilled, onHumanInputFormTimeout, onWorkflowPaused, onDataSourceNodeProcessing, onDataSourceNodeCompleted, onDataSourceNodeError } = otherOptions;
	const abortController = new AbortController();
	const baseOptions = getBaseOptions();
	const shareCode = globalThis.location.pathname.split("/").slice(-1)[0];
	const options = Object.assign({}, baseOptions, {
		signal: abortController.signal,
		headers: new Headers({
			[CSRF_HEADER_NAME]: api.get(CSRF_COOKIE_NAME()) || "",
			[WEB_APP_SHARE_CODE_HEADER_NAME]: shareCode,
			[PASSPORT_HEADER_NAME]: getWebAppPassport(shareCode)
		})
	}, fetchOptions);
	if (!options.headers.get("Content-Type")) options.headers.set("Content-Type", ContentType.json);
	getAbortController?.(abortController);
	const urlWithPrefix = formatURL(url, isPublicAPI);
	globalThis.fetch(urlWithPrefix, options).then((res) => {
		if (!/^[23]\d{2}$/.test(String(res.status))) {
			if (res.status === 401) if (isPublicAPI) res.json().then((data) => {
				if (isPublicAPI) {
					if (data.code === "web_app_access_denied") requiredWebSSOLogin(data.message, 403);
					if (data.code === "web_sso_auth_required") requiredWebSSOLogin();
					if (data.code === "unauthorized") requiredWebSSOLogin();
				}
			});
			else refreshAccessTokenOrReLogin(TIME_OUT).then(() => {
				sseGet(url, fetchOptions, otherOptions);
			}).catch((err) => {
				console.error(err);
			});
			else {
				res.json().then((data) => {
					Toast.notify({
						type: "error",
						message: data.message || "Server Error"
					});
				});
				onError?.("Server Error");
			}
			return;
		}
		return handleStream(res, (str, isFirstMessage, moreInfo) => {
			if (moreInfo.errorMessage) {
				onError?.(moreInfo.errorMessage, moreInfo.errorCode);
				if (moreInfo.errorMessage !== "AbortError: The user aborted a request." && !moreInfo.errorMessage.includes("TypeError: Cannot assign to read only property")) Toast.notify({
					type: "error",
					message: moreInfo.errorMessage
				});
				return;
			}
			onData?.(str, isFirstMessage, moreInfo);
		}, onCompleted, onThought, onMessageEnd, onMessageReplace, onFile, onWorkflowStarted, onWorkflowFinished, onNodeStarted, onNodeFinished, onIterationStart, onIterationNext, onIterationFinish, onLoopStart, onLoopNext, onLoopFinish, onNodeRetry, onParallelBranchStarted, onParallelBranchFinished, onTextChunk, onTTSChunk, onTTSEnd, onTextReplace, onAgentLog, onHumanInputRequired, onHumanInputFormFilled, onHumanInputFormTimeout, onWorkflowPaused, onDataSourceNodeProcessing, onDataSourceNodeCompleted, onDataSourceNodeError);
	}).catch((e) => {
		if (e.toString() !== "AbortError: The user aborted a request." && !e.toString().includes("TypeError: Cannot assign to read only property")) Toast.notify({
			type: "error",
			message: e
		});
		onError?.(e);
	});
};
var request = async (url, options = {}, otherOptions) => {
	try {
		const otherOptionsForBaseFetch = otherOptions || {};
		const [err, resp] = await asyncRunSafe(baseFetch(url, options, otherOptionsForBaseFetch));
		if (err === null) return resp;
		const errResp = err;
		if (errResp.status === 401) {
			const [parseErr, errRespData] = await asyncRunSafe(errResp.json());
			const loginUrl = `${globalThis.location.origin}${basePath}/signin`;
			if (parseErr) {
				globalThis.location.href = loginUrl;
				return Promise.reject(err);
			}
			if (/\/login/.test(url)) return Promise.reject(errRespData);
			const { code, message } = errRespData;
			if (code === "web_app_access_denied") {
				requiredWebSSOLogin(message, 403);
				return Promise.reject(err);
			}
			if (code === "web_sso_auth_required") {
				requiredWebSSOLogin();
				return Promise.reject(err);
			}
			if (code === "unauthorized_and_force_logout") {
				globalThis.location.reload();
				return Promise.reject(err);
			}
			const { isPublicAPI = false, silent } = otherOptionsForBaseFetch;
			if (isPublicAPI && code === "unauthorized") {
				requiredWebSSOLogin();
				return Promise.reject(err);
			}
			if (code === "init_validate_failed" && IS_CE_EDITION && !silent) {
				Toast.notify({
					type: "error",
					message,
					duration: 4e3
				});
				return Promise.reject(err);
			}
			if (code === "not_init_validated" && IS_CE_EDITION) {
				jumpTo(`${globalThis.location.origin}${basePath}/init`);
				return Promise.reject(err);
			}
			if (code === "not_setup" && IS_CE_EDITION) {
				jumpTo(`${globalThis.location.origin}${basePath}/install`);
				return Promise.reject(err);
			}
			const [refreshErr] = await asyncRunSafe(refreshAccessTokenOrReLogin(TIME_OUT));
			if (refreshErr === null) return baseFetch(url, options, otherOptionsForBaseFetch);
			if (location.pathname !== `${basePath}/signin` || !IS_CE_EDITION) {
				jumpTo(loginUrl);
				return Promise.reject(err);
			}
			if (!silent) {
				Toast.notify({
					type: "error",
					message
				});
				return Promise.reject(err);
			}
			jumpTo(loginUrl);
			return Promise.reject(err);
		} else return Promise.reject(err);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};
var get = (url, options = {}, otherOptions) => {
	return request(url, Object.assign({}, options, { method: "GET" }), otherOptions);
};
var getPublic = (url, options = {}, otherOptions) => {
	return get(url, options, {
		...otherOptions,
		isPublicAPI: true
	});
};
var getMarketplace = (url, options = {}, otherOptions) => {
	return get(url, options, {
		...otherOptions,
		isMarketplaceAPI: true
	});
};
var post = (url, options = {}, otherOptions) => {
	return request(url, Object.assign({}, options, { method: "POST" }), otherOptions);
};
var postMarketplace = (url, options = {}, otherOptions) => {
	return post(url, options, {
		...otherOptions,
		isMarketplaceAPI: true
	});
};
var postPublic = (url, options = {}, otherOptions) => {
	return post(url, options, {
		...otherOptions,
		isPublicAPI: true
	});
};
var put = (url, options = {}, otherOptions) => {
	return request(url, Object.assign({}, options, { method: "PUT" }), otherOptions);
};
var del = (url, options = {}, otherOptions) => {
	return request(url, Object.assign({}, options, { method: "DELETE" }), otherOptions);
};
var delPublic = (url, options = {}, otherOptions) => {
	return del(url, options, {
		...otherOptions,
		isPublicAPI: true
	});
};
var patch = (url, options = {}, otherOptions) => {
	return request(url, Object.assign({}, options, { method: "PATCH" }), otherOptions);
};
var patchPublic = (url, options = {}, otherOptions) => {
	return patch(url, options, {
		...otherOptions,
		isPublicAPI: true
	});
};
//#endregion
export { ACTIVE_KEY as $, visuallyHidden as $t, useOpenChangeComplete as A, decrementPress as At, getTabbableBeforeElement as B, inputPaste as Bt, webAppLogout as C, createSelector as Ct, FloatingPortal as D, createGenericEventDetails as Dt, FloatingPortalLite as E, createChangeEventDetails as Et, inertValue as F, imperativeAction as Ft, getFloatingFocusElement as G, outsidePress as Gt, isOutsideEvent as H, keyboard as Ht, FocusGuard as I, incrementPress as It, isRootElement as J, triggerFocus as Jt, getTarget as K, siblingOpen as Kt, getNextTabbable as L, inputBlur as Lt, resolveRef as M, drag as Mt, TransitionStatusDataAttributes as N, escapeKey as Nt, usePortalContext as O, cancelOpen as Ot, transitionStatusMapping as P, focusOut as Pt, matchesFocusVisible as Q, useId$1 as Qt, getPreviousTabbable as R, inputChange as Rt, webAppLoginStatus as S, fastComponentRef as St, toast as T, api as Tt, activeElement as U, listNavigation as Ut, getTabbableOptions as V, itemPress as Vt, contains as W, none as Wt, isTypeableCombobox as X, triggerPress as Xt, isTargetInsideEnabledTrigger as Y, triggerHover as Yt, isTypeableElement as Z, windowResize as Zt, ContentType as _, useAnimationFrame as _t, getPublic as a, getPurifyHref as an, SELECTED_KEY as at, setWebAppAccessToken as b, useStore as bt, patchPublic as c, escape$1 as cn, isIOS as ct, postPublic as d, isSafari as dt, visuallyHiddenInput as en, ARROW_DOWN as et, put as f, isWebKit as ft, upload as g, AnimationFrame as gt, ssePost as h, useTimeout as ht, getMarketplace as i, correctToolProvider as in, FOCUSABLE_ATTRIBUTE as it, useAnimationsFinished as j, disabled as jt, createAttribute as k, closePress as kt, post as l, require_with_selector as ln, isJSDOM as lt, sseGet as m, Timeout as mt, delPublic as n, canFindTool as nn, ARROW_RIGHT as nt, handleStream as o, getTextWidthWithCanvas as on, TYPEABLE_SELECTOR as ot, request as p, ownerDocument as pt, isEventTargetWithin as q, trackPress as qt, get as r, correctModelProvider as rn, ARROW_UP as rt, patch as s, sleep as sn, isAndroid as st, del as t, asyncRunSafe as tn, ARROW_LEFT as tt, postMarketplace as u, isMac as ut, postWithKeepalive as v, ReactStore as vt, ToastHost as w, useOnMount as wt, setWebAppPassport as x, fastComponent as xt, getWebAppAccessToken as y, Store as yt, getTabbableAfterElement as z, inputClear as zt };
