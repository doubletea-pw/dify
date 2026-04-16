import { $ as getMaxVarNameLength, K as VAR_ITEM_TEMPLATE_IN_WORKFLOW, Lt as SupportUploadFileTypes, Nt as InputVarType, O as MARKETPLACE_URL_PREFIX, W as VAR_ITEM_TEMPLATE, ut as env } from "./config-Dopncj5R.js";
//#region app/components/base/prompt-editor/constants.tsx
var CONTEXT_PLACEHOLDER_TEXT = "{{#context#}}";
var HISTORY_PLACEHOLDER_TEXT = "{{#histories#}}";
var QUERY_PLACEHOLDER_TEXT = "{{#query#}}";
var REQUEST_URL_PLACEHOLDER_TEXT = "{{#url#}}";
var CURRENT_PLACEHOLDER_TEXT = "{{#current#}}";
var ERROR_MESSAGE_PLACEHOLDER_TEXT = "{{#error_message#}}";
var LAST_RUN_PLACEHOLDER_TEXT = "{{#last_run#}}";
var PRE_PROMPT_PLACEHOLDER_TEXT = "{{#pre_prompt#}}";
var UPDATE_DATASETS_EVENT_EMITTER = "prompt-editor-context-block-update-datasets";
var UPDATE_HISTORY_EVENT_EMITTER = "prompt-editor-history-block-update-role";
var checkHasContextBlock = (text) => {
	if (!text) return false;
	return text.includes(CONTEXT_PLACEHOLDER_TEXT);
};
var checkHasHistoryBlock = (text) => {
	if (!text) return false;
	return text.includes(HISTORY_PLACEHOLDER_TEXT);
};
var checkHasQueryBlock = (text) => {
	if (!text) return false;
	return text.includes(QUERY_PLACEHOLDER_TEXT);
};
var getInputVars = (text) => {
	if (!text || typeof text !== "string") return [];
	const allVars = text.match(/\{\{#([^#]*)#\}\}/g);
	if (allVars && allVars?.length > 0) return allVars.filter((item) => item.includes(".")).map((item) => {
		const valueSelector = item.replace("{{#", "").replace("#}}", "").split(".");
		if (valueSelector[1] === "sys" && /^\d+$/.test(valueSelector[0])) return valueSelector.slice(1);
		return valueSelector;
	});
	return [];
};
var FILE_EXTS = {
	[SupportUploadFileTypes.image]: [
		"JPG",
		"JPEG",
		"PNG",
		"GIF",
		"WEBP",
		"SVG"
	],
	[SupportUploadFileTypes.document]: [
		"TXT",
		"MD",
		"MDX",
		"MARKDOWN",
		"PDF",
		"HTML",
		"XLSX",
		"XLS",
		"DOC",
		"DOCX",
		"CSV",
		"EML",
		"MSG",
		"PPTX",
		"PPT",
		"XML",
		"EPUB"
	],
	[SupportUploadFileTypes.audio]: [
		"MP3",
		"M4A",
		"WAV",
		"AMR",
		"MPGA"
	],
	[SupportUploadFileTypes.video]: [
		"MP4",
		"MOV",
		"MPEG",
		"WEBM"
	]
};
//#endregion
//#region utils/var.ts
var otherAllowedRegex = /^\w+$/;
var getNewVar = (key, type) => {
	const { ...rest } = VAR_ITEM_TEMPLATE;
	if (type !== "string") return {
		...rest,
		type: type || "string",
		key,
		name: key.slice(0, getMaxVarNameLength(key))
	};
	return {
		...VAR_ITEM_TEMPLATE,
		type: type || "string",
		key,
		name: key.slice(0, getMaxVarNameLength(key))
	};
};
var getNewVarInWorkflow = (key, type = InputVarType.textInput) => {
	const { ...rest } = VAR_ITEM_TEMPLATE_IN_WORKFLOW;
	if (type !== InputVarType.textInput) return {
		...rest,
		type,
		variable: key,
		label: key.slice(0, getMaxVarNameLength(key))
	};
	return {
		...VAR_ITEM_TEMPLATE_IN_WORKFLOW,
		type,
		variable: key,
		label: key.slice(0, getMaxVarNameLength(key)),
		placeholder: "",
		default: "",
		hint: ""
	};
};
var checkKey = (key, canBeEmpty, _keys) => {
	if (key.length === 0 && !canBeEmpty) return "canNoBeEmpty";
	if (canBeEmpty && key === "") return true;
	if (key.length > 30) return "tooLong";
	if (otherAllowedRegex.test(key)) {
		if (/\d/.test(key[0])) return "notStartWithNumber";
		return true;
	}
	return "notValid";
};
var checkKeys = (keys, canBeEmpty) => {
	let isValid = true;
	let errorKey = "";
	let errorMessageKey = "";
	keys.forEach((key) => {
		if (!isValid) return;
		const res = checkKey(key, canBeEmpty);
		if (res !== true) {
			isValid = false;
			errorKey = key;
			errorMessageKey = res;
		}
	});
	return {
		isValid,
		errorKey,
		errorMessageKey
	};
};
var hasDuplicateStr = (strArr) => {
	const strObj = {};
	strArr.forEach((str) => {
		if (strObj[str]) strObj[str] += 1;
		else strObj[str] = 1;
	});
	return !!Object.keys(strObj).find((key) => strObj[key] > 1);
};
var varRegex = /\{\{([a-z_]\w*)\}\}/gi;
var getVars = (value) => {
	if (!value) return [];
	const keys = value.match(varRegex)?.filter((item) => {
		return ![
			"{{#context#}}",
			"{{#histories#}}",
			"{{#query#}}",
			"{{#pre_prompt#}}"
		].includes(item);
	}).map((item) => {
		return item.replace("{{", "").replace("}}", "");
	}).filter((key) => key.length <= 30) || [];
	const keyObj = {};
	const res = [];
	keys.forEach((key) => {
		if (keyObj[key]) return;
		keyObj[key] = true;
		res.push(key);
	});
	return res;
};
var basePath = env.NEXT_PUBLIC_BASE_PATH;
function getMarketplaceUrl(path, params) {
	const searchParams = new URLSearchParams({ source: encodeURIComponent(window.location.origin) });
	if (params) Object.keys(params).forEach((key) => {
		const value = params[key];
		if (value !== void 0 && value !== null) searchParams.append(key, value);
	});
	return `${MARKETPLACE_URL_PREFIX}${path}?${searchParams.toString()}`;
}
var replaceSpaceWithUnderscoreInVarNameInput = (input) => {
	const start = input.selectionStart;
	const end = input.selectionEnd;
	input.value = input.value.replaceAll(" ", "_");
	if (start !== null && end !== null) input.setSelectionRange(start, end);
};
//#endregion
export { getInputVars as C, checkHasQueryBlock as S, REQUEST_URL_PLACEHOLDER_TEXT as _, getNewVarInWorkflow as a, checkHasContextBlock as b, replaceSpaceWithUnderscoreInVarNameInput as c, ERROR_MESSAGE_PLACEHOLDER_TEXT as d, FILE_EXTS as f, QUERY_PLACEHOLDER_TEXT as g, PRE_PROMPT_PLACEHOLDER_TEXT as h, getNewVar as i, CONTEXT_PLACEHOLDER_TEXT as l, LAST_RUN_PLACEHOLDER_TEXT as m, checkKeys as n, getVars as o, HISTORY_PLACEHOLDER_TEXT as p, getMarketplaceUrl as r, hasDuplicateStr as s, basePath as t, CURRENT_PLACEHOLDER_TEXT as u, UPDATE_DATASETS_EVENT_EMITTER as v, checkHasHistoryBlock as x, UPDATE_HISTORY_EVENT_EMITTER as y };
