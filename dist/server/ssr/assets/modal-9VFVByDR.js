import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { a as Ke, i as ze, n as Qe, o as Oe, r as ht } from "./dialog-DCCIZLOh.js";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/modal/index.tsx
/**
* @deprecated Use `@/app/components/base/ui/dialog` instead.
* This component will be removed after migration is complete.
* See: https://github.com/langgenius/dify/issues/32767
*/
function Modal({ className, wrapperClassName, containerClassName, isShow, onClose = noop, title, description, children, closable = false, overflowVisible = false, highPriority = false, overlayOpacity = false, clickOutsideNotClose = false }) {
	return /* @__PURE__ */ jsx(Ke, {
		appear: true,
		show: isShow,
		as: Fragment,
		children: /* @__PURE__ */ jsxs(ht, {
			as: "div",
			className: cn("relative", highPriority ? "z-[1100]" : "z-[60]", wrapperClassName),
			onClose: clickOutsideNotClose ? noop : onClose,
			children: [/* @__PURE__ */ jsx(Oe, { children: /* @__PURE__ */ jsx("div", { className: cn("fixed inset-0", overlayOpacity ? "bg-workflow-canvas-canvas-overlay" : "bg-background-overlay", "duration-300 ease-in data-[closed]:opacity-0", "data-[enter]:opacity-100", "data-[leave]:opacity-0") }) }), /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 overflow-y-auto",
				onClick: (e) => {
					e.preventDefault();
					e.stopPropagation();
				},
				children: /* @__PURE__ */ jsx("div", {
					className: cn("flex min-h-full items-center justify-center p-4 text-center", containerClassName),
					children: /* @__PURE__ */ jsx(Oe, { children: /* @__PURE__ */ jsxs(ze, {
						className: cn("relative w-full max-w-[480px] rounded-2xl bg-components-panel-bg p-6 text-left align-middle shadow-xl transition-all", overflowVisible ? "overflow-visible" : "overflow-hidden", "duration-100 ease-in data-[closed]:scale-95 data-[closed]:opacity-0", "data-[enter]:scale-100 data-[enter]:opacity-100", "data-[enter]:scale-95 data-[leave]:opacity-0", className),
						children: [
							!!title && /* @__PURE__ */ jsx(Qe, {
								as: "h3",
								className: "text-text-primary title-2xl-semi-bold",
								children: title
							}),
							!!description && /* @__PURE__ */ jsx("div", {
								className: "mt-2 text-text-secondary body-md-regular",
								children: description
							}),
							closable && /* @__PURE__ */ jsx("div", {
								className: "absolute right-6 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-2xl hover:cursor-pointer hover:bg-state-base-hover",
								children: /* @__PURE__ */ jsx("span", {
									className: "i-ri-close-line h-4 w-4 text-text-tertiary",
									onClick: (e) => {
										e.stopPropagation();
										onClose();
									},
									"data-testid": "modal-close-button"
								})
							}),
							children
						]
					}) })
				})
			})]
		})
	});
}
//#endregion
export { Modal as t };
