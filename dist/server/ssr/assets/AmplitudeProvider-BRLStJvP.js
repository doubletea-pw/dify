import { a as __read, c as __values, i as __generator, n as __awaiter, r as __extends, s as __spreadArray, t as __assign } from "./tslib.es6-BSnKF3gl.js";
import { et as isAmplitudeEnabled, r as AMPLITUDE_API_KEY } from "./config-Dopncj5R.js";
import "./app-DPjSIfgb.js";
import { C as SpecialEventType$1, _ as Config, b as returnWrapper, c as getOrCreateWindowMessenger, d as BaseTransport, f as generateHashCode, g as debugWrapper, h as AnalyticsConnector, l as AMPLITUDE_ORIGINS_MAP, m as getAnalyticsConnector$1, p as isTimestampInSample, r as init$1, s as enableBackgroundCapture, t as add, u as RemoteConfigClient, v as Logger, x as Status, y as LogLevel } from "./esm-CfW7DN4f.js";
import { t as getGlobalScope } from "./global-scope-C4bxlREa.js";
import { t as openDB } from "./build-qjJVTRaf.js";
import * as React$1 from "react";
import { useEffect } from "react";
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/transports/fetch.js
var FetchTransport = function(_super) {
	__extends(FetchTransport, _super);
	function FetchTransport(customHeaders) {
		if (customHeaders === void 0) customHeaders = {};
		var _this = _super.call(this) || this;
		_this.customHeaders = customHeaders;
		return _this;
	}
	FetchTransport.prototype.send = function(serverUrl, payload) {
		return __awaiter(this, void 0, void 0, function() {
			var options, response, responseText;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						/* istanbul ignore if */
						if (typeof fetch === "undefined") throw new Error("FetchTransport is not supported");
						options = {
							headers: __assign({
								"Content-Type": "application/json",
								Accept: "*/*"
							}, this.customHeaders),
							body: JSON.stringify(payload),
							method: "POST"
						};
						return [4, fetch(serverUrl, options)];
					case 1:
						response = _a.sent();
						return [4, response.text()];
					case 2:
						responseText = _a.sent();
						try {
							return [2, this.buildResponse(JSON.parse(responseText))];
						} catch (_b) {
							return [2, this.buildResponse({ code: response.status })];
						}
						return [2];
				}
			});
		});
	};
	return FetchTransport;
}(BaseTransport);
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/types/server-zone.js
/**
* @deprecated use ServerZoneType instead
*/
var ServerZone;
(function(ServerZone) {
	ServerZone["US"] = "US";
	ServerZone["EU"] = "EU";
	/**
	* Add for session-replay-browser migration from analytics-type v1.x.
	*/
	ServerZone["STAGING"] = "STAGING";
})(ServerZone || (ServerZone = {}));
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/constants.js
var DEFAULT_EVENT_PROPERTY_PREFIX$1 = "[Amplitude]";
var DEFAULT_SESSION_REPLAY_PROPERTY$1 = "".concat(DEFAULT_EVENT_PROPERTY_PREFIX$1, " Session Replay ID");
var DEFAULT_SERVER_ZONE = ServerZone.US;
var DEFAULT_PERFORMANCE_CONFIG = { enabled: true };
var DEFAULT_URL_CHANGE_POLLING_INTERVAL = 1e3;
var SESSION_REPLAY_DEBUG_PROPERTY = "".concat(DEFAULT_EVENT_PROPERTY_PREFIX$1, " Session Replay Debug");
var BLOCK_CLASS = "amp-block";
var MASK_TEXT_CLASS = "amp-mask";
var SESSION_REPLAY_SERVER_URL = "https://api-sr.amplitude.com/sessions/v2/track";
var SESSION_REPLAY_EU_URL = "https://api-sr.eu.amplitude.com/sessions/v2/track";
var SESSION_REPLAY_STAGING_URL = "https://api-sr.stag2.amplitude.com/sessions/v2/track";
"".concat("AMP", "_replay_unsent");
var MAX_EVENT_LIST_SIZE = 1 * 1e6;
var INTERACTION_MIN_INTERVAL = 3e4;
var INTERACTION_MAX_INTERVAL = 6e4;
var MAX_INTERVAL = 10 * 1e3;
var KB_SIZE = 1024;
var MAX_URL_LENGTH = 1e3;
var CustomRRwebEvent;
(function(CustomRRwebEvent) {
	CustomRRwebEvent["GET_SR_PROPS"] = "get-sr-props";
	CustomRRwebEvent["DEBUG_INFO"] = "debug-info";
	CustomRRwebEvent["FETCH_REQUEST"] = "fetch-request";
	CustomRRwebEvent["METADATA"] = "metadata";
	CustomRRwebEvent["TARGETING_DECISION"] = "targeting-decision";
})(CustomRRwebEvent || (CustomRRwebEvent = {}));
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/logger.js
var SafeLoggerProvider = function() {
	function SafeLoggerProvider(loggerProvider) {
		this.logger = loggerProvider;
		this.log = this.getSafeMethod("log");
		this.warn = this.getSafeMethod("warn");
		this.error = this.getSafeMethod("error");
		this.debug = this.getSafeMethod("debug");
	}
	SafeLoggerProvider.prototype.getSafeMethod = function(method) {
		var _a;
		if (!this.logger) return (function() {});
		var fn = this.logger[method];
		if (typeof fn === "function") return ((_a = fn.__rrweb_original__) !== null && _a !== void 0 ? _a : fn).bind(this.logger);
		return (function() {});
	};
	SafeLoggerProvider.prototype.enable = function(logLevel) {
		this.logger.enable(logLevel);
	};
	SafeLoggerProvider.prototype.disable = function() {
		this.logger.disable();
	};
	return SafeLoggerProvider;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/config/types.js
var DEFAULT_MASK_LEVEL = "medium";
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/utils/get-input-type.js
function toLowerCase(str) {
	return str.toLowerCase();
}
/**
* Get the type of an input element.
* This takes care of the case where a password input is changed to a text input.
* In this case, we continue to consider this of type password, in order to avoid leaking sensitive data
* where passwords should be masked.
*/
function getInputType(element) {
	var type = element.type;
	return element.hasAttribute("data-rr-is-password") ? "password" : type ? toLowerCase(type) : null;
}
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/helpers.js
/**
* Light: Subset of inputs
* Medium: All inputs
* Conservative: All inputs and all texts
*/
var isMaskedForLevel = function(elementType, level, element) {
	switch (level) {
		case "light":
			if (elementType !== "input") return true;
			var inputType = element ? getInputType(element) : "";
			/* istanbul ignore if */ if (!inputType) return false;
			if ([
				"password",
				"hidden",
				"email",
				"tel"
			].includes(inputType)) return true;
			if (element.autocomplete.startsWith("cc-")) return true;
			return false;
		case "medium":
		case "conservative": return true;
		default: return isMaskedForLevel(elementType, DEFAULT_MASK_LEVEL, element);
	}
};
/**
* Checks if the given element set to be masked by rrweb
*
* Priority is:
*  1. [In code] Element/class based masking/unmasking <> [Config based] Selector based masking/unmasking
*  2. Use app defaults
*/
var isMasked = function(elementType, config, element) {
	var _a, _b, _c;
	if (config === void 0) config = { defaultMaskLevel: DEFAULT_MASK_LEVEL };
	if (element) {
		if (element.closest(".amp-mask")) return true;
		if (((_a = config.maskSelector) !== null && _a !== void 0 ? _a : []).some(function(selector) {
			return element.closest(selector);
		})) return true;
		if (element.closest(".amp-unmask")) return false;
		if (((_b = config.unmaskSelector) !== null && _b !== void 0 ? _b : []).some(function(selector) {
			return element.closest(selector);
		})) return false;
	}
	return isMaskedForLevel(elementType, (_c = config.defaultMaskLevel) !== null && _c !== void 0 ? _c : DEFAULT_MASK_LEVEL, element);
};
var maskFn = function(elementType, config) {
	return function(text, element) {
		return isMasked(elementType, config, element) ? text.replace(/[^\s]/g, "*") : text;
	};
};
var maskAttributeFn = function(config) {
	return function(key, value, element) {
		var _a;
		if (key === "style") return value;
		if (!((_a = config === null || config === void 0 ? void 0 : config.maskAttributes) !== null && _a !== void 0 ? _a : []).includes(key)) return value;
		return isMasked("text", config, element) ? value.replace(/[^\s]/g, "*") : value;
	};
};
var getCurrentUrl = function() {
	var globalScope = getGlobalScope();
	return (globalScope === null || globalScope === void 0 ? void 0 : globalScope.location) ? globalScope.location.href : "";
};
var generateSessionReplayId = function(sessionId, deviceId) {
	return "".concat(deviceId, "/").concat(sessionId);
};
var getServerUrl = function(serverZone, trackServerUrl) {
	if (trackServerUrl) return trackServerUrl;
	if (serverZone === ServerZone.STAGING) return SESSION_REPLAY_STAGING_URL;
	if (serverZone === ServerZone.EU) return SESSION_REPLAY_EU_URL;
	return SESSION_REPLAY_SERVER_URL;
};
var isValidGlobUrl = function(globUrl) {
	if (typeof globUrl !== "string" || globUrl.trim() === "") return false;
	if (!/^\/|^https?:\/\/[^\s]+$/.test(globUrl)) return false;
	return true;
};
var globToRegex = function(glob) {
	var escaped = glob.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".");
	return new RegExp("^".concat(escaped, "$"));
};
var validateUGCFilterRules = function(ugcFilterRules) {
	if (!ugcFilterRules.every(function(rule) {
		return typeof rule.selector === "string" && typeof rule.replacement === "string";
	})) throw new Error("ugcFilterRules must be an array of objects with selector and replacement properties");
	if (!ugcFilterRules.every(function(rule) {
		return isValidGlobUrl(rule.selector);
	})) throw new Error("ugcFilterRules must be an array of objects with valid globs");
};
var getPageUrl = function(pageUrl, ugcFilterRules) {
	var e_1, _a;
	try {
		for (var ugcFilterRules_1 = __values(ugcFilterRules), ugcFilterRules_1_1 = ugcFilterRules_1.next(); !ugcFilterRules_1_1.done; ugcFilterRules_1_1 = ugcFilterRules_1.next()) {
			var rule = ugcFilterRules_1_1.value;
			var regex = globToRegex(rule.selector);
			if (regex.test(pageUrl)) return pageUrl.replace(regex, rule.replacement);
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (ugcFilterRules_1_1 && !ugcFilterRules_1_1.done && (_a = ugcFilterRules_1.return)) _a.call(ugcFilterRules_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	return pageUrl;
};
var getStorageSize = function() {
	return __awaiter(void 0, void 0, void 0, function() {
		var globalScope, _a, usage, quota, usageDetails, totalStorageSize, percentOfQuota;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					_b.trys.push([
						0,
						3,
						,
						4
					]);
					globalScope = getGlobalScope();
					if (!globalScope) return [3, 2];
					return [4, globalScope.navigator.storage.estimate()];
				case 1:
					_a = _b.sent(), usage = _a.usage, quota = _a.quota, usageDetails = _a.usageDetails;
					totalStorageSize = usage ? Math.round(usage / KB_SIZE) : 0;
					percentOfQuota = usage && quota ? Math.round((usage / quota + Number.EPSILON) * 1e3) / 1e3 : 0;
					return [2, {
						totalStorageSize,
						percentOfQuota,
						usageDetails: JSON.stringify(usageDetails)
					}];
				case 2: return [3, 4];
				case 3:
					_b.sent();
					return [3, 4];
				case 4: return [2, {
					totalStorageSize: 0,
					percentOfQuota: 0,
					usageDetails: ""
				}];
			}
		});
	});
};
var getDebugConfig = function(config) {
	var debugConfig = __assign({}, config);
	var apiKey = debugConfig.apiKey;
	debugConfig.apiKey = "****".concat(apiKey.substring(apiKey.length - 4));
	return debugConfig;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/config/local-config.js
var getDefaultConfig = function() {
	return {
		flushMaxRetries: 2,
		logLevel: LogLevel.Warn,
		loggerProvider: new Logger(),
		transportProvider: new FetchTransport()
	};
};
var SessionReplayLocalConfig = function(_super) {
	__extends(SessionReplayLocalConfig, _super);
	function SessionReplayLocalConfig(apiKey, options) {
		var _this = this;
		var _a, _b, _c, _d, _e, _f;
		var defaultConfig = getDefaultConfig();
		_this = _super.call(this, __assign(__assign({
			transportProvider: defaultConfig.transportProvider,
			loggerProvider: new SafeLoggerProvider(options.loggerProvider || defaultConfig.loggerProvider)
		}, options), { apiKey })) || this;
		_this.flushMaxRetries = options.flushMaxRetries !== void 0 && options.flushMaxRetries <= defaultConfig.flushMaxRetries ? options.flushMaxRetries : defaultConfig.flushMaxRetries;
		_this.apiKey = apiKey;
		_this.sampleRate = options.sampleRate || 0;
		_this.serverZone = options.serverZone || DEFAULT_SERVER_ZONE;
		_this.configServerUrl = options.configServerUrl;
		_this.trackServerUrl = options.trackServerUrl;
		_this.shouldInlineStylesheet = options.shouldInlineStylesheet;
		_this.version = options.version;
		_this.performanceConfig = options.performanceConfig || DEFAULT_PERFORMANCE_CONFIG;
		_this.storeType = (_a = options.storeType) !== null && _a !== void 0 ? _a : "idb";
		_this.applyBackgroundColorToBlockedElements = (_b = options.applyBackgroundColorToBlockedElements) !== null && _b !== void 0 ? _b : false;
		_this.enableUrlChangePolling = (_c = options.enableUrlChangePolling) !== null && _c !== void 0 ? _c : false;
		_this.urlChangePollingInterval = (_d = options.urlChangePollingInterval) !== null && _d !== void 0 ? _d : DEFAULT_URL_CHANGE_POLLING_INTERVAL;
		_this.captureDocumentTitle = (_e = options.captureDocumentTitle) !== null && _e !== void 0 ? _e : false;
		if (options.privacyConfig) _this.privacyConfig = options.privacyConfig;
		if (options.interactionConfig) {
			_this.interactionConfig = options.interactionConfig;
			if (_this.interactionConfig.ugcFilterRules) validateUGCFilterRules(_this.interactionConfig.ugcFilterRules);
		}
		if (options.debugMode) _this.debugMode = options.debugMode;
		if (options.useWebWorker !== void 0) _this.useWebWorker = options.useWebWorker;
		else {
			var legacyOptions = options;
			if (((_f = legacyOptions.experimental) === null || _f === void 0 ? void 0 : _f.useWebWorker) !== void 0) _this.useWebWorker = legacyOptions.experimental.useWebWorker;
		}
		if (options.omitElementTags) _this.omitElementTags = options.omitElementTags;
		return _this;
	}
	return SessionReplayLocalConfig;
}(Config);
//#endregion
//#region node_modules/.pnpm/@amplitude+rrweb-types@2.0.0-alpha.36/node_modules/@amplitude/rrweb-types/dist/rrweb-types.js
var EventType = /* @__PURE__ */ ((EventType2) => {
	EventType2[EventType2["DomContentLoaded"] = 0] = "DomContentLoaded";
	EventType2[EventType2["Load"] = 1] = "Load";
	EventType2[EventType2["FullSnapshot"] = 2] = "FullSnapshot";
	EventType2[EventType2["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
	EventType2[EventType2["Meta"] = 4] = "Meta";
	EventType2[EventType2["Custom"] = 5] = "Custom";
	EventType2[EventType2["Plugin"] = 6] = "Plugin";
	return EventType2;
})(EventType || {});
var MouseInteractions = /* @__PURE__ */ ((MouseInteractions2) => {
	MouseInteractions2[MouseInteractions2["MouseUp"] = 0] = "MouseUp";
	MouseInteractions2[MouseInteractions2["MouseDown"] = 1] = "MouseDown";
	MouseInteractions2[MouseInteractions2["Click"] = 2] = "Click";
	MouseInteractions2[MouseInteractions2["ContextMenu"] = 3] = "ContextMenu";
	MouseInteractions2[MouseInteractions2["DblClick"] = 4] = "DblClick";
	MouseInteractions2[MouseInteractions2["Focus"] = 5] = "Focus";
	MouseInteractions2[MouseInteractions2["Blur"] = 6] = "Blur";
	MouseInteractions2[MouseInteractions2["TouchStart"] = 7] = "TouchStart";
	MouseInteractions2[MouseInteractions2["TouchMove_Departed"] = 8] = "TouchMove_Departed";
	MouseInteractions2[MouseInteractions2["TouchEnd"] = 9] = "TouchEnd";
	MouseInteractions2[MouseInteractions2["TouchCancel"] = 10] = "TouchCancel";
	return MouseInteractions2;
})(MouseInteractions || {});
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/config/joined-config.js
var removeInvalidSelectorsFromPrivacyConfig = function(privacyConfig, loggerProvider) {
	var fragment = document.createDocumentFragment();
	var dropInvalidSelectors = function(selectors) {
		if (selectors === void 0) selectors = [];
		if (typeof selectors === "string") selectors = [selectors];
		selectors = selectors.filter(function(selector) {
			try {
				fragment.querySelector(selector);
			} catch (_a) {
				loggerProvider.warn("[session-replay-browser] omitting selector \"".concat(selector, "\" because it is invalid"));
				return false;
			}
			return true;
		});
		if (selectors.length === 0) return;
		return selectors;
	};
	privacyConfig.blockSelector = dropInvalidSelectors(privacyConfig.blockSelector);
	privacyConfig.maskSelector = dropInvalidSelectors(privacyConfig.maskSelector);
	privacyConfig.unmaskSelector = dropInvalidSelectors(privacyConfig.unmaskSelector);
	return privacyConfig;
};
var SessionReplayJoinedConfigGenerator = function() {
	function SessionReplayJoinedConfigGenerator(remoteConfigClient, localConfig) {
		this.localConfig = localConfig;
		this.remoteConfigClient = remoteConfigClient;
	}
	SessionReplayJoinedConfigGenerator.prototype.generateJoinedConfig = function() {
		var _a, _b, _c, _d, _e;
		return __awaiter(this, void 0, void 0, function() {
			var config, sessionReplayRemoteConfig, error_1, samplingConfig, remotePrivacyConfig, targetingConfig, localPrivacyConfig, joinedPrivacyConfig, privacyConfigSelectorMap, selectorMap, _f, _g, _h, selector, selectorType;
			var e_1, _j;
			var _this = this;
			return __generator(this, function(_k) {
				switch (_k.label) {
					case 0:
						config = __assign({}, this.localConfig);
						config.optOut = this.localConfig.optOut;
						config.captureEnabled = true;
						_k.label = 1;
					case 1:
						_k.trys.push([
							1,
							3,
							,
							4
						]);
						return [4, new Promise(function(resolve, reject) {
							_this.remoteConfigClient.subscribe("configs.sessionReplay", "all", function(remoteConfig, source) {
								var _a;
								_this.localConfig.loggerProvider.debug("Session Replay remote configuration received from ".concat(source, ":"), JSON.stringify(remoteConfig, null, 2));
								if (!remoteConfig) {
									reject(/* @__PURE__ */ new Error("No remote config received"));
									return;
								}
								var namespaceConfig = remoteConfig;
								var samplingConfig = namespaceConfig.sr_sampling_config;
								var privacyConfig = namespaceConfig.sr_privacy_config;
								var targetingConfig = namespaceConfig.sr_targeting_config;
								var ugcFilterRules = (_a = config.interactionConfig) === null || _a === void 0 ? void 0 : _a.ugcFilterRules;
								config.interactionConfig = namespaceConfig.sr_interaction_config;
								if (config.interactionConfig && ugcFilterRules) config.interactionConfig.ugcFilterRules = ugcFilterRules;
								config.loggingConfig = namespaceConfig.sr_logging_config;
								if (samplingConfig || privacyConfig || targetingConfig) {
									sessionReplayRemoteConfig = {};
									if (samplingConfig) sessionReplayRemoteConfig.sr_sampling_config = samplingConfig;
									if (privacyConfig) sessionReplayRemoteConfig.sr_privacy_config = privacyConfig;
									if (targetingConfig) sessionReplayRemoteConfig.sr_targeting_config = targetingConfig;
								}
								resolve();
							});
						})];
					case 2:
						_k.sent();
						return [3, 4];
					case 3:
						error_1 = _k.sent();
						this.localConfig.loggerProvider.error("Failed to generate joined config: ", error_1);
						config.captureEnabled = false;
						return [2, {
							localConfig: this.localConfig,
							joinedConfig: config,
							remoteConfig: void 0
						}];
					case 4:
						if (!sessionReplayRemoteConfig) return [2, {
							localConfig: this.localConfig,
							joinedConfig: config,
							remoteConfig: sessionReplayRemoteConfig
						}];
						samplingConfig = sessionReplayRemoteConfig.sr_sampling_config, remotePrivacyConfig = sessionReplayRemoteConfig.sr_privacy_config, targetingConfig = sessionReplayRemoteConfig.sr_targeting_config;
						if (samplingConfig && Object.keys(samplingConfig).length > 0) {
							if (Object.prototype.hasOwnProperty.call(samplingConfig, "capture_enabled")) config.captureEnabled = samplingConfig.capture_enabled;
							else config.captureEnabled = false;
							if (Object.prototype.hasOwnProperty.call(samplingConfig, "sample_rate")) config.sampleRate = samplingConfig.sample_rate;
						} else {
							config.captureEnabled = true;
							this.localConfig.loggerProvider.debug("Remote config successfully fetched, but no values set for project, Session Replay capture enabled.");
						}
						if (remotePrivacyConfig) {
							localPrivacyConfig = (_a = config.privacyConfig) !== null && _a !== void 0 ? _a : {};
							joinedPrivacyConfig = {
								defaultMaskLevel: (_c = (_b = remotePrivacyConfig.defaultMaskLevel) !== null && _b !== void 0 ? _b : localPrivacyConfig.defaultMaskLevel) !== null && _c !== void 0 ? _c : "medium",
								blockSelector: [],
								maskSelector: [],
								unmaskSelector: [],
								maskAttributes: __spreadArray([], __read(new Set(__spreadArray(__spreadArray([], __read((_d = localPrivacyConfig.maskAttributes) !== null && _d !== void 0 ? _d : []), false), __read((_e = remotePrivacyConfig.maskAttributes) !== null && _e !== void 0 ? _e : []), false))), false)
							};
							privacyConfigSelectorMap = function(privacyConfig) {
								var e_2, _a, e_3, _b, e_4, _c;
								var _d, _e, _f;
								var selectorMap = {};
								if (typeof privacyConfig.blockSelector === "string") privacyConfig.blockSelector = [privacyConfig.blockSelector];
								try {
									for (var _g = __values((_d = privacyConfig.blockSelector) !== null && _d !== void 0 ? _d : []), _h = _g.next(); !_h.done; _h = _g.next()) {
										var selector = _h.value;
										selectorMap[selector] = "block";
									}
								} catch (e_2_1) {
									e_2 = { error: e_2_1 };
								} finally {
									try {
										if (_h && !_h.done && (_a = _g.return)) _a.call(_g);
									} finally {
										if (e_2) throw e_2.error;
									}
								}
								try {
									for (var _j = __values((_e = privacyConfig.maskSelector) !== null && _e !== void 0 ? _e : []), _k = _j.next(); !_k.done; _k = _j.next()) {
										var selector = _k.value;
										selectorMap[selector] = "mask";
									}
								} catch (e_3_1) {
									e_3 = { error: e_3_1 };
								} finally {
									try {
										if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
									} finally {
										if (e_3) throw e_3.error;
									}
								}
								try {
									for (var _l = __values((_f = privacyConfig.unmaskSelector) !== null && _f !== void 0 ? _f : []), _m = _l.next(); !_m.done; _m = _l.next()) {
										var selector = _m.value;
										selectorMap[selector] = "unmask";
									}
								} catch (e_4_1) {
									e_4 = { error: e_4_1 };
								} finally {
									try {
										if (_m && !_m.done && (_c = _l.return)) _c.call(_l);
									} finally {
										if (e_4) throw e_4.error;
									}
								}
								return selectorMap;
							};
							selectorMap = __assign(__assign({}, privacyConfigSelectorMap(localPrivacyConfig)), privacyConfigSelectorMap(remotePrivacyConfig));
							try {
								for (_f = __values(Object.entries(selectorMap)), _g = _f.next(); !_g.done; _g = _f.next()) {
									_h = __read(_g.value, 2), selector = _h[0], selectorType = _h[1];
									if (selectorType === "mask") joinedPrivacyConfig.maskSelector.push(selector);
									else if (selectorType === "block") joinedPrivacyConfig.blockSelector.push(selector);
									else if (selectorType === "unmask") joinedPrivacyConfig.unmaskSelector.push(selector);
								}
							} catch (e_1_1) {
								e_1 = { error: e_1_1 };
							} finally {
								try {
									if (_g && !_g.done && (_j = _f.return)) _j.call(_f);
								} finally {
									if (e_1) throw e_1.error;
								}
							}
							config.privacyConfig = removeInvalidSelectorsFromPrivacyConfig(joinedPrivacyConfig, this.localConfig.loggerProvider);
						}
						if (targetingConfig && Object.keys(targetingConfig).length > 0) config.targetingConfig = targetingConfig;
						this.localConfig.loggerProvider.debug(JSON.stringify({
							name: "session replay joined config",
							config: getDebugConfig(config)
						}, null, 2));
						return [2, {
							localConfig: this.localConfig,
							joinedConfig: config,
							remoteConfig: sessionReplayRemoteConfig
						}];
				}
			});
		});
	};
	return SessionReplayJoinedConfigGenerator;
}();
var createSessionReplayJoinedConfigGenerator = function(apiKey, options) {
	return __awaiter(void 0, void 0, void 0, function() {
		var localConfig, remoteConfigClient;
		return __generator(this, function(_a) {
			localConfig = new SessionReplayLocalConfig(apiKey, options);
			remoteConfigClient = new RemoteConfigClient(apiKey, localConfig.loggerProvider, localConfig.serverZone, options.configServerUrl);
			return [2, new SessionReplayJoinedConfigGenerator(remoteConfigClient, localConfig)];
		});
	});
};
//#endregion
//#region node_modules/.pnpm/@amplitude+rrweb-packer@2.0.0-alpha.36/node_modules/@amplitude/rrweb-packer/dist/base-BHkG_thH.js
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]);
var fdeb = new u8([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]);
var clim = new u8([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]);
var freb = function(eb, start) {
	var b = new u16(31);
	for (var i = 0; i < 31; ++i) b[i] = start += 1 << eb[i - 1];
	var r = new u32(b[30]);
	for (var i = 1; i < 30; ++i) for (var j = b[i]; j < b[i + 1]; ++j) r[j] = j - b[i] << 5 | i;
	return [b, r];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
_b[0];
var revfd = _b[1];
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
	var x = (i & 43690) >>> 1 | (i & 21845) << 1;
	x = (x & 52428) >>> 2 | (x & 13107) << 2;
	x = (x & 61680) >>> 4 | (x & 3855) << 4;
	rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
}
var hMap = (function(cd, mb, r) {
	var s = cd.length;
	var i = 0;
	var l = new u16(mb);
	for (; i < s; ++i) ++l[cd[i] - 1];
	var le = new u16(mb);
	for (i = 0; i < mb; ++i) le[i] = le[i - 1] + l[i - 1] << 1;
	var co;
	if (r) {
		co = new u16(1 << mb);
		var rvb = 15 - mb;
		for (i = 0; i < s; ++i) if (cd[i]) {
			var sv = i << 4 | cd[i];
			var r_1 = mb - cd[i];
			var v = le[cd[i] - 1]++ << r_1;
			for (var m = v | (1 << r_1) - 1; v <= m; ++v) co[rev[v] >>> rvb] = sv;
		}
	} else {
		co = new u16(s);
		for (i = 0; i < s; ++i) co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
	}
	return co;
});
var flt = new u8(288);
for (var i = 0; i < 144; ++i) flt[i] = 8;
for (var i = 144; i < 256; ++i) flt[i] = 9;
for (var i = 256; i < 280; ++i) flt[i] = 7;
for (var i = 280; i < 288; ++i) flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i) fdt[i] = 5;
var flm = /* @__PURE__ */ hMap(flt, 9, 0), fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
var shft = function(p) {
	return (p / 8 >> 0) + (p & 7 && 1);
};
var slc = function(v, s, e) {
	if (e == null || e > v.length) e = v.length;
	var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
	n.set(v.subarray(s, e));
	return n;
};
var wbits = function(d, p, v) {
	v <<= p & 7;
	var o = p / 8 >> 0;
	d[o] |= v;
	d[o + 1] |= v >>> 8;
};
var wbits16 = function(d, p, v) {
	v <<= p & 7;
	var o = p / 8 >> 0;
	d[o] |= v;
	d[o + 1] |= v >>> 8;
	d[o + 2] |= v >>> 16;
};
var hTree = function(d, mb) {
	var t = [];
	for (var i = 0; i < d.length; ++i) if (d[i]) t.push({
		s: i,
		f: d[i]
	});
	var s = t.length;
	var t2 = t.slice();
	if (!s) return [new u8(0), 0];
	if (s == 1) {
		var v = new u8(t[0].s + 1);
		v[t[0].s] = 1;
		return [v, 1];
	}
	t.sort(function(a, b) {
		return a.f - b.f;
	});
	t.push({
		s: -1,
		f: 25001
	});
	var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
	t[0] = {
		s: -1,
		f: l.f + r.f,
		l,
		r
	};
	while (i1 != s - 1) {
		l = t[t[i0].f < t[i2].f ? i0++ : i2++];
		r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
		t[i1++] = {
			s: -1,
			f: l.f + r.f,
			l,
			r
		};
	}
	var maxSym = t2[0].s;
	for (var i = 1; i < s; ++i) if (t2[i].s > maxSym) maxSym = t2[i].s;
	var tr = new u16(maxSym + 1);
	var mbt = ln(t[i1 - 1], tr, 0);
	if (mbt > mb) {
		var i = 0, dt = 0;
		var lft = mbt - mb, cst = 1 << lft;
		t2.sort(function(a, b) {
			return tr[b.s] - tr[a.s] || a.f - b.f;
		});
		for (; i < s; ++i) {
			var i2_1 = t2[i].s;
			if (tr[i2_1] > mb) {
				dt += cst - (1 << mbt - tr[i2_1]);
				tr[i2_1] = mb;
			} else break;
		}
		dt >>>= lft;
		while (dt > 0) {
			var i2_2 = t2[i].s;
			if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;
			else ++i;
		}
		for (; i >= 0 && dt; --i) {
			var i2_3 = t2[i].s;
			if (tr[i2_3] == mb) {
				--tr[i2_3];
				++dt;
			}
		}
		mbt = mb;
	}
	return [new u8(tr), mbt];
};
var ln = function(n, l, d) {
	return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
	var s = c.length;
	while (s && !c[--s]);
	var cl = new u16(++s);
	var cli = 0, cln = c[0], cls = 1;
	var w = function(v) {
		cl[cli++] = v;
	};
	for (var i = 1; i <= s; ++i) if (c[i] == cln && i != s) ++cls;
	else {
		if (!cln && cls > 2) {
			for (; cls > 138; cls -= 138) w(32754);
			if (cls > 2) {
				w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
				cls = 0;
			}
		} else if (cls > 3) {
			w(cln), --cls;
			for (; cls > 6; cls -= 6) w(8304);
			if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
		}
		while (cls--) w(cln);
		cls = 1;
		cln = c[i];
	}
	return [cl.subarray(0, cli), s];
};
var clen = function(cf, cl) {
	var l = 0;
	for (var i = 0; i < cl.length; ++i) l += cf[i] * cl[i];
	return l;
};
var wfblk = function(out, pos, dat) {
	var s = dat.length;
	var o = shft(pos + 2);
	out[o] = s & 255;
	out[o + 1] = s >>> 8;
	out[o + 2] = out[o] ^ 255;
	out[o + 3] = out[o + 1] ^ 255;
	for (var i = 0; i < s; ++i) out[o + i + 4] = dat[i];
	return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
	wbits(out, p++, final);
	++lf[256];
	var _a2 = hTree(lf, 15), dlt = _a2[0], mlb = _a2[1];
	var _b2 = hTree(df, 15), ddt = _b2[0], mdb = _b2[1];
	var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
	var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
	var lcfreq = new u16(19);
	for (var i = 0; i < lclt.length; ++i) lcfreq[lclt[i] & 31]++;
	for (var i = 0; i < lcdt.length; ++i) lcfreq[lcdt[i] & 31]++;
	var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
	var nlcc = 19;
	for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);
	var flen = bl + 5 << 3;
	var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
	var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
	if (flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
	var lm, ll, dm, dl;
	wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
	if (dtlen < ftlen) {
		lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
		var llm = hMap(lct, mlcb, 0);
		wbits(out, p, nlc - 257);
		wbits(out, p + 5, ndc - 1);
		wbits(out, p + 10, nlcc - 4);
		p += 14;
		for (var i = 0; i < nlcc; ++i) wbits(out, p + 3 * i, lct[clim[i]]);
		p += 3 * nlcc;
		var lcts = [lclt, lcdt];
		for (var it = 0; it < 2; ++it) {
			var clct = lcts[it];
			for (var i = 0; i < clct.length; ++i) {
				var len = clct[i] & 31;
				wbits(out, p, llm[len]), p += lct[len];
				if (len > 15) wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
			}
		}
	} else lm = flm, ll = flt, dm = fdm, dl = fdt;
	for (var i = 0; i < li; ++i) if (syms[i] > 255) {
		var len = syms[i] >>> 18 & 31;
		wbits16(out, p, lm[len + 257]), p += ll[len + 257];
		if (len > 7) wbits(out, p, syms[i] >>> 23 & 31), p += fleb[len];
		var dst = syms[i] & 31;
		wbits16(out, p, dm[dst]), p += dl[dst];
		if (dst > 3) wbits16(out, p, syms[i] >>> 5 & 8191), p += fdeb[dst];
	} else wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
	wbits16(out, p, lm[256]);
	return p + ll[256];
};
var deo = /* @__PURE__ */ new u32([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]);
var dflt = function(dat, lvl, plvl, pre, post, lst) {
	var s = dat.length;
	var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7e3)) + post);
	var w = o.subarray(pre, o.length - post);
	var pos = 0;
	if (!lvl || s < 8) for (var i = 0; i <= s; i += 65535) {
		var e = i + 65535;
		if (e < s) pos = wfblk(w, pos, dat.subarray(i, e));
		else {
			w[i] = lst;
			pos = wfblk(w, pos, dat.subarray(i, s));
		}
	}
	else {
		var opt = deo[lvl - 1];
		var n = opt >>> 13, c = opt & 8191;
		var msk_1 = (1 << plvl) - 1;
		var prev = new u16(32768), head = new u16(msk_1 + 1);
		var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
		var hsh = function(i2) {
			return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
		};
		var syms = new u32(25e3);
		var lf = new u16(288), df = new u16(32);
		var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
		for (; i < s; ++i) {
			var hv = hsh(i);
			var imod = i & 32767;
			var pimod = head[hv];
			prev[imod] = pimod;
			head[hv] = imod;
			if (wi <= i) {
				var rem = s - i;
				if ((lc_1 > 7e3 || li > 24576) && rem > 423) {
					pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
					li = lc_1 = eb = 0, bs = i;
					for (var j = 0; j < 286; ++j) lf[j] = 0;
					for (var j = 0; j < 30; ++j) df[j] = 0;
				}
				var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
				if (rem > 2 && hv == hsh(i - dif)) {
					var maxn = Math.min(n, rem) - 1;
					var maxd = Math.min(32767, i);
					var ml = Math.min(258, rem);
					while (dif <= maxd && --ch_1 && imod != pimod) {
						if (dat[i + l] == dat[i + l - dif]) {
							var nl = 0;
							for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl);
							if (nl > l) {
								l = nl, d = dif;
								if (nl > maxn) break;
								var mmd = Math.min(dif, nl - 2);
								var md = 0;
								for (var j = 0; j < mmd; ++j) {
									var ti = i - dif + j + 32768 & 32767;
									var cd = ti - prev[ti] + 32768 & 32767;
									if (cd > md) md = cd, pimod = ti;
								}
							}
						}
						imod = pimod, pimod = prev[imod];
						dif += imod - pimod + 32768 & 32767;
					}
				}
				if (d) {
					syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
					var lin = revfl[l] & 31, din = revfd[d] & 31;
					eb += fleb[lin] + fdeb[din];
					++lf[257 + lin];
					++df[din];
					wi = i + l;
					++lc_1;
				} else {
					syms[li++] = dat[i];
					++lf[dat[i]];
				}
			}
		}
		pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
	}
	return slc(o, 0, pre + shft(pos) + post);
};
var adler = function() {
	var a = 1, b = 0;
	return {
		p: function(d) {
			var n = a, m = b;
			var l = d.length;
			for (var i = 0; i != l;) {
				var e = Math.min(i + 5552, l);
				for (; i < e; ++i) n += d[i], m += n;
				n %= 65521, m %= 65521;
			}
			a = n, b = m;
		},
		d: function() {
			return (a >>> 8 << 16 | (b & 255) << 8 | b >>> 8) + ((a & 255) << 23) * 2;
		}
	};
};
var dopt = function(dat, opt, pre, post, st) {
	return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, true);
};
var wbytes = function(d, b, v) {
	for (; v; ++b) d[b] = v, v >>>= 8;
};
var zlh = function(c, o) {
	var lv = o.level, fl2 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
	c[0] = 120, c[1] = fl2 << 6 | (fl2 ? 32 - 2 * fl2 : 1);
};
function zlibSync(data, opts) {
	if (opts === void 0) opts = {};
	var a = adler();
	a.p(data);
	var d = dopt(data, opts, 2, 4);
	return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
function strToU8(str, latin1) {
	var l = str.length;
	if (!latin1 && typeof TextEncoder != "undefined") return new TextEncoder().encode(str);
	var ar = new u8(str.length + (str.length >>> 1));
	var ai = 0;
	var w = function(v) {
		ar[ai++] = v;
	};
	for (var i = 0; i < l; ++i) {
		if (ai + 5 > ar.length) {
			var n = new u8(ai + 8 + (l - i << 1));
			n.set(ar);
			ar = n;
		}
		var c = str.charCodeAt(i);
		if (c < 128 || latin1) w(c);
		else if (c < 2048) w(192 | c >>> 6), w(128 | c & 63);
		else if (c > 55295 && c < 57344) c = 65536 + (c & 1047552) | str.charCodeAt(++i) & 1023, w(240 | c >>> 18), w(128 | c >>> 12 & 63), w(128 | c >>> 6 & 63), w(128 | c & 63);
		else w(224 | c >>> 12), w(128 | c >>> 6 & 63), w(128 | c & 63);
	}
	return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
	var r = "";
	if (!latin1 && typeof TextDecoder != "undefined") return new TextDecoder().decode(dat);
	for (var i = 0; i < dat.length;) {
		var c = dat[i++];
		if (c < 128 || latin1) r += String.fromCharCode(c);
		else if (c < 224) r += String.fromCharCode((c & 31) << 6 | dat[i++] & 63);
		else if (c < 240) r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | dat[i++] & 63);
		else c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | dat[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/@amplitude+rrweb-packer@2.0.0-alpha.36/node_modules/@amplitude/rrweb-packer/dist/pack.js
var pack = (event) => {
	const _e = {
		...event,
		v: "v1"
	};
	return strFromU8(zlibSync(strToU8(JSON.stringify(_e))), true);
};
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/events/event-compressor.js
var DEFAULT_TIMEOUT = 2e3;
var EventCompressor = function() {
	function EventCompressor(eventsManager, config, deviceId, workerScript) {
		var _this = this;
		var _a;
		this.taskQueue = [];
		this.isProcessing = false;
		this.compressEvent = function(event) {
			var packedEvent = pack(event);
			return JSON.stringify(packedEvent);
		};
		this.addCompressedEventToManager = function(compressedEvent, sessionId) {
			if (_this.eventsManager && _this.deviceId) _this.eventsManager.addEvent({
				event: {
					type: "replay",
					data: compressedEvent
				},
				sessionId,
				deviceId: _this.deviceId
			});
		};
		this.addCompressedEvent = function(event, sessionId) {
			if (_this.worker) try {
				_this.worker.postMessage({
					event,
					sessionId
				});
			} catch (err) {
				if (err.name === "DataCloneError") _this.worker.postMessage(JSON.stringify({
					event,
					sessionId
				}));
				else _this.config.loggerProvider.warn("Unexpected error while posting message to worker:", err);
			}
			else {
				var compressedEvent = _this.compressEvent(event);
				_this.addCompressedEventToManager(compressedEvent, sessionId);
			}
		};
		this.terminate = function() {
			var _a;
			(_a = _this.worker) === null || _a === void 0 || _a.terminate();
		};
		var globalScope = getGlobalScope();
		this.canUseIdleCallback = globalScope && "requestIdleCallback" in globalScope;
		this.eventsManager = eventsManager;
		this.config = config;
		this.deviceId = deviceId;
		this.timeout = ((_a = config.performanceConfig) === null || _a === void 0 ? void 0 : _a.timeout) || DEFAULT_TIMEOUT;
		if (workerScript) {
			config.loggerProvider.log("Enabling web worker for compression");
			try {
				var blob = new Blob([workerScript], { type: "application/javascript" });
				var blobUrl = URL.createObjectURL(blob);
				var worker_1 = new Worker(blobUrl);
				worker_1.onerror = function(e) {
					e.preventDefault();
					config.loggerProvider.error("Worker failed, falling back to non-worker compression:", e);
					worker_1.terminate();
					_this.worker = void 0;
				};
				worker_1.onmessage = function(e) {
					var _a = e.data, compressedEvent = _a.compressedEvent, sessionId = _a.sessionId;
					_this.addCompressedEventToManager(compressedEvent, sessionId);
				};
				this.worker = worker_1;
			} catch (error) {
				config.loggerProvider.error("Failed to create worker, falling back to non-worker compression:", error);
			}
		}
	}
	EventCompressor.prototype.scheduleIdleProcessing = function() {
		var _this = this;
		if (!this.isProcessing) {
			this.isProcessing = true;
			requestIdleCallback(function(idleDeadline) {
				_this.processQueue(idleDeadline);
			}, { timeout: this.timeout });
		}
	};
	EventCompressor.prototype.enqueueEvent = function(event, sessionId) {
		var _a;
		if (this.canUseIdleCallback && ((_a = this.config.performanceConfig) === null || _a === void 0 ? void 0 : _a.enabled)) {
			this.config.loggerProvider.debug("Enqueuing event for processing during idle time.");
			this.taskQueue.push({
				event,
				sessionId
			});
			this.scheduleIdleProcessing();
		} else {
			this.config.loggerProvider.debug("Processing event without idle callback.");
			this.addCompressedEvent(event, sessionId);
		}
	};
	EventCompressor.prototype.processQueue = function(idleDeadline) {
		var _this = this;
		while (this.taskQueue.length > 0 && (idleDeadline.timeRemaining() > 0 || idleDeadline.didTimeout)) {
			var task = this.taskQueue.shift();
			if (task) {
				var event_1 = task.event, sessionId = task.sessionId;
				this.addCompressedEvent(event_1, sessionId);
			}
		}
		if (this.taskQueue.length > 0) requestIdleCallback(function(idleDeadline) {
			_this.processQueue(idleDeadline);
		}, { timeout: this.timeout });
		else this.isProcessing = false;
	};
	return EventCompressor;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/messages.js
var UNEXPECTED_ERROR_MESSAGE = "Unexpected error occurred";
var UNEXPECTED_NETWORK_ERROR_MESSAGE = "Network error occurred, event batch rejected";
var MAX_RETRIES_EXCEEDED_MESSAGE = "Session replay event batch rejected due to exceeded retry count";
var STORAGE_FAILURE = "Failed to store session replay events in IndexedDB";
var MISSING_DEVICE_ID_MESSAGE = "Session replay event batch not sent due to missing device ID";
var MISSING_API_KEY_MESSAGE = "Session replay event batch not sent due to missing api key";
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/version.js
var VERSION$1 = "1.34.1";
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/track-destination.js
var SessionReplayTrackDestination = function() {
	function SessionReplayTrackDestination(_a) {
		var trackServerUrl = _a.trackServerUrl, loggerProvider = _a.loggerProvider, payloadBatcher = _a.payloadBatcher;
		this.storageKey = "";
		this.retryTimeout = 1e3;
		this.scheduled = null;
		this.queue = [];
		this.loggerProvider = loggerProvider;
		this.payloadBatcher = payloadBatcher ? payloadBatcher : function(payload) {
			return payload;
		};
		this.trackServerUrl = trackServerUrl;
	}
	SessionReplayTrackDestination.prototype.sendEventsList = function(destinationData) {
		this.addToQueue(__assign(__assign({}, destinationData), {
			attempts: 0,
			timeout: 0
		}));
	};
	SessionReplayTrackDestination.prototype.addToQueue = function() {
		var _this = this;
		var list = [];
		for (var _i = 0; _i < arguments.length; _i++) list[_i] = arguments[_i];
		list.filter(function(context) {
			if (context.attempts < (context.flushMaxRetries || 0)) {
				context.attempts += 1;
				return true;
			}
			_this.completeRequest({
				context,
				err: MAX_RETRIES_EXCEEDED_MESSAGE
			});
			return false;
		}).forEach(function(context) {
			_this.queue = _this.queue.concat(context);
			_this.schedule(0);
		});
	};
	SessionReplayTrackDestination.prototype.schedule = function(timeout) {
		var _this = this;
		if (this.scheduled) return;
		this.scheduled = setTimeout(function() {
			_this.flush(true).then(function() {
				if (_this.queue.length > 0) _this.schedule(timeout);
			});
		}, timeout);
	};
	SessionReplayTrackDestination.prototype.flush = function(useRetry) {
		if (useRetry === void 0) useRetry = false;
		return __awaiter(this, void 0, void 0, function() {
			var list, list_1, list_1_1, context, e_1_1;
			var e_1, _a;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						list = this.queue;
						this.queue = [];
						if (this.scheduled) {
							clearTimeout(this.scheduled);
							this.scheduled = null;
						}
						_b.label = 1;
					case 1:
						_b.trys.push([
							1,
							6,
							7,
							8
						]);
						list_1 = __values(list), list_1_1 = list_1.next();
						_b.label = 2;
					case 2:
						if (!!list_1_1.done) return [3, 5];
						context = list_1_1.value;
						return [4, this.send(context, useRetry)];
					case 3:
						_b.sent();
						_b.label = 4;
					case 4:
						list_1_1 = list_1.next();
						return [3, 2];
					case 5: return [3, 8];
					case 6:
						e_1_1 = _b.sent();
						e_1 = { error: e_1_1 };
						return [3, 8];
					case 7:
						try {
							if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
						} finally {
							if (e_1) throw e_1.error;
						}
						return [7];
					case 8: return [2];
				}
			});
		});
	};
	SessionReplayTrackDestination.prototype.send = function(context, useRetry) {
		var _a, _b;
		if (useRetry === void 0) useRetry = true;
		return __awaiter(this, void 0, void 0, function() {
			var apiKey, deviceId, url, version, sampleRate, urlParams, sessionReplayLibrary, payload, options, serverUrl, res, responseBody, e_2;
			return __generator(this, function(_c) {
				switch (_c.label) {
					case 0:
						apiKey = context.apiKey;
						if (!apiKey) return [2, this.completeRequest({
							context,
							err: MISSING_API_KEY_MESSAGE
						})];
						deviceId = context.deviceId;
						if (!deviceId) return [2, this.completeRequest({
							context,
							err: MISSING_DEVICE_ID_MESSAGE
						})];
						url = getCurrentUrl();
						version = VERSION$1;
						sampleRate = context.sampleRate;
						urlParams = new URLSearchParams({
							device_id: deviceId,
							session_id: "".concat(context.sessionId),
							type: "".concat(context.type)
						});
						sessionReplayLibrary = "".concat(((_a = context.version) === null || _a === void 0 ? void 0 : _a.type) || "standalone", "/").concat(((_b = context.version) === null || _b === void 0 ? void 0 : _b.version) || version);
						payload = this.payloadBatcher({
							version: 1,
							events: context.events
						});
						if (payload.events.length === 0) {
							this.completeRequest({ context });
							return [2];
						}
						_c.label = 1;
					case 1:
						_c.trys.push([
							1,
							6,
							,
							7
						]);
						options = {
							headers: {
								"Content-Type": "application/json",
								Accept: "*/*",
								Authorization: "Bearer ".concat(apiKey),
								"X-Client-Version": version,
								"X-Client-Library": sessionReplayLibrary,
								"X-Client-Url": url.substring(0, MAX_URL_LENGTH),
								"X-Client-Sample-Rate": "".concat(sampleRate)
							},
							body: JSON.stringify(payload),
							method: "POST"
						};
						serverUrl = "".concat(getServerUrl(context.serverZone, this.trackServerUrl), "?").concat(urlParams.toString());
						return [4, fetch(serverUrl, options)];
					case 2:
						res = _c.sent();
						if (res === null) {
							this.completeRequest({
								context,
								err: UNEXPECTED_ERROR_MESSAGE
							});
							return [2];
						}
						if (!!useRetry) return [3, 3];
						responseBody = "";
						try {
							responseBody = JSON.stringify(res.body, null, 2);
						} catch (_d) {}
						this.completeRequest({
							context,
							success: "".concat(res.status, ": ").concat(responseBody)
						});
						return [3, 5];
					case 3: return [4, this.handleReponse(res.status, context)];
					case 4:
						_c.sent();
						_c.label = 5;
					case 5: return [3, 7];
					case 6:
						e_2 = _c.sent();
						this.completeRequest({
							context,
							err: e_2
						});
						return [3, 7];
					case 7: return [2];
				}
			});
		});
	};
	SessionReplayTrackDestination.prototype.handleReponse = function(status, context) {
		return __awaiter(this, void 0, void 0, function() {
			var parsedStatus, _a;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						parsedStatus = new BaseTransport().buildStatus(status);
						_a = parsedStatus;
						switch (_a) {
							case Status.Success: return [3, 1];
							case Status.Failed: return [3, 2];
						}
						return [3, 4];
					case 1:
						this.handleSuccessResponse(context);
						return [3, 5];
					case 2: return [4, this.handleOtherResponse(context)];
					case 3:
						_b.sent();
						return [3, 5];
					case 4:
						this.completeRequest({
							context,
							err: UNEXPECTED_NETWORK_ERROR_MESSAGE
						});
						_b.label = 5;
					case 5: return [2];
				}
			});
		});
	};
	SessionReplayTrackDestination.prototype.handleSuccessResponse = function(context) {
		var sizeOfEventsList = Math.round(new Blob(context.events).size / KB_SIZE);
		this.completeRequest({
			context,
			success: "Session replay event batch tracked successfully for session id ".concat(context.sessionId, ", size of events: ").concat(sizeOfEventsList, " KB")
		});
	};
	SessionReplayTrackDestination.prototype.handleOtherResponse = function(context) {
		return __awaiter(this, void 0, void 0, function() {
			var delay;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						delay = context.attempts * this.retryTimeout;
						context.attempts++;
						if (context.attempts > (context.flushMaxRetries || 0)) {
							this.completeRequest({
								context,
								err: MAX_RETRIES_EXCEEDED_MESSAGE
							});
							return [2];
						}
						return [4, new Promise(function(resolve) {
							return setTimeout(resolve, delay);
						})];
					case 1:
						_a.sent();
						return [4, this.send(context, true)];
					case 2:
						_a.sent();
						return [2];
				}
			});
		});
	};
	SessionReplayTrackDestination.prototype.completeRequest = function(_a) {
		var context = _a.context, err = _a.err, success = _a.success;
		context.onComplete();
		if (err) this.loggerProvider.warn(err);
		else if (success) this.loggerProvider.log(success);
	};
	return SessionReplayTrackDestination;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/events/base-events-store.js
