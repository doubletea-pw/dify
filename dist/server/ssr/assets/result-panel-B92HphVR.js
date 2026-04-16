import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { R as hasRetryNode } from "./utils-DqpfZ3W-.js";
import { Ot as BlockEnum } from "./config-Dopncj5R.js";
import { t as useTimestamp } from "./use-timestamp-DPYGivGq.js";
import { a as LoopLogTrigger, c as ErrorHandleTip, d as AgentLogTrigger, i as RetryLogTrigger, o as large_data_alert_default, t as StatusPanel, u as IterationLogTrigger } from "./status-CPKUa4Vg.js";
import { t as code_editor_default } from "./code-editor-BPvpmrXg.js";
import { t as CodeLanguage } from "./types-C18Ag7fa.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/workflow/run/meta.tsx
var MetaData = ({ status, executor, startTime, time, tokens, steps = 1, showSteps = true }) => {
	const { t } = useTranslation();
	const { formatTime } = useTimestamp();
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx("div", {
			className: "system-xs-medium-uppercase h-6 py-1 text-text-tertiary",
			children: t("meta.title", { ns: "runLog" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "py-1",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5 text-text-tertiary",
						children: t("meta.status", { ns: "runLog" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "system-xs-regular grow px-2 py-1.5 text-text-secondary",
						children: [
							status === "running" && /* @__PURE__ */ jsx("div", { className: "my-1 h-2 w-16 rounded-sm bg-text-quaternary" }),
							status === "succeeded" && /* @__PURE__ */ jsx("span", { children: "SUCCESS" }),
							status === "partial-succeeded" && /* @__PURE__ */ jsx("span", { children: "PARTIAL SUCCESS" }),
							status === "exception" && /* @__PURE__ */ jsx("span", { children: "EXCEPTION" }),
							status === "failed" && /* @__PURE__ */ jsx("span", { children: "FAIL" }),
							status === "stopped" && /* @__PURE__ */ jsx("span", { children: "STOP" }),
							status === "paused" && /* @__PURE__ */ jsx("span", { children: "PENDING" })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5 text-text-tertiary",
						children: t("meta.executor", { ns: "runLog" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "system-xs-regular grow px-2 py-1.5 text-text-secondary",
						children: [status === "running" && /* @__PURE__ */ jsx("div", { className: "my-1 h-2 w-[88px] rounded-sm bg-text-quaternary" }), status !== "running" && /* @__PURE__ */ jsx("span", { children: executor || "N/A" })]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5 text-text-tertiary",
						children: t("meta.startTime", { ns: "runLog" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "system-xs-regular grow px-2 py-1.5 text-text-secondary",
						children: [status === "running" && /* @__PURE__ */ jsx("div", { className: "my-1 h-2 w-[72px] rounded-sm bg-text-quaternary" }), status !== "running" && /* @__PURE__ */ jsx("span", { children: startTime ? formatTime(startTime, t("dateTimeFormat", { ns: "appLog" })) : "-" })]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5 text-text-tertiary",
						children: t("meta.time", { ns: "runLog" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "system-xs-regular grow px-2 py-1.5 text-text-secondary",
						children: [status === "running" && /* @__PURE__ */ jsx("div", { className: "my-1 h-2 w-[72px] rounded-sm bg-text-quaternary" }), status !== "running" && /* @__PURE__ */ jsx("span", { children: time ? `${time.toFixed(3)}s` : "-" })]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5 text-text-tertiary",
						children: t("meta.tokens", { ns: "runLog" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "system-xs-regular grow px-2 py-1.5 text-text-secondary",
						children: [["running", "paused"].includes(status) && /* @__PURE__ */ jsx("div", { className: "my-1 h-2 w-[48px] animate-pulse rounded-sm bg-text-quaternary" }), !["running", "paused"].includes(status) && /* @__PURE__ */ jsx("span", { children: `${tokens || 0} Tokens` })]
					})]
				}),
				showSteps && /* @__PURE__ */ jsxs("div", {
					className: "flex",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5 text-text-tertiary",
						children: t("meta.steps", { ns: "runLog" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "system-xs-regular grow px-2 py-1.5 text-text-secondary",
						children: [status === "running" && /* @__PURE__ */ jsx("div", { className: "my-1 h-2 w-[24px] rounded-sm bg-text-quaternary" }), status !== "running" && /* @__PURE__ */ jsx("span", { children: steps })]
					})]
				})
			]
		})]
	});
};
//#endregion
//#region app/components/workflow/run/result-panel.tsx
var ResultPanel = ({ nodeInfo, inputs, inputs_truncated, process_data, process_data_truncated, outputs, outputs_truncated, outputs_full_content, status, error, elapsed_time, total_tokens, created_at, created_by, steps, showSteps, exceptionCounts, execution_metadata, isListening = false, workflowRunId, handleShowIterationResultList, handleShowLoopResultList, onShowRetryDetail, handleShowAgentOrToolLog }) => {
	const { t } = useTranslation();
	const isIterationNode = nodeInfo?.node_type === BlockEnum.Iteration && !!nodeInfo?.details?.length;
	const isLoopNode = nodeInfo?.node_type === BlockEnum.Loop && !!nodeInfo?.details?.length;
	const isRetryNode = hasRetryNode(nodeInfo?.node_type) && !!nodeInfo?.retryDetail?.length;
	const isAgentNode = nodeInfo?.node_type === BlockEnum.Agent && !!nodeInfo?.agentLog?.length;
	const isToolNode = nodeInfo?.node_type === BlockEnum.Tool && !!nodeInfo?.agentLog?.length;
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-components-panel-bg py-2",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-4 py-2",
				children: /* @__PURE__ */ jsx(StatusPanel, {
					status,
					time: elapsed_time,
					tokens: total_tokens,
					error,
					exceptionCounts,
					isListening,
					workflowRunId
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "px-4",
				children: [
					isIterationNode && handleShowIterationResultList && /* @__PURE__ */ jsx(IterationLogTrigger, {
						nodeInfo,
						onShowIterationResultList: handleShowIterationResultList
					}),
					isLoopNode && handleShowLoopResultList && /* @__PURE__ */ jsx(LoopLogTrigger, {
						nodeInfo,
						onShowLoopResultList: handleShowLoopResultList
					}),
					isRetryNode && onShowRetryDetail && /* @__PURE__ */ jsx(RetryLogTrigger, {
						nodeInfo,
						onShowRetryResultList: onShowRetryDetail
					}),
					(isAgentNode || isToolNode) && handleShowAgentOrToolLog && /* @__PURE__ */ jsx(AgentLogTrigger, {
						nodeInfo,
						onShowAgentOrToolLog: handleShowAgentOrToolLog
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-2 px-4 py-2",
				children: [
					/* @__PURE__ */ jsx(code_editor_default, {
						readOnly: true,
						title: /* @__PURE__ */ jsx("div", { children: t("common.input", { ns: "workflow" }).toLocaleUpperCase() }),
						language: CodeLanguage.json,
						value: inputs,
						isJSONStringifyBeauty: true,
						footer: inputs_truncated && /* @__PURE__ */ jsx(large_data_alert_default, {
							textHasNoExport: true,
							className: "mx-1 mb-1 mt-2 h-7"
						})
					}),
					process_data && /* @__PURE__ */ jsx(code_editor_default, {
						readOnly: true,
						title: /* @__PURE__ */ jsx("div", { children: t("common.processData", { ns: "workflow" }).toLocaleUpperCase() }),
						language: CodeLanguage.json,
						value: process_data,
						isJSONStringifyBeauty: true,
						footer: process_data_truncated && /* @__PURE__ */ jsx(large_data_alert_default, {
							textHasNoExport: true,
							className: "mx-1 mb-1 mt-2 h-7"
						})
					}),
					(outputs || status === "running") && /* @__PURE__ */ jsx(code_editor_default, {
						readOnly: true,
						title: /* @__PURE__ */ jsx("div", { children: t("common.output", { ns: "workflow" }).toLocaleUpperCase() }),
						language: CodeLanguage.json,
						value: outputs,
						isJSONStringifyBeauty: true,
						tip: /* @__PURE__ */ jsx(ErrorHandleTip, { type: execution_metadata?.error_strategy }),
						footer: outputs_truncated && /* @__PURE__ */ jsx(large_data_alert_default, {
							textHasNoExport: true,
							downloadUrl: outputs_full_content?.download_url,
							className: "mx-1 mb-1 mt-2 h-7"
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-4 py-2",
				children: /* @__PURE__ */ jsx("div", { className: "divider-subtle h-[0.5px]" })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-4 py-2",
				children: /* @__PURE__ */ jsx(MetaData, {
					status,
					executor: created_by,
					startTime: created_at,
					time: elapsed_time,
					tokens: total_tokens,
					steps,
					showSteps
				})
			})
		]
	});
};
//#endregion
export { ResultPanel as t };
