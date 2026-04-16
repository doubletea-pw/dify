import { a as API_PREFIX } from "./config-Dopncj5R.js";
import { a as useSelector } from "./app-context-BiSzFQEV.js";
import { useCallback } from "react";
//#region app/components/plugins/install-plugin/base/use-get-icon.ts
var useGetIcon = () => {
	const currentWorkspace = useSelector((s) => s.currentWorkspace);
	return { getIconUrl: useCallback((fileName) => {
		return `${API_PREFIX}/workspaces/current/plugin/icon?tenant_id=${currentWorkspace.id}&filename=${fileName}`;
	}, [currentWorkspace.id]) };
};
//#endregion
export { useGetIcon as t };