var BaseEventsStore = function() {
	function BaseEventsStore(args) {
		var _this = this;
		var _a, _b, _c;
		this.minInterval = 500;
		this.maxInterval = MAX_INTERVAL;
		this.maxPersistedEventsSize = MAX_EVENT_LIST_SIZE;
		this.interval = this.minInterval;
		this._timeAtLastSplit = Date.now();
		/**
		* Determines whether to send the events list to the backend and start a new
		* empty events list, based on the size of the list as well as the last time sent
		* @param nextEventString
		* @returns boolean
		*/
		this.shouldSplitEventsList = function(events, nextEventString) {
			var sizeOfNextEvent = _this.getStringSize(nextEventString);
			if (_this.getEventsArraySize(events) + sizeOfNextEvent >= _this.maxPersistedEventsSize) return true;
			if (Date.now() - _this.timeAtLastSplit > _this.interval && events.length) {
				_this.interval = Math.min(_this.maxInterval, _this.interval + _this.minInterval);
				_this._timeAtLastSplit = Date.now();
				return true;
			}
			return false;
		};
		this.loggerProvider = args.loggerProvider;
		this.minInterval = (_a = args.minInterval) !== null && _a !== void 0 ? _a : this.minInterval;
		this.maxInterval = (_b = args.maxInterval) !== null && _b !== void 0 ? _b : this.maxInterval;
		this.maxPersistedEventsSize = (_c = args.maxPersistedEventsSize) !== null && _c !== void 0 ? _c : this.maxPersistedEventsSize;
	}
	Object.defineProperty(BaseEventsStore.prototype, "timeAtLastSplit", {
		get: function() {
			return this._timeAtLastSplit;
		},
		enumerable: false,
		configurable: true
	});
	/**
	* Calculates the character length of a string as size approximation
	* Note: String length closely approximates byte size for most content
	*/
	BaseEventsStore.prototype.getStringSize = function(str) {
		return str.length;
	};
	/**
	* Calculates the total character length of events array
	* Accounts for JSON serialization overhead when sent to backend
	*/
	BaseEventsStore.prototype.getEventsArraySize = function(events) {
		var e_1, _a;
		var totalSize = 0;
		try {
			for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
				var event_1 = events_1_1.value;
				totalSize += this.getStringSize(event_1);
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		var overhead = 2 + Math.max(0, events.length - 1) + events.length * 2;
		return totalSize + overhead;
	};
	return BaseEventsStore;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/utils/is-abort-error.js
/**
* IndexedDB can surface transient AbortErrors (internal cancellations,
* cleanup) that are not actionable by customers. We downgrade these from
* warn → debug to avoid triggering Sentry alerts in customer projects.
* Duck-types on name rather than instanceof DOMException because the idb
* wrapper library and test environments may surface plain Error objects.
*/
var isAbortError = function(e) {
	return typeof e === "object" && e !== null && e.name === "AbortError";
};
/**
* Logs an IDB error at the appropriate level: debug for transient
* AbortErrors (to avoid customer Sentry noise), warn for everything else.
*/
var logIdbError = function(logger, message, error) {
	if (isAbortError(error)) logger.debug(message);
	else logger.warn(message);
};
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/events/events-idb-store.js
var currentSequenceKey = "sessionCurrentSequence";
var sequencesToSendKey = "sequencesToSend";
var defineObjectStores = function(db) {
	var sequencesStore;
	var currentSequenceStore;
	if (!db.objectStoreNames.contains("sessionCurrentSequence")) currentSequenceStore = db.createObjectStore(currentSequenceKey, { keyPath: "sessionId" });
	if (!db.objectStoreNames.contains("sequencesToSend")) {
		sequencesStore = db.createObjectStore(sequencesToSendKey, {
			keyPath: "sequenceId",
			autoIncrement: true
		});
		sequencesStore.createIndex("sessionId", "sessionId");
	}
	return {
		sequencesStore,
		currentSequenceStore
	};
};
var createStore = function(dbName) {
	return __awaiter(void 0, void 0, void 0, function() {
		return __generator(this, function(_a) {
			switch (_a.label) {
				case 0: return [4, openDB(dbName, 1, { upgrade: defineObjectStores })];
				case 1: return [2, _a.sent()];
			}
		});
	});
};
var SessionReplayEventsIDBStore = function(_super) {
	__extends(SessionReplayEventsIDBStore, _super);
	function SessionReplayEventsIDBStore(args) {
		var _this = _super.call(this, args) || this;
		_this.getSequencesToSend = function() {
			return __awaiter(_this, void 0, void 0, function() {
				var sequences, cursor, _a, sessionId, events, e_1;
				return __generator(this, function(_b) {
					switch (_b.label) {
						case 0:
							_b.trys.push([
								0,
								5,
								,
								6
							]);
							sequences = [];
							return [4, this.db.transaction("sequencesToSend").store.openCursor()];
						case 1:
							cursor = _b.sent();
							_b.label = 2;
						case 2:
							if (!cursor) return [3, 4];
							_a = cursor.value, sessionId = _a.sessionId, events = _a.events;
							sequences.push({
								events,
								sequenceId: cursor.key,
								sessionId
							});
							return [4, cursor.continue()];
						case 3:
							cursor = _b.sent();
							return [3, 2];
						case 4: return [2, sequences];
						case 5:
							e_1 = _b.sent();
							logIdbError(this.loggerProvider, "".concat(STORAGE_FAILURE, ": ").concat(e_1), e_1);
							return [3, 6];
						case 6: return [2, void 0];
					}
				});
			});
		};
		_this.storeCurrentSequence = function(sessionId) {
			return __awaiter(_this, void 0, void 0, function() {
				var currentSequenceData, sequenceId, e_2;
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0:
							_a.trys.push([
								0,
								4,
								,
								5
							]);
							return [4, this.db.get(currentSequenceKey, sessionId)];
						case 1:
							currentSequenceData = _a.sent();
							if (!currentSequenceData) return [2, void 0];
							return [4, this.db.put(sequencesToSendKey, {
								sessionId,
								events: currentSequenceData.events
							})];
						case 2:
							sequenceId = _a.sent();
							return [4, this.db.put(currentSequenceKey, {
								sessionId,
								events: []
							})];
						case 3:
							_a.sent();
							return [2, __assign(__assign({}, currentSequenceData), {
								sessionId,
								sequenceId
							})];
						case 4:
							e_2 = _a.sent();
							logIdbError(this.loggerProvider, "".concat(STORAGE_FAILURE, ": ").concat(e_2), e_2);
							return [3, 5];
						case 5: return [2, void 0];
					}
				});
			});
		};
		_this.addEventToCurrentSequence = function(sessionId, event) {
			return __awaiter(_this, void 0, void 0, function() {
				var tx, sequenceEvents, eventsToSend, updatedEvents, sequenceId, e_3;
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0:
							_a.trys.push([
								0,
								10,
								,
								11
							]);
							tx = this.db.transaction(currentSequenceKey, "readwrite");
							return [4, tx.store.get(sessionId)];
						case 1:
							sequenceEvents = _a.sent();
							if (!!sequenceEvents) return [3, 3];
							return [4, tx.store.put({
								sessionId,
								events: [event]
							})];
						case 2:
							_a.sent();
							return [2];
						case 3:
							eventsToSend = void 0;
							if (!this.shouldSplitEventsList(sequenceEvents.events, event)) return [3, 5];
							eventsToSend = sequenceEvents.events;
							return [4, tx.store.put({
								sessionId,
								events: [event]
							})];
						case 4:
							_a.sent();
							return [3, 7];
						case 5:
							updatedEvents = sequenceEvents.events.concat(event);
							return [4, tx.store.put({
								sessionId,
								events: updatedEvents
							})];
						case 6:
							_a.sent();
							_a.label = 7;
						case 7: return [4, tx.done];
						case 8:
							_a.sent();
							if (!eventsToSend) return [2, void 0];
							return [4, this.storeSendingEvents(sessionId, eventsToSend)];
						case 9:
							sequenceId = _a.sent();
							if (!sequenceId) return [2, void 0];
							return [2, {
								events: eventsToSend,
								sessionId,
								sequenceId
							}];
						case 10:
							e_3 = _a.sent();
							logIdbError(this.loggerProvider, "".concat(STORAGE_FAILURE, ": ").concat(e_3), e_3);
							return [3, 11];
						case 11: return [2, void 0];
					}
				});
			});
		};
		_this.storeSendingEvents = function(sessionId, events) {
			return __awaiter(_this, void 0, void 0, function() {
				var sequenceId, e_4;
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0:
							_a.trys.push([
								0,
								2,
								,
								3
							]);
							return [4, this.db.put(sequencesToSendKey, {
								sessionId,
								events
							})];
						case 1:
							sequenceId = _a.sent();
							return [2, sequenceId];
						case 2:
							e_4 = _a.sent();
							logIdbError(this.loggerProvider, "".concat(STORAGE_FAILURE, ": ").concat(e_4), e_4);
							return [3, 3];
						case 3: return [2, void 0];
					}
				});
			});
		};
		_this.cleanUpSessionEventsStore = function(_sessionId, sequenceId) {
			return __awaiter(_this, void 0, void 0, function() {
				var e_5;
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0:
							if (!sequenceId) return [2];
							_a.label = 1;
						case 1:
							_a.trys.push([
								1,
								3,
								,
								4
							]);
							return [4, this.db.delete(sequencesToSendKey, sequenceId)];
						case 2:
							_a.sent();
							return [3, 4];
						case 3:
							e_5 = _a.sent();
							logIdbError(this.loggerProvider, "".concat(STORAGE_FAILURE, ": ").concat(e_5), e_5);
							return [3, 4];
						case 4: return [2];
					}
				});
			});
		};
		_this.db = args.db;
		return _this;
	}
	SessionReplayEventsIDBStore.new = function(type, args) {
		return __awaiter(this, void 0, void 0, function() {
			var dbSuffix, dbName, db, e_6;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						_a.trys.push([
							0,
							2,
							,
							3
						]);
						dbSuffix = type === "replay" ? "" : "_".concat(type);
						dbName = "".concat(args.apiKey.substring(0, 10), "_amp_session_replay_events").concat(dbSuffix);
						return [4, createStore(dbName)];
					case 1:
						db = _a.sent();
						return [2, new SessionReplayEventsIDBStore(__assign(__assign({}, args), { db }))];
					case 2:
						e_6 = _a.sent();
						logIdbError(args.loggerProvider, "".concat(STORAGE_FAILURE, ": ").concat(e_6), e_6);
						return [3, 3];
					case 3: return [2];
				}
			});
		});
	};
	SessionReplayEventsIDBStore.prototype.getCurrentSequenceEvents = function(sessionId) {
		return __awaiter(this, void 0, void 0, function() {
			var events, allEvents, _a, _b, events, e_7_1;
			var e_7, _c;
			return __generator(this, function(_d) {
				switch (_d.label) {
					case 0:
						if (!sessionId) return [3, 2];
						return [4, this.db.get("sessionCurrentSequence", sessionId)];
					case 1:
						events = _d.sent();
						if (!events) return [2, void 0];
						return [2, [events]];
					case 2:
						allEvents = [];
						_d.label = 3;
					case 3:
						_d.trys.push([
							3,
							8,
							9,
							10
						]);
						return [4, this.db.getAll("sessionCurrentSequence")];
					case 4:
						_a = __values.apply(void 0, [_d.sent()]), _b = _a.next();
						_d.label = 5;
					case 5:
						if (!!_b.done) return [3, 7];
						events = _b.value;
						allEvents.push(events);
						_d.label = 6;
					case 6:
						_b = _a.next();
						return [3, 5];
					case 7: return [3, 10];
					case 8:
						e_7_1 = _d.sent();
						e_7 = { error: e_7_1 };
						return [3, 10];
					case 9:
						try {
							if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
						} finally {
							if (e_7) throw e_7.error;
						}
						return [7];
					case 10: return [2, allEvents];
				}
			});
		});
	};
	return SessionReplayEventsIDBStore;
}(BaseEventsStore);
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/events/events-memory-store.js
var InMemoryEventsStore = function(_super) {
	__extends(InMemoryEventsStore, _super);
	function InMemoryEventsStore() {
		var _this = _super !== null && _super.apply(this, arguments) || this;
		_this.finalizedSequences = {};
		_this.sequences = {};
		_this.sequenceId = 0;
		return _this;
	}
	InMemoryEventsStore.prototype.resetCurrentSequence = function(sessionId) {
		this.sequences[sessionId] = [];
	};
	InMemoryEventsStore.prototype.addSequence = function(sessionId) {
		var sequenceId = this.sequenceId++;
		var events = __spreadArray([], __read(this.sequences[sessionId]), false);
		this.finalizedSequences[sequenceId] = {
			sessionId,
			events
		};
		this.resetCurrentSequence(sessionId);
		return {
			sequenceId,
			events,
			sessionId
		};
	};
	InMemoryEventsStore.prototype.getSequencesToSend = function() {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, Object.entries(this.finalizedSequences).map(function(_a) {
					var _b = __read(_a, 2), sequenceId = _b[0], _c = _b[1], sessionId = _c.sessionId, events = _c.events;
					return {
						sequenceId: Number(sequenceId),
						sessionId,
						events
					};
				})];
			});
		});
	};
	InMemoryEventsStore.prototype.storeCurrentSequence = function(sessionId) {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				if (!this.sequences[sessionId]) return [2, void 0];
				return [2, this.addSequence(sessionId)];
			});
		});
	};
	InMemoryEventsStore.prototype.addEventToCurrentSequence = function(sessionId, event) {
		return __awaiter(this, void 0, void 0, function() {
			var sequenceReturn;
			return __generator(this, function(_a) {
				if (!this.sequences[sessionId]) this.resetCurrentSequence(sessionId);
				if (this.shouldSplitEventsList(this.sequences[sessionId], event)) sequenceReturn = this.addSequence(sessionId);
				this.sequences[sessionId].push(event);
				return [2, sequenceReturn];
			});
		});
	};
	InMemoryEventsStore.prototype.storeSendingEvents = function(sessionId, events) {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				this.finalizedSequences[this.sequenceId] = {
					sessionId,
					events
				};
				return [2, this.sequenceId++];
			});
		});
	};
	InMemoryEventsStore.prototype.cleanUpSessionEventsStore = function(_sessionId, sequenceId) {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				if (sequenceId !== void 0) delete this.finalizedSequences[sequenceId];
				return [2];
			});
		});
	};
	return InMemoryEventsStore;
}(BaseEventsStore);
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/events/events-manager.js
var createEventsManager = function(_a) {
	var config = _a.config, minInterval = _a.minInterval, maxInterval = _a.maxInterval, type = _a.type, payloadBatcher = _a.payloadBatcher, storeType = _a.storeType;
	return __awaiter(void 0, void 0, void 0, function() {
		function flush(useRetry) {
			if (useRetry === void 0) useRetry = false;
			return __awaiter(this, void 0, void 0, function() {
				return __generator(this, function(_a) {
					return [2, trackDestination.flush(useRetry)];
				});
			});
		}
		var trackDestination, getMemoryStore, getIdbStoreOrFallback, store, _b, sendEventsList, sendCurrentSequenceEvents, sendStoredEvents, addEvent;
		return __generator(this, function(_c) {
			switch (_c.label) {
				case 0:
					trackDestination = new SessionReplayTrackDestination(__assign(__assign({}, config), {
						loggerProvider: config.loggerProvider,
						payloadBatcher
					}));
					getMemoryStore = function() {
						return new InMemoryEventsStore({
							loggerProvider: config.loggerProvider,
							maxInterval,
							minInterval
						});
					};
					getIdbStoreOrFallback = function() {
						return __awaiter(void 0, void 0, void 0, function() {
							var store;
							return __generator(this, function(_a) {
								switch (_a.label) {
									case 0: return [4, SessionReplayEventsIDBStore.new(type, {
										loggerProvider: config.loggerProvider,
										minInterval,
										maxInterval,
										apiKey: config.apiKey
									})];
									case 1:
										store = _a.sent();
										if (!store) {
											config.loggerProvider.log("Failed to initialize idb store, falling back to memory store.");
											return [2, getMemoryStore()];
										}
										return [2, store];
								}
							});
						});
					};
					if (!(storeType === "idb")) return [3, 2];
					return [4, getIdbStoreOrFallback()];
				case 1:
					_b = _c.sent();
					return [3, 3];
				case 2:
					_b = getMemoryStore();
					_c.label = 3;
				case 3:
					store = _b;
					sendEventsList = function(_a) {
						var events = _a.events, sessionId = _a.sessionId, deviceId = _a.deviceId, sequenceId = _a.sequenceId;
						if (config.debugMode) getStorageSize().then(function(_a) {
							var totalStorageSize = _a.totalStorageSize, percentOfQuota = _a.percentOfQuota, usageDetails = _a.usageDetails;
							config.loggerProvider.debug("Total storage size: ".concat(totalStorageSize, " KB, percentage of quota: ").concat(percentOfQuota, "%, usage details: ").concat(usageDetails));
						}).catch(function() {});
						trackDestination.sendEventsList({
							events,
							sessionId,
							flushMaxRetries: config.flushMaxRetries,
							apiKey: config.apiKey,
							deviceId,
							sampleRate: config.sampleRate,
							serverZone: config.serverZone,
							version: config.version,
							type,
							onComplete: function() {
								return __awaiter(void 0, void 0, void 0, function() {
									return __generator(this, function(_a) {
										switch (_a.label) {
											case 0: return [4, store.cleanUpSessionEventsStore(sessionId, sequenceId)];
											case 1:
												_a.sent();
												return [2];
										}
									});
								});
							}
						});
					};
					sendCurrentSequenceEvents = function(_a) {
						var sessionId = _a.sessionId, deviceId = _a.deviceId;
						store.storeCurrentSequence(sessionId).then(function(currentSequence) {
							if (currentSequence) sendEventsList({
								sequenceId: currentSequence.sequenceId,
								events: currentSequence.events,
								sessionId: currentSequence.sessionId,
								deviceId
							});
						}).catch(function(e) {
							config.loggerProvider.warn("Failed to get current sequence of session replay events for session:", e);
						});
					};
					sendStoredEvents = function(_a) {
						var deviceId = _a.deviceId;
						return __awaiter(void 0, void 0, void 0, function() {
							var sequencesToSend;
							return __generator(this, function(_b) {
								switch (_b.label) {
									case 0: return [4, store.getSequencesToSend()];
									case 1:
										sequencesToSend = _b.sent();
										sequencesToSend && sequencesToSend.forEach(function(sequence) {
											sendEventsList({
												sequenceId: sequence.sequenceId,
												events: sequence.events,
												sessionId: sequence.sessionId,
												deviceId
											});
										});
										return [2];
								}
							});
						});
					};
					addEvent = function(_a) {
						var event = _a.event, sessionId = _a.sessionId, deviceId = _a.deviceId;
						store.addEventToCurrentSequence(sessionId, event.data).then(function(sequenceToSend) {
							return sequenceToSend && sendEventsList({
								sequenceId: sequenceToSend.sequenceId,
								events: sequenceToSend.events,
								sessionId: sequenceToSend.sessionId,
								deviceId
							});
						}).catch(function(e) {
							config.loggerProvider.warn("Failed to add event to session replay capture:", e);
						});
					};
					return [2, {
						sendCurrentSequenceEvents,
						addEvent,
						sendStoredEvents,
						flush
					}];
			}
		});
	});
};
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/events/multi-manager.js
/**
* "Registers" events managers internally. When an event is added this class routes the event to the correct
* manager. For all send or flush methods this will invoke the event for all registered managers.
*/
var MultiEventManager = function() {
	function MultiEventManager() {
		var managers = [];
		for (var _i = 0; _i < arguments.length; _i++) managers[_i] = arguments[_i];
		var managersMap = /* @__PURE__ */ new Map();
		managers.forEach(function(t) {
			managersMap.set(t.name, t.manager);
		});
		this.managers = managersMap;
	}
	MultiEventManager.prototype.sendStoredEvents = function(opts) {
		return __awaiter(this, void 0, void 0, function() {
			var promises;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						promises = [];
						this.managers.forEach(function(manager) {
							promises.push(manager.sendStoredEvents(opts));
						});
						return [4, Promise.all(promises)];
					case 1:
						_a.sent();
						return [2];
				}
			});
		});
	};
	MultiEventManager.prototype.addEvent = function(_a) {
		var _b;
		var sessionId = _a.sessionId, event = _a.event, deviceId = _a.deviceId;
		(_b = this.managers.get(event.type)) === null || _b === void 0 || _b.addEvent({
			sessionId,
			event,
			deviceId
		});
	};
	MultiEventManager.prototype.sendCurrentSequenceEvents = function(_a) {
		var sessionId = _a.sessionId, deviceId = _a.deviceId;
		this.managers.forEach(function(manager) {
			manager.sendCurrentSequenceEvents({
				sessionId,
				deviceId
			});
		});
	};
	MultiEventManager.prototype.flush = function(useRetry) {
		return __awaiter(this, void 0, void 0, function() {
			var promises;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						promises = [];
						this.managers.forEach(function(manager) {
							promises.push(manager.flush(useRetry));
						});
						return [4, Promise.all(promises)];
					case 1:
						_a.sent();
						return [2];
				}
			});
		});
	};
	return MultiEventManager;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/libs/finder.js
