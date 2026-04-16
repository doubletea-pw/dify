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
import { ct as useNodes } from "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import { Nt as InputVarType } from "./config-Dopncj5R.js";
import { G as useNodesReadOnly, H as useIsChatMode, Qn as useStore, V as useNodesSyncDraft } from "./hooks-Bj_4KA1b.js";
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
import "./modal-9VFVByDR.js";
import "./dayjs.min-CNlMkMP6.js";
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
import "./share-Bnl8cbPg.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./checkbox-DTSgkYdc.js";
import "./common-fiYzNZ23.js";
import "./upgrade-btn-CpSPytX5.js";
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
import "./utils-Dh7W533Q.js";
import "./tag-input-9kTFEfAj.js";
import "./dist-DV9-MooO2.js";
import "./image-preview-D0J1Go0B.js";
import "./file-uploader-DuOqY7O5.js";
import "./audio.player.manager-BbxYn4nN.js";
import "./input-number-with-slider-CP7hkeZs.js";
import "./option-card-ChUs8MBx.js";
import { a as useConfig, t as NewFeaturePanel } from "./new-feature-panel-DAyGNiTF.js";
import "./file-upload-setting-jLgSbj6D.js";
import "./usage-CsZ9mdCY.js";
import "./grid-mask-BR99s5KY.js";
import "./progress-bar-B_Dpla84.js";
import "./usage-info-T9FNDAad.js";
import "./annotation-D2xI61pO.js";
import "./features-D2eB-UM8.js";
import "./modal-ERomWYuW.js";
import { memo, useCallback } from "react";
import { jsx } from "react/jsx-runtime";
//#region app/components/workflow/features.tsx
var Features = () => {
	const setShowFeaturesPanel = useStore((s) => s.setShowFeaturesPanel);
	const isChatMode = useIsChatMode();
	const { nodesReadOnly } = useNodesReadOnly();
	const { handleSyncWorkflowDraft } = useNodesSyncDraft();
	const { id, data } = useNodes().find((node) => node.data.type === "start");
	const { handleAddVariable } = useConfig(id, data);
	const handleAddOpeningStatementVariable = (variables) => {
		const newVariable = variables[0];
		handleAddVariable({
			variable: newVariable.key,
			label: newVariable.name,
			type: InputVarType.textInput,
			max_length: newVariable.max_length,
			required: newVariable.required || false,
			options: []
		});
	};
	return /* @__PURE__ */ jsx(NewFeaturePanel, {
		show: true,
		isChatMode,
		disabled: nodesReadOnly,
		onChange: useCallback(() => {
			handleSyncWorkflowDraft();
			setShowFeaturesPanel(true);
		}, [handleSyncWorkflowDraft, setShowFeaturesPanel]),
		onClose: () => setShowFeaturesPanel(false),
		onAutoAddPromptVariable: handleAddOpeningStatementVariable,
		workflowVariables: data.variables
	});
};
var features_default = memo(Features);
//#endregion
export { features_default as default };
