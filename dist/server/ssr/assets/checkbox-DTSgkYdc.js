import { t as cn } from "./classnames-LHQnX9lX.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/checkbox/assets/indeterminate-icon.tsx
var IndeterminateIcon = () => {
	return /* @__PURE__ */ jsx("div", {
		"data-testid": "indeterminate-icon",
		children: /* @__PURE__ */ jsx("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "12",
			height: "12",
			viewBox: "0 0 12 12",
			fill: "none",
			children: /* @__PURE__ */ jsx("path", {
				d: "M2.5 6H9.5",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			})
		})
	});
};
//#endregion
//#region app/components/base/checkbox/index.tsx
var Checkbox = ({ id, checked, onCheck, className, disabled, indeterminate }) => {
	return /* @__PURE__ */ jsxs("div", {
		id,
		className: cn("flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-[4px] shadow-xs shadow-shadow-shadow-3", checked || indeterminate ? "bg-components-checkbox-bg text-components-checkbox-icon hover:bg-components-checkbox-bg-hover" : "border border-components-checkbox-border bg-components-checkbox-bg-unchecked hover:bg-components-checkbox-bg-unchecked-hover hover:border-components-checkbox-border-hover", disabled && (checked || indeterminate ? "cursor-not-allowed bg-components-checkbox-bg-disabled-checked text-components-checkbox-icon-disabled hover:bg-components-checkbox-bg-disabled-checked" : "cursor-not-allowed border-components-checkbox-border-disabled bg-components-checkbox-bg-disabled hover:border-components-checkbox-border-disabled hover:bg-components-checkbox-bg-disabled"), className),
		onClick: (event) => {
			if (disabled) return;
			onCheck?.(event);
		},
		onKeyDown: (event) => {
			if (disabled) return;
			if (event.key === " " || event.key === "Enter") {
				if (event.key === " ") event.preventDefault();
				onCheck?.(event);
			}
		},
		"data-testid": `checkbox-${id}`,
		role: "checkbox",
		"aria-checked": indeterminate ? "mixed" : !!checked,
		"aria-disabled": !!disabled,
		tabIndex: disabled ? -1 : 0,
		children: [!checked && indeterminate && /* @__PURE__ */ jsx(IndeterminateIcon, {}), checked && /* @__PURE__ */ jsx("div", {
			className: "i-ri-check-line h-3 w-3",
			"data-testid": `check-icon-${id}`
		})]
	});
};
//#endregion
export { Checkbox as t };
