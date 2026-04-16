import { r as AppModeEnum } from "./app-DPjSIfgb.js";
//#region utils/app-redirection.ts
var getRedirectionPath = (isCurrentWorkspaceEditor, app) => {
	if (!isCurrentWorkspaceEditor) return `/app/${app.id}/overview`;
	else if (app.mode === AppModeEnum.WORKFLOW || app.mode === AppModeEnum.ADVANCED_CHAT) return `/app/${app.id}/workflow`;
	else return `/app/${app.id}/configuration`;
};
var getRedirection = (isCurrentWorkspaceEditor, app, redirectionFunc) => {
	redirectionFunc(getRedirectionPath(isCurrentWorkspaceEditor, app));
};
//#endregion
export { getRedirectionPath as n, getRedirection as t };
