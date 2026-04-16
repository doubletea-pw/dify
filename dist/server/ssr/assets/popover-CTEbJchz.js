import { f as isHTMLElement } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { A as useOpenChangeComplete, B as getTabbableBeforeElement, Ct as createSelector, D as FloatingPortal, Et as createChangeEventDetails, F as inertValue, Ft as imperativeAction, H as isOutsideEvent, I as FocusGuard, L as getNextTabbable, P as transitionStatusMapping, Pt as focusOut, W as contains, Yt as triggerHover, j as useAnimationsFinished, kt as closePress, mt as Timeout, vt as ReactStore, wt as useOnMount, z as getTabbableAfterElement } from "./base-BuKAg6Le.js";
import { b as useStableCallback, g as formatErrorMessage, m as useButton, r as CLICK_TRIGGER_IDENTIFIER, s as POPUP_COLLISION_AVOIDANCE, t as useRenderElement, v as useIsoLayoutEffect, x as useRefWithInit } from "./useRenderElement-BTEjG3-d.js";
import { n as useBaseUiId } from "./useValueChanged-D4oB7b6Z.js";
import { a as pressableTriggerOpenStateMapping, c as PopupTriggerMap, d as FloatingNode, f as FloatingTree, i as popupStateMapping, m as useFloatingParentNodeId, o as triggerOpenStateMapping, p as useFloatingNodeId, s as useInteractions, t as useOnFirstRender, u as useDismiss } from "./useOnFirstRender-DefDNImt.js";
import { a as COMPOSITE_KEYS, c as useOpenInteractionType, d as FloatingFocusManager, l as useScrollLock, s as InternalBackdrop, u as useClick } from "./composite-CWej4ctq.js";
import { n as useHoverReferenceInteraction, r as useHoverFloatingInteraction, t as safePolygon } from "./safePolygon-DEtoYQt_.js";
import { a as useOpenStateTransitions, i as useImplicitActiveTrigger, n as createInitialPopupStoreState, o as useTriggerDataForwarding, r as popupStoreSelectors, t as useSyncedFloatingRootContext } from "./useSyncedFloatingRootContext-Dhu-5zf9.js";
import { i as adaptiveOrigin, n as getDisabledMountTransitionStyles, r as useAnchorPositioning, t as parsePlacement } from "./placement-C7DHLE4Z.js";
import { t as useRole } from "./useRole-Cm4Xn7XU.js";
import { t as useToolbarRootContext } from "./ToolbarRootContext-541RpF1q.js";
import * as React$1 from "react";
import * as ReactDOM$1 from "react-dom";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js
var PopoverRootContext = /* @__PURE__ */ React$1.createContext(void 0);
function usePopoverRootContext(optional) {
	const context = React$1.useContext(PopoverRootContext);
	if (context === void 0 && !optional) throw new Error(formatErrorMessage(47));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/popover/store/PopoverStore.js
function createInitialState() {
	return {
		...createInitialPopupStoreState(),
		disabled: false,
		modal: false,
		instantType: void 0,
		openMethod: null,
		openChangeReason: null,
		titleElementId: void 0,
		descriptionElementId: void 0,
		stickIfOpen: true,
		nested: false,
		openOnHover: false,
		closeDelay: 0,
		hasViewport: false
	};
}
var selectors = {
	...popupStoreSelectors,
	disabled: createSelector((state) => state.disabled),
	instantType: createSelector((state) => state.instantType),
	openMethod: createSelector((state) => state.openMethod),
	openChangeReason: createSelector((state) => state.openChangeReason),
	modal: createSelector((state) => state.modal),
	stickIfOpen: createSelector((state) => state.stickIfOpen),
	titleElementId: createSelector((state) => state.titleElementId),
	descriptionElementId: createSelector((state) => state.descriptionElementId),
	openOnHover: createSelector((state) => state.openOnHover),
	closeDelay: createSelector((state) => state.closeDelay),
	hasViewport: createSelector((state) => state.hasViewport)
};
var PopoverStore = class PopoverStore extends ReactStore {
	constructor(initialState) {
		const initial = {
			...createInitialState(),
			...initialState
		};
		if (initial.open && initialState?.mounted === void 0) initial.mounted = true;
		super(initial, {
			popupRef: /* @__PURE__ */ React$1.createRef(),
			backdropRef: /* @__PURE__ */ React$1.createRef(),
			internalBackdropRef: /* @__PURE__ */ React$1.createRef(),
			onOpenChange: void 0,
			onOpenChangeComplete: void 0,
			triggerFocusTargetRef: /* @__PURE__ */ React$1.createRef(),
			beforeContentFocusGuardRef: /* @__PURE__ */ React$1.createRef(),
			stickIfOpenTimeout: new Timeout(),
			triggerElements: new PopupTriggerMap()
		}, selectors);
	}
	setOpen = (nextOpen, eventDetails) => {
		const isHover = eventDetails.reason === triggerHover;
		const isKeyboardClick = eventDetails.reason === "trigger-press" && eventDetails.event.detail === 0;
		const isDismissClose = !nextOpen && (eventDetails.reason === "escape-key" || eventDetails.reason == null);
		eventDetails.preventUnmountOnClose = () => {
			this.set("preventUnmountingOnClose", true);
		};
		this.context.onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		const details = {
			open: nextOpen,
			nativeEvent: eventDetails.event,
			reason: eventDetails.reason,
			nested: this.state.nested,
			triggerElement: eventDetails.trigger
		};
		this.state.floatingRootContext.context.events?.emit("openchange", details);
		const changeState = () => {
			const updatedState = {
				open: nextOpen,
				openChangeReason: eventDetails.reason
			};
			const newTriggerId = eventDetails.trigger?.id ?? null;
			if (newTriggerId || nextOpen) {
				updatedState.activeTriggerId = newTriggerId;
				updatedState.activeTriggerElement = eventDetails.trigger ?? null;
			}
			this.update(updatedState);
		};
		if (isHover) {
			this.set("stickIfOpen", true);
			this.context.stickIfOpenTimeout.start(500, () => {
				this.set("stickIfOpen", false);
			});
			ReactDOM$1.flushSync(changeState);
		} else changeState();
		if (isKeyboardClick || isDismissClose) this.set("instantType", isKeyboardClick ? "click" : "dismiss");
		else if (eventDetails.reason === "focus-out") this.set("instantType", "focus");
		else this.set("instantType", void 0);
	};
	static useStore(externalStore, initialState) {
		const internalStore = useRefWithInit(() => {
			return new PopoverStore(initialState);
		}).current;
		const store = externalStore ?? internalStore;
		useOnMount(internalStore.disposeEffect);
		return store;
	}
	disposeEffect = () => {
		return this.context.stickIfOpenTimeout.disposeEffect();
	};
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/popover/root/PopoverRoot.js
function PopoverRootComponent({ props }) {
	const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, modal = false, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
	const store = PopoverStore.useStore(handle?.store, {
		modal,
		open: defaultOpen,
		openProp,
		activeTriggerId: defaultTriggerIdProp,
		triggerIdProp
	});
	useOnFirstRender(() => {
		if (openProp === void 0 && store.state.open === false && defaultOpen === true) store.update({
			open: true,
			activeTriggerId: defaultTriggerIdProp
		});
	});
	store.useControlledProp("openProp", openProp);
	store.useControlledProp("triggerIdProp", triggerIdProp);
	const open = store.useState("open");
	const positionerElement = store.useState("positionerElement");
	const payload = store.useState("payload");
	const openReason = store.useState("openChangeReason");
	store.useContextCallback("onOpenChange", onOpenChange);
	store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
	const { openMethod, triggerProps: interactionTypeTriggerProps } = useOpenInteractionType(open);
	useImplicitActiveTrigger(store);
	const { forceUnmount } = useOpenStateTransitions(open, store, () => {
		store.update({
			stickIfOpen: true,
			openChangeReason: null
		});
	});
	useScrollLock(open && modal === true && openReason !== "trigger-hover" && openMethod !== "touch", positionerElement);
	React$1.useEffect(() => {
		if (!open) store.context.stickIfOpenTimeout.clear();
	}, [store, open]);
	const createPopoverEventDetails = React$1.useCallback((reason) => {
		const details = createChangeEventDetails(reason);
		details.preventUnmountOnClose = () => {
			store.set("preventUnmountingOnClose", true);
		};
		return details;
	}, [store]);
	const handleImperativeClose = React$1.useCallback(() => {
		store.setOpen(false, createPopoverEventDetails(imperativeAction));
	}, [store, createPopoverEventDetails]);
	React$1.useImperativeHandle(props.actionsRef, () => ({
		unmount: forceUnmount,
		close: handleImperativeClose
	}), [forceUnmount, handleImperativeClose]);
	const floatingRootContext = useSyncedFloatingRootContext({
		popupStore: store,
		onOpenChange: store.setOpen
	});
	const { getReferenceProps, getFloatingProps, getTriggerProps } = useInteractions([useDismiss(floatingRootContext, { outsidePressEvent: {
		mouse: modal === "trap-focus" ? "sloppy" : "intentional",
		touch: "sloppy"
	} }), useRole(floatingRootContext)]);
	const activeTriggerProps = React$1.useMemo(() => {
		return getReferenceProps(interactionTypeTriggerProps);
	}, [getReferenceProps, interactionTypeTriggerProps]);
	const inactiveTriggerProps = React$1.useMemo(() => {
		return getTriggerProps(interactionTypeTriggerProps);
	}, [getTriggerProps, interactionTypeTriggerProps]);
	const popupProps = React$1.useMemo(() => {
		return getFloatingProps();
	}, [getFloatingProps]);
	store.useSyncedValues({
		modal,
		openMethod,
		activeTriggerProps,
		inactiveTriggerProps,
		popupProps,
		floatingRootContext,
		nested: useFloatingParentNodeId() != null
	});
	const popoverContext = React$1.useMemo(() => ({ store }), [store]);
	return /* @__PURE__ */ jsx(PopoverRootContext.Provider, {
		value: popoverContext,
		children: typeof children === "function" ? children({ payload }) : children
	});
}
/**
* Groups all parts of the popover.
* Doesn’t render its own HTML element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
function PopoverRoot(props) {
	if (usePopoverRootContext(true)) return /* @__PURE__ */ jsx(PopoverRootComponent, { props });
	return /* @__PURE__ */ jsx(FloatingTree, { children: /* @__PURE__ */ jsx(PopoverRootComponent, { props }) });
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/popover/trigger/PopoverTrigger.js
/**
* A button that opens the popover.
* Renders a `<button>` element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
var PopoverTrigger$1 = /* @__PURE__ */ React$1.forwardRef(function PopoverTrigger(componentProps, forwardedRef) {
	const { render, className, disabled = false, nativeButton = true, handle, payload, openOnHover = false, delay = 300, closeDelay = 0, id: idProp, ...elementProps } = componentProps;
	const rootContext = usePopoverRootContext(true);
	const store = handle?.store ?? rootContext?.store;
	if (!store) throw new Error(formatErrorMessage(74));
	const thisTriggerId = useBaseUiId(idProp);
	const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
	const floatingContext = store.useState("floatingRootContext");
	const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
	const triggerElementRef = React$1.useRef(null);
	const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
		payload,
		disabled,
		openOnHover,
		closeDelay
	});
	const openReason = store.useState("openChangeReason");
	const stickIfOpen = store.useState("stickIfOpen");
	const openMethod = store.useState("openMethod");
	const hoverProps = useHoverReferenceInteraction(floatingContext, {
		enabled: floatingContext != null && openOnHover && (openMethod !== "touch" || openReason !== "trigger-press"),
		mouseOnly: true,
		move: false,
		handleClose: safePolygon(),
		restMs: delay,
		delay: { close: closeDelay },
		triggerElementRef,
		isActiveTrigger: isTriggerActive
	});
	const localProps = useInteractions([useClick(floatingContext, {
		enabled: floatingContext != null,
		stickIfOpen
	})]);
	const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
	const state = {
		disabled,
		open: isOpenedByThisTrigger
	};
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const stateAttributesMapping = React$1.useMemo(() => ({ open(value) {
		if (value && openReason === "trigger-press") return pressableTriggerOpenStateMapping.open(value);
		return triggerOpenStateMapping.open(value);
	} }), [openReason]);
	const element = useRenderElement("button", componentProps, {
		state,
		ref: [
			buttonRef,
			forwardedRef,
			registerTrigger,
			triggerElementRef
		],
		props: [
			localProps.getReferenceProps(),
			hoverProps,
			rootTriggerProps,
			{
				[CLICK_TRIGGER_IDENTIFIER]: "",
				id: thisTriggerId
			},
			elementProps,
			getButtonProps
		],
		stateAttributesMapping
	});
	const preFocusGuardRef = React$1.useRef(null);
	const handlePreFocusGuardFocus = useStableCallback((event) => {
		ReactDOM$1.flushSync(() => {
			store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent, event.currentTarget));
		});
		getTabbableBeforeElement(preFocusGuardRef.current)?.focus();
	});
	const handleFocusTargetFocus = useStableCallback((event) => {
		const positionerElement = store.select("positionerElement");
		if (positionerElement && isOutsideEvent(event, positionerElement)) store.context.beforeContentFocusGuardRef.current?.focus();
		else {
			ReactDOM$1.flushSync(() => {
				store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent, event.currentTarget));
			});
			let nextTabbable = getTabbableAfterElement(store.context.triggerFocusTargetRef.current || triggerElementRef.current);
			while (nextTabbable !== null && contains(positionerElement, nextTabbable)) {
				const prevTabbable = nextTabbable;
				nextTabbable = getNextTabbable(nextTabbable);
				if (nextTabbable === prevTabbable) break;
			}
			nextTabbable?.focus();
		}
	});
	if (isTriggerActive) return /* @__PURE__ */ jsxs(React$1.Fragment, { children: [
		/* @__PURE__ */ jsx(FocusGuard, {
			ref: preFocusGuardRef,
			onFocus: handlePreFocusGuardFocus
		}),
		/* @__PURE__ */ jsx(React$1.Fragment, { children: element }, thisTriggerId),
		/* @__PURE__ */ jsx(FocusGuard, {
			ref: store.context.triggerFocusTargetRef,
			onFocus: handleFocusTargetFocus
		})
	] });
	return /* @__PURE__ */ jsx(React$1.Fragment, { children: element }, thisTriggerId);
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/popover/portal/PopoverPortalContext.js
var PopoverPortalContext = /* @__PURE__ */ React$1.createContext(void 0);
function usePopoverPortalContext() {
	const value = React$1.useContext(PopoverPortalContext);
	if (value === void 0) throw new Error(formatErrorMessage(45));
	return value;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/popover/portal/PopoverPortal.js
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
var PopoverPortal = /* @__PURE__ */ React$1.forwardRef(function PopoverPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	const { store } = usePopoverRootContext();
	if (!(store.useState("mounted") || keepMounted)) return null;
	return /* @__PURE__ */ jsx(PopoverPortalContext.Provider, {
		value: keepMounted,
		children: /* @__PURE__ */ jsx(FloatingPortal, {
			ref: forwardedRef,
			...portalProps
		})
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositionerContext.js
var PopoverPositionerContext = /* @__PURE__ */ React$1.createContext(void 0);
function usePopoverPositionerContext() {
	const context = React$1.useContext(PopoverPositionerContext);
	if (!context) throw new Error(formatErrorMessage(46));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositioner.js
/**
* Positions the popover against the trigger.
* Renders a `<div>` element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
var PopoverPositioner = /* @__PURE__ */ React$1.forwardRef(function PopoverPositioner(componentProps, forwardedRef) {
	const { render, className, anchor, positionMethod = "absolute", side = "bottom", align = "center", sideOffset = 0, alignOffset = 0, collisionBoundary = "clipping-ancestors", collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance = POPUP_COLLISION_AVOIDANCE, ...elementProps } = componentProps;
	const { store } = usePopoverRootContext();
	const keepMounted = usePopoverPortalContext();
	const nodeId = useFloatingNodeId();
	const floatingRootContext = store.useState("floatingRootContext");
	const mounted = store.useState("mounted");
	const open = store.useState("open");
	const openReason = store.useState("openChangeReason");
	const triggerElement = store.useState("activeTriggerElement");
	const modal = store.useState("modal");
	const positionerElement = store.useState("positionerElement");
	const instantType = store.useState("instantType");
	const transitionStatus = store.useState("transitionStatus");
	const hasViewport = store.useState("hasViewport");
	const prevTriggerElementRef = React$1.useRef(null);
	const runOnceAnimationsFinish = useAnimationsFinished(positionerElement, false, false);
	const positioning = useAnchorPositioning({
		anchor,
		floatingRootContext,
		positionMethod,
		mounted,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		disableAnchorTracking,
		keepMounted,
		nodeId,
		collisionAvoidance,
		adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
	});
	const defaultProps = React$1.useMemo(() => {
		const hiddenStyles = {};
		if (!open) hiddenStyles.pointerEvents = "none";
		return {
			role: "presentation",
			hidden: !mounted,
			style: {
				...positioning.positionerStyles,
				...hiddenStyles
			}
		};
	}, [
		open,
		mounted,
		positioning.positionerStyles
	]);
	const positioner = React$1.useMemo(() => ({
		props: defaultProps,
		...positioning
	}), [defaultProps, positioning]);
	const domReference = floatingRootContext.useState("domReferenceElement");
	useIsoLayoutEffect(() => {
		const currentTriggerElement = domReference;
		const prevTriggerElement = prevTriggerElementRef.current;
		if (currentTriggerElement) prevTriggerElementRef.current = currentTriggerElement;
		if (prevTriggerElement && currentTriggerElement && currentTriggerElement !== prevTriggerElement) {
			store.set("instantType", void 0);
			const ac = new AbortController();
			runOnceAnimationsFinish(() => {
				store.set("instantType", "trigger-change");
			}, ac.signal);
			return () => {
				ac.abort();
			};
		}
	}, [
		domReference,
		runOnceAnimationsFinish,
		store
	]);
	const state = {
		open,
		side: positioner.side,
		align: positioner.align,
		anchorHidden: positioner.anchorHidden,
		instant: instantType
	};
	const setPositionerElement = React$1.useCallback((element) => {
		store.set("positionerElement", element);
	}, [store]);
	const element = useRenderElement("div", componentProps, {
		state,
		props: [
			positioner.props,
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		],
		ref: [forwardedRef, setPositionerElement],
		stateAttributesMapping: popupStateMapping
	});
	return /* @__PURE__ */ jsxs(PopoverPositionerContext.Provider, {
		value: positioner,
		children: [mounted && modal === true && openReason !== "trigger-hover" && /* @__PURE__ */ jsx(InternalBackdrop, {
			ref: store.context.internalBackdropRef,
			inert: inertValue(!open),
			cutout: triggerElement
		}), /* @__PURE__ */ jsx(FloatingNode, {
			id: nodeId,
			children: element
		})]
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/utils/closePart.js
var ClosePartContext = /* @__PURE__ */ React$1.createContext(void 0);
function useClosePartCount() {
	const [closePartCount, setClosePartCount] = React$1.useState(0);
	const register = useStableCallback(() => {
		setClosePartCount((count) => count + 1);
		return () => {
			setClosePartCount((count) => Math.max(0, count - 1));
		};
	});
	return {
		context: React$1.useMemo(() => ({ register }), [register]),
		hasClosePart: closePartCount > 0
	};
}
function ClosePartProvider(props) {
	const { value, children } = props;
	return /* @__PURE__ */ jsx(ClosePartContext.Provider, {
		value,
		children
	});
}
function useClosePartRegistration() {
	const context = React$1.useContext(ClosePartContext);
	useIsoLayoutEffect(() => {
		return context?.register();
	}, [context]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/popover/popup/PopoverPopup.js
var stateAttributesMapping = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* A container for the popover contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
var PopoverPopup = /* @__PURE__ */ React$1.forwardRef(function PopoverPopup(componentProps, forwardedRef) {
	const { className, render, initialFocus, finalFocus, ...elementProps } = componentProps;
	const { store } = usePopoverRootContext();
	const positioner = usePopoverPositionerContext();
	const insideToolbar = useToolbarRootContext(true) != null;
	const { context: closePartContext, hasClosePart } = useClosePartCount();
	const open = store.useState("open");
	const openMethod = store.useState("openMethod");
	const instantType = store.useState("instantType");
	const transitionStatus = store.useState("transitionStatus");
	const popupProps = store.useState("popupProps");
	const titleId = store.useState("titleElementId");
	const descriptionId = store.useState("descriptionElementId");
	const modal = store.useState("modal");
	const mounted = store.useState("mounted");
	const openReason = store.useState("openChangeReason");
	const activeTriggerElement = store.useState("activeTriggerElement");
	const floatingContext = store.useState("floatingRootContext");
	useOpenChangeComplete({
		open,
		ref: store.context.popupRef,
		onComplete() {
			if (open) store.context.onOpenChangeComplete?.(true);
		}
	});
	const disabled = store.useState("disabled");
	const openOnHover = store.useState("openOnHover");
	const closeDelay = store.useState("closeDelay");
	useHoverFloatingInteraction(floatingContext, {
		enabled: openOnHover && !disabled,
		closeDelay
	});
	function defaultInitialFocus(interactionType) {
		if (interactionType === "touch") return store.context.popupRef.current;
		return true;
	}
	const resolvedInitialFocus = initialFocus === void 0 ? defaultInitialFocus : initialFocus;
	const state = {
		open,
		side: positioner.side,
		align: positioner.align,
		instant: instantType,
		transitionStatus
	};
	const focusManagerModal = modal !== false && hasClosePart;
	const setPopupElement = React$1.useCallback((element) => {
		store.set("popupElement", element);
	}, [store]);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: [
			forwardedRef,
			store.context.popupRef,
			setPopupElement
		],
		props: [
			popupProps,
			{
				"aria-labelledby": titleId,
				"aria-describedby": descriptionId,
				onKeyDown(event) {
					if (insideToolbar && COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
				}
			},
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		],
		stateAttributesMapping
	});
	return /* @__PURE__ */ jsx(FloatingFocusManager, {
		context: floatingContext,
		openInteractionType: openMethod,
		modal: focusManagerModal,
		disabled: !mounted || openReason === "trigger-hover",
		initialFocus: resolvedInitialFocus,
		returnFocus: finalFocus,
		restoreFocus: "popup",
		previousFocusableElement: isHTMLElement(activeTriggerElement) ? activeTriggerElement : void 0,
		nextFocusableElement: store.context.triggerFocusTargetRef,
		beforeContentFocusGuardRef: store.context.beforeContentFocusGuardRef,
		children: /* @__PURE__ */ jsx(ClosePartProvider, {
			value: closePartContext,
			children: element
		})
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/popover/close/PopoverClose.js
/**
* A button that closes the popover.
* Renders a `<button>` element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
var PopoverClose$1 = /* @__PURE__ */ React$1.forwardRef(function PopoverClose(componentProps, forwardedRef) {
	const { render, className, disabled = false, nativeButton = true, ...elementProps } = componentProps;
	const { buttonRef, getButtonProps } = useButton({
		disabled,
		focusableWhenDisabled: false,
		native: nativeButton
	});
	const { store } = usePopoverRootContext();
	useClosePartRegistration();
	return useRenderElement("button", componentProps, {
		ref: [forwardedRef, buttonRef],
		props: [
			{ onClick(event) {
				store.setOpen(false, createChangeEventDetails(closePress, event.nativeEvent, event.currentTarget));
			} },
			elementProps,
			getButtonProps
		]
	});
});
//#endregion
//#region app/components/base/ui/popover/index.tsx
var Popover = PopoverRoot;
var PopoverTrigger = PopoverTrigger$1;
var PopoverClose = PopoverClose$1;
function PopoverContent({ children, placement = "bottom", sideOffset = 8, alignOffset = 0, className, popupClassName, positionerProps, popupProps }) {
	const { side, align } = parsePlacement(placement);
	return /* @__PURE__ */ jsx(PopoverPortal, { children: /* @__PURE__ */ jsx(PopoverPositioner, {
		side,
		align,
		sideOffset,
		alignOffset,
		className: cn("z-[1002] outline-none", className),
		...positionerProps,
		children: /* @__PURE__ */ jsx(PopoverPopup, {
			className: cn("rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-lg", "origin-[var(--transform-origin)] transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none", popupClassName),
			...popupProps,
			children
		})
	}) });
}
//#endregion
export { PopoverTrigger as i, PopoverClose as n, PopoverContent as r, Popover as t };
