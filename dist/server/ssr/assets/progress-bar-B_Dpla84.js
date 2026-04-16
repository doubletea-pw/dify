import { t as cn } from "./classnames-LHQnX9lX.js";
import { jsx } from "react/jsx-runtime";
//#region app/components/billing/progress-bar/index.tsx
var ProgressBar = ({ percent = 0, color = "bg-components-progress-bar-progress-solid", indeterminate = false, indeterminateFull = false }) => {
	if (indeterminate) return /* @__PURE__ */ jsx("div", {
		className: "overflow-hidden rounded-[6px] bg-components-progress-bar-bg",
		children: /* @__PURE__ */ jsx("div", {
			"data-testid": "billing-progress-bar-indeterminate",
			className: cn("h-1 rounded-[6px] bg-progress-bar-indeterminate-stripe", indeterminateFull ? "w-full" : "w-[30px]")
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: "overflow-hidden rounded-[6px] bg-components-progress-bar-bg",
		children: /* @__PURE__ */ jsx("div", {
			"data-testid": "billing-progress-bar",
			className: cn("h-1 rounded-[6px]", color),
			style: { width: `${Math.min(percent, 100)}%` }
		})
	});
};
//#endregion
export { ProgressBar as t };
