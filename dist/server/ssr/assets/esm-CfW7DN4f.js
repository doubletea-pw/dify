import { f as __commonJSMin, v as __toESM } from "../index.js";
import { a as __read$1, c as __values$1, i as __generator, n as __awaiter, o as __rest, r as __extends, s as __spreadArray, t as __assign$1 } from "./tslib.es6-BSnKF3gl.js";
import { t as getGlobalScope } from "./global-scope-C4bxlREa.js";
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/types/event/event.js
var IdentifyOperation$1;
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
})(IdentifyOperation$1 || (IdentifyOperation$1 = {}));
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
var STORAGE_PREFIX = "".concat("AMP", "_unsent");
var DEFAULT_INSTANCE_NAME = "$default_instance";
var AMPLITUDE_SERVER_URL = "https://api2.amplitude.com/2/httpapi";
var EU_AMPLITUDE_SERVER_URL = "https://api.eu.amplitude.com/2/httpapi";
var AMPLITUDE_BATCH_SERVER_URL = "https://api2.amplitude.com/batch";
var EU_AMPLITUDE_BATCH_SERVER_URL = "https://api.eu.amplitude.com/batch";
var UTM_CAMPAIGN = "utm_campaign";
var UTM_CONTENT = "utm_content";
var UTM_ID = "utm_id";
var UTM_MEDIUM = "utm_medium";
var UTM_SOURCE = "utm_source";
var UTM_TERM = "utm_term";
var DCLID = "dclid";
var FBCLID = "fbclid";
var GBRAID = "gbraid";
var GCLID = "gclid";
var KO_CLICK_ID = "ko_click_id";
var LI_FAT_ID = "li_fat_id";
var MSCLKID = "msclkid";
var RDT_CID = "rdt_cid";
var TTCLID = "ttclid";
var TWCLID = "twclid";
var WBRAID = "wbraid";
var BASE_CAMPAIGN = {
	utm_campaign: void 0,
	utm_content: void 0,
	utm_id: void 0,
	utm_medium: void 0,
	utm_source: void 0,
	utm_term: void 0,
	referrer: void 0,
	referring_domain: void 0,
	dclid: void 0,
	gbraid: void 0,
	gclid: void 0,
	fbclid: void 0,
	ko_click_id: void 0,
	li_fat_id: void 0,
	msclkid: void 0,
	rdt_cid: void 0,
	ttclid: void 0,
	twclid: void 0,
	wbraid: void 0
};
var SAFE_HEADERS = [
	"access-control-allow-origin",
	"access-control-allow-credentials",
	"access-control-expose-headers",
	"access-control-max-age",
	"access-control-allow-methods",
	"access-control-allow-headers",
	"accept-patch",
	"accept-ranges",
	"age",
	"allow",
	"alt-svc",
	"cache-control",
	"connection",
	"content-disposition",
	"content-encoding",
	"content-language",
	"content-length",
	"content-location",
	"content-md5",
	"content-range",
	"content-type",
	"date",
	"delta-base",
	"etag",
	"expires",
	"im",
	"last-modified",
	"link",
	"location",
	"permanent",
	"p3p",
	"pragma",
	"proxy-authenticate",
	"public-key-pins",
	"retry-after",
	"server",
	"status",
	"strict-transport-security",
	"trailer",
	"transfer-encoding",
	"tk",
	"upgrade",
	"vary",
	"via",
	"warning",
	"www-authenticate",
	"x-b3-traceid",
	"x-frame-options"
];
var FORBIDDEN_HEADERS = [
	"authorization",
	"cookie",
	"set-cookie"
];
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/valid-properties.js
var MAX_PROPERTY_KEYS = 1e3;
var isValidObject = function(properties) {
	if (Object.keys(properties).length > MAX_PROPERTY_KEYS) return false;
	for (var key in properties) {
		var value = properties[key];
		if (!isValidProperties(key, value)) return false;
	}
	return true;
};
var isValidProperties = function(property, value) {
	var e_1, _a;
	if (typeof property !== "string") return false;
	if (Array.isArray(value)) {
		var isValid = true;
		try {
			for (var value_1 = __values$1(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
				var valueElement = value_1_1.value;
				if (Array.isArray(valueElement)) return false;
				else if (typeof valueElement === "object") isValid = isValid && isValidObject(valueElement);
				else if (!["number", "string"].includes(typeof valueElement)) return false;
				if (!isValid) return false;
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
	} else if (value === null || value === void 0) return false;
	else if (typeof value === "object") return isValidObject(value);
	else if (![
		"number",
		"string",
		"boolean"
	].includes(typeof value)) return false;
	return true;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/identify.js
var Identify = function() {
	function Identify() {
		this._propertySet = /* @__PURE__ */ new Set();
		this._properties = {};
	}
	Identify.prototype.getUserProperties = function() {
		return __assign$1({}, this._properties);
	};
	Identify.prototype.set = function(property, value) {
		this._safeSet(IdentifyOperation.SET, property, value);
		return this;
	};
	Identify.prototype.setOnce = function(property, value) {
		this._safeSet(IdentifyOperation.SET_ONCE, property, value);
		return this;
	};
	Identify.prototype.append = function(property, value) {
		this._safeSet(IdentifyOperation.APPEND, property, value);
		return this;
	};
	Identify.prototype.prepend = function(property, value) {
		this._safeSet(IdentifyOperation.PREPEND, property, value);
		return this;
	};
	Identify.prototype.postInsert = function(property, value) {
		this._safeSet(IdentifyOperation.POSTINSERT, property, value);
		return this;
	};
	Identify.prototype.preInsert = function(property, value) {
		this._safeSet(IdentifyOperation.PREINSERT, property, value);
		return this;
	};
	Identify.prototype.remove = function(property, value) {
		this._safeSet(IdentifyOperation.REMOVE, property, value);
		return this;
	};
	Identify.prototype.add = function(property, value) {
		this._safeSet(IdentifyOperation.ADD, property, value);
		return this;
	};
	Identify.prototype.unset = function(property) {
		this._safeSet(IdentifyOperation.UNSET, property, "-");
		return this;
	};
	Identify.prototype.clearAll = function() {
		this._properties = {};
		this._properties[IdentifyOperation.CLEAR_ALL] = "-";
		return this;
	};
	Identify.prototype._safeSet = function(operation, property, value) {
		if (this._validate(operation, property, value)) {
			var userPropertyMap = this._properties[operation];
			if (userPropertyMap === void 0) {
				userPropertyMap = {};
				this._properties[operation] = userPropertyMap;
			}
			userPropertyMap[property] = value;
			this._propertySet.add(property);
			return true;
		}
		return false;
	};
	Identify.prototype._validate = function(operation, property, value) {
		if (this._properties[IdentifyOperation.CLEAR_ALL] !== void 0) return false;
		if (this._propertySet.has(property)) return false;
		if (operation === IdentifyOperation.ADD) return typeof value === "number";
		if (operation !== IdentifyOperation.UNSET && operation !== IdentifyOperation.REMOVE) return isValidProperties(property, value);
		return true;
	};
	return Identify;
}();
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
/**
* Note that the order of operations should align with https://github.com/amplitude/nova/blob/7701b5986b565d4b2fb53b99a9f2175df055dea8/src/main/java/com/amplitude/ingestion/core/UserPropertyUtils.java#L210
*/
var OrderedIdentifyOperations = [
	IdentifyOperation.CLEAR_ALL,
	IdentifyOperation.UNSET,
	IdentifyOperation.SET,
	IdentifyOperation.SET_ONCE,
	IdentifyOperation.ADD,
	IdentifyOperation.APPEND,
	IdentifyOperation.PREPEND,
	IdentifyOperation.PREINSERT,
	IdentifyOperation.POSTINSERT,
	IdentifyOperation.REMOVE
];
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/types/messages.js
var SUCCESS_MESSAGE = "Event tracked successfully";
var UNEXPECTED_ERROR_MESSAGE = "Unexpected error occurred";
var MAX_RETRIES_EXCEEDED_MESSAGE = "Event rejected due to exceeded retry count";
var OPT_OUT_MESSAGE = "Event skipped due to optOut config";
var MISSING_API_KEY_MESSAGE = "Event rejected due to missing API key";
var CLIENT_NOT_INITIALIZED = "Client not initialized";
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/types/status.js
/** The status of an event. */
var Status;
(function(Status) {
	/** The status could not be determined. */
	Status["Unknown"] = "unknown";
	/** The event was skipped due to configuration or callbacks. */
	Status["Skipped"] = "skipped";
	/** The event was sent successfully. */
	Status["Success"] = "success";
	/** A user or device in the payload is currently rate limited and should try again later. */
	Status["RateLimit"] = "rate_limit";
	/** The sent payload was too large to be processed. */
	Status["PayloadTooLarge"] = "payload_too_large";
	/** The event could not be processed. */
	Status["Invalid"] = "invalid";
	/** A server-side error ocurred during submission. */
	Status["Failed"] = "failed";
	/** a server or client side error occuring when a request takes too long and is cancelled */
	Status["Timeout"] = "Timeout";
	/** NodeJS runtime environment error.. E.g. disconnected from network */
	Status["SystemError"] = "SystemError";
})(Status || (Status = {}));
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/result-builder.js
var buildResult = function(event, code, message) {
	if (code === void 0) code = 0;
	if (message === void 0) message = Status.Unknown;
	return {
		event,
		code,
		message
	};
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/uuid.js
/**
* Source: [jed's gist's comment]{@link https://gist.github.com/jed/982883?permalink_comment_id=3223002#gistcomment-3223002}.
* Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
* where each x is replaced with a random hexadecimal digit from 0 to f, and
* y is replaced with a random hexadecimal digit from 8 to b.
* Used to generate UUIDs for deviceIds.
* @private
*/
var legacyUUID = function(a) {
	return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : (String(1e7) + String(-1e3) + String(-4e3) + String(-8e3) + String(-1e11)).replace(/[018]/g, UUID);
};
var hex = __spreadArray([], __read$1(Array(256).keys()), false).map(function(index) {
	return index.toString(16).padStart(2, "0");
});
var UUID = function(a) {
	var _a;
	var globalScope = getGlobalScope();
	/* istanbul ignore next */
	if (!((_a = globalScope === null || globalScope === void 0 ? void 0 : globalScope.crypto) === null || _a === void 0 ? void 0 : _a.getRandomValues)) return legacyUUID(a);
	var r = globalScope.crypto.getRandomValues(new Uint8Array(16));
	r[6] = r[6] & 15 | 64;
	r[8] = r[8] & 63 | 128;
	return __spreadArray([], __read$1(r.entries()), false).map(function(_a) {
		var _b = __read$1(_a, 2), index = _b[0], int = _b[1];
		return [
			4,
			6,
			8,
			10
		].includes(index) ? "-".concat(hex[int]) : hex[int];
	}).join("");
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/timeline.js
var Timeline = function() {
	function Timeline(client) {
		this.client = client;
		this.queue = [];
		this.applying = false;
		this.plugins = [];
		this._optOutListeners = [];
	}
	Timeline.prototype.register = function(plugin, config) {
		var _a, _b;
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_c) {
				switch (_c.label) {
					case 0:
						if (this.plugins.some(function(existingPlugin) {
							return existingPlugin.name === plugin.name;
						})) {
							this.loggerProvider.warn("Plugin with name ".concat(plugin.name, " already exists, skipping registration"));
							return [2];
						}
						if (plugin.name === void 0) {
							plugin.name = UUID();
							this.loggerProvider.warn("Plugin name is undefined. \n      Generating a random UUID for plugin name: ".concat(plugin.name, ". \n      Set a name for the plugin to prevent it from being added multiple times."));
						}
						plugin.type = (_a = plugin.type) !== null && _a !== void 0 ? _a : "enrichment";
						return [4, (_b = plugin.setup) === null || _b === void 0 ? void 0 : _b.call(plugin, config, this.client)];
					case 1:
						_c.sent();
						this.plugins.push(plugin);
						return [2];
				}
			});
		});
	};
	Timeline.prototype.deregister = function(pluginName, config) {
		var _a;
		return __awaiter(this, void 0, void 0, function() {
			var index, plugin;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						index = this.plugins.findIndex(function(plugin) {
							return plugin.name === pluginName;
						});
						if (index === -1) {
							config.loggerProvider.warn("Plugin with name ".concat(pluginName, " does not exist, skipping deregistration"));
							return [2];
						}
						plugin = this.plugins[index];
						this.plugins.splice(index, 1);
						return [4, (_a = plugin.teardown) === null || _a === void 0 ? void 0 : _a.call(plugin)];
					case 1:
						_b.sent();
						return [2];
				}
			});
		});
	};
	Timeline.prototype.reset = function(client) {
		this._clearOptOutListeners();
		this.applying = false;
		this.plugins.map(function(plugin) {
			var _a;
			return (_a = plugin.teardown) === null || _a === void 0 ? void 0 : _a.call(plugin);
		});
		this.plugins = [];
		this.client = client;
	};
	Timeline.prototype.push = function(event) {
		var _this = this;
		return new Promise(function(resolve) {
			_this.queue.push([event, resolve]);
			_this.scheduleApply(0);
		});
	};
	Timeline.prototype.scheduleApply = function(timeout) {
		var _this = this;
		if (this.applying) return;
		this.applying = true;
		setTimeout(function() {
			_this.apply(_this.queue.shift()).then(function() {
				_this.applying = false;
				if (_this.queue.length > 0) _this.scheduleApply(0);
			});
		}, timeout);
	};
	Timeline.prototype.apply = function(item) {
		return __awaiter(this, void 0, void 0, function() {
			var _a, event, _b, resolve, before, before_1, before_1_1, plugin, e, e_1_1, enrichment, enrichment_1, enrichment_1_1, plugin, e, e_2_1, destination, executeDestinations;
			var e_1, _c, e_2, _d;
			return __generator(this, function(_e) {
				switch (_e.label) {
					case 0:
						if (!item) return [2];
						_a = __read$1(item, 1), event = _a[0];
						_b = __read$1(item, 2), resolve = _b[1];
						this.loggerProvider.log("Timeline.apply: Initial event", event);
						before = this.plugins.filter(function(plugin) {
							return plugin.type === "before";
						});
						_e.label = 1;
					case 1:
						_e.trys.push([
							1,
							6,
							7,
							8
						]);
						before_1 = __values$1(before), before_1_1 = before_1.next();
						_e.label = 2;
					case 2:
						if (!!before_1_1.done) return [3, 5];
						plugin = before_1_1.value;
						/* istanbul ignore if */
						if (!plugin.execute) return [3, 4];
						return [4, plugin.execute(__assign$1({}, event))];
					case 3:
						e = _e.sent();
						if (e === null) {
							this.loggerProvider.log("Timeline.apply: Event filtered out by before plugin '".concat(String(plugin.name), "', event: ").concat(JSON.stringify(event)));
							resolve({
								event,
								code: 0,
								message: ""
							});
							return [2];
						} else {
							event = e;
							this.loggerProvider.log("Timeline.apply: Event after before plugin '".concat(String(plugin.name), "', event: ").concat(JSON.stringify(event)));
						}
						_e.label = 4;
					case 4:
						before_1_1 = before_1.next();
						return [3, 2];
					case 5: return [3, 8];
					case 6:
						e_1_1 = _e.sent();
						e_1 = { error: e_1_1 };
						return [3, 8];
					case 7:
						try {
							if (before_1_1 && !before_1_1.done && (_c = before_1.return)) _c.call(before_1);
						} finally {
							if (e_1) throw e_1.error;
						}
						return [7];
					case 8:
						enrichment = this.plugins.filter(function(plugin) {
							return plugin.type === "enrichment" || plugin.type === void 0;
						});
						_e.label = 9;
					case 9:
						_e.trys.push([
							9,
							14,
							15,
							16
						]);
						enrichment_1 = __values$1(enrichment), enrichment_1_1 = enrichment_1.next();
						_e.label = 10;
					case 10:
						if (!!enrichment_1_1.done) return [3, 13];
						plugin = enrichment_1_1.value;
						/* istanbul ignore if */
						if (!plugin.execute) return [3, 12];
						return [4, plugin.execute(__assign$1({}, event))];
					case 11:
						e = _e.sent();
						if (e === null) {
							this.loggerProvider.log("Timeline.apply: Event filtered out by enrichment plugin '".concat(String(plugin.name), "', event: ").concat(JSON.stringify(event)));
							resolve({
								event,
								code: 0,
								message: ""
							});
							return [2];
						} else {
							event = e;
							this.loggerProvider.log("Timeline.apply: Event after enrichment plugin '".concat(String(plugin.name), "', event: ").concat(JSON.stringify(event)));
						}
						_e.label = 12;
					case 12:
						enrichment_1_1 = enrichment_1.next();
						return [3, 10];
					case 13: return [3, 16];
					case 14:
						e_2_1 = _e.sent();
						e_2 = { error: e_2_1 };
						return [3, 16];
					case 15:
						try {
							if (enrichment_1_1 && !enrichment_1_1.done && (_d = enrichment_1.return)) _d.call(enrichment_1);
						} finally {
							if (e_2) throw e_2.error;
						}
						return [7];
					case 16:
						destination = this.plugins.filter(function(plugin) {
							return plugin.type === "destination";
						});
						this.loggerProvider.log("Timeline.apply: Final event before destinations, event: ".concat(JSON.stringify(event)));
						executeDestinations = destination.map(function(plugin) {
							var eventClone = __assign$1({}, event);
							return plugin.execute(eventClone).catch(function(e) {
								return buildResult(eventClone, 0, String(e));
							});
						});
						Promise.all(executeDestinations).then(function(_a) {
							var resolveResult = __read$1(_a, 1)[0] || buildResult(event, 100, "Event not tracked, no destination plugins on the instance");
							resolve(resolveResult);
						});
						return [2];
				}
			});
		});
	};
	Timeline.prototype.flush = function() {
		return __awaiter(this, void 0, void 0, function() {
			var queue, destination, executeDestinations;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						queue = this.queue;
						this.queue = [];
						return [4, Promise.all(queue.map(function(item) {
							return _this.apply(item);
						}))];
					case 1:
						_a.sent();
						destination = this.plugins.filter(function(plugin) {
							return plugin.type === "destination";
						});
						executeDestinations = destination.map(function(plugin) {
							return plugin.flush && plugin.flush();
						});
						return [4, Promise.all(executeDestinations)];
					case 2:
						_a.sent();
						return [2];
				}
			});
		});
	};
	Timeline.prototype.addOptOutListener = function(cb) {
		this._optOutListeners.push(cb);
	};
	Timeline.prototype._clearOptOutListeners = function() {
		this._optOutListeners = [];
	};
	Timeline.prototype.onIdentityChanged = function(identity) {
		this.plugins.forEach(function(plugin) {
			var _a;
			/* istanbul ignore next */
			(_a = plugin.onIdentityChanged) === null || _a === void 0 || _a.call(plugin, identity);
		});
	};
	Timeline.prototype.onSessionIdChanged = function(sessionId) {
		this.plugins.forEach(function(plugin) {
			var _a;
			/* istanbul ignore next */
			(_a = plugin.onSessionIdChanged) === null || _a === void 0 || _a.call(plugin, sessionId);
		});
	};
	Timeline.prototype.onOptOutChanged = function(optOut) {
		this.plugins.forEach(function(plugin) {
			var _a;
			/* istanbul ignore next */
			(_a = plugin.onOptOutChanged) === null || _a === void 0 || _a.call(plugin, optOut);
		});
		this._callOptOutListeners(optOut);
	};
	Timeline.prototype._callOptOutListeners = function(optOut) {
		return __awaiter(this, void 0, void 0, function() {
			var _a, _b, listener, e_3, e_4_1;
			var e_4, _c;
			return __generator(this, function(_d) {
				switch (_d.label) {
					case 0:
						_d.trys.push([
							0,
							7,
							8,
							9
						]);
						_a = __values$1(this._optOutListeners), _b = _a.next();
						_d.label = 1;
					case 1:
						if (!!_b.done) return [3, 6];
						listener = _b.value;
						_d.label = 2;
					case 2:
						_d.trys.push([
							2,
							4,
							,
							5
						]);
						return [4, listener(optOut)];
					case 3:
						_d.sent();
						return [3, 5];
					case 4:
						e_3 = _d.sent();
						/* istanbul ignore next */
						this.loggerProvider.error("Error calling optOut listener", e_3);
						return [3, 5];
					case 5:
						_b = _a.next();
						return [3, 1];
					case 6: return [3, 9];
					case 7:
						e_4_1 = _d.sent();
						e_4 = { error: e_4_1 };
						return [3, 9];
					case 8:
						try {
							if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
						} finally {
							if (e_4) throw e_4.error;
						}
						return [7];
					case 9: return [2];
				}
			});
		});
	};
	Timeline.prototype.onReset = function() {
		this.plugins.forEach(function(plugin) {
			var _a;
			/* istanbul ignore next */
			(_a = plugin.onReset) === null || _a === void 0 || _a.call(plugin);
		});
	};
	return Timeline;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/event-builder.js
var createTrackEvent = function(eventInput, eventProperties, eventOptions) {
	return __assign$1(__assign$1(__assign$1({}, typeof eventInput === "string" ? { event_type: eventInput } : eventInput), eventOptions), eventProperties && { event_properties: eventProperties });
};
var createIdentifyEvent = function(identify, eventOptions) {
	return __assign$1(__assign$1({}, eventOptions), {
		event_type: SpecialEventType.IDENTIFY,
		user_properties: identify.getUserProperties()
	});
};
var createGroupIdentifyEvent = function(groupType, groupName, identify, eventOptions) {
	var _a;
	return __assign$1(__assign$1({}, eventOptions), {
		event_type: SpecialEventType.GROUP_IDENTIFY,
		group_properties: identify.getUserProperties(),
		groups: (_a = {}, _a[groupType] = groupName, _a)
	});
};
var createGroupEvent = function(groupType, groupName, eventOptions) {
	var _a;
	var identify = new Identify();
	identify.set(groupType, groupName);
	return __assign$1(__assign$1({}, eventOptions), {
		event_type: SpecialEventType.IDENTIFY,
		user_properties: identify.getUserProperties(),
		groups: (_a = {}, _a[groupType] = groupName, _a)
	});
};
var createRevenueEvent = function(revenue, eventOptions) {
	return __assign$1(__assign$1({}, eventOptions), {
		event_type: SpecialEventType.REVENUE,
		event_properties: revenue.getEventProperties()
	});
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/return-wrapper.js
var returnWrapper = function(awaitable) {
	return { promise: awaitable || Promise.resolve() };
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/core-client.js
var AmplitudeCore = function() {
	function AmplitudeCore(name) {
		if (name === void 0) name = "$default";
		this.initializing = false;
		this.isReady = false;
		this.q = [];
		this.dispatchQ = [];
		this.logEvent = this.track.bind(this);
		this.timeline = new Timeline(this);
		this.name = name;
	}
	AmplitudeCore.prototype._init = function(config) {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						this.config = config;
						this.timeline.reset(this);
						this.timeline.loggerProvider = this.config.loggerProvider;
						return [4, this.runQueuedFunctions("q")];
					case 1:
						_a.sent();
						this.isReady = true;
						return [2];
				}
			});
		});
	};
	AmplitudeCore.prototype.runQueuedFunctions = function(queueName) {
		return __awaiter(this, void 0, void 0, function() {
			var queuedFunctions, queuedFunctions_1, queuedFunctions_1_1, queuedFunction, val, e_1_1;
			var e_1, _a;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						queuedFunctions = this[queueName];
						this[queueName] = [];
						_b.label = 1;
					case 1:
						_b.trys.push([
							1,
							8,
							9,
							10
						]);
						queuedFunctions_1 = __values$1(queuedFunctions), queuedFunctions_1_1 = queuedFunctions_1.next();
						_b.label = 2;
					case 2:
						if (!!queuedFunctions_1_1.done) return [3, 7];
						queuedFunction = queuedFunctions_1_1.value;
						val = queuedFunction();
						if (!(val && "promise" in val)) return [3, 4];
						return [4, val.promise];
					case 3:
						_b.sent();
						return [3, 6];
					case 4: return [4, val];
					case 5:
						_b.sent();
						_b.label = 6;
					case 6:
						queuedFunctions_1_1 = queuedFunctions_1.next();
						return [3, 2];
					case 7: return [3, 10];
					case 8:
						e_1_1 = _b.sent();
						e_1 = { error: e_1_1 };
						return [3, 10];
					case 9:
						try {
							if (queuedFunctions_1_1 && !queuedFunctions_1_1.done && (_a = queuedFunctions_1.return)) _a.call(queuedFunctions_1);
						} finally {
							if (e_1) throw e_1.error;
						}
						return [7];
					case 10:
						if (!this[queueName].length) return [3, 12];
						return [4, this.runQueuedFunctions(queueName)];
					case 11:
						_b.sent();
						_b.label = 12;
					case 12: return [2];
				}
			});
		});
	};
	AmplitudeCore.prototype.track = function(eventInput, eventProperties, eventOptions) {
		var event = createTrackEvent(eventInput, eventProperties, eventOptions);
		this.userProperties = this.getOperationAppliedUserProperties(event.user_properties);
		return returnWrapper(this.dispatch(event));
	};
	AmplitudeCore.prototype.identify = function(identify, eventOptions) {
		var event = createIdentifyEvent(identify, eventOptions);
		this.userProperties = this.getOperationAppliedUserProperties(event.user_properties);
		return returnWrapper(this.dispatch(event));
	};
	AmplitudeCore.prototype.groupIdentify = function(groupType, groupName, identify, eventOptions) {
		var event = createGroupIdentifyEvent(groupType, groupName, identify, eventOptions);
		return returnWrapper(this.dispatch(event));
	};
	AmplitudeCore.prototype.setGroup = function(groupType, groupName, eventOptions) {
		var event = createGroupEvent(groupType, groupName, eventOptions);
		this.userProperties = this.getOperationAppliedUserProperties(event.user_properties);
		return returnWrapper(this.dispatch(event));
	};
	AmplitudeCore.prototype.revenue = function(revenue, eventOptions) {
		var event = createRevenueEvent(revenue, eventOptions);
		return returnWrapper(this.dispatch(event));
	};
	AmplitudeCore.prototype.add = function(plugin) {
		if (!this.isReady) {
			this.q.push(this._addPlugin.bind(this, plugin));
			return returnWrapper();
		}
		return this._addPlugin(plugin);
	};
	AmplitudeCore.prototype._addPlugin = function(plugin) {
		return returnWrapper(this.timeline.register(plugin, this.config));
	};
	AmplitudeCore.prototype.remove = function(pluginName) {
		if (!this.isReady) {
			this.q.push(this._removePlugin.bind(this, pluginName));
			return returnWrapper();
		}
		return this._removePlugin(pluginName);
	};
	AmplitudeCore.prototype._removePlugin = function(pluginName) {
		return returnWrapper(this.timeline.deregister(pluginName, this.config));
	};
	AmplitudeCore.prototype.dispatchWithCallback = function(event, callback) {
		if (!this.isReady) return callback(buildResult(event, 0, CLIENT_NOT_INITIALIZED));
		this.process(event).then(callback);
	};
	AmplitudeCore.prototype.dispatch = function(event) {
		return __awaiter(this, void 0, void 0, function() {
			var _this = this;
			return __generator(this, function(_a) {
				if (!this.isReady) return [2, new Promise(function(resolve) {
					_this.dispatchQ.push(_this.dispatchWithCallback.bind(_this, event, resolve));
				})];
				return [2, this.process(event)];
			});
		});
	};
	/**
	*
	* This method applies identify operations to user properties and
	* returns a single object representing the final user property state.
	*
	* This is a best-effort api that only supports $set, $clearAll, and $unset.
	* Other operations are not supported and are ignored.
	*
	* Operations are applied on top of current client state (this.userProperties).
	*
	* @param userProperties The new user properties object from identify() or setIdentity().
	* @returns A key-value object user properties without operations.
	*
	* @example
	* Input:
	* {
	*   $set: { plan: 'premium' },
	*   custom_flag: true
	* }
	*
	* Output:
	* {
	*   plan: 'premium',
	*   custom_flag: true
	* }
	*/
	AmplitudeCore.prototype.getOperationAppliedUserProperties = function(userProperties) {
		var _a;
		var updatedProperties = __assign$1({}, (_a = this.userProperties) !== null && _a !== void 0 ? _a : {});
		if (userProperties === void 0) return updatedProperties;
		var nonOpProperties = {};
		Object.keys(userProperties).forEach(function(key) {
			if (!Object.values(IdentifyOperation$1).includes(key)) nonOpProperties[key] = userProperties[key];
		});
		OrderedIdentifyOperations.forEach(function(operation) {
			if (!Object.keys(userProperties).includes(operation)) return;
			var opProperties = userProperties[operation];
			switch (operation) {
				case IdentifyOperation$1.CLEAR_ALL:
					/* istanbul ignore next */
					Object.keys(updatedProperties).forEach(function(prop) {
						delete updatedProperties[prop];
					});
					break;
				case IdentifyOperation$1.UNSET:
					Object.keys(opProperties).forEach(function(prop) {
						delete updatedProperties[prop];
					});
					break;
				case IdentifyOperation$1.SET:
					Object.assign(updatedProperties, opProperties);
					break;
			}
		});
		Object.assign(updatedProperties, nonOpProperties);
		return updatedProperties;
	};
	AmplitudeCore.prototype.process = function(event) {
		return __awaiter(this, void 0, void 0, function() {
			var result, e_2, message, result;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						_a.trys.push([
							0,
							2,
							,
							3
						]);
						if (this.config.optOut) return [2, buildResult(event, 0, OPT_OUT_MESSAGE)];
						if (event.event_type === SpecialEventType.IDENTIFY) this.timeline.onIdentityChanged({ userProperties: this.userProperties });
						return [4, this.timeline.push(event)];
					case 1:
						result = _a.sent();
						result.code === 200 ? this.config.loggerProvider.log(result.message) : result.code === 100 ? this.config.loggerProvider.warn(result.message) : this.config.loggerProvider.error(result.message);
						return [2, result];
					case 2:
						e_2 = _a.sent();
						message = String(e_2);
						this.config.loggerProvider.error(message);
						result = buildResult(event, 0, message);
						return [2, result];
					case 3: return [2];
				}
			});
		});
	};
	AmplitudeCore.prototype.setOptOut = function(optOut) {
		if (!this.isReady) {
			this.q.push(this._setOptOut.bind(this, Boolean(optOut)));
			return;
		}
		this._setOptOut(optOut);
	};
	AmplitudeCore.prototype._setOptOut = function(optOut) {
		if (this.config.optOut !== optOut) {
			this.config.optOut = Boolean(optOut);
			this.timeline.onOptOutChanged(optOut);
		}
	};
	AmplitudeCore.prototype.flush = function() {
		return returnWrapper(this.timeline.flush());
	};
	AmplitudeCore.prototype.plugin = function(name) {
		var plugin = this.timeline.plugins.find(function(plugin) {
			return plugin.name === name;
		});
		if (plugin === void 0) {
			this.config.loggerProvider.debug("Cannot find plugin with name ".concat(name));
			return;
		}
		return plugin;
	};
	AmplitudeCore.prototype.plugins = function(pluginClass) {
		return this.timeline.plugins.filter(function(plugin) {
			return plugin instanceof pluginClass;
		});
	};
	return AmplitudeCore;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/revenue.js
var Revenue = function() {
	function Revenue() {
		this.productId = "";
		this.quantity = 1;
		this.price = 0;
	}
	Revenue.prototype.setProductId = function(productId) {
		this.productId = productId;
		return this;
	};
	Revenue.prototype.setQuantity = function(quantity) {
		if (quantity > 0) this.quantity = quantity;
		return this;
	};
	Revenue.prototype.setPrice = function(price) {
		this.price = price;
		return this;
	};
	Revenue.prototype.setRevenueType = function(revenueType) {
		this.revenueType = revenueType;
		return this;
	};
	Revenue.prototype.setCurrency = function(currency) {
		this.currency = currency;
		return this;
	};
	Revenue.prototype.setRevenue = function(revenue) {
		this.revenue = revenue;
		return this;
	};
	Revenue.prototype.setReceipt = function(receipt) {
		this.receipt = receipt;
		return this;
	};
	Revenue.prototype.setReceiptSig = function(receiptSig) {
		this.receiptSig = receiptSig;
		return this;
	};
	Revenue.prototype.setEventProperties = function(properties) {
		try {
			var filtered = JSON.parse(JSON.stringify(properties));
			if (isValidObject(filtered)) this.properties = filtered;
		} catch (_a) {}
		return this;
	};
	Revenue.prototype.getEventProperties = function() {
		var eventProperties = this.properties ? __assign$1({}, this.properties) : {};
		eventProperties[RevenueProperty.REVENUE_PRODUCT_ID] = this.productId;
		eventProperties[RevenueProperty.REVENUE_QUANTITY] = this.quantity;
		eventProperties[RevenueProperty.REVENUE_PRICE] = this.price;
		eventProperties[RevenueProperty.REVENUE_TYPE] = this.revenueType;
		eventProperties[RevenueProperty.REVENUE_CURRENCY] = this.currency;
		eventProperties[RevenueProperty.REVENUE] = this.revenue;
		eventProperties[RevenueProperty.RECEIPT] = this.receipt;
		eventProperties[RevenueProperty.RECEIPT_SIG] = this.receiptSig;
		return eventProperties;
	};
	return Revenue;
}();
var RevenueProperty;
(function(RevenueProperty) {
	RevenueProperty["REVENUE_PRODUCT_ID"] = "$productId";
	RevenueProperty["REVENUE_QUANTITY"] = "$quantity";
	RevenueProperty["REVENUE_PRICE"] = "$price";
	RevenueProperty["REVENUE_TYPE"] = "$revenueType";
	RevenueProperty["REVENUE_CURRENCY"] = "$currency";
	RevenueProperty["REVENUE"] = "$revenue";
	RevenueProperty["RECEIPT"] = "$receipt";
	RevenueProperty["RECEIPT_SIG"] = "$receiptSig";
})(RevenueProperty || (RevenueProperty = {}));
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/chunk.js
var chunk = function(arr, size) {
	var chunkSize = Math.max(size, 1);
	return arr.reduce(function(chunks, element, index) {
		var chunkIndex = Math.floor(index / chunkSize);
		if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
		chunks[chunkIndex].push(element);
		return chunks;
	}, []);
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/types/loglevel.js
var LogLevel;
(function(LogLevel) {
	LogLevel[LogLevel["None"] = 0] = "None";
	LogLevel[LogLevel["Error"] = 1] = "Error";
	LogLevel[LogLevel["Warn"] = 2] = "Warn";
	LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
	LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/logger.js
var PREFIX = "Amplitude Logger ";
var Logger = function() {
	function Logger() {
		this.logLevel = LogLevel.None;
	}
	Logger.prototype.disable = function() {
		this.logLevel = LogLevel.None;
	};
	Logger.prototype.enable = function(logLevel) {
		if (logLevel === void 0) logLevel = LogLevel.Warn;
		this.logLevel = logLevel;
	};
	Logger.prototype.log = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		if (this.logLevel < LogLevel.Verbose) return;
		console.log("".concat(PREFIX, "[Log]: ").concat(args.join(" ")));
	};
	Logger.prototype.warn = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		if (this.logLevel < LogLevel.Warn) return;
		console.warn("".concat(PREFIX, "[Warn]: ").concat(args.join(" ")));
	};
	Logger.prototype.error = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		if (this.logLevel < LogLevel.Error) return;
		console.error("".concat(PREFIX, "[Error]: ").concat(args.join(" ")));
	};
	Logger.prototype.debug = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		if (this.logLevel < LogLevel.Debug) return;
		console.log("".concat(PREFIX, "[Debug]: ").concat(args.join(" ")));
	};
	return Logger;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/config.js
var getDefaultConfig = function() {
	return {
		flushMaxRetries: 12,
		flushQueueSize: 200,
		flushIntervalMillis: 1e4,
		instanceName: DEFAULT_INSTANCE_NAME,
		logLevel: LogLevel.Warn,
		loggerProvider: new Logger(),
		offline: false,
		optOut: false,
		serverUrl: AMPLITUDE_SERVER_URL,
		serverZone: "US",
		useBatch: false
	};
};
var Config = function() {
	function Config(options) {
		var _a, _b, _c, _d;
		this._optOut = false;
		var defaultConfig = getDefaultConfig();
		this.apiKey = options.apiKey;
		this.flushIntervalMillis = (_a = options.flushIntervalMillis) !== null && _a !== void 0 ? _a : defaultConfig.flushIntervalMillis;
		this.flushMaxRetries = options.flushMaxRetries || defaultConfig.flushMaxRetries;
		this.flushQueueSize = options.flushQueueSize || defaultConfig.flushQueueSize;
		this.instanceName = options.instanceName || defaultConfig.instanceName;
		this.loggerProvider = options.loggerProvider || defaultConfig.loggerProvider;
		this.logLevel = (_b = options.logLevel) !== null && _b !== void 0 ? _b : defaultConfig.logLevel;
		this.minIdLength = options.minIdLength;
		this.plan = options.plan;
		this.ingestionMetadata = options.ingestionMetadata;
		this.offline = options.offline !== void 0 ? options.offline : defaultConfig.offline;
		this.optOut = (_c = options.optOut) !== null && _c !== void 0 ? _c : defaultConfig.optOut;
		this.serverUrl = options.serverUrl;
		this.serverZone = options.serverZone || defaultConfig.serverZone;
		this.storageProvider = options.storageProvider;
		this.transportProvider = options.transportProvider;
		this.useBatch = (_d = options.useBatch) !== null && _d !== void 0 ? _d : defaultConfig.useBatch;
		this.loggerProvider.enable(this.logLevel);
		var serverConfig = createServerConfig(options.serverUrl, options.serverZone, options.useBatch);
		this.serverZone = serverConfig.serverZone;
		this.serverUrl = serverConfig.serverUrl;
	}
	Object.defineProperty(Config.prototype, "optOut", {
		get: function() {
			return this._optOut;
		},
		set: function(optOut) {
			this._optOut = optOut;
		},
		enumerable: false,
		configurable: true
	});
	return Config;
}();
var getServerUrl = function(serverZone, useBatch) {
	if (serverZone === "EU") return useBatch ? EU_AMPLITUDE_BATCH_SERVER_URL : EU_AMPLITUDE_SERVER_URL;
	return useBatch ? AMPLITUDE_BATCH_SERVER_URL : AMPLITUDE_SERVER_URL;
};
var createServerConfig = function(serverUrl, serverZone, useBatch) {
	if (serverUrl === void 0) serverUrl = "";
	if (serverZone === void 0) serverZone = getDefaultConfig().serverZone;
	if (useBatch === void 0) useBatch = getDefaultConfig().useBatch;
	if (serverUrl) return {
		serverUrl,
		serverZone: void 0
	};
	var _serverZone = ["US", "EU"].includes(serverZone) ? serverZone : getDefaultConfig().serverZone;
	return {
		serverZone: _serverZone,
		serverUrl: getServerUrl(_serverZone, useBatch)
	};
};
var RequestMetadata = function() {
	function RequestMetadata() {
		this.sdk = { metrics: { histogram: {} } };
	}
	RequestMetadata.prototype.recordHistogram = function(key, value) {
		this.sdk.metrics.histogram[key] = value;
	};
	return RequestMetadata;
}();
(function() {
	function HistogramOptions() {}
	return HistogramOptions;
})();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/status-code.js
/**
* Checks if an HTTP status code indicates success (2xx range)
* @param code - The HTTP status code to check
* @returns true if the status code is in the 2xx range, false otherwise
*/
function isSuccessStatusCode(code) {
	return code >= 200 && code < 300;
}
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/debug.js
var getStacktrace = function(ignoreDepth) {
	if (ignoreDepth === void 0) ignoreDepth = 0;
	return ((/* @__PURE__ */ new Error()).stack || "").split("\n").slice(2 + ignoreDepth).map(function(text) {
		return text.trim();
	});
};
var getClientLogConfig = function(client) {
	return function() {
		var _a = __assign$1({}, client.config);
		return {
			logger: _a.loggerProvider,
			logLevel: _a.logLevel
		};
	};
};
var getValueByStringPath = function(obj, path) {
	var e_1, _a;
	path = path.replace(/\[(\w+)\]/g, ".$1");
	path = path.replace(/^\./, "");
	try {
		for (var _b = __values$1(path.split(".")), _c = _b.next(); !_c.done; _c = _b.next()) {
			var attr = _c.value;
			if (attr in obj) obj = obj[attr];
			else return;
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	return obj;
};
var getClientStates = function(client, paths) {
	return function() {
		var e_2, _a;
		var res = {};
		try {
			for (var paths_1 = __values$1(paths), paths_1_1 = paths_1.next(); !paths_1_1.done; paths_1_1 = paths_1.next()) {
				var path = paths_1_1.value;
				res[path] = getValueByStringPath(client, path);
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
		return res;
	};
};
var debugWrapper = function(fn, fnName, getLogConfig, getStates, fnContext) {
	if (fnContext === void 0) fnContext = null;
	return function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var _a = getLogConfig(), logger = _a.logger, logLevel = _a.logLevel;
		if (logLevel && logLevel < LogLevel.Debug || !logLevel || !logger) return fn.apply(fnContext, args);
		var debugContext = {
			type: "invoke public method",
			name: fnName,
			args,
			stacktrace: getStacktrace(1),
			time: { start: (/* @__PURE__ */ new Date()).toISOString() },
			states: {}
		};
		if (getStates && debugContext.states) debugContext.states.before = getStates();
		var result = fn.apply(fnContext, args);
		if (result && result.promise) result.promise.then(function() {
			if (getStates && debugContext.states) debugContext.states.after = getStates();
			if (debugContext.time) debugContext.time.end = (/* @__PURE__ */ new Date()).toISOString();
			logger.debug(JSON.stringify(debugContext, null, 2));
		});
		else {
			if (getStates && debugContext.states) debugContext.states.after = getStates();
			if (debugContext.time) debugContext.time.end = (/* @__PURE__ */ new Date()).toISOString();
			logger.debug(JSON.stringify(debugContext, null, 2));
		}
		return result;
	};
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/plugins/destination.js
var DEFAULT_AMPLITUDE_SERVER_URLS = new Set([
	AMPLITUDE_SERVER_URL,
	EU_AMPLITUDE_SERVER_URL,
	AMPLITUDE_BATCH_SERVER_URL,
	EU_AMPLITUDE_BATCH_SERVER_URL
]);
var shouldCompressUploadBodyForRequest = function(serverUrl, enableRequestBodyCompression) {
	if (enableRequestBodyCompression === void 0) enableRequestBodyCompression = false;
	if (DEFAULT_AMPLITUDE_SERVER_URLS.has(serverUrl)) return true;
	return enableRequestBodyCompression;
};
function getErrorMessage(error) {
	if (error instanceof Error) return error.message;
	return String(error);
}
function getResponseBodyString(res) {
	var responseBodyString = "";
	try {
		if ("body" in res) responseBodyString = JSON.stringify(res.body, null, 2);
	} catch (_a) {}
	return responseBodyString;
}
var Destination = function() {
	function Destination(context) {
		this.name = "amplitude";
		this.type = "destination";
		this.retryTimeout = 1e3;
		this.throttleTimeout = 3e4;
		this.storageKey = "";
		this.scheduleId = null;
		this.scheduledTimeout = 0;
		this.flushId = null;
		this.queue = [];
		this.diagnosticsClient = context === null || context === void 0 ? void 0 : context.diagnosticsClient;
	}
	Destination.prototype.setup = function(config) {
		var _a;
		return __awaiter(this, void 0, void 0, function() {
			var unsent;
			var _this = this;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						this.config = config;
						this.storageKey = "".concat(STORAGE_PREFIX, "_").concat(this.config.apiKey.substring(0, 10));
						return [4, (_a = this.config.storageProvider) === null || _a === void 0 ? void 0 : _a.get(this.storageKey)];
					case 1:
						unsent = _b.sent();
						if (unsent && unsent.length > 0) Promise.all(unsent.map(function(event) {
							return _this.execute(event);
						})).catch();
						return [2, Promise.resolve(void 0)];
				}
			});
		});
	};
	Destination.prototype.execute = function(event) {
		var _this = this;
		if (!event.insert_id) event.insert_id = UUID();
		return new Promise(function(resolve) {
			var context = {
				event,
				attempts: 0,
				callback: function(result) {
					return resolve(result);
				},
				timeout: 0
			};
			_this.queue.push(context);
			_this.schedule(_this.config.flushIntervalMillis);
			_this.saveEvents();
		});
	};
	Destination.prototype.removeEventsExceedFlushMaxRetries = function(list) {
		var _this = this;
		return list.filter(function(context) {
			context.attempts += 1;
			if (context.attempts < _this.config.flushMaxRetries) return true;
			_this.fulfillRequest([context], 500, MAX_RETRIES_EXCEEDED_MESSAGE);
			return false;
		});
	};
	Destination.prototype.scheduleEvents = function(list) {
		var _this = this;
		list.forEach(function(context) {
			_this.schedule(context.timeout === 0 ? _this.config.flushIntervalMillis : context.timeout);
		});
	};
	Destination.prototype.schedule = function(timeout) {
		var _this = this;
		if (this.config.offline) return;
		if (this.scheduleId === null || this.scheduleId && timeout > this.scheduledTimeout) {
			if (this.scheduleId) clearTimeout(this.scheduleId);
			this.scheduledTimeout = timeout;
			this.scheduleId = setTimeout(function() {
				_this.queue = _this.queue.map(function(context) {
					context.timeout = 0;
					return context;
				});
				_this.flush(true);
			}, timeout);
			return;
		}
	};
	Destination.prototype.resetSchedule = function() {
		this.scheduleId = null;
		this.scheduledTimeout = 0;
	};
	Destination.prototype.flush = function(useRetry) {
		if (useRetry === void 0) useRetry = false;
		return __awaiter(this, void 0, void 0, function() {
			var list, later, batches;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						if (this.config.offline) {
							this.resetSchedule();
							this.config.loggerProvider.debug("Skipping flush while offline.");
							return [2];
						}
						if (this.flushId) {
							this.resetSchedule();
							this.config.loggerProvider.debug("Skipping flush because previous flush has not resolved.");
							return [2];
						}
						this.flushId = this.scheduleId;
						this.resetSchedule();
						list = [];
						later = [];
						this.queue.forEach(function(context) {
							return context.timeout === 0 ? list.push(context) : later.push(context);
						});
						batches = chunk(list, this.config.flushQueueSize);
						return [4, batches.reduce(function(promise, batch) {
							return __awaiter(_this, void 0, void 0, function() {
								return __generator(this, function(_a) {
									switch (_a.label) {
										case 0: return [4, promise];
										case 1:
											_a.sent();
											return [4, this.send(batch, useRetry)];
										case 2: return [2, _a.sent()];
									}
								});
							});
						}, Promise.resolve())];
					case 1:
						_a.sent();
						this.flushId = null;
						this.scheduleEvents(this.queue);
						return [2];
				}
			});
		});
	};
	Destination.prototype.send = function(list, useRetry) {
		var _a;
		if (useRetry === void 0) useRetry = true;
		return __awaiter(this, void 0, void 0, function() {
			var payload, serverUrl, shouldCompressUploadBody, res, e_1, errorMessage;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						if (!this.config.apiKey) return [2, this.fulfillRequest(list, 400, MISSING_API_KEY_MESSAGE)];
						payload = {
							api_key: this.config.apiKey,
							events: list.map(function(context) {
								var _a = context.event;
								_a.extra;
								return __rest(_a, ["extra"]);
							}),
							options: { min_id_length: this.config.minIdLength },
							client_upload_time: (/* @__PURE__ */ new Date()).toISOString(),
							request_metadata: this.config.requestMetadata
						};
						this.config.requestMetadata = new RequestMetadata();
						_b.label = 1;
					case 1:
						_b.trys.push([
							1,
							3,
							,
							4
						]);
						serverUrl = createServerConfig(this.config.serverUrl, this.config.serverZone, this.config.useBatch).serverUrl;
						shouldCompressUploadBody = shouldCompressUploadBodyForRequest(serverUrl, this.config.enableRequestBodyCompression);
						return [4, this.config.transportProvider.send(serverUrl, payload, this.config._enableRequestBodyCompressionExperimental && shouldCompressUploadBody)];
					case 2:
						res = _b.sent();
						if (res === null) {
							this.fulfillRequest(list, 0, UNEXPECTED_ERROR_MESSAGE);
							return [2];
						}
						if (!useRetry) {
							if ("body" in res) this.fulfillRequest(list, res.statusCode, "".concat(res.status, ": ").concat(getResponseBodyString(res)));
							else this.fulfillRequest(list, res.statusCode, res.status);
							return [2];
						}
						this.handleResponse(res, list);
						return [3, 4];
					case 3:
						e_1 = _b.sent();
						errorMessage = getErrorMessage(e_1);
						this.config.loggerProvider.error(errorMessage);
						(_a = this.diagnosticsClient) === null || _a === void 0 || _a.recordEvent("analytics.events.unsuccessful.from.catch.error", {
							events: list.map(function(context) {
								return context.event.event_type;
							}),
							message: errorMessage,
							stack_trace: getStacktrace()
						});
						this.handleResponse({
							status: Status.Failed,
							statusCode: 0
						}, list);
						return [3, 4];
					case 4: return [2];
				}
			});
		});
	};
	Destination.prototype.handleResponse = function(res, list) {
		var _a;
		if (!isSuccessStatusCode(res.statusCode)) (_a = this.diagnosticsClient) === null || _a === void 0 || _a.recordEvent("analytics.events.unsuccessful", {
			events: list.map(function(context) {
				return context.event.event_type;
			}),
			code: res.statusCode,
			status: res.status,
			body: getResponseBodyString(res),
			stack_trace: getStacktrace()
		});
		var status = res.status;
		switch (status) {
			case Status.Success:
				this.handleSuccessResponse(res, list);
				break;
			case Status.Invalid:
				this.handleInvalidResponse(res, list);
				break;
			case Status.PayloadTooLarge:
				this.handlePayloadTooLargeResponse(res, list);
				break;
			case Status.RateLimit:
				this.handleRateLimitResponse(res, list);
				break;
			default:
				this.config.loggerProvider.warn("{code: 0, error: \"Status '".concat(status, "' provided for ").concat(list.length, " events\"}"));
				this.handleOtherResponse(list);
				break;
		}
	};
	Destination.prototype.handleSuccessResponse = function(res, list) {
		this.fulfillRequest(list, res.statusCode, SUCCESS_MESSAGE);
	};
	Destination.prototype.handleInvalidResponse = function(res, list) {
		var _this = this;
		if (res.body.missingField || res.body.error.startsWith("Invalid API key")) {
			this.fulfillRequest(list, res.statusCode, res.body.error);
			return;
		}
		var dropIndex = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read$1(Object.values(res.body.eventsWithInvalidFields)), false), __read$1(Object.values(res.body.eventsWithMissingFields)), false), __read$1(Object.values(res.body.eventsWithInvalidIdLengths)), false), __read$1(res.body.silencedEvents), false).flat();
		var dropIndexSet = new Set(dropIndex);
		var retry = list.filter(function(context, index) {
			if (dropIndexSet.has(index)) {
				_this.fulfillRequest([context], res.statusCode, res.body.error);
				return;
			}
			return true;
		});
		if (retry.length > 0) this.config.loggerProvider.warn(getResponseBodyString(res));
		var tryable = this.removeEventsExceedFlushMaxRetries(retry);
		this.scheduleEvents(tryable);
	};
	Destination.prototype.handlePayloadTooLargeResponse = function(res, list) {
		if (list.length === 1) {
			this.fulfillRequest(list, res.statusCode, res.body.error);
			return;
		}
		this.config.loggerProvider.warn(getResponseBodyString(res));
		this.config.flushQueueSize /= 2;
		var tryable = this.removeEventsExceedFlushMaxRetries(list);
		this.scheduleEvents(tryable);
	};
	Destination.prototype.handleRateLimitResponse = function(res, list) {
		var _this = this;
		var dropUserIds = Object.keys(res.body.exceededDailyQuotaUsers);
		var dropDeviceIds = Object.keys(res.body.exceededDailyQuotaDevices);
		var throttledIndex = res.body.throttledEvents;
		var dropUserIdsSet = new Set(dropUserIds);
		var dropDeviceIdsSet = new Set(dropDeviceIds);
		var throttledIndexSet = new Set(throttledIndex);
		var retry = list.filter(function(context, index) {
			if (context.event.user_id && dropUserIdsSet.has(context.event.user_id) || context.event.device_id && dropDeviceIdsSet.has(context.event.device_id)) {
				_this.fulfillRequest([context], res.statusCode, res.body.error);
				return;
			}
			if (throttledIndexSet.has(index)) context.timeout = _this.throttleTimeout;
			return true;
		});
		if (retry.length > 0) this.config.loggerProvider.warn(getResponseBodyString(res));
		var tryable = this.removeEventsExceedFlushMaxRetries(retry);
		this.scheduleEvents(tryable);
	};
	Destination.prototype.handleOtherResponse = function(list) {
		var _this = this;
		var later = list.map(function(context) {
			context.timeout = context.attempts * _this.retryTimeout;
			return context;
		});
		var tryable = this.removeEventsExceedFlushMaxRetries(later);
		this.scheduleEvents(tryable);
	};
	Destination.prototype.fulfillRequest = function(list, code, message) {
		var _a, _b, _c;
		if (!isSuccessStatusCode(code)) {
			(_a = this.diagnosticsClient) === null || _a === void 0 || _a.increment("analytics.events.dropped", list.length);
			(_b = this.diagnosticsClient) === null || _b === void 0 || _b.recordEvent("analytics.events.dropped", {
				events: list.map(function(context) {
					return context.event.event_type;
				}),
				code,
				message,
				stack_trace: getStacktrace()
			});
		} else (_c = this.diagnosticsClient) === null || _c === void 0 || _c.increment("analytics.events.sent", list.length);
		this.removeEvents(list);
		list.forEach(function(context) {
			return context.callback(buildResult(context.event, code, message));
		});
	};
	/**
	* This is called on
	* 1) new events are added to queue; or
	* 2) response comes back for a request
	*
	* Update the event storage based on the queue
	*/
	Destination.prototype.saveEvents = function() {
		if (!this.config.storageProvider) return;
		var updatedEvents = this.queue.map(function(context) {
			return context.event;
		});
		this.config.storageProvider.set(this.storageKey, updatedEvents);
	};
	/**
	* This is called on response comes back for a request
	*/
	Destination.prototype.removeEvents = function(eventsToRemove) {
		this.queue = this.queue.filter(function(queuedContext) {
			return !eventsToRemove.some(function(context) {
				return context.event.insert_id === queuedContext.event.insert_id;
			});
		});
		this.saveEvents();
	};
	return Destination;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-connector@1.6.4/node_modules/@amplitude/analytics-connector/dist/analytics-connector.esm.js
var ApplicationContextProviderImpl = function() {
	function ApplicationContextProviderImpl() {}
	ApplicationContextProviderImpl.prototype.getApplicationContext = function() {
		return {
			versionName: this.versionName,
			language: getLanguage$1(),
			platform: "Web",
			os: void 0,
			deviceModel: void 0
		};
	};
	return ApplicationContextProviderImpl;
}();
var getLanguage$1 = function() {
	return typeof navigator !== "undefined" && (navigator.languages && navigator.languages[0] || navigator.language) || "";
};
var EventBridgeImpl = function() {
	function EventBridgeImpl() {
		this.queue = [];
	}
	EventBridgeImpl.prototype.logEvent = function(event) {
		if (!this.receiver) {
			if (this.queue.length < 512) this.queue.push(event);
		} else this.receiver(event);
	};
	EventBridgeImpl.prototype.setEventReceiver = function(receiver) {
		this.receiver = receiver;
		if (this.queue.length > 0) {
			this.queue.forEach(function(event) {
				receiver(event);
			});
			this.queue = [];
		}
	};
	return EventBridgeImpl;
}();
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
	__assign = Object.assign || function __assign(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
function __values(o) {
	var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	if (m) return m.call(o);
	if (o && typeof o.length === "number") return { next: function() {
		if (o && i >= o.length) o = void 0;
		return {
			value: o && o[i++],
			done: !o
		};
	} };
	throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
	var m = typeof Symbol === "function" && o[Symbol.iterator];
	if (!m) return o;
	var i = m.call(o), r, ar = [], e;
	try {
		while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	} catch (error) {
		e = { error };
	} finally {
		try {
			if (r && !r.done && (m = i["return"])) m.call(i);
		} finally {
			if (e) throw e.error;
		}
	}
	return ar;
}
var isEqual = function(obj1, obj2) {
	var e_1, _a;
	var primitive = [
		"string",
		"number",
		"boolean",
		"undefined"
	];
	var typeA = typeof obj1;
	if (typeA !== typeof obj2) return false;
	try {
		for (var primitive_1 = __values(primitive), primitive_1_1 = primitive_1.next(); !primitive_1_1.done; primitive_1_1 = primitive_1.next()) if (primitive_1_1.value === typeA) return obj1 === obj2;
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (primitive_1_1 && !primitive_1_1.done && (_a = primitive_1.return)) _a.call(primitive_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	if (obj1 == null && obj2 == null) return true;
	else if (obj1 == null || obj2 == null) return false;
	if (obj1.length !== obj2.length) return false;
	var isArrayA = Array.isArray(obj1);
	var isArrayB = Array.isArray(obj2);
	if (isArrayA !== isArrayB) return false;
	if (isArrayA && isArrayB) {
		for (var i = 0; i < obj1.length; i++) if (!isEqual(obj1[i], obj2[i])) return false;
	} else {
		if (!isEqual(Object.keys(obj1).sort(), Object.keys(obj2).sort())) return false;
		var result_1 = true;
		Object.keys(obj1).forEach(function(key) {
			if (!isEqual(obj1[key], obj2[key])) result_1 = false;
		});
		return result_1;
	}
	return true;
};
var ID_OP_SET = "$set";
var ID_OP_UNSET = "$unset";
var ID_OP_CLEAR_ALL = "$clearAll";
if (!Object.entries) Object.entries = function(obj) {
	var ownProps = Object.keys(obj);
	var i = ownProps.length;
	var resArray = new Array(i);
	while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];
	return resArray;
};
var IdentityStoreImpl = function() {
	function IdentityStoreImpl() {
		this.identity = { userProperties: {} };
		this.listeners = /* @__PURE__ */ new Set();
	}
	IdentityStoreImpl.prototype.editIdentity = function() {
		var self = this;
		var actingUserProperties = __assign({}, this.identity.userProperties);
		var actingIdentity = __assign(__assign({}, this.identity), { userProperties: actingUserProperties });
		return {
			setUserId: function(userId) {
				actingIdentity.userId = userId;
				return this;
			},
			setDeviceId: function(deviceId) {
				actingIdentity.deviceId = deviceId;
				return this;
			},
			setUserProperties: function(userProperties) {
				actingIdentity.userProperties = userProperties;
				return this;
			},
			setOptOut: function(optOut) {
				actingIdentity.optOut = optOut;
				return this;
			},
			updateUserProperties: function(actions) {
				var e_1, _a, e_2, _b, e_3, _c;
				var actingProperties = actingIdentity.userProperties || {};
				try {
					for (var _d = __values(Object.entries(actions)), _e = _d.next(); !_e.done; _e = _d.next()) {
						var _f = __read(_e.value, 2), action = _f[0], properties = _f[1];
						switch (action) {
							case ID_OP_SET:
								try {
									for (var _g = (e_2 = void 0, __values(Object.entries(properties))), _h = _g.next(); !_h.done; _h = _g.next()) {
										var _j = __read(_h.value, 2), key = _j[0], value = _j[1];
										actingProperties[key] = value;
									}
								} catch (e_2_1) {
									e_2 = { error: e_2_1 };
								} finally {
									try {
										if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
									} finally {
										if (e_2) throw e_2.error;
									}
								}
								break;
							case ID_OP_UNSET:
								try {
									for (var _k = (e_3 = void 0, __values(Object.keys(properties))), _l = _k.next(); !_l.done; _l = _k.next()) {
										var key = _l.value;
										delete actingProperties[key];
									}
								} catch (e_3_1) {
									e_3 = { error: e_3_1 };
								} finally {
									try {
										if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
									} finally {
										if (e_3) throw e_3.error;
									}
								}
								break;
							case ID_OP_CLEAR_ALL:
								actingProperties = {};
								break;
						}
					}
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				actingIdentity.userProperties = actingProperties;
				return this;
			},
			commit: function() {
				self.setIdentity(actingIdentity);
				return this;
			}
		};
	};
	IdentityStoreImpl.prototype.getIdentity = function() {
		return __assign({}, this.identity);
	};
	IdentityStoreImpl.prototype.setIdentity = function(identity) {
		var originalIdentity = __assign({}, this.identity);
		this.identity = __assign({}, identity);
		if (!isEqual(originalIdentity, this.identity)) this.listeners.forEach(function(listener) {
			listener(identity);
		});
	};
	IdentityStoreImpl.prototype.addIdentityListener = function(listener) {
		this.listeners.add(listener);
	};
	IdentityStoreImpl.prototype.removeIdentityListener = function(listener) {
		this.listeners.delete(listener);
	};
	return IdentityStoreImpl;
}();
var safeGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : self;
var AnalyticsConnector = function() {
	function AnalyticsConnector() {
		this.identityStore = new IdentityStoreImpl();
		this.eventBridge = new EventBridgeImpl();
		this.applicationContextProvider = new ApplicationContextProviderImpl();
	}
	AnalyticsConnector.getInstance = function(instanceName) {
		if (!safeGlobal["analyticsConnectorInstances"]) safeGlobal["analyticsConnectorInstances"] = {};
		if (!safeGlobal["analyticsConnectorInstances"][instanceName]) safeGlobal["analyticsConnectorInstances"][instanceName] = new AnalyticsConnector();
		return safeGlobal["analyticsConnectorInstances"][instanceName];
	};
	return AnalyticsConnector;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/analytics-connector.js
var getAnalyticsConnector = function(instanceName) {
	if (instanceName === void 0) instanceName = DEFAULT_INSTANCE_NAME;
	return AnalyticsConnector.getInstance(instanceName);
};
var setConnectorUserId = function(userId, instanceName) {
	getAnalyticsConnector(instanceName).identityStore.editIdentity().setUserId(userId).commit();
};
var setConnectorDeviceId = function(deviceId, instanceName) {
	getAnalyticsConnector(instanceName).identityStore.editIdentity().setDeviceId(deviceId).commit();
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/plugins/identity.js
var IdentityEventSender = function() {
	function IdentityEventSender() {
		this.name = "identity";
		this.type = "before";
		this.identityStore = getAnalyticsConnector().identityStore;
	}
	IdentityEventSender.prototype.execute = function(context) {
		return __awaiter(this, void 0, void 0, function() {
			var userProperties;
			return __generator(this, function(_a) {
				userProperties = context.user_properties;
				if (userProperties) this.identityStore.editIdentity().updateUserProperties(userProperties).commit();
				return [2, context];
			});
		});
	};
	IdentityEventSender.prototype.setup = function(config) {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				if (config.instanceName) this.identityStore = getAnalyticsConnector(config.instanceName).identityStore;
				return [2];
			});
		});
	};
	return IdentityEventSender;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/session.js
var isNewSession = function(sessionTimeout, lastEventTime) {
	if (lastEventTime === void 0) lastEventTime = Date.now();
	return Date.now() - lastEventTime > sessionTimeout;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/cookie-name.js
var getCookieName = function(apiKey, postKey, limit) {
	if (postKey === void 0) postKey = "";
	if (limit === void 0) limit = 10;
	return [
		"AMP",
		postKey,
		apiKey.substring(0, limit)
	].filter(Boolean).join("_");
};
var getOldCookieName = function(apiKey) {
	return "".concat("AMP".toLowerCase(), "_").concat(apiKey.substring(0, 6));
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/language.js
var getLanguage = function() {
	var _a, _b, _c, _d;
	if (typeof navigator === "undefined") return "";
	var userLanguage = navigator.userLanguage;
	return (_d = (_c = (_b = (_a = navigator.languages) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : navigator.language) !== null && _c !== void 0 ? _c : userLanguage) !== null && _d !== void 0 ? _d : "";
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/query-params.js
var getQueryParams = function() {
	var _a;
	var globalScope = getGlobalScope();
	/* istanbul ignore if */
	if (!((_a = globalScope === null || globalScope === void 0 ? void 0 : globalScope.location) === null || _a === void 0 ? void 0 : _a.search)) return {};
	return globalScope.location.search.substring(1).split("&").filter(Boolean).reduce(function(acc, curr) {
		var query = curr.split("=", 2);
		var key = tryDecodeURIComponent(query[0]);
		var value = tryDecodeURIComponent(query[1]);
		if (!value) return acc;
		acc[key] = value;
		return acc;
	}, {});
};
var tryDecodeURIComponent = function(value) {
	if (value === void 0) value = "";
	try {
		return decodeURIComponent(value);
	} catch (_a) {
		return "";
	}
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/url-utils.js
/**
* Checks if a given URL matches any pattern in an allowlist of URLs or regex patterns.
* @param url - The URL to check
* @param allowlist - Array of allowed URLs (strings) or regex patterns
* @returns true if the URL matches any pattern in the allowlist, false otherwise
*/
var isUrlMatchAllowlist = function(url, allowlist) {
	if (!allowlist || !allowlist.length) return true;
	return allowlist.some(function(allowedUrl) {
		if (typeof allowedUrl === "string") return url === allowedUrl;
		return url.match(allowedUrl);
	});
};
var getDecodeURI = function(locationStr, loggerProvider) {
	var decodedLocationStr = locationStr;
	try {
		decodedLocationStr = decodeURI(locationStr);
	} catch (e) {
		/* istanbul ignore next */
		loggerProvider === null || loggerProvider === void 0 || loggerProvider.error("Malformed URI sequence: ", e);
	}
	return decodedLocationStr;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/sampling.js
var generateHashCode = function(str) {
	var hash = 0;
	if (str.length === 0) return hash;
	for (var i = 0; i < str.length; i++) {
		var chr = str.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0;
	}
	return hash;
};
var isTimestampInSample = function(timestamp, sampleRate) {
	var hashNumber = generateHashCode(timestamp.toString());
	return Math.abs(hashNumber) * 31 % 1e6 / 1e6 < sampleRate;
};
// istanbul ignore next
var isTimestampInSampleTemp = function(timestamp, sampleRate) {
	var hashNumber = generateHashCode(timestamp.toString());
	return Math.abs(hashNumber) * 31 % 1e5 / 1e5 < sampleRate;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/storage/memory.js
var MemoryStorage = function() {
	function MemoryStorage() {
		this.memoryStorage = /* @__PURE__ */ new Map();
	}
	MemoryStorage.prototype.isEnabled = function() {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, true];
			});
		});
	};
	MemoryStorage.prototype.get = function(key) {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, this.memoryStorage.get(key)];
			});
		});
	};
	MemoryStorage.prototype.getRaw = function(key) {
		return __awaiter(this, void 0, void 0, function() {
			var value;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0: return [4, this.get(key)];
					case 1:
						value = _a.sent();
						return [2, value ? JSON.stringify(value) : void 0];
				}
			});
		});
	};
	MemoryStorage.prototype.set = function(key, value) {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				this.memoryStorage.set(key, value);
				return [2];
			});
		});
	};
	MemoryStorage.prototype.remove = function(key) {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				this.memoryStorage.delete(key);
				return [2];
			});
		});
	};
	MemoryStorage.prototype.reset = function() {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				this.memoryStorage.clear();
				return [2];
			});
		});
	};
	return MemoryStorage;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/storage/cookie.js
/* istanbul ignore next */
var getLocks = function() {
	var _a;
	var globalScope = getGlobalScope();
	return (_a = globalScope === null || globalScope === void 0 ? void 0 : globalScope.navigator) === null || _a === void 0 ? void 0 : _a.locks;
};
var CookieStorage = function() {
	function CookieStorage(options, config) {
		if (config === void 0) config = {};
		this.options = __assign$1({}, options);
		this.config = config;
	}
	CookieStorage.prototype.isEnabled = function() {
		return __awaiter(this, void 0, void 0, function() {
			var testKey, testCookieOptions, testStorage, testValue;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						testKey = "AMP_TEST";
						testCookieOptions = __assign$1({}, this.options);
						testStorage = new CookieStorage(testCookieOptions);
						testValue = String(Date.now());
						return [4, testStorage.transaction(testKey, function(storage) {
							var _a, _b;
							try {
								storage.set(testValue);
								var result = storage.get() === testValue;
								/* istanbul ignore next */
								if (!result && _this.config.diagnosticsClient) (_a = _this.config.diagnosticsClient) === null || _a === void 0 || _a.recordEvent("cookies.isEnabled.failure", {
									reason: "Test Value mismatch",
									testKey,
									testValue,
									sync: true
								});
								return result;
							} catch (e) {
								/* istanbul ignore next */
								if (_this.config.diagnosticsClient) {
									var errMessage = e instanceof Error ? e.message : String(e);
									(_b = _this.config.diagnosticsClient) === null || _b === void 0 || _b.recordEvent("cookies.isEnabled.failure", {
										reason: "Cookie getter/setter failed",
										testKey,
										testValue,
										error: errMessage,
										sync: true
									});
								}
								return false;
							} finally {
								storage.set(null);
							}
						})];
					case 1: return [2, _a.sent()];
				}
			});
		});
	};
	CookieStorage.prototype.get = function(key) {
		return __awaiter(this, void 0, void 0, function() {
			var value;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0: return [4, this.getRaw(key)];
					case 1:
						value = _a.sent();
						return [2, this.decodeCookieValue(key, value)];
				}
			});
		});
	};
	CookieStorage.prototype.decodeCookieValue = function(key, value) {
		if (!value) return;
		try {
			var decodedValue = decodeCookieValue(value);
			if (decodedValue === void 0) {
				console.error("Amplitude Logger [Error]: Failed to decode cookie value for key: ".concat(key, ", value: ").concat(value));
				return;
			}
			return JSON.parse(decodedValue);
		} catch (_a) {
			console.error("Amplitude Logger [Error]: Failed to parse cookie value for key: ".concat(key, ", value: ").concat(value));
			return;
		}
	};
	CookieStorage.prototype.getSync = function(key) {
		var value = this.getRawSync(key);
		return this.decodeCookieValue(key, value);
	};
	CookieStorage.prototype.getRaw = function(key) {
		var _a, _b;
		return __awaiter(this, void 0, void 0, function() {
			var globalScope, globalScopeWithCookiesStore, cookieStore, cookies, cookies_1, cookies_1_1, cookie;
			var e_1, _c;
			return __generator(this, function(_d) {
				switch (_d.label) {
					case 0:
						globalScope = getGlobalScope();
						globalScopeWithCookiesStore = globalScope;
						_d.label = 1;
					case 1:
						_d.trys.push([
							1,
							4,
							,
							5
						]);
						cookieStore = globalScopeWithCookiesStore === null || globalScopeWithCookiesStore === void 0 ? void 0 : globalScopeWithCookiesStore.cookieStore;
						if (!cookieStore) return [3, 3];
						return [4, cookieStore.getAll(key)];
					case 2:
						cookies = _d.sent();
						if (cookies) {
							/* istanbul ignore if */
							if (cookies.length > 1) {
								(_a = this.config.diagnosticsClient) === null || _a === void 0 || _a.recordEvent("cookies.duplicate", { cookies: cookies.map(function(cookie) {
									return cookie.domain;
								}) });
								(_b = this.config.diagnosticsClient) === null || _b === void 0 || _b.increment("cookies.duplicate.occurrence.cookieStore");
							}
							try {
								for (cookies_1 = __values$1(cookies), cookies_1_1 = cookies_1.next(); !cookies_1_1.done; cookies_1_1 = cookies_1.next()) {
									cookie = cookies_1_1.value;
									if (isDomainEqual(cookie.domain, this.options.domain)) return [2, cookie.value];
								}
							} catch (e_1_1) {
								e_1 = { error: e_1_1 };
							} finally {
								try {
									if (cookies_1_1 && !cookies_1_1.done && (_c = cookies_1.return)) _c.call(cookies_1);
								} finally {
									if (e_1) throw e_1.error;
								}
							}
						}
						_d.label = 3;
					case 3: return [3, 5];
					case 4:
						_d.sent();
						return [3, 5];
					case 5: return [2, this.getRawSync(key)];
				}
			});
		});
	};
	CookieStorage.prototype.getRawSync = function(key) {
		var _this = this;
		var _a, _b;
		var globalScope = getGlobalScope();
		var cookies = ((_b = (_a = globalScope === null || globalScope === void 0 ? void 0 : globalScope.document) === null || _a === void 0 ? void 0 : _a.cookie.split("; ")) !== null && _b !== void 0 ? _b : []).filter(function(c) {
			return c.indexOf(key + "=") === 0;
		});
		var match = void 0;
		/* istanbul ignore if */
		var duplicateResolverFn = this.config.duplicateResolverFn;
		if (typeof duplicateResolverFn === "function" && cookies.length > 1) match = cookies.find(function(c) {
			var _a;
			try {
				var res = duplicateResolverFn(c.substring(key.length + 1));
				if (!res) (_a = _this.config.diagnosticsClient) === null || _a === void 0 || _a.increment("cookies.duplicate.occurrence.document.cookie");
				return res;
			} catch (ignoreError) {
				/* istanbul ignore next */
				return false;
			}
		});
		if (!match) match = cookies[0];
		if (!match) return;
		return match.substring(key.length + 1);
	};
	CookieStorage.prototype.set = function(key, value) {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				this.setSync(key, value);
				return [2];
			});
		});
	};
	CookieStorage.prototype.setSync = function(key, value) {
		var _a;
		try {
			var expirationDays = (_a = this.options.expirationDays) !== null && _a !== void 0 ? _a : 0;
			var expires = value !== null ? expirationDays : -1;
			var expireDate = void 0;
			if (expires) {
				var date = /* @__PURE__ */ new Date();
				date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1e3);
				expireDate = date;
			}
			var str = "".concat(key, "=").concat(btoa(encodeURIComponent(JSON.stringify(value))));
			if (expireDate) str += "; expires=".concat(expireDate.toUTCString());
			str += "; path=/";
			if (this.options.domain) str += "; domain=".concat(this.options.domain);
			if (this.options.secure) str += "; Secure";
			if (this.options.sameSite) str += "; SameSite=".concat(this.options.sameSite);
			var globalScope = getGlobalScope();
			if (globalScope === null || globalScope === void 0 ? void 0 : globalScope.document) globalScope.document.cookie = str;
		} catch (error) {
			var errorMessage = error instanceof Error ? error.message : String(error);
			console.error("Amplitude Logger [Error]: Failed to set cookie for key: ".concat(key, ". Error: ").concat(errorMessage));
		}
	};
	CookieStorage.prototype.remove = function(key) {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0: return [4, this.set(key, null)];
					case 1:
						_a.sent();
						return [2];
				}
			});
		});
	};
	CookieStorage.prototype.reset = function() {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2];
			});
		});
	};
	CookieStorage.isDomainWritable = function(domain) {
		return __awaiter(this, void 0, void 0, function() {
			var options, storageKey, storage, res;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						if (CookieStorage.cachedTlds[domain]) return [2, true];
						options = { domain: "." + domain };
						storageKey = "AMP_TLDTEST";
						storage = new CookieStorage(options);
						_a.label = 1;
					case 1:
						_a.trys.push([
							1,
							3,
							,
							4
						]);
						return [4, storage.transaction(storageKey, function(storageSync) {
							if (CookieStorage.cachedTlds[domain]) return true;
							try {
								storageSync.set(1);
								var result = !!storageSync.get();
								if (result) CookieStorage.cachedTlds[domain] = true;
								return result;
							} finally {
								storageSync.set(null);
							}
						})];
					case 2:
						res = _a.sent();
						return [2, !!res];
					case 3:
						_a.sent();
						return [2, false];
					case 4: return [2];
				}
			});
		});
	};
	CookieStorage.prototype.transaction = function(key, callback) {
		return __awaiter(this, void 0, void 0, function() {
			var locks, callbackWrapper;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						locks = getLocks();
						callbackWrapper = function() {
							return callback({
								get: function() {
									return _this.getSync(key);
								},
								set: function(value) {
									return _this.setSync(key, value);
								}
							});
						};
						if (!locks) return [2, callbackWrapper()];
						_a.label = 1;
					case 1:
						_a.trys.push([
							1,
							3,
							,
							4
						]);
						return [4, locks.request("com.amplitude:cookie-lock:".concat(key), callbackWrapper)];
					case 2: return [2, _a.sent()];
					case 3:
						_a.sent();
						return [2, callbackWrapper()];
					case 4: return [2];
				}
			});
		});
	};
	CookieStorage.cachedTlds = {};
	return CookieStorage;
}();
var decodeCookiesAsDefault = function(value) {
	try {
		return decodeURIComponent(atob(value));
	} catch (_a) {
		return;
	}
};
var decodeCookiesWithDoubleUrlEncoding = function(value) {
	try {
		return decodeURIComponent(atob(decodeURIComponent(value)));
	} catch (_a) {
		return;
	}
};
/**
* Decodes a cookie value that was encoded with btoa(encodeURIComponent(...)).
* Handles both standard encoding and double URL encoding (used by Ruby Rails v7+).
*/
var decodeCookieValue = function(value) {
	var _a;
	return (_a = decodeCookiesAsDefault(value)) !== null && _a !== void 0 ? _a : decodeCookiesWithDoubleUrlEncoding(value);
};
/**
* Compares two domain strings for equality, ignoring leading dots.
* This is useful for comparing cookie domains since ".example.com" and "example.com"
* are effectively equivalent for cookie scoping.
*/
var isDomainEqual = function(domain1, domain2) {
	if (domain1 === "" && domain2 === "") return true;
	if (!domain1 || !domain2) return false;
	var normalized1 = domain1.startsWith(".") ? domain1.substring(1) : domain1;
	var normalized2 = domain2.startsWith(".") ? domain2.substring(1) : domain2;
	return normalized1.toLowerCase() === normalized2.toLowerCase();
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/storage/helpers.js
var getStorageKey = function(apiKey, postKey, limit) {
	if (postKey === void 0) postKey = "";
	if (limit === void 0) limit = 10;
	return [
		"AMP",
		postKey,
		apiKey.substring(0, limit)
	].filter(Boolean).join("_");
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/storage/browser-storage.js
var BrowserStorage = function() {
	function BrowserStorage(storage) {
		this.storage = storage;
	}
	BrowserStorage.prototype.isEnabled = function() {
		return __awaiter(this, void 0, void 0, function() {
			var random, testStorage, testKey, value;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						/* istanbul ignore if */
						if (!this.storage) return [2, false];
						random = String(Date.now());
						testStorage = new BrowserStorage(this.storage);
						testKey = "AMP_TEST";
						_b.label = 1;
					case 1:
						_b.trys.push([
							1,
							4,
							5,
							7
						]);
						return [4, testStorage.set(testKey, random)];
					case 2:
						_b.sent();
						return [4, testStorage.get(testKey)];
					case 3:
						value = _b.sent();
						return [2, value === random];
					case 4:
						_b.sent();
						/* istanbul ignore next */
						return [2, false];
					case 5: return [4, testStorage.remove(testKey)];
					case 6:
						_b.sent();
						return [7];
					case 7: return [2];
				}
			});
		});
	};
	BrowserStorage.prototype.get = function(key) {
		return __awaiter(this, void 0, void 0, function() {
			var value;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						_b.trys.push([
							0,
							2,
							,
							3
						]);
						return [4, this.getRaw(key)];
					case 1:
						value = _b.sent();
						if (!value) return [2, void 0];
						return [2, JSON.parse(value)];
					case 2:
						_b.sent();
						console.error("[Amplitude] Error: Could not get value from storage");
						return [2, void 0];
					case 3: return [2];
				}
			});
		});
	};
	BrowserStorage.prototype.getRaw = function(key) {
		var _a;
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_b) {
				return [2, ((_a = this.storage) === null || _a === void 0 ? void 0 : _a.getItem(key)) || void 0];
			});
		});
	};
	BrowserStorage.prototype.set = function(key, value) {
		var _a;
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_b) {
				try {
					(_a = this.storage) === null || _a === void 0 || _a.setItem(key, JSON.stringify(value));
				} catch (_c) {}
				return [2];
			});
		});
	};
	BrowserStorage.prototype.remove = function(key) {
		var _a;
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_b) {
				try {
					(_a = this.storage) === null || _a === void 0 || _a.removeItem(key);
				} catch (_c) {}
				return [2];
			});
		});
	};
	BrowserStorage.prototype.reset = function() {
		var _a;
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_b) {
				try {
					(_a = this.storage) === null || _a === void 0 || _a.clear();
				} catch (_c) {}
				return [2];
			});
		});
	};
	return BrowserStorage;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/diagnostics/diagnostics-storage.js
var MAX_PERSISTENT_STORAGE_EVENTS_COUNT = 10;
var DB_VERSION = 1;
var TABLE_NAMES = {
	TAGS: "tags",
	COUNTERS: "counters",
	HISTOGRAMS: "histograms",
	EVENTS: "events",
	INTERNAL: "internal"
};
var INTERNAL_KEYS = { LAST_FLUSH_TIMESTAMP: "last_flush_timestamp" };
/**
* Purpose-specific IndexedDB storage for diagnostics data
* Provides optimized methods for each type of diagnostics data
*/
var DiagnosticsStorage = function() {
	function DiagnosticsStorage(apiKey, logger) {
		this.dbPromise = null;
		this.logger = logger;
		this.dbName = "AMP_diagnostics_".concat(apiKey.substring(0, 10));
	}
	/**
	* Check if IndexedDB is supported in the current environment
	* @returns true if IndexedDB is available, false otherwise
	*/
	DiagnosticsStorage.isSupported = function() {
		var _a;
		return ((_a = getGlobalScope()) === null || _a === void 0 ? void 0 : _a.indexedDB) !== void 0;
	};
	DiagnosticsStorage.prototype.getDB = function() {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				if (!this.dbPromise) this.dbPromise = this.openDB();
				return [2, this.dbPromise];
			});
		});
	};
	DiagnosticsStorage.prototype.openDB = function() {
		var _this = this;
		return new Promise(function(resolve, reject) {
			var request = indexedDB.open(_this.dbName, DB_VERSION);
			request.onerror = function() {
				_this.dbPromise = null;
				reject(/* @__PURE__ */ new Error("Failed to open IndexedDB"));
			};
			request.onsuccess = function() {
				var db = request.result;
				db.onclose = function() {
					_this.dbPromise = null;
					_this.logger.debug("DiagnosticsStorage: DB connection closed.");
				};
				db.onerror = function(event) {
					_this.logger.debug("DiagnosticsStorage: A global database error occurred.", event);
					db.close();
				};
				resolve(db);
			};
			request.onupgradeneeded = function(event) {
				var db = event.target.result;
				_this.createTables(db);
			};
		});
	};
	DiagnosticsStorage.prototype.createTables = function(db) {
		if (!db.objectStoreNames.contains(TABLE_NAMES.TAGS)) db.createObjectStore(TABLE_NAMES.TAGS, { keyPath: "key" });
		if (!db.objectStoreNames.contains(TABLE_NAMES.COUNTERS)) db.createObjectStore(TABLE_NAMES.COUNTERS, { keyPath: "key" });
		if (!db.objectStoreNames.contains(TABLE_NAMES.HISTOGRAMS)) db.createObjectStore(TABLE_NAMES.HISTOGRAMS, { keyPath: "key" });
		if (!db.objectStoreNames.contains(TABLE_NAMES.EVENTS)) db.createObjectStore(TABLE_NAMES.EVENTS, {
			keyPath: "id",
			autoIncrement: true
		}).createIndex("time_idx", "time", { unique: false });
		if (!db.objectStoreNames.contains(TABLE_NAMES.INTERNAL)) db.createObjectStore(TABLE_NAMES.INTERNAL, { keyPath: "key" });
	};
	DiagnosticsStorage.prototype.setTags = function(tags) {
		return __awaiter(this, void 0, void 0, function() {
			var db, transaction_1, store_1, error_1;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						_a.trys.push([
							0,
							2,
							,
							3
						]);
						if (Object.entries(tags).length === 0) return [2];
						return [4, this.getDB()];
					case 1:
						db = _a.sent();
						transaction_1 = db.transaction([TABLE_NAMES.TAGS], "readwrite");
						store_1 = transaction_1.objectStore(TABLE_NAMES.TAGS);
						return [2, new Promise(function(resolve) {
							var entries = Object.entries(tags);
							transaction_1.oncomplete = function() {
								resolve();
							};
							transaction_1.onabort = function(event) {
								_this.logger.debug("DiagnosticsStorage: Failed to set tags", event);
								resolve();
							};
							entries.forEach(function(_a) {
								var _b = __read$1(_a, 2), key = _b[0], value = _b[1];
								var putRequest = store_1.put({
									key,
									value
								});
								putRequest.onerror = function(event) {
									_this.logger.debug("DiagnosticsStorage: Failed to set tag", key, value, event);
								};
							});
						})];
					case 2:
						error_1 = _a.sent();
						this.logger.debug("DiagnosticsStorage: Failed to set tags", error_1);
						return [3, 3];
					case 3: return [2];
				}
			});
		});
	};
	DiagnosticsStorage.prototype.incrementCounters = function(counters) {
		return __awaiter(this, void 0, void 0, function() {
			var db, transaction_2, store_2, error_2;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						_a.trys.push([
							0,
							2,
							,
							3
						]);
						if (Object.entries(counters).length === 0) return [2];
						return [4, this.getDB()];
					case 1:
						db = _a.sent();
						transaction_2 = db.transaction([TABLE_NAMES.COUNTERS], "readwrite");
						store_2 = transaction_2.objectStore(TABLE_NAMES.COUNTERS);
						return [2, new Promise(function(resolve) {
							var entries = Object.entries(counters);
							transaction_2.oncomplete = function() {
								resolve();
							};
							transaction_2.onabort = function(event) {
								_this.logger.debug("DiagnosticsStorage: Failed to increment counters", event);
								resolve();
							};
							entries.forEach(function(_a) {
								var _b = __read$1(_a, 2), key = _b[0], incrementValue = _b[1];
								var getRequest = store_2.get(key);
								getRequest.onsuccess = function() {
									var existingRecord = getRequest.result;
									/* istanbul ignore next */
									var existingValue = existingRecord ? existingRecord.value : 0;
									var putRequest = store_2.put({
										key,
										value: existingValue + incrementValue
									});
									putRequest.onerror = function(event) {
										_this.logger.debug("DiagnosticsStorage: Failed to update counter", key, event);
									};
								};
								getRequest.onerror = function(event) {
									_this.logger.debug("DiagnosticsStorage: Failed to read existing counter", key, event);
								};
							});
						})];
					case 2:
						error_2 = _a.sent();
						this.logger.debug("DiagnosticsStorage: Failed to increment counters", error_2);
						return [3, 3];
					case 3: return [2];
				}
			});
		});
	};
	DiagnosticsStorage.prototype.setHistogramStats = function(histogramStats) {
		return __awaiter(this, void 0, void 0, function() {
			var db, transaction_3, store_3, error_3;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						_a.trys.push([
							0,
							2,
							,
							3
						]);
						if (Object.entries(histogramStats).length === 0) return [2];
						return [4, this.getDB()];
					case 1:
						db = _a.sent();
						transaction_3 = db.transaction([TABLE_NAMES.HISTOGRAMS], "readwrite");
						store_3 = transaction_3.objectStore(TABLE_NAMES.HISTOGRAMS);
						return [2, new Promise(function(resolve) {
							var entries = Object.entries(histogramStats);
							transaction_3.oncomplete = function() {
								resolve();
							};
							transaction_3.onabort = function(event) {
								_this.logger.debug("DiagnosticsStorage: Failed to set histogram stats", event);
								resolve();
							};
							entries.forEach(function(_a) {
								var _b = __read$1(_a, 2), key = _b[0], newStats = _b[1];
								var getRequest = store_3.get(key);
								getRequest.onsuccess = function() {
									var existingRecord = getRequest.result;
									var updatedStats;
									/* istanbul ignore next */
									if (existingRecord) updatedStats = {
										key,
										count: existingRecord.count + newStats.count,
										min: Math.min(existingRecord.min, newStats.min),
										max: Math.max(existingRecord.max, newStats.max),
										sum: existingRecord.sum + newStats.sum
									};
									else updatedStats = {
										key,
										count: newStats.count,
										min: newStats.min,
										max: newStats.max,
										sum: newStats.sum
									};
									var putRequest = store_3.put(updatedStats);
									putRequest.onerror = function(event) {
										_this.logger.debug("DiagnosticsStorage: Failed to set histogram stats", key, event);
									};
								};
								getRequest.onerror = function(event) {
									_this.logger.debug("DiagnosticsStorage: Failed to read existing histogram stats", key, event);
								};
							});
						})];
					case 2:
						error_3 = _a.sent();
						this.logger.debug("DiagnosticsStorage: Failed to set histogram stats", error_3);
						return [3, 3];
					case 3: return [2];
				}
			});
		});
	};
	DiagnosticsStorage.prototype.addEventRecords = function(events) {
		return __awaiter(this, void 0, void 0, function() {
			var db, transaction_4, store_4, error_4;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						_a.trys.push([
							0,
							2,
							,
							3
						]);
						if (events.length === 0) return [2];
						return [4, this.getDB()];
					case 1:
						db = _a.sent();
						transaction_4 = db.transaction([TABLE_NAMES.EVENTS], "readwrite");
						store_4 = transaction_4.objectStore(TABLE_NAMES.EVENTS);
						return [2, new Promise(function(resolve) {
							transaction_4.oncomplete = function() {
								resolve();
							};
							/* istanbul ignore next */
							transaction_4.onabort = function(event) {
								_this.logger.debug("DiagnosticsStorage: Failed to add event records", event);
								resolve();
							};
							var countRequest = store_4.count();
							countRequest.onsuccess = function() {
								var currentCount = countRequest.result;
								var availableSlots = Math.max(0, MAX_PERSISTENT_STORAGE_EVENTS_COUNT - currentCount);
								if (availableSlots < events.length) _this.logger.debug("DiagnosticsStorage: Only added ".concat(availableSlots, " of ").concat(events.length, " events due to storage limit"));
								events.slice(0, availableSlots).forEach(function(event) {
									var request = store_4.add(event);
									request.onerror = function(event) {
										_this.logger.debug("DiagnosticsStorage: Failed to add event record", event);
									};
								});
							};
							countRequest.onerror = function(event) {
								_this.logger.debug("DiagnosticsStorage: Failed to count existing events", event);
							};
						})];
					case 2:
						error_4 = _a.sent();
						this.logger.debug("DiagnosticsStorage: Failed to add event records", error_4);
						return [3, 3];
					case 3: return [2];
				}
			});
		});
	};
	DiagnosticsStorage.prototype.setInternal = function(key, value) {
		return __awaiter(this, void 0, void 0, function() {
			var db, transaction_5, store_5, error_5;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						_a.trys.push([
							0,
							2,
							,
							3
						]);
						return [4, this.getDB()];
					case 1:
						db = _a.sent();
						transaction_5 = db.transaction([TABLE_NAMES.INTERNAL], "readwrite");
						store_5 = transaction_5.objectStore(TABLE_NAMES.INTERNAL);
						return [2, new Promise(function(resolve, reject) {
							/* istanbul ignore next */
							transaction_5.onabort = function() {
								return reject(/* @__PURE__ */ new Error("Failed to set internal value"));
							};
							var request = store_5.put({
								key,
								value
							});
							request.onsuccess = function() {
								return resolve();
							};
							/* istanbul ignore next */
							request.onerror = function() {
								return reject(/* @__PURE__ */ new Error("Failed to set internal value"));
							};
						})];
					case 2:
						error_5 = _a.sent();
						/* istanbul ignore next */
						this.logger.debug("DiagnosticsStorage: Failed to set internal value", error_5);
						return [3, 3];
					case 3: return [2];
				}
			});
		});
	};
	DiagnosticsStorage.prototype.getInternal = function(key) {
		return __awaiter(this, void 0, void 0, function() {
			var db, transaction_6, store_6, error_6;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						_a.trys.push([
							0,
							2,
							,
							3
						]);
						return [4, this.getDB()];
					case 1:
						db = _a.sent();
						transaction_6 = db.transaction([TABLE_NAMES.INTERNAL], "readonly");
						store_6 = transaction_6.objectStore(TABLE_NAMES.INTERNAL);
						return [2, new Promise(function(resolve, reject) {
							/* istanbul ignore next */
							transaction_6.onabort = function() {
								return reject(/* @__PURE__ */ new Error("Failed to get internal value"));
							};
							var request = store_6.get(key);
							request.onsuccess = function() {
								return resolve(request.result);
							};
							/* istanbul ignore next */
							request.onerror = function() {
								return reject(/* @__PURE__ */ new Error("Failed to get internal value"));
							};
						})];
					case 2:
						error_6 = _a.sent();
						this.logger.debug("DiagnosticsStorage: Failed to get internal value", error_6);
						return [2, void 0];
					case 3: return [2];
				}
			});
		});
	};
	DiagnosticsStorage.prototype.getLastFlushTimestamp = function() {
		return __awaiter(this, void 0, void 0, function() {
			var record, error_7;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						_a.trys.push([
							0,
							2,
							,
							3
						]);
						return [4, this.getInternal(INTERNAL_KEYS.LAST_FLUSH_TIMESTAMP)];
					case 1:
						record = _a.sent();
						return [2, record ? parseInt(record.value, 10) : void 0];
					case 2:
						error_7 = _a.sent();
						/* istanbul ignore next */
						this.logger.debug("DiagnosticsStorage: Failed to get last flush timestamp", error_7);
						/* istanbul ignore next */
						return [2, void 0];
					case 3: return [2];
				}
			});
		});
	};
	DiagnosticsStorage.prototype.setLastFlushTimestamp = function(timestamp) {
		return __awaiter(this, void 0, void 0, function() {
			var error_8;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						_a.trys.push([
							0,
							2,
							,
							3
						]);
						return [4, this.setInternal(INTERNAL_KEYS.LAST_FLUSH_TIMESTAMP, timestamp.toString())];
					case 1:
						_a.sent();
						return [3, 3];
					case 2:
						error_8 = _a.sent();
						/* istanbul ignore next */
						this.logger.debug("DiagnosticsStorage: Failed to set last flush timestamp", error_8);
						return [3, 3];
					case 3: return [2];
				}
			});
		});
	};
	/* istanbul ignore next */
	DiagnosticsStorage.prototype.clearTable = function(transaction, tableName) {
		return new Promise(function(resolve, reject) {
			var request = transaction.objectStore(tableName).clear();
			request.onsuccess = function() {
				return resolve();
			};
			request.onerror = function() {
				return reject(new Error("Failed to clear table ".concat(tableName)));
			};
		});
	};
	/* istanbul ignore next */
	DiagnosticsStorage.prototype.getAllAndClear = function() {
		return __awaiter(this, void 0, void 0, function() {
			var db, transaction, _a, tags, counters, histogramStats, events, error_9;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						_b.trys.push([
							0,
							4,
							,
							5
						]);
						return [4, this.getDB()];
					case 1:
						db = _b.sent();
						transaction = db.transaction([
							TABLE_NAMES.TAGS,
							TABLE_NAMES.COUNTERS,
							TABLE_NAMES.HISTOGRAMS,
							TABLE_NAMES.EVENTS
						], "readwrite");
						return [4, Promise.all([
							this.getAllFromStore(transaction, TABLE_NAMES.TAGS),
							this.getAllFromStore(transaction, TABLE_NAMES.COUNTERS),
							this.getAllFromStore(transaction, TABLE_NAMES.HISTOGRAMS),
							this.getAllFromStore(transaction, TABLE_NAMES.EVENTS)
						])];
					case 2:
						_a = __read$1.apply(void 0, [_b.sent(), 4]), tags = _a[0], counters = _a[1], histogramStats = _a[2], events = _a[3];
						return [4, Promise.all([
							this.clearTable(transaction, TABLE_NAMES.COUNTERS),
							this.clearTable(transaction, TABLE_NAMES.HISTOGRAMS),
							this.clearTable(transaction, TABLE_NAMES.EVENTS)
						])];
					case 3:
						_b.sent();
						return [2, {
							tags,
							counters,
							histogramStats,
							events
						}];
					case 4:
						error_9 = _b.sent();
						this.logger.debug("DiagnosticsStorage: Failed to get all and clear data", error_9);
						return [2, {
							tags: [],
							counters: [],
							histogramStats: [],
							events: []
						}];
					case 5: return [2];
				}
			});
		});
	};
	/**
	* Helper method to get all records from a store within a transaction
	*/
	/* istanbul ignore next */
	DiagnosticsStorage.prototype.getAllFromStore = function(transaction, tableName) {
		return new Promise(function(resolve, reject) {
			var request = transaction.objectStore(tableName).getAll();
			request.onsuccess = function() {
				return resolve(request.result);
			};
			request.onerror = function() {
				return reject(new Error("Failed to get all from ".concat(tableName)));
			};
		});
	};
	return DiagnosticsStorage;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/diagnostics/uncaught-sdk-errors.js
var GLOBAL_KEY = "__AMPLITUDE_SCRIPT_URL__";
var EVENT_NAME_ERROR_UNCAUGHT = "sdk.error.uncaught";
var getNormalizedScriptUrls = function() {
	var scope = getGlobalScope();
	/* istanbul ignore next */
	if (!scope) return [];
	var value = scope[GLOBAL_KEY];
	if (Array.isArray(value)) return value;
	/* istanbul ignore next - legacy single URL stored as string */
	if (typeof value === "string") return [value];
	return [];
};
var enableSdkErrorListeners = function(client) {
	var scope = getGlobalScope();
	if (!scope || typeof scope.addEventListener !== "function") return;
	var handleError = function(event) {
		var error = event.error instanceof Error ? event.error : void 0;
		var stack = error === null || error === void 0 ? void 0 : error.stack;
		var match = detectSdkOrigin({
			filename: event.filename,
			stack
		});
		if (!match) return;
		capture({
			type: "error",
			message: event.message,
			stack,
			filename: event.filename,
			errorName: error === null || error === void 0 ? void 0 : error.name,
			metadata: {
				colno: event.colno,
				lineno: event.lineno,
				isTrusted: event.isTrusted,
				matchReason: match
			}
		});
	};
	var handleRejection = function(event) {
		var _a;
		var error = event.reason instanceof Error ? event.reason : void 0;
		var stack = error === null || error === void 0 ? void 0 : error.stack;
		var filename = extractFilenameFromStack(stack);
		var match = detectSdkOrigin({
			filename,
			stack
		});
		if (!match) return;
		/* istanbul ignore next */
		capture({
			type: "unhandledrejection",
			message: (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : stringifyReason(event.reason),
			stack,
			filename,
			errorName: error === null || error === void 0 ? void 0 : error.name,
			metadata: {
				isTrusted: event.isTrusted,
				matchReason: match
			}
		});
	};
	var capture = function(context) {
		client.recordEvent(EVENT_NAME_ERROR_UNCAUGHT, __assign$1({
			type: context.type,
			message: context.message,
			filename: context.filename,
			error_name: context.errorName,
			stack: context.stack
		}, context.metadata));
	};
	scope.addEventListener("error", handleError, true);
	scope.addEventListener("unhandledrejection", handleRejection, true);
};
var detectSdkOrigin = function(payload) {
	var e_1, _a;
	var normalizedScriptUrls = getNormalizedScriptUrls();
	if (normalizedScriptUrls.length === 0) return;
	try {
		for (var normalizedScriptUrls_1 = __values$1(normalizedScriptUrls), normalizedScriptUrls_1_1 = normalizedScriptUrls_1.next(); !normalizedScriptUrls_1_1.done; normalizedScriptUrls_1_1 = normalizedScriptUrls_1.next()) {
			var normalizedScriptUrl = normalizedScriptUrls_1_1.value;
			if (payload.filename && payload.filename.includes(normalizedScriptUrl)) return "filename";
			if (payload.stack && payload.stack.includes(normalizedScriptUrl)) return "stack";
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (normalizedScriptUrls_1_1 && !normalizedScriptUrls_1_1.done && (_a = normalizedScriptUrls_1.return)) _a.call(normalizedScriptUrls_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
};
var extractFilenameFromStack = function(stack) {
	if (!stack) return;
	var match = stack.match(/(https?:\/\/\S+?)(?=[)\s]|$)/);
	/* istanbul ignore next */
	return match ? match[1] : void 0;
};
/* istanbul ignore next */
var stringifyReason = function(reason) {
	if (typeof reason === "string") return reason;
	try {
		return JSON.stringify(reason);
	} catch (_a) {
		return "[object Object]";
	}
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/diagnostics/diagnostics-client.js
var SAVE_INTERVAL_MS = 1e3;
var FLUSH_INTERVAL_MS = 300 * 1e3;
var DIAGNOSTICS_US_SERVER_URL = "https://diagnostics.prod.us-west-2.amplitude.com/v1/capture";
var DIAGNOSTICS_EU_SERVER_URL = "https://diagnostics.prod.eu-central-1.amplitude.com/v1/capture";
var DiagnosticsClient = function() {
	function DiagnosticsClient(apiKey, logger, serverZone, options) {
		if (serverZone === void 0) serverZone = "US";
		this.inMemoryTags = {};
		this.inMemoryCounters = {};
		this.inMemoryHistograms = {};
		this.inMemoryEvents = [];
		this.saveTimer = null;
		this.flushTimer = null;
		this.apiKey = apiKey;
		this.logger = logger;
		this.serverUrl = serverZone === "US" ? DIAGNOSTICS_US_SERVER_URL : DIAGNOSTICS_EU_SERVER_URL;
		this.logger.debug("DiagnosticsClient: Initializing with options", JSON.stringify(options, null, 2));
		this.config = __assign$1({
			enabled: true,
			sampleRate: 0
		}, options);
		this.startTimestamp = Date.now();
		this.shouldTrack = isTimestampInSampleTemp(this.startTimestamp, this.config.sampleRate) && this.config.enabled;
		if (DiagnosticsStorage.isSupported()) this.storage = new DiagnosticsStorage(apiKey, logger);
		else this.logger.debug("DiagnosticsClient: IndexedDB is not supported");
		this.initializeFlushInterval();
		if (this.shouldTrack) {
			this.increment("sdk.diagnostics.sampled.in.and.enabled");
			enableSdkErrorListeners(this);
		}
	}
	/**
	* Check if storage is available and tracking is enabled
	*/
	DiagnosticsClient.prototype.isStorageAndTrackEnabled = function() {
		return Boolean(this.storage) && Boolean(this.shouldTrack);
	};
	DiagnosticsClient.prototype.setTag = function(name, value) {
		if (!this.isStorageAndTrackEnabled()) return;
		if (Object.keys(this.inMemoryTags).length >= 1e4) {
			this.logger.debug("DiagnosticsClient: Early return setTags as reaching memory limit");
			return;
		}
		this.inMemoryTags[name] = value;
		this.startTimersIfNeeded();
	};
	DiagnosticsClient.prototype.increment = function(name, size) {
		if (size === void 0) size = 1;
		if (!this.isStorageAndTrackEnabled()) return;
		if (Object.keys(this.inMemoryCounters).length >= 1e4) {
			this.logger.debug("DiagnosticsClient: Early return increment as reaching memory limit");
			return;
		}
		this.inMemoryCounters[name] = (this.inMemoryCounters[name] || 0) + size;
		this.startTimersIfNeeded();
	};
	DiagnosticsClient.prototype.recordHistogram = function(name, value) {
		if (!this.isStorageAndTrackEnabled()) return;
		if (Object.keys(this.inMemoryHistograms).length >= 1e4) {
			this.logger.debug("DiagnosticsClient: Early return recordHistogram as reaching memory limit");
			return;
		}
		var existing = this.inMemoryHistograms[name];
		if (existing) {
			existing.count += 1;
			existing.min = Math.min(existing.min, value);
			existing.max = Math.max(existing.max, value);
			existing.sum += value;
		} else this.inMemoryHistograms[name] = {
			count: 1,
			min: value,
			max: value,
			sum: value
		};
		this.startTimersIfNeeded();
	};
	DiagnosticsClient.prototype.recordEvent = function(name, properties) {
		if (!this.isStorageAndTrackEnabled()) return;
		if (this.inMemoryEvents.length >= 10) {
			this.logger.debug("DiagnosticsClient: Early return recordEvent as reaching memory limit");
			return;
		}
		this.inMemoryEvents.push({
			event_name: name,
			time: Date.now(),
			event_properties: properties
		});
		this.startTimersIfNeeded();
	};
	DiagnosticsClient.prototype.startTimersIfNeeded = function() {
		var _this = this;
		if (!this.saveTimer) this.saveTimer = setTimeout(function() {
			_this.saveAllDataToStorage().catch(function(error) {
				_this.logger.debug("DiagnosticsClient: Failed to save all data to storage", error);
			}).finally(function() {
				_this.saveTimer = null;
			});
		}, SAVE_INTERVAL_MS);
		if (!this.flushTimer) this.flushTimer = setTimeout(function() {
			_this._flush().catch(function(error) {
				_this.logger.debug("DiagnosticsClient: Failed to flush", error);
			}).finally(function() {
				_this.flushTimer = null;
			});
		}, FLUSH_INTERVAL_MS);
	};
	DiagnosticsClient.prototype.saveAllDataToStorage = function() {
		return __awaiter(this, void 0, void 0, function() {
			var tagsToSave, countersToSave, histogramsToSave, eventsToSave;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						if (!this.storage) return [2];
						tagsToSave = __assign$1({}, this.inMemoryTags);
						countersToSave = __assign$1({}, this.inMemoryCounters);
						histogramsToSave = __assign$1({}, this.inMemoryHistograms);
						eventsToSave = __spreadArray([], __read$1(this.inMemoryEvents), false);
						this.inMemoryEvents = [];
						this.inMemoryTags = {};
						this.inMemoryCounters = {};
						this.inMemoryHistograms = {};
						return [4, Promise.all([
							this.storage.setTags(tagsToSave),
							this.storage.incrementCounters(countersToSave),
							this.storage.setHistogramStats(histogramsToSave),
							this.storage.addEventRecords(eventsToSave)
						])];
					case 1:
						_a.sent();
						return [2];
				}
			});
		});
	};
	DiagnosticsClient.prototype._flush = function() {
		return __awaiter(this, void 0, void 0, function() {
			var _a, tagRecords, counterRecords, histogramStatsRecords, eventRecords, tags, counters, histogram, events, payload;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						if (!this.storage) return [2];
						return [4, this.saveAllDataToStorage()];
					case 1:
						_b.sent();
						this.saveTimer = null;
						this.flushTimer = null;
						return [4, this.storage.getAllAndClear()];
					case 2:
						_a = _b.sent(), tagRecords = _a.tags, counterRecords = _a.counters, histogramStatsRecords = _a.histogramStats, eventRecords = _a.events;
						this.storage.setLastFlushTimestamp(Date.now());
						tags = {};
						tagRecords.forEach(function(record) {
							tags[record.key] = record.value;
						});
						counters = {};
						counterRecords.forEach(function(record) {
							counters[record.key] = record.value;
						});
						histogram = {};
						histogramStatsRecords.forEach(function(stats) {
							histogram[stats.key] = {
								count: stats.count,
								min: stats.min,
								max: stats.max,
								avg: Math.round(stats.sum / stats.count * 100) / 100
							};
						});
						events = eventRecords.map(function(record) {
							return {
								event_name: record.event_name,
								time: record.time,
								event_properties: record.event_properties
							};
						});
						if (Object.keys(counters).length === 0 && Object.keys(histogram).length === 0 && events.length === 0) return [2];
						payload = {
							tags,
							histogram,
							counters,
							events
						};
						this.fetch(payload);
						return [2];
				}
			});
		});
	};
	/**
	* Send diagnostics data to the server
	*/
	DiagnosticsClient.prototype.fetch = function(payload) {
		return __awaiter(this, void 0, void 0, function() {
			var response, error_1;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						_a.trys.push([
							0,
							2,
							,
							3
						]);
						if (!getGlobalScope()) throw new Error("DiagnosticsClient: Fetch is not supported");
						return [4, fetch(this.serverUrl, {
							method: "POST",
							headers: {
								"X-ApiKey": this.apiKey,
								"Content-Type": "application/json"
							},
							body: JSON.stringify(payload)
						})];
					case 1:
						response = _a.sent();
						if (!response.ok) {
							this.logger.debug("DiagnosticsClient: Failed to send diagnostics data.");
							return [2];
						}
						this.logger.debug("DiagnosticsClient: Successfully sent diagnostics data");
						return [3, 3];
					case 2:
						error_1 = _a.sent();
						this.logger.debug("DiagnosticsClient: Failed to send diagnostics data. ", error_1);
						return [3, 3];
					case 3: return [2];
				}
			});
		});
	};
	/**
	* Initialize flush interval logic.
	* Check if 5 minutes has passed since last flush, if so flush immediately.
	* Otherwise set a timer to flush when the interval is reached.
	*/
	DiagnosticsClient.prototype.initializeFlushInterval = function() {
		return __awaiter(this, void 0, void 0, function() {
			var now, lastFlushTimestamp, timeSinceLastFlush;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						if (!this.storage) return [2];
						now = Date.now();
						return [4, this.storage.getLastFlushTimestamp()];
					case 1:
						lastFlushTimestamp = _a.sent() || -1;
						if (lastFlushTimestamp === -1) {
							this.storage.setLastFlushTimestamp(now);
							this._setFlushTimer(FLUSH_INTERVAL_MS);
							return [2];
						}
						timeSinceLastFlush = now - lastFlushTimestamp;
						if (timeSinceLastFlush >= 3e5) {
							this._flush();
							return [2];
						} else this._setFlushTimer(FLUSH_INTERVAL_MS - timeSinceLastFlush);
						return [2];
				}
			});
		});
	};
	/**
	* Helper method to set flush timer with consistent error handling
	*/
	DiagnosticsClient.prototype._setFlushTimer = function(delay) {
		var _this = this;
		this.flushTimer = setTimeout(function() {
			_this._flush().catch(function(error) {
				_this.logger.debug("DiagnosticsClient: Failed to flush", error);
			}).finally(function() {
				_this.flushTimer = null;
			});
		}, delay);
	};
	DiagnosticsClient.prototype._setSampleRate = function(sampleRate) {
		this.logger.debug("DiagnosticsClient: Setting sample rate to", sampleRate);
		this.config.sampleRate = sampleRate;
		this.shouldTrack = isTimestampInSampleTemp(this.startTimestamp, this.config.sampleRate) && this.config.enabled;
		this.logger.debug("DiagnosticsClient: Should track is", this.shouldTrack);
	};
	return DiagnosticsClient;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/transports/base.js
var BaseTransport = function() {
	function BaseTransport() {}
	BaseTransport.prototype.send = function(_serverUrl, _payload, _enableRequestBodyCompression) {
		return Promise.resolve(null);
	};
	BaseTransport.prototype.buildResponse = function(responseJSON) {
		var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
		if (typeof responseJSON !== "object") return null;
		var statusCode = responseJSON.code || 0;
		var status = this.buildStatus(statusCode);
		switch (status) {
			case Status.Success: return {
				status,
				statusCode,
				body: {
					eventsIngested: (_a = responseJSON.events_ingested) !== null && _a !== void 0 ? _a : 0,
					payloadSizeBytes: (_b = responseJSON.payload_size_bytes) !== null && _b !== void 0 ? _b : 0,
					serverUploadTime: (_c = responseJSON.server_upload_time) !== null && _c !== void 0 ? _c : 0
				}
			};
			case Status.Invalid: return {
				status,
				statusCode,
				body: {
					error: (_d = responseJSON.error) !== null && _d !== void 0 ? _d : "",
					missingField: (_e = responseJSON.missing_field) !== null && _e !== void 0 ? _e : "",
					eventsWithInvalidFields: (_f = responseJSON.events_with_invalid_fields) !== null && _f !== void 0 ? _f : {},
					eventsWithMissingFields: (_g = responseJSON.events_with_missing_fields) !== null && _g !== void 0 ? _g : {},
					eventsWithInvalidIdLengths: (_h = responseJSON.events_with_invalid_id_lengths) !== null && _h !== void 0 ? _h : {},
					epsThreshold: (_j = responseJSON.eps_threshold) !== null && _j !== void 0 ? _j : 0,
					exceededDailyQuotaDevices: (_k = responseJSON.exceeded_daily_quota_devices) !== null && _k !== void 0 ? _k : {},
					silencedDevices: (_l = responseJSON.silenced_devices) !== null && _l !== void 0 ? _l : [],
					silencedEvents: (_m = responseJSON.silenced_events) !== null && _m !== void 0 ? _m : [],
					throttledDevices: (_o = responseJSON.throttled_devices) !== null && _o !== void 0 ? _o : {},
					throttledEvents: (_p = responseJSON.throttled_events) !== null && _p !== void 0 ? _p : []
				}
			};
			case Status.PayloadTooLarge: return {
				status,
				statusCode,
				body: { error: (_q = responseJSON.error) !== null && _q !== void 0 ? _q : "" }
			};
			case Status.RateLimit: return {
				status,
				statusCode,
				body: {
					error: (_r = responseJSON.error) !== null && _r !== void 0 ? _r : "",
					epsThreshold: (_s = responseJSON.eps_threshold) !== null && _s !== void 0 ? _s : 0,
					throttledDevices: (_t = responseJSON.throttled_devices) !== null && _t !== void 0 ? _t : {},
					throttledUsers: (_u = responseJSON.throttled_users) !== null && _u !== void 0 ? _u : {},
					exceededDailyQuotaDevices: (_v = responseJSON.exceeded_daily_quota_devices) !== null && _v !== void 0 ? _v : {},
					exceededDailyQuotaUsers: (_w = responseJSON.exceeded_daily_quota_users) !== null && _w !== void 0 ? _w : {},
					throttledEvents: (_x = responseJSON.throttled_events) !== null && _x !== void 0 ? _x : []
				}
			};
			case Status.Timeout:
			default: return {
				status,
				statusCode
			};
		}
	};
	BaseTransport.prototype.buildStatus = function(code) {
		if (isSuccessStatusCode(code)) return Status.Success;
		if (code === 429) return Status.RateLimit;
		if (code === 413) return Status.PayloadTooLarge;
		if (code === 408) return Status.Timeout;
		if (code >= 400 && code < 500) return Status.Invalid;
		if (code >= 500) return Status.Failed;
		return Status.Unknown;
	};
	return BaseTransport;
}();
/**
* Returns true if CompressionStream is available (e.g. in supported browsers).
*/
function isCompressionStreamAvailable() {
	return typeof CompressionStream !== "undefined";
}
/**
* Compress a string to gzip and return the result as an ArrayBuffer.
* Best-effort: returns undefined if CompressionStream is unavailable or compression fails.
* Payload is small so buffering is fine. Used by Fetch and XHR transports.
*/
function compressToGzipArrayBuffer(data) {
	return __awaiter(this, void 0, void 0, function() {
		var CompressionStreamImpl, stream;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					CompressionStreamImpl = CompressionStream;
					if (typeof CompressionStreamImpl === "undefined") return [2, void 0];
					_b.label = 1;
				case 1:
					_b.trys.push([
						1,
						3,
						,
						4
					]);
					stream = new Blob([data]).stream().pipeThrough(new CompressionStreamImpl("gzip"));
					return [4, new Response(stream).arrayBuffer()];
				case 2: return [2, _b.sent()];
				case 3:
					_b.sent();
					return [2, void 0];
				case 4: return [2];
			}
		});
	});
}
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/remote-config/remote-config-localstorage.js
var RemoteConfigLocalStorage = function() {
	function RemoteConfigLocalStorage(apiKey, logger) {
		this.key = "AMP_remote_config_".concat(apiKey.substring(0, 10));
		this.logger = logger;
	}
	RemoteConfigLocalStorage.prototype.fetchConfig = function() {
		var result = null;
		var failedRemoteConfigInfo = {
			remoteConfig: null,
			lastFetch: /* @__PURE__ */ new Date()
		};
		try {
			result = localStorage.getItem(this.key);
		} catch (error) {
			this.logger.debug("Remote config localstorage failed to access: ", error);
			return Promise.resolve(failedRemoteConfigInfo);
		}
		if (result === null) {
			this.logger.debug("Remote config localstorage gets null because the key does not exist");
			return Promise.resolve(failedRemoteConfigInfo);
		}
		try {
			var remoteConfigInfo = JSON.parse(result);
			this.logger.debug("Remote config localstorage parsed successfully: ".concat(JSON.stringify(remoteConfigInfo)));
			return Promise.resolve({
				remoteConfig: remoteConfigInfo.remoteConfig,
				lastFetch: new Date(remoteConfigInfo.lastFetch)
			});
		} catch (error) {
			this.logger.debug("Remote config localstorage failed to parse: ", error);
			localStorage.removeItem(this.key);
			return Promise.resolve(failedRemoteConfigInfo);
		}
	};
	RemoteConfigLocalStorage.prototype.setConfig = function(config) {
		try {
			localStorage.setItem(this.key, JSON.stringify(config));
			this.logger.debug("Remote config localstorage set successfully.");
			return Promise.resolve(true);
		} catch (error) {
			this.logger.debug("Remote config localstorage failed to set: ", error);
		}
		return Promise.resolve(false);
	};
	return RemoteConfigLocalStorage;
}();
var CODE_STATUS = {
	INVALID_API_KEY: 401,
	FORBIDDEN: 403,
	RATE_LIMIT: 429
};
/**
* The default timeout for fetch in milliseconds.
* Linear backoff policy: timeout / retry times is the interval between fetch retry.
*/
var DEFAULT_TIMEOUT = 1e3;
/**
* The minimum time between fetches in milliseconds.
* This prevents too many requests from being sent in a short period of time.
*/
var DEFAULT_MIN_TIME_BETWEEN_FETCHES = 300 * 1e3;
var RemoteConfigClient = function() {
	function RemoteConfigClient(apiKey, logger, serverZone, serverUrl) {
		if (serverZone === void 0) serverZone = "US";
		this.callbackInfos = [];
		this.lastSuccessfulFetch = null;
		this.fetchPromise = null;
		this.isLastFetchInvalidApiKey = false;
		this.apiKey = apiKey;
		this.serverUrl = serverUrl || (serverZone === "US" ? "https://sr-client-cfg.amplitude.com/config" : "https://sr-client-cfg.eu.amplitude.com/config");
		this.logger = logger;
		this.storage = new RemoteConfigLocalStorage(apiKey, logger);
	}
	RemoteConfigClient.prototype.subscribe = function(key, deliveryMode, callback) {
		var id = UUID();
		var callbackInfo = {
			id,
			key,
			deliveryMode,
			callback
		};
		this.callbackInfos.push(callbackInfo);
		if (deliveryMode === "all") this.subscribeAll(callbackInfo);
		else this.subscribeWaitForRemote(callbackInfo, deliveryMode.timeout);
		return id;
	};
	RemoteConfigClient.prototype.unsubscribe = function(id) {
		var index = this.callbackInfos.findIndex(function(callbackInfo) {
			return callbackInfo.id === id;
		});
		if (index === -1) {
			this.logger.debug("Remote config client unsubscribe failed because callback with id ".concat(id, " doesn't exist."));
			return false;
		}
		this.callbackInfos.splice(index, 1);
		this.logger.debug("Remote config client unsubscribe succeeded removing callback with id ".concat(id, "."));
		return true;
	};
	RemoteConfigClient.prototype.updateConfigs = function() {
		return __awaiter(this, void 0, void 0, function() {
			var timeSinceLastFetch, result;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						if (this.lastSuccessfulFetch) {
							timeSinceLastFetch = Date.now() - this.lastSuccessfulFetch;
							if (timeSinceLastFetch < DEFAULT_MIN_TIME_BETWEEN_FETCHES) {
								this.logger.debug("Remote config client skipping updateConfigs: Too recent");
								return [2];
							}
						}
						return [4, this.getOrCreateFetchPromise()];
					case 1:
						result = _a.sent();
						this.storage.setConfig(result);
						this.callbackInfos.forEach(function(callbackInfo) {
							_this.sendCallback(callbackInfo, result, "remote");
						});
						return [2];
				}
			});
		});
	};
	/**
	* Get the in-flight fetch promise or create a new one.
	* This ensures multiple subscribe calls share the same network request.
	*/
	RemoteConfigClient.prototype.getOrCreateFetchPromise = function() {
		var _this = this;
		if (this.fetchPromise) return this.fetchPromise;
		if (this.isLastFetchInvalidApiKey) {
			this.logger.debug("Remote config client skipping fetch: Invalid API key");
			this.fetchPromise = Promise.resolve({
				remoteConfig: null,
				lastFetch: /* @__PURE__ */ new Date()
			}).finally(function() {
				_this.fetchPromise = null;
			});
			return this.fetchPromise;
		}
		this.fetchPromise = this.fetch().then(function(result) {
			if (result.remoteConfig !== null) _this.lastSuccessfulFetch = Date.now();
			return result;
		}).finally(function() {
			_this.fetchPromise = null;
		});
		return this.fetchPromise;
	};
	/**
	* Send remote first. If it's already complete, we can skip the cached response.
	* - if remote is fetched first, no cache fetch.
	* - if cache is fetched first, still fetching remote.
	*/
	RemoteConfigClient.prototype.subscribeAll = function(callbackInfo) {
		return __awaiter(this, void 0, void 0, function() {
			var remotePromise, cachePromise, result;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						remotePromise = this.getOrCreateFetchPromise().then(function(result) {
							_this.logger.debug("Remote config client subscription all mode fetched from remote: ".concat(JSON.stringify(result)));
							_this.sendCallback(callbackInfo, result, "remote");
							_this.storage.setConfig(result);
						});
						cachePromise = this.storage.fetchConfig().then(function(result) {
							return result;
						});
						return [4, Promise.race([remotePromise, cachePromise])];
					case 1:
						result = _a.sent();
						if (result !== void 0) {
							this.logger.debug("Remote config client subscription all mode fetched from cache: ".concat(JSON.stringify(result)));
							if (result.remoteConfig !== null) this.sendCallback(callbackInfo, result, "cache");
							else this.logger.debug("Remote config client skips sending callback because cache is empty (first time user).");
						}
						return [4, remotePromise];
					case 2:
						_a.sent();
						return [2];
				}
			});
		});
	};
	/**
	* Waits for a remote response until the given timeout, then return a cached copy, if available.
	*/
	RemoteConfigClient.prototype.subscribeWaitForRemote = function(callbackInfo, timeout) {
		return __awaiter(this, void 0, void 0, function() {
			var timeoutPromise, result, result;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						timeoutPromise = new Promise(function(_, reject) {
							setTimeout(function() {
								reject("Timeout exceeded");
							}, timeout);
						});
						_a.label = 1;
					case 1:
						_a.trys.push([
							1,
							3,
							,
							5
						]);
						return [4, Promise.race([this.getOrCreateFetchPromise(), timeoutPromise])];
					case 2:
						result = _a.sent();
						this.logger.debug("Remote config client subscription wait for remote mode returns from remote.");
						this.sendCallback(callbackInfo, result, "remote");
						this.storage.setConfig(result);
						return [3, 5];
					case 3:
						_a.sent();
						this.logger.debug("Remote config client subscription wait for remote mode exceeded timeout. Try to fetch from cache.");
						return [4, this.storage.fetchConfig()];
					case 4:
						result = _a.sent();
						if (result.remoteConfig !== null) {
							this.logger.debug("Remote config client subscription wait for remote mode returns a cached copy.");
							this.sendCallback(callbackInfo, result, "cache");
						} else {
							this.logger.debug("Remote config client subscription wait for remote mode failed to fetch cache.");
							this.sendCallback(callbackInfo, result, "remote");
						}
						return [3, 5];
					case 5: return [2];
				}
			});
		});
	};
	/**
	* Call the callback with filtered remote config based on key.
	* @param remoteConfigInfo - the whole remote config object without filtering by key.
	*/
	RemoteConfigClient.prototype.sendCallback = function(callbackInfo, remoteConfigInfo, source) {
		callbackInfo.lastCallback = /* @__PURE__ */ new Date();
		var filteredConfig;
		if (callbackInfo.key) filteredConfig = callbackInfo.key.split(".").reduce(function(config, key) {
			if (config === null) return config;
			return key in config ? config[key] : null;
		}, remoteConfigInfo.remoteConfig);
		else filteredConfig = remoteConfigInfo.remoteConfig;
		callbackInfo.callback(filteredConfig, source, remoteConfigInfo.lastFetch);
	};
	/**
	* Fetch remote config from remote.
	* @param retries - the number of retries. default is 3.
	* @param timeout - the timeout in milliseconds. Default is 1000.
	* This timeout serves two purposes:
	* 1. It determines how long to wait for each remote config fetch request before aborting it.
	*    If the fetch does not complete within the specified timeout, the request is cancelled using AbortController,
	*    and the attempt is considered failed (and may be retried if retries remain).
	* 2. It is also used to calculate the interval between retries. The total timeout is divided by the number of retries,
	*    so each retry waits for (timeout / retries) milliseconds before the next attempt (linear backoff).
	* Retry behavior by status code:
	* - 401: invalid API key (stop retries and disable future updateConfigs calls).
	* - 429: retry up to max retries.
	* - other 4xx: no retry.
	* - 5xx and network failures: retry up to max retries.
	* @returns the remote config info. null if failed to fetch or the response is not valid JSON.
	*/
	RemoteConfigClient.prototype.fetch = function(retries, timeout) {
		if (retries === void 0) retries = 3;
		if (timeout === void 0) timeout = DEFAULT_TIMEOUT;
		return __awaiter(this, void 0, void 0, function() {
			var interval, failedRemoteConfigInfo, _loop_1, this_1, attempt, state_1;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						interval = timeout / retries;
						failedRemoteConfigInfo = {
							remoteConfig: null,
							lastFetch: /* @__PURE__ */ new Date()
						};
						_loop_1 = function(attempt) {
							var shouldRetry, abortController, timeoutId, res, body, remoteConfig, error_2;
							return __generator(this, function(_b) {
								switch (_b.label) {
									case 0:
										shouldRetry = true;
										abortController = new AbortController();
										timeoutId = setTimeout(function() {
											return abortController.abort();
										}, timeout);
										_b.label = 1;
									case 1:
										_b.trys.push([
											1,
											7,
											8,
											9
										]);
										return [4, fetch(this_1.getUrlParams(), {
											method: "GET",
											headers: { Accept: "*/*" },
											signal: abortController.signal
										})];
									case 2:
										res = _b.sent();
										if (!!res.ok) return [3, 4];
										return [4, res.text()];
									case 3:
										body = _b.sent();
										this_1.logger.debug("Remote config client fetch with retry time ".concat(retries, " failed with ").concat(res.status, ": ").concat(body));
										if (res.status === CODE_STATUS.INVALID_API_KEY || res.status === CODE_STATUS.FORBIDDEN) {
											this_1.logger.error("Remote config client fetch failed with ".concat(res.status, ". Invalid API key; future fetches will be skipped."));
											this_1.isLastFetchInvalidApiKey = true;
											shouldRetry = false;
										} else if (res.status >= 400 && res.status < 500 && res.status !== CODE_STATUS.RATE_LIMIT) shouldRetry = false;
										return [3, 6];
									case 4: return [4, res.json()];
									case 5:
										remoteConfig = _b.sent();
										return [2, { value: {
											remoteConfig,
											lastFetch: /* @__PURE__ */ new Date()
										} }];
									case 6: return [3, 9];
									case 7:
										error_2 = _b.sent();
										if (error_2 instanceof Error && error_2.name === "AbortError") this_1.logger.debug("Remote config client fetch with retry time ".concat(retries, " timed out after ").concat(timeout, "ms"));
										else this_1.logger.debug("Remote config client fetch with retry time ".concat(retries, " is rejected because: "), error_2);
										return [3, 9];
									case 8:
										clearTimeout(timeoutId);
										return [7];
									case 9:
										if (!shouldRetry) return [2, "break"];
										if (!(attempt < retries - 1)) return [3, 11];
										return [4, new Promise(function(resolve) {
											return setTimeout(resolve, _this.getJitterDelay(interval));
										})];
									case 10:
										_b.sent();
										_b.label = 11;
									case 11: return [2];
								}
							});
						};
						this_1 = this;
						attempt = 0;
						_a.label = 1;
					case 1:
						if (!(attempt < retries)) return [3, 4];
						return [5, _loop_1(attempt)];
					case 2:
						state_1 = _a.sent();
						if (typeof state_1 === "object") return [2, state_1.value];
						if (state_1 === "break") return [3, 4];
						_a.label = 3;
					case 3:
						attempt++;
						return [3, 1];
					case 4: return [2, failedRemoteConfigInfo];
				}
			});
		});
	};
	/**
	* Return jitter in the bound of [0,baseDelay) and then floor round.
	*/
	RemoteConfigClient.prototype.getJitterDelay = function(baseDelay) {
		return Math.floor(Math.random() * baseDelay);
	};
	RemoteConfigClient.prototype.getUrlParams = function() {
		var encodedApiKey = encodeURIComponent(this.apiKey);
		var urlParams = new URLSearchParams();
		urlParams.append("config_group", RemoteConfigClient.CONFIG_GROUP);
		return "".concat(this.serverUrl, "/").concat(encodedApiKey, "?").concat(urlParams.toString());
	};
	RemoteConfigClient.CONFIG_GROUP = "browser";
	return RemoteConfigClient;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/observers/console.js
var globalScope$1 = getGlobalScope();
/* istanbul ignore next */
var originalConsole = globalScope$1 === null || globalScope$1 === void 0 ? void 0 : globalScope$1.console;
var handlers = {};
var originalFn = {};
var inConsoleOverride = false;
function overrideConsole(logLevel) {
	/* istanbul ignore if */
	if (!originalConsole) return false;
	if (typeof originalConsole[logLevel] !== "function") return false;
	if (originalFn[logLevel]) return true;
	var handler = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		try {
			if (handlers[logLevel] && !inConsoleOverride) {
				inConsoleOverride = true;
				var callbacks = handlers[logLevel];
				if (callbacks) callbacks.forEach(function(callback) {
					try {
						callback(logLevel, args);
					} catch (_a) {}
				});
			}
		} catch (_a) {}
		inConsoleOverride = false;
		return originalFn[logLevel].apply(originalConsole, args);
	};
	originalFn[logLevel] = originalConsole[logLevel];
	originalConsole[logLevel] = handler;
	return true;
}
/**
* Observe a console log method (log, warn, error, etc.)
* @param level - The console log level to observe
* @param callback - The callback function to call when the console log level is observed
*/
function addListener(level, callback) {
	/* istanbul ignore if */
	if (!overrideConsole(level)) return /* @__PURE__ */ new Error("Console override failed");
	if (handlers[level]) handlers[level].push(callback);
	else handlers[level] = [callback];
}
/**
* Disconnect a callback function from a console log method
* @param callback - The callback function to disconnect
*/
function removeListener(callback) {
	var e_1, _a;
	try {
		for (var _b = __values$1(Object.values(handlers)), _c = _b.next(); !_c.done; _c = _b.next()) {
			var callbacks = _c.value;
			for (var i = callbacks.length - 1; i >= 0; i--) if (callbacks[i] === callback) {
				callbacks.splice(i, 1);
				break;
			}
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
}
function _restoreConsole() {
	var e_2, _a;
	try {
		for (var _b = __values$1(Object.entries(originalFn)), _c = _b.next(); !_c.done; _c = _b.next()) {
			var _d = __read$1(_c.value, 2), key = _d[0], originalHandler = _d[1];
			if (originalHandler) originalConsole[key] = originalHandler;
		}
	} catch (e_2_1) {
		e_2 = { error: e_2_1 };
	} finally {
		try {
			if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
		} finally {
			if (e_2) throw e_2.error;
		}
	}
	originalFn = {};
	handlers = {};
}
var consoleObserver = {
	addListener,
	removeListener,
	_restoreConsole
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/types/element-interactions.js
/**
* Default CSS selectors to define which elements on the page to track.
* Extend this list to include additional elements to track. For example:
* ```
* autocapturePlugin({
*    cssSelectorAllowlist: [...DEFAULT_CSS_SELECTOR_ALLOWLIST, ".my-class"],
* })
* ```
*/
var DEFAULT_CSS_SELECTOR_ALLOWLIST = [
	"a",
	"button",
	"input",
	"select",
	"textarea",
	"label",
	"video",
	"audio",
	"[contenteditable=\"true\" i]",
	"[data-amp-default-track]",
	".amp-default-track"
];
/**
* Default prefix to allow the plugin to capture data attributes as an event property.
*/
var DEFAULT_DATA_ATTRIBUTE_PREFIX = "data-amp-track-";
/**
* Default list of elements on the page should be tracked when the page changes.
*/
var DEFAULT_ACTION_CLICK_ALLOWLIST = [
	"div",
	"span",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
];
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/types/frustration-interactions.js
var DEFAULT_ERROR_AND_DEAD_CLICK_ALLOWLIST = __spreadArray([
	"input[type=\"button\"]",
	"input[type=\"submit\"]",
	"input[type=\"reset\"]",
	"input[type=\"image\"]",
	"input[type=\"file\"]"
], __read$1([
	"a",
	"button",
	"[role=\"button\"]",
	"[role=\"link\"]",
	"[role=\"menuitem\"]",
	"[role=\"menuitemcheckbox\"]",
	"[role=\"menuitemradio\"]",
	"[role=\"option\"]",
	"[role=\"tab\"]",
	"[role=\"treeitem\"]",
	"[contenteditable=\"true\" i]"
]), false);
/**
* Default CSS selectors for dead clicks tracking
*/
var DEFAULT_DEAD_CLICK_ALLOWLIST = DEFAULT_ERROR_AND_DEAD_CLICK_ALLOWLIST;
/**
* Default CSS selectors for error tracking
*/
var DEFAULT_ERROR_CLICK_ALLOWLIST = DEFAULT_ERROR_AND_DEAD_CLICK_ALLOWLIST;
/**
* Default CSS selectors for rage clicks tracking
*/
var DEFAULT_RAGE_CLICK_ALLOWLIST = ["*"];
/**
* Default time window for rage clicks (1 second)
*/
var DEFAULT_RAGE_CLICK_WINDOW_MS = 1e3;
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/json-query.js
function isJsonPrimitive(json) {
	return typeof json === "string" || typeof json === "number" || typeof json === "boolean" || json === null || json === void 0;
}
/**
* Prune a JSON object to only include the keys in the allowlist and excludes the keys
* in the exclude list.
*
* This function is a mutative function that will modify the original JSON object.
* This is done to avoid creating a new JSON object and copying the data.
*
* @param json - The JSON object to prune.
* @param allowlist - The keys to include in the pruned JSON object.
* @param excludelist - The keys to exclude from the pruned JSON object.
*/
function pruneJson(json, allowlist, excludelist) {
	if (!json) return;
	_pruneJson({
		json,
		allowlist: allowlist.map(tokenizeJsonPath),
		excludelist: excludelist.map(tokenizeJsonPath),
		ancestors: []
	});
}
function _pruneJson(_a) {
	var e_1, _b;
	var json = _a.json, targetObject = _a.targetObject, allowlist = _a.allowlist, excludelist = _a.excludelist, ancestors = _a.ancestors, parentObject = _a.parentObject, targetKey = _a.targetKey;
	if (!targetObject) targetObject = json;
	var keys = Object.keys(targetObject);
	try {
		for (var keys_1 = __values$1(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
			var key = keys_1_1.value;
			var path = __spreadArray(__spreadArray([], __read$1(ancestors), false), [key], false);
			if (isJsonPrimitive(targetObject[key])) {
				if (!hasPathMatchInList(path, allowlist) || hasPathMatchInList(path, excludelist)) delete targetObject[key];
			} else _pruneJson({
				json,
				targetObject: targetObject[key],
				allowlist,
				excludelist,
				ancestors: path,
				parentObject: targetObject,
				targetKey: key
			});
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (keys_1_1 && !keys_1_1.done && (_b = keys_1.return)) _b.call(keys_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	if (Object.keys(targetObject).length === 0 && parentObject && targetKey) delete parentObject[targetKey];
}
/**
* Tokenize a JSON path string into an array of strings.
* Escapes ~0 and ~1 to ~ and / respectively.
*
* e.g.) turns string "a/b/c" into ["a", "b", "c"]
*
* @param path - The JSON path to tokenize.
* @returns The tokenized JSON path.
*/
function tokenizeJsonPath(path) {
	if (path.startsWith("/")) path = path.slice(1);
	return path.split("/").map(function(token) {
		return token.replace(/~0/g, "~").replace(/~1/g, "/");
	});
}
/**
* Check if a JSON path matches a path matcher.
*
* Rules:
* 1. If a key in a path and a matcher are the same, then they match, move to the next
* 2. If the matcher is a *, then it matches the key, move to the next
* 3. If the matcher is a **, then it matches >=0 keys
*
* @param path - The path to check.
* @param pathMatcher - The path matcher to check against.
* @param i - The current index of the path.
* @param j - The current index of the path matcher.
* @returns True if the path matches the path matcher, false otherwise.
*/
function isPathMatch(path, pathMatcher, i, j) {
	if (i === void 0) i = 0;
	if (j === void 0) j = 0;
	if (j === pathMatcher.length) return i === path.length;
	if (i === path.length) {
		while (j < pathMatcher.length && pathMatcher[j] === "**") j++;
		return j === pathMatcher.length;
	}
	var currentMatcher = pathMatcher[j];
	if (currentMatcher === "**") {
		if (j + 1 === pathMatcher.length) return true;
		for (var k = i; k <= path.length; k++) if (isPathMatch(path, pathMatcher, k, j + 1)) return true;
		return false;
	} else if (currentMatcher === "*" || currentMatcher === path[i]) return isPathMatch(path, pathMatcher, i + 1, j + 1);
	else return false;
}
/**
* Check if a JSON path matches any of the path matchers in the allow or exclude list.
*
* @param path - The JSON path to check.
* @param allowOrExcludeList - The allow or exclude list to check against.
* @returns True if the path matches any of the path matchers in the allow or exclude list, false otherwise.
*/
function hasPathMatchInList(path, allowOrExcludeList) {
	return allowOrExcludeList.some(function(l) {
		return isPathMatch(path, l);
	});
}
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/network-request-event.js
var TEXT_READ_TIMEOUT = 500;
/**
* This class encapsulates the RequestInit (https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)
* object so that the consumer can only get access to the headers, method and body size.
*
* This is to prevent consumers from directly accessing the Request object
* and mutating it or running costly operations on it.
*
* IMPORTANT:
*    * Do not make changes to this class without careful consideration
*      of performance implications, memory usage and potential to mutate the customer's
*      request.
*   * NEVER .clone() the RequestInit object. This will 2x's the memory overhead of the request
*   * NEVER: call .arrayBuffer(), text(), json() or any other method on the body that
*     consumes the body's stream. This will cause the response to be consumed
*     meaning the body will be empty when the customer tries to access it.
*     (ie: if the body is an instanceof https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
*      never call any of the methods on it)
*/
var RequestWrapperFetch = function() {
	function RequestWrapperFetch(request) {
		this.request = request;
	}
	RequestWrapperFetch.prototype.headers = function(allow) {
		var e_1, _a;
		if (allow === void 0) allow = [];
		var headersUnsafe = this.request.headers;
		var headersSafeCopy = {};
		if (Array.isArray(headersUnsafe)) headersUnsafe.forEach(function(_a) {
			var _b = __read$1(_a, 2), headerName = _b[0];
			headersSafeCopy[headerName] = _b[1];
		});
		else if (headersUnsafe instanceof Headers) headersUnsafe.forEach(function(value, key) {
			headersSafeCopy[key] = value;
		});
		else if (typeof headersUnsafe === "object" && headersUnsafe !== null) try {
			for (var _b = __values$1(Object.entries(headersUnsafe)), _c = _b.next(); !_c.done; _c = _b.next()) {
				var _d = __read$1(_c.value, 2), key = _d[0];
				headersSafeCopy[key] = _d[1];
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		return pruneHeaders(headersSafeCopy, { allow });
	};
	Object.defineProperty(RequestWrapperFetch.prototype, "bodySize", {
		get: function() {
			if (typeof this._bodySize === "number") return this._bodySize;
			var global = getGlobalScope();
			/* istanbul ignore if */
			if (!(global === null || global === void 0 ? void 0 : global.TextEncoder)) return;
			var body = this.request.body;
			this._bodySize = getBodySize(body, 100);
			return this._bodySize;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(RequestWrapperFetch.prototype, "method", {
		get: function() {
			return this.request.method;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(RequestWrapperFetch.prototype, "body", {
		get: function() {
			if (typeof this.request.body === "string") return this.request.body;
			return null;
		},
		enumerable: false,
		configurable: true
	});
	RequestWrapperFetch.prototype.json = function(allow, exclude) {
		if (allow === void 0) allow = [];
		if (exclude === void 0) exclude = [];
		return __awaiter(this, void 0, void 0, function() {
			var text;
			return __generator(this, function(_a) {
				if (allow.length === 0) return [2, null];
				text = this.body;
				return [2, safeParseAndPruneBody(text, allow, exclude)];
			});
		});
	};
	return RequestWrapperFetch;
}();
var RequestWrapperXhr = function() {
	function RequestWrapperXhr(bodyRaw, requestHeaders) {
		this.bodyRaw = bodyRaw;
		this.requestHeaders = requestHeaders;
	}
	RequestWrapperXhr.prototype.headers = function(allow) {
		if (allow === void 0) allow = [];
		return pruneHeaders(this.requestHeaders, { allow });
	};
	Object.defineProperty(RequestWrapperXhr.prototype, "bodySize", {
		get: function() {
			return getBodySize(this.bodyRaw, 100);
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(RequestWrapperXhr.prototype, "body", {
		get: function() {
			if (typeof this.bodyRaw === "string") return this.bodyRaw;
			return null;
		},
		enumerable: false,
		configurable: true
	});
	RequestWrapperXhr.prototype.json = function(allow, exclude) {
		if (allow === void 0) allow = [];
		if (exclude === void 0) exclude = [];
		return __awaiter(this, void 0, void 0, function() {
			var text;
			return __generator(this, function(_a) {
				if (allow.length === 0) return [2, null];
				text = this.body;
				return [2, safeParseAndPruneBody(text, allow, exclude)];
			});
		});
	};
	return RequestWrapperXhr;
}();
function getBodySize(bodyUnsafe, maxEntries) {
	var e_2, _a;
	var bodySize;
	var global = getGlobalScope();
	/* istanbul ignore next */
	var TextEncoder = global === null || global === void 0 ? void 0 : global.TextEncoder;
	/* istanbul ignore next */
	if (!TextEncoder) return;
	var bodySafe;
	if (typeof bodyUnsafe === "string") {
		bodySafe = bodyUnsafe;
		bodySize = new TextEncoder().encode(bodySafe).length;
	} else if (bodyUnsafe instanceof Blob) {
		bodySafe = bodyUnsafe;
		bodySize = bodySafe.size;
	} else if (bodyUnsafe instanceof URLSearchParams) {
		bodySafe = bodyUnsafe;
		bodySize = new TextEncoder().encode(bodySafe.toString()).length;
	} else if (ArrayBuffer.isView(bodyUnsafe)) {
		bodySafe = bodyUnsafe;
		bodySize = bodySafe.byteLength;
	} else if (bodyUnsafe instanceof ArrayBuffer) {
		bodySafe = bodyUnsafe;
		bodySize = bodySafe.byteLength;
	} else if (bodyUnsafe instanceof FormData) {
		var formData = bodyUnsafe;
		var total = 0;
		var count = 0;
		try {
			for (var _b = __values$1(formData.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
				var _d = __read$1(_c.value, 2), key = _d[0], value = _d[1];
				total += key.length;
				if (typeof value === "string") total += new TextEncoder().encode(value).length;
				else if (value instanceof Blob) total += value.size;
				else return;
				if (++count >= maxEntries) return;
			}
		} catch (e_2_1) {
			e_2 = { error: e_2_1 };
		} finally {
			try {
				if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
			} finally {
				if (e_2) throw e_2.error;
			}
		}
		bodySize = total;
	} else if (bodyUnsafe instanceof ReadableStream) {
		bodySafe = bodyUnsafe;
		return;
	}
	return bodySize;
}
/**
* This class encapsulates the Fetch API Response object
* (https://developer.mozilla.org/en-US/docs/Web/API/Response) so that the consumer can
* only get access to the headers and body size.
*
* This is to prevent consumers from directly accessing the Response object
* and mutating it or running costly operations on it.
*
* IMPORTANT:
*   * Do not make changes to this class without careful consideration
*     of performance implications, memory usage and potential to mutate the customer's
*     response.
*   * Do not .clone() the Response object unless you need to access the body.
*     Cloning will 2x the memory overhead of the response.
*   * NEVER consume the body's stream. This will cause the response to be consumed
*     meaning the body will be empty when the customer tries to access it.
*     (ie: if the body is an instanceof https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
*      never call any of the methods on it)
*/
var ResponseWrapperFetch = function() {
	function ResponseWrapperFetch(response) {
		this.response = response;
	}
	ResponseWrapperFetch.prototype.headers = function(allow) {
		var _a;
		if (allow === void 0) allow = [];
		if (this.response.headers instanceof Headers) {
			var headersSafe = this.response.headers;
			var headersOut_1 = {};
			/* istanbul ignore next */
			(_a = headersSafe === null || headersSafe === void 0 ? void 0 : headersSafe.forEach) === null || _a === void 0 || _a.call(headersSafe, function(value, key) {
				headersOut_1[key] = value;
			});
			return pruneHeaders(headersOut_1, { allow });
		}
	};
	Object.defineProperty(ResponseWrapperFetch.prototype, "bodySize", {
		get: function() {
			var _a, _b;
			if (this._bodySize !== void 0) return this._bodySize;
			/* istanbul ignore next */
			var contentLength = (_b = (_a = this.response.headers) === null || _a === void 0 ? void 0 : _a.get) === null || _b === void 0 ? void 0 : _b.call(_a, "content-length");
			var bodySize = contentLength ? parseInt(contentLength, 10) : void 0;
			this._bodySize = bodySize;
			return bodySize;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(ResponseWrapperFetch.prototype, "status", {
		get: function() {
			return this.response.status;
		},
		enumerable: false,
		configurable: true
	});
	ResponseWrapperFetch.prototype.text = function() {
		return __awaiter(this, void 0, void 0, function() {
			var textPromise, timer, text;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						if (!this.clonedResponse) this.clonedResponse = this.response.clone();
						_a.label = 1;
					case 1:
						_a.trys.push([
							1,
							3,
							,
							4
						]);
						textPromise = this.clonedResponse.text();
						timer = new Promise(function(resolve) {
							return setTimeout(
								/* istanbul ignore next */
								function() {
									return resolve(null);
								},
								TEXT_READ_TIMEOUT
							);
						});
						return [4, Promise.race([textPromise, timer])];
					case 2:
						text = _a.sent();
						return [2, text];
					case 3:
						_a.sent();
						return [2, null];
					case 4: return [2];
				}
			});
		});
	};
	ResponseWrapperFetch.prototype.json = function(allow, exclude) {
		if (allow === void 0) allow = [];
		if (exclude === void 0) exclude = [];
		return __awaiter(this, void 0, void 0, function() {
			var text;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						if (allow.length === 0) return [2, null];
						return [4, this.text()];
					case 1:
						text = _a.sent();
						return [2, safeParseAndPruneBody(text, allow, exclude)];
				}
			});
		});
	};
	return ResponseWrapperFetch;
}();
var ResponseWrapperXhr = function() {
	function ResponseWrapperXhr(statusCode, headersString, size, getJson) {
		this.statusCode = statusCode;
		this.headersString = headersString;
		this.size = size;
		this.getJson = getJson;
	}
	Object.defineProperty(ResponseWrapperXhr.prototype, "bodySize", {
		get: function() {
			return this.size;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(ResponseWrapperXhr.prototype, "status", {
		get: function() {
			return this.statusCode;
		},
		enumerable: false,
		configurable: true
	});
	ResponseWrapperXhr.prototype.headers = function(allow) {
		var e_3, _a;
		if (allow === void 0) allow = [];
		if (!this.headersString) return {};
		var headers = {};
		var headerLines = this.headersString.split("\r\n");
		try {
			for (var headerLines_1 = __values$1(headerLines), headerLines_1_1 = headerLines_1.next(); !headerLines_1_1.done; headerLines_1_1 = headerLines_1.next()) {
				var line = headerLines_1_1.value;
				var _b = __read$1(line.split(": "), 2), key = _b[0], value = _b[1];
				if (key && value) headers[key] = value;
			}
		} catch (e_3_1) {
			e_3 = { error: e_3_1 };
		} finally {
			try {
				if (headerLines_1_1 && !headerLines_1_1.done && (_a = headerLines_1.return)) _a.call(headerLines_1);
			} finally {
				if (e_3) throw e_3.error;
			}
		}
		return pruneHeaders(headers, { allow });
	};
	ResponseWrapperXhr.prototype.json = function(allow, exclude) {
		if (allow === void 0) allow = [];
		if (exclude === void 0) exclude = [];
		return __awaiter(this, void 0, void 0, function() {
			var jsonBody;
			return __generator(this, function(_a) {
				if (allow.length === 0) return [2, null];
				jsonBody = this.getJson();
				if (jsonBody) {
					pruneJson(jsonBody, allow, exclude);
					return [2, jsonBody];
				}
				return [2, null];
			});
		});
	};
	return ResponseWrapperXhr;
}();
function safeParseAndPruneBody(text, allow, exclude) {
	if (!text) return null;
	try {
		var json = JSON.parse(text);
		pruneJson(json, allow, exclude);
		return json;
	} catch (error) {
		return null;
	}
}
var PRUNE_STRATEGY;
(function(PRUNE_STRATEGY) {
	PRUNE_STRATEGY["REDACT"] = "redact";
	PRUNE_STRATEGY["REMOVE"] = "remove";
})(PRUNE_STRATEGY || (PRUNE_STRATEGY = {}));
var REDACTED_VALUE = "[REDACTED]";
/**
* Prune headers from a headers record object.
* @param headers - The headers to prune.
* @param options - The options to prune the headers.
* @param options.exclude - List of headers to delete from headers
* @param options.include - List of headers to keep in headers, if not provided, all headers are kept by default
* @returns The pruned headers.
*/
var pruneHeaders = function(headers, options) {
	var e_4, _a;
	var _b = options.allow, allow = _b === void 0 ? [] : _b, _c = options.strategy, strategy = _c === void 0 ? PRUNE_STRATEGY.REMOVE : _c;
	var exclude = __spreadArray([], __read$1(FORBIDDEN_HEADERS), false);
	var headersPruned = {};
	var _loop_1 = function(key) {
		var lowerKey = key.toLowerCase();
		if (exclude.find(function(e) {
			return e.toLowerCase() === lowerKey;
		})) {
			if (strategy === PRUNE_STRATEGY.REDACT) headersPruned[key] = REDACTED_VALUE;
		} else if (!allow.find(function(i) {
			return i.toLowerCase() === lowerKey;
		})) {
			if (strategy === PRUNE_STRATEGY.REDACT) headersPruned[key] = REDACTED_VALUE;
		} else headersPruned[key] = headers[key];
	};
	try {
		for (var _d = __values$1(Object.keys(headers)), _e = _d.next(); !_e.done; _e = _d.next()) {
			var key = _e.value;
			_loop_1(key);
		}
	} catch (e_4_1) {
		e_4 = { error: e_4_1 };
	} finally {
		try {
			if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
		} finally {
			if (e_4) throw e_4.error;
		}
	}
	return headersPruned;
};
var NetworkRequestEvent = function() {
	function NetworkRequestEvent(type, method, timestamp, startTime, url, requestWrapper, status, duration, responseWrapper, error, endTime) {
		if (status === void 0) status = 0;
		this.type = type;
		this.method = method;
		this.timestamp = timestamp;
		this.startTime = startTime;
		this.url = url;
		this.requestWrapper = requestWrapper;
		this.status = status;
		this.duration = duration;
		this.responseWrapper = responseWrapper;
		this.error = error;
		this.endTime = endTime;
	}
	NetworkRequestEvent.prototype.toSerializable = function() {
		var _a, _b, _c, _d;
		var serialized = {
			type: this.type,
			method: this.method,
			url: this.url,
			timestamp: this.timestamp,
			status: this.status,
			duration: this.duration,
			error: this.error,
			startTime: this.startTime,
			endTime: this.endTime,
			requestHeaders: (_a = this.requestWrapper) === null || _a === void 0 ? void 0 : _a.headers(__spreadArray([], __read$1(SAFE_HEADERS), false)),
			requestBodySize: (_b = this.requestWrapper) === null || _b === void 0 ? void 0 : _b.bodySize,
			responseHeaders: (_c = this.responseWrapper) === null || _c === void 0 ? void 0 : _c.headers(__spreadArray([], __read$1(SAFE_HEADERS), false)),
			responseBodySize: (_d = this.responseWrapper) === null || _d === void 0 ? void 0 : _d.bodySize
		};
		return Object.fromEntries(Object.entries(serialized).filter(function(_a) {
			var _b = __read$1(_a, 2);
			_b[0];
			return _b[1] !== void 0;
		}));
	};
	return NetworkRequestEvent;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/observers/network.js
/**
* Typeguard function checks if an input is a Request object.
*/
function isRequest(requestInfo) {
	return typeof requestInfo === "object" && requestInfo !== null && "url" in requestInfo && "method" in requestInfo;
}
var NetworkEventCallback = function() {
	function NetworkEventCallback(callback, id) {
		if (id === void 0) id = UUID();
		this.callback = callback;
		this.id = id;
	}
	return NetworkEventCallback;
}();
function safeInvoke(fn) {
	try {
		fn();
	} catch (err) {}
}
var networkObserver = new (function() {
	function NetworkObserver(logger) {
		this.eventCallbacks = /* @__PURE__ */ new Map();
		this.isObserving = false;
		this.logger = logger;
		var globalScope = getGlobalScope();
		if (!NetworkObserver.isSupported())
 /* istanbul ignore next */
		return;
		this.globalScope = globalScope;
	}
	NetworkObserver.isSupported = function() {
		var globalScope = getGlobalScope();
		return !!globalScope && !!globalScope.fetch;
	};
	NetworkObserver.prototype.subscribe = function(eventCallback, logger) {
		var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
		if (!this.logger) this.logger = logger;
		this.eventCallbacks.set(eventCallback.id, eventCallback);
		if (!this.isObserving) {
			/* istanbul ignore next */
			var originalXhrOpen = (_c = (_b = (_a = this.globalScope) === null || _a === void 0 ? void 0 : _a.XMLHttpRequest) === null || _b === void 0 ? void 0 : _b.prototype) === null || _c === void 0 ? void 0 : _c.open;
			/* istanbul ignore next */
			var originalXhrSend = (_f = (_e = (_d = this.globalScope) === null || _d === void 0 ? void 0 : _d.XMLHttpRequest) === null || _e === void 0 ? void 0 : _e.prototype) === null || _f === void 0 ? void 0 : _f.send;
			/* istanbul ignore next */
			var originalXhrSetRequestHeader = (_j = (_h = (_g = this.globalScope) === null || _g === void 0 ? void 0 : _g.XMLHttpRequest) === null || _h === void 0 ? void 0 : _h.prototype) === null || _j === void 0 ? void 0 : _j.setRequestHeader;
			if (originalXhrOpen && originalXhrSend && originalXhrSetRequestHeader) this.observeXhr(originalXhrOpen, originalXhrSend, originalXhrSetRequestHeader);
			/* istanbul ignore next */
			var originalFetch = (_k = this.globalScope) === null || _k === void 0 ? void 0 : _k.fetch;
			/* istanbul ignore next */
			if (originalFetch) this.observeFetch(originalFetch);
			/* istanbul ignore next */
			this.isObserving = true;
		}
	};
	NetworkObserver.prototype.unsubscribe = function(eventCallback) {
		this.eventCallbacks.delete(eventCallback.id);
	};
	NetworkObserver.prototype.triggerEventCallbacks = function(event) {
		var _this = this;
		this.eventCallbacks.forEach(function(callback) {
			try {
				callback.callback(event);
			} catch (err) {
				safeInvoke(function() {
					var _a;
					/* istanbul ignore next */
					(_a = _this.logger) === null || _a === void 0 || _a.debug("an unexpected error occurred while triggering event callbacks", err);
				});
			}
		});
	};
	NetworkObserver.prototype.handleNetworkRequestEvent = function(requestType, requestInfo, requestWrapper, responseWrapper, typedError, startTime, durationStart) {
		var _a;
		/* istanbul ignore next */
		if (startTime === void 0 || durationStart === void 0) return;
		var url;
		var method = "GET";
		if (isRequest(requestInfo)) {
			url = requestInfo["url"];
			method = requestInfo["method"];
		} else url = (_a = requestInfo === null || requestInfo === void 0 ? void 0 : requestInfo.toString) === null || _a === void 0 ? void 0 : _a.call(requestInfo);
		if (url) try {
			var parsedUrl = new URL(url);
			url = "".concat(parsedUrl.protocol, "//").concat(parsedUrl.host).concat(parsedUrl.pathname).concat(parsedUrl.search).concat(parsedUrl.hash);
		} catch (err) {}
		method = (requestWrapper === null || requestWrapper === void 0 ? void 0 : requestWrapper.method) || method;
		var status, error;
		if (responseWrapper) status = responseWrapper.status;
		if (typedError) {
			error = {
				name: typedError.name || "UnknownError",
				message: typedError.message || "An unknown error occurred"
			};
			status = 0;
		}
		var duration = Math.floor(performance.now() - durationStart);
		var endTime = Math.floor(startTime + duration);
		var requestEvent = new NetworkRequestEvent(requestType, method, startTime, startTime, url, requestWrapper, status, duration, responseWrapper, error, endTime);
		this.triggerEventCallbacks(requestEvent);
	};
	NetworkObserver.prototype.getTimestamps = function() {
		var _a, _b;
		/* istanbul ignore next */
		return {
			startTime: (_a = Date.now) === null || _a === void 0 ? void 0 : _a.call(Date),
			durationStart: (_b = performance === null || performance === void 0 ? void 0 : performance.now) === null || _b === void 0 ? void 0 : _b.call(performance)
		};
	};
	NetworkObserver.prototype.observeFetch = function(originalFetch) {
		var _this = this;
		/* istanbul ignore next */
		if (!this.globalScope || !originalFetch) return;
		/**
		* IMPORTANT: This overrides window.fetch in browsers.
		* You probably never need to make changes to this function.
		* If you do, please be careful to preserve the original functionality of fetch
		* and make sure another developer who is an expert reviews this change throughly
		*/
		this.globalScope.fetch = function(requestInfo, requestInit) {
			return __awaiter(_this, void 0, void 0, function() {
				var timestamps, originalResponse, originalError, err_1;
				var _this = this;
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0:
							try {
								timestamps = this.getTimestamps();
							} catch (error) {
								/* istanbul ignore next */
								safeInvoke(function() {
									var _a;
									return (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.debug("an unexpected error occurred while retrieving timestamps", error);
								});
							}
							_a.label = 1;
						case 1:
							_a.trys.push([
								1,
								3,
								,
								4
							]);
							return [4, originalFetch(requestInfo, requestInit)];
						case 2:
							originalResponse = _a.sent();
							return [3, 4];
						case 3:
							err_1 = _a.sent();
							originalError = err_1;
							return [3, 4];
						case 4:
							try {
								this.handleNetworkRequestEvent(
									"fetch",
									requestInfo,
									requestInit ? new RequestWrapperFetch(requestInit) : void 0,
									originalResponse ? new ResponseWrapperFetch(originalResponse) : void 0,
									originalError,
									/* istanbul ignore next */
									timestamps === null || timestamps === void 0 ? void 0 : timestamps.startTime,
									/* istanbul ignore next */
									timestamps === null || timestamps === void 0 ? void 0 : timestamps.durationStart
								);
							} catch (err) {
								/* istanbul ignore next */
								safeInvoke(function() {
									var _a;
									return (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.debug("an unexpected error occurred while handling fetch", err);
								});
							}
							if (originalResponse) return [2, originalResponse];
							else throw originalError;
							return [2];
					}
				});
			});
		};
	};
	/**
	* Creates a function that parses the response of an XMLHttpRequest as JSON.
	*
	* Returns function instead of JSON object to avoid unnecessary parsing if the
	* body is not being captured.
	*
	* @param xhrSafe - The XMLHttpRequest object.
	* @param context - The NetworkObserver instance.
	* @returns A function that parses the response of an XMLHttpRequest as JSON.
	*/
	NetworkObserver.createXhrJsonParser = function(xhrUnsafe, context) {
		return function() {
			var _a;
			try {
				if (xhrUnsafe.responseType === "json") {
					if ((_a = context.globalScope) === null || _a === void 0 ? void 0 : _a.structuredClone) return context.globalScope.structuredClone(xhrUnsafe.response);
				} else if (["text", ""].includes(xhrUnsafe.responseType)) return JSON.parse(xhrUnsafe.responseText);
			} catch (err) {
				/* istanbul ignore if */
				if (err instanceof Error && err.name === "InvalidStateError") safeInvoke(function() {
					var _a;
					return (_a = context.logger) === null || _a === void 0 ? void 0 : _a.debug("unexpected error when retrieving responseText. responseType='".concat(xhrUnsafe.responseType, "'"));
				});
				return null;
			}
			return null;
		};
	};
	NetworkObserver.prototype.observeXhr = function(originalXhrOpen, originalXhrSend, originalXhrSetRequestHeader) {
		/* istanbul ignore next */
		if (!this.globalScope || !originalXhrOpen || !originalXhrSend) return;
		var xhrProto = this.globalScope.XMLHttpRequest.prototype;
		var networkObserverContext = this;
		/**
		* IMPORTANT: This overrides window.XMLHttpRequest.prototype.open
		* You probably never need to make changes to this function.
		* If you do, please be careful to preserve the original functionality of xhr.open
		* and make sure another developer who is an expert reviews this change throughly
		*/
		xhrProto.open = function() {
			var _a;
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var xhrSafe = this;
			var _b = __read$1(args, 2), method = _b[0], url = _b[1];
			try {
				/* istanbul ignore next */
				xhrSafe.$$AmplitudeAnalyticsEvent = __assign$1({
					method,
					url: (_a = url === null || url === void 0 ? void 0 : url.toString) === null || _a === void 0 ? void 0 : _a.call(url),
					headers: {}
				}, networkObserverContext.getTimestamps());
			} catch (err) {
				/* istanbul ignore next */
				safeInvoke(function() {
					var _a;
					return (_a = networkObserverContext.logger) === null || _a === void 0 ? void 0 : _a.debug("an unexpected error occurred while calling xhr open", err);
				});
			}
			return originalXhrOpen.apply(xhrSafe, args);
		};
		/**
		* IMPORTANT: This overrides window.XMLHttpRequest.prototype.send
		* You probably never need to make changes to this function.
		* If you do, please be careful to preserve the original functionality of xhr.send
		* and make sure another developer who is an expert reviews this change throughly
		*/
		xhrProto.send = function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var xhrUnsafe = this;
			var xhrSafe = xhrUnsafe;
			var getJson = NetworkObserver.createXhrJsonParser(xhrUnsafe, networkObserverContext);
			var body = args[0];
			var requestEvent = xhrSafe.$$AmplitudeAnalyticsEvent;
			if (xhrSafe.$$AmplitudeAnalyticsEvent) xhrSafe.addEventListener("loadend", function() {
				try {
					var responseHeaders = xhrSafe.getAllResponseHeaders();
					var responseBodySize = xhrSafe.getResponseHeader("content-length");
					var responseWrapper = new ResponseWrapperXhr(
						xhrSafe.status,
						responseHeaders,
						/* istanbul ignore next */
						responseBodySize ? parseInt(responseBodySize, 10) : void 0,
						getJson
					);
					var requestHeaders = xhrSafe.$$AmplitudeAnalyticsEvent.headers;
					var requestWrapper = new RequestWrapperXhr(body, requestHeaders);
					requestEvent.status = xhrSafe.status;
					networkObserverContext.handleNetworkRequestEvent("xhr", {
						url: requestEvent.url,
						method: requestEvent.method
					}, requestWrapper, responseWrapper, void 0, requestEvent.startTime, requestEvent.durationStart);
				} catch (err) {
					/* istanbul ignore next */
					safeInvoke(function() {
						var _a;
						return (_a = networkObserverContext.logger) === null || _a === void 0 ? void 0 : _a.debug("an unexpected error occurred while handling xhr send", err);
					});
				}
			});
			return originalXhrSend.apply(xhrSafe, args);
		};
		/**
		* IMPORTANT: This overrides window.XMLHttpRequest.prototype.setRequestHeader
		* You probably never need to make changes to this function.
		* If you do, please be careful to preserve the original functionality of xhr.setRequestHeader
		* and make sure another developer who is an expert reviews this change throughly
		*/
		xhrProto.setRequestHeader = function(headerName, headerValue) {
			var xhrSafe = this;
			try {
				var analyticsEvent = xhrSafe.$$AmplitudeAnalyticsEvent;
				if (analyticsEvent) analyticsEvent.headers[headerName] = headerValue;
			} catch (err) {
				/* istanbul ignore next */
				safeInvoke(function() {
					var _a;
					return (_a = networkObserverContext.logger) === null || _a === void 0 ? void 0 : _a.debug("an unexpected error occurred while calling xhr setRequestHeader", err);
				});
			}
			originalXhrSetRequestHeader.apply(xhrSafe, [headerName, headerValue]);
		};
	};
	return NetworkObserver;
}())();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/campaign/campaign-parser.js
var CampaignParser = function() {
	function CampaignParser() {}
	CampaignParser.prototype.parse = function() {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, __assign$1(__assign$1(__assign$1(__assign$1({}, BASE_CAMPAIGN), this.getUtmParam()), this.getReferrer()), this.getClickIds())];
			});
		});
	};
	CampaignParser.prototype.getUtmParam = function() {
		var params = getQueryParams();
		return {
			utm_campaign: params[UTM_CAMPAIGN],
			utm_content: params[UTM_CONTENT],
			utm_id: params[UTM_ID],
			utm_medium: params[UTM_MEDIUM],
			utm_source: params[UTM_SOURCE],
			utm_term: params[UTM_TERM]
		};
	};
	CampaignParser.prototype.getReferrer = function() {
		var _a, _b;
		var data = {
			referrer: void 0,
			referring_domain: void 0
		};
		try {
			data.referrer = document.referrer || void 0;
			data.referring_domain = (_b = (_a = data.referrer) === null || _a === void 0 ? void 0 : _a.split("/")[2]) !== null && _b !== void 0 ? _b : void 0;
		} catch (_c) {}
		return data;
	};
	CampaignParser.prototype.getClickIds = function() {
		var _a;
		var params = getQueryParams();
		return _a = {}, _a[DCLID] = params[DCLID], _a[FBCLID] = params[FBCLID], _a[GBRAID] = params[GBRAID], _a[GCLID] = params[GCLID], _a[KO_CLICK_ID] = params[KO_CLICK_ID], _a[LI_FAT_ID] = params[LI_FAT_ID], _a[MSCLKID] = params[MSCLKID], _a[RDT_CID] = params[RDT_CID], _a[TTCLID] = params[TTCLID], _a[TWCLID] = params[TWCLID], _a[WBRAID] = params[WBRAID], _a;
	};
	return CampaignParser;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/plugins/helpers.js
var TEXT_MASK_ATTRIBUTE = "data-amp-mask";
var MASKED_TEXT_VALUE = "*****";
var CC_REGEX = /\b(?:\d[ -]*?){13,16}\b/;
var SSN_REGEX = /(\d{3}-?\d{2}-?\d{4})/g;
var EMAIL_REGEX = /[^\s@]+@[^\s@.]+\.[^\s@]+/g;
/**
* Replaces sensitive strings (credit cards, SSNs, emails) and custom patterns with masked text
* @param text - The text to search for sensitive data
* @param additionalMaskTextPatterns - Optional array of additional regex patterns to mask
* @returns The text with sensitive data replaced by masked text
*/
var replaceSensitiveString = function(text, additionalMaskTextPatterns) {
	var e_1, _a;
	if (additionalMaskTextPatterns === void 0) additionalMaskTextPatterns = [];
	if (typeof text !== "string") return "";
	var result = text;
	result = result.replace(CC_REGEX, MASKED_TEXT_VALUE);
	result = result.replace(SSN_REGEX, MASKED_TEXT_VALUE);
	result = result.replace(EMAIL_REGEX, MASKED_TEXT_VALUE);
	try {
		for (var additionalMaskTextPatterns_1 = __values$1(additionalMaskTextPatterns), additionalMaskTextPatterns_1_1 = additionalMaskTextPatterns_1.next(); !additionalMaskTextPatterns_1_1.done; additionalMaskTextPatterns_1_1 = additionalMaskTextPatterns_1.next()) {
			var pattern = additionalMaskTextPatterns_1_1.value;
			try {
				result = result.replace(pattern, MASKED_TEXT_VALUE);
			} catch (_b) {}
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (additionalMaskTextPatterns_1_1 && !additionalMaskTextPatterns_1_1.done && (_a = additionalMaskTextPatterns_1.return)) _a.call(additionalMaskTextPatterns_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	return result;
};
/**
* Gets the page title, checking if the title element has data-amp-mask attribute
* @returns The page title, masked if the title element has data-amp-mask attribute
*/
var getPageTitle = function(parseTitleFunction) {
	if (typeof document === "undefined" || !document.title) return "";
	var titleElement = document.querySelector("title");
	if (titleElement && titleElement.hasAttribute("data-amp-mask")) return MASKED_TEXT_VALUE;
	return parseTitleFunction ? parseTitleFunction(document.title) : document.title;
};
//#endregion
//#region node_modules/.pnpm/zen-observable@0.10.0/node_modules/zen-observable/lib/Observable.js
var require_Observable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Observable = void 0;
	var hasSymbol = (name) => Boolean(Symbol[name]);
	var getSymbol = (name) => hasSymbol(name) ? Symbol[name] : "@@" + name;
	var SymbolIterator = getSymbol("iterator");
	var SymbolObservable = getSymbol("observable");
	var SymbolSpecies = getSymbol("species");
	function getMethod(obj, key) {
		let value = obj[key];
		if (value == null) return void 0;
		if (typeof value !== "function") throw new TypeError(value + " is not a function");
		return value;
	}
	function getSpecies(obj) {
		let ctor = obj.constructor;
		if (ctor !== void 0) {
			ctor = ctor[SymbolSpecies];
			if (ctor === null) ctor = void 0;
		}
		return ctor !== void 0 ? ctor : Observable;
	}
	function isObservable(x) {
		return x instanceof Observable;
	}
	function hostReportError(e) {
		if (hostReportError.log) hostReportError.log(e);
		else setTimeout(() => {
			throw e;
		});
	}
	function enqueue(fn) {
		Promise.resolve().then(() => {
			try {
				fn();
			} catch (e) {
				hostReportError(e);
			}
		});
	}
	function cleanupSubscription(subscription) {
		let cleanup = subscription._cleanup;
		if (cleanup === void 0) return;
		subscription._cleanup = void 0;
		if (!cleanup) return;
		try {
			if (typeof cleanup === "function") cleanup();
			else {
				let unsubscribe = getMethod(cleanup, "unsubscribe");
				if (unsubscribe) unsubscribe.call(cleanup);
			}
		} catch (e) {
			hostReportError(e);
		}
	}
	function closeSubscription(subscription) {
		subscription._observer = void 0;
		subscription._queue = void 0;
		subscription._state = "closed";
	}
	function flushSubscription(subscription) {
		let queue = subscription._queue;
		if (!queue) return;
		subscription._queue = void 0;
		subscription._state = "ready";
		for (let i = 0; i < queue.length; ++i) {
			notifySubscription(subscription, queue[i].type, queue[i].value);
			if (subscription._state === "closed") break;
		}
	}
	function notifySubscription(subscription, type, value) {
		subscription._state = "running";
		let observer = subscription._observer;
		try {
			let m = getMethod(observer, type);
			switch (type) {
				case "next":
					if (m) m.call(observer, value);
					break;
				case "error":
					closeSubscription(subscription);
					if (m) m.call(observer, value);
					else throw value;
					break;
				case "complete":
					closeSubscription(subscription);
					if (m) m.call(observer);
					break;
			}
		} catch (e) {
			hostReportError(e);
		}
		if (subscription._state === "closed") cleanupSubscription(subscription);
		else if (subscription._state === "running") subscription._state = "ready";
	}
	function onNotify(subscription, type, value) {
		if (subscription._state === "closed") return;
		if (subscription._state === "buffering") {
			subscription._queue.push({
				type,
				value
			});
			return;
		}
		if (subscription._state !== "ready") {
			subscription._state = "buffering";
			subscription._queue = [{
				type,
				value
			}];
			enqueue(() => flushSubscription(subscription));
			return;
		}
		notifySubscription(subscription, type, value);
	}
	var Subscription = class {
		constructor(observer, subscriber) {
			this._cleanup = void 0;
			this._observer = observer;
			this._queue = void 0;
			this._state = "initializing";
			let self = this;
			let subscriptionObserver = {
				get closed() {
					return self._state === "closed";
				},
				next(value) {
					onNotify(self, "next", value);
				},
				error(value) {
					onNotify(self, "error", value);
				},
				complete() {
					onNotify(self, "complete");
				}
			};
			try {
				this._cleanup = subscriber.call(void 0, subscriptionObserver);
			} catch (e) {
				subscriptionObserver.error(e);
			}
			if (this._state === "initializing") this._state = "ready";
		}
		get closed() {
			return this._state === "closed";
		}
		unsubscribe() {
			if (this._state !== "closed") {
				closeSubscription(this);
				cleanupSubscription(this);
			}
		}
	};
	var Observable = class Observable {
		constructor(subscriber) {
			if (!(this instanceof Observable)) throw new TypeError("Observable cannot be called as a function");
			if (typeof subscriber !== "function") throw new TypeError("Observable initializer must be a function");
			this._subscriber = subscriber;
		}
		subscribe(observer) {
			if (typeof observer !== "object" || observer === null) observer = {
				next: observer,
				error: arguments[1],
				complete: arguments[2]
			};
			return new Subscription(observer, this._subscriber);
		}
		forEach(fn) {
			return new Promise((resolve, reject) => {
				if (typeof fn !== "function") {
					reject(/* @__PURE__ */ new TypeError(fn + " is not a function"));
					return;
				}
				function done() {
					subscription.unsubscribe();
					resolve();
				}
				let subscription = this.subscribe({
					next(value) {
						try {
							fn(value, done);
						} catch (e) {
							reject(e);
							subscription.unsubscribe();
						}
					},
					error: reject,
					complete: resolve
				});
			});
		}
		map(fn) {
			if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
			return new (getSpecies(this))((observer) => this.subscribe({
				next(value) {
					try {
						value = fn(value);
					} catch (e) {
						return observer.error(e);
					}
					observer.next(value);
				},
				error(e) {
					observer.error(e);
				},
				complete() {
					observer.complete();
				}
			}));
		}
		filter(fn) {
			if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
			return new (getSpecies(this))((observer) => this.subscribe({
				next(value) {
					try {
						if (!fn(value)) return;
					} catch (e) {
						return observer.error(e);
					}
					observer.next(value);
				},
				error(e) {
					observer.error(e);
				},
				complete() {
					observer.complete();
				}
			}));
		}
		reduce(fn) {
			if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
			let C = getSpecies(this);
			let hasSeed = arguments.length > 1;
			let hasValue = false;
			let acc = arguments[1];
			return new C((observer) => this.subscribe({
				next(value) {
					let first = !hasValue;
					hasValue = true;
					if (!first || hasSeed) try {
						acc = fn(acc, value);
					} catch (e) {
						return observer.error(e);
					}
					else acc = value;
				},
				error(e) {
					observer.error(e);
				},
				complete() {
					if (!hasValue && !hasSeed) return observer.error(/* @__PURE__ */ new TypeError("Cannot reduce an empty sequence"));
					observer.next(acc);
					observer.complete();
				}
			}));
		}
		async all() {
			let values = [];
			await this.forEach((value) => values.push(value));
			return values;
		}
		concat(...sources) {
			let C = getSpecies(this);
			return new C((observer) => {
				let subscription;
				let index = 0;
				function startNext(next) {
					subscription = next.subscribe({
						next(v) {
							observer.next(v);
						},
						error(e) {
							observer.error(e);
						},
						complete() {
							if (index === sources.length) {
								subscription = void 0;
								observer.complete();
							} else startNext(C.from(sources[index++]));
						}
					});
				}
				startNext(this);
				return () => {
					if (subscription) {
						subscription.unsubscribe();
						subscription = void 0;
					}
				};
			});
		}
		flatMap(fn) {
			if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
			let C = getSpecies(this);
			return new C((observer) => {
				let subscriptions = [];
				let outer = this.subscribe({
					next(value) {
						if (fn) try {
							value = fn(value);
						} catch (e) {
							return observer.error(e);
						}
						let inner = C.from(value).subscribe({
							next(value) {
								observer.next(value);
							},
							error(e) {
								observer.error(e);
							},
							complete() {
								let i = subscriptions.indexOf(inner);
								if (i >= 0) subscriptions.splice(i, 1);
								completeIfDone();
							}
						});
						subscriptions.push(inner);
					},
					error(e) {
						observer.error(e);
					},
					complete() {
						completeIfDone();
					}
				});
				function completeIfDone() {
					if (outer.closed && subscriptions.length === 0) observer.complete();
				}
				return () => {
					subscriptions.forEach((s) => s.unsubscribe());
					outer.unsubscribe();
				};
			});
		}
		[SymbolObservable]() {
			return this;
		}
		static from(x) {
			let C = typeof this === "function" ? this : Observable;
			if (x == null) throw new TypeError(x + " is not an object");
			let method = getMethod(x, SymbolObservable);
			if (method) {
				let observable = method.call(x);
				if (Object(observable) !== observable) throw new TypeError(observable + " is not an object");
				if (isObservable(observable) && observable.constructor === C) return observable;
				return new C((observer) => observable.subscribe(observer));
			}
			if (hasSymbol("iterator")) {
				method = getMethod(x, SymbolIterator);
				if (method) return new C((observer) => {
					enqueue(() => {
						if (observer.closed) return;
						for (let item of method.call(x)) {
							observer.next(item);
							if (observer.closed) return;
						}
						observer.complete();
					});
				});
			}
			if (Array.isArray(x)) return new C((observer) => {
				enqueue(() => {
					if (observer.closed) return;
					for (let i = 0; i < x.length; ++i) {
						observer.next(x[i]);
						if (observer.closed) return;
					}
					observer.complete();
				});
			});
			throw new TypeError(x + " is not observable");
		}
		static of(...items) {
			return new (typeof this === "function" ? this : Observable)((observer) => {
				enqueue(() => {
					if (observer.closed) return;
					for (let i = 0; i < items.length; ++i) {
						observer.next(items[i]);
						if (observer.closed) return;
					}
					observer.complete();
				});
			});
		}
		static get [SymbolSpecies]() {
			return this;
		}
	};
	exports.Observable = Observable;
	Object.defineProperty(Observable, Symbol("extensions"), {
		value: {
			symbol: SymbolObservable,
			hostReportError
		},
		configurable: true
	});
}));
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/observable.js
var import_zen_observable = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_Observable().Observable;
})))());
/**
* asyncMap operator for Zen Observable
*
* Maps each value emitted by the source Observable using an async function,
* emitting the resolved values in the same order they arrive.
*/
function asyncMap(observable, fn) {
	return new import_zen_observable.default(function(observer) {
		observable.subscribe({
			next: function(value) {
				fn(value).then(function(result) {
					return observer.next(result);
				}).catch(function(error) {
					return observer.error(error);
				});
			},
			error: function(error) {
				observer.error(error);
			},
			complete: function() {
				observer.complete();
			}
		});
	});
}
/**
* merge operator for Zen Observable
*
* Merges two observables into a single observable, emitting values from both sources in the order they arrive.
* @param sourceA Observable to merge
* @param sourceB Observable to merge
* @returns Unsubscribable cleanup function
*/
function merge(sourceA, sourceB) {
	return new import_zen_observable.default(function(observer) {
		var closed = false;
		var subscriptions = /* @__PURE__ */ new Set();
		var cleanup = function() {
			var e_1, _a;
			closed = true;
			try {
				for (var subscriptions_1 = __values$1(subscriptions), subscriptions_1_1 = subscriptions_1.next(); !subscriptions_1_1.done; subscriptions_1_1 = subscriptions_1.next()) {
					var sub = subscriptions_1_1.value;
					try {
						sub.unsubscribe();
					} catch (_b) {}
				}
			} catch (e_1_1) {
				e_1 = { error: e_1_1 };
			} finally {
				try {
					if (subscriptions_1_1 && !subscriptions_1_1.done && (_a = subscriptions_1.return)) _a.call(subscriptions_1);
				} finally {
					if (e_1) throw e_1.error;
				}
			}
			subscriptions.clear();
		};
		var subscribeTo = function(source) {
			var sub = source.subscribe({
				next: function(value) {
					if (!closed) observer.next(value);
				},
				error: function(err) {
					if (!closed) {
						closed = true;
						observer.error(err);
						cleanup();
					}
				},
				complete: function() {
					subscriptions.delete(sub);
					if (!closed && subscriptions.size === 0) {
						observer.complete();
						cleanup();
						closed = true;
					}
				}
			});
			subscriptions.add(sub);
		};
		subscribeTo(sourceA);
		subscribeTo(sourceB);
		return cleanup;
	});
}
function multicast(source) {
	var observers = /* @__PURE__ */ new Set();
	var subscription = null;
	function cleanup() {
		/* istanbul ignore next */
		subscription === null || subscription === void 0 || subscription.unsubscribe();
		subscription = null;
		observers.clear();
	}
	return new import_zen_observable.default(function(observer) {
		observers.add(observer);
		if (subscription === null) subscription = source.subscribe({
			next: function(value) {
				var e_2, _a;
				var _b;
				try {
					for (var observers_1 = __values$1(observers), observers_1_1 = observers_1.next(); !observers_1_1.done; observers_1_1 = observers_1.next()) {
						var obs = observers_1_1.value;
						/* istanbul ignore next */
						(_b = obs.next) === null || _b === void 0 || _b.call(obs, value);
					}
				} catch (e_2_1) {
					e_2 = { error: e_2_1 };
				} finally {
					try {
						if (observers_1_1 && !observers_1_1.done && (_a = observers_1.return)) _a.call(observers_1);
					} finally {
						if (e_2) throw e_2.error;
					}
				}
			},
			error: function(err) {
				var e_3, _a;
				var _b;
				try {
					for (var observers_2 = __values$1(observers), observers_2_1 = observers_2.next(); !observers_2_1.done; observers_2_1 = observers_2.next()) {
						var obs = observers_2_1.value;
						/* istanbul ignore next */
						(_b = obs.error) === null || _b === void 0 || _b.call(obs, err);
					}
				} catch (e_3_1) {
					e_3 = { error: e_3_1 };
				} finally {
					try {
						if (observers_2_1 && !observers_2_1.done && (_a = observers_2.return)) _a.call(observers_2);
					} finally {
						if (e_3) throw e_3.error;
					}
				}
				cleanup();
			},
			complete: function() {
				var e_4, _a;
				var _b;
				try {
					for (var observers_3 = __values$1(observers), observers_3_1 = observers_3.next(); !observers_3_1.done; observers_3_1 = observers_3.next()) {
						var obs = observers_3_1.value;
						/* istanbul ignore next */
						(_b = obs.complete) === null || _b === void 0 || _b.call(obs);
					}
				} catch (e_4_1) {
					e_4 = { error: e_4_1 };
				} finally {
					try {
						if (observers_3_1 && !observers_3_1.done && (_a = observers_3.return)) _a.call(observers_3);
					} finally {
						if (e_4) throw e_4.error;
					}
				}
				cleanup();
			}
		});
		return function() {
			observers.delete(observer);
			if (observers.size === 0 && subscription) {
				subscription.unsubscribe();
				subscription = null;
			}
		};
	});
}
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/utils/safe-stringify.js
var import_safe_json_stringify = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasProp = Object.prototype.hasOwnProperty;
	function throwsMessage(err) {
		return "[Throws: " + (err ? err.message : "?") + "]";
	}
	function safeGetValueFromPropertyOnObject(obj, property) {
		if (hasProp.call(obj, property)) try {
			return obj[property];
		} catch (err) {
			return throwsMessage(err);
		}
		return obj[property];
	}
	function ensureProperties(obj) {
		var seen = [];
		function visit(obj) {
			if (obj === null || typeof obj !== "object") return obj;
			if (seen.indexOf(obj) !== -1) return "[Circular]";
			seen.push(obj);
			if (typeof obj.toJSON === "function") try {
				var fResult = visit(obj.toJSON());
				seen.pop();
				return fResult;
			} catch (err) {
				return throwsMessage(err);
			}
			if (Array.isArray(obj)) {
				var aResult = obj.map(visit);
				seen.pop();
				return aResult;
			}
			var result = Object.keys(obj).reduce(function(result, prop) {
				result[prop] = visit(safeGetValueFromPropertyOnObject(obj, prop));
				return result;
			}, {});
			seen.pop();
			return result;
		}
		return visit(obj);
	}
	module.exports = function(data, replacer, space) {
		return JSON.stringify(ensureProperties(data), replacer, space);
	};
	module.exports.ensureProperties = ensureProperties;
})))());
/* istanbul ignore next */
var safeJsonStringify = import_safe_json_stringify.default || import_safe_json_stringify;
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/messenger/constants.js
var AMPLITUDE_ORIGIN = "https://app.amplitude.com";
var AMPLITUDE_ORIGINS_MAP = {
	US: AMPLITUDE_ORIGIN,
	EU: "https://app.eu.amplitude.com",
	STAGING: "https://apps.stag2.amplitude.com"
};
var AMPLITUDE_BACKGROUND_CAPTURE_SCRIPT_URL = "https://cdn.amplitude.com/libs/background-capture-1.0.0-alpha.2.js.gz";
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/messenger/utils.js
/**
* Dynamically loads an external script by appending a <script> tag to the document head.
* Deduplicates by checking if a script with the same src already exists.
*/
var asyncLoadScript = function(url) {
	if (document.querySelector("script[src=\"".concat(CSS.escape(url), "\"]"))) return Promise.resolve({ status: true });
	return new Promise(function(resolve, reject) {
		var _a;
		try {
			var scriptElement = document.createElement("script");
			scriptElement.type = "text/javascript";
			scriptElement.async = true;
			scriptElement.src = url;
			scriptElement.addEventListener("load", function() {
				resolve({ status: true });
			}, { once: true });
			scriptElement.addEventListener("error", function() {
				reject({
					status: false,
					message: "Failed to load the script ".concat(url)
				});
			});
			/* istanbul ignore next */
			(_a = document.head) === null || _a === void 0 || _a.appendChild(scriptElement);
		} catch (error) {
			/* istanbul ignore next */
			reject(error);
		}
	});
};
/**
* Generates a simple unique ID for message request/response correlation.
*/
function generateUniqueId() {
	return "".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9));
}
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/messenger/base-window-messenger.js
var _a;
/**
* Brand key used to identify BaseWindowMessenger instances across bundle boundaries.
*/
var MESSENGER_BRAND = "__AMPLITUDE_MESSENGER_INSTANCE__";
/** Global scope key where the singleton messenger is stored. */
var MESSENGER_GLOBAL_KEY = "__AMPLITUDE_MESSENGER__";
/**
* BaseWindowMessenger provides generic cross-window communication via postMessage.
* Singleton access via getOrCreateWindowMessenger() to prevent duplicate instances
*/
var BaseWindowMessenger = function() {
	function BaseWindowMessenger(_b) {
		var _d = (_b === void 0 ? {} : _b).origin, origin = _d === void 0 ? AMPLITUDE_ORIGIN : _d;
		/** Brand property for cross-bundle instanceof checks. */
		this[_a] = true;
		this.isSetup = false;
		this.messageHandler = null;
		this.requestCallbacks = {};
		this.actionHandlers = /* @__PURE__ */ new Map();
		/**
		* Messages received for actions that had no registered handler yet.
		* Drained automatically when the corresponding handler is registered via
		* registerActionHandler(), solving startup race conditions between
		* independently-initialized plugins.
		*/
		this.pendingMessages = /* @__PURE__ */ new Map();
		/**
		* Tracks in-flight and completed script loads by URL.
		* Using a map, this prevents duplicate loads before the first resolves.
		*/
		this.scriptLoadPromises = /* @__PURE__ */ new Map();
		this.endpoint = origin;
	}
	/**
	* Send a message to the parent window (window.opener).
	*/
	BaseWindowMessenger.prototype.notify = function(message) {
		var _b, _c, _d, _e;
		(_c = (_b = this.logger) === null || _b === void 0 ? void 0 : _b.debug) === null || _c === void 0 || _c.call(_b, "Message sent: ", JSON.stringify(message));
		(_e = (_d = window.opener) === null || _d === void 0 ? void 0 : _d.postMessage) === null || _e === void 0 || _e.call(_d, message, this.endpoint);
	};
	/**
	* Send an async request to the parent window with a unique ID.
	* Returns a Promise that resolves when the parent responds.
	*/
	BaseWindowMessenger.prototype.sendRequest = function(action, args, options) {
		var _this = this;
		if (options === void 0) options = { timeout: 15e3 };
		var id = generateUniqueId();
		var request = {
			id,
			action,
			args
		};
		return new Promise(function(resolve, reject) {
			_this.requestCallbacks[id] = {
				resolve,
				reject
			};
			_this.notify(request);
			if (options.timeout > 0) setTimeout(function() {
				reject(new Error("".concat(action, " timed out (id: ").concat(id, ")")));
				delete _this.requestCallbacks[id];
			}, options.timeout);
		});
	};
	/**
	* Handle a response to a previous request by resolving its Promise.
	*/
	BaseWindowMessenger.prototype.handleResponse = function(response) {
		var _b;
		if (!this.requestCallbacks[response.id]) {
			(_b = this.logger) === null || _b === void 0 || _b.warn("No callback found for request id: ".concat(response.id));
			return;
		}
		this.requestCallbacks[response.id].resolve(response.responseData);
		delete this.requestCallbacks[response.id];
	};
	/**
	* Register a handler for a specific action type.
	* Logs a warning if overwriting an existing handler.
	*/
	BaseWindowMessenger.prototype.registerActionHandler = function(action, handler) {
		var e_1, _b;
		var _c, _d;
		if (this.actionHandlers.has(action)) (_d = (_c = this.logger) === null || _c === void 0 ? void 0 : _c.warn) === null || _d === void 0 || _d.call(_c, "Overwriting existing action handler for: ".concat(action));
		this.actionHandlers.set(action, handler);
		var queued = this.pendingMessages.get(action);
		if (queued) {
			this.pendingMessages.delete(action);
			try {
				for (var queued_1 = __values$1(queued), queued_1_1 = queued_1.next(); !queued_1_1.done; queued_1_1 = queued_1.next()) {
					var data = queued_1_1.value;
					handler(data);
				}
			} catch (e_1_1) {
				e_1 = { error: e_1_1 };
			} finally {
				try {
					if (queued_1_1 && !queued_1_1.done && (_b = queued_1.return)) _b.call(queued_1);
				} finally {
					if (e_1) throw e_1.error;
				}
			}
		}
	};
	/**
	* Load a script once, deduplicating by URL.
	* Safe against concurrent calls — the second call awaits the first's in-flight Promise
	* rather than triggering a duplicate load.
	*/
	BaseWindowMessenger.prototype.loadScriptOnce = function(url) {
		return __awaiter(this, void 0, void 0, function() {
			var existing, loadPromise, error_1;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						existing = this.scriptLoadPromises.get(url);
						if (existing) return [2, existing];
						loadPromise = asyncLoadScript(url).then(function() {});
						this.scriptLoadPromises.set(url, loadPromise);
						_b.label = 1;
					case 1:
						_b.trys.push([
							1,
							3,
							,
							4
						]);
						return [4, loadPromise];
					case 2:
						_b.sent();
						return [3, 4];
					case 3:
						error_1 = _b.sent();
						this.scriptLoadPromises.delete(url);
						throw error_1;
					case 4: return [2];
				}
			});
		});
	};
	/**
	* Set up the message listener. Idempotent — safe to call multiple times.
	* Subclasses should call super.setup() and then register their own action handlers.
	*/
	BaseWindowMessenger.prototype.setup = function(_b) {
		var _this = this;
		var _c, _d;
		var _e = _b === void 0 ? {} : _b, logger = _e.logger, endpoint = _e.endpoint;
		if (logger) this.logger = logger;
		if (endpoint && this.endpoint === "https://app.amplitude.com") this.endpoint = endpoint;
		if (this.isSetup) return;
		this.isSetup = true;
		(_d = (_c = this.logger) === null || _c === void 0 ? void 0 : _c.debug) === null || _d === void 0 || _d.call(_c, "Setting up messenger");
		this.messageHandler = function(event) {
			var _b, _c, _d, _e, _f;
			(_c = (_b = _this.logger) === null || _b === void 0 ? void 0 : _b.debug) === null || _c === void 0 || _c.call(_b, "Message received: ", JSON.stringify(event));
			if (_this.endpoint !== event.origin) return;
			var eventData = event.data;
			var action = eventData === null || eventData === void 0 ? void 0 : eventData.action;
			if (!action) return;
			if ("id" in eventData && eventData.id) {
				(_e = (_d = _this.logger) === null || _d === void 0 ? void 0 : _d.debug) === null || _e === void 0 || _e.call(_d, "Received Response to previous request: ", JSON.stringify(event));
				_this.handleResponse(eventData);
			} else {
				if (action === "ping") {
					_this.notify({ action: "pong" });
					return;
				}
				var handler = _this.actionHandlers.get(action);
				if (handler) handler(eventData.data);
				else {
					var queue = (_f = _this.pendingMessages.get(action)) !== null && _f !== void 0 ? _f : [];
					queue.push(eventData.data);
					_this.pendingMessages.set(action, queue);
				}
			}
		};
		window.addEventListener("message", this.messageHandler);
		this.notify({ action: "page-loaded" });
	};
	/**
	* Tear down the messenger: remove the message listener, clear all state.
	*/
	BaseWindowMessenger.prototype.destroy = function() {
		if (this.messageHandler) {
			window.removeEventListener("message", this.messageHandler);
			this.messageHandler = null;
		}
		this.isSetup = false;
		this.actionHandlers.clear();
		this.pendingMessages.clear();
		this.requestCallbacks = {};
		this.scriptLoadPromises.clear();
		var globalScope = getGlobalScope();
		if ((globalScope === null || globalScope === void 0 ? void 0 : globalScope[MESSENGER_GLOBAL_KEY]) === this) delete globalScope[MESSENGER_GLOBAL_KEY];
	};
	return BaseWindowMessenger;
}();
_a = MESSENGER_BRAND;
/**
* Type guard: checks whether a value is a BaseWindowMessenger instance.
*/
function isWindowMessenger(value) {
	return typeof value === "object" && value !== null && MESSENGER_BRAND in value && value[MESSENGER_BRAND] === true;
}
/**
* Get or create a singleton BaseWindowMessenger instance.
* Ensures only one messenger (and one message listener) exists per page,
* preventing duplicate script loads and double notifications.
*
* The singleton is stored on globalScope under the same MESSENGER_KEY.
* The branded property check verifies the stored value is actually a messenger.
*/
function getOrCreateWindowMessenger(options) {
	var globalScope = getGlobalScope();
	var existing = globalScope === null || globalScope === void 0 ? void 0 : globalScope[MESSENGER_GLOBAL_KEY];
	if (isWindowMessenger(existing)) return existing;
	var messenger = new BaseWindowMessenger(options);
	if (globalScope) globalScope[MESSENGER_GLOBAL_KEY] = messenger;
	return messenger;
}
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/messenger/background-capture.js
/**
* Brand key set on the messenger instance to track whether background capture
* has been enabled.
*/
var BG_CAPTURE_BRAND = "__AMPLITUDE_BACKGROUND_CAPTURE__";
/**
* Enable background capture on a messenger instance.
* Plugins can call this on a shared messenger instance.
* The first call registers the handlers; subsequent calls are no-ops.
*
* @param messenger - The messenger to enable background capture on
* @param options.scriptUrl - Override the background capture script URL (optional)
*/
function enableBackgroundCapture(messenger, options) {
	var _a;
	var branded = messenger;
	if (branded[BG_CAPTURE_BRAND] === true) return;
	branded[BG_CAPTURE_BRAND] = true;
	var scriptUrl = (_a = options === null || options === void 0 ? void 0 : options.scriptUrl) !== null && _a !== void 0 ? _a : AMPLITUDE_BACKGROUND_CAPTURE_SCRIPT_URL;
	var backgroundCaptureInstance = null;
	var onBackgroundCapture = function(type, backgroundCaptureData) {
		var _a, _b;
		if (type === "background-capture-complete") {
			(_b = (_a = messenger.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 || _b.call(_a, "Background capture complete");
			messenger.notify({
				action: "background-capture-complete",
				data: backgroundCaptureData
			});
		}
	};
	messenger.registerActionHandler("initialize-background-capture", function() {
		var _a, _b;
		(_b = (_a = messenger.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 || _b.call(_a, "Initializing background capture (external script)");
		var resolvedUrl = new URL(scriptUrl, messenger.endpoint).toString();
		messenger.loadScriptOnce(resolvedUrl).then(function() {
			var _a, _b, _c;
			(_b = (_a = messenger.logger) === null || _a === void 0 ? void 0 : _a.debug) === null || _b === void 0 || _b.call(_a, "Background capture script loaded (external)");
			backgroundCaptureInstance = (_c = window === null || window === void 0 ? void 0 : window.amplitudeBackgroundCapture) === null || _c === void 0 ? void 0 : _c.call(window, {
				messenger,
				onBackgroundCapture
			});
			messenger.notify({ action: "background-capture-loaded" });
		}).catch(function() {
			var _a;
			(_a = messenger.logger) === null || _a === void 0 || _a.warn("Failed to initialize background capture");
		});
	});
	messenger.registerActionHandler("close-background-capture", function() {
		var _a;
		(_a = backgroundCaptureInstance === null || backgroundCaptureInstance === void 0 ? void 0 : backgroundCaptureInstance.close) === null || _a === void 0 || _a.call(backgroundCaptureInstance);
		backgroundCaptureInstance = null;
	});
}
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/types/config/browser-config.js
var EXCLUDE_INTERNAL_REFERRERS_CONDITIONS = {
	always: "always",
	ifEmptyCampaign: "ifEmptyCampaign"
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/default-tracking.js
/**
* Returns false if autocapture === false or if autocapture[event],
* otherwise returns true (even if "config.autocapture === undefined")
*/
var isTrackingEnabled = function(autocapture, event) {
	if (typeof autocapture === "boolean") return autocapture;
	if ((autocapture === null || autocapture === void 0 ? void 0 : autocapture[event]) === false) return false;
	return true;
};
var isAttributionTrackingEnabled = function(autocapture) {
	return isTrackingEnabled(autocapture, "attribution");
};
var isFileDownloadTrackingEnabled = function(autocapture) {
	return isTrackingEnabled(autocapture, "fileDownloads");
};
var isFormInteractionTrackingEnabled = function(autocapture) {
	return isTrackingEnabled(autocapture, "formInteractions");
};
var isPageViewTrackingEnabled = function(autocapture) {
	return isTrackingEnabled(autocapture, "pageViews");
};
var isSessionTrackingEnabled = function(autocapture) {
	return isTrackingEnabled(autocapture, "sessions");
};
var isPageUrlEnrichmentEnabled = function(autocapture) {
	return isTrackingEnabled(autocapture, "pageUrlEnrichment");
};
/**
* Returns true if
* 1. if autocapture.networkTracking === true
* 2. if autocapture.networkTracking === object
* otherwise returns false
*/
var isNetworkTrackingEnabled = function(autocapture) {
	if (typeof autocapture === "boolean") return autocapture;
	if (typeof autocapture === "object" && (autocapture.networkTracking === true || typeof autocapture.networkTracking === "object")) return true;
	return false;
};
/**
* Returns true if
* 1. autocapture === true
* 2. if autocapture.elementInteractions === true
* 3. if autocapture.elementInteractions === object
* otherwise returns false
*/
var isElementInteractionsEnabled = function(autocapture) {
	if (typeof autocapture === "boolean") return autocapture;
	if (typeof autocapture === "object" && (autocapture.elementInteractions === true || typeof autocapture.elementInteractions === "object")) return true;
	return false;
};
/**
* Returns true if
* 1. autocapture === true
* 2. if autocapture.webVitals === true
* otherwise returns false
*/
var isWebVitalsEnabled = function(autocapture) {
	if (typeof autocapture === "boolean") return autocapture;
	if (typeof autocapture === "object" && autocapture.webVitals === true) return true;
	return false;
};
var isFrustrationInteractionsEnabled = function(autocapture) {
	if (typeof autocapture === "boolean") return autocapture;
	if (typeof autocapture === "object" && (autocapture.frustrationInteractions === true || typeof autocapture.frustrationInteractions === "object")) return true;
	return false;
};
var isCustomEnrichmentEnabled = function(customEnrichment) {
	if (typeof customEnrichment === "boolean") return customEnrichment;
	if (typeof customEnrichment === "object" && customEnrichment !== null && customEnrichment.enabled !== false) return true;
	return false;
};
var getElementInteractionsConfig = function(config) {
	if (isElementInteractionsEnabled(config.autocapture) && typeof config.autocapture === "object" && typeof config.autocapture.elementInteractions === "object") return config.autocapture.elementInteractions;
};
var getFrustrationInteractionsConfig = function(config) {
	if (isFrustrationInteractionsEnabled(config.autocapture) && typeof config.autocapture === "object" && typeof config.autocapture.frustrationInteractions === "object") return config.autocapture.frustrationInteractions;
};
var getNetworkTrackingConfig = function(config) {
	var _a;
	if (isNetworkTrackingEnabled(config.autocapture)) {
		var networkTrackingConfig = void 0;
		if (typeof config.autocapture === "object" && typeof config.autocapture.networkTracking === "object") networkTrackingConfig = config.autocapture.networkTracking;
		else if (config.networkTrackingOptions) networkTrackingConfig = config.networkTrackingOptions;
		return __assign$1(__assign$1({}, networkTrackingConfig), { captureRules: (_a = networkTrackingConfig === null || networkTrackingConfig === void 0 ? void 0 : networkTrackingConfig.captureRules) === null || _a === void 0 ? void 0 : _a.map(function(rule) {
			var _a, _b, _c;
			if (((_a = rule.urls) === null || _a === void 0 ? void 0 : _a.length) && ((_b = rule.hosts) === null || _b === void 0 ? void 0 : _b.length)) {
				var hostsString = JSON.stringify(rule.hosts);
				var urlsString = JSON.stringify(rule.urls);
				/* istanbul ignore next */
				(_c = config.loggerProvider) === null || _c === void 0 || _c.warn("Found network capture rule with both urls='".concat(urlsString, "' and hosts='").concat(hostsString, "' set. ") + "Definition of urls takes precedence over hosts, so ignoring hosts.");
				return __assign$1(__assign$1({}, rule), { hosts: void 0 });
			}
			return rule;
		}) });
	}
};
var getPageViewTrackingConfig = function(config) {
	var trackOn = function() {
		return false;
	};
	var trackHistoryChanges = void 0;
	var eventType;
	var pageCounter = config.pageCounter;
	if (isPageViewTrackingEnabled(config.defaultTracking)) {
		trackOn = void 0;
		eventType = void 0;
		if (config.defaultTracking && typeof config.defaultTracking === "object" && config.defaultTracking.pageViews && typeof config.defaultTracking.pageViews === "object") {
			if ("trackOn" in config.defaultTracking.pageViews) trackOn = config.defaultTracking.pageViews.trackOn;
			if ("trackHistoryChanges" in config.defaultTracking.pageViews) trackHistoryChanges = config.defaultTracking.pageViews.trackHistoryChanges;
			if ("eventType" in config.defaultTracking.pageViews && config.defaultTracking.pageViews.eventType) eventType = config.defaultTracking.pageViews.eventType;
		}
	}
	return {
		trackOn,
		trackHistoryChanges,
		eventType,
		pageCounter
	};
};
var getAttributionTrackingConfig = function(config) {
	if (isAttributionTrackingEnabled(config.defaultTracking) && config.defaultTracking && typeof config.defaultTracking === "object" && config.defaultTracking.attribution && typeof config.defaultTracking.attribution === "object") return __assign$1({}, config.defaultTracking.attribution);
	return {};
};
var getFormInteractionsConfig = function(config) {
	if (isFormInteractionTrackingEnabled(config.defaultTracking) && config.defaultTracking && typeof config.defaultTracking === "object" && typeof config.defaultTracking.formInteractions === "object") return config.defaultTracking.formInteractions;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/utils/snippet-helper.js
/**
* Applies the proxied functions on the proxied object to an instance of the real object.
* Used to convert proxied Identify and Revenue objects.
*/
var convertProxyObjectToRealObject = function(instance, queue) {
	for (var i = 0; i < queue.length; i++) {
		var _a = queue[i], name_1 = _a.name, args = _a.args, resolve = _a.resolve;
		var fn = instance && instance[name_1];
		if (typeof fn === "function") {
			var result = fn.apply(instance, args);
			if (typeof resolve === "function") resolve(result === null || result === void 0 ? void 0 : result.promise);
		}
	}
	return instance;
};
/**
* Check if the param is snippet proxy
*/
var isInstanceProxy = function(instance) {
	var instanceProxy = instance;
	return instanceProxy && instanceProxy._q !== void 0;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/version.js
var VERSION$1 = "2.37.0";
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/lib-prefix.js
var LIBPREFIX = "amplitude-ts";
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/plugins/context.js
var BROWSER_PLATFORM = "Web";
var IP_ADDRESS = "$remote";
var Context = function() {
	function Context() {
		this.name = "@amplitude/plugin-context-browser";
		this.type = "before";
		this.library = "".concat(LIBPREFIX, "/").concat(VERSION$1);
		/* istanbul ignore else */
		if (typeof navigator !== "undefined") this.userAgent = navigator.userAgent;
	}
	Context.prototype.setup = function(config) {
		this.config = config;
		return Promise.resolve(void 0);
	};
	Context.prototype.execute = function(context) {
		var _a, _b;
		return __awaiter(this, void 0, void 0, function() {
			var time, lastEventId, nextEventId, event;
			return __generator(this, function(_c) {
				time = (/* @__PURE__ */ new Date()).getTime();
				lastEventId = (_a = this.config.lastEventId) !== null && _a !== void 0 ? _a : -1;
				nextEventId = (_b = context.event_id) !== null && _b !== void 0 ? _b : lastEventId + 1;
				this.config.lastEventId = nextEventId;
				if (!context.time) this.config.lastEventTime = time;
				event = __assign$1(__assign$1(__assign$1(__assign$1(__assign$1(__assign$1(__assign$1(__assign$1({
					user_id: this.config.userId,
					device_id: this.config.deviceId,
					session_id: this.config.sessionId,
					time
				}, this.config.appVersion && { app_version: this.config.appVersion }), this.config.trackingOptions.platform && { platform: BROWSER_PLATFORM }), this.config.trackingOptions.language && { language: getLanguage() }), this.config.trackingOptions.ipAddress && { ip: IP_ADDRESS }), {
					insert_id: UUID(),
					partner_id: this.config.partnerId,
					plan: this.config.plan
				}), this.config.ingestionMetadata && { ingestion_metadata: {
					source_name: this.config.ingestionMetadata.sourceName,
					source_version: this.config.ingestionMetadata.sourceVersion
				} }), context), {
					event_id: nextEventId,
					library: this.library,
					user_agent: this.userAgent
				});
				return [2, event];
			});
		});
	};
	return Context;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/storage/local-storage.js
var MAX_ARRAY_LENGTH = 1e3;
var LocalStorage = function(_super) {
	__extends(LocalStorage, _super);
	function LocalStorage(config) {
		var _this = this;
		var _a, _b;
		var localStorage;
		try {
			localStorage = (_a = getGlobalScope()) === null || _a === void 0 ? void 0 : _a.localStorage;
		} catch (e) {
			(_b = config === null || config === void 0 ? void 0 : config.loggerProvider) === null || _b === void 0 || _b.debug("Failed to access localStorage. error=".concat(JSON.stringify(e)));
			localStorage = void 0;
		}
		_this = _super.call(this, localStorage) || this;
		_this.loggerProvider = config === null || config === void 0 ? void 0 : config.loggerProvider;
		return _this;
	}
	LocalStorage.prototype.set = function(key, value) {
		var _a;
		return __awaiter(this, void 0, void 0, function() {
			var droppedEventsCount;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						if (!(Array.isArray(value) && value.length > MAX_ARRAY_LENGTH)) return [3, 2];
						droppedEventsCount = value.length - MAX_ARRAY_LENGTH;
						return [4, _super.prototype.set.call(this, key, value.slice(0, MAX_ARRAY_LENGTH))];
					case 1:
						_b.sent();
						(_a = this.loggerProvider) === null || _a === void 0 || _a.error("Failed to save ".concat(droppedEventsCount, " events because the queue length exceeded ").concat(MAX_ARRAY_LENGTH, "."));
						return [3, 4];
					case 2: return [4, _super.prototype.set.call(this, key, value)];
					case 3:
						_b.sent();
						_b.label = 4;
					case 4: return [2];
				}
			});
		});
	};
	return LocalStorage;
}(BrowserStorage);
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/storage/session-storage.js
var SessionStorage = function(_super) {
	__extends(SessionStorage, _super);
	function SessionStorage() {
		var _a;
		return _super.call(this, (_a = getGlobalScope()) === null || _a === void 0 ? void 0 : _a.sessionStorage) || this;
	}
	return SessionStorage;
}(BrowserStorage);
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/transports/xhr.js
var XHRTransport = function(_super) {
	__extends(XHRTransport, _super);
	function XHRTransport(customHeaders) {
		if (customHeaders === void 0) customHeaders = {};
		var _this = _super.call(this) || this;
		_this.state = { done: 4 };
		_this.customHeaders = customHeaders;
		return _this;
	}
	XHRTransport.prototype.send = function(serverUrl, payload, shouldCompressUploadBody) {
		if (shouldCompressUploadBody === void 0) shouldCompressUploadBody = false;
		return __awaiter(this, void 0, void 0, function() {
			var _this = this;
			return __generator(this, function(_a) {
				return [2, new Promise(function(resolve, reject) {
					/* istanbul ignore if */
					if (typeof XMLHttpRequest === "undefined") reject(/* @__PURE__ */ new Error("XHRTransport is not supported."));
					var xhr = new XMLHttpRequest();
					xhr.open("POST", serverUrl, true);
					xhr.onreadystatechange = function() {
						if (xhr.readyState === _this.state.done) {
							var responseText = xhr.responseText;
							try {
								resolve(_this.buildResponse(JSON.parse(responseText)));
							} catch (_a) {
								resolve(_this.buildResponse({ code: xhr.status }));
							}
						}
					};
					var headers = {
						"Content-Type": "application/json",
						Accept: "*/*"
					};
					var bodyString = JSON.stringify(payload);
					var shouldCompressBody = shouldCompressUploadBody && bodyString.length >= 2048 && isCompressionStreamAvailable();
					var sendBody = function(body) {
						var e_1, _a;
						headers = __assign$1(__assign$1({}, _this.customHeaders), headers);
						try {
							for (var _b = __values$1(Object.entries(headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
								var _d = __read$1(_c.value, 2), key = _d[0], value = _d[1];
								xhr.setRequestHeader(key, value);
							}
						} catch (e_1_1) {
							e_1 = { error: e_1_1 };
						} finally {
							try {
								if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
							} finally {
								if (e_1) throw e_1.error;
							}
						}
						xhr.send(body);
					};
					var doSend = function() {
						return __awaiter(_this, void 0, void 0, function() {
							var compressed;
							return __generator(this, function(_a) {
								switch (_a.label) {
									case 0:
										if (!shouldCompressBody) return [3, 2];
										return [4, compressToGzipArrayBuffer(bodyString)];
									case 1:
										compressed = _a.sent();
										if (compressed) {
											headers["Content-Encoding"] = "gzip";
											sendBody(compressed);
										} else sendBody(bodyString);
										return [3, 3];
									case 2:
										sendBody(bodyString);
										_a.label = 3;
									case 3: return [2];
								}
							});
						});
					};
					doSend().catch(reject);
				})];
			});
		});
	};
	return XHRTransport;
}(BaseTransport);
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/transports/fetch.js
var FetchTransport = function(_super) {
	__extends(FetchTransport, _super);
	function FetchTransport(customHeaders) {
		if (customHeaders === void 0) customHeaders = {};
		var _this = _super.call(this) || this;
		_this.customHeaders = customHeaders;
		return _this;
	}
	FetchTransport.prototype.send = function(serverUrl, payload, shouldCompressUploadBody) {
		if (shouldCompressUploadBody === void 0) shouldCompressUploadBody = false;
		return __awaiter(this, void 0, void 0, function() {
			var bodyString, shouldCompressBody, body, headers, compressed, options, response, responseText;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						/* istanbul ignore if */
						if (typeof fetch === "undefined") throw new Error("FetchTransport is not supported");
						bodyString = JSON.stringify(payload);
						shouldCompressBody = shouldCompressUploadBody && bodyString.length >= 2048 && isCompressionStreamAvailable();
						body = bodyString;
						headers = {
							"Content-Type": "application/json",
							Accept: "*/*"
						};
						if (!shouldCompressBody) return [3, 2];
						return [4, compressToGzipArrayBuffer(bodyString)];
					case 1:
						compressed = _a.sent();
						if (compressed) {
							headers["Content-Encoding"] = "gzip";
							body = compressed;
						}
						_a.label = 2;
					case 2:
						headers = __assign$1(__assign$1({}, this.customHeaders), headers);
						options = {
							headers,
							body,
							method: "POST"
						};
						return [4, fetch(serverUrl, options)];
					case 3:
						response = _a.sent();
						return [4, response.text()];
					case 4:
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
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/transports/send-beacon.js
/**
* SendBeacon does not support custom headers (e.g. Content-Encoding: gzip),
* so request body compression is not applied even when enableRequestBodyCompression is true.
*/
var SendBeaconTransport = function(_super) {
	__extends(SendBeaconTransport, _super);
	function SendBeaconTransport() {
		return _super.call(this) || this;
	}
	SendBeaconTransport.prototype.send = function(serverUrl, payload, _enableRequestBodyCompression) {
		if (_enableRequestBodyCompression === void 0) _enableRequestBodyCompression = false;
		return __awaiter(this, void 0, void 0, function() {
			var _this = this;
			return __generator(this, function(_a) {
				return [2, new Promise(function(resolve, reject) {
					var globalScope = getGlobalScope();
					/* istanbul ignore if */
					if (!(globalScope === null || globalScope === void 0 ? void 0 : globalScope.navigator.sendBeacon)) throw new Error("SendBeaconTransport is not supported");
					try {
						var data = JSON.stringify(payload);
						if (globalScope.navigator.sendBeacon(serverUrl, data)) return resolve(_this.buildResponse({
							code: 200,
							events_ingested: payload.events.length,
							payload_size_bytes: data.length,
							server_upload_time: Date.now()
						}));
						return resolve(_this.buildResponse({ code: 500 }));
					} catch (e) {
						reject(e);
					}
				})];
			});
		});
	};
	return SendBeaconTransport;
}(BaseTransport);
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/cookie-migration/index.js
var parseLegacyCookies = function(apiKey, cookieStorage, deleteLegacyCookies) {
	if (deleteLegacyCookies === void 0) deleteLegacyCookies = true;
	return __awaiter(void 0, void 0, void 0, function() {
		var cookieName, cookies, _a, deviceId, userId, optOut, sessionId, lastEventTime, lastEventId;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					cookieName = getOldCookieName(apiKey);
					return [4, cookieStorage.getRaw(cookieName)];
				case 1:
					cookies = _b.sent();
					if (!cookies) return [2, { optOut: false }];
					if (!deleteLegacyCookies) return [3, 3];
					return [4, cookieStorage.remove(cookieName)];
				case 2:
					_b.sent();
					_b.label = 3;
				case 3:
					_a = __read$1(cookies.split("."), 6), deviceId = _a[0], userId = _a[1], optOut = _a[2], sessionId = _a[3], lastEventTime = _a[4], lastEventId = _a[5];
					return [2, {
						deviceId,
						userId: decode(userId),
						sessionId: parseTime(sessionId),
						lastEventId: parseTime(lastEventId),
						lastEventTime: parseTime(lastEventTime),
						optOut: Boolean(optOut)
					}];
			}
		});
	});
};
var parseTime = function(num) {
	var integer = parseInt(num, 32);
	if (isNaN(integer)) return;
	return integer;
};
var decode = function(value) {
	if (!atob || !escape || !value) return;
	try {
		return decodeURIComponent(escape(atob(value)));
	} catch (_a) {
		return;
	}
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/constants.js
var DEFAULT_EVENT_PREFIX = "[Amplitude]";
"".concat(DEFAULT_EVENT_PREFIX, " Page Viewed");
var DEFAULT_FORM_START_EVENT = "".concat(DEFAULT_EVENT_PREFIX, " Form Started");
var DEFAULT_FORM_SUBMIT_EVENT = "".concat(DEFAULT_EVENT_PREFIX, " Form Submitted");
var DEFAULT_FILE_DOWNLOAD_EVENT = "".concat(DEFAULT_EVENT_PREFIX, " File Downloaded");
var DEFAULT_SESSION_START_EVENT = "session_start";
var DEFAULT_SESSION_END_EVENT = "session_end";
var FILE_EXTENSION = "".concat(DEFAULT_EVENT_PREFIX, " File Extension");
var FILE_NAME = "".concat(DEFAULT_EVENT_PREFIX, " File Name");
var LINK_ID = "".concat(DEFAULT_EVENT_PREFIX, " Link ID");
var LINK_TEXT = "".concat(DEFAULT_EVENT_PREFIX, " Link Text");
var LINK_URL = "".concat(DEFAULT_EVENT_PREFIX, " Link URL");
var FORM_ID = "".concat(DEFAULT_EVENT_PREFIX, " Form ID");
var FORM_NAME = "".concat(DEFAULT_EVENT_PREFIX, " Form Name");
var FORM_DESTINATION = "".concat(DEFAULT_EVENT_PREFIX, " Form Destination");
var DEFAULT_IDENTITY_STORAGE = "cookie";
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/attribution/helpers.js
var domainWithoutSubdomain = function(domain) {
	var parts = domain.split(".");
	if (parts.length <= 2) return domain;
	return parts.slice(parts.length - 2, parts.length).join(".");
};
var isDirectTraffic = function(current) {
	return Object.values(current).every(function(value) {
		return !value;
	});
};
var isEmptyCampaign = function(campaign) {
	var campaignWithoutReferrer = __assign$1(__assign$1({}, campaign), {
		referring_domain: void 0,
		referrer: void 0
	});
	return Object.values(campaignWithoutReferrer).every(function(value) {
		return !value;
	});
};
var isNewCampaign = function(current, previous, options, logger, isNewSession, topLevelDomain) {
	if (isNewSession === void 0) isNewSession = true;
	current.referrer;
	var referring_domain = current.referring_domain, currentCampaign = __rest(current, ["referrer", "referring_domain"]), _a = previous || {};
	_a.referrer;
	var prevReferringDomain = _a.referring_domain, previousCampaign = __rest(_a, ["referrer", "referring_domain"]);
	var excludeInternalReferrers = options.excludeInternalReferrers;
	if (excludeInternalReferrers) {
		var condition = getExcludeInternalReferrersCondition(excludeInternalReferrers, logger);
		if (!(condition instanceof TypeError) && current.referring_domain && isInternalReferrer(current.referring_domain, topLevelDomain)) {
			if (condition === "always") {
				debugLogInternalReferrerExclude(condition, current.referring_domain, logger);
				return false;
			} else if (condition === "ifEmptyCampaign" && isEmptyCampaign(current)) {
				debugLogInternalReferrerExclude(condition, current.referring_domain, logger);
				return false;
			}
		}
	}
	if (isExcludedReferrer(options.excludeReferrers, current.referring_domain)) {
		logger.debug("This is not a new campaign because ".concat(current.referring_domain, " is in the exclude referrer list."));
		return false;
	}
	if (!isNewSession && isDirectTraffic(current) && previous) {
		logger.debug("This is not a new campaign because this is a direct traffic in the same session.");
		return false;
	}
	var hasNewCampaign = JSON.stringify(currentCampaign) !== JSON.stringify(previousCampaign);
	var hasNewDomain = domainWithoutSubdomain(referring_domain || "") !== domainWithoutSubdomain(prevReferringDomain || "");
	var result = !previous || hasNewCampaign || hasNewDomain;
	if (!result) logger.debug("This is not a new campaign because it's the same as the previous one.");
	else logger.debug("This is a new campaign. An $identify event will be sent.");
	return result;
};
var isExcludedReferrer = function(excludeReferrers, referringDomain) {
	if (excludeReferrers === void 0) excludeReferrers = [];
	if (referringDomain === void 0) referringDomain = "";
	return excludeReferrers.some(function(value) {
		return value instanceof RegExp ? value.test(referringDomain) : value === referringDomain;
	});
};
var isSubdomainOf = function(subDomain, domain) {
	var cookieDomainWithLeadingDot = domain.startsWith(".") ? domain : ".".concat(domain);
	if ((subDomain.startsWith(".") ? subDomain : ".".concat(subDomain)).endsWith(cookieDomainWithLeadingDot)) return true;
	return false;
};
var createCampaignEvent = function(campaign, options) {
	var campaignParameters = __assign$1(__assign$1({}, BASE_CAMPAIGN), campaign);
	return createIdentifyEvent(Object.entries(campaignParameters).reduce(function(identify, _a) {
		var _b;
		var _c = __read$1(_a, 2), key = _c[0], value = _c[1];
		identify.setOnce("initial_".concat(key), (_b = value !== null && value !== void 0 ? value : options.initialEmptyValue) !== null && _b !== void 0 ? _b : "EMPTY");
		if (value) return identify.set(key, value);
		return identify.unset(key);
	}, new Identify()));
};
var getDefaultExcludedReferrers = function(cookieDomain) {
	var domain = cookieDomain;
	if (domain) {
		if (domain.startsWith(".")) domain = domain.substring(1);
		return [new RegExp("".concat(domain.replace(".", "\\."), "$"))];
	}
	return [];
};
/**
* Parses the excludeInternalReferrers configuration to determine the condition on which to
* exclude internal referrers for campaign attribution.
*
* If the config is invalid type, log and return a TypeError.
*
* (this does explicit type checking so don't have to rely on TS compiler to catch invalid types)
*
* @param excludeInternalReferrers - attribution.excludeInternalReferrers configuration
* @param logger - logger instance to log error when TypeError
* @returns The condition if the config is valid, TypeError if the config is invalid.
*/
var getExcludeInternalReferrersCondition = function(excludeInternalReferrers, logger) {
	if (excludeInternalReferrers === true) return EXCLUDE_INTERNAL_REFERRERS_CONDITIONS.always;
	if (typeof excludeInternalReferrers === "object") {
		var condition = excludeInternalReferrers.condition;
		if (typeof condition === "string" && Object.keys(EXCLUDE_INTERNAL_REFERRERS_CONDITIONS).includes(condition)) return condition;
		else if (typeof condition === "undefined") return EXCLUDE_INTERNAL_REFERRERS_CONDITIONS.always;
	}
	var errorMessage = "Invalid configuration provided for attribution.excludeInternalReferrers: ".concat(JSON.stringify(excludeInternalReferrers));
	logger.error(errorMessage);
	return new TypeError(errorMessage);
};
function debugLogInternalReferrerExclude(condition, referringDomain, logger) {
	var baseMessage = "This is not a new campaign because referring_domain=".concat(referringDomain, " is on the same domain as the current page and it is configured to exclude internal referrers");
	if (condition === "always") logger.debug(baseMessage);
	else if (condition === "ifEmptyCampaign") logger.debug("".concat(baseMessage, " with empty campaign parameters"));
}
var KNOWN_2LDS = [
	"ac.in",
	"ac.jp",
	"ac.kr",
	"ac.th",
	"ac.uk",
	"ac.za",
	"appspot.com",
	"asn.au",
	"azurewebsites.net",
	"cloudfront.net",
	"myshopify.com",
	"blogspot.com",
	"co.ca",
	"co.in",
	"co.jp",
	"co.kr",
	"co.nz",
	"co.th",
	"co.uk",
	"co.za",
	"com.ar",
	"com.au",
	"com.br",
	"com.cn",
	"com.hk",
	"com.in",
	"com.jp",
	"com.kr",
	"com.mx",
	"com.pl",
	"com.sg",
	"com.tr",
	"com.tw",
	"ed.jp",
	"edu.au",
	"edu.br",
	"edu.cn",
	"edu.hk",
	"edu.sg",
	"edu.th",
	"edu.tr",
	"edu.tw",
	"firebaseapp.com",
	"fly.dev",
	"gc.ca",
	"geek.nz",
	"github.io",
	"gitlab.io",
	"go.jp",
	"go.kr",
	"go.th",
	"gob.ar",
	"gob.mx",
	"gov.au",
	"gov.br",
	"gov.cn",
	"gov.hk",
	"gov.in",
	"gov.pl",
	"gov.sg",
	"gov.tr",
	"gov.tw",
	"gov.uk",
	"gov.za",
	"govt.nz",
	"gr.jp",
	"herokuapp.com",
	"id.au",
	"idv.hk",
	"iwi.nz",
	"lg.jp",
	"ltd.uk",
	"maori.nz",
	"me.uk",
	"mil.kr",
	"ne.jp",
	"ne.kr",
	"net.au",
	"net.br",
	"net.cn",
	"net.hk",
	"net.in",
	"net.nz",
	"net.pl",
	"net.sg",
	"net.tr",
	"net.tw",
	"net.za",
	"onrender.com",
	"or.jp",
	"or.kr",
	"or.th",
	"org.ar",
	"org.au",
	"org.br",
	"org.cn",
	"org.hk",
	"org.in",
	"org.mx",
	"org.nz",
	"org.pl",
	"org.sg",
	"org.tw",
	"org.uk",
	"org.za",
	"pages.dev",
	"pe.kr",
	"plc.uk",
	"re.kr",
	"res.in",
	"sch.uk",
	"vercel.app",
	"netlify.app",
	"workers.dev"
];
var getDomain = function(hostnameParam) {
	var _a, _b;
	/* istanbul ignore next */
	var hostname = hostnameParam || ((_b = (_a = getGlobalScope()) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.hostname);
	if (!hostname) return "";
	var parts = hostname.split(".");
	var tld = parts[parts.length - 1];
	var name = parts[parts.length - 2];
	if (KNOWN_2LDS.find(function(tld) {
		return hostname.endsWith(".".concat(tld));
	})) {
		tld = parts[parts.length - 2] + "." + parts[parts.length - 1];
		name = parts[parts.length - 3];
	}
	if (!name) return tld;
	return "".concat(name, ".").concat(tld);
};
var isInternalReferrer = function(referringDomain, topLevelDomain) {
	var globalScope = getGlobalScope();
	/* istanbul ignore if */
	if (!globalScope) return false;
	return isSubdomainOf(referringDomain, (topLevelDomain || "").trim() || getDomain(globalScope.location.hostname));
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/config.js
var BrowserConfig = function(_super) {
	__extends(BrowserConfig, _super);
	function BrowserConfig(apiKey, appVersion, cookieStorage, cookieOptions, defaultTracking, autocapture, deviceId, flushIntervalMillis, flushMaxRetries, flushQueueSize, identityStorage, ingestionMetadata, instanceName, lastEventId, lastEventTime, loggerProvider, logLevel, minIdLength, offline, optOut, partnerId, plan, serverUrl, serverZone, sessionId, deferredSessionId, sessionTimeout, storageProvider, trackingOptions, transport, useBatch, fetchRemoteConfig, userId, pageCounter, debugLogsEnabled, networkTrackingOptions, identify, enableDiagnostics, diagnosticsSampleRate, diagnosticsClient, remoteConfig, topLevelDomain, enableRequestBodyCompression, _enableRequestBodyCompressionExperimental, customEnrichment) {
		if (cookieStorage === void 0) cookieStorage = new MemoryStorage();
		if (cookieOptions === void 0) cookieOptions = {
			domain: "",
			expiration: 365,
			sameSite: "Lax",
			secure: false,
			upgrade: true
		};
		if (flushIntervalMillis === void 0) flushIntervalMillis = 1e3;
		if (flushMaxRetries === void 0) flushMaxRetries = 5;
		if (flushQueueSize === void 0) flushQueueSize = 30;
		if (identityStorage === void 0) identityStorage = DEFAULT_IDENTITY_STORAGE;
		if (loggerProvider === void 0) loggerProvider = new Logger();
		if (logLevel === void 0) logLevel = LogLevel.Warn;
		if (offline === void 0) offline = false;
		if (optOut === void 0) optOut = false;
		if (serverUrl === void 0) serverUrl = "";
		if (serverZone === void 0) serverZone = "US";
		if (sessionTimeout === void 0) sessionTimeout = 1800 * 1e3;
		if (storageProvider === void 0) storageProvider = new LocalStorage({ loggerProvider });
		if (trackingOptions === void 0) trackingOptions = {
			ipAddress: true,
			language: true,
			platform: true
		};
		if (transport === void 0) transport = "fetch";
		if (useBatch === void 0) useBatch = false;
		if (fetchRemoteConfig === void 0) fetchRemoteConfig = true;
		if (enableDiagnostics === void 0) enableDiagnostics = true;
		if (diagnosticsSampleRate === void 0) diagnosticsSampleRate = 0;
		if (enableRequestBodyCompression === void 0) enableRequestBodyCompression = false;
		if (_enableRequestBodyCompressionExperimental === void 0) _enableRequestBodyCompressionExperimental = false;
		var _this = this;
		var _a;
		_this = _super.call(this, {
			apiKey,
			storageProvider,
			transportProvider: createTransport(transport)
		}) || this;
		_this.apiKey = apiKey;
		_this.appVersion = appVersion;
		_this.cookieOptions = cookieOptions;
		_this.defaultTracking = defaultTracking;
		_this.autocapture = autocapture;
		_this.flushIntervalMillis = flushIntervalMillis;
		_this.flushMaxRetries = flushMaxRetries;
		_this.flushQueueSize = flushQueueSize;
		_this.identityStorage = identityStorage;
		_this.ingestionMetadata = ingestionMetadata;
		_this.instanceName = instanceName;
		_this.loggerProvider = loggerProvider;
		_this.logLevel = logLevel;
		_this.minIdLength = minIdLength;
		_this.offline = offline;
		_this.partnerId = partnerId;
		_this.plan = plan;
		_this.serverUrl = serverUrl;
		_this.serverZone = serverZone;
		_this.sessionTimeout = sessionTimeout;
		_this.storageProvider = storageProvider;
		_this.trackingOptions = trackingOptions;
		_this.transport = transport;
		_this.useBatch = useBatch;
		_this.fetchRemoteConfig = fetchRemoteConfig;
		_this.networkTrackingOptions = networkTrackingOptions;
		_this.identify = identify;
		_this.enableDiagnostics = enableDiagnostics;
		_this.diagnosticsSampleRate = diagnosticsSampleRate;
		_this.diagnosticsClient = diagnosticsClient;
		_this.remoteConfig = remoteConfig;
		_this.topLevelDomain = topLevelDomain;
		_this.enableRequestBodyCompression = enableRequestBodyCompression;
		_this._enableRequestBodyCompressionExperimental = _enableRequestBodyCompressionExperimental;
		_this.customEnrichment = customEnrichment;
		_this.version = VERSION$1;
		_this._optOut = false;
		_this._cookieStorage = cookieStorage;
		_this.deviceId = deviceId;
		_this.lastEventId = lastEventId;
		_this.lastEventTime = lastEventTime;
		_this.optOut = optOut;
		_this.deferredSessionId = deferredSessionId;
		_this.sessionId = sessionId;
		_this.pageCounter = pageCounter;
		_this.userId = userId;
		_this.debugLogsEnabled = debugLogsEnabled;
		_this.loggerProvider.enable(debugLogsEnabled ? LogLevel.Debug : _this.logLevel);
		_this.networkTrackingOptions = networkTrackingOptions;
		_this.identify = identify;
		_this.enableDiagnostics = enableDiagnostics;
		_this.diagnosticsSampleRate = diagnosticsSampleRate;
		_this.diagnosticsClient = diagnosticsClient;
		var _fetchRemoteConfig = (_a = remoteConfig === null || remoteConfig === void 0 ? void 0 : remoteConfig.fetchRemoteConfig) !== null && _a !== void 0 ? _a : fetchRemoteConfig;
		_this.remoteConfig = _this.remoteConfig || {};
		_this.remoteConfig.fetchRemoteConfig = _fetchRemoteConfig;
		_this.fetchRemoteConfig = _fetchRemoteConfig;
		_this.topLevelDomain = topLevelDomain || getDomain();
		return _this;
	}
	Object.defineProperty(BrowserConfig.prototype, "cookieStorage", {
		get: function() {
			return this._cookieStorage;
		},
		set: function(cookieStorage) {
			if (this._cookieStorage !== cookieStorage) {
				this._cookieStorage = cookieStorage;
				this.updateStorage();
			}
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(BrowserConfig.prototype, "deviceId", {
		get: function() {
			return this._deviceId;
		},
		set: function(deviceId) {
			if (this._deviceId !== deviceId) {
				this._deviceId = deviceId;
				this.updateStorage();
			}
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(BrowserConfig.prototype, "userId", {
		get: function() {
			return this._userId;
		},
		set: function(userId) {
			if (this._userId !== userId) {
				this._userId = userId;
				this.updateStorage();
			}
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(BrowserConfig.prototype, "sessionId", {
		get: function() {
			return this._sessionId;
		},
		set: function(sessionId) {
			if (this._sessionId !== sessionId) {
				this._sessionId = sessionId;
				if (sessionId !== void 0 && this._deferredSessionId !== void 0) this._deferredSessionId = void 0;
				this.updateStorage();
			}
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(BrowserConfig.prototype, "deferredSessionId", {
		get: function() {
			return this._deferredSessionId;
		},
		set: function(deferredSessionId) {
			if (this._deferredSessionId !== deferredSessionId && deferredSessionId !== this.sessionId) {
				this._deferredSessionId = deferredSessionId;
				this.updateStorage();
			}
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(BrowserConfig.prototype, "optOut", {
		get: function() {
			return this._optOut;
		},
		set: function(optOut) {
			if (this._optOut !== optOut) {
				this._optOut = optOut;
				this.updateStorage();
			}
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(BrowserConfig.prototype, "lastEventTime", {
		get: function() {
			return this._lastEventTime;
		},
		set: function(lastEventTime) {
			if (this._lastEventTime !== lastEventTime) {
				this._lastEventTime = lastEventTime;
				this.updateStorage();
			}
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(BrowserConfig.prototype, "lastEventId", {
		get: function() {
			return this._lastEventId;
		},
		set: function(lastEventId) {
			if (this._lastEventId !== lastEventId) {
				this._lastEventId = lastEventId;
				this.updateStorage();
			}
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(BrowserConfig.prototype, "pageCounter", {
		get: function() {
			return this._pageCounter;
		},
		set: function(pageCounter) {
			if (this._pageCounter !== pageCounter) {
				this._pageCounter = pageCounter;
				this.updateStorage();
			}
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(BrowserConfig.prototype, "debugLogsEnabled", {
		set: function(debugLogsEnabled) {
			if (this._debugLogsEnabled !== debugLogsEnabled) {
				this._debugLogsEnabled = debugLogsEnabled;
				this.updateStorage();
			}
		},
		enumerable: false,
		configurable: true
	});
	BrowserConfig.prototype.updateStorage = function() {
		var cache = {
			deviceId: this._deviceId,
			userId: this._userId,
			sessionId: this._sessionId,
			deferredSessionId: this._deferredSessionId,
			optOut: this._optOut,
			lastEventTime: this._lastEventTime,
			lastEventId: this._lastEventId,
			pageCounter: this._pageCounter,
			debugLogsEnabled: this._debugLogsEnabled,
			cookieDomain: void 0
		};
		if (this.cookieStorage instanceof CookieStorage) cache.cookieDomain = this.cookieStorage.options.domain;
		this.cookieStorage.set(getCookieName(this.apiKey), cache);
	};
	return BrowserConfig;
}(Config);
var useBrowserConfig = function(apiKey, options, amplitudeInstance, diagnosticsClient, earlyConfig) {
	if (options === void 0) options = {};
	return __awaiter(void 0, void 0, void 0, function() {
		var identityStorage, defaultCookieDomain, cookieOptions, cookieConfig, cookieStorage, legacyCookies, previousCookies, queryParams, ampTimestamp, isWithinTimeLimit, deviceId, lastEventId, lastEventTime, optOut, sessionId, deferredSessionId, userId, trackingOptions, pageCounter, debugLogsEnabled, browserConfig;
		var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
		return __generator(this, function(_6) {
			switch (_6.label) {
				case 0:
					identityStorage = options.identityStorage || "cookie";
					defaultCookieDomain = "";
					if (!(identityStorage === "cookie" && !((_a = options.cookieOptions) === null || _a === void 0 ? void 0 : _a.domain) && ((_b = options.cookieOptions) === null || _b === void 0 ? void 0 : _b.domain) !== "")) return [3, 2];
					return [4, getTopLevelDomain(void 0, diagnosticsClient)];
				case 1:
					defaultCookieDomain = _6.sent();
					_6.label = 2;
				case 2:
					cookieOptions = __assign$1({
						domain: (_d = (_c = options.cookieOptions) === null || _c === void 0 ? void 0 : _c.domain) !== null && _d !== void 0 ? _d : defaultCookieDomain,
						expiration: 365,
						sameSite: "Lax",
						secure: false,
						upgrade: true
					}, options.cookieOptions);
					cookieConfig = {
						duplicateResolverFn: function(value) {
							var decodedValue = decodeCookieValue(value);
							if (!decodedValue) return false;
							return isDomainEqual(JSON.parse(decodedValue).cookieDomain, cookieOptions.domain);
						},
						diagnosticsClient
					};
					cookieStorage = createCookieStorage(options.identityStorage, cookieOptions, cookieConfig);
					return [4, parseLegacyCookies(apiKey, cookieStorage, (_f = (_e = options.cookieOptions) === null || _e === void 0 ? void 0 : _e.upgrade) !== null && _f !== void 0 ? _f : true)];
				case 3:
					legacyCookies = _6.sent();
					return [4, cookieStorage.get(getCookieName(apiKey))];
				case 4:
					previousCookies = _6.sent();
					queryParams = getQueryParams();
					ampTimestamp = queryParams.ampTimestamp ? Number(queryParams.ampTimestamp) : void 0;
					isWithinTimeLimit = ampTimestamp ? Date.now() < ampTimestamp : true;
					deviceId = (_l = (_k = (_j = (_g = options.deviceId) !== null && _g !== void 0 ? _g : isWithinTimeLimit ? (_h = queryParams.ampDeviceId) !== null && _h !== void 0 ? _h : queryParams.deviceId : void 0) !== null && _j !== void 0 ? _j : previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.deviceId) !== null && _k !== void 0 ? _k : legacyCookies.deviceId) !== null && _l !== void 0 ? _l : UUID();
					lastEventId = (_m = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.lastEventId) !== null && _m !== void 0 ? _m : legacyCookies.lastEventId;
					lastEventTime = (_o = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.lastEventTime) !== null && _o !== void 0 ? _o : legacyCookies.lastEventTime;
					optOut = (_q = (_p = options.optOut) !== null && _p !== void 0 ? _p : previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.optOut) !== null && _q !== void 0 ? _q : legacyCookies.optOut;
					sessionId = (_r = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.sessionId) !== null && _r !== void 0 ? _r : legacyCookies.sessionId;
					deferredSessionId = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.deferredSessionId;
					userId = (_t = (_s = options.userId) !== null && _s !== void 0 ? _s : previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.userId) !== null && _t !== void 0 ? _t : legacyCookies.userId;
					amplitudeInstance.previousSessionDeviceId = (_u = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.deviceId) !== null && _u !== void 0 ? _u : legacyCookies.deviceId;
					amplitudeInstance.previousSessionUserId = (_v = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.userId) !== null && _v !== void 0 ? _v : legacyCookies.userId;
					trackingOptions = {
						ipAddress: (_x = (_w = options.trackingOptions) === null || _w === void 0 ? void 0 : _w.ipAddress) !== null && _x !== void 0 ? _x : true,
						language: (_z = (_y = options.trackingOptions) === null || _y === void 0 ? void 0 : _y.language) !== null && _z !== void 0 ? _z : true,
						platform: (_1 = (_0 = options.trackingOptions) === null || _0 === void 0 ? void 0 : _0.platform) !== null && _1 !== void 0 ? _1 : true
					};
					pageCounter = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.pageCounter;
					debugLogsEnabled = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.debugLogsEnabled;
					if (options.autocapture !== void 0) options.defaultTracking = options.autocapture;
					browserConfig = new BrowserConfig(apiKey, options.appVersion, cookieStorage, cookieOptions, options.defaultTracking, options.autocapture, deviceId, options.flushIntervalMillis, options.flushMaxRetries, options.flushQueueSize, identityStorage, options.ingestionMetadata, options.instanceName, lastEventId, lastEventTime, (_2 = earlyConfig === null || earlyConfig === void 0 ? void 0 : earlyConfig.loggerProvider) !== null && _2 !== void 0 ? _2 : options.loggerProvider, options.logLevel, options.minIdLength, options.offline, optOut, options.partnerId, options.plan, options.serverUrl, (_3 = earlyConfig === null || earlyConfig === void 0 ? void 0 : earlyConfig.serverZone) !== null && _3 !== void 0 ? _3 : options.serverZone, sessionId, deferredSessionId, options.sessionTimeout, options.storageProvider, trackingOptions, options.transport, options.useBatch, options.fetchRemoteConfig, userId, pageCounter, debugLogsEnabled, options.networkTrackingOptions, options.identify, (_4 = earlyConfig === null || earlyConfig === void 0 ? void 0 : earlyConfig.enableDiagnostics) !== null && _4 !== void 0 ? _4 : options.enableDiagnostics, (_5 = earlyConfig === null || earlyConfig === void 0 ? void 0 : earlyConfig.diagnosticsSampleRate) !== null && _5 !== void 0 ? _5 : amplitudeInstance._diagnosticsSampleRate, diagnosticsClient, options.remoteConfig, defaultCookieDomain, options.enableRequestBodyCompression, amplitudeInstance._enableRequestBodyCompressionExperimentalValue, options.customEnrichment);
					return [4, browserConfig.storageProvider.isEnabled()];
				case 5:
					if (!_6.sent()) {
						browserConfig.loggerProvider.warn("Storage provider ".concat(browserConfig.storageProvider.constructor.name, " is not enabled. Falling back to MemoryStorage."));
						browserConfig.storageProvider = new MemoryStorage();
					}
					return [2, browserConfig];
			}
		});
	});
};
var createCookieStorage = function(identityStorage, cookieOptions, cookieConfig) {
	if (identityStorage === void 0) identityStorage = DEFAULT_IDENTITY_STORAGE;
	if (cookieOptions === void 0) cookieOptions = {};
	switch (identityStorage) {
		case "localStorage": return new LocalStorage();
		case "sessionStorage": return new SessionStorage();
		case "none": return new MemoryStorage();
		default: return new CookieStorage(__assign$1(__assign$1({}, cookieOptions), { expirationDays: cookieOptions.expiration }), cookieConfig);
	}
};
/**
* Determines whether to fetch remote config based on options.
* Extracted to allow early determination before useBrowserConfig is called.
*/
var shouldFetchRemoteConfig = function(options) {
	var _a, _b;
	if (options === void 0) options = {};
	if (((_a = options.remoteConfig) === null || _a === void 0 ? void 0 : _a.fetchRemoteConfig) === true) return true;
	else if (((_b = options.remoteConfig) === null || _b === void 0 ? void 0 : _b.fetchRemoteConfig) === false || options.fetchRemoteConfig === false) return false;
	else return true;
};
var createTransport = function(transport) {
	var type = typeof transport === "object" ? transport.type : transport;
	var headers = typeof transport === "object" ? transport.headers : void 0;
	if (type === "xhr") return new XHRTransport(headers);
	if (type === "beacon") return new SendBeaconTransport();
	return new FetchTransport(headers);
};
var getTopLevelDomain = function(url, diagnosticsClient) {
	return __awaiter(void 0, void 0, void 0, function() {
		var host, parts, levels, skipLevel, i, i, domain, result, e_1;
		return __generator(this, function(_a) {
			switch (_a.label) {
				case 0: return [4, new CookieStorage(void 0, { diagnosticsClient }).isEnabled()];
				case 1:
					if (!_a.sent() || !url && (typeof location === "undefined" || !location.hostname)) return [2, ""];
					host = url !== null && url !== void 0 ? url : location.hostname;
					parts = host.split(".");
					if (parts.length === 1) return [2, ""];
					levels = [];
					skipLevel = 1;
					if (KNOWN_2LDS.find(function(tld) {
						return host.endsWith(".".concat(tld));
					})) skipLevel = 2;
					for (i = parts.length - skipLevel - 1; i >= 0; --i) levels.push(parts.slice(i).join("."));
					i = 0;
					_a.label = 2;
				case 2:
					if (!(i < levels.length)) return [3, 7];
					domain = levels[i];
					_a.label = 3;
				case 3:
					_a.trys.push([
						3,
						5,
						,
						6
					]);
					return [4, CookieStorage.isDomainWritable(domain)];
				case 4:
					result = _a.sent();
					if (result) return [2, "." + domain];
					return [3, 6];
				case 5:
					e_1 = _a.sent();
					/* istanbul ignore if */
					if (diagnosticsClient) diagnosticsClient.recordEvent("cookies.tld.failure", {
						reason: "Unexpected exception checking domain is writable: ".concat(domain),
						error: e_1 instanceof Error ? e_1.message : String(e_1)
					});
					return [3, 6];
				case 6:
					i++;
					return [3, 2];
				case 7:
					if (diagnosticsClient) diagnosticsClient.recordEvent("cookies.tld.failure", { reason: "Could not determine TLD for host ".concat(host) });
					return [2, ""];
			}
		});
	});
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-page-view-tracking-browser@2.9.1/node_modules/@amplitude/plugin-page-view-tracking-browser/lib/esm/utils.js
var omitUndefined = function(input) {
	var obj = {};
	for (var key in input) {
		var val = input[key];
		if (val) obj[key] = val;
	}
	return obj;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-page-view-tracking-browser@2.9.1/node_modules/@amplitude/plugin-page-view-tracking-browser/lib/esm/page-view-tracking.js
var defaultPageViewEvent = "[Amplitude] Page Viewed";
var PAGE_VIEW_SESSION_STORAGE_KEY$1 = "AMP_PAGE_VIEW";
var pageViewTrackingPlugin = function(options) {
	if (options === void 0) options = {};
	var amplitude;
	var globalScope = getGlobalScope();
	var loggerProvider = void 0;
	var isTracking = false;
	var localConfig;
	var sessionStorage;
	var trackOn = options.trackOn, trackHistoryChanges = options.trackHistoryChanges, _a = options.eventType, eventType = _a === void 0 ? defaultPageViewEvent : _a;
	var getDecodeURI = function(locationStr) {
		var decodedLocationStr = locationStr;
		try {
			decodedLocationStr = decodeURI(locationStr);
		} catch (e) {
			/* istanbul ignore next */
			loggerProvider === null || loggerProvider === void 0 || loggerProvider.error("Malformed URI sequence: ", e);
		}
		return decodedLocationStr;
	};
	var createPageViewEvent = function(pageViewId) {
		return __awaiter(void 0, void 0, void 0, function() {
			var locationHREF, _a;
			var _b;
			return __generator(this, function(_c) {
				switch (_c.label) {
					case 0:
						locationHREF = getDecodeURI(typeof location !== "undefined" && location.href || "");
						_b = { event_type: eventType };
						_a = [{}];
						return [4, getCampaignParams()];
					case 1: return [2, (_b.event_properties = __assign$1.apply(void 0, [__assign$1.apply(void 0, _a.concat([_c.sent()])), {
						"[Amplitude] Page Domain": typeof location !== "undefined" && location.hostname || "",
						"[Amplitude] Page Location": locationHREF,
						"[Amplitude] Page Path": typeof location !== "undefined" && getDecodeURI(location.pathname) || "",
						"[Amplitude] Page Title": getPageTitle(replaceSensitiveString),
						"[Amplitude] Page URL": locationHREF.split("?")[0],
						"[Amplitude] Page View ID": pageViewId
					}]), _b)];
				}
			});
		});
	};
	var shouldTrackOnPageLoad = function() {
		return typeof trackOn === "undefined" || typeof trackOn === "function" && trackOn();
	};
	/* istanbul ignore next */
	var previousURL = typeof location !== "undefined" ? location.href : null;
	var trackHistoryPageView = function() {
		return __awaiter(void 0, void 0, void 0, function() {
			var newURL, shouldTrackPageView, pageViewId, _b, _c;
			return __generator(this, function(_d) {
				switch (_d.label) {
					case 0:
						newURL = location.href;
						shouldTrackPageView = shouldTrackHistoryPageView(trackHistoryChanges, newURL, previousURL || "") && shouldTrackOnPageLoad();
						previousURL = newURL;
						if (!shouldTrackPageView) return [3, 4];
						pageViewId = void 0;
						if (sessionStorage) {
							pageViewId = UUID();
							sessionStorage.set(PAGE_VIEW_SESSION_STORAGE_KEY$1, { pageViewId });
						}
						/* istanbul ignore next */
						loggerProvider === null || loggerProvider === void 0 || loggerProvider.log("Tracking page view event");
						if (!(amplitude === null || amplitude === void 0)) return [3, 1];
						return [3, 3];
					case 1:
						_c = (_b = amplitude).track;
						return [4, createPageViewEvent(pageViewId)];
					case 2:
						_c.apply(_b, [_d.sent()]);
						_d.label = 3;
					case 3: _d.label = 4;
					case 4: return [2];
				}
			});
		});
	};
	/* istanbul ignore next */
	var handlePageChange = function() {
		trackHistoryPageView();
	};
	return {
		name: "@amplitude/plugin-page-view-tracking-browser",
		type: "enrichment",
		setup: function(config, client) {
			return __awaiter(void 0, void 0, void 0, function() {
				var pageViewId, _a, _b;
				return __generator(this, function(_c) {
					switch (_c.label) {
						case 0:
							amplitude = client;
							localConfig = config;
							loggerProvider = config.loggerProvider;
							loggerProvider.log("Installing @amplitude/plugin-page-view-tracking-browser");
							isTracking = true;
							if (globalScope) {
								sessionStorage = new BrowserStorage(globalScope.sessionStorage);
								globalScope.addEventListener("popstate", handlePageChange);
								/* istanbul ignore next */
								globalScope.history.pushState = new Proxy(globalScope.history.pushState, { apply: function(target, thisArg, _a) {
									var _b = __read$1(_a, 3), state = _b[0], unused = _b[1], url = _b[2];
									target.apply(thisArg, [
										state,
										unused,
										url
									]);
									if (isTracking) handlePageChange();
								} });
							}
							if (!shouldTrackOnPageLoad()) return [3, 2];
							loggerProvider.log("Tracking page view event");
							pageViewId = void 0;
							if (sessionStorage) {
								pageViewId = UUID();
								sessionStorage.set(PAGE_VIEW_SESSION_STORAGE_KEY$1, { pageViewId });
							}
							_b = (_a = amplitude).track;
							return [4, createPageViewEvent(pageViewId)];
						case 1:
							_b.apply(_a, [_c.sent()]);
							_c.label = 2;
						case 2: return [2];
					}
				});
			});
		},
		execute: function(event) {
			return __awaiter(void 0, void 0, void 0, function() {
				var pageViewId, pageViewSession, pageViewEvent;
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0:
							if (!(trackOn === "attribution" && isCampaignEvent(event))) return [3, 4];
							/* istanbul ignore next */ loggerProvider === null || loggerProvider === void 0 || loggerProvider.log("Enriching campaign event to page view event with campaign parameters");
							pageViewId = void 0;
							if (!sessionStorage) return [3, 2];
							return [4, sessionStorage.get(PAGE_VIEW_SESSION_STORAGE_KEY$1)];
						case 1:
							pageViewSession = _a.sent();
							pageViewId = pageViewSession === null || pageViewSession === void 0 ? void 0 : pageViewSession.pageViewId;
							_a.label = 2;
						case 2: return [4, createPageViewEvent(pageViewId)];
						case 3:
							pageViewEvent = _a.sent();
							event.event_type = pageViewEvent.event_type;
							event.event_properties = __assign$1(__assign$1({}, event.event_properties), pageViewEvent.event_properties);
							_a.label = 4;
						case 4:
							if (localConfig && event.event_type === eventType) {
								localConfig.pageCounter = !localConfig.pageCounter ? 1 : localConfig.pageCounter + 1;
								event.event_properties = __assign$1(__assign$1({}, event.event_properties), { "[Amplitude] Page Counter": localConfig.pageCounter });
							}
							return [2, event];
					}
				});
			});
		},
		teardown: function() {
			return __awaiter(void 0, void 0, void 0, function() {
				return __generator(this, function(_a) {
					if (globalScope) {
						globalScope.removeEventListener("popstate", handlePageChange);
						isTracking = false;
					}
					return [2];
				});
			});
		}
	};
};
var getCampaignParams = function() {
	return __awaiter(void 0, void 0, void 0, function() {
		var _a;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					_a = omitUndefined;
					return [4, new CampaignParser().parse()];
				case 1: return [2, _a.apply(void 0, [_b.sent()])];
			}
		});
	});
};
var isCampaignEvent = function(event) {
	if (event.event_type === "$identify" && event.user_properties) {
		var properties = event.user_properties;
		var $set = properties[IdentifyOperation$1.SET] || {};
		var $unset = properties[IdentifyOperation$1.UNSET] || {};
		var userProperties_1 = __spreadArray(__spreadArray([], __read$1(Object.keys($set)), false), __read$1(Object.keys($unset)), false);
		return Object.keys(BASE_CAMPAIGN).every(function(value) {
			return userProperties_1.includes(value);
		});
	}
	return false;
};
var shouldTrackHistoryPageView = function(trackingOption, newURLStr, oldURLStr) {
	switch (trackingOption) {
		case "pathOnly":
			if (oldURLStr == "") return true;
			var newURL = new URL(newURLStr);
			var oldURL = new URL(oldURLStr);
			return newURL.origin + newURL.pathname !== oldURL.origin + oldURL.pathname;
		default: return newURLStr !== oldURLStr;
	}
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/plugins/form-interaction-tracking.js
var formInteractionTracking = function() {
	var observer;
	var eventListeners = [];
	var addEventListener = function(element, type, handler) {
		element.addEventListener(type, handler);
		eventListeners.push({
			element,
			type,
			handler
		});
	};
	var removeClickListeners = function() {
		eventListeners.forEach(function(_a) {
			var element = _a.element, type = _a.type, handler = _a.handler;
			/* istanbul ignore next */
			element === null || element === void 0 || element.removeEventListener(type, handler);
		});
		eventListeners = [];
	};
	var formInteractionsConfig;
	var name = "@amplitude/plugin-form-interaction-tracking-browser";
	var type = "enrichment";
	var setup = function(config, amplitude) {
		return __awaiter(void 0, void 0, void 0, function() {
			var initializeFormTracking, window_1;
			return __generator(this, function(_a) {
				formInteractionsConfig = getFormInteractionsConfig(config);
				initializeFormTracking = function() {
					/* istanbul ignore if */
					if (!amplitude) {
						config.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked.");
						return;
					}
					/* istanbul ignore if */
					if (typeof document === "undefined") return;
					var addedFormNodes = /* @__PURE__ */ new WeakSet();
					var addFormInteractionListener = function(form) {
						if (addedFormNodes.has(form)) return;
						addedFormNodes.add(form);
						var hasFormChanged = false;
						addEventListener(form, "change", function() {
							var _a;
							var formDestination = extractFormAction(form);
							if (!hasFormChanged) amplitude.track(DEFAULT_FORM_START_EVENT, (_a = {}, _a[FORM_ID] = stringOrUndefined(form.id), _a[FORM_NAME] = stringOrUndefined(form.name), _a[FORM_DESTINATION] = formDestination, _a));
							hasFormChanged = true;
						});
						addEventListener(form, "submit", function(event) {
							var _a, _b;
							var formDestination = extractFormAction(form);
							if (!hasFormChanged) amplitude.track(DEFAULT_FORM_START_EVENT, (_a = {}, _a[FORM_ID] = stringOrUndefined(form.id), _a[FORM_NAME] = stringOrUndefined(form.name), _a[FORM_DESTINATION] = formDestination, _a));
							hasFormChanged = true;
							if ((formInteractionsConfig === null || formInteractionsConfig === void 0 ? void 0 : formInteractionsConfig.shouldTrackSubmit) !== void 0) if (typeof formInteractionsConfig.shouldTrackSubmit === "function" && typeof SubmitEvent !== "undefined" && event instanceof SubmitEvent) try {
								if (!formInteractionsConfig.shouldTrackSubmit(event)) return;
							} catch (e) {
								config.loggerProvider.warn("shouldTrackSubmit callback threw an error, proceeding with tracking.");
							}
							else config.loggerProvider.warn("shouldTrackSubmit is ignored because it is not a function or event is not a SubmitEvent.");
							amplitude.track(DEFAULT_FORM_SUBMIT_EVENT, (_b = {}, _b[FORM_ID] = stringOrUndefined(form.id), _b[FORM_NAME] = stringOrUndefined(form.name), _b[FORM_DESTINATION] = formDestination, _b));
							hasFormChanged = false;
						});
					};
					Array.from(document.getElementsByTagName("form")).forEach(addFormInteractionListener);
					/* istanbul ignore else */
					if (typeof MutationObserver !== "undefined") {
						observer = new MutationObserver(function(mutations) {
							mutations.forEach(function(mutation) {
								mutation.addedNodes.forEach(function(node) {
									if (node.nodeName === "FORM") addFormInteractionListener(node);
									if ("querySelectorAll" in node && typeof node.querySelectorAll === "function") Array.from(node.querySelectorAll("form")).map(addFormInteractionListener);
								});
							});
						});
						observer.observe(document.body, {
							subtree: true,
							childList: true
						});
					}
				};
				if (document.readyState === "complete") initializeFormTracking();
				else {
					window_1 = getGlobalScope();
					/* istanbul ignore else*/
					if (window_1) window_1.addEventListener("load", initializeFormTracking);
					else config.loggerProvider.debug("Form interaction tracking is not installed because global is undefined.");
				}
				return [2];
			});
		});
	};
	var execute = function(event) {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, event];
			});
		});
	};
	var teardown = function() {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				observer === null || observer === void 0 || observer.disconnect();
				removeClickListeners();
				return [2];
			});
		});
	};
	return {
		name,
		type,
		setup,
		execute,
		teardown
	};
};
var stringOrUndefined = function(name) {
	/* istanbul ignore if */
	if (typeof name !== "string") return;
	return name;
};
var extractFormAction = function(form) {
	var formDestination = form.getAttribute("action");
	try {
		formDestination = new URL(encodeURI(formDestination !== null && formDestination !== void 0 ? formDestination : ""), window.location.href).href;
	} catch (_a) {}
	return formDestination;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/plugins/file-download-tracking.js
var fileDownloadTracking = function() {
	var observer;
	var eventListeners = [];
	var addEventListener = function(element, type, handler) {
		element.addEventListener(type, handler);
		eventListeners.push({
			element,
			type,
			handler
		});
	};
	var removeClickListeners = function() {
		eventListeners.forEach(function(_a) {
			var element = _a.element, type = _a.type, handler = _a.handler;
			/* istanbul ignore next */
			element === null || element === void 0 || element.removeEventListener(type, handler);
		});
		eventListeners = [];
	};
	var name = "@amplitude/plugin-file-download-tracking-browser";
	var type = "enrichment";
	var setup = function(config, amplitude) {
		return __awaiter(void 0, void 0, void 0, function() {
			var initializeFileDownloadTracking, window_1;
			return __generator(this, function(_a) {
				initializeFileDownloadTracking = function() {
					/* istanbul ignore if */
					if (!amplitude) {
						config.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked.");
						return;
					}
					/* istanbul ignore if */
					if (typeof document === "undefined") return;
					var addFileDownloadListener = function(a) {
						var url;
						try {
							url = new URL(a.href, window.location.href);
						} catch (_a) {
							/* istanbul ignore next */
							return;
						}
						var result = ext.exec(url.href);
						var fileExtension = result === null || result === void 0 ? void 0 : result[1];
						if (fileExtension) addEventListener(a, "click", function() {
							var _a;
							if (fileExtension) amplitude.track(DEFAULT_FILE_DOWNLOAD_EVENT, (_a = {}, _a[FILE_EXTENSION] = fileExtension, _a[FILE_NAME] = url.pathname, _a[LINK_ID] = a.id, _a[LINK_TEXT] = a.text, _a[LINK_URL] = a.href, _a));
						});
					};
					var ext = /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)(\?.+)?$/;
					Array.from(document.getElementsByTagName("a")).forEach(addFileDownloadListener);
					/* istanbul ignore else */
					if (typeof MutationObserver !== "undefined") {
						observer = new MutationObserver(function(mutations) {
							mutations.forEach(function(mutation) {
								mutation.addedNodes.forEach(function(node) {
									if (node.nodeName === "A") addFileDownloadListener(node);
									if ("querySelectorAll" in node && typeof node.querySelectorAll === "function") Array.from(node.querySelectorAll("a")).map(addFileDownloadListener);
								});
							});
						});
						observer.observe(document.body, {
							subtree: true,
							childList: true
						});
					}
				};
				/* istanbul ignore else*/
				if (document.readyState === "complete") initializeFileDownloadTracking();
				else {
					window_1 = getGlobalScope();
					/* istanbul ignore else*/
					if (window_1) window_1.addEventListener("load", initializeFileDownloadTracking);
					else config.loggerProvider.debug("File download tracking is not installed because global is undefined.");
				}
				return [2];
			});
		});
	};
	var execute = function(event) {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, event];
			});
		});
	};
	var teardown = function() {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				observer === null || observer === void 0 || observer.disconnect();
				removeClickListeners();
				return [2];
			});
		});
	};
	return {
		name,
		type,
		setup,
		execute,
		teardown
	};
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/det-notification.js
var notified = false;
var detNotify = function(config) {
	if (notified || config.defaultTracking !== void 0) return;
	config.loggerProvider.warn("`options.defaultTracking` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to `options.defaultTracking`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:\n\namplitude.init(<YOUR_API_KEY>, {\n  defaultTracking: true,\n});\n\nVisit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more details.");
	notified = true;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/plugins/network-connectivity-checker.js
var networkConnectivityCheckerPlugin = function() {
	var name = "@amplitude/plugin-network-checker-browser";
	var type = "before";
	var globalScope = getGlobalScope();
	var eventListeners = [];
	var addNetworkListener = function(type, handler) {
		/* istanbul ignore next */
		if (globalScope === null || globalScope === void 0 ? void 0 : globalScope.addEventListener) {
			globalScope === null || globalScope === void 0 || globalScope.addEventListener(type, handler);
			eventListeners.push({
				type,
				handler
			});
		}
	};
	var removeNetworkListeners = function() {
		eventListeners.forEach(function(_a) {
			var type = _a.type, handler = _a.handler;
			/* istanbul ignore next */
			globalScope === null || globalScope === void 0 || globalScope.removeEventListener(type, handler);
		});
		eventListeners = [];
	};
	var setup = function(config, amplitude) {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				if (typeof navigator === "undefined") {
					config.loggerProvider.debug("Network connectivity checker plugin is disabled because navigator is not available.");
					config.offline = false;
					return [2];
				}
				config.offline = !navigator.onLine;
				addNetworkListener("online", function() {
					config.loggerProvider.debug("Network connectivity changed to online.");
					config.offline = false;
					setTimeout(function() {
						amplitude.flush();
					}, config.flushIntervalMillis);
				});
				addNetworkListener("offline", function() {
					config.loggerProvider.debug("Network connectivity changed to offline.");
					config.offline = true;
				});
				return [2];
			});
		});
	};
	var teardown = function() {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				removeNetworkListeners();
				return [2];
			});
		});
	};
	return {
		name,
		type,
		setup,
		teardown
	};
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/config/joined-config.js
/**
* Performs a deep transformation of a remote config object so that
* it matches the expected schema of the local config.
*
* Specifically, it normalizes nested `enabled` flags into concise union types.
*
* ### Transformation Rules:
* - If an object has `enabled: true`, it is replaced by the same object without the `enabled` field.
* - If it has only `enabled: true`, it is replaced with `true`.
* - If it has `enabled: false`, it is replaced with `false` regardless of other fields.
*
* ### Examples:
* Input:  { prop: { enabled: true, hello: 'world' }}
* Output: { prop: { hello: 'world' } }
*
* Input:  { prop: { enabled: true }}
* Output: { prop: true }
*
* Input:  { prop: { enabled: false, hello: 'world' }}
* Output: { prop: false }
*
* Input:  { prop: { hello: 'world' }}
* Output: { prop: { hello: 'world' } } // No change
*
* @param config Remote config object to be transformed
* @returns Transformed config object compatible with local schema
*/
function translateRemoteConfigToLocal(config) {
	var e_1, _a, e_2, _b, e_3, _c;
	var _d, _e, _f, _g, _h;
	if (typeof config !== "object" || config === null) return;
	if (Array.isArray(config)) return;
	var propertyNames = Object.keys(config);
	try {
		for (var propertyNames_1 = __values$1(propertyNames), propertyNames_1_1 = propertyNames_1.next(); !propertyNames_1_1.done; propertyNames_1_1 = propertyNames_1.next()) {
			var propertyName = propertyNames_1_1.value;
			try {
				var value = config[propertyName];
				if (typeof (value === null || value === void 0 ? void 0 : value.enabled) === "boolean") if (value.enabled) {
					delete value.enabled;
					if (Object.keys(value).length === 0) config[propertyName] = true;
				} else config[propertyName] = false;
				translateRemoteConfigToLocal(value);
			} catch (e) {}
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (propertyNames_1_1 && !propertyNames_1_1.done && (_a = propertyNames_1.return)) _a.call(propertyNames_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	try {
		if ((_f = (_e = (_d = config.autocapture) === null || _d === void 0 ? void 0 : _d.networkTracking) === null || _e === void 0 ? void 0 : _e.captureRules) === null || _f === void 0 ? void 0 : _f.length) try {
			for (var _j = __values$1(config.autocapture.networkTracking.captureRules), _k = _j.next(); !_k.done; _k = _j.next()) {
				var rule = _k.value;
				try {
					for (var _l = (e_3 = void 0, __values$1(["responseHeaders", "requestHeaders"])), _m = _l.next(); !_m.done; _m = _l.next()) {
						var header = _m.value;
						var _o = (_g = rule[header]) !== null && _g !== void 0 ? _g : {}, captureSafeHeaders = _o.captureSafeHeaders, allowlist = _o.allowlist;
						if (!captureSafeHeaders && !allowlist) continue;
						if (allowlist !== void 0 && !Array.isArray(allowlist)) {
							delete rule[header];
							continue;
						}
						rule[header] = __spreadArray(__spreadArray([], __read$1(captureSafeHeaders ? SAFE_HEADERS : []), false), __read$1(allowlist !== null && allowlist !== void 0 ? allowlist : []), false);
					}
				} catch (e_3_1) {
					e_3 = { error: e_3_1 };
				} finally {
					try {
						if (_m && !_m.done && (_c = _l.return)) _c.call(_l);
					} finally {
						if (e_3) throw e_3.error;
					}
				}
			}
		} catch (e_2_1) {
			e_2 = { error: e_2_1 };
		} finally {
			try {
				if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
			} finally {
				if (e_2) throw e_2.error;
			}
		}
	} catch (e) {}
	var frustrationInteractions = (_h = config.autocapture) === null || _h === void 0 ? void 0 : _h.frustrationInteractions;
	if (frustrationInteractions) {
		if (frustrationInteractions.rageClick) {
			frustrationInteractions.rageClicks = frustrationInteractions.rageClick;
			delete frustrationInteractions.rageClick;
		}
		if (frustrationInteractions.deadClick) {
			frustrationInteractions.deadClicks = frustrationInteractions.deadClick;
			delete frustrationInteractions.deadClick;
		}
	}
}
function mergeUrls(urlsExact, urlsRegex, browserConfig) {
	var e_4, _a;
	var regexList = [];
	try {
		for (var _b = __values$1(urlsRegex !== null && urlsRegex !== void 0 ? urlsRegex : []), _c = _b.next(); !_c.done; _c = _b.next()) {
			var pattern = _c.value;
			try {
				regexList.push(new RegExp(pattern));
			} catch (regexError) {
				browserConfig.loggerProvider.warn("Invalid regex pattern: ".concat(pattern), regexError);
			}
		}
	} catch (e_4_1) {
		e_4 = { error: e_4_1 };
	} finally {
		try {
			if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
		} finally {
			if (e_4) throw e_4.error;
		}
	}
	return urlsExact.concat(regexList);
}
/**
* Updates the browser config in place by applying remote configuration settings.
* Primarily merges autocapture settings from the remote config into the browser config.
*
* @param remoteConfig - The remote configuration to apply, or null if none available
* @param browserConfig - The browser config object to update (modified in place)
*/
function updateBrowserConfigWithRemoteConfig(remoteConfig, browserConfig) {
	var e_5, _a;
	var _b, _c, _d, _e, _f;
	if (!remoteConfig) return;
	translateRemoteConfigToLocal(remoteConfig);
	try {
		browserConfig.loggerProvider.debug("Update browser config with remote configuration:", JSON.stringify(remoteConfig));
		var typedRemoteConfig = remoteConfig;
		if (typedRemoteConfig && "autocapture" in typedRemoteConfig) {
			if (typeof typedRemoteConfig.autocapture === "boolean") browserConfig.autocapture = typedRemoteConfig.autocapture;
			if (typeof typedRemoteConfig.autocapture === "object" && typedRemoteConfig.autocapture !== null) {
				var transformedAutocaptureRemoteConfig = __assign$1({}, typedRemoteConfig.autocapture);
				if (browserConfig.autocapture === void 0) browserConfig.autocapture = typedRemoteConfig.autocapture;
				if (typeof typedRemoteConfig.autocapture.elementInteractions === "object" && typedRemoteConfig.autocapture.elementInteractions !== null && ((_b = typedRemoteConfig.autocapture.elementInteractions.pageUrlAllowlistRegex) === null || _b === void 0 ? void 0 : _b.length)) {
					transformedAutocaptureRemoteConfig.elementInteractions = __assign$1({}, typedRemoteConfig.autocapture.elementInteractions);
					var transformedRcElementInteractions = transformedAutocaptureRemoteConfig.elementInteractions;
					var exactAllowList = (_c = transformedRcElementInteractions.pageUrlAllowlist) !== null && _c !== void 0 ? _c : [];
					var urlsRegex = typedRemoteConfig.autocapture.elementInteractions.pageUrlAllowlistRegex;
					transformedRcElementInteractions.pageUrlAllowlist = mergeUrls(exactAllowList, urlsRegex, browserConfig);
					delete transformedRcElementInteractions.pageUrlAllowlistRegex;
				}
				if (typeof typedRemoteConfig.autocapture.networkTracking === "object" && typedRemoteConfig.autocapture.networkTracking !== null && ((_d = typedRemoteConfig.autocapture.networkTracking.captureRules) === null || _d === void 0 ? void 0 : _d.length)) {
					transformedAutocaptureRemoteConfig.networkTracking = __assign$1({}, typedRemoteConfig.autocapture.networkTracking);
					/* istanbul ignore next */
					var captureRules = (_e = transformedAutocaptureRemoteConfig.networkTracking.captureRules) !== null && _e !== void 0 ? _e : [];
					try {
						for (var captureRules_1 = __values$1(captureRules), captureRules_1_1 = captureRules_1.next(); !captureRules_1_1.done; captureRules_1_1 = captureRules_1.next()) {
							var rule = captureRules_1_1.value;
							rule.urls = mergeUrls((_f = rule.urls) !== null && _f !== void 0 ? _f : [], rule.urlsRegex, browserConfig);
							delete rule.urlsRegex;
						}
					} catch (e_5_1) {
						e_5 = { error: e_5_1 };
					} finally {
						try {
							if (captureRules_1_1 && !captureRules_1_1.done && (_a = captureRules_1.return)) _a.call(captureRules_1);
						} finally {
							if (e_5) throw e_5.error;
						}
					}
				}
				if (typeof browserConfig.autocapture === "boolean") browserConfig.autocapture = __assign$1({
					attribution: browserConfig.autocapture,
					fileDownloads: browserConfig.autocapture,
					formInteractions: browserConfig.autocapture,
					pageViews: browserConfig.autocapture,
					sessions: browserConfig.autocapture,
					elementInteractions: browserConfig.autocapture,
					webVitals: browserConfig.autocapture,
					frustrationInteractions: browserConfig.autocapture
				}, transformedAutocaptureRemoteConfig);
				if (typeof browserConfig.autocapture === "object") browserConfig.autocapture = __assign$1(__assign$1({}, browserConfig.autocapture), transformedAutocaptureRemoteConfig);
			}
			browserConfig.defaultTracking = browserConfig.autocapture;
		}
		if ("customEnrichment" in typedRemoteConfig && typedRemoteConfig.customEnrichment !== null) browserConfig.customEnrichment = typedRemoteConfig.customEnrichment;
		browserConfig.loggerProvider.debug("Browser config after remote config update:", JSON.stringify(browserConfig));
	} catch (e) {
		browserConfig.loggerProvider.error("Failed to apply remote configuration because of error: ", e);
	}
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/version.js
var VERSION = "1.24.1";
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/constants.js
var PLUGIN_NAME$2 = "@amplitude/plugin-autocapture-browser";
var FRUSTRATION_PLUGIN_NAME = "@amplitude/plugin-frustration-browser";
var AMPLITUDE_ELEMENT_DEAD_CLICKED_EVENT = "[Amplitude] Dead Click";
var AMPLITUDE_ELEMENT_RAGE_CLICKED_EVENT = "[Amplitude] Rage Click";
var AMPLITUDE_ELEMENT_ERROR_CLICKED_EVENT = "[Amplitude] Error Click";
var AMPLITUDE_THRASHED_CURSOR_EVENT = "[Amplitude] Thrashed Cursor";
var AMPLITUDE_EVENT_PROP_ELEMENT_ID = "[Amplitude] Element ID";
var AMPLITUDE_EVENT_PROP_ELEMENT_CLASS = "[Amplitude] Element Class";
var AMPLITUDE_EVENT_PROP_ELEMENT_TAG = "[Amplitude] Element Tag";
var AMPLITUDE_EVENT_PROP_ELEMENT_TEXT = "[Amplitude] Element Text";
var AMPLITUDE_EVENT_PROP_ELEMENT_HIERARCHY = "[Amplitude] Element Hierarchy";
var AMPLITUDE_EVENT_PROP_ELEMENT_HREF = "[Amplitude] Element Href";
var AMPLITUDE_EVENT_PROP_ELEMENT_POSITION_LEFT = "[Amplitude] Element Position Left";
var AMPLITUDE_EVENT_PROP_ELEMENT_POSITION_TOP = "[Amplitude] Element Position Top";
var AMPLITUDE_EVENT_PROP_ELEMENT_ARIA_LABEL = "[Amplitude] Element Aria Label";
var AMPLITUDE_EVENT_PROP_ELEMENT_ATTRIBUTES = "[Amplitude] Element Attributes";
var AMPLITUDE_EVENT_PROP_ELEMENT_PATH = "[Amplitude] Element Path";
var AMPLITUDE_EVENT_PROP_ELEMENT_PARENT_LABEL = "[Amplitude] Element Parent Label";
var AMPLITUDE_EVENT_PROP_PAGE_URL = "[Amplitude] Page URL";
var AMPLITUDE_EVENT_PROP_PAGE_TITLE = "[Amplitude] Page Title";
var AMPLITUDE_EVENT_PROP_VIEWPORT_HEIGHT = "[Amplitude] Viewport Height";
var AMPLITUDE_EVENT_PROP_VIEWPORT_WIDTH = "[Amplitude] Viewport Width";
var AMPLITUDE_EVENT_PROP_MAX_PAGE_X = "[Amplitude] Max Page X";
var AMPLITUDE_EVENT_PROP_MAX_PAGE_Y = "[Amplitude] Max Page Y";
var AMPLITUDE_EVENT_PROP_PAGE_VIEW_ID = "[Amplitude] Page View ID";
var AMPLITUDE_VISUAL_TAGGING_SELECTOR_SCRIPT_URL = "https://cdn.amplitude.com/libs/visual-tagging-selector-1.0.0-alpha.js.gz";
var AMPLITUDE_VISUAL_TAGGING_HIGHLIGHT_CLASS = "amp-visual-tagging-selector-highlight";
var DATA_AMP_MASK_ATTRIBUTES = "data-amp-mask-attributes";
var PAGE_VIEW_SESSION_STORAGE_KEY = "AMP_PAGE_VIEW";
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/helpers.js
var SENSITIVE_TAGS = [
	"input",
	"select",
	"textarea"
];
var isElementPointerCursor = function(element, actionType) {
	var _a;
	/* istanbul ignore next */
	var computedStyle = (_a = window === null || window === void 0 ? void 0 : window.getComputedStyle) === null || _a === void 0 ? void 0 : _a.call(window, element);
	/* istanbul ignore next */
	return (computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.getPropertyValue("cursor")) === "pointer" && actionType === "click";
};
var isUrlAllowed = function(autocaptureOptions) {
	var pageUrlAllowlist = autocaptureOptions.pageUrlAllowlist, pageUrlExcludelist = autocaptureOptions.pageUrlExcludelist;
	if (pageUrlExcludelist && pageUrlExcludelist.length > 0 && isUrlMatchAllowlist(window.location.href, pageUrlExcludelist)) return false;
	if (!isUrlMatchAllowlist(window.location.href, pageUrlAllowlist)) return false;
	return true;
};
var createShouldTrackEvent = function(autocaptureOptions, allowlist, isAlwaysCaptureCursorPointer) {
	if (isAlwaysCaptureCursorPointer === void 0) isAlwaysCaptureCursorPointer = false;
	return function(actionType, element) {
		var _a, _b;
		var shouldTrackEventResolver = autocaptureOptions.shouldTrackEventResolver;
		/* istanbul ignore next */
		var tag = (_b = (_a = element === null || element === void 0 ? void 0 : element.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase) === null || _b === void 0 ? void 0 : _b.call(_a);
		if (!tag) return false;
		if (shouldTrackEventResolver) return shouldTrackEventResolver(actionType, element);
		if (!isUrlAllowed(autocaptureOptions)) return false;
		/* istanbul ignore next */
		var elementType = String(element === null || element === void 0 ? void 0 : element.getAttribute("type")) || "";
		if (typeof elementType === "string") switch (elementType.toLowerCase()) {
			case "hidden": return false;
			case "password": return false;
		}
		var isCursorPointer = isElementPointerCursor(element, actionType);
		if (isAlwaysCaptureCursorPointer && isCursorPointer) return true;
		/* istanbul ignore if */
		if (allowlist) {
			if (!allowlist.some(function(selector) {
				var _a;
				return !!((_a = element === null || element === void 0 ? void 0 : element.matches) === null || _a === void 0 ? void 0 : _a.call(element, selector));
			})) return false;
		}
		switch (tag) {
			case "input":
			case "select":
			case "textarea": return actionType === "change" || actionType === "click";
			default:
				/* istanbul ignore next */
				/* istanbul ignore next */
				if (isCursorPointer) return true;
				return actionType === "click";
		}
	};
};
var isNonSensitiveElement = function(element) {
	var _a, _b, _c;
	/* istanbul ignore next */
	var tag = (_b = (_a = element === null || element === void 0 ? void 0 : element.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase) === null || _b === void 0 ? void 0 : _b.call(_a);
	var isContentEditable = element instanceof HTMLElement ? ((_c = element.getAttribute("contenteditable")) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === "true" : false;
	return !SENSITIVE_TAGS.includes(tag) && !isContentEditable;
};
/**
* Collects redacted attribute names from element and ancestor elements with data-amp-mask-attributes
* The 'id' and 'class' attributes cannot be redacted as they're critical for element identification
* @param element - The target element to check for redaction attributes
* @returns Set of attribute names that should be redacted
*/
/**
* Parses a comma-separated string of attribute names and filters out protected attributes
* @param attributeString - Comma-separated string of attribute names
* @returns Array of valid attribute names, excluding 'id' and 'class'
*/
var parseAttributesToMask = function(attributeString) {
	return attributeString ? attributeString.split(",").map(function(attr) {
		return attr.trim();
	}).filter(function(attr) {
		return attr.length > 0 && attr !== "id" && attr !== "class";
	}) : [];
};
var extractPrefixedAttributes = function(attrs, prefix) {
	return Object.entries(attrs).reduce(function(attributes, _a) {
		var _b = __read$1(_a, 2), attributeName = _b[0], attributeValue = _b[1];
		if (attributeName.startsWith(prefix)) {
			var attributeKey = attributeName.replace(prefix, "");
			if (attributeKey) attributes[attributeKey] = attributeValue || "";
		}
		return attributes;
	}, {});
};
var isEmpty = function(value) {
	return value === void 0 || value === null || typeof value === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0;
};
var removeEmptyProperties = function(properties) {
	return Object.keys(properties).reduce(function(filteredProperties, key) {
		var value = properties[key];
		if (!isEmpty(value)) filteredProperties[key] = value;
		return filteredProperties;
	}, {});
};
var getCurrentPageViewId = function() {
	var _a;
	try {
		var globalScope = getGlobalScope();
		/* istanbul ignore next */
		var raw = (_a = globalScope === null || globalScope === void 0 ? void 0 : globalScope.sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem(PAGE_VIEW_SESSION_STORAGE_KEY);
		if (!raw) return;
		var parsed = JSON.parse(raw);
		if (typeof parsed.pageViewId === "string") return parsed.pageViewId;
	} catch (_b) {}
};
var getClosestElement = function(element, selectors) {
	if (!element) return null;
	/* istanbul ignore next */
	if (selectors.some(function(selector) {
		var _a;
		return (_a = element === null || element === void 0 ? void 0 : element.matches) === null || _a === void 0 ? void 0 : _a.call(element, selector);
	})) return element;
	/* istanbul ignore next */
	return getClosestElement(element === null || element === void 0 ? void 0 : element.parentElement, selectors);
};
var filterOutNonTrackableEvents = function(event) {
	if (event.event.target === null || !event.closestTrackedAncestor) return false;
	return true;
};
function isElementBasedEvent(event) {
	return event.type === "click" || event.type === "change";
}
var MouseButton;
(function(MouseButton) {
	MouseButton[MouseButton["LEFT_OR_TOUCH_CONTACT"] = 0] = "LEFT_OR_TOUCH_CONTACT";
	MouseButton[MouseButton["MIDDLE"] = 1] = "MIDDLE";
	MouseButton[MouseButton["RIGHT"] = 2] = "RIGHT";
})(MouseButton || (MouseButton = {}));
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/libs/messenger.js
/* istanbul ignore file */
/**
* Brand key to track whether visual tagging has been enabled on a messenger.
*/
var VISUAL_TAGGING_BRAND = "__AMPLITUDE_VISUAL_TAGGING__";
/**
* Enable visual tagging on a messenger instance.
* The first call registers the handlers; subsequent calls are no-ops.
*
* @param messenger - The messenger to enable visual tagging on
* @param options - Visual tagging configuration
*/
function enableVisualTagging(messenger, options) {
	var branded = messenger;
	if (branded[VISUAL_TAGGING_BRAND] === true) return;
	branded[VISUAL_TAGGING_BRAND] = true;
	var dataExtractor = options.dataExtractor, isElementSelectable = options.isElementSelectable, cssSelectorAllowlist = options.cssSelectorAllowlist, actionClickAllowlist = options.actionClickAllowlist;
	var amplitudeVisualTaggingSelectorInstance = null;
	var onSelect = function(data) {
		messenger.notify({
			action: "element-selected",
			data
		});
	};
	var onTrack = function(type, properties) {
		if (type === "selector-mode-changed") messenger.notify({
			action: "track-selector-mode-changed",
			data: properties
		});
		else if (type === "selector-moved") messenger.notify({
			action: "track-selector-moved",
			data: properties
		});
	};
	messenger.registerActionHandler("initialize-visual-tagging-selector", function(actionData) {
		messenger.loadScriptOnce(AMPLITUDE_VISUAL_TAGGING_SELECTOR_SCRIPT_URL).then(function() {
			var _a;
			amplitudeVisualTaggingSelectorInstance = (_a = window === null || window === void 0 ? void 0 : window.amplitudeVisualTaggingSelector) === null || _a === void 0 ? void 0 : _a.call(window, {
				getEventTagProps: dataExtractor.getEventTagProps,
				isElementSelectable: function(element) {
					if (isElementSelectable) return isElementSelectable((actionData === null || actionData === void 0 ? void 0 : actionData.actionType) || "click", element);
					return true;
				},
				onTrack,
				onSelect,
				visualHighlightClass: AMPLITUDE_VISUAL_TAGGING_HIGHLIGHT_CLASS,
				messenger,
				cssSelectorAllowlist,
				actionClickAllowlist,
				extractDataFromDataSource: dataExtractor.extractDataFromDataSource,
				dataExtractor,
				diagnostics: { autocapture: { version: VERSION } }
			});
			messenger.notify({ action: "selector-loaded" });
		}).catch(function() {
			var _a;
			(_a = messenger.logger) === null || _a === void 0 || _a.warn("Failed to initialize visual tagging selector");
		});
	});
	messenger.registerActionHandler("close-visual-tagging-selector", function() {
		var _a;
		(_a = amplitudeVisualTaggingSelectorInstance === null || amplitudeVisualTaggingSelectorInstance === void 0 ? void 0 : amplitudeVisualTaggingSelectorInstance.close) === null || _a === void 0 || _a.call(amplitudeVisualTaggingSelectorInstance);
	});
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/autocapture/track-click.js
function trackClicks(_a) {
	var amplitude = _a.amplitude, allObservables = _a.allObservables, shouldTrackEvent = _a.shouldTrackEvent, evaluateTriggers = _a.evaluateTriggers;
	return allObservables.clickObservable.filter(filterOutNonTrackableEvents).filter(function(click) {
		return shouldTrackEvent("click", click.closestTrackedAncestor);
	}).map(function(click) {
		return evaluateTriggers(click);
	}).subscribe(function(click) {
		/* istanbul ignore next */
		amplitude === null || amplitude === void 0 || amplitude.track("[Amplitude] Element Clicked", click.targetElementProperties);
	});
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/autocapture/track-change.js
function trackChange(_a) {
	var amplitude = _a.amplitude, allObservables = _a.allObservables, getEventProperties = _a.getEventProperties, shouldTrackEvent = _a.shouldTrackEvent, evaluateTriggers = _a.evaluateTriggers;
	return allObservables.changeObservable.filter(filterOutNonTrackableEvents).filter(function(changeEvent) {
		return shouldTrackEvent("change", changeEvent.closestTrackedAncestor);
	}).map(function(changeEvent) {
		return evaluateTriggers(changeEvent);
	}).subscribe(function(changeEvent) {
		/* istanbul ignore next */
		amplitude === null || amplitude === void 0 || amplitude.track("[Amplitude] Element Changed", getEventProperties("change", changeEvent.closestTrackedAncestor));
	});
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/autocapture/track-action-click.js
function trackActionClick(_a) {
	var amplitude = _a.amplitude, allObservables = _a.allObservables, options = _a.options, getEventProperties = _a.getEventProperties, shouldTrackEvent = _a.shouldTrackEvent, shouldTrackActionClick = _a.shouldTrackActionClick;
	var clickObservable = allObservables.clickObservable, mutationObservable = allObservables.mutationObservable, navigateObservable = allObservables.navigateObservable;
	var clickMutationNavigateObservable = merge(clickObservable.filter(function(click) {
		return !shouldTrackEvent("click", click.closestTrackedAncestor);
	}).map(function(click) {
		click.closestTrackedAncestor = getClosestElement(click.event.target, options.actionClickAllowlist);
		if (click.closestTrackedAncestor !== null) click.targetElementProperties = getEventProperties(click.type, click.closestTrackedAncestor);
		return click;
	}).filter(filterOutNonTrackableEvents).filter(function(clickEvent) {
		return shouldTrackActionClick("click", clickEvent.closestTrackedAncestor);
	}), navigateObservable ? merge(mutationObservable, navigateObservable) : mutationObservable);
	var actionClickTimer = null;
	var lastClickEvent = null;
	return asyncMap(clickMutationNavigateObservable, function(event) {
		if (actionClickTimer) {
			clearTimeout(actionClickTimer);
			actionClickTimer = null;
		}
		if (event.type === "click") {
			lastClickEvent = event;
			actionClickTimer = setTimeout(function() {
				actionClickTimer = null;
				lastClickEvent = null;
			}, 500);
			return Promise.resolve(null);
		} else if (lastClickEvent) {
			var event_1 = lastClickEvent;
			lastClickEvent = null;
			return Promise.resolve(event_1);
		}
		return Promise.resolve(null);
	}).subscribe(function(actionClick) {
		if (!actionClick) return;
		/* istanbul ignore next */
		amplitude === null || amplitude === void 0 || amplitude.track("[Amplitude] Element Clicked", getEventProperties("click", actionClick.closestTrackedAncestor));
	});
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/autocapture/track-scroll.js
function trackScroll(_a) {
	_a.amplitude;
	var scrollObservable = _a.allObservables.scrollObservable;
	var state = {
		maxX: 0,
		maxY: 0
	};
	var scrollSubscription = scrollObservable.subscribe(function() {
		var _a, _b, _c, _d;
		var globalScope = getGlobalScope();
		/* istanbul ignore next */
		var currentX = Math.floor((_b = (_a = globalScope === null || globalScope === void 0 ? void 0 : globalScope.scrollX) !== null && _a !== void 0 ? _a : globalScope === null || globalScope === void 0 ? void 0 : globalScope.pageXOffset) !== null && _b !== void 0 ? _b : 0);
		/* istanbul ignore next */
		var currentY = Math.floor((_d = (_c = globalScope === null || globalScope === void 0 ? void 0 : globalScope.scrollY) !== null && _c !== void 0 ? _c : globalScope === null || globalScope === void 0 ? void 0 : globalScope.pageYOffset) !== null && _d !== void 0 ? _d : 0);
		state.maxX = Math.max(state.maxX, currentX);
		state.maxY = Math.max(state.maxY, currentY);
	});
	return {
		unsubscribe: function() {
			scrollSubscription.unsubscribe();
		},
		getState: function() {
			return state;
		},
		reset: function() {
			state.maxX = 0;
			state.maxY = 0;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/observables.js
var globalScope = getGlobalScope();
var createMutationObservable = function() {
	return new import_zen_observable.default(function(observer) {
		var mutationObserver = new MutationObserver(function(mutations) {
			observer.next(mutations);
		});
		if (document.body) mutationObserver.observe(document.body, {
			childList: true,
			attributes: true,
			characterData: true,
			subtree: true
		});
		return function() {
			return mutationObserver.disconnect();
		};
	});
};
/**
* Creates an observable that tracks click events on the document.
* @param clickType - The type of click event to track (click or pointerdown)
*/
var createClickObservable = function(clickType) {
	if (clickType === void 0) clickType = "click";
	return new import_zen_observable.default(function(observer) {
		var _a;
		var handler = function(event) {
			observer.next(event);
		};
		(_a = getGlobalScope()) === null || _a === void 0 || _a.document.addEventListener(clickType, handler, { capture: true });
		return function() {
			var _a;
			(_a = getGlobalScope()) === null || _a === void 0 || _a.document.removeEventListener(clickType, handler, { capture: true });
		};
	});
};
var createScrollObservable = function() {
	return new import_zen_observable.default(function(observer) {
		var _a;
		var handler = function(event) {
			observer.next(event);
		};
		(_a = getGlobalScope()) === null || _a === void 0 || _a.addEventListener("scroll", handler);
		return function() {
			var _a;
			(_a = getGlobalScope()) === null || _a === void 0 || _a.removeEventListener("scroll", handler);
		};
	});
};
var createConsoleErrorObservable = function() {
	return new import_zen_observable.default(function(observer) {
		var handler = function(_) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
			/* istanbul ignore next */
			var message = void 0;
			if (Array.isArray(args[0]) && typeof args[0][0] === "string") message = args[0][0];
			observer.next({
				kind: "console",
				message
			});
		};
		consoleObserver.addListener("error", handler);
		return function() {
			consoleObserver.removeListener(handler);
		};
	});
};
var createExposureObservable = function(mutationObservable, selectorAllowlist) {
	return new import_zen_observable.default(function(observer) {
		var _a;
		var globalScope = getGlobalScope();
		if (!(globalScope === null || globalScope === void 0 ? void 0 : globalScope.IntersectionObserver)) return function() {};
		var intersectionObserver = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				observer.next(entry);
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 1
		});
		var selectorString = selectorAllowlist.join(",");
		((_a = globalScope === null || globalScope === void 0 ? void 0 : globalScope.document.querySelectorAll(selectorString)) !== null && _a !== void 0 ? _a : []).forEach(function(element) {
			intersectionObserver.observe(element);
		});
		var mutationSubscription = mutationObservable.subscribe(function(_a) {
			return _a.event.forEach(function(_a) {
				return _a.addedNodes.forEach(function(node) {
					if (!(node instanceof Element)) return;
					if (node.matches(selectorString)) intersectionObserver.observe(node);
					node.querySelectorAll(selectorString).forEach(function(child) {
						intersectionObserver.observe(child);
					});
				});
			});
		});
		return function() {
			mutationSubscription.unsubscribe();
			intersectionObserver.disconnect();
		};
	});
};
var createUnhandledErrorObservable = function() {
	return new import_zen_observable.default(function(observer) {
		var handler = function(event) {
			if (!(event instanceof ErrorEvent)) return;
			var output = { kind: "error" };
			if (event.error instanceof Error || event.error instanceof DOMException) output = __assign$1(__assign$1({}, output), {
				message: event.error.message,
				stack: event.error.stack,
				filename: event.filename,
				lineNumber: event.lineno,
				columnNumber: event.colno
			});
			else if (typeof event.error === "string") output.message = event.error;
			observer.next(output);
		};
		globalScope.addEventListener("error", handler);
		return function() {
			globalScope.removeEventListener("error", handler);
		};
	});
};
var createUnhandledRejectionObservable = function() {
	return new import_zen_observable.default(function(observer) {
		var handler = function(event) {
			var output = { kind: "unhandledrejection" };
			if (event.reason instanceof Error || event.reason instanceof DOMException) {
				output.message = event.reason.message;
				output.stack = event.reason.stack;
			} else if (typeof event.reason === "string") output.message = event.reason;
			observer.next(output);
		};
		globalScope.addEventListener("unhandledrejection", handler);
		return function() {
			globalScope.removeEventListener("unhandledrejection", handler);
		};
	});
};
var createErrorObservable = function() {
	return merge(merge(createUnhandledErrorObservable(), createUnhandledRejectionObservable()), createConsoleErrorObservable());
};
var createMouseMoveObservable = function() {
	return new import_zen_observable.default(function(observer) {
		var handler = function(event) {
			observer.next(event);
		};
		var args = { capture: true };
		globalScope.document.addEventListener("mousemove", handler, args);
		return function() {
			globalScope.document.removeEventListener("mousemove", handler, args);
		};
	});
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/pageActions/matchEventToFilter.js
/**
* Matches an event to a single filter
* @param event - The event to match
* @param filter - The filter to match against
* @returns boolean indicating if the event matches the filter
*/
var matchEventToFilter = function(event, filter) {
	try {
		if (filter.subprop_key === "[Amplitude] Element Text") return filter.subprop_op === "is" && filter.subprop_value.includes(event.targetElementProperties["[Amplitude] Element Text"]);
		else if (filter.subprop_key === "[Amplitude] Element Hierarchy") return filter.subprop_op === "autotrack css match" && !!event.closestTrackedAncestor.closest(filter.subprop_value.toString());
	} catch (error) {
		console.error("Error matching event to filter", error);
		return false;
	}
	return false;
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/pageActions/actions.js
/**
* Gets the DOM element specified by the data source configuration
* @param dataSource - Configuration for finding the target element
* @param contextElement - The element to start searching from
* @returns The matching DOM element or undefined if not found
*/
var getDataSource = function(dataSource, contextElement) {
	try {
		if (dataSource.sourceType === "DOM_ELEMENT") {
			var scopingElement = document.documentElement;
			if (dataSource.scope && contextElement) scopingElement = contextElement.closest(dataSource.scope);
			if (scopingElement && dataSource.selector) return scopingElement.querySelector(dataSource.selector);
			return scopingElement;
		}
	} catch (error) {
		return;
	}
};
var executeActions = function(actions, ev, dataExtractor) {
	actions.forEach(function(action) {
		if (typeof action === "string") return;
		if (action.actionType === "ATTACH_EVENT_PROPERTY") {
			var data = dataExtractor.extractDataFromDataSource(action.dataSource, ev.closestTrackedAncestor);
			ev.targetElementProperties[action.destinationKey] = data;
		}
	});
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/pageActions/triggers.js
var eventTypeToBrowserEventMap = {
	"[Amplitude] Element Clicked": "click",
	"[Amplitude] Element Changed": "change"
};
var groupLabeledEventIdsByEventType = function(labeledEvents) {
	var e_1, _a, e_2, _b;
	var groupedLabeledEvents = Object.values(eventTypeToBrowserEventMap).reduce(function(acc, browserEvent) {
		acc[browserEvent] = /* @__PURE__ */ new Set();
		return acc;
	}, {});
	if (!labeledEvents) return groupedLabeledEvents;
	try {
		for (var labeledEvents_1 = __values$1(labeledEvents), labeledEvents_1_1 = labeledEvents_1.next(); !labeledEvents_1_1.done; labeledEvents_1_1 = labeledEvents_1.next()) {
			var le = labeledEvents_1_1.value;
			try {
				try {
					for (var _c = (e_2 = void 0, __values$1(le.definition)), _d = _c.next(); !_d.done; _d = _c.next()) {
						var browserEvent = eventTypeToBrowserEventMap[_d.value.event_type];
						if (browserEvent) groupedLabeledEvents[browserEvent].add(le.id);
					}
				} catch (e_2_1) {
					e_2 = { error: e_2_1 };
				} finally {
					try {
						if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
					} finally {
						if (e_2) throw e_2.error;
					}
				}
			} catch (e) {
				console.warn("Skipping Labeled Event due to malformed definition", le === null || le === void 0 ? void 0 : le.id, e);
			}
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (labeledEvents_1_1 && !labeledEvents_1_1.done && (_a = labeledEvents_1.return)) _a.call(labeledEvents_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	return groupedLabeledEvents;
};
var createLabeledEventToTriggerMap = function(triggers) {
	var e_3, _a, e_4, _b;
	var labeledEventToTriggerMap = /* @__PURE__ */ new Map();
	try {
		for (var triggers_1 = __values$1(triggers), triggers_1_1 = triggers_1.next(); !triggers_1_1.done; triggers_1_1 = triggers_1.next()) {
			var trigger = triggers_1_1.value;
			try {
				for (var _c = (e_4 = void 0, __values$1(trigger.conditions)), _d = _c.next(); !_d.done; _d = _c.next()) {
					var condition = _d.value;
					if (condition.type === "LABELED_EVENT") {
						var eventId = condition.match.eventId;
						var existingTriggers = labeledEventToTriggerMap.get(eventId);
						if (!existingTriggers) {
							existingTriggers = [];
							labeledEventToTriggerMap.set(eventId, existingTriggers);
						}
						existingTriggers.push(trigger);
					}
				}
			} catch (e_4_1) {
				e_4 = { error: e_4_1 };
			} finally {
				try {
					if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
				} finally {
					if (e_4) throw e_4.error;
				}
			}
		}
	} catch (e_3_1) {
		e_3 = { error: e_3_1 };
	} finally {
		try {
			if (triggers_1_1 && !triggers_1_1.done && (_a = triggers_1.return)) _a.call(triggers_1);
		} finally {
			if (e_3) throw e_3.error;
		}
	}
	return labeledEventToTriggerMap;
};
/**
* Matches an event to labeled events based on the event's properties.
* The logic matches exactly what is supported by the query backend.
* TODO: later pre-filter the labeled events based on URL first
*
* @param event - The event to match against labeled events
* @param labeledEvents - Array of labeled events to match against
* @returns Array of matching labeled events
*/
var matchEventToLabeledEvents = function(event, labeledEvents) {
	return labeledEvents.filter(function(le) {
		return le.definition.some(function(def) {
			return eventTypeToBrowserEventMap[def.event_type] === event.type && def.filters.every(function(filter) {
				return matchEventToFilter(event, filter);
			});
		});
	});
};
var matchLabeledEventsToTriggers = function(labeledEvents, leToTriggerMap) {
	var e_5, _a, e_6, _b;
	var matchingTriggers = /* @__PURE__ */ new Set();
	try {
		for (var labeledEvents_2 = __values$1(labeledEvents), labeledEvents_2_1 = labeledEvents_2.next(); !labeledEvents_2_1.done; labeledEvents_2_1 = labeledEvents_2.next()) {
			var le = labeledEvents_2_1.value;
			var triggers = leToTriggerMap.get(le.id);
			if (triggers) try {
				for (var triggers_2 = (e_6 = void 0, __values$1(triggers)), triggers_2_1 = triggers_2.next(); !triggers_2_1.done; triggers_2_1 = triggers_2.next()) {
					var trigger = triggers_2_1.value;
					matchingTriggers.add(trigger);
				}
			} catch (e_6_1) {
				e_6 = { error: e_6_1 };
			} finally {
				try {
					if (triggers_2_1 && !triggers_2_1.done && (_b = triggers_2.return)) _b.call(triggers_2);
				} finally {
					if (e_6) throw e_6.error;
				}
			}
		}
	} catch (e_5_1) {
		e_5 = { error: e_5_1 };
	} finally {
		try {
			if (labeledEvents_2_1 && !labeledEvents_2_1.done && (_a = labeledEvents_2.return)) _a.call(labeledEvents_2);
		} finally {
			if (e_5) throw e_5.error;
		}
	}
	return Array.from(matchingTriggers);
};
var TriggerEvaluator = function() {
	function TriggerEvaluator(groupedLabeledEvents, labeledEventToTriggerMap, dataExtractor, options) {
		this.groupedLabeledEvents = groupedLabeledEvents;
		this.labeledEventToTriggerMap = labeledEventToTriggerMap;
		this.dataExtractor = dataExtractor;
		this.options = options;
	}
	TriggerEvaluator.prototype.evaluate = function(event) {
		var e_7, _a;
		var pageActions = this.options.pageActions;
		if (!pageActions) return event;
		var matchingTriggers = matchLabeledEventsToTriggers(matchEventToLabeledEvents(event, Array.from(this.groupedLabeledEvents[event.type]).map(function(id) {
			return pageActions.labeledEvents[id];
		})), this.labeledEventToTriggerMap);
		try {
			for (var matchingTriggers_1 = __values$1(matchingTriggers), matchingTriggers_1_1 = matchingTriggers_1.next(); !matchingTriggers_1_1.done; matchingTriggers_1_1 = matchingTriggers_1.next()) {
				var trigger = matchingTriggers_1_1.value;
				executeActions(trigger.actions, event, this.dataExtractor);
			}
		} catch (e_7_1) {
			e_7 = { error: e_7_1 };
		} finally {
			try {
				if (matchingTriggers_1_1 && !matchingTriggers_1_1.done && (_a = matchingTriggers_1.return)) _a.call(matchingTriggers_1);
			} finally {
				if (e_7) throw e_7.error;
			}
		}
		return event;
	};
	TriggerEvaluator.prototype.update = function(groupedLabeledEvents, labeledEventToTriggerMap, options) {
		this.groupedLabeledEvents = groupedLabeledEvents;
		this.labeledEventToTriggerMap = labeledEventToTriggerMap;
		this.options = options;
	};
	return TriggerEvaluator;
}();
var createTriggerEvaluator = function(groupedLabeledEvents, labeledEventToTriggerMap, dataExtractor, options) {
	return new TriggerEvaluator(groupedLabeledEvents, labeledEventToTriggerMap, dataExtractor, options);
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/hierarchy.js
var BLOCKED_ATTRIBUTES = new Set([
	"id",
	"class",
	"style",
	"value",
	"onclick",
	"onchange",
	"oninput",
	"onblur",
	"onsubmit",
	"onfocus",
	"onkeydown",
	"onkeyup",
	"onkeypress",
	"data-reactid",
	"data-react-checksum",
	"data-reactroot",
	DATA_AMP_MASK_ATTRIBUTES,
	TEXT_MASK_ATTRIBUTE
]);
var SENSITIVE_ELEMENT_ATTRIBUTE_ALLOWLIST = ["type"];
var SVG_TAGS = [
	"svg",
	"path",
	"g"
];
var HIGHLY_SENSITIVE_INPUT_TYPES = ["password", "hidden"];
function getElementProperties(element, userMaskedAttributeNames) {
	var e_1, _a;
	var _b, _c, _d, _e;
	if (element === null) return null;
	var tagName = String(element.tagName).toLowerCase();
	var properties = { tag: tagName };
	var siblings = Array.from((_c = (_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.children) !== null && _c !== void 0 ? _c : []);
	if (siblings.length) {
		properties.index = siblings.indexOf(element);
		properties.indexOfType = siblings.filter(function(el) {
			return el.tagName === element.tagName;
		}).indexOf(element);
	}
	var prevSiblingTag = (_e = (_d = element.previousElementSibling) === null || _d === void 0 ? void 0 : _d.tagName) === null || _e === void 0 ? void 0 : _e.toLowerCase();
	if (prevSiblingTag) properties.prevSib = String(prevSiblingTag);
	var id = element.getAttribute("id");
	if (id) properties.id = String(id);
	var classes = Array.from(element.classList);
	if (classes.length) properties.classes = classes;
	var attributes = {};
	var filteredAttributes = Array.from(element.attributes).filter(function(attr) {
		return !BLOCKED_ATTRIBUTES.has(attr.name);
	});
	var isSensitiveElement = !isNonSensitiveElement(element);
	if (!HIGHLY_SENSITIVE_INPUT_TYPES.includes(String(element.getAttribute("type"))) && !SVG_TAGS.includes(tagName)) try {
		for (var filteredAttributes_1 = __values$1(filteredAttributes), filteredAttributes_1_1 = filteredAttributes_1.next(); !filteredAttributes_1_1.done; filteredAttributes_1_1 = filteredAttributes_1.next()) {
			var attr = filteredAttributes_1_1.value;
			if (isSensitiveElement && !SENSITIVE_ELEMENT_ATTRIBUTE_ALLOWLIST.includes(attr.name)) continue;
			if (userMaskedAttributeNames.has(attr.name)) {
				attributes[attr.name] = MASKED_TEXT_VALUE;
				continue;
			}
			attributes[attr.name] = String(attr.value).substring(0, 128);
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (filteredAttributes_1_1 && !filteredAttributes_1_1.done && (_a = filteredAttributes_1.return)) _a.call(filteredAttributes_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	if (Object.keys(attributes).length) properties.attrs = attributes;
	return properties;
}
function getAncestors(targetEl) {
	var ancestors = [];
	if (!targetEl) return ancestors;
	ancestors.push(targetEl);
	var current = targetEl.parentElement;
	while (current && current.tagName !== "HTML") {
		ancestors.push(current);
		current = current.parentElement;
	}
	return ancestors;
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/libs/element-path.js
/* istanbul ignore file */
var Step = function() {
	function Step(value, optimized) {
		this.value = value;
		this.optimized = optimized;
	}
	Step.prototype.toString = function() {
		return this.value;
	};
	return Step;
}();
var cssPath = function(node, optimized) {
	if (node.nodeType !== Node.ELEMENT_NODE) return "";
	var steps = [];
	var contextNode = node;
	while (contextNode) {
		var step = cssPathStep(contextNode, Boolean(optimized), contextNode === node);
		if (!step) break;
		steps.push(step);
		if (step.optimized) break;
		contextNode = contextNode.parentElement;
	}
	steps.reverse();
	return steps.join(" > ");
};
var cssPathStep = function(node, optimized, isTargetNode) {
	var e_1, _a;
	if (node.nodeType !== Node.ELEMENT_NODE) return null;
	var id = node.getAttribute("id");
	if (optimized) {
		if (id) return new Step(idSelector(id), true);
		var nodeNameLower = node.tagName.toLowerCase();
		if (nodeNameLower === "body" || nodeNameLower === "head" || nodeNameLower === "html") return new Step(nodeNameLower, true);
	}
	var nodeName = node.tagName.toLowerCase();
	if (id) return new Step(nodeName + idSelector(id), true);
	var parent = node.parentNode;
	if (!parent || parent.nodeType === Node.DOCUMENT_NODE) return new Step(nodeName, true);
	function prefixedElementClassNames(el) {
		var classAttribute = el.getAttribute("class");
		if (!classAttribute) return [];
		return classAttribute.split(/\s+/g).filter(Boolean).map(function(name) {
			return "$" + name;
		});
	}
	function idSelector(id) {
		return "#" + CSS.escape(id);
	}
	var prefixedOwnClassNamesArray = prefixedElementClassNames(node);
	var needsClassNames = false;
	var needsNthChild = false;
	var ownIndex = -1;
	var elementIndex = -1;
	var siblings = parent.children;
	for (var i = 0; siblings && (ownIndex === -1 || !needsNthChild) && i < siblings.length; ++i) {
		var sibling = siblings[i];
		if (sibling.nodeType !== Node.ELEMENT_NODE) continue;
		elementIndex += 1;
		if (sibling === node) {
			ownIndex = elementIndex;
			continue;
		}
		if (needsNthChild) continue;
		if (sibling.tagName.toLowerCase() !== nodeName) continue;
		needsClassNames = true;
		var ownClassNames = new Set(prefixedOwnClassNamesArray);
		if (!ownClassNames.size) {
			needsNthChild = true;
			continue;
		}
		var siblingClassNamesArray = prefixedElementClassNames(sibling);
		for (var j = 0; j < siblingClassNamesArray.length; ++j) {
			var siblingClass = siblingClassNamesArray[j];
			if (!ownClassNames.has(siblingClass)) continue;
			ownClassNames.delete(siblingClass);
			if (!ownClassNames.size) {
				needsNthChild = true;
				break;
			}
		}
	}
	var result = nodeName;
	if (isTargetNode && nodeName.toLowerCase() === "input" && node.getAttribute("type") && !node.getAttribute("id") && !node.getAttribute("class")) result += "[type=" + CSS.escape(node.getAttribute("type") || "") + "]";
	if (needsNthChild) result += ":nth-child(" + String(ownIndex + 1) + ")";
	else if (needsClassNames) try {
		for (var prefixedOwnClassNamesArray_1 = __values$1(prefixedOwnClassNamesArray), prefixedOwnClassNamesArray_1_1 = prefixedOwnClassNamesArray_1.next(); !prefixedOwnClassNamesArray_1_1.done; prefixedOwnClassNamesArray_1_1 = prefixedOwnClassNamesArray_1.next()) {
			var prefixedName = prefixedOwnClassNamesArray_1_1.value;
			result += "." + CSS.escape(prefixedName.slice(1));
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (prefixedOwnClassNamesArray_1_1 && !prefixedOwnClassNamesArray_1_1.done && (_a = prefixedOwnClassNamesArray_1.return)) _a.call(prefixedOwnClassNamesArray_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	return new Step(result, false);
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/data-extractor.js
var DataExtractor = function() {
	function DataExtractor(options, context) {
		var e_1, _a;
		var _this = this;
		var _b;
		/**
		* Wrapper method to replace sensitive strings using the helper function
		* @param text - The text to search for sensitive data
		* @returns The text with sensitive data replaced by masked text
		*/
		this.replaceSensitiveString = function(text) {
			return replaceSensitiveString(text, _this.additionalMaskTextPatterns);
		};
		this.getHierarchy = function(element) {
			var e_2, _a;
			var _b, _c;
			var startTime = performance.now();
			var hierarchy = [];
			if (!element) return [];
			var ancestors = getAncestors(element);
			var elementToAttributesToMaskMap = /* @__PURE__ */ new Map();
			for (var i = ancestors.length - 1; i >= 0; i--) {
				var node = ancestors[i];
				if (node) {
					var attributesToMask = parseAttributesToMask(node.getAttribute(DATA_AMP_MASK_ATTRIBUTES));
					var ancestorAttributesToMask = i === ancestors.length - 1 ? [] : (_b = elementToAttributesToMaskMap.get(ancestors[i + 1])) !== null && _b !== void 0 ? _b : /* @__PURE__ */ new Set();
					var combinedAttributesToMask = new Set(__spreadArray(__spreadArray([], __read$1(ancestorAttributesToMask), false), __read$1(attributesToMask), false));
					elementToAttributesToMaskMap.set(node, combinedAttributesToMask);
				}
			}
			hierarchy = ancestors.map(function(el) {
				var _a;
				return getElementProperties(el, (_a = elementToAttributesToMaskMap.get(el)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set());
			});
			var _loop_1 = function(hierarchyNode) {
				if (hierarchyNode === null || hierarchyNode === void 0 ? void 0 : hierarchyNode.attrs) Object.entries(hierarchyNode.attrs).forEach(function(_a) {
					var _b = __read$1(_a, 2), key = _b[0], value = _b[1];
					if (hierarchyNode.attrs) hierarchyNode.attrs[key] = _this.replaceSensitiveString(value);
				});
			};
			try {
				for (var hierarchy_1 = __values$1(hierarchy), hierarchy_1_1 = hierarchy_1.next(); !hierarchy_1_1.done; hierarchy_1_1 = hierarchy_1.next()) {
					var hierarchyNode = hierarchy_1_1.value;
					_loop_1(hierarchyNode);
				}
			} catch (e_2_1) {
				e_2 = { error: e_2_1 };
			} finally {
				try {
					if (hierarchy_1_1 && !hierarchy_1_1.done && (_a = hierarchy_1.return)) _a.call(hierarchy_1);
				} finally {
					if (e_2) throw e_2.error;
				}
			}
			var endTime = performance.now();
			(_c = _this.diagnosticsClient) === null || _c === void 0 || _c.recordHistogram("autocapturePlugin.getHierarchy", endTime - startTime);
			return hierarchy;
		};
		this.getNearestLabel = function(element) {
			var parent = element.parentElement;
			if (!parent) return "";
			var labelElement;
			try {
				labelElement = parent.querySelector(":scope>span,h1,h2,h3,h4,h5,h6");
			} catch (_a) {
				/* istanbul ignore next */
				labelElement = null;
			}
			if (labelElement)
 /* istanbul ignore next */
			return _this.getText(labelElement);
			return _this.getNearestLabel(parent);
		};
		this.getElementPath = function(element) {
			var _a;
			if (!element) return "";
			var startTime = performance.now();
			var elementPath = cssPath(element);
			var endTime = performance.now();
			(_a = _this.diagnosticsClient) === null || _a === void 0 || _a.recordHistogram("autocapturePlugin.getElementPath", endTime - startTime);
			return elementPath;
		};
		this.getEventProperties = function(actionType, element, dataAttributePrefix) {
			var _a;
			var _b, _c, _d;
			/* istanbul ignore next */
			var tag = (_c = (_b = element === null || element === void 0 ? void 0 : element.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase) === null || _c === void 0 ? void 0 : _c.call(_b);
			/* istanbul ignore next */
			var rect = typeof element.getBoundingClientRect === "function" ? element.getBoundingClientRect() : {
				left: null,
				top: null
			};
			var hierarchy = _this.getHierarchy(element);
			var currentElementAttributes = (_d = hierarchy[0]) === null || _d === void 0 ? void 0 : _d.attrs;
			var nearestLabel = _this.getNearestLabel(element);
			var attributes = extractPrefixedAttributes(currentElementAttributes !== null && currentElementAttributes !== void 0 ? currentElementAttributes : {}, dataAttributePrefix);
			/* istanbul ignore next */
			var properties = (_a = {}, _a[AMPLITUDE_EVENT_PROP_ELEMENT_HIERARCHY] = hierarchy, _a[AMPLITUDE_EVENT_PROP_ELEMENT_TAG] = tag, _a[AMPLITUDE_EVENT_PROP_ELEMENT_TEXT] = _this.getText(element), _a[AMPLITUDE_EVENT_PROP_ELEMENT_POSITION_LEFT] = rect.left == null ? null : Math.round(rect.left), _a[AMPLITUDE_EVENT_PROP_ELEMENT_POSITION_TOP] = rect.top == null ? null : Math.round(rect.top), _a[AMPLITUDE_EVENT_PROP_ELEMENT_ATTRIBUTES] = attributes, _a[AMPLITUDE_EVENT_PROP_ELEMENT_PATH] = _this.getElementPath(element), _a[AMPLITUDE_EVENT_PROP_ELEMENT_PARENT_LABEL] = nearestLabel, _a[AMPLITUDE_EVENT_PROP_PAGE_URL] = getDecodeURI(window.location.href.split("?")[0]), _a[AMPLITUDE_EVENT_PROP_PAGE_TITLE] = getPageTitle(_this.replaceSensitiveString), _a[AMPLITUDE_EVENT_PROP_VIEWPORT_HEIGHT] = window.innerHeight, _a[AMPLITUDE_EVENT_PROP_VIEWPORT_WIDTH] = window.innerWidth, _a);
			var pageViewId = getCurrentPageViewId();
			/* istanbul ignore next */
			if (pageViewId)
 /* istanbul ignore next */
			properties[AMPLITUDE_EVENT_PROP_PAGE_VIEW_ID] = pageViewId;
			properties[AMPLITUDE_EVENT_PROP_ELEMENT_ID] = element.getAttribute("id") || "";
			properties[AMPLITUDE_EVENT_PROP_ELEMENT_CLASS] = element.getAttribute("class");
			properties[AMPLITUDE_EVENT_PROP_ELEMENT_ARIA_LABEL] = currentElementAttributes === null || currentElementAttributes === void 0 ? void 0 : currentElementAttributes["aria-label"];
			if (tag === "a" && actionType === "click" && element instanceof HTMLAnchorElement) {
				var href = element.href.substring(0, 128);
				properties[AMPLITUDE_EVENT_PROP_ELEMENT_HREF] = _this.replaceSensitiveString(href);
			}
			return removeEmptyProperties(properties);
		};
		this.addTypeAndTimestamp = function(event, type) {
			return {
				event,
				timestamp: Date.now(),
				type
			};
		};
		this.addAdditionalEventProperties = function(event, type, selectorAllowlist, dataAttributePrefix, isCapturingCursorPointer) {
			if (isCapturingCursorPointer === void 0) isCapturingCursorPointer = false;
			var baseEvent = _this.addTypeAndTimestamp(event, type);
			if (isElementBasedEvent(baseEvent) && baseEvent.event.target !== null) {
				if (isCapturingCursorPointer) {
					if (isElementPointerCursor(baseEvent.event.target, baseEvent.type)) {
						baseEvent.closestTrackedAncestor = baseEvent.event.target;
						baseEvent.targetElementProperties = _this.getEventProperties(baseEvent.type, baseEvent.closestTrackedAncestor, dataAttributePrefix);
						return baseEvent;
					}
				}
				var closestTrackedAncestor = getClosestElement(baseEvent.event.target, selectorAllowlist);
				if (closestTrackedAncestor) {
					baseEvent.closestTrackedAncestor = closestTrackedAncestor;
					baseEvent.targetElementProperties = _this.getEventProperties(baseEvent.type, closestTrackedAncestor, dataAttributePrefix);
				}
				return baseEvent;
			}
			return baseEvent;
		};
		this.extractDataFromDataSource = function(dataSource, contextElement) {
			if (dataSource.sourceType === "DOM_ELEMENT") {
				var sourceElement = getDataSource(dataSource, contextElement);
				if (!sourceElement) return;
				if (dataSource.elementExtractType === "TEXT") return _this.getText(sourceElement);
				else if (dataSource.elementExtractType === "ATTRIBUTE" && dataSource.attribute) return sourceElement.getAttribute(dataSource.attribute);
				return;
			}
		};
		this.getTextWithMaskedDescendants = function(element) {
			var e_3, _a;
			var maskedSelector = "[".concat(TEXT_MASK_ATTRIBUTE, "], [contenteditable]");
			if (!element.querySelector(maskedSelector)) return element.innerText;
			var output = "";
			var childNodes = Array.from(element.childNodes);
			try {
				for (var childNodes_1 = __values$1(childNodes), childNodes_1_1 = childNodes_1.next(); !childNodes_1_1.done; childNodes_1_1 = childNodes_1.next()) {
					var childNode = childNodes_1_1.value;
					if (childNode.nodeType === Node.TEXT_NODE) {
						output += childNode.textContent || "";
						continue;
					}
					if (!(childNode instanceof Element)) continue;
					if (childNode.hasAttribute("data-amp-mask") || childNode.hasAttribute("contenteditable")) {
						output += MASKED_TEXT_VALUE;
						continue;
					}
					output += _this.getTextWithMaskedDescendants(childNode);
				}
			} catch (e_3_1) {
				e_3 = { error: e_3_1 };
			} finally {
				try {
					if (childNodes_1_1 && !childNodes_1_1.done && (_a = childNodes_1.return)) _a.call(childNodes_1);
				} finally {
					if (e_3) throw e_3.error;
				}
			}
			return output;
		};
		this.getText = function(element) {
			if (element.closest("[".concat("data-amp-mask", "]")) !== null) return MASKED_TEXT_VALUE;
			var output = "";
			if (!element.querySelector("[".concat("data-amp-mask", "], [contenteditable]"))) output = element.innerText || "";
			else output = _this.getTextWithMaskedDescendants(element);
			return _this.replaceSensitiveString(output.substring(0, 255)).replace(/\s+/g, " ").trim();
		};
		this.getEventTagProps = function(element) {
			var _a;
			var _b, _c;
			if (!element) return {};
			/* istanbul ignore next */
			var tag = (_c = (_b = element === null || element === void 0 ? void 0 : element.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase) === null || _c === void 0 ? void 0 : _c.call(_b);
			return removeEmptyProperties((_a = {}, _a[AMPLITUDE_EVENT_PROP_ELEMENT_TAG] = tag, _a[AMPLITUDE_EVENT_PROP_ELEMENT_TEXT] = _this.getText(element), _a[AMPLITUDE_EVENT_PROP_PAGE_URL] = window.location.href.split("?")[0], _a));
		};
		this.diagnosticsClient = context === null || context === void 0 ? void 0 : context.diagnosticsClient;
		var rawPatterns = (_b = options.maskTextRegex) !== null && _b !== void 0 ? _b : [];
		var compiled = [];
		try {
			for (var rawPatterns_1 = __values$1(rawPatterns), rawPatterns_1_1 = rawPatterns_1.next(); !rawPatterns_1_1.done; rawPatterns_1_1 = rawPatterns_1.next()) {
				var entry = rawPatterns_1_1.value;
				if (compiled.length >= 25) break;
				if (entry instanceof RegExp) compiled.push(entry);
				else if ("pattern" in entry && typeof entry.pattern === "string") try {
					compiled.push(new RegExp(entry.pattern, "i"));
				} catch (_c) {}
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (rawPatterns_1_1 && !rawPatterns_1_1.done && (_a = rawPatterns_1.return)) _a.call(rawPatterns_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		this.additionalMaskTextPatterns = compiled;
	}
	return DataExtractor;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/autocapture/track-exposure.js
function trackExposure(_a) {
	var allObservables = _a.allObservables, onExposure = _a.onExposure, dataExtractor = _a.dataExtractor, _b = _a.exposureDuration, exposureDuration = _b === void 0 ? 150 : _b;
	var exposureMap = /* @__PURE__ */ new Map();
	var exposureTimerMap = /* @__PURE__ */ new Map();
	var exposureSubscription = allObservables.exposureObservable.subscribe(function(event) {
		var entry = event;
		var element = entry.target;
		if (entry.isIntersecting) {
			if (!exposureMap.get(element)) {
				var timer = setTimeout(function() {
					exposureMap.set(element, true);
					onExposure(dataExtractor.getElementPath(element));
					exposureTimerMap.set(element, null);
				}, exposureDuration);
				exposureTimerMap.set(element, timer);
			}
		} else if (!entry.isIntersecting && entry.intersectionRatio < 1) {
			var timer = exposureTimerMap.get(element);
			if (timer) {
				clearTimeout(timer);
				exposureTimerMap.set(element, null);
			}
		}
	});
	return {
		unsubscribe: function() {
			exposureSubscription.unsubscribe();
		},
		reset: function() {
			exposureTimerMap.forEach(function(timer) {
				if (timer) clearTimeout(timer);
			});
			exposureTimerMap.clear();
			exposureMap.clear();
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/autocapture/track-viewport-content-updated.js
function fireViewportContentUpdated(_a) {
	var _b;
	var _c, _d, _e;
	var amplitude = _a.amplitude, scrollTracker = _a.scrollTracker, currentElementExposed = _a.currentElementExposed, elementExposedForPage = _a.elementExposedForPage, exposureTracker = _a.exposureTracker, isPageEnd = _a.isPageEnd, lastScroll = _a.lastScroll;
	var pageScrollMaxState = scrollTracker.getState();
	var globalScope = getGlobalScope();
	/* istanbul ignore next */
	var viewportWidth = (_c = globalScope === null || globalScope === void 0 ? void 0 : globalScope.innerWidth) !== null && _c !== void 0 ? _c : 0;
	/* istanbul ignore next */
	var viewportHeight = (_d = globalScope === null || globalScope === void 0 ? void 0 : globalScope.innerHeight) !== null && _d !== void 0 ? _d : 0;
	var eventProperties = (_b = {}, _b[AMPLITUDE_EVENT_PROP_PAGE_URL] = (_e = globalScope === null || globalScope === void 0 ? void 0 : globalScope.location) === null || _e === void 0 ? void 0 : _e.href, _b[AMPLITUDE_EVENT_PROP_MAX_PAGE_X] = pageScrollMaxState.maxX + viewportWidth, _b[AMPLITUDE_EVENT_PROP_MAX_PAGE_Y] = pageScrollMaxState.maxY + viewportHeight, _b[AMPLITUDE_EVENT_PROP_VIEWPORT_HEIGHT] = viewportHeight, _b[AMPLITUDE_EVENT_PROP_VIEWPORT_WIDTH] = viewportWidth, _b["[Amplitude] Element Exposed"] = Array.from(currentElementExposed), _b);
	var pageViewId = getCurrentPageViewId();
	if (pageViewId) eventProperties[AMPLITUDE_EVENT_PROP_PAGE_VIEW_ID] = pageViewId;
	if (currentElementExposed.size === 0 && pageScrollMaxState.maxX === lastScroll.maxX && pageScrollMaxState.maxY === lastScroll.maxY) {
		if (isPageEnd) {
			scrollTracker.reset();
			elementExposedForPage.clear();
			exposureTracker === null || exposureTracker === void 0 || exposureTracker.reset();
		}
		return;
	}
	/* istanbul ignore next */
	amplitude === null || amplitude === void 0 || amplitude.track("[Amplitude] Viewport Content Updated", eventProperties);
	lastScroll.maxX = pageScrollMaxState.maxX;
	lastScroll.maxY = pageScrollMaxState.maxY;
	currentElementExposed.clear();
	if (isPageEnd) {
		scrollTracker.reset();
		elementExposedForPage.clear();
		exposureTracker === null || exposureTracker === void 0 || exposureTracker.reset();
	}
}
function onExposure(elementPath, elementExposedForPage, currentElementExposed, fireViewportContentUpdatedCallback) {
	if (elementExposedForPage.has(elementPath)) return;
	elementExposedForPage.add(elementPath);
	currentElementExposed.add(elementPath);
	var exposedArray = Array.from(currentElementExposed);
	if (JSON.stringify(exposedArray).length >= 18e3) fireViewportContentUpdatedCallback(false);
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/autocapture-plugin.js
var ObservablesEnum$1;
(function(ObservablesEnum) {
	ObservablesEnum["ClickObservable"] = "clickObservable";
	ObservablesEnum["ChangeObservable"] = "changeObservable";
	ObservablesEnum["NavigateObservable"] = "navigateObservable";
	ObservablesEnum["MutationObservable"] = "mutationObservable";
	ObservablesEnum["ScrollObservable"] = "scrollObservable";
	ObservablesEnum["ExposureObservable"] = "exposureObservable";
	ObservablesEnum["BrowserErrorObservable"] = "browserErrorObservable";
	ObservablesEnum["SelectionObservable"] = "selectionObservable";
	ObservablesEnum["MouseMoveObservable"] = "mouseMoveObservable";
})(ObservablesEnum$1 || (ObservablesEnum$1 = {}));
var autocapturePlugin = function(options, context) {
	var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
	if (options === void 0) options = {};
	context === null || context === void 0 || context.diagnosticsClient.setTag("plugin.autocapture.version", "1.24.1");
	var _m = options.dataAttributePrefix, dataAttributePrefix = _m === void 0 ? DEFAULT_DATA_ATTRIBUTE_PREFIX : _m, _o = options.visualTaggingOptions, visualTaggingOptions = _o === void 0 ? { enabled: true } : _o;
	options.cssSelectorAllowlist = (_a = options.cssSelectorAllowlist) !== null && _a !== void 0 ? _a : DEFAULT_CSS_SELECTOR_ALLOWLIST;
	options.actionClickAllowlist = (_b = options.actionClickAllowlist) !== null && _b !== void 0 ? _b : DEFAULT_ACTION_CLICK_ALLOWLIST;
	options.debounceTime = (_c = options.debounceTime) !== null && _c !== void 0 ? _c : 0;
	var resolvedExposureDuration = (_f = (_e = (_d = options.viewportContentUpdated) === null || _d === void 0 ? void 0 : _d.exposureDuration) !== null && _e !== void 0 ? _e : options.exposureDuration) !== null && _f !== void 0 ? _f : 150;
	options.viewportContentUpdated = __assign$1(__assign$1({}, options.viewportContentUpdated), { exposureDuration: resolvedExposureDuration });
	options.pageUrlExcludelist = (_g = options.pageUrlExcludelist) === null || _g === void 0 ? void 0 : _g.reduce(function(acc, excludePattern) {
		if (typeof excludePattern === "string") acc.push(excludePattern);
		if (excludePattern instanceof RegExp) acc.push(excludePattern);
		if (typeof excludePattern === "object" && excludePattern !== null && "pattern" in excludePattern) try {
			acc.push(new RegExp(excludePattern.pattern));
		} catch (regexError) {
			console.warn("Invalid regex pattern: ".concat(excludePattern.pattern), regexError);
			return acc;
		}
		return acc;
	}, []);
	var name = PLUGIN_NAME$2;
	var type = "enrichment";
	var subscriptions = [];
	var dataExtractor = new DataExtractor(options, context);
	var elementExposedForPage = /* @__PURE__ */ new Set();
	var currentElementExposed = /* @__PURE__ */ new Set();
	var beforeUnloadCleanup;
	var createObservables = function() {
		var _a;
		var clickObservable = multicast(createClickObservable().map(function(click) {
			return dataExtractor.addAdditionalEventProperties(click, "click", options.cssSelectorAllowlist, dataAttributePrefix);
		}));
		var changeObservable = multicast(new import_zen_observable.default(function(observer) {
			var _a;
			var handler = function(changeEvent) {
				var enrichedChangeEvent = dataExtractor.addAdditionalEventProperties(changeEvent, "change", options.cssSelectorAllowlist, dataAttributePrefix);
				observer.next(enrichedChangeEvent);
			};
			/* istanbul ignore next */
			(_a = getGlobalScope()) === null || _a === void 0 || _a.document.addEventListener("change", handler, { capture: true });
			/* istanbul ignore next */
			return function() {
				var _a;
				return (_a = getGlobalScope()) === null || _a === void 0 ? void 0 : _a.document.removeEventListener("change", handler);
			};
		}));
		var navigateObservable;
		/* istanbul ignore next */
		if (window.navigation) navigateObservable = multicast(new import_zen_observable.default(function(observer) {
			var handler = function(navigateEvent) {
				var enrichedNavigateEvent = dataExtractor.addAdditionalEventProperties(navigateEvent, "navigate", options.cssSelectorAllowlist, dataAttributePrefix);
				observer.next(enrichedNavigateEvent);
			};
			window.navigation.addEventListener("navigate", handler);
			return function() {
				window.navigation.removeEventListener("navigate", handler);
			};
		}));
		var mutationObservable = multicast(createMutationObservable().map(function(mutation) {
			return dataExtractor.addAdditionalEventProperties(mutation, "mutation", options.cssSelectorAllowlist, dataAttributePrefix);
		}));
		var scrollObservable = createScrollObservable();
		var exposureObservable = createExposureObservable(mutationObservable, options.cssSelectorAllowlist);
		return _a = {}, _a[ObservablesEnum$1.ChangeObservable] = changeObservable, _a[ObservablesEnum$1.ClickObservable] = clickObservable, _a[ObservablesEnum$1.MutationObservable] = mutationObservable, _a[ObservablesEnum$1.NavigateObservable] = navigateObservable, _a[ObservablesEnum$1.ScrollObservable] = scrollObservable, _a[ObservablesEnum$1.ExposureObservable] = exposureObservable, _a;
	};
	var groupedLabeledEvents = groupLabeledEventIdsByEventType(Object.values((_j = (_h = options.pageActions) === null || _h === void 0 ? void 0 : _h.labeledEvents) !== null && _j !== void 0 ? _j : {}));
	var labeledEventToTriggerMap = createLabeledEventToTriggerMap((_l = (_k = options.pageActions) === null || _k === void 0 ? void 0 : _k.triggers) !== null && _l !== void 0 ? _l : []);
	var evaluateTriggers = createTriggerEvaluator(groupedLabeledEvents, labeledEventToTriggerMap, dataExtractor, options);
	var recomputePageActionsData = function(remotePageActions) {
		var _a, _b;
		if (remotePageActions) {
			options.pageActions = __assign$1(__assign$1({}, options.pageActions), remotePageActions);
			groupedLabeledEvents = groupLabeledEventIdsByEventType(Object.values((_a = options.pageActions.labeledEvents) !== null && _a !== void 0 ? _a : {}));
			labeledEventToTriggerMap = createLabeledEventToTriggerMap((_b = options.pageActions.triggers) !== null && _b !== void 0 ? _b : []);
			evaluateTriggers.update(groupedLabeledEvents, labeledEventToTriggerMap, options);
		}
	};
	var setup = function(config, amplitude) {
		return __awaiter(void 0, void 0, void 0, function() {
			var pageViewEndFired, lastScroll, shouldTrackEvent, shouldTrackActionClick, allObservables, clickTrackingSubscription, changeSubscription, actionClickSubscription, scrollTracker, trackers, globalScope, handleViewportContentUpdated, handleExposure, beforeUnloadHandler, navigateObservable, popstateHandler_1, originalPushState_1, allowlist, actionClickAllowlist, messenger;
			var _a;
			return __generator(this, function(_b) {
				/* istanbul ignore if */
				if (typeof document === "undefined") return [2];
				pageViewEndFired = false;
				lastScroll = {
					maxX: void 0,
					maxY: void 0
				};
				if (config.fetchRemoteConfig) if (!config.remoteConfigClient) config.loggerProvider.debug("Remote config client is not provided, skipping remote config fetch");
				else config.remoteConfigClient.subscribe("configs.analyticsSDK.pageActions", "all", function(remoteConfig) {
					recomputePageActionsData(remoteConfig);
				});
				shouldTrackEvent = createShouldTrackEvent(options, options.cssSelectorAllowlist);
				shouldTrackActionClick = createShouldTrackEvent(options, options.actionClickAllowlist);
				allObservables = createObservables();
				clickTrackingSubscription = trackClicks({
					allObservables,
					amplitude,
					shouldTrackEvent,
					evaluateTriggers: evaluateTriggers.evaluate.bind(evaluateTriggers)
				});
				subscriptions.push(clickTrackingSubscription);
				changeSubscription = trackChange({
					allObservables,
					getEventProperties: function() {
						var args = [];
						for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
						return dataExtractor.getEventProperties.apply(dataExtractor, __spreadArray(__spreadArray([], __read$1(args), false), [dataAttributePrefix], false));
					},
					amplitude,
					shouldTrackEvent,
					evaluateTriggers: evaluateTriggers.evaluate.bind(evaluateTriggers)
				});
				subscriptions.push(changeSubscription);
				actionClickSubscription = trackActionClick({
					allObservables,
					options,
					getEventProperties: function() {
						var args = [];
						for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
						return dataExtractor.getEventProperties.apply(dataExtractor, __spreadArray(__spreadArray([], __read$1(args), false), [dataAttributePrefix], false));
					},
					amplitude,
					shouldTrackEvent,
					shouldTrackActionClick
				});
				if (actionClickSubscription) subscriptions.push(actionClickSubscription);
				scrollTracker = trackScroll({
					allObservables,
					amplitude
				});
				subscriptions.push(scrollTracker);
				trackers = {};
				globalScope = getGlobalScope();
				handleViewportContentUpdated = function(isPageEnd) {
					if (isPageEnd && pageViewEndFired) return;
					setTimeout(function() {
						pageViewEndFired = false;
					}, 100);
					pageViewEndFired = true;
					fireViewportContentUpdated({
						amplitude,
						scrollTracker,
						currentElementExposed,
						elementExposedForPage,
						exposureTracker: trackers.exposure,
						isPageEnd,
						lastScroll
					});
				};
				handleExposure = function(elementPath) {
					onExposure(elementPath, elementExposedForPage, currentElementExposed, handleViewportContentUpdated);
				};
				trackers.exposure = trackExposure({
					allObservables,
					onExposure: handleExposure,
					dataExtractor,
					exposureDuration: resolvedExposureDuration
				});
				if (trackers.exposure) subscriptions.push(trackers.exposure);
				beforeUnloadHandler = function() {
					handleViewportContentUpdated(true);
				};
				/* istanbul ignore next */
				globalScope === null || globalScope === void 0 || globalScope.addEventListener("beforeunload", beforeUnloadHandler);
				beforeUnloadCleanup = function() {
					/* istanbul ignore next */
					globalScope === null || globalScope === void 0 || globalScope.removeEventListener("beforeunload", beforeUnloadHandler);
				};
				subscriptions.push({ unsubscribe: function() {
					return beforeUnloadCleanup();
				} });
				navigateObservable = allObservables[ObservablesEnum$1.NavigateObservable];
				if (navigateObservable) subscriptions.push(navigateObservable.subscribe(function() {
					handleViewportContentUpdated(true);
				}));
				else if (globalScope) {
					popstateHandler_1 = function() {
						handleViewportContentUpdated(true);
					};
					/* istanbul ignore next */
					globalScope.addEventListener("popstate", popstateHandler_1);
					originalPushState_1 = globalScope.history.pushState;
					if (globalScope.history && originalPushState_1) globalScope.history.pushState = new Proxy(originalPushState_1, { apply: function(target, thisArg, _a) {
						var _b = __read$1(_a, 3), state = _b[0], unused = _b[1], url = _b[2];
						target.apply(thisArg, [
							state,
							unused,
							url
						]);
						handleViewportContentUpdated(true);
					} });
					subscriptions.push({ unsubscribe: function() {
						/* istanbul ignore next */
						globalScope.removeEventListener("popstate", popstateHandler_1);
						/* istanbul ignore next */
						if (globalScope.history && originalPushState_1) globalScope.history.pushState = originalPushState_1;
					} });
				}
				/* istanbul ignore next */
				(_a = config === null || config === void 0 ? void 0 : config.loggerProvider) === null || _a === void 0 || _a.log("".concat(name, " has been successfully added."));
				if (window.opener && visualTaggingOptions.enabled) {
					allowlist = options.cssSelectorAllowlist;
					actionClickAllowlist = options.actionClickAllowlist;
					messenger = getOrCreateWindowMessenger();
					enableVisualTagging(messenger, {
						dataExtractor,
						isElementSelectable: createShouldTrackEvent(options, __spreadArray(__spreadArray([], __read$1(allowlist), false), __read$1(actionClickAllowlist), false)),
						cssSelectorAllowlist: allowlist,
						actionClickAllowlist
					});
					enableBackgroundCapture(messenger);
					/* istanbul ignore next */
					messenger.setup(__assign$1({ logger: config === null || config === void 0 ? void 0 : config.loggerProvider }, (config === null || config === void 0 ? void 0 : config.serverZone) && { endpoint: AMPLITUDE_ORIGINS_MAP[config.serverZone] }));
				}
				return [2];
			});
		});
	};
	var execute = function(event) {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, event];
			});
		});
	};
	var teardown = function() {
		return __awaiter(void 0, void 0, void 0, function() {
			var subscriptions_1, subscriptions_1_1, subscription;
			var e_1, _a;
			return __generator(this, function(_b) {
				try {
					for (subscriptions_1 = __values$1(subscriptions), subscriptions_1_1 = subscriptions_1.next(); !subscriptions_1_1.done; subscriptions_1_1 = subscriptions_1.next()) {
						subscription = subscriptions_1_1.value;
						subscription.unsubscribe();
					}
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (subscriptions_1_1 && !subscriptions_1_1.done && (_a = subscriptions_1.return)) _a.call(subscriptions_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				return [2];
			});
		});
	};
	return {
		name,
		type,
		setup,
		execute,
		teardown
	};
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/autocapture/track-dead-click.js
var DEAD_CLICK_TIMEOUT = 3e3;
var CHANGE_EVENTS = ["mutation", "navigate"];
function trackDeadClick(_a) {
	var amplitude = _a.amplitude, allObservables = _a.allObservables, getEventProperties = _a.getEventProperties, shouldTrackDeadClick = _a.shouldTrackDeadClick;
	var clickObservable = allObservables.clickObservable, mutationObservable = allObservables.mutationObservable, navigateObservable = allObservables.navigateObservable;
	var clicksAndChangeObservable = merge(clickObservable.filter(function(click) {
		return filterOutNonTrackableEvents(click) && shouldTrackDeadClick("click", click.closestTrackedAncestor) && click.event.target instanceof Element && click.event.target.closest("a[target=\"_blank\"]") === null && click.event.button === MouseButton.LEFT_OR_TOUCH_CONTACT;
	}), navigateObservable ? merge(mutationObservable, navigateObservable) : mutationObservable);
	var deadClickTimer = null;
	return asyncMap(clicksAndChangeObservable, function(event) {
		if (deadClickTimer && CHANGE_EVENTS.includes(event.type)) {
			clearTimeout(deadClickTimer);
			deadClickTimer = null;
			return Promise.resolve(null);
		} else if (event.type === "click") {
			if (deadClickTimer) return Promise.resolve(null);
			return new Promise(function(resolve) {
				deadClickTimer = setTimeout(function() {
					resolve(event);
					deadClickTimer = null;
				}, DEAD_CLICK_TIMEOUT);
			});
		}
		return Promise.resolve(null);
	}).subscribe(function(actionClick) {
		if (!actionClick) return;
		var deadClickEvent = {
			"[Amplitude] X": actionClick.event.clientX,
			"[Amplitude] Y": actionClick.event.clientY
		};
		amplitude.track(AMPLITUDE_ELEMENT_DEAD_CLICKED_EVENT, __assign$1(__assign$1({}, getEventProperties("click", actionClick.closestTrackedAncestor)), deadClickEvent), { time: actionClick.timestamp });
	});
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/autocapture/track-rage-click.js
var RAGE_CLICK_THRESHOLD = 4;
var RAGE_CLICK_WINDOW_MS = DEFAULT_RAGE_CLICK_WINDOW_MS;
var RAGE_CLICK_OUT_OF_BOUNDS_THRESHOLD = 50;
function addCoordinates(regionBox, click) {
	var _a, _b, _c, _d;
	var _e = click.event, pageX = _e.pageX, pageY = _e.pageY;
	regionBox.yMin = Math.min((_a = regionBox.yMin) !== null && _a !== void 0 ? _a : pageY, pageY);
	regionBox.yMax = Math.max((_b = regionBox.yMax) !== null && _b !== void 0 ? _b : pageY, pageY);
	regionBox.xMin = Math.min((_c = regionBox.xMin) !== null && _c !== void 0 ? _c : pageX, pageX);
	regionBox.xMax = Math.max((_d = regionBox.xMax) !== null && _d !== void 0 ? _d : pageX, pageX);
	regionBox.isOutOfBounds = regionBox.yMax - regionBox.yMin > RAGE_CLICK_OUT_OF_BOUNDS_THRESHOLD || regionBox.xMax - regionBox.xMin > RAGE_CLICK_OUT_OF_BOUNDS_THRESHOLD;
}
function getRageClickAnalyticsEvent(clickWindow) {
	/* istanbul ignore if */
	if (clickWindow.length === 0) return null;
	var firstClick = clickWindow[0];
	var lastClick = clickWindow[clickWindow.length - 1];
	return {
		rageClickEvent: __assign$1({
			"[Amplitude] Begin Time": new Date(firstClick.timestamp).toISOString(),
			"[Amplitude] End Time": new Date(lastClick.timestamp).toISOString(),
			"[Amplitude] Duration": lastClick.timestamp - firstClick.timestamp,
			"[Amplitude] Clicks": clickWindow.map(function(click) {
				return {
					X: click.event.pageX,
					Y: click.event.pageY,
					Time: click.timestamp
				};
			}),
			"[Amplitude] Click Count": clickWindow.length
		}, firstClick.targetElementProperties),
		time: firstClick.timestamp
	};
}
function isClickOutsideRageClickWindow(clickWindow, click) {
	var firstClick = clickWindow[Math.max(0, clickWindow.length - RAGE_CLICK_THRESHOLD + 1)];
	return click.timestamp - firstClick.timestamp >= RAGE_CLICK_WINDOW_MS;
}
function isNewElement(clickWindow, click) {
	return clickWindow.length > 0 && clickWindow[clickWindow.length - 1].closestTrackedAncestor !== click.closestTrackedAncestor;
}
function trackRageClicks(_a) {
	var _this = this;
	var amplitude = _a.amplitude, allObservables = _a.allObservables, shouldTrackRageClick = _a.shouldTrackRageClick;
	var clickObservable = allObservables.clickObservable, selectionObservable = allObservables.selectionObservable;
	var clickWindow = [];
	var clickBoundingBox = {};
	var pendingRageClick = null;
	function resetClickWindow(click) {
		clickWindow = [];
		clickBoundingBox = {};
		if (click) {
			addCoordinates(clickBoundingBox, click);
			clickWindow.push(click);
		}
	}
	var rageClickObservable = asyncMap(clickObservable.filter(function(click) {
		return shouldTrackRageClick("click", click.closestTrackedAncestor);
	}), function(click) {
		return __awaiter(_this, void 0, void 0, function() {
			var resolutionValue;
			return __generator(this, function(_a) {
				addCoordinates(clickBoundingBox, click);
				resolutionValue = null;
				if (clickWindow.length === 0 || isNewElement(clickWindow, click) || isClickOutsideRageClickWindow(clickWindow, click) || clickBoundingBox.isOutOfBounds) {
					if (pendingRageClick) resolutionValue = getRageClickAnalyticsEvent(clickWindow);
					resetClickWindow(click);
				} else clickWindow.push(click);
				if (pendingRageClick) {
					clearTimeout(pendingRageClick.timerId);
					pendingRageClick.resolve(resolutionValue);
					pendingRageClick = null;
				}
				if (clickWindow.length >= RAGE_CLICK_THRESHOLD) return [2, new Promise(function(resolve) {
					pendingRageClick = {
						resolve,
						timerId: setTimeout(function() {
							resolve(getRageClickAnalyticsEvent(clickWindow));
						}, RAGE_CLICK_WINDOW_MS)
					};
				})];
				return [2, null];
			});
		});
	});
	/* istanbul ignore next */
	var selectionSubscription = selectionObservable === null || selectionObservable === void 0 ? void 0 : selectionObservable.subscribe(function() {
		resetClickWindow();
	});
	var rageClickSubscription = rageClickObservable.subscribe(function(data) {
		/* istanbul ignore if */
		if (data === null) return;
		amplitude.track(AMPLITUDE_ELEMENT_RAGE_CLICKED_EVENT, data.rageClickEvent, { time: data.time });
	});
	return { unsubscribe: function() {
		rageClickSubscription.unsubscribe();
		/* istanbul ignore next */
		selectionSubscription === null || selectionSubscription === void 0 || selectionSubscription.unsubscribe();
	} };
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/autocapture/track-error-click.js
var ERROR_CLICK_TIMEOUT = 2e3;
function trackErrorClicks(_a) {
	var amplitude = _a.amplitude, allObservables = _a.allObservables, shouldTrackErrorClick = _a.shouldTrackErrorClick;
	var clickObservable = allObservables.clickObservable, browserErrorObservable = allObservables.browserErrorObservable;
	var filteredClickObservable = clickObservable.filter(function(click) {
		return filterOutNonTrackableEvents(click) && shouldTrackErrorClick("click", click.closestTrackedAncestor) && click.event.target instanceof Element && click.event.target.closest("a[target=\"_blank\"]") === null && click.event.button === MouseButton.LEFT_OR_TOUCH_CONTACT;
	});
	var errorClickTimer = null;
	var latestClickEvent = null;
	var clearClickTimer = function() {
		if (errorClickTimer !== null) {
			clearTimeout(errorClickTimer);
			errorClickTimer = null;
		}
		latestClickEvent = null;
	};
	return merge(filteredClickObservable, browserErrorObservable).subscribe(function(event) {
		var _a;
		if (event.type === "click") {
			clearClickTimer();
			latestClickEvent = event;
			errorClickTimer = setTimeout(clearClickTimer, ERROR_CLICK_TIMEOUT);
			return;
		}
		if (event.type === "error" && latestClickEvent) {
			amplitude.track(AMPLITUDE_ELEMENT_ERROR_CLICKED_EVENT, __assign$1((_a = {}, _a["[Amplitude] Kind"] = event.event.kind, _a["[Amplitude] Message"] = event.event.message, _a["[Amplitude] Stack"] = event.event.stack, _a["[Amplitude] Filename"] = event.event.filename, _a["[Amplitude] Line Number"] = event.event.lineNumber, _a["[Amplitude] Column Number"] = event.event.columnNumber, _a), latestClickEvent.targetElementProperties));
			clearClickTimer();
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/autocapture/track-thrashed-cursor.js
var Direction;
(function(Direction) {
	Direction["INCREASING"] = "increasing";
	Direction["DECREASING"] = "decreasing";
})(Direction || (Direction = {}));
var Axis;
(function(Axis) {
	Axis["X"] = "x";
	Axis["Y"] = "y";
})(Axis || (Axis = {}));
var createMouseDirectionChangeObservable = function(_a) {
	var mouseMoveObservable = _a.allWindowObservables.mouseMoveObservable;
	return new import_zen_observable.default(function(observer) {
		var lastPosition = null;
		var xDirection = null;
		var yDirection = null;
		return mouseMoveObservable.subscribe(function(event) {
			var currentPosition = {
				x: event.clientX,
				y: event.clientY
			};
			if (lastPosition === null) {
				lastPosition = currentPosition;
				return;
			}
			if (currentPosition.x > lastPosition.x) {
				if (xDirection === Direction.DECREASING) observer.next(Axis.X);
				xDirection = Direction.INCREASING;
			} else if (currentPosition.x < lastPosition.x) {
				if (xDirection === Direction.INCREASING) observer.next(Axis.X);
				xDirection = Direction.DECREASING;
			}
			if (currentPosition.y > lastPosition.y) {
				if (yDirection === Direction.DECREASING) observer.next(Axis.Y);
				yDirection = Direction.INCREASING;
			} else if (currentPosition.y < lastPosition.y) {
				if (yDirection === Direction.INCREASING) observer.next(Axis.Y);
				yDirection = Direction.DECREASING;
			}
			lastPosition = currentPosition;
		});
	});
};
function addDirectionChange(directionChangeSeries) {
	var now = +Date.now();
	directionChangeSeries.startTime = directionChangeSeries.startTime || now;
	var changes = directionChangeSeries.changes, changesThreshold = directionChangeSeries.changesThreshold;
	changes.push(now);
	if (changes.length > changesThreshold) changes.shift();
}
function isThrashedCursor(directionChanges) {
	var changes = directionChanges.changes, changesThreshold = directionChanges.changesThreshold, thresholdMs = directionChanges.thresholdMs;
	if (changes.length < changesThreshold) return false;
	return changes[changes.length - 1] - changes[0] < thresholdMs;
}
function resetDirectionChangeSeries(directionChangeSeries) {
	directionChangeSeries.changes = [];
	directionChangeSeries.startTime = void 0;
}
function adjustWindow(directionChanges) {
	var changes = directionChanges.changes, thresholdMs = directionChanges.thresholdMs;
	var leftPtr = 0;
	var lastChange = changes[changes.length - 1];
	for (; leftPtr < changes.length; leftPtr++) if (lastChange - changes[leftPtr] < thresholdMs) break;
	if (leftPtr === 0) return;
	directionChanges.startTime = changes[leftPtr];
	directionChanges.changes.splice(0, leftPtr);
}
function getPendingThrashedCursor(directionChangesX, directionChangesY) {
	var startTime = void 0;
	if (isThrashedCursor(directionChangesX)) startTime = directionChangesX.startTime;
	if (isThrashedCursor(directionChangesY)) {
		var startTimeY = directionChangesY.startTime;
		if (startTimeY && (!startTime || startTimeY < startTime)) startTime = startTimeY;
	}
	return startTime;
}
var DEFAULT_THRESHOLD = 20;
var DEFAULT_WINDOW_MS = 2e3;
var createThrashedCursorObservable = function(_a) {
	var mouseDirectionChangeObservable = _a.mouseDirectionChangeObservable, _b = _a.directionChanges, directionChanges = _b === void 0 ? DEFAULT_THRESHOLD : _b, _c = _a.thresholdMs, thresholdMs = _c === void 0 ? DEFAULT_WINDOW_MS : _c;
	return new import_zen_observable.default(function(observer) {
		var xDirectionChanges = {
			changes: [],
			changesThreshold: directionChanges,
			thresholdMs
		};
		var yDirectionChanges = {
			changes: [],
			changesThreshold: directionChanges,
			thresholdMs
		};
		var pendingThrashedCursor = void 0;
		var timer = null;
		function emitPendingThrashedCursor() {
			if (pendingThrashedCursor !== void 0) {
				observer.next(pendingThrashedCursor);
				pendingThrashedCursor = void 0;
				if (timer !== null) clearTimeout(timer);
				resetDirectionChangeSeries(xDirectionChanges);
				resetDirectionChangeSeries(yDirectionChanges);
			}
		}
		return mouseDirectionChangeObservable.subscribe(function(axis) {
			if (timer !== null) clearTimeout(timer);
			addDirectionChange(axis === Axis.X ? xDirectionChanges : yDirectionChanges);
			var nextPendingThrashedCursor = getPendingThrashedCursor(xDirectionChanges, yDirectionChanges);
			if (nextPendingThrashedCursor) {
				pendingThrashedCursor = pendingThrashedCursor || nextPendingThrashedCursor;
				timer = setTimeout(function() {
					emitPendingThrashedCursor();
					timer = null;
				}, thresholdMs);
			} else emitPendingThrashedCursor();
			adjustWindow(xDirectionChanges);
			adjustWindow(yDirectionChanges);
			/* istanbul ignore next */
			return function() {
				/* istanbul ignore if */
				if (timer !== null) {
					clearTimeout(timer);
					timer = null;
				}
			};
		});
	});
};
var trackThrashedCursor = function(_a) {
	var amplitude = _a.amplitude, options = _a.options, allObservables = _a.allObservables, _b = _a.directionChanges, directionChanges = _b === void 0 ? DEFAULT_THRESHOLD : _b, _c = _a.thresholdMs, thresholdMs = _c === void 0 ? DEFAULT_WINDOW_MS : _c;
	return createThrashedCursorObservable({
		mouseDirectionChangeObservable: createMouseDirectionChangeObservable({ allWindowObservables: allObservables }),
		directionChanges,
		thresholdMs
	}).subscribe(function(time) {
		if (!isUrlAllowed(options)) return;
		amplitude.track(AMPLITUDE_THRASHED_CURSOR_EVENT, void 0, { time });
	});
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-autocapture-browser@1.24.1/node_modules/@amplitude/plugin-autocapture-browser/lib/esm/frustration-plugin.js
/**
* Helper function to extract the css selector allowlist
* from the frustration interactions options for a specific
* autocapture feature.
*/
function getCssSelectorAllowlist(options, attribute, defaultAllowlist, enabled) {
	if (!enabled) return [];
	var config = options[attribute];
	if (typeof config === "object" && config !== null && "cssSelectorAllowlist" in config && Array.isArray(config.cssSelectorAllowlist)) return config.cssSelectorAllowlist;
	return defaultAllowlist;
}
var MINIMUM_THRASHED_CURSOR_DIRECTION_CHANGES = 5;
var MAXIMUM_THRASHED_CURSOR_THRESHOLD = 4e3;
var frustrationPlugin = function(options) {
	var _a;
	if (options === void 0) options = {};
	var name = FRUSTRATION_PLUGIN_NAME;
	var type = "enrichment";
	var subscriptions = [];
	var isErrorClicksEnabled = options.errorClicks !== false;
	if (!options.errorClicks) isErrorClicksEnabled = false;
	var deadClicksEnabled = options.deadClicks !== false && options.deadClicks !== null;
	var rageClicksEnabled = options.rageClicks !== false && options.rageClicks !== null;
	var thrashedCursorEnabled = options.thrashedCursor !== false && options.thrashedCursor !== null;
	if (!options.thrashedCursor) thrashedCursorEnabled = false;
	var rageCssSelectors = getCssSelectorAllowlist(options, "rageClicks", DEFAULT_RAGE_CLICK_ALLOWLIST, rageClicksEnabled);
	var deadCssSelectors = getCssSelectorAllowlist(options, "deadClicks", DEFAULT_DEAD_CLICK_ALLOWLIST, deadClicksEnabled);
	var errorCssSelectors = getCssSelectorAllowlist(options, "errorClicks", DEFAULT_ERROR_CLICK_ALLOWLIST, isErrorClicksEnabled);
	var dataAttributePrefix = (_a = options.dataAttributePrefix) !== null && _a !== void 0 ? _a : DEFAULT_DATA_ATTRIBUTE_PREFIX;
	var dataExtractor = new DataExtractor(options);
	var combinedCssSelectors = __spreadArray([], __read$1(new Set(__spreadArray(__spreadArray(__spreadArray([], __read$1(rageCssSelectors), false), __read$1(deadCssSelectors), false), __read$1(errorCssSelectors), false))), false);
	var createObservables = function() {
		var _a;
		var clickObservable = multicast(createClickObservable("pointerdown").map(function(click) {
			return dataExtractor.addAdditionalEventProperties(click, "click", combinedCssSelectors, dataAttributePrefix, true);
		}));
		var browserErrorObservables = multicast(createErrorObservable().map(function(error) {
			return dataExtractor.addTypeAndTimestamp(error, "error");
		}));
		var enrichedMutationObservable = multicast(createMutationObservable().map(function(mutation) {
			return dataExtractor.addAdditionalEventProperties(mutation, "mutation", combinedCssSelectors, dataAttributePrefix);
		}));
		var enrichedNavigateObservable;
		if (window.navigation) enrichedNavigateObservable = multicast(new import_zen_observable.default(function(observer) {
			var handler = function(event) {
				observer.next(__assign$1(__assign$1({}, event), { type: "navigate" }));
			};
			window.navigation.addEventListener("navigate", handler);
			return function() {
				window.navigation.removeEventListener("navigate", handler);
			};
		}).map(function(navigate) {
			return dataExtractor.addAdditionalEventProperties(navigate, "navigate", combinedCssSelectors, dataAttributePrefix);
		}));
		var selectionObservable = multicast(new import_zen_observable.default(function(observer) {
			var handler = function() {
				var el = document.activeElement;
				if (el && (el.tagName === "TEXTAREA" || el.tagName === "INPUT")) {
					var start = void 0;
					var end = void 0;
					try {
						start = el.selectionStart;
						end = el.selectionEnd;
						if (start === end) return;
					} catch (error) {
						return;
					}
					return observer.next();
				}
				var selection = window.getSelection();
				if (!selection || selection.isCollapsed) return;
				return observer.next();
			};
			window.document.addEventListener("selectionchange", handler);
			return function() {
				window.document.removeEventListener("selectionchange", handler);
			};
		}));
		var mouseMoveObservable = multicast(createMouseMoveObservable());
		return _a = {}, _a[ObservablesEnum$1.ClickObservable] = clickObservable, _a[ObservablesEnum$1.MutationObservable] = enrichedMutationObservable, _a[ObservablesEnum$1.NavigateObservable] = enrichedNavigateObservable, _a[ObservablesEnum$1.BrowserErrorObservable] = browserErrorObservables, _a[ObservablesEnum$1.SelectionObservable] = selectionObservable, _a[ObservablesEnum$1.MouseMoveObservable] = mouseMoveObservable, _a;
	};
	var setup = function(config, amplitude) {
		return __awaiter(void 0, void 0, void 0, function() {
			var allObservables, shouldTrackRageClick, rageClickSubscription, shouldTrackDeadClick, deadClickSubscription, shouldTrackErrorClick, errorClickSubscription, directionChanges, thresholdMs, thrashedCursorSubscription;
			var _a;
			return __generator(this, function(_b) {
				/* istanbul ignore if */
				if (typeof document === "undefined") return [2];
				allObservables = createObservables();
				if (rageClicksEnabled) {
					shouldTrackRageClick = createShouldTrackEvent(options, rageCssSelectors);
					rageClickSubscription = trackRageClicks({
						allObservables,
						amplitude,
						shouldTrackRageClick
					});
					subscriptions.push(rageClickSubscription);
				}
				if (deadClicksEnabled) {
					shouldTrackDeadClick = createShouldTrackEvent(options, deadCssSelectors);
					deadClickSubscription = trackDeadClick({
						amplitude,
						allObservables,
						getEventProperties: function(actionType, element) {
							return dataExtractor.getEventProperties(actionType, element, dataAttributePrefix);
						},
						shouldTrackDeadClick
					});
					subscriptions.push(deadClickSubscription);
				}
				if (isErrorClicksEnabled) {
					shouldTrackErrorClick = createShouldTrackEvent(options, errorCssSelectors);
					errorClickSubscription = trackErrorClicks({
						amplitude,
						allObservables,
						shouldTrackErrorClick
					});
					subscriptions.push(errorClickSubscription);
				}
				if (thrashedCursorEnabled) {
					directionChanges = void 0, thresholdMs = void 0;
					if (typeof options.thrashedCursor === "object") {
						directionChanges = options.thrashedCursor.directionChanges;
						thresholdMs = options.thrashedCursor.threshold;
						if (directionChanges && directionChanges < MINIMUM_THRASHED_CURSOR_DIRECTION_CHANGES) {
							config.loggerProvider.warn("'thrashedCursor.directionChanges' of ".concat(directionChanges, " is below the minimum of ").concat(MINIMUM_THRASHED_CURSOR_DIRECTION_CHANGES, ", setting to ").concat(MINIMUM_THRASHED_CURSOR_DIRECTION_CHANGES));
							directionChanges = MINIMUM_THRASHED_CURSOR_DIRECTION_CHANGES;
						}
						if (thresholdMs && thresholdMs > MAXIMUM_THRASHED_CURSOR_THRESHOLD) {
							config.loggerProvider.warn("'thrashedCursor.threshold' of ".concat(thresholdMs, " is above the maximum of ").concat(MAXIMUM_THRASHED_CURSOR_THRESHOLD, ", setting to ").concat(MAXIMUM_THRASHED_CURSOR_THRESHOLD));
							thresholdMs = MAXIMUM_THRASHED_CURSOR_THRESHOLD;
						}
					}
					thrashedCursorSubscription = trackThrashedCursor({
						amplitude,
						options,
						allObservables,
						directionChanges,
						thresholdMs
					});
					subscriptions.push(thrashedCursorSubscription);
				}
				/* istanbul ignore next */
				(_a = config === null || config === void 0 ? void 0 : config.loggerProvider) === null || _a === void 0 || _a.log("".concat(name, " has been successfully added."));
				return [2];
			});
		});
	};
	var execute = function(event) {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, event];
			});
		});
	};
	var teardown = function() {
		return __awaiter(void 0, void 0, void 0, function() {
			var subscriptions_1, subscriptions_1_1, subscription;
			var e_1, _a;
			return __generator(this, function(_b) {
				try {
					for (subscriptions_1 = __values$1(subscriptions), subscriptions_1_1 = subscriptions_1.next(); !subscriptions_1_1.done; subscriptions_1_1 = subscriptions_1.next()) {
						subscription = subscriptions_1_1.value;
						subscription.unsubscribe();
					}
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (subscriptions_1_1 && !subscriptions_1_1.done && (_a = subscriptions_1.return)) _a.call(subscriptions_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				return [2];
			});
		});
	};
	return {
		name,
		type,
		setup,
		execute,
		teardown
	};
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-network-capture-browser@1.9.9/node_modules/@amplitude/plugin-network-capture-browser/lib/esm/constants.js
var PLUGIN_NAME$1 = "@amplitude/plugin-network-capture-browser";
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-network-capture-browser@1.9.9/node_modules/@amplitude/plugin-network-capture-browser/lib/esm/track-network-event.js
var DEFAULT_STATUS_CODE_RANGE = "500-599";
function wildcardMatch(str, pattern) {
	var regexPattern = "^" + pattern.replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&").replace(/\*/g, ".*") + "$";
	return new RegExp(regexPattern).test(str);
}
function isStatusCodeInRange(statusCode, range) {
	var e_1, _a;
	var ranges = range.split(",");
	try {
		for (var ranges_1 = __values$1(ranges), ranges_1_1 = ranges_1.next(); !ranges_1_1.done; ranges_1_1 = ranges_1.next()) {
			var r = ranges_1_1.value;
			var _b = __read$1(r.split("-").map(Number), 2), start = _b[0], end = _b[1];
			if (statusCode === start && end === void 0) return true;
			if (statusCode >= start && statusCode <= end) return true;
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (ranges_1_1 && !ranges_1_1.done && (_a = ranges_1.return)) _a.call(ranges_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	return false;
}
function isCaptureRuleMatch(rule, hostname, status, url, method) {
	if (rule.hosts && !rule.hosts.find(function(host) {
		return wildcardMatch(hostname, host);
	})) return;
	if (url && rule.urls && !isUrlMatchAllowlist(url, rule.urls)) return;
	if (method && rule.methods && !rule.methods.find(function(allowedMethod) {
		return method.toLowerCase() === allowedMethod.toLowerCase() || allowedMethod === "*";
	})) return;
	if (status || status === 0) {
		if (!isStatusCodeInRange(status, rule.statusCodeRange || DEFAULT_STATUS_CODE_RANGE)) return false;
	}
	return true;
}
function parseUrl(url) {
	var _a;
	if (!url) return;
	try {
		/* istanbul ignore next */
		var currentHref = (_a = getGlobalScope()) === null || _a === void 0 ? void 0 : _a.location.href;
		var urlObj = new URL(url, currentHref);
		var query = urlObj.searchParams.toString();
		var fragment = urlObj.hash.replace("#", "");
		var href = urlObj.href;
		var host = urlObj.host;
		urlObj.hash = "";
		urlObj.search = "";
		return {
			query,
			fragment,
			href,
			hrefWithoutQueryOrHash: urlObj.href,
			host
		};
	} catch (e) {
		/* istanbul ignore next */
		return;
	}
}
function isAmplitudeNetworkRequestEvent(host, requestWrapper) {
	if (host.includes("amplitude.com")) try {
		var body = requestWrapper.body;
		if (typeof body !== "string") return false;
		if (JSON.parse(body).events.find(function(event) {
			return event.event_type === "[Amplitude] Network Request";
		})) return true;
	} catch (e) {}
	return false;
}
/**
* Takes a user provided header capture rule and returns a
* HeaderCaptureRule object that sets proper default values.
*
* @param rule - The header capture rule to parse.
* @returns A HeaderCaptureRule object.
*/
function parseHeaderCaptureRule(rule) {
	if (typeof rule !== "object" || rule === null) {
		if (rule) return __spreadArray([], __read$1(SAFE_HEADERS), false);
		else if (rule === void 0) return void 0;
		return;
	}
	if (rule.length === 0) return;
	return rule;
}
function isBodyCaptureRuleEmpty(rule) {
	var _a, _b;
	/* istanbul ignore next */
	return !((_a = rule === null || rule === void 0 ? void 0 : rule.allowlist) === null || _a === void 0 ? void 0 : _a.length) && !((_b = rule === null || rule === void 0 ? void 0 : rule.blocklist) === null || _b === void 0 ? void 0 : _b.length);
}
function shouldTrackNetworkEvent(networkEvent, options) {
	var _a;
	if (options === void 0) options = {};
	var urlObj = parseUrl(networkEvent.url);
	/* istanbul ignore if */
	if (!urlObj)
 /* istanbul ignore next */
	return false;
	var host = urlObj.host;
	if (options.ignoreAmplitudeRequests !== false && (wildcardMatch(host, "*.amplitude.com") || wildcardMatch(host, "amplitude.com"))) return false;
	if ((_a = options.ignoreHosts) === null || _a === void 0 ? void 0 : _a.find(function(ignoreHost) {
		return wildcardMatch(host, ignoreHost);
	})) return false;
	if (!options.captureRules && networkEvent.status !== void 0 && !isStatusCodeInRange(networkEvent.status, DEFAULT_STATUS_CODE_RANGE)) return false;
	if (options.captureRules) {
		var isMatch_1;
		__spreadArray([], __read$1(options.captureRules), false).reverse().find(function(rule) {
			isMatch_1 = isCaptureRuleMatch(rule, host, networkEvent.status, networkEvent.url, networkEvent.method);
			if (isMatch_1) {
				var responseHeadersRule = parseHeaderCaptureRule(rule.responseHeaders);
				if (networkEvent.responseWrapper && responseHeadersRule) {
					var responseHeaders = networkEvent.responseWrapper.headers(responseHeadersRule);
					if (responseHeaders) networkEvent.responseHeaders = responseHeaders;
				}
				var requestHeadersRule = parseHeaderCaptureRule(rule.requestHeaders);
				if (networkEvent.requestWrapper && requestHeadersRule) {
					var requestHeaders = networkEvent.requestWrapper.headers(requestHeadersRule);
					if (requestHeaders) networkEvent.requestHeaders = requestHeaders;
				}
				if (networkEvent.responseWrapper && rule.responseBody && !isBodyCaptureRuleEmpty(rule.responseBody)) networkEvent.responseBodyJson = networkEvent.responseWrapper.json(rule.responseBody.allowlist, rule.responseBody.blocklist);
				if (networkEvent.requestWrapper && rule.requestBody && !isBodyCaptureRuleEmpty(rule.requestBody)) networkEvent.requestBodyJson = networkEvent.requestWrapper.json(rule.requestBody.allowlist, rule.requestBody.blocklist);
			}
			return isMatch_1 !== void 0;
		});
		if (!isMatch_1) return false;
	}
	if (networkEvent.requestWrapper && isAmplitudeNetworkRequestEvent(host, networkEvent.requestWrapper)) return false;
	return true;
}
function logNetworkAnalyticsEvent(networkAnalyticsEvent, request, amplitude, loggerProvider) {
	return __awaiter(this, void 0, void 0, function() {
		var _a, requestBody, responseBody;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					if (!(request.requestBodyJson || request.responseBodyJson)) return [3, 2];
					return [4, Promise.all([request.requestBodyJson, request.responseBodyJson])];
				case 1:
					_a = __read$1.apply(void 0, [_b.sent(), 2]), requestBody = _a[0], responseBody = _a[1];
					if (requestBody) try {
						networkAnalyticsEvent["[Amplitude] Request Body"] = JSON.stringify(requestBody);
					} catch (e) {
						/* istanbul ignore next */
						loggerProvider === null || loggerProvider === void 0 || loggerProvider.debug("Failed to stringify request body", e);
					}
					if (responseBody) try {
						networkAnalyticsEvent["[Amplitude] Response Body"] = JSON.stringify(responseBody);
					} catch (e) {
						/* istanbul ignore next */
						loggerProvider === null || loggerProvider === void 0 || loggerProvider.debug("Failed to stringify response body");
					}
					_b.label = 2;
				case 2:
					/* istanbul ignore next */
					amplitude === null || amplitude === void 0 || amplitude.track("[Amplitude] Network Request", networkAnalyticsEvent);
					return [2];
			}
		});
	});
}
function trackNetworkEvents(_a) {
	var allObservables = _a.allObservables, networkTrackingOptions = _a.networkTrackingOptions, amplitude = _a.amplitude, loggerProvider = _a.loggerProvider;
	return allObservables.networkObservable.filter(function(event) {
		return shouldTrackNetworkEvent(event.event, networkTrackingOptions);
	}).subscribe(function(networkEvent) {
		var _a;
		var _b, _c;
		var request = networkEvent.event;
		var urlObj = parseUrl(request.url);
		/* istanbul ignore if */
		if (!urlObj)
 /* istanbul ignore next */
		return;
		var responseBodySize = (_b = request.responseWrapper) === null || _b === void 0 ? void 0 : _b.bodySize;
		/* istanbul ignore next */
		var requestBodySize = (_c = request.requestWrapper) === null || _c === void 0 ? void 0 : _c.bodySize;
		logNetworkAnalyticsEvent((_a = {}, _a["[Amplitude] URL"] = urlObj.hrefWithoutQueryOrHash, _a["[Amplitude] URL Query"] = urlObj.query, _a["[Amplitude] URL Fragment"] = urlObj.fragment, _a["[Amplitude] Request Method"] = request.method, _a["[Amplitude] Status Code"] = request.status, _a["[Amplitude] Start Time"] = request.startTime, _a["[Amplitude] Completion Time"] = request.endTime, _a["[Amplitude] Duration"] = request.duration, _a["[Amplitude] Request Body Size"] = requestBodySize, _a["[Amplitude] Response Body Size"] = responseBodySize, _a["[Amplitude] Request Type"] = request.type, _a["[Amplitude] Request Headers"] = request.requestHeaders, _a["[Amplitude] Response Headers"] = request.responseHeaders, _a), request, amplitude, loggerProvider);
	});
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-network-capture-browser@1.9.9/node_modules/@amplitude/plugin-network-capture-browser/lib/esm/network-capture-plugin.js
var ObservablesEnum;
(function(ObservablesEnum) {
	ObservablesEnum["NetworkObservable"] = "networkObservable";
})(ObservablesEnum || (ObservablesEnum = {}));
var subscription;
var networkCapturePlugin = function(options) {
	if (options === void 0) options = {};
	var name = PLUGIN_NAME$1;
	var type = "enrichment";
	var logger;
	var addAdditionalEventProperties = function(event, type) {
		return {
			event,
			timestamp: Date.now(),
			type
		};
	};
	var createObservables = function() {
		var _a;
		var networkObservable = new import_zen_observable.default(function(observer) {
			var callback = new NetworkEventCallback(function(event) {
				var eventWithProperties = addAdditionalEventProperties(event, "network");
				observer.next(eventWithProperties);
			});
			networkObserver.subscribe(callback, logger);
			return function() {
				networkObserver.unsubscribe(callback);
			};
		});
		return _a = {}, _a[ObservablesEnum.NetworkObservable] = networkObservable, _a;
	};
	var setup = function(config, amplitude) {
		return __awaiter(void 0, void 0, void 0, function() {
			var allObservables;
			return __generator(this, function(_a) {
				/* istanbul ignore if */
				if (typeof document === "undefined") return [2];
				allObservables = createObservables();
				/* istanbul ignore next */
				logger = config === null || config === void 0 ? void 0 : config.loggerProvider;
				subscription = trackNetworkEvents({
					allObservables,
					networkTrackingOptions: options,
					amplitude,
					loggerProvider: logger
				});
				/* istanbul ignore next */
				logger === null || logger === void 0 || logger.log("".concat(name, " has been successfully added."));
				return [2];
			});
		});
	};
	/* istanbul ignore next */
	var execute = function(event) {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, event];
			});
		});
	};
	var teardown = function() {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				subscription.unsubscribe();
				return [2];
			});
		});
	};
	return {
		name,
		type,
		setup,
		execute,
		teardown
	};
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-web-vitals-browser@1.1.24/node_modules/@amplitude/plugin-web-vitals-browser/lib/esm/constants.js
var PLUGIN_NAME = "web-vitals-browser";
var WEB_VITALS_EVENT_NAME = "[Amplitude] Web Vitals";
//#endregion
//#region node_modules/.pnpm/web-vitals@5.1.0/node_modules/web-vitals/dist/web-vitals.js
var e = -1;
var t = (t) => {
	addEventListener("pageshow", ((n) => {
		n.persisted && (e = n.timeStamp, t(n));
	}), !0);
}, n = (e, t, n, i) => {
	let s, o;
	return (r) => {
		t.value >= 0 && (r || i) && (o = t.value - (s ?? 0), (o || void 0 === s) && (s = t.value, t.delta = o, t.rating = ((e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good")(t.value, n), e(t)));
	};
}, i = (e) => {
	requestAnimationFrame((() => requestAnimationFrame((() => e()))));
}, s = () => {
	const e = performance.getEntriesByType("navigation")[0];
	if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e;
}, o = () => {
	return s()?.activationStart ?? 0;
}, r = (t, n = -1) => {
	const i = s();
	let r = "navigate";
	e >= 0 ? r = "back-forward-cache" : i && (document.prerendering || o() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : i.type && (r = i.type.replace(/_/g, "-")));
	return {
		name: t,
		value: n,
		rating: "good",
		delta: 0,
		entries: [],
		id: `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 0xe8d4a51000}`,
		navigationType: r
	};
}, c = /* @__PURE__ */ new WeakMap();
function a(e, t) {
	return c.get(e) || c.set(e, new t()), c.get(e);
}
var d = class {
	t;
	i = 0;
	o = [];
	h(e) {
		if (e.hadRecentInput) return;
		const t = this.o[0], n = this.o.at(-1);
		this.i && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this.i += e.value, this.o.push(e)) : (this.i = e.value, this.o = [e]), this.t?.(e);
	}
};
var h = (e, t, n = {}) => {
	try {
		if (PerformanceObserver.supportedEntryTypes.includes(e)) {
			const i = new PerformanceObserver(((e) => {
				Promise.resolve().then((() => {
					t(e.getEntries());
				}));
			}));
			return i.observe({
				type: e,
				buffered: !0,
				...n
			}), i;
		}
	} catch {}
}, f = (e) => {
	let t = !1;
	return () => {
		t || (e(), t = !0);
	};
};
var u = -1;
var l = /* @__PURE__ */ new Set(), m = () => "hidden" !== document.visibilityState || document.prerendering ? Infinity : 0, p = (e) => {
	if ("hidden" === document.visibilityState) {
		if ("visibilitychange" === e.type) for (const e of l) e();
		isFinite(u) || (u = "visibilitychange" === e.type ? e.timeStamp : 0, removeEventListener("prerenderingchange", p, !0));
	}
}, v = () => {
	if (u < 0) {
		const e = o();
		u = (document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter(((t) => "hidden" === t.name && t.startTime > e))[0]?.startTime) ?? m(), addEventListener("visibilitychange", p, !0), addEventListener("prerenderingchange", p, !0), t((() => {
			setTimeout((() => {
				u = m();
			}));
		}));
	}
	return {
		get firstHiddenTime() {
			return u;
		},
		onHidden(e) {
			l.add(e);
		}
	};
}, g = (e) => {
	document.prerendering ? addEventListener("prerenderingchange", (() => e()), !0) : e();
}, y = [1800, 3e3], E = (e, s = {}) => {
	g((() => {
		const c = v();
		let a, d = r("FCP");
		const f = h("paint", ((e) => {
			for (const t of e) "first-contentful-paint" === t.name && (f.disconnect(), t.startTime < c.firstHiddenTime && (d.value = Math.max(t.startTime - o(), 0), d.entries.push(t), a(!0)));
		}));
		f && (a = n(e, d, y, s.reportAllChanges), t(((t) => {
			d = r("FCP"), a = n(e, d, y, s.reportAllChanges), i((() => {
				d.value = performance.now() - t.timeStamp, a(!0);
			}));
		})));
	}));
}, b = [.1, .25], L = (e, s = {}) => {
	const o = v();
	E(f((() => {
		let c, f = r("CLS", 0);
		const u = a(s, d), l = (e) => {
			for (const t of e) u.h(t);
			u.i > f.value && (f.value = u.i, f.entries = u.o, c());
		}, m = h("layout-shift", l);
		m && (c = n(e, f, b, s.reportAllChanges), o.onHidden((() => {
			l(m.takeRecords()), c(!0);
		})), t((() => {
			u.i = 0, f = r("CLS", 0), c = n(e, f, b, s.reportAllChanges), i((() => c()));
		})), setTimeout(c));
	})));
};
var P = 0, T = Infinity, _ = 0;
var M = (e) => {
	for (const t of e) t.interactionId && (T = Math.min(T, t.interactionId), _ = Math.max(_, t.interactionId), P = _ ? (_ - T) / 7 + 1 : 0);
};
var w;
var C = () => w ? P : performance.interactionCount ?? 0, I = () => {
	"interactionCount" in performance || w || (w = h("event", M, {
		type: "event",
		buffered: !0,
		durationThreshold: 0
	}));
};
var F = 0;
var k = class {
	u = [];
	l = /* @__PURE__ */ new Map();
	m;
	p;
	v() {
		F = C(), this.u.length = 0, this.l.clear();
	}
	L() {
		const e = Math.min(this.u.length - 1, Math.floor((C() - F) / 50));
		return this.u[e];
	}
	h(e) {
		if (this.m?.(e), !e.interactionId && "first-input" !== e.entryType) return;
		const t = this.u.at(-1);
		let n = this.l.get(e.interactionId);
		if (n || this.u.length < 10 || e.duration > t.P) {
			if (n ? e.duration > n.P ? (n.entries = [e], n.P = e.duration) : e.duration === n.P && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
				id: e.interactionId,
				entries: [e],
				P: e.duration
			}, this.l.set(n.id, n), this.u.push(n)), this.u.sort(((e, t) => t.P - e.P)), this.u.length > 10) {
				const e = this.u.splice(10);
				for (const t of e) this.l.delete(t.id);
			}
			this.p?.(n);
		}
	}
};
var A = (e) => {
	const t = globalThis.requestIdleCallback || setTimeout;
	"hidden" === document.visibilityState ? e() : (e = f(e), addEventListener("visibilitychange", e, {
		once: !0,
		capture: !0
	}), t((() => {
		e(), removeEventListener("visibilitychange", e, { capture: !0 });
	})));
}, B = [200, 500], S = (e, i = {}) => {
	if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
	const s = v();
	g((() => {
		I();
		let o, c = r("INP");
		const d = a(i, k), f = (e) => {
			A((() => {
				for (const t of e) d.h(t);
				const t = d.L();
				t && t.P !== c.value && (c.value = t.P, c.entries = t.entries, o());
			}));
		}, u = h("event", f, { durationThreshold: i.durationThreshold ?? 40 });
		o = n(e, c, B, i.reportAllChanges), u && (u.observe({
			type: "first-input",
			buffered: !0
		}), s.onHidden((() => {
			f(u.takeRecords()), o(!0);
		})), t((() => {
			d.v(), c = r("INP"), o = n(e, c, B, i.reportAllChanges);
		})));
	}));
};
var N = class {
	m;
	h(e) {
		this.m?.(e);
	}
};
var q = [2500, 4e3], x = (e, s = {}) => {
	g((() => {
		const c = v();
		let d, u = r("LCP");
		const l = a(s, N), m = (e) => {
			s.reportAllChanges || (e = e.slice(-1));
			for (const t of e) l.h(t), t.startTime < c.firstHiddenTime && (u.value = Math.max(t.startTime - o(), 0), u.entries = [t], d());
		}, p = h("largest-contentful-paint", m);
		if (p) {
			d = n(e, u, q, s.reportAllChanges);
			const o = f((() => {
				m(p.takeRecords()), p.disconnect(), d(!0);
			})), c = (e) => {
				e.isTrusted && (A(o), removeEventListener(e.type, c, { capture: !0 }));
			};
			for (const e of [
				"keydown",
				"click",
				"visibilitychange"
			]) addEventListener(e, c, { capture: !0 });
			t(((t) => {
				u = r("LCP"), d = n(e, u, q, s.reportAllChanges), i((() => {
					u.value = performance.now() - t.timeStamp, d(!0);
				}));
			}));
		}
	}));
}, H = [800, 1800], O = (e) => {
	document.prerendering ? g((() => O(e))) : "complete" !== document.readyState ? addEventListener("load", (() => O(e)), !0) : setTimeout(e);
}, $ = (e, i = {}) => {
	let c = r("TTFB"), a = n(e, c, H, i.reportAllChanges);
	O((() => {
		const d = s();
		d && (c.value = Math.max(d.responseStart - o(), 0), c.entries = [d], a(!0), t((() => {
			c = r("TTFB", 0), a = n(e, c, H, i.reportAllChanges), a(!0);
		})));
	}));
};
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-web-vitals-browser@1.1.24/node_modules/@amplitude/plugin-web-vitals-browser/lib/esm/web-vitals-plugin.js
function getMetricStartTime(metric) {
	var _a;
	/* istanbul ignore next */
	var startTime = ((_a = metric.entries[0]) === null || _a === void 0 ? void 0 : _a.startTime) || 0;
	return performance.timeOrigin + startTime;
}
function processMetric(metric) {
	return {
		value: metric.value,
		rating: metric.rating,
		delta: metric.delta,
		navigationType: metric.navigationType,
		id: metric.id,
		timestamp: Math.floor(getMetricStartTime(metric)),
		navigationStart: Math.floor(performance.timeOrigin)
	};
}
var webVitalsPlugin = function() {
	var visibilityListener = null;
	var globalScope = getGlobalScope();
	var doc = globalScope === null || globalScope === void 0 ? void 0 : globalScope.document;
	var location = globalScope === null || globalScope === void 0 ? void 0 : globalScope.location;
	var setup = function(config, amplitude) {
		return __awaiter(void 0, void 0, void 0, function() {
			var locationHref, webVitalsPayload;
			return __generator(this, function(_a) {
				if (doc === void 0) return [2];
				locationHref = getDecodeURI(
					/* istanbul ignore next */
					(location === null || location === void 0 ? void 0 : location.href) || "",
					config.loggerProvider
				);
				webVitalsPayload = {
					"[Amplitude] Page Domain": (location === null || location === void 0 ? void 0 : location.hostname) || "",
					"[Amplitude] Page Location": locationHref,
					"[Amplitude] Page Path": getDecodeURI(
						/* istanbul ignore next */
						(location === null || location === void 0 ? void 0 : location.pathname) || "",
						config.loggerProvider
					),
					"[Amplitude] Page Title": typeof document !== "undefined" && document.title || "",
					"[Amplitude] Page URL": getDecodeURI(locationHref.split("?")[0], config.loggerProvider)
				};
				x(function(metric) {
					webVitalsPayload["[Amplitude] LCP"] = processMetric(metric);
				});
				E(function(metric) {
					webVitalsPayload["[Amplitude] FCP"] = processMetric(metric);
				});
				S(function(metric) {
					webVitalsPayload["[Amplitude] INP"] = processMetric(metric);
				});
				L(function(metric) {
					webVitalsPayload["[Amplitude] CLS"] = processMetric(metric);
				});
				$(function(metric) {
					webVitalsPayload["[Amplitude] TTFB"] = processMetric(metric);
				});
				visibilityListener = function() {
					if (doc.visibilityState === "hidden" && visibilityListener) {
						amplitude.track(WEB_VITALS_EVENT_NAME, webVitalsPayload);
						doc.removeEventListener("visibilitychange", visibilityListener);
						visibilityListener = null;
					}
				};
				doc.addEventListener("visibilitychange", visibilityListener);
				return [2];
			});
		});
	};
	var execute = function(event) {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, event];
			});
		});
	};
	var teardown = function() {
		return __awaiter(void 0, void 0, void 0, function() {
			return __generator(this, function(_a) {
				if (visibilityListener)
 /* istanbul ignore next */
				doc === null || doc === void 0 || doc.removeEventListener("visibilitychange", visibilityListener);
				return [2];
			});
		});
	};
	return {
		name: PLUGIN_NAME,
		type: "enrichment",
		setup,
		execute,
		teardown
	};
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/attribution/web-attribution.js
var WebAttribution = function() {
	function WebAttribution(options, config) {
		var _a;
		this.shouldTrackNewCampaign = false;
		this.options = __assign$1({
			initialEmptyValue: "EMPTY",
			resetSessionOnNewCampaign: false,
			excludeReferrers: getDefaultExcludedReferrers(((_a = config.cookieOptions) === null || _a === void 0 ? void 0 : _a.domain) || config.topLevelDomain),
			optOut: config.optOut
		}, options);
		this.storage = config.cookieStorage;
		this.storageKey = getStorageKey(config.apiKey, "MKTG");
		this.webExpStorageKey = getStorageKey(config.apiKey, "MKTG_ORIGINAL");
		this.currentCampaign = BASE_CAMPAIGN;
		this.sessionTimeout = config.sessionTimeout;
		this.lastEventTime = config.lastEventTime;
		this.logger = config.loggerProvider;
		this.topLevelDomain = config.topLevelDomain;
		config.loggerProvider.log("Installing web attribution tracking.");
	}
	WebAttribution.prototype.init = function() {
		return __awaiter(this, void 0, void 0, function() {
			var isEventInNewSession;
			var _a;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						if (this.options.optOut) return [2];
						return [4, this.fetchCampaign()];
					case 1:
						_a = __read$1.apply(void 0, [_b.sent(), 2]), this.currentCampaign = _a[0], this.previousCampaign = _a[1];
						isEventInNewSession = !this.lastEventTime ? true : isNewSession(this.sessionTimeout, this.lastEventTime);
						if (!isNewCampaign(this.currentCampaign, this.previousCampaign, this.options, this.logger, isEventInNewSession, this.topLevelDomain)) return [3, 3];
						this.shouldTrackNewCampaign = true;
						return [4, this.storage.set(this.storageKey, this.currentCampaign)];
					case 2:
						_b.sent();
						_b.label = 3;
					case 3: return [2];
				}
			});
		});
	};
	WebAttribution.prototype.fetchCampaign = function() {
		return __awaiter(this, void 0, void 0, function() {
			var originalCampaign;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0: return [4, this.storage.get(this.webExpStorageKey)];
					case 1:
						originalCampaign = _a.sent();
						if (!originalCampaign) return [3, 3];
						return [4, this.storage.remove(this.webExpStorageKey)];
					case 2:
						_a.sent();
						_a.label = 3;
					case 3: return [4, Promise.all([originalCampaign || new CampaignParser().parse(), this.storage.get(this.storageKey)])];
					case 4: return [2, _a.sent()];
				}
			});
		});
	};
	/**
	* This can be called when enable web attribution and either
	* 1. set a new session
	* 2. has new campaign and enable resetSessionOnNewCampaign
	*/
	WebAttribution.prototype.generateCampaignEvent = function(event_id) {
		this.shouldTrackNewCampaign = false;
		var campaignEvent = createCampaignEvent(this.currentCampaign, this.options);
		if (event_id) campaignEvent.event_id = event_id;
		return campaignEvent;
	};
	WebAttribution.prototype.shouldSetSessionIdOnNewCampaign = function() {
		return this.shouldTrackNewCampaign && !!this.options.resetSessionOnNewCampaign;
	};
	return WebAttribution;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-page-url-enrichment-browser@0.7.0/node_modules/@amplitude/plugin-page-url-enrichment-browser/lib/esm/page-url-enrichment.js
var CURRENT_PAGE_STORAGE_KEY = "AMP_CURRENT_PAGE";
var PREVIOUS_PAGE_STORAGE_KEY = "AMP_PREVIOUS_PAGE";
var URL_INFO_STORAGE_KEY = "AMP_URL_INFO";
var PreviousPageType;
(function(PreviousPageType) {
	PreviousPageType["Direct"] = "direct";
	PreviousPageType["Internal"] = "internal";
	PreviousPageType["External"] = "external";
})(PreviousPageType || (PreviousPageType = {}));
var EXCLUDED_DEFAULT_EVENT_TYPES = new Set([
	SpecialEventType.IDENTIFY,
	SpecialEventType.GROUP_IDENTIFY,
	SpecialEventType.REVENUE
]);
var pageUrlEnrichmentPlugin = function(_a) {
	var _c = (_a === void 0 ? {} : _a).internalDomains, internalDomains = _c === void 0 ? [] : _c;
	var globalScope = getGlobalScope();
	var sessionStorage = void 0;
	var isStorageEnabled = false;
	var loggerProvider = void 0;
	var isProxied = false;
	var isTracking = false;
	var getHostname = function(url) {
		var hostname;
		try {
			var decodedUrl = getDecodeURI(url, loggerProvider);
			hostname = new URL(decodedUrl).hostname;
		} catch (e) {
			/* istanbul ignore next */
			loggerProvider === null || loggerProvider === void 0 || loggerProvider.error("Could not parse URL: ", e);
		}
		return hostname;
	};
	var getPrevPageType = function(previousPage) {
		var currentDomain = typeof location !== "undefined" && location.hostname || "";
		var previousPageDomain = previousPage ? getHostname(previousPage) : void 0;
		if (!previousPageDomain) return PreviousPageType.Direct;
		var isCurrentInternal = internalDomains.some(function(domain) {
			return currentDomain.indexOf(domain) !== -1;
		});
		var isPrevInternal = internalDomains.some(function(domain) {
			return previousPageDomain.indexOf(domain) !== -1;
		});
		if (currentDomain === previousPageDomain || isPrevInternal && isCurrentInternal) return PreviousPageType.Internal;
		return PreviousPageType.External;
	};
	var saveURLInfo = function() {
		return __awaiter(void 0, void 0, void 0, function() {
			var URLInfo, currentURL, storedCurrentURL, previousURL;
			var _a;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						if (!(sessionStorage && isStorageEnabled)) return [3, 3];
						return [4, sessionStorage.get(URL_INFO_STORAGE_KEY)];
					case 1:
						URLInfo = _b.sent();
						currentURL = getDecodeURI(typeof location !== "undefined" && location.href || "");
						storedCurrentURL = (URLInfo === null || URLInfo === void 0 ? void 0 : URLInfo["AMP_CURRENT_PAGE"]) || "";
						previousURL = void 0;
						if (currentURL === storedCurrentURL) previousURL = (URLInfo === null || URLInfo === void 0 ? void 0 : URLInfo["AMP_PREVIOUS_PAGE"]) || "";
						else if (storedCurrentURL) previousURL = storedCurrentURL;
						else previousURL = document.referrer || "";
						return [4, sessionStorage.set(URL_INFO_STORAGE_KEY, (_a = {}, _a[CURRENT_PAGE_STORAGE_KEY] = currentURL, _a[PREVIOUS_PAGE_STORAGE_KEY] = previousURL, _a))];
					case 2:
						_b.sent();
						_b.label = 3;
					case 3: return [2];
				}
			});
		});
	};
	var saveUrlInfoWrapper = function() {
		saveURLInfo();
	};
	return {
		name: "@amplitude/plugin-page-url-enrichment-browser",
		type: "enrichment",
		setup: function(config, _) {
			return __awaiter(void 0, void 0, void 0, function() {
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0:
							loggerProvider = config.loggerProvider;
							loggerProvider.log("Installing @amplitude/plugin-page-url-enrichment-browser");
							isTracking = true;
							if (!globalScope) return [3, 2];
							sessionStorage = new BrowserStorage(globalScope.sessionStorage);
							return [4, sessionStorage.isEnabled()];
						case 1:
							isStorageEnabled = _a.sent();
							globalScope.addEventListener("popstate", saveUrlInfoWrapper);
							if (!isProxied) {
								/* istanbul ignore next */
								globalScope.history.pushState = new Proxy(globalScope.history.pushState, { apply: function(target, thisArg, _a) {
									var _b = __read$1(_a, 3), state = _b[0], unused = _b[1], url = _b[2];
									target.apply(thisArg, [
										state,
										unused,
										url
									]);
									if (isTracking) saveUrlInfoWrapper();
								} });
								globalScope.history.replaceState = new Proxy(globalScope.history.replaceState, { apply: function(target, thisArg, _a) {
									var _b = __read$1(_a, 3), state = _b[0], unused = _b[1], url = _b[2];
									target.apply(thisArg, [
										state,
										unused,
										url
									]);
									if (isTracking) saveUrlInfoWrapper();
								} });
								isProxied = true;
							}
							_a.label = 2;
						case 2: return [2];
					}
				});
			});
		},
		execute: function(event) {
			return __awaiter(void 0, void 0, void 0, function() {
				var locationHREF, URLInfo, updatedURLInfo, previousPage;
				var _a;
				return __generator(this, function(_b) {
					switch (_b.label) {
						case 0:
							locationHREF = getDecodeURI(typeof location !== "undefined" && location.href || "");
							if (!(sessionStorage && isStorageEnabled)) return [3, 5];
							return [4, sessionStorage.get(URL_INFO_STORAGE_KEY)];
						case 1:
							URLInfo = _b.sent();
							if (!!(URLInfo === null || URLInfo === void 0 ? void 0 : URLInfo["AMP_CURRENT_PAGE"])) return [3, 3];
							return [4, sessionStorage.set(URL_INFO_STORAGE_KEY, (_a = {}, _a[CURRENT_PAGE_STORAGE_KEY] = locationHREF, _a[PREVIOUS_PAGE_STORAGE_KEY] = document.referrer || "", _a))];
						case 2:
							_b.sent();
							_b.label = 3;
						case 3: return [4, sessionStorage.get(URL_INFO_STORAGE_KEY)];
						case 4:
							updatedURLInfo = _b.sent();
							previousPage = "";
							if (updatedURLInfo) previousPage = updatedURLInfo["AMP_PREVIOUS_PAGE"] || "";
							if (EXCLUDED_DEFAULT_EVENT_TYPES.has(event.event_type)) return [2, event];
							event.event_properties = __assign$1(__assign$1({}, event.event_properties || {}), {
								"[Amplitude] Page Domain": addIfNotExist(event, "[Amplitude] Page Domain", typeof location !== "undefined" && location.hostname || ""),
								"[Amplitude] Page Location": addIfNotExist(event, "[Amplitude] Page Location", locationHREF),
								"[Amplitude] Page Path": addIfNotExist(event, "[Amplitude] Page Path", typeof location !== "undefined" && getDecodeURI(location.pathname) || ""),
								"[Amplitude] Page Title": addIfNotExist(event, "[Amplitude] Page Title", getPageTitle(replaceSensitiveString)),
								"[Amplitude] Page URL": addIfNotExist(event, "[Amplitude] Page URL", locationHREF.split("?")[0]),
								"[Amplitude] Previous Page Location": previousPage,
								"[Amplitude] Previous Page Type": getPrevPageType(previousPage)
							});
							_b.label = 5;
						case 5: return [2, event];
					}
				});
			});
		},
		teardown: function() {
			return __awaiter(void 0, void 0, void 0, function() {
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0:
							if (globalScope) {
								globalScope.removeEventListener("popstate", saveUrlInfoWrapper);
								isTracking = false;
							}
							if (!(sessionStorage && isStorageEnabled)) return [3, 2];
							return [4, sessionStorage.set(URL_INFO_STORAGE_KEY, {})];
						case 1:
							_a.sent();
							_a.label = 2;
						case 2: return [2];
					}
				});
			});
		}
	};
};
function addIfNotExist(event, key, value) {
	if (!event.event_properties) event.event_properties = {};
	if (event.event_properties[key] === void 0) return value;
	return event.event_properties[key];
}
//#endregion
//#region node_modules/.pnpm/@amplitude+plugin-custom-enrichment-browser@0.1.0/node_modules/@amplitude/plugin-custom-enrichment-browser/lib/esm/custom-enrichment.js
var customEnrichmentPlugin = function() {
	var loggerProvider;
	var unsubscribe;
	var enrichEvent;
	function isCustomEnrichmentConfig(config) {
		if (typeof config !== "object" || config === null) return false;
		return "body" in config && typeof config.body === "string";
	}
	function createEnrichEvent(body) {
		if (body) try {
			var fn = new Function("return " + body)();
			if (typeof fn === "function") return fn;
			loggerProvider === null || loggerProvider === void 0 || loggerProvider.error("Custom enrichment body did not evaluate to a function");
		} catch (error) {
			loggerProvider === null || loggerProvider === void 0 || loggerProvider.error("Could not create custom enrichment function", error);
		}
		return function(event) {
			return event;
		};
	}
	return {
		name: "@amplitude/plugin-custom-enrichment-browser",
		type: "enrichment",
		setup: function(config, _) {
			return __awaiter(void 0, void 0, void 0, function() {
				var subscriptionId_1;
				var _a;
				return __generator(this, function(_b) {
					loggerProvider = config.loggerProvider;
					loggerProvider === null || loggerProvider === void 0 || loggerProvider.log("Installing @amplitude/plugin-custom-enrichment-browser");
					if ((_a = config.remoteConfig) === null || _a === void 0 ? void 0 : _a.fetchRemoteConfig) if (!config.remoteConfigClient) loggerProvider === null || loggerProvider === void 0 || loggerProvider.debug("Remote config client is not provided, skipping remote config fetch");
					else {
						subscriptionId_1 = config.remoteConfigClient.subscribe("configs.analyticsSDK.browserSDK.customEnrichment", "all", function(remoteConfig) {
							if (remoteConfig && isCustomEnrichmentConfig(remoteConfig)) enrichEvent = createEnrichEvent(remoteConfig.body || "");
							else enrichEvent = createEnrichEvent("");
						});
						unsubscribe = function() {
							var _a;
							return (_a = config.remoteConfigClient) === null || _a === void 0 ? void 0 : _a.unsubscribe(subscriptionId_1);
						};
					}
					return [2];
				});
			});
		},
		execute: function(event) {
			return __awaiter(void 0, void 0, void 0, function() {
				var _a;
				return __generator(this, function(_b) {
					if (enrichEvent) try {
						return [2, (_a = enrichEvent(event)) !== null && _a !== void 0 ? _a : null];
					} catch (error) {
						loggerProvider === null || loggerProvider === void 0 || loggerProvider.error("Could not execute custom enrichment function", error);
						return [2, event];
					}
					return [2, event];
				});
			});
		},
		teardown: function() {
			return __awaiter(void 0, void 0, void 0, function() {
				return __generator(this, function(_a) {
					if (unsubscribe) unsubscribe();
					return [2];
				});
			});
		}
	};
};
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/browser-client.js
var UNSPECIFIED_SESSION_ID = -1;
/**
* Exported for `@amplitude/unified` or integration with blade plugins.
* If you only use `@amplitude/analytics-browser`, use `amplitude.init()` or `amplitude.createInstance()` instead.
*/
var AmplitudeBrowser = function(_super) {
	__extends(AmplitudeBrowser, _super);
	function AmplitudeBrowser() {
		var _this = _super !== null && _super.apply(this, arguments) || this;
		_this._diagnosticsSampleRate = 0;
		_this._enableRequestBodyCompressionExperimentalValue = false;
		return _this;
	}
	AmplitudeBrowser.prototype.init = function(apiKey, userIdOrOptions, maybeOptions) {
		if (apiKey === void 0) apiKey = "";
		var userId;
		var options;
		if (arguments.length > 2) {
			userId = userIdOrOptions;
			options = maybeOptions;
		} else if (typeof userIdOrOptions === "string") {
			userId = userIdOrOptions;
			options = void 0;
		} else {
			userId = userIdOrOptions === null || userIdOrOptions === void 0 ? void 0 : userIdOrOptions.userId;
			options = userIdOrOptions;
		}
		return returnWrapper(this._init(__assign$1(__assign$1({}, options), {
			userId,
			apiKey
		})));
	};
	AmplitudeBrowser.prototype._init = function(options) {
		var _a, _b, _c, _d, _e, _f, _g, _h;
		return __awaiter(this, void 0, void 0, function() {
			var fetchRemoteConfig, loggerProvider, serverZone, remoteConfigClient, diagnosticsSampleRate, enableDiagnostics, diagnosticsClient, browserOptions, attributionTrackingOptions, queryParams, ampTimestamp, isWithinTimeLimit, querySessionId, deferredSessionId, connector;
			var _this = this;
			return __generator(this, function(_j) {
				switch (_j.label) {
					case 0:
						if (this.initializing) return [2];
						this.initializing = true;
						fetchRemoteConfig = shouldFetchRemoteConfig(options);
						loggerProvider = (_a = options.loggerProvider) !== null && _a !== void 0 ? _a : new Logger();
						if (!options.loggerProvider) loggerProvider.enable((_b = options.logLevel) !== null && _b !== void 0 ? _b : LogLevel.Warn);
						serverZone = (_c = options.serverZone) !== null && _c !== void 0 ? _c : "US";
						diagnosticsSampleRate = this._diagnosticsSampleRate;
						enableDiagnostics = (_d = options.enableDiagnostics) !== null && _d !== void 0 ? _d : true;
						if (!fetchRemoteConfig) return [3, 2];
						remoteConfigClient = new RemoteConfigClient(
							options.apiKey,
							loggerProvider,
							serverZone,
							/* istanbul ignore next */
							(_e = options.remoteConfig) === null || _e === void 0 ? void 0 : _e.serverUrl
						);
						return [4, new Promise(function(resolve) {
							// istanbul ignore next
							remoteConfigClient === null || remoteConfigClient === void 0 || remoteConfigClient.subscribe("configs.diagnostics.browserSDK", "all", function(remoteConfig, source, lastFetch) {
								loggerProvider.debug("Diagnostics remote configuration received:", JSON.stringify({
									remoteConfig,
									source,
									lastFetch
								}, null, 2));
								if (remoteConfig) {
									var sampleRate = remoteConfig.sampleRate;
									if (typeof sampleRate === "number" && !isNaN(sampleRate)) diagnosticsSampleRate = sampleRate;
									var enabled = remoteConfig.enabled;
									if (typeof enabled === "boolean") enableDiagnostics = enabled;
								}
								resolve();
							});
						})];
					case 1:
						_j.sent();
						_j.label = 2;
					case 2:
						diagnosticsClient = new DiagnosticsClient(options.apiKey, loggerProvider, serverZone, {
							enabled: enableDiagnostics,
							sampleRate: diagnosticsSampleRate
						});
						diagnosticsClient.setTag("library", "".concat(LIBPREFIX, "/").concat(VERSION$1));
						if (typeof navigator !== "undefined") diagnosticsClient.setTag("user_agent", navigator.userAgent);
						return [4, useBrowserConfig(options.apiKey, options, this, diagnosticsClient, {
							loggerProvider,
							serverZone,
							enableDiagnostics,
							diagnosticsSampleRate
						})];
					case 3:
						browserOptions = _j.sent();
						if (!(fetchRemoteConfig && remoteConfigClient)) return [3, 5];
						return [4, new Promise(function(resolve) {
							// istanbul ignore next
							remoteConfigClient === null || remoteConfigClient === void 0 || remoteConfigClient.subscribe("configs.analyticsSDK.browserSDK", "all", function(remoteConfig, source, lastFetch) {
								browserOptions.loggerProvider.debug("Remote configuration received:", JSON.stringify({
									remoteConfig,
									source,
									lastFetch
								}, null, 2));
								if (remoteConfig) updateBrowserConfigWithRemoteConfig(remoteConfig, browserOptions);
								resolve();
							});
						})];
					case 4:
						_j.sent();
						_j.label = 5;
					case 5: return [4, _super.prototype._init.call(this, browserOptions)];
					case 6:
						_j.sent();
						this.logBrowserOptions(browserOptions);
						this.config.remoteConfigClient = remoteConfigClient;
						if (!isAttributionTrackingEnabled(this.config.defaultTracking)) return [3, 8];
						if (this.config.optOut) this.timeline.addOptOutListener(function(optOut) {
							return __awaiter(_this, void 0, void 0, function() {
								var attributionTrackingOptions_1;
								return __generator(this, function(_a) {
									switch (_a.label) {
										case 0:
											if (!!optOut) return [3, 2];
											attributionTrackingOptions_1 = getAttributionTrackingConfig(this.config);
											this.webAttribution = new WebAttribution(attributionTrackingOptions_1, this.config);
											return [4, this.webAttribution.init()];
										case 1:
											_a.sent();
											_a.label = 2;
										case 2: return [2];
									}
								});
							});
						});
						attributionTrackingOptions = getAttributionTrackingConfig(this.config);
						this.webAttribution = new WebAttribution(attributionTrackingOptions, this.config);
						return [4, this.webAttribution.init()];
					case 7:
						_j.sent();
						_j.label = 8;
					case 8:
						queryParams = getQueryParams();
						ampTimestamp = queryParams.ampTimestamp ? Number(queryParams.ampTimestamp) : void 0;
						isWithinTimeLimit = ampTimestamp ? Date.now() < ampTimestamp : true;
						querySessionId = isWithinTimeLimit && !Number.isNaN(Number(queryParams.ampSessionId)) ? Number(queryParams.ampSessionId) : void 0;
						deferredSessionId = this.config.deferredSessionId;
						if (deferredSessionId === UNSPECIFIED_SESSION_ID && !this.config.optOut) deferredSessionId = Date.now();
						this.setSessionId((_h = (_g = (_f = options.sessionId) !== null && _f !== void 0 ? _f : querySessionId) !== null && _g !== void 0 ? _g : deferredSessionId) !== null && _h !== void 0 ? _h : this.config.sessionId);
						if (this.config.optOut) this.timeline.addOptOutListener(function(optOut) {
							return __awaiter(_this, void 0, void 0, function() {
								return __generator(this, function(_a) {
									if (!optOut && this.config.deferredSessionId) if (this.config.deferredSessionId === UNSPECIFIED_SESSION_ID) this.setSessionId(void 0);
									else this.setSessionId(this.config.deferredSessionId);
									return [2];
								});
							});
						});
						connector = getAnalyticsConnector(options.instanceName);
						connector.identityStore.setIdentity({
							userId: this.config.userId,
							deviceId: this.config.deviceId
						});
						if (!(this.config.offline !== null)) return [3, 10];
						return [4, this.add(networkConnectivityCheckerPlugin()).promise];
					case 9:
						_j.sent();
						_j.label = 10;
					case 10: return [4, this.add(new Destination({ diagnosticsClient })).promise];
					case 11:
						_j.sent();
						return [4, this.add(new Context()).promise];
					case 12:
						_j.sent();
						return [4, this.add(new IdentityEventSender()).promise];
					case 13:
						_j.sent();
						detNotify(this.config);
						if (!isFileDownloadTrackingEnabled(this.config.defaultTracking)) return [3, 15];
						this.config.loggerProvider.debug("Adding file download tracking plugin");
						return [4, this.add(fileDownloadTracking()).promise];
					case 14:
						_j.sent();
						_j.label = 15;
					case 15:
						if (!isFormInteractionTrackingEnabled(this.config.defaultTracking)) return [3, 17];
						this.config.loggerProvider.debug("Adding form interaction plugin");
						return [4, this.add(formInteractionTracking()).promise];
					case 16:
						_j.sent();
						_j.label = 17;
					case 17:
						if (!isPageViewTrackingEnabled(this.config.defaultTracking)) return [3, 20];
						if (!!this.config.optOut) return [3, 19];
						this.config.loggerProvider.debug("Adding page view tracking plugin");
						return [4, this.add(pageViewTrackingPlugin(getPageViewTrackingConfig(this.config))).promise];
					case 18:
						_j.sent();
						return [3, 20];
					case 19:
						this.timeline.addOptOutListener(function(optOut) {
							return __awaiter(_this, void 0, void 0, function() {
								return __generator(this, function(_a) {
									switch (_a.label) {
										case 0:
											/* istanbul ignore if */
											if (optOut) return [2];
											this.config.loggerProvider.debug("Adding page view tracking plugin");
											return [4, this.add(pageViewTrackingPlugin(getPageViewTrackingConfig(this.config))).promise];
										case 1:
											_a.sent();
											return [2];
									}
								});
							});
						});
						_j.label = 20;
					case 20:
						if (!isElementInteractionsEnabled(this.config.autocapture)) return [3, 22];
						this.config.loggerProvider.debug("Adding user interactions plugin (autocapture plugin)");
						return [4, this.add(autocapturePlugin(getElementInteractionsConfig(this.config), { diagnosticsClient })).promise];
					case 21:
						_j.sent();
						_j.label = 22;
					case 22:
						if (!isFrustrationInteractionsEnabled(this.config.autocapture)) return [3, 24];
						this.config.loggerProvider.debug("Adding frustration interactions plugin");
						return [4, this.add(frustrationPlugin(getFrustrationInteractionsConfig(this.config))).promise];
					case 23:
						_j.sent();
						_j.label = 24;
					case 24:
						if (!isNetworkTrackingEnabled(this.config.autocapture)) return [3, 26];
						this.config.loggerProvider.debug("Adding network tracking plugin");
						return [4, this.add(networkCapturePlugin(getNetworkTrackingConfig(this.config))).promise];
					case 25:
						_j.sent();
						_j.label = 26;
					case 26:
						if (!isWebVitalsEnabled(this.config.autocapture)) return [3, 28];
						this.config.loggerProvider.debug("Adding web vitals plugin");
						return [4, this.add(webVitalsPlugin()).promise];
					case 27:
						_j.sent();
						_j.label = 28;
					case 28:
						if (!isPageUrlEnrichmentEnabled(this.config.autocapture)) return [3, 30];
						this.config.loggerProvider.debug("Adding referrer page url plugin");
						return [4, this.add(pageUrlEnrichmentPlugin()).promise];
					case 29:
						_j.sent();
						_j.label = 30;
					case 30:
						if (!isCustomEnrichmentEnabled(this.config.customEnrichment)) return [3, 32];
						this.config.loggerProvider.debug("Adding custom enrichment plugin");
						return [4, this.add(customEnrichmentPlugin()).promise];
					case 31:
						_j.sent();
						_j.label = 32;
					case 32:
						this.initializing = false;
						return [4, this.runQueuedFunctions("dispatchQ")];
					case 33:
						_j.sent();
						connector.eventBridge.setEventReceiver(function(event) {
							var _a = event.eventProperties || {}, time = _a.time, cleanEventProperties = __rest(_a, ["time"]);
							var eventOptions = typeof time === "number" ? { time } : void 0;
							_this.track(event.eventType, cleanEventProperties, eventOptions);
						});
						return [2];
				}
			});
		});
	};
	AmplitudeBrowser.prototype.getUserId = function() {
		var _a;
		return (_a = this.config) === null || _a === void 0 ? void 0 : _a.userId;
	};
	AmplitudeBrowser.prototype.setUserId = function(userId) {
		if (!this.config) {
			this.q.push(this.setUserId.bind(this, userId));
			return;
		}
		this.config.loggerProvider.debug("function setUserId: ", userId);
		if (userId !== this.config.userId || userId === void 0) {
			this.config.userId = userId;
			this.timeline.onIdentityChanged({ userId });
			setConnectorUserId(userId, this.config.instanceName);
		}
	};
	AmplitudeBrowser.prototype.getDeviceId = function() {
		var _a;
		return (_a = this.config) === null || _a === void 0 ? void 0 : _a.deviceId;
	};
	AmplitudeBrowser.prototype.setDeviceId = function(deviceId) {
		if (!this.config) {
			this.q.push(this.setDeviceId.bind(this, deviceId));
			return;
		}
		this.config.loggerProvider.debug("function setDeviceId: ", deviceId);
		if (deviceId !== this.config.deviceId) {
			this.config.deviceId = deviceId;
			this.timeline.onIdentityChanged({ deviceId });
			setConnectorDeviceId(deviceId, this.config.instanceName);
		}
	};
	AmplitudeBrowser.prototype.reset = function() {
		this.setDeviceId(UUID());
		this.setUserId(void 0);
		this.timeline.onReset();
	};
	AmplitudeBrowser.prototype.getIdentity = function() {
		var _a, _b;
		return {
			deviceId: (_a = this.config) === null || _a === void 0 ? void 0 : _a.deviceId,
			userId: (_b = this.config) === null || _b === void 0 ? void 0 : _b.userId,
			userProperties: this.userProperties
		};
	};
	AmplitudeBrowser.prototype.setIdentity = function(identity) {
		var e_1, _a;
		var _b;
		if ("userId" in identity) this.setUserId(identity.userId);
		if ("deviceId" in identity && identity.deviceId) this.setDeviceId(identity.deviceId);
		if ("userProperties" in identity) {
			this.userProperties = identity.userProperties;
			var identifyObj = new Identify();
			// istanbul ignore next
			var userProperties = (_b = identity.userProperties) !== null && _b !== void 0 ? _b : {};
			try {
				for (var _c = __values$1(Object.entries(userProperties)), _d = _c.next(); !_d.done; _d = _c.next()) {
					var _e = __read$1(_d.value, 2), key = _e[0], value = _e[1];
					identifyObj.set(key, value);
				}
			} catch (e_1_1) {
				e_1 = { error: e_1_1 };
			} finally {
				try {
					if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
				} finally {
					if (e_1) throw e_1.error;
				}
			}
			this.identify(identifyObj);
		}
	};
	AmplitudeBrowser.prototype.getOptOut = function() {
		var _a;
		return (_a = this.config) === null || _a === void 0 ? void 0 : _a.optOut;
	};
	AmplitudeBrowser.prototype.getSessionId = function() {
		var _a;
		return (_a = this.config) === null || _a === void 0 ? void 0 : _a.sessionId;
	};
	AmplitudeBrowser.prototype.setSessionId = function(sessionId) {
		var _a;
		var promises = [];
		if (!this.config) {
			this.q.push(this.setSessionId.bind(this, sessionId));
			return returnWrapper(Promise.resolve());
		}
		if (this.config.optOut) {
			this.config.deferredSessionId = sessionId !== null && sessionId !== void 0 ? sessionId : UNSPECIFIED_SESSION_ID;
			return returnWrapper(Promise.resolve());
		}
		if (sessionId === void 0) sessionId = Date.now();
		if (sessionId === this.config.sessionId) return returnWrapper(Promise.resolve());
		this.config.loggerProvider.debug("function setSessionId: ", sessionId);
		var previousSessionId = this.getSessionId();
		if (previousSessionId !== sessionId) this.timeline.onSessionIdChanged(sessionId);
		var lastEventTime = this.config.lastEventTime;
		var lastEventId = (_a = this.config.lastEventId) !== null && _a !== void 0 ? _a : -1;
		this.config.sessionId = sessionId;
		this.config.lastEventTime = void 0;
		this.config.pageCounter = 0;
		if (isSessionTrackingEnabled(this.config.defaultTracking)) {
			if (previousSessionId && lastEventTime) promises.push(this.track(DEFAULT_SESSION_END_EVENT, void 0, {
				device_id: this.previousSessionDeviceId,
				event_id: ++lastEventId,
				session_id: previousSessionId,
				time: lastEventTime + 1,
				user_id: this.previousSessionUserId
			}).promise);
			this.config.lastEventTime = this.config.sessionId;
		}
		var isCampaignEventTracked = this.trackCampaignEventIfNeeded(++lastEventId, promises);
		if (this.config.identify) promises.push(this.track(createIdentifyEvent(this.config.identify)).promise);
		if (isSessionTrackingEnabled(this.config.defaultTracking)) promises.push(this.track(DEFAULT_SESSION_START_EVENT, void 0, {
			event_id: isCampaignEventTracked ? ++lastEventId : lastEventId,
			session_id: this.config.sessionId,
			time: this.config.lastEventTime
		}).promise);
		this.previousSessionDeviceId = this.config.deviceId;
		this.previousSessionUserId = this.config.userId;
		return returnWrapper(Promise.all(promises));
	};
	AmplitudeBrowser.prototype.extendSession = function() {
		if (!this.config) {
			this.q.push(this.extendSession.bind(this));
			return;
		}
		this.config.lastEventTime = Date.now();
	};
	AmplitudeBrowser.prototype.setTransport = function(transport) {
		if (!this.config) {
			this.q.push(this.setTransport.bind(this, transport));
			return;
		}
		this.config.transportProvider = createTransport(transport);
	};
	AmplitudeBrowser.prototype.identify = function(identify, eventOptions) {
		if (isInstanceProxy(identify)) {
			var queue = identify._q;
			identify._q = [];
			identify = convertProxyObjectToRealObject(new Identify(), queue);
		}
		if (eventOptions === null || eventOptions === void 0 ? void 0 : eventOptions.user_id) this.setUserId(eventOptions.user_id);
		if (eventOptions === null || eventOptions === void 0 ? void 0 : eventOptions.device_id) this.setDeviceId(eventOptions.device_id);
		return _super.prototype.identify.call(this, identify, eventOptions);
	};
	AmplitudeBrowser.prototype.groupIdentify = function(groupType, groupName, identify, eventOptions) {
		if (isInstanceProxy(identify)) {
			var queue = identify._q;
			identify._q = [];
			identify = convertProxyObjectToRealObject(new Identify(), queue);
		}
		return _super.prototype.groupIdentify.call(this, groupType, groupName, identify, eventOptions);
	};
	AmplitudeBrowser.prototype.revenue = function(revenue, eventOptions) {
		if (isInstanceProxy(revenue)) {
			var queue = revenue._q;
			revenue._q = [];
			revenue = convertProxyObjectToRealObject(new Revenue(), queue);
		}
		return _super.prototype.revenue.call(this, revenue, eventOptions);
	};
	AmplitudeBrowser.prototype.trackCampaignEventIfNeeded = function(lastEventId, promises) {
		if (!this.webAttribution || !this.webAttribution.shouldTrackNewCampaign) return false;
		var campaignEvent = this.webAttribution.generateCampaignEvent(lastEventId);
		if (promises) promises.push(this.track(campaignEvent).promise);
		else this.track(campaignEvent);
		this.config.loggerProvider.log("Tracking attribution.");
		return true;
	};
	AmplitudeBrowser.prototype.process = function(event) {
		return __awaiter(this, void 0, void 0, function() {
			var currentTime, isEventInNewSession, shouldSetSessionIdOnNewCampaign;
			return __generator(this, function(_a) {
				currentTime = Date.now();
				isEventInNewSession = isNewSession(this.config.sessionTimeout, this.config.lastEventTime);
				shouldSetSessionIdOnNewCampaign = this.webAttribution && this.webAttribution.shouldSetSessionIdOnNewCampaign();
				if (event.event_type !== "session_start" && event.event_type !== "session_end" && (!event.session_id || event.session_id === this.getSessionId())) {
					if (isEventInNewSession || shouldSetSessionIdOnNewCampaign) {
						this.setSessionId(currentTime);
						if (shouldSetSessionIdOnNewCampaign) this.config.loggerProvider.log("Created a new session for new campaign.");
					} else if (!isEventInNewSession) this.trackCampaignEventIfNeeded();
				}
				return [2, _super.prototype.process.call(this, event)];
			});
		});
	};
	AmplitudeBrowser.prototype.logBrowserOptions = function(browserConfig) {
		try {
			var browserConfigCopy = __assign$1(__assign$1({}, browserConfig), { apiKey: browserConfig.apiKey.substring(0, 10) + "********" });
			this.config.loggerProvider.debug("Initialized Amplitude with BrowserConfig:", safeJsonStringify(browserConfigCopy));
		} catch (e) {
			/* istanbul ignore next */
			this.config.loggerProvider.error("Error logging browser config", e);
		}
	};
	/**
	* @experimental
	* WARNING: This method is for internal testing only and is not part of the public API.
	* It may be changed or removed at any time without notice.
	*
	* Sets the diagnostics sample rate before amplitude.init()
	* @param sampleRate - The sample rate to set
	*/
	AmplitudeBrowser.prototype._setDiagnosticsSampleRate = function(sampleRate) {
		if (sampleRate > 1 || sampleRate < 0) return;
		if (!this.config) {
			this._diagnosticsSampleRate = sampleRate;
			return;
		}
	};
	/**
	* @experimental
	* WARNING: This method is for internal testing only and is not part of the public API.
	* It may be changed or removed at any time without notice.
	*/
	AmplitudeBrowser.prototype._enableRequestBodyCompressionExperimental = function(enabled) {
		if (!this.config) {
			this._enableRequestBodyCompressionExperimentalValue = enabled;
			return;
		}
	};
	return AmplitudeBrowser;
}(AmplitudeCore);
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/browser-client-factory.js
var createInstance = function() {
	var client = new AmplitudeBrowser();
	return {
		init: debugWrapper(client.init.bind(client), "init", getClientLogConfig(client), getClientStates(client, ["config"])),
		add: debugWrapper(client.add.bind(client), "add", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.plugins"])),
		remove: debugWrapper(client.remove.bind(client), "remove", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.plugins"])),
		track: debugWrapper(client.track.bind(client), "track", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
		logEvent: debugWrapper(client.logEvent.bind(client), "logEvent", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
		identify: debugWrapper(client.identify.bind(client), "identify", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
		groupIdentify: debugWrapper(client.groupIdentify.bind(client), "groupIdentify", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
		setGroup: debugWrapper(client.setGroup.bind(client), "setGroup", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
		revenue: debugWrapper(client.revenue.bind(client), "revenue", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
		flush: debugWrapper(client.flush.bind(client), "flush", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
		getUserId: debugWrapper(client.getUserId.bind(client), "getUserId", getClientLogConfig(client), getClientStates(client, ["config", "config.userId"])),
		setUserId: debugWrapper(client.setUserId.bind(client), "setUserId", getClientLogConfig(client), getClientStates(client, ["config", "config.userId"])),
		getDeviceId: debugWrapper(client.getDeviceId.bind(client), "getDeviceId", getClientLogConfig(client), getClientStates(client, ["config", "config.deviceId"])),
		setDeviceId: debugWrapper(client.setDeviceId.bind(client), "setDeviceId", getClientLogConfig(client), getClientStates(client, ["config", "config.deviceId"])),
		reset: debugWrapper(client.reset.bind(client), "reset", getClientLogConfig(client), getClientStates(client, [
			"config",
			"config.userId",
			"config.deviceId"
		])),
		getSessionId: debugWrapper(client.getSessionId.bind(client), "getSessionId", getClientLogConfig(client), getClientStates(client, ["config"])),
		setSessionId: debugWrapper(client.setSessionId.bind(client), "setSessionId", getClientLogConfig(client), getClientStates(client, ["config"])),
		extendSession: debugWrapper(client.extendSession.bind(client), "extendSession", getClientLogConfig(client), getClientStates(client, ["config"])),
		setOptOut: debugWrapper(client.setOptOut.bind(client), "setOptOut", getClientLogConfig(client), getClientStates(client, ["config"])),
		setTransport: debugWrapper(client.setTransport.bind(client), "setTransport", getClientLogConfig(client), getClientStates(client, ["config"])),
		getIdentity: debugWrapper(client.getIdentity.bind(client), "getIdentity", getClientLogConfig(client), getClientStates(client, ["config"])),
		setIdentity: debugWrapper(client.setIdentity.bind(client), "setIdentity", getClientLogConfig(client), getClientStates(client, [
			"config",
			"config.userId",
			"config.deviceId"
		])),
		getOptOut: debugWrapper(client.getOptOut.bind(client), "getOptOut", getClientLogConfig(client), getClientStates(client, ["config"])),
		_setDiagnosticsSampleRate: debugWrapper(client._setDiagnosticsSampleRate.bind(client), "_setDiagnosticsSampleRate", getClientLogConfig(client), getClientStates(client, ["config"])),
		_enableRequestBodyCompressionExperimental: debugWrapper(client._enableRequestBodyCompressionExperimental.bind(client), "_enableRequestBodyCompressionExperimental", getClientLogConfig(client), getClientStates(client, ["config"]))
	};
};
var browser_client_factory_default = createInstance();
//#endregion
//#region node_modules/.pnpm/@amplitude+analytics-browser@2.37.0/node_modules/@amplitude/analytics-browser/lib/esm/index.js
var add = browser_client_factory_default.add;
browser_client_factory_default.extendSession;
browser_client_factory_default.flush;
browser_client_factory_default.getDeviceId;
browser_client_factory_default.getIdentity;
browser_client_factory_default.getOptOut;
browser_client_factory_default.getSessionId;
browser_client_factory_default.getUserId;
browser_client_factory_default.groupIdentify;
var identify = browser_client_factory_default.identify;
var init = browser_client_factory_default.init;
browser_client_factory_default.logEvent;
browser_client_factory_default.remove;
var reset = browser_client_factory_default.reset;
browser_client_factory_default.revenue;
browser_client_factory_default.setDeviceId;
browser_client_factory_default.setGroup;
browser_client_factory_default.setIdentity;
browser_client_factory_default.setOptOut;
browser_client_factory_default.setSessionId;
browser_client_factory_default.setTransport;
var setUserId = browser_client_factory_default.setUserId;
var track = browser_client_factory_default.track;
browser_client_factory_default._setDiagnosticsSampleRate;
browser_client_factory_default._enableRequestBodyCompressionExperimental;
//#endregion
export { SpecialEventType as C, Identify as S, Config as _, setUserId as a, returnWrapper as b, getOrCreateWindowMessenger as c, BaseTransport as d, generateHashCode as f, debugWrapper as g, AnalyticsConnector as h, reset as i, AMPLITUDE_ORIGINS_MAP as l, getAnalyticsConnector as m, identify as n, track as o, isTimestampInSample as p, init as r, enableBackgroundCapture as s, add as t, RemoteConfigClient as u, Logger as v, Status as x, LogLevel as y };
