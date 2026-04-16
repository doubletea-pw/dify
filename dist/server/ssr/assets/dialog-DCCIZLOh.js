import { f as __commonJSMin, g as __require } from "../index.js";
import * as t$1 from "react";
import React, { Fragment, cloneElement, createContext, createElement, createRef, forwardRef, isValidElement, useCallback, useContext, useEffect, useId, useId as r$4, useLayoutEffect, useMemo, useReducer, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/keyboard.js
var o$7 = ((r) => (r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(o$7 || {});
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/env.js
var i$5 = Object.defineProperty;
var d$3 = (t, e, n) => e in t ? i$5(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : t[e] = n;
var r$6 = (t, e, n) => (d$3(t, typeof e != "symbol" ? e + "" : e, n), n);
var o$6 = class {
	constructor() {
		r$6(this, "current", this.detect());
		r$6(this, "handoffState", "pending");
		r$6(this, "currentId", 0);
	}
	set(e) {
		this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e);
	}
	reset() {
		this.set(this.detect());
	}
	nextId() {
		return ++this.currentId;
	}
	get isServer() {
		return this.current === "server";
	}
	get isClient() {
		return this.current === "client";
	}
	detect() {
		return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
	}
	handoff() {
		this.handoffState === "pending" && (this.handoffState = "complete");
	}
	get isHandoffComplete() {
		return this.handoffState === "complete";
	}
};
var s$6 = new o$6();
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var n$6 = (e, t) => {
	s$6.isServer ? useEffect(e, t) : useLayoutEffect(e, t);
};
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s$5(e) {
	let r = useRef(e);
	return n$6(() => {
		r.current = e;
	}, [e]), r;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-event-listener.js
function E$2(n, e, a, t) {
	let i = s$5(a);
	useEffect(() => {
		n = n != null ? n : window;
		function r(o) {
			i.current(o);
		}
		return n.addEventListener(e, r, t), () => n.removeEventListener(e, r, t);
	}, [
		n,
		e,
		t
	]);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/default-map.js
var a$12 = class extends Map {
	constructor(t) {
		super();
		this.factory = t;
	}
	get(t) {
		let e = super.get(t);
		return e === void 0 && (e = this.factory(t), this.set(t, e)), e;
	}
};
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/micro-task.js
function t$5(e) {
	typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o) => setTimeout(() => {
		throw o;
	}));
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/disposables.js
function o$5() {
	let s = [], r = {
		addEventListener(e, t, n, i) {
			return e.addEventListener(t, n, i), r.add(() => e.removeEventListener(t, n, i));
		},
		requestAnimationFrame(...e) {
			let t = requestAnimationFrame(...e);
			return r.add(() => cancelAnimationFrame(t));
		},
		nextFrame(...e) {
			return r.requestAnimationFrame(() => r.requestAnimationFrame(...e));
		},
		setTimeout(...e) {
			let t = setTimeout(...e);
			return r.add(() => clearTimeout(t));
		},
		microTask(...e) {
			let t = { current: !0 };
			return t$5(() => {
				t.current && e[0]();
			}), r.add(() => {
				t.current = !1;
			});
		},
		style(e, t, n) {
			let i = e.style.getPropertyValue(t);
			return Object.assign(e.style, { [t]: n }), this.add(() => {
				Object.assign(e.style, { [t]: i });
			});
		},
		group(e) {
			let t = o$5();
			return e(t), this.add(() => t.dispose());
		},
		add(e) {
			return s.includes(e) || s.push(e), () => {
				let t = s.indexOf(e);
				if (t >= 0) for (let n of s.splice(t, 1)) n();
			};
		},
		dispose() {
			for (let e of s.splice(0)) e();
		}
	};
	return r;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/machine.js
var h$3 = Object.defineProperty;
var v$1 = (t, e, r) => e in t ? h$3(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r
}) : t[e] = r;
var S$5 = (t, e, r) => (v$1(t, typeof e != "symbol" ? e + "" : e, r), r), b$1 = (t, e, r) => {
	if (!e.has(t)) throw TypeError("Cannot " + r);
};
var i$4 = (t, e, r) => (b$1(t, e, "read from private field"), r ? r.call(t) : e.get(t)), c$6 = (t, e, r) => {
	if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
	e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, u$7 = (t, e, r, s) => (b$1(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r);
var n$5, a$11, o$4;
var T$3 = class {
	constructor(e) {
		c$6(this, n$5, {});
		c$6(this, a$11, new a$12(() => /* @__PURE__ */ new Set()));
		c$6(this, o$4, /* @__PURE__ */ new Set());
		S$5(this, "disposables", o$5());
		u$7(this, n$5, e), s$6.isServer && this.disposables.microTask(() => {
			this.dispose();
		});
	}
	dispose() {
		this.disposables.dispose();
	}
	get state() {
		return i$4(this, n$5);
	}
	subscribe(e, r) {
		if (s$6.isServer) return () => {};
		let s = {
			selector: e,
			callback: r,
			current: e(i$4(this, n$5))
		};
		return i$4(this, o$4).add(s), this.disposables.add(() => {
			i$4(this, o$4).delete(s);
		});
	}
	on(e, r) {
		return s$6.isServer ? () => {} : (i$4(this, a$11).get(e).add(r), this.disposables.add(() => {
			i$4(this, a$11).get(e).delete(r);
		}));
	}
	send(e) {
		let r = this.reduce(i$4(this, n$5), e);
		if (r !== i$4(this, n$5)) {
			u$7(this, n$5, r);
			for (let s of i$4(this, o$4)) {
				let l = s.selector(i$4(this, n$5));
				j$3(s.current, l) || (s.current = l, s.callback(l));
			}
			for (let s of i$4(this, a$11).get(e.type)) s(i$4(this, n$5), e);
		}
	}
};
n$5 = /* @__PURE__ */ new WeakMap(), a$11 = /* @__PURE__ */ new WeakMap(), o$4 = /* @__PURE__ */ new WeakMap();
function j$3(t, e) {
	return Object.is(t, e) ? !0 : typeof t != "object" || t === null || typeof e != "object" || e === null ? !1 : Array.isArray(t) && Array.isArray(e) ? t.length !== e.length ? !1 : f$6(t[Symbol.iterator](), e[Symbol.iterator]()) : t instanceof Map && e instanceof Map || t instanceof Set && e instanceof Set ? t.size !== e.size ? !1 : f$6(t.entries(), e.entries()) : p$3(t) && p$3(e) ? f$6(Object.entries(t)[Symbol.iterator](), Object.entries(e)[Symbol.iterator]()) : !1;
}
function f$6(t, e) {
	do {
		let r = t.next(), s = e.next();
		if (r.done && s.done) return !0;
		if (r.done || s.done || !Object.is(r.value, s.value)) return !1;
	} while (!0);
}
function p$3(t) {
	if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
	let e = Object.getPrototypeOf(t);
	return e === null || Object.getPrototypeOf(e) === null;
}
function k$2(t) {
	let [e, r] = t(), s = o$5();
	return (...l) => {
		e(...l), s.dispose(), s.microTask(r);
	};
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/match.js
function u$6(r, n, ...a) {
	if (r in n) {
		let e = n[r];
		return typeof e == "function" ? e(...a) : e;
	}
	let t = /* @__PURE__ */ new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e) => `"${e}"`).join(", ")}.`);
	throw Error.captureStackTrace && Error.captureStackTrace(t, u$6), t;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/machines/stack-machine.js
var a$10 = Object.defineProperty;
var r$5 = (e, c, t) => c in e ? a$10(e, c, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : e[c] = t;
var p$2 = (e, c, t) => (r$5(e, typeof c != "symbol" ? c + "" : c, t), t);
var k$1 = ((t) => (t[t.Push = 0] = "Push", t[t.Pop = 1] = "Pop", t))(k$1 || {});
var y$2 = {
	[0](e, c) {
		let t = c.id, s = e.stack, i = e.stack.indexOf(t);
		if (i !== -1) {
			let n = e.stack.slice();
			return n.splice(i, 1), n.push(t), s = n, {
				...e,
				stack: s
			};
		}
		return {
			...e,
			stack: [...e.stack, t]
		};
	},
	[1](e, c) {
		let t = c.id, s = e.stack.indexOf(t);
		if (s === -1) return e;
		let i = e.stack.slice();
		return i.splice(s, 1), {
			...e,
			stack: i
		};
	}
};
var o$3 = class o$3 extends T$3 {
	constructor() {
		super(...arguments);
		p$2(this, "actions", {
			push: (t) => this.send({
				type: 0,
				id: t
			}),
			pop: (t) => this.send({
				type: 1,
				id: t
			})
		});
		p$2(this, "selectors", {
			isTop: (t, s) => t.stack[t.stack.length - 1] === s,
			inStack: (t, s) => t.stack.includes(s)
		});
	}
	static new() {
		return new o$3({ stack: [] });
	}
	reduce(t, s) {
		return u$6(s.type, y$2, t, s);
	}
};
var x$4 = new a$12(() => o$3.new());
//#endregion
//#region node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.4/node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.js
/**
* @license React
* use-sync-external-store-with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React$1 = __require("react");
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React$1.useSyncExternalStore, useRef = React$1.useRef, useEffect = React$1.useEffect, useMemo = React$1.useMemo, useDebugValue = React$1.useDebugValue;
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
//#region node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.4/node_modules/use-sync-external-store/with-selector.js
var require_with_selector = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_with_selector_production();
}));
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-event.js
var o$2 = function(t) {
	let e = s$5(t);
	return React.useCallback((...r) => e.current(...r), [e]);
};
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/react-glue.js
var import_with_selector = require_with_selector();
function S$4(e, n, r = j$3) {
	return (0, import_with_selector.useSyncExternalStoreWithSelector)(o$2((i) => e.subscribe(s$4, i)), o$2(() => e.state), o$2(() => e.state), o$2(n), r);
}
function s$4(e) {
	return e;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
function I$5(o, s) {
	let t = useId(), r = x$4.get(s), [i, c] = S$4(r, useCallback((e) => [r.selectors.isTop(e, t), r.selectors.inStack(e, t)], [r, t]));
	return n$6(() => {
		if (o) return r.actions.push(t), () => r.actions.pop(t);
	}, [
		r,
		o,
		t
	]), o ? c ? i : !0 : !1;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-escape.js
function a$8(o, r = typeof document != "undefined" ? document.defaultView : null, t) {
	let n = I$5(o, "escape");
	E$2(r, "keydown", (e) => {
		n && (e.defaultPrevented || e.key === o$7.Escape && t(e));
	});
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/owner.js
function l$4(n) {
	var u;
	return s$6.isServer ? null : n == null ? document : (u = n == null ? void 0 : n.ownerDocument) != null ? u : document;
}
function r$3(n) {
	var u, o;
	return s$6.isServer ? null : n == null ? document : (o = (u = n == null ? void 0 : n.getRootNode) == null ? void 0 : u.call(n)) != null ? o : document;
}
function e$3(n) {
	var u, o;
	return (o = (u = r$3(n)) == null ? void 0 : u.activeElement) != null ? o : null;
}
function d$2(n) {
	return e$3(n) === n;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var f$5 = /* @__PURE__ */ new Map(), u$5 = /* @__PURE__ */ new Map();
function h$2(t) {
	var e;
	let r = (e = u$5.get(t)) != null ? e : 0;
	return u$5.set(t, r + 1), r !== 0 ? () => m$4(t) : (f$5.set(t, {
		"aria-hidden": t.getAttribute("aria-hidden"),
		inert: t.inert
	}), t.setAttribute("aria-hidden", "true"), t.inert = !0, () => m$4(t));
}
function m$4(t) {
	var i;
	let r = (i = u$5.get(t)) != null ? i : 1;
	if (r === 1 ? u$5.delete(t) : u$5.set(t, r - 1), r !== 1) return;
	let e = f$5.get(t);
	e && (e["aria-hidden"] === null ? t.removeAttribute("aria-hidden") : t.setAttribute("aria-hidden", e["aria-hidden"]), t.inert = e.inert, f$5.delete(t));
}
function y$1(t, { allowed: r, disallowed: e } = {}) {
	let i = I$5(t, "inert-others");
	n$6(() => {
		var d, c;
		if (!i) return;
		let a = o$5();
		for (let n of (d = e == null ? void 0 : e()) != null ? d : []) n && a.add(h$2(n));
		let s = (c = r == null ? void 0 : r()) != null ? c : [];
		for (let n of s) {
			if (!n) continue;
			let l = l$4(n);
			if (!l) continue;
			let o = n.parentElement;
			for (; o && o !== l.body;) {
				for (let p of o.children) s.some((E) => p.contains(E)) || a.add(h$2(p));
				o = o.parentElement;
			}
		}
		return a.dispose;
	}, [
		i,
		r,
		e
	]);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js
function f$4() {
	var t;
	let [e] = useState(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o, c] = useState((t = e == null ? void 0 : e.matches) != null ? t : !1);
	return n$6(() => {
		if (!e) return;
		function n(r) {
			c(r.matches);
		}
		return e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, [e]), o;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/dom.js
function o$1(e) {
	return typeof e != "object" || e === null ? !1 : "nodeType" in e;
}
function t$4(e) {
	return o$1(e) && "tagName" in e;
}
function n$4(e) {
	return t$4(e) && "accessKey" in e;
}
function i$3(e) {
	return t$4(e) && "tabIndex" in e;
}
function r$2(e) {
	return t$4(e) && "style" in e;
}
function u$4(e) {
	return n$4(e) && e.nodeName === "IFRAME";
}
function l$3(e) {
	return n$4(e) && e.nodeName === "INPUT";
}
function m$3(e) {
	return n$4(e) && e.nodeName === "LABEL";
}
function a$7(e) {
	return n$4(e) && e.nodeName === "FIELDSET";
}
function E$1(e) {
	return n$4(e) && e.nodeName === "LEGEND";
}
function L(e) {
	return t$4(e) ? e.matches("a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type=\"hidden\"]),label,select,textarea,video[controls]") : !1;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
function p$1(s, n, o) {
	let i = s$5((t) => {
		let e = t.getBoundingClientRect();
		e.x === 0 && e.y === 0 && e.width === 0 && e.height === 0 && o();
	});
	useEffect(() => {
		if (!s) return;
		let t = n === null ? null : n$4(n) ? n : n.current;
		if (!t) return;
		let e = o$5();
		if (typeof ResizeObserver != "undefined") {
			let r = new ResizeObserver(() => i.current(t));
			r.observe(t), e.add(() => r.disconnect());
		}
		if (typeof IntersectionObserver != "undefined") {
			let r = new IntersectionObserver(() => i.current(t));
			r.observe(t), e.add(() => r.disconnect());
		}
		return () => e.dispose();
	}, [
		n,
		i,
		s
	]);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/focus-management.js
var E = [
	"[contentEditable=true]",
	"[tabindex]",
	"a[href]",
	"area[href]",
	"button:not([disabled])",
	"iframe",
	"input:not([disabled])",
	"select:not([disabled])",
	"details>summary",
	"textarea:not([disabled])"
].map((e) => `${e}:not([tabindex='-1'])`).join(","), S$3 = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var T$2 = ((o) => (o[o.First = 1] = "First", o[o.Previous = 2] = "Previous", o[o.Next = 4] = "Next", o[o.Last = 8] = "Last", o[o.WrapAround = 16] = "WrapAround", o[o.NoScroll = 32] = "NoScroll", o[o.AutoFocus = 64] = "AutoFocus", o))(T$2 || {}), A$2 = ((n) => (n[n.Error = 0] = "Error", n[n.Overflow = 1] = "Overflow", n[n.Success = 2] = "Success", n[n.Underflow = 3] = "Underflow", n))(A$2 || {}), O$1 = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(O$1 || {});
function x$3(e = document.body) {
	return e == null ? [] : Array.from(e.querySelectorAll(E)).sort((r, t) => Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function h$1(e = document.body) {
	return e == null ? [] : Array.from(e.querySelectorAll(S$3)).sort((r, t) => Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var I$4 = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(I$4 || {});
function H$2(e, r = 0) {
	var t;
	return e === ((t = l$4(e)) == null ? void 0 : t.body) ? !1 : u$6(r, {
		[0]() {
			return e.matches(E);
		},
		[1]() {
			let l = e;
			for (; l !== null;) {
				if (l.matches(E)) return !0;
				l = l.parentElement;
			}
			return !1;
		}
	});
}
function K$1(e) {
	o$5().nextFrame(() => {
		let r = e$3(e);
		r && i$3(r) && !H$2(r, 0) && w$5(e);
	});
}
var g = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(g || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e) => {
	e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
	e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function w$5(e) {
	e?.focus({ preventScroll: !0 });
}
var _$2 = ["textarea", "input"].join(",");
function P$1(e) {
	var r, t;
	return (t = (r = e == null ? void 0 : e.matches) == null ? void 0 : r.call(e, _$2)) != null ? t : !1;
}
function G$1(e, r = (t) => t) {
	return e.slice().sort((t, l) => {
		let n = r(t), a = r(l);
		if (n === null || a === null) return 0;
		let u = n.compareDocumentPosition(a);
		return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
	});
}
function R(e, r, t = e === null ? document.body : r$3(e)) {
	return v(x$3(t), r, { relativeTo: e });
}
function v(e, r, { sorted: t = !0, relativeTo: l = null, skipElements: n = [] } = {}) {
	let a = Array.isArray(e) ? e.length > 0 ? r$3(e[0]) : document : r$3(e), u = Array.isArray(e) ? t ? G$1(e) : e : r & 64 ? h$1(e) : x$3(e);
	n.length > 0 && u.length > 1 && (u = u.filter((i) => !n.some((d) => d != null && "current" in d ? (d == null ? void 0 : d.current) === i : d === i))), l = l != null ? l : a == null ? void 0 : a.activeElement;
	let o = (() => {
		if (r & 5) return 1;
		if (r & 10) return -1;
		throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
	})(), M = (() => {
		if (r & 1) return 0;
		if (r & 2) return Math.max(0, u.indexOf(l)) - 1;
		if (r & 4) return Math.max(0, u.indexOf(l)) + 1;
		if (r & 8) return u.length - 1;
		throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
	})(), N = r & 32 ? { preventScroll: !0 } : {}, m = 0, c = u.length, s;
	do {
		if (m >= c || m + c <= 0) return 0;
		let i = M + m;
		if (r & 16) i = (i + c) % c;
		else {
			if (i < 0) return 3;
			if (i >= c) return 1;
		}
		s = u[i], s?.focus(N), m += o;
	} while (s !== e$3(s));
	return r & 6 && P$1(s) && s.select(), 2;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/platform.js
function t$3() {
	return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i$2() {
	return /Android/gi.test(window.navigator.userAgent);
}
function n$3() {
	return t$3() || i$2();
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-document-event.js
function i$1(t, e, o, n) {
	let u = s$5(o);
	useEffect(() => {
		if (!t) return;
		function r(m) {
			u.current(m);
		}
		return document.addEventListener(e, r, n), () => document.removeEventListener(e, r, n);
	}, [
		t,
		e,
		n
	]);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-window-event.js
function s$3(t, e, o, n) {
	let i = s$5(o);
	useEffect(() => {
		if (!t) return;
		function r(d) {
			i.current(d);
		}
		return window.addEventListener(e, r, n), () => window.removeEventListener(e, r, n);
	}, [
		t,
		e,
		n
	]);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var C$4 = 30;
function k(o, f, h) {
	let m = s$5(h), s = useCallback(function(e, c) {
		if (e.defaultPrevented) return;
		let r = c(e);
		if (r === null || !r.getRootNode().contains(r) || !r.isConnected) return;
		let M = function u(n) {
			return typeof n == "function" ? u(n()) : Array.isArray(n) || n instanceof Set ? n : [n];
		}(f);
		for (let u of M) if (u !== null && (u.contains(r) || e.composed && e.composedPath().includes(u))) return;
		return !H$2(r, I$4.Loose) && r.tabIndex !== -1 && e.preventDefault(), m.current(e, r);
	}, [m, f]), i = useRef(null);
	i$1(o, "pointerdown", (t) => {
		var e, c;
		n$3() || (i.current = ((c = (e = t.composedPath) == null ? void 0 : e.call(t)) == null ? void 0 : c[0]) || t.target);
	}, !0), i$1(o, "pointerup", (t) => {
		if (n$3() || !i.current) return;
		let e = i.current;
		return i.current = null, s(t, () => e);
	}, !0);
	let l = useRef({
		x: 0,
		y: 0
	});
	i$1(o, "touchstart", (t) => {
		l.current.x = t.touches[0].clientX, l.current.y = t.touches[0].clientY;
	}, !0), i$1(o, "touchend", (t) => {
		let e = {
			x: t.changedTouches[0].clientX,
			y: t.changedTouches[0].clientY
		};
		if (!(Math.abs(e.x - l.current.x) >= C$4 || Math.abs(e.y - l.current.y) >= C$4)) return s(t, () => i$3(t.target) ? t.target : null);
	}, !0), s$3(o, "blur", (t) => s(t, () => u$4(window.document.activeElement) ? window.document.activeElement : null), !0);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-owner.js
function u$3(...e) {
	return useMemo(() => l$4(...e), [...e]);
}
function c$5(...e) {
	return useMemo(() => r$3(...e), [...e]);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/class-names.js
function t$2(...r) {
	return Array.from(new Set(r.flatMap((n) => typeof n == "string" ? n.split(" ") : []))).filter(Boolean).join(" ");
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/render.js
var A$1 = ((a) => (a[a.None = 0] = "None", a[a.RenderStrategy = 1] = "RenderStrategy", a[a.Static = 2] = "Static", a))(A$1 || {}), C$3 = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(C$3 || {});
function K() {
	let n = $$1();
	return useCallback((r) => U({
		mergeRefs: n,
		...r
	}), [n]);
}
function U({ ourProps: n, theirProps: r, slot: e, defaultTag: a, features: s, visible: t = !0, name: l, mergeRefs: i }) {
	i = i != null ? i : I$3;
	let o = P(r, n);
	if (t) return F(o, e, a, l, i);
	let y = s != null ? s : 0;
	if (y & 2) {
		let { static: f = !1, ...u } = o;
		if (f) return F(u, e, a, l, i);
	}
	if (y & 1) {
		let { unmount: f = !0, ...u } = o;
		return u$6(f ? 0 : 1, {
			[0]() {
				return null;
			},
			[1]() {
				return F({
					...u,
					hidden: !0,
					style: { display: "none" }
				}, e, a, l, i);
			}
		});
	}
	return F(o, e, a, l, i);
}
function F(n, r = {}, e, a, s) {
	let { as: t = e, children: l, refName: i = "ref", ...o } = h(n, ["unmount", "static"]), y = n.ref !== void 0 ? { [i]: n.ref } : {}, f = typeof l == "function" ? l(r) : l;
	"className" in o && o.className && typeof o.className == "function" && (o.className = o.className(r)), o["aria-labelledby"] && o["aria-labelledby"] === o.id && (o["aria-labelledby"] = void 0);
	let u = {};
	if (r) {
		let d = !1, p = [];
		for (let [c, T] of Object.entries(r)) typeof T == "boolean" && (d = !0), T === !0 && p.push(c.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`));
		if (d) {
			u["data-headlessui-state"] = p.join(" ");
			for (let c of p) u[`data-${c}`] = "";
		}
	}
	if (b(t) && (Object.keys(m$2(o)).length > 0 || Object.keys(m$2(u)).length > 0)) if (!isValidElement(f) || Array.isArray(f) && f.length > 1 || D$2(f)) {
		if (Object.keys(m$2(o)).length > 0) throw new Error([
			"Passing props on \"Fragment\"!",
			"",
			`The current component <${a} /> is rendering a "Fragment".`,
			"However we need to passthrough the following props:",
			Object.keys(m$2(o)).concat(Object.keys(m$2(u))).map((d) => `  - ${d}`).join(`
`),
			"",
			"You can apply a few solutions:",
			["Add an `as=\"...\"` prop, to ensure that we render an actual element instead of a \"Fragment\".", "Render a single element as the child so that we can forward the props onto that element."].map((d) => `  - ${d}`).join(`
`)
		].join(`
`));
	} else {
		let d = f.props, p = d == null ? void 0 : d.className, c = typeof p == "function" ? (...R) => t$2(p(...R), o.className) : t$2(p, o.className), T = c ? { className: c } : {}, g = P(f.props, m$2(h(o, ["ref"])));
		for (let R in u) R in g && delete u[R];
		return cloneElement(f, Object.assign({}, g, u, y, { ref: s(H$1(f), y.ref) }, T));
	}
	return createElement(t, Object.assign({}, h(o, ["ref"]), !b(t) && y, !b(t) && u), f);
}
function $$1() {
	let n = useRef([]), r = useCallback((e) => {
		for (let a of n.current) a != null && (typeof a == "function" ? a(e) : a.current = e);
	}, []);
	return (...e) => {
		if (!e.every((a) => a == null)) return n.current = e, r;
	};
}
function I$3(...n) {
	return n.every((r) => r == null) ? void 0 : (r) => {
		for (let e of n) e != null && (typeof e == "function" ? e(r) : e.current = r);
	};
}
function P(...n) {
	if (n.length === 0) return {};
	if (n.length === 1) return n[0];
	let r = {}, e = {};
	for (let s of n) for (let t in s) t.startsWith("on") && typeof s[t] == "function" ? (e[t] ?? (e[t] = []), e[t].push(s[t])) : r[t] = s[t];
	if (r.disabled || r["aria-disabled"]) for (let s in e) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s) && (e[s] = [(t) => {
		var l;
		return (l = t == null ? void 0 : t.preventDefault) == null ? void 0 : l.call(t);
	}]);
	for (let s in e) Object.assign(r, { [s](t, ...l) {
		let i = e[s];
		for (let o of i) {
			if ((t instanceof Event || (t == null ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
			o(t, ...l);
		}
	} });
	return r;
}
function V$1(...n) {
	if (n.length === 0) return {};
	if (n.length === 1) return n[0];
	let r = {}, e = {};
	for (let s of n) for (let t in s) t.startsWith("on") && typeof s[t] == "function" ? (e[t] ?? (e[t] = []), e[t].push(s[t])) : r[t] = s[t];
	for (let s in e) Object.assign(r, { [s](...t) {
		let l = e[s];
		for (let i of l) i?.(...t);
	} });
	return r;
}
function Y(n) {
	var r;
	return Object.assign(forwardRef(n), { displayName: (r = n.displayName) != null ? r : n.name });
}
function m$2(n) {
	let r = Object.assign({}, n);
	for (let e in r) r[e] === void 0 && delete r[e];
	return r;
}
function h(n, r = []) {
	let e = Object.assign({}, n);
	for (let a of r) a in e && delete e[a];
	return e;
}
function H$1(n) {
	return React.version.split(".")[0] >= "19" ? n.props.ref : n.ref;
}
function b(n) {
	return n === Fragment || n === Symbol.for("react.fragment");
}
function D$2(n) {
	return b(n.type);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/internal/hidden.js
var a$6 = "span";
var s$2 = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(s$2 || {});
function l$2(t, r) {
	var n;
	let { features: d = 1, ...e } = t, o = {
		ref: r,
		"aria-hidden": (d & 2) === 2 ? !0 : (n = e["aria-hidden"]) != null ? n : void 0,
		hidden: (d & 4) === 4 ? !0 : void 0,
		style: {
			position: "fixed",
			top: 1,
			left: 1,
			width: 1,
			height: 0,
			padding: 0,
			margin: -1,
			overflow: "hidden",
			clip: "rect(0, 0, 0, 0)",
			whiteSpace: "nowrap",
			borderWidth: "0",
			...(d & 4) === 4 && (d & 2) !== 2 && { display: "none" }
		}
	};
	return K()({
		ourProps: o,
		theirProps: e,
		slot: {},
		defaultTag: a$6,
		name: "Hidden"
	});
}
var f$3 = Y(l$2);
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-root-containers.js
function S$2({ defaultContainers: l = [], portals: n, mainTreeNode: o } = {}) {
	let c = o$2(() => {
		var r, u;
		let i = l$4(o), t = [];
		for (let e of l) e !== null && (t$4(e) ? t.push(e) : "current" in e && t$4(e.current) && t.push(e.current));
		if (n != null && n.current) for (let e of n.current) t.push(e);
		for (let e of (r = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? r : []) e !== document.body && e !== document.head && t$4(e) && e.id !== "headlessui-portal-root" && (o && (e.contains(o) || e.contains((u = o == null ? void 0 : o.getRootNode()) == null ? void 0 : u.host)) || t.some((E) => e.contains(E)) || t.push(e));
		return t;
	});
	return {
		resolveContainers: c,
		contains: o$2((i) => c().some((t) => t.contains(i)))
	};
}
var d$1 = createContext(null);
function j$2({ children: l, node: n }) {
	let [o, c] = useState(null), i = x$2(n != null ? n : o);
	return React.createElement(d$1.Provider, { value: i }, l, i === null && React.createElement(f$3, {
		features: s$2.Hidden,
		ref: (t) => {
			var r, u;
			if (t) {
				for (let e of (u = (r = l$4(t)) == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? u : []) if (e !== document.body && e !== document.head && t$4(e) && e != null && e.contains(t)) {
					c(e);
					break;
				}
			}
		}
	}));
}
function x$2(l = null) {
	var n;
	return (n = useContext(d$1)) != null ? n : l;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-store.js
function o(t) {
	return useSyncExternalStore(t.subscribe, t.getSnapshot, t.getSnapshot);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/store.js
function a$5(o, r) {
	let t = o(), n = /* @__PURE__ */ new Set();
	return {
		getSnapshot() {
			return t;
		},
		subscribe(e) {
			return n.add(e), () => n.delete(e);
		},
		dispatch(e, ...s) {
			let i = r[e].call(t, ...s);
			i && (t = i, n.forEach((c) => c()));
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function d() {
	let r;
	return {
		before({ doc: e }) {
			var l;
			let o = e.documentElement, t = (l = e.defaultView) != null ? l : window;
			r = Math.max(0, t.innerWidth - o.clientWidth);
		},
		after({ doc: e, d: o }) {
			let t = e.documentElement, l = Math.max(0, t.clientWidth - t.offsetWidth), n = Math.max(0, r - l);
			o.style(t, "paddingRight", `${n}px`);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function w$4() {
	return t$3() ? { before({ doc: o, d: r, meta: m }) {
		function a(s) {
			for (let l of m().containers) for (let c of l()) if (c.contains(s)) return !0;
			return !1;
		}
		r.microTask(() => {
			var c;
			if (window.getComputedStyle(o.documentElement).scrollBehavior !== "auto") {
				let t = o$5();
				t.style(o.documentElement, "scrollBehavior", "auto"), r.add(() => r.microTask(() => t.dispose()));
			}
			let s = (c = window.scrollY) != null ? c : window.pageYOffset, l = null;
			r.addEventListener(o, "click", (t) => {
				if (i$3(t.target)) try {
					let e = t.target.closest("a");
					if (!e) return;
					let { hash: n } = new URL(e.href), f = o.querySelector(n);
					i$3(f) && !a(f) && (l = f);
				} catch {}
			}, !0), r.group((t) => {
				r.addEventListener(o, "touchstart", (e) => {
					if (t.dispose(), i$3(e.target) && r$2(e.target)) if (a(e.target)) {
						let n = e.target;
						for (; n.parentElement && a(n.parentElement);) n = n.parentElement;
						t.style(n, "overscrollBehavior", "contain");
					} else t.style(e.target, "touchAction", "none");
				});
			}), r.addEventListener(o, "touchmove", (t) => {
				if (i$3(t.target)) {
					if (l$3(t.target)) return;
					if (a(t.target)) {
						let e = t.target;
						for (; e.parentElement && e.dataset.headlessuiPortal !== "" && !(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);) e = e.parentElement;
						e.dataset.headlessuiPortal === "" && t.preventDefault();
					} else t.preventDefault();
				}
			}, { passive: !1 }), r.add(() => {
				var e;
				s !== ((e = window.scrollY) != null ? e : window.pageYOffset) && window.scrollTo(0, s), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
			});
		});
	} } : {};
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function r$1() {
	return { before({ doc: e, d: o }) {
		o.style(e.documentElement, "overflow", "hidden");
	} };
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function r(e) {
	let o = {};
	for (let t of e) Object.assign(o, t(o));
	return o;
}
var c$4 = a$5(() => /* @__PURE__ */ new Map(), {
	PUSH(e, o) {
		var n;
		let t = (n = this.get(e)) != null ? n : {
			doc: e,
			count: 0,
			d: o$5(),
			meta: /* @__PURE__ */ new Set(),
			computedMeta: {}
		};
		return t.count++, t.meta.add(o), t.computedMeta = r(t.meta), this.set(e, t), this;
	},
	POP(e, o) {
		let t = this.get(e);
		return t && (t.count--, t.meta.delete(o), t.computedMeta = r(t.meta)), this;
	},
	SCROLL_PREVENT(e) {
		let o = {
			doc: e.doc,
			d: e.d,
			meta() {
				return e.computedMeta;
			}
		}, t = [
			w$4(),
			d(),
			r$1()
		];
		t.forEach(({ before: n }) => n == null ? void 0 : n(o)), t.forEach(({ after: n }) => n == null ? void 0 : n(o));
	},
	SCROLL_ALLOW({ d: e }) {
		e.dispose();
	},
	TEARDOWN({ doc: e }) {
		this.delete(e);
	}
});
c$4.subscribe(() => {
	let e = c$4.getSnapshot(), o = /* @__PURE__ */ new Map();
	for (let [t] of e) o.set(t, t.documentElement.style.overflow);
	for (let t of e.values()) {
		let n = o.get(t.doc) === "hidden", a = t.count !== 0;
		(a && !n || !a && n) && c$4.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && c$4.dispatch("TEARDOWN", t);
	}
});
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function a$4(r, e, n = () => ({ containers: [] })) {
	let f = o(c$4), o$8 = e ? f.get(e) : void 0, i = o$8 ? o$8.count > 0 : !1;
	return n$6(() => {
		if (!(!e || !r)) return c$4.dispatch("PUSH", e, n), () => c$4.dispatch("POP", e, n);
	}, [r, e]), i;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
function f$2(e, c, n = () => [document.body]) {
	a$4(I$5(e, "scroll-lock"), c, (t) => {
		var o;
		return { containers: [...(o = t.containers) != null ? o : [], n] };
	});
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
function s$1() {
	let r = typeof document == "undefined";
	return "useSyncExternalStore" in t$1 ? ((o) => o.useSyncExternalStore)(t$1)(() => () => {}, () => !1, () => !r) : !1;
}
function l$1() {
	let r = s$1(), [e, n] = t$1.useState(s$6.isHandoffComplete);
	return e && s$6.isHandoffComplete === !1 && n(!1), t$1.useEffect(() => {
		e !== !0 && n(!0);
	}, [e]), t$1.useEffect(() => s$6.handoff(), []), r ? !1 : e;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-slot.js
function n$2(e) {
	return useMemo(() => e, Object.values(e));
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var u$2 = Symbol();
function T$1(t, n = !0) {
	return Object.assign(t, { [u$2]: n });
}
function y(...t) {
	let n = useRef(t);
	useEffect(() => {
		n.current = t;
	}, [t]);
	let c = o$2((e) => {
		for (let o of n.current) o != null && (typeof o == "function" ? o(e) : o.current = e);
	});
	return t.every((e) => e == null || (e == null ? void 0 : e[u$2])) ? void 0 : c;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/internal/close-provider.js
var e$2 = createContext(() => {});
function C$2({ value: t, children: o }) {
	return React.createElement(e$2.Provider, { value: t }, o);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/internal/open-closed.js
var n$1 = createContext(null);
n$1.displayName = "OpenClosedContext";
var i = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(i || {});
function u$1() {
	return useContext(n$1);
}
function c$3({ value: o, children: t }) {
	return React.createElement(n$1.Provider, { value: o }, t);
}
function s({ children: o }) {
	return React.createElement(n$1.Provider, { value: null }, o);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/internal/portal-force-root.js
var e$1 = createContext(!1);
function a$3() {
	return useContext(e$1);
}
function l(o) {
	return React.createElement(e$1.Provider, { value: o.force }, o.children);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/internal/disabled.js
var e = createContext(void 0);
function a$2() {
	return useContext(e);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/description/description.js
var a$1 = createContext(null);
a$1.displayName = "DescriptionContext";
function f$1() {
	let r = useContext(a$1);
	if (r === null) {
		let e = /* @__PURE__ */ new Error("You used a <Description /> component, but it is not inside a relevant parent.");
		throw Error.captureStackTrace && Error.captureStackTrace(e, f$1), e;
	}
	return r;
}
function w$3() {
	var r, e;
	return (e = (r = useContext(a$1)) == null ? void 0 : r.value) != null ? e : void 0;
}
function H() {
	let [r, e] = useState([]);
	return [r.length > 0 ? r.join(" ") : void 0, useMemo(() => function(t) {
		let i = o$2((n) => (e((o) => [...o, n]), () => e((o) => {
			let s = o.slice(), p = s.indexOf(n);
			return p !== -1 && s.splice(p, 1), s;
		}))), l = useMemo(() => ({
			register: i,
			slot: t.slot,
			name: t.name,
			props: t.props,
			value: t.value
		}), [
			i,
			t.slot,
			t.name,
			t.props,
			t.value
		]);
		return React.createElement(a$1.Provider, { value: l }, t.children);
	}, [e])];
}
var I$2 = "p";
function C$1(r, e) {
	let c = r$4(), t = a$2(), { id: i = `headlessui-description-${c}`, ...l } = r, n = f$1(), o = y(e);
	n$6(() => n.register(i), [i, n.register]);
	let s = n$2({
		...n.slot,
		disabled: t || !1
	}), p = {
		ref: o,
		...n.props,
		id: i
	};
	return K()({
		ourProps: p,
		theirProps: l,
		slot: s,
		defaultTag: I$2,
		name: n.name || "Description"
	});
}
var _$1 = Y(C$1), M$2 = Object.assign(_$1, {});
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
	let [e] = useState(o$5);
	return useEffect(() => () => e.dispose(), [e]), e;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
function f() {
	let e = useRef(!1);
	return n$6(() => (e.current = !0, () => {
		e.current = !1;
	}), []), e;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
function c$2(t) {
	let r = o$2(t), e = useRef(!1);
	useEffect(() => (e.current = !1, () => {
		e.current = !0, t$5(() => {
			e.current && r();
		});
	}), [r]);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var a = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(a || {});
function u() {
	let e = useRef(0);
	return s$3(!0, "keydown", (r) => {
		r.key === "Tab" && (e.current = r.shiftKey ? 1 : 0);
	}, !0), e;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-watch.js
function m$1(u, t) {
	let e = useRef([]), r = o$2(u);
	useEffect(() => {
		let o = [...e.current];
		for (let [a, l] of t.entries()) if (e.current[a] !== l) {
			let n = r(t, o);
			return e.current = t, n;
		}
	}, [r, ...t]);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/document-ready.js
function t(n) {
	function e() {
		document.readyState !== "loading" && (n(), document.removeEventListener("DOMContentLoaded", e));
	}
	typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e), e());
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/active-element-history.js
var n = [];
t(() => {
	function e(t) {
		if (!i$3(t.target) || t.target === document.body || n[0] === t.target) return;
		let r = t.target;
		r = r.closest(E), n.unshift(r != null ? r : t.target), n = n.filter((o) => o != null && o.isConnected), n.splice(10);
	}
	window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function x$1(o) {
	if (!o) return /* @__PURE__ */ new Set();
	if (typeof o == "function") return new Set(o());
	let t = /* @__PURE__ */ new Set();
	for (let e of o.current) t$4(e.current) && t.add(e.current);
	return t;
}
var $ = "div";
var G = ((n) => (n[n.None = 0] = "None", n[n.InitialFocus = 1] = "InitialFocus", n[n.TabLock = 2] = "TabLock", n[n.FocusLock = 4] = "FocusLock", n[n.RestoreFocus = 8] = "RestoreFocus", n[n.AutoFocus = 16] = "AutoFocus", n))(G || {});
function w$2(o, t) {
	let e = useRef(null), r = y(e, t), { initialFocus: u$8, initialFocusFallback: a$13, containers: n, features: s = 15, ...f } = o;
	l$1() || (s = 0);
	let l = u$3(e.current);
	re(s, { ownerDocument: l });
	let T = ne(s, {
		ownerDocument: l,
		container: e,
		initialFocus: u$8,
		initialFocusFallback: a$13
	});
	oe(s, {
		ownerDocument: l,
		container: e,
		containers: n,
		previousActiveElement: T
	});
	let g = u(), A = o$2((c) => {
		if (!n$4(e.current)) return;
		let E = e.current;
		((V) => V())(() => {
			u$6(g.current, {
				[a.Forwards]: () => {
					v(E, T$2.First, { skipElements: [c.relatedTarget, a$13] });
				},
				[a.Backwards]: () => {
					v(E, T$2.Last, { skipElements: [c.relatedTarget, a$13] });
				}
			});
		});
	}), v$2 = I$5(!!(s & 2), "focus-trap#tab-lock"), N = p(), b = useRef(!1), k = {
		ref: r,
		onKeyDown(c) {
			c.key == "Tab" && (b.current = !0, N.requestAnimationFrame(() => {
				b.current = !1;
			}));
		},
		onBlur(c) {
			if (!(s & 4)) return;
			let E = x$1(n);
			n$4(e.current) && E.add(e.current);
			let L = c.relatedTarget;
			i$3(L) && L.dataset.headlessuiFocusGuard !== "true" && (I$1(E, L) || (b.current ? v(e.current, u$6(g.current, {
				[a.Forwards]: () => T$2.Next,
				[a.Backwards]: () => T$2.Previous
			}) | T$2.WrapAround, { relativeTo: c.target }) : i$3(c.target) && w$5(c.target)));
		}
	}, B = K();
	return React.createElement(React.Fragment, null, v$2 && React.createElement(f$3, {
		as: "button",
		type: "button",
		"data-headlessui-focus-guard": !0,
		onFocus: A,
		features: s$2.Focusable
	}), B({
		ourProps: k,
		theirProps: f,
		defaultTag: $,
		name: "FocusTrap"
	}), v$2 && React.createElement(f$3, {
		as: "button",
		type: "button",
		"data-headlessui-focus-guard": !0,
		onFocus: A,
		features: s$2.Focusable
	}));
}
var ee$1 = Y(w$2), ge = Object.assign(ee$1, { features: G });
function te$1(o = !0) {
	let t = useRef(n.slice());
	return m$1(([e], [r]) => {
		r === !0 && e === !1 && t$5(() => {
			t.current.splice(0);
		}), r === !1 && e === !0 && (t.current = n.slice());
	}, [
		o,
		n,
		t
	]), o$2(() => {
		var e;
		return (e = t.current.find((r) => r != null && r.isConnected)) != null ? e : null;
	});
}
function re(o, { ownerDocument: t }) {
	let e = !!(o & 8), r = te$1(e);
	m$1(() => {
		e || d$2(t == null ? void 0 : t.body) && w$5(r());
	}, [e]), c$2(() => {
		e && w$5(r());
	});
}
function ne(o, { ownerDocument: t, container: e, initialFocus: r, initialFocusFallback: u }) {
	let a = useRef(null), n = I$5(!!(o & 1), "focus-trap#initial-focus"), s = f();
	return m$1(() => {
		if (o === 0) return;
		if (!n) {
			u != null && u.current && w$5(u.current);
			return;
		}
		let f = e.current;
		f && t$5(() => {
			if (!s.current) return;
			let l = t == null ? void 0 : t.activeElement;
			if (r != null && r.current) {
				if ((r == null ? void 0 : r.current) === l) {
					a.current = l;
					return;
				}
			} else if (f.contains(l)) {
				a.current = l;
				return;
			}
			if (r != null && r.current) w$5(r.current);
			else {
				if (o & 16) {
					if (v(f, T$2.First | T$2.AutoFocus) !== A$2.Error) return;
				} else if (v(f, T$2.First) !== A$2.Error) return;
				if (u != null && u.current && (w$5(u.current), (t == null ? void 0 : t.activeElement) === u.current)) return;
				console.warn("There are no focusable elements inside the <FocusTrap />");
			}
			a.current = t == null ? void 0 : t.activeElement;
		});
	}, [
		u,
		n,
		o
	]), a;
}
function oe(o, { ownerDocument: t, container: e, containers: r, previousActiveElement: u }) {
	let a = f(), n = !!(o & 4);
	E$2(t == null ? void 0 : t.defaultView, "focus", (s) => {
		if (!n || !a.current) return;
		let f = x$1(r);
		n$4(e.current) && f.add(e.current);
		let l = u.current;
		if (!l) return;
		let T = s.target;
		n$4(T) ? I$1(f, T) ? (u.current = T, w$5(T)) : (s.preventDefault(), s.stopPropagation(), w$5(l)) : w$5(u.current);
	}, !0);
}
function I$1(o, t) {
	for (let e of o) if (e.contains(t)) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/portal/portal.js
function W(e) {
	let o = a$3(), l = useContext(c$1), [r, p] = useState(() => {
		var s;
		if (!o && l !== null) return (s = l.current) != null ? s : null;
		if (s$6.isServer) return null;
		let t = e == null ? void 0 : e.getElementById("headlessui-portal-root");
		if (t) return t;
		if (e === null) return null;
		let n = e.createElement("div");
		return n.setAttribute("id", "headlessui-portal-root"), e.body.appendChild(n);
	});
	return useEffect(() => {
		r !== null && (e != null && e.body.contains(r) || e == null || e.body.appendChild(r));
	}, [r, e]), useEffect(() => {
		o || l !== null && p(l.current);
	}, [
		l,
		p,
		o
	]), r;
}
var _ = Fragment, j$1 = Y(function(o, l) {
	let { ownerDocument: r = null, ...p$5 } = o, t = useRef(null), n = y(T$1((a) => {
		t.current = a;
	}), l), s = u$3(t.current), u = W(r != null ? r : s), y$5 = useContext(m), g = p(), v = K();
	return c$2(() => {
		var a;
		u && u.childNodes.length <= 0 && ((a = u.parentElement) == null || a.removeChild(u));
	}), u ? createPortal(React.createElement("div", {
		"data-headlessui-portal": "",
		ref: (a) => {
			g.dispose(), y$5 && a && g.add(y$5.register(a));
		}
	}, v({
		ourProps: { ref: n },
		theirProps: p$5,
		slot: {},
		defaultTag: _,
		name: "Portal"
	})), u) : null;
});
function S$1(e, o) {
	let l = y(o), { enabled: r = !0, ownerDocument: p, ...t } = e, n = K();
	return r ? React.createElement(j$1, {
		...t,
		ownerDocument: p,
		ref: l
	}) : n({
		ourProps: { ref: l },
		theirProps: t,
		slot: {},
		defaultTag: _,
		name: "Portal"
	});
}
var I = Fragment, c$1 = createContext(null);
function D$1(e, o) {
	let { target: l, ...r } = e, t = { ref: y(o) }, n = K();
	return React.createElement(c$1.Provider, { value: l }, n({
		ourProps: t,
		theirProps: r,
		defaultTag: I,
		name: "Popover.Group"
	}));
}
var m = createContext(null);
function ee() {
	let e = useContext(m), o = useRef([]), l = o$2((t) => (o.current.push(t), e && e.register(t), () => r(t))), r = o$2((t) => {
		let n = o.current.indexOf(t);
		n !== -1 && o.current.splice(n, 1), e && e.unregister(t);
	}), p = useMemo(() => ({
		register: l,
		unregister: r,
		portals: o
	}), [
		l,
		r,
		o
	]);
	return [o, useMemo(() => function({ children: n }) {
		return React.createElement(m.Provider, { value: p }, n);
	}, [p])];
}
var J = Y(S$1), X$1 = Y(D$1), te = Object.assign(J, { Group: X$1 });
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-flags.js
function c(u = 0) {
	let [r, a] = useState(u);
	return {
		flags: r,
		setFlag: useCallback((e) => a(e), []),
		addFlag: useCallback((e) => a((l) => l | e), []),
		hasFlag: useCallback((e) => (r & e) === e, [r]),
		removeFlag: useCallback((e) => a((l) => l & ~e), []),
		toggleFlag: useCallback((e) => a((l) => l ^ e), [])
	};
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-transition.js
var T, S;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T = process == null ? void 0 : process.env) == null ? void 0 : T["NODE_ENV"]) === "test" && typeof ((S = Element == null ? void 0 : Element.prototype) == null ? void 0 : S.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
	return console.warn([
		"Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.",
		"Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.",
		"",
		"Example usage:",
		"```js",
		"import { mockAnimationsApi } from 'jsdom-testing-mocks'",
		"mockAnimationsApi()",
		"```"
	].join(`
`)), [];
});
var A = ((i) => (i[i.None = 0] = "None", i[i.Closed = 1] = "Closed", i[i.Enter = 2] = "Enter", i[i.Leave = 4] = "Leave", i))(A || {});
function x(e) {
	let r = {};
	for (let t in e) e[t] === !0 && (r[`data-${t}`] = "");
	return r;
}
function N(e, r, t, n) {
	let [i, a] = useState(t), { hasFlag: s, addFlag: o, removeFlag: l } = c(e && i ? 3 : 0), u = useRef(!1), f = useRef(!1);
	return n$6(() => {
		var d;
		if (e) {
			if (t && a(!0), !r) {
				t && o(3);
				return;
			}
			return (d = n == null ? void 0 : n.start) == null || d.call(n, t), C(r, {
				inFlight: u,
				prepare() {
					f.current ? f.current = !1 : f.current = u.current, u.current = !0, !f.current && (t ? (o(3), l(4)) : (o(4), l(2)));
				},
				run() {
					f.current ? t ? (l(3), o(4)) : (l(4), o(3)) : t ? l(1) : o(1);
				},
				done() {
					var p;
					f.current && D(r) || (u.current = !1, l(7), t || a(!1), (p = n == null ? void 0 : n.end) == null || p.call(n, t));
				}
			});
		}
	}, [
		e,
		t,
		r,
		p()
	]), e ? [i, {
		closed: s(1),
		enter: s(2),
		leave: s(4),
		transition: s(2) || s(4)
	}] : [t, {
		closed: void 0,
		enter: void 0,
		leave: void 0,
		transition: void 0
	}];
}
function C(e, { prepare: r, run: t, done: n, inFlight: i }) {
	let a = o$5();
	return j(e, {
		prepare: r,
		inFlight: i
	}), a.nextFrame(() => {
		t(), a.requestAnimationFrame(() => {
			a.add(M$1(e, n));
		});
	}), a.dispose;
}
function M$1(e, r) {
	var a, s;
	let t = o$5();
	if (!e) return t.dispose;
	let n = !1;
	t.add(() => {
		n = !0;
	});
	let i = (s = (a = e.getAnimations) == null ? void 0 : a.call(e).filter((o) => o instanceof CSSTransition)) != null ? s : [];
	return i.length === 0 ? (r(), t.dispose) : (Promise.allSettled(i.map((o) => o.finished)).then(() => {
		n || r();
	}), t.dispose);
}
function j(e, { inFlight: r, prepare: t }) {
	if (r != null && r.current) {
		t();
		return;
	}
	let n = e.style.transition;
	e.style.transition = "none", t(), e.offsetHeight, e.style.transition = n;
}
function D(e) {
	var t, n;
	return ((n = (t = e.getAnimations) == null ? void 0 : t.call(e)) != null ? n : []).some((i) => i instanceof CSSTransition && i.playState !== "finished");
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/transition/transition.js
function ue(e) {
	var t;
	return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || !b((t = e.as) != null ? t : de) || React.Children.count(e.children) === 1;
}
var V = createContext(null);
V.displayName = "TransitionContext";
var De = ((n) => (n.Visible = "visible", n.Hidden = "hidden", n))(De || {});
function He$1() {
	let e = useContext(V);
	if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
	return e;
}
function Ae() {
	let e = useContext(w$1);
	if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
	return e;
}
var w$1 = createContext(null);
w$1.displayName = "NestingContext";
function M(e) {
	return "children" in e ? M(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Te(e, t) {
	let n = s$5(e), l = useRef([]), S = f(), R = p(), d = o$2((o, i = C$3.Hidden) => {
		let a = l.current.findIndex(({ el: s }) => s === o);
		a !== -1 && (u$6(i, {
			[C$3.Unmount]() {
				l.current.splice(a, 1);
			},
			[C$3.Hidden]() {
				l.current[a].state = "hidden";
			}
		}), R.microTask(() => {
			var s;
			!M(l) && S.current && ((s = n.current) == null || s.call(n));
		}));
	}), y = o$2((o) => {
		let i = l.current.find(({ el: a }) => a === o);
		return i ? i.state !== "visible" && (i.state = "visible") : l.current.push({
			el: o,
			state: "visible"
		}), () => d(o, C$3.Unmount);
	}), C = useRef([]), p$4 = useRef(Promise.resolve()), h = useRef({
		enter: [],
		leave: []
	}), g = o$2((o, i, a) => {
		C.current.splice(0), t && (t.chains.current[i] = t.chains.current[i].filter(([s]) => s !== o)), t?.chains.current[i].push([o, new Promise((s) => {
			C.current.push(s);
		})]), t?.chains.current[i].push([o, new Promise((s) => {
			Promise.all(h.current[i].map(([r, f]) => f)).then(() => s());
		})]), i === "enter" ? p$4.current = p$4.current.then(() => t == null ? void 0 : t.wait.current).then(() => a(i)) : a(i);
	}), v = o$2((o, i, a) => {
		Promise.all(h.current[i].splice(0).map(([s, r]) => r)).then(() => {
			var s;
			(s = C.current.shift()) == null || s();
		}).then(() => a(i));
	});
	return useMemo(() => ({
		children: l,
		register: y,
		unregister: d,
		onStart: g,
		onStop: v,
		wait: p$4,
		chains: h
	}), [
		y,
		d,
		l,
		g,
		v,
		h,
		p$4
	]);
}
var de = Fragment, fe = A$1.RenderStrategy;
function Fe(e, t) {
	var ee, te;
	let { transition: n = !0, beforeEnter: l, afterEnter: S, beforeLeave: R, afterLeave: d, enter: y$4, enterFrom: C, enterTo: p, entered: h, leave: g, leaveFrom: v, leaveTo: o, ...i$7 } = e, [a, s] = useState(null), r = useRef(null), f = ue(e), U = y(...f ? [
		r,
		t,
		s
	] : t === null ? [] : [t]), H = (ee = i$7.unmount) == null || ee ? C$3.Unmount : C$3.Hidden, { show: u, appear: z, initial: K$2 } = He$1(), [m, j] = useState(u ? "visible" : "hidden"), Q = Ae(), { register: A, unregister: F } = Q;
	n$6(() => A(r), [A, r]), n$6(() => {
		if (H === C$3.Hidden && r.current) {
			if (u && m !== "visible") {
				j("visible");
				return;
			}
			return u$6(m, {
				["hidden"]: () => F(r),
				["visible"]: () => A(r)
			});
		}
	}, [
		m,
		r,
		A,
		F,
		u,
		H
	]);
	let G = l$1();
	n$6(() => {
		if (f && G && m === "visible" && r.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
	}, [
		r,
		m,
		G,
		f
	]);
	let ce = K$2 && !z, Y = z && u && K$2, B = useRef(!1), I = Te(() => {
		B.current || (j("hidden"), F(r));
	}, Q), Z = o$2((W) => {
		B.current = !0;
		let L = W ? "enter" : "leave";
		I.onStart(r, L, (_) => {
			_ === "enter" ? l?.() : _ === "leave" && R?.();
		});
	}), $ = o$2((W) => {
		let L = W ? "enter" : "leave";
		B.current = !1, I.onStop(r, L, (_) => {
			_ === "enter" ? S?.() : _ === "leave" && d?.();
		}), L === "leave" && !M(I) && (j("hidden"), F(r));
	});
	useEffect(() => {
		f && n || (Z(u), $(u));
	}, [
		u,
		f,
		n
	]);
	let [, T] = N(!(!n || !f || !G || ce), a, u, {
		start: Z,
		end: $
	}), Ce = m$2({
		ref: U,
		className: ((te = t$2(i$7.className, Y && y$4, Y && C, T.enter && y$4, T.enter && T.closed && C, T.enter && !T.closed && p, T.leave && g, T.leave && !T.closed && v, T.leave && T.closed && o, !T.transition && u && h)) == null ? void 0 : te.trim()) || void 0,
		...x(T)
	}), N$1 = 0;
	m === "visible" && (N$1 |= i.Open), m === "hidden" && (N$1 |= i.Closed), u && m === "hidden" && (N$1 |= i.Opening), !u && m === "visible" && (N$1 |= i.Closing);
	let he = K();
	return React.createElement(w$1.Provider, { value: I }, React.createElement(c$3, { value: N$1 }, he({
		ourProps: Ce,
		theirProps: i$7,
		defaultTag: de,
		features: fe,
		visible: m === "visible",
		name: "Transition.Child"
	})));
}
function Ie(e, t) {
	let { show: n, appear: l = !1, unmount: S = !0, ...R } = e, d = useRef(null), C = y(...ue(e) ? [d, t] : t === null ? [] : [t]);
	l$1();
	let p = u$1();
	if (n === void 0 && p !== null && (n = (p & i.Open) === i.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
	let [h, g] = useState(n ? "visible" : "hidden"), v = Te(() => {
		n || g("hidden");
	}), [o, i$8] = useState(!0), a = useRef([n]);
	n$6(() => {
		o !== !1 && a.current[a.current.length - 1] !== n && (a.current.push(n), i$8(!1));
	}, [a, n]);
	let s = useMemo(() => ({
		show: n,
		appear: l,
		initial: o
	}), [
		n,
		l,
		o
	]);
	n$6(() => {
		n ? g("visible") : !M(v) && d.current !== null && g("hidden");
	}, [n, v]);
	let r = { unmount: S }, f = o$2(() => {
		var u;
		o && i$8(!1), (u = e.beforeEnter) == null || u.call(e);
	}), U = o$2(() => {
		var u;
		o && i$8(!1), (u = e.beforeLeave) == null || u.call(e);
	}), H = K();
	return React.createElement(w$1.Provider, { value: v }, React.createElement(V.Provider, { value: s }, H({
		ourProps: {
			...r,
			as: Fragment,
			children: React.createElement(me, {
				ref: C,
				...r,
				...R,
				beforeEnter: f,
				beforeLeave: U
			})
		},
		theirProps: {},
		defaultTag: Fragment,
		features: fe,
		visible: h === "visible",
		name: "Transition"
	})));
}
function Le(e, t) {
	let n = useContext(V) !== null, l = u$1() !== null;
	return React.createElement(React.Fragment, null, !n && l ? React.createElement(X, {
		ref: t,
		...e
	}) : React.createElement(me, {
		ref: t,
		...e
	}));
}
var X = Y(Ie), me = Y(Fe), Oe = Y(Le), Ke$1 = Object.assign(X, {
	Child: Oe,
	Root: X
});
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/dialog/dialog.js
var we = ((o) => (o[o.Open = 0] = "Open", o[o.Closed = 1] = "Closed", o))(we || {}), Be = ((t) => (t[t.SetTitleId = 0] = "SetTitleId", t))(Be || {});
var Ue = { [0](e, t) {
	return e.titleId === t.id ? e : {
		...e,
		titleId: t.id
	};
} }, w = createContext(null);
w.displayName = "DialogContext";
function O(e) {
	let t = useContext(w);
	if (t === null) {
		let o = /* @__PURE__ */ new Error(`<${e} /> is missing a parent <Dialog /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(o, O), o;
	}
	return t;
}
function He(e, t) {
	return u$6(t.type, Ue, e, t);
}
var z = Y(function(t, o) {
	let a = r$4(), { id: n = `headlessui-dialog-${a}`, open: i$6, onClose: p, initialFocus: d, role: s$7 = "dialog", autoFocus: f = !0, __demoMode: u = !1, unmount: y$3 = !1, ...S } = t, R = useRef(!1);
	s$7 = function() {
		return s$7 === "dialog" || s$7 === "alertdialog" ? s$7 : (R.current || (R.current = !0, console.warn(`Invalid role [${s$7}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
	}();
	let g = u$1();
	i$6 === void 0 && g !== null && (i$6 = (g & i.Open) === i.Open);
	let T = useRef(null), I = y(T, o), F = u$3(T.current), c = i$6 ? 0 : 1, [b, Q] = useReducer(He, {
		titleId: null,
		descriptionId: null,
		panelRef: createRef()
	}), m = o$2(() => p(!1)), B = o$2((r) => Q({
		type: 0,
		id: r
	})), D = l$1() ? c === 0 : !1, [Z, ee$2] = ee(), te$2 = { get current() {
		var r;
		return (r = b.panelRef.current) != null ? r : T.current;
	} }, v = x$2(), { resolveContainers: M } = S$2({
		mainTreeNode: v,
		portals: Z,
		defaultContainers: [te$2]
	}), U = g !== null ? (g & i.Closing) === i.Closing : !1;
	y$1(u || U ? !1 : D, {
		allowed: o$2(() => {
			var r, W;
			return [(W = (r = T.current) == null ? void 0 : r.closest("[data-headlessui-portal]")) != null ? W : null];
		}),
		disallowed: o$2(() => {
			var r;
			return [(r = v == null ? void 0 : v.closest("body > *:not(#headlessui-portal-root)")) != null ? r : null];
		})
	});
	let P = x$4.get(null);
	n$6(() => {
		if (D) return P.actions.push(n), () => P.actions.pop(n);
	}, [
		P,
		n,
		D
	]);
	let H$3 = S$4(P, useCallback((r) => P.selectors.isTop(r, n), [P, n]));
	k(H$3, M, (r) => {
		r.preventDefault(), m();
	}), a$8(H$3, F == null ? void 0 : F.defaultView, (r) => {
		r.preventDefault(), r.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m();
	}), f$2(u || U ? !1 : D, F, M), p$1(D, T, m);
	let [oe, ne] = H(), re = useMemo(() => [{
		dialogState: c,
		close: m,
		setTitleId: B,
		unmount: y$3
	}, b], [
		c,
		m,
		B,
		y$3,
		b
	]), N = n$2({ open: c === 0 }), le = {
		ref: I,
		id: n,
		role: s$7,
		tabIndex: -1,
		"aria-modal": u ? void 0 : c === 0 ? !0 : void 0,
		"aria-labelledby": b.titleId,
		"aria-describedby": oe,
		unmount: y$3
	}, ae = !f$4(), E = G.None;
	D && !u && (E |= G.RestoreFocus, E |= G.TabLock, f && (E |= G.AutoFocus), ae && (E |= G.InitialFocus));
	let ie = K();
	return React.createElement(s, null, React.createElement(l, { force: !0 }, React.createElement(te, null, React.createElement(w.Provider, { value: re }, React.createElement(X$1, { target: T }, React.createElement(l, { force: !1 }, React.createElement(ne, { slot: N }, React.createElement(ee$2, null, React.createElement(ge, {
		initialFocus: d,
		initialFocusFallback: T,
		containers: M,
		features: E
	}, React.createElement(C$2, { value: m }, ie({
		ourProps: le,
		theirProps: S,
		slot: N,
		defaultTag: Ne,
		features: We,
		visible: c === 0,
		name: "Dialog"
	})))))))))));
}), Ne = "div", We = A$1.RenderStrategy | A$1.Static;
function $e(e, t) {
	let { transition: o = !1, open: a, ...n } = e, i = u$1(), p = e.hasOwnProperty("open") || i !== null, d = e.hasOwnProperty("onClose");
	if (!p && !d) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
	if (!p) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
	if (!d) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
	if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
	if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
	return (a !== void 0 || o) && !n.static ? React.createElement(j$2, null, React.createElement(Ke$1, {
		show: a,
		transition: o,
		unmount: n.unmount
	}, React.createElement(z, {
		ref: t,
		...n
	}))) : React.createElement(j$2, null, React.createElement(z, {
		ref: t,
		open: a,
		...n
	}));
}
var je = "div";
function Ye(e, t) {
	let o = r$4(), { id: a = `headlessui-dialog-panel-${o}`, transition: n = !1, ...i } = e, [{ dialogState: p, unmount: d }, s] = O("Dialog.Panel"), f = y(t, s.panelRef), u = n$2({ open: p === 0 }), S = {
		ref: f,
		id: a,
		onClick: o$2((I) => {
			I.stopPropagation();
		})
	}, R = n ? Oe : Fragment, g = n ? { unmount: d } : {}, T = K();
	return React.createElement(R, { ...g }, T({
		ourProps: S,
		theirProps: i,
		slot: u,
		defaultTag: je,
		name: "Dialog.Panel"
	}));
}
var Je = "div";
function Ke(e, t) {
	let { transition: o = !1, ...a } = e, [{ dialogState: n, unmount: i }] = O("Dialog.Backdrop"), p = n$2({ open: n === 0 }), d = {
		ref: t,
		"aria-hidden": !0
	}, s = o ? Oe : Fragment, f = o ? { unmount: i } : {}, u = K();
	return React.createElement(s, { ...f }, u({
		ourProps: d,
		theirProps: a,
		slot: p,
		defaultTag: Je,
		name: "Dialog.Backdrop"
	}));
}
var Xe = "h2";
function Ve(e, t) {
	let o = r$4(), { id: a = `headlessui-dialog-title-${o}`, ...n } = e, [{ dialogState: i, setTitleId: p }] = O("Dialog.Title"), d = y(t);
	useEffect(() => (p(a), () => p(null)), [a, p]);
	let s = n$2({ open: i === 0 }), f = {
		ref: d,
		id: a
	};
	return K()({
		ourProps: f,
		theirProps: n,
		slot: s,
		defaultTag: Xe,
		name: "Dialog.Title"
	});
}
var qe = Y($e), ze = Y(Ye), Lt = Y(Ke), Qe = Y(Ve), ht = Object.assign(qe, {
	Panel: ze,
	Title: Qe,
	Description: M$2
});
//#endregion
export { v as $, f$2 as A, m$2 as B, i as C, o$5 as Ct, T$1 as D, n$6 as Dt, C$2 as E, s$5 as Et, s$2 as F, n$3 as G, u$3 as H, A$1 as I, H$2 as J, A$2 as K, K as L, j$2 as M, x$2 as N, y as O, o$7 as Ot, f$3 as P, T$2 as Q, V$1 as R, c$3 as S, k$2 as St, u$1 as T, E$2 as Tt, k as U, c$5 as V, i$1 as W, K$1 as X, I$4 as Y, R as Z, p as _, o$2 as _t, Ke$1 as a, i$3 as at, w$3 as b, u$6 as bt, x as c, n$4 as ct, n as d, d$2 as dt, x$3 as et, m$1 as f, e$3 as ft, f as g, S$4 as gt, c$2 as h, r$4 as ht, ze as i, a$7 as it, S$2 as j, n$2 as k, ee as l, o$1 as lt, u as m, r$3 as mt, Qe as n, E$1 as nt, Oe as o, l$3 as ot, a as p, l$4 as pt, G$1 as q, ht as r, L as rt, N as s, m$3 as st, Lt as t, p$1 as tt, te as u, y$1 as ut, H as v, k$1 as vt, s as w, t$5 as wt, a$2 as x, T$3 as xt, M$2 as y, x$4 as yt, Y as z };
