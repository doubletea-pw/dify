//#region types/app.ts
var Theme = /* @__PURE__ */ function(Theme) {
	Theme["light"] = "light";
	Theme["dark"] = "dark";
	Theme["system"] = "system";
	return Theme;
}({});
var ModelModeType = /* @__PURE__ */ function(ModelModeType) {
	ModelModeType["chat"] = "chat";
	ModelModeType["completion"] = "completion";
	ModelModeType["unset"] = "";
	return ModelModeType;
}({});
var RETRIEVE_TYPE = /* @__PURE__ */ function(RETRIEVE_TYPE) {
	RETRIEVE_TYPE["oneWay"] = "single";
	RETRIEVE_TYPE["multiWay"] = "multiple";
	return RETRIEVE_TYPE;
}({});
var RETRIEVE_METHOD = /* @__PURE__ */ function(RETRIEVE_METHOD) {
	RETRIEVE_METHOD["semantic"] = "semantic_search";
	RETRIEVE_METHOD["fullText"] = "full_text_search";
	RETRIEVE_METHOD["hybrid"] = "hybrid_search";
	RETRIEVE_METHOD["invertedIndex"] = "invertedIndex";
	RETRIEVE_METHOD["keywordSearch"] = "keyword_search";
	return RETRIEVE_METHOD;
}({});
/**
* App modes
*/
var AppModeEnum = /* @__PURE__ */ function(AppModeEnum) {
	AppModeEnum["COMPLETION"] = "completion";
	AppModeEnum["WORKFLOW"] = "workflow";
	AppModeEnum["CHAT"] = "chat";
	AppModeEnum["ADVANCED_CHAT"] = "advanced-chat";
	AppModeEnum["AGENT_CHAT"] = "agent-chat";
	return AppModeEnum;
}({});
var AppModes = [
	AppModeEnum.COMPLETION,
	AppModeEnum.WORKFLOW,
	AppModeEnum.CHAT,
	AppModeEnum.ADVANCED_CHAT,
	AppModeEnum.AGENT_CHAT
];
var AgentStrategy = /* @__PURE__ */ function(AgentStrategy) {
	AgentStrategy["functionCall"] = "function_call";
	AgentStrategy["react"] = "react";
	return AgentStrategy;
}({});
var Resolution = /* @__PURE__ */ function(Resolution) {
	Resolution["low"] = "low";
	Resolution["high"] = "high";
	return Resolution;
}({});
var TransferMethod = /* @__PURE__ */ function(TransferMethod) {
	TransferMethod["all"] = "all";
	TransferMethod["local_file"] = "local_file";
	TransferMethod["remote_url"] = "remote_url";
	return TransferMethod;
}({});
var TtsAutoPlay = /* @__PURE__ */ function(TtsAutoPlay) {
	TtsAutoPlay["enabled"] = "enabled";
	TtsAutoPlay["disabled"] = "disabled";
	return TtsAutoPlay;
}({});
var ALLOW_FILE_EXTENSIONS = [
	"png",
	"jpg",
	"jpeg",
	"webp",
	"gif"
];
//#endregion
export { ModelModeType as a, Resolution as c, TtsAutoPlay as d, AppModes as i, Theme as l, AgentStrategy as n, RETRIEVE_METHOD as o, AppModeEnum as r, RETRIEVE_TYPE as s, ALLOW_FILE_EXTENSIONS as t, TransferMethod as u };
