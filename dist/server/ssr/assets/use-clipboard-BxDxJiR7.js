import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
//#region node_modules/.pnpm/foxact@0.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/foxact/noop/index.mjs
var o = () => {};
//#endregion
//#region node_modules/.pnpm/foxact@0.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/foxact/use-stable-handler-only-when-you-know-what-you-are-doing-or-you-will-be-fired/index.mjs
var c$1 = "u" < typeof window ? useEffect : React.useInsertionEffect || useLayoutEffect;
function u(t) {
	const e = useRef(a$1);
	return c$1(() => {
		e.current = t;
	}, [t]), useCallback(function() {
		for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
		return (0, e.current)(...n);
	}, []);
}
function a$1() {
	throw Error("foxact: the stablized handler cannot be invoked before the component has mounted.");
}
//#endregion
//#region node_modules/.pnpm/foxact@0.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/foxact/use-typescript-happy-callback/index.mjs
var e = useCallback;
//#endregion
//#region node_modules/.pnpm/foxact@0.3.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/foxact/use-clipboard/index.mjs
var a = class extends Error {
	constructor(r) {
		super(r), this.name = "UseClipboardError";
	}
};
function l() {
	let { timeout: l = 1e3, usePromptAsFallback: n = !1, promptFallbackText: c = "Failed to copy to clipboard automatically, please manually copy the text below.", onCopyError: p } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	const [s, u$1] = useState(null), [d, m] = useState(!1), y = useRef(null), w = u(p || o), b = e((r) => {
		y.current && clearTimeout(y.current), r && (y.current = window.setTimeout(() => m(!1), l)), m(r);
	}, [l]), h = e((r) => {
		u$1(r), w(r);
	}, [w]);
	return {
		copy: e(async (r) => {
			try {
				if ("clipboard" in navigator) await navigator.clipboard.writeText(r), b(!0);
				else throw new a("[foxact/use-clipboard] navigator.clipboard is not supported");
			} catch (e) {
				if (n) try {
					window.prompt(c, r);
				} catch (r) {
					h(r);
				}
				else h(e);
			}
		}, [
			b,
			c,
			h,
			n
		]),
		reset: e(() => {
			m(!1), u$1(null), y.current && clearTimeout(y.current);
		}, []),
		error: s,
		copied: d
	};
}
//#endregion
export { l as t };
