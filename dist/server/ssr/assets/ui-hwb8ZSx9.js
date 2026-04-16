import { t as cn } from "./classnames-LHQnX9lX.js";
import * as React$1 from "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/base/radio/ui.tsx
var RadioUI = ({ isChecked, disabled = false, onCheck, className }) => {
	return /* @__PURE__ */ jsx("div", {
		role: "radio",
		"aria-checked": isChecked,
		"aria-disabled": disabled,
		className: cn("size-4 rounded-full", isChecked && !disabled && "border-[5px] border-components-radio-border-checked hover:border-components-radio-border-checked-hover", !isChecked && !disabled && "border border-components-radio-border hover:border-components-radio-border-hover", isChecked && disabled && "border-[5px] border-components-radio-border-checked-disabled", !isChecked && disabled && "border border-components-radio-border-disabled bg-components-radio-bg-disabled", !disabled && "bg-components-radio-bg shadow-xs shadow-shadow-shadow-3 hover:bg-components-radio-bg-hover", className),
		onClick: (event) => {
			if (disabled) return;
			onCheck?.(event);
		}
	});
};
var ui_default = React$1.memo(RadioUI);
//#endregion
export { ui_default as t };
