import { useEffect, useRef } from "react";
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useLatest/index.js
function useLatest(value) {
	var ref = useRef(value);
	ref.current = value;
	return ref;
}
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/utils/index.js
var isFunction = function(value) {
	return typeof value === "function";
};
var isString = function(value) {
	return typeof value === "string";
};
var isNumber = function(value) {
	return typeof value === "number";
};
var isUndef = function(value) {
	return typeof value === "undefined";
};
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useUnmount/index.js
var useUnmount = function(fn) {
	var fnRef = useLatest(fn);
	useEffect(function() {
		return function() {
			fnRef.current();
		};
	}, []);
};
//#endregion
export { isUndef as a, isString as i, isFunction as n, useLatest as o, isNumber as r, useUnmount as t };
