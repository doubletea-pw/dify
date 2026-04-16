import { li as wU } from "./react-D5xHzNYo.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { a as Ke, i as ze, o as Oe, r as ht } from "./dialog-DCCIZLOh.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/fullscreen-modal/index.tsx
function FullScreenModal({ className, wrapperClassName, open, onClose = noop, children, closable = false, overflowVisible = false }) {
	return /* @__PURE__ */ jsx(Ke, {
		show: open,
		appear: true,
		children: /* @__PURE__ */ jsxs(ht, {
			as: "div",
			className: cn("modal-dialog", wrapperClassName),
			onClose,
			children: [/* @__PURE__ */ jsx(Oe, { children: /* @__PURE__ */ jsx("div", { className: cn("fixed inset-0 bg-background-overlay-backdrop backdrop-blur-[6px]", "duration-300 ease-in data-[closed]:opacity-0", "data-[enter]:opacity-100", "data-[leave]:opacity-0") }) }), /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 h-screen w-screen p-4",
				onClick: (e) => {
					e.preventDefault();
					e.stopPropagation();
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "relative h-full w-full rounded-2xl border border-effects-highlight bg-background-default-subtle",
					children: /* @__PURE__ */ jsx(Oe, { children: /* @__PURE__ */ jsxs(ze, {
						className: cn("h-full", overflowVisible ? "overflow-visible" : "overflow-hidden", "duration-100 ease-in data-[closed]:scale-95 data-[closed]:opacity-0", "data-[enter]:scale-100 data-[enter]:opacity-100", "data-[enter]:scale-95 data-[leave]:opacity-0", className),
						children: [closable && /* @__PURE__ */ jsx("div", {
							className: "absolute right-3 top-3 z-50 flex h-9 w-9 cursor-pointer items-center justify-center\n                  rounded-[10px] bg-components-button-tertiary-bg hover:bg-components-button-tertiary-bg-hover",
							onClick: (e) => {
								e.stopPropagation();
								onClose();
							},
							children: /* @__PURE__ */ jsx(wU, { className: "h-3.5 w-3.5 text-components-button-tertiary-text" })
						}), children]
					}) })
				})
			})]
		})
	});
}
//#endregion
export { FullScreenModal as t };
