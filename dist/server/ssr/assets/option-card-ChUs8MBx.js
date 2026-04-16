import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as cva } from "./dist-1O6DB-eK.js";
import * as React$1 from "react";
import { useCallback } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/nodes/_base/components/option-card.tsx
var variants = cva([], {
	variants: { align: {
		left: "justify-start",
		center: "justify-center",
		right: "justify-end"
	} },
	defaultVariants: { align: "center" }
});
var OptionCard = ({ className, title, onSelect, selected, disabled, align = "center", tooltip }) => {
	const handleSelect = useCallback(() => {
		if (selected || disabled) return;
		onSelect();
	}, [
		onSelect,
		selected,
		disabled
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("system-sm-regular flex h-8 cursor-default items-center rounded-md border border-components-option-card-option-border bg-components-option-card-option-bg px-2 text-text-secondary", !selected && !disabled && "cursor-pointer hover:border-components-option-card-option-border-hover hover:bg-components-option-card-option-bg-hover hover:shadow-xs", selected && "system-sm-medium border-[1.5px] border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg shadow-xs", disabled && "text-text-disabled", variants({ align }), className),
		onClick: handleSelect,
		children: [/* @__PURE__ */ jsx("span", { children: title }), tooltip && /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
			className: "w-[240px]",
			children: tooltip
		}) })]
	});
};
var option_card_default = React$1.memo(OptionCard);
//#endregion
export { option_card_default as t };
