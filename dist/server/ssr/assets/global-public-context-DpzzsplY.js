import { t as create } from "./react-CHKO_ryu.js";
import { t as Loading } from "./loading-BryKikzY.js";
import { n as useQuery } from "./useMutation-CRBpDOZ8.js";
import { t as consoleClient } from "./client-CLQTU2Oi.js";
import { _ as fetchSetupStatus } from "./common-qRxT6xi0.js";
import { Fragment, jsx } from "react/jsx-runtime";
//#region types/feature.ts
var SSOProtocol = /* @__PURE__ */ function(SSOProtocol) {
	SSOProtocol["SAML"] = "saml";
	SSOProtocol["OIDC"] = "oidc";
	SSOProtocol["OAuth2"] = "oauth2";
	return SSOProtocol;
}({});
var LicenseStatus = /* @__PURE__ */ function(LicenseStatus) {
	LicenseStatus["NONE"] = "none";
	LicenseStatus["INACTIVE"] = "inactive";
	LicenseStatus["ACTIVE"] = "active";
	LicenseStatus["EXPIRING"] = "expiring";
	LicenseStatus["EXPIRED"] = "expired";
	LicenseStatus["LOST"] = "lost";
	return LicenseStatus;
}({});
var InstallationScope = /* @__PURE__ */ function(InstallationScope) {
	InstallationScope["ALL"] = "all";
	InstallationScope["NONE"] = "none";
	InstallationScope["OFFICIAL_ONLY"] = "official_only";
	InstallationScope["OFFICIAL_AND_PARTNER"] = "official_and_specific_partners";
	return InstallationScope;
}({});
var defaultSystemFeatures = {
	trial_models: [],
	plugin_installation_permission: {
		plugin_installation_scope: InstallationScope.ALL,
		restrict_to_marketplace_only: false
	},
	sso_enforced_for_signin: false,
	sso_enforced_for_signin_protocol: "",
	sso_enforced_for_web: false,
	sso_enforced_for_web_protocol: "",
	enable_marketplace: false,
	enable_change_email: false,
	enable_email_code_login: false,
	enable_email_password_login: false,
	enable_social_oauth_login: false,
	is_allow_create_workspace: false,
	is_allow_register: false,
	is_email_setup: false,
	license: {
		status: LicenseStatus.NONE,
		expired_at: ""
	},
	branding: {
		enabled: false,
		login_page_logo: "",
		workspace_logo: "",
		favicon: "",
		application_title: "test title"
	},
	webapp_auth: {
		enabled: false,
		allow_sso: false,
		sso_config: { protocol: "" },
		allow_email_code_login: false,
		allow_email_password_login: false
	},
	enable_trial_app: false,
	enable_explore_banner: false
};
//#endregion
//#region utils/setup-status.ts
var SETUP_STATUS_KEY = "setup_status";
var isSetupStatusCached = () => localStorage.getItem(SETUP_STATUS_KEY) === "finished";
var fetchSetupStatusWithCache = async () => {
	if (isSetupStatusCached()) return { step: "finished" };
	const status = await fetchSetupStatus();
	if (status.step === "finished") localStorage.setItem(SETUP_STATUS_KEY, "finished");
	else localStorage.removeItem(SETUP_STATUS_KEY);
	return status;
};
//#endregion
//#region context/global-public-context.tsx
var useGlobalPublicStore = create((set) => ({
	systemFeatures: defaultSystemFeatures,
	setSystemFeatures: (systemFeatures) => set(() => ({ systemFeatures }))
}));
var systemFeaturesQueryKey = ["systemFeatures"];
var setupStatusQueryKey = ["setupStatus"];
async function fetchSystemFeatures() {
	const data = await consoleClient.systemFeatures();
	const { setSystemFeatures } = useGlobalPublicStore.getState();
	setSystemFeatures({
		...defaultSystemFeatures,
		...data
	});
	return data;
}
function useSystemFeaturesQuery() {
	return useQuery({
		queryKey: systemFeaturesQueryKey,
		queryFn: fetchSystemFeatures
	});
}
function useIsSystemFeaturesPending() {
	const { isPending } = useSystemFeaturesQuery();
	return isPending;
}
function useSetupStatusQuery() {
	return useQuery({
		queryKey: setupStatusQueryKey,
		queryFn: fetchSetupStatusWithCache,
		staleTime: Infinity
	});
}
var GlobalPublicStoreProvider = ({ children }) => {
	const { isPending } = useSystemFeaturesQuery();
	useSetupStatusQuery();
	if (isPending) return /* @__PURE__ */ jsx("div", {
		className: "flex h-screen w-screen items-center justify-center",
		children: /* @__PURE__ */ jsx(Loading, {})
	});
	return /* @__PURE__ */ jsx(Fragment, { children });
};
//#endregion
export { fetchSetupStatusWithCache as a, SSOProtocol as c, useSystemFeaturesQuery as i, useGlobalPublicStore as n, InstallationScope as o, useIsSystemFeaturesPending as r, LicenseStatus as s, GlobalPublicStoreProvider as t };
