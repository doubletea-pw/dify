import { Xr as u7, p as B7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as cva } from "./dist-1O6DB-eK.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { t as l } from "./use-clipboard-BxDxJiR7.js";
import { t as ActionButton } from "./action-button-BK9WUMzU.js";
import * as React$1 from "react";
import { useCallback } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var style_module_default = {
	copyIcon: "_copyIcon_1sb78_1",
	copied: "_copied_1sb78_13"
};
//#endregion
//#region app/components/base/copy-feedback/index.tsx
var prefixEmbedded = "overview.appInfo.embedded";
var CopyFeedback = ({ content }) => {
	const { t } = useTranslation();
	const { copied, copy, reset } = l();
	return /* @__PURE__ */ jsx(tooltip_default, {
		popupContent: (copied ? t(`${prefixEmbedded}.copied`, { ns: "appOverview" }) : t(`${prefixEmbedded}.copy`, { ns: "appOverview" })) || "",
		children: /* @__PURE__ */ jsx(ActionButton, { children: /* @__PURE__ */ jsxs("div", {
			onClick: useCallback(() => {
				copy(content);
			}, [copy, content]),
			onMouseLeave: reset,
			children: [copied && /* @__PURE__ */ jsx(u7, { className: "h-4 w-4" }), !copied && /* @__PURE__ */ jsx(B7, { className: "h-4 w-4" })]
		}) })
	});
};
var CopyFeedbackNew = ({ content, className }) => {
	const { t } = useTranslation();
	const { copied, copy, reset } = l();
	/* v8 ignore next -- i18n test mock always returns a non-empty string; runtime fallback is defensive. -- @preserve */
	const safeText = (copied ? t(`${prefixEmbedded}.copied`, { ns: "appOverview" }) : t(`${prefixEmbedded}.copy`, { ns: "appOverview" })) || "";
	const handleCopy = useCallback(() => {
		copy(content);
	}, [copy, content]);
	return /* @__PURE__ */ jsx(tooltip_default, {
		popupContent: safeText,
		children: /* @__PURE__ */ jsx("div", {
			className: `h-8 w-8 cursor-pointer rounded-lg hover:bg-components-button-ghost-bg-hover ${className ?? ""}`,
			children: /* @__PURE__ */ jsx("div", {
				onClick: handleCopy,
				onMouseLeave: reset,
				className: `h-full w-full ${style_module_default.copyIcon} ${copied ? style_module_default.copied : ""}`
			})
		})
	});
};
//#endregion
//#region app/components/base/input/index.tsx
var inputVariants = cva("", {
	variants: { size: {
		regular: "px-3 system-sm-regular radius-md",
		large: "px-4 system-md-regular radius-lg"
	} },
	defaultVariants: { size: "regular" }
});
var removeLeadingZeros = (value) => value.replace(/^(-?)0+(?=\d)/, "$1");
var Input = React$1.forwardRef(({ size, disabled, destructive, showLeftIcon, showClearIcon, showCopyIcon, onClear, wrapperClassName, className, styleCss, value, placeholder, onChange = noop, onBlur = noop, unit, ...props }, ref) => {
	const { t } = useTranslation();
	const handleNumberChange = (e) => {
		if (value === 0) {
			const formattedValue = removeLeadingZeros(e.target.value);
			if (e.target.value !== formattedValue) e.target.value = formattedValue;
		}
		onChange(e);
	};
	const handleNumberBlur = (e) => {
		const formattedValue = removeLeadingZeros(e.target.value);
		if (e.target.value !== formattedValue) {
			e.target.value = formattedValue;
			onChange({
				...e,
				type: "change",
				target: {
					...e.target,
					value: formattedValue
				}
			});
		}
		onBlur(e);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative w-full", wrapperClassName),
		children: [
			showLeftIcon && /* @__PURE__ */ jsx("span", { className: cn("i-ri-search-line absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-components-input-text-placeholder") }),
			/* @__PURE__ */ jsx("input", {
				ref,
				style: styleCss,
				className: cn("w-full appearance-none border border-transparent bg-components-input-bg-normal py-[7px] text-components-input-text-filled caret-primary-600 outline-none placeholder:text-components-input-text-placeholder hover:border-components-input-border-hover hover:bg-components-input-bg-hover focus:border-components-input-border-active focus:bg-components-input-bg-active focus:shadow-xs", inputVariants({ size }), showLeftIcon && "pl-[26px]", showLeftIcon && size === "large" && "pl-7", showClearIcon && value && "pr-[26px]", showClearIcon && value && size === "large" && "pr-7", (destructive || showCopyIcon) && "pr-[26px]", (destructive || showCopyIcon) && size === "large" && "pr-7", disabled && "cursor-not-allowed border-transparent bg-components-input-bg-disabled text-components-input-text-filled-disabled hover:border-transparent hover:bg-components-input-bg-disabled", destructive && "border-components-input-border-destructive bg-components-input-bg-destructive text-components-input-text-filled hover:border-components-input-border-destructive hover:bg-components-input-bg-destructive focus:border-components-input-border-destructive focus:bg-components-input-bg-destructive", className),
				placeholder: placeholder ?? (showLeftIcon ? t("operation.search", { ns: "common" }) || "" : t("placeholder.input", { ns: "common" }) || ""),
				value,
				onChange: props.type === "number" ? handleNumberChange : onChange,
				onBlur: props.type === "number" ? handleNumberBlur : onBlur,
				disabled,
				...props
			}),
			!!(showClearIcon && value && !disabled && !destructive) && /* @__PURE__ */ jsx("div", {
				className: cn("group absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer p-[1px]"),
				onClick: onClear,
				"data-testid": "input-clear",
				children: /* @__PURE__ */ jsx("span", { className: "i-ri-close-circle-fill h-3.5 w-3.5 cursor-pointer text-text-quaternary group-hover:text-text-tertiary" })
			}),
			destructive && /* @__PURE__ */ jsx("span", { className: "i-ri-error-warning-line absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-text-destructive-secondary" }),
			showCopyIcon && /* @__PURE__ */ jsx("div", {
				className: cn("group absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"),
				children: /* @__PURE__ */ jsx(CopyFeedbackNew, {
					content: String(value ?? ""),
					className: "!h-7 !w-7 hover:bg-transparent"
				})
			}),
			unit && /* @__PURE__ */ jsx("div", {
				className: "absolute right-2 top-1/2 -translate-y-1/2 text-text-tertiary system-sm-regular",
				children: unit
			})
		]
	});
});
Input.displayName = "Input";
//#endregion
export { CopyFeedback as n, CopyFeedbackNew as r, Input as t };
