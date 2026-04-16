import { f as __commonJSMin, v as __toESM } from "../index.js";
import { i as isString, n as isFunction, o as useLatest, r as isNumber } from "./useUnmount-LxWHCkGT.js";
import { c as __values } from "./tslib.es6-BSnKF3gl.js";
import { r as getTargetElement, t as useEffectWithTarget } from "./useEffectWithTarget-B62zcRzE.js";
import { useRef } from "react";
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/utils/depsEqual.js
var import_react_fast_compare = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasElementType = typeof Element !== "undefined";
	var hasMap = typeof Map === "function";
	var hasSet = typeof Set === "function";
	var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
	function equal(a, b) {
		if (a === b) return true;
		if (a && b && typeof a == "object" && typeof b == "object") {
			if (a.constructor !== b.constructor) return false;
			var length, i, keys;
			if (Array.isArray(a)) {
				length = a.length;
				if (length != b.length) return false;
				for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
				return true;
			}
			var it;
			if (hasMap && a instanceof Map && b instanceof Map) {
				if (a.size !== b.size) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;
				return true;
			}
			if (hasSet && a instanceof Set && b instanceof Set) {
				if (a.size !== b.size) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
				return true;
			}
			if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
				length = a.length;
				if (length != b.length) return false;
				for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
				return true;
			}
			if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
			if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
			if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
			keys = Object.keys(a);
			length = keys.length;
			if (length !== Object.keys(b).length) return false;
			for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
			if (hasElementType && a instanceof Element) return false;
			for (i = length; i-- !== 0;) {
				if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) continue;
				if (!equal(a[keys[i]], b[keys[i]])) return false;
			}
			return true;
		}
		return a !== a && b !== b;
	}
	module.exports = function isEqual(a, b) {
		try {
			return equal(a, b);
		} catch (error) {
			if ((error.message || "").match(/stack|recursion/i)) {
				console.warn("react-fast-compare cannot handle circular refs");
				return false;
			}
			throw error;
		}
	};
})))());
var depsEqual = function(aDeps, bDeps) {
	if (aDeps === void 0) aDeps = [];
	if (bDeps === void 0) bDeps = [];
	return (0, import_react_fast_compare.default)(aDeps, bDeps);
};
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/utils/useDeepCompareWithTarget.js
var useDeepCompareEffectWithTarget = function(effect, deps, target) {
	var ref = useRef(void 0);
	var signalRef = useRef(0);
	if (!depsEqual(deps, ref.current)) signalRef.current += 1;
	ref.current = deps;
	useEffectWithTarget(effect, [signalRef.current], target);
};
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/utils/isAppleDevice.js
var isAppleDevice = /(mac|iphone|ipod|ipad)/i.test(typeof navigator !== "undefined" ? navigator === null || navigator === void 0 ? void 0 : navigator.platform : "");
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useKeyPress/index.js
var aliasKeyCodeMap = {
	"0": 48,
	"1": 49,
	"2": 50,
	"3": 51,
	"4": 52,
	"5": 53,
	"6": 54,
	"7": 55,
	"8": 56,
	"9": 57,
	backspace: 8,
	tab: 9,
	enter: 13,
	shift: 16,
	ctrl: 17,
	alt: 18,
	pausebreak: 19,
	capslock: 20,
	esc: 27,
	space: 32,
	pageup: 33,
	pagedown: 34,
	end: 35,
	home: 36,
	leftarrow: 37,
	uparrow: 38,
	rightarrow: 39,
	downarrow: 40,
	insert: 45,
	delete: 46,
	a: 65,
	b: 66,
	c: 67,
	d: 68,
	e: 69,
	f: 70,
	g: 71,
	h: 72,
	i: 73,
	j: 74,
	k: 75,
	l: 76,
	m: 77,
	n: 78,
	o: 79,
	p: 80,
	q: 81,
	r: 82,
	s: 83,
	t: 84,
	u: 85,
	v: 86,
	w: 87,
	x: 88,
	y: 89,
	z: 90,
	leftwindowkey: 91,
	rightwindowkey: 92,
	meta: isAppleDevice ? [91, 93] : [91, 92],
	selectkey: 93,
	numpad0: 96,
	numpad1: 97,
	numpad2: 98,
	numpad3: 99,
	numpad4: 100,
	numpad5: 101,
	numpad6: 102,
	numpad7: 103,
	numpad8: 104,
	numpad9: 105,
	multiply: 106,
	add: 107,
	subtract: 109,
	decimalpoint: 110,
	divide: 111,
	f1: 112,
	f2: 113,
	f3: 114,
	f4: 115,
	f5: 116,
	f6: 117,
	f7: 118,
	f8: 119,
	f9: 120,
	f10: 121,
	f11: 122,
	f12: 123,
	numlock: 144,
	scrolllock: 145,
	semicolon: 186,
	equalsign: 187,
	comma: 188,
	dash: 189,
	period: 190,
	forwardslash: 191,
	graveaccent: 192,
	openbracket: 219,
	backslash: 220,
	closebracket: 221,
	singlequote: 222
};
var modifierKey = {
	ctrl: function(event) {
		return event.ctrlKey;
	},
	shift: function(event) {
		return event.shiftKey;
	},
	alt: function(event) {
		return event.altKey;
	},
	meta: function(event) {
		if (event.type === "keyup") return aliasKeyCodeMap.meta.includes(event.keyCode);
		return event.metaKey;
	}
};
function isValidKeyType(value) {
	return isString(value) || isNumber(value);
}
function countKeyByEvent(event) {
	var countOfModifier = Object.keys(modifierKey).reduce(function(total, key) {
		if (modifierKey[key](event)) return total + 1;
		return total;
	}, 0);
	return [
		16,
		17,
		18,
		91,
		92
	].includes(event.keyCode) ? countOfModifier : countOfModifier + 1;
}
/**
* 判断按键是否激活
* @param [event: KeyboardEvent]键盘事件
* @param [keyFilter: any] 当前键
* @returns string | number | boolean
*/
function genFilterKey(event, keyFilter, exactMatch) {
	var e_1, _a;
	if (!event.key) return false;
	if (isNumber(keyFilter)) return event.keyCode === keyFilter ? keyFilter : false;
	var genArr = keyFilter.split(".");
	var genLen = 0;
	try {
		for (var genArr_1 = __values(genArr), genArr_1_1 = genArr_1.next(); !genArr_1_1.done; genArr_1_1 = genArr_1.next()) {
			var key = genArr_1_1.value;
			var genModifier = modifierKey[key];
			var aliasKeyCode = aliasKeyCodeMap[key.toLowerCase()];
			if (genModifier && genModifier(event) || aliasKeyCode && aliasKeyCode === event.keyCode) genLen++;
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (genArr_1_1 && !genArr_1_1.done && (_a = genArr_1.return)) _a.call(genArr_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	/**
	* 需要判断触发的键位和监听的键位完全一致，判断方法就是触发的键位里有且等于监听的键位
	* genLen === genArr.length 能判断出来触发的键位里有监听的键位
	* countKeyByEvent(event) === genArr.length 判断出来触发的键位数量里有且等于监听的键位数量
	* 主要用来防止按组合键其子集也会触发的情况，例如监听 ctrl+a 会触发监听 ctrl 和 a 两个键的事件。
	*/
	if (exactMatch) return genLen === genArr.length && countKeyByEvent(event) === genArr.length ? keyFilter : false;
	return genLen === genArr.length ? keyFilter : false;
}
/**
* 键盘输入预处理方法
* @param [keyFilter: any] 当前键
* @returns () => Boolean
*/
function genKeyFormatter(keyFilter, exactMatch) {
	if (isFunction(keyFilter)) return keyFilter;
	if (isValidKeyType(keyFilter)) return function(event) {
		return genFilterKey(event, keyFilter, exactMatch);
	};
	if (Array.isArray(keyFilter)) return function(event) {
		return keyFilter.find(function(item) {
			return genFilterKey(event, item, exactMatch);
		});
	};
	return function() {
		return Boolean(keyFilter);
	};
}
var defaultEvents = ["keydown"];
function useKeyPress(keyFilter, eventHandler, option) {
	var _a = option || {}, _b = _a.events, events = _b === void 0 ? defaultEvents : _b, target = _a.target, _c = _a.exactMatch, exactMatch = _c === void 0 ? false : _c, _d = _a.useCapture, useCapture = _d === void 0 ? false : _d;
	var eventHandlerRef = useLatest(eventHandler);
	var keyFilterRef = useLatest(keyFilter);
	useDeepCompareEffectWithTarget(function() {
		var e_2, _a;
		var _b;
		var el = getTargetElement(target, window);
		if (!el) return;
		var callbackHandler = function(event) {
			var _a;
			var keyEvent = event;
			var keyGuard = genKeyFormatter(keyFilterRef.current, exactMatch)(keyEvent);
			var firedKey = isValidKeyType(keyGuard) ? keyGuard : keyEvent.key;
			if (keyGuard) return (_a = eventHandlerRef.current) === null || _a === void 0 ? void 0 : _a.call(eventHandlerRef, keyEvent, firedKey);
		};
		try {
			for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
				var eventName = events_1_1.value;
				(_b = el === null || el === void 0 ? void 0 : el.addEventListener) === null || _b === void 0 || _b.call(el, eventName, callbackHandler, useCapture);
			}
		} catch (e_2_1) {
			e_2 = { error: e_2_1 };
		} finally {
			try {
				if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
			} finally {
				if (e_2) throw e_2.error;
			}
		}
		return function() {
			var e_3, _a;
			var _b;
			try {
				for (var events_2 = __values(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
					var eventName = events_2_1.value;
					(_b = el === null || el === void 0 ? void 0 : el.removeEventListener) === null || _b === void 0 || _b.call(el, eventName, callbackHandler, useCapture);
				}
			} catch (e_3_1) {
				e_3 = { error: e_3_1 };
			} finally {
				try {
					if (events_2_1 && !events_2_1.done && (_a = events_2.return)) _a.call(events_2);
				} finally {
					if (e_3) throw e_3.error;
				}
			}
		};
	}, [events], target);
}
//#endregion
export { useKeyPress as t };
