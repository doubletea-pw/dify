import { E as Dm, xt as P7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { r as useContextSelector, t as createContext$1 } from "./dist-mUzjAi-W.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { D as MARKETPLACE_API_PREFIX } from "./config-Dopncj5R.js";
import { t as noop } from "./noop--k6oqy4d.js";
import { a as useCheckInstalled, c as installed_default$1, d as pluginManifestInMarketToPluginProps, f as pluginManifestToCardPluginProps, h as Placeholder, i as isEqualOrLaterThanVersion, m as LoadingPlaceholder, o as version_default, p as card_default, s as useHideLogic } from "./semver-olnXAeJC.js";
import { i as useAppContext } from "./app-context-BiSzFQEV.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { n as useGlobalPublicStore, o as InstallationScope } from "./global-public-context-DpzzsplY.js";
import { t as Checkbox } from "./checkbox-DTSgkYdc.js";
import { n as BadgeState, t as Badge } from "./badge-DnA7gOK5.js";
import { E as usePluginTaskList, O as useUpdatePackageFromMarketPlace, j as useCanInstallPluginFromMarketplace, k as useUploadGitHub, l as useFetchPluginsInMarketPlaceByInfo, p as useInstallPackageFromMarketPlace, t as useRefreshPluginList, u as useInstallOrUpdate, x as usePluginDeclarationFromMarketPlace } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { s as Icon } from "./other-sSUV3aYW.js";
import { G as TaskStatus, z as InstallStep } from "./hooks-BTelimHS.js";
import { a as checkTaskStatus } from "./skeleton-Brd40zkS.js";
import { t as useGetIcon } from "./use-get-icon-D8ihnTYG.js";
import * as React$1 from "react";
import { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region context/mitt-context.ts
var MittContext = createContext$1({
	emit: noop,
	useSubscribe: noop
});
function useMittContextSelector(selector) {
	return useContextSelector(MittContext, selector);
}
//#endregion
//#region app/components/plugins/install-plugin/base/loading-error.tsx
var LoadingError = () => {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center space-x-2",
		children: [/* @__PURE__ */ jsx(Checkbox, {
			className: "shrink-0",
			checked: false,
			disabled: true
		}), /* @__PURE__ */ jsxs("div", {
			className: "hover-bg-components-panel-on-panel-item-bg relative grow rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-on-panel-item-bg p-4 pb-3 shadow-xs",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative flex h-10 w-10 items-center justify-center gap-2 rounded-[10px] border-[0.5px]\n              border-state-destructive-border bg-state-destructive-hover p-1 backdrop-blur-sm",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-5 w-5 items-center justify-center",
						children: /* @__PURE__ */ jsx(Icon, { className: "text-text-quaternary" })
					}), /* @__PURE__ */ jsx("div", {
						className: "absolute bottom-[-4px] right-[-4px] rounded-full border-[2px] border-components-panel-bg bg-state-destructive-solid",
						children: /* @__PURE__ */ jsx(P7, { className: "h-3 w-3 text-text-primary-on-surface" })
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "ml-3 grow",
					children: [/* @__PURE__ */ jsx("div", {
						className: "system-md-semibold flex h-5 items-center text-text-destructive",
						children: t("installModal.pluginLoadError", { ns: "plugin" })
					}), /* @__PURE__ */ jsx("div", {
						className: "system-xs-regular mt-0.5 text-text-tertiary",
						children: t("installModal.pluginLoadErrorDesc", { ns: "plugin" })
					})]
				})]
			}), /* @__PURE__ */ jsx(LoadingPlaceholder, { className: "mt-3 w-[420px]" })]
		})]
	});
};
var loading_error_default = React$1.memo(LoadingError);
//#endregion
//#region app/components/plugins/install-plugin/base/loading.tsx
var Loading = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center space-x-2",
		children: [/* @__PURE__ */ jsx(Checkbox, {
			className: "shrink-0",
			checked: false,
			disabled: true
		}), /* @__PURE__ */ jsx("div", {
			className: "hover-bg-components-panel-on-panel-item-bg relative grow rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-on-panel-item-bg p-4 pb-3 shadow-xs",
			children: /* @__PURE__ */ jsx(Placeholder, { wrapClassName: "w-full" })
		})]
	});
};
var loading_default = React$1.memo(Loading);
//#endregion
//#region app/components/plugins/install-plugin/hooks/use-install-plugin-limit.tsx
function pluginInstallLimit(plugin, systemFeatures) {
	if (systemFeatures.plugin_installation_permission.restrict_to_marketplace_only) {
		if (plugin.from === "github" || plugin.from === "package") return { canInstall: false };
	}
	if (systemFeatures.plugin_installation_permission.plugin_installation_scope === InstallationScope.ALL) return { canInstall: true };
	if (systemFeatures.plugin_installation_permission.plugin_installation_scope === InstallationScope.NONE) return { canInstall: false };
	const verification = plugin.verification || {};
	if (!plugin.verification || !plugin.verification.authorized_category) verification.authorized_category = "langgenius";
	if (systemFeatures.plugin_installation_permission.plugin_installation_scope === InstallationScope.OFFICIAL_ONLY) return { canInstall: verification.authorized_category === "langgenius" };
	if (systemFeatures.plugin_installation_permission.plugin_installation_scope === InstallationScope.OFFICIAL_AND_PARTNER) return { canInstall: verification.authorized_category === "langgenius" || verification.authorized_category === "partner" };
	return { canInstall: true };
}
function usePluginInstallLimit(plugin) {
	return pluginInstallLimit(plugin, useGlobalPublicStore((s) => s.systemFeatures));
}
//#endregion
//#region app/components/plugins/install-plugin/install-bundle/item/loaded-item.tsx
var LoadedItem = ({ checked, onCheckedChange, payload, isFromMarketPlace, versionInfo: particleVersionInfo }) => {
	const { getIconUrl } = useGetIcon();
	const versionInfo = {
		...particleVersionInfo,
		toInstallVersion: payload.version
	};
	const { canInstall } = usePluginInstallLimit(payload);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center space-x-2",
		children: [/* @__PURE__ */ jsx(Checkbox, {
			disabled: !canInstall,
			className: "shrink-0",
			checked,
			onCheck: () => onCheckedChange(payload)
		}), /* @__PURE__ */ jsx(card_default, {
			className: "grow",
			payload: {
				...payload,
				icon: isFromMarketPlace ? `${MARKETPLACE_API_PREFIX}/plugins/${payload.org}/${payload.name}/icon` : getIconUrl(payload.icon)
			},
			titleLeft: payload.version ? /* @__PURE__ */ jsx(version_default, { ...versionInfo }) : null,
			limitedInstall: !canInstall
		})]
	});
};
var loaded_item_default = React$1.memo(LoadedItem);
//#endregion
//#region app/components/plugins/install-plugin/install-bundle/item/github-item.tsx
var Item = ({ checked, onCheckedChange, dependency, versionInfo, onFetchedPayload, onFetchError }) => {
	const info = dependency.value;
	const { data, error } = useUploadGitHub({
		repo: info.repo,
		version: info.release || info.version,
		package: info.packages || info.package
	});
	const [payload, setPayload] = React$1.useState(null);
	useEffect(() => {
		if (data) {
			const payload = {
				...pluginManifestToCardPluginProps(data.manifest),
				plugin_id: data.unique_identifier
			};
			onFetchedPayload(payload);
			setPayload({
				...payload,
				from: dependency.type
			});
		}
	}, [data]);
	useEffect(() => {
		if (error) onFetchError();
	}, [error]);
	if (!payload) return /* @__PURE__ */ jsx(loading_default, {});
	return /* @__PURE__ */ jsx(loaded_item_default, {
		payload,
		versionInfo,
		checked,
		onCheckedChange
	});
};
var github_item_default = React$1.memo(Item);
//#endregion
//#region app/components/plugins/install-plugin/install-bundle/item/marketplace-item.tsx
var MarketPlaceItem = ({ checked, onCheckedChange, payload, version, versionInfo }) => {
	if (!payload) return /* @__PURE__ */ jsx(loading_default, {});
	return /* @__PURE__ */ jsx(loaded_item_default, {
		checked,
		onCheckedChange,
		payload: {
			...payload,
			version
		},
		isFromMarketPlace: true,
		versionInfo
	});
};
var marketplace_item_default = React$1.memo(MarketPlaceItem);
//#endregion
//#region app/components/plugins/install-plugin/install-bundle/item/package-item.tsx
var PackageItem = ({ payload, checked, onCheckedChange, isFromMarketPlace, versionInfo }) => {
	if (!payload.value?.manifest) return /* @__PURE__ */ jsx(loading_error_default, {});
	return /* @__PURE__ */ jsx(loaded_item_default, {
		payload: {
			...pluginManifestToCardPluginProps(payload.value.manifest),
			from: payload.type
		},
		checked,
		onCheckedChange,
		isFromMarketPlace,
		versionInfo
	});
};
var package_item_default = React$1.memo(PackageItem);
//#endregion
//#region app/components/plugins/install-plugin/install-bundle/steps/hooks/use-install-multi-state.ts
function getPluginKey(plugin) {
	return `${plugin?.org || plugin?.author}/${plugin?.name}`;
}
function parseMarketplaceIdentifier(identifier) {
	if (!identifier) return null;
	const [organization, nameAndVersionPart] = identifier.split("@")[0].split("/");
	if (!organization || !nameAndVersionPart) return null;
	const [plugin, version] = nameAndVersionPart.split(":");
	if (!plugin) return null;
	return {
		organization,
		plugin,
		version
	};
}
function getMarketplacePluginInfo(value) {
	const parsedInfo = parseMarketplaceIdentifier(value.marketplace_plugin_unique_identifier || value.plugin_unique_identifier);
	if (parsedInfo) return parsedInfo;
	if (!value.organization || !value.plugin) return null;
	return {
		organization: value.organization,
		plugin: value.plugin,
		version: value.version
	};
}
function initPluginsFromDependencies(allPlugins) {
	if (!allPlugins.some((d) => d.type === "package")) return [];
	return allPlugins.map((d) => {
		if (d.type !== "package") return void 0;
		const { manifest, unique_identifier } = d.value;
		return {
			...manifest,
			plugin_id: unique_identifier
		};
	});
}
function useInstallMultiState({ allPlugins, selectedPlugins, onSelect, onLoadedAllPlugin }) {
	const systemFeatures = useGlobalPublicStore((s) => s.systemFeatures);
	const marketplacePlugins = useMemo(() => allPlugins.filter((d) => d.type === "marketplace"), [allPlugins]);
	const marketPlaceInDSLIndex = useMemo(() => {
		return allPlugins.reduce((acc, d, index) => {
			if (d.type === "marketplace") acc.push(index);
			return acc;
		}, []);
	}, [allPlugins]);
	const { marketplaceRequests, invalidMarketplaceIndexes } = useMemo(() => {
		return marketplacePlugins.reduce((acc, dependency, marketplaceIndex) => {
			const dslIndex = marketPlaceInDSLIndex[marketplaceIndex];
			if (dslIndex === void 0) return acc;
			const marketplaceInfo = getMarketplacePluginInfo(dependency.value);
			if (!marketplaceInfo) acc.invalidMarketplaceIndexes.push(dslIndex);
			else acc.marketplaceRequests.push({
				dslIndex,
				dependency,
				info: marketplaceInfo
			});
			return acc;
		}, {
			marketplaceRequests: [],
			invalidMarketplaceIndexes: []
		});
	}, [marketPlaceInDSLIndex, marketplacePlugins]);
	const { isLoading: isFetchingById, data: infoGetById, error: infoByIdError } = useFetchPluginsInMarketPlaceByInfo(marketplaceRequests.map((request) => request.info));
	const { marketplacePluginMap, marketplaceErrorIndexes } = useMemo(() => {
		const pluginMap = /* @__PURE__ */ new Map();
		const errorSet = new Set(invalidMarketplaceIndexes);
		if (!isFetchingById && infoGetById?.data.list) {
			const payloads = infoGetById.data.list;
			const pluginById = new Map(payloads.map((item) => [item.plugin.plugin_id, item.plugin]));
			marketplaceRequests.forEach((request, requestIndex) => {
				const pluginId = (request.dependency.value.marketplace_plugin_unique_identifier || request.dependency.value.plugin_unique_identifier)?.split(":")[0];
				const pluginInfo = (pluginId ? pluginById.get(pluginId) : void 0) || payloads[requestIndex]?.plugin;
				if (pluginInfo) pluginMap.set(request.dslIndex, {
					...pluginInfo,
					from: request.dependency.type,
					version: pluginInfo.version || pluginInfo.latest_version
				});
				else errorSet.add(request.dslIndex);
			});
		}
		if (infoByIdError) marketPlaceInDSLIndex.forEach((index) => errorSet.add(index));
		return {
			marketplacePluginMap: pluginMap,
			marketplaceErrorIndexes: errorSet
		};
	}, [
		invalidMarketplaceIndexes,
		isFetchingById,
		infoGetById,
		infoByIdError,
		marketPlaceInDSLIndex,
		marketplaceRequests
	]);
	const [githubPluginMap, setGithubPluginMap] = useState(() => /* @__PURE__ */ new Map());
	const [githubErrorIndexes, setGithubErrorIndexes] = useState([]);
	const plugins = useMemo(() => {
		const initial = initPluginsFromDependencies(allPlugins);
		const result = allPlugins.map((_, i) => initial[i]);
		marketplacePluginMap.forEach((plugin, index) => {
			result[index] = plugin;
		});
		githubPluginMap.forEach((plugin, index) => {
			result[index] = plugin;
		});
		return result;
	}, [
		allPlugins,
		marketplacePluginMap,
		githubPluginMap
	]);
	const errorIndexes = useMemo(() => {
		return [...marketplaceErrorIndexes, ...githubErrorIndexes];
	}, [marketplaceErrorIndexes, githubErrorIndexes]);
	const isLoadedAllData = plugins.filter(Boolean).length + errorIndexes.length === allPlugins.length;
	const { installedInfo } = useCheckInstalled({
		pluginIds: plugins.filter(Boolean).map((d) => getPluginKey(d)) || [],
		enabled: isLoadedAllData
	});
	useEffect(() => {
		if (isLoadedAllData && installedInfo) onLoadedAllPlugin(installedInfo);
	}, [isLoadedAllData, installedInfo]);
	return {
		plugins,
		errorIndexes,
		handleGitHubPluginFetched: useCallback((index) => {
			return (p) => {
				setGithubPluginMap((prev) => new Map(prev).set(index, p));
			};
		}, []),
		handleGitHubPluginFetchError: useCallback((index) => {
			return () => {
				setGithubErrorIndexes((prev) => [...prev, index]);
			};
		}, []),
		getVersionInfo: useCallback((pluginId) => {
			const pluginDetail = installedInfo?.[pluginId];
			return {
				hasInstalled: !!pluginDetail,
				installedVersion: pluginDetail?.installedVersion,
				toInstallVersion: ""
			};
		}, [installedInfo]),
		handleSelect: useCallback((index) => {
			return () => {
				const canSelectPlugins = plugins.filter((p) => {
					const { canInstall } = pluginInstallLimit(p, systemFeatures);
					return canInstall;
				});
				onSelect(plugins[index], index, canSelectPlugins.length);
			};
		}, [
			onSelect,
			plugins,
			systemFeatures
		]),
		isPluginSelected: useCallback((index) => {
			return !!selectedPlugins.find((p) => p.plugin_id === plugins[index]?.plugin_id);
		}, [selectedPlugins, plugins]),
		getInstallablePlugins: useCallback(() => {
			const selectedIndexes = [];
			const installablePlugins = [];
			allPlugins.forEach((_d, index) => {
				const p = plugins[index];
				if (!p) return;
				const { canInstall } = pluginInstallLimit(p, systemFeatures);
				if (canInstall) {
					selectedIndexes.push(index);
					installablePlugins.push(p);
				}
			});
			return {
				selectedIndexes,
				installablePlugins
			};
		}, [
			allPlugins,
			plugins,
			systemFeatures
		])
	};
}
//#endregion
//#region app/components/plugins/install-plugin/install-bundle/steps/install-multi.tsx
var InstallByDSLList = ({ allPlugins, selectedPlugins, onSelect, onSelectAll, onDeSelectAll, onLoadedAllPlugin, isFromMarketPlace, ref }) => {
	const { plugins, errorIndexes, handleGitHubPluginFetched, handleGitHubPluginFetchError, getVersionInfo, handleSelect, isPluginSelected, getInstallablePlugins } = useInstallMultiState({
		allPlugins,
		selectedPlugins,
		onSelect,
		onLoadedAllPlugin
	});
	useImperativeHandle(ref, () => ({
		selectAllPlugins: () => {
			const { installablePlugins, selectedIndexes } = getInstallablePlugins();
			onSelectAll(installablePlugins, selectedIndexes);
		},
		deSelectAllPlugins: onDeSelectAll
	}));
	return /* @__PURE__ */ jsx(Fragment$1, { children: allPlugins.map((d, index) => {
		if (errorIndexes.includes(index)) return /* @__PURE__ */ jsx(loading_error_default, {}, index);
		const plugin = plugins[index];
		const checked = isPluginSelected(index);
		const versionInfo = getVersionInfo(getPluginKey(plugin));
		if (d.type === "github") return /* @__PURE__ */ jsx(github_item_default, {
			checked,
			onCheckedChange: handleSelect(index),
			dependency: d,
			onFetchedPayload: handleGitHubPluginFetched(index),
			onFetchError: handleGitHubPluginFetchError(index),
			versionInfo
		}, index);
		if (d.type === "marketplace") return /* @__PURE__ */ jsx(marketplace_item_default, {
			checked,
			onCheckedChange: handleSelect(index),
			payload: {
				...plugin,
				from: d.type
			},
			version: d.value.version || plugin?.version || "",
			versionInfo
		}, index);
		return /* @__PURE__ */ jsx(package_item_default, {
			checked,
			onCheckedChange: handleSelect(index),
			payload: d,
			isFromMarketPlace,
			versionInfo
		}, index);
	}) });
};
//#endregion
//#region app/components/plugins/install-plugin/install-bundle/steps/install.tsx
var i18nPrefix$2 = "installModal";
var Install = ({ allPlugins, onStartToInstall, onInstalled, onCancel, isFromMarketPlace, isHideButton }) => {
	const { t } = useTranslation();
	const emit = useMittContextSelector((s) => s.emit);
	const [selectedPlugins, setSelectedPlugins] = React$1.useState([]);
	const [selectedIndexes, setSelectedIndexes] = React$1.useState([]);
	const selectedPluginsNum = selectedPlugins.length;
	const installMultiRef = useRef(null);
	const { refreshPluginList } = useRefreshPluginList();
	const [isSelectAll, setIsSelectAll] = useState(false);
	const handleClickSelectAll = useCallback(() => {
		if (isSelectAll) installMultiRef.current?.deSelectAllPlugins();
		else installMultiRef.current?.selectAllPlugins();
	}, [isSelectAll]);
	const [canInstall, setCanInstall] = React$1.useState(false);
	const [installedInfo, setInstalledInfo] = useState(void 0);
	const handleLoadedAllPlugin = useCallback((installedInfo) => {
		handleClickSelectAll();
		setInstalledInfo(installedInfo);
		setCanInstall(true);
	}, []);
	const { check, stop } = checkTaskStatus();
	const handleCancel = useCallback(() => {
		stop();
		onCancel();
	}, [onCancel, stop]);
	const { handleRefetch } = usePluginTaskList();
	const { mutate: installOrUpdate, isPending: isInstalling } = useInstallOrUpdate({ onSuccess: async (res) => {
		if (res.every((r) => r.status === TaskStatus.success || r.status === TaskStatus.failed)) {
			onInstalled(selectedPlugins, res.map((r, i) => {
				return {
					success: r.status === TaskStatus.success,
					isFromMarketPlace: allPlugins[selectedIndexes[i]].type === "marketplace"
				};
			}));
			if (res.some((r) => r.status === TaskStatus.success)) {
				refreshPluginList(void 0, true);
				emit("plugin:install:success", selectedPlugins.map((p) => {
					return `${p.plugin_id}/${p.name}`;
				}));
			}
			return;
		}
		handleRefetch();
		const installStatus = await Promise.all(res.map(async (item, index) => {
			if (item.status !== TaskStatus.running) return {
				success: item.status === TaskStatus.success,
				isFromMarketPlace: allPlugins[selectedIndexes[index]].type === "marketplace"
			};
			const { status } = await check({
				taskId: item.taskId,
				pluginUniqueIdentifier: item.uniqueIdentifier
			});
			return {
				success: status === TaskStatus.success,
				isFromMarketPlace: allPlugins[selectedIndexes[index]].type === "marketplace"
			};
		}));
		onInstalled(selectedPlugins, installStatus);
		if (installStatus.some((r) => r.success)) emit("plugin:install:success", selectedPlugins.map((p) => {
			return `${p.plugin_id}/${p.name}`;
		}));
	} });
	const handleInstall = () => {
		onStartToInstall?.();
		installOrUpdate({
			payload: allPlugins.filter((_d, index) => selectedIndexes.includes(index)),
			plugin: selectedPlugins,
			installedInfo
		});
	};
	const [isIndeterminate, setIsIndeterminate] = useState(false);
	const handleSelectAll = useCallback((plugins, selectedIndexes) => {
		setSelectedPlugins(plugins);
		setSelectedIndexes(selectedIndexes);
		setIsSelectAll(true);
		setIsIndeterminate(false);
	}, []);
	const handleDeSelectAll = useCallback(() => {
		setSelectedPlugins([]);
		setSelectedIndexes([]);
		setIsSelectAll(false);
		setIsIndeterminate(false);
	}, []);
	const handleSelect = useCallback((plugin, selectedIndex, allPluginsLength) => {
		const isSelected = !!selectedPlugins.find((p) => p.plugin_id === plugin.plugin_id);
		let nextSelectedPlugins;
		if (isSelected) nextSelectedPlugins = selectedPlugins.filter((p) => p.plugin_id !== plugin.plugin_id);
		else nextSelectedPlugins = [...selectedPlugins, plugin];
		setSelectedPlugins(nextSelectedPlugins);
		setSelectedIndexes(isSelected ? selectedIndexes.filter((i) => i !== selectedIndex) : [...selectedIndexes, selectedIndex]);
		if (nextSelectedPlugins.length === 0) {
			setIsSelectAll(false);
			setIsIndeterminate(false);
		} else if (nextSelectedPlugins.length === allPluginsLength) {
			setIsSelectAll(true);
			setIsIndeterminate(false);
		} else {
			setIsIndeterminate(true);
			setIsSelectAll(false);
		}
	}, [selectedPlugins, selectedIndexes]);
	const { canInstallPluginFromMarketplace } = useCanInstallPluginFromMarketplace();
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-start justify-center gap-4 self-stretch px-6 py-3",
		children: [/* @__PURE__ */ jsx("div", {
			className: "system-md-regular text-text-secondary",
			children: /* @__PURE__ */ jsx("p", { children: t(`${i18nPrefix$2}.${selectedPluginsNum > 1 ? "readyToInstallPackages" : "readyToInstallPackage"}`, {
				ns: "plugin",
				num: selectedPluginsNum
			}) })
		}), /* @__PURE__ */ jsx("div", {
			className: "w-full space-y-1 rounded-2xl bg-background-section-burn p-2",
			children: /* @__PURE__ */ jsx(InstallByDSLList, {
				ref: installMultiRef,
				allPlugins,
				selectedPlugins,
				onSelect: handleSelect,
				onSelectAll: handleSelectAll,
				onDeSelectAll: handleDeSelectAll,
				onLoadedAllPlugin: handleLoadedAllPlugin,
				isFromMarketPlace
			})
		})]
	}), !isHideButton && /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between gap-2 self-stretch p-6 pt-5",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-2",
			children: canInstall && /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-x-2",
				onClick: handleClickSelectAll,
				children: [/* @__PURE__ */ jsx(Checkbox, {
					checked: isSelectAll,
					indeterminate: isIndeterminate
				}), /* @__PURE__ */ jsx("p", {
					className: "system-sm-medium cursor-pointer text-text-secondary",
					children: isSelectAll ? t("operation.deSelectAll", { ns: "common" }) : t("operation.selectAll", { ns: "common" })
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-end gap-2 self-stretch",
			children: [!canInstall && /* @__PURE__ */ jsx(Button, {
				variant: "secondary",
				className: "min-w-[72px]",
				onClick: handleCancel,
				children: t("operation.cancel", { ns: "common" })
			}), /* @__PURE__ */ jsxs(Button, {
				variant: "primary",
				className: "flex min-w-[72px] space-x-0.5",
				disabled: !canInstall || isInstalling || selectedPlugins.length === 0 || !canInstallPluginFromMarketplace,
				onClick: handleInstall,
				children: [isInstalling && /* @__PURE__ */ jsx(Dm, { className: "h-4 w-4 animate-spin-slow" }), /* @__PURE__ */ jsx("span", { children: t(`${i18nPrefix$2}.${isInstalling ? "installing" : "install"}`, { ns: "plugin" }) })]
			})]
		})]
	})] });
};
var install_default$1 = React$1.memo(Install);
//#endregion
//#region app/components/plugins/install-plugin/install-bundle/steps/installed.tsx
var Installed$1 = ({ list, installStatus, onCancel, isHideButton }) => {
	const { t } = useTranslation();
	const { getIconUrl } = useGetIcon();
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
		className: "flex flex-col items-start justify-center gap-4 self-stretch px-6 py-3",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex flex-wrap content-start items-start gap-1 space-y-1 self-stretch rounded-2xl bg-background-section-burn p-2",
			children: list.map((plugin, index) => {
				return /* @__PURE__ */ jsx(card_default, {
					className: "w-full",
					payload: {
						...plugin,
						icon: installStatus[index].isFromMarketPlace ? `${MARKETPLACE_API_PREFIX}/plugins/${plugin.org}/${plugin.name}/icon` : getIconUrl(plugin.icon)
					},
					installed: installStatus[index].success,
					installFailed: !installStatus[index].success,
					titleLeft: plugin.version ? /* @__PURE__ */ jsx(Badge, {
						className: "mx-1",
						size: "s",
						state: BadgeState.Default,
						children: plugin.version
					}) : null
				}, plugin.plugin_id);
			})
		})
	}), !isHideButton && /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-end gap-2 self-stretch p-6 pt-5",
		children: /* @__PURE__ */ jsx(Button, {
			variant: "primary",
			className: "min-w-[72px]",
			onClick: onCancel,
			children: t("operation.close", { ns: "common" })
		})
	})] });
};
var installed_default = React$1.memo(Installed$1);
//#endregion
//#region app/components/plugins/install-plugin/install-bundle/ready-to-install.tsx
var ReadyToInstall = ({ step, onStepChange, onStartToInstall, setIsInstalling, allPlugins, onClose, isFromMarketPlace }) => {
	const [installedPlugins, setInstalledPlugins] = useState([]);
	const [installStatus, setInstallStatus] = useState([]);
	const handleInstalled = useCallback((plugins, installStatus) => {
		setInstallStatus(installStatus);
		setInstalledPlugins(plugins);
		onStepChange(InstallStep.installed);
		setIsInstalling(false);
	}, [onStepChange, setIsInstalling]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [step === InstallStep.readyToInstall && /* @__PURE__ */ jsx(install_default$1, {
		allPlugins,
		onCancel: onClose,
		onStartToInstall,
		onInstalled: handleInstalled,
		isFromMarketPlace
	}), step === InstallStep.installed && /* @__PURE__ */ jsx(installed_default, {
		list: installedPlugins,
		installStatus,
		onCancel: onClose
	})] });
};
var ready_to_install_default = React$1.memo(ReadyToInstall);
//#endregion
//#region app/components/plugins/install-plugin/install-from-marketplace/steps/install.tsx
var i18nPrefix$1 = "installModal";
var Installed = ({ uniqueIdentifier, payload, onCancel, onStartToInstall, onInstalled, onFailed }) => {
	const { t } = useTranslation();
	const toInstallVersion = payload.version || payload.latest_version;
	const pluginId = payload.plugin_id;
	const { installedInfo, isLoading } = useCheckInstalled({
		pluginIds: [pluginId],
		enabled: !!pluginId
	});
	const installedInfoPayload = installedInfo?.[pluginId];
	const installedVersion = installedInfoPayload?.installedVersion;
	const hasInstalled = !!installedVersion;
	const { mutateAsync: installPackageFromMarketPlace } = useInstallPackageFromMarketPlace();
	const { mutateAsync: updatePackageFromMarketPlace } = useUpdatePackageFromMarketPlace();
	const [isInstalling, setIsInstalling] = React$1.useState(false);
	const { check, stop } = checkTaskStatus();
	const { handleRefetch } = usePluginTaskList(payload.category);
	useEffect(() => {
		if (hasInstalled && uniqueIdentifier === installedInfoPayload.uniqueIdentifier) onInstalled();
	}, [hasInstalled]);
	const handleCancel = () => {
		stop();
		onCancel();
	};
	const handleInstall = async () => {
		if (isInstalling) return;
		onStartToInstall?.();
		setIsInstalling(true);
		try {
			let taskId;
			let isInstalled;
			if (hasInstalled) {
				const { all_installed, task_id } = await updatePackageFromMarketPlace({
					original_plugin_unique_identifier: installedInfoPayload.uniqueIdentifier,
					new_plugin_unique_identifier: uniqueIdentifier
				});
				taskId = task_id;
				isInstalled = all_installed;
			} else {
				const { all_installed, task_id } = await installPackageFromMarketPlace(uniqueIdentifier);
				taskId = task_id;
				isInstalled = all_installed;
			}
			if (isInstalled) {
				onInstalled();
				return;
			}
			handleRefetch();
			const { status, error } = await check({
				taskId,
				pluginUniqueIdentifier: uniqueIdentifier
			});
			if (status === TaskStatus.failed) {
				onFailed(error);
				return;
			}
			onInstalled(true);
		} catch (e) {
			if (typeof e === "string") {
				onFailed(e);
				return;
			}
			onFailed();
		}
	};
	const { langGeniusVersionInfo } = useAppContext();
	const { data: pluginDeclaration } = usePluginDeclarationFromMarketPlace(uniqueIdentifier);
	const isDifyVersionCompatible = useMemo(() => {
		if (!pluginDeclaration || !langGeniusVersionInfo.current_version) return true;
		return isEqualOrLaterThanVersion(langGeniusVersionInfo.current_version, pluginDeclaration?.manifest.meta.minimum_dify_version ?? "0.0.0");
	}, [langGeniusVersionInfo.current_version, pluginDeclaration]);
	const { canInstall } = usePluginInstallLimit({
		...payload,
		from: "marketplace"
	});
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-start justify-center gap-4 self-stretch px-6 py-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "text-text-secondary system-md-regular",
			children: [/* @__PURE__ */ jsx("p", { children: t(`${i18nPrefix$1}.readyToInstall`, { ns: "plugin" }) }), !isDifyVersionCompatible && /* @__PURE__ */ jsx("p", {
				className: "text-text-warning system-md-regular",
				children: t("difyVersionNotCompatible", {
					ns: "plugin",
					minimalDifyVersion: pluginDeclaration?.manifest.meta.minimum_dify_version
				})
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex flex-wrap content-start items-start gap-1 self-stretch rounded-2xl bg-background-section-burn p-2",
			children: /* @__PURE__ */ jsx(card_default, {
				className: "w-full",
				payload: pluginManifestInMarketToPluginProps(payload),
				titleLeft: !isLoading && /* @__PURE__ */ jsx(version_default, {
					hasInstalled,
					installedVersion,
					toInstallVersion
				}),
				limitedInstall: !canInstall
			})
		})]
	}), /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-end gap-2 self-stretch p-6 pt-5",
		children: [!isInstalling && /* @__PURE__ */ jsx(Button, {
			variant: "secondary",
			className: "min-w-[72px]",
			onClick: handleCancel,
			children: t("operation.cancel", { ns: "common" })
		}), /* @__PURE__ */ jsxs(Button, {
			variant: "primary",
			className: "flex min-w-[72px] space-x-0.5",
			disabled: isInstalling || isLoading || !canInstall,
			onClick: handleInstall,
			children: [isInstalling && /* @__PURE__ */ jsx(Dm, { className: "h-4 w-4 animate-spin-slow" }), /* @__PURE__ */ jsx("span", { children: t(`${i18nPrefix$1}.${isInstalling ? "installing" : "install"}`, { ns: "plugin" }) })]
		})]
	})] });
};
var install_default = React$1.memo(Installed);
//#endregion
//#region app/components/plugins/install-plugin/install-from-marketplace/index.tsx
var i18nPrefix = "installModal";
var InstallFromMarketplace = ({ uniqueIdentifier, manifest, isBundle, dependencies, onSuccess, onClose }) => {
	const { t } = useTranslation();
	const [step, setStep] = useState(InstallStep.readyToInstall);
	const [errorMsg, setErrorMsg] = useState(null);
	const { refreshPluginList } = useRefreshPluginList();
	const { modalClassName, foldAnimInto, setIsInstalling, handleStartToInstall } = useHideLogic(onClose);
	const getTitle = useCallback(() => {
		if (isBundle && step === InstallStep.installed) return t(`${i18nPrefix}.installComplete`, { ns: "plugin" });
		if (step === InstallStep.installed) return t(`${i18nPrefix}.installedSuccessfully`, { ns: "plugin" });
		if (step === InstallStep.installFailed) return t(`${i18nPrefix}.installFailed`, { ns: "plugin" });
		return t(`${i18nPrefix}.installPlugin`, { ns: "plugin" });
	}, [
		isBundle,
		step,
		t
	]);
	const handleInstalled = useCallback((notRefresh) => {
		setStep(InstallStep.installed);
		if (!notRefresh) refreshPluginList(manifest);
		setIsInstalling(false);
	}, [
		manifest,
		refreshPluginList,
		setIsInstalling
	]);
	const handleFailed = useCallback((errorMsg) => {
		setStep(InstallStep.installFailed);
		setIsInstalling(false);
		if (errorMsg) setErrorMsg(errorMsg);
	}, [setIsInstalling]);
	return /* @__PURE__ */ jsxs(Modal, {
		isShow: true,
		onClose: foldAnimInto,
		wrapperClassName: "z-[9999]",
		className: cn(modalClassName, "shadows-shadow-xl flex min-w-[560px] flex-col items-start rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg p-0"),
		closable: true,
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex items-start gap-2 self-stretch pb-3 pl-6 pr-14 pt-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "title-2xl-semi-bold self-stretch text-text-primary",
				children: getTitle()
			})
		}), isBundle ? /* @__PURE__ */ jsx(ready_to_install_default, {
			step,
			onStepChange: setStep,
			onStartToInstall: handleStartToInstall,
			setIsInstalling,
			onClose,
			allPlugins: dependencies,
			isFromMarketPlace: true
		}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [step === InstallStep.readyToInstall && /* @__PURE__ */ jsx(install_default, {
			uniqueIdentifier,
			payload: manifest,
			onCancel: onClose,
			onInstalled: handleInstalled,
			onFailed: handleFailed,
			onStartToInstall: handleStartToInstall
		}), [InstallStep.installed, InstallStep.installFailed].includes(step) && /* @__PURE__ */ jsx(installed_default$1, {
			payload: manifest,
			isMarketPayload: true,
			isFailed: step === InstallStep.installFailed,
			errMsg: errorMsg,
			onCancel: onSuccess
		})] })]
	});
};
//#endregion
export { useMittContextSelector as i, ready_to_install_default as n, MittContext as r, InstallFromMarketplace as t };
