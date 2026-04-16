import { t as cn } from "./classnames-LHQnX9lX.js";
import { jsx, jsxs } from "react/jsx-runtime";
var style_module_default = { gridBg: "_gridBg_1e20w_1" };
//#endregion
//#region app/components/base/grid-mask/index.tsx
var GridMask = ({ children, wrapperClassName, canvasClassName, gradientClassName }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative bg-saas-background", wrapperClassName),
		children: [
			/* @__PURE__ */ jsx("div", { className: cn("absolute inset-0 z-0 h-full w-full opacity-70", canvasClassName, style_module_default.gridBg) }),
			/* @__PURE__ */ jsx("div", { className: cn("absolute z-[1] h-full w-full rounded-lg bg-grid-mask-background", gradientClassName) }),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-[2]",
				children
			})
		]
	});
};
//#endregion
export { GridMask as t };
