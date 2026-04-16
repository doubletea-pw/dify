import { A as f$5, B as m, C as i$2, Ct as o$3, Dt as n, Et as s$5, F as s$4, H as u$7, I as A, J as H$1, L as K, O as y$1, Ot as o$4, P as f$4, Q as T$2, R as V$1, S as c$6, St as k$1, T as u$8, U as k$3, W as i, Y as I, Z as R, _ as p$3, _t as o$1, at as i$1, b as w, bt as u$6, c as x$1, ct as n$2, dt as d, gt as S$1, h as c$5, ht as r$1, k as n$1, lt as o$2, ot as l$2, q as G$1, rt as L$2, s as N$1, st as m$1, tt as p$4, u as te, ut as y$2, vt as k$2, x as a$2, xt as T$1, yt as x, z as Y } from "./dialog-DCCIZLOh.js";
import { a as be, c as s$6, d as $f7dceffc5ad7768b$export$4e328f61c538687f, f as $6179b936705e76d3$export$ae780daf29e6d456, i as Te, l as w$2, n as Fe, o as ye, r as Re, s as e$1, t as Ae, u as w$1 } from "./floating-BSQrJiwr.js";
import React, { Fragment, cloneElement, createContext, isValidElement, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createPortal, flushSync } from "react-dom";
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-by-comparator.js
function l$1(e, r) {
	return e !== null && r !== null && typeof e == "object" && typeof r == "object" && "id" in e && "id" in r ? e.id === r.id : e === r;
}
function u$5(e = l$1) {
	return useCallback((r, t) => {
		if (typeof e == "string") {
			let o = e;
			return (r == null ? void 0 : r[o]) === (t == null ? void 0 : t[o]);
		}
		return e(r, t);
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-controllable.js
function b$1(l, r, c) {
	let [i, s] = useState(c), e = l !== void 0, t = useRef(e), u = useRef(!1), d = useRef(!1);
	return e && !t.current && !u.current ? (u.current = !0, t.current = e, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e && t.current && !d.current && (d.current = !0, t.current = e, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e ? l : i, o$1((n) => (e || flushSync(() => s(n)), r == null ? void 0 : r(n)))];
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-default-value.js
function l(e) {
	let [t] = useState(e);
	return t;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/mouse.js
var g$2 = ((f) => (f[f.Left = 0] = "Left", f[f.Right = 2] = "Right", f))(g$2 || {});
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-handle-toggle.js
function s$3(t) {
	let r = useRef(null);
	return {
		onPointerDown: o$1((e) => {
			r.current = e.pointerType, !s$6(e.currentTarget) && e.pointerType === "mouse" && e.button === g$2.Left && (e.preventDefault(), t(e));
		}),
		onClick: o$1((e) => {
			r.current !== "mouse" && (s$6(e.currentTarget) || t(e));
		})
	};
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-quick-release.js
var H = ((e) => (e[e.Ignore = 0] = "Ignore", e[e.Select = 1] = "Select", e[e.Close = 2] = "Close", e))(H || {});
var S = {
	Ignore: { kind: 0 },
	Select: (r) => ({
		kind: 1,
		target: r
	}),
	Close: { kind: 2 }
}, M = 200, f$3 = 5;
function L$1(r, { trigger: n, action: T, close: e, select: p }) {
	let l = useRef(null), i$3 = useRef(null), u = useRef(null);
	i(r && n !== null, "pointerdown", (t) => {
		o$2(t == null ? void 0 : t.target) && n != null && n.contains(t.target) && (i$3.current = t.x, u.current = t.y, l.current = t.timeStamp);
	}), i(r && n !== null, "pointerup", (t) => {
		var s, m;
		let c = l.current;
		if (c === null || (l.current = null, !i$1(t.target)) || Math.abs(t.x - ((s = i$3.current) != null ? s : t.x)) < f$3 && Math.abs(t.y - ((m = u.current) != null ? m : t.y)) < f$3) return;
		let a = T(t);
		switch (a.kind) {
			case 0: return;
			case 1:
				t.timeStamp - c > M && (p(a.target), e());
				break;
			case 2:
				e();
				break;
		}
	}, { capture: !0 });
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
function t(e) {
	return [e.screenX, e.screenY];
}
function u$4() {
	let e = useRef([-1, -1]);
	return {
		wasMoved(r) {
			let n = t(r);
			return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
		},
		update(r) {
			e.current = t(r);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/form.js
function p$2(t = {}, i = null, n = []) {
	for (let [e, o] of Object.entries(t)) s$2(n, r(i, e), o);
	return n;
}
function r(t, i) {
	return t ? t + "[" + i + "]" : i;
}
function s$2(t, i, n) {
	if (Array.isArray(n)) for (let [e, o] of n.entries()) s$2(t, r(i, e.toString()), o);
	else n instanceof Date ? t.push([i, n.toISOString()]) : typeof n == "boolean" ? t.push([i, n ? "1" : "0"]) : typeof n == "string" ? t.push([i, n]) : typeof n == "number" ? t.push([i, `${n}`]) : n == null ? t.push([i, ""]) : c$4(n) && !isValidElement(n) && p$2(n, i, t);
}
function g$1(t) {
	var n, e;
	let i = (n = t == null ? void 0 : t.form) != null ? n : t.closest("form");
	if (i) {
		for (let o of i.elements) if (o !== t && (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image")) {
			o.click();
			return;
		}
		(e = i.requestSubmit) == null || e.call(i);
	}
}
function c$4(t) {
	if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
	let i = Object.getPrototypeOf(t);
	return i === null || Object.getPrototypeOf(i) === null;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/internal/form-fields.js
var f$2 = createContext(null);
function c$3({ children: t }) {
	let e = useContext(f$2);
	if (!e) return React.createElement(React.Fragment, null, t);
	let { target: r } = e;
	return r ? createPortal(React.createElement(React.Fragment, null, t), r) : null;
}
function j$1({ data: t, form: e, disabled: r, onReset: n, overrides: F }) {
	let [i, a] = useState(null), p = p$3();
	return useEffect(() => {
		if (n && i) return p.addEventListener(i, "reset", n);
	}, [
		i,
		e,
		n
	]), React.createElement(c$3, null, React.createElement(C$2, {
		setForm: a,
		formId: e
	}), p$2(t).map(([s, v]) => React.createElement(f$4, {
		features: s$4.Hidden,
		...m({
			key: s,
			as: "input",
			type: "hidden",
			hidden: !0,
			readOnly: !0,
			form: e,
			disabled: r,
			name: s,
			value: v,
			...F
		})
	})));
}
function C$2({ setForm: t, formId: e }) {
	return useEffect(() => {
		if (e) {
			let r = document.getElementById(e);
			r && t(r);
		}
	}, [t, e]), e ? null : React.createElement(f$4, {
		features: s$4.Hidden,
		as: "input",
		type: "hidden",
		hidden: !0,
		readOnly: !0,
		ref: (r) => {
			if (!r) return;
			let n = r.closest("form");
			n && t(n);
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/internal/frozen.js
function f$1({ children: t, freeze: e }, o) {
	let n = u$3(e, t);
	return isValidElement(n) ? cloneElement(n, { ref: o }) : React.createElement(React.Fragment, null, n);
}
var s$1 = React.forwardRef(f$1);
function u$3(t, e) {
	let [o, n] = useState(e);
	return !t && o !== e && n(e), t ? o : e;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/internal/id.js
var e = createContext(void 0);
function u$2() {
	return useContext(e);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u$1(l) {
	throw new Error("Unexpected object: " + l);
}
var c$2 = ((i) => (i[i.First = 0] = "First", i[i.Previous = 1] = "Previous", i[i.Next = 2] = "Next", i[i.Last = 3] = "Last", i[i.Specific = 4] = "Specific", i[i.Nothing = 5] = "Nothing", i))(c$2 || {});
function f(l, n) {
	let t = n.resolveItems();
	if (t.length <= 0) return null;
	let r = n.resolveActiveIndex(), s = r != null ? r : -1;
	switch (l.focus) {
		case 0:
			for (let e = 0; e < t.length; ++e) if (!n.resolveDisabled(t[e], e, t)) return e;
			return r;
		case 1:
			s === -1 && (s = t.length);
			for (let e = s - 1; e >= 0; --e) if (!n.resolveDisabled(t[e], e, t)) return e;
			return r;
		case 2:
			for (let e = s + 1; e < t.length; ++e) if (!n.resolveDisabled(t[e], e, t)) return e;
			return r;
		case 3:
			for (let e = t.length - 1; e >= 0; --e) if (!n.resolveDisabled(t[e], e, t)) return e;
			return r;
		case 4:
			for (let e = 0; e < t.length; ++e) if (n.resolveId(t[e], e, t) === l.id) return e;
			return r;
		case 5: return null;
		default: u$1(l);
	}
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/label/label.js
var L = createContext(null);
L.displayName = "LabelContext";
function C$1() {
	let n = useContext(L);
	if (n === null) {
		let l = /* @__PURE__ */ new Error("You used a <Label /> component, but it is not inside a relevant parent.");
		throw Error.captureStackTrace && Error.captureStackTrace(l, C$1), l;
	}
	return n;
}
function N(n) {
	var a, e, o;
	let l = (e = (a = useContext(L)) == null ? void 0 : a.value) != null ? e : void 0;
	return ((o = n == null ? void 0 : n.length) != null ? o : 0) > 0 ? [l, ...n].filter(Boolean).join(" ") : l;
}
function V({ inherit: n = !1 } = {}) {
	let l = N(), [a, e] = useState([]), o = n ? [l, ...a].filter(Boolean) : a;
	return [o.length > 0 ? o.join(" ") : void 0, useMemo(() => function(t) {
		let p = o$1((i) => (e((u) => [...u, i]), () => e((u) => {
			let d = u.slice(), f = d.indexOf(i);
			return f !== -1 && d.splice(f, 1), d;
		}))), b = useMemo(() => ({
			register: p,
			slot: t.slot,
			name: t.name,
			props: t.props,
			value: t.value
		}), [
			p,
			t.slot,
			t.name,
			t.props,
			t.value
		]);
		return React.createElement(L.Provider, { value: b }, t.children);
	}, [e])];
}
var G = "label";
function U(n$4, l) {
	var y;
	let a = r$1(), e = C$1(), o = u$2(), T = a$2(), { id: t = `headlessui-label-${a}`, htmlFor: p = o != null ? o : (y = e.props) == null ? void 0 : y.htmlFor, passive: b = !1, ...i } = n$4, u = y$1(l);
	n(() => e.register(t), [t, e.register]);
	let d = o$1((s) => {
		let g = s.currentTarget;
		if (!(s.target !== s.currentTarget && L$2(s.target)) && (m$1(g) && s.preventDefault(), e.props && "onClick" in e.props && typeof e.props.onClick == "function" && e.props.onClick(s), m$1(g))) {
			let r = document.getElementById(g.htmlFor);
			if (r) {
				let E = r.getAttribute("disabled");
				if (E === "true" || E === "") return;
				let x = r.getAttribute("aria-disabled");
				if (x === "true" || x === "") return;
				(l$2(r) && (r.type === "file" || r.type === "radio" || r.type === "checkbox") || r.role === "radio" || r.role === "checkbox" || r.role === "switch") && r.click(), r.focus({ preventScroll: !0 });
			}
		}
	}), f = n$1({
		...e.slot,
		disabled: T || !1
	}), c = {
		ref: u,
		...e.props,
		id: t,
		htmlFor: p,
		onClick: d
	};
	return b && ("onClick" in c && (delete c.htmlFor, delete c.onClick), "onClick" in i && delete i.onClick), K()({
		ourProps: c,
		theirProps: i,
		slot: f,
		defaultTag: p ? G : "div",
		name: e.name || "Label"
	});
}
var j = Y(U), Z = Object.assign(j, {});
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/element-movement.js
var c$1 = {
	Idle: { kind: "Idle" },
	Tracked: (e) => ({
		kind: "Tracked",
		position: e
	}),
	Moved: { kind: "Moved" }
};
function a$1(e) {
	let t = e.getBoundingClientRect();
	return `${t.x},${t.y}`;
}
function p$1(e, t, i) {
	let n = o$3();
	if (t.kind === "Tracked") {
		let o = function() {
			d !== a$1(e) && (n.dispose(), i());
		};
		let { position: d } = t, s = new ResizeObserver(o);
		s.observe(e), n.add(() => s.disconnect()), n.addEventListener(window, "scroll", o, { passive: !0 }), n.addEventListener(window, "resize", o);
	}
	return () => n.dispose();
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/get-text-value.js
var a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e) {
	var l, n;
	let i = (l = e.innerText) != null ? l : "", t = e.cloneNode(!0);
	if (!n$2(t)) return i;
	let u = !1;
	for (let f of t.querySelectorAll("[hidden],[aria-hidden],[role=\"img\"]")) f.remove(), u = !0;
	let r = u ? (n = t.innerText) != null ? n : "" : i;
	return a.test(r) && (r = r.replace(a, "")), r;
}
function F$1(e) {
	let i = e.getAttribute("aria-label");
	if (typeof i == "string") return i.trim();
	let t = e.getAttribute("aria-labelledby");
	if (t) {
		let u = t.split(" ").map((r) => {
			let l = document.getElementById(r);
			if (l) {
				let n = l.getAttribute("aria-label");
				return typeof n == "string" ? n.trim() : o(l).trim();
			}
			return null;
		}).filter(Boolean);
		if (u.length > 0) return u.join(", ");
	}
	return o(e).trim();
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s(c) {
	let t = useRef(""), r = useRef("");
	return o$1(() => {
		let e = c.current;
		if (!e) return "";
		let u = e.innerText;
		if (t.current === u) return r.current;
		let n = F$1(e).trim().toLowerCase();
		return t.current = u, r.current = n, n;
	});
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/listbox/listbox-machine.js
var T = Object.defineProperty;
var y = (e, o, t) => o in e ? T(e, o, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : e[o] = t;
var b = (e, o, t) => (y(e, typeof o != "symbol" ? o + "" : o, t), t);
var F = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(F || {}), P = ((t) => (t[t.Single = 0] = "Single", t[t.Multi = 1] = "Multi", t))(P || {}), C = ((t) => (t[t.Pointer = 0] = "Pointer", t[t.Other = 1] = "Other", t))(C || {}), k = ((r) => (r[r.OpenListbox = 0] = "OpenListbox", r[r.CloseListbox = 1] = "CloseListbox", r[r.GoToOption = 2] = "GoToOption", r[r.Search = 3] = "Search", r[r.ClearSearch = 4] = "ClearSearch", r[r.SelectOption = 5] = "SelectOption", r[r.RegisterOptions = 6] = "RegisterOptions", r[r.UnregisterOptions = 7] = "UnregisterOptions", r[r.SetButtonElement = 8] = "SetButtonElement", r[r.SetOptionsElement = 9] = "SetOptionsElement", r[r.SortOptions = 10] = "SortOptions", r[r.MarkButtonAsMoved = 11] = "MarkButtonAsMoved", r))(k || {});
function g(e, o = (t) => t) {
	let t = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, n = G$1(o(e.options.slice()), (s) => s.dataRef.current.domRef.current), i = t ? n.indexOf(t) : null;
	return i === -1 && (i = null), {
		options: n,
		activeOptionIndex: i
	};
}
var D = {
	[1](e) {
		if (e.dataRef.current.disabled || e.listboxState === 1) return e;
		let o = e.buttonElement ? c$1.Tracked(a$1(e.buttonElement)) : e.buttonPositionState;
		return {
			...e,
			activeOptionIndex: null,
			pendingFocus: { focus: c$2.Nothing },
			listboxState: 1,
			__demoMode: !1,
			buttonPositionState: o
		};
	},
	[0](e, o) {
		if (e.dataRef.current.disabled || e.listboxState === 0) return e;
		let t = e.activeOptionIndex, { isSelected: n } = e.dataRef.current, i = e.options.findIndex((s) => n(s.dataRef.current.value));
		return i !== -1 && (t = i), {
			...e,
			frozenValue: !1,
			pendingFocus: o.focus,
			listboxState: 0,
			activeOptionIndex: t,
			__demoMode: !1,
			buttonPositionState: c$1.Idle
		};
	},
	[2](e, o) {
		var s, l, c, p, f$6;
		if (e.dataRef.current.disabled || e.listboxState === 1) return e;
		let t = {
			...e,
			searchQuery: "",
			activationTrigger: (s = o.trigger) != null ? s : 1,
			__demoMode: !1
		};
		if (o.focus === c$2.Nothing) return {
			...t,
			activeOptionIndex: null
		};
		if (o.focus === c$2.Specific) return {
			...t,
			activeOptionIndex: e.options.findIndex((d) => d.id === o.id)
		};
		if (o.focus === c$2.Previous) {
			let d = e.activeOptionIndex;
			if (d !== null) {
				let O = e.options[d].dataRef.current.domRef, r = f(o, {
					resolveItems: () => e.options,
					resolveActiveIndex: () => e.activeOptionIndex,
					resolveId: (u) => u.id,
					resolveDisabled: (u) => u.dataRef.current.disabled
				});
				if (r !== null) {
					let u = e.options[r].dataRef.current.domRef;
					if (((l = O.current) == null ? void 0 : l.previousElementSibling) === u.current || ((c = u.current) == null ? void 0 : c.previousElementSibling) === null) return {
						...t,
						activeOptionIndex: r
					};
				}
			}
		} else if (o.focus === c$2.Next) {
			let d = e.activeOptionIndex;
			if (d !== null) {
				let O = e.options[d].dataRef.current.domRef, r = f(o, {
					resolveItems: () => e.options,
					resolveActiveIndex: () => e.activeOptionIndex,
					resolveId: (u) => u.id,
					resolveDisabled: (u) => u.dataRef.current.disabled
				});
				if (r !== null) {
					let u = e.options[r].dataRef.current.domRef;
					if (((p = O.current) == null ? void 0 : p.nextElementSibling) === u.current || ((f$6 = u.current) == null ? void 0 : f$6.nextElementSibling) === null) return {
						...t,
						activeOptionIndex: r
					};
				}
			}
		}
		let n = g(e), i = f(o, {
			resolveItems: () => n.options,
			resolveActiveIndex: () => n.activeOptionIndex,
			resolveId: (d) => d.id,
			resolveDisabled: (d) => d.dataRef.current.disabled
		});
		return {
			...t,
			...n,
			activeOptionIndex: i
		};
	},
	[3]: (e, o) => {
		if (e.dataRef.current.disabled || e.listboxState === 1) return e;
		let n = e.searchQuery !== "" ? 0 : 1, i = e.searchQuery + o.value.toLowerCase(), l = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find((p) => {
			var f;
			return !p.dataRef.current.disabled && ((f = p.dataRef.current.textValue) == null ? void 0 : f.startsWith(i));
		}), c = l ? e.options.indexOf(l) : -1;
		return c === -1 || c === e.activeOptionIndex ? {
			...e,
			searchQuery: i
		} : {
			...e,
			searchQuery: i,
			activeOptionIndex: c,
			activationTrigger: 1
		};
	},
	[4](e) {
		return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : {
			...e,
			searchQuery: ""
		};
	},
	[5](e) {
		return e.dataRef.current.mode === 0 ? {
			...e,
			frozenValue: !0
		} : { ...e };
	},
	[6]: (e, o) => {
		let t = e.options.concat(o.options), n = e.activeOptionIndex;
		if (e.pendingFocus.focus !== c$2.Nothing && (n = f(e.pendingFocus, {
			resolveItems: () => t,
			resolveActiveIndex: () => e.activeOptionIndex,
			resolveId: (i) => i.id,
			resolveDisabled: (i) => i.dataRef.current.disabled
		})), e.activeOptionIndex === null) {
			let { isSelected: i } = e.dataRef.current;
			if (i) {
				let s = t.findIndex((l) => i == null ? void 0 : i(l.dataRef.current.value));
				s !== -1 && (n = s);
			}
		}
		return {
			...e,
			options: t,
			activeOptionIndex: n,
			pendingFocus: { focus: c$2.Nothing },
			pendingShouldSort: !0
		};
	},
	[7]: (e, o) => {
		let t = e.options, n = [], i = new Set(o.options);
		for (let [s, l] of t.entries()) if (i.has(l.id) && (n.push(s), i.delete(l.id), i.size === 0)) break;
		if (n.length > 0) {
			t = t.slice();
			for (let s of n.reverse()) t.splice(s, 1);
		}
		return {
			...e,
			options: t,
			activationTrigger: 1
		};
	},
	[8]: (e, o) => e.buttonElement === o.element ? e : {
		...e,
		buttonElement: o.element
	},
	[9]: (e, o) => e.optionsElement === o.element ? e : {
		...e,
		optionsElement: o.element
	},
	[10]: (e) => e.pendingShouldSort ? {
		...e,
		...g(e),
		pendingShouldSort: !1
	} : e,
	[11](e) {
		return e.buttonPositionState.kind !== "Tracked" ? e : {
			...e,
			buttonPositionState: c$1.Moved
		};
	}
};
var h = class h extends T$1 {
	constructor(t) {
		super(t);
		b(this, "actions", {
			onChange: (t) => {
				let { onChange: n, compare: i, mode: s, value: l } = this.state.dataRef.current;
				return u$6(s, {
					[0]: () => n == null ? void 0 : n(t),
					[1]: () => {
						let c = l.slice(), p = c.findIndex((f) => i(f, t));
						return p === -1 ? c.push(t) : c.splice(p, 1), n == null ? void 0 : n(c);
					}
				});
			},
			registerOption: k$1(() => {
				let t = [], n = /* @__PURE__ */ new Set();
				return [(i, s) => {
					n.has(s) || (n.add(s), t.push({
						id: i,
						dataRef: s
					}));
				}, () => (n.clear(), this.send({
					type: 6,
					options: t.splice(0)
				}))];
			}),
			unregisterOption: k$1(() => {
				let t = [];
				return [(n) => t.push(n), () => {
					this.send({
						type: 7,
						options: t.splice(0)
					});
				}];
			}),
			goToOption: k$1(() => {
				let t = null;
				return [(n, i) => {
					t = {
						type: 2,
						...n,
						trigger: i
					};
				}, () => t && this.send(t)];
			}),
			closeListbox: () => {
				this.send({ type: 1 });
			},
			openListbox: (t) => {
				this.send({
					type: 0,
					focus: t
				});
			},
			selectActiveOption: () => {
				var t;
				if (this.state.activeOptionIndex !== null) {
					let { dataRef: n } = this.state.options[this.state.activeOptionIndex];
					this.actions.selectOption(n.current.value);
				} else this.state.dataRef.current.mode === 0 && (this.actions.closeListbox(), (t = this.state.buttonElement) == null || t.focus({ preventScroll: !0 }));
			},
			selectOption: (t) => {
				this.send({
					type: 5,
					value: t
				});
			},
			search: (t) => {
				this.send({
					type: 3,
					value: t
				});
			},
			clearSearch: () => {
				this.send({ type: 4 });
			},
			setButtonElement: (t) => {
				this.send({
					type: 8,
					element: t
				});
			},
			setOptionsElement: (t) => {
				this.send({
					type: 9,
					element: t
				});
			}
		});
		b(this, "selectors", {
			activeDescendantId(t) {
				var s;
				let n = t.activeOptionIndex, i = t.options;
				return n === null || (s = i[n]) == null ? void 0 : s.id;
			},
			isActive(t, n) {
				var l;
				let i = t.activeOptionIndex, s = t.options;
				return i !== null ? ((l = s[i]) == null ? void 0 : l.id) === n : !1;
			},
			hasFrozenValue(t) {
				return t.frozenValue;
			},
			shouldScrollIntoView(t, n) {
				return t.__demoMode || t.listboxState !== 0 || t.activationTrigger === 0 ? !1 : this.isActive(t, n);
			},
			didButtonMove(t) {
				return t.buttonPositionState.kind === "Moved";
			}
		});
		this.on(6, () => {
			requestAnimationFrame(() => {
				this.send({ type: 10 });
			});
		});
		{
			let n = this.state.id, i = x.get(null);
			this.disposables.add(i.on(k$2.Push, (s) => {
				!i.selectors.isTop(s, n) && this.state.listboxState === 0 && this.actions.closeListbox();
			})), this.on(0, () => i.actions.push(n)), this.on(1, () => i.actions.pop(n));
		}
		this.disposables.group((n) => {
			this.on(1, (i) => {
				i.buttonElement && (n.dispose(), n.add(p$1(i.buttonElement, i.buttonPositionState, () => {
					this.send({ type: 11 });
				})));
			});
		}), this.on(5, (n, i) => {
			var s;
			this.actions.onChange(i.value), this.state.dataRef.current.mode === 0 && (this.actions.closeListbox(), (s = this.state.buttonElement) == null || s.focus({ preventScroll: !0 }));
		});
	}
	static new({ id: t, __demoMode: n = !1 }) {
		return new h({
			id: t,
			dataRef: { current: {} },
			listboxState: n ? 0 : 1,
			options: [],
			searchQuery: "",
			activeOptionIndex: null,
			activationTrigger: 1,
			buttonElement: null,
			optionsElement: null,
			pendingShouldSort: !1,
			pendingFocus: { focus: c$2.Nothing },
			frozenValue: !1,
			__demoMode: n,
			buttonPositionState: c$1.Idle
		});
	}
	reduce(t, n) {
		return u$6(n.type, D, t, n);
	}
};
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/listbox/listbox-machine-glue.js
var c = createContext(null);
function p(o) {
	let e = useContext(c);
	if (e === null) {
		let t = /* @__PURE__ */ new Error(`<${o} /> is missing a parent <Listbox /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(t, u), t;
	}
	return e;
}
function u({ id: o, __demoMode: e = !1 }) {
	let t = useMemo(() => h.new({
		id: o,
		__demoMode: e
	}), []);
	return c$5(() => t.dispose()), t;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/components/listbox/listbox.js
var oe = createContext(null);
oe.displayName = "ListboxDataContext";
function Q(b) {
	let E = useContext(oe);
	if (E === null) {
		let m = /* @__PURE__ */ new Error(`<${b} /> is missing a parent <Listbox /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(m, Q), m;
	}
	return E;
}
var Pt = Fragment;
function gt(b, E) {
	let m = r$1(), u$9 = a$2(), { value: s, defaultValue: a, form: _, name: i, onChange: y, by: o, invalid: x$2 = !1, disabled: O = u$9 || !1, horizontal: l$3 = !1, multiple: t = !1, __demoMode: p = !1, ...S } = b;
	const h = l$3 ? "horizontal" : "vertical";
	let I$1 = y$1(E), R = l(a), [c$7 = t ? [] : void 0, L] = b$1(s, y, R), f = u({
		id: m,
		__demoMode: p
	}), k$4 = useRef({
		static: !1,
		hold: !1
	}), N = useRef(/* @__PURE__ */ new Map()), C = u$5(o), V$2 = useCallback((P$1) => u$6(n$3.mode, {
		[P.Multi]: () => c$7.some((W) => C(W, P$1)),
		[P.Single]: () => C(c$7, P$1)
	}), [c$7]), n$3 = n$1({
		value: c$7,
		disabled: O,
		invalid: x$2,
		mode: t ? P.Multi : P.Single,
		orientation: h,
		onChange: L,
		compare: C,
		isSelected: V$2,
		optionsPropsRef: k$4,
		listRef: N
	});
	n(() => {
		f.state.dataRef.current = n$3;
	}, [n$3]);
	let F$2 = S$1(f, (P) => P.listboxState), U = x.get(null), H = S$1(U, useCallback((P) => U.selectors.isTop(P, m), [U, m])), [A, $] = S$1(f, (P) => [P.buttonElement, P.optionsElement]);
	k$3(H, [A, $], (P, W) => {
		f.send({ type: k.CloseListbox }), H$1(W, I.Loose) || (P.preventDefault(), A?.focus());
	});
	let r = n$1({
		open: F$2 === F.Open,
		disabled: O,
		invalid: x$2,
		value: c$7
	}), [M, ne] = V({ inherit: !0 }), re = { ref: I$1 }, q = useCallback(() => {
		if (R !== void 0) return L == null ? void 0 : L(R);
	}, [L, R]), le = K();
	return React.createElement(ne, {
		value: M,
		props: { htmlFor: A == null ? void 0 : A.id },
		slot: {
			open: F$2 === F.Open,
			disabled: O
		}
	}, React.createElement(Ae, null, React.createElement(c.Provider, { value: f }, React.createElement(oe.Provider, { value: n$3 }, React.createElement(c$6, { value: u$6(F$2, {
		[F.Open]: i$2.Open,
		[F.Closed]: i$2.Closed
	}) }, i != null && c$7 != null && React.createElement(j$1, {
		disabled: O,
		data: { [i]: c$7 },
		form: _,
		onReset: q
	}), le({
		ourProps: re,
		theirProps: S,
		slot: r,
		defaultTag: Pt,
		name: "Listbox"
	}))))));
}
var vt = "button";
function Et(b, E) {
	let m = r$1(), u = u$2(), s = Q("Listbox.Button"), a = p("Listbox.Button"), { id: _ = u || `headlessui-listbox-button-${m}`, disabled: i = s.disabled || !1, autoFocus: y = !1, ...o } = b, x = y$1(E, Fe(), a.actions.setButtonElement), O = be(), [l, t, p$5] = S$1(a, (r) => [
		r.listboxState,
		r.buttonElement,
		r.optionsElement
	]);
	L$1(l === F.Open, {
		trigger: t,
		action: useCallback((r) => {
			if (t != null && t.contains(r.target)) return S.Ignore;
			let M = r.target.closest("[role=\"option\"]:not([data-disabled])");
			return n$2(M) ? S.Select(M) : p$5 != null && p$5.contains(r.target) ? S.Ignore : S.Close;
		}, [t, p$5]),
		close: a.actions.closeListbox,
		select: a.actions.selectActiveOption
	});
	let h = o$1((r) => {
		switch (r.key) {
			case o$4.Enter:
				g$1(r.currentTarget);
				break;
			case o$4.Space:
			case o$4.ArrowDown:
				r.preventDefault(), a.actions.openListbox({ focus: s.value ? c$2.Nothing : c$2.First });
				break;
			case o$4.ArrowUp:
				r.preventDefault(), a.actions.openListbox({ focus: s.value ? c$2.Nothing : c$2.Last });
				break;
		}
	}), I = o$1((r) => {
		switch (r.key) {
			case o$4.Space:
				r.preventDefault();
				break;
		}
	}), R = s$3((r) => {
		var M;
		a.state.listboxState === F.Open ? (flushSync(() => a.actions.closeListbox()), (M = a.state.buttonElement) == null || M.focus({ preventScroll: !0 })) : (r.preventDefault(), a.actions.openListbox({ focus: c$2.Nothing }));
	}), c = o$1((r) => r.preventDefault()), L = N([_]), f = w(), { isFocusVisible: k, focusProps: N$2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: y }), { isHovered: C, hoverProps: V } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i }), { pressed: n, pressProps: F$3 } = w$1({ disabled: i }), U = n$1({
		open: l === F.Open,
		active: n || l === F.Open,
		disabled: i,
		invalid: s.invalid,
		value: s.value,
		hover: C,
		focus: k,
		autofocus: y
	}), H = S$1(a, (r) => r.listboxState === F.Open), A = V$1(O(), {
		ref: x,
		id: _,
		type: e$1(b, t),
		"aria-haspopup": "listbox",
		"aria-controls": p$5 == null ? void 0 : p$5.id,
		"aria-expanded": H,
		"aria-labelledby": L,
		"aria-describedby": f,
		disabled: i || void 0,
		autoFocus: y,
		onKeyDown: h,
		onKeyUp: I,
		onKeyPress: c
	}, R, N$2, V, F$3);
	return K()({
		ourProps: A,
		theirProps: o,
		slot: U,
		defaultTag: vt,
		name: "Listbox.Button"
	});
}
var Oe = createContext(!1), ht = "div", At = A.RenderStrategy | A.Static;
function _t(b, E) {
	let m = r$1(), { id: u = `headlessui-listbox-options-${m}`, anchor: s, portal: a = !1, modal: _ = !0, transition: i = !1, ...y } = b, o = ye(s), [x, O] = useState(null);
	o && (a = !0);
	let l = Q("Listbox.Options"), t = p("Listbox.Options"), [p$6, S, h, I] = S$1(t, (e) => [
		e.listboxState,
		e.buttonElement,
		e.optionsElement,
		e.__demoMode
	]), R$1 = u$7(S), c = u$7(h), L = u$8(), [f, k] = N$1(i, x, L !== null ? (L & i$2.Open) === i$2.Open : p$6 === F.Open);
	p$4(f, S, t.actions.closeListbox);
	f$5(I ? !1 : _ && p$6 === F.Open, c);
	y$2(I ? !1 : _ && p$6 === F.Open, { allowed: useCallback(() => [S, h], [S, h]) });
	let n = S$1(t, t.selectors.didButtonMove) ? !1 : f, U = u$3(S$1(t, t.selectors.hasFrozenValue) && !b.static, l.value), H = useCallback((e) => l.compare(U, e), [l.compare, U]), A = S$1(t, (e) => {
		var de;
		if (o == null || !((de = o == null ? void 0 : o.to) != null && de.includes("selection"))) return null;
		let w = e.options.findIndex((ve) => H(ve.dataRef.current.value));
		return w === -1 && (w = 0), w;
	}), [r, M] = Re((() => {
		if (o == null) return;
		if (A === null) return {
			...o,
			inner: void 0
		};
		let e = Array.from(l.listRef.current.values());
		return {
			...o,
			inner: {
				listRef: { current: e },
				index: A
			}
		};
	})()), ne = Te(), re = y$1(E, o ? r : null, t.actions.setOptionsElement, O), q = p$3();
	useEffect(() => {
		let e = h;
		e && p$6 === F.Open && (d(e) || e == null || e.focus({ preventScroll: !0 }));
	}, [p$6, h]);
	let le = o$1((e) => {
		var w;
		switch (q.dispose(), e.key) {
			case o$4.Space: if (t.state.searchQuery !== "") return e.preventDefault(), e.stopPropagation(), t.actions.search(e.key);
			case o$4.Enter:
				e.preventDefault(), e.stopPropagation(), t.actions.selectActiveOption();
				break;
			case u$6(l.orientation, {
				vertical: o$4.ArrowDown,
				horizontal: o$4.ArrowRight
			}): return e.preventDefault(), e.stopPropagation(), t.actions.goToOption({ focus: c$2.Next });
			case u$6(l.orientation, {
				vertical: o$4.ArrowUp,
				horizontal: o$4.ArrowLeft
			}): return e.preventDefault(), e.stopPropagation(), t.actions.goToOption({ focus: c$2.Previous });
			case o$4.Home:
			case o$4.PageUp: return e.preventDefault(), e.stopPropagation(), t.actions.goToOption({ focus: c$2.First });
			case o$4.End:
			case o$4.PageDown: return e.preventDefault(), e.stopPropagation(), t.actions.goToOption({ focus: c$2.Last });
			case o$4.Escape:
				e.preventDefault(), e.stopPropagation(), flushSync(() => t.actions.closeListbox()), (w = t.state.buttonElement) == null || w.focus({ preventScroll: !0 });
				return;
			case o$4.Tab:
				e.preventDefault(), e.stopPropagation(), flushSync(() => t.actions.closeListbox()), R(t.state.buttonElement, e.shiftKey ? T$2.Previous : T$2.Next);
				break;
			default:
				e.key.length === 1 && (t.actions.search(e.key), q.setTimeout(() => t.actions.clearSearch(), 350));
				break;
		}
	}), P$2 = S$1(t, (e) => {
		var w;
		return (w = e.buttonElement) == null ? void 0 : w.id;
	}), W = n$1({ open: p$6 === F.Open }), Le = V$1(o ? ne() : {}, {
		id: u,
		ref: re,
		"aria-activedescendant": S$1(t, t.selectors.activeDescendantId),
		"aria-multiselectable": l.mode === P.Multi ? !0 : void 0,
		"aria-labelledby": P$2,
		"aria-orientation": l.orientation,
		onKeyDown: le,
		role: "listbox",
		tabIndex: p$6 === F.Open ? 0 : void 0,
		style: {
			...y.style,
			...M,
			"--button-width": w$2(f, S, !0).width
		},
		...x$1(k)
	}), Pe = K(), ge = useMemo(() => l.mode === P.Multi ? l : {
		...l,
		isSelected: H
	}, [l, H]);
	return React.createElement(te, {
		enabled: a ? b.static || f : !1,
		ownerDocument: R$1
	}, React.createElement(oe.Provider, { value: ge }, Pe({
		ourProps: Le,
		theirProps: y,
		slot: W,
		defaultTag: ht,
		features: At,
		visible: n,
		name: "Listbox.Options"
	})));
}
var St = "div";
function Dt(b, E) {
	let m = r$1(), { id: u = `headlessui-listbox-option-${m}`, disabled: s$7 = !1, value: a, ..._ } = b, i = useContext(Oe) === !0, y = Q("Listbox.Option"), o = p("Listbox.Option"), x = S$1(o, (n) => o.selectors.isActive(n, u)), O = y.isSelected(a), l = useRef(null), t = s(l), p$7 = s$5({
		disabled: s$7,
		value: a,
		domRef: l,
		get textValue() {
			return t();
		}
	}), S = y$1(E, l, (n) => {
		n ? y.listRef.current.set(u, n) : y.listRef.current.delete(u);
	}), h = S$1(o, (n) => o.selectors.shouldScrollIntoView(n, u));
	n(() => {
		if (h) return o$3().requestAnimationFrame(() => {
			var n, F;
			(F = (n = l.current) == null ? void 0 : n.scrollIntoView) == null || F.call(n, { block: "nearest" });
		});
	}, [h, l]), n(() => {
		if (!i) return o.actions.registerOption(u, p$7), () => o.actions.unregisterOption(u);
	}, [
		p$7,
		u,
		i
	]);
	let I = o$1((n) => {
		if (s$7) return n.preventDefault();
		o.actions.selectOption(a);
	}), R = o$1(() => {
		if (s$7) return o.actions.goToOption({ focus: c$2.Nothing });
		o.actions.goToOption({
			focus: c$2.Specific,
			id: u
		});
	}), c = u$4(), L = o$1((n) => c.update(n)), f = o$1((n) => {
		c.wasMoved(n) && (s$7 || x && o.state.activationTrigger === C.Pointer || o.actions.goToOption({
			focus: c$2.Specific,
			id: u
		}, C.Pointer));
	}), k = o$1((n) => {
		c.wasMoved(n) && (s$7 || x && o.state.activationTrigger === C.Pointer && o.actions.goToOption({ focus: c$2.Nothing }));
	}), N = n$1({
		active: x,
		focus: x,
		selected: O,
		disabled: s$7,
		selectedOption: O && i
	}), C$3 = i ? {} : {
		id: u,
		ref: S,
		role: "option",
		tabIndex: s$7 === !0 ? void 0 : -1,
		"aria-disabled": s$7 === !0 ? !0 : void 0,
		"aria-selected": O,
		disabled: void 0,
		onClick: I,
		onFocus: R,
		onPointerEnter: L,
		onMouseEnter: L,
		onPointerMove: f,
		onMouseMove: f,
		onPointerLeave: k,
		onMouseLeave: k
	}, V = K();
	return !O && i ? null : V({
		ourProps: C$3,
		theirProps: _,
		slot: N,
		defaultTag: St,
		name: "Listbox.Option"
	});
}
var Rt = Fragment;
function Ft(b, E) {
	let { options: m, placeholder: u, ...s } = b, _ = { ref: y$1(E) }, i = Q("ListboxSelectedOption"), y = n$1({}), o = i.value === void 0 || i.value === null || i.mode === P.Multi && Array.isArray(i.value) && i.value.length === 0, x = K();
	return React.createElement(Oe.Provider, { value: !0 }, x({
		ourProps: _,
		theirProps: {
			...s,
			children: React.createElement(React.Fragment, null, u && o ? u : m)
		},
		slot: y,
		defaultTag: Rt,
		name: "ListboxSelectedOption"
	}));
}
var Ct = Y(gt), Mt = Y(Et), wt = Z, Bt = Y(_t), It = Y(Dt), kt = Y(Ft), Mo = Object.assign(Ct, {
	Button: Mt,
	Label: wt,
	Options: Bt,
	Option: It,
	SelectedOption: kt
});
//#endregion
export { g$2 as C, u$5 as E, s$3 as S, b$1 as T, u$3 as _, s as a, L$1 as b, p$1 as c, V as d, Z as f, s$1 as g, u$2 as h, Mt as i, C$1 as l, f as m, It as n, a$1 as o, c$2 as p, Mo as r, c$1 as s, Bt as t, N as u, j$1 as v, l as w, S as x, u$4 as y };
