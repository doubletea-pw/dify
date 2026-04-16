import { t as create } from "./react-CHKO_ryu.js";
import { Q as useCheckPipelineDependencies, y as useMutationCheckDependencies } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { useCallback } from "react";
//#region app/components/workflow/plugin-dependency/store.ts
var useStore = create((set) => ({
	dependencies: [],
	setDependencies: (dependencies) => set({ dependencies })
}));
//#endregion
//#region app/components/workflow/plugin-dependency/hooks.ts
var usePluginDependencies = () => {
	const { mutateAsync: checkWorkflowDependencies } = useMutationCheckDependencies();
	const { mutateAsync: checkPipelineDependencies } = useCheckPipelineDependencies();
	return { handleCheckPluginDependencies: useCallback(async (id, isPipeline = false) => {
		const { leaked_dependencies } = await (isPipeline ? checkPipelineDependencies : checkWorkflowDependencies)(id);
		const { setDependencies } = useStore.getState();
		setDependencies(leaked_dependencies);
	}, [checkWorkflowDependencies, checkPipelineDependencies]) };
};
//#endregion
//#region models/app.ts
var DSLImportMode = /* @__PURE__ */ function(DSLImportMode) {
	DSLImportMode["YAML_CONTENT"] = "yaml-content";
	DSLImportMode["YAML_URL"] = "yaml-url";
	return DSLImportMode;
}({});
var DSLImportStatus = /* @__PURE__ */ function(DSLImportStatus) {
	DSLImportStatus["COMPLETED"] = "completed";
	DSLImportStatus["COMPLETED_WITH_WARNINGS"] = "completed-with-warnings";
	DSLImportStatus["PENDING"] = "pending";
	DSLImportStatus["FAILED"] = "failed";
	return DSLImportStatus;
}({});
//#endregion
export { useStore as i, DSLImportStatus as n, usePluginDependencies as r, DSLImportMode as t };
