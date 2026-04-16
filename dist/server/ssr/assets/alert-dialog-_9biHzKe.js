import { t as cn } from "./classnames-LHQnX9lX.js";
import { x as useRefWithInit } from "./useRenderElement-BTEjG3-d.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { a as DialogDescription, c as DialogStore, d as useDialogRoot, i as DialogPopup, l as DialogRootContext, n as DialogTitle, o as DialogClose, r as DialogPortal, s as DialogBackdrop, u as useDialogRootContext } from "./DialogTrigger-Dyu5kpj3.js";
import * as React$1 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/@base-ui+react@1.3.0_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@base-ui/react/esm/alert-dialog/root/AlertDialogRoot.js
/**
* Groups all parts of the alert dialog.
* Doesn’t render its own HTML element.
*
* Documentation: [Base UI Alert Dialog](https://base-ui.com/react/components/alert-dialog)
*/
function AlertDialogRoot(props) {
	const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, actionsRef, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
	const parentDialogRootContext = useDialogRootContext();
	const nested = Boolean(parentDialogRootContext);
	const store = useRefWithInit(() => {
		return handle?.store ?? new DialogStore({
			open: defaultOpen,
			openProp,
			activeTriggerId: defaultTriggerIdProp,
			triggerIdProp,
			modal: true,
			disablePointerDismissal: true,
			nested,
			role: "alertdialog"
		});
	}).current;
	store.useControlledProp("openProp", openProp);
	store.useControlledProp("triggerIdProp", triggerIdProp);
	store.useSyncedValue("nested", nested);
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
//#region app/components/base/ui/alert-dialog/index.tsx
var AlertDialog = AlertDialogRoot;
var AlertDialogTitle = DialogTitle;
var AlertDialogDescription = DialogDescription;
function AlertDialogContent({ children, className, overlayClassName, popupProps, backdropProps }) {
	return /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogBackdrop, {
		...backdropProps,
		className: cn("fixed inset-0 z-[1002] bg-background-overlay", "transition-opacity duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none", overlayClassName)
	}), /* @__PURE__ */ jsx(DialogPopup, {
		...popupProps,
		className: cn("fixed left-1/2 top-1/2 z-[1002] max-h-[calc(100vh-2rem)] w-[480px] max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-lg", "transition-[transform,scale,opacity] duration-150 data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none", className),
		children
	})] });
}
function AlertDialogActions({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex items-start justify-end gap-2 self-stretch p-6", className),
		...props
	});
}
function AlertDialogCancelButton({ children, closeProps, ...buttonProps }) {
	return /* @__PURE__ */ jsx(DialogClose, {
		...closeProps,
		render: /* @__PURE__ */ jsx(Button, { ...buttonProps }),
		children
	});
}
function AlertDialogConfirmButton({ variant = "primary", destructive = true, ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		variant,
		destructive,
		...props
	});
}
//#endregion
export { AlertDialogContent as a, AlertDialogConfirmButton as i, AlertDialogActions as n, AlertDialogDescription as o, AlertDialogCancelButton as r, AlertDialogTitle as s, AlertDialog as t };
