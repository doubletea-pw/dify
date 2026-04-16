//#region app/components/header/account-setting/model-provider-page/declarations.ts
var FormTypeEnum = /* @__PURE__ */ function(FormTypeEnum) {
	FormTypeEnum["textInput"] = "text-input";
	FormTypeEnum["textNumber"] = "number-input";
	FormTypeEnum["secretInput"] = "secret-input";
	FormTypeEnum["select"] = "select";
	FormTypeEnum["radio"] = "radio";
	FormTypeEnum["checkbox"] = "checkbox";
	FormTypeEnum["boolean"] = "boolean";
	FormTypeEnum["files"] = "files";
	FormTypeEnum["file"] = "file";
	FormTypeEnum["modelSelector"] = "model-selector";
	FormTypeEnum["toolSelector"] = "tool-selector";
	FormTypeEnum["multiToolSelector"] = "array[tools]";
	FormTypeEnum["appSelector"] = "app-selector";
	FormTypeEnum["any"] = "any";
	FormTypeEnum["object"] = "object";
	FormTypeEnum["array"] = "array";
	FormTypeEnum["dynamicSelect"] = "dynamic-select";
	return FormTypeEnum;
}({});
var ModelTypeEnum = /* @__PURE__ */ function(ModelTypeEnum) {
	ModelTypeEnum["textGeneration"] = "llm";
	ModelTypeEnum["textEmbedding"] = "text-embedding";
	ModelTypeEnum["rerank"] = "rerank";
	ModelTypeEnum["speech2text"] = "speech2text";
	ModelTypeEnum["moderation"] = "moderation";
	ModelTypeEnum["tts"] = "tts";
	return ModelTypeEnum;
}({});
var MODEL_TYPE_TEXT = {
	[ModelTypeEnum.textGeneration]: "LLM",
	[ModelTypeEnum.textEmbedding]: "Text Embedding",
	[ModelTypeEnum.rerank]: "Rerank",
	[ModelTypeEnum.speech2text]: "Speech2text",
	[ModelTypeEnum.moderation]: "Moderation",
	[ModelTypeEnum.tts]: "TTS"
};
var ConfigurationMethodEnum = /* @__PURE__ */ function(ConfigurationMethodEnum) {
	ConfigurationMethodEnum["predefinedModel"] = "predefined-model";
	ConfigurationMethodEnum["customizableModel"] = "customizable-model";
	ConfigurationMethodEnum["fetchFromRemote"] = "fetch-from-remote";
	return ConfigurationMethodEnum;
}({});
var ModelFeatureEnum = /* @__PURE__ */ function(ModelFeatureEnum) {
	ModelFeatureEnum["toolCall"] = "tool-call";
	ModelFeatureEnum["multiToolCall"] = "multi-tool-call";
	ModelFeatureEnum["agentThought"] = "agent-thought";
	ModelFeatureEnum["streamToolCall"] = "stream-tool-call";
	ModelFeatureEnum["vision"] = "vision";
	ModelFeatureEnum["video"] = "video";
	ModelFeatureEnum["document"] = "document";
	ModelFeatureEnum["audio"] = "audio";
	ModelFeatureEnum["StructuredOutput"] = "structured-output";
	return ModelFeatureEnum;
}({});
var ModelFeatureTextEnum = /* @__PURE__ */ function(ModelFeatureTextEnum) {
	ModelFeatureTextEnum["toolCall"] = "Tool Call";
	ModelFeatureTextEnum["multiToolCall"] = "Multi Tool Call";
	ModelFeatureTextEnum["agentThought"] = "Agent Thought";
	ModelFeatureTextEnum["vision"] = "Vision";
	ModelFeatureTextEnum["video"] = "Video";
	ModelFeatureTextEnum["document"] = "Document";
	ModelFeatureTextEnum["audio"] = "Audio";
	return ModelFeatureTextEnum;
}({});
var ModelStatusEnum = /* @__PURE__ */ function(ModelStatusEnum) {
	ModelStatusEnum["active"] = "active";
	ModelStatusEnum["noConfigure"] = "no-configure";
	ModelStatusEnum["quotaExceeded"] = "quota-exceeded";
	ModelStatusEnum["noPermission"] = "no-permission";
	ModelStatusEnum["disabled"] = "disabled";
	ModelStatusEnum["credentialRemoved"] = "credential-removed";
	return ModelStatusEnum;
}({});
var CustomConfigurationStatusEnum = /* @__PURE__ */ function(CustomConfigurationStatusEnum) {
	CustomConfigurationStatusEnum["active"] = "active";
	CustomConfigurationStatusEnum["noConfigure"] = "no-configure";
	return CustomConfigurationStatusEnum;
}({});
var PreferredProviderTypeEnum = /* @__PURE__ */ function(PreferredProviderTypeEnum) {
	PreferredProviderTypeEnum["system"] = "system";
	PreferredProviderTypeEnum["custom"] = "custom";
	return PreferredProviderTypeEnum;
}({});
var CurrentSystemQuotaTypeEnum = /* @__PURE__ */ function(CurrentSystemQuotaTypeEnum) {
	CurrentSystemQuotaTypeEnum["trial"] = "trial";
	CurrentSystemQuotaTypeEnum["free"] = "free";
	CurrentSystemQuotaTypeEnum["paid"] = "paid";
	return CurrentSystemQuotaTypeEnum;
}({});
var ModelModalModeEnum = /* @__PURE__ */ function(ModelModalModeEnum) {
	ModelModalModeEnum["configProviderCredential"] = "config-provider-credential";
	ModelModalModeEnum["configCustomModel"] = "config-custom-model";
	ModelModalModeEnum["addCustomModelToModelList"] = "add-custom-model-to-model-list";
	ModelModalModeEnum["configModelCredential"] = "config-model-credential";
	return ModelModalModeEnum;
}({});
//#endregion
export { MODEL_TYPE_TEXT as a, ModelModalModeEnum as c, PreferredProviderTypeEnum as d, FormTypeEnum as i, ModelStatusEnum as l, CurrentSystemQuotaTypeEnum as n, ModelFeatureEnum as o, CustomConfigurationStatusEnum as r, ModelFeatureTextEnum as s, ConfigurationMethodEnum as t, ModelTypeEnum as u };
