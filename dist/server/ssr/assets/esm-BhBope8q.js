import { i as __generator$1, n as __awaiter$1, t as __assign$1 } from "./tslib.es6-BSnKF3gl.js";
import { t as openDB } from "./build-qjJVTRaf.js";
//#region node_modules/.pnpm/@amplitude+experiment-core@0.7.2/node_modules/@amplitude/experiment-core/dist/experiment-core.esm.js
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
var extendStatics = function(d, b) {
	extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
		d.__proto__ = b;
	} || function(d, b) {
		for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
	};
	return extendStatics(d, b);
};
function __extends(d, b) {
	if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	extendStatics(d, b);
	function __() {
		this.constructor = d;
	}
	d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
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
function __awaiter(thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P ? value : new P(function(resolve) {
			resolve(value);
		});
	}
	return new (P || (P = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e) {
				reject(e);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}
function __generator(thisArg, body) {
	var _ = {
		label: 0,
		sent: function() {
			if (t[0] & 1) throw t[1];
			return t[1];
		},
		trys: [],
		ops: []
	}, f, y, t, g;
	return g = {
		next: verb(0),
		"throw": verb(1),
		"return": verb(2)
	}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
		return this;
	}), g;
	function verb(n) {
		return function(v) {
			return step([n, v]);
		};
	}
	function step(op) {
		if (f) throw new TypeError("Generator is already executing.");
		while (g && (g = 0, op[0] && (_ = 0)), _) try {
			if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
			if (y = 0, t) op = [op[0] & 2, t.value];
			switch (op[0]) {
				case 0:
				case 1:
					t = op;
					break;
				case 4:
					_.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_.label++;
					y = op[1];
					op = [0];
					continue;
				case 7:
					op = _.ops.pop();
					_.trys.pop();
					continue;
				default:
					if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_ = 0;
						continue;
					}
					if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
						_.label = op[1];
						break;
					}
					if (op[0] === 6 && _.label < t[1]) {
						_.label = t[1];
						t = op;
						break;
					}
					if (t && _.label < t[2]) {
						_.label = t[2];
						_.ops.push(op);
						break;
					}
					if (t[2]) _.ops.pop();
					_.trys.pop();
					continue;
			}
			op = body.call(thisArg, _);
		} catch (e) {
			op = [6, e];
			y = 0;
		} finally {
			f = t = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
}
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
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
var EvaluationOperator = {
	IS: "is",
	IS_NOT: "is not",
	CONTAINS: "contains",
	DOES_NOT_CONTAIN: "does not contain",
	LESS_THAN: "less",
	LESS_THAN_EQUALS: "less or equal",
	GREATER_THAN: "greater",
	GREATER_THAN_EQUALS: "greater or equal",
	VERSION_LESS_THAN: "version less",
	VERSION_LESS_THAN_EQUALS: "version less or equal",
	VERSION_GREATER_THAN: "version greater",
	VERSION_GREATER_THAN_EQUALS: "version greater or equal",
	SET_IS: "set is",
	SET_IS_NOT: "set is not",
	SET_CONTAINS: "set contains",
	SET_DOES_NOT_CONTAIN: "set does not contain",
	SET_CONTAINS_ANY: "set contains any",
	SET_DOES_NOT_CONTAIN_ANY: "set does not contain any",
	REGEX_MATCH: "regex match",
	REGEX_DOES_NOT_MATCH: "regex does not match"
};
var stringToUtf8ByteArray = function(str) {
	var out = [];
	var p = 0;
	for (var i = 0; i < str.length; i++) {
		var c = str.charCodeAt(i);
		if (c < 128) out[p++] = c;
		else if (c < 2048) {
			out[p++] = c >> 6 | 192;
			out[p++] = c & 63 | 128;
		} else if ((c & 64512) == 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) == 56320) {
			c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
			out[p++] = c >> 18 | 240;
			out[p++] = c >> 12 & 63 | 128;
			out[p++] = c >> 6 & 63 | 128;
			out[p++] = c & 63 | 128;
		} else {
			out[p++] = c >> 12 | 224;
			out[p++] = c >> 6 & 63 | 128;
			out[p++] = c & 63 | 128;
		}
	}
	return Uint8Array.from(out);
};
var C1_32 = -862048943;
var C2_32 = 461845907;
var R1_32 = 15;
var R2_32 = 13;
var M_32 = 5;
var N_32 = -430675100;
var hash32x86 = function(input, seed) {
	if (seed === void 0) seed = 0;
	var data = stringToUtf8ByteArray(input);
	var length = data.length;
	var nBlocks = length >> 2;
	var hash = seed;
	for (var i = 0; i < nBlocks; i++) hash = mix32(readIntLe(data, i << 2), hash);
	var index = nBlocks << 2;
	var k1 = 0;
	switch (length - index) {
		case 3:
			k1 ^= data[index + 2] << 16;
			k1 ^= data[index + 1] << 8;
			k1 ^= data[index];
			k1 = Math.imul(k1, C1_32);
			k1 = rotateLeft(k1, R1_32);
			k1 = Math.imul(k1, C2_32);
			hash ^= k1;
			break;
		case 2:
			k1 ^= data[index + 1] << 8;
			k1 ^= data[index];
			k1 = Math.imul(k1, C1_32);
			k1 = rotateLeft(k1, R1_32);
			k1 = Math.imul(k1, C2_32);
			hash ^= k1;
			break;
		case 1:
			k1 ^= data[index];
			k1 = Math.imul(k1, C1_32);
			k1 = rotateLeft(k1, R1_32);
			k1 = Math.imul(k1, C2_32);
			hash ^= k1;
			break;
	}
	hash ^= length;
	return fmix32(hash) >>> 0;
};
var mix32 = function(k, hash) {
	var kResult = k;
	var hashResult = hash;
	kResult = Math.imul(kResult, C1_32);
	kResult = rotateLeft(kResult, R1_32);
	kResult = Math.imul(kResult, C2_32);
	hashResult ^= kResult;
	hashResult = rotateLeft(hashResult, R2_32);
	hashResult = Math.imul(hashResult, M_32);
	return hashResult + N_32 | 0;
};
var fmix32 = function(hash) {
	var hashResult = hash;
	hashResult ^= hashResult >>> 16;
	hashResult = Math.imul(hashResult, -2048144789);
	hashResult ^= hashResult >>> 13;
	hashResult = Math.imul(hashResult, -1028477387);
	hashResult ^= hashResult >>> 16;
	return hashResult;
};
var rotateLeft = function(x, n, width) {
	if (width === void 0) width = 32;
	if (n > width) n = n % width;
	var r = (x & 4294967295 << width - n >>> 0) >>> 0 >>> width - n >>> 0;
	return (x << n | r) >>> 0;
};
var readIntLe = function(data, index) {
	if (index === void 0) index = 0;
	return reverseBytes(data[index] << 24 | data[index + 1] << 16 | data[index + 2] << 8 | data[index + 3]);
};
var reverseBytes = function(n) {
	return (n & -16777216) >>> 24 | (n & 16711680) >>> 8 | (n & 65280) << 8 | (n & 255) << 24;
};
var select = function(selectable, selector) {
	var e_1, _a;
	if (!selector || selector.length === 0) return;
	try {
		for (var selector_1 = __values(selector), selector_1_1 = selector_1.next(); !selector_1_1.done; selector_1_1 = selector_1.next()) {
			var selectorElement = selector_1_1.value;
			if (!selectorElement || !selectable || typeof selectable !== "object") return;
			selectable = selectable[selectorElement];
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (selector_1_1 && !selector_1_1.done && (_a = selector_1.return)) _a.call(selector_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	if (!selectable) return;
	else return selectable;
};
var VERSION_PATTERN = "^".concat("(\\d+)\\.(\\d+)", "(\\.").concat("(\\d+)").concat("(-(([-\\w]+\\.?)*))?", ")?$");
var SemanticVersion = function() {
	function SemanticVersion(major, minor, patch, preRelease) {
		if (preRelease === void 0) preRelease = void 0;
		this.major = major;
		this.minor = minor;
		this.patch = patch;
		this.preRelease = preRelease;
	}
	SemanticVersion.parse = function(version) {
		if (!version) return;
		var matchGroup = new RegExp(VERSION_PATTERN).exec(version);
		if (!matchGroup) return;
		var major = Number(matchGroup[1]);
		var minor = Number(matchGroup[2]);
		if (isNaN(major) || isNaN(minor)) return;
		return new SemanticVersion(major, minor, Number(matchGroup[4]) || 0, matchGroup[5] || void 0);
	};
	SemanticVersion.prototype.compareTo = function(other) {
		if (this.major > other.major) return 1;
		if (this.major < other.major) return -1;
		if (this.minor > other.minor) return 1;
		if (this.minor < other.minor) return -1;
		if (this.patch > other.patch) return 1;
		if (this.patch < other.patch) return -1;
		if (this.preRelease && !other.preRelease) return -1;
		if (!this.preRelease && other.preRelease) return 1;
		if (this.preRelease && other.preRelease) {
			if (this.preRelease > other.preRelease) return 1;
			if (this.preRelease < other.preRelease) return -1;
			return 0;
		}
		return 0;
	};
	return SemanticVersion;
}();
var EvaluationEngine = function() {
	function EvaluationEngine() {}
	EvaluationEngine.prototype.evaluate = function(context, flags) {
		var e_1, _a;
		var results = {};
		var target = {
			context,
			result: results
		};
		try {
			for (var flags_1 = __values(flags), flags_1_1 = flags_1.next(); !flags_1_1.done; flags_1_1 = flags_1.next()) {
				var flag = flags_1_1.value;
				var variant = this.evaluateFlag(target, flag);
				if (variant) results[flag.key] = variant;
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (flags_1_1 && !flags_1_1.done && (_a = flags_1.return)) _a.call(flags_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		return results;
	};
	EvaluationEngine.prototype.evaluateFlag = function(target, flag) {
		var e_2, _a;
		var result;
		try {
			for (var _b = __values(flag.segments), _c = _b.next(); !_c.done; _c = _b.next()) {
				var segment = _c.value;
				result = this.evaluateSegment(target, flag, segment);
				if (result) {
					var metadata = __assign(__assign(__assign({}, flag.metadata), segment.metadata), result.metadata);
					result = __assign(__assign({}, result), { metadata });
					break;
				}
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
		return result;
	};
	EvaluationEngine.prototype.evaluateSegment = function(target, flag, segment) {
		var e_3, _a, e_4, _b;
		if (!segment.conditions) {
			var variantKey = this.bucket(target, segment);
			if (variantKey !== void 0) return flag.variants[variantKey];
			else return;
		}
		try {
			for (var _c = __values(segment.conditions), _d = _c.next(); !_d.done; _d = _c.next()) {
				var conditions = _d.value;
				var match = true;
				try {
					for (var conditions_1 = (e_4 = void 0, __values(conditions)), conditions_1_1 = conditions_1.next(); !conditions_1_1.done; conditions_1_1 = conditions_1.next()) {
						var condition = conditions_1_1.value;
						match = this.matchCondition(target, condition);
						if (!match) break;
					}
				} catch (e_4_1) {
					e_4 = { error: e_4_1 };
				} finally {
					try {
						if (conditions_1_1 && !conditions_1_1.done && (_b = conditions_1.return)) _b.call(conditions_1);
					} finally {
						if (e_4) throw e_4.error;
					}
				}
				if (match) {
					var variantKey = this.bucket(target, segment);
					if (variantKey !== void 0) return flag.variants[variantKey];
					else return;
				}
			}
		} catch (e_3_1) {
			e_3 = { error: e_3_1 };
		} finally {
			try {
				if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
			} finally {
				if (e_3) throw e_3.error;
			}
		}
	};
	EvaluationEngine.prototype.matchCondition = function(target, condition) {
		var propValue = select(target, condition.selector);
		if (!propValue) return this.matchNull(condition.op, condition.values);
		else if (this.isSetOperator(condition.op)) {
			var propValueStringList = this.coerceStringArray(propValue);
			if (!propValueStringList) return false;
			return this.matchSet(propValueStringList, condition.op, condition.values);
		} else {
			var propValueString = this.coerceString(propValue);
			if (propValueString !== void 0) return this.matchString(propValueString, condition.op, condition.values);
			else return false;
		}
	};
	EvaluationEngine.prototype.getHash = function(key) {
		return hash32x86(key);
	};
	EvaluationEngine.prototype.bucket = function(target, segment) {
		var e_5, _a, e_6, _b;
		if (!segment.bucket) return segment.variant;
		var bucketingValue = this.coerceString(select(target, segment.bucket.selector));
		if (!bucketingValue || bucketingValue.length === 0) return segment.variant;
		var keyToHash = "".concat(segment.bucket.salt, "/").concat(bucketingValue);
		var hash = this.getHash(keyToHash);
		var allocationValue = hash % 100;
		var distributionValue = Math.floor(hash / 100);
		try {
			for (var _c = __values(segment.bucket.allocations), _d = _c.next(); !_d.done; _d = _c.next()) {
				var allocation = _d.value;
				var allocationStart = allocation.range[0];
				var allocationEnd = allocation.range[1];
				if (allocationValue >= allocationStart && allocationValue < allocationEnd) try {
					for (var _e = (e_6 = void 0, __values(allocation.distributions)), _f = _e.next(); !_f.done; _f = _e.next()) {
						var distribution = _f.value;
						var distributionStart = distribution.range[0];
						var distributionEnd = distribution.range[1];
						if (distributionValue >= distributionStart && distributionValue < distributionEnd) return distribution.variant;
					}
				} catch (e_6_1) {
					e_6 = { error: e_6_1 };
				} finally {
					try {
						if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
					} finally {
						if (e_6) throw e_6.error;
					}
				}
			}
		} catch (e_5_1) {
			e_5 = { error: e_5_1 };
		} finally {
			try {
				if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
			} finally {
				if (e_5) throw e_5.error;
			}
		}
		return segment.variant;
	};
	EvaluationEngine.prototype.matchNull = function(op, filterValues) {
		var containsNone = this.containsNone(filterValues);
		switch (op) {
			case EvaluationOperator.IS:
			case EvaluationOperator.CONTAINS:
			case EvaluationOperator.LESS_THAN:
			case EvaluationOperator.LESS_THAN_EQUALS:
			case EvaluationOperator.GREATER_THAN:
			case EvaluationOperator.GREATER_THAN_EQUALS:
			case EvaluationOperator.VERSION_LESS_THAN:
			case EvaluationOperator.VERSION_LESS_THAN_EQUALS:
			case EvaluationOperator.VERSION_GREATER_THAN:
			case EvaluationOperator.VERSION_GREATER_THAN_EQUALS:
			case EvaluationOperator.SET_IS:
			case EvaluationOperator.SET_CONTAINS:
			case EvaluationOperator.SET_CONTAINS_ANY: return containsNone;
			case EvaluationOperator.IS_NOT:
			case EvaluationOperator.DOES_NOT_CONTAIN:
			case EvaluationOperator.SET_DOES_NOT_CONTAIN:
			case EvaluationOperator.SET_DOES_NOT_CONTAIN_ANY: return !containsNone;
			default: return false;
		}
	};
	EvaluationEngine.prototype.matchSet = function(propValues, op, filterValues) {
		switch (op) {
			case EvaluationOperator.SET_IS: return this.setEquals(propValues, filterValues);
			case EvaluationOperator.SET_IS_NOT: return !this.setEquals(propValues, filterValues);
			case EvaluationOperator.SET_CONTAINS: return this.matchesSetContainsAll(propValues, filterValues);
			case EvaluationOperator.SET_DOES_NOT_CONTAIN: return !this.matchesSetContainsAll(propValues, filterValues);
			case EvaluationOperator.SET_CONTAINS_ANY: return this.matchesSetContainsAny(propValues, filterValues);
			case EvaluationOperator.SET_DOES_NOT_CONTAIN_ANY: return !this.matchesSetContainsAny(propValues, filterValues);
			default: return false;
		}
	};
	EvaluationEngine.prototype.matchString = function(propValue, op, filterValues) {
		var _this = this;
		switch (op) {
			case EvaluationOperator.IS: return this.matchesIs(propValue, filterValues);
			case EvaluationOperator.IS_NOT: return !this.matchesIs(propValue, filterValues);
			case EvaluationOperator.CONTAINS: return this.matchesContains(propValue, filterValues);
			case EvaluationOperator.DOES_NOT_CONTAIN: return !this.matchesContains(propValue, filterValues);
			case EvaluationOperator.LESS_THAN:
			case EvaluationOperator.LESS_THAN_EQUALS:
			case EvaluationOperator.GREATER_THAN:
			case EvaluationOperator.GREATER_THAN_EQUALS: return this.matchesComparable(propValue, op, filterValues, function(value) {
				return _this.parseNumber(value);
			}, this.comparator);
			case EvaluationOperator.VERSION_LESS_THAN:
			case EvaluationOperator.VERSION_LESS_THAN_EQUALS:
			case EvaluationOperator.VERSION_GREATER_THAN:
			case EvaluationOperator.VERSION_GREATER_THAN_EQUALS: return this.matchesComparable(propValue, op, filterValues, function(value) {
				return SemanticVersion.parse(value);
			}, this.versionComparator);
			case EvaluationOperator.REGEX_MATCH: return this.matchesRegex(propValue, filterValues);
			case EvaluationOperator.REGEX_DOES_NOT_MATCH: return !this.matchesRegex(propValue, filterValues);
			default: return false;
		}
	};
	EvaluationEngine.prototype.matchesIs = function(propValue, filterValues) {
		if (this.containsBooleans(filterValues)) {
			var lower_1 = propValue.toLowerCase();
			if (lower_1 === "true" || lower_1 === "false") return filterValues.some(function(value) {
				return value.toLowerCase() === lower_1;
			});
		}
		return filterValues.some(function(value) {
			return propValue === value;
		});
	};
	EvaluationEngine.prototype.matchesContains = function(propValue, filterValues) {
		var e_7, _a;
		try {
			for (var filterValues_1 = __values(filterValues), filterValues_1_1 = filterValues_1.next(); !filterValues_1_1.done; filterValues_1_1 = filterValues_1.next()) {
				var filterValue = filterValues_1_1.value;
				if (propValue.toLowerCase().includes(filterValue.toLowerCase())) return true;
			}
		} catch (e_7_1) {
			e_7 = { error: e_7_1 };
		} finally {
			try {
				if (filterValues_1_1 && !filterValues_1_1.done && (_a = filterValues_1.return)) _a.call(filterValues_1);
			} finally {
				if (e_7) throw e_7.error;
			}
		}
		return false;
	};
	EvaluationEngine.prototype.matchesComparable = function(propValue, op, filterValues, typeTransformer, typeComparator) {
		var _this = this;
		var propValueTransformed = typeTransformer(propValue);
		var filterValuesTransformed = filterValues.map(function(filterValue) {
			return typeTransformer(filterValue);
		}).filter(function(filterValue) {
			return filterValue !== void 0;
		});
		if (propValueTransformed === void 0 || filterValuesTransformed.length === 0) return filterValues.some(function(filterValue) {
			return _this.comparator(propValue, op, filterValue);
		});
		else return filterValuesTransformed.some(function(filterValueTransformed) {
			return typeComparator(propValueTransformed, op, filterValueTransformed);
		});
	};
	EvaluationEngine.prototype.comparator = function(propValue, op, filterValue) {
		switch (op) {
			case EvaluationOperator.LESS_THAN:
			case EvaluationOperator.VERSION_LESS_THAN: return propValue < filterValue;
			case EvaluationOperator.LESS_THAN_EQUALS:
			case EvaluationOperator.VERSION_LESS_THAN_EQUALS: return propValue <= filterValue;
			case EvaluationOperator.GREATER_THAN:
			case EvaluationOperator.VERSION_GREATER_THAN: return propValue > filterValue;
			case EvaluationOperator.GREATER_THAN_EQUALS:
			case EvaluationOperator.VERSION_GREATER_THAN_EQUALS: return propValue >= filterValue;
			default: return false;
		}
	};
	EvaluationEngine.prototype.versionComparator = function(propValue, op, filterValue) {
		var compareTo = propValue.compareTo(filterValue);
		switch (op) {
			case EvaluationOperator.LESS_THAN:
			case EvaluationOperator.VERSION_LESS_THAN: return compareTo < 0;
			case EvaluationOperator.LESS_THAN_EQUALS:
			case EvaluationOperator.VERSION_LESS_THAN_EQUALS: return compareTo <= 0;
			case EvaluationOperator.GREATER_THAN:
			case EvaluationOperator.VERSION_GREATER_THAN: return compareTo > 0;
			case EvaluationOperator.GREATER_THAN_EQUALS:
			case EvaluationOperator.VERSION_GREATER_THAN_EQUALS: return compareTo >= 0;
			default: return false;
		}
	};
	EvaluationEngine.prototype.matchesRegex = function(propValue, filterValues) {
		return filterValues.some(function(filterValue) {
			return Boolean(new RegExp(filterValue).exec(propValue));
		});
	};
	EvaluationEngine.prototype.containsNone = function(filterValues) {
		return filterValues.some(function(filterValue) {
			return filterValue === "(none)";
		});
	};
	EvaluationEngine.prototype.containsBooleans = function(filterValues) {
		return filterValues.some(function(filterValue) {
			switch (filterValue.toLowerCase()) {
				case "true":
				case "false": return true;
				default: return false;
			}
		});
	};
	EvaluationEngine.prototype.parseNumber = function(value) {
		var _a;
		return (_a = Number(value)) !== null && _a !== void 0 ? _a : void 0;
	};
	EvaluationEngine.prototype.coerceString = function(value) {
		if (!value) return;
		if (typeof value === "object") return JSON.stringify(value);
		return String(value);
	};
	EvaluationEngine.prototype.coerceStringArray = function(value) {
		var _this = this;
		if (Array.isArray(value)) {
			var anyArray = value;
			return anyArray.map(function(e) {
				return _this.coerceString(e);
			}).filter(Boolean);
		}
		var stringValue = String(value);
		try {
			var parsedValue = JSON.parse(stringValue);
			if (Array.isArray(parsedValue)) {
				var anyArray = value;
				return anyArray.map(function(e) {
					return _this.coerceString(e);
				}).filter(Boolean);
			} else return;
		} catch (_a) {
			return;
		}
	};
	EvaluationEngine.prototype.isSetOperator = function(op) {
		switch (op) {
			case EvaluationOperator.SET_IS:
			case EvaluationOperator.SET_IS_NOT:
			case EvaluationOperator.SET_CONTAINS:
			case EvaluationOperator.SET_DOES_NOT_CONTAIN:
			case EvaluationOperator.SET_CONTAINS_ANY:
			case EvaluationOperator.SET_DOES_NOT_CONTAIN_ANY: return true;
			default: return false;
		}
	};
	EvaluationEngine.prototype.setEquals = function(xa, ya) {
		var xs = new Set(xa);
		var ys = new Set(ya);
		return xs.size === ys.size && __spreadArray([], __read(ys), false).every(function(y) {
			return xs.has(y);
		});
	};
	EvaluationEngine.prototype.matchesSetContainsAll = function(propValues, filterValues) {
		var e_8, _a;
		if (propValues.length < filterValues.length) return false;
		try {
			for (var filterValues_2 = __values(filterValues), filterValues_2_1 = filterValues_2.next(); !filterValues_2_1.done; filterValues_2_1 = filterValues_2.next()) {
				var filterValue = filterValues_2_1.value;
				if (!this.matchesIs(filterValue, propValues)) return false;
			}
		} catch (e_8_1) {
			e_8 = { error: e_8_1 };
		} finally {
			try {
				if (filterValues_2_1 && !filterValues_2_1.done && (_a = filterValues_2.return)) _a.call(filterValues_2);
			} finally {
				if (e_8) throw e_8.error;
			}
		}
		return true;
	};
	EvaluationEngine.prototype.matchesSetContainsAny = function(propValues, filterValues) {
		var e_9, _a;
		try {
			for (var filterValues_3 = __values(filterValues), filterValues_3_1 = filterValues_3.next(); !filterValues_3_1.done; filterValues_3_1 = filterValues_3.next()) {
				var filterValue = filterValues_3_1.value;
				if (this.matchesIs(filterValue, propValues)) return true;
			}
		} catch (e_9_1) {
			e_9 = { error: e_9_1 };
		} finally {
			try {
				if (filterValues_3_1 && !filterValues_3_1.done && (_a = filterValues_3.return)) _a.call(filterValues_3);
			} finally {
				if (e_9) throw e_9.error;
			}
		}
		return false;
	};
	return EvaluationEngine;
}();
/**
*  base64.ts
*
*  Licensed under the BSD 3-Clause License.
*    http://opensource.org/licenses/BSD-3-Clause
*
*  References:
*    http://en.wikipedia.org/wiki/Base64
*
* @author Dan Kogai (https://github.com/dankogai)
*/
var version = "3.7.5";
/**
* @deprecated use lowercase `version`.
*/
var VERSION = version;
var _hasatob = typeof atob === "function";
var _hasbtoa = typeof btoa === "function";
var _hasBuffer = typeof Buffer === "function";
var _TD = typeof TextDecoder === "function" ? new TextDecoder() : void 0;
var _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
var b64chs = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
var b64tab = ((a) => {
	let tab = {};
	a.forEach((c, i) => tab[c] = i);
	return tab;
})(b64chs);
var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
var _fromCC = String.fromCharCode.bind(String);
var _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
var _mkUriSafe = (src) => src.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
var _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, "");
/**
* polyfill version of `btoa`
*/
var btoaPolyfill = (bin) => {
	let u32, c0, c1, c2, asc = "";
	const pad = bin.length % 3;
	for (let i = 0; i < bin.length;) {
		if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255) throw new TypeError("invalid character found");
		u32 = c0 << 16 | c1 << 8 | c2;
		asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
	}
	return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
* does what `window.btoa` of web browsers do.
* @param {String} bin binary string
* @returns {string} Base64-encoded string
*/
var _btoa = _hasbtoa ? (bin) => btoa(bin) : _hasBuffer ? (bin) => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
var _fromUint8Array = _hasBuffer ? (u8a) => Buffer.from(u8a).toString("base64") : (u8a) => {
	const maxargs = 4096;
	let strs = [];
	for (let i = 0, l = u8a.length; i < l; i += maxargs) strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
	return _btoa(strs.join(""));
};
/**
* converts a Uint8Array to a Base64 string.
* @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
* @returns {string} Base64 string
*/
var fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
var cb_utob = (c) => {
	if (c.length < 2) {
		var cc = c.charCodeAt(0);
		return cc < 128 ? c : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | cc & 63) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
	} else {
		var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
		return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
	}
};
var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
* @deprecated should have been internal use only.
* @param {string} src UTF-8 string
* @returns {string} UTF-16 string
*/
var utob = (u) => u.replace(re_utob, cb_utob);
var _encode = _hasBuffer ? (s) => Buffer.from(s, "utf8").toString("base64") : _TE ? (s) => _fromUint8Array(_TE.encode(s)) : (s) => _btoa(utob(s));
/**
* converts a UTF-8-encoded string to a Base64 string.
* @param {boolean} [urlsafe] if `true` make the result URL-safe
* @returns {string} Base64 string
*/
var encode = (src, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
/**
* converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
* @returns {string} Base64 string
*/
var encodeURI = (src) => encode(src, true);
var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
var cb_btou = (cccc) => {
	switch (cccc.length) {
		case 4:
			var offset = ((7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3)) - 65536;
			return _fromCC((offset >>> 10) + 55296) + _fromCC((offset & 1023) + 56320);
		case 3: return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
		default: return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
	}
};
/**
* @deprecated should have been internal use only.
* @param {string} src UTF-16 string
* @returns {string} UTF-8 string
*/
var btou = (b) => b.replace(re_btou, cb_btou);
/**
* polyfill version of `atob`
*/
var atobPolyfill = (asc) => {
	asc = asc.replace(/\s+/g, "");
	if (!b64re.test(asc)) throw new TypeError("malformed base64.");
	asc += "==".slice(2 - (asc.length & 3));
	let u24, bin = "", r1, r2;
	for (let i = 0; i < asc.length;) {
		u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
		bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
	}
	return bin;
};
/**
* does what `window.atob` of web browsers do.
* @param {String} asc Base64-encoded string
* @returns {string} binary string
*/
var _atob = _hasatob ? (asc) => atob(_tidyB64(asc)) : _hasBuffer ? (asc) => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
var _toUint8Array = _hasBuffer ? (a) => _U8Afrom(Buffer.from(a, "base64")) : (a) => _U8Afrom(_atob(a).split("").map((c) => c.charCodeAt(0)));
/**
* converts a Base64 string to a Uint8Array.
*/
var toUint8Array = (a) => _toUint8Array(_unURI(a));
var _decode = _hasBuffer ? (a) => Buffer.from(a, "base64").toString("utf8") : _TD ? (a) => _TD.decode(_toUint8Array(a)) : (a) => btou(_atob(a));
var _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));
/**
* converts a Base64 string to a UTF-8 string.
* @param {String} src Base64 string.  Both normal and URL-safe are supported
* @returns {string} UTF-8 string
*/
var decode = (src) => _decode(_unURI(src));
/**
* check if a value is a valid Base64 string
* @param {String} src a value to check
*/
var isValid = (src) => {
	if (typeof src !== "string") return false;
	const s = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
	return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
var _noEnum = (v) => {
	return {
		value: v,
		enumerable: false,
		writable: true,
		configurable: true
	};
};
/**
* extend String.prototype with relevant methods
*/
var extendString = function() {
	const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
	_add("fromBase64", function() {
		return decode(this);
	});
	_add("toBase64", function(urlsafe) {
		return encode(this, urlsafe);
	});
	_add("toBase64URI", function() {
		return encode(this, true);
	});
	_add("toBase64URL", function() {
		return encode(this, true);
	});
	_add("toUint8Array", function() {
		return toUint8Array(this);
	});
};
/**
* extend Uint8Array.prototype with relevant methods
*/
var extendUint8Array = function() {
	const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
	_add("toBase64", function(urlsafe) {
		return fromUint8Array(this, urlsafe);
	});
	_add("toBase64URI", function() {
		return fromUint8Array(this, true);
	});
	_add("toBase64URL", function() {
		return fromUint8Array(this, true);
	});
};
/**
* extend Builtin prototypes with relevant methods
*/
var extendBuiltins = () => {
	extendString();
	extendUint8Array();
};
var gBase64 = {
	version,
	VERSION,
	atob: _atob,
	atobPolyfill,
	btoa: _btoa,
	btoaPolyfill,
	fromBase64: decode,
	toBase64: encode,
	encode,
	encodeURI,
	encodeURL: encodeURI,
	utob,
	btou,
	decode,
	isValid,
	fromUint8Array,
	toUint8Array,
	extendString,
	extendUint8Array,
	extendBuiltins
};
var FetchError = function(_super) {
	__extends(FetchError, _super);
	function FetchError(statusCode, message) {
		var _this = _super.call(this, message) || this;
		_this.statusCode = statusCode;
		Object.setPrototypeOf(_this, FetchError.prototype);
		return _this;
	}
	return FetchError;
}(Error);
(function() {
	function SdkEvaluationApi(deploymentKey, serverUrl, httpClient) {
		this.deploymentKey = deploymentKey;
		this.serverUrl = serverUrl;
		this.httpClient = httpClient;
	}
	SdkEvaluationApi.prototype.getVariants = function(user, options) {
		return __awaiter(this, void 0, void 0, function() {
			var userJsonBase64, headers, response;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						userJsonBase64 = gBase64.encodeURL(JSON.stringify(user));
						headers = {
							Authorization: "Api-Key ".concat(this.deploymentKey),
							"X-Amp-Exp-User": userJsonBase64
						};
						if (options === null || options === void 0 ? void 0 : options.flagKeys) headers["X-Amp-Exp-Flag-Keys"] = gBase64.encodeURL(JSON.stringify(options.flagKeys));
						if (options === null || options === void 0 ? void 0 : options.trackingOption) headers["X-Amp-Exp-Track"] = options.trackingOption;
						return [4, this.httpClient.request({
							requestUrl: "".concat(this.serverUrl, "/sdk/v2/vardata?v=0"),
							method: "GET",
							headers,
							timeoutMillis: options === null || options === void 0 ? void 0 : options.timeoutMillis
						})];
					case 1:
						response = _a.sent();
						if (response.status != 200) throw new FetchError(response.status, "Fetch error response: status=".concat(response.status));
						return [2, JSON.parse(response.body)];
				}
			});
		});
	};
	return SdkEvaluationApi;
})();
(function() {
	function SdkFlagApi(deploymentKey, serverUrl, httpClient) {
		this.deploymentKey = deploymentKey;
		this.serverUrl = serverUrl;
		this.httpClient = httpClient;
	}
	SdkFlagApi.prototype.getFlags = function(options) {
		return __awaiter(this, void 0, void 0, function() {
			var headers, response, flagsArray;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						headers = { Authorization: "Api-Key ".concat(this.deploymentKey) };
						if ((options === null || options === void 0 ? void 0 : options.libraryName) && (options === null || options === void 0 ? void 0 : options.libraryVersion)) headers["X-Amp-Exp-Library"] = "".concat(options.libraryName, "/").concat(options.libraryVersion);
						return [4, this.httpClient.request({
							requestUrl: "".concat(this.serverUrl, "/sdk/v2/flags"),
							method: "GET",
							headers,
							timeoutMillis: options === null || options === void 0 ? void 0 : options.timeoutMillis
						})];
					case 1:
						response = _a.sent();
						if (response.status != 200) throw Error("Flags error response: status=".concat(response.status));
						flagsArray = JSON.parse(response.body);
						return [2, flagsArray.reduce(function(map, flag) {
							map[flag.key] = flag;
							return map;
						}, {})];
				}
			});
		});
	};
	return SdkFlagApi;
})();
var safeGlobal = typeof globalThis !== "undefined" ? globalThis : global || self;
(function() {
	function Poller(action, ms) {
		this.poller = void 0;
		this.action = action;
		this.ms = ms;
	}
	Poller.prototype.start = function() {
		if (this.poller) return;
		this.poller = safeGlobal.setInterval(this.action, this.ms);
		this.action();
	};
	Poller.prototype.stop = function() {
		if (!this.poller) return;
		safeGlobal.clearInterval(this.poller);
		this.poller = void 0;
	};
	return Poller;
})();
var targetingIDBStore = new (function() {
	function TargetingIDBStore() {
		var _this = this;
		this.dbs = {};
		this.createStore = function(dbName) {
			return __awaiter$1(_this, void 0, void 0, function() {
				return __generator$1(this, function(_a) {
					switch (_a.label) {
						case 0: return [4, openDB(dbName, 1, { upgrade: function(db) {
							if (!db.objectStoreNames.contains("eventTypesForSession")) db.createObjectStore("eventTypesForSession", { keyPath: "sessionId" });
						} })];
						case 1: return [2, _a.sent()];
					}
				});
			});
		};
		this.openOrCreateDB = function(apiKey) {
			return __awaiter$1(_this, void 0, void 0, function() {
				var dbName, db;
				return __generator$1(this, function(_a) {
					switch (_a.label) {
						case 0:
							if (this.dbs && this.dbs[apiKey]) return [2, this.dbs[apiKey]];
							dbName = "".concat(apiKey.substring(0, 10), "_amp_targeting");
							return [4, this.createStore(dbName)];
						case 1:
							db = _a.sent();
							this.dbs[apiKey] = db;
							return [2, db];
					}
				});
			});
		};
		this.updateEventListForSession = function(_a) {
			var sessionId = _a.sessionId, eventType = _a.eventType, eventTime = _a.eventTime, loggerProvider = _a.loggerProvider, tx = _a.tx;
			return __awaiter$1(_this, void 0, void 0, function() {
				var eventTypesForSessionStorage, eventTypesForSession, eventTypeStore, updatedEventTypes, e_1;
				var _b, _c;
				return __generator$1(this, function(_d) {
					switch (_d.label) {
						case 0:
							_d.trys.push([
								0,
								3,
								,
								4
							]);
							return [4, tx.store.get(sessionId)];
						case 1:
							eventTypesForSessionStorage = _d.sent();
							eventTypesForSession = eventTypesForSessionStorage ? eventTypesForSessionStorage.eventTypes : {};
							eventTypeStore = eventTypesForSession[eventType] || {};
							updatedEventTypes = __assign$1(__assign$1({}, eventTypesForSession), (_b = {}, _b[eventType] = __assign$1(__assign$1({}, eventTypeStore), (_c = {}, _c[eventTime] = { event_type: eventType }, _c)), _b));
							return [4, tx.store.put({
								sessionId,
								eventTypes: updatedEventTypes
							})];
						case 2:
							_d.sent();
							return [2, updatedEventTypes];
						case 3:
							e_1 = _d.sent();
							loggerProvider.warn("Failed to store events for targeting ".concat(sessionId, ": ").concat(e_1));
							return [3, 4];
						case 4: return [2, void 0];
					}
				});
			});
		};
		this.deleteOldSessionEventTypes = function(_a) {
			var currentSessionId = _a.currentSessionId, loggerProvider = _a.loggerProvider, tx = _a.tx;
			return __awaiter$1(_this, void 0, void 0, function() {
				var allEventTypeObjs, i, eventTypeObj, amountOfTimeSinceSession, e_2;
				return __generator$1(this, function(_b) {
					switch (_b.label) {
						case 0:
							_b.trys.push([
								0,
								6,
								,
								7
							]);
							return [4, tx.store.getAll()];
						case 1:
							allEventTypeObjs = _b.sent();
							i = 0;
							_b.label = 2;
						case 2:
							if (!(i < allEventTypeObjs.length)) return [3, 5];
							eventTypeObj = allEventTypeObjs[i];
							amountOfTimeSinceSession = Date.now() - eventTypeObj.sessionId;
							if (!(eventTypeObj.sessionId !== currentSessionId && amountOfTimeSinceSession > 1728e5)) return [3, 4];
							return [4, tx.store.delete(eventTypeObj.sessionId)];
						case 3:
							_b.sent();
							_b.label = 4;
						case 4:
							i++;
							return [3, 2];
						case 5: return [3, 7];
						case 6:
							e_2 = _b.sent();
							loggerProvider.warn("Failed to clear old session events for targeting: ".concat(e_2));
							return [3, 7];
						case 7: return [2];
					}
				});
			});
		};
		this.storeEventTypeForSession = function(_a) {
			var loggerProvider = _a.loggerProvider, sessionId = _a.sessionId, eventType = _a.eventType, eventTime = _a.eventTime, apiKey = _a.apiKey;
			return __awaiter$1(_this, void 0, void 0, function() {
				var db, tx, updatedEventTypes, e_3;
				return __generator$1(this, function(_b) {
					switch (_b.label) {
						case 0:
							_b.trys.push([
								0,
								5,
								,
								6
							]);
							return [4, this.openOrCreateDB(apiKey)];
						case 1:
							db = _b.sent();
							tx = db.transaction("eventTypesForSession", "readwrite");
							if (!tx) return [2];
							return [4, this.updateEventListForSession({
								sessionId,
								tx,
								loggerProvider,
								eventType,
								eventTime
							})];
						case 2:
							updatedEventTypes = _b.sent();
							return [4, this.deleteOldSessionEventTypes({
								currentSessionId: sessionId,
								tx,
								loggerProvider
							})];
						case 3:
							_b.sent();
							return [4, tx.done];
						case 4:
							_b.sent();
							return [2, updatedEventTypes];
						case 5:
							e_3 = _b.sent();
							loggerProvider.warn("Failed to store events for targeting ".concat(sessionId, ": ").concat(e_3));
							return [3, 6];
						case 6: return [2, void 0];
					}
				});
			});
		};
	}
	return TargetingIDBStore;
}())();
//#endregion
//#region node_modules/.pnpm/@amplitude+targeting@0.2.0/node_modules/@amplitude/targeting/lib/esm/targeting.js
var Targeting = function() {
	function Targeting() {
		var _this = this;
		this.evaluateTargeting = function(_a) {
			var apiKey = _a.apiKey, loggerProvider = _a.loggerProvider, event = _a.event, sessionId = _a.sessionId, userProperties = _a.userProperties, deviceId = _a.deviceId, flag = _a.flag;
			return __awaiter$1(_this, void 0, void 0, function() {
				var eventTypes, _b, eventStrings, context, targetingBucket;
				return __generator$1(this, function(_c) {
					switch (_c.label) {
						case 0:
							if (!(event && event.time)) return [3, 2];
							return [4, targetingIDBStore.storeEventTypeForSession({
								loggerProvider,
								apiKey,
								sessionId,
								eventType: event.event_type,
								eventTime: event.time
							})];
						case 1:
							_b = _c.sent();
							return [3, 3];
						case 2:
							_b = void 0;
							_c.label = 3;
						case 3:
							eventTypes = _b;
							eventStrings = eventTypes && new Set(Object.keys(eventTypes));
							context = {
								session_id: sessionId,
								event,
								event_types: eventStrings && Array.from(eventStrings),
								user: {
									device_id: deviceId,
									user_properties: userProperties
								}
							};
							targetingBucket = this.evaluationEngine.evaluate(context, [flag]);
							return [2, targetingBucket];
					}
				});
			});
		};
		this.evaluationEngine = new EvaluationEngine();
	}
	return Targeting;
}();
//#endregion
//#region node_modules/.pnpm/@amplitude+targeting@0.2.0/node_modules/@amplitude/targeting/lib/esm/targeting-factory.js
var createInstance = function() {
	var targeting = new Targeting();
	return { evaluateTargeting: targeting.evaluateTargeting.bind(targeting) };
};
//#endregion
//#region node_modules/.pnpm/@amplitude+targeting@0.2.0/node_modules/@amplitude/targeting/lib/esm/index.js
var evaluateTargeting = createInstance().evaluateTargeting;
//#endregion
export { evaluateTargeting };
