import { l as post, r as get } from "./base-BuKAg6Le.js";
import { r as AppModeEnum } from "./app-DPjSIfgb.js";
import { n as useQuery, p as useQueryClient, t as useMutation } from "./useMutation-CRBpDOZ8.js";
import { u as keepPreviousData } from "./utils-BfPR7I0w.js";
import { t as useInfiniteQuery } from "./useInfiniteQuery-CNgDC6bG.js";
import { n as consoleQuery, t as consoleClient } from "./client-CLQTU2Oi.js";
//#region service/use-apps.ts
var NAME_SPACE = "apps";
var allowedModes = new Set([
	"all",
	AppModeEnum.WORKFLOW,
	AppModeEnum.ADVANCED_CHAT,
	AppModeEnum.CHAT,
	AppModeEnum.AGENT_CHAT,
	AppModeEnum.COMPLETION
]);
var normalizeAppListParams = (params) => {
	const { page = 1, limit = 30, name = "", mode, tag_ids, is_created_by_me } = params;
	const safeMode = allowedModes.has(mode) ? mode : void 0;
	return {
		page,
		limit,
		name,
		...safeMode && safeMode !== "all" ? { mode: safeMode } : {},
		...tag_ids?.length ? { tag_ids } : {},
		...is_created_by_me ? { is_created_by_me } : {}
	};
};
var appListKey = (params) => [
	NAME_SPACE,
	"list",
	params
];
var useAppFullListKey = [NAME_SPACE, "full-list"];
var useGenerateRuleTemplate = (type, disabled) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"generate-rule-template",
			type
		],
		queryFn: () => post("instruction-generate/template", { body: { type } }),
		enabled: !disabled,
		retry: 0
	});
};
var useAppDetail = (appID) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"detail",
			appID
		],
		queryFn: () => get(`/apps/${appID}`),
		enabled: !!appID
	});
};
var useAppList = (params, options) => {
	const normalizedParams = normalizeAppListParams(params);
	return useQuery({
		queryKey: appListKey(normalizedParams),
		queryFn: () => get("/apps", { params: normalizedParams }),
		...options
	});
};
var useInfiniteAppList = (params, options) => {
	const normalizedParams = normalizeAppListParams(params);
	return useInfiniteQuery({
		queryKey: appListKey(normalizedParams),
		queryFn: ({ pageParam = normalizedParams.page }) => get("/apps", { params: {
			...normalizedParams,
			page: pageParam
		} }),
		getNextPageParam: (lastPage) => lastPage.has_more ? lastPage.page + 1 : void 0,
		initialPageParam: normalizedParams.page,
		placeholderData: keepPreviousData,
		...options
	});
};
var useInvalidateAppList = () => {
	const queryClient = useQueryClient();
	return () => {
		queryClient.invalidateQueries({ queryKey: [NAME_SPACE, "list"] });
	};
};
var useDeleteAppMutation = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: consoleQuery.apps.deleteApp.mutationKey(),
		mutationFn: (appId) => {
			return consoleClient.apps.deleteApp({ params: { appId } });
		},
		onSuccess: async () => {
			await Promise.all([queryClient.invalidateQueries({ queryKey: [NAME_SPACE, "list"] }), queryClient.invalidateQueries({ queryKey: useAppFullListKey })]);
		}
	});
};
var useAppStatisticsQuery = (metric, appId, params) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"statistics",
			metric,
			appId,
			params
		],
		queryFn: () => get(`/apps/${appId}/statistics/${metric}`, { params }),
		enabled: !!appId
	});
};
var useWorkflowStatisticsQuery = (metric, appId, params) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"workflow-statistics",
			metric,
			appId,
			params
		],
		queryFn: () => get(`/apps/${appId}/workflow/statistics/${metric}`, { params }),
		enabled: !!appId
	});
};
var useAppDailyMessages = (appId, params) => {
	return useAppStatisticsQuery("daily-messages", appId, params);
};
var useAppDailyConversations = (appId, params) => {
	return useAppStatisticsQuery("daily-conversations", appId, params);
};
var useAppDailyEndUsers = (appId, params) => {
	return useAppStatisticsQuery("daily-end-users", appId, params);
};
var useAppAverageSessionInteractions = (appId, params) => {
	return useAppStatisticsQuery("average-session-interactions", appId, params);
};
var useAppAverageResponseTime = (appId, params) => {
	return useAppStatisticsQuery("average-response-time", appId, params);
};
var useAppTokensPerSecond = (appId, params) => {
	return useAppStatisticsQuery("tokens-per-second", appId, params);
};
var useAppSatisfactionRate = (appId, params) => {
	return useAppStatisticsQuery("user-satisfaction-rate", appId, params);
};
var useAppTokenCosts = (appId, params) => {
	return useAppStatisticsQuery("token-costs", appId, params);
};
var useWorkflowDailyConversations = (appId, params) => {
	return useWorkflowStatisticsQuery("daily-conversations", appId, params);
};
var useWorkflowDailyTerminals = (appId, params) => {
	return useWorkflowStatisticsQuery("daily-terminals", appId, params);
};
var useWorkflowTokenCosts = (appId, params) => {
	return useWorkflowStatisticsQuery("token-costs", appId, params);
};
var useWorkflowAverageInteractions = (appId, params) => {
	return useWorkflowStatisticsQuery("average-app-interactions", appId, params);
};
var useAppVoices = (appId, language) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"voices",
			appId,
			language || "en-US"
		],
		queryFn: () => get(`/apps/${appId}/text-to-audio/voices`, { params: { language: language || "en-US" } }),
		enabled: !!appId
	});
};
var useAppApiKeys = (appId, options) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"api-keys",
			appId
		],
		queryFn: () => get(`/apps/${appId}/api-keys`),
		enabled: !!appId && (options?.enabled ?? true)
	});
};
var useInvalidateAppApiKeys = () => {
	const queryClient = useQueryClient();
	return (appId) => {
		if (!appId) return;
		queryClient.invalidateQueries({ queryKey: [
			NAME_SPACE,
			"api-keys",
			appId
		] });
	};
};
//#endregion
export { useInvalidateAppList as _, useAppDailyEndUsers as a, useWorkflowDailyTerminals as b, useAppList as c, useAppTokensPerSecond as d, useAppVoices as f, useInvalidateAppApiKeys as g, useInfiniteAppList as h, useAppDailyConversations as i, useAppSatisfactionRate as l, useGenerateRuleTemplate as m, useAppAverageResponseTime as n, useAppDailyMessages as o, useDeleteAppMutation as p, useAppAverageSessionInteractions as r, useAppDetail as s, useAppApiKeys as t, useAppTokenCosts as u, useWorkflowAverageInteractions as v, useWorkflowTokenCosts as x, useWorkflowDailyConversations as y };
