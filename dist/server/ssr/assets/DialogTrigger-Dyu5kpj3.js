import { A as useOpenChangeComplete, Ct as createSelector, D as FloatingPortal, Et as createChangeEventDetails, F as inertValue, Ft as imperativeAction, K as getTarget, P as transitionStatusMapping, W as contains, kt as closePress, vt as ReactStore } from "./base-BuKAg6Le.js";
import { b as useStableCallback, g as formatErrorMessage, m as useButton, r as CLICK_TRIGGER_IDENTIFIER, t as useRenderElement } from "./useRenderElement-BTEjG3-d.js";
import { n as useBaseUiId } from "./useValueChanged-D4oB7b6Z.js";
import { c as PopupTriggerMap, i as popupStateMapping, n as CommonPopupDataAttributes, o as triggerOpenStateMapping, s as useInteractions, u as useDismiss } from "./useOnFirstRender-DefDNImt.js";
import { a as COMPOSITE_KEYS, c as useOpenInteractionType, d as FloatingFocusManager, l as useScrollLock, s as InternalBackdrop, u as useClick } from "./composite-CWej4ctq.js";
import { a as useOpenStateTransitions, i as useImplicitActiveTrigger, n as createInitialPopupStoreState, o as useTriggerDataForwarding, r as popupStoreSelectors, t as useSyncedFloatingRootContext } from "./useSyncedFloatingRootContext-Dhu-5zf9.js";
import { t as useRole } from "./useRole-Cm4Xn7XU.js";
import * as React$1 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/root/useDialogRoot.js
function useDialogRoot(params) {
	const { store, parentContext, actionsRef } = params;
	const open = store.useState("open");
	const disablePointerDismissal = store.useState("disablePointerDismissal");
	const modal = store.useState("modal");
	const popupElement = store.useState("popupElement");
	const { openMethod, triggerProps } = useOpenInteractionType(open);
	useImplicitActiveTrigger(store);
	const { forceUnmount } = useOpenStateTransitions(open, store);
	const createDialogEventDetails = useStableCallback((reason) => {
		const details = createChangeEventDetails(reason);
		details.preventUnmountOnClose = () => {
			store.set("preventUnmountingOnClose", true);
		};
		return details;
	});
	const handleImperativeClose = React$1.useCallback(() => {
		store.setOpen(false, createDialogEventDetails(imperativeAction));
	}, [store, createDialogEventDetails]);
	React$1.useImperativeHandle(actionsRef, () => ({
		unmount: forceUnmount,
		close: handleImperativeClose
	}), [forceUnmount, handleImperativeClose]);
	const floatingRootContext = useSyncedFloatingRootContext({
		popupStore: store,
		onOpenChange: store.setOpen,
		treatPopupAsFloatingElement: true,
		noEmit: true
	});
	const [ownNestedOpenDialogs, setOwnNestedOpenDialogs] = React$1.useState(0);
	const isTopmost = ownNestedOpenDialogs === 0;
	const role = useRole(floatingRootContext);
	const dismiss = useDismiss(floatingRootContext, {
		outsidePressEvent() {
			if (store.context.internalBackdropRef.current || store.context.backdropRef.current) return "intentional";
			return {
				mouse: modal === "trap-focus" ? "sloppy" : "intentional",
				touch: "sloppy"
			};
		},
		outsidePress(event) {
			if (!store.context.outsidePressEnabledRef.current) return false;
			if ("button" in event && event.button !== 0) return false;
			if ("touches" in event && event.touches.length !== 1) return false;
			const target = getTarget(event);
			if (isTopmost && !disablePointerDismissal) {
				const eventTarget = target;
				if (modal) return store.context.internalBackdropRef.current || store.context.backdropRef.current ? store.context.internalBackdropRef.current === eventTarget || store.context.backdropRef.current === eventTarget || contains(eventTarget, popupElement) && !eventTarget?.hasAttribute("data-base-ui-portal") : true;
				return true;
			}
			return false;
		},
		escapeKey: isTopmost
	});
	useScrollLock(open && modal === true, popupElement);
	const { getReferenceProps, getFloatingProps, getTriggerProps } = useInteractions([role, dismiss]);
	store.useContextCallback("onNestedDialogOpen", (ownChildrenCount) => {
		setOwnNestedOpenDialogs(ownChildrenCount + 1);
	});
	store.useContextCallback("onNestedDialogClose", () => {
		setOwnNestedOpenDialogs(0);
	});
	React$1.useEffect(() => {
		if (parentContext?.onNestedDialogOpen && open) parentContext.onNestedDialogOpen(ownNestedOpenDialogs);
		if (parentContext?.onNestedDialogClose && !open) parentContext.onNestedDialogClose();
		return () => {
			if (parentContext?.onNestedDialogClose && open) parentContext.onNestedDialogClose();
		};
	}, [
		open,
		parentContext,
		ownNestedOpenDialogs
	]);
	const activeTriggerProps = React$1.useMemo(() => getReferenceProps(triggerProps), [getReferenceProps, triggerProps]);
	const inactiveTriggerProps = React$1.useMemo(() => getTriggerProps(triggerProps), [getTriggerProps, triggerProps]);
	const popupProps = React$1.useMemo(() => getFloatingProps(), [getFloatingProps]);
	store.useSyncedValues({
		openMethod,
		activeTriggerProps,
		inactiveTriggerProps,
		popupProps,
		floatingRootContext,
		nestedOpenDialogCount: ownNestedOpenDialogs
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js
var DialogRootContext = /* @__PURE__ */ React$1.createContext(void 0);
function useDialogRootContext(optional) {
	const dialogRootContext = React$1.useContext(DialogRootContext);
	if (optional === false && dialogRootContext === void 0) throw new Error(formatErrorMessage(27));
	return dialogRootContext;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/store/DialogStore.js
var selectors = {
	...popupStoreSelectors,
	modal: createSelector((state) => state.modal),
	nested: createSelector((state) => state.nested),
	nestedOpenDialogCount: createSelector((state) => state.nestedOpenDialogCount),
	disablePointerDismissal: createSelector((state) => state.disablePointerDismissal),
	openMethod: createSelector((state) => state.openMethod),
	descriptionElementId: createSelector((state) => state.descriptionElementId),
	titleElementId: createSelector((state) => state.titleElementId),
	viewportElement: createSelector((state) => state.viewportElement),
	role: createSelector((state) => state.role)
};
var DialogStore = class extends ReactStore {
	constructor(initialState) {
		super(createInitialState(initialState), {
			popupRef: /* @__PURE__ */ React$1.createRef(),
			backdropRef: /* @__PURE__ */ React$1.createRef(),
			internalBackdropRef: /* @__PURE__ */ React$1.createRef(),
			outsidePressEnabledRef: { current: true },
			triggerElements: new PopupTriggerMap(),
			onOpenChange: void 0,
			onOpenChangeComplete: void 0
		}, selectors);
	}
	setOpen = (nextOpen, eventDetails) => {
		eventDetails.preventUnmountOnClose = () => {
			this.set("preventUnmountingOnClose", true);
		};
		if (!nextOpen && eventDetails.trigger == null && this.state.activeTriggerId != null) eventDetails.trigger = this.state.activeTriggerElement ?? void 0;
		this.context.onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		const details = {
			open: nextOpen,
			nativeEvent: eventDetails.event,
			reason: eventDetails.reason,
			nested: this.state.nested
		};
		this.state.floatingRootContext.context.events?.emit("openchange", details);
		const updatedState = { open: nextOpen };
		const newTriggerId = eventDetails.trigger?.id ?? null;
		if (newTriggerId || nextOpen) {
			updatedState.activeTriggerId = newTriggerId;
			updatedState.activeTriggerElement = eventDetails.trigger ?? null;
		}
		this.update(updatedState);
	};
};
function createInitialState(initialState = {}) {
	return {
		...createInitialPopupStoreState(),
		modal: true,
		disablePointerDismissal: false,
		popupElement: null,
		viewportElement: null,
		descriptionElementId: void 0,
		titleElementId: void 0,
		openMethod: null,
		nested: false,
		nestedOpenDialogCount: 0,
		role: "dialog",
		...initialState
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/backdrop/DialogBackdrop.js
var stateAttributesMapping$1 = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* An overlay displayed beneath the popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogBackdrop = /* @__PURE__ */ React$1.forwardRef(function DialogBackdrop(componentProps, forwardedRef) {
	const { render, className, forceRender = false, ...elementProps } = componentProps;
	const { store } = useDialogRootContext();
	const open = store.useState("open");
	const nested = store.useState("nested");
	const mounted = store.useState("mounted");
	return useRenderElement("div", componentProps, {
		state: {
			open,
			transitionStatus: store.useState("transitionStatus")
		},
		ref: [store.context.backdropRef, forwardedRef],
		stateAttributesMapping: stateAttributesMapping$1,
		props: [{
			role: "presentation",
			hidden: !mounted,
			style: {
				userSelect: "none",
				WebkitUserSelect: "none"
			}
		}, elementProps],
		enabled: forceRender || !nested
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/close/DialogClose.js
/**
* A button that closes the dialog.
* Renders a `<button>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogClose = /* @__PURE__ */ React$1.forwardRef(function DialogClose(componentProps, forwardedRef) {
	const { render, className, disabled = false, nativeButton = true, ...elementProps } = componentProps;
	const { store } = useDialogRootContext();
	const open = store.useState("open");
	function handleClick(event) {
		if (open) store.setOpen(false, createChangeEventDetails(closePress, event.nativeEvent));
	}
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	return useRenderElement("button", componentProps, {
		state: { disabled },
		ref: [forwardedRef, buttonRef],
		props: [
			{ onClick: handleClick },
			elementProps,
			getButtonProps
		]
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/description/DialogDescription.js
/**
* A paragraph with additional information about the dialog.
* Renders a `<p>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogDescription = /* @__PURE__ */ React$1.forwardRef(function DialogDescription(componentProps, forwardedRef) {
	const { render, className, id: idProp, ...elementProps } = componentProps;
	const { store } = useDialogRootContext();
	const id = useBaseUiId(idProp);
	store.useSyncedValueWithCleanup("descriptionElementId", id);
	return useRenderElement("p", componentProps, {
		ref: forwardedRef,
		props: [{ id }, elementProps]
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupCssVars.js
var DialogPopupCssVars = /* @__PURE__ */ function(DialogPopupCssVars) {
	/**
	* Indicates how many dialogs are nested within.
	* @type {number}
	*/
	DialogPopupCssVars["nestedDialogs"] = "--nested-dialogs";
	return DialogPopupCssVars;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupDataAttributes.js
var DialogPopupDataAttributes = function(DialogPopupDataAttributes) {
	/**
	* Present when the dialog is open.
	*/
	DialogPopupDataAttributes[DialogPopupDataAttributes["open"] = CommonPopupDataAttributes.open] = "open";
	/**
	* Present when the dialog is closed.
	*/
	DialogPopupDataAttributes[DialogPopupDataAttributes["closed"] = CommonPopupDataAttributes.closed] = "closed";
	/**
	* Present when the dialog is animating in.
	*/
	DialogPopupDataAttributes[DialogPopupDataAttributes["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
	/**
	* Present when the dialog is animating out.
	*/
	DialogPopupDataAttributes[DialogPopupDataAttributes["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
	/**
	* Present when the dialog is nested within another dialog.
	*/
	DialogPopupDataAttributes["nested"] = "data-nested";
	/**
	* Present when the dialog has other open dialogs nested within it.
	*/
	DialogPopupDataAttributes["nestedDialogOpen"] = "data-nested-dialog-open";
	return DialogPopupDataAttributes;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js
var DialogPortalContext = /* @__PURE__ */ React$1.createContext(void 0);
function useDialogPortalContext() {
	const value = React$1.useContext(DialogPortalContext);
	if (value === void 0) throw new Error(formatErrorMessage(26));
	return value;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/popup/DialogPopup.js
var stateAttributesMapping = {
	...popupStateMapping,
	...transitionStatusMapping,
	nestedDialogOpen(value) {
		return value ? { [DialogPopupDataAttributes.nestedDialogOpen]: "" } : null;
	}
};
/**
* A container for the dialog contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogPopup = /* @__PURE__ */ React$1.forwardRef(function DialogPopup(componentProps, forwardedRef) {
	const { className, finalFocus, initialFocus, render, ...elementProps } = componentProps;
	const { store } = useDialogRootContext();
	const descriptionElementId = store.useState("descriptionElementId");
	const disablePointerDismissal = store.useState("disablePointerDismissal");
	const floatingRootContext = store.useState("floatingRootContext");
	const rootPopupProps = store.useState("popupProps");
	const modal = store.useState("modal");
	const mounted = store.useState("mounted");
	const nested = store.useState("nested");
	const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
	const open = store.useState("open");
	const openMethod = store.useState("openMethod");
	const titleElementId = store.useState("titleElementId");
	const transitionStatus = store.useState("transitionStatus");
	const role = store.useState("role");
	useDialogPortalContext();
	useOpenChangeComplete({
		open,
		ref: store.context.popupRef,
		onComplete() {
			if (open) store.context.onOpenChangeComplete?.(true);
		}
	});
	function defaultInitialFocus(interactionType) {
		if (interactionType === "touch") return store.context.popupRef.current;
		return true;
	}
	const resolvedInitialFocus = initialFocus === void 0 ? defaultInitialFocus : initialFocus;
	const element = useRenderElement("div", componentProps, {
		state: {
			open,
			nested,
			transitionStatus,
			nestedDialogOpen: nestedOpenDialogCount > 0
		},
		props: [
			rootPopupProps,
			{
				"aria-labelledby": titleElementId ?? void 0,
				"aria-describedby": descriptionElementId ?? void 0,
				role,
				tabIndex: -1,
				hidden: !mounted,
				onKeyDown(event) {
					if (COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
				},
				style: { [DialogPopupCssVars.nestedDialogs]: nestedOpenDialogCount }
			},
			elementProps
		],
		ref: [
			forwardedRef,
			store.context.popupRef,
			store.useStateSetter("popupElement")
		],
		stateAttributesMapping
	});
	return /* @__PURE__ */ jsx(FloatingFocusManager, {
		context: floatingRootContext,
		openInteractionType: openMethod,
		disabled: !mounted,
		closeOnFocusOut: !disablePointerDismissal,
		initialFocus: resolvedInitialFocus,
		returnFocus: finalFocus,
		modal: modal !== false,
		restoreFocus: "popup",
		children: element
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/portal/DialogPortal.js
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogPortal = /* @__PURE__ */ React$1.forwardRef(function DialogPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	const { store } = useDialogRootContext();
	const mounted = store.useState("mounted");
	const modal = store.useState("modal");
	const open = store.useState("open");
	if (!(mounted || keepMounted)) return null;
	return /* @__PURE__ */ jsx(DialogPortalContext.Provider, {
		value: keepMounted,
		children: /* @__PURE__ */ jsxs(FloatingPortal, {
			ref: forwardedRef,
			...portalProps,
			children: [mounted && modal === true && /* @__PURE__ */ jsx(InternalBackdrop, {
				ref: store.context.internalBackdropRef,
				inert: inertValue(!open)
			}), props.children]
		})
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/title/DialogTitle.js
/**
* A heading that labels the dialog.
* Renders an `<h2>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogTitle = /* @__PURE__ */ React$1.forwardRef(function DialogTitle(componentProps, forwardedRef) {
	const { render, className, id: idProp, ...elementProps } = componentProps;
	const { store } = useDialogRootContext();
	const id = useBaseUiId(idProp);
	store.useSyncedValueWithCleanup("titleElementId", id);
	return useRenderElement("h2", componentProps, {
		ref: forwardedRef,
		props: [{ id }, elementProps]
	});
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/trigger/DialogTrigger.js
/**
* A button that opens the dialog.
* Renders a `<button>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogTrigger = /* @__PURE__ */ React$1.forwardRef(function DialogTrigger(componentProps, forwardedRef) {
	const { render, className, disabled = false, nativeButton = true, id: idProp, payload, handle, ...elementProps } = componentProps;
	const dialogRootContext = useDialogRootContext(true);
	const store = handle?.store ?? dialogRootContext?.store;
	if (!store) throw new Error(formatErrorMessage(79));
	const thisTriggerId = useBaseUiId(idProp);
	const floatingContext = store.useState("floatingRootContext");
	const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
	const triggerElementRef = React$1.useRef(null);
	const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, { payload });
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const localInteractionProps = useInteractions([useClick(floatingContext, { enabled: floatingContext != null })]);
	const state = {
		disabled,
		open: isOpenedByThisTrigger
	};
	const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
	return useRenderElement("button", componentProps, {
		state,
		ref: [
			buttonRef,
			forwardedRef,
			registerTrigger,
			triggerElementRef
		],
		props: [
			localInteractionProps.getReferenceProps(),
			rootTriggerProps,
			{
				[CLICK_TRIGGER_IDENTIFIER]: "",
				id: thisTriggerId
			},
			elementProps,
			getButtonProps
		],
		stateAttributesMapping: triggerOpenStateMapping
	});
});
//#endregion
export { DialogDescription as a, DialogStore as c, useDialogRoot as d, DialogPopup as i, DialogRootContext as l, DialogTitle as n, DialogClose as o, DialogPortal as r, DialogBackdrop as s, DialogTrigger as t, useDialogRootContext as u };
