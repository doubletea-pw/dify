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
import "./navigation-C_u5Brbk.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import "./utils-DqpfZ3W-.js";
import "./declarations-DYMEe7hD.js";
import "./config-Dopncj5R.js";
import { Qn as useStore } from "./hooks-Bj_4KA1b.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import "./src-BByrOQhU.js";
import "./utils-oRnrO3yr.js";
import "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./workflow-CULNEjcb.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import "./input-BOHL-qYi.js";
import "./switch-CFJdYxEh.js";
import "./select-C87OPWpf.js";
import "./loading-BryKikzY.js";
import "./dialog-DCCIZLOh.js";
import "./dayjs.min-CNlMkMP6.js";
import "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import { n as badge_default } from "./credential-item-C22_bUSw.js";
import "./apps-b6zqLiv3.js";
import "./datasets-hfpkpjNW.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./global-public-context-DpzzsplY.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./checkbox-DTSgkYdc.js";
import "./common-fiYzNZ23.js";
import "./badge-DnA7gOK5.js";
import "./textarea-Ngtow1st.js";
import "./constants-P0J540jJ.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import "./provider-context-CToT0pwd.js";
import "./link-1R-efKLW.js";
import { it as useDraftPipelineProcessingParams, rt as useDraftPipelinePreProcessingParams } from "./use-refresh-plugin-list-C8aKRYG-.js";
import "./use-triggers-DguQxV9N.js";
import "./other-sSUV3aYW.js";
import "./dynamic-6-R69YAE.js";
import "./workflow-Dbk_had1.js";
import "./fast-deep-equal-T8EktbR5.js";
import "./format-BCVnrx09.js";
import "./general-C8w9hIeL.js";
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
import "./pure-Dr1CeacW.js";
import { n as useAppForm } from "./form-D-kYI7ic.js";
import "./utils-Dh7W533Q.js";
import "./tag-input-9kTFEfAj.js";
import "./dist-DV9-MooO2.js";
import "./image-preview-D0J1Go0B.js";
import "./arrows-fbeBWnky.js";
import "./var-reference-picker-PlAsXjUc.js";
import "./others-CYlDNVYO.js";
import "./Warning-BiM5Lre1.js";
import "./file-uploader-DuOqY7O5.js";
import "./use-workflow-run-event-Bl1EmFYx.js";
import { c as BaseField, o as useConfigurations, s as useInitialData } from "./hooks-DYOKBJw_.js";
import "./input-number-with-slider-CP7hkeZs.js";
import "./dist-BcmQ9DaV.js";
import "./config-select-BdPKxz_Z.js";
import "./option-card-ChUs8MBx.js";
import { o as useInputFieldPanel } from "./hooks-BneekglK.js";
import { t as useFloatingRight } from "./hooks-Dn_sKEJk.js";
import { t as DataSourceOptions } from "./data-source-options-38NLwL2m.js";
import * as React$1 from "react";
import { useCallback, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/rag-pipeline/components/panel/input-field/preview/form.tsx
var Form = ({ variables }) => {
	const initialData = useInitialData(variables);
	const configurations = useConfigurations(variables);
	const form = useAppForm({ defaultValues: initialData });
	return /* @__PURE__ */ jsx("form", {
		className: "w-full",
		onSubmit: (e) => {
			e.preventDefault();
			e.stopPropagation();
		},
		children: /* @__PURE__ */ jsx("div", {
			className: "flex flex-col gap-y-3 px-4 py-3",
			children: configurations.map((config, index) => {
				return /* @__PURE__ */ jsx(BaseField({
					initialData,
					config
				}), { form }, index);
			})
		})
	});
};
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/preview/data-source.tsx
var DataSource = ({ onSelect: setDatasource, dataSourceNodeId }) => {
	const { t } = useTranslation();
	const pipelineId = useStore((state) => state.pipelineId);
	const { data: paramsConfig } = useDraftPipelinePreProcessingParams({
		pipeline_id: pipelineId,
		node_id: dataSourceNodeId
	}, !!pipelineId && !!dataSourceNodeId);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "system-sm-semibold-uppercase px-4 pt-2 text-text-secondary",
				children: t("inputFieldPanel.preview.stepOneTitle", { ns: "datasetPipeline" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-4 py-2",
				children: /* @__PURE__ */ jsx(DataSourceOptions, {
					onSelect: setDatasource,
					dataSourceNodeId
				})
			}),
			/* @__PURE__ */ jsx(Form, { variables: paramsConfig?.variables || [] })
		]
	});
};
var data_source_default = React$1.memo(DataSource);
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/preview/process-documents.tsx
var ProcessDocuments = ({ dataSourceNodeId }) => {
	const { t } = useTranslation();
	const pipelineId = useStore((state) => state.pipelineId);
	const { data: paramsConfig } = useDraftPipelineProcessingParams({
		pipeline_id: pipelineId,
		node_id: dataSourceNodeId
	}, !!pipelineId && !!dataSourceNodeId);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx("div", {
			className: "system-sm-semibold-uppercase px-4 pt-2 text-text-secondary",
			children: t("inputFieldPanel.preview.stepTwoTitle", { ns: "datasetPipeline" })
		}), /* @__PURE__ */ jsx(Form, { variables: paramsConfig?.variables || [] })]
	});
};
var process_documents_default = React$1.memo(ProcessDocuments);
//#endregion
//#region app/components/rag-pipeline/components/panel/input-field/preview/index.tsx
var PreviewPanel = () => {
	const { t } = useTranslation();
	const [datasource, setDatasource] = useState();
	const { toggleInputFieldPreviewPanel } = useInputFieldPanel();
	const { floatingRight, floatingRightWidth } = useFloatingRight(480);
	const handleClosePreviewPanel = useCallback(() => {
		toggleInputFieldPreviewPanel();
	}, [toggleInputFieldPreviewPanel]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("mr-1 flex h-full flex-col overflow-y-auto rounded-2xl border-y-[0.5px] border-l-[0.5px] border-components-panel-border bg-components-panel-bg shadow-xl shadow-shadow-shadow-5", "transition-all duration-300 ease-in-out", floatingRight && "absolute right-0 z-[100]"),
		style: { width: `${floatingRightWidth}px` },
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-x-2 px-4 pt-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "grow py-1",
					children: /* @__PURE__ */ jsx(badge_default, {
						className: "border-text-accent-secondary bg-components-badge-bg-dimm text-text-accent-secondary",
						children: t("operations.preview", { ns: "datasetPipeline" })
					})
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "flex size-6 shrink-0 items-center justify-center",
					onClick: handleClosePreviewPanel,
					children: /* @__PURE__ */ jsx(P7, { className: "size-4 text-text-tertiary" })
				})]
			}),
			/* @__PURE__ */ jsx(data_source_default, {
				onSelect: setDatasource,
				dataSourceNodeId: datasource?.nodeId || ""
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-4 py-2",
				children: /* @__PURE__ */ jsx(Divider, {
					type: "horizontal",
					className: "bg-divider-subtle"
				})
			}),
			/* @__PURE__ */ jsx(process_documents_default, { dataSourceNodeId: datasource?.nodeId || "" })
		]
	});
};
//#endregion
export { PreviewPanel as default };
