import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { r as CollectionType } from "./types-DzFjbMeE.js";
import { u as ModelTypeEnum } from "./declarations-DYMEe7hD.js";
import { rt as DatasourceType } from "./config-Dopncj5R.js";
import { t as cloneDeep } from "./cloneDeep-nndvIxet.js";
import { f as put, g as upload, i as getMarketplace, l as post, r as get, s as patch, t as del, u as postMarketplace } from "./base-BuKAg6Le.js";
import { i as useAppContext } from "./app-context-BiSzFQEV.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import { n as useQuery, p as useQueryClient, t as useMutation } from "./useMutation-CRBpDOZ8.js";
import { t as useInfiniteQuery } from "./useInfiniteQuery-CNgDC6bG.js";
import { t as useInvalid } from "./use-base-DLpNl2rR.js";
import { n as consoleQuery } from "./client-CLQTU2Oi.js";
import { n as useGlobalPublicStore } from "./global-public-context-DpzzsplY.js";
import { g as fetchModelProviderModelList } from "./common-qRxT6xi0.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import { c as useInvalidateAllTriggerPlugins } from "./use-triggers-DguQxV9N.js";
import { G as TaskStatus, H as PluginCategoryEnum, O as getFormattedPlugin, V as PermissionType, o as useModelList } from "./hooks-BTelimHS.js";
import { useCallback, useEffect, useMemo, useState } from "react";
//#region service/use-tools.ts
var NAME_SPACE$4 = "tools";
var useAllToolProvidersKey = [NAME_SPACE$4, "allToolProviders"];
var useAllToolProviders = (enabled = true) => {
	return useQuery({
		queryKey: useAllToolProvidersKey,
		queryFn: () => get("/workspaces/current/tool-providers"),
		enabled
	});
};
var useInvalidateAllToolProviders = () => {
	return useInvalid(useAllToolProvidersKey);
};
var useAllBuiltInToolsKey = [NAME_SPACE$4, "builtIn"];
var useAllBuiltInTools = (enabled = true) => {
	return useQuery({
		queryKey: useAllBuiltInToolsKey,
		queryFn: () => get("/workspaces/current/tools/builtin"),
		enabled
	});
};
var useInvalidateAllBuiltInTools = () => {
	return useInvalid(useAllBuiltInToolsKey);
};
var useAllCustomToolsKey = [NAME_SPACE$4, "customTools"];
var useAllCustomTools = (enabled = true) => {
	return useQuery({
		queryKey: useAllCustomToolsKey,
		queryFn: () => get("/workspaces/current/tools/api"),
		enabled
	});
};
var useInvalidateAllCustomTools = () => {
	return useInvalid(useAllCustomToolsKey);
};
var useAllWorkflowToolsKey = [NAME_SPACE$4, "workflowTools"];
var useAllWorkflowTools = (enabled = true) => {
	return useQuery({
		queryKey: useAllWorkflowToolsKey,
		queryFn: () => get("/workspaces/current/tools/workflow"),
		enabled
	});
};
var useInvalidateAllWorkflowTools = () => {
	return useInvalid(useAllWorkflowToolsKey);
};
var useAllMCPToolsKey = [NAME_SPACE$4, "MCPTools"];
var useAllMCPTools = (enabled = true) => {
	return useQuery({
		queryKey: useAllMCPToolsKey,
		queryFn: () => get("/workspaces/current/tools/mcp"),
		enabled
	});
};
var useInvalidateAllMCPTools = () => {
	return useInvalid(useAllMCPToolsKey);
};
var useInvalidToolsKeyMap = {
	[CollectionType.builtIn]: useAllBuiltInToolsKey,
	[CollectionType.custom]: useAllCustomToolsKey,
	[CollectionType.workflow]: useAllWorkflowToolsKey,
	[CollectionType.mcp]: useAllMCPToolsKey
};
var useInvalidToolsByType = (type) => {
	return useInvalid(type ? useInvalidToolsKeyMap[type] : void 0);
};
var useCreateMCP = () => {
	return useMutation({
		mutationKey: [NAME_SPACE$4, "create-mcp"],
		mutationFn: (payload) => {
			return post("workspaces/current/tool-provider/mcp", { body: { ...payload } });
		}
	});
};
var useUpdateMCP = ({ onSuccess }) => {
	return useMutation({
		mutationKey: [NAME_SPACE$4, "update-mcp"],
		mutationFn: (payload) => {
			return put("workspaces/current/tool-provider/mcp", { body: { ...payload } });
		},
		onSuccess
	});
};
var useDeleteMCP = ({ onSuccess }) => {
	return useMutation({
		mutationKey: [NAME_SPACE$4, "delete-mcp"],
		mutationFn: (id) => {
			return del("/workspaces/current/tool-provider/mcp", { body: { provider_id: id } });
		},
		onSuccess
	});
};
var useAuthorizeMCP = () => {
	return useMutation({
		mutationKey: [NAME_SPACE$4, "authorize-mcp"],
		mutationFn: (payload) => {
			return post("/workspaces/current/tool-provider/mcp/auth", { body: payload });
		}
	});
};
var useMCPTools = (providerID) => {
	return useQuery({
		enabled: !!providerID,
		queryKey: [
			NAME_SPACE$4,
			"get-MCP-provider-tool",
			providerID
		],
		queryFn: () => get(`/workspaces/current/tool-provider/mcp/tools/${providerID}`)
	});
};
var useInvalidateMCPTools = () => {
	const queryClient = useQueryClient();
	return (providerID) => {
		queryClient.invalidateQueries({ queryKey: [
			NAME_SPACE$4,
			"get-MCP-provider-tool",
			providerID
		] });
	};
};
var useUpdateMCPTools = () => {
	return useMutation({ mutationFn: (providerID) => get(`/workspaces/current/tool-provider/mcp/update/${providerID}`) });
};
var useMCPServerDetail = (appID) => {
	return useQuery({
		queryKey: [
			NAME_SPACE$4,
			"MCPServerDetail",
			appID
		],
		queryFn: () => get(`/apps/${appID}/server`)
	});
};
var useInvalidateMCPServerDetail = () => {
	const queryClient = useQueryClient();
	return (appID) => {
		queryClient.invalidateQueries({ queryKey: [
			NAME_SPACE$4,
			"MCPServerDetail",
			appID
		] });
	};
};
var useCreateMCPServer = () => {
	return useMutation({
		mutationKey: [NAME_SPACE$4, "create-mcp-server"],
		mutationFn: (payload) => {
			const { appID, ...rest } = payload;
			return post(`apps/${appID}/server`, { body: { ...rest } });
		}
	});
};
var useUpdateMCPServer = () => {
	return useMutation({
		mutationKey: [NAME_SPACE$4, "update-mcp-server"],
		mutationFn: (payload) => {
			const { appID, ...rest } = payload;
			return put(`apps/${appID}/server`, { body: { ...rest } });
		}
	});
};
var useRefreshMCPServerCode = () => {
	return useMutation({
		mutationKey: [NAME_SPACE$4, "refresh-mcp-server-code"],
		mutationFn: (appID) => {
			return get(`apps/${appID}/server/refresh`);
		}
	});
};
var useBuiltinTools = (providerName) => {
	return useQuery({
		enabled: !!providerName,
		queryKey: [
			NAME_SPACE$4,
			"builtin-provider-tools",
			providerName
		],
		queryFn: () => get(`/workspaces/current/tool-provider/builtin/${providerName}/tools`)
	});
};
var useRAGRecommendedPluginListKey = [NAME_SPACE$4, "rag-recommended-plugins"];
var useRAGRecommendedPlugins = (type = "all") => {
	return useQuery({
		queryKey: [...useRAGRecommendedPluginListKey, type],
		queryFn: () => get("/rag/pipelines/recommended-plugins", { params: { type } })
	});
};
var useInvalidateRAGRecommendedPlugins = () => {
	const queryClient = useQueryClient();
	return (type = "all") => {
		queryClient.invalidateQueries({ queryKey: [...useRAGRecommendedPluginListKey, type] });
	};
};
var useAppTriggers = (appId, options) => {
	return useQuery({
		queryKey: [
			NAME_SPACE$4,
			"app-triggers",
			appId
		],
		queryFn: () => get(`/apps/${appId}/triggers`),
		enabled: !!appId,
		...options
	});
};
var useInvalidateAppTriggers = () => {
	const queryClient = useQueryClient();
	return (appId) => {
		queryClient.invalidateQueries({ queryKey: [
			NAME_SPACE$4,
			"app-triggers",
			appId
		] });
	};
};
var useUpdateTriggerStatus = () => {
	return useMutation({
		mutationKey: [NAME_SPACE$4, "update-trigger-status"],
		mutationFn: (payload) => {
			const { appId, triggerId, enableTrigger } = payload;
			return post(`/apps/${appId}/trigger-enable`, { body: {
				trigger_id: triggerId,
				enable_trigger: enableTrigger
			} });
		}
	});
};
var workflowToolDetailByAppIDKey = (appId) => [
	NAME_SPACE$4,
	"workflowToolDetailByAppID",
	appId
];
var useWorkflowToolDetailByAppID = (appId, enabled = true) => {
	return useQuery({
		queryKey: workflowToolDetailByAppIDKey(appId),
		queryFn: () => get(`/workspaces/current/tool-provider/workflow/get?workflow_app_id=${appId}`),
		enabled: enabled && !!appId
	});
};
var useInvalidateWorkflowToolDetailByAppID = () => {
	const queryClient = useQueryClient();
	return (appId) => {
		queryClient.invalidateQueries({ queryKey: workflowToolDetailByAppIDKey(appId) });
	};
};
//#endregion
//#region service/use-pipeline.ts
var NAME_SPACE$3 = "pipeline";
var PipelineTemplateListQueryKeyPrefix = [NAME_SPACE$3, "template-list"];
var usePipelineTemplateList = (params, enabled = true) => {
	return useQuery({
		queryKey: [...PipelineTemplateListQueryKeyPrefix, params],
		queryFn: () => {
			return get("/rag/pipeline/templates", { params });
		},
		enabled
	});
};
var useInvalidCustomizedTemplateList = () => {
	return useInvalid([...PipelineTemplateListQueryKeyPrefix, "customized"]);
};
var usePipelineTemplateById = (params, enabled) => {
	const { template_id, type } = params;
	return useQuery({
		queryKey: [
			NAME_SPACE$3,
			"template",
			type,
			template_id
		],
		queryFn: () => {
			return get(`/rag/pipeline/templates/${template_id}`, { params: { type } });
		},
		enabled,
		staleTime: 0
	});
};
var useUpdateTemplateInfo = (mutationOptions = {}) => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "template-update"],
		mutationFn: (request) => {
			const { template_id, ...rest } = request;
			return patch(`/rag/pipeline/customized/templates/${template_id}`, { body: rest });
		},
		...mutationOptions
	});
};
var useDeleteTemplate = (mutationOptions = {}) => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "template-delete"],
		mutationFn: (templateId) => {
			return del(`/rag/pipeline/customized/templates/${templateId}`);
		},
		...mutationOptions
	});
};
var useExportTemplateDSL = (mutationOptions = {}) => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "template-dsl-export"],
		mutationFn: (templateId) => {
			return post(`/rag/pipeline/customized/templates/${templateId}`);
		},
		...mutationOptions
	});
};
var useImportPipelineDSL = (mutationOptions = {}) => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "dsl-import"],
		mutationFn: (request) => {
			return post("/rag/pipelines/imports", { body: request });
		},
		...mutationOptions
	});
};
var useImportPipelineDSLConfirm = (mutationOptions = {}) => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "dsl-import-confirm"],
		mutationFn: (importId) => {
			return post(`/rag/pipelines/imports/${importId}/confirm`);
		},
		...mutationOptions
	});
};
var useCheckPipelineDependencies = (mutationOptions = {}) => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "check-dependencies"],
		mutationFn: (pipelineId) => {
			return get(`/rag/pipelines/imports/${pipelineId}/check-dependencies`);
		},
		...mutationOptions
	});
};
var useDraftPipelineProcessingParams = (params, enabled = true) => {
	const { pipeline_id, node_id } = params;
	return useQuery({
		queryKey: [
			NAME_SPACE$3,
			"draft-pipeline-processing-params",
			pipeline_id,
			node_id
		],
		queryFn: () => {
			return get(`/rag/pipelines/${pipeline_id}/workflows/draft/processing/parameters`, { params: { node_id } });
		},
		staleTime: 0,
		enabled
	});
};
var usePublishedPipelineProcessingParams = (params) => {
	const { pipeline_id, node_id } = params;
	return useQuery({
		queryKey: [
			NAME_SPACE$3,
			"published-pipeline-processing-params",
			pipeline_id,
			node_id
		],
		queryFn: () => {
			return get(`/rag/pipelines/${pipeline_id}/workflows/published/processing/parameters`, { params: { node_id } });
		},
		staleTime: 0
	});
};
var useDataSourceList = (enabled, onSuccess) => {
	return useQuery({
		enabled,
		queryKey: [NAME_SPACE$3, "datasource"],
		staleTime: 0,
		queryFn: async () => {
			const data = await get("/rag/pipelines/datasource-plugins");
			onSuccess?.(data);
			return data;
		},
		retry: false
	});
};
var useInvalidDataSourceList = () => {
	return useInvalid([NAME_SPACE$3, "datasource"]);
};
var publishedPipelineInfoQueryKeyPrefix = [NAME_SPACE$3, "published-pipeline"];
var usePublishedPipelineInfo = (pipelineId) => {
	return useQuery({
		queryKey: [...publishedPipelineInfoQueryKeyPrefix, pipelineId],
		queryFn: () => {
			return get(`/rag/pipelines/${pipelineId}/workflows/publish`);
		},
		enabled: !!pipelineId
	});
};
var useRunPublishedPipeline = (mutationOptions = {}) => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "run-published-pipeline"],
		mutationFn: (request) => {
			const { pipeline_id: pipelineId, is_preview, ...rest } = request;
			return post(`/rag/pipelines/${pipelineId}/workflows/published/run`, { body: {
				...rest,
				is_preview,
				response_mode: "blocking"
			} });
		},
		...mutationOptions
	});
};
var useDraftPipelinePreProcessingParams = (params, enabled = true) => {
	const { pipeline_id, node_id } = params;
	return useQuery({
		queryKey: [
			NAME_SPACE$3,
			"draft-pipeline-pre-processing-params",
			pipeline_id,
			node_id
		],
		queryFn: () => {
			return get(`/rag/pipelines/${pipeline_id}/workflows/draft/pre-processing/parameters`, { params: { node_id } });
		},
		staleTime: 0,
		enabled
	});
};
var usePublishedPipelinePreProcessingParams = (params, enabled = true) => {
	const { pipeline_id, node_id } = params;
	return useQuery({
		queryKey: [
			NAME_SPACE$3,
			"published-pipeline-pre-processing-params",
			pipeline_id,
			node_id
		],
		queryFn: () => {
			return get(`/rag/pipelines/${pipeline_id}/workflows/published/pre-processing/parameters`, { params: { node_id } });
		},
		staleTime: 0,
		enabled
	});
};
var useExportPipelineDSL = () => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "export-pipeline-dsl"],
		mutationFn: ({ pipelineId, include = false }) => {
			return get(`/rag/pipelines/${pipelineId}/exports?include_secret=${include}`);
		}
	});
};
var usePublishAsCustomizedPipeline = () => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "publish-as-customized-pipeline"],
		mutationFn: ({ pipelineId, name, icon_info, description }) => {
			return post(`/rag/pipelines/${pipelineId}/customized/publish`, { body: {
				name,
				icon_info,
				description
			} });
		}
	});
};
var usePipelineExecutionLog = (params) => {
	const { dataset_id, document_id } = params;
	return useQuery({
		queryKey: [
			NAME_SPACE$3,
			"pipeline-execution-log",
			dataset_id,
			document_id
		],
		queryFn: () => {
			return get(`/datasets/${dataset_id}/documents/${document_id}/pipeline-execution-log`);
		},
		staleTime: 0
	});
};
var usePreviewOnlineDocument = () => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "preview-online-document"],
		mutationFn: (params) => {
			const { pipelineId, datasourceNodeId, workspaceID, pageID, pageType, credentialId } = params;
			return post(`/rag/pipelines/${pipelineId}/workflows/published/datasource/nodes/${datasourceNodeId}/preview`, { body: {
				datasource_type: DatasourceType.onlineDocument,
				credential_id: credentialId,
				inputs: {
					workspace_id: workspaceID,
					page_id: pageID,
					type: pageType
				}
			} });
		}
	});
};
var useConvertDatasetToPipeline = () => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "convert-dataset-to-pipeline"],
		mutationFn: (datasetId) => {
			return post(`/rag/pipelines/transform/datasets/${datasetId}`);
		}
	});
};
var useDatasourceSingleRun = (mutationOptions = {}) => {
	return useMutation({
		mutationKey: [NAME_SPACE$3, "datasource-node-single-run"],
		mutationFn: (params) => {
			const { pipeline_id: pipelineId, ...rest } = params;
			return post(`/rag/pipelines/${pipelineId}/workflows/draft/datasource/variables-inspect`, { body: rest });
		},
		...mutationOptions
	});
};
//#endregion
//#region service/strategy.ts
var fetchStrategyList = () => {
	return get("/workspaces/current/agent-providers");
};
var fetchStrategyDetail = (agentProvider) => {
	return get(`/workspaces/current/agent-provider/${agentProvider}`);
};
//#endregion
//#region service/use-strategy.ts
var NAME_SPACE$2 = "agent_strategy";
var useStrategyListKey = [NAME_SPACE$2, "strategyList"];
var useStrategyProviders = () => {
	return useQuery({
		queryKey: useStrategyListKey,
		queryFn: fetchStrategyList
	});
};
var useInvalidateStrategyProviders = () => {
	return useInvalid(useStrategyListKey);
};
var useStrategyProviderDetail = (agentProvider, options) => {
	return useQuery({
		...options,
		queryKey: [
			NAME_SPACE$2,
			"detail",
			agentProvider
		],
		queryFn: () => fetchStrategyDetail(agentProvider),
		enabled: !!agentProvider
	});
};
//#endregion
//#region service/plugins.ts
var uploadFile = async (file, isBundle) => {
	const formData = new FormData();
	formData.append(isBundle ? "bundle" : "pkg", file);
	return upload({
		xhr: new XMLHttpRequest(),
		data: formData
	}, false, `/workspaces/current/plugin/upload/${isBundle ? "bundle" : "pkg"}`);
};
var updateFromMarketPlace = async (body) => {
	return post("/workspaces/current/plugin/upgrade/marketplace", { body });
};
var updateFromGitHub = async (repoUrl, selectedVersion, selectedPackage, originalPlugin, newPlugin) => {
	return post("/workspaces/current/plugin/upgrade/github", { body: {
		repo: repoUrl,
		version: selectedVersion,
		package: selectedPackage,
		original_plugin_unique_identifier: originalPlugin,
		new_plugin_unique_identifier: newPlugin
	} });
};
var uploadGitHub = async (repoUrl, selectedVersion, selectedPackage) => {
	return post("/workspaces/current/plugin/upload/github", { body: {
		repo: repoUrl,
		version: selectedVersion,
		package: selectedPackage
	} });
};
var fetchManifestFromMarketPlace = async (uniqueIdentifier) => {
	return getMarketplace(`/plugins/identifier?unique_identifier=${uniqueIdentifier}`);
};
var fetchBundleInfoFromMarketPlace = async ({ org, name, version }) => {
	return getMarketplace(`/bundles/${org}/${name}/${version}`);
};
var fetchPluginInfoFromMarketPlace = async ({ org, name }) => {
	return getMarketplace(`/plugins/${org}/${name}`);
};
var checkTaskStatus = async (taskId) => {
	return get(`/workspaces/current/plugin/tasks/${taskId}`);
};
var uninstallPlugin = async (pluginId) => {
	return post("/workspaces/current/plugin/uninstall", { body: { plugin_installation_id: pluginId } });
};
//#endregion
//#region service/use-datasource.ts
var NAME_SPACE$1 = "data-source-auth";
var useGetDataSourceListAuth = () => {
	return useQuery({
		queryKey: [NAME_SPACE$1, "list"],
		queryFn: () => get("/auth/plugin/datasource/list"),
		retry: 0
	});
};
var useInvalidDataSourceListAuth = () => {
	return useInvalid([NAME_SPACE$1, "list"]);
};
var useGetDefaultDataSourceListAuth = () => {
	return useQuery({
		queryKey: [NAME_SPACE$1, "default-list"],
		queryFn: () => get("/auth/plugin/datasource/default-list"),
		retry: 0
	});
};
var useInvalidDefaultDataSourceListAuth = () => {
	return useInvalid([NAME_SPACE$1, "default-list"]);
};
var useGetDataSourceOAuthUrl = (provider) => {
	return useMutation({
		mutationKey: [
			NAME_SPACE$1,
			"oauth-url",
			provider
		],
		mutationFn: (credentialId) => {
			return get(`/oauth/plugin/${provider}/datasource/get-authorization-url?credential_id=${credentialId}`);
		}
	});
};
var useGetDataSourceAuth = ({ pluginId, provider }) => {
	return useQuery({
		queryKey: [
			NAME_SPACE$1,
			"specific-data-source",
			pluginId,
			provider
		],
		queryFn: () => get(`/auth/plugin/datasource/${pluginId}/${provider}`),
		retry: 0
	});
};
var useInvalidDataSourceAuth = ({ pluginId, provider }) => {
	return useInvalid([
		NAME_SPACE$1,
		"specific-data-source",
		pluginId,
		provider
	]);
};
//#endregion
//#region app/components/plugins/plugin-page/use-reference-setting.ts
var hasPermission = (permission, isAdmin) => {
	if (!permission) return false;
	if (permission === PermissionType.noOne) return false;
	if (permission === PermissionType.everyone) return true;
	return isAdmin;
};
var useReferenceSetting = () => {
	const { t } = useTranslation();
	const { isCurrentWorkspaceManager, isCurrentWorkspaceOwner } = useAppContext();
	const { data } = useReferenceSettings();
	const { permission: permissions } = data || {};
	const invalidateReferenceSettings = useInvalidateReferenceSettings();
	const { mutate: updateReferenceSetting, isPending: isUpdatePending } = useMutationReferenceSettings({ onSuccess: () => {
		invalidateReferenceSettings();
		Toast.notify({
			type: "success",
			message: t("api.actionSuccess", { ns: "common" })
		});
	} });
	const isAdmin = isCurrentWorkspaceManager || isCurrentWorkspaceOwner;
	return {
		referenceSetting: data,
		setReferenceSettings: updateReferenceSetting,
		canManagement: hasPermission(permissions?.install_permission, isAdmin),
		canDebugger: hasPermission(permissions?.debug_permission, isAdmin),
		canSetPermissions: isAdmin,
		isUpdatePending
	};
};
var useCanInstallPluginFromMarketplace = () => {
	const { enable_marketplace } = useGlobalPublicStore((s) => s.systemFeatures);
	const { canManagement } = useReferenceSetting();
	return { canInstallPluginFromMarketplace: useMemo(() => {
		return enable_marketplace && canManagement;
	}, [enable_marketplace, canManagement]) };
};
//#endregion
//#region service/use-plugins.ts
var NAME_SPACE = "plugins";
var useInstalledPluginListKey = [NAME_SPACE, "installedPluginList"];
var useCheckInstalled = ({ pluginIds, enabled }) => {
	return useQuery(consoleQuery.plugins.checkInstalled.queryOptions({
		input: { body: { plugin_ids: pluginIds } },
		enabled,
		staleTime: 0
	}));
};
var useInvalidateCheckInstalled = () => {
	const queryClient = useQueryClient();
	return () => {
		queryClient.invalidateQueries({ queryKey: consoleQuery.plugins.checkInstalled.key() });
	};
};
var useRecommendedMarketplacePluginsKey = [NAME_SPACE, "recommendedMarketplacePlugins"];
var useRecommendedMarketplacePlugins = ({ collection = "__recommended-plugins-tools", enabled = true, limit = 15 } = {}) => {
	return useQuery({
		queryKey: [
			...useRecommendedMarketplacePluginsKey,
			collection,
			limit
		],
		queryFn: async () => {
			return (await postMarketplace(`/collections/${collection}/plugins`, { body: { limit } })).data.plugins.map((plugin) => getFormattedPlugin(plugin));
		},
		enabled,
		staleTime: 60 * 1e3
	});
};
var useFeaturedToolsRecommendations = (enabled, limit = 15) => {
	const { data: plugins = [], isLoading } = useRecommendedMarketplacePlugins({
		collection: "__recommended-plugins-tools",
		enabled,
		limit
	});
	return {
		plugins,
		isLoading
	};
};
var useFeaturedTriggersRecommendations = (enabled, limit = 15) => {
	const { data: plugins = [], isLoading } = useRecommendedMarketplacePlugins({
		collection: "__recommended-plugins-triggers",
		enabled,
		limit
	});
	return {
		plugins,
		isLoading
	};
};
var useInstalledPluginList = (disable, pageSize = 100) => {
	const fetchPlugins = async ({ pageParam = 1 }) => {
		return await get(`/workspaces/current/plugin/list?page=${pageParam}&page_size=${pageSize}`);
	};
	const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isSuccess } = useInfiniteQuery({
		enabled: !disable,
		queryKey: useInstalledPluginListKey,
		queryFn: fetchPlugins,
		getNextPageParam: (lastPage, pages) => {
			const totalItems = lastPage.total;
			const currentPage = pages.length;
			if (currentPage * pageSize >= totalItems) return;
			return currentPage + 1;
		},
		initialPageParam: 1
	});
	const plugins = data?.pages.flatMap((page) => page.plugins) ?? [];
	const total = data?.pages[0].total ?? 0;
	return {
		data: disable ? void 0 : {
			plugins,
			total
		},
		isLastPage: !hasNextPage,
		loadNextPage: () => {
			fetchNextPage();
		},
		isLoading,
		isFetching: isFetchingNextPage,
		error,
		isSuccess
	};
};
var useInvalidateInstalledPluginList = () => {
	const queryClient = useQueryClient();
	const invalidateAllBuiltInTools = useInvalidateAllBuiltInTools();
	return () => {
		queryClient.invalidateQueries({ queryKey: useInstalledPluginListKey });
		invalidateAllBuiltInTools();
	};
};
var useInstallPackageFromMarketPlace = (options) => {
	return useMutation({
		...options,
		mutationFn: (uniqueIdentifier) => {
			return post("/workspaces/current/plugin/install/marketplace", { body: { plugin_unique_identifiers: [uniqueIdentifier] } });
		}
	});
};
var useUpdatePackageFromMarketPlace = (options) => {
	return useMutation({
		...options,
		mutationFn: (body) => {
			return post("/workspaces/current/plugin/upgrade/marketplace", { body });
		}
	});
};
var usePluginDeclarationFromMarketPlace = (pluginUniqueIdentifier) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"pluginDeclaration",
			pluginUniqueIdentifier
		],
		queryFn: () => get("/workspaces/current/plugin/marketplace/pkg", { params: { plugin_unique_identifier: pluginUniqueIdentifier } }),
		enabled: !!pluginUniqueIdentifier
	});
};
var useVersionListOfPlugin = (pluginID) => {
	return useQuery({
		enabled: !!pluginID,
		queryKey: [
			NAME_SPACE,
			"versions",
			pluginID
		],
		queryFn: () => getMarketplace(`/plugins/${pluginID}/versions`, { params: {
			page: 1,
			page_size: 100
		} })
	});
};
var useInstallPackageFromLocal = () => {
	return useMutation({ mutationFn: (uniqueIdentifier) => {
		return post("/workspaces/current/plugin/install/pkg", { body: { plugin_unique_identifiers: [uniqueIdentifier] } });
	} });
};
var useInstallPackageFromGitHub = () => {
	return useMutation({ mutationFn: ({ repoUrl, selectedVersion, selectedPackage, uniqueIdentifier }) => {
		return post("/workspaces/current/plugin/install/github", { body: {
			repo: repoUrl,
			version: selectedVersion,
			package: selectedPackage,
			plugin_unique_identifier: uniqueIdentifier
		} });
	} });
};
var useUploadGitHub = (payload) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"uploadGitHub",
			payload
		],
		queryFn: () => post("/workspaces/current/plugin/upload/github", { body: payload }),
		retry: 0
	});
};
var useInstallOrUpdate = ({ onSuccess }) => {
	const { mutateAsync: updatePackageFromMarketPlace } = useUpdatePackageFromMarketPlace();
	return useMutation({
		mutationFn: (data) => {
			const { payload, plugin, installedInfo } = data;
			return Promise.all(payload.map(async (item, i) => {
				try {
					const installedPayload = installedInfo[`${plugin[i]?.org || plugin[i]?.author}/${plugin[i]?.name}`];
					const isInstalled = !!installedPayload;
					let uniqueIdentifier = "";
					let taskId = "";
					let isFinishedInstallation = false;
					if (item.type === "github") {
						const data = item;
						uniqueIdentifier = data.value.github_plugin_unique_identifier;
						if (!uniqueIdentifier) {
							const { unique_identifier } = await post("/workspaces/current/plugin/upload/github", { body: {
								repo: data.value.repo,
								version: data.value.release || data.value.version,
								package: data.value.packages || data.value.package
							} });
							uniqueIdentifier = data.value.github_plugin_unique_identifier || unique_identifier;
							if (uniqueIdentifier === installedPayload?.uniqueIdentifier) return {
								status: TaskStatus.success,
								taskId: "",
								uniqueIdentifier: ""
							};
						}
						if (!isInstalled) {
							const { task_id, all_installed } = await post("/workspaces/current/plugin/install/github", { body: {
								repo: data.value.repo,
								version: data.value.release || data.value.version,
								package: data.value.packages || data.value.package,
								plugin_unique_identifier: uniqueIdentifier
							} });
							taskId = task_id;
							isFinishedInstallation = all_installed;
						}
					}
					if (item.type === "marketplace") {
						uniqueIdentifier = item.value.marketplace_plugin_unique_identifier || plugin[i]?.plugin_id;
						if (uniqueIdentifier === installedPayload?.uniqueIdentifier) return {
							status: TaskStatus.success,
							taskId: "",
							uniqueIdentifier: ""
						};
						if (!isInstalled) {
							const { task_id, all_installed } = await post("/workspaces/current/plugin/install/marketplace", { body: { plugin_unique_identifiers: [uniqueIdentifier] } });
							taskId = task_id;
							isFinishedInstallation = all_installed;
						}
					}
					if (item.type === "package") {
						uniqueIdentifier = item.value.unique_identifier;
						if (uniqueIdentifier === installedPayload?.uniqueIdentifier) return {
							status: TaskStatus.success,
							taskId: "",
							uniqueIdentifier: ""
						};
						if (!isInstalled) {
							const { task_id, all_installed } = await post("/workspaces/current/plugin/install/pkg", { body: { plugin_unique_identifiers: [uniqueIdentifier] } });
							taskId = task_id;
							isFinishedInstallation = all_installed;
						}
					}
					if (isInstalled) if (item.type === "package") {
						await uninstallPlugin(installedPayload.installedId);
						const { task_id, all_installed } = await post("/workspaces/current/plugin/install/pkg", { body: { plugin_unique_identifiers: [uniqueIdentifier] } });
						taskId = task_id;
						isFinishedInstallation = all_installed;
					} else {
						const { task_id, all_installed } = await updatePackageFromMarketPlace({
							original_plugin_unique_identifier: installedPayload?.uniqueIdentifier,
							new_plugin_unique_identifier: uniqueIdentifier
						});
						taskId = task_id;
						isFinishedInstallation = all_installed;
					}
					if (isFinishedInstallation) return {
						status: TaskStatus.success,
						taskId: "",
						uniqueIdentifier: ""
					};
					else return {
						status: TaskStatus.running,
						taskId,
						uniqueIdentifier
					};
				} catch (e) {
					return Promise.resolve({
						status: TaskStatus.failed,
						taskId: "",
						uniqueIdentifier: ""
					});
				}
			}));
		},
		onSuccess
	});
};
var useDebugKey = () => {
	return useQuery({
		queryKey: [NAME_SPACE, "debugKey"],
		queryFn: () => get("/workspaces/current/plugin/debugging-key")
	});
};
var useReferenceSettingKey = [NAME_SPACE, "referenceSettings"];
var useReferenceSettings = () => {
	return useQuery({
		queryKey: useReferenceSettingKey,
		queryFn: () => get("/workspaces/current/plugin/preferences/fetch")
	});
};
var useInvalidateReferenceSettings = () => {
	const queryClient = useQueryClient();
	return () => {
		queryClient.invalidateQueries({ queryKey: useReferenceSettingKey });
	};
};
var useMutationReferenceSettings = ({ onSuccess }) => {
	return useMutation({
		mutationFn: (payload) => {
			return post("/workspaces/current/plugin/preferences/change", { body: payload });
		},
		onSuccess
	});
};
var useRemoveAutoUpgrade = () => {
	return useMutation({ mutationFn: (payload) => {
		return post("/workspaces/current/plugin/preferences/autoupgrade/exclude", { body: payload });
	} });
};
var useFetchPluginsInMarketPlaceByIds = (unique_identifiers, options) => {
	return useQuery({
		...options,
		queryKey: [
			NAME_SPACE,
			"fetchPluginsInMarketPlaceByIds",
			unique_identifiers
		],
		queryFn: () => postMarketplace("/plugins/identifier/batch", { body: { unique_identifiers } }),
		enabled: unique_identifiers?.filter((i) => !!i).length > 0,
		retry: 0
	});
};
var useFetchPluginsInMarketPlaceByInfo = (infos) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"fetchPluginsInMarketPlaceByInfo",
			infos
		],
		queryFn: () => postMarketplace("/plugins/versions/batch", { body: { plugin_tuples: infos.map((info) => ({
			org: info.organization,
			name: info.plugin,
			version: info.version
		})) } }),
		enabled: infos?.filter((i) => !!i).length > 0,
		retry: 0
	});
};
var usePluginTaskListKey = [NAME_SPACE, "pluginTaskList"];
var usePluginTaskList = (category) => {
	const [initialized, setInitialized] = useState(false);
	const { canManagement } = useReferenceSetting();
	const { refreshPluginList } = useRefreshPluginList();
	const { data, isFetched, isRefetching, refetch, ...rest } = useQuery({
		enabled: canManagement,
		queryKey: usePluginTaskListKey,
		queryFn: () => get("/workspaces/current/plugin/tasks?page=1&page_size=100"),
		refetchInterval: (lastQuery) => {
			return lastQuery.state.data?.tasks.every((task) => task.status === TaskStatus.success || task.status === TaskStatus.failed) ? false : 5e3;
		}
	});
	useEffect(() => {
		if (!initialized || isRefetching) return;
		const lastData = cloneDeep(data);
		const taskDone = lastData?.tasks.every((task) => task.status === TaskStatus.success || task.status === TaskStatus.failed);
		const taskAllFailed = lastData?.tasks.every((task) => task.status === TaskStatus.failed);
		if (taskDone && lastData?.tasks.length && !taskAllFailed) refreshPluginList(category ? { category } : void 0, !category);
	}, [isRefetching]);
	useEffect(() => {
		setInitialized(true);
	}, []);
	const handleRefetch = useCallback(() => {
		refetch();
	}, [refetch]);
	return {
		data,
		pluginTasks: data?.tasks || [],
		isFetched,
		handleRefetch,
		...rest
	};
};
var useMutationClearTaskPlugin = () => {
	return useMutation({ mutationFn: ({ taskId, pluginId }) => {
		return post(`/workspaces/current/plugin/tasks/${taskId}/delete/${encodeURIComponent(pluginId)}`);
	} });
};
var usePluginManifestInfo = (pluginUID) => {
	return useQuery({
		enabled: !!pluginUID,
		queryKey: [
			NAME_SPACE,
			"manifest",
			pluginUID
		],
		queryFn: () => getMarketplace(`/plugins/${pluginUID}`),
		retry: 0
	});
};
var useDownloadPlugin = (info, needDownload) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"downloadPlugin",
			info
		],
		queryFn: () => getMarketplace(`/plugins/${info.organization}/${info.pluginName}/${info.version}/download`),
		enabled: needDownload,
		retry: 0
	});
};
var useMutationCheckDependencies = () => {
	return useMutation({ mutationFn: (appId) => {
		return get(`/apps/imports/${appId}/check-dependencies`);
	} });
};
var useModelInList = (currentProvider, modelId) => {
	const provider = currentProvider?.provider;
	return useQuery({
		queryKey: [
			"modelInList",
			provider,
			modelId
		],
		queryFn: async () => {
			if (!modelId || !provider) return false;
			try {
				const modelsData = await fetchModelProviderModelList(`/workspaces/current/model-providers/${provider}/models`);
				return !!modelId && modelsData.data.some((item) => item.model === modelId);
			} catch {
				return false;
			}
		},
		enabled: !!modelId && !!provider
	});
};
var usePluginInfo = (providerName) => {
	return useQuery({
		queryKey: ["pluginInfo", providerName],
		queryFn: async () => {
			if (!providerName) return null;
			const parts = providerName.split("/");
			const org = parts[0];
			const name = parts[1];
			try {
				const response = await fetchPluginInfoFromMarketPlace({
					org,
					name
				});
				return response.data.plugin.category === PluginCategoryEnum.model ? response.data.plugin : null;
			} catch {
				return null;
			}
		},
		enabled: !!providerName
	});
};
var useFetchDynamicOptions = (plugin_id, provider, action, parameter, provider_type, extra) => {
	return useMutation({ mutationFn: () => get("/workspaces/current/plugin/parameters/dynamic-options", { params: {
		plugin_id,
		provider,
		action,
		parameter,
		provider_type,
		...extra
	} }) });
};
var usePluginReadme = ({ plugin_unique_identifier, language }) => {
	return useQuery({
		queryKey: [
			"pluginReadme",
			plugin_unique_identifier,
			language
		],
		queryFn: () => get("/workspaces/current/plugin/readme", { params: {
			plugin_unique_identifier,
			language
		} }, { silent: true }),
		enabled: !!plugin_unique_identifier,
		retry: 0
	});
};
var usePluginReadmeAsset = ({ file_name, plugin_unique_identifier }) => {
	const normalizedFileName = file_name?.replace(/(^\.\/_assets\/|^_assets\/)/, "");
	return useQuery({
		queryKey: [
			"pluginReadmeAsset",
			plugin_unique_identifier,
			normalizedFileName
		],
		queryFn: () => get("/workspaces/current/plugin/asset", { params: {
			plugin_unique_identifier,
			file_name: normalizedFileName
		} }, { silent: true }),
		enabled: !!plugin_unique_identifier && !!file_name && /(^\.\/_assets|^_assets)/.test(file_name)
	});
};
//#endregion
//#region app/components/plugins/install-plugin/hooks/use-refresh-plugin-list.tsx
var useRefreshPluginList = () => {
	const invalidateInstalledPluginList = useInvalidateInstalledPluginList();
	const { mutate: refetchLLMModelList } = useModelList(ModelTypeEnum.textGeneration);
	const { mutate: refetchEmbeddingModelList } = useModelList(ModelTypeEnum.textEmbedding);
	const { mutate: refetchRerankModelList } = useModelList(ModelTypeEnum.rerank);
	const { refreshModelProviders } = useProviderContext();
	const invalidateAllToolProviders = useInvalidateAllToolProviders();
	const invalidateAllBuiltInTools = useInvalidateAllBuiltInTools();
	const invalidateAllDataSources = useInvalidDataSourceList();
	const invalidateDataSourceListAuth = useInvalidDataSourceListAuth();
	const invalidateStrategyProviders = useInvalidateStrategyProviders();
	const invalidateAllTriggerPlugins = useInvalidateAllTriggerPlugins();
	const invalidateRAGRecommendedPlugins = useInvalidateRAGRecommendedPlugins();
	return { refreshPluginList: (manifest, refreshAllType) => {
		invalidateInstalledPluginList();
		if (manifest && PluginCategoryEnum.tool.includes(manifest.category) || refreshAllType) {
			invalidateAllToolProviders();
			invalidateAllBuiltInTools();
			invalidateRAGRecommendedPlugins("tool");
		}
		if (manifest && PluginCategoryEnum.trigger.includes(manifest.category) || refreshAllType) invalidateAllTriggerPlugins();
		if (manifest && PluginCategoryEnum.datasource.includes(manifest.category) || refreshAllType) {
			invalidateAllDataSources();
			invalidateDataSourceListAuth();
		}
		if (manifest && PluginCategoryEnum.model.includes(manifest.category) || refreshAllType) {
			refreshModelProviders();
			refetchLLMModelList();
			refetchEmbeddingModelList();
			refetchRerankModelList();
		}
		if (manifest && PluginCategoryEnum.agent.includes(manifest.category) || refreshAllType) invalidateStrategyProviders();
	} };
};
//#endregion
export { useConvertDatasetToPipeline as $, useVersionListOfPlugin as A, useCreateMCPServer as At, checkTaskStatus as B, useInvalidateMCPTools as Bt, usePluginManifestInfo as C, useAllMCPTools as Ct, useRemoveAutoUpgrade as D, useAuthorizeMCP as Dt, usePluginTaskList as E, useAppTriggers as Et, useGetDataSourceOAuthUrl as F, useInvalidateAllMCPTools as Ft, updateFromGitHub as G, useRefreshMCPServerCode as Gt, fetchManifestFromMarketPlace as H, useMCPServerDetail as Ht, useGetDefaultDataSourceListAuth as I, useInvalidateAllToolProviders as It, uploadGitHub as J, useUpdateMCPTools as Jt, updateFromMarketPlace as K, useUpdateMCP as Kt, useInvalidDataSourceAuth as L, useInvalidateAllWorkflowTools as Lt, useReferenceSetting as M, useInvalidToolsByType as Mt, useGetDataSourceAuth as N, useInvalidateAllBuiltInTools as Nt, useUpdatePackageFromMarketPlace as O, useBuiltinTools as Ot, useGetDataSourceListAuth as P, useInvalidateAllCustomTools as Pt, useCheckPipelineDependencies as Q, useInvalidDataSourceListAuth as R, useInvalidateAppTriggers as Rt, usePluginInfo as S, useAllCustomTools as St, usePluginReadmeAsset as T, useAllWorkflowTools as Tt, fetchPluginInfoFromMarketPlace as U, useMCPTools as Ut, fetchBundleInfoFromMarketPlace as V, useInvalidateWorkflowToolDetailByAppID as Vt, uninstallPlugin as W, useRAGRecommendedPlugins as Wt, useStrategyProviders as X, useWorkflowToolDetailByAppID as Xt, useStrategyProviderDetail as Y, useUpdateTriggerStatus as Yt, publishedPipelineInfoQueryKeyPrefix as Z, useInvalidateReferenceSettings as _, usePublishedPipelinePreProcessingParams as _t, useFeaturedToolsRecommendations as a, useExportPipelineDSL as at, useMutationClearTaskPlugin as b, useUpdateTemplateInfo as bt, useFetchPluginsInMarketPlaceByIds as c, useImportPipelineDSLConfirm as ct, useInstallPackageFromGitHub as d, usePipelineExecutionLog as dt, useDataSourceList as et, useInstallPackageFromLocal as f, usePipelineTemplateById as ft, useInvalidateInstalledPluginList as g, usePublishedPipelineInfo as gt, useInvalidateCheckInstalled as h, usePublishAsCustomizedPipeline as ht, useDownloadPlugin as i, useDraftPipelineProcessingParams as it, useCanInstallPluginFromMarketplace as j, useDeleteMCP as jt, useUploadGitHub as k, useCreateMCP as kt, useFetchPluginsInMarketPlaceByInfo as l, useInvalidCustomizedTemplateList as lt, useInstalledPluginList as m, usePreviewOnlineDocument as mt, useCheckInstalled as n, useDeleteTemplate as nt, useFeaturedTriggersRecommendations as o, useExportTemplateDSL as ot, useInstallPackageFromMarketPlace as p, usePipelineTemplateList as pt, uploadFile as q, useUpdateMCPServer as qt, useDebugKey as r, useDraftPipelinePreProcessingParams as rt, useFetchDynamicOptions as s, useImportPipelineDSL as st, useRefreshPluginList as t, useDatasourceSingleRun as tt, useInstallOrUpdate as u, useInvalidDataSourceList as ut, useModelInList as v, usePublishedPipelineProcessingParams as vt, usePluginReadme as w, useAllToolProviders as wt, usePluginDeclarationFromMarketPlace as x, useAllBuiltInTools as xt, useMutationCheckDependencies as y, useRunPublishedPipeline as yt, useInvalidDefaultDataSourceListAuth as z, useInvalidateMCPServerDetail as zt };
