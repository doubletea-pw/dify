import { ti as uo } from "./react-D5xHzNYo.js";
import "./i18next-CxGFEMD9.js";
import "./Trans-UjBkHktY.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import "./app-icon-DPKtAo3e.js";
import "./useKeyPress-DtHtlpBY.js";
import "./store-BCKZaSV6.js";
import "./dist-mUzjAi-W.js";
import { t as getFlowPrefix } from "./utils-pMdyvQan.js";
import "./use-breakpoints-Ij85IgkK.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import "./divider-DZD56ykp.js";
import "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import { Ht as WorkflowVersion } from "./config-Dopncj5R.js";
import { $n as useWorkflowStore, Kr as useInvalidAllLastRun, Qn as useStore, d as useWorkflowRefreshDraft, nr as useHooksStore, ri as useRestoreWorkflow, u as useWorkflowRun } from "./hooks-Bj_4KA1b.js";
import "./i18n-config-jsJ9YUFd.js";
import { T as toast } from "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
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
import "./utc-CCXXQ2Pp.js";
import { t as useTimestamp } from "./use-timestamp-DPYGivGq.js";
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
import { t as useTheme } from "./use-theme-3YxPQV4B.js";
import "./model-name-DBTGJc7a.js";
import "./skeleton-Brd40zkS.js";
import "./alert-dialog-_9biHzKe.js";
import "./alertsAndFeedback-BpcdEYpr.js";
import "./amplitude-BnPDazhN.js";
import "./esm-CfW7DN4f.js";
import "./relativeTime-BAkB0A3u.js";
import { t as useFormatTimeFromNow } from "./use-format-time-from-now-D16rGv8R.js";
import { memo, useCallback, useMemo } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/header/restoring-title.tsx
var RestoringTitle = () => {
	const { t } = useTranslation();
	const { formatTimeFromNow } = useFormatTimeFromNow();
	const { formatTime } = useTimestamp();
	const currentVersion = useStore((state) => state.currentVersion);
	const isDraft = currentVersion?.version === WorkflowVersion.Draft;
	const publishStatus = isDraft ? t("common.unpublished", { ns: "workflow" }) : t("common.published", { ns: "workflow" });
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-y-0.5",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-x-1",
			children: [/* @__PURE__ */ jsx("span", {
				className: "system-sm-semibold text-text-primary",
				children: useMemo(() => {
					if (isDraft) return t("versionHistory.currentDraft", { ns: "workflow" });
					return currentVersion?.marked_name || t("versionHistory.defaultName", { ns: "workflow" });
				}, [
					currentVersion,
					t,
					isDraft
				])
			}), /* @__PURE__ */ jsx("span", {
				className: "system-2xs-medium-uppercase rounded-[5px] border border-text-accent-secondary bg-components-badge-bg-dimm px-1 py-0.5 text-text-accent-secondary",
				children: t("common.viewOnly", { ns: "workflow" })
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular flex h-4 items-center gap-x-1 text-text-tertiary",
			children: currentVersion && /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsx("span", { children: publishStatus }),
				/* @__PURE__ */ jsx("span", { children: "·" }),
				/* @__PURE__ */ jsx("span", { children: `${formatTimeFromNow((isDraft ? currentVersion.updated_at : currentVersion.created_at) * 1e3)} ${formatTime(currentVersion.created_at, "HH:mm:ss")}` }),
				/* @__PURE__ */ jsx("span", { children: "·" }),
				/* @__PURE__ */ jsx("span", { children: currentVersion?.created_by?.name || "" })
			] })
		})]
	});
};
var restoring_title_default = memo(RestoringTitle);
//#endregion
//#region app/components/workflow/header/header-in-restoring.tsx
var HeaderInRestoring = ({ onRestoreSettled }) => {
	const { t } = useTranslation();
	const { theme } = useTheme();
	const workflowStore = useWorkflowStore();
	const configsMap = useHooksStore((s) => s.configsMap);
	const invalidAllLastRun = useInvalidAllLastRun(configsMap?.flowType, configsMap?.flowId);
	const { deleteAllInspectVars } = workflowStore.getState();
	const currentVersion = useStore((s) => s.currentVersion);
	const setShowWorkflowVersionHistoryPanel = useStore((s) => s.setShowWorkflowVersionHistoryPanel);
	const { handleLoadBackupDraft } = useWorkflowRun();
	const { handleRefreshWorkflowDraft } = useWorkflowRefreshDraft();
	const { mutateAsync: restoreWorkflow } = useRestoreWorkflow();
	const canRestore = !!currentVersion?.id && !!configsMap?.flowId && currentVersion.version !== WorkflowVersion.Draft;
	const handleCancelRestore = useCallback(() => {
		handleLoadBackupDraft();
		workflowStore.setState({ isRestoring: false });
		setShowWorkflowVersionHistoryPanel(false);
	}, [
		workflowStore,
		handleLoadBackupDraft,
		setShowWorkflowVersionHistoryPanel
	]);
	const handleRestore = useCallback(async () => {
		if (!canRestore) return;
		setShowWorkflowVersionHistoryPanel(false);
		const restoreUrl = `/${getFlowPrefix(configsMap.flowType)}/${configsMap.flowId}/workflows/${currentVersion.id}/restore`;
		try {
			await restoreWorkflow(restoreUrl);
			workflowStore.setState({ isRestoring: false });
			workflowStore.setState({ backupDraft: void 0 });
			handleRefreshWorkflowDraft();
			toast.success(t("versionHistory.action.restoreSuccess", { ns: "workflow" }));
			deleteAllInspectVars();
			invalidAllLastRun();
		} catch {
			toast.error(t("versionHistory.action.restoreFailure", { ns: "workflow" }));
		} finally {
			onRestoreSettled?.();
		}
	}, [
		canRestore,
		currentVersion?.id,
		configsMap,
		setShowWorkflowVersionHistoryPanel,
		workflowStore,
		restoreWorkflow,
		handleRefreshWorkflowDraft,
		deleteAllInspectVars,
		invalidAllLastRun,
		t,
		onRestoreSettled
	]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(restoring_title_default, {}) }), /* @__PURE__ */ jsxs("div", {
		className: " flex items-center justify-end gap-x-2",
		children: [/* @__PURE__ */ jsx(Button, {
			onClick: handleRestore,
			disabled: !canRestore,
			variant: "primary",
			className: cn("rounded-lg border border-transparent", theme === "dark" && "border-black/5 bg-white/10 backdrop-blur-sm"),
			children: t("common.restore", { ns: "workflow" })
		}), /* @__PURE__ */ jsx(Button, {
			onClick: handleCancelRestore,
			className: cn("rounded-lg border border-transparent text-components-button-secondary-accent-text", theme === "dark" && "border-black/5 bg-white/10 backdrop-blur-sm"),
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-x-0.5",
				children: [/* @__PURE__ */ jsx(uo, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
					className: "px-0.5",
					children: t("common.exitVersions", { ns: "workflow" })
				})]
			})
		})]
	})] });
};
//#endregion
export { HeaderInRestoring as default };
