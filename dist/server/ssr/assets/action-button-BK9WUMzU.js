import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as cva } from "./dist-1O6DB-eK.js";
import "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/base/action-button/index.tsx
var ActionButtonState = /* @__PURE__ */ function(ActionButtonState) {
	ActionButtonState["Destructive"] = "destructive";
	ActionButtonState["Active"] = "active";
	ActionButtonState["Disabled"] = "disabled";
	ActionButtonState["Default"] = "";
	ActionButtonState["Hover"] = "hover";
	return ActionButtonState;
}(ActionButtonState || {});
var actionButtonVariants = cva("action-btn", {
	variants: { size: {
		xs: "action-btn-xs",
		s: "action-btn-s",
		m: "action-btn-m",
		l: "action-btn-l",
		xl: "action-btn-xl"
	} },
	defaultVariants: { size: "m" }
});
function getActionButtonState(state) {
	switch (state) {
		case ActionButtonState.Destructive: return "action-btn-destructive";
		case ActionButtonState.Active: return "action-btn-active";
		case ActionButtonState.Disabled: return "action-btn-disabled";
		case ActionButtonState.Hover: return "action-btn-hover";
		default: return "";
	}
}
var ActionButton = ({ className, size, state = ActionButtonState.Default, styleCss, children, ref, disabled, ...props }) => {
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		className: cn(actionButtonVariants({
			className,
			size
		}), getActionButtonState(state), disabled && "cursor-not-allowed text-text-disabled hover:bg-transparent hover:text-text-disabled"),
		disabled,
		ref,
		style: styleCss,
		...props,
		children
	});
};
ActionButton.displayName = "ActionButton";
//#endregion
export { ActionButtonState as n, ActionButton as t };