/* istanbul ignore file */
var config;
var rootDocument;
var start;
function finder(input, options) {
	start = /* @__PURE__ */ new Date();
	if (input.nodeType !== Node.ELEMENT_NODE) throw new Error("Can't generate CSS selector for non-element node type.");
	if ("html" === input.tagName.toLowerCase()) return "html";
	var defaults = {
		root: document.body,
		idName: function(_name) {
			return true;
		},
		className: function(_name) {
			return true;
		},
		tagName: function(_name) {
			return true;
		},
		attr: function(_name, _value) {
			return false;
		},
		seedMinLength: 1,
		optimizedMinLength: 2,
		threshold: 1e3,
		maxNumberOfTries: 1e4,
		timeoutMs: void 0
	};
	config = __assign(__assign({}, defaults), options);
	rootDocument = findRootDocument(config.root, defaults);
	var path = bottomUpSearch(input, "all", function() {
		return bottomUpSearch(input, "two", function() {
			return bottomUpSearch(input, "one", function() {
				return bottomUpSearch(input, "none");
			});
		});
	});
	if (path) {
		var optimized = sort(optimize(path, input));
		if (optimized.length > 0) path = optimized[0];
		return selector(path);
	} else throw new Error("Selector was not found.");
}
function findRootDocument(rootNode, defaults) {
	if (rootNode.nodeType === Node.DOCUMENT_NODE) return rootNode;
	if (rootNode === defaults.root) return rootNode.ownerDocument;
	return rootNode;
}
function bottomUpSearch(input, limit, fallback) {
	var path = null;
	var stack = [];
	var current = input;
	var i = 0;
	var _loop_1 = function() {
		var e_1, _a;
		var elapsedTime = (/* @__PURE__ */ new Date()).getTime() - start.getTime();
		if (config.timeoutMs !== void 0 && elapsedTime > config.timeoutMs) throw new Error("Timeout: Can't find a unique selector after ".concat(elapsedTime, "ms"));
		var level = maybe(id(current)) || maybe.apply(void 0, __spreadArray([], __read(attr(current)), false)) || maybe.apply(void 0, __spreadArray([], __read(classNames(current)), false)) || maybe(tagName(current)) || [any()];
		var nth = index(current);
		if (limit == "all") {
			if (nth) level = level.concat(level.filter(dispensableNth).map(function(node) {
				return nthChild(node, nth);
			}));
		} else if (limit == "two") {
			level = level.slice(0, 1);
			if (nth) level = level.concat(level.filter(dispensableNth).map(function(node) {
				return nthChild(node, nth);
			}));
		} else if (limit == "one") {
			var node = __read(level = level.slice(0, 1), 1)[0];
			if (nth && dispensableNth(node)) level = [nthChild(node, nth)];
		} else if (limit == "none") {
			level = [any()];
			if (nth) level = [nthChild(level[0], nth)];
		}
		try {
			for (var level_1 = (e_1 = void 0, __values(level)), level_1_1 = level_1.next(); !level_1_1.done; level_1_1 = level_1.next()) {
				var node = level_1_1.value;
				node.level = i;
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (level_1_1 && !level_1_1.done && (_a = level_1.return)) _a.call(level_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		stack.push(level);
		if (stack.length >= config.seedMinLength) {
			path = findUniquePath(stack, fallback);
			if (path) return "break";
		}
		current = current.parentElement;
		i++;
	};
	while (current) if (_loop_1() === "break") break;
	if (!path) path = findUniquePath(stack, fallback);
	if (!path && fallback) return fallback();
	return path;
}
function findUniquePath(stack, fallback) {
	var e_2, _a;
	var paths = sort(combinations(stack));
	if (paths.length > config.threshold) return fallback ? fallback() : null;
	try {
		for (var paths_1 = __values(paths), paths_1_1 = paths_1.next(); !paths_1_1.done; paths_1_1 = paths_1.next()) {
			var candidate = paths_1_1.value;
			if (unique(candidate)) return candidate;
		}
	} catch (e_2_1) {
		e_2 = { error: e_2_1 };
	} finally {
		try {
			if (paths_1_1 && !paths_1_1.done && (_a = paths_1.return)) _a.call(paths_1);
		} finally {
			if (e_2) throw e_2.error;
		}
	}
	return null;
}
function selector(path) {
	var node = path[0];
	var query = node.name;
	for (var i = 1; i < path.length; i++) {
		var level = path[i].level || 0;
		if (node.level === level - 1) query = "".concat(path[i].name, " > ").concat(query);
		else query = "".concat(path[i].name, " ").concat(query);
		node = path[i];
	}
	return query;
}
function penalty(path) {
	return path.map(function(node) {
		return node.penalty;
	}).reduce(function(acc, i) {
		return acc + i;
	}, 0);
}
function unique(path) {
	var css = selector(path);
	switch (rootDocument.querySelectorAll(css).length) {
		case 0: throw new Error("Can't select any node with this selector: ".concat(css));
		case 1: return true;
		default: return false;
	}
}
function id(input) {
	var elementId = input.getAttribute("id");
	if (elementId && config.idName(elementId)) return {
		name: "#" + CSS.escape(elementId),
		penalty: 0
	};
	return null;
}
function attr(input) {
	return Array.from(input.attributes).filter(function(attr) {
		return config.attr(attr.name, attr.value);
	}).map(function(attr) {
		return {
			name: "[".concat(CSS.escape(attr.name), "=\"").concat(CSS.escape(attr.value), "\"]"),
			penalty: .5
		};
	});
}
function classNames(input) {
	return Array.from(input.classList).filter(config.className).map(function(name) {
		return {
			name: "." + CSS.escape(name),
			penalty: 1
		};
	});
}
function tagName(input) {
	var name = input.tagName.toLowerCase();
	if (config.tagName(name)) return {
		name,
		penalty: 2
	};
	return null;
}
function any() {
	return {
		name: "*",
		penalty: 3
	};
}
function index(input) {
	var parent = input.parentNode;
	if (!parent) return null;
	var child = parent.firstChild;
	if (!child) return null;
	var i = 0;
	while (child) {
		if (child.nodeType === Node.ELEMENT_NODE) i++;
		if (child === input) break;
		child = child.nextSibling;
	}
	return i;
}
function nthChild(node, i) {
	return {
		name: node.name + ":nth-child(".concat(i, ")"),
		penalty: node.penalty + 1
	};
}
function dispensableNth(node) {
	return node.name !== "html" && !node.name.startsWith("#");
}
function maybe() {
	var level = [];
	for (var _i = 0; _i < arguments.length; _i++) level[_i] = arguments[_i];
	var list = level.filter(notEmpty);
	if (list.length > 0) return list;
	return null;
}
function notEmpty(value) {
	return value !== null && value !== void 0;
}
function combinations(stack, path) {
	var _a, _b, node, e_3_1;
	var e_3, _c;
	if (path === void 0) path = [];
	return __generator(this, function(_d) {
		switch (_d.label) {
			case 0:
				if (!(stack.length > 0)) return [3, 9];
				_d.label = 1;
			case 1:
				_d.trys.push([
					1,
					6,
					7,
					8
				]);
				_a = __values(stack[0]), _b = _a.next();
				_d.label = 2;
			case 2:
				if (!!_b.done) return [3, 5];
				node = _b.value;
				return [5, __values(combinations(stack.slice(1, stack.length), path.concat(node)))];
			case 3:
				_d.sent();
				_d.label = 4;
			case 4:
				_b = _a.next();
				return [3, 2];
			case 5: return [3, 8];
			case 6:
				e_3_1 = _d.sent();
				e_3 = { error: e_3_1 };
				return [3, 8];
			case 7:
				try {
					if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
				} finally {
					if (e_3) throw e_3.error;
				}
				return [7];
			case 8: return [3, 11];
			case 9: return [4, path];
			case 10:
				_d.sent();
				_d.label = 11;
			case 11: return [2];
		}
	});
}
function sort(paths) {
	return __spreadArray([], __read(paths), false).sort(function(a, b) {
		return penalty(a) - penalty(b);
	});
}
function optimize(path, input, scope) {
	var i, newPath, newPathKey;
	if (scope === void 0) scope = {
		counter: 0,
		visited: /* @__PURE__ */ new Map()
	};
	return __generator(this, function(_a) {
		switch (_a.label) {
			case 0:
				if (!(path.length > 2 && path.length > config.optimizedMinLength)) return [3, 5];
				i = 1;
				_a.label = 1;
			case 1:
				if (!(i < path.length - 1)) return [3, 5];
				if (scope.counter > config.maxNumberOfTries) return [2];
				scope.counter += 1;
				newPath = __spreadArray([], __read(path), false);
				newPath.splice(i, 1);
				newPathKey = selector(newPath);
				if (scope.visited.has(newPathKey)) return [2];
				if (!(unique(newPath) && same(newPath, input))) return [3, 4];
				return [4, newPath];
			case 2:
				_a.sent();
				scope.visited.set(newPathKey, true);
				return [5, __values(optimize(newPath, input, scope))];
			case 3:
				_a.sent();
				_a.label = 4;
			case 4:
				i++;
				return [3, 1];
			case 5: return [2];
		}
	});
}
function same(path, input) {
	return rootDocument.querySelector(selector(path)) === input;
}
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/hooks/click.js
var HOUR_IN_MILLISECONDS = 36e5;
var clickNonBatcher = function(_a) {
	var version = _a.version, events = _a.events;
	var clickEvents = [];
	events.forEach(function(evt) {
		var record = JSON.parse(evt);
		record.count = 1;
		if (record.type === "click") clickEvents.push(record);
	});
	return {
		version,
		events: clickEvents
	};
};
var clickBatcher = function(_a) {
	var version = _a.version, events = _a.events;
	var clickEvents = [];
	events.forEach(function(evt) {
		var record = JSON.parse(evt);
		if (record.type === "click") clickEvents.push(record);
	});
	var reduced = clickEvents.reduce(function(prev, curr) {
		var x = curr.x, y = curr.y, selector = curr.selector, timestamp = curr.timestamp;
		var hour = timestamp - timestamp % HOUR_IN_MILLISECONDS;
		var k = "".concat(x, ":").concat(y, ":").concat(selector !== null && selector !== void 0 ? selector : "", ":").concat(hour);
		if (!prev[k]) prev[k] = __assign(__assign({}, curr), {
			timestamp: hour,
			count: 1
		});
		else prev[k].count += 1;
		return prev;
	}, {});
	return {
		version,
		events: Object.values(reduced)
	};
};
var ClickHandler = function() {
	function ClickHandler(logger, scrollWatcher) {
		var _this = this;
		this.createHook = function(_a) {
			var eventsManager = _a.eventsManager, sessionId = _a.sessionId, deviceIdFn = _a.deviceIdFn, mirror = _a.mirror, ugcFilterRules = _a.ugcFilterRules, performanceOptions = _a.performanceOptions;
			return function(e) {
				if (e.type !== MouseInteractions.Click) return;
				var globalScope = getGlobalScope();
				if (!globalScope) return;
				var location = globalScope.location, innerHeight = globalScope.innerHeight, innerWidth = globalScope.innerWidth;
				if (!location) return;
				var x = e.x, y = e.y;
				if (x === void 0 || y === void 0) return;
				var node = mirror.getNode(e.id);
				var selector;
				if (node) try {
					selector = finder(node, performanceOptions);
				} catch (err) {
					_this.logger.debug("error resolving selector from finder");
				}
				var pageUrl = getPageUrl(location.href, ugcFilterRules);
				var event = {
					x: x + _this.scrollWatcher.currentScrollX,
					y: y + _this.scrollWatcher.currentScrollY,
					selector,
					viewportHeight: innerHeight,
					viewportWidth: innerWidth,
					pageUrl,
					timestamp: Date.now(),
					type: "click"
				};
				var deviceId = deviceIdFn();
				if (deviceId) eventsManager.addEvent({
					sessionId,
					event: {
						type: "interaction",
						data: JSON.stringify(event)
					},
					deviceId
				});
			};
		};
		this.logger = logger;
		this.scrollWatcher = scrollWatcher;
	}
	return ClickHandler;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/utils/rrweb.js
function getViewportHeight() {
	var globalScope = getGlobalScope();
	return (globalScope === null || globalScope === void 0 ? void 0 : globalScope.innerHeight) || document.documentElement && document.documentElement.clientHeight || 0;
}
function getViewportWidth() {
	var globalScope = getGlobalScope();
	return (globalScope === null || globalScope === void 0 ? void 0 : globalScope.innerWidth) || document.documentElement && document.documentElement.clientWidth || 0;
}
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/beacon-transport.js
/**
* For very small payloads it's preferable to use the [Beacon API](https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API).
* While it doesn't provide 100% guarantees on sends, it greatly helps with overall reliability and page load performance. As
* the Beacon API has a potential to fail due to size constraints we want to fall back to XHR if need be. This is mostly to
* be used with 'pagehide' or 'beforeunload' events.
*
* Note there are only 3 CORS safelisted Content-Types you can send:
*
* - application/x-www-form-urlencoded
* - multipart/form-data
* - text/plain
*
* If we do not send one of these, some browsers like Chrome may not send this at all. Also we incur the overhead of a preflight
* request. In our case we will add no additional content-type header. If you are trying to ping a server that requires this
* header, you may want to use the regular fetch API or a different mechanism.
*/
var BeaconTransport = function() {
	function BeaconTransport(context, config) {
		var globalScope = getGlobalScope();
		if (globalScope && globalScope.navigator && typeof globalScope.navigator.sendBeacon === "function") this.sendBeacon = function(pageUrl, payload) {
			try {
				if (globalScope.navigator.sendBeacon(pageUrl, JSON.stringify(payload))) return true;
			} catch (e) {}
			return false;
		};
		else this.sendBeacon = function() {
			return false;
		};
		this.sendXhr = function(pageUrl, payload) {
			var xhr = new XMLHttpRequest();
			xhr.open("POST", pageUrl, true);
			xhr.setRequestHeader("Accept", "*/*");
			xhr.send(JSON.stringify(payload));
			return true;
		};
		this.basePageUrl = getServerUrl(config.serverZone, config.trackServerUrl);
		this.apiKey = config.apiKey;
		this.context = context;
	}
	BeaconTransport.prototype.send = function(deviceId, payload) {
		var _a = this.context, sessionId = _a.sessionId, type = _a.type;
		var urlParams = new URLSearchParams({
			device_id: deviceId,
			session_id: String(sessionId),
			type: String(type),
			api_key: this.apiKey
		});
		var pageUrl = "".concat(this.basePageUrl, "?").concat(urlParams.toString());
		this.sendBeacon(pageUrl, payload) || this.sendXhr(pageUrl, payload);
	};
	return BeaconTransport;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/hooks/scroll.js
/**
* This is intended to watch and update max scroll activity when loaded for a particular page.
* A new instance should be created if the page URL changes, since by default it does not reset
* it's max scroll state. It is intended to send very few and very small events utilizing the
* Beacon API.
* @see {@link BeaconTransport} for more details on Beacon API usage.
*/
var ScrollWatcher = function() {
	function ScrollWatcher(transport, config) {
		var _this = this;
		this.timestamp = Date.now();
		this.hook = function(e) {
			_this.update(e);
		};
		this.send = function(deviceIdFn) {
			return function(_) {
				var _a, _b;
				var deviceId = deviceIdFn();
				var globalScope = getGlobalScope();
				if (globalScope && deviceId) _this.transport.send(deviceId, {
					version: 1,
					events: [{
						maxScrollX: _this._maxScrollX,
						maxScrollY: _this._maxScrollY,
						maxScrollWidth: _this._maxScrollWidth,
						maxScrollHeight: _this._maxScrollHeight,
						viewportHeight: getViewportHeight(),
						viewportWidth: getViewportWidth(),
						pageUrl: getPageUrl(globalScope.location.href, (_b = (_a = _this.config.interactionConfig) === null || _a === void 0 ? void 0 : _a.ugcFilterRules) !== null && _b !== void 0 ? _b : []),
						timestamp: _this.timestamp,
						type: "scroll"
					}]
				});
			};
		};
		this._maxScrollX = 0;
		this._maxScrollY = 0;
		this._currentScrollX = 0;
		this._currentScrollY = 0;
		this._maxScrollWidth = getViewportWidth();
		this._maxScrollHeight = getViewportHeight();
		this.config = config;
		this.transport = transport;
	}
	ScrollWatcher.default = function(context, config) {
		return new ScrollWatcher(new BeaconTransport(context, config), config);
	};
	Object.defineProperty(ScrollWatcher.prototype, "maxScrollX", {
		get: function() {
			return this._maxScrollX;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(ScrollWatcher.prototype, "maxScrollY", {
		get: function() {
			return this._maxScrollY;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(ScrollWatcher.prototype, "maxScrollWidth", {
		get: function() {
			return this._maxScrollWidth;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(ScrollWatcher.prototype, "maxScrollHeight", {
		get: function() {
			return this._maxScrollHeight;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(ScrollWatcher.prototype, "currentScrollX", {
		get: function() {
			return this._currentScrollX;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(ScrollWatcher.prototype, "currentScrollY", {
		get: function() {
			return this._currentScrollY;
		},
		enumerable: false,
		configurable: true
	});
	ScrollWatcher.prototype.update = function(e) {
		var now = Date.now();
		this._currentScrollX = e.x;
		this._currentScrollY = e.y;
		if (e.x > this._maxScrollX) {
			var width = getViewportWidth();
			this._maxScrollX = e.x;
			var maxScrollWidth = e.x + width;
			if (maxScrollWidth > this._maxScrollWidth) this._maxScrollWidth = maxScrollWidth;
			this.timestamp = now;
		}
		if (e.y > this._maxScrollY) {
			var height = getViewportHeight();
			this._maxScrollY = e.y;
			var maxScrollHeight = e.y + height;
			if (maxScrollHeight > this._maxScrollHeight) this._maxScrollHeight = maxScrollHeight;
			this.timestamp = now;
		}
	};
	return ScrollWatcher;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/identifiers.js
var SessionIdentifiers = function() {
	function SessionIdentifiers(_a) {
		var sessionId = _a.sessionId, deviceId = _a.deviceId;
		this.deviceId = deviceId;
		this.sessionId = sessionId;
		if (sessionId && deviceId) this.sessionReplayId = generateSessionReplayId(sessionId, deviceId);
	}
	return SessionIdentifiers;
}();
var targetingIDBStore = new (function() {
	function TargetingIDBStore() {
		var _this = this;
		this.dbs = {};
		this.createStore = function(dbName) {
			return __awaiter(_this, void 0, void 0, function() {
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0: return [4, openDB(dbName, 1, { upgrade: function(db) {
							if (!db.objectStoreNames.contains("sessionTargetingMatch")) db.createObjectStore("sessionTargetingMatch", { keyPath: "sessionId" });
						} })];
						case 1: return [2, _a.sent()];
					}
				});
			});
		};
		this.openOrCreateDB = function(apiKey) {
			return __awaiter(_this, void 0, void 0, function() {
				var dbName, db;
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0:
							if (this.dbs && this.dbs[apiKey]) return [2, this.dbs[apiKey]];
							dbName = "".concat(apiKey.substring(0, 10), "_amp_session_replay_targeting");
							return [4, this.createStore(dbName)];
						case 1:
							db = _a.sent();
							this.dbs[apiKey] = db;
							return [2, db];
					}
				});
			});
		};
		this.getTargetingMatchForSession = function(_a) {
			var loggerProvider = _a.loggerProvider, apiKey = _a.apiKey, sessionId = _a.sessionId;
			return __awaiter(_this, void 0, void 0, function() {
				var db, sessionIdStr, targetingMatchForSession, e_1;
				return __generator(this, function(_b) {
					switch (_b.label) {
						case 0:
							_b.trys.push([
								0,
								3,
								,
								4
							]);
							return [4, this.openOrCreateDB(apiKey)];
						case 1:
							db = _b.sent();
							sessionIdStr = String(sessionId);
							return [4, db.get("sessionTargetingMatch", sessionIdStr)];
						case 2:
							targetingMatchForSession = _b.sent();
							return [2, targetingMatchForSession === null || targetingMatchForSession === void 0 ? void 0 : targetingMatchForSession.targetingMatch];
						case 3:
							e_1 = _b.sent();
							logIdbError(loggerProvider, "Failed to get targeting match for session id ".concat(sessionId, ": ").concat(e_1), e_1);
							return [3, 4];
						case 4: return [2, void 0];
					}
				});
			});
		};
		this.storeTargetingMatchForSession = function(_a) {
			var loggerProvider = _a.loggerProvider, apiKey = _a.apiKey, sessionId = _a.sessionId, targetingMatch = _a.targetingMatch;
			return __awaiter(_this, void 0, void 0, function() {
				var db, sessionIdStr, targetingMatchForSession, e_2;
				return __generator(this, function(_b) {
					switch (_b.label) {
						case 0:
							_b.trys.push([
								0,
								3,
								,
								4
							]);
							return [4, this.openOrCreateDB(apiKey)];
						case 1:
							db = _b.sent();
							sessionIdStr = String(sessionId);
							return [4, db.put("sessionTargetingMatch", {
								targetingMatch,
								sessionId: sessionIdStr,
								lastUpdated: Date.now()
							})];
						case 2:
							targetingMatchForSession = _b.sent();
							return [2, targetingMatchForSession];
						case 3:
							e_2 = _b.sent();
							logIdbError(loggerProvider, "Failed to store targeting match for session id ".concat(sessionId, ": ").concat(e_2), e_2);
							return [3, 4];
						case 4: return [2, void 0];
					}
				});
			});
		};
		this.clearStoreOfOldSessions = function(_a) {
			var loggerProvider = _a.loggerProvider, apiKey = _a.apiKey, currentSessionId = _a.currentSessionId;
			return __awaiter(_this, void 0, void 0, function() {
				var db, currentSessionIdStr, tx, allTargetingMatchObjs, i, targetingMatchObj, amountOfTimeSinceSession, e_3;
				return __generator(this, function(_b) {
					switch (_b.label) {
						case 0:
							_b.trys.push([
								0,
								8,
								,
								9
							]);
							return [4, this.openOrCreateDB(apiKey)];
						case 1:
							db = _b.sent();
							currentSessionIdStr = String(currentSessionId);
							tx = db.transaction("sessionTargetingMatch", "readwrite");
							return [4, tx.store.getAll()];
						case 2:
							allTargetingMatchObjs = _b.sent();
							i = 0;
							_b.label = 3;
						case 3:
							if (!(i < allTargetingMatchObjs.length)) return [3, 6];
							targetingMatchObj = allTargetingMatchObjs[i];
							amountOfTimeSinceSession = Date.now() - targetingMatchObj.lastUpdated;
							if (!(targetingMatchObj.sessionId !== currentSessionIdStr && amountOfTimeSinceSession > 1728e5)) return [3, 5];
							return [4, tx.store.delete(targetingMatchObj.sessionId)];
						case 4:
							_b.sent();
							_b.label = 5;
						case 5:
							i++;
							return [3, 3];
						case 6: return [4, tx.done];
						case 7:
							_b.sent();
							return [3, 9];
						case 8:
							e_3 = _b.sent();
							logIdbError(loggerProvider, "Failed to clear old targeting matches for sessions: ".concat(e_3), e_3);
							return [3, 9];
						case 9: return [2];
					}
				});
			});
		};
	}
	return TargetingIDBStore;
}())();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/targeting/targeting-manager.js
var evaluateTargetingAndStore = function(_a) {
	var sessionId = _a.sessionId, targetingConfig = _a.targetingConfig, loggerProvider = _a.loggerProvider, apiKey = _a.apiKey, targetingParams = _a.targetingParams, _b = _a.urlChange, urlChange = _b === void 0 ? false : _b;
	return __awaiter(void 0, void 0, void 0, function() {
		var idbTargetingMatch, sessionTargetingMatch, evaluateTargetingPackage, params, targetingResult, err_1, knownError;
		return __generator(this, function(_c) {
			switch (_c.label) {
				case 0: return [4, targetingIDBStore.clearStoreOfOldSessions({
					loggerProvider,
					apiKey,
					currentSessionId: sessionId
				})];
				case 1:
					_c.sent();
					return [4, targetingIDBStore.getTargetingMatchForSession({
						loggerProvider,
						apiKey,
						sessionId
					})];
				case 2:
					idbTargetingMatch = _c.sent();
					if (idbTargetingMatch === true && !urlChange) return [2, true];
					sessionTargetingMatch = true;
					_c.label = 3;
				case 3:
					_c.trys.push([
						3,
						6,
						,
						7
					]);
					return [4, import("./esm-BhBope8q.js")];
				case 4:
					evaluateTargetingPackage = _c.sent().evaluateTargeting;
					params = __assign(__assign({}, targetingParams), {
						flag: targetingConfig,
						sessionId: typeof sessionId === "string" ? parseInt(sessionId, 10) : sessionId,
						apiKey,
						loggerProvider
					});
					return [4, evaluateTargetingPackage(params)];
				case 5:
					targetingResult = _c.sent();
					if (targetingResult && targetingResult.sr_targeting_config) sessionTargetingMatch = targetingResult.sr_targeting_config.key === "on";
					targetingIDBStore.storeTargetingMatchForSession({
						loggerProvider,
						apiKey,
						sessionId,
						targetingMatch: sessionTargetingMatch
					});
					return [3, 7];
				case 6:
					err_1 = _c.sent();
					knownError = err_1;
					loggerProvider.warn(knownError.message);
					return [3, 7];
				case 7: return [2, sessionTargetingMatch];
			}
		});
	});
};
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/plugins/url-tracking-plugin.js
/** Patch detection marker to prevent double-patching */
var PATCH_MARKER = "__amplitude_url_tracking_patched__";
/** Per-globalScope subscription state; persists to avoid wrapper stacking across re-subscribe cycles */
var urlChangeSubscriptionsByScope = /* @__PURE__ */ new WeakMap();
/**
* Single helper for URL change detection. Supports:
* - History API (pushState/replaceState) + popstate + hashchange (shared patch per scope)
* - Optional polling (setInterval on location.href)
*
* Used by session-replay targeting (re-evaluate on URL change) and the URL tracking plugin
* (emit rrweb events). Call the returned function to unsubscribe.
*
* @param globalScope - window (or equivalent); no-op if undefined
* @param onUrlChange - called when the URL changes, with the new href
* @param options - optional polling (default: event-based only)
* @returns cleanup function to remove this subscription
*/
function subscribeToUrlChanges(globalScope, onUrlChange, options) {
	if (options === void 0) options = {};
	if (!(globalScope === null || globalScope === void 0 ? void 0 : globalScope.location)) return function() {};
	var _a = options.enablePolling, enablePolling = _a === void 0 ? false : _a, _b = options.pollingInterval, pollingInterval = _b === void 0 ? DEFAULT_URL_CHANGE_POLLING_INTERVAL : _b;
	if (enablePolling) {
		var getHref_1 = function() {
			var _a;
			return (_a = globalScope.location.href) !== null && _a !== void 0 ? _a : "";
		};
		var lastHref_1 = getHref_1();
		var id_1 = globalScope.setInterval(function() {
			var href = getHref_1();
			if (href === lastHref_1) return;
			lastHref_1 = href;
			onUrlChange(href);
		}, pollingInterval);
		return function() {
			if (id_1 != null) globalScope.clearInterval(id_1);
		};
	}
	var subscriptionState = urlChangeSubscriptionsByScope.get(globalScope);
	if (!subscriptionState) {
		var lastHref_2 = void 0;
		var callbacks_1 = /* @__PURE__ */ new Set();
		var getHref_2 = function() {
			var _a;
			return (_a = globalScope.location.href) !== null && _a !== void 0 ? _a : "";
		};
		var notify_1 = function() {
			var href = getHref_2();
			if (lastHref_2 !== void 0 && href === lastHref_2) return;
			lastHref_2 = href;
			callbacks_1.forEach(function(c) {
				return c(href);
			});
		};
		/**
		* Creates a patched version of history methods (pushState/replaceState)
		* that calls the original method and then emits a URL change event.
		*/
		var createHistoryMethodPatch = function(originalMethod) {
			var patchedMethod = function() {
				var args = [];
				for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
				var result = originalMethod.apply(this, args);
				notify_1();
				return result;
			};
			patchedMethod[PATCH_MARKER] = true;
			return patchedMethod;
		};
		var history_1 = globalScope.history;
		if (history_1 === null || history_1 === void 0 ? void 0 : history_1.pushState) {
			var pushState = Reflect.get(history_1, "pushState");
			if (!pushState[PATCH_MARKER]) history_1.pushState = createHistoryMethodPatch(pushState);
		}
		if (history_1 === null || history_1 === void 0 ? void 0 : history_1.replaceState) {
			var replaceState = Reflect.get(history_1, "replaceState");
			if (!replaceState[PATCH_MARKER]) history_1.replaceState = createHistoryMethodPatch(replaceState);
		}
		subscriptionState = {
			callbacks: callbacks_1,
			notify: notify_1,
			onPopStateOrHashChange: function() {
				return notify_1();
			},
			listenersAttached: false
		};
		urlChangeSubscriptionsByScope.set(globalScope, subscriptionState);
	}
	var state = subscriptionState;
	if (!state.listenersAttached) {
		globalScope.addEventListener("popstate", state.onPopStateOrHashChange);
		globalScope.addEventListener("hashchange", state.onPopStateOrHashChange);
		state.listenersAttached = true;
	}
	state.callbacks.add(onUrlChange);
	return function() {
		state.callbacks.delete(onUrlChange);
		if (state.callbacks.size === 0) {
			if (state.listenersAttached) {
				globalScope.removeEventListener("popstate", state.onPopStateOrHashChange);
				globalScope.removeEventListener("hashchange", state.onPopStateOrHashChange);
				state.listenersAttached = false;
			}
		}
	};
}
/**
* Creates a URL tracking plugin for rrweb record function
*
* This plugin monitors URL changes in the browser and emits events when the URL changes.
* It supports three tracking modes:
* 1. Polling (if explicitly enabled) - periodically checks for URL changes
* 2. History API + Hash routing (default) - patches pushState/replaceState, listens to popstate and hashchange
* 3. Hash routing only (fallback) - listens to hashchange events when History API is unavailable
*
* The plugin handles edge cases gracefully:
* - Missing or null location objects
* - Undefined, null, or empty location.href values
* - Temporal dead zone issues with variable declarations
* - Consistent URL normalization across all code paths
*
* @param options Configuration options for URL tracking
* @returns RecordPlugin instance that can be used with rrweb
*/
function createUrlTrackingPlugin(options) {
	if (options === void 0) options = {};
	return {
		name: "amplitude/url-tracking@1",
		observer: function(cb, globalScope, pluginOptions) {
			var _a, _b, _c;
			var config = __assign(__assign({}, options), pluginOptions);
			var ugcFilterRules = config.ugcFilterRules || [];
			var enablePolling = (_a = config.enablePolling) !== null && _a !== void 0 ? _a : false;
			var pollingInterval = (_b = config.pollingInterval) !== null && _b !== void 0 ? _b : DEFAULT_URL_CHANGE_POLLING_INTERVAL;
			var captureDocumentTitle = (_c = config.captureDocumentTitle) !== null && _c !== void 0 ? _c : false;
			if (!globalScope) return function() {};
			var lastTrackedUrl = void 0;
			/**
			* Gets the current URL with proper normalization
			* Handles edge cases where location.href might be undefined, null, or empty
			* Ensures consistent behavior across all code paths
			* @returns Normalized URL string (empty string if location unavailable)
			*/
			var getCurrentUrl = function() {
				if (!globalScope.location) return "";
				return globalScope.location.href || "";
			};
			/**
			* Creates a URL change event with current page information
			* Applies UGC filtering if rules are configured
			* Uses getCurrentUrl() for consistent URL normalization
			* @returns URLChangeEvent with current page state
			*/
			var createUrlChangeEvent = function() {
				var innerHeight = globalScope.innerHeight, innerWidth = globalScope.innerWidth, document = globalScope.document;
				var currentUrl = getCurrentUrl();
				var currentTitle = "";
				if (captureDocumentTitle) currentTitle = (document === null || document === void 0 ? void 0 : document.title) || "";
				return {
					href: ugcFilterRules.length > 0 ? getPageUrl(currentUrl, ugcFilterRules) : currentUrl,
					title: currentTitle,
					viewportHeight: innerHeight,
					viewportWidth: innerWidth,
					type: "url-change-event"
				};
			};
			/**
			* Emits a URL change event if the URL has actually changed
			* Always emits on first call (when lastTrackedUrl is undefined)
			*/
			var emitUrlChange = function() {
				var currentUrl = getCurrentUrl();
				if (lastTrackedUrl === void 0 || currentUrl !== lastTrackedUrl) {
					lastTrackedUrl = currentUrl;
					cb(createUrlChangeEvent());
				}
			};
			var unsubscribe = subscribeToUrlChanges(globalScope, function() {
				return emitUrlChange();
			}, enablePolling ? {
				enablePolling: true,
				pollingInterval
			} : {});
			emitUrlChange();
			return function() {
				return unsubscribe();
			};
		},
		options
	};
}
createUrlTrackingPlugin();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/session-replay.js
var SessionReplay = function() {
	function SessionReplay() {
		var _this = this;
		this.name = "@amplitude/session-replay-browser";
		this.recordCancelCallback = null;
		this.eventCount = 0;
		this.sessionTargetingMatch = false;
		this.pageLeaveFns = [];
		this.recordFunction = null;
		/** Cleanup for URL change listener used to re-evaluate targeting on SPA route changes */
		this.urlChangeCleanup = null;
		/** Monotonic counter to ignore stale URL-change targeting results */
		this.latestUrlChangeTargetingEvaluationId = 0;
		this.teardownEventListeners = function(teardown) {
			var globalScope = getGlobalScope();
			if (globalScope) {
				globalScope.removeEventListener("blur", _this.blurListener);
				globalScope.removeEventListener("focus", _this.focusListener);
				!teardown && globalScope.addEventListener("blur", _this.blurListener);
				!teardown && globalScope.addEventListener("focus", _this.focusListener);
				if (globalScope.self && "onpagehide" in globalScope.self) {
					globalScope.removeEventListener("pagehide", _this.pageLeaveListener);
					!teardown && globalScope.addEventListener("pagehide", _this.pageLeaveListener);
				} else {
					globalScope.removeEventListener("beforeunload", _this.pageLeaveListener);
					!teardown && globalScope.addEventListener("beforeunload", _this.pageLeaveListener);
				}
			}
		};
		this.blurListener = function() {
			_this.sendEvents();
		};
		this.focusListener = function() {
			_this.recordEvents(false);
		};
		/**
		* This is an instance member so that if init is called multiple times
		* it doesn't add another listener to the page leave event. This is to
		* prevent duplicate listener actions from firing.
		*/
		this.pageLeaveListener = function(e) {
			_this.pageLeaveFns.forEach(function(fn) {
				fn(e);
			});
		};
		this.evaluateTargetingAndCapture = function(targetingParams, isInit, forceRestart, forceTargetingReevaluation) {
			if (isInit === void 0) isInit = false;
			if (forceRestart === void 0) forceRestart = false;
			if (forceTargetingReevaluation === void 0) forceTargetingReevaluation = false;
			return __awaiter(_this, void 0, void 0, function() {
				var targetingConfig, shouldReEvaluate, urlChangeEvaluationId, eventForTargeting, pageUrl, pageForTargeting, targetingMatch;
				var _a, _b, _c, _d, _e, _f;
				return __generator(this, function(_g) {
					switch (_g.label) {
						case 0:
							if (!this.identifiers || !this.identifiers.sessionId || !this.config) {
								if (this.identifiers && !this.identifiers.sessionId) this.loggerProvider.log("Session ID has not been set yet, cannot evaluate targeting for Session Replay.");
								else this.loggerProvider.warn("Session replay init has not been called, cannot evaluate targeting.");
								return [2];
							}
							if (!this.config.targetingConfig) if (isInit) this.loggerProvider.log("Targeting config has not been set yet, cannot evaluate targeting.");
							else {
								this.loggerProvider.log("No targeting config set, skipping initialization/recording for event.");
								return [2];
							}
							this.lastTargetingParams = targetingParams;
							targetingConfig = this.config.targetingConfig;
							shouldReEvaluate = targetingConfig && !this.sessionTargetingMatch;
							if (!shouldReEvaluate) return [3, 2];
							urlChangeEvaluationId = forceTargetingReevaluation ? this.latestUrlChangeTargetingEvaluationId : void 0;
							eventForTargeting = targetingParams.event;
							if (eventForTargeting && Object.values(SpecialEventType$1).includes(eventForTargeting.event_type)) eventForTargeting = void 0;
							pageUrl = (_e = (_b = (_a = targetingParams.page) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : (_d = (_c = getGlobalScope()) === null || _c === void 0 ? void 0 : _c.location) === null || _d === void 0 ? void 0 : _d.href) !== null && _e !== void 0 ? _e : "";
							pageForTargeting = (_f = targetingParams.page) !== null && _f !== void 0 ? _f : pageUrl !== "" ? { url: pageUrl } : void 0;
							return [4, evaluateTargetingAndStore({
								sessionId: this.identifiers.sessionId,
								targetingConfig,
								loggerProvider: this.loggerProvider,
								apiKey: this.config.apiKey,
								targetingParams: {
									userProperties: targetingParams.userProperties,
									event: eventForTargeting,
									page: pageForTargeting
								},
								urlChange: forceTargetingReevaluation
							})];
						case 1:
							targetingMatch = _g.sent();
							if (forceTargetingReevaluation && urlChangeEvaluationId !== void 0 && urlChangeEvaluationId !== this.latestUrlChangeTargetingEvaluationId) {
								this.loggerProvider.debug("Ignoring stale URL-change targeting result #".concat(urlChangeEvaluationId, "; latest is #").concat(this.latestUrlChangeTargetingEvaluationId, "."));
								return [2];
							}
							this.sessionTargetingMatch = this.sessionTargetingMatch || targetingMatch;
							this.loggerProvider.debug(JSON.stringify({
								name: "targeted replay capture config",
								sessionTargetingMatch: this.sessionTargetingMatch,
								event: eventForTargeting,
								targetingParams
							}, null, 2));
							_g.label = 2;
						case 2:
							if (!isInit) return [3, 3];
							this.initialize(true);
							return [3, 5];
						case 3:
							if (!(forceRestart || !this.recordCancelCallback)) return [3, 5];
							this.loggerProvider.log("Recording events for session due to forceRestart or no ongoing recording.");
							return [4, this.recordEvents()];
						case 4:
							_g.sent();
							_g.label = 5;
						case 5: return [2];
					}
				});
			});
		};
		this.addCustomRRWebEvent = function(eventName, eventData, addStorageInfo) {
			if (eventData === void 0) eventData = {};
			if (addStorageInfo === void 0) addStorageInfo = true;
			return __awaiter(_this, void 0, void 0, function() {
				var debugInfo, config, storageSizeData, e_1;
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0:
							_a.trys.push([
								0,
								3,
								,
								4
							]);
							debugInfo = void 0;
							config = this.config;
							if (!(config && eventName !== CustomRRwebEvent.METADATA)) return [3, 2];
							debugInfo = {
								config: getDebugConfig(config),
								version: VERSION$1
							};
							if (!addStorageInfo) return [3, 2];
							return [4, getStorageSize()];
						case 1:
							storageSizeData = _a.sent();
							debugInfo = __assign(__assign({}, storageSizeData), debugInfo);
							_a.label = 2;
						case 2:
							if (this.recordCancelCallback && this.recordFunction) this.recordFunction.addCustomEvent(eventName, __assign(__assign({}, eventData), debugInfo));
							else this.loggerProvider.debug("Not able to add custom replay capture event ".concat(eventName, " due to no ongoing recording."));
							return [3, 4];
						case 3:
							e_1 = _a.sent();
							this.loggerProvider.debug("Error while adding custom replay capture event: ", e_1);
							return [3, 4];
						case 4: return [2];
					}
				});
			});
		};
		this.stopRecordingEvents = function() {
			var _a;
			try {
				_this.loggerProvider.log("Session Replay capture stopping.");
				_this.recordCancelCallback && _this.recordCancelCallback();
				_this.recordCancelCallback = null;
				(_a = _this.networkObservers) === null || _a === void 0 || _a.stop();
			} catch (error) {
				var typedError = error;
				_this.loggerProvider.warn("Error occurred while stopping replay capture: ".concat(typedError.toString()));
			}
		};
		this.loggerProvider = new SafeLoggerProvider(new Logger());
	}
	SessionReplay.prototype.init = function(apiKey, options) {
		return returnWrapper(this._init(apiKey, options));
	};
	/**
	* Subscribes to SPA URL changes via the URL tracking plugin and re-evaluates targeting so we
	* can start/stop recording when the user navigates to a page that matches or no longer matches.
	*/
	SessionReplay.prototype.setupUrlChangeListenerForTargeting = function() {
		var _this = this;
		var _a;
		(_a = this.urlChangeCleanup) === null || _a === void 0 || _a.call(this);
		var globalScope = getGlobalScope();
		if (!(globalScope === null || globalScope === void 0 ? void 0 : globalScope.location)) return;
		var onUrlChange = function(href) {
			var evaluationId = ++_this.latestUrlChangeTargetingEvaluationId;
			_this.evaluateTargetingAndCapture({
				userProperties: {},
				event: void 0,
				page: { url: href }
			}, false, false, true);
			_this.loggerProvider.debug("Queued URL-change targeting re-evaluation #".concat(evaluationId, " for ").concat(href, "."));
		};
		var unsubscribe = subscribeToUrlChanges(globalScope, onUrlChange);
		this.urlChangeCleanup = function() {
			unsubscribe();
			_this.urlChangeCleanup = null;
		};
	};
	SessionReplay.prototype.getCurrentPageForTargeting = function() {
		var _a, _b;
		var currentUrl = (_b = (_a = getGlobalScope()) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.href;
		return currentUrl != null ? { url: currentUrl } : void 0;
	};
	SessionReplay.prototype._init = function(apiKey, options) {
		var _a, _b, _c, _d, _e, _f, _g, _h;
		return __awaiter(this, void 0, void 0, function() {
			var _j, _k, joinedConfig, localConfig, remoteConfig, scrollWatcher, managers, storeType, rrwebEventManager, error_1, typedError, payloadBatcher, interactionEventManager, error_2, typedError, workerScript, globalScope, compressionScript, messenger;
			return __generator(this, function(_l) {
				switch (_l.label) {
					case 0:
						(_a = this.urlChangeCleanup) === null || _a === void 0 || _a.call(this);
						this.loggerProvider = new SafeLoggerProvider(options.loggerProvider || new Logger());
						Object.prototype.hasOwnProperty.call(options, "logLevel") && this.loggerProvider.enable(options.logLevel);
						this.identifiers = new SessionIdentifiers({
							sessionId: options.sessionId,
							deviceId: options.deviceId
						});
						_j = this;
						return [4, createSessionReplayJoinedConfigGenerator(apiKey, options)];
					case 1:
						_j.joinedConfigGenerator = _l.sent();
						return [4, this.joinedConfigGenerator.generateJoinedConfig()];
					case 2:
						_k = _l.sent(), joinedConfig = _k.joinedConfig, localConfig = _k.localConfig, remoteConfig = _k.remoteConfig;
						this.config = joinedConfig;
						this.setMetadata(options.sessionId, joinedConfig, localConfig, remoteConfig, (_b = options.version) === null || _b === void 0 ? void 0 : _b.version, VERSION$1, (_c = options.version) === null || _c === void 0 ? void 0 : _c.type);
						if (options.sessionId && ((_d = this.config.interactionConfig) === null || _d === void 0 ? void 0 : _d.enabled)) {
							scrollWatcher = ScrollWatcher.default({
								sessionId: options.sessionId,
								type: "interaction"
							}, this.config);
							this.pageLeaveFns = [scrollWatcher.send(this.getDeviceId.bind(this)).bind(scrollWatcher)];
							this.scrollHook = scrollWatcher.hook.bind(scrollWatcher);
							this.clickHandler = new ClickHandler(this.loggerProvider, scrollWatcher);
						}
						managers = [];
						storeType = this.config.storeType;
						if (storeType === "idb" && !((_e = getGlobalScope()) === null || _e === void 0 ? void 0 : _e.indexedDB)) {
							storeType = "memory";
							this.loggerProvider.warn("Could not use preferred indexedDB storage, reverting to in memory option.");
						}
						this.loggerProvider.log("Using ".concat(storeType, " for event storage."));
						_l.label = 3;
					case 3:
						_l.trys.push([
							3,
							5,
							,
							6
						]);
						return [4, createEventsManager({
							config: this.config,
							type: "replay",
							storeType
						})];
					case 4:
						rrwebEventManager = _l.sent();
						managers.push({
							name: "replay",
							manager: rrwebEventManager
						});
						return [3, 6];
					case 5:
						error_1 = _l.sent();
						typedError = error_1;
						this.loggerProvider.warn("Error occurred while creating replay events manager: ".concat(typedError.toString()));
						return [3, 6];
					case 6:
						if (!((_f = this.config.interactionConfig) === null || _f === void 0 ? void 0 : _f.enabled)) return [3, 10];
						payloadBatcher = this.config.interactionConfig.batch ? clickBatcher : clickNonBatcher;
						_l.label = 7;
					case 7:
						_l.trys.push([
							7,
							9,
							,
							10
						]);
						return [4, createEventsManager({
							config: this.config,
							type: "interaction",
							minInterval: (_g = this.config.interactionConfig.trackEveryNms) !== null && _g !== void 0 ? _g : INTERACTION_MIN_INTERVAL,
							maxInterval: INTERACTION_MAX_INTERVAL,
							payloadBatcher,
							storeType
						})];
					case 8:
						interactionEventManager = _l.sent();
						managers.push({
							name: "interaction",
							manager: interactionEventManager
						});
						return [3, 10];
					case 9:
						error_2 = _l.sent();
						typedError = error_2;
						this.loggerProvider.warn("Error occurred while creating interaction events manager: ".concat(typedError.toString()));
						return [3, 10];
					case 10:
						this.eventsManager = new (MultiEventManager.bind.apply(MultiEventManager, __spreadArray([void 0], __read(managers), false)))();
						if (this.eventCompressor) this.eventCompressor.terminate();
						workerScript = void 0;
						globalScope = getGlobalScope();
						if (!(this.config.useWebWorker && globalScope && globalScope.Worker)) return [3, 12];
						return [4, import("./worker-B72GagvA.js")];
					case 11:
						compressionScript = _l.sent().compressionScript;
						workerScript = compressionScript;
						_l.label = 12;
					case 12:
						this.eventCompressor = new EventCompressor(this.eventsManager, this.config, this.getDeviceId(), workerScript);
						return [4, this.initializeNetworkObservers()];
					case 13:
						_l.sent();
						if ((_h = getGlobalScope()) === null || _h === void 0 ? void 0 : _h.opener) {
							messenger = getOrCreateWindowMessenger();
							enableBackgroundCapture(messenger);
							messenger.setup(__assign({ logger: this.loggerProvider }, this.config.serverZone && { endpoint: AMPLITUDE_ORIGINS_MAP[this.config.serverZone] }));
						}
						this.loggerProvider.log("Installing @amplitude/session-replay-browser.");
						this.teardownEventListeners(false);
						return [4, this.evaluateTargetingAndCapture({
							userProperties: options.userProperties,
							page: this.getCurrentPageForTargeting()
						}, true)];
					case 14:
						_l.sent();
						if (this.config.targetingConfig) this.setupUrlChangeListenerForTargeting();
						return [2];
				}
			});
		});
	};
	SessionReplay.prototype.setSessionId = function(sessionId, deviceId) {
		return returnWrapper(this.asyncSetSessionId(sessionId, deviceId));
	};
	SessionReplay.prototype.asyncSetSessionId = function(sessionId, deviceId, options) {
		var _a;
		return __awaiter(this, void 0, void 0, function() {
			var previousSessionId, deviceIdForReplayId, joinedConfig;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						this.latestUrlChangeTargetingEvaluationId++;
						this.sessionTargetingMatch = false;
						this.lastShouldRecordDecision = void 0;
						previousSessionId = this.identifiers && this.identifiers.sessionId;
						if (previousSessionId) this.sendEvents(previousSessionId);
						deviceIdForReplayId = deviceId || this.getDeviceId();
						this.identifiers = new SessionIdentifiers({
							sessionId,
							deviceId: deviceIdForReplayId
						});
						if (!(this.joinedConfigGenerator && previousSessionId)) return [3, 2];
						return [4, this.joinedConfigGenerator.generateJoinedConfig()];
					case 1:
						joinedConfig = _b.sent().joinedConfig;
						this.config = joinedConfig;
						_b.label = 2;
					case 2:
						if (!((_a = this.config) === null || _a === void 0 ? void 0 : _a.targetingConfig)) return [3, 4];
						return [4, this.evaluateTargetingAndCapture({
							userProperties: options === null || options === void 0 ? void 0 : options.userProperties,
							page: this.getCurrentPageForTargeting()
						}, false, true)];
					case 3:
						_b.sent();
						return [3, 6];
					case 4: return [4, this.recordEvents()];
					case 5:
						_b.sent();
						_b.label = 6;
					case 6: return [2];
				}
			});
		});
	};
	SessionReplay.prototype.getSessionReplayProperties = function() {
		var _a;
		var config = this.config;
		var identifiers = this.identifiers;
		if (!config || !identifiers) {
			this.loggerProvider.warn("Session replay init has not been called, cannot get session replay properties.");
			return {};
		}
		var shouldRecord = this.getShouldRecord();
		var eventProperties = {};
		if (shouldRecord) {
			eventProperties = (_a = {}, _a[DEFAULT_SESSION_REPLAY_PROPERTY$1] = identifiers.sessionReplayId ? identifiers.sessionReplayId : null, _a);
			if (config.debugMode) eventProperties[SESSION_REPLAY_DEBUG_PROPERTY] = JSON.stringify({ appHash: generateHashCode(config.apiKey).toString() });
		}
		this.addCustomRRWebEvent(CustomRRwebEvent.GET_SR_PROPS, {
			shouldRecord,
			eventProperties
		}, this.eventCount === 10);
		if (this.eventCount === 10) this.eventCount = 0;
		this.eventCount++;
		return eventProperties;
	};
	SessionReplay.prototype.sendEvents = function(sessionId) {
		var _a;
		var sessionIdToSend = sessionId || ((_a = this.identifiers) === null || _a === void 0 ? void 0 : _a.sessionId);
		var deviceId = this.getDeviceId();
		this.eventsManager && sessionIdToSend && deviceId && this.eventsManager.sendCurrentSequenceEvents({
			sessionId: sessionIdToSend,
			deviceId
		});
	};
	SessionReplay.prototype.initialize = function(shouldSendStoredEvents) {
		var _a;
		if (shouldSendStoredEvents === void 0) shouldSendStoredEvents = false;
		return __awaiter(this, void 0, void 0, function() {
			var deviceId;
			return __generator(this, function(_b) {
				if (!((_a = this.identifiers) === null || _a === void 0 ? void 0 : _a.sessionId)) {
					this.loggerProvider.log("Session is not being recorded due to lack of session id.");
					return [2, Promise.resolve()];
				}
				deviceId = this.getDeviceId();
				if (!deviceId) {
					this.loggerProvider.log("Session is not being recorded due to lack of device id.");
					return [2, Promise.resolve()];
				}
				this.eventsManager && shouldSendStoredEvents && this.eventsManager.sendStoredEvents({ deviceId });
				return [2, this.recordEvents()];
			});
		});
	};
	SessionReplay.prototype.shouldOptOut = function() {
		var _a, _b;
		var identityStoreOptOut;
		if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.instanceName) identityStoreOptOut = getAnalyticsConnector$1(this.config.instanceName).identityStore.getIdentity().optOut;
		return identityStoreOptOut !== void 0 ? identityStoreOptOut : (_b = this.config) === null || _b === void 0 ? void 0 : _b.optOut;
	};
	SessionReplay.prototype.getShouldRecord = function() {
		if (!this.identifiers || !this.config || !this.identifiers.sessionId) {
			this.loggerProvider.warn("Session is not being recorded due to lack of config, please call sessionReplay.init.");
			return false;
		}
		if (!this.config.captureEnabled) {
			this.loggerProvider.log("Session ".concat(this.identifiers.sessionId, " not being captured due to capture being disabled for project or because the remote config could not be fetched."));
			return false;
		}
		if (this.shouldOptOut()) {
			this.loggerProvider.log("Opting session ".concat(this.identifiers.sessionId, " out of recording due to optOut config."));
			return false;
		}
		var shouldRecord = false;
		var message = "";
		var matched = false;
		if (this.config.targetingConfig) if (!this.sessionTargetingMatch) {
			message = "Not capturing replays for session ".concat(this.identifiers.sessionId, " due to not matching targeting conditions.");
			this.loggerProvider.log(message);
			shouldRecord = false;
			matched = false;
		} else {
			message = "Capturing replays for session ".concat(this.identifiers.sessionId, " due to matching targeting conditions.");
			this.loggerProvider.log(message);
			shouldRecord = true;
			matched = true;
		}
		else if (!isTimestampInSample(this.identifiers.sessionId, this.config.sampleRate)) {
			message = "Opting session ".concat(this.identifiers.sessionId, " out of recording due to sample rate.");
			this.loggerProvider.log(message);
			shouldRecord = false;
			matched = false;
		} else {
			shouldRecord = true;
			matched = true;
		}
		if (this.lastShouldRecordDecision !== shouldRecord && this.config.targetingConfig) {
			this.addCustomRRWebEvent(CustomRRwebEvent.TARGETING_DECISION, {
				message,
				sessionId: this.identifiers.sessionId,
				matched,
				targetingParams: this.lastTargetingParams
			});
			this.lastShouldRecordDecision = shouldRecord;
		}
		return shouldRecord;
	};
	SessionReplay.prototype.getBlockSelectors = function() {
		var _a, _b, _c;
		var blockSelector = (_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.privacyConfig) === null || _b === void 0 ? void 0 : _b.blockSelector) !== null && _c !== void 0 ? _c : [];
		if (blockSelector.length === 0) return;
		return blockSelector;
	};
	SessionReplay.prototype.getMaskTextSelectors = function() {
		var _a, _b, _c, _d;
		if (((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.privacyConfig) === null || _b === void 0 ? void 0 : _b.defaultMaskLevel) === "conservative") return "*";
		var maskSelector = (_d = (_c = this.config) === null || _c === void 0 ? void 0 : _c.privacyConfig) === null || _d === void 0 ? void 0 : _d.maskSelector;
		if (!maskSelector) return;
		return maskSelector;
	};
	SessionReplay.prototype.getRecordingPlugins = function(loggingConfig) {
		var _a, _b, _c, _d, _e, _f;
		return __awaiter(this, void 0, void 0, function() {
			var plugins, urlTrackingPlugin, getRecordConsolePlugin, error_3;
			return __generator(this, function(_g) {
				switch (_g.label) {
					case 0:
						plugins = [];
						try {
							urlTrackingPlugin = createUrlTrackingPlugin({
								ugcFilterRules: ((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.interactionConfig) === null || _b === void 0 ? void 0 : _b.ugcFilterRules) || [],
								enablePolling: ((_c = this.config) === null || _c === void 0 ? void 0 : _c.enableUrlChangePolling) || false,
								pollingInterval: (_d = this.config) === null || _d === void 0 ? void 0 : _d.urlChangePollingInterval,
								captureDocumentTitle: (_e = this.config) === null || _e === void 0 ? void 0 : _e.captureDocumentTitle
							});
							plugins.push(urlTrackingPlugin);
						} catch (error) {
							this.loggerProvider.warn("Failed to create URL tracking plugin:", error);
						}
						if (!((_f = loggingConfig === null || loggingConfig === void 0 ? void 0 : loggingConfig.console) === null || _f === void 0 ? void 0 : _f.enabled)) return [3, 4];
						_g.label = 1;
					case 1:
						_g.trys.push([
							1,
							3,
							,
							4
						]);
						return [4, import("./rrweb-plugin-console-record-BtnOeaat.js")];
					case 2:
						getRecordConsolePlugin = _g.sent().getRecordConsolePlugin;
						plugins.push(getRecordConsolePlugin({ level: loggingConfig.console.levels }));
						return [3, 4];
					case 3:
						error_3 = _g.sent();
						this.loggerProvider.warn("Failed to load console plugin:", error_3);
						return [3, 4];
					case 4: return [2, plugins.length > 0 ? plugins : void 0];
				}
			});
		});
	};
	SessionReplay.prototype.getRecordFunction = function() {
		return __awaiter(this, void 0, void 0, function() {
			var record, error_4;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						if (this.recordFunction) return [2, this.recordFunction];
						_a.label = 1;
					case 1:
						_a.trys.push([
							1,
							3,
							,
							4
						]);
						return [4, import("./rrweb-record-CNfYIWBb.js")];
					case 2:
						record = _a.sent().record;
						this.recordFunction = record;
						return [2, record];
					case 3:
						error_4 = _a.sent();
						this.loggerProvider.warn("Failed to load rrweb-record module:", error_4);
						return [2, null];
					case 4: return [2];
				}
			});
		});
	};
	SessionReplay.prototype.recordEvents = function(shouldLogMetadata) {
		var _a, _b, _c, _d, _e, _f, _g, _h;
		if (shouldLogMetadata === void 0) shouldLogMetadata = true;
		return __awaiter(this, void 0, void 0, function() {
			var config, shouldRecord, sessionId, recordFunction, networkLoggingConfig, trackUrl, ignoredUrls, privacyConfig, interactionConfig, loggingConfig, hooks, ugcFilterRules, _j, _k, error_5;
			var _l;
			var _this = this;
			return __generator(this, function(_m) {
				switch (_m.label) {
					case 0:
						config = this.config;
						shouldRecord = this.getShouldRecord();
						sessionId = (_a = this.identifiers) === null || _a === void 0 ? void 0 : _a.sessionId;
						if (!shouldRecord || !sessionId || !config) return [2];
						this.stopRecordingEvents();
						return [4, this.getRecordFunction()];
					case 1:
						recordFunction = _m.sent();
						if (!recordFunction) return [2];
						return [4, this.initializeNetworkObservers()];
					case 2:
						_m.sent();
						networkLoggingConfig = (_b = config.loggingConfig) === null || _b === void 0 ? void 0 : _b.network;
						trackUrl = getServerUrl(config.serverZone, config.trackServerUrl);
						ignoredUrls = [
							SESSION_REPLAY_SERVER_URL,
							SESSION_REPLAY_EU_URL,
							SESSION_REPLAY_STAGING_URL,
							trackUrl
						];
						(_c = this.networkObservers) === null || _c === void 0 || _c.start(function(event) {
							if (ignoredUrls.some(function(url) {
								return event.url.startsWith(url);
							})) return;
							_this.addCustomRRWebEvent(CustomRRwebEvent.FETCH_REQUEST, event);
						}, networkLoggingConfig);
						privacyConfig = config.privacyConfig, interactionConfig = config.interactionConfig, loggingConfig = config.loggingConfig;
						hooks = (interactionConfig === null || interactionConfig === void 0 ? void 0 : interactionConfig.enabled) ? {
							mouseInteraction: this.eventsManager && ((_d = this.clickHandler) === null || _d === void 0 ? void 0 : _d.createHook({
								eventsManager: this.eventsManager,
								sessionId,
								deviceIdFn: this.getDeviceId.bind(this),
								mirror: recordFunction.mirror,
								ugcFilterRules: (_e = interactionConfig.ugcFilterRules) !== null && _e !== void 0 ? _e : [],
								performanceOptions: (_f = config.performanceConfig) === null || _f === void 0 ? void 0 : _f.interaction
							})),
							scroll: this.scrollHook
						} : {};
						ugcFilterRules = (interactionConfig === null || interactionConfig === void 0 ? void 0 : interactionConfig.enabled) && interactionConfig.ugcFilterRules ? interactionConfig.ugcFilterRules : [];
						this.loggerProvider.log("Session Replay capture beginning for ".concat(sessionId, "."));
						_m.label = 3;
					case 3:
						_m.trys.push([
							3,
							5,
							,
							6
						]);
						_j = this;
						_k = recordFunction;
						_l = {
							emit: function(event) {
								if (_this.shouldOptOut()) {
									_this.loggerProvider.log("Opting session ".concat(sessionId, " out of recording due to optOut config."));
									_this.stopRecordingEvents();
									_this.sendEvents();
									return;
								}
								if (event.type === EventType.Meta) event.data.href = getPageUrl(event.data.href, ugcFilterRules);
								if (_this.eventCompressor) _this.eventCompressor.enqueueEvent(event, sessionId);
							},
							inlineStylesheet: config.shouldInlineStylesheet,
							hooks,
							maskAllInputs: true,
							maskTextClass: MASK_TEXT_CLASS,
							blockClass: BLOCK_CLASS,
							blockSelector: this.getBlockSelectors(),
							applyBackgroundColorToBlockedElements: config.applyBackgroundColorToBlockedElements,
							maskInputFn: maskFn("input", privacyConfig),
							maskTextFn: maskFn("text", privacyConfig),
							maskAttributeFn: maskAttributeFn(privacyConfig),
							maskTextSelector: this.getMaskTextSelectors(),
							recordCanvas: false,
							slimDOMOptions: {
								script: (_g = config.omitElementTags) === null || _g === void 0 ? void 0 : _g.script,
								comment: (_h = config.omitElementTags) === null || _h === void 0 ? void 0 : _h.comment
							},
							errorHandler: function(error) {
								var typedError = error;
								if (typedError.message.includes("insertRule") && typedError.message.includes("CSSStyleSheet")) throw typedError;
								if (typedError._external_) throw typedError;
								_this.loggerProvider.warn("Error while capturing replay: ", typedError.toString());
								return true;
							}
						};
						return [4, this.getRecordingPlugins(loggingConfig)];
					case 4:
						_j.recordCancelCallback = _k.apply(void 0, [(_l.plugins = _m.sent(), _l)]);
						this.addCustomRRWebEvent(CustomRRwebEvent.DEBUG_INFO);
						if (shouldLogMetadata) this.addCustomRRWebEvent(CustomRRwebEvent.METADATA, this.metadata);
						return [3, 6];
					case 5:
						error_5 = _m.sent();
						this.loggerProvider.warn("Failed to initialize session replay:", error_5);
						return [3, 6];
					case 6: return [2];
				}
			});
		});
	};
	SessionReplay.prototype.getDeviceId = function() {
		var _a;
		return (_a = this.identifiers) === null || _a === void 0 ? void 0 : _a.deviceId;
	};
	SessionReplay.prototype.getSessionId = function() {
		var _a;
		return (_a = this.identifiers) === null || _a === void 0 ? void 0 : _a.sessionId;
	};
	SessionReplay.prototype.flush = function(useRetry) {
		var _a;
		if (useRetry === void 0) useRetry = false;
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_b) {
				return [2, (_a = this.eventsManager) === null || _a === void 0 ? void 0 : _a.flush(useRetry)];
			});
		});
	};
	SessionReplay.prototype.shutdown = function() {
		var _a;
		(_a = this.urlChangeCleanup) === null || _a === void 0 || _a.call(this);
		this.teardownEventListeners(true);
		this.stopRecordingEvents();
		this.sendEvents();
	};
	SessionReplay.prototype.mapSDKType = function(sdkType) {
		if (sdkType === "plugin") return "@amplitude/plugin-session-replay-browser";
		if (sdkType === "segment") return "@amplitude/segment-session-replay-plugin";
		return null;
	};
	SessionReplay.prototype.setMetadata = function(sessionId, joinedConfig, localConfig, remoteConfig, replaySDKVersion, standaloneSDKVersion, sdkType) {
		this.metadata = {
			joinedConfig,
			localConfig,
			remoteConfig,
			sessionId,
			hashValue: (sessionId === null || sessionId === void 0 ? void 0 : sessionId.toString()) ? generateHashCode(sessionId.toString()) : void 0,
			sampleRate: joinedConfig.sampleRate,
			replaySDKType: this.mapSDKType(sdkType),
			replaySDKVersion,
			standaloneSDKType: "@amplitude/session-replay-browser",
			standaloneSDKVersion
		};
	};
	SessionReplay.prototype.initializeNetworkObservers = function() {
		var _a, _b, _c;
		return __awaiter(this, void 0, void 0, function() {
			var NetworkObserversClass, error_6;
			return __generator(this, function(_d) {
				switch (_d.label) {
					case 0:
						if (!(((_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.loggingConfig) === null || _b === void 0 ? void 0 : _b.network) === null || _c === void 0 ? void 0 : _c.enabled) && !this.networkObservers)) return [3, 4];
						_d.label = 1;
					case 1:
						_d.trys.push([
							1,
							3,
							,
							4
						]);
						return [4, import("./observers-C4aG2cRl.js")];
					case 2:
						NetworkObserversClass = _d.sent().NetworkObservers;
						this.networkObservers = new NetworkObserversClass();
						return [3, 4];
					case 3:
						error_6 = _d.sent();
						this.loggerProvider.warn("Failed to import or instantiate NetworkObservers:", error_6);
						return [3, 4];
					case 4: return [2];
				}
			});
		});
	};
	return SessionReplay;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/session-replay-factory.js
var getLogConfig = function(sessionReplay) {
	return function() {
		var _a = sessionReplay.config || getDefaultConfig();
		return {
			logger: _a.loggerProvider,
			logLevel: _a.logLevel
		};
	};
};
var createInstance = function() {
	var sessionReplay = new SessionReplay();
	return {
		init: debugWrapper(sessionReplay.init.bind(sessionReplay), "init", getLogConfig(sessionReplay)),
		evaluateTargetingAndCapture: debugWrapper(sessionReplay.evaluateTargetingAndCapture.bind(sessionReplay), "evaluateTargetingAndRecord", getLogConfig(sessionReplay)),
		setSessionId: debugWrapper(sessionReplay.setSessionId.bind(sessionReplay), "setSessionId", getLogConfig(sessionReplay)),
		getSessionId: debugWrapper(sessionReplay.getSessionId.bind(sessionReplay), "getSessionId", getLogConfig(sessionReplay)),
		getSessionReplayProperties: debugWrapper(sessionReplay.getSessionReplayProperties.bind(sessionReplay), "getSessionReplayProperties", getLogConfig(sessionReplay)),
		flush: debugWrapper(sessionReplay.flush.bind(sessionReplay), "flush", getLogConfig(sessionReplay)),
		shutdown: debugWrapper(sessionReplay.shutdown.bind(sessionReplay), "shutdown", getLogConfig(sessionReplay))
	};
};
var session_replay_factory_default = createInstance();
//#endregion
//#region node_modules/.pnpm/@amplitude+session-replay-browser@1.34.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/session-replay-browser/lib/esm/index.js
var init = session_replay_factory_default.init;
var setSessionId = session_replay_factory_default.setSessionId;
var getSessionId = session_replay_factory_default.getSessionId;
var getSessionReplayProperties = session_replay_factory_default.getSessionReplayProperties;
var flush = session_replay_factory_default.flush;
var shutdown = session_replay_factory_default.shutdown;
var evaluateTargetingAndCapture = session_replay_factory_default.evaluateTargetingAndCapture;
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-client-common@2.4.39/node_modules/@amplitude/analytics-client-common/lib/esm/analytics-connector.js
var getAnalyticsConnector = function(instanceName) {
	if (instanceName === void 0) instanceName = "$default_instance";
	return AnalyticsConnector.getInstance(instanceName);
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-types@2.11.1/node_modules/@amplitude/analytics-types/lib/esm/event.js
var IdentifyOperation;
(function(IdentifyOperation) {
	IdentifyOperation["SET"] = "$set";
	IdentifyOperation["SET_ONCE"] = "$setOnce";
	IdentifyOperation["ADD"] = "$add";
	IdentifyOperation["APPEND"] = "$append";
	IdentifyOperation["PREPEND"] = "$prepend";
	IdentifyOperation["REMOVE"] = "$remove";
	IdentifyOperation["PREINSERT"] = "$preInsert";
	IdentifyOperation["POSTINSERT"] = "$postInsert";
	IdentifyOperation["UNSET"] = "$unset";
	IdentifyOperation["CLEAR_ALL"] = "$clearAll";
})(IdentifyOperation || (IdentifyOperation = {}));
var RevenueProperty;
(function(RevenueProperty) {
	RevenueProperty["REVENUE_PRODUCT_ID"] = "$productId";
	RevenueProperty["REVENUE_QUANTITY"] = "$quantity";
	RevenueProperty["REVENUE_PRICE"] = "$price";
	RevenueProperty["REVENUE_TYPE"] = "$revenueType";
	RevenueProperty["REVENUE_CURRENCY"] = "$currency";
	RevenueProperty["REVENUE"] = "$revenue";
})(RevenueProperty || (RevenueProperty = {}));
/**
* Strings that have special meaning when used as an event's type
* and have different specifications.
*/
var SpecialEventType;
(function(SpecialEventType) {
	SpecialEventType["IDENTIFY"] = "$identify";
	SpecialEventType["GROUP_IDENTIFY"] = "$groupidentify";
	SpecialEventType["REVENUE"] = "revenue_amount";
})(SpecialEventType || (SpecialEventType = {}));
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-session-replay-browser@1.27.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/plugin-session-replay-browser/lib/esm/constants.js
var PROPERTY_ADD_OPERATIONS = [
	IdentifyOperation.SET,
	IdentifyOperation.SET_ONCE,
	IdentifyOperation.ADD,
	IdentifyOperation.APPEND,
	IdentifyOperation.PREPEND,
	IdentifyOperation.POSTINSERT
];
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-session-replay-browser@1.27.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/plugin-session-replay-browser/lib/esm/helpers.js
var parseUserProperties = function(event) {
	if (!event.user_properties) return;
	var userPropertiesObj = {};
	Object.keys(event.user_properties).forEach(function(identifyKey) {
		if (PROPERTY_ADD_OPERATIONS.includes(identifyKey)) {
			var typedUserPropertiesOperation = event.user_properties && event.user_properties[identifyKey];
			userPropertiesObj = __assign(__assign({}, userPropertiesObj), typedUserPropertiesOperation);
		}
	});
	return userPropertiesObj;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-session-replay-browser@1.27.1_@amplitude+rrweb@2.0.0-alpha.36_rollup@4.59.0/node_modules/@amplitude/plugin-session-replay-browser/lib/esm/version.js
var VERSION = "1.27.1";
var DEFAULT_SESSION_REPLAY_PROPERTY = "".concat("[Amplitude]", " Session Replay ID");
var SessionReplayPlugin = function() {
	function SessionReplayPlugin(options) {
		this.name = SessionReplayPlugin.pluginName;
		this.type = "enrichment";
		this.config = null;
		this.sessionReplay = {
			flush,
			getSessionId,
			getSessionReplayProperties,
			init,
			setSessionId,
			shutdown,
			evaluateTargetingAndCapture
		};
		this.options = __assign({ forceSessionTracking: false }, options);
		this.srInitOptions = this.options;
	}
	SessionReplayPlugin.prototype.setup = function(config, _client) {
		var _a, _b, _c, _d, _e, _f, _g, _h;
		return __awaiter(this, void 0, void 0, function() {
			var identityStore, userProperties, error_1;
			return __generator(this, function(_j) {
				switch (_j.label) {
					case 0:
						_j.trys.push([
							0,
							2,
							,
							3
						]);
						/* istanbul ignore next */
						config === null || config === void 0 || config.loggerProvider.log("Installing @amplitude/plugin-session-replay, version ".concat("1.27.1", "."));
						this.config = config;
						if (this.options.forceSessionTracking) if (typeof config.defaultTracking === "boolean") {
							if (config.defaultTracking === false) config.defaultTracking = {
								pageViews: false,
								formInteractions: false,
								fileDownloads: false,
								sessions: true
							};
						} else config.defaultTracking = __assign(__assign({}, config.defaultTracking), { sessions: true });
						identityStore = getAnalyticsConnector(this.config.instanceName).identityStore;
						userProperties = identityStore.getIdentity().userProperties;
						this.srInitOptions = {
							instanceName: this.config.instanceName,
							deviceId: (_a = this.options.deviceId) !== null && _a !== void 0 ? _a : this.config.deviceId,
							optOut: this.config.optOut,
							sessionId: this.options.customSessionId ? void 0 : this.config.sessionId,
							loggerProvider: this.config.loggerProvider,
							logLevel: this.config.logLevel,
							flushMaxRetries: this.config.flushMaxRetries,
							serverZone: this.config.serverZone,
							configServerUrl: this.options.configServerUrl || ((_b = this.config.remoteConfig) === null || _b === void 0 ? void 0 : _b.serverUrl),
							trackServerUrl: this.options.trackServerUrl,
							sampleRate: this.options.sampleRate,
							privacyConfig: {
								blockSelector: (_c = this.options.privacyConfig) === null || _c === void 0 ? void 0 : _c.blockSelector,
								maskSelector: (_d = this.options.privacyConfig) === null || _d === void 0 ? void 0 : _d.maskSelector,
								unmaskSelector: (_e = this.options.privacyConfig) === null || _e === void 0 ? void 0 : _e.unmaskSelector,
								defaultMaskLevel: (_f = this.options.privacyConfig) === null || _f === void 0 ? void 0 : _f.defaultMaskLevel
							},
							debugMode: this.options.debugMode,
							shouldInlineStylesheet: this.options.shouldInlineStylesheet,
							version: {
								type: "plugin",
								version: VERSION
							},
							performanceConfig: this.options.performanceConfig,
							storeType: this.options.storeType,
							useWebWorker: (_g = this.options.useWebWorker) !== null && _g !== void 0 ? _g : (_h = this.options.experimental) === null || _h === void 0 ? void 0 : _h.useWebWorker,
							userProperties,
							omitElementTags: this.options.omitElementTags,
							applyBackgroundColorToBlockedElements: this.options.applyBackgroundColorToBlockedElements,
							interactionConfig: this.options.interactionConfig,
							captureDocumentTitle: this.options.captureDocumentTitle,
							enableUrlChangePolling: this.options.enableUrlChangePolling,
							urlChangePollingInterval: this.options.urlChangePollingInterval
						};
						return [4, this.sessionReplay.init(config.apiKey, this.srInitOptions).promise];
					case 1:
						_j.sent();
						return [3, 3];
					case 2:
						error_1 = _j.sent();
						/* istanbul ignore next */
						config === null || config === void 0 || config.loggerProvider.error("Session Replay: Failed to initialize due to ".concat(error_1.message));
						return [3, 3];
					case 3: return [2];
				}
			});
		});
	};
	SessionReplayPlugin.prototype.onSessionIdChanged = function(sessionId) {
		var _a;
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						(_a = this.config) === null || _a === void 0 || _a.loggerProvider.debug("Analytics session id is changed to ".concat(sessionId, ", SR session id is ").concat(String(this.sessionReplay.getSessionId()), "."));
						return [4, this.sessionReplay.setSessionId(sessionId).promise];
					case 1:
						_b.sent();
						return [2];
				}
			});
		});
	};
	SessionReplayPlugin.prototype.onOptOutChanged = function(optOut) {
		var _a;
		return __awaiter(this, void 0, void 0, function() {
			var _b;
			return __generator(this, function(_c) {
				switch (_c.label) {
					case 0:
						(_a = this.config) === null || _a === void 0 || _a.loggerProvider.debug("optOut is changed to ".concat(String(optOut), ", calling ").concat(optOut ? "sessionReplay.shutdown()" : "sessionReplay.init()", "."));
						if (!optOut) return [3, 1];
						this.sessionReplay.shutdown();
						return [3, 4];
					case 1:
						_b = this.config != null;
						if (!_b) return [3, 3];
						return [4, this.sessionReplay.init(this.config.apiKey, this.srInitOptions).promise];
					case 2:
						_b = _c.sent();
						_c.label = 3;
					case 3: _c.label = 4;
					case 4: return [2];
				}
			});
		});
	};
	SessionReplayPlugin.prototype.execute = function(event) {
		var _a, _b, _c;
		return __awaiter(this, void 0, void 0, function() {
			var sessionId, sessionRecordingProperties, sessionId, userProperties, globalScope, sessionRecordingProperties, error_2;
			return __generator(this, function(_d) {
				switch (_d.label) {
					case 0:
						_d.trys.push([
							0,
							9,
							,
							10
						]);
						if (!this.options.customSessionId) return [3, 4];
						sessionId = this.options.customSessionId(event);
						if (!sessionId) return [3, 3];
						if (!(sessionId !== this.sessionReplay.getSessionId())) return [3, 2];
						return [4, this.sessionReplay.setSessionId(sessionId).promise];
					case 1:
						_d.sent();
						_d.label = 2;
					case 2:
						sessionRecordingProperties = this.sessionReplay.getSessionReplayProperties();
						event.event_properties = __assign(__assign({}, event.event_properties), sessionRecordingProperties);
						_d.label = 3;
					case 3: return [3, 8];
					case 4:
						sessionId = (_a = this.config) === null || _a === void 0 ? void 0 : _a.sessionId;
						if (!(sessionId && sessionId !== this.sessionReplay.getSessionId())) return [3, 6];
						return [4, this.sessionReplay.setSessionId(sessionId).promise];
					case 5:
						_d.sent();
						_d.label = 6;
					case 6:
						if (!(sessionId && sessionId === event.session_id)) return [3, 8];
						userProperties = void 0;
						if (event.event_type === SpecialEventType$1.IDENTIFY) userProperties = parseUserProperties(event);
						globalScope = getGlobalScope();
						return [4, this.sessionReplay.evaluateTargetingAndCapture({
							event,
							userProperties,
							page: ((_b = globalScope === null || globalScope === void 0 ? void 0 : globalScope.location) === null || _b === void 0 ? void 0 : _b.href) != null ? { url: globalScope.location.href } : void 0
						})];
					case 7:
						_d.sent();
						sessionRecordingProperties = this.sessionReplay.getSessionReplayProperties();
						event.event_properties = __assign(__assign({}, event.event_properties), sessionRecordingProperties);
						_d.label = 8;
					case 8:
						if (event.event_type === SpecialEventType$1.IDENTIFY && event.event_properties) delete event.event_properties[DEFAULT_SESSION_REPLAY_PROPERTY];
						return [2, Promise.resolve(event)];
					case 9:
						error_2 = _d.sent();
						/* istanbul ignore next */
						(_c = this.config) === null || _c === void 0 || _c.loggerProvider.error("Session Replay: Failed to enrich event due to ".concat(error_2.message));
						return [2, Promise.resolve(event)];
					case 10: return [2];
				}
			});
		});
	};
	SessionReplayPlugin.prototype.teardown = function() {
		var _a;
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_b) {
				try {
					this.sessionReplay.shutdown();
					this.config = null;
				} catch (error) {
					/* istanbul ignore next */
					(_a = this.config) === null || _a === void 0 || _a.loggerProvider.error("Session Replay: teardown failed due to ".concat(error.message));
				}
				return [2];
			});
		});
	};
	SessionReplayPlugin.prototype.getSessionReplayProperties = function() {
		return this.sessionReplay.getSessionReplayProperties();
	};
	SessionReplayPlugin.pluginName = "@amplitude/plugin-session-replay-browser";
	return SessionReplayPlugin;
}();
var sessionReplayPlugin = function(options) {
	return new SessionReplayPlugin(options);
};
//#endregion
//#region app/components/base/amplitude/AmplitudeProvider.tsx
var getEnglishPageName = (pathname) => {
	const firstSegment = pathname.replace(/^\//, "").split("/")[0] || "home";
	return {
		"": "Home",
		"apps": "Studio",
		"datasets": "Knowledge",
		"explore": "Explore",
		"tools": "Tools",
		"account": "Account",
		"signin": "Sign In",
		"signup": "Sign Up"
	}[firstSegment] || firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1);
};
var pageNameEnrichmentPlugin = () => {
	return {
		name: "page-name-enrichment",
		type: "enrichment",
		setup: async () => void 0,
		execute: async (event) => {
			if (event.event_type === "[Amplitude] Page Viewed" && event.event_properties) {
				/* v8 ignore next @preserve */
				const pathname = typeof window !== "undefined" ? window.location.pathname : "";
				event.event_properties["[Amplitude] Page Title"] = getEnglishPageName(pathname);
			}
			return event;
		}
	};
};
var AmplitudeProvider = ({ sessionReplaySampleRate = .5 }) => {
	useEffect(() => {
		if (!isAmplitudeEnabled) return;
		init$1(AMPLITUDE_API_KEY, { defaultTracking: {
			sessions: true,
			pageViews: true,
			formInteractions: true,
			fileDownloads: true,
			attribution: true
		} });
		add(pageNameEnrichmentPlugin());
		add(sessionReplayPlugin({ sampleRate: sessionReplaySampleRate }));
	}, []);
	return null;
};
var AmplitudeProvider_default = React$1.memo(AmplitudeProvider);
//#endregion
export { AmplitudeProvider_default as default };
