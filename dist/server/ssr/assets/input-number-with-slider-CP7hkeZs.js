import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { Lt as SupportUploadFileTypes } from "./config-Dopncj5R.js";
import { Nt as file_type_icon_default, nn as Slider } from "./hooks-Bj_4KA1b.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { f as FILE_EXTS } from "./var-DPpHtpXT.js";
import { t as Checkbox } from "./checkbox-DTSgkYdc.js";
import { t as TagInput } from "./tag-input-9kTFEfAj.js";
import * as React$1 from "react";
import { useCallback } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/nodes/_base/components/file-type-item.tsx
var FileTypeItem = ({ type, selected, onToggle, customFileTypes = [], onCustomFileTypesChange = noop }) => {
	const { t } = useTranslation();
	const handleOnSelect = useCallback(() => {
		onToggle(type);
	}, [onToggle, type]);
	const isCustomSelected = type === SupportUploadFileTypes.custom && selected;
	return /* @__PURE__ */ jsx("div", {
		className: cn("cursor-pointer select-none rounded-lg border border-components-option-card-option-border bg-components-option-card-option-bg", !isCustomSelected && "px-3 py-2", selected && "border-[1.5px] border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg", !selected && "hover:border-components-option-card-option-border-hover hover:bg-components-option-card-option-bg-hover"),
		onClick: handleOnSelect,
		children: isCustomSelected ? /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center border-b border-divider-subtle p-3 pb-2",
			children: [
				/* @__PURE__ */ jsx(file_type_icon_default, {
					className: "shrink-0",
					type,
					size: "lg"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "system-sm-medium mx-2 grow text-text-primary",
					children: t(`variableConfig.file.${type}.name`, { ns: "appDebug" })
				}),
				/* @__PURE__ */ jsx(Checkbox, {
					className: "shrink-0",
					checked: selected
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "p-3",
			onClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ jsx(TagInput, {
				items: customFileTypes,
				onChange: onCustomFileTypesChange,
				placeholder: t("variableConfig.file.custom.createPlaceholder", { ns: "appDebug" })
			})
		})] }) : /* @__PURE__ */ jsxs("div", {
			className: "flex items-center",
			children: [
				/* @__PURE__ */ jsx(file_type_icon_default, {
					className: "shrink-0",
					type,
					size: "lg"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mx-2 grow",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-sm-medium text-text-primary",
						children: t(`variableConfig.file.${type}.name`, { ns: "appDebug" })
					}), /* @__PURE__ */ jsx("div", {
						className: "system-2xs-regular-uppercase mt-1 text-text-tertiary",
						children: type !== SupportUploadFileTypes.custom ? FILE_EXTS[type].join(", ") : t("variableConfig.file.custom.description", { ns: "appDebug" })
					})]
				}),
				/* @__PURE__ */ jsx(Checkbox, {
					className: "shrink-0",
					checked: selected
				})
			]
		})
	});
};
var file_type_item_default = React$1.memo(FileTypeItem);
//#endregion
//#region app/components/workflow/nodes/_base/components/input-number-with-slider.tsx
var InputNumberWithSlider = ({ value, defaultValue = 0, min, max, readonly, onChange }) => {
	const handleBlur = useCallback(() => {
		if (value === void 0 || value === null || Number.isNaN(value)) {
			onChange(defaultValue);
			return;
		}
		if (max !== void 0 && value > max) {
			onChange(max);
			return;
		}
		if (min !== void 0 && value < min) onChange(min);
	}, [
		defaultValue,
		max,
		min,
		onChange,
		value
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-8 items-center justify-between space-x-2",
		children: [/* @__PURE__ */ jsx("input", {
			value,
			className: "block h-8 w-12 shrink-0 appearance-none rounded-lg bg-components-input-bg-normal pl-3 text-[13px] text-components-input-text-filled outline-none",
			type: "number",
			min,
			max,
			step: 1,
			onChange: useCallback((e) => {
				onChange(Number.parseFloat(e.target.value));
			}, [onChange]),
			onBlur: handleBlur,
			disabled: readonly
		}), /* @__PURE__ */ jsx(Slider, {
			className: "grow",
			value,
			min,
			max,
			step: 1,
			onValueChange: onChange,
			disabled: readonly,
			"aria-label": "Number input slider"
		})]
	});
};
var input_number_with_slider_default = React$1.memo(InputNumberWithSlider);
//#endregion
export { file_type_item_default as n, input_number_with_slider_default as t };
