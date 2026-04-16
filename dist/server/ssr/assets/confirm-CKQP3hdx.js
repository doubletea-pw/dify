import { m as __exportAll } from "../index.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import * as React$1 from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/confirm/index.tsx
/**
* @deprecated Use `@/app/components/base/ui/alert-dialog` instead.
* See issue #32767 for migration details.
*/
var confirm_exports = /* @__PURE__ */ __exportAll({ default: () => confirm_default });
function Confirm({ isShow, type = "warning", title, content, confirmText, cancelText, onConfirm, onCancel, showConfirm = true, showCancel = true, isLoading = false, isDisabled = false, maskClosable = true, confirmInputLabel, confirmInputPlaceholder, confirmInputValue = "", onConfirmInputChange, confirmInputMatchValue }) {
	const { t } = useTranslation();
	const dialogRef = useRef(null);
	const titleRef = useRef(null);
	const [isVisible, setIsVisible] = useState(isShow);
	const [isTitleTruncated, setIsTitleTruncated] = useState(false);
	const confirmTxt = confirmText || `${t("operation.confirm", { ns: "common" })}`;
	const cancelTxt = cancelText || `${t("operation.cancel", { ns: "common" })}`;
	const isConfirmDisabled = isDisabled || (confirmInputMatchValue ? confirmInputValue !== confirmInputMatchValue : false);
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") onCancel();
			if (event.key === "Enter" && isShow && !isConfirmDisabled) {
				event.preventDefault();
				onConfirm();
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [
		onCancel,
		onConfirm,
		isShow,
		isConfirmDisabled
	]);
	const handleClickOutside = (event) => {
		if (maskClosable && dialogRef.current && !dialogRef.current.contains(event.target)) onCancel();
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [maskClosable]);
	useEffect(() => {
		if (isShow) setIsVisible(true);
		else {
			const timer = setTimeout(() => setIsVisible(false), 200);
			return () => clearTimeout(timer);
		}
	}, [isShow]);
	useEffect(() => {
		if (titleRef.current) setIsTitleTruncated(titleRef.current.scrollWidth > titleRef.current.clientWidth);
	}, [title, isVisible]);
	if (!isVisible) return null;
	return createPortal(/* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[10000000] flex items-center justify-center bg-background-overlay",
		onClick: (e) => {
			e.preventDefault();
			e.stopPropagation();
		},
		"data-testid": "confirm-overlay",
		children: /* @__PURE__ */ jsx("div", {
			ref: dialogRef,
			className: "relative w-full max-w-[480px] overflow-hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "shadows-shadow-lg flex max-w-full flex-col items-start rounded-2xl border-[0.5px] border-solid border-components-panel-border bg-components-panel-bg",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-start gap-2 self-stretch pb-4 pl-6 pr-6 pt-6",
					children: [
						/* @__PURE__ */ jsx(tooltip_default, {
							popupContent: title,
							disabled: !isTitleTruncated,
							portalContentClassName: "!z-[10000001]",
							asChild: false,
							triggerClassName: "w-full",
							children: /* @__PURE__ */ jsx("div", {
								ref: titleRef,
								className: "title-2xl-semi-bold w-full truncate text-text-primary",
								children: title
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "w-full whitespace-pre-wrap break-words text-text-tertiary system-md-regular",
							children: content
						}),
						confirmInputLabel && /* @__PURE__ */ jsxs("div", {
							className: "mt-2",
							children: [/* @__PURE__ */ jsx("label", {
								className: "mb-1 block text-text-secondary system-sm-regular",
								children: confirmInputLabel
							}), /* @__PURE__ */ jsx("input", {
								type: "text",
								className: "border-components-input-border bg-components-input-bg focus:border-components-input-border-focus focus:ring-components-input-border-focus h-9 w-full rounded-lg border px-3 text-sm text-text-primary placeholder:text-text-quaternary focus:outline-none focus:ring-1",
								placeholder: confirmInputPlaceholder,
								value: confirmInputValue,
								onChange: (e) => onConfirmInputChange?.(e.target.value)
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-end gap-2 self-stretch p-6",
					children: [showCancel && /* @__PURE__ */ jsx(Button, {
						onClick: onCancel,
						children: cancelTxt
					}), showConfirm && /* @__PURE__ */ jsx(Button, {
						variant: "primary",
						destructive: type !== "info",
						loading: isLoading,
						disabled: isConfirmDisabled,
						onClick: onConfirm,
						children: confirmTxt
					})]
				})]
			})
		})
	}), document.body);
}
var confirm_default = React$1.memo(Confirm);
//#endregion
export { confirm_exports as n, confirm_default as t };
