import { t as createContext$1 } from "./dist-mUzjAi-W.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { n as useQuery, p as useQueryClient, t as useMutation } from "./useMutation-CRBpDOZ8.js";
import { n as consoleQuery, t as consoleClient } from "./client-CLQTU2Oi.js";
import { n as useGlobalPublicStore } from "./global-public-context-DpzzsplY.js";
import { a as useLocale } from "./i18n-lDm19WzR.js";
import { t as AccessMode } from "./access-control-DY4aAk1X.js";
import * as React$1 from "react";
//#region node_modules/.pnpm/@heroicons+react@2.2.0_react@19.2.4/node_modules/@heroicons/react/20/solid/esm/PlusIcon.js
function PlusIcon({ title, titleId, ...props }, svgRef) {
	return /* @__PURE__ */ React$1.createElement("svg", Object.assign({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		"aria-hidden": "true",
		"data-slot": "icon",
		ref: svgRef,
		"aria-labelledby": titleId
	}, props), title ? /* @__PURE__ */ React$1.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React$1.createElement("path", { d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" }));
}
var ForwardRef = /* @__PURE__ */ React$1.forwardRef(PlusIcon);
//#endregion
//#region service/explore.ts
var fetchAppList = (language) => {
	if (!language) return consoleClient.explore.apps({});
	return consoleClient.explore.apps({ query: { language } });
};
var fetchAppDetail = async (id) => {
	const response = await consoleClient.explore.appDetail({ params: { id } });
	if (!response) throw new Error("Recommended app not found");
	return response;
};
var fetchInstalledAppList = (appId) => {
	if (!appId) return consoleClient.explore.installedApps({});
	return consoleClient.explore.installedApps({ query: { app_id: appId } });
};
var uninstallApp = (id) => {
	return consoleClient.explore.uninstallInstalledApp({ params: { id } });
};
var updatePinStatus = (id, isPinned) => {
	return consoleClient.explore.updateInstalledApp({
		params: { id },
		body: { is_pinned: isPinned }
	});
};
var getAppAccessModeByAppId = (appId) => {
	return consoleClient.explore.appAccessMode({ query: { appId } });
};
var fetchInstalledAppParams = (appId) => {
	return consoleClient.explore.installedAppParameters({ params: { appId } });
};
var fetchInstalledAppMeta = (appId) => {
	return consoleClient.explore.installedAppMeta({ params: { appId } });
};
var fetchBanners = (language) => {
	if (!language) return consoleClient.explore.banners({});
	return consoleClient.explore.banners({ query: { language } });
};
//#endregion
//#region service/use-explore.ts
var useExploreAppList = () => {
	const locale = useLocale();
	const exploreAppsInput = locale ? { query: { language: locale } } : {};
	const exploreAppsLanguage = exploreAppsInput?.query?.language;
	return useQuery({
		queryKey: [...consoleQuery.explore.apps.queryKey({ input: exploreAppsInput }), exploreAppsLanguage],
		queryFn: async () => {
			const { categories, recommended_apps } = await fetchAppList(exploreAppsLanguage);
			return {
				categories,
				allList: [...recommended_apps].sort((a, b) => a.position - b.position)
			};
		}
	});
};
var useGetInstalledApps = () => {
	return useQuery({
		queryKey: consoleQuery.explore.installedApps.queryKey({ input: {} }),
		queryFn: () => {
			return fetchInstalledAppList();
		}
	});
};
var useUninstallApp = () => {
	const client = useQueryClient();
	return useMutation({
		mutationKey: consoleQuery.explore.uninstallInstalledApp.mutationKey(),
		mutationFn: (appId) => uninstallApp(appId),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: consoleQuery.explore.installedApps.queryKey({ input: {} }) });
		}
	});
};
var useUpdateAppPinStatus = () => {
	const client = useQueryClient();
	return useMutation({
		mutationKey: consoleQuery.explore.updateInstalledApp.mutationKey(),
		mutationFn: ({ appId, isPinned }) => updatePinStatus(appId, isPinned),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: consoleQuery.explore.installedApps.queryKey({ input: {} }) });
		}
	});
};
var useGetInstalledAppAccessModeByAppId = (appId) => {
	const systemFeatures = useGlobalPublicStore((s) => s.systemFeatures);
	const appAccessModeInput = { query: { appId: appId ?? "" } };
	const installedAppId = appAccessModeInput.query.appId;
	return useQuery({
		queryKey: [
			...consoleQuery.explore.appAccessMode.queryKey({ input: appAccessModeInput }),
			systemFeatures.webapp_auth.enabled,
			installedAppId
		],
		queryFn: () => {
			if (systemFeatures.webapp_auth.enabled === false) return { accessMode: AccessMode.PUBLIC };
			if (!installedAppId) return Promise.reject(/* @__PURE__ */ new Error("App ID is required to get access mode"));
			return getAppAccessModeByAppId(installedAppId);
		},
		enabled: !!installedAppId
	});
};
var useGetInstalledAppParams = (appId) => {
	const installedAppParamsInput = { params: { appId: appId ?? "" } };
	const installedAppId = installedAppParamsInput.params.appId;
	return useQuery({
		queryKey: [...consoleQuery.explore.installedAppParameters.queryKey({ input: installedAppParamsInput }), installedAppId],
		queryFn: () => {
			if (!installedAppId) return Promise.reject(/* @__PURE__ */ new Error("App ID is required to get app params"));
			return fetchInstalledAppParams(installedAppId);
		},
		enabled: !!installedAppId
	});
};
var useGetInstalledAppMeta = (appId) => {
	const installedAppMetaInput = { params: { appId: appId ?? "" } };
	const installedAppId = installedAppMetaInput.params.appId;
	return useQuery({
		queryKey: [...consoleQuery.explore.installedAppMeta.queryKey({ input: installedAppMetaInput }), installedAppId],
		queryFn: () => {
			if (!installedAppId) return Promise.reject(/* @__PURE__ */ new Error("App ID is required to get app meta"));
			return fetchInstalledAppMeta(installedAppId);
		},
		enabled: !!installedAppId
	});
};
var useGetBanners = (locale) => {
	const bannersInput = locale ? { query: { language: locale } } : {};
	const bannersLanguage = bannersInput?.query?.language;
	return useQuery({
		queryKey: [...consoleQuery.explore.banners.queryKey({ input: bannersInput }), bannersLanguage],
		queryFn: () => {
			return fetchBanners(bannersLanguage);
		}
	});
};
//#endregion
//#region context/app-list-context.ts
var AppListContext = createContext$1({
	isShowTryAppPanel: false,
	setShowTryAppPanel: noop,
	currentApp: void 0,
	controlHideCreateFromTemplatePanel: 0
});
//#endregion
export { useGetInstalledAppMeta as a, useUninstallApp as c, fetchInstalledAppList as d, ForwardRef as f, useGetInstalledAppAccessModeByAppId as i, useUpdateAppPinStatus as l, useExploreAppList as n, useGetInstalledAppParams as o, useGetBanners as r, useGetInstalledApps as s, AppListContext as t, fetchAppDetail as u };
