import { d as isElement } from "./floating-ui.utils.dom-B62kDwTz.js";
import { _ as min, g as max, r as evaluate, y as round } from "./floating-ui.utils-D0NRuJKu.js";
import { _ as shift, b as autoUpdate, f as flip, g as offset, v as size, x as detectOverflow, y as useFloating$1 } from "./portal-to-follow-elem-DU-Awe3a.js";
import { Ct as o$1, Dt as n, _ as p, _t as o, ct as n$1, it as a, nt as E$1, pt as l } from "./dialog-DCCIZLOh.js";
import * as React$1 from "react";
import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as ReactDOM$1 from "react-dom";
//#region node_modules/.pnpm/@react-aria+utils@3.33.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? React.useLayoutEffect : () => {};
//#endregion
//#region node_modules/.pnpm/@react-aria+utils@3.33.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
	var _el_ownerDocument;
	return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
	if (el && "window" in el && el.window === el) return el;
	return $431fbd86ca7dc216$export$b204af158042fbac(el).defaultView || window;
};
/**
* Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType property.
*/ function $431fbd86ca7dc216$var$isNode(value) {
	return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
}
function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
	return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
}
//#endregion
//#region node_modules/.pnpm/@react-stately+flags@3.1.2/node_modules/@react-stately/flags/dist/import.mjs
var $f4e2df6bd15f8569$var$_shadowDOM = false;
function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
	return $f4e2df6bd15f8569$var$_shadowDOM;
}
//#endregion
//#region node_modules/.pnpm/@react-aria+utils@3.33.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/utils/dist/DOMFunctions.mjs
function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
	if (!$f4e2df6bd15f8569$export$98658e8c59125e6a()) return otherNode && node ? node.contains(otherNode) : false;
	if (!node || !otherNode) return false;
	let currentNode = otherNode;
	while (currentNode !== null) {
		if (currentNode === node) return true;
		if (currentNode.tagName === "SLOT" && currentNode.assignedSlot) currentNode = currentNode.assignedSlot.parentNode;
		else if ($431fbd86ca7dc216$export$af51f0f06c0f328a(currentNode)) currentNode = currentNode.host;
		else currentNode = currentNode.parentNode;
	}
	return false;
}
var $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document) => {
	var _activeElement_shadowRoot;
	if (!$f4e2df6bd15f8569$export$98658e8c59125e6a()) return doc.activeElement;
	let activeElement = doc.activeElement;
	while (activeElement && "shadowRoot" in activeElement && ((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement)) activeElement = activeElement.shadowRoot.activeElement;
	return activeElement;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
	if ($f4e2df6bd15f8569$export$98658e8c59125e6a() && event.target instanceof Element && event.target.shadowRoot) {
		var _event_composedPath_, _event_nativeEvent_composedPath_;
		if ("composedPath" in event) return (_event_composedPath_ = event.composedPath()[0]) !== null && _event_composedPath_ !== void 0 ? _event_composedPath_ : null;
		else if ("composedPath" in event.nativeEvent) return (_event_nativeEvent_composedPath_ = event.nativeEvent.composedPath()[0]) !== null && _event_nativeEvent_composedPath_ !== void 0 ? _event_nativeEvent_composedPath_ : null;
	}
	return event.target;
}
//#endregion
//#region node_modules/.pnpm/@react-aria+utils@3.33.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
	if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({ preventScroll: true });
	else {
		let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
		element.focus();
		$7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
	}
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
	if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
		$7215afc6de606d6b$var$supportsPreventScrollCached = false;
		try {
			document.createElement("div").focus({ get preventScroll() {
				$7215afc6de606d6b$var$supportsPreventScrollCached = true;
				return true;
			} });
		} catch {}
	}
	return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
	let parent = element.parentNode;
	let scrollableElements = [];
	let rootScrollingElement = document.scrollingElement || document.documentElement;
	while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
		if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
			element: parent,
			scrollTop: parent.scrollTop,
			scrollLeft: parent.scrollLeft
		});
		parent = parent.parentNode;
	}
	if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
		element: rootScrollingElement,
		scrollTop: rootScrollingElement.scrollTop,
		scrollLeft: rootScrollingElement.scrollLeft
	});
	return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
	for (let { element, scrollTop, scrollLeft } of scrollableElements) {
		element.scrollTop = scrollTop;
		element.scrollLeft = scrollLeft;
	}
}
//#endregion
//#region node_modules/.pnpm/@react-aria+utils@3.33.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re) {
	var _window_navigator_userAgentData;
	if (typeof window === "undefined" || window.navigator == null) return false;
	let brands = (_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands;
	return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
	var _window_navigator_userAgentData;
	return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
	let res = null;
	return () => {
		if (res == null) res = fn();
		return res;
	};
}
var $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
var $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
var $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$var$testPlatform(/^iPad/i) || $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
var $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
$c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
var $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
var $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
var $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
var $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
	return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});
