import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as ProgressBar } from "./progress-bar-B_Dpla84.js";
import * as React$1 from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/billing/usage-info/index.tsx
var WARNING_THRESHOLD = 80;
var UsageInfo = ({ className, Icon, name, tooltip, usage, total, unit, unitPosition = "suffix", resetHint, resetInDays, hideIcon = false, storageMode = false, storageThreshold = 50, storageTooltip, isSandboxPlan = false }) => {
	const { t } = useTranslation();
	const isBelowThreshold = storageMode && usage < storageThreshold;
	const isSandboxFull = storageMode && isSandboxPlan && usage >= storageThreshold;
	const percent = usage / total * 100;
	const getProgressColor = () => {
		if (percent >= 100) return "bg-components-progress-error-progress";
		if (percent >= WARNING_THRESHOLD) return "bg-components-progress-warning-progress";
		return "bg-components-progress-bar-progress-solid";
	};
	const color = getProgressColor();
	const isUnlimited = total === -1;
	let totalDisplay = isUnlimited ? t("plansCommon.unlimited", { ns: "billing" }) : total;
	if (!isUnlimited && unit && unitPosition === "inline") totalDisplay = `${total}${unit}`;
	const showUnit = !!unit && !isUnlimited && unitPosition === "suffix";
	const resetText = resetHint ?? (typeof resetInDays === "number" ? t("usagePage.resetsIn", {
		ns: "billing",
		count: resetInDays
	}) : void 0);
	const renderRightInfo = () => {
		if (resetText) return /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular ml-auto flex-1 text-right text-text-tertiary",
			children: resetText
		});
		if (showUnit) return /* @__PURE__ */ jsx("div", {
			className: "system-xs-medium ml-auto text-text-tertiary",
			children: unit
		});
		return null;
	};
	const renderUsageDisplay = () => {
		if (storageMode) {
			if (isSandboxFull) return /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ jsx("span", { children: storageThreshold }),
					/* @__PURE__ */ jsx("span", {
						className: "system-md-regular text-text-quaternary",
						children: "/"
					}),
					/* @__PURE__ */ jsxs("span", { children: [
						storageThreshold,
						" ",
						unit
					] })
				]
			});
			if (isBelowThreshold) return /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ jsxs("span", { children: [
						"<",
						" ",
						storageThreshold
					] }),
					!isSandboxPlan && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", {
						className: "system-md-regular text-text-quaternary",
						children: "/"
					}), /* @__PURE__ */ jsx("span", { children: totalDisplay })] }),
					isSandboxPlan && /* @__PURE__ */ jsx("span", { children: unit })
				]
			});
			return /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ jsx("span", { children: usage }),
					/* @__PURE__ */ jsx("span", {
						className: "system-md-regular text-text-quaternary",
						children: "/"
					}),
					/* @__PURE__ */ jsx("span", { children: totalDisplay })
				]
			});
		}
		return /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ jsx("span", { children: usage }),
				/* @__PURE__ */ jsx("span", {
					className: "system-md-regular text-text-quaternary",
					children: "/"
				}),
				/* @__PURE__ */ jsx("span", { children: totalDisplay })
			]
		});
	};
	const renderWithTooltip = (children) => {
		if (storageMode && storageTooltip) return /* @__PURE__ */ jsx(tooltip_default, {
			popupContent: /* @__PURE__ */ jsx("div", {
				className: "w-[200px]",
				children: storageTooltip
			}),
			asChild: false,
			children: /* @__PURE__ */ jsx("div", {
				className: "cursor-default",
				children
			})
		});
		return children;
	};
	const renderProgressBar = () => {
		return renderWithTooltip(/* @__PURE__ */ jsx(ProgressBar, {
			percent: isBelowThreshold ? 0 : percent,
			color: isSandboxFull ? "bg-components-progress-error-progress" : color,
			indeterminate: isBelowThreshold,
			indeterminateFull: isBelowThreshold && isSandboxPlan
		}));
	};
	const renderUsageWithTooltip = () => {
		return renderWithTooltip(renderUsageDisplay());
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-2 rounded-xl bg-components-panel-bg p-4", className),
		children: [
			!hideIcon && Icon && /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-text-tertiary" }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "system-xs-medium text-text-tertiary",
					children: name
				}), tooltip && /* @__PURE__ */ jsx(tooltip_default, { popupContent: /* @__PURE__ */ jsx("div", {
					className: "w-[180px]",
					children: tooltip
				}) })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "system-md-semibold flex items-center gap-1 text-text-primary",
				children: [renderUsageWithTooltip(), renderRightInfo()]
			}),
			renderProgressBar()
		]
	});
};
var usage_info_default = React$1.memo(UsageInfo);
//#endregion
export { usage_info_default as t };
