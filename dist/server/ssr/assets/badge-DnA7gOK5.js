import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as cva } from "./dist-1O6DB-eK.js";
import "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/base/badge/index.tsx
var BadgeState = /* @__PURE__ */ function(BadgeState) {
	BadgeState["Warning"] = "warning";
	BadgeState["Accent"] = "accent";
	BadgeState["Default"] = "";
	return BadgeState;
}(BadgeState || {});
var BadgeVariants = cva("badge", {
	variants: { size: {
		s: "badge-s",
		m: "badge-m",
		l: "badge-l"
	} },
	defaultVariants: { size: "m" }
});
function getBadgeState(state) {
	switch (state) {
		case BadgeState.Warning: return "badge-warning";
		case BadgeState.Accent: return "badge-accent";
		default: return "";
	}
}
var Badge = ({ className, size, state = BadgeState.Default, iconOnly = false, uppercase = false, styleCss, children, ...props }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn(BadgeVariants({
			size,
			className
		}), getBadgeState(state), size === "s" ? iconOnly ? "p-[3px]" : "px-[5px] py-[3px]" : size === "l" ? iconOnly ? "p-1.5" : "px-2 py-1" : iconOnly ? "p-1" : "px-[5px] py-[2px]", uppercase ? "system-2xs-medium-uppercase" : "system-2xs-medium"),
		style: styleCss,
		...props,
		children
	});
};
Badge.displayName = "Badge";
//#endregion
export { BadgeState as n, Badge as t };
