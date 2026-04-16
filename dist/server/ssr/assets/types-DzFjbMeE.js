//#region app/components/tools/types.ts
var AuthType = /* @__PURE__ */ function(AuthType) {
	AuthType["none"] = "none";
	AuthType["apiKey"] = "api_key";
	AuthType["apiKeyHeader"] = "api_key_header";
	AuthType["apiKeyQuery"] = "api_key_query";
	return AuthType;
}({});
var AuthHeaderPrefix = /* @__PURE__ */ function(AuthHeaderPrefix) {
	AuthHeaderPrefix["basic"] = "basic";
	AuthHeaderPrefix["bearer"] = "bearer";
	AuthHeaderPrefix["custom"] = "custom";
	return AuthHeaderPrefix;
}({});
var CollectionType = /* @__PURE__ */ function(CollectionType) {
	CollectionType["all"] = "all";
	CollectionType["builtIn"] = "builtin";
	CollectionType["custom"] = "api";
	CollectionType["model"] = "model";
	CollectionType["workflow"] = "workflow";
	CollectionType["mcp"] = "mcp";
	CollectionType["datasource"] = "datasource";
	CollectionType["trigger"] = "trigger";
	return CollectionType;
}({});
var MCPAuthMethod = /* @__PURE__ */ function(MCPAuthMethod) {
	MCPAuthMethod["authentication"] = "authentication";
	MCPAuthMethod["headers"] = "headers";
	MCPAuthMethod["configurations"] = "configurations";
	return MCPAuthMethod;
}({});
//#endregion
export { MCPAuthMethod as i, AuthType as n, CollectionType as r, AuthHeaderPrefix as t };