//#endregion
//#region node_modules/.pnpm/@react-aria+utils@3.33.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/utils/dist/openLink.mjs
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
	var _window_event_type, _window_event;
	let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
	if ($c87311424ea30a05$export$b7d78993b74f766d() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") if ($c87311424ea30a05$export$9ac100e40613ea10()) metaKey = true;
	else ctrlKey = true;
	let event = $c87311424ea30a05$export$78551043582a6a98() && $c87311424ea30a05$export$9ac100e40613ea10() && !$c87311424ea30a05$export$7bef049ce92e4224() && true ? new KeyboardEvent("keydown", {
		keyIdentifier: "Enter",
		metaKey,
		ctrlKey,
		altKey,
		shiftKey
	}) : new MouseEvent("click", {
		metaKey,
		ctrlKey,
		altKey,
		shiftKey,
		detail: 1,
		bubbles: true,
		cancelable: true
	});
	$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
	$7215afc6de606d6b$export$de79e2c695e052f3(target);
	target.dispatchEvent(event);
	$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
//#endregion
//#region node_modules/.pnpm/@react-aria+utils@3.33.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
	let globalListeners = useRef(/* @__PURE__ */ new Map());
	let addGlobalListener = useCallback((eventTarget, type, listener, options) => {
		let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
			globalListeners.current.delete(listener);
			listener(...args);
		} : listener;
		globalListeners.current.set(listener, {
			type,
			eventTarget,
			fn,
			options
		});
		eventTarget.addEventListener(type, fn, options);
	}, []);
	let removeGlobalListener = useCallback((eventTarget, type, listener, options) => {
		var _globalListeners_current_get;
		let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
		eventTarget.removeEventListener(type, fn, options);
		globalListeners.current.delete(listener);
	}, []);
	let removeAllGlobalListeners = useCallback(() => {
		globalListeners.current.forEach((value, key) => {
			removeGlobalListener(value.eventTarget, value.type, key, value.options);
		});
	}, [removeGlobalListener]);
	useEffect(() => {
		return removeAllGlobalListeners;
	}, [removeAllGlobalListeners]);
	return {
		addGlobalListener,
		removeGlobalListener,
		removeAllGlobalListeners
	};
}
//#endregion
//#region node_modules/.pnpm/@react-aria+utils@3.33.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de(event) {
	if (event.pointerType === "" && event.isTrusted) return true;
	if ($c87311424ea30a05$export$a11b0059900ceec8() && event.pointerType) return event.type === "click" && event.buttons === 1;
	return event.detail === 0 && !event.pointerType;
}
//#endregion
//#region node_modules/.pnpm/@react-aria+interactions@3.27.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/interactions/dist/utils.mjs
function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
	let event = nativeEvent;
	event.nativeEvent = nativeEvent;
	event.isDefaultPrevented = () => event.defaultPrevented;
	event.isPropagationStopped = () => event.cancelBubble;
	event.persist = () => {};
	return event;
}
function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
	Object.defineProperty(event, "target", { value: target });
	Object.defineProperty(event, "currentTarget", { value: target });
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
	let stateRef = useRef({
		isFocused: false,
		observer: null
	});
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		const state = stateRef.current;
		return () => {
			if (state.observer) {
				state.observer.disconnect();
				state.observer = null;
			}
		};
	}, []);
	return useCallback((e) => {
		let eventTarget = $d4ee10de306f2510$export$e58f029f0fbfdb29(e);
		if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
			stateRef.current.isFocused = true;
			let target = eventTarget;
			let onBlurHandler = (e) => {
				stateRef.current.isFocused = false;
				if (target.disabled) {
					let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e);
					onBlur === null || onBlur === void 0 || onBlur(event);
				}
				if (stateRef.current.observer) {
					stateRef.current.observer.disconnect();
					stateRef.current.observer = null;
				}
			};
			target.addEventListener("focusout", onBlurHandler, { once: true });
			stateRef.current.observer = new MutationObserver(() => {
				if (stateRef.current.isFocused && target.disabled) {
					var _stateRef_current_observer;
					(_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 || _stateRef_current_observer.disconnect();
					let relatedTargetEl = target === $d4ee10de306f2510$export$cd4e5573fbe2b576() ? null : $d4ee10de306f2510$export$cd4e5573fbe2b576();
					target.dispatchEvent(new FocusEvent("blur", { relatedTarget: relatedTargetEl }));
					target.dispatchEvent(new FocusEvent("focusout", {
						bubbles: true,
						relatedTarget: relatedTargetEl
					}));
				}
			});
			stateRef.current.observer.observe(target, {
				attributes: true,
				attributeFilter: ["disabled"]
			});
		}
	}, [onBlur]);
}
var $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
//#endregion
//#region node_modules/.pnpm/@react-aria+interactions@3.27.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$export$901e90a13c50a14e = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
	Tab: true,
	Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
	for (let handler of $507fabe10e71c6fb$export$901e90a13c50a14e) handler(modality, e);
}
/**
* Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
*/ function $507fabe10e71c6fb$var$isValidKey(e) {
	return !(e.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
	$507fabe10e71c6fb$var$hasEventBeforeFocus = true;
	if (!$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening && $507fabe10e71c6fb$var$isValidKey(e)) {
		$507fabe10e71c6fb$var$currentModality = "keyboard";
		$507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
	}
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
	$507fabe10e71c6fb$var$currentModality = "pointer";
	"pointerType" in e && e.pointerType;
	if (e.type === "mousedown" || e.type === "pointerdown") {
		$507fabe10e71c6fb$var$hasEventBeforeFocus = true;
		$507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
	}
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
	if (!$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening && $6a7db85432448f7f$export$60278871457622de(e)) {
		$507fabe10e71c6fb$var$hasEventBeforeFocus = true;
		$507fabe10e71c6fb$var$currentModality = "virtual";
	}
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
	if ($d4ee10de306f2510$export$e58f029f0fbfdb29(e) === window || $d4ee10de306f2510$export$e58f029f0fbfdb29(e) === document || $8a9cb279dc87e130$export$fda7da73ab5d4c48 || !e.isTrusted) return;
	if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
		$507fabe10e71c6fb$var$currentModality = "virtual";
		$507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
	}
	$507fabe10e71c6fb$var$hasEventBeforeFocus = false;
	$507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
	if ($8a9cb279dc87e130$export$fda7da73ab5d4c48) return;
	$507fabe10e71c6fb$var$hasEventBeforeFocus = false;
	$507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
* Setup global event listeners to control when keyboard focus style should be visible.
*/ function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
	if (typeof window === "undefined" || typeof document === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get($431fbd86ca7dc216$export$f21a1ffae260145a(element))) return;
	const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
	const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
	let focus = windowObject.HTMLElement.prototype.focus;
	windowObject.HTMLElement.prototype.focus = function() {
		$507fabe10e71c6fb$var$hasEventBeforeFocus = true;
		focus.apply(this, arguments);
	};
	documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
	documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
	documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
	windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
	windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
	if (typeof PointerEvent !== "undefined") {
		documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
	}
	windowObject.addEventListener("beforeunload", () => {
		$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
	}, { once: true });
	$507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, { focus });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
	const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
	const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
	if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
	if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
	windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
	documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
	documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
	documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
	windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
	windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
	if (typeof PointerEvent !== "undefined") {
		documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
		documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
	}
	$507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
	const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
	let loadListener;
	if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
	else {
		loadListener = () => {
			$507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
		};
		documentObject.addEventListener("DOMContentLoaded", loadListener);
	}
	return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
	return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
