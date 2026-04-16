import { t as getFlowPrefix } from "./utils-pMdyvQan.js";
import { l as post, r as get } from "./base-BuKAg6Le.js";
//#region service/workflow.ts
var fetchWorkflowDraft = (url) => {
	return get(url, {}, { silent: true });
};
var syncWorkflowDraft = ({ url, params }) => {
	return post(url, { body: params }, { silent: true });
};
var fetchNodesDefaultConfigs = (url) => {
	return get(url);
};
var singleNodeRun = (flowType, flowId, nodeId, params) => {
	return post(`${getFlowPrefix(flowType)}/${flowId}/workflows/draft/nodes/${nodeId}/run`, { body: params });
};
var getIterationSingleNodeRunUrl = (flowType, isChatFlow, flowId, nodeId) => {
	return `${getFlowPrefix(flowType)}/${flowId}/${isChatFlow ? "advanced-chat/" : ""}workflows/draft/iteration/nodes/${nodeId}/run`;
};
var getLoopSingleNodeRunUrl = (flowType, isChatFlow, flowId, nodeId) => {
	return `${getFlowPrefix(flowType)}/${flowId}/${isChatFlow ? "advanced-chat/" : ""}workflows/draft/loop/nodes/${nodeId}/run`;
};
var fetchPublishedWorkflow = (url) => {
	return get(url);
};
var stopWorkflowRun = (url) => {
	return post(url);
};
var fetchNodeDefault = (appId, blockType, query = {}) => {
	return get(`apps/${appId}/workflows/default-workflow-block-configs/${blockType}`, { params: { q: JSON.stringify(query) } });
};
var fetchPipelineNodeDefault = (pipelineId, blockType, query = {}) => {
	return get(`rag/pipelines/${pipelineId}/workflows/default-workflow-block-configs/${blockType}`, { params: { q: JSON.stringify(query) } });
};
var fetchCurrentValueOfConversationVariable = ({ url, params }) => {
	return get(url, { params });
};
var fetchAllInspectVarsOnePage = async (flowType, flowId, page) => {
	return get(`${getFlowPrefix(flowType)}/${flowId}/workflows/draft/variables`, { params: {
		page,
		limit: 100
	} });
};
var fetchAllInspectVars = async (flowType, flowId) => {
	const { items, total } = await fetchAllInspectVarsOnePage(flowType, flowId, 1);
	if (total <= 100) return items;
	const pageCount = Math.ceil(total / 100);
	const promises = [];
	for (let i = 2; i <= pageCount; i++) promises.push(fetchAllInspectVarsOnePage(flowType, flowId, i));
	(await Promise.all(promises)).forEach(({ items: item }) => {
		items.push(...item);
	});
	return items;
};
var fetchNodeInspectVars = async (flowType, flowId, nodeId) => {
	const { items } = await get(`${getFlowPrefix(flowType)}/${flowId}/workflows/draft/nodes/${nodeId}/variables`);
	return items;
};
var submitHumanInputForm = (token, data) => {
	return post(`/form/human_input/${token}`, { body: data });
};
var fetchHumanInputNodeStepRunForm = (url, data) => {
	return post(`${url}/preview`, { body: data });
};
var submitHumanInputNodeStepRunForm = (url, data) => {
	return post(`${url}/run`, { body: data });
};
//#endregion
export { fetchNodeInspectVars as a, fetchPublishedWorkflow as c, getLoopSingleNodeRunUrl as d, singleNodeRun as f, syncWorkflowDraft as g, submitHumanInputNodeStepRunForm as h, fetchNodeDefault as i, fetchWorkflowDraft as l, submitHumanInputForm as m, fetchCurrentValueOfConversationVariable as n, fetchNodesDefaultConfigs as o, stopWorkflowRun as p, fetchHumanInputNodeStepRunForm as r, fetchPipelineNodeDefault as s, fetchAllInspectVars as t, getIterationSingleNodeRunUrl as u };
