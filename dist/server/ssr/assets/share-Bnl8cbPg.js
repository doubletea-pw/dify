import { J as WEB_APP_SHARE_CODE_HEADER_NAME } from "./config-Dopncj5R.js";
import { a as getPublic, c as patchPublic, d as postPublic, h as ssePost, l as post, n as delPublic, r as get, s as patch, t as del, y as getWebAppAccessToken } from "./base-BuKAg6Le.js";
//#region service/share.ts
var AppSourceType = /* @__PURE__ */ function(AppSourceType) {
	AppSourceType["webApp"] = "webApp";
	AppSourceType["installedApp"] = "installedApp";
	AppSourceType["tryApp"] = "tryApp";
	return AppSourceType;
}({});
var apiPrefix = {
	[AppSourceType.webApp]: "",
	[AppSourceType.installedApp]: "installed-apps",
	[AppSourceType.tryApp]: "trial-apps"
};
function getIsPublicAPI(appSourceType) {
	return appSourceType === AppSourceType.webApp;
}
function getAction(action, appSourceType) {
	const isNeedLogin = !getIsPublicAPI(appSourceType);
	switch (action) {
		case "get": return isNeedLogin ? get : getPublic;
		case "post": return isNeedLogin ? post : postPublic;
		case "patch": return isNeedLogin ? patch : patchPublic;
		case "del": return isNeedLogin ? del : delPublic;
	}
}
function getUrl(url, appSourceType, appId) {
	return appSourceType !== AppSourceType.webApp ? `${apiPrefix[appSourceType]}/${appId}/${url.startsWith("/") ? url.slice(1) : url}` : url;
}
var stopChatMessageResponding = async (appId, taskId, appSourceType, installedAppId = "") => {
	return getAction("post", appSourceType)(getUrl(`chat-messages/${taskId}/stop`, appSourceType, installedAppId));
};
var sendCompletionMessage = async (body, { onData, onCompleted, onError, onMessageReplace, getAbortController }, appSourceType, installedAppId = "") => {
	return ssePost(getUrl("completion-messages", appSourceType, installedAppId), { body: {
		...body,
		response_mode: "streaming"
	} }, {
		onData,
		onCompleted,
		isPublicAPI: getIsPublicAPI(appSourceType),
		onError,
		onMessageReplace,
		getAbortController
	});
};
var sendWorkflowMessage = async (body, otherOptions, appSourceType, appId = "") => {
	return ssePost(getUrl("workflows/run", appSourceType, appId), { body: {
		...body,
		response_mode: "streaming"
	} }, {
		...otherOptions,
		isPublicAPI: getIsPublicAPI(appSourceType)
	});
};
var stopWorkflowMessage = async (_appId, taskId, appSourceType, installedAppId = "") => {
	if (!taskId) return;
	return getAction("post", appSourceType)(getUrl(`workflows/tasks/${taskId}/stop`, appSourceType, installedAppId));
};
var fetchAppInfo = async () => {
	return getPublic("/site");
};
var fetchConversations = async (appSourceType, installedAppId = "", last_id, pinned, limit) => {
	return getAction("get", appSourceType)(getUrl("conversations", appSourceType, installedAppId), { params: {
		limit: limit || 20,
		...last_id ? { last_id } : {},
		...pinned !== void 0 ? { pinned } : {}
	} });
};
var pinConversation = async (appSourceType, installedAppId = "", id) => {
	return getAction("patch", appSourceType)(getUrl(`conversations/${id}/pin`, appSourceType, installedAppId));
};
var unpinConversation = async (appSourceType, installedAppId = "", id) => {
	return getAction("patch", appSourceType)(getUrl(`conversations/${id}/unpin`, appSourceType, installedAppId));
};
var delConversation = async (appSourceType, installedAppId = "", id) => {
	return getAction("del", appSourceType)(getUrl(`conversations/${id}`, appSourceType, installedAppId));
};
var renameConversation = async (appSourceType, installedAppId = "", id, name) => {
	return getAction("post", appSourceType)(getUrl(`conversations/${id}/name`, appSourceType, installedAppId), { body: { name } });
};
var generationConversationName = async (appSourceType, installedAppId = "", id) => {
	return getAction("post", appSourceType)(getUrl(`conversations/${id}/name`, appSourceType, installedAppId), { body: { auto_generate: true } });
};
var fetchChatList = async (conversationId, appSourceType, installedAppId = "") => {
	return getAction("get", appSourceType)(getUrl("messages", appSourceType, installedAppId), { params: {
		conversation_id: conversationId,
		limit: 20,
		last_id: ""
	} });
};
var fetchAppParams = async (appSourceType, appId = "") => {
	return getAction("get", appSourceType)(getUrl("parameters", appSourceType, appId));
};
var fetchWebSAMLSSOUrl = async (appCode, redirectUrl) => {
	return getAction("get", AppSourceType.webApp)(getUrl("/enterprise/sso/saml/login", AppSourceType.webApp, ""), { params: {
		app_code: appCode,
		redirect_url: redirectUrl
	} });
};
var fetchWebOIDCSSOUrl = async (appCode, redirectUrl) => {
	return getAction("get", AppSourceType.webApp)(getUrl("/enterprise/sso/oidc/login", AppSourceType.webApp, ""), { params: {
		app_code: appCode,
		redirect_url: redirectUrl
	} });
};
var fetchWebOAuth2SSOUrl = async (appCode, redirectUrl) => {
	return getAction("get", AppSourceType.webApp)(getUrl("/enterprise/sso/oauth2/login", AppSourceType.webApp, ""), { params: {
		app_code: appCode,
		redirect_url: redirectUrl
	} });
};
var fetchMembersSAMLSSOUrl = async (appCode, redirectUrl) => {
	return getAction("get", AppSourceType.webApp)(getUrl("/enterprise/sso/members/saml/login", AppSourceType.webApp, ""), { params: {
		app_code: appCode,
		redirect_url: redirectUrl
	} });
};
var fetchMembersOIDCSSOUrl = async (appCode, redirectUrl) => {
	return getAction("get", AppSourceType.webApp)(getUrl("/enterprise/sso/members/oidc/login", AppSourceType.webApp, ""), { params: {
		app_code: appCode,
		redirect_url: redirectUrl
	} });
};
var fetchMembersOAuth2SSOUrl = async (appCode, redirectUrl) => {
	return getAction("get", AppSourceType.webApp)(getUrl("/enterprise/sso/members/oauth2/login", AppSourceType.webApp, ""), { params: {
		app_code: appCode,
		redirect_url: redirectUrl
	} });
};
var fetchAppMeta = async (appSourceType, installedAppId = "") => {
	return getAction("get", appSourceType)(getUrl("meta", appSourceType, installedAppId));
};
var updateFeedback = async ({ url, body }, appSourceType, installedAppId = "") => {
	return getAction("post", appSourceType)(getUrl(url, appSourceType, installedAppId), { body });
};
var fetchMoreLikeThis = async (messageId, appSourceType, installedAppId = "") => {
	return getAction("get", appSourceType)(getUrl(`/messages/${messageId}/more-like-this`, appSourceType, installedAppId), { params: { response_mode: "blocking" } });
};
var saveMessage = (messageId, appSourceType, installedAppId = "") => {
	return getAction("post", appSourceType)(getUrl("/saved-messages", appSourceType, installedAppId), { body: { message_id: messageId } });
};
var fetchSavedMessage = async (appSourceType, installedAppId = "") => {
	return getAction("get", appSourceType)(getUrl("/saved-messages", appSourceType, installedAppId), {}, { silent: true });
};
var removeMessage = (messageId, appSourceType, installedAppId = "") => {
	return getAction("del", appSourceType)(getUrl(`/saved-messages/${messageId}`, appSourceType, installedAppId));
};
var fetchSuggestedQuestions = (messageId, appSourceType, installedAppId = "") => {
	return getAction("get", appSourceType)(getUrl(`/messages/${messageId}/suggested-questions`, appSourceType, installedAppId));
};
var audioToText = (url, appSourceType, body) => {
	return getAction("post", appSourceType)(url, { body }, {
		bodyStringify: false,
		deleteContentType: true
	});
};
var textToAudioStream = (url, appSourceType, header, body) => {
	return getAction("post", appSourceType)(url, {
		body,
		header
	}, { needAllResponseContent: true });
};
var fetchAccessToken = async ({ userId, appCode }) => {
	const headers = new Headers();
	headers.append(WEB_APP_SHARE_CODE_HEADER_NAME, appCode);
	const accessToken = getWebAppAccessToken();
	if (accessToken) headers.append("Authorization", `Bearer ${accessToken}`);
	const params = new URLSearchParams();
	if (userId) params.append("user_id", userId);
	return getPublic(`/passport?${params.toString()}`, { headers });
};
var getUserCanAccess = (appId, isInstalledApp) => {
	if (isInstalledApp) return get(`/enterprise/webapp/permission?appId=${appId}`);
	return getPublic(`/webapp/permission?appId=${appId}`);
};
var getAppAccessModeByAppCode = (appCode) => {
	return getPublic(`/webapp/access-mode?appCode=${appCode}`);
};
var getHumanInputForm = (token) => {
	return getPublic(`/form/human_input/${token}`);
};
var submitHumanInputForm = (token, data) => {
	return postPublic(`/form/human_input/${token}`, { body: data });
};
//#endregion
export { stopChatMessageResponding as A, getUserCanAccess as C, saveMessage as D, renameConversation as E, updateFeedback as F, submitHumanInputForm as M, textToAudioStream as N, sendCompletionMessage as O, unpinConversation as P, getUrl as S, removeMessage as T, fetchWebOIDCSSOUrl as _, fetchAppInfo as a, getAppAccessModeByAppCode as b, fetchChatList as c, fetchMembersOIDCSSOUrl as d, fetchMembersSAMLSSOUrl as f, fetchWebOAuth2SSOUrl as g, fetchSuggestedQuestions as h, fetchAccessToken as i, stopWorkflowMessage as j, sendWorkflowMessage as k, fetchConversations as l, fetchSavedMessage as m, audioToText as n, fetchAppMeta as o, fetchMoreLikeThis as p, delConversation as r, fetchAppParams as s, AppSourceType as t, fetchMembersOAuth2SSOUrl as u, fetchWebSAMLSSOUrl as v, pinConversation as w, getHumanInputForm as x, generationConversationName as y };
