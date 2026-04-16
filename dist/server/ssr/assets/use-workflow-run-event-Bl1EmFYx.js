import { bt as genNodeMetaData, ft as useReactFlow, i as comparisonOperatorNotRequireValue$1, l as LogicalOperator$1, mt as useStoreApi, s as isEmptyRelatedOperator$1, xt as BlockClassificationEnum } from "./utils-DqpfZ3W-.js";
import { i as FormTypeEnum } from "./declarations-DYMEe7hD.js";
import { E as LOOP_NODE_MAX_COUNT, Ft as NodeRunningStatus, It as PromptRole, Mt as ErrorHandleMode, Ot as BlockEnum, Vt as WorkflowRunningStatus, jt as EditionType, u as DATASET_DEFAULT, zt as VarType } from "./config-Dopncj5R.js";
import { $n as useWorkflowStore, An as toNodeOutputVars, Gn as useMatchSchemaType, Ln as nodeDefault$18, Qn as useStore, Xr as useInvalidateSysVarValues, Yr as useInvalidateConversationVarValues, g as useNodesInteractionsWithoutSync, ir as produce, pt as getLLMModelIssue, st as LLMModelIssueCode, zn as nodeDefault$19 } from "./hooks-Bj_4KA1b.js";
import { t as renderI18nObject } from "./i18n-config-jsJ9YUFd.js";
import { t as checkoutRerankModelConfiguredInRetrievalSettings } from "./utils-oRnrO3yr.js";
import { r as AppModeEnum, s as RETRIEVE_TYPE, u as TransferMethod } from "./app-DPjSIfgb.js";
import { Ct as useAllMCPTools, St as useAllCustomTools, Tt as useAllWorkflowTools, xt as useAllBuiltInTools } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { t as fetchAllInspectVars } from "./workflow-Dbk_had1.js";
import { o as getFilesInLogs } from "./utils-Dh7W533Q.js";
import { t as CodeLanguage } from "./types-C18Ag7fa.js";
import { t as ErrorHandleTypeEnum } from "./types-BJj1k75y.js";
import { useCallback, useMemo } from "react";
//#region app/components/workflow/hooks/use-fetch-workflow-inspect-vars.ts
var useSetWorkflowVarsWithValue = ({ flowType, flowId }) => {
	const workflowStore = useWorkflowStore();
	const store = useStoreApi();
	const invalidateConversationVarValues = useInvalidateConversationVarValues(flowType, flowId);
	const invalidateSysVarValues = useInvalidateSysVarValues(flowType, flowId);
	const { handleCancelAllNodeSuccessStatus } = useNodesInteractionsWithoutSync();
	const { schemaTypeDefinitions } = useMatchSchemaType();
	const { data: buildInTools } = useAllBuiltInTools();
	const { data: customTools } = useAllCustomTools();
	const { data: workflowTools } = useAllWorkflowTools();
	const { data: mcpTools } = useAllMCPTools();
	const dataSourceList = useStore((s) => s.dataSourceList);
	const allPluginInfoList = useMemo(() => {
		return {
			buildInTools: buildInTools || [],
			customTools: customTools || [],
			workflowTools: workflowTools || [],
			mcpTools: mcpTools || [],
			dataSourceList: dataSourceList || []
		};
	}, [
		buildInTools,
		customTools,
		workflowTools,
		mcpTools,
		dataSourceList
	]);
	const setInspectVarsToStore = useCallback((inspectVars, passedInAllPluginInfoList, passedInSchemaTypeDefinitions) => {
		const { setNodesWithInspectVars } = workflowStore.getState();
		const { getNodes } = store.getState();
		const nodeArr = getNodes();
		const allNodesOutputVars = toNodeOutputVars(nodeArr, false, () => true, [], [], [], passedInAllPluginInfoList || allPluginInfoList, passedInSchemaTypeDefinitions || schemaTypeDefinitions);
		const nodesKeyValue = {};
		nodeArr.forEach((node) => {
			nodesKeyValue[node.id] = node;
		});
		const withValueNodeIds = {};
		inspectVars.forEach((varItem) => {
			const nodeId = varItem.selector[0];
			if (!nodesKeyValue[nodeId]) return;
			withValueNodeIds[nodeId] = true;
		});
		setNodesWithInspectVars(Object.keys(withValueNodeIds).map((nodeId) => {
			return nodesKeyValue[nodeId];
		}).map((node) => {
			const nodeId = node.id;
			const varsUnderTheNode = inspectVars.filter((varItem) => {
				return varItem.selector[0] === nodeId;
			});
			const nodeVar = allNodesOutputVars.find((item) => item.nodeId === nodeId);
			return {
				nodeId,
				nodePayload: node.data,
				nodeType: node.data.type,
				title: node.data.title,
				vars: varsUnderTheNode.map((item) => {
					const schemaType = nodeVar ? nodeVar.vars.find((v) => v.variable === item.name)?.schemaType : "";
					return {
						...item,
						schemaType
					};
				}),
				isSingRunRunning: false,
				isValueFetched: false
			};
		}));
	}, [
		workflowStore,
		store,
		allPluginInfoList,
		schemaTypeDefinitions
	]);
	return { fetchInspectVars: useCallback(async (params) => {
		const { passInVars, vars, passedInAllPluginInfoList, passedInSchemaTypeDefinitions } = params;
		invalidateConversationVarValues();
		invalidateSysVarValues();
		setInspectVarsToStore(passInVars ? vars : await fetchAllInspectVars(flowType, flowId), passedInAllPluginInfoList, passedInSchemaTypeDefinitions);
		handleCancelAllNodeSuccessStatus();
	}, [
		invalidateConversationVarValues,
		invalidateSysVarValues,
		flowType,
		flowId,
		setInspectVarsToStore,
		handleCancelAllNodeSuccessStatus
	]) };
};
//#endregion
//#region app/components/workflow/nodes/agent/default.ts
var nodeDefault$17 = {
	metaData: genNodeMetaData({
		sort: 3,
		type: BlockEnum.Agent
	}),
	defaultValue: { tool_node_version: "2" },
	checkValid(payload, t, moreDataForCheckValid) {
		const { strategy, language, isReadyForCheckValid } = moreDataForCheckValid;
		if (!isReadyForCheckValid) return {
			isValid: true,
			errorMessage: ""
		};
		if (!strategy) return {
			isValid: false,
			errorMessage: t("nodes.agent.checkList.strategyNotSelected", { ns: "workflow" })
		};
		for (const param of strategy.parameters) {
			if (param.required && param.type === FormTypeEnum.toolSelector) {
				const toolValue = payload.agent_parameters?.[param.name]?.value;
				if (!toolValue) return {
					isValid: false,
					errorMessage: t("errorMsg.fieldRequired", {
						ns: "workflow",
						field: renderI18nObject(param.label, language)
					})
				};
				else if (!toolValue.enabled) return {
					isValid: false,
					errorMessage: t("errorMsg.noValidTool", {
						ns: "workflow",
						field: renderI18nObject(param.label, language)
					})
				};
				else {
					const schemas = toolValue.schemas || [];
					const userSettings = toolValue.settings;
					const reasoningConfig = toolValue.parameters;
					const version = payload.version;
					const toolNodeVersion = payload.tool_node_version;
					const mergeVersion = version || toolNodeVersion;
					schemas.forEach((schema) => {
						if (schema?.required) {
							if (schema.form === "form" && !mergeVersion && !userSettings[schema.name]?.value) return {
								isValid: false,
								errorMessage: t("errorMsg.toolParameterRequired", {
									ns: "workflow",
									field: renderI18nObject(param.label, language),
									param: renderI18nObject(schema.label, language)
								})
							};
							if (schema.form === "form" && mergeVersion && !userSettings[schema.name]?.value.value) return {
								isValid: false,
								errorMessage: t("errorMsg.toolParameterRequired", {
									ns: "workflow",
									field: renderI18nObject(param.label, language),
									param: renderI18nObject(schema.label, language)
								})
							};
							if (schema.form === "llm" && !mergeVersion && reasoningConfig[schema.name].auto === 0 && !reasoningConfig[schema.name]?.value) return {
								isValid: false,
								errorMessage: t("errorMsg.toolParameterRequired", {
									ns: "workflow",
									field: renderI18nObject(param.label, language),
									param: renderI18nObject(schema.label, language)
								})
							};
							if (schema.form === "llm" && mergeVersion && reasoningConfig[schema.name].auto === 0 && !reasoningConfig[schema.name]?.value.value) return {
								isValid: false,
								errorMessage: t("errorMsg.toolParameterRequired", {
									ns: "workflow",
									field: renderI18nObject(param.label, language),
									param: renderI18nObject(schema.label, language)
								})
							};
						}
					});
				}
			}
			if (param.required && param.type === FormTypeEnum.multiToolSelector) {
				const tools = payload.agent_parameters?.[param.name]?.value || [];
				if (!tools.length) return {
					isValid: false,
					errorMessage: t("errorMsg.fieldRequired", {
						ns: "workflow",
						field: renderI18nObject(param.label, language)
					})
				};
				else if (tools.every((tool) => !tool.enabled)) return {
					isValid: false,
					errorMessage: t("errorMsg.noValidTool", {
						ns: "workflow",
						field: renderI18nObject(param.label, language)
					})
				};
				else {
					const validState = {
						isValid: true,
						errorMessage: ""
					};
					for (const tool of tools) {
						const schemas = tool.schemas || [];
						const userSettings = tool.settings;
						const reasoningConfig = tool.parameters;
						schemas.forEach((schema) => {
							if (schema?.required) {
								if (schema.form === "form" && !userSettings[schema.name]?.value) return {
									isValid: false,
									errorMessage: t("errorMsg.toolParameterRequired", {
										ns: "workflow",
										field: renderI18nObject(param.label, language),
										param: renderI18nObject(schema.label, language)
									})
								};
								if (schema.form === "llm" && reasoningConfig[schema.name]?.auto === 0 && !reasoningConfig[schema.name]?.value) return {
									isValid: false,
									errorMessage: t("errorMsg.toolParameterRequired", {
										ns: "workflow",
										field: renderI18nObject(param.label, language),
										param: renderI18nObject(schema.label, language)
									})
								};
							}
						});
					}
					return validState;
				}
			}
			if (param.required && !(payload.agent_parameters?.[param.name]?.value || param.default)) return {
				isValid: false,
				errorMessage: t("errorMsg.fieldRequired", {
					ns: "workflow",
					field: renderI18nObject(param.label, language)
				})
			};
		}
		return {
			isValid: true,
			errorMessage: ""
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/assigner/types.ts
var WriteMode = /* @__PURE__ */ function(WriteMode) {
	WriteMode["overwrite"] = "over-write";
	WriteMode["clear"] = "clear";
	WriteMode["append"] = "append";
	WriteMode["extend"] = "extend";
	WriteMode["set"] = "set";
	WriteMode["increment"] = "+=";
	WriteMode["decrement"] = "-=";
	WriteMode["multiply"] = "*=";
	WriteMode["divide"] = "/=";
	WriteMode["removeFirst"] = "remove-first";
	WriteMode["removeLast"] = "remove-last";
	return WriteMode;
}({});
var AssignerNodeInputType = /* @__PURE__ */ function(AssignerNodeInputType) {
	AssignerNodeInputType["variable"] = "variable";
	AssignerNodeInputType["constant"] = "constant";
	return AssignerNodeInputType;
}({});
var writeModeTypesNum = [
	WriteMode.increment,
	WriteMode.decrement,
	WriteMode.multiply,
	WriteMode.divide
];
//#endregion
//#region app/components/workflow/nodes/assigner/default.ts
var i18nPrefix$11 = "errorMsg";
var nodeDefault$16 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Transform,
		sort: 5,
		type: BlockEnum.Assigner,
		helpLinkUri: "variable-assigner"
	}),
	defaultValue: {
		version: "2",
		items: []
	},
	checkValid(payload, t) {
		let errorMessages = "";
		const { items: operationItems } = payload;
		operationItems?.forEach((value) => {
			if (!errorMessages && !value.variable_selector?.length) errorMessages = t(`${i18nPrefix$11}.fieldRequired`, {
				ns: "workflow",
				field: t("nodes.assigner.assignedVariable", { ns: "workflow" })
			});
			if (!errorMessages && value.operation !== WriteMode.clear && value.operation !== WriteMode.removeFirst && value.operation !== WriteMode.removeLast) {
				if (value.operation === WriteMode.set || value.operation === WriteMode.increment || value.operation === WriteMode.decrement || value.operation === WriteMode.multiply || value.operation === WriteMode.divide) {
					if (!value.value && value.value !== false && typeof value.value !== "number") errorMessages = t(`${i18nPrefix$11}.fieldRequired`, {
						ns: "workflow",
						field: t("nodes.assigner.variable", { ns: "workflow" })
					});
				} else if (!value.value?.length) errorMessages = t(`${i18nPrefix$11}.fieldRequired`, {
					ns: "workflow",
					field: t("nodes.assigner.variable", { ns: "workflow" })
				});
			}
		});
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/code/default.ts
var i18nPrefix$10 = "errorMsg";
var nodeDefault$15 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Transform,
		sort: 1,
		type: BlockEnum.Code
	}),
	defaultValue: {
		code: "",
		code_language: CodeLanguage.python3,
		variables: [],
		outputs: {}
	},
	checkValid(payload, t) {
		let errorMessages = "";
		const { code, variables } = payload;
		if (!errorMessages && variables.filter((v) => !v.variable).length > 0) errorMessages = t(`${i18nPrefix$10}.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$10}.fields.variable`, { ns: "workflow" })
		});
		if (!errorMessages && variables.filter((v) => !v.value_selector.length).length > 0) errorMessages = t(`${i18nPrefix$10}.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$10}.fields.variableValue`, { ns: "workflow" })
		});
		if (!errorMessages && !code) errorMessages = t(`${i18nPrefix$10}.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$10}.fields.code`, { ns: "workflow" })
		});
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/document-extractor/default.ts
var i18nPrefix$9 = "errorMsg";
var nodeDefault$14 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Transform,
		sort: 4,
		type: BlockEnum.DocExtractor,
		helpLinkUri: "doc-extractor"
	}),
	defaultValue: {
		variable_selector: [],
		is_array_file: false
	},
	checkValid(payload, t) {
		let errorMessages = "";
		const { variable_selector: variable } = payload;
		if (!errorMessages && !variable?.length) errorMessages = t(`${i18nPrefix$9}.fieldRequired`, {
			ns: "workflow",
			field: t("nodes.assigner.assignedVariable", { ns: "workflow" })
		});
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/http/types.ts
var Method = /* @__PURE__ */ function(Method) {
	Method["get"] = "get";
	Method["post"] = "post";
	Method["head"] = "head";
	Method["patch"] = "patch";
	Method["put"] = "put";
	Method["delete"] = "delete";
	return Method;
}({});
var BodyType = /* @__PURE__ */ function(BodyType) {
	BodyType["none"] = "none";
	BodyType["formData"] = "form-data";
	BodyType["xWwwFormUrlencoded"] = "x-www-form-urlencoded";
	BodyType["rawText"] = "raw-text";
	BodyType["json"] = "json";
	BodyType["binary"] = "binary";
	return BodyType;
}({});
var BodyPayloadValueType = /* @__PURE__ */ function(BodyPayloadValueType) {
	BodyPayloadValueType["text"] = "text";
	BodyPayloadValueType["file"] = "file";
	return BodyPayloadValueType;
}({});
var AuthorizationType = /* @__PURE__ */ function(AuthorizationType) {
	AuthorizationType["none"] = "no-auth";
	AuthorizationType["apiKey"] = "api-key";
	return AuthorizationType;
}({});
var APIType = /* @__PURE__ */ function(APIType) {
	APIType["basic"] = "basic";
	APIType["bearer"] = "bearer";
	APIType["custom"] = "custom";
	return APIType;
}({});
//#endregion
//#region app/components/workflow/nodes/http/default.ts
var nodeDefault$13 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Utilities,
		sort: 1,
		type: BlockEnum.HttpRequest
	}),
	defaultValue: {
		variables: [],
		method: Method.get,
		url: "",
		authorization: {
			type: AuthorizationType.none,
			config: null
		},
		headers: "",
		params: "",
		body: {
			type: BodyType.none,
			data: []
		},
		ssl_verify: true,
		timeout: {
			max_connect_timeout: 0,
			max_read_timeout: 0,
			max_write_timeout: 0
		},
		retry_config: {
			retry_enabled: true,
			max_retries: 3,
			retry_interval: 100
		}
	},
	checkValid(payload, t) {
		let errorMessages = "";
		if (!errorMessages && !payload.url) errorMessages = t("errorMsg.fieldRequired", {
			ns: "workflow",
			field: t("nodes.http.api", { ns: "workflow" })
		});
		if (!errorMessages && payload.body.type === BodyType.binary && (!payload.body.data[0]?.file || payload.body.data[0]?.file?.length === 0)) errorMessages = t("errorMsg.fieldRequired", {
			ns: "workflow",
			field: t("nodes.http.binaryFileVariable", { ns: "workflow" })
		});
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/if-else/default.ts
var i18nPrefix$8 = "errorMsg";
var nodeDefault$12 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Logic,
		sort: 1,
		type: BlockEnum.IfElse,
		helpLinkUri: "ifelse"
	}),
	defaultValue: {
		_targetBranches: [{
			id: "true",
			name: "IF"
		}, {
			id: "false",
			name: "ELSE"
		}],
		cases: [{
			case_id: "true",
			logical_operator: LogicalOperator$1.and,
			conditions: []
		}]
	},
	checkValid(payload, t) {
		let errorMessages = "";
		const { cases } = payload;
		if (!cases || cases.length === 0) errorMessages = t(`${i18nPrefix$8}.fieldRequired`, {
			ns: "workflow",
			field: "IF"
		});
		cases.forEach((caseItem, index) => {
			if (!caseItem.conditions.length) errorMessages = t(`${i18nPrefix$8}.fieldRequired`, {
				ns: "workflow",
				field: index === 0 ? "IF" : "ELIF"
			});
			caseItem.conditions.forEach((condition) => {
				if (!errorMessages && (!condition.variable_selector || condition.variable_selector.length === 0)) errorMessages = t(`${i18nPrefix$8}.fieldRequired`, {
					ns: "workflow",
					field: t(`${i18nPrefix$8}.fields.variable`, { ns: "workflow" })
				});
				if (!errorMessages && !condition.comparison_operator) errorMessages = t(`${i18nPrefix$8}.fieldRequired`, {
					ns: "workflow",
					field: t("nodes.ifElse.operator", { ns: "workflow" })
				});
				if (!errorMessages) {
					if (condition.sub_variable_condition) {
						if (!condition.sub_variable_condition.conditions.every((c) => {
							if (!c.comparison_operator) return false;
							if (isEmptyRelatedOperator$1(c.comparison_operator)) return true;
							return c.varType === VarType.boolean || c.varType === VarType.arrayBoolean ? c.value === void 0 : !!c.value;
						})) errorMessages = t(`${i18nPrefix$8}.fieldRequired`, {
							ns: "workflow",
							field: t(`${i18nPrefix$8}.fields.variableValue`, { ns: "workflow" })
						});
					} else if (!isEmptyRelatedOperator$1(condition.comparison_operator) && (condition.varType === VarType.boolean || condition.varType === VarType.arrayBoolean ? condition.value === void 0 : !condition.value)) errorMessages = t(`${i18nPrefix$8}.fieldRequired`, {
						ns: "workflow",
						field: t(`${i18nPrefix$8}.fields.variableValue`, { ns: "workflow" })
					});
				}
			});
		});
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/iteration-start/default.ts
var nodeDefault$11 = {
	metaData: genNodeMetaData({
		sort: -1,
		type: BlockEnum.IterationStart
	}),
	defaultValue: {},
	checkValid() {
		return { isValid: true };
	}
};
//#endregion
//#region app/components/workflow/nodes/iteration/default.ts
var i18nPrefix$7 = "";
var nodeDefault$10 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Logic,
		sort: 2,
		type: BlockEnum.Iteration,
		isTypeFixed: true
	}),
	defaultValue: {
		start_node_id: "",
		iterator_selector: [],
		output_selector: [],
		_children: [],
		_isShowTips: false,
		is_parallel: false,
		parallel_nums: 10,
		error_handle_mode: ErrorHandleMode.Terminated,
		flatten_output: true
	},
	checkValid(payload, t) {
		let errorMessages = "";
		if (!errorMessages && (!payload.iterator_selector || payload.iterator_selector.length === 0)) errorMessages = t(`${i18nPrefix$7}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$7}nodes.iteration.input`, { ns: "workflow" })
		});
		if (!errorMessages && (!payload.output_selector || payload.output_selector.length === 0)) errorMessages = t(`${i18nPrefix$7}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$7}nodes.iteration.output`, { ns: "workflow" })
		});
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/knowledge-retrieval/default.ts
var i18nPrefix$6 = "";
var nodeDefault$9 = {
	metaData: genNodeMetaData({
		sort: 2,
		type: BlockEnum.KnowledgeRetrieval
	}),
	defaultValue: {
		query_variable_selector: [],
		query_attachment_selector: [],
		dataset_ids: [],
		retrieval_mode: RETRIEVE_TYPE.multiWay,
		multiple_retrieval_config: {
			top_k: DATASET_DEFAULT.top_k,
			score_threshold: void 0,
			reranking_enable: false
		}
	},
	checkValid(payload, t) {
		let errorMessages = "";
		if (!errorMessages && (!payload.dataset_ids || payload.dataset_ids.length === 0)) errorMessages = t(`${i18nPrefix$6}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$6}nodes.knowledgeRetrieval.knowledge`, { ns: "workflow" })
		});
		if (!errorMessages && payload.retrieval_mode === RETRIEVE_TYPE.oneWay && !payload.single_retrieval_config?.model?.provider) errorMessages = t(`${i18nPrefix$6}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t("modelProvider.systemReasoningModel.key", { ns: "common" })
		});
		const { _datasets, multiple_retrieval_config, retrieval_mode } = payload;
		if (retrieval_mode === RETRIEVE_TYPE.multiWay) {
			const checked = checkoutRerankModelConfiguredInRetrievalSettings(_datasets || [], multiple_retrieval_config);
			if (!errorMessages && !checked) errorMessages = t(`${i18nPrefix$6}errorMsg.fieldRequired`, {
				ns: "workflow",
				field: t(`${i18nPrefix$6}errorMsg.fields.rerankModel`, { ns: "workflow" })
			});
		}
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/list-operator/types.ts
var OrderBy = /* @__PURE__ */ function(OrderBy) {
	OrderBy["ASC"] = "asc";
	OrderBy["DESC"] = "desc";
	return OrderBy;
}({});
//#endregion
//#region app/components/workflow/nodes/list-operator/default.ts
var i18nPrefix$5 = "errorMsg";
var nodeDefault$8 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Utilities,
		sort: 2,
		type: BlockEnum.ListFilter
	}),
	defaultValue: {
		variable: [],
		filter_by: {
			enabled: false,
			conditions: []
		},
		extract_by: {
			enabled: false,
			serial: "1"
		},
		order_by: {
			enabled: false,
			key: "",
			value: OrderBy.ASC
		},
		limit: {
			enabled: false,
			size: 10
		}
	},
	checkValid(payload, t) {
		let errorMessages = "";
		const { variable, var_type, filter_by, item_var_type } = payload;
		if (!errorMessages && !variable?.length) errorMessages = t(`${i18nPrefix$5}.fieldRequired`, {
			ns: "workflow",
			field: t("nodes.listFilter.inputVar", { ns: "workflow" })
		});
		if (!errorMessages && filter_by?.enabled) {
			if (var_type === VarType.arrayFile && !filter_by.conditions[0]?.key) errorMessages = t(`${i18nPrefix$5}.fieldRequired`, {
				ns: "workflow",
				field: t("nodes.listFilter.filterConditionKey", { ns: "workflow" })
			});
			if (!errorMessages && !filter_by.conditions[0]?.comparison_operator) errorMessages = t(`${i18nPrefix$5}.fieldRequired`, {
				ns: "workflow",
				field: t("nodes.listFilter.filterConditionComparisonOperator", { ns: "workflow" })
			});
			if (!errorMessages && !comparisonOperatorNotRequireValue$1(filter_by.conditions[0]?.comparison_operator) && (item_var_type === VarType.boolean ? filter_by.conditions[0]?.value === void 0 : !filter_by.conditions[0]?.value)) errorMessages = t(`${i18nPrefix$5}.fieldRequired`, {
				ns: "workflow",
				field: t("nodes.listFilter.filterConditionComparisonValue", { ns: "workflow" })
			});
		}
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/llm/default.ts
var RETRIEVAL_OUTPUT_STRUCT = `{
  "content": "",
  "title": "",
  "url": "",
  "icon": "",
  "metadata": {
    "dataset_id": "",
    "dataset_name": "",
    "document_id": [],
    "document_name": "",
    "document_data_source_type": "",
    "segment_id": "",
    "segment_position": "",
    "segment_word_count": "",
    "segment_hit_count": "",
    "segment_index_node_hash": "",
    "score": ""
  }
}`;
var i18nPrefix$4 = "errorMsg";
var nodeDefault$7 = {
	metaData: genNodeMetaData({
		sort: 1,
		type: BlockEnum.LLM
	}),
	defaultValue: {
		model: {
			provider: "",
			name: "",
			mode: AppModeEnum.CHAT,
			completion_params: { temperature: .7 }
		},
		prompt_template: [{
			role: PromptRole.system,
			text: ""
		}],
		context: {
			enabled: false,
			variable_selector: []
		},
		vision: { enabled: false }
	},
	defaultRunInputData: {
		"#context#": [RETRIEVAL_OUTPUT_STRUCT],
		"#files#": []
	},
	checkValid(payload, t) {
		let errorMessages = "";
		const modelIssue = getLLMModelIssue({ modelProvider: payload.model.provider });
		if (!errorMessages && modelIssue === LLMModelIssueCode.providerRequired) errorMessages = t(`${i18nPrefix$4}.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$4}.fields.model`, { ns: "workflow" })
		});
		if (!errorMessages && !payload.memory) {
			if (payload.model.mode === AppModeEnum.CHAT ? !payload.prompt_template.some((t) => {
				if (t.edition_type === EditionType.jinja2) return t.jinja2_text !== "";
				return t.text !== "";
			}) : payload.prompt_template.edition_type === EditionType.jinja2 ? payload.prompt_template.jinja2_text === "" : payload.prompt_template.text === "") errorMessages = t(`${i18nPrefix$4}.fieldRequired`, {
				ns: "workflow",
				field: t("nodes.llm.prompt", { ns: "workflow" })
			});
		}
		if (!errorMessages && !!payload.memory) {
			if (payload.model.mode === AppModeEnum.CHAT && !!payload.memory.query_prompt_template && !payload.memory.query_prompt_template.includes("{{#sys.query#}}")) errorMessages = t("nodes.llm.sysQueryInUser", { ns: "workflow" });
		}
		if (!errorMessages) {
			const isChatModel = payload.model.mode === AppModeEnum.CHAT;
			if ((() => {
				if (isChatModel) return payload.prompt_template.some((item) => item.edition_type === EditionType.jinja2);
				return payload.prompt_template.edition_type === EditionType.jinja2;
			})() && payload.prompt_config?.jinja2_variables) payload.prompt_config?.jinja2_variables.forEach((i) => {
				if (!errorMessages && !i.variable) errorMessages = t(`${i18nPrefix$4}.fieldRequired`, {
					ns: "workflow",
					field: t(`${i18nPrefix$4}.fields.variable`, { ns: "workflow" })
				});
				if (!errorMessages && !i.value_selector.length) errorMessages = t(`${i18nPrefix$4}.fieldRequired`, {
					ns: "workflow",
					field: t(`${i18nPrefix$4}.fields.variableValue`, { ns: "workflow" })
				});
			});
		}
		if (!errorMessages && payload.vision?.enabled && !payload.vision.configs?.variable_selector?.length) errorMessages = t(`${i18nPrefix$4}.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$4}.fields.visionVariable`, { ns: "workflow" })
		});
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/loop-end/default.ts
var nodeDefault$6 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Logic,
		sort: 2,
		type: BlockEnum.LoopEnd,
		isSingleton: true
	}),
	defaultValue: {},
	checkValid() {
		return { isValid: true };
	}
};
//#endregion
//#region app/components/workflow/nodes/loop-start/default.ts
var nodeDefault$5 = {
	metaData: genNodeMetaData({
		sort: -1,
		type: BlockEnum.LoopStart
	}),
	defaultValue: {},
	checkValid() {
		return { isValid: true };
	}
};
//#endregion
//#region app/components/workflow/nodes/loop/types.ts
var LogicalOperator = /* @__PURE__ */ function(LogicalOperator) {
	LogicalOperator["and"] = "and";
	LogicalOperator["or"] = "or";
	return LogicalOperator;
}({});
var ComparisonOperator = /* @__PURE__ */ function(ComparisonOperator) {
	ComparisonOperator["contains"] = "contains";
	ComparisonOperator["notContains"] = "not contains";
	ComparisonOperator["startWith"] = "start with";
	ComparisonOperator["endWith"] = "end with";
	ComparisonOperator["is"] = "is";
	ComparisonOperator["isNot"] = "is not";
	ComparisonOperator["empty"] = "empty";
	ComparisonOperator["notEmpty"] = "not empty";
	ComparisonOperator["equal"] = "=";
	ComparisonOperator["notEqual"] = "≠";
	ComparisonOperator["largerThan"] = ">";
	ComparisonOperator["lessThan"] = "<";
	ComparisonOperator["largerThanOrEqual"] = "≥";
	ComparisonOperator["lessThanOrEqual"] = "≤";
	ComparisonOperator["isNull"] = "is null";
	ComparisonOperator["isNotNull"] = "is not null";
	ComparisonOperator["in"] = "in";
	ComparisonOperator["notIn"] = "not in";
	ComparisonOperator["allOf"] = "all of";
	ComparisonOperator["exists"] = "exists";
	ComparisonOperator["notExists"] = "not exists";
	return ComparisonOperator;
}({});
//#endregion
//#region app/components/workflow/nodes/loop/utils.ts
var isEmptyRelatedOperator = (operator) => {
	return [
		ComparisonOperator.empty,
		ComparisonOperator.notEmpty,
		ComparisonOperator.isNull,
		ComparisonOperator.isNotNull,
		ComparisonOperator.exists,
		ComparisonOperator.notExists
	].includes(operator);
};
var notTranslateKey = [
	ComparisonOperator.equal,
	ComparisonOperator.notEqual,
	ComparisonOperator.largerThan,
	ComparisonOperator.largerThanOrEqual,
	ComparisonOperator.lessThan,
	ComparisonOperator.lessThanOrEqual
];
function isComparisonOperatorNeedTranslate(operator) {
	if (!operator) return false;
	return !notTranslateKey.includes(operator);
}
var getOperators = (type, file) => {
	if (!!file) {
		const { key } = file;
		switch (key) {
			case "name": return [
				ComparisonOperator.contains,
				ComparisonOperator.notContains,
				ComparisonOperator.startWith,
				ComparisonOperator.endWith,
				ComparisonOperator.is,
				ComparisonOperator.isNot,
				ComparisonOperator.empty,
				ComparisonOperator.notEmpty
			];
			case "type": return [ComparisonOperator.in, ComparisonOperator.notIn];
			case "size": return [
				ComparisonOperator.largerThan,
				ComparisonOperator.largerThanOrEqual,
				ComparisonOperator.lessThan,
				ComparisonOperator.lessThanOrEqual
			];
			case "extension": return [
				ComparisonOperator.is,
				ComparisonOperator.isNot,
				ComparisonOperator.contains,
				ComparisonOperator.notContains
			];
			case "mime_type": return [
				ComparisonOperator.contains,
				ComparisonOperator.notContains,
				ComparisonOperator.startWith,
				ComparisonOperator.endWith,
				ComparisonOperator.is,
				ComparisonOperator.isNot,
				ComparisonOperator.empty,
				ComparisonOperator.notEmpty
			];
			case "transfer_method": return [ComparisonOperator.in, ComparisonOperator.notIn];
			case "url": return [
				ComparisonOperator.contains,
				ComparisonOperator.notContains,
				ComparisonOperator.startWith,
				ComparisonOperator.endWith,
				ComparisonOperator.is,
				ComparisonOperator.isNot,
				ComparisonOperator.empty,
				ComparisonOperator.notEmpty
			];
		}
		return [];
	}
	switch (type) {
		case VarType.string: return [
			ComparisonOperator.contains,
			ComparisonOperator.notContains,
			ComparisonOperator.startWith,
			ComparisonOperator.endWith,
			ComparisonOperator.is,
			ComparisonOperator.isNot,
			ComparisonOperator.empty,
			ComparisonOperator.notEmpty
		];
		case VarType.number: return [
			ComparisonOperator.equal,
			ComparisonOperator.notEqual,
			ComparisonOperator.largerThan,
			ComparisonOperator.lessThan,
			ComparisonOperator.largerThanOrEqual,
			ComparisonOperator.lessThanOrEqual,
			ComparisonOperator.empty,
			ComparisonOperator.notEmpty
		];
		case VarType.boolean: return [
			ComparisonOperator.is,
			ComparisonOperator.isNot,
			ComparisonOperator.empty,
			ComparisonOperator.notEmpty
		];
		case VarType.object: return [ComparisonOperator.empty, ComparisonOperator.notEmpty];
		case VarType.file: return [ComparisonOperator.exists, ComparisonOperator.notExists];
		case VarType.arrayString:
		case VarType.arrayNumber: return [
			ComparisonOperator.contains,
			ComparisonOperator.notContains,
			ComparisonOperator.empty,
			ComparisonOperator.notEmpty
		];
		case VarType.array:
		case VarType.arrayObject: return [ComparisonOperator.empty, ComparisonOperator.notEmpty];
		case VarType.arrayFile: return [
			ComparisonOperator.contains,
			ComparisonOperator.notContains,
			ComparisonOperator.allOf,
			ComparisonOperator.empty,
			ComparisonOperator.notEmpty
		];
		default: return [
			ComparisonOperator.is,
			ComparisonOperator.isNot,
			ComparisonOperator.empty,
			ComparisonOperator.notEmpty
		];
	}
};
var comparisonOperatorNotRequireValue = (operator) => {
	if (!operator) return false;
	return [
		ComparisonOperator.empty,
		ComparisonOperator.notEmpty,
		ComparisonOperator.isNull,
		ComparisonOperator.isNotNull,
		ComparisonOperator.exists,
		ComparisonOperator.notExists
	].includes(operator);
};
//#endregion
//#region app/components/workflow/nodes/loop/default.ts
var i18nPrefix$3 = "errorMsg";
var nodeDefault$4 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Logic,
		sort: 3,
		type: BlockEnum.Loop,
		author: "AICT-Team",
		isTypeFixed: true
	}),
	defaultValue: {
		start_node_id: "",
		break_conditions: [],
		loop_count: 10,
		_children: [],
		logical_operator: LogicalOperator.and
	},
	checkValid(payload, t) {
		let errorMessages = "";
		payload.loop_variables?.forEach((variable) => {
			if (!variable.label) errorMessages = t(`${i18nPrefix$3}.fieldRequired`, {
				ns: "workflow",
				field: t(`${i18nPrefix$3}.fields.variable`, { ns: "workflow" })
			});
		});
		payload.break_conditions.forEach((condition) => {
			if (!errorMessages && (!condition.variable_selector || condition.variable_selector.length === 0)) errorMessages = t(`${i18nPrefix$3}.fieldRequired`, {
				ns: "workflow",
				field: t(`${i18nPrefix$3}.fields.variable`, { ns: "workflow" })
			});
			if (!errorMessages && !condition.comparison_operator) errorMessages = t(`${i18nPrefix$3}.fieldRequired`, {
				ns: "workflow",
				field: t("nodes.ifElse.operator", { ns: "workflow" })
			});
			if (!errorMessages) {
				if (condition.sub_variable_condition && ![ComparisonOperator.empty, ComparisonOperator.notEmpty].includes(condition.comparison_operator)) {
					if (!condition.sub_variable_condition.conditions.every((c) => {
						if (!c.comparison_operator) return false;
						if (isEmptyRelatedOperator(c.comparison_operator)) return true;
						return !!c.value;
					})) errorMessages = t(`${i18nPrefix$3}.fieldRequired`, {
						ns: "workflow",
						field: t(`${i18nPrefix$3}.fields.variableValue`, { ns: "workflow" })
					});
				} else if (!isEmptyRelatedOperator(condition.comparison_operator) && (condition.varType === VarType.boolean ? condition.value === void 0 : !condition.value)) errorMessages = t(`${i18nPrefix$3}.fieldRequired`, {
					ns: "workflow",
					field: t(`${i18nPrefix$3}.fields.variableValue`, { ns: "workflow" })
				});
			}
		});
		if (!errorMessages && (Number.isNaN(Number(payload.loop_count)) || !Number.isInteger(Number(payload.loop_count)) || payload.loop_count < 1 || payload.loop_count > LOOP_NODE_MAX_COUNT)) errorMessages = t("nodes.loop.loopMaxCountError", {
			ns: "workflow",
			maxCount: LOOP_NODE_MAX_COUNT
		});
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
var FILE_TYPE_OPTIONS = [
	{
		value: "image",
		i18nKey: "image"
	},
	{
		value: "document",
		i18nKey: "doc"
	},
	{
		value: "audio",
		i18nKey: "audio"
	},
	{
		value: "video",
		i18nKey: "video"
	}
];
var TRANSFER_METHOD = [{
	value: TransferMethod.local_file,
	i18nKey: "localUpload"
}, {
	value: TransferMethod.remote_url,
	i18nKey: "url"
}];
var SUB_VARIABLES = [
	"type",
	"size",
	"name",
	"url",
	"extension",
	"mime_type",
	"transfer_method",
	"related_id"
];
SUB_VARIABLES.filter((key) => key !== "transfer_method");
//#endregion
//#region app/components/workflow/nodes/parameter-extractor/types.ts
var ParamType = /* @__PURE__ */ function(ParamType) {
	ParamType["string"] = "string";
	ParamType["number"] = "number";
	ParamType["bool"] = "boolean";
	ParamType["select"] = "select";
	ParamType["arrayString"] = "array[string]";
	ParamType["arrayNumber"] = "array[number]";
	ParamType["arrayObject"] = "array[object]";
	ParamType["arrayBool"] = "array[boolean]";
	return ParamType;
}({});
var ReasoningModeType = /* @__PURE__ */ function(ReasoningModeType) {
	ReasoningModeType["prompt"] = "prompt";
	ReasoningModeType["functionCall"] = "function_call";
	return ReasoningModeType;
}({});
//#endregion
//#region app/components/workflow/nodes/parameter-extractor/default.ts
var i18nPrefix$2 = "";
var nodeDefault$3 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Transform,
		sort: 6,
		type: BlockEnum.ParameterExtractor
	}),
	defaultValue: {
		query: [],
		model: {
			provider: "",
			name: "",
			mode: AppModeEnum.CHAT,
			completion_params: { temperature: .7 }
		},
		reasoning_mode: ReasoningModeType.prompt,
		vision: { enabled: false }
	},
	checkValid(payload, t) {
		let errorMessages = "";
		if (!errorMessages && (!payload.query || payload.query.length === 0)) errorMessages = t(`${i18nPrefix$2}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$2}nodes.parameterExtractor.inputVar`, { ns: "workflow" })
		});
		if (!errorMessages && !payload.model.provider) errorMessages = t(`${i18nPrefix$2}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$2}nodes.parameterExtractor.model`, { ns: "workflow" })
		});
		if (!errorMessages && (!payload.parameters || payload.parameters.length === 0)) errorMessages = t(`${i18nPrefix$2}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$2}nodes.parameterExtractor.extractParameters`, { ns: "workflow" })
		});
		if (!errorMessages) payload.parameters.forEach((param) => {
			if (errorMessages) return;
			if (!param.name) {
				errorMessages = t(`${i18nPrefix$2}errorMsg.fieldRequired`, {
					ns: "workflow",
					field: t(`${i18nPrefix$2}nodes.parameterExtractor.addExtractParameterContent.namePlaceholder`, { ns: "workflow" })
				});
				return;
			}
			if (!param.type) {
				errorMessages = t(`${i18nPrefix$2}errorMsg.fieldRequired`, {
					ns: "workflow",
					field: t(`${i18nPrefix$2}nodes.parameterExtractor.addExtractParameterContent.typePlaceholder`, { ns: "workflow" })
				});
				return;
			}
			if (!param.description) errorMessages = t(`${i18nPrefix$2}errorMsg.fieldRequired`, {
				ns: "workflow",
				field: t(`${i18nPrefix$2}nodes.parameterExtractor.addExtractParameterContent.descriptionPlaceholder`, { ns: "workflow" })
			});
		});
		if (!errorMessages && payload.vision?.enabled && !payload.vision.configs?.variable_selector?.length) errorMessages = t(`${i18nPrefix$2}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$2}errorMsg.fields.visionVariable`, { ns: "workflow" })
		});
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/question-classifier/default.ts
var i18nPrefix$1 = "";
var nodeDefault$2 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.QuestionUnderstand,
		sort: 1,
		type: BlockEnum.QuestionClassifier
	}),
	defaultValue: {
		query_variable_selector: [],
		model: {
			provider: "",
			name: "",
			mode: AppModeEnum.CHAT,
			completion_params: { temperature: .7 }
		},
		classes: [{
			id: "1",
			name: ""
		}, {
			id: "2",
			name: ""
		}],
		_targetBranches: [{
			id: "1",
			name: ""
		}, {
			id: "2",
			name: ""
		}],
		vision: { enabled: false }
	},
	checkValid(payload, t) {
		let errorMessages = "";
		if (!errorMessages && (!payload.query_variable_selector || payload.query_variable_selector.length === 0)) errorMessages = t(`${i18nPrefix$1}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$1}nodes.questionClassifiers.inputVars`, { ns: "workflow" })
		});
		if (!errorMessages && !payload.model.provider) errorMessages = t(`${i18nPrefix$1}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$1}nodes.questionClassifiers.model`, { ns: "workflow" })
		});
		if (!errorMessages && (!payload.classes || payload.classes.length === 0)) errorMessages = t(`${i18nPrefix$1}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$1}nodes.questionClassifiers.class`, { ns: "workflow" })
		});
		if (!errorMessages && payload.classes.some((item) => !item.name)) errorMessages = t(`${i18nPrefix$1}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$1}nodes.questionClassifiers.topicName`, { ns: "workflow" })
		});
		if (!errorMessages && payload.vision?.enabled && !payload.vision.configs?.variable_selector?.length) errorMessages = t(`${i18nPrefix$1}errorMsg.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix$1}errorMsg.fields.visionVariable`, { ns: "workflow" })
		});
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/template-transform/default.ts
var i18nPrefix = "errorMsg";
var nodeDefault$1 = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Transform,
		sort: 2,
		type: BlockEnum.TemplateTransform,
		helpLinkUri: "template"
	}),
	defaultValue: {
		template: "",
		variables: []
	},
	checkValid(payload, t) {
		let errorMessages = "";
		const { template, variables } = payload;
		if (!errorMessages && variables.filter((v) => !v.variable).length > 0) errorMessages = t(`${i18nPrefix}.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix}.fields.variable`, { ns: "workflow" })
		});
		if (!errorMessages && variables.filter((v) => !v.value_selector.length).length > 0) errorMessages = t(`${i18nPrefix}.fieldRequired`, {
			ns: "workflow",
			field: t(`${i18nPrefix}.fields.variableValue`, { ns: "workflow" })
		});
		if (!errorMessages && !template) errorMessages = t(`${i18nPrefix}.fieldRequired`, {
			ns: "workflow",
			field: t("nodes.templateTransform.code", { ns: "workflow" })
		});
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/nodes/variable-assigner/default.ts
var nodeDefault = {
	metaData: genNodeMetaData({
		classification: BlockClassificationEnum.Transform,
		sort: 3,
		type: BlockEnum.VariableAggregator
	}),
	defaultValue: {
		output_type: VarType.any,
		variables: []
	},
	checkValid(payload, t) {
		let errorMessages = "";
		const { variables, advanced_settings } = payload;
		const { group_enabled = false, groups = [] } = advanced_settings || {};
		const validateVariables = (variables, field) => {
			variables.forEach((variable) => {
				if (!variable || variable.length === 0) errorMessages = t("errorMsg.fieldRequired", {
					ns: "workflow",
					field: t(field, { ns: "workflow" })
				});
			});
		};
		if (group_enabled) {
			if (!groups || groups.length === 0) errorMessages = t("errorMsg.fieldRequired", {
				ns: "workflow",
				field: t("nodes.variableAssigner.title", { ns: "workflow" })
			});
			else if (!errorMessages) groups.forEach((group) => {
				validateVariables(group.variables || [], "errorMsg.fields.variableValue");
			});
		} else if (!variables || variables.length === 0) errorMessages = t("errorMsg.fieldRequired", {
			ns: "workflow",
			field: t("nodes.variableAssigner.title", { ns: "workflow" })
		});
		else if (!errorMessages) validateVariables(variables, "errorMsg.fields.variableValue");
		return {
			isValid: !errorMessages,
			errorMessage: errorMessages
		};
	}
};
//#endregion
//#region app/components/workflow/constants/node.ts
var WORKFLOW_COMMON_NODES = [
	nodeDefault$7,
	nodeDefault$9,
	nodeDefault$17,
	nodeDefault$2,
	nodeDefault$12,
	nodeDefault$10,
	nodeDefault$11,
	nodeDefault$4,
	nodeDefault$5,
	nodeDefault$6,
	nodeDefault$15,
	nodeDefault$1,
	nodeDefault,
	nodeDefault$14,
	nodeDefault$16,
	nodeDefault$3,
	nodeDefault$13,
	nodeDefault$8,
	nodeDefault$18,
	nodeDefault$19
];
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-agent-log.ts
var useWorkflowAgentLog = () => {
	const workflowStore = useWorkflowStore();
	return { handleWorkflowAgentLog: useCallback((params) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			const currentIndex = draft.tracing.findIndex((item) => item.node_id === data.node_id);
			if (currentIndex > -1) {
				const current = draft.tracing[currentIndex];
				if (current.execution_metadata) if (current.execution_metadata.agent_log) {
					const currentLogIndex = current.execution_metadata.agent_log.findIndex((log) => log.message_id === data.message_id);
					if (currentLogIndex > -1) current.execution_metadata.agent_log[currentLogIndex] = {
						...current.execution_metadata.agent_log[currentLogIndex],
						...data
					};
					else current.execution_metadata.agent_log.push(data);
				} else current.execution_metadata.agent_log = [data];
				else current.execution_metadata = { agent_log: [data] };
			}
		}));
	}, [workflowStore]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-failed.ts
var useWorkflowFailed = () => {
	const workflowStore = useWorkflowStore();
	return { handleWorkflowFailed: useCallback(() => {
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			draft.result = {
				...draft.result,
				status: WorkflowRunningStatus.Failed
			};
		}));
	}, [workflowStore]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-finished.ts
var useWorkflowFinished = () => {
	const workflowStore = useWorkflowStore();
	return { handleWorkflowFinished: useCallback((params) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		const isStringOutput = data.outputs && Object.keys(data.outputs).length === 1 && typeof data.outputs[Object.keys(data.outputs)[0]] === "string";
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			draft.result = {
				...draft.result,
				...data,
				files: getFilesInLogs(data.outputs)
			};
			if (isStringOutput) {
				draft.resultTabActive = true;
				draft.resultText = data.outputs[Object.keys(data.outputs)[0]];
			}
		}));
	}, [workflowStore]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-finished.ts
var useWorkflowNodeFinished = () => {
	const store = useStoreApi();
	const workflowStore = useWorkflowStore();
	return { handleWorkflowNodeFinished: useCallback((params) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		const { getNodes, setNodes, edges, setEdges } = store.getState();
		const nodes = getNodes();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			const currentIndex = draft.tracing.findIndex((item) => item.id === data.id);
			if (currentIndex > -1) draft.tracing[currentIndex] = {
				...draft.tracing[currentIndex],
				...data
			};
		}));
		setNodes(produce(nodes, (draft) => {
			const currentNode = draft.find((node) => node.id === data.node_id);
			currentNode.data._runningStatus = data.status;
			if (data.status === NodeRunningStatus.Exception) {
				if (data.execution_metadata?.error_strategy === ErrorHandleTypeEnum.failBranch) currentNode.data._runningBranchId = ErrorHandleTypeEnum.failBranch;
			} else {
				if (data.node_type === BlockEnum.IfElse) currentNode.data._runningBranchId = data?.outputs?.selected_case_id;
				if (data.node_type === BlockEnum.QuestionClassifier) currentNode.data._runningBranchId = data?.outputs?.class_id;
				if (data.node_type === BlockEnum.HumanInput) currentNode.data._runningBranchId = data?.outputs?.__action_id;
			}
		}));
		setEdges(produce(edges, (draft) => {
			draft.filter((edge) => {
				return edge.target === data.node_id;
			}).forEach((edge) => {
				edge.data = {
					...edge.data,
					_targetRunningStatus: data.status
				};
			});
		}));
	}, [store, workflowStore]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-human-input-form-filled.ts
var useWorkflowNodeHumanInputFormFilled = () => {
	const workflowStore = useWorkflowStore();
	return { handleWorkflowNodeHumanInputFormFilled: useCallback((params) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			if (draft.humanInputFormDataList?.length) {
				const currentFormIndex = draft.humanInputFormDataList.findIndex((item) => item.node_id === data.node_id);
				draft.humanInputFormDataList.splice(currentFormIndex, 1);
			}
			if (!draft.humanInputFilledFormDataList) draft.humanInputFilledFormDataList = [data];
			else draft.humanInputFilledFormDataList.push(data);
		}));
	}, [workflowStore]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-human-input-form-timeout.ts
var useWorkflowNodeHumanInputFormTimeout = () => {
	const workflowStore = useWorkflowStore();
	return { handleWorkflowNodeHumanInputFormTimeout: useCallback((params) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			if (draft.humanInputFormDataList?.length) {
				const currentFormIndex = draft.humanInputFormDataList.findIndex((item) => item.node_id === data.node_id);
				draft.humanInputFormDataList[currentFormIndex].expiration_time = data.expiration_time;
			}
		}));
	}, [workflowStore]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-human-input-required.ts
var useWorkflowNodeHumanInputRequired = () => {
	const store = useStoreApi();
	const workflowStore = useWorkflowStore();
	return { handleWorkflowNodeHumanInputRequired: useCallback((params) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			if (!draft.humanInputFormDataList) draft.humanInputFormDataList = [data];
			else {
				const currentFormIndex = draft.humanInputFormDataList.findIndex((item) => item.node_id === data.node_id);
				if (currentFormIndex > -1) draft.humanInputFormDataList[currentFormIndex] = data;
				else draft.humanInputFormDataList.push(data);
			}
			const currentIndex = draft.tracing.findIndex((item) => item.node_id === data.node_id);
			if (currentIndex > -1) draft.tracing[currentIndex] = {
				...draft.tracing[currentIndex],
				status: NodeRunningStatus.Paused
			};
		}));
		const { getNodes, setNodes } = store.getState();
		const nodes = getNodes();
		const currentNodeIndex = nodes.findIndex((node) => node.id === data.node_id);
		setNodes(produce(nodes, (draft) => {
			draft[currentNodeIndex].data._runningStatus = NodeRunningStatus.Paused;
		}));
	}, [store, workflowStore]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-iteration-finished.ts
var useWorkflowNodeIterationFinished = () => {
	const store = useStoreApi();
	const workflowStore = useWorkflowStore();
	return { handleWorkflowNodeIterationFinished: useCallback((params) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData, setIterTimes } = workflowStore.getState();
		const { getNodes, setNodes, edges, setEdges } = store.getState();
		const nodes = getNodes();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			const currentIndex = draft.tracing.findIndex((item) => item.id === data.id);
			if (currentIndex > -1) draft.tracing[currentIndex] = {
				...draft.tracing[currentIndex],
				...data
			};
		}));
		setIterTimes(1);
		setNodes(produce(nodes, (draft) => {
			const currentNode = draft.find((node) => node.id === data.node_id);
			currentNode.data._runningStatus = data.status;
		}));
		setEdges(produce(edges, (draft) => {
			draft.filter((edge) => {
				return edge.target === data.node_id;
			}).forEach((edge) => {
				edge.data = {
					...edge.data,
					_targetRunningStatus: data.status
				};
			});
		}));
	}, [workflowStore, store]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-iteration-next.ts
var useWorkflowNodeIterationNext = () => {
	const store = useStoreApi();
	const workflowStore = useWorkflowStore();
	return { handleWorkflowNodeIterationNext: useCallback((params) => {
		const { iterTimes, setIterTimes } = workflowStore.getState();
		const { data } = params;
		const { getNodes, setNodes } = store.getState();
		setNodes(produce(getNodes(), (draft) => {
			const currentNode = draft.find((node) => node.id === data.node_id);
			currentNode.data._iterationIndex = iterTimes;
			setIterTimes(iterTimes + 1);
		}));
	}, [workflowStore, store]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-iteration-started.ts
var useWorkflowNodeIterationStarted = () => {
	const store = useStoreApi();
	const reactflow = useReactFlow();
	const workflowStore = useWorkflowStore();
	return { handleWorkflowNodeIterationStarted: useCallback((params, containerParams) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData, setIterTimes } = workflowStore.getState();
		const { getNodes, setNodes, edges, setEdges, transform } = store.getState();
		const nodes = getNodes();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			draft.tracing.push({
				...data,
				status: NodeRunningStatus.Running
			});
		}));
		setIterTimes(1);
		const { setViewport } = reactflow;
		const currentNodeIndex = nodes.findIndex((node) => node.id === data.node_id);
		const currentNode = nodes[currentNodeIndex];
		const position = currentNode.position;
		const zoom = transform[2];
		if (!currentNode.parentId) setViewport({
			x: (containerParams.clientWidth - 400 - currentNode.width * zoom) / 2 - position.x * zoom,
			y: (containerParams.clientHeight - currentNode.height * zoom) / 2 - position.y * zoom,
			zoom: transform[2]
		});
		setNodes(produce(nodes, (draft) => {
			draft[currentNodeIndex].data._runningStatus = NodeRunningStatus.Running;
			draft[currentNodeIndex].data._iterationLength = data.metadata.iterator_length;
			draft[currentNodeIndex].data._waitingRun = false;
		}));
		setEdges(produce(edges, (draft) => {
			draft.filter((edge) => edge.target === data.node_id).forEach((edge) => {
				edge.data = {
					...edge.data,
					_sourceRunningStatus: nodes.find((node) => node.id === edge.source).data._runningStatus,
					_targetRunningStatus: NodeRunningStatus.Running,
					_waitingRun: false
				};
			});
		}));
	}, [
		workflowStore,
		store,
		reactflow
	]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-loop-finished.ts
var useWorkflowNodeLoopFinished = () => {
	const store = useStoreApi();
	const workflowStore = useWorkflowStore();
	return { handleWorkflowNodeLoopFinished: useCallback((params) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		const { getNodes, setNodes, edges, setEdges } = store.getState();
		const nodes = getNodes();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			const currentIndex = draft.tracing.findIndex((item) => item.id === data.id);
			if (currentIndex > -1) draft.tracing[currentIndex] = {
				...draft.tracing[currentIndex],
				...data
			};
		}));
		setNodes(produce(nodes, (draft) => {
			const currentNode = draft.find((node) => node.id === data.node_id);
			currentNode.data._runningStatus = data.status;
		}));
		setEdges(produce(edges, (draft) => {
			draft.filter((edge) => {
				return edge.target === data.node_id;
			}).forEach((edge) => {
				edge.data = {
					...edge.data,
					_targetRunningStatus: data.status
				};
			});
		}));
	}, [workflowStore, store]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-loop-next.ts
var useWorkflowNodeLoopNext = () => {
	const store = useStoreApi();
	return { handleWorkflowNodeLoopNext: useCallback((params) => {
		const { data } = params;
		const { getNodes, setNodes } = store.getState();
		setNodes(produce(getNodes(), (draft) => {
			const currentNode = draft.find((node) => node.id === data.node_id);
			currentNode.data._loopIndex = data.index;
			draft.forEach((node) => {
				if (node.parentId === data.node_id) {
					node.data._waitingRun = true;
					node.data._runningStatus = NodeRunningStatus.Waiting;
				}
			});
		}));
	}, [store]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-loop-started.ts
var useWorkflowNodeLoopStarted = () => {
	const store = useStoreApi();
	const reactflow = useReactFlow();
	const workflowStore = useWorkflowStore();
	return { handleWorkflowNodeLoopStarted: useCallback((params, containerParams) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		const { getNodes, setNodes, edges, setEdges, transform } = store.getState();
		const nodes = getNodes();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			draft.tracing.push({
				...data,
				status: NodeRunningStatus.Running
			});
		}));
		const { setViewport } = reactflow;
		const currentNodeIndex = nodes.findIndex((node) => node.id === data.node_id);
		const currentNode = nodes[currentNodeIndex];
		const position = currentNode.position;
		const zoom = transform[2];
		if (!currentNode.parentId) setViewport({
			x: (containerParams.clientWidth - 400 - currentNode.width * zoom) / 2 - position.x * zoom,
			y: (containerParams.clientHeight - currentNode.height * zoom) / 2 - position.y * zoom,
			zoom: transform[2]
		});
		setNodes(produce(nodes, (draft) => {
			draft[currentNodeIndex].data._runningStatus = NodeRunningStatus.Running;
			draft[currentNodeIndex].data._loopLength = data.metadata.loop_length;
			draft[currentNodeIndex].data._waitingRun = false;
		}));
		setEdges(produce(edges, (draft) => {
			draft.filter((edge) => edge.target === data.node_id).forEach((edge) => {
				edge.data = {
					...edge.data,
					_sourceRunningStatus: nodes.find((node) => node.id === edge.source).data._runningStatus,
					_targetRunningStatus: NodeRunningStatus.Running,
					_waitingRun: false
				};
			});
		}));
	}, [
		workflowStore,
		store,
		reactflow
	]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-retry.ts
var useWorkflowNodeRetry = () => {
	const store = useStoreApi();
	const workflowStore = useWorkflowStore();
	return { handleWorkflowNodeRetry: useCallback((params) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		const { getNodes, setNodes } = store.getState();
		const nodes = getNodes();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			draft.tracing.push(data);
		}));
		setNodes(produce(nodes, (draft) => {
			const currentNode = draft.find((node) => node.id === data.node_id);
			currentNode.data._retryIndex = data.retry_index;
		}));
	}, [workflowStore, store]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-node-started.ts
var useWorkflowNodeStarted = () => {
	const store = useStoreApi();
	const workflowStore = useWorkflowStore();
	const reactflow = useReactFlow();
	return { handleWorkflowNodeStarted: useCallback((params, containerParams) => {
		const { data } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		const { getNodes, setNodes, edges, setEdges, transform } = store.getState();
		const nodes = getNodes();
		const currentIndex = workflowRunningData?.tracing?.findIndex((item) => item.node_id === data.node_id);
		if (currentIndex && currentIndex > -1) setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			draft.tracing[currentIndex] = {
				...data,
				status: NodeRunningStatus.Running
			};
		}));
		else setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			draft.tracing.push({
				...data,
				status: NodeRunningStatus.Running
			});
		}));
		const { setViewport } = reactflow;
		const currentNodeIndex = nodes.findIndex((node) => node.id === data.node_id);
		const currentNode = nodes[currentNodeIndex];
		const position = currentNode.position;
		const zoom = transform[2];
		if (!currentNode.parentId) setViewport({
			x: (containerParams.clientWidth - 400 - currentNode.width * zoom) / 2 - position.x * zoom,
			y: (containerParams.clientHeight - currentNode.height * zoom) / 2 - position.y * zoom,
			zoom: transform[2]
		});
		setNodes(produce(nodes, (draft) => {
			draft[currentNodeIndex].data._runningStatus = NodeRunningStatus.Running;
			draft[currentNodeIndex].data._waitingRun = false;
		}));
		setEdges(produce(edges, (draft) => {
			draft.filter((edge) => {
				return edge.target === data.node_id;
			}).forEach((edge) => {
				const incomeNode = nodes.find((node) => node.id === edge.source);
				if (!incomeNode || !("data" in incomeNode)) return;
				if (!incomeNode.data._runningBranchId && edge.sourceHandle === "source" || incomeNode.data._runningBranchId && edge.sourceHandle === incomeNode.data._runningBranchId) edge.data = {
					...edge.data,
					_sourceRunningStatus: incomeNode.data._runningStatus,
					_targetRunningStatus: NodeRunningStatus.Running,
					_waitingRun: false
				};
			});
		}));
	}, [
		workflowStore,
		store,
		reactflow
	]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-paused.ts
var useWorkflowPaused = () => {
	const workflowStore = useWorkflowStore();
	return { handleWorkflowPaused: useCallback(() => {
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			draft.result = {
				...draft.result,
				status: WorkflowRunningStatus.Paused
			};
		}));
	}, [workflowStore]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-started.ts
var useWorkflowStarted = () => {
	const store = useStoreApi();
	const workflowStore = useWorkflowStore();
	return { handleWorkflowStarted: useCallback((params) => {
		const { task_id, data } = params;
		const { workflowRunningData, setWorkflowRunningData, setIterParallelLogMap } = workflowStore.getState();
		const { getNodes, setNodes, edges, setEdges } = store.getState();
		if (workflowRunningData?.result?.status === WorkflowRunningStatus.Paused) {
			setWorkflowRunningData(produce(workflowRunningData, (draft) => {
				draft.result = {
					...draft.result,
					status: WorkflowRunningStatus.Running
				};
			}));
			return;
		}
		setIterParallelLogMap(/* @__PURE__ */ new Map());
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			draft.task_id = task_id;
			draft.result = {
				...draft?.result,
				...data,
				status: WorkflowRunningStatus.Running
			};
			draft.resultText = "";
		}));
		setNodes(produce(getNodes(), (draft) => {
			draft.forEach((node) => {
				node.data._waitingRun = true;
				node.data._runningBranchId = void 0;
			});
		}));
		setEdges(produce(edges, (draft) => {
			draft.forEach((edge) => {
				edge.data = {
					...edge.data,
					_sourceRunningStatus: void 0,
					_targetRunningStatus: void 0,
					_waitingRun: true
				};
			});
		}));
	}, [workflowStore, store]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-text-chunk.ts
var useWorkflowTextChunk = () => {
	const workflowStore = useWorkflowStore();
	return { handleWorkflowTextChunk: useCallback((params) => {
		const { data: { text } } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			draft.resultTabActive = true;
			draft.resultText += text;
		}));
	}, [workflowStore]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-text-replace.ts
var useWorkflowTextReplace = () => {
	const workflowStore = useWorkflowStore();
	return { handleWorkflowTextReplace: useCallback((params) => {
		const { data: { text } } = params;
		const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();
		setWorkflowRunningData(produce(workflowRunningData, (draft) => {
			draft.resultText = text;
		}));
	}, [workflowStore]) };
};
//#endregion
//#region app/components/workflow/hooks/use-workflow-run-event/use-workflow-run-event.ts
var useWorkflowRunEvent = () => {
	const { handleWorkflowStarted } = useWorkflowStarted();
	const { handleWorkflowFinished } = useWorkflowFinished();
	const { handleWorkflowFailed } = useWorkflowFailed();
	const { handleWorkflowNodeStarted } = useWorkflowNodeStarted();
	const { handleWorkflowNodeFinished } = useWorkflowNodeFinished();
	const { handleWorkflowNodeIterationStarted } = useWorkflowNodeIterationStarted();
	const { handleWorkflowNodeIterationNext } = useWorkflowNodeIterationNext();
	const { handleWorkflowNodeIterationFinished } = useWorkflowNodeIterationFinished();
	const { handleWorkflowNodeLoopStarted } = useWorkflowNodeLoopStarted();
	const { handleWorkflowNodeLoopNext } = useWorkflowNodeLoopNext();
	const { handleWorkflowNodeLoopFinished } = useWorkflowNodeLoopFinished();
	const { handleWorkflowNodeRetry } = useWorkflowNodeRetry();
	const { handleWorkflowTextChunk } = useWorkflowTextChunk();
	const { handleWorkflowTextReplace } = useWorkflowTextReplace();
	const { handleWorkflowAgentLog } = useWorkflowAgentLog();
	const { handleWorkflowPaused } = useWorkflowPaused();
	const { handleWorkflowNodeHumanInputRequired } = useWorkflowNodeHumanInputRequired();
	const { handleWorkflowNodeHumanInputFormFilled } = useWorkflowNodeHumanInputFormFilled();
	const { handleWorkflowNodeHumanInputFormTimeout } = useWorkflowNodeHumanInputFormTimeout();
	return {
		handleWorkflowStarted,
		handleWorkflowFinished,
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
		handleWorkflowTextChunk,
		handleWorkflowTextReplace,
		handleWorkflowAgentLog,
		handleWorkflowPaused,
		handleWorkflowNodeHumanInputFormFilled,
		handleWorkflowNodeHumanInputRequired,
		handleWorkflowNodeHumanInputFormTimeout
	};
};
//#endregion
export { nodeDefault$15 as A, nodeDefault$13 as C, BodyType as D, BodyPayloadValueType as E, useSetWorkflowVarsWithValue as F, AssignerNodeInputType as M, WriteMode as N, Method as O, writeModeTypesNum as P, nodeDefault$12 as S, AuthorizationType as T, LogicalOperator as _, nodeDefault$2 as a, nodeDefault$9 as b, ReasoningModeType as c, TRANSFER_METHOD as d, nodeDefault$4 as f, ComparisonOperator as g, isComparisonOperatorNeedTranslate as h, nodeDefault$1 as i, nodeDefault$16 as j, nodeDefault$14 as k, FILE_TYPE_OPTIONS as l, getOperators as m, WORKFLOW_COMMON_NODES as n, nodeDefault$3 as o, comparisonOperatorNotRequireValue as p, nodeDefault as r, ParamType as s, useWorkflowRunEvent as t, SUB_VARIABLES as u, nodeDefault$7 as v, APIType as w, nodeDefault$10 as x, OrderBy as y };
