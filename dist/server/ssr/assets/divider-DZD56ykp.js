import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as cva } from "./dist-1O6DB-eK.js";
import "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/base/divider/index.tsx
var dividerVariants = cva("", {
	variants: {
		type: {
			horizontal: "my-2 h-[0.5px] w-full",
			vertical: "mx-2 h-full w-[1px]"
		},
		bgStyle: {
			gradient: "bg-gradient-to-r from-divider-regular to-background-gradient-mask-transparent",
			solid: "bg-divider-regular"
		}
	},
	defaultVariants: {
		type: "horizontal",
		bgStyle: "solid"
	}
});
var Divider = ({ type, bgStyle, className = "", style }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn(dividerVariants({
			type,
			bgStyle
		}), "shrink-0", className),
		style,
		"data-testid": "divider"
	});
};
//#endregion
export { Divider as t };
