import { At as QM } from "./react-D5xHzNYo.js";
import { a as __read } from "./tslib.es6-BSnKF3gl.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import * as React$1 from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useToggle/index.js
function useToggle(defaultValue, reverseValue) {
	if (defaultValue === void 0) defaultValue = false;
	var _a = __read(useState(defaultValue), 2), state = _a[0], setState = _a[1];
	return [state, useMemo(function() {
		var reverseValueOrigin = reverseValue === void 0 ? !defaultValue : reverseValue;
		var toggle = function() {
			return setState(function(s) {
				return s === defaultValue ? reverseValueOrigin : defaultValue;
			});
		};
		var set = function(value) {
			return setState(value);
		};
		var setLeft = function() {
			return setState(defaultValue);
		};
		var setRight = function() {
			return setState(reverseValueOrigin);
		};
		return {
			toggle,
			set,
			setLeft,
			setRight
		};
	}, [])];
}
//#endregion
//#region node_modules/.pnpm/ahooks@3.9.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/ahooks/es/useBoolean/index.js
function useBoolean(defaultValue) {
	if (defaultValue === void 0) defaultValue = false;
	var _a = __read(useToggle(!!defaultValue), 2), state = _a[0], _b = _a[1], toggle = _b.toggle, set = _b.set;
	return [state, useMemo(function() {
		var setTrue = function() {
			return set(true);
		};
		var setFalse = function() {
			return set(false);
		};
		return {
			toggle,
			set: function(v) {
				return set(!!v);
			},
			setTrue,
			setFalse
		};
	}, [])];
}
//#endregion
//#region app/components/base/tooltip/TooltipManager.ts
var TooltipManager = class {
	activeCloser = null;
	register(closeFn) {
		if (this.activeCloser) this.activeCloser();
		this.activeCloser = closeFn;
	}
	clear(closeFn) {
		if (this.activeCloser === closeFn) this.activeCloser = null;
	}
	/**
	* Closes the currently active tooltip by calling its closer function
	* and clearing the reference to it
	*/
	closeActiveTooltip() {
		if (this.activeCloser) {
			this.activeCloser();
			this.activeCloser = null;
		}
	}
};
var tooltipManager = new TooltipManager();
//#endregion
//#region app/components/base/tooltip/index.tsx
var Tooltip = ({ position = "top", triggerMethod = "hover", triggerClassName, triggerTestId, disabled = false, popupContent, children, popupClassName, portalContentClassName, noDecoration, offset, asChild = true, needsDelay = true }) => {
	const [open, setOpen] = useState(false);
	const [isHoverPopup, { setTrue: setHoverPopup, setFalse: setNotHoverPopup }] = useBoolean(false);
	const isHoverPopupRef = useRef(isHoverPopup);
	useEffect(() => {
		isHoverPopupRef.current = isHoverPopup;
	}, [isHoverPopup]);
	const [isHoverTrigger, { setTrue: setHoverTrigger, setFalse: setNotHoverTrigger }] = useBoolean(false);
	const isHoverTriggerRef = useRef(isHoverTrigger);
	useEffect(() => {
		isHoverTriggerRef.current = isHoverTrigger;
	}, [isHoverTrigger]);
	const closeTimeoutRef = useRef(null);
	const clearCloseTimeout = useCallback(() => {
		if (closeTimeoutRef.current) {
			clearTimeout(closeTimeoutRef.current);
			closeTimeoutRef.current = null;
		}
	}, []);
	useEffect(() => {
		return () => {
			clearCloseTimeout();
		};
	}, [clearCloseTimeout]);
	const close = () => setOpen(false);
	const handleLeave = (isTrigger) => {
		if (isTrigger) setNotHoverTrigger();
		else setNotHoverPopup();
		if (needsDelay) {
			clearCloseTimeout();
			closeTimeoutRef.current = setTimeout(() => {
				closeTimeoutRef.current = null;
				if (!isHoverPopupRef.current && !isHoverTriggerRef.current) {
					setOpen(false);
					tooltipManager.clear(close);
				}
			}, 300);
		} else {
			clearCloseTimeout();
			setOpen(false);
			tooltipManager.clear(close);
		}
	};
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open: disabled ? false : open,
		onOpenChange: setOpen,
		placement: position,
		offset: offset ?? 8,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => triggerMethod === "click" && setOpen((v) => !v),
			onMouseEnter: () => {
				if (triggerMethod === "hover") {
					clearCloseTimeout();
					setHoverTrigger();
					tooltipManager.register(close);
					setOpen(true);
				}
			},
			onMouseLeave: () => triggerMethod === "hover" && handleLeave(true),
			asChild,
			className: !asChild ? triggerClassName : "",
			children: children || /* @__PURE__ */ jsx("div", {
				"data-testid": triggerTestId,
				className: triggerClassName || "h-3.5 w-3.5 shrink-0 p-[1px]",
				children: /* @__PURE__ */ jsx(QM, { className: "h-full w-full text-text-quaternary hover:text-text-tertiary" })
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: cn("z-[9999]", portalContentClassName || ""),
			children: !!popupContent && /* @__PURE__ */ jsx("div", {
				className: cn(!noDecoration && "relative max-w-[300px] break-words rounded-md bg-components-panel-bg px-3 py-2 text-left text-text-tertiary shadow-lg system-xs-regular", popupClassName),
				onMouseEnter: () => {
					if (triggerMethod === "hover") {
						clearCloseTimeout();
						setHoverPopup();
					}
				},
				onMouseLeave: () => triggerMethod === "hover" && handleLeave(false),
				children: popupContent
			})
		})]
	});
};
var tooltip_default = React$1.memo(Tooltip);
//#endregion
export { useBoolean as n, tooltip_default as t };
