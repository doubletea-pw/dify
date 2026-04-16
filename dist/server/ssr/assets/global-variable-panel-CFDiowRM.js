import { xt as P7 } from "./react-D5xHzNYo.js";
import "./i18next-CxGFEMD9.js";
import "./Trans-UjBkHktY.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import "./app-icon-DPKtAo3e.js";
import "./useKeyPress-DtHtlpBY.js";
import "./store-BCKZaSV6.js";
import "./dist-mUzjAi-W.js";
import "./utils-pMdyvQan.js";
import "./use-breakpoints-Ij85IgkK.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import "./divider-DZD56ykp.js";
import { en as isInWorkflowPage } from "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import "./config-Dopncj5R.js";
import { H as useIsChatMode, Qn as useStore } from "./hooks-Bj_4KA1b.js";
import { t as capitalize } from "./capitalize-DDeTGiHs.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./workflow-CULNEjcb.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import "./input-BOHL-qYi.js";
import "./switch-CFJdYxEh.js";
import "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import "./dayjs.min-CNlMkMP6.js";
import "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import "./credential-item-C22_bUSw.js";
import "./apps-b6zqLiv3.js";
import "./datasets-hfpkpjNW.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./checkbox-DTSgkYdc.js";
import "./textarea-Ngtow1st.js";
import "./constants-P0J540jJ.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import "./provider-context-CToT0pwd.js";
import "./link-1R-efKLW.js";
import "./use-refresh-plugin-list-C8aKRYG-.js";
import "./use-triggers-DguQxV9N.js";
import "./other-sSUV3aYW.js";
import "./dynamic-6-R69YAE.js";
import "./fast-deep-equal-T8EktbR5.js";
import "./format-BCVnrx09.js";
import "./hooks-BTelimHS.js";
import "./use-common-BJ1aZaXJ.js";
import "./popover-CTEbJchz.js";
import "./model-selector-ahzffqOG.js";
import "./dist-CGvyUAMR.js";
import "./use-theme-3YxPQV4B.js";
import "./model-name-DBTGJc7a.js";
import "./skeleton-Brd40zkS.js";
import "./alert-dialog-_9biHzKe.js";
import "./alertsAndFeedback-BpcdEYpr.js";
import "./amplitude-BnPDazhN.js";
import "./esm-CfW7DN4f.js";
import { i as Icon } from "./others-CYlDNVYO.js";
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/panel/global-variable-panel/item.tsx
var Item = ({ payload }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("radius-md mb-1 border border-components-panel-border-subtle bg-components-panel-on-panel-item-bg px-2.5 py-2 shadow-xs hover:bg-components-panel-on-panel-item-bg-hover"),
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-between",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex grow items-center gap-1",
				children: [
					/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-util-colors-orange-orange-600" }),
					/* @__PURE__ */ jsxs("div", {
						className: "system-sm-medium text-text-primary",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-text-tertiary",
							children: "sys."
						}), payload.name]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "system-xs-medium text-text-tertiary",
						children: capitalize(payload.value_type)
					})
				]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular mt-1.5 truncate text-text-tertiary",
			children: payload.description
		})]
	});
};
var item_default = memo(Item);
//#endregion
//#region app/components/workflow/panel/global-variable-panel/index.tsx
var Panel = () => {
	const { t } = useTranslation();
	const isChatMode = useIsChatMode();
	const setShowPanel = useStore((s) => s.setShowGlobalVariablePanel);
	const isWorkflowPage = isInWorkflowPage();
	const globalVariableList = [
		...isChatMode ? [{
			name: "conversation_id",
			value_type: "string",
			description: t("globalVar.fieldsDescription.conversationId", { ns: "workflow" })
		}, {
			name: "dialog_count",
			value_type: "number",
			description: t("globalVar.fieldsDescription.dialogCount", { ns: "workflow" })
		}] : [],
		{
			name: "user_id",
			value_type: "string",
			description: t("globalVar.fieldsDescription.userId", { ns: "workflow" })
		},
		{
			name: "app_id",
			value_type: "string",
			description: t("globalVar.fieldsDescription.appId", { ns: "workflow" })
		},
		{
			name: "workflow_id",
			value_type: "string",
			description: t("globalVar.fieldsDescription.workflowId", { ns: "workflow" })
		},
		{
			name: "workflow_run_id",
			value_type: "string",
			description: t("globalVar.fieldsDescription.workflowRunId", { ns: "workflow" })
		},
		...isWorkflowPage && !isChatMode ? [{
			name: "timestamp",
			value_type: "number",
			description: t("globalVar.fieldsDescription.triggerTimestamp", { ns: "workflow" })
		}] : []
	];
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative flex h-full w-[420px] flex-col rounded-l-2xl border border-components-panel-border bg-components-panel-bg-alt"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "system-xl-semibold flex shrink-0 items-center justify-between p-4 pb-0 text-text-primary",
				children: [t("globalVar.title", { ns: "workflow" }), /* @__PURE__ */ jsx("div", {
					className: "flex items-center",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-6 w-6 cursor-pointer items-center justify-center",
						onClick: () => setShowPanel(false),
						children: /* @__PURE__ */ jsx(P7, { className: "h-4 w-4 text-text-tertiary" })
					})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "system-sm-regular shrink-0 px-4 py-1 text-text-tertiary",
				children: t("globalVar.description", { ns: "workflow" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-4 grow overflow-y-auto rounded-b-2xl px-4",
				children: globalVariableList.map((item) => /* @__PURE__ */ jsx(item_default, { payload: item }, item.name))
			})
		]
	});
};
var global_variable_panel_default = memo(Panel);
//#endregion
export { global_variable_panel_default as default };
