import { t as cn } from "./classnames-LHQnX9lX.js";
import { x as useRefWithInit } from "./useRenderElement-BTEjG3-d.js";
import { t as useOnFirstRender } from "./useOnFirstRender-DefDNImt.js";
import { a as DialogDescription$1, c as DialogStore, d as useDialogRoot, i as DialogPopup, l as DialogRootContext, n as DialogTitle$1, o as DialogClose$1, r as DialogPortal$1, s as DialogBackdrop, u as useDialogRootContext } from "./DialogTrigger-Dyu5kpj3.js";
import * as React$1 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/dialog/root/DialogRoot.js
/**
* Groups all parts of the dialog.
* Doesn’t render its own HTML element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
function DialogRoot(props) {
	const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, disablePointerDismissal = false, modal = true, actionsRef, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
	const parentDialogRootContext = useDialogRootContext(true);
	const nested = Boolean(parentDialogRootContext);
	const store = useRefWithInit(() => {
		return handle?.store ?? new DialogStore({
			open: defaultOpen,
			openProp,
			activeTriggerId: defaultTriggerIdProp,
			triggerIdProp,
			modal,
			disablePointerDismissal,
			nested
		});
	}).current;
	useOnFirstRender(() => {
		if (openProp === void 0 && store.state.open === false && defaultOpen === true) store.update({
			open: true,
			activeTriggerId: defaultTriggerIdProp
		});
	});
	store.useControlledProp("openProp", openProp);
	store.useControlledProp("triggerIdProp", triggerIdProp);
	store.useSyncedValues({
		disablePointerDismissal,
		nested,
		modal
	});
	store.useContextCallback("onOpenChange", onOpenChange);
	store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
	const payload = store.useState("payload");
	useDialogRoot({
		store,
		actionsRef,
		parentContext: parentDialogRootContext?.store.context,
		onOpenChange,
		triggerIdProp
	});
	const contextValue = React$1.useMemo(() => ({ store }), [store]);
	return /* @__PURE__ */ jsx(DialogRootContext.Provider, {
		value: contextValue,
		children: typeof children === "function" ? children({ payload }) : children
	});
}
//#endregion
//#region app/components/base/ui/dialog/index.tsx
var Dialog = DialogRoot;
var DialogTitle = DialogTitle$1;
var DialogDescription = DialogDescription$1;
var DialogPortal = DialogPortal$1;
function DialogCloseButton({ className, "aria-label": ariaLabel = "Close", ...props }) {
	return /* @__PURE__ */ jsx(DialogClose$1, {
		"aria-label": ariaLabel,
		...props,
		className: cn("absolute right-6 top-6 z-10 flex h-5 w-5 cursor-pointer items-center justify-center rounded-2xl hover:bg-state-base-hover focus-visible:bg-state-base-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-components-input-border-hover disabled:cursor-not-allowed disabled:opacity-50", className),
		children: /* @__PURE__ */ jsx("span", {
			"aria-hidden": "true",
			className: "i-ri-close-line h-4 w-4 text-text-tertiary"
		})
	});
}
function DialogContent({ children, className, overlayClassName, backdropProps }) {
	return /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogBackdrop, {
		...backdropProps,
		className: cn("fixed inset-0 z-[1002] bg-background-overlay", "transition-opacity duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none", overlayClassName, backdropProps?.className)
	}), /* @__PURE__ */ jsx(DialogPopup, {
		className: cn("fixed left-1/2 top-1/2 z-[1002] max-h-[80dvh] w-[480px] max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg p-6 shadow-xl", "transition-[transform,scale,opacity] duration-150 data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none", className),
		children
	})] });
}
//#endregion
export { DialogPortal as a, DialogDescription as i, DialogCloseButton as n, DialogTitle as o, DialogContent as r, Dialog as t };