var $507fabe10e71c6fb$var$nonTextInputTypes = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
/**
* If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
* focus visible style can be properly set.
*/ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
	let document1 = $431fbd86ca7dc216$export$b204af158042fbac(e ? $d4ee10de306f2510$export$e58f029f0fbfdb29(e) : void 0);
	let eventTarget = e ? $d4ee10de306f2510$export$e58f029f0fbfdb29(e) : void 0;
	const IHTMLInputElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(eventTarget).HTMLInputElement : HTMLInputElement;
	const IHTMLTextAreaElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(eventTarget).HTMLTextAreaElement : HTMLTextAreaElement;
	const IHTMLElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(eventTarget).HTMLElement : HTMLElement;
	const IKeyboardEvent = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(eventTarget).KeyboardEvent : KeyboardEvent;
	let activeElement = $d4ee10de306f2510$export$cd4e5573fbe2b576(document1);
	isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
	return !(isTextInput && modality === "keyboard" && e instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
	$507fabe10e71c6fb$var$setupGlobalFocusEvents();
	useEffect(() => {
		if ((opts === null || opts === void 0 ? void 0 : opts.enabled) === false) return;
		let handler = (modality, e) => {
			if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e)) return;
			fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
		};
		$507fabe10e71c6fb$export$901e90a13c50a14e.add(handler);
		return () => {
			$507fabe10e71c6fb$export$901e90a13c50a14e.delete(handler);
		};
	}, deps);
}
//#endregion
//#region node_modules/.pnpm/@react-aria+interactions@3.27.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/interactions/dist/useFocus.mjs
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
	let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
	const onBlur = useCallback((e) => {
		if ($d4ee10de306f2510$export$e58f029f0fbfdb29(e) === e.currentTarget) {
			if (onBlurProp) onBlurProp(e);
			if (onFocusChange) onFocusChange(false);
			return true;
		}
	}, [onBlurProp, onFocusChange]);
	const onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
	const onFocus = useCallback((e) => {
		let eventTarget = $d4ee10de306f2510$export$e58f029f0fbfdb29(e);
		const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(eventTarget);
		const activeElement = ownerDocument ? $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument) : $d4ee10de306f2510$export$cd4e5573fbe2b576();
		if (eventTarget === e.currentTarget && eventTarget === activeElement) {
			if (onFocusProp) onFocusProp(e);
			if (onFocusChange) onFocusChange(true);
			onSyntheticFocus(e);
		}
	}, [
		onFocusChange,
		onFocusProp,
		onSyntheticFocus
	]);
	return { focusProps: {
		onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
		onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
	} };
}
//#endregion
//#region node_modules/.pnpm/@react-aria+interactions@3.27.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
	let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
	let state = useRef({ isFocusWithin: false });
	let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
	let onBlur = useCallback((e) => {
		if (!$d4ee10de306f2510$export$4282f70798064fe0(e.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(e))) return;
		if (state.current.isFocusWithin && !$d4ee10de306f2510$export$4282f70798064fe0(e.currentTarget, e.relatedTarget)) {
			state.current.isFocusWithin = false;
			removeAllGlobalListeners();
			if (onBlurWithin) onBlurWithin(e);
			if (onFocusWithinChange) onFocusWithinChange(false);
		}
	}, [
		onBlurWithin,
		onFocusWithinChange,
		state,
		removeAllGlobalListeners
	]);
	let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
	let onFocus = useCallback((e) => {
		if (!$d4ee10de306f2510$export$4282f70798064fe0(e.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(e))) return;
		let eventTarget = $d4ee10de306f2510$export$e58f029f0fbfdb29(e);
		const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(eventTarget);
		const activeElement = $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument);
		if (!state.current.isFocusWithin && activeElement === eventTarget) {
			if (onFocusWithin) onFocusWithin(e);
			if (onFocusWithinChange) onFocusWithinChange(true);
			state.current.isFocusWithin = true;
			onSyntheticFocus(e);
			let currentTarget = e.currentTarget;
			addGlobalListener(ownerDocument, "focus", (e) => {
				let eventTarget = $d4ee10de306f2510$export$e58f029f0fbfdb29(e);
				if (state.current.isFocusWithin && !$d4ee10de306f2510$export$4282f70798064fe0(currentTarget, eventTarget)) {
					let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", { relatedTarget: eventTarget });
					$8a9cb279dc87e130$export$c2b7abe5d61ec696(nativeEvent, currentTarget);
					onBlur($8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent));
				}
			}, { capture: true });
		}
	}, [
		onFocusWithin,
		onFocusWithinChange,
		onSyntheticFocus,
		addGlobalListener,
		onBlur
	]);
	if (isDisabled) return { focusWithinProps: {
		onFocus: void 0,
		onBlur: void 0
	} };
	return { focusWithinProps: {
		onFocus,
		onBlur
	} };
}
//#endregion
//#region node_modules/.pnpm/@react-aria+interactions@3.27.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/interactions/dist/useHover.mjs
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
	$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
	setTimeout(() => {
		$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
	}, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
	if (e.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
	if (typeof document === "undefined") return;
	if ($6179b936705e76d3$var$hoverCount === 0) {
		if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
	}
	$6179b936705e76d3$var$hoverCount++;
	return () => {
		$6179b936705e76d3$var$hoverCount--;
		if ($6179b936705e76d3$var$hoverCount > 0) return;
		if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
	};
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
	let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
	let [isHovered, setHovered] = useState(false);
	let state = useRef({
		isHovered: false,
		ignoreEmulatedMouseEvents: false,
		pointerType: "",
		target: null
	}).current;
	useEffect($6179b936705e76d3$var$setupGlobalTouchEvents, []);
	let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
	let { hoverProps, triggerHoverEnd } = useMemo(() => {
		let triggerHoverStart = (event, pointerType) => {
			state.pointerType = pointerType;
			if (isDisabled || pointerType === "touch" || state.isHovered || !$d4ee10de306f2510$export$4282f70798064fe0(event.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(event))) return;
			state.isHovered = true;
			let target = event.currentTarget;
			state.target = target;
			addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac($d4ee10de306f2510$export$e58f029f0fbfdb29(event)), "pointerover", (e) => {
				if (state.isHovered && state.target && !$d4ee10de306f2510$export$4282f70798064fe0(state.target, $d4ee10de306f2510$export$e58f029f0fbfdb29(e))) triggerHoverEnd(e, e.pointerType);
			}, { capture: true });
			if (onHoverStart) onHoverStart({
				type: "hoverstart",
				target,
				pointerType
			});
			if (onHoverChange) onHoverChange(true);
			setHovered(true);
		};
		let triggerHoverEnd = (event, pointerType) => {
			let target = state.target;
			state.pointerType = "";
			state.target = null;
			if (pointerType === "touch" || !state.isHovered || !target) return;
			state.isHovered = false;
			removeAllGlobalListeners();
			if (onHoverEnd) onHoverEnd({
				type: "hoverend",
				target,
				pointerType
			});
			if (onHoverChange) onHoverChange(false);
			setHovered(false);
		};
		let hoverProps = {};
		if (typeof PointerEvent !== "undefined") {
			hoverProps.onPointerEnter = (e) => {
				if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
				triggerHoverStart(e, e.pointerType);
			};
			hoverProps.onPointerLeave = (e) => {
				if (!isDisabled && $d4ee10de306f2510$export$4282f70798064fe0(e.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(e))) triggerHoverEnd(e, e.pointerType);
			};
		}
		return {
			hoverProps,
			triggerHoverEnd
		};
	}, [
		onHoverStart,
		onHoverChange,
		onHoverEnd,
		isDisabled,
		state,
		addGlobalListener,
		removeAllGlobalListeners
	]);
	useEffect(() => {
		if (isDisabled) triggerHoverEnd({ currentTarget: state.target }, state.pointerType);
	}, [isDisabled]);
	return {
		hoverProps,
		isHovered
	};
}
//#endregion
//#region node_modules/.pnpm/@react-aria+focus@3.21.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@react-aria/focus/dist/useFocusRing.mjs
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
	let { autoFocus = false, isTextInput, within } = props;
	let state = useRef({
		isFocused: false,
		isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
	});
	let [isFocused, setFocused] = useState(false);
	let [isFocusVisibleState, setFocusVisible] = useState(() => state.current.isFocused && state.current.isFocusVisible);
	let updateState = useCallback(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
	let onFocusChange = useCallback((isFocused) => {
		state.current.isFocused = isFocused;
		state.current.isFocusVisible = $507fabe10e71c6fb$export$b9b3dfddab17db27();
		setFocused(isFocused);
		updateState();
	}, [updateState]);
	$507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible) => {
		state.current.isFocusVisible = isFocusVisible;
		updateState();
	}, [isTextInput, isFocused], {
		enabled: isFocused,
		isTextInput
	});
	let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
		isDisabled: within,
		onFocusChange
	});
	let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
		isDisabled: !within,
		onFocusWithinChange: onFocusChange
	});
	return {
		isFocused,
		isFocusVisible: isFocusVisibleState,
		focusProps: within ? focusWithinProps : focusProps
	};
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-active-press.js
function E(e) {
	let t = e.width / 2, n = e.height / 2;
	return {
		top: e.clientY - n,
		right: e.clientX + t,
		bottom: e.clientY + n,
		left: e.clientX - t
	};
}
function P(e, t) {
	return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function w$1({ disabled: e = !1 } = {}) {
	let t = useRef(null), [n, l$1] = useState(!1), r = p(), o$4 = o(() => {
		t.current = null, l$1(!1), r.dispose();
	}), f = o((s) => {
		if (r.dispose(), t.current === null) {
			t.current = s.currentTarget, l$1(!0);
			{
				let i = l(s.currentTarget);
				r.addEventListener(i, "pointerup", o$4, !1), r.addEventListener(i, "pointermove", (c) => {
					if (t.current) l$1(P(E(c), t.current.getBoundingClientRect()));
				}, !1), r.addEventListener(i, "pointercancel", o$4, !1);
			}
		}
	});
	return {
		pressed: n,
		pressProps: e ? {} : {
			onPointerDown: f,
			onPointerUp: o$4,
			onClick: o$4
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-element-size.js
function h(i) {
	if (i === null) return {
		width: 0,
		height: 0
	};
	let { width: t, height: e } = i.getBoundingClientRect();
	return {
		width: t,
		height: e
	};
}
function w(i, t, e = !1) {
	let [r, f] = useState(() => h(t));
	return n(() => {
		if (!t || !i) return;
		let n = o$1();
		return n.requestAnimationFrame(function s() {
			n.requestAnimationFrame(s), f((u) => {
				let o = h(t);
				return o.width === u.width && o.height === u.height ? u : o;
			});
		}), () => {
			n.dispose();
		};
	}, [t, i]), e ? {
		width: `${r.width}px`,
		height: `${r.height}px`
	} : r;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/utils/bugs.js
function s(l) {
	let e = l.parentElement, t = null;
	for (; e && !a(e);) E$1(e) && (t = e), e = e.parentElement;
	let i = (e == null ? void 0 : e.getAttribute("disabled")) === "";
	return i && r(t) ? !1 : i;
}
function r(l) {
	if (!l) return !1;
	let e = l.previousElementSibling;
	for (; e !== null;) {
		if (E$1(e)) return !1;
		e = e.previousElementSibling;
	}
	return !0;
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
function e(t, u) {
	return useMemo(() => {
		var n;
		if (t.type) return t.type;
		let r = (n = t.as) != null ? n : "button";
		if (typeof r == "string" && r.toLowerCase() === "button" || (u == null ? void 0 : u.tagName) === "BUTTON" && !u.hasAttribute("type")) return "button";
	}, [
		t.type,
		t.as,
		u
	]);
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+react@0.26.28_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function getUserAgent() {
	const uaData = navigator.userAgentData;
	if (uaData && Array.isArray(uaData.brands)) return uaData.brands.map((_ref) => {
		let { brand, version } = _ref;
		return brand + "/" + version;
	}).join(" ");
	return navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+react@0.26.28_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var SafeReact = { ...React$1 };
var useSafeInsertionEffect = SafeReact.useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
	const ref = React$1.useRef(() => {});
	useSafeInsertionEffect(() => {
		ref.current = callback;
	});
	return React$1.useCallback(function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		return ref.current == null ? void 0 : ref.current(...args);
	}, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var index = typeof document !== "undefined" ? useLayoutEffect : useEffect;
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
[...horizontalKeys, ...verticalKeys];
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++;
function useFloatingId() {
	const [id, setId] = React$1.useState(() => serverHandoffComplete ? genId() : void 0);
	index(() => {
		if (id == null) setId(genId());
	}, []);
	React$1.useEffect(() => {
		serverHandoffComplete = true;
	}, []);
	return id;
}
/**
* Uses React 18's built-in `useId()` when available, or falls back to a
* slightly less performant (requiring a double render) implementation for
* earlier React versions.
* @see https://floating-ui.com/docs/react-utils#useid
*/
var useId$1 = SafeReact.useId || useFloatingId;
function createPubSub() {
	const map = /* @__PURE__ */ new Map();
	return {
		emit(event, data) {
			var _map$get;
			(_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
		},
		on(event, listener) {
			map.set(event, [...map.get(event) || [], listener]);
		},
		off(event, listener) {
			var _map$get2;
			map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l) => l !== listener)) || []);
		}
	};
}
var FloatingNodeContext = /* @__PURE__ */ React$1.createContext(null);
var FloatingTreeContext = /* @__PURE__ */ React$1.createContext(null);
/**
* Returns the parent node id for nested floating elements, if available.
* Returns `null` for top-level floating elements.
*/
var useFloatingParentNodeId = () => {
	var _React$useContext;
	return ((_React$useContext = React$1.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
/**
* Returns the nearest floating tree context, if available.
*/
var useFloatingTree = () => React$1.useContext(FloatingTreeContext);
var FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
function useFloatingRootContext(options) {
	const { open = false, onOpenChange: onOpenChangeProp, elements: elementsProp } = options;
	const floatingId = useId$1();
	const dataRef = React$1.useRef({});
	const [events] = React$1.useState(() => createPubSub());
	const nested = useFloatingParentNodeId() != null;
	const [positionReference, setPositionReference] = React$1.useState(elementsProp.reference);
	const onOpenChange = useEffectEvent((open, event, reason) => {
		dataRef.current.openEvent = open ? event : void 0;
		events.emit("openchange", {
			open,
			event,
			reason,
			nested
		});
		onOpenChangeProp?.(open, event, reason);
	});
	const refs = React$1.useMemo(() => ({ setPositionReference }), []);
	const elements = React$1.useMemo(() => ({
		reference: positionReference || elementsProp.reference || null,
		floating: elementsProp.floating || null,
		domReference: elementsProp.reference
	}), [
		positionReference,
		elementsProp.reference,
		elementsProp.floating
	]);
	return React$1.useMemo(() => ({
		dataRef,
		open,
		onOpenChange,
		elements,
		events,
		floatingId,
		refs
	}), [
		open,
		onOpenChange,
		elements,
		events,
		floatingId,
		refs
	]);
}
/**
* Provides data to position a floating element and context to add interactions.
* @see https://floating-ui.com/docs/useFloating
*/
function useFloating(options) {
	if (options === void 0) options = {};
	const { nodeId } = options;
	const internalRootContext = useFloatingRootContext({
		...options,
		elements: {
			reference: null,
			floating: null,
			...options.elements
		}
	});
	const rootContext = options.rootContext || internalRootContext;
	const computedElements = rootContext.elements;
	const [_domReference, setDomReference] = React$1.useState(null);
	const [positionReference, _setPositionReference] = React$1.useState(null);
	const domReference = (computedElements == null ? void 0 : computedElements.domReference) || _domReference;
	const domReferenceRef = React$1.useRef(null);
	const tree = useFloatingTree();
	index(() => {
		if (domReference) domReferenceRef.current = domReference;
	}, [domReference]);
	const position = useFloating$1({
		...options,
		elements: {
			...computedElements,
			...positionReference && { reference: positionReference }
		}
	});
	const setPositionReference = React$1.useCallback((node) => {
		const computedPositionReference = isElement(node) ? {
			getBoundingClientRect: () => node.getBoundingClientRect(),
			contextElement: node
		} : node;
		_setPositionReference(computedPositionReference);
		position.refs.setReference(computedPositionReference);
	}, [position.refs]);
	const setReference = React$1.useCallback((node) => {
		if (isElement(node) || node === null) {
			domReferenceRef.current = node;
			setDomReference(node);
		}
		if (isElement(position.refs.reference.current) || position.refs.reference.current === null || node !== null && !isElement(node)) position.refs.setReference(node);
	}, [position.refs]);
	const refs = React$1.useMemo(() => ({
		...position.refs,
		setReference,
		setPositionReference,
		domReference: domReferenceRef
	}), [
		position.refs,
		setReference,
		setPositionReference
	]);
	const elements = React$1.useMemo(() => ({
		...position.elements,
		domReference
	}), [position.elements, domReference]);
	const context = React$1.useMemo(() => ({
		...position,
		...rootContext,
		refs,
		elements,
		nodeId
	}), [
		position,
		refs,
		elements,
		nodeId,
		rootContext
	]);
	index(() => {
		rootContext.dataRef.current.floatingContext = context;
		const node = tree == null ? void 0 : tree.nodesRef.current.find((node) => node.id === nodeId);
		if (node) node.context = context;
	});
	return React$1.useMemo(() => ({
		...position,
		context,
		refs,
		elements
	}), [
		position,
		refs,
		elements,
		context
	]);
}
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
	const map = /* @__PURE__ */ new Map();
	const isItem = elementKey === "item";
	let domUserProps = userProps;
	if (isItem && userProps) {
		const { [ACTIVE_KEY]: _, [SELECTED_KEY]: __, ...validProps } = userProps;
		domUserProps = validProps;
	}
	return {
		...elementKey === "floating" && {
			tabIndex: -1,
			[FOCUSABLE_ATTRIBUTE]: ""
		},
		...domUserProps,
		...propsList.map((value) => {
			const propsOrGetProps = value ? value[elementKey] : null;
			if (typeof propsOrGetProps === "function") return userProps ? propsOrGetProps(userProps) : null;
			return propsOrGetProps;
		}).concat(userProps).reduce((acc, props) => {
			if (!props) return acc;
			Object.entries(props).forEach((_ref) => {
				let [key, value] = _ref;
				if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) return;
				if (key.indexOf("on") === 0) {
					if (!map.has(key)) map.set(key, []);
					if (typeof value === "function") {
						var _map$get;
						(_map$get = map.get(key)) == null || _map$get.push(value);
						acc[key] = function() {
							var _map$get2;
							for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
							return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
						};
					}
				} else acc[key] = value;
			});
			return acc;
		}, {})
	};
}
/**
* Merges an array of interaction hooks' props into prop getters, allowing
* event handler functions to be composed together without overwriting one
* another.
* @see https://floating-ui.com/docs/useInteractions
*/
function useInteractions(propsList) {
	if (propsList === void 0) propsList = [];
	const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
	const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
	const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
	const getReferenceProps = React$1.useCallback((userProps) => mergeProps(userProps, propsList, "reference"), referenceDeps);
	const getFloatingProps = React$1.useCallback((userProps) => mergeProps(userProps, propsList, "floating"), floatingDeps);
	const getItemProps = React$1.useCallback((userProps) => mergeProps(userProps, propsList, "item"), itemDeps);
	return React$1.useMemo(() => ({
		getReferenceProps,
		getFloatingProps,
		getItemProps
	}), [
		getReferenceProps,
		getFloatingProps,
		getItemProps
	]);
}
function getArgsWithCustomFloatingHeight(state, height) {
	return {
		...state,
		rects: {
			...state.rects,
			floating: {
				...state.rects.floating,
				height
			}
		}
	};
}
/**
* Positions the floating element such that an inner element inside of it is
* anchored to the reference element.
* @see https://floating-ui.com/docs/inner
*/
var inner = (props) => ({
	name: "inner",
	options: props,
	async fn(state) {
		const { listRef, overflowRef, onFallbackChange, offset: innerOffset = 0, index = 0, minItemsVisible = 4, referenceOverflowThreshold = 0, scrollRef, ...detectOverflowOptions } = evaluate(props, state);
		const { rects, elements: { floating } } = state;
		const item = listRef.current[index];
		const scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating;
		const clientTop = floating.clientTop || scrollEl.clientTop;
		const floatingIsBordered = floating.clientTop !== 0;
		const scrollElIsBordered = scrollEl.clientTop !== 0;
		const floatingIsScrollEl = floating === scrollEl;
		if (!item) return {};
		const nextArgs = {
			...state,
			...await offset(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
		};
		const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
		const refOverflow = await detectOverflow(nextArgs, {
			...detectOverflowOptions,
			elementContext: "reference"
		});
		const diffY = max(0, overflow.top);
		const nextY = nextArgs.y + diffY;
		const maxHeight = (scrollEl.scrollHeight > scrollEl.clientHeight ? (v) => v : round)(max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - max(0, overflow.bottom)));
		scrollEl.style.maxHeight = maxHeight + "px";
		scrollEl.scrollTop = diffY;
		if (onFallbackChange) {
			const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * min(minItemsVisible, listRef.current.length) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
			ReactDOM$1.flushSync(() => onFallbackChange(shouldFallback));
		}
		if (overflowRef) overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
			...nextArgs,
			y: nextY
		}, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
		return { y: nextY };
	}
});
/**
* Changes the `inner` middleware's `offset` upon a `wheel` event to
* expand the floating element's height, revealing more list items.
* @see https://floating-ui.com/docs/inner
*/
function useInnerOffset(context, props) {
	const { open, elements } = context;
	const { enabled = true, overflowRef, scrollRef, onChange: unstable_onChange } = props;
	const onChange = useEffectEvent(unstable_onChange);
	const controlledScrollingRef = React$1.useRef(false);
	const prevScrollTopRef = React$1.useRef(null);
	const initialOverflowRef = React$1.useRef(null);
	React$1.useEffect(() => {
		if (!enabled) return;
		function onWheel(e) {
			if (e.ctrlKey || !el || overflowRef.current == null) return;
			const dY = e.deltaY;
			const isAtTop = overflowRef.current.top >= -.5;
			const isAtBottom = overflowRef.current.bottom >= -.5;
			const remainingScroll = el.scrollHeight - el.clientHeight;
			const sign = dY < 0 ? -1 : 1;
			const method = dY < 0 ? "max" : "min";
			if (el.scrollHeight <= el.clientHeight) return;
			if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
				e.preventDefault();
				ReactDOM$1.flushSync(() => {
					onChange((d) => d + Math[method](dY, remainingScroll * sign));
				});
			} else if (/firefox/i.test(getUserAgent())) el.scrollTop += dY;
		}
		const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
		if (open && el) {
			el.addEventListener("wheel", onWheel);
			requestAnimationFrame(() => {
				prevScrollTopRef.current = el.scrollTop;
				if (overflowRef.current != null) initialOverflowRef.current = { ...overflowRef.current };
			});
			return () => {
				prevScrollTopRef.current = null;
				initialOverflowRef.current = null;
				el.removeEventListener("wheel", onWheel);
			};
		}
	}, [
		enabled,
		open,
		elements.floating,
		overflowRef,
		scrollRef,
		onChange
	]);
	const floating = React$1.useMemo(() => ({
		onKeyDown() {
			controlledScrollingRef.current = true;
		},
		onWheel() {
			controlledScrollingRef.current = false;
		},
		onPointerMove() {
			controlledScrollingRef.current = false;
		},
		onScroll() {
			const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
			if (!overflowRef.current || !el || !controlledScrollingRef.current) return;
			if (prevScrollTopRef.current !== null) {
				const scrollDiff = el.scrollTop - prevScrollTopRef.current;
				if (overflowRef.current.bottom < -.5 && scrollDiff < -1 || overflowRef.current.top < -.5 && scrollDiff > 1) ReactDOM$1.flushSync(() => onChange((d) => d + scrollDiff));
			}
			requestAnimationFrame(() => {
				prevScrollTopRef.current = el.scrollTop;
			});
		}
	}), [
		elements.floating,
		onChange,
		overflowRef,
		scrollRef
	]);
	return React$1.useMemo(() => enabled ? { floating } : {}, [enabled, floating]);
}
//#endregion
//#region node_modules/.pnpm/@headlessui+react@2.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@headlessui/react/dist/internal/floating.js
var y = createContext({
	styles: void 0,
	setReference: () => {},
	setFloating: () => {},
	getReferenceProps: () => ({}),
	getFloatingProps: () => ({}),
	slot: {}
});
y.displayName = "FloatingContext";
var $ = createContext(null);
$.displayName = "PlacementContext";
function ye(e) {
	return useMemo(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Fe() {
	return useContext(y).setReference;
}
function be() {
	return useContext(y).getReferenceProps;
}
function Te() {
	let { getFloatingProps: e, slot: t } = useContext(y);
	return useCallback((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function Re(e = null) {
	e === !1 && (e = null), typeof e == "string" && (e = { to: e });
	let t = useContext($), n$2 = useMemo(() => e, [JSON.stringify(e, (l, o) => {
		var u;
		return (u = o == null ? void 0 : o.outerHTML) != null ? u : o;
	})]);
	n(() => {
		t?.(n$2 != null ? n$2 : null);
	}, [t, n$2]);
	let r = useContext(y);
	return useMemo(() => [r.setFloating, e ? r.styles : {}], [
		r.setFloating,
		e,
		r.styles
	]);
}
var D = 4;
function Ae({ children: e, enabled: t = !0 }) {
	let [n$3, r] = useState(null), [l, o$2] = useState(0), u = useRef(null), [f, s] = useState(null);
	ce(f);
	let i = t && n$3 !== null && f !== null, { to: F = "bottom", gap: E = 0, offset: A = 0, padding: c = 0, inner: h } = ge(n$3, f), [a, p = "center"] = F.split(" ");
	n(() => {
		i && o$2(0);
	}, [i]);
	let { refs: b, floatingStyles: S, context: g } = useFloating({
		open: i,
		placement: a === "selection" ? p === "center" ? "bottom" : `bottom-${p}` : p === "center" ? `${a}` : `${a}-${p}`,
		strategy: "absolute",
		transform: !1,
		middleware: [
			offset({
				mainAxis: a === "selection" ? 0 : E,
				crossAxis: A
			}),
			shift({ padding: c }),
			a !== "selection" && flip({ padding: c }),
			a === "selection" && h ? inner({
				...h,
				padding: c,
				overflowRef: u,
				offset: l,
				minItemsVisible: D,
				referenceOverflowThreshold: c,
				onFallbackChange(P) {
					var L, N;
					if (!P) return;
					let d = g.elements.floating;
					if (!d) return;
					let M = parseFloat(getComputedStyle(d).scrollPaddingBottom) || 0, I = Math.min(D, d.childElementCount), W = 0, B = 0;
					for (let m of (N = (L = g.elements.floating) == null ? void 0 : L.childNodes) != null ? N : []) if (n$1(m)) {
						let x = m.offsetTop, k = x + m.clientHeight + M, H = d.scrollTop, U = H + d.clientHeight;
						if (x >= H && k <= U) I--;
						else {
							B = Math.max(0, Math.min(k, U) - Math.max(x, H)), W = m.clientHeight;
							break;
						}
					}
					I >= 1 && o$2((m) => {
						let x = W * I - B + M;
						return m >= x ? m : x;
					});
				}
			}) : null,
			size({
				padding: c,
				apply({ availableWidth: P, availableHeight: d, elements: M }) {
					Object.assign(M.floating.style, {
						overflow: "auto",
						maxWidth: `${P}px`,
						maxHeight: `min(var(--anchor-max-height, 100vh), ${d}px)`
					});
				}
			})
		].filter(Boolean),
		whileElementsMounted: autoUpdate
	}), [w = a, V = p] = g.placement.split("-");
	a === "selection" && (w = "selection");
	let G = useMemo(() => ({ anchor: [w, V].filter(Boolean).join(" ") }), [w, V]), { getReferenceProps: Q, getFloatingProps: X } = useInteractions([useInnerOffset(g, {
		overflowRef: u,
		onChange: o$2
	})]), Y = o((P) => {
		s(P), b.setFloating(P);
	});
	return React$1.createElement($.Provider, { value: r }, React$1.createElement(y.Provider, { value: {
		setFloating: Y,
		setReference: b.setReference,
		styles: S,
		getReferenceProps: Q,
		getFloatingProps: X,
		slot: G
	} }, e));
}
function ce(e) {
	n(() => {
		if (!e) return;
		let t = new MutationObserver(() => {
			let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
			if (isNaN(r)) return;
			let l = parseInt(n);
			isNaN(l) || r !== l && (e.style.maxHeight = `${Math.ceil(r)}px`);
		});
		return t.observe(e, {
			attributes: !0,
			attributeFilter: ["style"]
		}), () => {
			t.disconnect();
		};
	}, [e]);
}
function ge(e, t) {
	var o, u, f;
	let n = O((o = e == null ? void 0 : e.gap) != null ? o : "var(--anchor-gap, 0)", t), r = O((u = e == null ? void 0 : e.offset) != null ? u : "var(--anchor-offset, 0)", t), l = O((f = e == null ? void 0 : e.padding) != null ? f : "var(--anchor-padding, 0)", t);
	return {
		...e,
		gap: n,
		offset: r,
		padding: l
	};
}
function O(e, t, n$4 = void 0) {
	let r = p(), l = o((s, i) => {
		if (s == null) return [n$4, null];
		if (typeof s == "number") return [s, null];
		if (typeof s == "string") {
			if (!i) return [n$4, null];
			let F = J(s, i);
			return [F, (E) => {
				let A = q(s);
				{
					let c = A.map((h) => window.getComputedStyle(i).getPropertyValue(h));
					r.requestAnimationFrame(function h() {
						r.nextFrame(h);
						let a = !1;
						for (let [b, S] of A.entries()) {
							let g = window.getComputedStyle(i).getPropertyValue(S);
							if (c[b] !== g) {
								c[b] = g, a = !0;
								break;
							}
						}
						if (!a) return;
						let p = J(s, i);
						F !== p && (E(p), F = p);
					});
				}
				return r.dispose;
			}];
		}
		return [n$4, null];
	}), o$3 = useMemo(() => l(e, t)[0], [e, t]), [u = o$3, f] = useState();
	return n(() => {
		let [s, i] = l(e, t);
		if (f(s), !!i) return i(f);
	}, [e, t]), u;
}
function q(e) {
	let t = /var\((.*)\)/.exec(e);
	if (t) {
		let n = t[1].indexOf(",");
		if (n === -1) return [t[1]];
		let r = t[1].slice(0, n).trim(), l = t[1].slice(n + 1).trim();
		return l ? [r, ...q(l)] : [r];
	}
	return [];
}
function J(e, t) {
	let n = document.createElement("div");
	t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
	let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
	return t.removeChild(n), r;
}
//#endregion
export { be as a, s as c, $f7dceffc5ad7768b$export$4e328f61c538687f as d, $6179b936705e76d3$export$ae780daf29e6d456 as f, Te as i, w as l, Fe as n, ye as o, Re as r, e as s, Ae as t, w$1 as u };
