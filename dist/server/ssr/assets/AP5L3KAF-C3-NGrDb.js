import { t as initialState } from "./BNGI36V3-l1cupg2U.js";
import { A as useContext, E as onCleanup, _ as createMemo, b as createSignal, g as createEffect, h as createContext, i as notSup, m as createComponent } from "./server-mshjPt2o.js";
import { t as createStore } from "./server-ChDNLTyU.js";
//#region node_modules/.pnpm/@tanstack+devtools@0.11.0_csstype@3.2.3_solid-js@1.9.11/node_modules/@tanstack/devtools/dist/chunk/AP5L3KAF.js
var getStorageItem = (key) => localStorage.getItem(key);
var setStorageItem = (key, value) => {
	try {
		localStorage.setItem(key, value);
	} catch (_e) {
		return;
	}
};
var TANSTACK_DEVTOOLS = "tanstack_devtools";
var TANSTACK_DEVTOOLS_STATE = "tanstack_devtools_state";
var TANSTACK_DEVTOOLS_SETTINGS = "tanstack_devtools_settings";
function getDefaultActivePlugins(plugins) {
	if (plugins.length === 0) return [];
	if (plugins.length === 1) return [plugins[0].id];
	return plugins.filter((plugin) => plugin.defaultOpen === true).slice(0, 3).map((plugin) => plugin.id);
}
var tryParseJson = (json) => {
	if (!json) return void 0;
	try {
		return JSON.parse(json);
	} catch (_e) {
		return;
	}
};
var uppercaseFirstLetter = (value) => value.charAt(0).toUpperCase() + value.slice(1);
var getAllPermutations = (arr) => {
	const res = [];
	function permutate(arr2, start) {
		if (start === arr2.length - 1) {
			res.push([...arr2]);
			return;
		}
		for (let i = start; i < arr2.length; i++) {
			[arr2[start], arr2[i]] = [arr2[i], arr2[start]];
			permutate(arr2, start + 1);
			[arr2[start], arr2[i]] = [arr2[i], arr2[start]];
		}
	}
	permutate(arr, 0);
	return res;
};
var DevtoolsContext = createContext();
var getSettings = () => {
	return { ...tryParseJson(getStorageItem(TANSTACK_DEVTOOLS_SETTINGS)) };
};
var generatePluginId = (plugin, index) => {
	if (plugin.id) return plugin.id;
	if (typeof plugin.name === "string") return `${plugin.name.toLowerCase().replace(" ", "-")}-${index}`;
	return index.toString();
};
function getStateFromLocalStorage(plugins) {
	const existingState = tryParseJson(getStorageItem(TANSTACK_DEVTOOLS_STATE));
	const pluginIds = plugins?.map((plugin, i) => generatePluginId(plugin, i)) || [];
	if (existingState?.activePlugins) {
		const originalLength = existingState.activePlugins.length;
		existingState.activePlugins = existingState.activePlugins.filter((id) => pluginIds.includes(id));
		if (existingState.activePlugins.length !== originalLength) setStorageItem(TANSTACK_DEVTOOLS_STATE, JSON.stringify(existingState));
	}
	return existingState;
}
var getExistingStateFromStorage = (config, plugins) => {
	const existingState = getStateFromLocalStorage(plugins);
	const settings = getSettings();
	const pluginsWithIds = plugins?.map((plugin, i) => {
		const id = generatePluginId(plugin, i);
		return {
			...plugin,
			id
		};
	}) || [];
	let activePlugins = existingState?.activePlugins || [];
	if (activePlugins.length === 0 && pluginsWithIds.length > 0) activePlugins = getDefaultActivePlugins(pluginsWithIds);
	return {
		...initialState,
		plugins: pluginsWithIds,
		state: {
			...initialState.state,
			...existingState,
			activePlugins
		},
		settings: {
			...initialState.settings,
			...config,
			...settings
		}
	};
};
var DevtoolsProvider = (props) => {
	const [store, setStore] = createStore(getExistingStateFromStorage(props.config, props.plugins));
	const updatePlugins = (newPlugins) => {
		setStore("plugins", newPlugins.map((plugin, i) => {
			const id = generatePluginId(plugin, i);
			return {
				...plugin,
				id
			};
		}));
	};
	createEffect(() => {
		if (props.onSetPlugins) props.onSetPlugins(updatePlugins);
	});
	const value = {
		store,
		setStore: (updater) => {
			const newState = updater(store);
			const { settings, state: internalState } = newState;
			setStorageItem(TANSTACK_DEVTOOLS_SETTINGS, JSON.stringify(settings));
			setStorageItem(TANSTACK_DEVTOOLS_STATE, JSON.stringify(internalState));
			setStore((prev) => ({
				...prev,
				...newState
			}));
		}
	};
	return createComponent(DevtoolsContext.Provider, {
		value,
		get children() {
			return props.children;
		}
	});
};
var PiPContext = createContext(void 0);
var PiPProvider = (props) => {
	const [pipWindow, setPipWindow] = createSignal(null);
	const closePipWindow = () => {
		const w = pipWindow();
		if (w != null) {
			w.close();
			setPipWindow(null);
		}
	};
	const requestPipWindow = (settings) => {
		if (pipWindow() != null) return;
		const pip = window.open("", "TSDT-Devtools-Panel", `${settings},popup`);
		if (!pip) throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");
		window.addEventListener("beforeunload", () => {
			localStorage.setItem("pip_open", "false");
			closePipWindow();
		});
		pip.document.head.innerHTML = "";
		pip.document.body.innerHTML = "";
		pip.document.title = "TanStack Devtools";
		pip.document.body.style.margin = "0";
		pip.addEventListener("pagehide", () => {
			localStorage.setItem("pip_open", "false");
			closePipWindow();
		});
		[...document.styleSheets].forEach((styleSheet) => {
			try {
				const cssRules = [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
				const style = document.createElement("style");
				const style_node = styleSheet.ownerNode;
				let style_id = "";
				if (style_node && "id" in style_node) style_id = style_node.id;
				if (style_id) style.setAttribute("id", style_id);
				style.textContent = cssRules;
				pip.document.head.appendChild(style);
			} catch (e) {
				const link = document.createElement("link");
				if (styleSheet.href == null) return;
				link.rel = "stylesheet";
				link.type = styleSheet.type;
				link.media = styleSheet.media.toString();
				link.href = styleSheet.href;
				pip.document.head.appendChild(link);
			}
		});
		notSup([
			"focusin",
			"focusout",
			"pointermove",
			"keydown",
			"pointerdown",
			"pointerup",
			"click",
			"mousedown",
			"input"
		], pip.document);
		setPipWindow(pip);
	};
	createEffect(() => {
		const gooberStyles = document.querySelector("#_goober");
		const w = pipWindow();
		if (gooberStyles && w) {
			const observer = new MutationObserver(() => {
				const pip_style = w.document.querySelector("#_goober");
				if (pip_style) pip_style.textContent = gooberStyles.textContent;
			});
			observer.observe(gooberStyles, {
				childList: true,
				subtree: true,
				characterDataOldValue: true
			});
			onCleanup(() => {
				observer.disconnect();
			});
		}
	});
	const value = createMemo(() => ({
		pipWindow: pipWindow(),
		requestPipWindow,
		closePipWindow,
		disabled: props.disabled ?? false
	}));
	return createComponent(PiPContext.Provider, {
		value,
		get children() {
			return props.children;
		}
	});
};
var usePiPWindow = () => {
	return createMemo(() => {
		const ctx = useContext(PiPContext);
		if (!ctx) throw new Error("usePiPWindow must be used within a PiPProvider");
		return ctx();
	});
};
//#endregion
export { getAllPermutations as a, TANSTACK_DEVTOOLS as i, DevtoolsProvider as n, uppercaseFirstLetter as o, PiPProvider as r, usePiPWindow as s, DevtoolsContext as t };
