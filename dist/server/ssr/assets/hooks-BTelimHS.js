import { l as ModelStatusEnum, r as CustomConfigurationStatusEnum } from "./declarations-DYMEe7hD.js";
import { D as MARKETPLACE_API_PREFIX } from "./config-Dopncj5R.js";
import { u as postMarketplace } from "./base-BuKAg6Le.js";
import { r as getMarketplaceUrl } from "./var-DPpHtpXT.js";
import { n as useQuery, p as useQueryClient } from "./useMutation-CRBpDOZ8.js";
import { t as useInfiniteQuery } from "./useInfiniteQuery-CNgDC6bG.js";
import { n as consoleQuery, r as marketplaceClient } from "./client-CLQTU2Oi.js";
import { f as fetchDefaultModal, h as fetchModelList } from "./common-qRxT6xi0.js";
import { a as useLocale } from "./i18n-lDm19WzR.js";
import { t as useDebounceFn } from "./useDebounceFn-Y4NS6c4S.js";
import { r as useModalContextSelector } from "./modal-context-CphlqvPm.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import { t as commonQueryKeys } from "./use-common-BJ1aZaXJ.js";
import React, { createContext, createElement, useCallback, useContext, useDebugValue, useEffect, useMemo, useReducer, useRef, useState } from "react";
//#region app/components/plugins/types.ts
var PluginCategoryEnum = /* @__PURE__ */ function(PluginCategoryEnum) {
	PluginCategoryEnum["tool"] = "tool";
	PluginCategoryEnum["model"] = "model";
	PluginCategoryEnum["extension"] = "extension";
	PluginCategoryEnum["agent"] = "agent-strategy";
	PluginCategoryEnum["datasource"] = "datasource";
	PluginCategoryEnum["trigger"] = "trigger";
	return PluginCategoryEnum;
}({});
var PluginSource = /* @__PURE__ */ function(PluginSource) {
	PluginSource["marketplace"] = "marketplace";
	PluginSource["github"] = "github";
	PluginSource["local"] = "package";
	PluginSource["debugging"] = "remote";
	return PluginSource;
}({});
var SupportedCreationMethods = /* @__PURE__ */ function(SupportedCreationMethods) {
	SupportedCreationMethods["OAUTH"] = "OAUTH";
	SupportedCreationMethods["APIKEY"] = "APIKEY";
	SupportedCreationMethods["MANUAL"] = "MANUAL";
	return SupportedCreationMethods;
}({});
var PermissionType = /* @__PURE__ */ function(PermissionType) {
	PermissionType["everyone"] = "everyone";
	PermissionType["admin"] = "admins";
	PermissionType["noOne"] = "noone";
	return PermissionType;
}({});
var InstallStepFromGitHub = /* @__PURE__ */ function(InstallStepFromGitHub) {
	InstallStepFromGitHub["setUrl"] = "url";
	InstallStepFromGitHub["selectPackage"] = "selecting";
	InstallStepFromGitHub["readyToInstall"] = "readyToInstall";
	InstallStepFromGitHub["uploadFailed"] = "uploadFailed";
	InstallStepFromGitHub["installed"] = "installed";
	InstallStepFromGitHub["installFailed"] = "failed";
	return InstallStepFromGitHub;
}({});
var InstallStep = /* @__PURE__ */ function(InstallStep) {
	InstallStep["uploading"] = "uploading";
	InstallStep["uploadFailed"] = "uploadFailed";
	InstallStep["readyToInstall"] = "readyToInstall";
	InstallStep["installing"] = "installing";
	InstallStep["installed"] = "installed";
	InstallStep["installFailed"] = "failed";
	return InstallStep;
}({});
var TaskStatus = /* @__PURE__ */ function(TaskStatus) {
	TaskStatus["running"] = "running";
	TaskStatus["success"] = "success";
	TaskStatus["failed"] = "failed";
	return TaskStatus;
}({});
//#endregion
//#region app/components/plugins/marketplace/constants.ts
var DEFAULT_SORT = {
	sortBy: "install_count",
	sortOrder: "DESC"
};
var PLUGIN_TYPE_SEARCH_MAP = {
	all: "all",
	model: PluginCategoryEnum.model,
	tool: PluginCategoryEnum.tool,
	agent: PluginCategoryEnum.agent,
	extension: PluginCategoryEnum.extension,
	datasource: PluginCategoryEnum.datasource,
	trigger: PluginCategoryEnum.trigger,
	bundle: "bundle"
};
var PLUGIN_CATEGORY_WITH_COLLECTIONS = new Set([PLUGIN_TYPE_SEARCH_MAP.all, PLUGIN_TYPE_SEARCH_MAP.tool]);
//#endregion
//#region app/components/plugins/marketplace/utils.ts
var getPluginIconInMarketplace = (plugin) => {
	if (plugin.type === "bundle") return `${MARKETPLACE_API_PREFIX}/bundles/${plugin.org}/${plugin.name}/icon`;
	return `${MARKETPLACE_API_PREFIX}/plugins/${plugin.org}/${plugin.name}/icon`;
};
var getFormattedPlugin = (bundle) => {
	if (bundle.type === "bundle") return {
		...bundle,
		icon: getPluginIconInMarketplace(bundle),
		brief: bundle.description,
		label: bundle.labels
	};
	return {
		...bundle,
		icon: getPluginIconInMarketplace(bundle)
	};
};
var getPluginLinkInMarketplace = (plugin, params) => {
	if (plugin.type === "bundle") return getMarketplaceUrl(`/bundles/${plugin.org}/${plugin.name}`, params);
	return getMarketplaceUrl(`/plugins/${plugin.org}/${plugin.name}`, params);
};
var getPluginDetailLinkInMarketplace = (plugin) => {
	if (plugin.type === "bundle") return `/bundles/${plugin.org}/${plugin.name}`;
	return `/plugins/${plugin.org}/${plugin.name}`;
};
var getMarketplacePluginsByCollectionId = async (collectionId, query, options) => {
	let plugins = [];
	try {
		plugins = ((await marketplaceClient.collectionPlugins({
			params: { collectionId },
			body: query ?? {}
		}, { signal: options?.signal })).data?.plugins || []).map((plugin) => getFormattedPlugin(plugin));
	} catch (e) {
		plugins = [];
	}
	return plugins;
};
var getMarketplaceCollectionsAndPlugins = async (query, options) => {
	let marketplaceCollections = [];
	let marketplaceCollectionPluginsMap = {};
	try {
		marketplaceCollections = (await marketplaceClient.collections({ query: {
			...query,
			page: 1,
			page_size: 100
		} }, { signal: options?.signal })).data?.collections || [];
		await Promise.all(marketplaceCollections.map(async (collection) => {
			const plugins = await getMarketplacePluginsByCollectionId(collection.name, query, options);
			marketplaceCollectionPluginsMap[collection.name] = plugins;
		}));
	} catch (e) {
		marketplaceCollections = [];
		marketplaceCollectionPluginsMap = {};
	}
	return {
		marketplaceCollections,
		marketplaceCollectionPluginsMap
	};
};
var getMarketplacePlugins = async (queryParams, pageParam, signal) => {
	if (!queryParams) return {
		plugins: [],
		total: 0,
		page: 1,
		page_size: 40
	};
	const { query, sort_by, sort_order, category, tags, type, page_size = 40 } = queryParams;
	try {
		const res = await marketplaceClient.searchAdvanced({
			params: { kind: type === "bundle" ? "bundles" : "plugins" },
			body: {
				page: pageParam,
				page_size,
				query,
				sort_by,
				sort_order,
				category: category !== "all" ? category : "",
				tags
			}
		}, { signal });
		return {
			plugins: (res.data.bundles || res.data.plugins || []).map((plugin) => getFormattedPlugin(plugin)),
			total: res.data.total,
			page: pageParam,
			page_size
		};
	} catch {
		return {
			plugins: [],
			total: 0,
			page: pageParam,
			page_size
		};
	}
};
var getMarketplaceListCondition = (pluginType) => {
	if ([
		PluginCategoryEnum.tool,
		PluginCategoryEnum.agent,
		PluginCategoryEnum.model,
		PluginCategoryEnum.datasource,
		PluginCategoryEnum.trigger
	].includes(pluginType)) return `category=${pluginType}`;
	if (pluginType === PluginCategoryEnum.extension) return "category=endpoint";
	if (pluginType === "bundle") return "type=bundle";
	return "";
};
var getMarketplaceListFilterType = (category) => {
	if (category === PLUGIN_TYPE_SEARCH_MAP.all) return void 0;
	if (category === PLUGIN_TYPE_SEARCH_MAP.bundle) return "bundle";
	return "plugin";
};
function getCollectionsParams(category) {
	if (category === PLUGIN_TYPE_SEARCH_MAP.all) return {};
	return {
		category,
		condition: getMarketplaceListCondition(category),
		type: getMarketplaceListFilterType(category)
	};
}
//#endregion
//#region app/components/plugins/marketplace/hooks.ts
/**
* @deprecated Use useMarketplaceCollectionsAndPlugins from query.ts instead
*/
var useMarketplaceCollectionsAndPlugins = () => {
	const [queryParams, setQueryParams] = useState();
	const [marketplaceCollectionsOverride, setMarketplaceCollections] = useState();
	const [marketplaceCollectionPluginsMapOverride, setMarketplaceCollectionPluginsMap] = useState();
	const { data, isFetching, isSuccess, isPending } = useQuery({
		queryKey: ["marketplaceCollectionsAndPlugins", queryParams],
		queryFn: ({ signal }) => getMarketplaceCollectionsAndPlugins(queryParams, { signal }),
		enabled: queryParams !== void 0,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 10,
		retry: false
	});
	const queryMarketplaceCollectionsAndPlugins = useCallback((query) => {
		setQueryParams(query ? { ...query } : {});
	}, []);
	const isLoading = !!queryParams && (isFetching || isPending);
	return {
		marketplaceCollections: marketplaceCollectionsOverride ?? data?.marketplaceCollections,
		setMarketplaceCollections,
		marketplaceCollectionPluginsMap: marketplaceCollectionPluginsMapOverride ?? data?.marketplaceCollectionPluginsMap,
		setMarketplaceCollectionPluginsMap,
		queryMarketplaceCollectionsAndPlugins,
		isLoading,
		isSuccess
	};
};
var useMarketplacePluginsByCollectionId = (collectionId, query) => {
	const { data, isFetching, isSuccess, isPending } = useQuery({
		queryKey: [
			"marketplaceCollectionPlugins",
			collectionId,
			query
		],
		queryFn: ({ signal }) => {
			if (!collectionId) return Promise.resolve([]);
			return getMarketplacePluginsByCollectionId(collectionId, query, { signal });
		},
		enabled: !!collectionId,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 10,
		retry: false
	});
	return {
		plugins: data || [],
		isLoading: !!collectionId && (isFetching || isPending),
		isSuccess
	};
};
/**
* @deprecated Use useMarketplacePlugins from query.ts instead
*/
var useMarketplacePlugins = () => {
	const queryClient = useQueryClient();
	const [queryParams, setQueryParams] = useState();
	const normalizeParams = useCallback((pluginsSearchParams) => {
		const page_size = pluginsSearchParams.page_size || 40;
		return {
			...pluginsSearchParams,
			page_size
		};
	}, []);
	const marketplacePluginsQuery = useInfiniteQuery({
		queryKey: ["marketplacePlugins", queryParams],
		queryFn: async ({ pageParam = 1, signal }) => {
			if (!queryParams) return {
				plugins: [],
				total: 0,
				page: 1,
				page_size: 40
			};
			const { query, sort_by, sort_order, category, tags, exclude, type, page_size } = normalizeParams(queryParams);
			const pluginOrBundle = type === "bundle" ? "bundles" : "plugins";
			try {
				const res = await postMarketplace(`/${pluginOrBundle}/search/advanced`, {
					body: {
						page: pageParam,
						page_size,
						query,
						sort_by,
						sort_order,
						category: category !== "all" ? category : "",
						tags,
						exclude,
						type
					},
					signal
				});
				return {
					plugins: (res.data.bundles || res.data.plugins || []).map((plugin) => getFormattedPlugin(plugin)),
					total: res.data.total,
					page: pageParam,
					page_size
				};
			} catch {
				return {
					plugins: [],
					total: 0,
					page: pageParam,
					page_size
				};
			}
		},
		getNextPageParam: (lastPage) => {
			const nextPage = lastPage.page + 1;
			return lastPage.page * lastPage.page_size < (lastPage.total || 0) ? nextPage : void 0;
		},
		initialPageParam: 1,
		enabled: !!queryParams,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 10,
		retry: false
	});
	const resetPlugins = useCallback(() => {
		setQueryParams(void 0);
		queryClient.removeQueries({ queryKey: ["marketplacePlugins"] });
	}, [queryClient]);
	const handleUpdatePlugins = useCallback((pluginsSearchParams) => {
		setQueryParams(normalizeParams(pluginsSearchParams));
	}, [normalizeParams]);
	const { run: queryPluginsWithDebounced, cancel: cancelQueryPluginsWithDebounced } = useDebounceFn((pluginsSearchParams) => {
		handleUpdatePlugins(pluginsSearchParams);
	}, { wait: 500 });
	const hasQuery = !!queryParams;
	const hasData = marketplacePluginsQuery.data !== void 0;
	return {
		plugins: hasQuery && hasData ? marketplacePluginsQuery.data.pages.flatMap((page) => page.plugins) : void 0,
		total: hasQuery && hasData ? marketplacePluginsQuery.data.pages?.[0]?.total : void 0,
		resetPlugins,
		queryPlugins: handleUpdatePlugins,
		queryPluginsWithDebounced,
		cancelQueryPluginsWithDebounced,
		isLoading: hasQuery && (marketplacePluginsQuery.isPending || marketplacePluginsQuery.isFetching && !marketplacePluginsQuery.data),
		isFetchingNextPage: marketplacePluginsQuery.isFetchingNextPage,
		hasNextPage: marketplacePluginsQuery.hasNextPage,
		fetchNextPage: marketplacePluginsQuery.fetchNextPage,
		page: marketplacePluginsQuery.data?.pages?.length || (marketplacePluginsQuery.isPending && hasQuery ? 1 : 0)
	};
};
var useMarketplaceContainerScroll = (callback, scrollContainerId = "marketplace-container") => {
	const handleScroll = useCallback((e) => {
		const { scrollTop, scrollHeight, clientHeight } = e.target;
		if (scrollTop + clientHeight >= scrollHeight - 100 && scrollTop > 0) callback();
	}, [callback]);
	useEffect(() => {
		const container = document.getElementById(scrollContainerId);
		if (container) container.addEventListener("scroll", handleScroll);
		return () => {
			if (container) container.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);
};
//#endregion
//#region node_modules/.pnpm/jotai@2.18.1_@babel+core@7.29.0_@babel+template@7.28.6_@types+react@19.2.14_react@19.2.4/node_modules/jotai/esm/vanilla/internals.mjs
function hasInitialValue(atom) {
	return "init" in atom;
}
function isActuallyWritableAtom(atom) {
	return !!atom.write;
}
function isAtomStateInitialized(atomState) {
	return "v" in atomState || "e" in atomState;
}
function returnAtomValue(atomState) {
	if ("e" in atomState) throw atomState.e;
	return atomState.v;
}
function isPromiseLike$1(p) {
	return typeof (p == null ? void 0 : p.then) === "function";
}
function addPendingPromiseToDependency(atom, promise, dependencyAtomState) {
	if (!dependencyAtomState.p.has(atom)) {
		dependencyAtomState.p.add(atom);
		const cleanup = () => dependencyAtomState.p.delete(atom);
		promise.then(cleanup, cleanup);
	}
}
function getMountedOrPendingDependents(atom, atomState, mountedMap) {
	var _a;
	const dependents = /* @__PURE__ */ new Set();
	for (const a of ((_a = mountedMap.get(atom)) == null ? void 0 : _a.t) || []) dependents.add(a);
	for (const atomWithPendingPromise of atomState.p) dependents.add(atomWithPendingPromise);
	return dependents;
}
var BUILDING_BLOCK_atomRead = (_store, atom, ...params) => atom.read(...params);
var BUILDING_BLOCK_atomWrite = (_store, atom, ...params) => atom.write(...params);
var BUILDING_BLOCK_atomOnInit = (store, atom) => {
	var _a;
	return (_a = atom.INTERNAL_onInit) == null ? void 0 : _a.call(atom, store);
};
var BUILDING_BLOCK_atomOnMount = (_store, atom, setAtom) => {
	var _a;
	return (_a = atom.onMount) == null ? void 0 : _a.call(atom, setAtom);
};
var BUILDING_BLOCK_ensureAtomState = (store, atom) => {
	var _a;
	const buildingBlocks = getInternalBuildingBlocks(store);
	const atomStateMap = buildingBlocks[0];
	const storeHooks = buildingBlocks[6];
	const atomOnInit = buildingBlocks[9];
	let atomState = atomStateMap.get(atom);
	if (!atomState) {
		atomState = {
			d: /* @__PURE__ */ new Map(),
			p: /* @__PURE__ */ new Set(),
			n: 0
		};
		atomStateMap.set(atom, atomState);
		(_a = storeHooks.i) == null || _a.call(storeHooks, atom);
		atomOnInit?.(store, atom);
	}
	return atomState;
};
var BUILDING_BLOCK_flushCallbacks = (store) => {
	const buildingBlocks = getInternalBuildingBlocks(store);
	const mountedMap = buildingBlocks[1];
	const changedAtoms = buildingBlocks[3];
	const mountCallbacks = buildingBlocks[4];
	const unmountCallbacks = buildingBlocks[5];
	const storeHooks = buildingBlocks[6];
	const recomputeInvalidatedAtoms = buildingBlocks[13];
	const errors = [];
	const call = (fn) => {
		try {
			fn();
		} catch (e) {
			errors.push(e);
		}
	};
	do {
		if (storeHooks.f) call(storeHooks.f);
		const callbacks = /* @__PURE__ */ new Set();
		const add = callbacks.add.bind(callbacks);
		changedAtoms.forEach((atom) => {
			var _a;
			return (_a = mountedMap.get(atom)) == null ? void 0 : _a.l.forEach(add);
		});
		changedAtoms.clear();
		unmountCallbacks.forEach(add);
		unmountCallbacks.clear();
		mountCallbacks.forEach(add);
		mountCallbacks.clear();
		callbacks.forEach(call);
		if (changedAtoms.size) recomputeInvalidatedAtoms(store);
	} while (changedAtoms.size || unmountCallbacks.size || mountCallbacks.size);
	if (errors.length) throw new AggregateError(errors);
};
var BUILDING_BLOCK_recomputeInvalidatedAtoms = (store) => {
	const buildingBlocks = getInternalBuildingBlocks(store);
	const mountedMap = buildingBlocks[1];
	const invalidatedAtoms = buildingBlocks[2];
	const changedAtoms = buildingBlocks[3];
	const ensureAtomState = buildingBlocks[11];
	const readAtomState = buildingBlocks[14];
	const mountDependencies = buildingBlocks[17];
	const topSortedReversed = [];
	const visiting = /* @__PURE__ */ new WeakSet();
	const visited = /* @__PURE__ */ new WeakSet();
	const stack = Array.from(changedAtoms);
	while (stack.length) {
		const a = stack[stack.length - 1];
		const aState = ensureAtomState(store, a);
		if (visited.has(a)) {
			stack.pop();
			continue;
		}
		if (visiting.has(a)) {
			if (invalidatedAtoms.get(a) === aState.n) topSortedReversed.push([a, aState]);
			visited.add(a);
			stack.pop();
			continue;
		}
		visiting.add(a);
		for (const d of getMountedOrPendingDependents(a, aState, mountedMap)) if (!visiting.has(d)) stack.push(d);
	}
	for (let i = topSortedReversed.length - 1; i >= 0; --i) {
		const [a, aState] = topSortedReversed[i];
		let hasChangedDeps = false;
		for (const dep of aState.d.keys()) if (dep !== a && changedAtoms.has(dep)) {
			hasChangedDeps = true;
			break;
		}
		if (hasChangedDeps) {
			invalidatedAtoms.set(a, aState.n);
			readAtomState(store, a);
			mountDependencies(store, a);
		}
		invalidatedAtoms.delete(a);
	}
};
var BUILDING_BLOCK_readAtomState = (store, atom) => {
	var _a, _b;
	const buildingBlocks = getInternalBuildingBlocks(store);
	const mountedMap = buildingBlocks[1];
	const invalidatedAtoms = buildingBlocks[2];
	const changedAtoms = buildingBlocks[3];
	const storeHooks = buildingBlocks[6];
	const atomRead = buildingBlocks[7];
	const ensureAtomState = buildingBlocks[11];
	const flushCallbacks = buildingBlocks[12];
	const recomputeInvalidatedAtoms = buildingBlocks[13];
	const readAtomState = buildingBlocks[14];
	const writeAtomState = buildingBlocks[16];
	const mountDependencies = buildingBlocks[17];
	const setAtomStateValueOrPromise = buildingBlocks[20];
	const registerAbortHandler = buildingBlocks[26];
	const atomState = ensureAtomState(store, atom);
	if (isAtomStateInitialized(atomState)) {
		if (mountedMap.has(atom) && invalidatedAtoms.get(atom) !== atomState.n) return atomState;
		let hasChangedDeps = false;
		for (const [a, n] of atomState.d) if (readAtomState(store, a).n !== n) {
			hasChangedDeps = true;
			break;
		}
		if (!hasChangedDeps) return atomState;
	}
	let isSync = true;
	const prevDeps = new Set(atomState.d.keys());
	const nextDeps = /* @__PURE__ */ new Map();
	const pruneDependencies = () => {
		for (const a of prevDeps) if (!nextDeps.has(a)) atomState.d.delete(a);
	};
	const mountDependenciesIfAsync = () => {
		if (mountedMap.has(atom)) {
			const shouldRecompute = !changedAtoms.size;
			mountDependencies(store, atom);
			if (shouldRecompute) {
				recomputeInvalidatedAtoms(store);
				flushCallbacks(store);
			}
		}
	};
	const getter = (a) => {
		var _a2;
		if (a === atom) {
			const aState2 = ensureAtomState(store, a);
			if (!isAtomStateInitialized(aState2)) if (hasInitialValue(a)) setAtomStateValueOrPromise(store, a, a.init);
			else throw new Error("no atom init");
			return returnAtomValue(aState2);
		}
		const aState = readAtomState(store, a);
		try {
			return returnAtomValue(aState);
		} finally {
			nextDeps.set(a, aState.n);
			atomState.d.set(a, aState.n);
			if (isPromiseLike$1(atomState.v)) addPendingPromiseToDependency(atom, atomState.v, aState);
			if (mountedMap.has(atom)) (_a2 = mountedMap.get(a)) == null || _a2.t.add(atom);
			if (!isSync) mountDependenciesIfAsync();
		}
	};
	let controller;
	let setSelf;
	const options = {
		get signal() {
			if (!controller) controller = new AbortController();
			return controller.signal;
		},
		get setSelf() {
			if (!setSelf && isActuallyWritableAtom(atom)) setSelf = (...args) => {
				if (!isSync) try {
					return writeAtomState(store, atom, ...args);
				} finally {
					recomputeInvalidatedAtoms(store);
					flushCallbacks(store);
				}
			};
			return setSelf;
		}
	};
	const prevEpochNumber = atomState.n;
	const prevInvalidated = invalidatedAtoms.get(atom) === prevEpochNumber;
	try {
		const valueOrPromise = atomRead(store, atom, getter, options);
		setAtomStateValueOrPromise(store, atom, valueOrPromise);
		if (isPromiseLike$1(valueOrPromise)) {
			registerAbortHandler(store, valueOrPromise, () => controller == null ? void 0 : controller.abort());
			const settle = () => {
				pruneDependencies();
				mountDependenciesIfAsync();
			};
			valueOrPromise.then(settle, settle);
		} else pruneDependencies();
		(_a = storeHooks.r) == null || _a.call(storeHooks, atom);
		return atomState;
	} catch (error) {
		delete atomState.v;
		atomState.e = error;
		++atomState.n;
		return atomState;
	} finally {
		isSync = false;
		if (atomState.n !== prevEpochNumber && prevInvalidated) {
			invalidatedAtoms.set(atom, atomState.n);
			changedAtoms.add(atom);
			(_b = storeHooks.c) == null || _b.call(storeHooks, atom);
		}
	}
};
var BUILDING_BLOCK_invalidateDependents = (store, atom) => {
	const buildingBlocks = getInternalBuildingBlocks(store);
	const mountedMap = buildingBlocks[1];
	const invalidatedAtoms = buildingBlocks[2];
	const ensureAtomState = buildingBlocks[11];
	const stack = [atom];
	while (stack.length) {
		const a = stack.pop();
		const aState = ensureAtomState(store, a);
		for (const d of getMountedOrPendingDependents(a, aState, mountedMap)) {
			const dState = ensureAtomState(store, d);
			if (invalidatedAtoms.get(d) !== dState.n) {
				invalidatedAtoms.set(d, dState.n);
				stack.push(d);
			}
		}
	}
};
var BUILDING_BLOCK_writeAtomState = (store, atom, ...args) => {
	const buildingBlocks = getInternalBuildingBlocks(store);
	const changedAtoms = buildingBlocks[3];
	const storeHooks = buildingBlocks[6];
	const atomWrite = buildingBlocks[8];
	const ensureAtomState = buildingBlocks[11];
	const flushCallbacks = buildingBlocks[12];
	const recomputeInvalidatedAtoms = buildingBlocks[13];
	const readAtomState = buildingBlocks[14];
	const invalidateDependents = buildingBlocks[15];
	const writeAtomState = buildingBlocks[16];
	const mountDependencies = buildingBlocks[17];
	const setAtomStateValueOrPromise = buildingBlocks[20];
	let isSync = true;
	const getter = (a) => returnAtomValue(readAtomState(store, a));
	const setter = (a, ...args2) => {
		var _a;
		const aState = ensureAtomState(store, a);
		try {
			if (a === atom) {
				if (!hasInitialValue(a)) throw new Error("atom not writable");
				const prevEpochNumber = aState.n;
				const v = args2[0];
				setAtomStateValueOrPromise(store, a, v);
				mountDependencies(store, a);
				if (prevEpochNumber !== aState.n) {
					changedAtoms.add(a);
					invalidateDependents(store, a);
					(_a = storeHooks.c) == null || _a.call(storeHooks, a);
				}
				return;
			} else return writeAtomState(store, a, ...args2);
		} finally {
			if (!isSync) {
				recomputeInvalidatedAtoms(store);
				flushCallbacks(store);
			}
		}
	};
	try {
		return atomWrite(store, atom, getter, setter, ...args);
	} finally {
		isSync = false;
	}
};
var BUILDING_BLOCK_mountDependencies = (store, atom) => {
	var _a;
	const buildingBlocks = getInternalBuildingBlocks(store);
	const mountedMap = buildingBlocks[1];
	const changedAtoms = buildingBlocks[3];
	const storeHooks = buildingBlocks[6];
	const ensureAtomState = buildingBlocks[11];
	const invalidateDependents = buildingBlocks[15];
	const mountAtom = buildingBlocks[18];
	const unmountAtom = buildingBlocks[19];
	const atomState = ensureAtomState(store, atom);
	const mounted = mountedMap.get(atom);
	if (mounted) {
		for (const [a, n] of atomState.d) if (!mounted.d.has(a)) {
			const aState = ensureAtomState(store, a);
			mountAtom(store, a).t.add(atom);
			mounted.d.add(a);
			if (n !== aState.n) {
				changedAtoms.add(a);
				invalidateDependents(store, a);
				(_a = storeHooks.c) == null || _a.call(storeHooks, a);
			}
		}
		for (const a of mounted.d) if (!atomState.d.has(a)) {
			mounted.d.delete(a);
			unmountAtom(store, a)?.t.delete(atom);
		}
	}
};
var BUILDING_BLOCK_mountAtom = (store, atom) => {
	var _a;
	const buildingBlocks = getInternalBuildingBlocks(store);
	const mountedMap = buildingBlocks[1];
	const mountCallbacks = buildingBlocks[4];
	const storeHooks = buildingBlocks[6];
	const atomOnMount = buildingBlocks[10];
	const ensureAtomState = buildingBlocks[11];
	const flushCallbacks = buildingBlocks[12];
	const recomputeInvalidatedAtoms = buildingBlocks[13];
	const readAtomState = buildingBlocks[14];
	const writeAtomState = buildingBlocks[16];
	const mountAtom = buildingBlocks[18];
	const atomState = ensureAtomState(store, atom);
	let mounted = mountedMap.get(atom);
	if (!mounted) {
		readAtomState(store, atom);
		for (const a of atomState.d.keys()) mountAtom(store, a).t.add(atom);
		mounted = {
			l: /* @__PURE__ */ new Set(),
			d: new Set(atomState.d.keys()),
			t: /* @__PURE__ */ new Set()
		};
		mountedMap.set(atom, mounted);
		if (isActuallyWritableAtom(atom)) {
			const processOnMount = () => {
				let isSync = true;
				const setAtom = (...args) => {
					try {
						return writeAtomState(store, atom, ...args);
					} finally {
						if (!isSync) {
							recomputeInvalidatedAtoms(store);
							flushCallbacks(store);
						}
					}
				};
				try {
					const onUnmount = atomOnMount(store, atom, setAtom);
					if (onUnmount) mounted.u = () => {
						isSync = true;
						try {
							onUnmount();
						} finally {
							isSync = false;
						}
					};
				} finally {
					isSync = false;
				}
			};
			mountCallbacks.add(processOnMount);
		}
		(_a = storeHooks.m) == null || _a.call(storeHooks, atom);
	}
	return mounted;
};
var BUILDING_BLOCK_unmountAtom = (store, atom) => {
	var _a, _b;
	const buildingBlocks = getInternalBuildingBlocks(store);
	const mountedMap = buildingBlocks[1];
	const unmountCallbacks = buildingBlocks[5];
	const storeHooks = buildingBlocks[6];
	const ensureAtomState = buildingBlocks[11];
	const unmountAtom = buildingBlocks[19];
	const atomState = ensureAtomState(store, atom);
	let mounted = mountedMap.get(atom);
	if (!mounted || mounted.l.size) return mounted;
	let isDependent = false;
	for (const a of mounted.t) if ((_a = mountedMap.get(a)) == null ? void 0 : _a.d.has(atom)) {
		isDependent = true;
		break;
	}
	if (!isDependent) {
		if (mounted.u) unmountCallbacks.add(mounted.u);
		mounted = void 0;
		mountedMap.delete(atom);
		for (const a of atomState.d.keys()) unmountAtom(store, a)?.t.delete(atom);
		(_b = storeHooks.u) == null || _b.call(storeHooks, atom);
		return;
	}
	return mounted;
};
var BUILDING_BLOCK_setAtomStateValueOrPromise = (store, atom, valueOrPromise) => {
	const buildingBlocks = getInternalBuildingBlocks(store);
	const ensureAtomState = buildingBlocks[11];
	const abortPromise = buildingBlocks[27];
	const atomState = ensureAtomState(store, atom);
	const hasPrevValue = "v" in atomState;
	const prevValue = atomState.v;
	if (isPromiseLike$1(valueOrPromise)) for (const a of atomState.d.keys()) addPendingPromiseToDependency(atom, valueOrPromise, ensureAtomState(store, a));
	atomState.v = valueOrPromise;
	delete atomState.e;
	if (!hasPrevValue || !Object.is(prevValue, atomState.v)) {
		++atomState.n;
		if (isPromiseLike$1(prevValue)) abortPromise(store, prevValue);
	}
};
var BUILDING_BLOCK_storeGet = (store, atom) => {
	const readAtomState = getInternalBuildingBlocks(store)[14];
	return returnAtomValue(readAtomState(store, atom));
};
var BUILDING_BLOCK_storeSet = (store, atom, ...args) => {
	const buildingBlocks = getInternalBuildingBlocks(store);
	const changedAtoms = buildingBlocks[3];
	const flushCallbacks = buildingBlocks[12];
	const recomputeInvalidatedAtoms = buildingBlocks[13];
	const writeAtomState = buildingBlocks[16];
	const prevChangedAtomsSize = changedAtoms.size;
	try {
		return writeAtomState(store, atom, ...args);
	} finally {
		if (changedAtoms.size !== prevChangedAtomsSize) {
			recomputeInvalidatedAtoms(store);
			flushCallbacks(store);
		}
	}
};
var BUILDING_BLOCK_storeSub = (store, atom, listener) => {
	const buildingBlocks = getInternalBuildingBlocks(store);
	const flushCallbacks = buildingBlocks[12];
	const mountAtom = buildingBlocks[18];
	const unmountAtom = buildingBlocks[19];
	const listeners = mountAtom(store, atom).l;
	listeners.add(listener);
	flushCallbacks(store);
	return () => {
		listeners.delete(listener);
		unmountAtom(store, atom);
		flushCallbacks(store);
	};
};
var BUILDING_BLOCK_registerAbortHandler = (store, promise, abortHandler) => {
	const abortHandlersMap = getInternalBuildingBlocks(store)[25];
	let abortHandlers = abortHandlersMap.get(promise);
	if (!abortHandlers) {
		abortHandlers = /* @__PURE__ */ new Set();
		abortHandlersMap.set(promise, abortHandlers);
		const cleanup = () => abortHandlersMap.delete(promise);
		promise.then(cleanup, cleanup);
	}
	abortHandlers.add(abortHandler);
};
var BUILDING_BLOCK_abortPromise = (store, promise) => {
	getInternalBuildingBlocks(store)[25].get(promise)?.forEach((fn) => fn());
};
var buildingBlockMap = /* @__PURE__ */ new WeakMap();
var getInternalBuildingBlocks = (store) => {
	return buildingBlockMap.get(store);
};
function getBuildingBlocks(store) {
	const buildingBlocks = getInternalBuildingBlocks(store);
	const enhanceBuildingBlocks = buildingBlocks[24];
	if (enhanceBuildingBlocks) return enhanceBuildingBlocks(buildingBlocks);
	return buildingBlocks;
}
function buildStore(...buildArgs) {
	const store = {
		get(atom) {
			const storeGet = getInternalBuildingBlocks(store)[21];
			return storeGet(store, atom);
		},
		set(atom, ...args) {
			const storeSet = getInternalBuildingBlocks(store)[22];
			return storeSet(store, atom, ...args);
		},
		sub(atom, listener) {
			const storeSub = getInternalBuildingBlocks(store)[23];
			return storeSub(store, atom, listener);
		}
	};
	const buildingBlocks = [
		/* @__PURE__ */ new WeakMap(),
		/* @__PURE__ */ new WeakMap(),
		/* @__PURE__ */ new WeakMap(),
		/* @__PURE__ */ new Set(),
		/* @__PURE__ */ new Set(),
		/* @__PURE__ */ new Set(),
		{},
		BUILDING_BLOCK_atomRead,
		BUILDING_BLOCK_atomWrite,
		BUILDING_BLOCK_atomOnInit,
		BUILDING_BLOCK_atomOnMount,
		BUILDING_BLOCK_ensureAtomState,
		BUILDING_BLOCK_flushCallbacks,
		BUILDING_BLOCK_recomputeInvalidatedAtoms,
		BUILDING_BLOCK_readAtomState,
		BUILDING_BLOCK_invalidateDependents,
		BUILDING_BLOCK_writeAtomState,
		BUILDING_BLOCK_mountDependencies,
		BUILDING_BLOCK_mountAtom,
		BUILDING_BLOCK_unmountAtom,
		BUILDING_BLOCK_setAtomStateValueOrPromise,
		BUILDING_BLOCK_storeGet,
		BUILDING_BLOCK_storeSet,
		BUILDING_BLOCK_storeSub,
		void 0,
		/* @__PURE__ */ new WeakMap(),
		BUILDING_BLOCK_registerAbortHandler,
		BUILDING_BLOCK_abortPromise
	].map((fn, i) => buildArgs[i] || fn);
	buildingBlockMap.set(store, Object.freeze(buildingBlocks));
	return store;
}
//#endregion
//#region node_modules/.pnpm/jotai@2.18.1_@babel+core@7.29.0_@babel+template@7.28.6_@types+react@19.2.14_react@19.2.4/node_modules/jotai/esm/vanilla.mjs
var keyCount = 0;
function atom(read, write) {
	const key = `atom${++keyCount}`;
	const config = { toString() {
		return key;
	} };
	if (typeof read === "function") config.read = read;
	else {
		config.init = read;
		config.read = defaultRead;
		config.write = defaultWrite;
	}
	if (write) config.write = write;
	return config;
}
function defaultRead(get) {
	return get(this);
}
function defaultWrite(get, set, arg) {
	return set(this, typeof arg === "function" ? arg(get(this)) : arg);
}
var overriddenCreateStore;
function createStore() {
	if (overriddenCreateStore) return overriddenCreateStore();
	return buildStore();
}
var defaultStore;
function getDefaultStore() {
	if (!defaultStore) defaultStore = createStore();
	return defaultStore;
}
//#endregion
//#region node_modules/.pnpm/jotai@2.18.1_@babel+core@7.29.0_@babel+template@7.28.6_@types+react@19.2.14_react@19.2.4/node_modules/jotai/esm/react.mjs
var StoreContext = createContext(void 0);
function useStore(options) {
	const store = useContext(StoreContext);
	return (options == null ? void 0 : options.store) || store || getDefaultStore();
}
function Provider({ children, store }) {
	const storeRef = useRef(null);
	if (store) return createElement(StoreContext.Provider, { value: store }, children);
	if (storeRef.current === null) storeRef.current = createStore();
	return createElement(StoreContext.Provider, { value: storeRef.current }, children);
}
var isPromiseLike = (x) => typeof (x == null ? void 0 : x.then) === "function";
var attachPromiseStatus = (promise) => {
	if (!promise.status) {
		promise.status = "pending";
		promise.then((v) => {
			promise.status = "fulfilled";
			promise.value = v;
		}, (e) => {
			promise.status = "rejected";
			promise.reason = e;
		});
	}
};
var use = React.use || ((promise) => {
	if (promise.status === "pending") throw promise;
	else if (promise.status === "fulfilled") return promise.value;
	else if (promise.status === "rejected") throw promise.reason;
	else {
		attachPromiseStatus(promise);
		throw promise;
	}
});
var continuablePromiseMap = /* @__PURE__ */ new WeakMap();
var createContinuablePromise = (store, promise, getValue) => {
	const registerAbortHandler = getBuildingBlocks(store)[26];
	let continuablePromise = continuablePromiseMap.get(promise);
	if (!continuablePromise) {
		continuablePromise = new Promise((resolve, reject) => {
			let curr = promise;
			const onFulfilled = (me) => (v) => {
				if (curr === me) resolve(v);
			};
			const onRejected = (me) => (e) => {
				if (curr === me) reject(e);
			};
			const onAbort = () => {
				try {
					const nextValue = getValue();
					if (isPromiseLike(nextValue)) {
						continuablePromiseMap.set(nextValue, continuablePromise);
						curr = nextValue;
						nextValue.then(onFulfilled(nextValue), onRejected(nextValue));
						registerAbortHandler(store, nextValue, onAbort);
					} else resolve(nextValue);
				} catch (e) {
					reject(e);
				}
			};
			promise.then(onFulfilled(promise), onRejected(promise));
			registerAbortHandler(store, promise, onAbort);
		});
		continuablePromiseMap.set(promise, continuablePromise);
	}
	return continuablePromise;
};
function useAtomValue(atom, options) {
	const { delay, unstable_promiseStatus: promiseStatus = !React.use } = options || {};
	const store = useStore(options);
	const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = useReducer((prev) => {
		const nextValue = store.get(atom);
		if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom) return prev;
		return [
			nextValue,
			store,
			atom
		];
	}, void 0, () => [
		store.get(atom),
		store,
		atom
	]);
	let value = valueFromReducer;
	if (storeFromReducer !== store || atomFromReducer !== atom) {
		rerender();
		value = store.get(atom);
	}
	useEffect(() => {
		const unsub = store.sub(atom, () => {
			if (promiseStatus) try {
				const value2 = store.get(atom);
				if (isPromiseLike(value2)) attachPromiseStatus(createContinuablePromise(store, value2, () => store.get(atom)));
			} catch (e) {}
			if (typeof delay === "number") {
				setTimeout(rerender, delay);
				return;
			}
			rerender();
		});
		rerender();
		return unsub;
	}, [
		store,
		atom,
		delay,
		promiseStatus
	]);
	useDebugValue(value);
	if (isPromiseLike(value)) {
		const promise = createContinuablePromise(store, value, () => store.get(atom));
		if (promiseStatus) attachPromiseStatus(promise);
		return use(promise);
	}
	return value;
}
function useSetAtom(atom, options) {
	const store = useStore(options);
	return useCallback((...args) => {
		return store.set(atom, ...args);
	}, [store, atom]);
}
function useAtom(atom, options) {
	return [useAtomValue(atom, options), useSetAtom(atom, options)];
}
//#endregion
//#region node_modules/.pnpm/jotai@2.18.1_@babel+core@7.29.0_@babel+template@7.28.6_@types+react@19.2.14_react@19.2.4/node_modules/jotai/esm/vanilla/utils.mjs
var getCached$2 = (c, m, k) => (m.has(k) ? m : m.set(k, c())).get(k);
var cache1$3 = /* @__PURE__ */ new WeakMap();
var memo3 = (create, dep1, dep2, dep3) => {
	return getCached$2(create, getCached$2(() => /* @__PURE__ */ new WeakMap(), getCached$2(() => /* @__PURE__ */ new WeakMap(), cache1$3, dep1), dep2), dep3);
};
function selectAtom(anAtom, selector, equalityFn = Object.is) {
	return memo3(() => {
		const EMPTY = /* @__PURE__ */ Symbol();
		const selectValue = ([value, prevSlice]) => {
			if (prevSlice === EMPTY) return selector(value);
			const slice = selector(value, prevSlice);
			return equalityFn(prevSlice, slice) ? prevSlice : slice;
		};
		const derivedAtom = atom((get) => {
			const prev = get(derivedAtom);
			return selectValue([get(anAtom), prev]);
		});
		derivedAtom.init = EMPTY;
		return derivedAtom;
	}, anAtom, selector, equalityFn);
}
var isPromiseLike$2 = (x) => typeof (x == null ? void 0 : x.then) === "function";
function createJSONStorage(getStringStorage = () => {
	try {
		return window.localStorage;
	} catch (e) {
		return;
	}
}, options) {
	var _a;
	let lastStr;
	let lastValue;
	const storage = {
		getItem: (key, initialValue) => {
			var _a2, _b;
			const parse = (str2) => {
				str2 = str2 || "";
				if (lastStr !== str2) {
					try {
						lastValue = JSON.parse(str2, options == null ? void 0 : options.reviver);
					} catch (e) {
						return initialValue;
					}
					lastStr = str2;
				}
				return lastValue;
			};
			const str = (_b = (_a2 = getStringStorage()) == null ? void 0 : _a2.getItem(key)) != null ? _b : null;
			if (isPromiseLike$2(str)) return str.then(parse);
			return parse(str);
		},
		setItem: (key, newValue) => {
			var _a2;
			return (_a2 = getStringStorage()) == null ? void 0 : _a2.setItem(key, JSON.stringify(newValue, options == null ? void 0 : options.replacer));
		},
		removeItem: (key) => {
			var _a2;
			return (_a2 = getStringStorage()) == null ? void 0 : _a2.removeItem(key);
		}
	};
	const createHandleSubscribe = (subscriber2) => (key, callback, initialValue) => subscriber2(key, (v) => {
		let newValue;
		try {
			newValue = JSON.parse(v || "");
		} catch (e) {
			newValue = initialValue;
		}
		callback(newValue);
	});
	let subscriber;
	try {
		subscriber = (_a = getStringStorage()) == null ? void 0 : _a.subscribe;
	} catch (e) {}
	if (!subscriber && typeof window !== "undefined" && typeof window.addEventListener === "function" && window.Storage) subscriber = (key, callback) => {
		if (!(getStringStorage() instanceof window.Storage)) return () => {};
		const storageEventCallback = (e) => {
			if (e.storageArea === getStringStorage() && e.key === key) callback(e.newValue);
		};
		window.addEventListener("storage", storageEventCallback);
		return () => {
			window.removeEventListener("storage", storageEventCallback);
		};
	};
	if (subscriber) storage.subscribe = createHandleSubscribe(subscriber);
	return storage;
}
createJSONStorage();
//#endregion
//#region app/components/header/account-setting/model-provider-page/atoms.ts
var expandedAtom = atom({});
function useModelProviderListExpanded(providerName) {
	return useAtomValue(useMemo(() => selectAtom(expandedAtom, (s) => !!s[providerName]), [providerName]));
}
function useSetModelProviderListExpanded(providerName) {
	const set = useSetAtom(expandedAtom);
	return useCallback((expanded) => set((prev) => ({
		...prev,
		[providerName]: expanded
	})), [providerName, set]);
}
function useExpandModelProviderList() {
	const set = useSetAtom(expandedAtom);
	return useCallback((providerName) => set((prev) => ({
		...prev,
		[providerName]: true
	})), [set]);
}
function useResetModelProviderListExpanded() {
	const set = useSetAtom(expandedAtom);
	return useCallback(() => set({}), [set]);
}
//#endregion
//#region app/components/header/account-setting/model-provider-page/hooks.ts
var useSystemDefaultModelAndModelList = (defaultModel, modelList) => {
	const currentDefaultModel = useMemo(() => {
		const currentProvider = modelList.find((provider) => provider.provider === defaultModel?.provider.provider);
		const currentModel = currentProvider?.models.find((model) => model.model === defaultModel?.model);
		return currentProvider && currentModel && {
			model: currentModel.model,
			provider: currentProvider.provider
		};
	}, [defaultModel, modelList]);
	const currentDefaultModelKey = currentDefaultModel ? `${currentDefaultModel.provider}:${currentDefaultModel.model}` : "";
	const [defaultModelState, setDefaultModelState] = useState(currentDefaultModel);
	const [defaultModelSourceKey, setDefaultModelSourceKey] = useState(currentDefaultModelKey);
	return [defaultModelSourceKey === currentDefaultModelKey ? defaultModelState : currentDefaultModel, useCallback((model) => {
		setDefaultModelSourceKey(currentDefaultModelKey);
		setDefaultModelState(model);
	}, [currentDefaultModelKey])];
};
var useLanguage = () => {
	return useLocale().replace("-", "_");
};
var useModelList = (type) => {
	const { data, refetch, isPending } = useQuery({
		queryKey: commonQueryKeys.modelList(type),
		queryFn: () => fetchModelList(`/workspaces/current/models/model-types/${type}`)
	});
	return {
		data: data?.data || [],
		mutate: refetch,
		isLoading: isPending
	};
};
var useDefaultModel = (type) => {
	const { data, refetch, isPending } = useQuery({
		queryKey: commonQueryKeys.defaultModel(type),
		queryFn: () => fetchDefaultModal(`/workspaces/current/default-model?model_type=${type}`)
	});
	return {
		data: data?.data,
		mutate: refetch,
		isLoading: isPending
	};
};
var useCurrentProviderAndModel = (modelList, defaultModel) => {
	const currentProvider = modelList.find((provider) => provider.provider === defaultModel?.provider);
	return {
		currentProvider,
		currentModel: currentProvider?.models.find((model) => model.model === defaultModel?.model)
	};
};
var useTextGenerationCurrentProviderAndModelAndModelList = (defaultModel) => {
	const { textGenerationModelList } = useProviderContext();
	const activeTextGenerationModelList = textGenerationModelList.filter((model) => model.status === ModelStatusEnum.active);
	const { currentProvider, currentModel } = useCurrentProviderAndModel(textGenerationModelList, defaultModel);
	return {
		currentProvider,
		currentModel,
		textGenerationModelList,
		activeTextGenerationModelList
	};
};
var useModelListAndDefaultModel = (type) => {
	const { data: modelList } = useModelList(type);
	const { data: defaultModel } = useDefaultModel(type);
	return {
		modelList,
		defaultModel
	};
};
var useModelListAndDefaultModelAndCurrentProviderAndModel = (type) => {
	const { modelList, defaultModel } = useModelListAndDefaultModel(type);
	const { currentProvider, currentModel } = useCurrentProviderAndModel(modelList, {
		provider: defaultModel?.provider.provider || "",
		model: defaultModel?.model || ""
	});
	return {
		modelList,
		defaultModel,
		currentProvider,
		currentModel
	};
};
var useUpdateModelList = () => {
	const queryClient = useQueryClient();
	return useCallback((type) => {
		queryClient.invalidateQueries({ queryKey: commonQueryKeys.modelList(type) });
	}, [queryClient]);
};
var useInvalidateDefaultModel = () => {
	const queryClient = useQueryClient();
	return useCallback((type) => {
		queryClient.invalidateQueries({ queryKey: commonQueryKeys.defaultModel(type) });
	}, [queryClient]);
};
var useUpdateModelProviders = () => {
	const queryClient = useQueryClient();
	return useCallback(() => {
		queryClient.invalidateQueries({ queryKey: commonQueryKeys.modelProviders });
	}, [queryClient]);
};
var useMarketplaceAllPlugins = (providers, searchText) => {
	const exclude = useMemo(() => {
		return providers.map((provider) => provider.provider.replace(/(.+)\/([^/]+)$/, "$1"));
	}, [providers]);
	const { plugins: collectionPlugins = [], isLoading: isCollectionLoading } = useMarketplacePluginsByCollectionId("__model-settings-pinned-models");
	const { plugins, queryPlugins, queryPluginsWithDebounced, isLoading: isPluginsLoading } = useMarketplacePlugins();
	useEffect(() => {
		if (searchText) queryPluginsWithDebounced({
			query: searchText,
			category: PluginCategoryEnum.model,
			exclude,
			type: "plugin",
			sort_by: "install_count",
			sort_order: "DESC"
		});
		else queryPlugins({
			query: "",
			category: PluginCategoryEnum.model,
			type: "plugin",
			page_size: 1e3,
			exclude,
			sort_by: "install_count",
			sort_order: "DESC"
		});
	}, [
		queryPlugins,
		queryPluginsWithDebounced,
		searchText,
		exclude
	]);
	const allPlugins = useMemo(() => {
		const allPlugins = collectionPlugins.filter((plugin) => !exclude.includes(plugin.plugin_id));
		if (plugins?.length) for (let i = 0; i < plugins.length; i++) {
			const plugin = plugins[i];
			if (plugin.type !== "bundle" && !allPlugins.find((p) => p.plugin_id === plugin.plugin_id)) allPlugins.push(plugin);
		}
		return allPlugins;
	}, [
		plugins,
		collectionPlugins,
		exclude
	]);
	return {
		plugins: searchText ? plugins : allPlugins,
		isLoading: isCollectionLoading || isPluginsLoading
	};
};
var useRefreshModel = () => {
	const expandModelProviderList = useExpandModelProviderList();
	const queryClient = useQueryClient();
	const updateModelProviders = useUpdateModelProviders();
	const updateModelList = useUpdateModelList();
	return { handleRefreshModel: useCallback((provider, CustomConfigurationModelFixedFields, refreshModelList) => {
		const modelProviderModelListQueryKey = consoleQuery.modelProviders.models.queryKey({ input: { params: { provider: provider.provider } } });
		queryClient.invalidateQueries({
			queryKey: modelProviderModelListQueryKey,
			exact: true,
			refetchType: "none"
		});
		updateModelProviders();
		provider.supported_model_types.forEach((type) => {
			updateModelList(type);
		});
		if (refreshModelList && provider.custom_configuration.status === CustomConfigurationStatusEnum.active) {
			expandModelProviderList(provider.provider);
			queryClient.invalidateQueries({
				queryKey: modelProviderModelListQueryKey,
				exact: true,
				refetchType: "active"
			});
			if (CustomConfigurationModelFixedFields?.__model_type) updateModelList(CustomConfigurationModelFixedFields.__model_type);
		}
	}, [
		expandModelProviderList,
		queryClient,
		updateModelList,
		updateModelProviders
	]) };
};
var useModelModalHandler = () => {
	const setShowModelModal = useModalContextSelector((state) => state.setShowModelModal);
	return (provider, configurationMethod, CustomConfigurationModelFixedFields, extra = {}) => {
		setShowModelModal({
			payload: {
				currentProvider: provider,
				currentConfigurationMethod: configurationMethod,
				currentCustomConfigurationModelFixedFields: CustomConfigurationModelFixedFields,
				isModelCredential: extra.isModelCredential,
				credential: extra.credential,
				model: extra.model,
				mode: extra.mode
			},
			onSaveCallback: (newPayload, formValues) => {
				extra.onUpdate?.(newPayload, formValues);
			}
		});
	};
};
//#endregion
export { getMarketplaceListCondition as A, InstallStepFromGitHub as B, useMarketplaceCollectionsAndPlugins as C, getCollectionsParams as D, useMarketplacePluginsByCollectionId as E, getPluginLinkInMarketplace as F, TaskStatus as G, PluginCategoryEnum as H, DEFAULT_SORT as I, PLUGIN_CATEGORY_WITH_COLLECTIONS as L, getMarketplacePlugins as M, getPluginDetailLinkInMarketplace as N, getFormattedPlugin as O, getPluginIconInMarketplace as P, PLUGIN_TYPE_SEARCH_MAP as R, atom as S, useMarketplacePlugins as T, PluginSource as U, PermissionType as V, SupportedCreationMethods as W, useSetModelProviderListExpanded as _, useMarketplaceAllPlugins as a, useAtomValue as b, useModelListAndDefaultModelAndCurrentProviderAndModel as c, useSystemDefaultModelAndModelList as d, useTextGenerationCurrentProviderAndModelAndModelList as f, useResetModelProviderListExpanded as g, useModelProviderListExpanded as h, useLanguage as i, getMarketplaceListFilterType as j, getMarketplaceCollectionsAndPlugins as k, useModelModalHandler as l, useUpdateModelProviders as m, useDefaultModel as n, useModelList as o, useUpdateModelList as p, useInvalidateDefaultModel as r, useModelListAndDefaultModel as s, useCurrentProviderAndModel as t, useRefreshModel as u, Provider as v, useMarketplaceContainerScroll as w, useSetAtom as x, useAtom as y, InstallStep as z };
