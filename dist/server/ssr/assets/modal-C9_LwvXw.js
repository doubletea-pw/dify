import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { n as PortalToFollowElemContent, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { memo } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/modal/modal.tsx
var Modal = ({ onClose, size = "sm", title, subTitle, children, confirmButtonText, onConfirm, cancelButtonText, onCancel, showExtraButton, extraButtonVariant = "warning", extraButtonText, onExtraButtonClick, footerSlot, bottomSlot, disabled, containerClassName, wrapperClassName, clickOutsideNotClose = false }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx(PortalToFollowElem, {
		open: true,
		children: /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: cn("z-[9998] flex h-full w-full items-center justify-center bg-background-overlay", wrapperClassName),
			onClick: clickOutsideNotClose ? noop : onClose,
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("flex max-h-[80%] flex-col rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-xs", size === "sm" && "w-[480px]", size === "md" && "w-[640px]", containerClassName),
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "relative shrink-0 p-6 pb-3 pr-14 text-text-primary title-2xl-semi-bold",
						children: [
							title,
							subTitle && /* @__PURE__ */ jsx("div", {
								className: "mt-1 text-text-tertiary system-xs-regular",
								children: subTitle
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute right-5 top-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg",
								onClick: onClose,
								children: /* @__PURE__ */ jsx("span", {
									className: "i-ri-close-line h-5 w-5 text-text-tertiary",
									"data-testid": "close-icon"
								})
							})
						]
					}),
					!!children && /* @__PURE__ */ jsx("div", {
						className: "min-h-0 flex-1 overflow-y-auto px-6 py-3",
						children
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex shrink-0 justify-between p-6 pt-5",
						children: [/* @__PURE__ */ jsx("div", { children: footerSlot }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center",
							children: [
								showExtraButton && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Button, {
									variant: extraButtonVariant,
									onClick: onExtraButtonClick,
									disabled,
									children: extraButtonText || t("operation.remove", { ns: "common" })
								}), /* @__PURE__ */ jsx("div", { className: "mx-3 h-4 w-[1px] bg-divider-regular" })] }),
								/* @__PURE__ */ jsx(Button, {
									onClick: onCancel,
									disabled,
									children: cancelButtonText || t("operation.cancel", { ns: "common" })
								}),
								/* @__PURE__ */ jsx(Button, {
									className: "ml-2",
									variant: "primary",
									onClick: onConfirm,
									disabled,
									children: confirmButtonText || t("operation.save", { ns: "common" })
								})
							]
						})]
					}),
					!!bottomSlot && /* @__PURE__ */ jsx("div", {
						className: "shrink-0",
						children: bottomSlot
					})
				]
			})
		})
	});
};
var modal_default = memo(Modal);
//#endregion
export { modal_default as t };
