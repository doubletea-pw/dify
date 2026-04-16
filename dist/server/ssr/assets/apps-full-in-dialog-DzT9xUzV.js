import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { i as useAppContext } from "./app-context-BiSzFQEV.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as upgrade_btn_default } from "./upgrade-btn-CpSPytX5.js";
import { s as Plan } from "./config-DUQ_rYOW.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import { t as ProgressBar } from "./progress-bar-B_Dpla84.js";
import * as React$1 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/header/utils/util.ts
var generateMailToLink = (email, subject, body) => {
	let mailtoLink = `mailto:${email}`;
	if (subject) mailtoLink += `?subject=${encodeURIComponent(subject)}`;
	if (body) mailtoLink += `&body=${encodeURIComponent(body)}`;
	return mailtoLink;
};
var mailToSupport = (account, plan, version, supportEmailAddress) => {
	const subject = `Technical Support Request ${plan} ${account}`;
	const body = `
    Please do not remove the following information:
    -----------------------------------------------
    Current Plan: ${plan}
    Account: ${account}
    Version: ${version}
    Platform:
    Problem Description:
  `;
	return generateMailToLink(supportEmailAddress || "support@dify.ai", subject, body);
};
var style_module_default = { textGradient: "_textGradient_usibp_1" };
//#endregion
//#region app/components/billing/apps-full-in-dialog/index.tsx
var LOW = 50;
var MIDDLE = 80;
var AppsFull = ({ loc, className }) => {
	const { t } = useTranslation();
	const { plan } = useProviderContext();
	const { userProfile, langGeniusVersionInfo } = useAppContext();
	const isTeam = plan.type === Plan.team;
	const usage = plan.usage.buildApps;
	const total = plan.total.buildApps;
	const percent = usage / total * 100;
	const color = (() => {
		if (percent < LOW) return "bg-components-progress-bar-progress-solid";
		if (percent < MIDDLE) return "bg-components-progress-warning-progress";
		return "bg-components-progress-error-progress";
	})();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-3 rounded-xl border-[0.5px] border-components-panel-border-subtle bg-components-panel-on-panel-item-bg p-4 shadow-xs backdrop-blur-sm", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex justify-between",
			children: [
				!isTeam && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: cn("title-xl-semi-bold mb-1", style_module_default.textGradient),
					children: t("apps.fullTip1", { ns: "billing" })
				}), /* @__PURE__ */ jsx("div", {
					className: "system-xs-regular text-text-tertiary",
					children: t("apps.fullTip1des", { ns: "billing" })
				})] }),
				isTeam && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: cn("title-xl-semi-bold mb-1", style_module_default.textGradient),
					children: t("apps.fullTip2", { ns: "billing" })
				}), /* @__PURE__ */ jsx("div", {
					className: "system-xs-regular text-text-tertiary",
					children: t("apps.fullTip2des", { ns: "billing" })
				})] }),
				(plan.type === Plan.sandbox || plan.type === Plan.professional) && /* @__PURE__ */ jsx(upgrade_btn_default, {
					isShort: true,
					loc
				}),
				plan.type !== Plan.sandbox && plan.type !== Plan.professional && /* @__PURE__ */ jsx(Button, {
					variant: "secondary-accent",
					children: /* @__PURE__ */ jsx("a", {
						target: "_blank",
						rel: "noopener noreferrer",
						href: mailToSupport(userProfile.email, plan.type, langGeniusVersionInfo.current_version),
						children: t("apps.contactUs", { ns: "billing" })
					})
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "system-xs-medium flex items-center justify-between text-text-secondary",
				children: [/* @__PURE__ */ jsx("div", { children: t("usagePage.buildApps", { ns: "billing" }) }), /* @__PURE__ */ jsxs("div", { children: [
					usage,
					"/",
					total
				] })]
			}), /* @__PURE__ */ jsx(ProgressBar, {
				percent,
				color
			})]
		})]
	});
};
var apps_full_in_dialog_default = React$1.memo(AppsFull);
//#endregion
export { mailToSupport as n, apps_full_in_dialog_default as t };
