import { n as useContext$1, t as createContext$1 } from "./dist-mUzjAi-W.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { t as ActionButton } from "./action-button-BK9WUMzU.js";
import * as React$1 from "react";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
//#region app/components/base/toast/context.ts
/** @deprecated Use `@/app/components/base/ui/toast` instead. See issue #32811. */
var ToastContext = createContext$1({});
/** @deprecated Use `@/app/components/base/ui/toast` instead. See issue #32811. */
var useToastContext = () => useContext$1(ToastContext);
//#endregion
//#region app/components/base/toast/index.tsx
var Toast = ({ type = "info", size = "md", message, children, className, customComponent }) => {
	const { close } = useToastContext();
	if (typeof message !== "string") return null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn(className, "fixed z-[1101] mx-8 my-4 w-[360px] grow overflow-hidden rounded-xl", "border border-components-panel-border-subtle bg-components-panel-bg-blur shadow-sm", "top-0", "right-0", size === "md" ? "p-3" : "p-2", className),
		children: [/* @__PURE__ */ jsx("div", { className: cn("absolute inset-0 -z-10 opacity-40", type === "success" && "bg-toast-success-bg", type === "warning" && "bg-toast-warning-bg", type === "error" && "bg-toast-error-bg", type === "info" && "bg-toast-info-bg") }), /* @__PURE__ */ jsxs("div", {
			className: cn("flex", size === "md" ? "gap-1" : "gap-0.5"),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: cn("flex items-center justify-center", size === "md" ? "p-0.5" : "p-1"),
					children: [
						type === "success" && /* @__PURE__ */ jsx("span", {
							className: cn("i-ri-checkbox-circle-fill", "text-text-success", size === "md" ? "h-5 w-5" : "h-4 w-4"),
							"data-testid": "toast-icon-success",
							"aria-hidden": "true"
						}),
						type === "error" && /* @__PURE__ */ jsx("span", {
							className: cn("i-ri-error-warning-fill", "text-text-destructive", size === "md" ? "h-5 w-5" : "h-4 w-4"),
							"data-testid": "toast-icon-error",
							"aria-hidden": "true"
						}),
						type === "warning" && /* @__PURE__ */ jsx("span", {
							className: cn("i-ri-alert-fill", "text-text-warning-secondary", size === "md" ? "h-5 w-5" : "h-4 w-4"),
							"data-testid": "toast-icon-warning",
							"aria-hidden": "true"
						}),
						type === "info" && /* @__PURE__ */ jsx("span", {
							className: cn("i-ri-information-2-fill", "text-text-accent", size === "md" ? "h-5 w-5" : "h-4 w-4"),
							"data-testid": "toast-icon-info",
							"aria-hidden": "true"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: cn("flex grow flex-col items-start gap-1 py-1", size === "md" ? "px-1" : "px-0.5"),
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-text-primary system-sm-semibold [word-break:break-word]",
							children: message
						}), customComponent]
					}), !!children && /* @__PURE__ */ jsx("div", {
						className: "text-text-secondary system-xs-regular",
						children
					})]
				}),
				close && /* @__PURE__ */ jsx(ActionButton, {
					"data-testid": "toast-close-button",
					className: "z-[1000]",
					onClick: close,
					children: /* @__PURE__ */ jsx("span", { className: "i-ri-close-line h-4 w-4 shrink-0 text-text-tertiary" })
				})
			]
		})]
	});
};
/** @deprecated Use `@/app/components/base/ui/toast` instead. See issue #32811. */
var ToastProvider = ({ children }) => {
	const [params, setParams] = React$1.useState({
		type: "info",
		message: "Toast message",
		duration: 6e3
	});
	const defaultDuring = params.type === "success" || params.type === "info" ? 3e3 : 6e3;
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		if (mounted) setTimeout(() => {
			setMounted(false);
		}, params.duration || defaultDuring);
	}, [
		defaultDuring,
		mounted,
		params.duration
	]);
	return /* @__PURE__ */ jsxs(ToastContext.Provider, {
		value: {
			notify: (props) => {
				setMounted(true);
				setParams(props);
			},
			close: () => setMounted(false)
		},
		children: [mounted && /* @__PURE__ */ jsx(Toast, { ...params }), children]
	});
};
Toast.notify = ({ type, size = "md", message, duration, className, customComponent, onClose }) => {
	const defaultDuring = type === "success" || type === "info" ? 3e3 : 6e3;
	const toastHandler = {};
	if (typeof window === "object") {
		const holder = document.createElement("div");
		const root = createRoot(holder);
		toastHandler.clear = () => {
			if (holder) {
				root.unmount();
				holder.remove();
			}
			onClose?.();
		};
		root.render(/* @__PURE__ */ jsx(ToastContext.Provider, {
			value: {
				notify: noop,
				close: () => {
					if (holder) {
						root.unmount();
						holder.remove();
					}
					onClose?.();
				}
			},
			children: /* @__PURE__ */ jsx(Toast, {
				type,
				size,
				message,
				duration,
				className,
				customComponent
			})
		}));
		document.body.appendChild(holder);
		const d = duration ?? defaultDuring;
		if (d > 0) setTimeout(toastHandler.clear, d);
	}
	return toastHandler;
};
//#endregion
export { useToastContext as i, ToastProvider as n, ToastContext as r, Toast as t };
