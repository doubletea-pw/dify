import { m as __exportAll } from "../index.js";
import { i as ANNOTATION_DEFAULT } from "./config-Dopncj5R.js";
import { l as post, r as get, t as del } from "./base-BuKAg6Le.js";
//#region service/annotation.ts
var annotation_exports = /* @__PURE__ */ __exportAll({
	addAnnotation: () => addAnnotation,
	annotationBatchImport: () => annotationBatchImport,
	checkAnnotationBatchImportProgress: () => checkAnnotationBatchImportProgress,
	clearAllAnnotations: () => clearAllAnnotations,
	delAnnotation: () => delAnnotation,
	delAnnotations: () => delAnnotations,
	editAnnotation: () => editAnnotation,
	fetchAnnotationConfig: () => fetchAnnotationConfig,
	fetchAnnotationList: () => fetchAnnotationList,
	fetchExportAnnotationList: () => fetchExportAnnotationList,
	fetchHitHistoryList: () => fetchHitHistoryList,
	queryAnnotationJobStatus: () => queryAnnotationJobStatus,
	updateAnnotationScore: () => updateAnnotationScore,
	updateAnnotationStatus: () => updateAnnotationStatus
});
var fetchAnnotationConfig = (appId) => {
	return get(`apps/${appId}/annotation-setting`);
};
var updateAnnotationStatus = (appId, action, embeddingModel, score) => {
	let body = { score_threshold: score || ANNOTATION_DEFAULT.score_threshold };
	if (embeddingModel) body = {
		...body,
		...embeddingModel
	};
	return post(`apps/${appId}/annotation-reply/${action}`, { body });
};
var updateAnnotationScore = (appId, settingId, score) => {
	return post(`apps/${appId}/annotation-settings/${settingId}`, { body: { score_threshold: score } });
};
var queryAnnotationJobStatus = (appId, action, jobId) => {
	return get(`apps/${appId}/annotation-reply/${action}/status/${jobId}`);
};
var fetchAnnotationList = (appId, params) => {
	return get(`apps/${appId}/annotations`, { params });
};
var fetchExportAnnotationList = (appId) => {
	return get(`apps/${appId}/annotations/export`);
};
var addAnnotation = (appId, body) => {
	return post(`apps/${appId}/annotations`, { body });
};
var annotationBatchImport = ({ url, body }) => {
	return post(url, { body }, {
		bodyStringify: false,
		deleteContentType: true
	});
};
var checkAnnotationBatchImportProgress = ({ jobID, appId }) => {
	return get(`/apps/${appId}/annotations/batch-import-status/${jobID}`);
};
var editAnnotation = (appId, annotationId, body) => {
	return post(`apps/${appId}/annotations/${annotationId}`, { body });
};
var delAnnotation = (appId, annotationId) => {
	return del(`apps/${appId}/annotations/${annotationId}`);
};
var delAnnotations = (appId, annotationIds) => {
	return del(`/apps/${appId}/annotations?${annotationIds.map((id) => `annotation_id=${id}`).join("&")}`);
};
var fetchHitHistoryList = (appId, annotationId, params) => {
	return get(`apps/${appId}/annotations/${annotationId}/hit-histories`, { params });
};
var clearAllAnnotations = (appId) => {
	return del(`apps/${appId}/annotations`);
};
//#endregion
export { clearAllAnnotations as a, editAnnotation as c, fetchExportAnnotationList as d, fetchHitHistoryList as f, updateAnnotationStatus as h, checkAnnotationBatchImportProgress as i, fetchAnnotationConfig as l, updateAnnotationScore as m, annotationBatchImport as n, delAnnotation as o, queryAnnotationJobStatus as p, annotation_exports as r, delAnnotations as s, addAnnotation as t, fetchAnnotationList as u };
