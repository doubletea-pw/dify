import { f as put, l as post, r as get, s as patch, t as del } from "./base-BuKAg6Le.js";
//#region service/apps.ts
var fetchAppList = ({ url, params }) => {
	return get(url, { params });
};
var fetchAppDetail = ({ url, id }) => {
	return get(`${url}/${id}`);
};
var fetchAppDetailDirect = async ({ url, id }) => {
	return get(`${url}/${id}`);
};
var createApp = ({ name, icon_type, icon, icon_background, mode, description, config }) => {
	return post("apps", { body: {
		name,
		icon_type,
		icon,
		icon_background,
		mode,
		description,
		model_config: config
	} });
};
var updateAppInfo = ({ appID, name, icon_type, icon, icon_background, description, use_icon_as_answer_icon, max_active_requests }) => {
	const body = {
		name,
		icon_type,
		icon,
		icon_background,
		description,
		use_icon_as_answer_icon,
		max_active_requests
	};
	return put(`apps/${appID}`, { body });
};
var copyApp = ({ appID, name, icon_type, icon, icon_background, mode, description }) => {
	return post(`apps/${appID}/copy`, { body: {
		name,
		icon_type,
		icon,
		icon_background,
		mode,
		description
	} });
};
var exportAppConfig = ({ appID, include = false, workflowID }) => {
	const params = new URLSearchParams({ include_secret: include.toString() });
	if (workflowID) params.append("workflow_id", workflowID);
	return get(`apps/${appID}/export?${params.toString()}`);
};
var importDSL = ({ mode, yaml_content, yaml_url, app_id, name, description, icon_type, icon, icon_background }) => {
	return post("apps/imports", { body: {
		mode,
		yaml_content,
		yaml_url,
		app_id,
		name,
		description,
		icon,
		icon_type,
		icon_background
	} });
};
var importDSLConfirm = ({ import_id }) => {
	return post(`apps/imports/${import_id}/confirm`, { body: {} });
};
var switchApp = ({ appID, name, icon_type, icon, icon_background }) => {
	return post(`apps/${appID}/convert-to-workflow`, { body: {
		name,
		icon_type,
		icon,
		icon_background
	} });
};
var deleteApp = (appID) => {
	return del(`apps/${appID}`);
};
var updateAppSiteStatus = ({ url, body }) => {
	return post(url, { body });
};
var updateAppSiteAccessToken = ({ url }) => {
	return post(url);
};
var updateAppSiteConfig = ({ url, body }) => {
	return post(url, { body });
};
var updateAppModelConfig = ({ url, body }) => {
	return post(url, { body });
};
var delApikey = ({ url, params }) => {
	return del(url, params);
};
var createApikey = ({ url, body }) => {
	return post(url, body);
};
var fetchTracingStatus = ({ appId }) => {
	return get(`/apps/${appId}/trace`);
};
var updateTracingStatus = ({ appId, body }) => {
	return post(`/apps/${appId}/trace`, { body });
};
var fetchWebhookUrl = ({ appId, nodeId }) => {
	return get(`apps/${appId}/workflows/triggers/webhook`, { params: { node_id: nodeId } }, { silent: true });
};
var fetchTracingConfig = ({ appId, provider }) => {
	return get(`/apps/${appId}/trace-config`, { params: { tracing_provider: provider } });
};
var addTracingConfig = ({ appId, body }) => {
	return post(`/apps/${appId}/trace-config`, { body });
};
var updateTracingConfig = ({ appId, body }) => {
	return patch(`/apps/${appId}/trace-config`, { body });
};
var removeTracingConfig = ({ appId, provider }) => {
	return del(`/apps/${appId}/trace-config?tracing_provider=${provider}`);
};
//#endregion
export { updateTracingConfig as C, updateAppSiteStatus as S, switchApp as _, delApikey as a, updateAppSiteAccessToken as b, fetchAppDetail as c, fetchTracingConfig as d, fetchTracingStatus as f, removeTracingConfig as g, importDSLConfirm as h, createApp as i, fetchAppDetailDirect as l, importDSL as m, copyApp as n, deleteApp as o, fetchWebhookUrl as p, createApikey as r, exportAppConfig as s, addTracingConfig as t, fetchAppList as u, updateAppInfo as v, updateTracingStatus as w, updateAppSiteConfig as x, updateAppModelConfig as y };
