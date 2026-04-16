import { p as useQueryClient } from "./useMutation-CRBpDOZ8.js";
import { useCallback } from "react";
//#region service/use-base.ts
/**
* @deprecated Convenience wrapper scheduled for removal.
* Prefer binding invalidation in `useMutation` callbacks at the service layer.
*/
var useInvalid = (key) => {
	const queryClient = useQueryClient();
	return useCallback(() => {
		if (!key) return;
		queryClient.invalidateQueries({ queryKey: key });
	}, [queryClient, key]);
};
/**
* @deprecated Convenience wrapper scheduled for removal.
* Prefer binding reset in `useMutation` callbacks at the service layer.
*/
var useReset = (key) => {
	const queryClient = useQueryClient();
	return useCallback(() => {
		if (!key) return;
		queryClient.resetQueries({ queryKey: key });
	}, [queryClient, key]);
};
//#endregion
export { useReset as n, useInvalid as t };
