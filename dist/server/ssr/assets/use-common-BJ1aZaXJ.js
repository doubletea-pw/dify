import { l as post, r as get } from "./base-BuKAg6Le.js";
import { n as useQuery, t as useMutation } from "./useMutation-CRBpDOZ8.js";
//#region service/use-common.ts
var NAME_SPACE = "common";
var commonQueryKeys = {
	fileUploadConfig: [NAME_SPACE, "file-upload-config"],
	userProfile: [NAME_SPACE, "user-profile"],
	currentWorkspace: [NAME_SPACE, "current-workspace"],
	workspaces: [NAME_SPACE, "workspaces"],
	members: [NAME_SPACE, "members"],
	filePreview: (fileID) => [
		NAME_SPACE,
		"file-preview",
		fileID
	],
	schemaDefinitions: [NAME_SPACE, "schema-type-definitions"],
	isLogin: [NAME_SPACE, "is-login"],
	modelProviders: [NAME_SPACE, "model-providers"],
	modelList: (type) => [
		NAME_SPACE,
		"model-list",
		type
	],
	defaultModel: (type) => [
		NAME_SPACE,
		"default-model",
		type
	],
	retrievalMethods: [NAME_SPACE, "support-retrieval-methods"],
	accountIntegrates: [NAME_SPACE, "account-integrates"],
	pluginProviders: [NAME_SPACE, "plugin-providers"],
	notionConnection: [NAME_SPACE, "notion-connection"],
	apiBasedExtensions: [NAME_SPACE, "api-based-extensions"],
	codeBasedExtensions: (module) => [
		NAME_SPACE,
		"code-based-extensions",
		module
	],
	invitationCheck: (params) => [
		NAME_SPACE,
		"invitation-check",
		params?.workspace_id ?? "",
		params?.email ?? "",
		params?.token ?? ""
	],
	notionBinding: (code) => [
		NAME_SPACE,
		"notion-binding",
		code
	],
	modelParameterRules: (provider, model) => [
		NAME_SPACE,
		"model-parameter-rules",
		provider,
		model
	],
	langGeniusVersion: (currentVersion) => [
		NAME_SPACE,
		"langgenius-version",
		currentVersion
	],
	forgotPasswordValidity: (token) => [
		NAME_SPACE,
		"forgot-password-validity",
		token
	],
	dataSourceIntegrates: [NAME_SPACE, "data-source-integrates"]
};
var useFileUploadConfig = () => {
	return useQuery({
		queryKey: commonQueryKeys.fileUploadConfig,
		queryFn: () => get("/files/upload")
	});
};
var useUserProfile = () => {
	return useQuery({
		queryKey: commonQueryKeys.userProfile,
		queryFn: async () => {
			const response = await get("/account/profile", {}, { needAllResponseContent: true });
			return {
				profile: await response.clone().json(),
				meta: {
					currentVersion: response.headers.get("x-version"),
					currentEnv: response.headers.get("x-env")
				}
			};
		},
		staleTime: 0,
		gcTime: 0
	});
};
var useLangGeniusVersion = (currentVersion, enabled) => {
	return useQuery({
		queryKey: commonQueryKeys.langGeniusVersion(currentVersion || void 0),
		queryFn: () => get("/version", { params: { current_version: currentVersion } }),
		enabled: !!currentVersion && (enabled ?? true)
	});
};
var useCurrentWorkspace = () => {
	return useQuery({
		queryKey: commonQueryKeys.currentWorkspace,
		queryFn: () => post("/workspaces/current")
	});
};
var useWorkspaces = () => {
	return useQuery({
		queryKey: commonQueryKeys.workspaces,
		queryFn: () => get("/workspaces")
	});
};
var useGenerateStructuredOutputRules = () => {
	return useMutation({
		mutationKey: [NAME_SPACE, "generate-structured-output-rules"],
		mutationFn: (body) => {
			return post("/rule-structured-output-generate", { body });
		}
	});
};
var useSendMail = () => {
	return useMutation({
		mutationKey: [NAME_SPACE, "mail-send"],
		mutationFn: (body) => {
			return post("/email-register/send-email", { body });
		}
	});
};
var useMailValidity = () => {
	return useMutation({
		mutationKey: [NAME_SPACE, "mail-validity"],
		mutationFn: (body) => {
			return post("/email-register/validity", { body });
		}
	});
};
var useMailRegister = () => {
	return useMutation({
		mutationKey: [NAME_SPACE, "mail-register"],
		mutationFn: (body) => {
			return post("/email-register", { body });
		}
	});
};
var useFileSupportTypes = () => {
	return useQuery({
		queryKey: [NAME_SPACE, "file-types"],
		queryFn: () => get("/files/support-type")
	});
};
var useMembers = () => {
	return useQuery({
		queryKey: commonQueryKeys.members,
		queryFn: () => get("/workspaces/current/members", { params: {} })
	});
};
var useFilePreview = (fileID) => {
	return useQuery({
		queryKey: commonQueryKeys.filePreview(fileID),
		queryFn: () => get(`/files/${fileID}/preview`),
		enabled: !!fileID
	});
};
var useSchemaTypeDefinitions = () => {
	return useQuery({
		queryKey: commonQueryKeys.schemaDefinitions,
		queryFn: () => get("/spec/schema-definitions")
	});
};
var useIsLogin = () => {
	return useQuery({
		queryKey: commonQueryKeys.isLogin,
		staleTime: 0,
		gcTime: 0,
		queryFn: async () => {
			try {
				await get("/account/profile", {}, { silent: true });
				return { logged_in: true };
			} catch {
				return { logged_in: false };
			}
		}
	});
};
var useLogout = () => {
	return useMutation({
		mutationKey: [NAME_SPACE, "logout"],
		mutationFn: () => post("/logout")
	});
};
var useVerifyForgotPasswordToken = (token) => {
	return useQuery({
		queryKey: commonQueryKeys.forgotPasswordValidity(token),
		queryFn: () => post("/forgot-password/validity", { body: { token } }),
		enabled: !!token,
		staleTime: 0,
		gcTime: 0,
		retry: false
	});
};
var useOneMoreStep = () => {
	return useMutation({
		mutationKey: [NAME_SPACE, "one-more-step"],
		mutationFn: (body) => post("/account/init", { body })
	});
};
var useModelProviders = () => {
	return useQuery({
		queryKey: commonQueryKeys.modelProviders,
		queryFn: () => get("/workspaces/current/model-providers")
	});
};
var useModelListByType = (type, enabled = true) => {
	return useQuery({
		queryKey: commonQueryKeys.modelList(type),
		queryFn: () => get(`/workspaces/current/models/model-types/${type}`),
		enabled
	});
};
var useSupportRetrievalMethods = () => {
	return useQuery({
		queryKey: commonQueryKeys.retrievalMethods,
		queryFn: () => get("/datasets/retrieval-setting")
	});
};
var useCodeBasedExtensions = (module) => {
	return useQuery({
		queryKey: commonQueryKeys.codeBasedExtensions(module),
		queryFn: () => get(`/code-based-extension?module=${module}`)
	});
};
var useApiBasedExtensions = () => {
	return useQuery({
		queryKey: commonQueryKeys.apiBasedExtensions,
		queryFn: () => get("/api-based-extension")
	});
};
var useInvitationCheck = (params, enabled) => {
	return useQuery({
		queryKey: commonQueryKeys.invitationCheck(params),
		queryFn: () => get("/activate/check", { params }),
		enabled: enabled ?? !!params?.token,
		retry: false
	});
};
var useNotionBinding = (code, enabled) => {
	return useQuery({
		queryKey: commonQueryKeys.notionBinding(code),
		queryFn: () => get("/oauth/data-source/binding/notion", { params: { code } }),
		enabled: !!code && (enabled ?? true)
	});
};
var useModelParameterRules = (provider, model, enabled) => {
	return useQuery({
		queryKey: commonQueryKeys.modelParameterRules(provider, model),
		queryFn: () => get(`/workspaces/current/model-providers/${provider}/models/parameter-rules`, {
			params: { model },
			silent: true
		}),
		enabled: !!provider && !!model && (enabled ?? true)
	});
};
//#endregion
export { useSupportRetrievalMethods as C, useWorkspaces as E, useSendMail as S, useVerifyForgotPasswordToken as T, useModelParameterRules as _, useFilePreview as a, useOneMoreStep as b, useGenerateStructuredOutputRules as c, useLangGeniusVersion as d, useLogout as f, useModelListByType as g, useMembers as h, useCurrentWorkspace as i, useInvitationCheck as l, useMailValidity as m, useApiBasedExtensions as n, useFileSupportTypes as o, useMailRegister as p, useCodeBasedExtensions as r, useFileUploadConfig as s, commonQueryKeys as t, useIsLogin as u, useModelProviders as v, useUserProfile as w, useSchemaTypeDefinitions as x, useNotionBinding as y };
