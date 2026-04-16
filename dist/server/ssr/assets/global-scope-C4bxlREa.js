//#region node_modules/.pnpm/@amplitude+analytics-core@2.43.0/node_modules/@amplitude/analytics-core/lib/esm/global-scope.js
var getGlobalScope = function() {
	var ampIntegrationContextName = "ampIntegrationContext";
	if (typeof globalThis !== "undefined" && typeof globalThis[ampIntegrationContextName] !== "undefined") return globalThis[ampIntegrationContextName];
	if (typeof globalThis !== "undefined") return globalThis;
	if (typeof window !== "undefined") return window;
	if (typeof self !== "undefined") return self;
	if (typeof global !== "undefined") return global;
};
//#endregion
export { getGlobalScope as t };
