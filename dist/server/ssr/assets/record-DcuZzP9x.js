import "./i18next-CxGFEMD9.js";
import "./Trans-UjBkHktY.js";
import "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import "./app-icon-DPKtAo3e.js";
import "./useKeyPress-DtHtlpBY.js";
import "./store-BCKZaSV6.js";
import "./dist-mUzjAi-W.js";
import "./utils-pMdyvQan.js";
import "./use-breakpoints-Ij85IgkK.js";
import "./navigation-C_u5Brbk.js";
import "./divider-DZD56ykp.js";
import { hn as formatWorkflowRunIdentifier } from "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import "./config-Dopncj5R.js";
import { Qn as useStore, nr as useHooksStore, p as useWorkflowUpdate } from "./hooks-Bj_4KA1b.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import "./markdown-utils-D9ZHqkyo.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./workflow-CULNEjcb.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import "./button-BqYXL-Bc.js";
import "./confirm-CKQP3hdx.js";
import "./action-button-BK9WUMzU.js";
import "./input-BOHL-qYi.js";
import "./switch-CFJdYxEh.js";
import "./select-C87OPWpf.js";
import "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import "./modal-9VFVByDR.js";
import "./dayjs.min-CNlMkMP6.js";
import "./utc-CCXXQ2Pp.js";
import "./use-timestamp-DPYGivGq.js";
import "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import "./credential-item-C22_bUSw.js";
import "./apps-b6zqLiv3.js";
import "./datasets-hfpkpjNW.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./use-apps-t6Q_ZP4w.js";
import "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./checkbox-DTSgkYdc.js";
import "./copy-to-clipboard-CEvVSVWT.js";
import "./common-fiYzNZ23.js";
import "./badge-DnA7gOK5.js";
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
import "./status-CPKUa4Vg.js";
import "./fast-deep-equal-T8EktbR5.js";
import "./format-BCVnrx09.js";
import "./general-C8w9hIeL.js";
import "./prompt-editor-PJuCbabP.js";
import "./pipeline-EQygYMXw.js";
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
import "./radio-4K5OYxdz.js";
import "./use-get-icon-D8ihnTYG.js";
import "./code-editor-BPvpmrXg.js";
import "./utils-Dh7W533Q.js";
import "./tag-input-9kTFEfAj.js";
import "./dist-DV9-MooO2.js";
import "./image-preview-D0J1Go0B.js";
import "./dropdown-menu-DdKnIBZG.js";
import "./arrows-fbeBWnky.js";
import "./var-reference-picker-PlAsXjUc.js";
import "./others-CYlDNVYO.js";
import "./Warning-BiM5Lre1.js";
import "./file-uploader-DuOqY7O5.js";
import "./result-panel-B92HphVR.js";
import "./log-C5ooGRGD.js";
import "./loading-anim-Ck_Modzp.js";
import { t as RunPanel } from "./run-Fd933dHo.js";
import { memo, useCallback } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/panel/record.tsx
var Record = () => {
	const historyWorkflowData = useStore((s) => s.historyWorkflowData);
	const { handleUpdateWorkflowCanvas } = useWorkflowUpdate();
	const getWorkflowRunAndTraceUrl = useHooksStore((s) => s.getWorkflowRunAndTraceUrl);
	const handleResultCallback = useCallback((res) => {
		const graph = res.graph;
		handleUpdateWorkflowCanvas({
			nodes: graph.nodes,
			edges: graph.edges,
			viewport: graph.viewport || {
				x: 0,
				y: 0,
				zoom: 1
			}
		});
	}, [handleUpdateWorkflowCanvas]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full w-[400px] flex-col rounded-l-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadow-xl",
		children: [/* @__PURE__ */ jsx("div", {
			className: "system-xl-semibold flex items-center justify-between p-4 pb-0 text-text-primary",
			children: `Test Run${formatWorkflowRunIdentifier(historyWorkflowData?.finished_at)}`
		}), /* @__PURE__ */ jsx(RunPanel, {
			runDetailUrl: getWorkflowRunAndTraceUrl(historyWorkflowData?.id).runUrl,
			tracingListUrl: getWorkflowRunAndTraceUrl(historyWorkflowData?.id).traceUrl,
			getResultCallback: handleResultCallback
		})]
	});
};
var record_default = memo(Record);
//#endregion
export { record_default as default };
