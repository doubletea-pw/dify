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
import { t as Divider } from "./divider-DZD56ykp.js";
import { hn as formatWorkflowRunIdentifier } from "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import "./config-Dopncj5R.js";
import { $n as useWorkflowStore, H as useIsChatMode, Qn as useStore, u as useWorkflowRun } from "./hooks-Bj_4KA1b.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import "./utils-oRnrO3yr.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./workflow-CULNEjcb.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
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
import "./workflow-Dbk_had1.js";
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
import "./utils-Dh7W533Q.js";
import { a as Icon } from "./arrows-fbeBWnky.js";
import "./relativeTime-BAkB0A3u.js";
import "./use-workflow-run-event-Bl1EmFYx.js";
import { n as Icon$1, t as view_history_default } from "./view-history-B4I6VNlm.js";
import "./hooks-BneekglK.js";
import "./use-format-time-from-now-D16rGv8R.js";
import { memo, useCallback } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/header/running-title.tsx
var RunningTitle = () => {
	const { t } = useTranslation();
	const isChatMode = useIsChatMode();
	const historyWorkflowData = useStore((s) => s.historyWorkflowData);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-[18px] items-center text-xs text-gray-500",
		children: [
			/* @__PURE__ */ jsx(Icon$1, { className: "mr-1 h-3 w-3 text-gray-500" }),
			/* @__PURE__ */ jsx("span", { children: isChatMode ? `Test Chat${formatWorkflowRunIdentifier(historyWorkflowData?.finished_at)}` : `Test Run${formatWorkflowRunIdentifier(historyWorkflowData?.finished_at)}` }),
			/* @__PURE__ */ jsx("span", {
				className: "mx-1",
				children: "·"
			}),
			/* @__PURE__ */ jsx("span", {
				className: "ml-1 flex h-[18px] items-center rounded-[5px] border border-indigo-300 bg-white/[0.48] px-1 text-[10px] font-semibold uppercase text-indigo-600",
				children: t("common.viewOnly", { ns: "workflow" })
			})
		]
	});
};
var running_title_default = memo(RunningTitle);
//#endregion
//#region app/components/workflow/header/header-in-view-history.tsx
var HeaderInHistory = ({ viewHistoryProps }) => {
	const { t } = useTranslation();
	const workflowStore = useWorkflowStore();
	const { handleLoadBackupDraft } = useWorkflowRun();
	const handleGoBackToEdit = useCallback(() => {
		handleLoadBackupDraft();
		workflowStore.setState({ historyWorkflowData: void 0 });
	}, [workflowStore, handleLoadBackupDraft]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(running_title_default, {}) }), /* @__PURE__ */ jsxs("div", {
		className: "flex items-center space-x-2",
		children: [
			/* @__PURE__ */ jsx(view_history_default, {
				...viewHistoryProps,
				withText: true
			}),
			/* @__PURE__ */ jsx(Divider, {
				type: "vertical",
				className: "mx-auto h-3.5"
			}),
			/* @__PURE__ */ jsxs(Button, {
				variant: "primary",
				onClick: handleGoBackToEdit,
				children: [/* @__PURE__ */ jsx(Icon, { className: "mr-1 h-4 w-4" }), t("common.goBackToEdit", { ns: "workflow" })]
			})
		]
	})] });
};
//#endregion
export { HeaderInHistory as default };
