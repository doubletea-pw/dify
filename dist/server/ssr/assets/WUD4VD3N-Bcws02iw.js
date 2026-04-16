import { C as lazy, a as ssr, c as ssrStyleProperty, i as notSup, m as createComponent, n as escape, t as Portal } from "./server-mshjPt2o.js";
//#region node_modules/.pnpm/@tanstack+devtools-utils@0.4.0_@types+react@19.2.14_react@19.2.4_solid-js@1.9.11/node_modules/@tanstack/devtools-utils/dist/solid/esm/chunk/WUD4VD3N.js
var _tmpl$ = [
	"<div style=\"",
	"\">",
	"</div>"
];
function __mountComponent(el, props, importFn) {
	const Component = lazy(importFn);
	return notSup(() => createComponent(Portal, {
		mount: el,
		get children() {
			return ssr(_tmpl$, ssrStyleProperty("height:", "100%"), escape(createComponent(Component, props)));
		}
	}), el);
}
//#endregion
export { __mountComponent as t };
