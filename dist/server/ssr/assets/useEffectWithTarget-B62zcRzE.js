import { n as isFunction, t as useUnmount } from "./useUnmount-LxWHCkGT.js";
import { useEffect, useRef } from "react";
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/utils/isBrowser.js
var isBrowser = !!(typeof window !== "undefined" && window.document && window.document.createElement);
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/utils/domTarget.js
function getTargetElement(target, defaultElement) {
	if (!isBrowser) return;
	if (!target) return defaultElement;
	var targetElement;
	if (isFunction(target)) targetElement = target();
	else if ("current" in target) targetElement = target.current;
	else targetElement = target;
	return targetElement;
}
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/utils/depsAreSame.js
function depsAreSame(oldDeps, deps) {
	if (oldDeps === deps) return true;
	for (var i = 0; i < oldDeps.length; i++) if (!Object.is(oldDeps[i], deps[i])) return false;
	return true;
}
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/utils/createEffectWithTarget.js
var createEffectWithTarget = function(useEffectType) {
	/**
	*
	* @param effect
	* @param deps
	* @param target target should compare ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
	*/
	var useEffectWithTarget = function(effect, deps, target) {
		var hasInitRef = useRef(false);
		var lastElementRef = useRef([]);
		var lastDepsRef = useRef([]);
		var unLoadRef = useRef(void 0);
		useEffectType(function() {
			var _a;
			var els = (Array.isArray(target) ? target : [target]).map(function(item) {
				return getTargetElement(item);
			});
			if (!hasInitRef.current) {
				hasInitRef.current = true;
				lastElementRef.current = els;
				lastDepsRef.current = deps;
				unLoadRef.current = effect();
				return;
			}
			if (els.length !== lastElementRef.current.length || !depsAreSame(lastElementRef.current, els) || !depsAreSame(lastDepsRef.current, deps)) {
				(_a = unLoadRef.current) === null || _a === void 0 || _a.call(unLoadRef);
				lastElementRef.current = els;
				lastDepsRef.current = deps;
				unLoadRef.current = effect();
			}
		});
		useUnmount(function() {
			var _a;
			(_a = unLoadRef.current) === null || _a === void 0 || _a.call(unLoadRef);
			hasInitRef.current = false;
		});
	};
	return useEffectWithTarget;
};
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/utils/useEffectWithTarget.js
var useEffectWithTarget = createEffectWithTarget(useEffect);
//#endregion
export { isBrowser as i, depsAreSame as n, getTargetElement as r, useEffectWithTarget as t };
