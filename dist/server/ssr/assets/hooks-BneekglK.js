import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { i as useEventEmitterContextContext, n as FlowType } from "./utils-pMdyvQan.js";
import { M as generateNewNode, Nt as DSL_EXPORT_CHECK, Ut as NODE_WIDTH_X_OFFSET, bt as genNodeMetaData, ft as useReactFlow, mt as useStoreApi, qt as START_INITIAL_POSITION } from "./utils-DqpfZ3W-.js";
import { l as ModelStatusEnum } from "./declarations-DYMEe7hD.js";
import { Ot as BlockEnum, Vt as WorkflowRunningStatus, a as API_PREFIX } from "./config-Dopncj5R.js";
import { $n as useWorkflowStore, Bn as nodeDefault$2, G as useNodesReadOnly, Ir as useDatasetDetailContextWithSelector, Kr as useInvalidAllLastRun, O as useSerialAsyncCallback, Q as NoteTheme, Qn as useStore, Wt as IndexingType, X as CUSTOM_NOTE_NODE, Zr as useInvalidateWorkflowRunHistory, ir as produce, m as useWorkflowInteractions, oi as useWorkflowConfig, p as useWorkflowUpdate } from "./hooks-Bj_4KA1b.js";
import { h as ssePost, v as postWithKeepalive } from "./base-BuKAg6Le.js";
import { t as downloadBlob } from "./download-Cg9gmIRx.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import { o as RETRIEVE_METHOD } from "./app-DPjSIfgb.js";
import { t as basePath } from "./var-DPpHtpXT.js";
import { n as useDocLink } from "./i18n-lDm19WzR.js";
import { at as useExportPipelineDSL, et as useDataSourceList } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { g as syncWorkflowDraft, l as fetchWorkflowDraft, p as stopWorkflowRun } from "./workflow-Dbk_had1.js";
import { F as useSetWorkflowVarsWithValue, n as WORKFLOW_COMMON_NODES, t as useWorkflowRunEvent } from "./use-workflow-run-event-Bl1EmFYx.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
//#region app/components/workflow/nodes/knowledge-base/utils.ts
var isHighQualitySearchMethod = (searchMethod) => {
	return searchMethod === RETRIEVE_METHOD.semantic || searchMethod === RETRIEVE_METHOD.hybrid || searchMethod === RETRIEVE_METHOD.fullText;
};
var KnowledgeBaseValidationIssueCode = /* @__PURE__ */ function(KnowledgeBaseValidationIssueCode) {
	KnowledgeBaseValidationIssueCode["chunkStructureRequired"] = "chunk-structure-required";
	KnowledgeBaseValidationIssueCode["chunksVariableRequired"] = "chunks-variable-required";
	KnowledgeBaseValidationIssueCode["indexMethodRequired"] = "index-method-required";
	KnowledgeBaseValidationIssueCode["embeddingModelNotConfigured"] = "embedding-model-not-configured";
	KnowledgeBaseValidationIssueCode["embeddingModelConfigureRequired"] = "embedding-model-configure-required";
	KnowledgeBaseValidationIssueCode["embeddingModelApiKeyUnavailable"] = "embedding-model-api-key-unavailable";
	KnowledgeBaseValidationIssueCode["embeddingModelCreditsExhausted"] = "embedding-model-credits-exhausted";
	KnowledgeBaseValidationIssueCode["embeddingModelDisabled"] = "embedding-model-disabled";
	KnowledgeBaseValidationIssueCode["embeddingModelIncompatible"] = "embedding-model-incompatible";
	KnowledgeBaseValidationIssueCode["retrievalSettingRequired"] = "retrieval-setting-required";
	KnowledgeBaseValidationIssueCode["rerankingModelRequired"] = "reranking-model-required";
	KnowledgeBaseValidationIssueCode["rerankingModelInvalid"] = "reranking-model-invalid";
	return KnowledgeBaseValidationIssueCode;
}({});
new Set([
	KnowledgeBaseValidationIssueCode.embeddingModelNotConfigured,
	KnowledgeBaseValidationIssueCode.embeddingModelConfigureRequired,
	KnowledgeBaseValidationIssueCode.embeddingModelApiKeyUnavailable,
	KnowledgeBaseValidationIssueCode.embeddingModelCreditsExhausted,
	KnowledgeBaseValidationIssueCode.embeddingModelDisabled,
	KnowledgeBaseValidationIssueCode.embeddingModelIncompatible
]);
var resolveIssue = (code) => ({ code });
var resolveEmbeddingIssue = (payload) => {
	const { embedding_model, embedding_model_provider, _embeddingModelList, _embeddingProviderModelList } = payload;
	if (!embedding_model || !embedding_model_provider) return resolveIssue(KnowledgeBaseValidationIssueCode.embeddingModelNotConfigured);
	const currentEmbeddingModelProvider = _embeddingModelList?.find((provider) => provider.provider === embedding_model_provider);
	const hasProviderScopedModelList = !!_embeddingProviderModelList && _embeddingProviderModelList.length > 0;
	const currentEmbeddingModel = (hasProviderScopedModelList ? _embeddingProviderModelList : currentEmbeddingModelProvider?.models)?.find((model) => model.model === embedding_model);
	if (!currentEmbeddingModel) {
		if (!currentEmbeddingModelProvider) return resolveIssue(KnowledgeBaseValidationIssueCode.embeddingModelIncompatible);
		return resolveIssue(hasProviderScopedModelList || currentEmbeddingModelProvider ? KnowledgeBaseValidationIssueCode.embeddingModelIncompatible : KnowledgeBaseValidationIssueCode.embeddingModelNotConfigured);
	}
	switch (currentEmbeddingModel.status) {
		case ModelStatusEnum.active: return null;
		case ModelStatusEnum.noConfigure: return resolveIssue(KnowledgeBaseValidationIssueCode.embeddingModelConfigureRequired);
		case ModelStatusEnum.credentialRemoved: return resolveIssue(KnowledgeBaseValidationIssueCode.embeddingModelApiKeyUnavailable);
		case ModelStatusEnum.quotaExceeded: return resolveIssue(KnowledgeBaseValidationIssueCode.embeddingModelCreditsExhausted);
		case ModelStatusEnum.disabled: return resolveIssue(KnowledgeBaseValidationIssueCode.embeddingModelDisabled);
		case ModelStatusEnum.noPermission:
		default: return resolveIssue(KnowledgeBaseValidationIssueCode.embeddingModelIncompatible);
	}
};
var getKnowledgeBaseValidationIssue = (payload) => {
	const { chunk_structure, indexing_technique, retrieval_model, index_chunk_variable_selector, _rerankModelList } = payload;
	const { search_method, reranking_enable, reranking_model } = retrieval_model || {};
	if (!chunk_structure) return resolveIssue(KnowledgeBaseValidationIssueCode.chunkStructureRequired);
	if (index_chunk_variable_selector.length === 0) return resolveIssue(KnowledgeBaseValidationIssueCode.chunksVariableRequired);
	if (!indexing_technique) return resolveIssue(KnowledgeBaseValidationIssueCode.indexMethodRequired);
	if (indexing_technique === IndexingType.QUALIFIED) {
		const embeddingIssue = resolveEmbeddingIssue(payload);
		if (embeddingIssue) return embeddingIssue;
	}
	if (!retrieval_model || !search_method) return resolveIssue(KnowledgeBaseValidationIssueCode.retrievalSettingRequired);
	if (reranking_enable) {
		if (!reranking_model || !reranking_model.reranking_provider_name || !reranking_model.reranking_model_name) return resolveIssue(KnowledgeBaseValidationIssueCode.rerankingModelRequired);
		if (!(_rerankModelList?.find((provider) => provider.provider === reranking_model.reranking_provider_name))?.models.find((model) => model.model === reranking_model.reranking_model_name)) return resolveIssue(KnowledgeBaseValidationIssueCode.rerankingModelInvalid);
	}
	return null;
};
var getKnowledgeBaseValidationMessage = (issue, t) => {
	if (!issue) return "";
	switch (issue.code) {
		case KnowledgeBaseValidationIssueCode.chunkStructureRequired: return t("nodes.knowledgeBase.chunkIsRequired", { ns: "workflow" });
		case KnowledgeBaseValidationIssueCode.chunksVariableRequired: return t("nodes.knowledgeBase.chunksVariableIsRequired", { ns: "workflow" });
		case KnowledgeBaseValidationIssueCode.indexMethodRequired: return t("nodes.knowledgeBase.indexMethodIsRequired", { ns: "workflow" });
		case KnowledgeBaseValidationIssueCode.embeddingModelNotConfigured: return t("nodes.knowledgeBase.embeddingModelNotConfigured", { ns: "workflow" });
		case KnowledgeBaseValidationIssueCode.embeddingModelConfigureRequired: return t("modelProvider.selector.configureRequired", { ns: "common" });
		case KnowledgeBaseValidationIssueCode.embeddingModelApiKeyUnavailable: return t("modelProvider.selector.apiKeyUnavailable", { ns: "common" });
		case KnowledgeBaseValidationIssueCode.embeddingModelCreditsExhausted: return t("modelProvider.selector.creditsExhausted", { ns: "common" });
		case KnowledgeBaseValidationIssueCode.embeddingModelDisabled: return t("modelProvider.selector.disabled", { ns: "common" });
		case KnowledgeBaseValidationIssueCode.embeddingModelIncompatible: return t("modelProvider.selector.incompatible", { ns: "common" });
		case KnowledgeBaseValidationIssueCode.retrievalSettingRequired: return t("nodes.knowledgeBase.retrievalSettingIsRequired", { ns: "workflow" });
		case KnowledgeBaseValidationIssueCode.rerankingModelRequired: return t("nodes.knowledgeBase.rerankingModelIsRequired", { ns: "workflow" });
		case KnowledgeBaseValidationIssueCode.rerankingModelInvalid: return t("nodes.knowledgeBase.rerankingModelIsInvalid", { ns: "workflow" });
		default: return "";
	}
};
//#endregion
//#region app/components/workflow/nodes/data-source-empty/constants.ts
var CUSTOM_DATA_SOURCE_EMPTY_NODE = "custom-data-source-empty";
//#endregion
//#region app/components/workflow/nodes/data-source-empty/default.ts
var nodeDefault$1 = {
	metaData: genNodeMetaData({
		sort: -1,
		type: BlockEnum.DataSourceEmpty,
		isUndeletable: true,
		isSingleton: true
	}),
	defaultValue: {},
	checkValid() {
		return { isValid: true };
	}
};
//#endregion
//#region app/components/workflow/nodes/knowledge-base/default.ts
var nodeDefault = {
	metaData: genNodeMetaData({
		sort: 3.1,
		type: BlockEnum.KnowledgeBase,
		isRequired: true,
		isUndeletable: true,
		isSingleton: true,
		isTypeFixed: true
	}),
	defaultValue: {
		index_chunk_variable_selector: [],
		keyword_number: 10,
		retrieval_model: {
			top_k: 3,
			score_threshold_enabled: false,
			score_threshold: .5
		}
	},
	checkValid(payload, t) {
		const issue = getKnowledgeBaseValidationIssue(payload);
		if (issue) return {
			isValid: false,
			errorMessage: getKnowledgeBaseValidationMessage(issue, t)
		};
		return {
			isValid: true,
			errorMessage: ""
		};
	}
};
//#endregion
//#region app/components/rag-pipeline/hooks/use-available-nodes-meta-data.ts
var useAvailableNodesMetaData = () => {
	const { t } = useTranslation();
	const docLink = useDocLink();
	const mergedNodesMetaData = useMemo(() => [
		...WORKFLOW_COMMON_NODES.filter((node) => node.metaData.type !== BlockEnum.HumanInput),
		{
			...nodeDefault$2,
			defaultValue: {
				...nodeDefault$2.defaultValue,
				_dataSourceStartToAdd: true
			}
		},
		nodeDefault,
		nodeDefault$1
	], []);
	const helpLinkUri = useMemo(() => docLink("/use-dify/knowledge/knowledge-pipeline/knowledge-pipeline-orchestration"), [docLink]);
	const availableNodesMetaData = useMemo(() => mergedNodesMetaData.map((node) => {
		const { metaData } = node;
		const title = t(`blocks.${metaData.type}`, { ns: "workflow" });
		const description = t(`blocksAbout.${metaData.type}`, { ns: "workflow" });
		return {
			...node,
			metaData: {
				...metaData,
				title,
				description,
				helpLinkUri
			},
			defaultValue: {
				...node.defaultValue,
				type: metaData.type,
				title
			}
		};
	}), [
		helpLinkUri,
		mergedNodesMetaData,
		t
	]);
	const availableNodesMetaDataMap = useMemo(() => availableNodesMetaData.reduce((acc, node) => {
		acc[node.metaData.type] = node;
		return acc;
	}, {}), [availableNodesMetaData]);
	return useMemo(() => {
		return {
			nodes: availableNodesMetaData,
			nodesMap: {
				...availableNodesMetaDataMap,
				[BlockEnum.VariableAssigner]: availableNodesMetaDataMap?.[BlockEnum.VariableAggregator]
			}
		};
	}, [availableNodesMetaData, availableNodesMetaDataMap]);
};
//#endregion
//#region app/components/rag-pipeline/hooks/use-nodes-sync-draft.ts
var useNodesSyncDraft = () => {
	const store = useStoreApi();
	const workflowStore = useWorkflowStore();
	const { getNodesReadOnly } = useNodesReadOnly();
	const { handleRefreshWorkflowDraft } = usePipelineRefreshDraft();
	const getPostParams = useCallback(() => {
		const { getNodes, edges, transform } = store.getState();
		const nodes = getNodes().filter((node) => !node.data._isTempNode);
		const [x, y, zoom] = transform;
		const { pipelineId, environmentVariables, syncWorkflowDraftHash, ragPipelineVariables } = workflowStore.getState();
		if (pipelineId && !!nodes.length) {
			const producedNodes = produce(nodes, (draft) => {
				draft.forEach((node) => {
					Object.keys(node.data).forEach((key) => {
						if (key.startsWith("_")) delete node.data[key];
					});
				});
			});
			const producedEdges = produce(edges, (draft) => {
				draft.forEach((edge) => {
					Object.keys(edge.data).forEach((key) => {
						if (key.startsWith("_")) delete edge.data[key];
					});
				});
			});
			return {
				url: `/rag/pipelines/${pipelineId}/workflows/draft`,
				params: {
					graph: {
						nodes: producedNodes,
						edges: producedEdges,
						viewport: {
							x,
							y,
							zoom
						}
					},
					environment_variables: environmentVariables,
					rag_pipeline_variables: ragPipelineVariables,
					hash: syncWorkflowDraftHash
				}
			};
		}
	}, [store, workflowStore]);
	const syncWorkflowDraftWhenPageClose = useCallback(() => {
		if (getNodesReadOnly()) return;
		const postParams = getPostParams();
		if (postParams) postWithKeepalive(`${API_PREFIX}${postParams.url}`, postParams.params);
	}, [getPostParams, getNodesReadOnly]);
	return {
		doSyncWorkflowDraft: useSerialAsyncCallback(useCallback(async (notRefreshWhenSyncError, callback) => {
			if (getNodesReadOnly()) return;
			const postParams = getPostParams();
			if (postParams) {
				const { setSyncWorkflowDraftHash, setDraftUpdatedAt } = workflowStore.getState();
				try {
					const res = await syncWorkflowDraft(postParams);
					setSyncWorkflowDraftHash(res.hash);
					setDraftUpdatedAt(res.updated_at);
					callback?.onSuccess?.();
				} catch (error) {
					if (error && error.json && !error.bodyUsed) error.json().then((err) => {
						if (err.code === "draft_workflow_not_sync" && !notRefreshWhenSyncError) handleRefreshWorkflowDraft();
					});
					callback?.onError?.();
				} finally {
					callback?.onSettled?.();
				}
			}
		}, [
			getPostParams,
			getNodesReadOnly,
			workflowStore,
			handleRefreshWorkflowDraft
		]), getNodesReadOnly),
		syncWorkflowDraftWhenPageClose
	};
};
//#endregion
//#region app/components/rag-pipeline/hooks/use-DSL.ts
var useDSL = () => {
	const { t } = useTranslation();
	const { notify } = useToastContext();
	const { eventEmitter } = useEventEmitterContextContext();
	const [exporting, setExporting] = useState(false);
	const { doSyncWorkflowDraft } = useNodesSyncDraft();
	const workflowStore = useWorkflowStore();
	const { mutateAsync: exportPipelineConfig } = useExportPipelineDSL();
	const handleExportDSL = useCallback(async (include = false) => {
		const { pipelineId, knowledgeName } = workflowStore.getState();
		if (!pipelineId) return;
		if (exporting) return;
		try {
			setExporting(true);
			await doSyncWorkflowDraft();
			const { data } = await exportPipelineConfig({
				pipelineId,
				include
			});
			downloadBlob({
				data: new Blob([data], { type: "application/yaml" }),
				fileName: `${knowledgeName}.pipeline`
			});
		} catch {
			notify({
				type: "error",
				message: t("exportFailed", { ns: "app" })
			});
		} finally {
			setExporting(false);
		}
	}, [
		notify,
		t,
		doSyncWorkflowDraft,
		exporting,
		exportPipelineConfig,
		workflowStore
	]);
	return {
		exportCheck: useCallback(async () => {
			const { pipelineId } = workflowStore.getState();
			if (!pipelineId) return;
			try {
				const list = ((await fetchWorkflowDraft(`/rag/pipelines/${pipelineId}/workflows/draft`)).environment_variables || []).filter((env) => env.value_type === "secret");
				if (list.length === 0) {
					handleExportDSL();
					return;
				}
				eventEmitter?.emit({
					type: DSL_EXPORT_CHECK,
					payload: { data: list }
				});
			} catch {
				notify({
					type: "error",
					message: t("exportFailed", { ns: "app" })
				});
			}
		}, [
			eventEmitter,
			handleExportDSL,
			notify,
			t,
			workflowStore
		]),
		handleExportDSL
	};
};
//#endregion
//#region app/components/rag-pipeline/hooks/use-get-run-and-trace-url.ts
var useGetRunAndTraceUrl = () => {
	const workflowStore = useWorkflowStore();
	return { getWorkflowRunAndTraceUrl: useCallback((runId) => {
		const { pipelineId } = workflowStore.getState();
		return {
			runUrl: `/rag/pipelines/${pipelineId}/workflow-runs/${runId}`,
			traceUrl: `/rag/pipelines/${pipelineId}/workflow-runs/${runId}/node-executions`
		};
	}, [workflowStore]) };
};
//#endregion
//#region app/components/rag-pipeline/hooks/use-input-field-panel.ts
var useInputFieldPanel = () => {
	const workflowStore = useWorkflowStore();
	const showInputFieldPreviewPanel = useStore((state) => state.showInputFieldPreviewPanel);
	const inputFieldEditPanelProps = useStore((state) => state.inputFieldEditPanelProps);
	const isPreviewing = useMemo(() => {
		return showInputFieldPreviewPanel;
	}, [showInputFieldPreviewPanel]);
	const isEditing = useMemo(() => {
		return !!inputFieldEditPanelProps;
	}, [inputFieldEditPanelProps]);
	return {
		closeAllInputFieldPanels: useCallback(() => {
			const { setShowInputFieldPanel, setShowInputFieldPreviewPanel, setInputFieldEditPanelProps } = workflowStore.getState();
			setShowInputFieldPanel?.(false);
			setShowInputFieldPreviewPanel?.(false);
			setInputFieldEditPanelProps?.(null);
		}, [workflowStore]),
		toggleInputFieldPreviewPanel: useCallback(() => {
			const { showInputFieldPreviewPanel, setShowInputFieldPreviewPanel } = workflowStore.getState();
			setShowInputFieldPreviewPanel?.(!showInputFieldPreviewPanel);
		}, [workflowStore]),
		toggleInputFieldEditPanel: useCallback((editContent) => {
			const { setInputFieldEditPanelProps } = workflowStore.getState();
			setInputFieldEditPanelProps?.(editContent);
		}, [workflowStore]),
		isPreviewing,
		isEditing
	};
};
//#endregion
//#region app/components/rag-pipeline/hooks/use-pipeline-config.ts
var usePipelineConfig = () => {
	const pipelineId = useStore((s) => s.pipelineId);
	const workflowStore = useWorkflowStore();
	const handleUpdateNodesDefaultConfigs = useCallback((nodesDefaultConfigs) => {
		const { setNodesDefaultConfigs } = workflowStore.getState();
		let res = {};
		if (Array.isArray(nodesDefaultConfigs)) nodesDefaultConfigs.forEach((item) => {
			res[item.type] = item.config;
		});
		else res = nodesDefaultConfigs;
		setNodesDefaultConfigs(res);
	}, [workflowStore]);
	useWorkflowConfig(pipelineId ? `/rag/pipelines/${pipelineId}/workflows/default-workflow-block-configs` : "", handleUpdateNodesDefaultConfigs);
	const handleUpdatePublishedAt = useCallback((publishedWorkflow) => {
		const { setPublishedAt } = workflowStore.getState();
		setPublishedAt(publishedWorkflow?.created_at);
	}, [workflowStore]);
	useWorkflowConfig(pipelineId ? `/rag/pipelines/${pipelineId}/workflows/publish` : "", handleUpdatePublishedAt);
	const handleUpdateDataSourceList = useCallback((dataSourceList) => {
		dataSourceList.forEach((item) => {
			const icon = item.declaration.identity.icon;
			if (typeof icon == "string" && !icon.includes(basePath)) item.declaration.identity.icon = `${basePath}${icon}`;
		});
		const { setDataSourceList } = workflowStore.getState();
		setDataSourceList(dataSourceList);
	}, [workflowStore]);
	useWorkflowConfig("/files/upload", useCallback((config) => {
		const { setFileUploadConfig } = workflowStore.getState();
		setFileUploadConfig(config);
	}, [workflowStore]));
	useDataSourceList(!!pipelineId, handleUpdateDataSourceList);
};
//#endregion
//#region app/components/rag-pipeline/hooks/use-pipeline-template.ts
var usePipelineTemplate = () => {
	const { t } = useTranslation();
	const { newNode: knowledgeBaseNode } = generateNewNode({
		id: "knowledgeBase",
		data: {
			...nodeDefault.defaultValue,
			type: nodeDefault.metaData.type,
			title: t(`blocks.${nodeDefault.metaData.type}`, { ns: "workflow" }),
			selected: true
		},
		position: {
			x: START_INITIAL_POSITION.x + 500,
			y: START_INITIAL_POSITION.y
		}
	});
	return {
		nodes: [knowledgeBaseNode],
		edges: []
	};
};
//#endregion
//#region app/components/rag-pipeline/hooks/use-pipeline-init.ts
var usePipelineInit = () => {
	const workflowStore = useWorkflowStore();
	const { nodes: nodesTemplate, edges: edgesTemplate } = usePipelineTemplate();
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const datasetId = useDatasetDetailContextWithSelector((s) => s.dataset)?.pipeline_id;
	const knowledgeName = useDatasetDetailContextWithSelector((s) => s.dataset)?.name;
	const knowledgeIcon = useDatasetDetailContextWithSelector((s) => s.dataset)?.icon_info;
	useEffect(() => {
		workflowStore.setState({
			pipelineId: datasetId,
			knowledgeName,
			knowledgeIcon
		});
	}, [
		datasetId,
		workflowStore,
		knowledgeName,
		knowledgeIcon
	]);
	usePipelineConfig();
	const handleGetInitialWorkflowData = useCallback(async () => {
		const { setEnvSecrets, setEnvironmentVariables, setSyncWorkflowDraftHash, setDraftUpdatedAt, setToolPublished, setRagPipelineVariables } = workflowStore.getState();
		try {
			const res = await fetchWorkflowDraft(`/rag/pipelines/${datasetId}/workflows/draft`);
			setData(res);
			setDraftUpdatedAt(res.updated_at);
			setToolPublished(res.tool_published);
			setEnvSecrets((res.environment_variables || []).filter((env) => env.value_type === "secret").reduce((acc, env) => {
				acc[env.id] = env.value;
				return acc;
			}, {}));
			setEnvironmentVariables(res.environment_variables?.map((env) => env.value_type === "secret" ? {
				...env,
				value: "[__HIDDEN__]"
			} : env) || []);
			setSyncWorkflowDraftHash(res.hash);
			setRagPipelineVariables?.(res.rag_pipeline_variables || []);
			setIsLoading(false);
		} catch (error) {
			if (error && error.json && !error.bodyUsed && datasetId) error.json().then((err) => {
				if (err.code === "draft_workflow_not_exist") {
					workflowStore.setState({
						notInitialWorkflow: true,
						shouldAutoOpenStartNodeSelector: true
					});
					syncWorkflowDraft({
						url: `/rag/pipelines/${datasetId}/workflows/draft`,
						params: {
							graph: {
								nodes: nodesTemplate,
								edges: edgesTemplate
							},
							environment_variables: []
						}
					}).then((res) => {
						const { setDraftUpdatedAt } = workflowStore.getState();
						setDraftUpdatedAt(res.updated_at);
						handleGetInitialWorkflowData();
					});
				}
			});
		}
	}, [
		nodesTemplate,
		edgesTemplate,
		workflowStore,
		datasetId
	]);
	useEffect(() => {
		handleGetInitialWorkflowData();
	}, []);
	return {
		data,
		isLoading
	};
};
//#endregion
//#region app/components/rag-pipeline/utils/nodes.ts
var processNodesWithoutDataSource = (nodes, viewport) => {
	let leftNode;
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i];
		if (node.data.type === BlockEnum.DataSource) return {
			nodes,
			viewport
		};
		if (node.type === "custom" && !leftNode) leftNode = node;
		if (node.type === "custom" && leftNode && node.position.x < leftNode.position.x) leftNode = node;
	}
	if (leftNode) {
		const startX = leftNode.position.x - NODE_WIDTH_X_OFFSET;
		const startY = leftNode.position.y;
		const { newNode } = generateNewNode({
			id: "data-source-empty",
			type: CUSTOM_DATA_SOURCE_EMPTY_NODE,
			data: {
				title: "",
				desc: "",
				type: BlockEnum.DataSourceEmpty,
				width: 240,
				_isTempNode: true
			},
			position: {
				x: startX,
				y: startY
			}
		});
		return {
			nodes: [
				newNode,
				generateNewNode({
					id: "note",
					type: CUSTOM_NOTE_NODE,
					data: {
						title: "",
						desc: "",
						type: "",
						text: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":1,\"mode\":\"normal\",\"style\":\"font-size: 14px;\",\"text\":\"Get started with a blank pipeline\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1,\"textFormat\":1,\"textStyle\":\"font-size: 14px;\"},{\"children\":[],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1,\"textFormat\":1,\"textStyle\":\"\"},{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"A Knowledge Pipeline starts with Data Source as the starting node and ends with the knowledge base node. The general steps are: import documents from the data source → use extractor to extract document content → split and clean content into structured chunks → store in the knowledge base.\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1,\"textFormat\":0,\"textStyle\":\"\"},{\"children\":[],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1,\"textFormat\":0,\"textStyle\":\"\"},{\"children\":[{\"children\":[{\"detail\":0,\"format\":2,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Link to documentation\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"link\",\"version\":1,\"textFormat\":2,\"rel\":\"noreferrer\",\"target\":\"_blank\",\"title\":null,\"url\":\"https://dify.ai\"}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1,\"textFormat\":2,\"textStyle\":\"\"},{\"children\":[],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1,\"textFormat\":0,\"textStyle\":\"\"}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1,\"textFormat\":1,\"textStyle\":\"font-size: 14px;\"}}",
						theme: NoteTheme.blue,
						author: "",
						showAuthor: true,
						width: 240,
						height: 300,
						_isTempNode: true
					},
					position: {
						x: startX,
						y: startY + 100
					}
				}).newNode,
				...nodes
			],
			viewport: {
				x: (START_INITIAL_POSITION.x - startX) * (viewport?.zoom || 1),
				y: (START_INITIAL_POSITION.y - startY) * (viewport?.zoom || 1),
				zoom: viewport?.zoom || 1
			}
		};
	}
	return {
		nodes,
		viewport
	};
};
//#endregion
//#region app/components/rag-pipeline/hooks/use-pipeline-refresh-draft.ts
var usePipelineRefreshDraft = () => {
	const workflowStore = useWorkflowStore();
	const { handleUpdateWorkflowCanvas } = useWorkflowUpdate();
	return { handleRefreshWorkflowDraft: useCallback(() => {
		const { pipelineId, setSyncWorkflowDraftHash, setIsSyncingWorkflowDraft, setEnvironmentVariables, setEnvSecrets, setRagPipelineVariables } = workflowStore.getState();
		setIsSyncingWorkflowDraft(true);
		fetchWorkflowDraft(`/rag/pipelines/${pipelineId}/workflows/draft`).then((response) => {
			const { nodes: processedNodes, viewport } = processNodesWithoutDataSource(response.graph.nodes, response.graph.viewport);
			handleUpdateWorkflowCanvas({
				...response.graph,
				nodes: processedNodes,
				viewport
			});
			setSyncWorkflowDraftHash(response.hash);
			setEnvSecrets((response.environment_variables || []).filter((env) => env.value_type === "secret").reduce((acc, env) => {
				acc[env.id] = env.value;
				return acc;
			}, {}));
			setEnvironmentVariables(response.environment_variables?.map((env) => env.value_type === "secret" ? {
				...env,
				value: "[__HIDDEN__]"
			} : env) || []);
			setRagPipelineVariables?.(response.rag_pipeline_variables || []);
		}).finally(() => setIsSyncingWorkflowDraft(false));
	}, [handleUpdateWorkflowCanvas, workflowStore]) };
};
//#endregion
//#region app/components/rag-pipeline/hooks/use-pipeline-run.ts
var usePipelineRun = () => {
	const store = useStoreApi();
	const workflowStore = useWorkflowStore();
	const reactflow = useReactFlow();
	const { doSyncWorkflowDraft } = useNodesSyncDraft();
	const { handleUpdateWorkflowCanvas } = useWorkflowUpdate();
	const { handleWorkflowStarted, handleWorkflowFinished, handleWorkflowFailed, handleWorkflowNodeStarted, handleWorkflowNodeFinished, handleWorkflowNodeIterationStarted, handleWorkflowNodeIterationNext, handleWorkflowNodeIterationFinished, handleWorkflowNodeLoopStarted, handleWorkflowNodeLoopNext, handleWorkflowNodeLoopFinished, handleWorkflowNodeRetry, handleWorkflowAgentLog, handleWorkflowTextChunk, handleWorkflowTextReplace } = useWorkflowRunEvent();
	const abortControllerRef = useRef(null);
	const handleBackupDraft = useCallback(() => {
		const { getNodes, edges } = store.getState();
		const { getViewport } = reactflow;
		const { backupDraft, setBackupDraft, environmentVariables } = workflowStore.getState();
		if (!backupDraft) {
			setBackupDraft({
				nodes: getNodes(),
				edges,
				viewport: getViewport(),
				environmentVariables
			});
			doSyncWorkflowDraft();
		}
	}, [
		reactflow,
		workflowStore,
		store,
		doSyncWorkflowDraft
	]);
	const handleLoadBackupDraft = useCallback(() => {
		const { backupDraft, setBackupDraft, setEnvironmentVariables } = workflowStore.getState();
		if (backupDraft) {
			const { nodes, edges, viewport, environmentVariables } = backupDraft;
			handleUpdateWorkflowCanvas({
				nodes,
				edges,
				viewport
			});
			setEnvironmentVariables(environmentVariables);
			setBackupDraft(void 0);
		}
	}, [handleUpdateWorkflowCanvas, workflowStore]);
	const pipelineId = useStore((s) => s.pipelineId);
	const invalidAllLastRun = useInvalidAllLastRun(FlowType.ragPipeline, pipelineId);
	const invalidateRunHistory = useInvalidateWorkflowRunHistory();
	const { fetchInspectVars } = useSetWorkflowVarsWithValue({
		flowType: FlowType.ragPipeline,
		flowId: pipelineId
	});
	return {
		handleBackupDraft,
		handleLoadBackupDraft,
		handleRun: useCallback(async (params, callback) => {
			const { getNodes, setNodes } = store.getState();
			setNodes(produce(getNodes(), (draft) => {
				draft.forEach((node) => {
					node.data.selected = false;
					node.data._runningStatus = void 0;
				});
			}));
			await doSyncWorkflowDraft();
			const { onWorkflowStarted, onWorkflowFinished, onNodeStarted, onNodeFinished, onIterationStart, onIterationNext, onIterationFinish, onLoopStart, onLoopNext, onLoopFinish, onNodeRetry, onAgentLog, onError, ...restCallback } = callback || {};
			const { pipelineId } = workflowStore.getState();
			const runHistoryUrl = `/rag/pipelines/${pipelineId}/workflow-runs`;
			workflowStore.setState({ historyWorkflowData: void 0 });
			const { clientWidth, clientHeight } = document.getElementById("workflow-container");
			const url = `/rag/pipelines/${pipelineId}/workflows/draft/run`;
			const { setWorkflowRunningData } = workflowStore.getState();
			setWorkflowRunningData({
				result: {
					inputs_truncated: false,
					process_data_truncated: false,
					outputs_truncated: false,
					status: WorkflowRunningStatus.Running
				},
				tracing: [],
				resultText: ""
			});
			abortControllerRef.current?.abort();
			abortControllerRef.current = null;
			ssePost(url, { body: params }, {
				getAbortController: (controller) => {
					abortControllerRef.current = controller;
				},
				onWorkflowStarted: (params) => {
					handleWorkflowStarted(params);
					invalidateRunHistory(runHistoryUrl);
					if (onWorkflowStarted) onWorkflowStarted(params);
				},
				onWorkflowFinished: (params) => {
					handleWorkflowFinished(params);
					invalidateRunHistory(runHistoryUrl);
					fetchInspectVars({});
					invalidAllLastRun();
					if (onWorkflowFinished) onWorkflowFinished(params);
				},
				onError: (params) => {
					handleWorkflowFailed();
					invalidateRunHistory(runHistoryUrl);
					if (onError) onError(params);
				},
				onNodeStarted: (params) => {
					handleWorkflowNodeStarted(params, {
						clientWidth,
						clientHeight
					});
					if (onNodeStarted) onNodeStarted(params);
				},
				onNodeFinished: (params) => {
					handleWorkflowNodeFinished(params);
					if (onNodeFinished) onNodeFinished(params);
				},
				onIterationStart: (params) => {
					handleWorkflowNodeIterationStarted(params, {
						clientWidth,
						clientHeight
					});
					if (onIterationStart) onIterationStart(params);
				},
				onIterationNext: (params) => {
					handleWorkflowNodeIterationNext(params);
					if (onIterationNext) onIterationNext(params);
				},
				onIterationFinish: (params) => {
					handleWorkflowNodeIterationFinished(params);
					if (onIterationFinish) onIterationFinish(params);
				},
				onLoopStart: (params) => {
					handleWorkflowNodeLoopStarted(params, {
						clientWidth,
						clientHeight
					});
					if (onLoopStart) onLoopStart(params);
				},
				onLoopNext: (params) => {
					handleWorkflowNodeLoopNext(params);
					if (onLoopNext) onLoopNext(params);
				},
				onLoopFinish: (params) => {
					handleWorkflowNodeLoopFinished(params);
					if (onLoopFinish) onLoopFinish(params);
				},
				onNodeRetry: (params) => {
					handleWorkflowNodeRetry(params);
					if (onNodeRetry) onNodeRetry(params);
				},
				onAgentLog: (params) => {
					handleWorkflowAgentLog(params);
					if (onAgentLog) onAgentLog(params);
				},
				onTextChunk: (params) => {
					handleWorkflowTextChunk(params);
				},
				onTextReplace: (params) => {
					handleWorkflowTextReplace(params);
				},
				...restCallback
			});
		}, [
			store,
			doSyncWorkflowDraft,
			workflowStore,
			handleWorkflowStarted,
			handleWorkflowFinished,
			fetchInspectVars,
			invalidAllLastRun,
			invalidateRunHistory,
			handleWorkflowFailed,
			handleWorkflowNodeStarted,
			handleWorkflowNodeFinished,
			handleWorkflowNodeIterationStarted,
			handleWorkflowNodeIterationNext,
			handleWorkflowNodeIterationFinished,
			handleWorkflowNodeLoopStarted,
			handleWorkflowNodeLoopNext,
			handleWorkflowNodeLoopFinished,
			handleWorkflowNodeRetry,
			handleWorkflowAgentLog,
			handleWorkflowTextChunk,
			handleWorkflowTextReplace
		]),
		handleStopRun: useCallback((taskId) => {
			const { pipelineId } = workflowStore.getState();
			stopWorkflowRun(`/rag/pipelines/${pipelineId}/workflow-runs/tasks/${taskId}/stop`);
			if (abortControllerRef.current) abortControllerRef.current.abort();
			abortControllerRef.current = null;
		}, [workflowStore]),
		handleRestoreFromPublishedWorkflow: useCallback((publishedWorkflow) => {
			const nodes = publishedWorkflow.graph.nodes.map((node) => ({
				...node,
				selected: false,
				data: {
					...node.data,
					selected: false
				}
			}));
			const edges = publishedWorkflow.graph.edges;
			const viewport = publishedWorkflow.graph.viewport;
			handleUpdateWorkflowCanvas({
				nodes,
				edges,
				viewport
			});
			workflowStore.getState().setEnvironmentVariables(publishedWorkflow.environment_variables || []);
			workflowStore.getState().setRagPipelineVariables?.(publishedWorkflow.rag_pipeline_variables || []);
		}, [handleUpdateWorkflowCanvas, workflowStore])
	};
};
//#endregion
//#region app/components/rag-pipeline/hooks/use-pipeline-start-run.tsx
var usePipelineStartRun = () => {
	const workflowStore = useWorkflowStore();
	const { handleCancelDebugAndPreviewPanel } = useWorkflowInteractions();
	const { doSyncWorkflowDraft } = useNodesSyncDraft();
	const { closeAllInputFieldPanels } = useInputFieldPanel();
	const handleWorkflowStartRunInWorkflow = useCallback(async () => {
		const { workflowRunningData } = workflowStore.getState();
		if (workflowRunningData?.result.status === WorkflowRunningStatus.Running) return;
		const { isPreparingDataSource, setIsPreparingDataSource, showDebugAndPreviewPanel, setShowEnvPanel, setShowDebugAndPreviewPanel } = workflowStore.getState();
		if (!isPreparingDataSource && workflowRunningData) {
			workflowStore.setState({
				isPreparingDataSource: true,
				workflowRunningData: void 0
			});
			return;
		}
		setShowEnvPanel(false);
		closeAllInputFieldPanels();
		if (showDebugAndPreviewPanel) {
			setIsPreparingDataSource?.(false);
			handleCancelDebugAndPreviewPanel();
			return;
		}
		await doSyncWorkflowDraft();
		setIsPreparingDataSource?.(true);
		setShowDebugAndPreviewPanel(true);
	}, [
		workflowStore,
		handleCancelDebugAndPreviewPanel,
		doSyncWorkflowDraft
	]);
	return {
		handleStartWorkflowRun: useCallback(() => {
			handleWorkflowStartRunInWorkflow();
		}, [handleWorkflowStartRunInWorkflow]),
		handleWorkflowStartRunInWorkflow
	};
};
//#endregion
export { usePipelineInit as a, useDSL as c, CUSTOM_DATA_SOURCE_EMPTY_NODE as d, KnowledgeBaseValidationIssueCode as f, isHighQualitySearchMethod as h, processNodesWithoutDataSource as i, useNodesSyncDraft as l, getKnowledgeBaseValidationMessage as m, usePipelineRun as n, useInputFieldPanel as o, getKnowledgeBaseValidationIssue as p, usePipelineRefreshDraft as r, useGetRunAndTraceUrl as s, usePipelineStartRun as t, useAvailableNodesMetaData as u };
