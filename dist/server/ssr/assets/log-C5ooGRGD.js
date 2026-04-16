import { l as post, r as get } from "./base-BuKAg6Le.js";
//#region service/log.ts
var fetchChatMessages = ({ url, params }) => {
	return get(url, { params });
};
var updateLogMessageFeedbacks = ({ url, body }) => {
	return post(url, { body });
};
var updateLogMessageAnnotations = ({ url, body }) => {
	return post(url, { body });
};
var fetchRunDetail = (url) => {
	return get(url);
};
var fetchTracingList = ({ url }) => {
	return get(url);
};
var fetchAgentLogDetail = ({ appID, params }) => {
	return get(`/apps/${appID}/agent/logs`, { params });
};
//#endregion
export { updateLogMessageAnnotations as a, fetchTracingList as i, fetchChatMessages as n, updateLogMessageFeedbacks as o, fetchRunDetail as r, fetchAgentLogDetail as t };
