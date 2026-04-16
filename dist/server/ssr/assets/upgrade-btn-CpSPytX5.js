import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as cva } from "./dist-1O6DB-eK.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { n as Icon$1, s as Icon } from "./common-fiYzNZ23.js";
import { n as useModalContext } from "./modal-context-CphlqvPm.js";
import * as React$1 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/premium-badge/index.tsx
var PremiumBadgeVariants = cva("premium-badge", {
	variants: {
		size: {
			s: "premium-badge-s",
			m: "premium-badge-m",
			custom: ""
		},
		color: {
			blue: "premium-badge-blue",
			indigo: "premium-badge-indigo",
			gray: "premium-badge-gray",
			orange: "premium-badge-orange"
		},
		allowHover: {
			true: "allowHover",
			false: ""
		}
	},
	defaultVariants: {
		size: "m",
		color: "blue",
		allowHover: false
	}
});
var PremiumBadge = ({ className, size, color, allowHover, styleCss, children, ...props }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: cn(PremiumBadgeVariants({
			size,
			color,
			allowHover,
			className
		}), "relative text-nowrap"),
		style: styleCss,
		...props,
		children: [children, /* @__PURE__ */ jsx(Icon, { className: cn("absolute right-1/2 top-0 translate-x-[20%] opacity-50 transition-all duration-100 ease-out hover:translate-x-[30%] hover:opacity-80", size === "s" ? "h-[18px] w-12" : "h-6 w-12") })]
	});
};
PremiumBadge.displayName = "PremiumBadge";
//#endregion
//#region app/components/billing/upgrade-btn/index.tsx
var UpgradeBtn = ({ className, size = "m", style, isPlain = false, isShort = false, onClick: _onClick, loc, labelKey }) => {
	const { t } = useTranslation();
	const { setShowPricingModal } = useModalContext();
	const handleClick = () => {
		if (_onClick) _onClick();
		else setShowPricingModal();
	};
	const onClick = () => {
		handleClick();
		if (loc && window.gtag) window.gtag("event", "click_upgrade_btn", { loc });
	};
	const defaultBadgeLabel = t(isShort ? "upgradeBtn.encourageShort" : "upgradeBtn.encourage", { ns: "billing" });
	const label = labelKey ? t(labelKey, { ns: "billing" }) : defaultBadgeLabel;
	if (isPlain) return /* @__PURE__ */ jsx(Button, {
		className,
		style,
		onClick,
		children: labelKey ? label : t("upgradeBtn.plain", { ns: "billing" })
	});
	return /* @__PURE__ */ jsxs(PremiumBadge, {
		size,
		color: "blue",
		allowHover: true,
		onClick,
		className,
		style,
		children: [/* @__PURE__ */ jsx(Icon$1, { className: "flex h-3.5 w-3.5 items-center py-[1px] pl-[3px] text-components-premium-badge-indigo-text-stop-0" }), /* @__PURE__ */ jsx("div", {
			className: "system-xs-medium",
			children: /* @__PURE__ */ jsx("span", {
				className: "p-1",
				children: label
			})
		})]
	});
};
var upgrade_btn_default = React$1.memo(UpgradeBtn);
//#endregion
export { PremiumBadge as n, upgrade_btn_default as t };
