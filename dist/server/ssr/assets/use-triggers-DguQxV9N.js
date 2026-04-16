import { r as CollectionType } from "./types-DzFjbMeE.js";
import { l as post, r as get } from "./base-BuKAg6Le.js";
import { n as useQuery, t as useMutation } from "./useMutation-CRBpDOZ8.js";
import { t as useInvalid } from "./use-base-DLpNl2rR.js";
import { n as consoleQuery, t as consoleClient } from "./client-CLQTU2Oi.js";
//#region service/use-triggers.ts
var NAME_SPACE = "triggers";
var convertToTriggerWithProvider = (provider) => {
	return {
		id: provider.plugin_id || provider.name,
		name: provider.name,
		author: provider.author,
		description: provider.description,
		icon: provider.icon || "",
		icon_dark: provider.icon_dark || "",
		label: provider.label,
		type: CollectionType.trigger,
		team_credentials: {},
		is_team_authorization: false,
		allow_delete: false,
		labels: provider.tags || [],
		plugin_id: provider.plugin_id,
		plugin_unique_identifier: provider.plugin_unique_identifier || "",
		events: provider.events.map((event) => ({
			name: event.name,
			author: provider.author,
			label: event.identity.label,
			description: event.description,
			parameters: event.parameters.map((param) => ({
				name: param.name,
				label: param.label,
				human_description: param.description || param.label,
				type: param.type,
				form: param.type,
				llm_description: JSON.stringify(param.description || {}),
				required: param.required || false,
				default: param.default || "",
				options: param.options?.map((option) => ({
					label: option.label,
					value: option.value
				})) || [],
				multiple: param.multiple || false
			})),
			labels: provider.tags || [],
			output_schema: event.output_schema || {}
		})),
		subscription_constructor: provider.subscription_constructor,
		subscription_schema: provider.subscription_schema,
		supported_creation_methods: provider.supported_creation_methods,
		meta: { version: "1.0" }
	};
};
var useAllTriggerPlugins = (enabled = true) => {
	return useQuery({
		queryKey: consoleQuery.triggers.list.queryKey({ input: {} }),
		queryFn: async () => {
			return (await consoleClient.triggers.list({})).map(convertToTriggerWithProvider);
		},
		enabled
	});
};
var useInvalidateAllTriggerPlugins = () => {
	return useInvalid(consoleQuery.triggers.list.queryKey({ input: {} }));
};
var useTriggerProviderInfo = (provider, enabled = true) => {
	return useQuery({
		queryKey: consoleQuery.triggers.providerInfo.queryKey({ input: { params: { provider } } }),
		queryFn: () => consoleClient.triggers.providerInfo({ params: { provider } }),
		enabled: enabled && !!provider
	});
};
var useTriggerSubscriptions = (provider, enabled = true) => {
	return useQuery({
		queryKey: consoleQuery.triggers.subscriptions.queryKey({ input: { params: { provider } } }),
		queryFn: () => consoleClient.triggers.subscriptions({ params: { provider } }),
		enabled: enabled && !!provider
	});
};
var useCreateTriggerSubscriptionBuilder = () => {
	return useMutation({
		mutationKey: consoleQuery.triggers.subscriptionBuilderCreate.mutationKey(),
		mutationFn: (payload) => {
			const { provider, ...body } = payload;
			return consoleClient.triggers.subscriptionBuilderCreate({
				params: { provider },
				body
			});
		}
	});
};
var useUpdateTriggerSubscriptionBuilder = () => {
	return useMutation({
		mutationKey: consoleQuery.triggers.subscriptionBuilderUpdate.mutationKey(),
		mutationFn: (payload) => {
			const { provider, subscriptionBuilderId, ...body } = payload;
			return consoleClient.triggers.subscriptionBuilderUpdate({
				params: {
					provider,
					subscriptionBuilderId
				},
				body
			});
		}
	});
};
var useVerifyAndUpdateTriggerSubscriptionBuilder = () => {
	return useMutation({
		mutationKey: consoleQuery.triggers.subscriptionBuilderVerifyUpdate.mutationKey(),
		mutationFn: (payload) => {
			const { provider, subscriptionBuilderId, ...body } = payload;
			return post(`/workspaces/current/trigger-provider/${provider}/subscriptions/builder/verify-and-update/${subscriptionBuilderId}`, { body }, { silent: true });
		}
	});
};
var useVerifyTriggerSubscription = () => {
	return useMutation({
		mutationKey: consoleQuery.triggers.subscriptionVerify.mutationKey(),
		mutationFn: (payload) => {
			const { provider, subscriptionId, ...body } = payload;
			return post(`/workspaces/current/trigger-provider/${provider}/subscriptions/verify/${subscriptionId}`, { body }, { silent: true });
		}
	});
};
var useBuildTriggerSubscription = () => {
	return useMutation({
		mutationKey: consoleQuery.triggers.subscriptionBuild.mutationKey(),
		mutationFn: (payload) => {
			const { provider, subscriptionBuilderId, ...body } = payload;
			return consoleClient.triggers.subscriptionBuild({
				params: {
					provider,
					subscriptionBuilderId
				},
				body
			});
		}
	});
};
var useDeleteTriggerSubscription = () => {
	return useMutation({
		mutationKey: consoleQuery.triggers.subscriptionDelete.mutationKey(),
		mutationFn: (subscriptionId) => {
			return consoleClient.triggers.subscriptionDelete({ params: { subscriptionId } });
		}
	});
};
var useUpdateTriggerSubscription = () => {
	return useMutation({
		mutationKey: consoleQuery.triggers.subscriptionUpdate.mutationKey(),
		mutationFn: (payload) => {
			const { subscriptionId, ...body } = payload;
			return consoleClient.triggers.subscriptionUpdate({
				params: { subscriptionId },
				body
			});
		}
	});
};
var useTriggerSubscriptionBuilderLogs = (provider, subscriptionBuilderId, options = {}) => {
	const { enabled = true, refetchInterval = false } = options;
	return useQuery({
		queryKey: consoleQuery.triggers.subscriptionBuilderLogs.queryKey({ input: { params: {
			provider,
			subscriptionBuilderId
		} } }),
		queryFn: () => consoleClient.triggers.subscriptionBuilderLogs({ params: {
			provider,
			subscriptionBuilderId
		} }),
		enabled: enabled && !!provider && !!subscriptionBuilderId,
		refetchInterval
	});
};
var useTriggerOAuthConfig = (provider, enabled = true) => {
	return useQuery({
		queryKey: consoleQuery.triggers.oauthConfig.queryKey({ input: { params: { provider } } }),
		queryFn: () => consoleClient.triggers.oauthConfig({ params: { provider } }),
		enabled: enabled && !!provider
	});
};
var useConfigureTriggerOAuth = () => {
	return useMutation({
		mutationKey: consoleQuery.triggers.oauthConfigure.mutationKey(),
		mutationFn: (payload) => {
			const { provider, ...body } = payload;
			return consoleClient.triggers.oauthConfigure({
				params: { provider },
				body
			});
		}
	});
};
var useDeleteTriggerOAuth = () => {
	return useMutation({
		mutationKey: consoleQuery.triggers.oauthDelete.mutationKey(),
		mutationFn: (provider) => {
			return consoleClient.triggers.oauthDelete({ params: { provider } });
		}
	});
};
var useInitiateTriggerOAuth = () => {
	return useMutation({
		mutationKey: consoleQuery.triggers.oauthInitiate.mutationKey(),
		mutationFn: (provider) => {
			return get(`/workspaces/current/trigger-provider/${provider}/subscriptions/oauth/authorize`, {}, { silent: true });
		}
	});
};
var useTriggerPluginDynamicOptions = (payload, enabled = true) => {
	return useQuery({
		queryKey: [
			NAME_SPACE,
			"dynamic-options",
			payload.plugin_id,
			payload.provider,
			payload.action,
			payload.parameter,
			payload.credential_id,
			payload.credentials,
			payload.extra
		],
		queryFn: () => {
			if (payload.credentials) return post("/workspaces/current/plugin/parameters/dynamic-options-with-credentials", { body: {
				plugin_id: payload.plugin_id,
				provider: payload.provider,
				action: payload.action,
				parameter: payload.parameter,
				credential_id: payload.credential_id,
				credentials: payload.credentials
			} }, { silent: true });
			return get("/workspaces/current/plugin/parameters/dynamic-options", { params: {
				plugin_id: payload.plugin_id,
				provider: payload.provider,
				action: payload.action,
				parameter: payload.parameter,
				credential_id: payload.credential_id,
				provider_type: "trigger"
			} }, { silent: true });
		},
		enabled: enabled && !!payload.plugin_id && !!payload.provider && !!payload.action && !!payload.parameter && !!payload.credential_id,
		retry: 0,
		staleTime: 0
	});
};
//#endregion
export { useVerifyTriggerSubscription as _, useDeleteTriggerOAuth as a, useInvalidateAllTriggerPlugins as c, useTriggerProviderInfo as d, useTriggerSubscriptionBuilderLogs as f, useVerifyAndUpdateTriggerSubscriptionBuilder as g, useUpdateTriggerSubscriptionBuilder as h, useCreateTriggerSubscriptionBuilder as i, useTriggerOAuthConfig as l, useUpdateTriggerSubscription as m, useBuildTriggerSubscription as n, useDeleteTriggerSubscription as o, useTriggerSubscriptions as p, useConfigureTriggerOAuth as r, useInitiateTriggerOAuth as s, useAllTriggerPlugins as t, useTriggerPluginDynamicOptions as u };
