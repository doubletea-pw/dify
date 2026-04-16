import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { Vt as WorkflowRunningStatus } from "./config-Dopncj5R.js";
import { Qn as useStore } from "./hooks-Bj_4KA1b.js";
import { T as toast } from "./base-BuKAg6Le.js";
import { t as Loading } from "./loading-BryKikzY.js";
import { r as TracingPanel, s as StatusContainer, t as StatusPanel } from "./status-CPKUa4Vg.js";
import { l as Markdown, t as code_editor_default } from "./code-editor-BPvpmrXg.js";
import { c as getProcessedFilesFromResponse } from "./utils-Dh7W533Q.js";
import { t as CodeLanguage } from "./types-C18Ag7fa.js";
import { t as FileList } from "./file-uploader-DuOqY7O5.js";
import { t as ResultPanel } from "./result-panel-B92HphVR.js";
import { i as fetchTracingList, r as fetchRunDetail } from "./log-C5ooGRGD.js";
import { t as loading_anim_default } from "./loading-anim-Ck_Modzp.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/run/output-panel.tsx
var OutputPanel = ({ isRunning, outputs, error, height }) => {
	const isTextOutput = useMemo(() => {
		if (!outputs || typeof outputs !== "object") return false;
		const keys = Object.keys(outputs);
		const value = outputs[keys[0]];
		return keys.length === 1 && (typeof value === "string" || Array.isArray(value) && value.every((item) => typeof item === "string"));
	}, [outputs]);
	const fileList = useMemo(() => {
		const fileList = [];
		if (!outputs) return fileList;
		if (Object.keys(outputs).length > 1) return fileList;
		for (const key in outputs) if (Array.isArray(outputs[key])) outputs[key].map((output) => {
			if (output?.dify_model_identity === "__dify__file__") fileList.push(output);
			return null;
		});
		else if (outputs[key]?.dify_model_identity === "__dify__file__") fileList.push(outputs[key]);
		return getProcessedFilesFromResponse(fileList);
	}, [outputs]);
	return /* @__PURE__ */ jsxs("div", {
		className: "p-2",
		children: [
			isRunning && /* @__PURE__ */ jsx("div", {
				className: "pl-[26px] pt-4",
				children: /* @__PURE__ */ jsx(loading_anim_default, { type: "text" })
			}),
			!isRunning && error && /* @__PURE__ */ jsx("div", {
				className: "px-4",
				children: /* @__PURE__ */ jsx(StatusContainer, {
					status: "failed",
					children: error
				})
			}),
			!isRunning && !outputs && /* @__PURE__ */ jsx("div", {
				className: "px-4 py-2",
				children: /* @__PURE__ */ jsx(Markdown, { content: "No Output" })
			}),
			isTextOutput && /* @__PURE__ */ jsx("div", {
				className: "px-4 py-2",
				children: /* @__PURE__ */ jsx(Markdown, { content: Array.isArray(outputs[Object.keys(outputs)[0]]) ? outputs[Object.keys(outputs)[0]].join("\n") : outputs[Object.keys(outputs)[0]] || "" })
			}),
			fileList.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "px-4 py-2",
				children: /* @__PURE__ */ jsx(FileList, {
					files: fileList,
					showDeleteAction: false,
					showDownloadAction: true,
					canPreview: true
				})
			}),
			!isTextOutput && outputs && Object.keys(outputs).length > 0 && height > 0 && /* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-2",
				children: /* @__PURE__ */ jsx(code_editor_default, {
					showFileList: true,
					readOnly: true,
					title: /* @__PURE__ */ jsx("div", {
						tabIndex: 0,
						children: "Output"
					}),
					language: CodeLanguage.json,
					value: JSON.stringify(outputs, null, 2),
					isJSONStringifyBeauty: true,
					height: height ? (height - 16) / 2 : void 0
				})
			})
		]
	});
};
//#endregion
//#region app/components/workflow/run/index.tsx
var RunPanel = ({ hideResult, activeTab = "RESULT", getResultCallback, runDetailUrl, tracingListUrl }) => {
	const { t } = useTranslation();
	const [currentTab, setCurrentTab] = useState(activeTab);
	const [loading, setLoading] = useState(true);
	const [runDetail, setRunDetail] = useState();
	const [list, setList] = useState([]);
	const isListening = useStore((s) => s.isListening);
	const executor = useMemo(() => {
		if (runDetail?.created_by_role === "account") return runDetail.created_by_account?.name || "";
		if (runDetail?.created_by_role === "end_user") return runDetail.created_by_end_user?.session_id || "";
		return "N/A";
	}, [runDetail]);
	const getResult = useCallback(async () => {
		try {
			const res = await fetchRunDetail(runDetailUrl);
			setRunDetail(res);
			if (getResultCallback) getResultCallback(res);
		} catch (err) {
			toast.error(`${err}`);
		}
	}, [getResultCallback, runDetailUrl]);
	const getTracingList = useCallback(async () => {
		try {
			const { data: nodeList } = await fetchTracingList({ url: tracingListUrl });
			setList(nodeList);
		} catch (err) {
			toast.error(`${err}`);
		}
	}, [tracingListUrl]);
	const getData = useCallback(async () => {
		setLoading(true);
		await getResult();
		await getTracingList();
		setLoading(false);
	}, [getResult, getTracingList]);
	const switchTab = async (tab) => {
		setCurrentTab(tab);
		if (tab === "RESULT") {
			if (runDetailUrl) await getResult();
		}
		if (tracingListUrl) await getTracingList();
	};
	useEffect(() => {
		if (isListening) setCurrentTab("DETAIL");
	}, [isListening]);
	useEffect(() => {
		if (runDetailUrl && tracingListUrl) getData();
	}, [runDetailUrl, tracingListUrl]);
	const [height, setHeight] = useState(0);
	const ref = useRef(null);
	const adjustResultHeight = () => {
		if (ref.current) setHeight(ref.current?.clientHeight - 16 - 16 - 2 - 1);
	};
	useEffect(() => {
		adjustResultHeight();
	}, [loading]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex grow flex-col",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-center border-b-[0.5px] border-divider-subtle px-4",
			children: [
				!hideResult && /* @__PURE__ */ jsx("div", {
					className: cn("mr-6 cursor-pointer border-b-2 border-transparent py-3 text-text-tertiary system-sm-semibold-uppercase", currentTab === "RESULT" && "!border-util-colors-blue-brand-blue-brand-600 text-text-primary"),
					onClick: () => switchTab("RESULT"),
					children: t("result", { ns: "runLog" })
				}),
				/* @__PURE__ */ jsx("div", {
					className: cn("mr-6 cursor-pointer border-b-2 border-transparent py-3 text-text-tertiary system-sm-semibold-uppercase", currentTab === "DETAIL" && "!border-util-colors-blue-brand-blue-brand-600 text-text-primary"),
					onClick: () => switchTab("DETAIL"),
					children: t("detail", { ns: "runLog" })
				}),
				/* @__PURE__ */ jsx("div", {
					className: cn("mr-6 cursor-pointer border-b-2 border-transparent py-3 text-text-tertiary system-sm-semibold-uppercase", currentTab === "TRACING" && "!border-util-colors-blue-brand-blue-brand-600 text-text-primary"),
					onClick: () => switchTab("TRACING"),
					children: t("tracing", { ns: "runLog" })
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			ref,
			className: cn("relative h-0 grow overflow-y-auto rounded-b-xl bg-components-panel-bg"),
			children: [
				loading && /* @__PURE__ */ jsx("div", {
					className: "flex h-full items-center justify-center bg-components-panel-bg",
					children: /* @__PURE__ */ jsx(Loading, {})
				}),
				!loading && currentTab === "RESULT" && runDetail && /* @__PURE__ */ jsx(OutputPanel, {
					outputs: runDetail.outputs,
					error: runDetail.error,
					height
				}),
				!loading && currentTab === "DETAIL" && runDetail && /* @__PURE__ */ jsx(ResultPanel, {
					inputs: runDetail.inputs,
					inputs_truncated: runDetail.inputs_truncated,
					outputs: runDetail.outputs,
					outputs_truncated: runDetail.outputs_truncated,
					outputs_full_content: runDetail.outputs_full_content,
					status: runDetail.status,
					error: runDetail.error,
					elapsed_time: runDetail.elapsed_time,
					total_tokens: runDetail.total_tokens,
					created_at: runDetail.created_at,
					created_by: executor,
					steps: runDetail.total_steps,
					exceptionCounts: runDetail.exceptions_count,
					isListening,
					workflowRunId: runDetail.id
				}),
				!loading && currentTab === "DETAIL" && !runDetail && isListening && /* @__PURE__ */ jsx(StatusPanel, {
					status: WorkflowRunningStatus.Running,
					isListening: true
				}),
				!loading && currentTab === "TRACING" && /* @__PURE__ */ jsx(TracingPanel, {
					className: "bg-background-section-burn",
					list
				})
			]
		})]
	});
};
//#endregion
export { RunPanel as t };
