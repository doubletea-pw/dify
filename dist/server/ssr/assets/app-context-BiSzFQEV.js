import { n as useContext, r as useContextSelector, t as createContext } from "./dist-mUzjAi-W.js";
import { t as noop } from "./noop--k6oqy4d.js";
//#region context/app-context.ts
var userProfilePlaceholder = {
	id: "",
	name: "",
	email: "",
	avatar: "",
	avatar_url: "",
	is_password_set: false
};
var initialLangGeniusVersionInfo = {
	current_env: "",
	current_version: "",
	latest_version: "",
	release_date: "",
	release_notes: "",
	version: "",
	can_auto_update: false
};
var initialWorkspaceInfo = {
	id: "",
	name: "",
	plan: "",
	status: "",
	created_at: 0,
	role: "normal",
	providers: [],
	trial_credits: 200,
	trial_credits_used: 0,
	next_credit_reset_date: 0
};
var AppContext = createContext({
	userProfile: userProfilePlaceholder,
	currentWorkspace: initialWorkspaceInfo,
	isCurrentWorkspaceManager: false,
	isCurrentWorkspaceOwner: false,
	isCurrentWorkspaceEditor: false,
	isCurrentWorkspaceDatasetOperator: false,
	mutateUserProfile: noop,
	mutateCurrentWorkspace: noop,
	langGeniusVersionInfo: initialLangGeniusVersionInfo,
	useSelector,
	isLoadingCurrentWorkspace: false,
	isValidatingCurrentWorkspace: false
});
function useSelector(selector) {
	return useContextSelector(AppContext, selector);
}
var useAppContext = () => useContext(AppContext);
//#endregion
export { useSelector as a, useAppContext as i, initialLangGeniusVersionInfo as n, userProfilePlaceholder as o, initialWorkspaceInfo as r, AppContext as t };
