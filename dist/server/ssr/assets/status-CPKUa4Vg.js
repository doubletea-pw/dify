import { E as Dm, L as GV, Lt as Rt, S as D, Tr as n7, _n as XZ, et as Jy, ir as ft, lr as i2, ot as Ky, tt as K1, xr as lH, zr as r2 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { n as useBoolean, t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { R as hasRetryNode } from "./utils-DqpfZ3W-.js";
import { Ft as NodeRunningStatus, Ot as BlockEnum } from "./config-Dopncj5R.js";
import { t as cloneDeep } from "./cloneDeep-nndvIxet.js";
import { zr as block_icon_default } from "./hooks-Bj_4KA1b.js";
import { r as get } from "./base-BuKAg6Le.js";
import { g as Icon, u as Icon$1 } from "./workflow-CULNEjcb.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { l as Theme } from "./app-DPjSIfgb.js";
import { A as Indicator } from "./credential-item-C22_bUSw.js";
import { n as useQuery } from "./useMutation-CRBpDOZ8.js";
import { n as useDocLink } from "./i18n-lDm19WzR.js";
import { t as useTheme } from "./use-theme-3YxPQV4B.js";
import { t as useGetIcon } from "./use-get-icon-D8ihnTYG.js";
import { t as code_editor_default } from "./code-editor-BPvpmrXg.js";
import { t as CodeLanguage } from "./types-C18Ag7fa.js";
import { t as ErrorHandleTypeEnum } from "./types-BJj1k75y.js";
import * as React$1 from "react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region service/use-log.ts
var NAME_SPACE = "log";
var useAnnotationsCount = (appId) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"annotations-count",
			appId
		],
		queryFn: () => get(`/apps/${appId}/annotations/count`),
		enabled: !!appId
	});
};
var useChatConversations = ({ appId, params }) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"chat-conversations",
			appId,
			params
		],
		queryFn: () => get(`/apps/${appId}/chat-conversations`, { params }),
		enabled: !!appId
	});
};
var useCompletionConversations = ({ appId, params }) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"completion-conversations",
			appId,
			params
		],
		queryFn: () => get(`/apps/${appId}/completion-conversations`, { params }),
		enabled: !!appId
	});
};
var useChatConversationDetail = (appId, conversationId) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"chat-conversation-detail",
			appId,
			conversationId
		],
		queryFn: () => get(`/apps/${appId}/chat-conversations/${conversationId}`),
		enabled: !!appId && !!conversationId
	});
};
var useCompletionConversationDetail = (appId, conversationId) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"completion-conversation-detail",
			appId,
			conversationId
		],
		queryFn: () => get(`/apps/${appId}/completion-conversations/${conversationId}`),
		enabled: !!appId && !!conversationId
	});
};
var useWorkflowLogs = ({ appId, params }) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"workflow-logs",
			appId,
			params
		],
		queryFn: () => get(`/apps/${appId}/workflow-app-logs`, { params }),
		enabled: !!appId
	});
};
var useWorkflowPausedDetails = ({ workflowRunId, enabled = true }) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"workflow-paused-details",
			workflowRunId
		],
		queryFn: () => get(`/workflow/${workflowRunId}/pause-details`),
		enabled: enabled && !!workflowRunId
	});
};
//#endregion
//#region app/components/workflow/run/hooks.ts
var useLogs = () => {
	const [showRetryDetail, { setTrue: setShowRetryDetailTrue, setFalse: setShowRetryDetailFalse }] = useBoolean(false);
	const [retryResultList, setRetryResultList] = useState([]);
	const handleShowRetryResultList = useCallback((detail) => {
		setShowRetryDetailTrue();
		setRetryResultList(detail);
	}, [setShowRetryDetailTrue, setRetryResultList]);
	const [showIteratingDetail, { setTrue: setShowIteratingDetailTrue, setFalse: setShowIteratingDetailFalse }] = useBoolean(false);
	const [iterationResultList, setIterationResultList] = useState([]);
	const [iterationResultDurationMap, setIterationResultDurationMap] = useState({});
	const handleShowIterationResultList = useCallback((detail, iterDurationMap) => {
		setShowIteratingDetailTrue();
		setIterationResultList(detail);
		setIterationResultDurationMap(iterDurationMap);
	}, [
		setShowIteratingDetailTrue,
		setIterationResultList,
		setIterationResultDurationMap
	]);
	const [showLoopingDetail, { setTrue: setShowLoopingDetailTrue, setFalse: setShowLoopingDetailFalse }] = useBoolean(false);
	const [loopResultList, setLoopResultList] = useState([]);
	const [loopResultDurationMap, setLoopResultDurationMap] = useState({});
	const [loopResultVariableMap, setLoopResultVariableMap] = useState({});
	const handleShowLoopResultList = useCallback((detail, loopDurationMap, loopVariableMap) => {
		setShowLoopingDetailTrue();
		setLoopResultList(detail);
		setLoopResultDurationMap(loopDurationMap);
		setLoopResultVariableMap(loopVariableMap);
	}, [
		setShowLoopingDetailTrue,
		setLoopResultList,
		setLoopResultDurationMap
	]);
	const [agentOrToolLogItemStack, setAgentOrToolLogItemStack] = useState([]);
	const agentOrToolLogItemStackRef = useRef(agentOrToolLogItemStack);
	const [agentOrToolLogListMap, setAgentOrToolLogListMap] = useState({});
	const agentOrToolLogListMapRef = useRef(agentOrToolLogListMap);
	const handleShowAgentOrToolLog = useCallback((detail) => {
		if (!detail) {
			setAgentOrToolLogItemStack([]);
			agentOrToolLogItemStackRef.current = [];
			return;
		}
		const { message_id: id, children } = detail;
		let currentAgentOrToolLogItemStack = agentOrToolLogItemStackRef.current.slice();
		const index = currentAgentOrToolLogItemStack.findIndex((logItem) => logItem.message_id === id);
		if (index > -1) currentAgentOrToolLogItemStack = currentAgentOrToolLogItemStack.slice(0, index + 1);
		else currentAgentOrToolLogItemStack = [...currentAgentOrToolLogItemStack.slice(), detail];
		setAgentOrToolLogItemStack(currentAgentOrToolLogItemStack);
		agentOrToolLogItemStackRef.current = currentAgentOrToolLogItemStack;
		if (children) setAgentOrToolLogListMap({
			...agentOrToolLogListMapRef.current,
			[id]: children
		});
	}, [setAgentOrToolLogItemStack, setAgentOrToolLogListMap]);
	return {
		showSpecialResultPanel: showRetryDetail || showIteratingDetail || showLoopingDetail || !!agentOrToolLogItemStack.length,
		showRetryDetail,
		setShowRetryDetailTrue,
		setShowRetryDetailFalse,
		retryResultList,
		setRetryResultList,
		handleShowRetryResultList,
		showIteratingDetail,
		setShowIteratingDetailTrue,
		setShowIteratingDetailFalse,
		iterationResultList,
		setIterationResultList,
		iterationResultDurationMap,
		setIterationResultDurationMap,
		handleShowIterationResultList,
		showLoopingDetail,
		setShowLoopingDetailTrue,
		setShowLoopingDetailFalse,
		loopResultList,
		setLoopResultList,
		loopResultDurationMap,
		setLoopResultDurationMap,
		loopResultVariableMap,
		setLoopResultVariableMap,
		handleShowLoopResultList,
		agentOrToolLogItemStack,
		agentOrToolLogListMap,
		handleShowAgentOrToolLog
	};
};
//#endregion
//#region app/components/workflow/run/agent-log/agent-log-trigger.tsx
var AgentLogTrigger = ({ nodeInfo, onShowAgentOrToolLog }) => {
	const { t } = useTranslation();
	const { agentLog, execution_metadata } = nodeInfo;
	const agentStrategy = execution_metadata?.tool_info?.agent_strategy;
	return /* @__PURE__ */ jsxs("div", {
		className: "cursor-pointer rounded-[10px] bg-components-button-tertiary-bg",
		onClick: () => {
			onShowAgentOrToolLog({
				message_id: nodeInfo.id,
				children: agentLog || []
			});
		},
		children: [/* @__PURE__ */ jsx("div", {
			className: "system-2xs-medium-uppercase flex items-center px-3 pt-2 text-text-tertiary",
			children: t("nodes.agent.strategy.label", { ns: "workflow" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center pb-1.5 pl-3 pr-2 pt-1",
			children: [agentStrategy && /* @__PURE__ */ jsx("div", {
				className: "system-xs-medium grow text-text-secondary",
				children: agentStrategy
			}), /* @__PURE__ */ jsxs("div", {
				className: "system-xs-regular-uppercase flex shrink-0 cursor-pointer items-center px-[1px] text-text-tertiary",
				children: [t("detail", { ns: "runLog" }), /* @__PURE__ */ jsx(i2, { className: "ml-0.5 h-3.5 w-3.5" })]
			})]
		})]
	});
};
//#endregion
//#region app/components/workflow/nodes/_base/components/node-status-icon.tsx
var NodeStatusIcon = ({ status, className }) => {
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		status === "succeeded" && /* @__PURE__ */ jsx(n7, { className: cn("h-4 w-4 shrink-0 text-text-success", className) }),
		status === "failed" && /* @__PURE__ */ jsx(Rt, { className: cn("h-4 w-4 shrink-0 text-text-warning", className) }),
		(status === "stopped" || status === "exception") && /* @__PURE__ */ jsx(D, { className: cn("h-4 w-4 shrink-0 text-text-warning-secondary", className) }),
		status === "running" && /* @__PURE__ */ jsx(Dm, { className: cn("h-4 w-4 shrink-0 animate-spin text-text-accent", className) })
	] });
};
//#endregion
//#region app/components/workflow/run/agent-log/agent-log-item.tsx
var AgentLogItem = ({ item, onShowAgentOrToolLog }) => {
	const { label, status, children, data, metadata } = item;
	const [expanded, setExpanded] = useState(false);
	const { getIconUrl } = useGetIcon();
	const toolIcon = useMemo(() => {
		const icon = metadata?.icon;
		if (icon) {
			if (icon.includes("http")) return icon;
			return getIconUrl(icon);
		}
		return "";
	}, [getIconUrl, metadata?.icon]);
	const mergeStatus = useMemo(() => {
		if (status === "start") return "running";
		return status;
	}, [status]);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-[10px] border-[0.5px] border-components-panel-border bg-background-default",
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("flex cursor-pointer items-center pb-2 pl-1.5 pr-3 pt-2", expanded && "pb-1"),
			onClick: () => setExpanded(!expanded),
			children: [
				expanded ? /* @__PURE__ */ jsx(r2, { className: "h-4 w-4 shrink-0 rotate-90 text-text-quaternary" }) : /* @__PURE__ */ jsx(r2, { className: "h-4 w-4 shrink-0 text-text-quaternary" }),
				/* @__PURE__ */ jsx(block_icon_default, {
					className: "mr-1.5 shrink-0",
					type: toolIcon ? BlockEnum.Tool : BlockEnum.Agent,
					toolIcon
				}),
				/* @__PURE__ */ jsx("div", {
					className: "system-sm-semibold-uppercase grow truncate text-text-secondary",
					title: label,
					children: label
				}),
				!!metadata?.elapsed_time && /* @__PURE__ */ jsxs("div", {
					className: "system-xs-regular mr-2 shrink-0 text-text-tertiary",
					children: [metadata?.elapsed_time?.toFixed(3), "s"]
				}),
				/* @__PURE__ */ jsx(NodeStatusIcon, { status: mergeStatus })
			]
		}), expanded && /* @__PURE__ */ jsxs("div", {
			className: "p-1 pt-0",
			children: [!!children?.length && /* @__PURE__ */ jsxs(Button, {
				className: "mb-1 flex w-full items-center justify-between",
				variant: "tertiary",
				onClick: () => onShowAgentOrToolLog(item),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					children: [/* @__PURE__ */ jsx(Jy, { className: "mr-1 h-4 w-4 shrink-0 text-components-button-tertiary-text" }), `${children.length} Action Logs`]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex",
					children: /* @__PURE__ */ jsx(r2, { className: "h-4 w-4 shrink-0 text-components-button-tertiary-text" })
				})]
			}), data && /* @__PURE__ */ jsx(code_editor_default, {
				readOnly: true,
				title: /* @__PURE__ */ jsx("div", { children: "data".toLocaleUpperCase() }),
				language: CodeLanguage.json,
				value: data,
				isJSONStringifyBeauty: true
			})]
		})]
	});
};
//#endregion
//#region app/components/workflow/run/agent-log/agent-log-nav-more.tsx
var AgentLogNavMore = ({ options, onShowAgentOrToolLog }) => {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		placement: "bottom-start",
		offset: {
			mainAxis: 2,
			crossAxis: -54
		},
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => setOpen((v) => !v),
			children: /* @__PURE__ */ jsx(Button, {
				className: "h-6 w-6",
				variant: "ghost-accent",
				children: /* @__PURE__ */ jsx(lH, { className: "h-4 w-4" })
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, { children: /* @__PURE__ */ jsx("div", {
			className: "w-[136px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-1 shadow-lg",
			children: options.map((option) => /* @__PURE__ */ jsx("div", {
				className: "system-md-regular flex h-8 cursor-pointer items-center rounded-lg px-2 text-text-secondary hover:bg-state-base-hover",
				onClick: () => {
					onShowAgentOrToolLog(option);
					setOpen(false);
				},
				children: option.label
			}, option.message_id))
		}) })]
	});
};
//#endregion
//#region app/components/workflow/run/agent-log/agent-log-nav.tsx
var AgentLogNav = ({ agentOrToolLogItemStack, onShowAgentOrToolLog }) => {
	const { t } = useTranslation();
	const agentOrToolLogItemStackLength = agentOrToolLogItemStack.length;
	const first = agentOrToolLogItemStack[0];
	const mid = agentOrToolLogItemStack.slice(1, -1);
	const end = agentOrToolLogItemStack.at(-1);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-8 items-center bg-components-panel-bg p-1 pr-3",
		children: [
			/* @__PURE__ */ jsxs(Button, {
				className: "shrink-0 px-[5px]",
				size: "small",
				variant: "ghost-accent",
				onClick: () => {
					onShowAgentOrToolLog();
				},
				children: [/* @__PURE__ */ jsx(K1, { className: "mr-1 h-3.5 w-3.5" }), "AGENT"]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "system-xs-regular mx-0.5 shrink-0 text-divider-deep",
				children: "/"
			}),
			agentOrToolLogItemStackLength > 1 ? /* @__PURE__ */ jsx(Button, {
				className: "shrink-0 px-[5px]",
				size: "small",
				variant: "ghost-accent",
				onClick: () => onShowAgentOrToolLog(first),
				children: t("nodes.agent.strategy.label", { ns: "workflow" })
			}) : /* @__PURE__ */ jsx("div", {
				className: "system-xs-medium-uppercase flex items-center px-[5px] text-text-tertiary",
				children: t("nodes.agent.strategy.label", { ns: "workflow" })
			}),
			!!mid.length && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
				className: "system-xs-regular mx-0.5 shrink-0 text-divider-deep",
				children: "/"
			}), /* @__PURE__ */ jsx(AgentLogNavMore, {
				options: mid,
				onShowAgentOrToolLog
			})] }),
			!!end && agentOrToolLogItemStackLength > 1 && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
				className: "system-xs-regular mx-0.5 shrink-0 text-divider-deep",
				children: "/"
			}), /* @__PURE__ */ jsx("div", {
				className: "system-xs-medium-uppercase flex items-center px-[5px] text-text-tertiary",
				children: end.label
			})] })
		]
	});
};
//#endregion
//#region app/components/workflow/run/agent-log/agent-result-panel.tsx
var AgentResultPanel = ({ agentOrToolLogItemStack, agentOrToolLogListMap, onShowAgentOrToolLog }) => {
	const { t } = useTranslation();
	const top = agentOrToolLogItemStack[agentOrToolLogItemStack.length - 1];
	const list = agentOrToolLogListMap[top.message_id];
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-y-auto bg-background-section",
		children: [
			/* @__PURE__ */ jsx(AgentLogNav, {
				agentOrToolLogItemStack,
				onShowAgentOrToolLog
			}),
			/* @__PURE__ */ jsx("div", {
				className: "space-y-1 p-2",
				children: list.map((item) => /* @__PURE__ */ jsx(AgentLogItem, {
					item,
					onShowAgentOrToolLog
				}, item.message_id))
			}),
			top.hasCircle && /* @__PURE__ */ jsxs("div", {
				className: "mt-1 flex items-center rounded-xl border border-components-panel-border bg-components-panel-bg-blur px-3 pr-2 shadow-md",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 rounded-xl opacity-[0.4]",
						style: { background: "linear-gradient(92deg, rgba(247, 144, 9, 0.25) 0%, rgba(255, 255, 255, 0.00) 100%)" }
					}),
					/* @__PURE__ */ jsx(D, { className: "mr-1.5 h-4 w-4 text-text-warning-secondary" }),
					/* @__PURE__ */ jsx("div", {
						className: "system-xs-medium text-text-primary",
						children: t("circularInvocationTip", { ns: "runLog" })
					})
				]
			})
		]
	});
};
//#endregion
//#region app/components/workflow/run/iteration-log/iteration-log-trigger.tsx
var getIterationDurationMap = (nodeInfo) => {
	return nodeInfo.iterDurationMap || nodeInfo.execution_metadata?.iteration_duration_map || {};
};
var getDisplayIterationCount = (nodeInfo) => {
	const iterationDurationMap = nodeInfo.execution_metadata?.iteration_duration_map;
	if (iterationDurationMap) return Object.keys(iterationDurationMap).length;
	if (nodeInfo.details?.length) return nodeInfo.details.length;
	return nodeInfo.metadata?.iterator_length ?? 0;
};
var getFailedIterationIndices = (details, nodeInfo, allExecutions) => {
	if (!details?.length) return /* @__PURE__ */ new Set();
	const failedIterationIndices = /* @__PURE__ */ new Set();
	details.forEach((iteration, index) => {
		if (!iteration.some((item) => item.status === NodeRunningStatus.Failed)) return;
		const iterationIndex = iteration[0]?.execution_metadata?.iteration_index ?? index;
		failedIterationIndices.add(iterationIndex);
	});
	if (!nodeInfo.execution_metadata?.iteration_duration_map || !allExecutions) return failedIterationIndices;
	allExecutions.forEach((execution) => {
		if (execution.execution_metadata?.iteration_id === nodeInfo.node_id && execution.status === NodeRunningStatus.Failed && execution.execution_metadata?.iteration_index !== void 0) failedIterationIndices.add(execution.execution_metadata.iteration_index);
	});
	return failedIterationIndices;
};
var IterationLogTrigger = ({ nodeInfo, allExecutions, onShowIterationResultList }) => {
	const { t } = useTranslation();
	const getNodesForInstance = (key) => {
		if (!allExecutions) return [];
		const parallelNodes = allExecutions.filter((exec) => exec.execution_metadata?.parallel_mode_run_id === key);
		if (parallelNodes.length > 0) return parallelNodes;
		const serialIndex = Number.parseInt(key, 10);
		if (!isNaN(serialIndex)) {
			const serialNodes = allExecutions.filter((exec) => exec.execution_metadata?.iteration_id === nodeInfo.node_id && exec.execution_metadata?.iteration_index === serialIndex);
			if (serialNodes.length > 0) return serialNodes;
		}
		return [];
	};
	const getStructuredIterationList = () => {
		const iterationNodeMeta = nodeInfo.execution_metadata;
		if (!iterationNodeMeta?.iteration_duration_map) return nodeInfo.details || [];
		const structuredList = Object.keys(iterationNodeMeta.iteration_duration_map).map(getNodesForInstance).filter((branchNodes) => branchNodes.length > 0);
		if (!allExecutions || !nodeInfo.details?.length) return structuredList;
		const existingIterationIndices = /* @__PURE__ */ new Set();
		structuredList.forEach((iteration) => {
			iteration.forEach((node) => {
				if (node.execution_metadata?.iteration_index !== void 0) existingIterationIndices.add(node.execution_metadata.iteration_index);
			});
		});
		nodeInfo.details.forEach((iteration, index) => {
			if (!existingIterationIndices.has(index) && iteration.some((node) => node.status === NodeRunningStatus.Failed)) structuredList.push(iteration);
		});
		return structuredList.sort((a, b) => {
			return (a[0]?.execution_metadata?.iteration_index ?? 0) - (b[0]?.execution_metadata?.iteration_index ?? 0);
		});
	};
	const handleOnShowIterationDetail = (e) => {
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
		onShowIterationResultList(getStructuredIterationList(), getIterationDurationMap(nodeInfo));
	};
	const displayIterationCount = getDisplayIterationCount(nodeInfo);
	const errorCount = getFailedIterationIndices(nodeInfo.details, nodeInfo, allExecutions).size;
	return /* @__PURE__ */ jsxs(Button, {
		className: "flex w-full cursor-pointer items-center gap-2 self-stretch rounded-lg border-none bg-components-button-tertiary-bg-hover px-3 py-2 hover:bg-components-button-tertiary-bg-hover",
		onClick: handleOnShowIterationDetail,
		children: [
			/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 shrink-0 text-components-button-tertiary-text" }),
			/* @__PURE__ */ jsxs("div", {
				className: "system-sm-medium flex-1 text-left text-components-button-tertiary-text",
				children: [t("nodes.iteration.iteration", {
					ns: "workflow",
					count: displayIterationCount
				}), errorCount > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [t("nodes.iteration.comma", { ns: "workflow" }), t("nodes.iteration.error", {
					ns: "workflow",
					count: errorCount
				})] })]
			}),
			/* @__PURE__ */ jsx(r2, { className: "h-4 w-4 shrink-0 text-components-button-tertiary-text" })
		]
	});
};
//#endregion
//#region app/components/workflow/run/utils/format-log/agent/index.ts
var supportedAgentLogNodes = [BlockEnum.Agent, BlockEnum.Tool];
var remove = (node, removeId) => {
	let { children } = node;
	if (!children || children.length === 0) return;
	if (!!children.find((c) => {
		return (c.message_id || c.id) === removeId;
	})) {
		node.hasCircle = true;
		node.children = node.children.filter((c) => {
			return (c.message_id || c.id) !== removeId;
		});
		children = node.children;
	}
	children.forEach((child) => {
		remove(child, removeId);
	});
};
var removeRepeatedSiblings = (list) => {
	if (!list || list.length === 0) return [];
	const result = [];
	const addedItemIds = [];
	list.forEach((item) => {
		const itemId = item.message_id || item.id;
		if (itemId && !addedItemIds.includes(itemId)) {
			result.push(item);
			addedItemIds.push(itemId);
		}
	});
	return result;
};
var removeCircleLogItem = (log) => {
	const newLog = cloneDeep(log);
	if (!newLog.children || newLog.children.length === 0) return newLog;
	newLog.children = removeRepeatedSiblings(newLog.children);
	const id = newLog.message_id || newLog.id;
	let { children } = newLog;
	if (!!children.find((c) => {
		return (c.message_id || c.id) === id;
	})) {
		newLog.hasCircle = true;
		newLog.children = newLog.children.filter((c) => {
			return (c.message_id || c.id) !== id;
		});
		children = newLog.children;
	}
	children.forEach((child, index) => {
		remove(child, id);
		children[index] = removeCircleLogItem(child);
	});
	return newLog;
};
var listToTree = (logs) => {
	if (!logs || logs.length === 0) return [];
	const itemsById = /* @__PURE__ */ new Map();
	const childrenById = /* @__PURE__ */ new Map();
	logs.forEach((item) => {
		const itemId = item.message_id || item.id;
		if (itemId && !itemsById.has(itemId)) itemsById.set(itemId, item);
		if (itemId && !childrenById.has(itemId)) childrenById.set(itemId, []);
		if (item.parent_id) {
			if (!childrenById.has(item.parent_id)) childrenById.set(item.parent_id, []);
			childrenById.get(item.parent_id).push(item);
		}
	});
	const tree = [];
	itemsById.forEach((item) => {
		if (!!!item.parent_id) {
			const itemId = item.message_id || item.id;
			const children = childrenById.get(itemId);
			if (children && children.length > 0) item.children = children;
			tree.push(item);
		}
	});
	itemsById.forEach((item) => {
		const itemId = item.message_id || item.id;
		const children = childrenById.get(itemId);
		if (children && children.length > 0) item.children = children;
	});
	return tree;
};
var format$2 = (list) => {
	return list.map((item) => {
		let treeList = [];
		let removedCircleTree = [];
		if (supportedAgentLogNodes.includes(item.node_type) && item.execution_metadata?.agent_log && item.execution_metadata?.agent_log.length > 0) treeList = listToTree(item.execution_metadata.agent_log);
		removedCircleTree = treeList.length > 0 ? treeList.map((t) => removeCircleLogItem(t)) : [];
		item.agentLog = removedCircleTree;
		return item;
	});
};
//#endregion
//#region app/components/workflow/run/utils/format-log/human-input/index.ts
/**
* Format human-input nodes to ensure only the latest status is kept for each node.
* Human-input nodes can have multiple log entries as their status changes
* (e.g., running -> paused -> succeeded/failed).
* This function keeps only the entry with the latest index for each unique node_id.
*/
var formatHumanInputNode = (list) => {
	const humanInputNodeMap = /* @__PURE__ */ new Map();
	const humanInputNodeIds = /* @__PURE__ */ new Set();
	list.forEach((item) => {
		if (item.node_type === BlockEnum.HumanInput) {
			humanInputNodeIds.add(item.node_id);
			const existingNode = humanInputNodeMap.get(item.node_id);
			if (!existingNode || item.index > existingNode.index) humanInputNodeMap.set(item.node_id, item);
		}
	});
	if (humanInputNodeIds.size === 0) return list;
	const result = [];
	const addedHumanInputNodeIds = /* @__PURE__ */ new Set();
	list.forEach((item) => {
		if (item.node_type === BlockEnum.HumanInput) {
			if (!addedHumanInputNodeIds.has(item.node_id)) {
				const latestNode = humanInputNodeMap.get(item.node_id);
				if (latestNode) {
					result.push(latestNode);
					addedHumanInputNodeIds.add(item.node_id);
				}
			}
		} else result.push(item);
	});
	return result;
};
//#endregion
//#region app/components/workflow/run/utils/format-log/parallel/index.ts
function printNodeStructure(node, depth) {
	const indent = "  ".repeat(depth);
	console.log(`${indent}${node.title}`);
	if (node.parallelDetail?.children) node.parallelDetail.children.forEach((child) => {
		printNodeStructure(child, depth + 1);
	});
}
function addTitle({ list, depth, belongParallelIndexInfo }, t) {
	let branchIndex = 0;
	const hasMoreThanOneParallel = list.filter((node) => node.parallelDetail?.isParallelStartNode).length > 1;
	list.forEach((node) => {
		const parallel_id = node.parallel_id ?? node.execution_metadata?.parallel_id ?? null;
		const parallel_start_node_id = node.parallel_start_node_id ?? node.execution_metadata?.parallel_start_node_id ?? null;
		if (!parallel_id || node.node_type === BlockEnum.End) return;
		const isParallelStartNode = node.parallelDetail?.isParallelStartNode;
		const parallelIndexInfo = `${depth}${(() => {
			if (!isParallelStartNode || !hasMoreThanOneParallel) return "";
			const index = 1 + list.filter((node) => node.parallelDetail?.isParallelStartNode).findIndex((item) => item.node_id === node.node_id);
			return String.fromCharCode(64 + index);
		})()}`;
		if (isParallelStartNode) {
			node.parallelDetail.isParallelStartNode = true;
			node.parallelDetail.parallelTitle = `${t("common.parallel", { ns: "workflow" })}-${parallelIndexInfo}`;
		}
		if (parallel_start_node_id === node.node_id) {
			branchIndex++;
			const branchLetter = String.fromCharCode(64 + branchIndex);
			if (!node.parallelDetail) node.parallelDetail = { branchTitle: "" };
			node.parallelDetail.branchTitle = `${t("common.branch", { ns: "workflow" })}-${belongParallelIndexInfo}-${branchLetter}`;
		}
		if (node.parallelDetail?.children && node.parallelDetail.children.length > 0) addTitle({
			list: node.parallelDetail.children,
			depth: depth + 1,
			belongParallelIndexInfo: parallelIndexInfo
		}, t);
	});
}
var format$1 = (list, t, isPrint) => {
	if (isPrint) console.log(list);
	const result = [...list];
	result.forEach((node) => {
		const parallel_id = node.parallel_id ?? node.execution_metadata?.parallel_id ?? null;
		const parallel_start_node_id = node.parallel_start_node_id ?? node.execution_metadata?.parallel_start_node_id ?? null;
		const parent_parallel_id = node.parent_parallel_id ?? node.execution_metadata?.parent_parallel_id ?? null;
		const branchStartNodeId = node.parallel_start_node_id ?? node.execution_metadata?.parallel_start_node_id ?? null;
		const parentParallelBranchStartNodeId = node.parent_parallel_start_node_id ?? node.execution_metadata?.parent_parallel_start_node_id ?? null;
		if (!parallel_id || node.node_type === BlockEnum.End) return;
		if (parallel_start_node_id === node.node_id) {
			node.parallelDetail = {
				isParallelStartNode: true,
				children: [{
					...node,
					parallelDetail: void 0
				}]
			};
			if (!parent_parallel_id) return;
			const parentParallelStartNode = result.find((item) => item.node_id === parentParallelBranchStartNodeId);
			if (parentParallelStartNode) {
				if (!parentParallelStartNode?.parallelDetail) parentParallelStartNode.parallelDetail = { children: [] };
				if (parentParallelStartNode.parallelDetail.children) {
					const sameBranchNodesLastIndex = parentParallelStartNode.parallelDetail.children.findLastIndex((node) => {
						return (node.parallel_start_node_id ?? node.execution_metadata?.parallel_start_node_id ?? null) === parentParallelBranchStartNodeId;
					});
					if (sameBranchNodesLastIndex !== -1) parentParallelStartNode.parallelDetail.children.splice(sameBranchNodesLastIndex + 1, 0, node);
					else parentParallelStartNode.parallelDetail.children.push(node);
				}
			}
			return;
		}
		const parallelStartNode = result.find((item) => parallel_start_node_id === item.node_id);
		if (parallelStartNode && parallelStartNode.parallelDetail && parallelStartNode.parallelDetail.children) {
			const sameBranchNodesLastIndex = parallelStartNode.parallelDetail.children.findLastIndex((node) => {
				return (node.parallel_start_node_id ?? node.execution_metadata?.parallel_start_node_id ?? null) === branchStartNodeId;
			});
			if (sameBranchNodesLastIndex !== -1) parallelStartNode.parallelDetail.children.splice(sameBranchNodesLastIndex + 1, 0, node);
			else parallelStartNode.parallelDetail.children.push(node);
		}
	});
	const filteredInParallelSubNodes = result.filter((node) => {
		if (!(node.parallel_id ?? node.execution_metadata?.parallel_id ?? null) || node.node_type === BlockEnum.End) return true;
		if (node.parent_parallel_id ?? node.execution_metadata?.parent_parallel_id ?? null) return false;
		if (!node.parallelDetail?.isParallelStartNode) return false;
		return true;
	});
	if (isPrint) filteredInParallelSubNodes.forEach((node) => {
		const now = Date.now();
		console.log(`----- p: ${now} start -----`);
		printNodeStructure(node, 0);
		console.log(`----- p: ${now} end -----`);
	});
	addTitle({
		list: filteredInParallelSubNodes,
		depth: 1
	}, t);
	return filteredInParallelSubNodes;
};
//#endregion
//#region app/components/workflow/run/utils/format-log/iteration/index.ts
function addChildrenToIterationNode(iterationNode, childrenNodes) {
	const details = [];
	childrenNodes.forEach((item, index) => {
		if (!item.execution_metadata) return;
		const { iteration_index = 0 } = item.execution_metadata;
		const runIndex = iteration_index !== void 0 ? iteration_index : index;
		if (!details[runIndex]) details[runIndex] = [];
		details[runIndex].push(item);
	});
	return {
		...iterationNode,
		details
	};
}
//#endregion
//#region app/components/workflow/run/utils/format-log/loop/index.ts
function addChildrenToLoopNode(loopNode, childrenNodes) {
	const details = [];
	childrenNodes.forEach((item) => {
		if (!item.execution_metadata) return;
		const { parallel_mode_run_id, loop_index = 0 } = item.execution_metadata;
		const runIndex = parallel_mode_run_id || loop_index;
		if (!details[runIndex]) details[runIndex] = [];
		details[runIndex].push(item);
	});
	return {
		...loopNode,
		details
	};
}
//#endregion
//#region app/components/workflow/run/utils/format-log/retry/index.ts
var format = (list) => {
	const retryNodes = list.filter((item) => {
		return item.status === "retry";
	});
	const retryNodeIds = retryNodes.map((item) => item.node_id);
	return list.filter((item) => {
		return item.status !== "retry";
	}).map((item) => {
		const { execution_metadata } = item;
		const isInIteration = !!execution_metadata?.iteration_id;
		const isInLoop = !!execution_metadata?.loop_id;
		const nodeId = item.node_id;
		if (retryNodeIds.includes(nodeId)) return {
			...item,
			retryDetail: retryNodes.filter((node) => {
				if (!isInIteration && !isInLoop) return node.node_id === nodeId;
				if (isInIteration) return node.node_id === nodeId && node.execution_metadata?.iteration_index === execution_metadata?.iteration_index;
				if (isInLoop) return node.node_id === nodeId && node.execution_metadata?.loop_index === execution_metadata?.loop_index;
				return false;
			})
		};
		return item;
	});
};
//#endregion
//#region app/components/workflow/run/utils/format-log/index.ts
var formatIterationAndLoopNode = (list, t) => {
	const clonedList = cloneDeep(list);
	const loopNodeIds = clonedList.filter((item) => item.node_type === BlockEnum.Loop).map((item) => item.node_id);
	const iterationNodeIds = clonedList.filter((item) => item.node_type === BlockEnum.Iteration).map((item) => item.node_id);
	const loopChildrenNodeIds = clonedList.filter((item) => item.execution_metadata?.loop_id && loopNodeIds.includes(item.execution_metadata.loop_id)).map((item) => item.node_id);
	const iterationChildrenNodeIds = clonedList.filter((item) => item.execution_metadata?.iteration_id && iterationNodeIds.includes(item.execution_metadata.iteration_id)).map((item) => item.node_id);
	return clonedList.filter((item) => !loopChildrenNodeIds.includes(item.node_id) && !iterationChildrenNodeIds.includes(item.node_id)).map((item) => {
		if (item.node_type === BlockEnum.Loop) {
			const childrenNodes = clonedList.filter((child) => child.execution_metadata?.loop_id === item.node_id);
			const error = childrenNodes.find((child) => child.status === "failed");
			if (error) {
				item.status = "failed";
				item.error = error.error;
			}
			const addedChildrenList = addChildrenToLoopNode(item, childrenNodes);
			if (addedChildrenList.details && addedChildrenList.details.length > 0) addedChildrenList.details = addedChildrenList.details.map((row) => {
				return format$1(row, t);
			});
			return addedChildrenList;
		}
		if (item.node_type === BlockEnum.Iteration) {
			const childrenNodes = clonedList.filter((child) => child.execution_metadata?.iteration_id === item.node_id);
			const error = childrenNodes.find((child) => child.status === "failed");
			if (error) {
				item.status = "failed";
				item.error = error.error;
			}
			const addedChildrenList = addChildrenToIterationNode(item, childrenNodes);
			if (addedChildrenList.details && addedChildrenList.details.length > 0) addedChildrenList.details = addedChildrenList.details.map((row) => {
				return format$1(row, t);
			});
			return addedChildrenList;
		}
		return item;
	});
};
var formatToTracingNodeList = (list, t) => {
	return format$1(formatIterationAndLoopNode(format(formatHumanInputNode(format$2(cloneDeep([...list]).sort((a, b) => a.index - b.index)))), t), t);
};
//#endregion
//#region app/components/workflow/run/get-hovered-parallel-id.ts
var getHoveredParallelId = (relatedTarget) => {
	const element = relatedTarget;
	if (element && "closest" in element) {
		const closestParallel = element.closest("[data-parallel-id]");
		if (closestParallel) return closestParallel.getAttribute("data-parallel-id");
	}
	return null;
};
//#endregion
//#region app/components/workflow/nodes/_base/components/error-handle/error-handle-tip.tsx
var ErrorHandleTip = ({ type }) => {
	const { t } = useTranslation();
	const text = useMemo(() => {
		if (type === ErrorHandleTypeEnum.failBranch) return t("nodes.common.errorHandle.failBranch.inLog", { ns: "workflow" });
		if (type === ErrorHandleTypeEnum.defaultValue) return t("nodes.common.errorHandle.defaultValue.inLog", { ns: "workflow" });
	}, [t, type]);
	if (!type) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-2 pr-[52px] shadow-xs",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 rounded-lg opacity-40",
				style: { background: "linear-gradient(92deg, rgba(247, 144, 9, 0.25) 0%, rgba(255, 255, 255, 0.00) 100%)" }
			}),
			/* @__PURE__ */ jsx(D, { className: "mr-1 h-4 w-4 shrink-0 text-text-warning-secondary" }),
			/* @__PURE__ */ jsx("div", {
				className: "system-xs-medium grow text-text-primary",
				children: text
			})
		]
	});
};
//#endregion
//#region app/components/workflow/run/status-container.tsx
var StatusContainer = ({ status, children }) => {
	const { theme } = useTheme();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative break-all rounded-lg border px-3 py-2.5 system-xs-regular", status === "succeeded" && "border-[rgba(23,178,106,0.8)] bg-workflow-display-success-bg bg-[url(~@/app/components/workflow/run/assets/bg-line-success.svg)] text-text-success", status === "succeeded" && theme === Theme.light && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.5),inset_0_1px_3px_0_rgba(0,0,0,0.12),inset_0_2px_24px_0_rgba(23,178,106,0.2),0_1px_2px_0_rgba(9,9,11,0.05),0_0_0_1px_rgba(0,0,0,0.05)]", status === "succeeded" && theme === Theme.dark && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.12),inset_0_1px_3px_0_rgba(0,0,0,0.4),inset_0_2px_24px_0_rgba(23,178,106,0.25),0_1px_2px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(24,24,27,0.95)]", status === "partial-succeeded" && "border-[rgba(23,178,106,0.8)] bg-workflow-display-success-bg bg-[url(~@/app/components/workflow/run/assets/bg-line-success.svg)] text-text-success", status === "partial-succeeded" && theme === Theme.light && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.5),inset_0_1px_3px_0_rgba(0,0,0,0.12),inset_0_2px_24px_0_rgba(23,178,106,0.2),0_1px_2px_0_rgba(9,9,11,0.05),0_0_0_1px_rgba(0,0,0,0.05)]", status === "partial-succeeded" && theme === Theme.dark && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.12),inset_0_1px_3px_0_rgba(0,0,0,0.4),inset_0_2px_24px_0_rgba(23,178,106,0.25),0_1px_2px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(24,24,27,0.95)]", status === "failed" && "border-[rgba(240,68,56,0.8)] bg-workflow-display-error-bg bg-[url(~@/app/components/workflow/run/assets/bg-line-error.svg)] text-text-warning", status === "failed" && theme === Theme.light && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.5),inset_0_1px_3px_0_rgba(0,0,0,0.12),inset_0_2px_24px_0_rgba(240,68,56,0.2),0_1px_2px_0_rgba(9,9,11,0.05),0_0_0_1px_rgba(0,0,0,0.05)]", status === "failed" && theme === Theme.dark && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.12),inset_0_1px_3px_0_rgba(0,0,0,0.4),inset_0_2px_24px_0_rgba(240,68,56,0.25),0_1px_2px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(24,24,27,0.95)]", (status === "stopped" || status === "paused") && "border-[rgba(247,144,9,0.8)] bg-workflow-display-warning-bg bg-[url(~@/app/components/workflow/run/assets/bg-line-warning.svg)] text-text-destructive", (status === "stopped" || status === "paused") && theme === Theme.light && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.5),inset_0_1px_3px_0_rgba(0,0,0,0.12),inset_0_2px_24px_0_rgba(247,144,9,0.2),0_1px_2px_0_rgba(9,9,11,0.05),0_0_0_1px_rgba(0,0,0,0.05)]", (status === "stopped" || status === "paused") && theme === Theme.dark && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.12),inset_0_1px_3px_0_rgba(0,0,0,0.4),inset_0_2px_24px_0_rgba(247,144,9,0.25),0_1px_2px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(24,24,27,0.95)]", status === "exception" && "border-[rgba(247,144,9,0.8)] bg-workflow-display-warning-bg bg-[url(~@/app/components/workflow/run/assets/bg-line-warning.svg)] text-text-destructive", status === "exception" && theme === Theme.light && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.5),inset_0_1px_3px_0_rgba(0,0,0,0.12),inset_0_2px_24px_0_rgba(247,144,9,0.2),0_1px_2px_0_rgba(9,9,11,0.05),0_0_0_1px_rgba(0,0,0,0.05)]", status === "exception" && theme === Theme.dark && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.12),inset_0_1px_3px_0_rgba(0,0,0,0.4),inset_0_2px_24px_0_rgba(247,144,9,0.25),0_1px_2px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(24,24,27,0.95)]", status === "running" && "border-[rgba(11,165,236,0.8)] bg-workflow-display-normal-bg bg-[url(~@/app/components/workflow/run/assets/bg-line-running.svg)] text-util-colors-blue-light-blue-light-600", status === "running" && theme === Theme.light && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.5),inset_0_1px_3px_0_rgba(0,0,0,0.12),inset_0_2px_24px_0_rgba(11,165,236,0.2),0_1px_2px_0_rgba(9,9,11,0.05),0_0_0_1px_rgba(0,0,0,0.05)]", status === "running" && theme === Theme.dark && "shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.12),inset_0_1px_3px_0_rgba(0,0,0,0.4),inset_0_2px_24px_0_rgba(11,165,236,0.25),0_1px_2px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(24,24,27,0.95)]"),
		children: [/* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-0 h-[50px] w-[65%] bg-no-repeat", theme === Theme.light && "bg-[url(~@/app/components/workflow/run/assets/highlight.svg)]", theme === Theme.dark && "bg-[url(~@/app/components/workflow/run/assets/highlight-dark.svg)]") }), children]
	});
};
//#endregion
//#region app/components/workflow/variable-inspect/large-data-alert.tsx
var LargeDataAlert = ({ textHasNoExport, downloadUrl, className }) => {
	const { t } = useTranslation();
	const text = textHasNoExport ? t("debug.variableInspect.largeDataNoExport", { ns: "workflow" }) : t("debug.variableInspect.largeData", { ns: "workflow" });
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-8 items-center justify-between rounded-lg border-[0.5px] border-components-panel-border bg-components-panel-bg-blur px-2 shadow-xs", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex h-full w-0 grow items-center space-x-1",
			children: [/* @__PURE__ */ jsx(Ky, { className: "size-4 shrink-0 text-text-accent" }), /* @__PURE__ */ jsx("div", {
				className: "system-xs-regular w-0 grow truncate text-text-primary",
				children: text
			})]
		}), downloadUrl && /* @__PURE__ */ jsx("div", {
			className: "system-xs-medium-uppercase ml-1 shrink-0 cursor-pointer text-text-accent",
			children: t("debug.variableInspect.export", { ns: "workflow" })
		})]
	});
};
var large_data_alert_default = React$1.memo(LargeDataAlert);
//#endregion
//#region app/components/workflow/run/loop-log/loop-log-trigger.tsx
var LoopLogTrigger = ({ nodeInfo, allExecutions, onShowLoopResultList }) => {
	const { t } = useTranslation();
	const filterNodesForInstance = (key) => {
		if (!allExecutions) return [];
		const parallelNodes = allExecutions.filter((exec) => exec.execution_metadata?.parallel_mode_run_id === key);
		if (parallelNodes.length > 0) return parallelNodes;
		const serialIndex = Number.parseInt(key, 10);
		if (!isNaN(serialIndex)) {
			const serialNodes = allExecutions.filter((exec) => exec.execution_metadata?.loop_id === nodeInfo.node_id && exec.execution_metadata?.loop_index === serialIndex);
			if (serialNodes.length > 0) return serialNodes;
		}
		return [];
	};
	const handleOnShowLoopDetail = (e) => {
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
		const loopNodeMeta = nodeInfo.execution_metadata;
		const loopDurMap = nodeInfo?.loopDurationMap || loopNodeMeta?.loop_duration_map || {};
		const loopVarMap = loopNodeMeta?.loop_variable_map || {};
		let structuredList = [];
		if (nodeInfo.details?.length) structuredList = nodeInfo.details;
		else if (loopNodeMeta?.loop_duration_map) structuredList = Object.keys(loopNodeMeta.loop_duration_map).map((key) => filterNodesForInstance(key)).filter((branchNodes) => branchNodes.length > 0);
		onShowLoopResultList(structuredList, loopDurMap, loopVarMap);
	};
	let displayLoopCount = 0;
	const loopMap = nodeInfo.execution_metadata?.loop_duration_map;
	if (loopMap) displayLoopCount = Object.keys(loopMap).length;
	else if (nodeInfo.details?.length) displayLoopCount = nodeInfo.details.length;
	else if (nodeInfo.metadata?.loop_length) displayLoopCount = nodeInfo.metadata.loop_length;
	const getErrorCount = (details) => {
		if (!details || details.length === 0) return 0;
		return details.reduce((acc, loop) => {
			if (loop.some((item) => item.status === "failed")) acc++;
			return acc;
		}, 0);
	};
	const errorCount = getErrorCount(nodeInfo.details);
	return /* @__PURE__ */ jsxs(Button, {
		className: "flex w-full cursor-pointer items-center gap-2 self-stretch rounded-lg border-none bg-components-button-tertiary-bg-hover px-3 py-2 hover:bg-components-button-tertiary-bg-hover",
		onClick: handleOnShowLoopDetail,
		children: [
			/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 shrink-0 text-components-button-tertiary-text" }),
			/* @__PURE__ */ jsxs("div", {
				className: "system-sm-medium flex-1 text-left text-components-button-tertiary-text",
				children: [t("nodes.loop.loop", {
					ns: "workflow",
					count: displayLoopCount
				}), errorCount > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [t("nodes.loop.comma", { ns: "workflow" }), t("nodes.loop.error", {
					ns: "workflow",
					count: errorCount
				})] })]
			}),
			/* @__PURE__ */ jsx(r2, { className: "h-4 w-4 shrink-0 text-components-button-tertiary-text" })
		]
	});
};
//#endregion
//#region app/components/workflow/run/loop-log/loop-result-panel.tsx
var i18nPrefix$1 = "singleRun";
var LoopResultPanel = ({ list, onBack, loopDurationMap, loopVariableMap }) => {
	const { t } = useTranslation();
	const [expandedLoops, setExpandedLoops] = useState({});
	const toggleLoop = useCallback((index) => {
		setExpandedLoops((prev) => ({
			...prev,
			[index]: !prev[index]
		}));
	}, []);
	const countLoopDuration = (loop, loopDurationMap) => {
		const loopRunIndex = loop[0]?.execution_metadata?.loop_index;
		const duration = loopDurationMap[loop[0]?.execution_metadata?.parallel_mode_run_id || loopRunIndex];
		return `${duration && duration > .01 ? duration.toFixed(2) : .01}s`;
	};
	const loopStatusShow = (index, loop, loopDurationMap) => {
		const hasFailed = loop.some((item) => item.status === NodeRunningStatus.Failed);
		const isRunning = loop.some((item) => item.status === NodeRunningStatus.Running);
		const hasDurationMap = loopDurationMap && Object.keys(loopDurationMap).length !== 0;
		if (hasFailed) return /* @__PURE__ */ jsx(Rt, { className: "h-4 w-4 text-text-destructive" });
		if (isRunning) return /* @__PURE__ */ jsx(Dm, { className: "h-3.5 w-3.5 animate-spin text-primary-600" });
		return /* @__PURE__ */ jsxs(Fragment$1, { children: [hasDurationMap && /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular text-text-tertiary",
			children: countLoopDuration(loop, loopDurationMap)
		}), /* @__PURE__ */ jsx(r2, { className: cn("h-4 w-4 shrink-0 text-text-tertiary transition-transform duration-200", expandedLoops[index] && "rotate-90") })] });
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-components-panel-bg",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex h-8 cursor-pointer items-center border-b-[0.5px] border-b-divider-regular px-4 text-text-accent-secondary",
			onClick: (e) => {
				e.stopPropagation();
				e.nativeEvent.stopImmediatePropagation();
				onBack();
			},
			children: [/* @__PURE__ */ jsx(K1, { className: "mr-1 h-4 w-4" }), /* @__PURE__ */ jsx("div", {
				className: "system-sm-medium",
				children: t(`${i18nPrefix$1}.back`, { ns: "workflow" })
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "bg-components-panel-bg p-2",
			children: list.map((loop, index) => /* @__PURE__ */ jsxs("div", {
				className: cn("mb-1 overflow-hidden rounded-xl border-none bg-background-section-burn"),
				children: [
					/* @__PURE__ */ jsx("div", {
						className: cn("flex w-full cursor-pointer items-center justify-between px-3", expandedLoops[index] ? "pb-2 pt-3" : "py-3", "rounded-xl text-left"),
						onClick: () => toggleLoop(index),
						children: /* @__PURE__ */ jsxs("div", {
							className: cn("flex grow items-center gap-2"),
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border-divider-subtle bg-util-colors-cyan-cyan-500",
									children: /* @__PURE__ */ jsx(Icon$1, { className: "h-3 w-3 text-text-primary-on-surface" })
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "system-sm-semibold-uppercase grow text-text-primary",
									children: [
										t(`${i18nPrefix$1}.loop`, { ns: "workflow" }),
										" ",
										index + 1
									]
								}),
								loopStatusShow(index, loop, loopDurationMap)
							]
						})
					}),
					expandedLoops[index] && /* @__PURE__ */ jsx("div", { className: "h-px grow bg-divider-subtle" }),
					/* @__PURE__ */ jsxs("div", {
						className: cn("transition-all duration-200", expandedLoops[index] ? "opacity-100" : "max-h-0 overflow-hidden opacity-0"),
						children: [loopVariableMap?.[index] && /* @__PURE__ */ jsx("div", {
							className: "p-2 pb-0",
							children: /* @__PURE__ */ jsx(code_editor_default, {
								readOnly: true,
								title: /* @__PURE__ */ jsx("div", { children: t("nodes.loop.loopVariables", { ns: "workflow" }).toLocaleUpperCase() }),
								language: CodeLanguage.json,
								height: 112,
								value: loopVariableMap[index],
								isJSONStringifyBeauty: true
							})
						}), /* @__PURE__ */ jsx(TracingPanel, {
							list: loop,
							className: "bg-background-section-burn"
						})]
					})
				]
			}, index))
		})]
	});
};
var loop_result_panel_default = React$1.memo(LoopResultPanel);
//#endregion
//#region app/components/workflow/run/retry-log/retry-log-trigger.tsx
var RetryLogTrigger = ({ nodeInfo, onShowRetryResultList }) => {
	const { t } = useTranslation();
	const { retryDetail } = nodeInfo;
	const handleShowRetryResultList = (e) => {
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
		onShowRetryResultList(retryDetail || []);
	};
	return /* @__PURE__ */ jsxs(Button, {
		className: "mb-1 flex w-full items-center justify-between",
		variant: "tertiary",
		onClick: handleShowRetryResultList,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center",
			children: [/* @__PURE__ */ jsx(XZ, { className: "mr-0.5 h-4 w-4 shrink-0 text-components-button-tertiary-text" }), t("nodes.common.retry.retries", {
				ns: "workflow",
				num: retryDetail?.length
			})]
		}), /* @__PURE__ */ jsx(r2, { className: "h-4 w-4 shrink-0 text-components-button-tertiary-text" })]
	});
};
//#endregion
//#region app/components/workflow/run/retry-log/retry-result-panel.tsx
var RetryResultPanel = ({ list, onBack }) => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
		className: "system-sm-medium flex h-8 cursor-pointer items-center bg-components-panel-bg px-4 text-text-accent-secondary",
		onClick: (e) => {
			e.stopPropagation();
			e.nativeEvent.stopImmediatePropagation();
			onBack();
		},
		children: [/* @__PURE__ */ jsx(K1, { className: "mr-1 h-4 w-4" }), t("singleRun.back", { ns: "workflow" })]
	}), /* @__PURE__ */ jsx(TracingPanel, {
		list: list.map((item, index) => ({
			...item,
			title: `${t("nodes.common.retry.retry", { ns: "workflow" })} ${index + 1}`
		})),
		className: "bg-background-section-burn"
	})] });
};
var retry_result_panel_default = memo(RetryResultPanel);
//#endregion
//#region app/components/workflow/run/node.tsx
var NodePanel = ({ className, nodeInfo, allExecutions, inMessage = false, hideInfo = false, hideProcessDetail, onShowIterationDetail, onShowLoopDetail, onShowRetryDetail, onShowAgentOrToolLog, notShowIterationNav, notShowLoopNav }) => {
	const [collapseState, doSetCollapseState] = useState(true);
	const setCollapseState = useCallback((state) => {
		if (hideProcessDetail) return;
		doSetCollapseState(state);
	}, [hideProcessDetail]);
	const { t } = useTranslation();
	const docLink = useDocLink();
	const getTime = (time) => {
		if (time < 1) return `${(time * 1e3).toFixed(3)} ms`;
		if (time > 60) return `${Math.floor(time / 60)} m ${(time % 60).toFixed(3)} s`;
		return `${time.toFixed(3)} s`;
	};
	const getTokenCount = (tokens) => {
		if (tokens < 1e3) return tokens;
		if (tokens >= 1e3 && tokens < 1e6) return `${Number.parseFloat((tokens / 1e3).toFixed(3))}K`;
		if (tokens >= 1e6) return `${Number.parseFloat((tokens / 1e6).toFixed(3))}M`;
	};
	useEffect(() => {
		setCollapseState(!nodeInfo.expand);
	}, [nodeInfo.expand, setCollapseState]);
	const isIterationNode = nodeInfo.node_type === BlockEnum.Iteration && !!nodeInfo.details?.length;
	const isLoopNode = nodeInfo.node_type === BlockEnum.Loop && !!nodeInfo.details?.length;
	const isRetryNode = hasRetryNode(nodeInfo.node_type) && !!nodeInfo.retryDetail?.length;
	const isAgentNode = nodeInfo.node_type === BlockEnum.Agent && !!nodeInfo.agentLog?.length;
	const isToolNode = nodeInfo.node_type === BlockEnum.Tool && !!nodeInfo.agentLog?.length;
	const inputsTitle = useMemo(() => {
		let text = t("common.input", { ns: "workflow" });
		if (nodeInfo.node_type === BlockEnum.Loop) text = t("nodes.loop.initialLoopVariables", { ns: "workflow" });
		return text.toLocaleUpperCase();
	}, [nodeInfo.node_type, t]);
	const processDataTitle = t("common.processData", { ns: "workflow" }).toLocaleUpperCase();
	const outputTitle = useMemo(() => {
		let text = t("common.output", { ns: "workflow" });
		if (nodeInfo.node_type === BlockEnum.Loop) text = t("nodes.loop.finalLoopVariables", { ns: "workflow" });
		return text.toLocaleUpperCase();
	}, [nodeInfo.node_type, t]);
	return /* @__PURE__ */ jsx("div", {
		className: cn("px-2 py-1", className),
		children: /* @__PURE__ */ jsxs("div", {
			className: "group rounded-[10px] border border-components-panel-border bg-background-default shadow-xs transition-all hover:shadow-md",
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn("flex cursor-pointer items-center pl-1 pr-3", hideInfo ? "py-2 pl-2" : "py-1.5", !collapseState && (hideInfo ? "!pb-1" : "!pb-1.5")),
				onClick: () => setCollapseState(!collapseState),
				children: [
					!hideProcessDetail && /* @__PURE__ */ jsx(r2, { className: cn("mr-1 h-4 w-4 shrink-0 text-text-quaternary transition-all group-hover:text-text-tertiary", !collapseState && "rotate-90") }),
					/* @__PURE__ */ jsx(block_icon_default, {
						size: inMessage ? "xs" : "sm",
						className: cn("mr-2 shrink-0", inMessage && "!mr-1"),
						type: nodeInfo.node_type,
						toolIcon: nodeInfo.extras?.icon || nodeInfo.extras
					}),
					/* @__PURE__ */ jsx(tooltip_default, {
						popupContent: /* @__PURE__ */ jsx("div", {
							className: "max-w-xs",
							children: nodeInfo.title
						}),
						children: /* @__PURE__ */ jsx("div", {
							className: cn("system-xs-semibold-uppercase grow truncate text-text-secondary", hideInfo && "!text-xs"),
							children: nodeInfo.title
						})
					}),
					!["running", "paused"].includes(nodeInfo.status) && !hideInfo && /* @__PURE__ */ jsxs("div", {
						className: "system-xs-regular shrink-0 text-text-tertiary",
						children: [nodeInfo.execution_metadata?.total_tokens ? `${getTokenCount(nodeInfo.execution_metadata?.total_tokens || 0)} tokens · ` : "", `${getTime(nodeInfo.elapsed_time || 0)}`]
					}),
					nodeInfo.status === "succeeded" && /* @__PURE__ */ jsx(n7, { className: "ml-2 h-3.5 w-3.5 shrink-0 text-text-success" }),
					nodeInfo.status === "failed" && /* @__PURE__ */ jsx(ft, { className: "ml-2 h-3.5 w-3.5 shrink-0 text-text-destructive" }),
					nodeInfo.status === "stopped" && /* @__PURE__ */ jsx(D, { className: cn("ml-2 h-4 w-4 shrink-0 text-text-warning-secondary", inMessage && "h-3.5 w-3.5") }),
					nodeInfo.status === "paused" && /* @__PURE__ */ jsx(GV, { className: cn("ml-2 h-4 w-4 shrink-0 text-text-warning-secondary", inMessage && "h-3.5 w-3.5") }),
					nodeInfo.status === "exception" && /* @__PURE__ */ jsx(D, { className: cn("ml-2 h-4 w-4 shrink-0 text-text-warning-secondary", inMessage && "h-3.5 w-3.5") }),
					nodeInfo.status === "running" && /* @__PURE__ */ jsxs("div", {
						className: "flex shrink-0 items-center text-[13px] font-medium leading-[16px] text-text-accent",
						children: [/* @__PURE__ */ jsx("span", {
							className: "mr-2 text-xs font-normal",
							children: "Running"
						}), /* @__PURE__ */ jsx(Dm, { className: "h-3.5 w-3.5 animate-spin" })]
					})
				]
			}), !collapseState && !hideProcessDetail && /* @__PURE__ */ jsxs("div", {
				className: "px-1 pb-1",
				children: [
					isIterationNode && !notShowIterationNav && onShowIterationDetail && /* @__PURE__ */ jsx(IterationLogTrigger, {
						nodeInfo,
						allExecutions,
						onShowIterationResultList: onShowIterationDetail
					}),
					isLoopNode && !notShowLoopNav && onShowLoopDetail && /* @__PURE__ */ jsx(LoopLogTrigger, {
						nodeInfo,
						allExecutions,
						onShowLoopResultList: onShowLoopDetail
					}),
					isRetryNode && onShowRetryDetail && /* @__PURE__ */ jsx(RetryLogTrigger, {
						nodeInfo,
						onShowRetryResultList: onShowRetryDetail
					}),
					(isAgentNode || isToolNode) && onShowAgentOrToolLog && /* @__PURE__ */ jsx(AgentLogTrigger, {
						nodeInfo,
						onShowAgentOrToolLog
					}),
					/* @__PURE__ */ jsxs("div", {
						className: cn("mb-1", hideInfo && "!px-2 !py-0.5"),
						children: [
							nodeInfo.status === "stopped" && /* @__PURE__ */ jsx(StatusContainer, {
								status: "stopped",
								children: t("tracing.stopBy", {
									ns: "workflow",
									user: nodeInfo.created_by ? nodeInfo.created_by.name : "N/A"
								})
							}),
							nodeInfo.status === "exception" && /* @__PURE__ */ jsxs(StatusContainer, {
								status: "stopped",
								children: [nodeInfo.error, /* @__PURE__ */ jsx("a", {
									href: docLink("/use-dify/debug/error-type"),
									target: "_blank",
									className: "text-text-accent",
									children: t("common.learnMore", { ns: "workflow" })
								})]
							}),
							nodeInfo.status === "failed" && /* @__PURE__ */ jsx(StatusContainer, {
								status: "failed",
								children: nodeInfo.error
							}),
							nodeInfo.status === "retry" && /* @__PURE__ */ jsx(StatusContainer, {
								status: "failed",
								children: nodeInfo.error
							}),
							nodeInfo.status === "paused" && /* @__PURE__ */ jsx(StatusContainer, {
								status: "paused",
								children: /* @__PURE__ */ jsx("div", {
									className: "system-xs-regular text-text-warning",
									children: t("nodes.humanInput.log.reasonContent", { ns: "workflow" })
								})
							})
						]
					}),
					nodeInfo.inputs && /* @__PURE__ */ jsx("div", {
						className: cn("mb-1"),
						children: /* @__PURE__ */ jsx(code_editor_default, {
							readOnly: true,
							title: /* @__PURE__ */ jsx("div", { children: inputsTitle }),
							language: CodeLanguage.json,
							value: nodeInfo.inputs,
							isJSONStringifyBeauty: true,
							footer: nodeInfo.inputs_truncated && /* @__PURE__ */ jsx(large_data_alert_default, {
								textHasNoExport: true,
								className: "mx-1 mb-1 mt-2 h-7"
							})
						})
					}),
					nodeInfo.process_data && /* @__PURE__ */ jsx("div", {
						className: cn("mb-1"),
						children: /* @__PURE__ */ jsx(code_editor_default, {
							readOnly: true,
							title: /* @__PURE__ */ jsx("div", { children: processDataTitle }),
							language: CodeLanguage.json,
							value: nodeInfo.process_data,
							isJSONStringifyBeauty: true
						})
					}),
					nodeInfo.outputs && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(code_editor_default, {
						readOnly: true,
						title: /* @__PURE__ */ jsx("div", { children: outputTitle }),
						language: CodeLanguage.json,
						value: nodeInfo.outputs,
						isJSONStringifyBeauty: true,
						tip: /* @__PURE__ */ jsx(ErrorHandleTip, { type: nodeInfo.execution_metadata?.error_strategy }),
						footer: nodeInfo.outputs_truncated && /* @__PURE__ */ jsx(large_data_alert_default, {
							textHasNoExport: true,
							downloadUrl: nodeInfo.outputs_full_content?.download_url,
							className: "mx-1 mb-1 mt-2 h-7"
						})
					}) })
				]
			})]
		})
	});
};
//#endregion
//#region app/components/workflow/run/tracing-panel.tsx
var TracingPanel = ({ list, className, hideNodeInfo = false, hideNodeProcessDetail = false }) => {
	const { t } = useTranslation();
	const treeNodes = formatToTracingNodeList(list, t);
	const [collapsedNodes, setCollapsedNodes] = useState(() => /* @__PURE__ */ new Set());
	const [hoveredParallel, setHoveredParallel] = useState(null);
	const toggleCollapse = (id) => {
		setCollapsedNodes((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(id)) newSet.delete(id);
			else newSet.add(id);
			return newSet;
		});
	};
	const handleParallelMouseEnter = useCallback((id) => {
		setHoveredParallel(id);
	}, []);
	const handleParallelMouseLeave = useCallback((e) => {
		setHoveredParallel(getHoveredParallelId(e.relatedTarget));
	}, []);
	const { showSpecialResultPanel, showRetryDetail, setShowRetryDetailFalse, retryResultList, handleShowRetryResultList, showIteratingDetail, setShowIteratingDetailFalse, iterationResultList, iterationResultDurationMap, handleShowIterationResultList, showLoopingDetail, setShowLoopingDetailFalse, loopResultList, loopResultDurationMap, loopResultVariableMap, handleShowLoopResultList, agentOrToolLogItemStack, agentOrToolLogListMap, handleShowAgentOrToolLog } = useLogs();
	const renderNode = (node) => {
		if (!!node.parallelDetail?.isParallelStartNode) {
			const parallelDetail = node.parallelDetail;
			const isCollapsed = collapsedNodes.has(node.id);
			const isHovered = hoveredParallel === node.id;
			return /* @__PURE__ */ jsxs("div", {
				className: "relative mb-2 ml-4",
				"data-parallel-id": node.id,
				onMouseEnter: () => handleParallelMouseEnter(node.id),
				onMouseLeave: handleParallelMouseLeave,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-1 flex items-center",
					children: [
						/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => toggleCollapse(node.id),
							className: cn("mr-2 transition-colors", isHovered ? "rounded border-components-button-primary-border bg-components-button-primary-bg text-text-primary-on-surface" : "text-text-secondary hover:text-text-primary"),
							children: isHovered ? /* @__PURE__ */ jsx("span", {
								"aria-hidden": true,
								className: "i-ri-arrow-down-s-line h-3 w-3"
							}) : /* @__PURE__ */ jsx("span", {
								"aria-hidden": true,
								className: "i-ri-menu-4-line h-3 w-3 text-text-tertiary"
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex items-center text-text-secondary system-xs-semibold-uppercase",
							children: /* @__PURE__ */ jsx("span", { children: parallelDetail.parallelTitle })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mx-2 h-px grow bg-divider-subtle",
							style: { background: "linear-gradient(to right, rgba(16, 24, 40, 0.08), rgba(255, 255, 255, 0)" }
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: `relative pl-2 ${isCollapsed ? "hidden" : ""}`,
					children: [/* @__PURE__ */ jsx("div", { className: cn("absolute bottom-0 left-[5px] top-0 w-[2px]", isHovered ? "bg-text-accent-secondary" : "bg-divider-subtle") }), parallelDetail.children.map(renderNode)]
				})]
			}, node.id);
		} else return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
			className: cn("-mb-1.5 pl-4 system-2xs-medium-uppercase", hoveredParallel === node.id ? "text-text-tertiary" : "text-text-quaternary"),
			children: node?.parallelDetail?.branchTitle
		}), /* @__PURE__ */ jsx(NodePanel, {
			nodeInfo: node,
			allExecutions: list,
			onShowIterationDetail: handleShowIterationResultList,
			onShowLoopDetail: handleShowLoopResultList,
			onShowRetryDetail: handleShowRetryResultList,
			onShowAgentOrToolLog: handleShowAgentOrToolLog,
			hideInfo: hideNodeInfo,
			hideProcessDetail: hideNodeProcessDetail
		})] }, node.id);
	};
	if (showSpecialResultPanel) return /* @__PURE__ */ jsx(SpecialResultPanel, {
		showRetryDetail,
		setShowRetryDetailFalse,
		retryResultList,
		showIteratingDetail,
		setShowIteratingDetailFalse,
		iterationResultList,
		iterationResultDurationMap,
		showLoopingDetail,
		setShowLoopingDetailFalse,
		loopResultList,
		loopResultDurationMap,
		loopResultVariableMap,
		agentOrToolLogItemStack,
		agentOrToolLogListMap,
		handleShowAgentOrToolLog
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn("py-2", className),
		onClick: (e) => {
			e.stopPropagation();
			e.nativeEvent.stopImmediatePropagation();
		},
		children: treeNodes.map(renderNode)
	});
};
//#endregion
//#region app/components/workflow/run/iteration-log/iteration-result-panel.tsx
var i18nPrefix = "singleRun";
var IterationResultPanel = ({ list, onBack, iterDurationMap }) => {
	const { t } = useTranslation();
	const [expandedIterations, setExpandedIterations] = useState({});
	const toggleIteration = useCallback((index) => {
		setExpandedIterations((prev) => ({
			...prev,
			[index]: !prev[index]
		}));
	}, []);
	const countIterDuration = (iteration, iterDurationMap) => {
		const IterRunIndex = iteration[0]?.execution_metadata?.iteration_index;
		const duration = iterDurationMap[iteration[0]?.execution_metadata?.parallel_mode_run_id || IterRunIndex];
		return `${duration && duration > .01 ? duration.toFixed(2) : .01}s`;
	};
	const iterationStatusShow = (index, iteration, iterDurationMap) => {
		const hasFailed = iteration.some((item) => item.status === NodeRunningStatus.Failed);
		const isRunning = iteration.some((item) => item.status === NodeRunningStatus.Running);
		const hasDurationMap = iterDurationMap && Object.keys(iterDurationMap).length !== 0;
		if (hasFailed) return /* @__PURE__ */ jsx(Rt, { className: "h-4 w-4 text-text-destructive" });
		if (isRunning) return /* @__PURE__ */ jsx(Dm, { className: "h-3.5 w-3.5 animate-spin text-primary-600" });
		return /* @__PURE__ */ jsxs(Fragment$1, { children: [hasDurationMap && /* @__PURE__ */ jsx("div", {
			className: "system-xs-regular text-text-tertiary",
			children: countIterDuration(iteration, iterDurationMap)
		}), /* @__PURE__ */ jsx(r2, { className: cn("h-4 w-4 shrink-0 text-text-tertiary transition-transform duration-200", expandedIterations[index] && "rotate-90") })] });
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-components-panel-bg",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex h-8 cursor-pointer items-center border-b-[0.5px] border-b-divider-regular px-4 text-text-accent-secondary",
			onClick: (e) => {
				e.stopPropagation();
				e.nativeEvent.stopImmediatePropagation();
				onBack();
			},
			children: [/* @__PURE__ */ jsx(K1, { className: "mr-1 h-4 w-4" }), /* @__PURE__ */ jsx("div", {
				className: "system-sm-medium",
				children: t(`${i18nPrefix}.back`, { ns: "workflow" })
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "bg-components-panel-bg p-2",
			children: list.map((iteration, index) => /* @__PURE__ */ jsxs("div", {
				className: cn("mb-1 overflow-hidden rounded-xl border-none bg-background-section-burn"),
				children: [
					/* @__PURE__ */ jsx("div", {
						className: cn("flex w-full cursor-pointer items-center justify-between px-3", expandedIterations[index] ? "pb-2 pt-3" : "py-3", "rounded-xl text-left"),
						onClick: () => toggleIteration(index),
						children: /* @__PURE__ */ jsxs("div", {
							className: cn("flex grow items-center gap-2"),
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border-divider-subtle bg-util-colors-cyan-cyan-500",
									children: /* @__PURE__ */ jsx(Icon, { className: "h-3 w-3 text-text-primary-on-surface" })
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "system-sm-semibold-uppercase grow text-text-primary",
									children: [
										t(`${i18nPrefix}.iteration`, { ns: "workflow" }),
										" ",
										index + 1
									]
								}),
								iterationStatusShow(index, iteration, iterDurationMap)
							]
						})
					}),
					expandedIterations[index] && /* @__PURE__ */ jsx("div", { className: "h-px grow bg-divider-subtle" }),
					/* @__PURE__ */ jsx("div", {
						className: cn("transition-all duration-200", expandedIterations[index] ? "opacity-100" : "max-h-0 overflow-hidden opacity-0"),
						children: /* @__PURE__ */ jsx(TracingPanel, {
							list: iteration,
							className: "bg-background-section-burn"
						})
					})
				]
			}, index))
		})]
	});
};
var iteration_result_panel_default = React$1.memo(IterationResultPanel);
//#endregion
//#region app/components/workflow/run/special-result-panel.tsx
var SpecialResultPanel = ({ showRetryDetail, setShowRetryDetailFalse, retryResultList, showIteratingDetail, setShowIteratingDetailFalse, iterationResultList, iterationResultDurationMap, showLoopingDetail, setShowLoopingDetailFalse, loopResultList, loopResultDurationMap, loopResultVariableMap, agentOrToolLogItemStack, agentOrToolLogListMap, handleShowAgentOrToolLog }) => {
	return /* @__PURE__ */ jsxs("div", {
		onClick: (e) => {
			e.stopPropagation();
			e.nativeEvent.stopImmediatePropagation();
		},
		children: [
			!!showRetryDetail && !!retryResultList?.length && setShowRetryDetailFalse && /* @__PURE__ */ jsx(retry_result_panel_default, {
				list: retryResultList,
				onBack: setShowRetryDetailFalse
			}),
			showIteratingDetail && !!iterationResultList?.length && setShowIteratingDetailFalse && /* @__PURE__ */ jsx(iteration_result_panel_default, {
				list: iterationResultList,
				onBack: setShowIteratingDetailFalse,
				iterDurationMap: iterationResultDurationMap
			}),
			showLoopingDetail && !!loopResultList?.length && setShowLoopingDetailFalse && /* @__PURE__ */ jsx(loop_result_panel_default, {
				list: loopResultList,
				onBack: setShowLoopingDetailFalse,
				loopDurationMap: loopResultDurationMap,
				loopVariableMap: loopResultVariableMap
			}),
			!!agentOrToolLogItemStack?.length && agentOrToolLogListMap && handleShowAgentOrToolLog && /* @__PURE__ */ jsx(AgentResultPanel, {
				agentOrToolLogItemStack,
				agentOrToolLogListMap,
				onShowAgentOrToolLog: handleShowAgentOrToolLog
			})
		]
	});
};
//#endregion
//#region app/components/workflow/run/status.tsx
var StatusPanel = ({ status, time, tokens, error, exceptionCounts, isListening = false, workflowRunId }) => {
	const { t } = useTranslation();
	const docLink = useDocLink();
	const { data: pausedDetails } = useWorkflowPausedDetails({
		workflowRunId: workflowRunId || "",
		enabled: status === "paused"
	});
	const pausedReasons = useMemo(() => {
		const reasons = [];
		if (!pausedDetails) return reasons;
		if (pausedDetails.paused_nodes.some((node) => node.pause_type.type === "human_input")) reasons.push(t("nodes.humanInput.log.reasonContent", { ns: "workflow" }));
		return reasons;
	}, [pausedDetails, t]);
	const pausedInputURLs = useMemo(() => {
		const inputURLs = [];
		if (!pausedDetails) return inputURLs;
		const { paused_nodes } = pausedDetails;
		if (paused_nodes.some((node) => node.pause_type.type === "human_input")) paused_nodes.forEach((node) => {
			if (node.pause_type.type === "human_input") inputURLs.push(node.pause_type.backstage_input_url);
		});
		return inputURLs;
	}, [pausedDetails]);
	return /* @__PURE__ */ jsxs(StatusContainer, {
		status,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: cn("max-w-[120px] flex-[33%]", status === "partial-succeeded" && "min-w-[140px]"),
						children: [/* @__PURE__ */ jsx("div", {
							className: "system-2xs-medium-uppercase mb-1 text-text-tertiary",
							children: t("resultPanel.status", { ns: "runLog" })
						}), /* @__PURE__ */ jsxs("div", {
							className: cn("system-xs-semibold-uppercase flex items-center gap-1", status === "succeeded" && "text-util-colors-green-green-600", status === "partial-succeeded" && "text-util-colors-green-green-600", status === "failed" && "text-util-colors-red-red-600", (status === "stopped" || status === "paused") && "text-util-colors-warning-warning-600", status === "running" && "text-util-colors-blue-light-blue-light-600"),
							children: [
								status === "running" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Indicator, { color: "blue" }), /* @__PURE__ */ jsx("span", { children: isListening ? "Listening" : "Running" })] }),
								status === "succeeded" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Indicator, { color: "green" }), /* @__PURE__ */ jsx("span", { children: "SUCCESS" })] }),
								status === "partial-succeeded" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Indicator, { color: "green" }), /* @__PURE__ */ jsx("span", { children: "PARTIAL SUCCESS" })] }),
								status === "exception" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Indicator, { color: "yellow" }), /* @__PURE__ */ jsx("span", { children: "EXCEPTION" })] }),
								status === "failed" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Indicator, { color: "red" }), /* @__PURE__ */ jsx("span", { children: "FAIL" })] }),
								status === "stopped" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Indicator, { color: "yellow" }), /* @__PURE__ */ jsx("span", { children: "STOP" })] }),
								status === "paused" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Indicator, { color: "yellow" }), /* @__PURE__ */ jsx("span", { children: "PENDING" })] })
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "max-w-[152px] flex-[33%]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "system-2xs-medium-uppercase mb-1 text-text-tertiary",
							children: t("resultPanel.time", { ns: "runLog" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "system-sm-medium flex items-center gap-1 text-text-secondary",
							children: [(status === "running" || status === "paused") && /* @__PURE__ */ jsx("div", { className: "h-2 w-16 animate-pulse rounded-sm bg-text-quaternary" }), status !== "running" && status !== "paused" && /* @__PURE__ */ jsx("span", { children: time ? `${time?.toFixed(3)}s` : "-" })]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex-[33%]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "system-2xs-medium-uppercase mb-1 text-text-tertiary",
							children: t("resultPanel.tokens", { ns: "runLog" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "system-sm-medium flex items-center gap-1 text-text-secondary",
							children: [(status === "running" || status === "paused") && /* @__PURE__ */ jsx("div", { className: "h-2 w-20 animate-pulse rounded-sm bg-text-quaternary" }), status !== "running" && status !== "paused" && /* @__PURE__ */ jsx("span", { children: `${tokens || 0} Tokens` })]
						})]
					})
				]
			}),
			status === "failed" && error && /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsx("div", { className: "my-2 h-[0.5px] bg-divider-subtle" }),
				/* @__PURE__ */ jsx("div", {
					className: "system-xs-regular whitespace-pre-wrap text-text-destructive",
					children: error
				}),
				!!exceptionCounts && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { className: "my-2 h-[0.5px] bg-divider-subtle" }), /* @__PURE__ */ jsx("div", {
					className: "system-xs-regular text-text-destructive",
					children: t("nodes.common.errorHandle.partialSucceeded.tip", {
						ns: "workflow",
						num: exceptionCounts
					})
				})] })
			] }),
			status === "partial-succeeded" && !!exceptionCounts && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { className: "my-2 h-[0.5px] bg-divider-deep" }), /* @__PURE__ */ jsx("div", {
				className: "system-xs-medium text-text-warning",
				children: t("nodes.common.errorHandle.partialSucceeded.tip", {
					ns: "workflow",
					num: exceptionCounts
				})
			})] }),
			status === "exception" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { className: "my-2 h-[0.5px] bg-divider-deep" }), /* @__PURE__ */ jsxs("div", {
				className: "system-xs-medium text-text-warning",
				children: [error, /* @__PURE__ */ jsx("a", {
					href: docLink("/use-dify/debug/error-type"),
					target: "_blank",
					className: "text-text-accent",
					children: t("common.learnMore", { ns: "workflow" })
				})]
			})] }),
			status === "paused" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { className: "my-2 h-[0.5px] bg-divider-deep" }), /* @__PURE__ */ jsxs("div", {
				className: "system-xs-medium flex flex-col gap-y-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-y-0.5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-2xs-medium-uppercase text-text-tertiary",
						children: t("nodes.humanInput.log.reason", { ns: "workflow" })
					}), pausedReasons.length > 0 ? pausedReasons.map((reason) => /* @__PURE__ */ jsx("div", {
						className: "system-xs-medium truncate text-text-secondary",
						children: reason
					}, reason)) : /* @__PURE__ */ jsx("div", { className: "h-2 w-20 animate-pulse rounded-sm bg-text-quaternary" })]
				}), pausedInputURLs.length > 0 && /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-y-0.5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-2xs-medium-uppercase text-text-tertiary",
						children: t("nodes.humanInput.log.backstageInputURL", { ns: "workflow" })
					}), pausedInputURLs.map((url) => /* @__PURE__ */ jsx("a", {
						href: url,
						target: "_blank",
						className: "system-xs-medium text-text-accent",
						children: url
					}, url))]
				})]
			})] })
		]
	});
};
//#endregion
export { useCompletionConversations as _, LoopLogTrigger as a, ErrorHandleTip as c, AgentLogTrigger as d, useLogs as f, useCompletionConversationDetail as g, useChatConversations as h, RetryLogTrigger as i, formatToTracingNodeList as l, useChatConversationDetail as m, SpecialResultPanel as n, large_data_alert_default as o, useAnnotationsCount as p, TracingPanel as r, StatusContainer as s, StatusPanel as t, IterationLogTrigger as u, useWorkflowLogs as v };
