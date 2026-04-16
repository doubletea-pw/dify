import { Gr as s7, S as D, xt as P7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as app_icon_default } from "./app-icon-DPKtAo3e.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { D as MARKETPLACE_API_PREFIX, a as API_PREFIX } from "./config-Dopncj5R.js";
import { M as isTypedArray$1 } from "./cloneDeep-nndvIxet.js";
import { t as renderI18nObject } from "./i18n-config-jsJ9YUFd.js";
import { sn as sleep } from "./base-BuKAg6Le.js";
import { n as isArrayLike, t as isArguments } from "./isArguments-BGmqhzfG.js";
import { a as useSelector } from "./app-context-BiSzFQEV.js";
import { t as IconBase } from "./IconBase-CEF_UoQI.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { l as Theme } from "./app-DPjSIfgb.js";
import { n as useQuery } from "./useMutation-CRBpDOZ8.js";
import { n as consoleQuery } from "./client-CLQTU2Oi.js";
import { f as useTranslation$1, r as useGetLanguage } from "./i18n-lDm19WzR.js";
import { n as BadgeState, t as Badge } from "./badge-DnA7gOK5.js";
import { n as useCheckInstalled$1 } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { a as Icon$8, s as Icon$9 } from "./other-sSUV3aYW.js";
import { H as PluginCategoryEnum, U as PluginSource } from "./hooks-BTelimHS.js";
import { t as useTheme } from "./use-theme-3YxPQV4B.js";
import { i as SkeletonRow, n as SkeletonPoint, r as SkeletonRectangle, t as SkeletonContainer } from "./skeleton-Brd40zkS.js";
import * as React$1 from "react";
import { useCallback, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/_internal/isPrototype.mjs
function isPrototype(value) {
	const constructor = value?.constructor;
	return value === (typeof constructor === "function" ? constructor.prototype : Object.prototype);
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isTypedArray.mjs
function isTypedArray(x) {
	return isTypedArray$1(x);
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isEmpty.mjs
function isEmpty(value) {
	if (value == null) return true;
	if (isArrayLike(value)) {
		if (typeof value.splice !== "function" && typeof value !== "string" && (typeof Buffer === "undefined" || !Buffer.isBuffer(value)) && !isTypedArray(value) && !isArguments(value)) return false;
		return value.length === 0;
	}
	if (typeof value === "object") {
		if (value instanceof Map || value instanceof Set) return value.size === 0;
		const keys = Object.keys(value);
		if (isPrototype(value)) return keys.filter((x) => x !== "constructor").length === 0;
		return keys.length === 0;
	}
	return true;
}
//#endregion
//#region app/components/plugins/constants.ts
var tagKeys = [
	"agent",
	"rag",
	"search",
	"image",
	"videos",
	"weather",
	"finance",
	"design",
	"travel",
	"social",
	"news",
	"medical",
	"productivity",
	"education",
	"business",
	"entertainment",
	"utilities",
	"other"
];
var categoryKeys = [
	PluginCategoryEnum.model,
	PluginCategoryEnum.tool,
	PluginCategoryEnum.datasource,
	PluginCategoryEnum.agent,
	PluginCategoryEnum.extension,
	"bundle",
	PluginCategoryEnum.trigger
];
//#endregion
//#region app/components/plugins/hooks.ts
var useTags = () => {
	const { t } = useTranslation();
	const tags = useMemo(() => {
		return tagKeys.map((tag) => {
			return {
				name: tag,
				label: t(`tags.${tag}`, { ns: "pluginTags" })
			};
		});
	}, [t]);
	const tagsMap = useMemo(() => {
		return tags.reduce((acc, tag) => {
			acc[tag.name] = tag;
			return acc;
		}, {});
	}, [tags]);
	return {
		tags,
		tagsMap,
		getTagLabel: useMemo(() => {
			return (name) => {
				if (!tagsMap[name]) return name;
				return tagsMap[name].label;
			};
		}, [tagsMap])
	};
};
var useCategories = (isSingle) => {
	const { t } = useTranslation();
	const categories = useMemo(() => {
		return categoryKeys.map((category) => {
			if (category === PluginCategoryEnum.agent) return {
				name: PluginCategoryEnum.agent,
				label: isSingle ? t("categorySingle.agent", { ns: "plugin" }) : t("category.agents", { ns: "plugin" })
			};
			return {
				name: category,
				label: isSingle ? t(`categorySingle.${category}`, { ns: "plugin" }) : t(`category.${category}s`, { ns: "plugin" })
			};
		});
	}, [t, isSingle]);
	return {
		categories,
		categoriesMap: useMemo(() => {
			return categories.reduce((acc, category) => {
				acc[category.name] = category;
				return acc;
			}, {});
		}, [categories])
	};
};
var PLUGIN_PAGE_TABS_MAP = {
	plugins: "plugins",
	marketplace: "discover"
};
var usePluginPageTabs = () => {
	const { t } = useTranslation();
	return [{
		value: PLUGIN_PAGE_TABS_MAP.plugins,
		text: t("menus.plugins", { ns: "common" })
	}, {
		value: PLUGIN_PAGE_TABS_MAP.marketplace,
		text: t("menus.exploreMarketplace", { ns: "common" })
	}];
};
var EMPTY_PLUGINS = [];
function usePluginsWithLatestVersion(plugins = EMPTY_PLUGINS) {
	const marketplacePluginIds = useMemo(() => plugins.filter((p) => p.source === PluginSource.marketplace).map((p) => p.plugin_id), [plugins]);
	const { data: latestVersionData } = useQuery(consoleQuery.plugins.latestVersions.queryOptions({
		input: { body: { plugin_ids: marketplacePluginIds } },
		enabled: !!marketplacePluginIds.length
	}));
	return useMemo(() => {
		const versions = latestVersionData?.versions;
		if (!versions) return plugins;
		return plugins.map((plugin) => {
			const info = versions[plugin.plugin_id];
			if (!info) return plugin;
			return {
				...plugin,
				latest_version: info.version,
				latest_unique_identifier: info.unique_identifier,
				status: info.status,
				deprecated_reason: info.deprecated_reason,
				alternative_plugin_id: info.alternative_plugin_id
			};
		});
	}, [plugins, latestVersionData]);
}
var PartnerDark_default = {
	icon: /* @__PURE__ */ JSON.parse("{\"type\":\"element\",\"isRootNode\":true,\"name\":\"svg\",\"attributes\":{\"width\":\"20\",\"height\":\"20\",\"viewBox\":\"0 0 20 20\",\"fill\":\"none\",\"xmlns\":\"http://www.w3.org/2000/svg\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"Partner\"},\"children\":[{\"type\":\"element\",\"name\":\"mask\",\"attributes\":{\"id\":\"mask0_6296_109592\",\"style\":\"mask-type:alpha\",\"maskUnits\":\"userSpaceOnUse\",\"x\":\"1\",\"y\":\"0\",\"width\":\"18\",\"height\":\"20\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"Mask\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.33333 1.5396C8.30481 0.978718 8.79055 0.698276 9.30696 0.58851C9.76388 0.491388 10.2361 0.491388 10.693 0.58851C11.2094 0.698276 11.6952 0.978718 12.6667 1.5396L15.9936 3.4604C16.9651 4.02128 17.4508 4.30172 17.8041 4.69407C18.1166 5.04121 18.3528 5.45018 18.4971 5.89444C18.6603 6.39655 18.6603 6.95744 18.6603 8.0792V11.9208C18.6603 13.0426 18.6603 13.6034 18.4971 14.1056C18.3528 14.5498 18.1166 14.9588 17.8041 15.3059C17.4508 15.6983 16.9651 15.9787 15.9936 16.5396L12.6667 18.4604C11.6952 19.0213 11.2094 19.3017 10.693 19.4115C10.2361 19.5086 9.76388 19.5086 9.30696 19.4115C8.79055 19.3017 8.30481 19.0213 7.33333 18.4604L4.00641 16.5396C3.03493 15.9787 2.5492 15.6983 2.19593 15.3059C1.88336 14.9588 1.64724 14.5498 1.50289 14.1056C1.33975 13.6034 1.33975 13.0426 1.33975 11.9208V8.0792C1.33975 6.95744 1.33975 6.39655 1.50289 5.89444C1.64724 5.45018 1.88336 5.04121 2.19593 4.69407C2.5492 4.30172 3.03493 4.02128 4.00641 3.4604L7.33333 1.5396Z\",\"fill\":\"#932F19\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.33333 1.5396C8.30481 0.978718 8.79055 0.698276 9.30696 0.58851C9.76388 0.491388 10.2361 0.491388 10.693 0.58851C11.2094 0.698276 11.6952 0.978718 12.6667 1.5396L15.9936 3.4604C16.9651 4.02128 17.4508 4.30172 17.8041 4.69407C18.1166 5.04121 18.3528 5.45018 18.4971 5.89444C18.6603 6.39655 18.6603 6.95744 18.6603 8.0792V11.9208C18.6603 13.0426 18.6603 13.6034 18.4971 14.1056C18.3528 14.5498 18.1166 14.9588 17.8041 15.3059C17.4508 15.6983 16.9651 15.9787 15.9936 16.5396L12.6667 18.4604C11.6952 19.0213 11.2094 19.3017 10.693 19.4115C10.2361 19.5086 9.76388 19.5086 9.30696 19.4115C8.79055 19.3017 8.30481 19.0213 7.33333 18.4604L4.00641 16.5396C3.03493 15.9787 2.5492 15.6983 2.19593 15.3059C1.88336 14.9588 1.64724 14.5498 1.50289 14.1056C1.33975 13.6034 1.33975 13.0426 1.33975 11.9208V8.0792C1.33975 6.95744 1.33975 6.39655 1.50289 5.89444C1.64724 5.45018 1.88336 5.04121 2.19593 4.69407C2.5492 4.30172 3.03493 4.02128 4.00641 3.4604L7.33333 1.5396Z\",\"fill\":\"url(#paint0_linear_6296_109592)\",\"fill-opacity\":\"0.9\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.47222 1.78016C8.45993 1.20991 8.90155 0.958665 9.36471 0.860217C9.78356 0.771189 10.2164 0.771189 10.6353 0.860217C11.0984 0.958665 11.5401 1.20991 12.5278 1.78016L15.8547 3.70096C16.8424 4.27121 17.2808 4.52805 17.5976 4.87994C17.8842 5.19815 18.1006 5.57304 18.2329 5.98028C18.3792 6.43061 18.3825 6.9387 18.3825 8.0792V11.9208C18.3825 13.0613 18.3792 13.5694 18.2329 14.0197C18.1006 14.427 17.8842 14.8018 17.5976 15.1201C17.2808 15.4719 16.8424 15.7288 15.8547 16.299L12.5278 18.2198C11.5401 18.7901 11.0984 19.0413 10.6353 19.1398C10.2164 19.2288 9.78356 19.2288 9.36471 19.1398C8.90155 19.0413 8.45993 18.7901 7.47222 18.2198L4.1453 16.299C3.1576 15.7288 2.7192 15.4719 2.40236 15.1201C2.11584 14.8018 1.89939 14.427 1.76707 14.0197C1.62075 13.5694 1.61752 13.0613 1.61752 11.9208V8.0792C1.61752 6.9387 1.62075 6.43061 1.76707 5.98028C1.89939 5.57304 2.11584 5.19815 2.40236 4.87994C2.7192 4.52805 3.1576 4.27121 4.1453 3.70096L7.47222 1.78016Z\",\"stroke\":\"url(#paint1_linear_6296_109592)\",\"stroke-opacity\":\"0.8\",\"stroke-width\":\"0.555556\"},\"children\":[]}]}]},{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"mask\":\"url(#mask0_6296_109592)\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"badge-bg\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.33333 1.5396C8.30481 0.978718 8.79055 0.698276 9.30696 0.58851C9.76388 0.491388 10.2361 0.491388 10.693 0.58851C11.2094 0.698276 11.6952 0.978718 12.6667 1.5396L15.9936 3.4604C16.9651 4.02128 17.4508 4.30172 17.8041 4.69407C18.1166 5.04121 18.3528 5.45018 18.4971 5.89444C18.6603 6.39655 18.6603 6.95744 18.6603 8.0792V11.9208C18.6603 13.0426 18.6603 13.6034 18.4971 14.1056C18.3528 14.5498 18.1166 14.9588 17.8041 15.3059C17.4508 15.6983 16.9651 15.9787 15.9936 16.5396L12.6667 18.4604C11.6952 19.0213 11.2094 19.3017 10.693 19.4115C10.2361 19.5086 9.76388 19.5086 9.30696 19.4115C8.79055 19.3017 8.30481 19.0213 7.33333 18.4604L4.00641 16.5396C3.03493 15.9787 2.5492 15.6983 2.19593 15.3059C1.88336 14.9588 1.64724 14.5498 1.50289 14.1056C1.33975 13.6034 1.33975 13.0426 1.33975 11.9208V8.0792C1.33975 6.95744 1.33975 6.39655 1.50289 5.89444C1.64724 5.45018 1.88336 5.04121 2.19593 4.69407C2.5492 4.30172 3.03493 4.02128 4.00641 3.4604L7.33333 1.5396Z\",\"fill\":\"#932F19\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.33333 1.5396C8.30481 0.978718 8.79055 0.698276 9.30696 0.58851C9.76388 0.491388 10.2361 0.491388 10.693 0.58851C11.2094 0.698276 11.6952 0.978718 12.6667 1.5396L15.9936 3.4604C16.9651 4.02128 17.4508 4.30172 17.8041 4.69407C18.1166 5.04121 18.3528 5.45018 18.4971 5.89444C18.6603 6.39655 18.6603 6.95744 18.6603 8.0792V11.9208C18.6603 13.0426 18.6603 13.6034 18.4971 14.1056C18.3528 14.5498 18.1166 14.9588 17.8041 15.3059C17.4508 15.6983 16.9651 15.9787 15.9936 16.5396L12.6667 18.4604C11.6952 19.0213 11.2094 19.3017 10.693 19.4115C10.2361 19.5086 9.76388 19.5086 9.30696 19.4115C8.79055 19.3017 8.30481 19.0213 7.33333 18.4604L4.00641 16.5396C3.03493 15.9787 2.5492 15.6983 2.19593 15.3059C1.88336 14.9588 1.64724 14.5498 1.50289 14.1056C1.33975 13.6034 1.33975 13.0426 1.33975 11.9208V8.0792C1.33975 6.95744 1.33975 6.39655 1.50289 5.89444C1.64724 5.45018 1.88336 5.04121 2.19593 4.69407C2.5492 4.30172 3.03493 4.02128 4.00641 3.4604L7.33333 1.5396Z\",\"fill\":\"url(#paint2_linear_6296_109592)\",\"fill-opacity\":\"0.9\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.58333 1.97261C8.58402 1.39487 8.99036 1.16698 9.41092 1.07758C9.7993 0.99503 10.2007 0.99503 10.5891 1.07758C11.0096 1.16698 11.416 1.39487 12.4167 1.97261L15.7436 3.89341C16.7443 4.47116 17.1448 4.70911 17.4325 5.02863C17.6982 5.3237 17.8989 5.67133 18.0216 6.04895C18.1544 6.45786 18.1603 6.92371 18.1603 8.0792V11.9208C18.1603 13.0763 18.1544 13.5421 18.0216 13.951C17.8989 14.3287 17.6982 14.6763 17.4325 14.9714C17.1448 15.2909 16.7443 15.5288 15.7436 16.1066L12.4167 18.0274C11.416 18.6051 11.0096 18.833 10.5891 18.9224C10.2007 19.005 9.7993 19.005 9.41092 18.9224C8.99036 18.833 8.58402 18.6051 7.58333 18.0274L4.25641 16.1066C3.25572 15.5288 2.8552 15.2909 2.5675 14.9714C2.30182 14.6763 2.10112 14.3287 1.97842 13.951C1.84556 13.5421 1.83975 13.0763 1.83975 11.9208V8.0792C1.83975 6.92371 1.84556 6.45786 1.97842 6.04895C2.10112 5.67133 2.30182 5.3237 2.5675 5.02863C2.8552 4.70911 3.25572 4.47116 4.25641 3.89341L7.58333 1.97261Z\",\"stroke\":\"url(#paint3_linear_6296_109592)\",\"stroke-opacity\":\"0.8\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"handshake\",\"filter\":\"url(#filter0_d_6296_109592)\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M11.0969 9.64841C10.895 9.44642 10.5675 9.44642 10.3656 9.64841L9.99991 10.0141C9.59596 10.418 8.94109 10.418 8.53717 10.0141C8.13325 9.61015 8.13325 8.95527 8.53717 8.55135L11.4491 5.63868C12.5371 5.39255 13.7238 5.69302 14.5709 6.54011C15.8221 7.79128 15.8807 9.78339 14.7469 11.104L13.6567 12.2081L11.0969 9.64841ZM5.42889 6.54011C6.55286 5.41614 8.27475 5.25452 9.57067 6.05524L7.80581 7.81999C6.99797 8.62783 6.99797 9.9376 7.80581 10.7454C8.58917 11.5288 9.8445 11.5525 10.6564 10.8167L10.7313 10.7454L12.9253 12.9395L10.7313 15.1336C10.3273 15.5375 9.67245 15.5375 9.26855 15.1336L5.42889 11.2939C4.11615 9.9812 4.11615 7.85284 5.42889 6.54011Z\",\"fill\":\"url(#paint4_linear_6296_109592)\",\"shape-rendering\":\"crispEdges\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"id\":\"highlight\",\"opacity\":\"0.5\",\"d\":\"M0 0H15.5556L5.26663 20H0V0Z\",\"fill\":\"url(#paint5_linear_6296_109592)\"},\"children\":[]}]}]},{\"type\":\"element\",\"name\":\"defs\",\"attributes\":{},\"children\":[{\"type\":\"element\",\"name\":\"filter\",\"attributes\":{\"id\":\"filter0_d_6296_109592\",\"x\":\"3.94434\",\"y\":\"5.30556\",\"width\":\"12.1111\",\"height\":\"10.881\",\"filterUnits\":\"userSpaceOnUse\",\"color-interpolation-filters\":\"sRGB\"},\"children\":[{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-opacity\":\"0\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"SourceAlpha\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\",\"result\":\"hardAlpha\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feOffset\",\"attributes\":{\"dy\":\"0.25\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feGaussianBlur\",\"attributes\":{\"stdDeviation\":\"0.25\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"hardAlpha\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in2\":\"BackgroundImageFix\",\"result\":\"effect1_dropShadow_6296_109592\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"SourceGraphic\",\"in2\":\"effect1_dropShadow_6296_109592\",\"result\":\"shape\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint0_linear_6296_109592\",\"x1\":\"0\",\"y1\":\"0\",\"x2\":\"22.6412\",\"y2\":\"1.78551\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"#FF692E\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#E04F16\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint1_linear_6296_109592\",\"x1\":\"8.55422\",\"y1\":\"-1.28187e-07\",\"x2\":\"19.7802\",\"y2\":\"12.7346\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.2\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#FF4405\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint2_linear_6296_109592\",\"x1\":\"0\",\"y1\":\"0\",\"x2\":\"22.6412\",\"y2\":\"1.78551\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"#FF692E\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#E04F16\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint3_linear_6296_109592\",\"x1\":\"8.55422\",\"y1\":\"-1.28187e-07\",\"x2\":\"19.7802\",\"y2\":\"12.7346\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.2\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#FF4405\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint4_linear_6296_109592\",\"x1\":\"9.99989\",\"y1\":\"5.55556\",\"x2\":\"9.99989\",\"y2\":\"15.4365\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.95\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"white\",\"stop-opacity\":\"0.8\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint5_linear_6296_109592\",\"x1\":\"-4.78632\",\"y1\":\"4.375\",\"x2\":\"16.2164\",\"y2\":\"10.4\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.12\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"white\",\"stop-opacity\":\"0.2\"},\"children\":[]}]}]}]}"),
	name: "PartnerDark"
};
//#endregion
//#region app/components/base/icons/src/public/plugins/PartnerDark.tsx
var Icon$7 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: PartnerDark_default
});
Icon$7.displayName = "PartnerDark";
var PartnerLight_default = {
	icon: /* @__PURE__ */ JSON.parse("{\"type\":\"element\",\"isRootNode\":true,\"name\":\"svg\",\"attributes\":{\"width\":\"20\",\"height\":\"20\",\"viewBox\":\"0 0 20 20\",\"fill\":\"none\",\"xmlns\":\"http://www.w3.org/2000/svg\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"Partner\"},\"children\":[{\"type\":\"element\",\"name\":\"mask\",\"attributes\":{\"id\":\"mask0_6291_109635\",\"style\":\"mask-type:alpha\",\"maskUnits\":\"userSpaceOnUse\",\"x\":\"1\",\"y\":\"0\",\"width\":\"18\",\"height\":\"20\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"Mask\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.33333 1.5396C8.30481 0.978718 8.79055 0.698276 9.30696 0.58851C9.76388 0.491388 10.2361 0.491388 10.693 0.58851C11.2094 0.698276 11.6952 0.978718 12.6667 1.5396L15.9936 3.4604C16.9651 4.02128 17.4508 4.30172 17.8041 4.69407C18.1166 5.04121 18.3528 5.45018 18.4971 5.89444C18.6603 6.39655 18.6603 6.95744 18.6603 8.0792V11.9208C18.6603 13.0426 18.6603 13.6034 18.4971 14.1056C18.3528 14.5498 18.1166 14.9588 17.8041 15.3059C17.4508 15.6983 16.9651 15.9787 15.9936 16.5396L12.6667 18.4604C11.6952 19.0213 11.2094 19.3017 10.693 19.4115C10.2361 19.5086 9.76388 19.5086 9.30696 19.4115C8.79055 19.3017 8.30481 19.0213 7.33333 18.4604L4.00641 16.5396C3.03493 15.9787 2.5492 15.6983 2.19593 15.3059C1.88336 14.9588 1.64724 14.5498 1.50289 14.1056C1.33975 13.6034 1.33975 13.0426 1.33975 11.9208V8.0792C1.33975 6.95744 1.33975 6.39655 1.50289 5.89444C1.64724 5.45018 1.88336 5.04121 2.19593 4.69407C2.5492 4.30172 3.03493 4.02128 4.00641 3.4604L7.33333 1.5396Z\",\"fill\":\"#F9DBAF\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.33333 1.5396C8.30481 0.978718 8.79055 0.698276 9.30696 0.58851C9.76388 0.491388 10.2361 0.491388 10.693 0.58851C11.2094 0.698276 11.6952 0.978718 12.6667 1.5396L15.9936 3.4604C16.9651 4.02128 17.4508 4.30172 17.8041 4.69407C18.1166 5.04121 18.3528 5.45018 18.4971 5.89444C18.6603 6.39655 18.6603 6.95744 18.6603 8.0792V11.9208C18.6603 13.0426 18.6603 13.6034 18.4971 14.1056C18.3528 14.5498 18.1166 14.9588 17.8041 15.3059C17.4508 15.6983 16.9651 15.9787 15.9936 16.5396L12.6667 18.4604C11.6952 19.0213 11.2094 19.3017 10.693 19.4115C10.2361 19.5086 9.76388 19.5086 9.30696 19.4115C8.79055 19.3017 8.30481 19.0213 7.33333 18.4604L4.00641 16.5396C3.03493 15.9787 2.5492 15.6983 2.19593 15.3059C1.88336 14.9588 1.64724 14.5498 1.50289 14.1056C1.33975 13.6034 1.33975 13.0426 1.33975 11.9208V8.0792C1.33975 6.95744 1.33975 6.39655 1.50289 5.89444C1.64724 5.45018 1.88336 5.04121 2.19593 4.69407C2.5492 4.30172 3.03493 4.02128 4.00641 3.4604L7.33333 1.5396Z\",\"fill\":\"url(#paint0_linear_6291_109635)\",\"fill-opacity\":\"0.9\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.47222 1.78016C8.45993 1.20991 8.90155 0.958665 9.36471 0.860217C9.78356 0.771189 10.2164 0.771189 10.6353 0.860217C11.0984 0.958665 11.5401 1.20991 12.5278 1.78016L15.8547 3.70096C16.8424 4.27121 17.2808 4.52805 17.5976 4.87994C17.8842 5.19815 18.1006 5.57304 18.2329 5.98028C18.3792 6.43061 18.3825 6.9387 18.3825 8.0792V11.9208C18.3825 13.0613 18.3792 13.5694 18.2329 14.0197C18.1006 14.427 17.8842 14.8018 17.5976 15.1201C17.2808 15.4719 16.8424 15.7288 15.8547 16.299L12.5278 18.2198C11.5401 18.7901 11.0984 19.0413 10.6353 19.1398C10.2164 19.2288 9.78356 19.2288 9.36471 19.1398C8.90155 19.0413 8.45993 18.7901 7.47222 18.2198L4.1453 16.299C3.1576 15.7288 2.7192 15.4719 2.40236 15.1201C2.11584 14.8018 1.89939 14.427 1.76707 14.0197C1.62075 13.5694 1.61752 13.0613 1.61752 11.9208V8.0792C1.61752 6.9387 1.62075 6.43061 1.76707 5.98028C1.89939 5.57304 2.11584 5.19815 2.40236 4.87994C2.7192 4.52805 3.1576 4.27121 4.1453 3.70096L7.47222 1.78016Z\",\"stroke\":\"url(#paint1_linear_6291_109635)\",\"stroke-opacity\":\"0.8\",\"stroke-width\":\"0.555556\"},\"children\":[]}]}]},{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"mask\":\"url(#mask0_6291_109635)\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"badge-bg\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.33333 1.5396C8.30481 0.978718 8.79055 0.698276 9.30696 0.58851C9.76388 0.491388 10.2361 0.491388 10.693 0.58851C11.2094 0.698276 11.6952 0.978718 12.6667 1.5396L15.9936 3.4604C16.9651 4.02128 17.4508 4.30172 17.8041 4.69407C18.1166 5.04121 18.3528 5.45018 18.4971 5.89444C18.6603 6.39655 18.6603 6.95744 18.6603 8.0792V11.9208C18.6603 13.0426 18.6603 13.6034 18.4971 14.1056C18.3528 14.5498 18.1166 14.9588 17.8041 15.3059C17.4508 15.6983 16.9651 15.9787 15.9936 16.5396L12.6667 18.4604C11.6952 19.0213 11.2094 19.3017 10.693 19.4115C10.2361 19.5086 9.76388 19.5086 9.30696 19.4115C8.79055 19.3017 8.30481 19.0213 7.33333 18.4604L4.00641 16.5396C3.03493 15.9787 2.5492 15.6983 2.19593 15.3059C1.88336 14.9588 1.64724 14.5498 1.50289 14.1056C1.33975 13.6034 1.33975 13.0426 1.33975 11.9208V8.0792C1.33975 6.95744 1.33975 6.39655 1.50289 5.89444C1.64724 5.45018 1.88336 5.04121 2.19593 4.69407C2.5492 4.30172 3.03493 4.02128 4.00641 3.4604L7.33333 1.5396Z\",\"fill\":\"#F9DBAF\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.33333 1.5396C8.30481 0.978718 8.79055 0.698276 9.30696 0.58851C9.76388 0.491388 10.2361 0.491388 10.693 0.58851C11.2094 0.698276 11.6952 0.978718 12.6667 1.5396L15.9936 3.4604C16.9651 4.02128 17.4508 4.30172 17.8041 4.69407C18.1166 5.04121 18.3528 5.45018 18.4971 5.89444C18.6603 6.39655 18.6603 6.95744 18.6603 8.0792V11.9208C18.6603 13.0426 18.6603 13.6034 18.4971 14.1056C18.3528 14.5498 18.1166 14.9588 17.8041 15.3059C17.4508 15.6983 16.9651 15.9787 15.9936 16.5396L12.6667 18.4604C11.6952 19.0213 11.2094 19.3017 10.693 19.4115C10.2361 19.5086 9.76388 19.5086 9.30696 19.4115C8.79055 19.3017 8.30481 19.0213 7.33333 18.4604L4.00641 16.5396C3.03493 15.9787 2.5492 15.6983 2.19593 15.3059C1.88336 14.9588 1.64724 14.5498 1.50289 14.1056C1.33975 13.6034 1.33975 13.0426 1.33975 11.9208V8.0792C1.33975 6.95744 1.33975 6.39655 1.50289 5.89444C1.64724 5.45018 1.88336 5.04121 2.19593 4.69407C2.5492 4.30172 3.03493 4.02128 4.00641 3.4604L7.33333 1.5396Z\",\"fill\":\"url(#paint2_linear_6291_109635)\",\"fill-opacity\":\"0.9\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M7.58333 1.97261C8.58402 1.39487 8.99036 1.16698 9.41092 1.07758C9.7993 0.99503 10.2007 0.99503 10.5891 1.07758C11.0096 1.16698 11.416 1.39487 12.4167 1.97261L15.7436 3.89341C16.7443 4.47116 17.1448 4.70911 17.4325 5.02863C17.6982 5.3237 17.8989 5.67133 18.0216 6.04895C18.1544 6.45786 18.1603 6.92371 18.1603 8.0792V11.9208C18.1603 13.0763 18.1544 13.5421 18.0216 13.951C17.8989 14.3287 17.6982 14.6763 17.4325 14.9714C17.1448 15.2909 16.7443 15.5288 15.7436 16.1066L12.4167 18.0274C11.416 18.6051 11.0096 18.833 10.5891 18.9224C10.2007 19.005 9.7993 19.005 9.41092 18.9224C8.99036 18.833 8.58402 18.6051 7.58333 18.0274L4.25641 16.1066C3.25572 15.5288 2.8552 15.2909 2.5675 14.9714C2.30182 14.6763 2.10112 14.3287 1.97842 13.951C1.84556 13.5421 1.83975 13.0763 1.83975 11.9208V8.0792C1.83975 6.92371 1.84556 6.45786 1.97842 6.04895C2.10112 5.67133 2.30182 5.3237 2.5675 5.02863C2.8552 4.70911 3.25572 4.47116 4.25641 3.89341L7.58333 1.97261Z\",\"stroke\":\"url(#paint3_linear_6291_109635)\",\"stroke-opacity\":\"0.8\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"handshake\",\"filter\":\"url(#filter0_d_6291_109635)\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M11.0969 9.64852C10.895 9.44652 10.5675 9.44652 10.3656 9.64852L9.99991 10.0142C9.59596 10.4181 8.94109 10.4181 8.53717 10.0142C8.13325 9.61025 8.13325 8.95537 8.53717 8.55146L11.4491 5.63879C12.5371 5.39265 13.7238 5.69313 14.5709 6.54022C15.8221 7.79139 15.8807 9.7835 14.7469 11.1041L13.6567 12.2083L11.0969 9.64852ZM5.42889 6.54022C6.55286 5.41625 8.27475 5.25463 9.57067 6.05534L7.80581 7.8201C6.99797 8.62794 6.99797 9.93771 7.80581 10.7456C8.58917 11.5289 9.8445 11.5526 10.6564 10.8168L10.7313 10.7456L12.9253 12.9396L10.7313 15.1337C10.3273 15.5376 9.67245 15.5376 9.26855 15.1337L5.42889 11.294C4.11615 9.98131 4.11615 7.85295 5.42889 6.54022Z\",\"fill\":\"url(#paint4_linear_6291_109635)\",\"shape-rendering\":\"crispEdges\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"id\":\"highlight\",\"opacity\":\"0.5\",\"d\":\"M0 0H15.5556L5.26663 20H0V0Z\",\"fill\":\"url(#paint5_linear_6291_109635)\"},\"children\":[]}]}]},{\"type\":\"element\",\"name\":\"defs\",\"attributes\":{},\"children\":[{\"type\":\"element\",\"name\":\"filter\",\"attributes\":{\"id\":\"filter0_d_6291_109635\",\"x\":\"3.94434\",\"y\":\"5.30566\",\"width\":\"12.1111\",\"height\":\"10.8809\",\"filterUnits\":\"userSpaceOnUse\",\"color-interpolation-filters\":\"sRGB\"},\"children\":[{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-opacity\":\"0\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"SourceAlpha\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\",\"result\":\"hardAlpha\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feOffset\",\"attributes\":{\"dy\":\"0.25\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feGaussianBlur\",\"attributes\":{\"stdDeviation\":\"0.25\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"hardAlpha\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in2\":\"BackgroundImageFix\",\"result\":\"effect1_dropShadow_6291_109635\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"SourceGraphic\",\"in2\":\"effect1_dropShadow_6291_109635\",\"result\":\"shape\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint0_linear_6291_109635\",\"x1\":\"0\",\"y1\":\"0\",\"x2\":\"22.6412\",\"y2\":\"1.78551\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"#FF692E\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#E04F16\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint1_linear_6291_109635\",\"x1\":\"8.55422\",\"y1\":\"-1.28187e-07\",\"x2\":\"19.7802\",\"y2\":\"12.7346\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.95\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#E62E05\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint2_linear_6291_109635\",\"x1\":\"0\",\"y1\":\"0\",\"x2\":\"22.6412\",\"y2\":\"1.78551\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"#FF692E\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#E04F16\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint3_linear_6291_109635\",\"x1\":\"8.55422\",\"y1\":\"-1.28187e-07\",\"x2\":\"19.7802\",\"y2\":\"12.7346\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.95\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#E62E05\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint4_linear_6291_109635\",\"x1\":\"9.99989\",\"y1\":\"5.55566\",\"x2\":\"9.99989\",\"y2\":\"15.4366\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"white\",\"stop-opacity\":\"0.9\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint5_linear_6291_109635\",\"x1\":\"-4.78632\",\"y1\":\"4.375\",\"x2\":\"16.2164\",\"y2\":\"10.4\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.12\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"white\",\"stop-opacity\":\"0.3\"},\"children\":[]}]}]}]}"),
	name: "PartnerLight"
};
//#endregion
//#region app/components/base/icons/src/public/plugins/PartnerLight.tsx
var Icon$6 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: PartnerLight_default
});
Icon$6.displayName = "PartnerLight";
//#endregion
//#region app/components/plugins/base/badges/icon-with-tooltip.tsx
var IconWithTooltip = ({ className, theme, popupContent, BadgeIconLight, BadgeIconDark }) => {
	const isDark = theme === Theme.dark;
	const iconClassName = cn("h-5 w-5", className);
	return /* @__PURE__ */ jsx(tooltip_default, {
		popupClassName: "p-1.5 border-[0.5px] border-[0.5px] border-components-panel-border bg-components-tooltip-bg text-text-secondary system-xs-medium",
		popupContent,
		children: /* @__PURE__ */ jsx("div", {
			className: "flex shrink-0 items-center justify-center",
			children: /* @__PURE__ */ jsx(isDark ? BadgeIconDark : BadgeIconLight, { className: iconClassName })
		})
	});
};
var icon_with_tooltip_default = React$1.memo(IconWithTooltip);
//#endregion
//#region app/components/plugins/base/badges/partner.tsx
var Partner = ({ className, text }) => {
	const { theme } = useTheme();
	return /* @__PURE__ */ jsx(icon_with_tooltip_default, {
		className,
		theme,
		BadgeIconLight: Icon$6,
		BadgeIconDark: Icon$7,
		popupContent: text
	});
};
var VerifiedDark_default = {
	icon: /* @__PURE__ */ JSON.parse("{\"type\":\"element\",\"isRootNode\":true,\"name\":\"svg\",\"attributes\":{\"width\":\"20\",\"height\":\"20\",\"viewBox\":\"0 0 20 20\",\"fill\":\"none\",\"xmlns\":\"http://www.w3.org/2000/svg\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"Verified\"},\"children\":[{\"type\":\"element\",\"name\":\"mask\",\"attributes\":{\"id\":\"mask0_6296_109593\",\"style\":\"mask-type:alpha\",\"maskUnits\":\"userSpaceOnUse\",\"x\":\"0\",\"y\":\"0\",\"width\":\"20\",\"height\":\"20\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"Mask\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M8.08817 1.62521C9.14394 0.569383 10.8558 0.569374 11.9116 1.62521L12.8128 2.52641C12.9819 2.69542 13.2111 2.79037 13.4501 2.79037H14.5059C15.9991 2.79037 17.2095 4.00082 17.2095 5.49398V6.54981C17.2095 6.78882 17.3045 7.01805 17.4735 7.18706L18.3747 8.08826C19.4305 9.1441 19.4305 10.8559 18.3747 11.9118L17.4735 12.813C17.3045 12.982 17.2095 13.2112 17.2095 13.4502V14.506C17.2095 15.9992 15.9991 17.2096 14.5059 17.2096H13.4501C13.2111 17.2096 12.9819 17.3046 12.8128 17.4736L11.9116 18.3748C10.8558 19.4306 9.14403 19.4306 8.08817 18.3748L7.18696 17.4736C7.01795 17.3046 6.78873 17.2096 6.54972 17.2096H5.49389C4.00072 17.2096 2.79028 15.9992 2.79028 14.506V13.4502C2.79028 13.2112 2.69533 12.982 2.52632 12.813L1.62513 11.9118C0.569295 10.8559 0.569295 9.1441 1.62512 8.08826L2.52632 7.18706C2.69533 7.01806 2.79028 6.78882 2.79028 6.54981V5.49398C2.79028 4.00082 4.00072 2.79037 5.49389 2.79037H6.54972C6.78873 2.79037 7.01795 2.69542 7.18696 2.52641L8.08817 1.62521Z\",\"fill\":\"#003DC1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M8.08817 1.62521C9.14394 0.569383 10.8558 0.569374 11.9116 1.62521L12.8128 2.52641C12.9819 2.69542 13.2111 2.79037 13.4501 2.79037H14.5059C15.9991 2.79037 17.2095 4.00082 17.2095 5.49398V6.54981C17.2095 6.78882 17.3045 7.01805 17.4735 7.18706L18.3747 8.08826C19.4305 9.1441 19.4305 10.8559 18.3747 11.9118L17.4735 12.813C17.3045 12.982 17.2095 13.2112 17.2095 13.4502V14.506C17.2095 15.9992 15.9991 17.2096 14.5059 17.2096H13.4501C13.2111 17.2096 12.9819 17.3046 12.8128 17.4736L11.9116 18.3748C10.8558 19.4306 9.14403 19.4306 8.08817 18.3748L7.18696 17.4736C7.01795 17.3046 6.78873 17.2096 6.54972 17.2096H5.49389C4.00072 17.2096 2.79028 15.9992 2.79028 14.506V13.4502C2.79028 13.2112 2.69533 12.982 2.52632 12.813L1.62513 11.9118C0.569295 10.8559 0.569295 9.1441 1.62512 8.08826L2.52632 7.18706C2.69533 7.01806 2.79028 6.78882 2.79028 6.54981V5.49398C2.79028 4.00082 4.00072 2.79037 5.49389 2.79037H6.54972C6.78873 2.79037 7.01795 2.69542 7.18696 2.52641L8.08817 1.62521Z\",\"fill\":\"url(#paint0_linear_6296_109593)\",\"fill-opacity\":\"0.9\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M8.27881 1.81585L8.27881 1.81585C9.2293 0.865317 10.7704 0.865301 11.721 1.81585L12.6222 2.71705L12.6222 2.71709C12.8418 2.9366 13.1395 3.05997 13.4501 3.05997H14.5059C15.8502 3.05997 16.9399 4.14972 16.9399 5.49398V6.54981C16.9399 6.86036 17.0633 7.15813 17.2828 7.37768L17.2829 7.3777L18.1841 8.2789L18.3747 8.08826L18.1841 8.27891C19.1346 9.22945 19.1346 10.7706 18.1841 11.7211L17.2829 12.6224C17.0633 12.8419 16.9399 13.1397 16.9399 13.4502V14.506C16.9399 15.8503 15.8502 16.94 14.5059 16.94H13.4501C13.1395 16.94 12.8418 17.0634 12.6222 17.2829L12.6222 17.2829L11.721 18.1841C10.7704 19.1347 9.22939 19.1347 8.27881 18.1841L7.37761 17.2829L7.37759 17.2829C7.15804 17.0634 6.86027 16.94 6.54972 16.94H5.49389C4.14962 16.94 3.05989 15.8503 3.05989 14.506V13.4502C3.05989 13.1398 2.93655 12.8419 2.71696 12.6224C2.71696 12.6223 2.71695 12.6223 2.71694 12.6223L1.81577 11.7211C0.865224 10.7706 0.865226 9.22945 1.81576 8.2789L2.71696 7.3777C2.71696 7.3777 2.71696 7.3777 2.71696 7.3777C2.93654 7.15813 3.05989 6.86033 3.05989 6.54981V5.49398C3.05989 4.14972 4.14963 3.05997 5.49389 3.05997H6.54972C6.86024 3.05997 7.15803 2.93662 7.3776 2.71706L7.37761 2.71705L8.27881 1.81585Z\",\"stroke\":\"url(#paint1_linear_6296_109593)\",\"stroke-opacity\":\"0.8\",\"stroke-width\":\"0.539216\"},\"children\":[]}]}]},{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"mask\":\"url(#mask0_6296_109593)\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"badge-bg\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M8.08817 1.62521C9.14394 0.569383 10.8558 0.569374 11.9116 1.62521L12.8128 2.52641C12.9819 2.69542 13.2111 2.79037 13.4501 2.79037H14.5059C15.9991 2.79037 17.2095 4.00082 17.2095 5.49398V6.54981C17.2095 6.78882 17.3045 7.01805 17.4735 7.18706L18.3747 8.08826C19.4305 9.1441 19.4305 10.8559 18.3747 11.9118L17.4735 12.813C17.3045 12.982 17.2095 13.2112 17.2095 13.4502V14.506C17.2095 15.9992 15.9991 17.2096 14.5059 17.2096H13.4501C13.2111 17.2096 12.9819 17.3046 12.8128 17.4736L11.9116 18.3748C10.8558 19.4306 9.14403 19.4306 8.08817 18.3748L7.18696 17.4736C7.01795 17.3046 6.78873 17.2096 6.54972 17.2096H5.49389C4.00072 17.2096 2.79028 15.9992 2.79028 14.506V13.4502C2.79028 13.2112 2.69533 12.982 2.52632 12.813L1.62513 11.9118C0.569295 10.8559 0.569295 9.1441 1.62512 8.08826L2.52632 7.18706C2.69533 7.01806 2.79028 6.78882 2.79028 6.54981V5.49398C2.79028 4.00082 4.00072 2.79037 5.49389 2.79037H6.54972C6.78873 2.79037 7.01795 2.69542 7.18696 2.52641L8.08817 1.62521Z\",\"fill\":\"#003DC1\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M8.08817 1.62521C9.14394 0.569383 10.8558 0.569374 11.9116 1.62521L12.8128 2.52641C12.9819 2.69542 13.2111 2.79037 13.4501 2.79037H14.5059C15.9991 2.79037 17.2095 4.00082 17.2095 5.49398V6.54981C17.2095 6.78882 17.3045 7.01805 17.4735 7.18706L18.3747 8.08826C19.4305 9.1441 19.4305 10.8559 18.3747 11.9118L17.4735 12.813C17.3045 12.982 17.2095 13.2112 17.2095 13.4502V14.506C17.2095 15.9992 15.9991 17.2096 14.5059 17.2096H13.4501C13.2111 17.2096 12.9819 17.3046 12.8128 17.4736L11.9116 18.3748C10.8558 19.4306 9.14403 19.4306 8.08817 18.3748L7.18696 17.4736C7.01795 17.3046 6.78873 17.2096 6.54972 17.2096H5.49389C4.00072 17.2096 2.79028 15.9992 2.79028 14.506V13.4502C2.79028 13.2112 2.69533 12.982 2.52632 12.813L1.62513 11.9118C0.569295 10.8559 0.569295 9.1441 1.62512 8.08826L2.52632 7.18706C2.69533 7.01806 2.79028 6.78882 2.79028 6.54981V5.49398C2.79028 4.00082 4.00072 2.79037 5.49389 2.79037H6.54972C6.78873 2.79037 7.01795 2.69542 7.18696 2.52641L8.08817 1.62521Z\",\"fill\":\"url(#paint2_linear_6296_109593)\",\"fill-opacity\":\"0.9\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M8.44172 1.97876L8.44173 1.97875C9.30224 1.11821 10.6975 1.11818 11.5581 1.97876L12.4593 2.87997L12.4593 2.88003C12.7221 3.1427 13.0784 3.29037 13.4501 3.29037H14.5059C15.723 3.29037 16.7095 4.27696 16.7095 5.49398V6.54981C16.7095 6.92148 16.8572 7.27785 17.1199 7.54057L17.1199 7.54061L18.0211 8.44182L18.3747 8.08826L18.0211 8.44182C18.8817 9.30239 18.8817 10.6976 18.0211 11.5582L17.1199 12.4594C16.8572 12.7222 16.7095 13.0786 16.7095 13.4502V14.506C16.7095 15.7231 15.723 16.7096 14.5059 16.7096H13.4501C13.0784 16.7096 12.7221 16.8573 12.4594 17.1199L12.4593 17.12L11.5581 18.0212C10.6975 18.8818 9.30233 18.8818 8.44172 18.0212L7.54052 17.12L7.54048 17.12C7.27775 16.8573 6.92139 16.7096 6.54972 16.7096H5.49389C4.27686 16.7096 3.29028 15.7231 3.29028 14.506V13.4502C3.29028 13.0787 3.14267 12.7222 2.87984 12.4594L1.97868 11.5582C1.11811 10.6976 1.11811 9.30238 1.97867 8.44181L2.87986 7.54062C2.87987 7.54062 2.87987 7.54061 2.87987 7.54061C3.14266 7.27784 3.29028 6.92143 3.29028 6.54981V5.49398C3.29028 4.27696 4.27687 3.29037 5.49389 3.29037H6.54972C6.92135 3.29037 7.27774 3.14273 7.54051 2.87998L7.54052 2.87997L8.44172 1.97876Z\",\"stroke\":\"url(#paint3_linear_6296_109593)\",\"stroke-opacity\":\"0.8\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"check\",\"filter\":\"url(#filter0_d_6296_109593)\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M13.4219 6.98132C13.8732 7.28924 13.9829 7.89545 13.667 8.33533L10.04 13.3858C9.87754 13.612 9.62408 13.7602 9.34287 13.7934C9.06166 13.8266 8.77923 13.7417 8.56605 13.5599L6.49346 11.7923C6.0789 11.4387 6.03689 10.8245 6.39963 10.4204C6.76238 10.0163 7.39252 9.97533 7.80709 10.3289L9.04316 11.3831L12.0328 7.22026C12.3487 6.78038 12.9706 6.6734 13.4219 6.98132Z\",\"fill\":\"url(#paint4_linear_6296_109593)\",\"shape-rendering\":\"crispEdges\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"id\":\"highlight\",\"opacity\":\"0.5\",\"d\":\"M0 0H15.5556L5.26663 20H0V0Z\",\"fill\":\"url(#paint5_linear_6296_109593)\"},\"children\":[]}]}]},{\"type\":\"element\",\"name\":\"defs\",\"attributes\":{},\"children\":[{\"type\":\"element\",\"name\":\"filter\",\"attributes\":{\"id\":\"filter0_d_6296_109593\",\"x\":\"5.65283\",\"y\":\"6.55549\",\"width\":\"8.69458\",\"height\":\"7.995\",\"filterUnits\":\"userSpaceOnUse\",\"color-interpolation-filters\":\"sRGB\"},\"children\":[{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-opacity\":\"0\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"SourceAlpha\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\",\"result\":\"hardAlpha\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feOffset\",\"attributes\":{\"dy\":\"0.25\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feGaussianBlur\",\"attributes\":{\"stdDeviation\":\"0.25\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"hardAlpha\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in2\":\"BackgroundImageFix\",\"result\":\"effect1_dropShadow_6296_109593\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"SourceGraphic\",\"in2\":\"effect1_dropShadow_6296_109593\",\"result\":\"shape\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint0_linear_6296_109593\",\"x1\":\"16.302\",\"y1\":\"19.1667\",\"x2\":\"-0.37184\",\"y2\":\"14.8201\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"#296DFF\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#5289FF\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint1_linear_6296_109593\",\"x1\":\"8.67462\",\"y1\":\"0.833336\",\"x2\":\"18.9651\",\"y2\":\"12.5067\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.2\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#296DFF\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint2_linear_6296_109593\",\"x1\":\"16.302\",\"y1\":\"19.1667\",\"x2\":\"-0.37184\",\"y2\":\"14.8201\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"#296DFF\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#5289FF\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint3_linear_6296_109593\",\"x1\":\"8.67462\",\"y1\":\"0.833336\",\"x2\":\"18.9651\",\"y2\":\"12.5067\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.2\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#296DFF\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint4_linear_6296_109593\",\"x1\":\"10.0001\",\"y1\":\"6.80549\",\"x2\":\"10.0001\",\"y2\":\"13.8005\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.95\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"white\",\"stop-opacity\":\"0.8\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint5_linear_6296_109593\",\"x1\":\"-4.78632\",\"y1\":\"4.375\",\"x2\":\"16.2164\",\"y2\":\"10.4\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.12\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"white\",\"stop-opacity\":\"0.2\"},\"children\":[]}]}]}]}"),
	name: "VerifiedDark"
};
//#endregion
//#region app/components/base/icons/src/public/plugins/VerifiedDark.tsx
var Icon$5 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: VerifiedDark_default
});
Icon$5.displayName = "VerifiedDark";
var VerifiedLight_default = {
	icon: /* @__PURE__ */ JSON.parse("{\"type\":\"element\",\"isRootNode\":true,\"name\":\"svg\",\"attributes\":{\"width\":\"20\",\"height\":\"20\",\"viewBox\":\"0 0 20 20\",\"fill\":\"none\",\"xmlns\":\"http://www.w3.org/2000/svg\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"Verified\"},\"children\":[{\"type\":\"element\",\"name\":\"mask\",\"attributes\":{\"id\":\"mask0_6295_120949\",\"style\":\"mask-type:alpha\",\"maskUnits\":\"userSpaceOnUse\",\"x\":\"0\",\"y\":\"0\",\"width\":\"20\",\"height\":\"20\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"Mask\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M8.08817 1.62512C9.14394 0.569299 10.8558 0.56929 11.9116 1.62512L12.8128 2.52633C12.9819 2.69533 13.2111 2.79028 13.4501 2.79028H14.5059C15.9991 2.79028 17.2095 4.00074 17.2095 5.4939V6.54972C17.2095 6.78874 17.3045 7.01796 17.4735 7.18697L18.3747 8.08818C19.4305 9.14401 19.4305 10.8559 18.3747 11.9117L17.4735 12.8129C17.3045 12.9819 17.2095 13.2112 17.2095 13.4502V14.5059C17.2095 15.9991 15.9991 17.2095 14.5059 17.2095H13.4501C13.2111 17.2095 12.9819 17.3045 12.8128 17.4735L11.9116 18.3747C10.8558 19.4305 9.14403 19.4305 8.08817 18.3747L7.18696 17.4735C7.01795 17.3045 6.78873 17.2095 6.54972 17.2095H5.49389C4.00072 17.2095 2.79028 15.9991 2.79028 14.5059V13.4502C2.79028 13.2112 2.69533 12.9819 2.52632 12.8129L1.62513 11.9117C0.569295 10.8559 0.569295 9.14401 1.62512 8.08818L2.52632 7.18697C2.69533 7.01797 2.79028 6.78874 2.79028 6.54972V5.4939C2.79028 4.00074 4.00072 2.79028 5.49389 2.79028H6.54972C6.78873 2.79028 7.01795 2.69533 7.18696 2.52633L8.08817 1.62512Z\",\"fill\":\"#B2CAFF\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M8.08817 1.62512C9.14394 0.569299 10.8558 0.56929 11.9116 1.62512L12.8128 2.52633C12.9819 2.69533 13.2111 2.79028 13.4501 2.79028H14.5059C15.9991 2.79028 17.2095 4.00074 17.2095 5.4939V6.54972C17.2095 6.78874 17.3045 7.01796 17.4735 7.18697L18.3747 8.08818C19.4305 9.14401 19.4305 10.8559 18.3747 11.9117L17.4735 12.8129C17.3045 12.9819 17.2095 13.2112 17.2095 13.4502V14.5059C17.2095 15.9991 15.9991 17.2095 14.5059 17.2095H13.4501C13.2111 17.2095 12.9819 17.3045 12.8128 17.4735L11.9116 18.3747C10.8558 19.4305 9.14403 19.4305 8.08817 18.3747L7.18696 17.4735C7.01795 17.3045 6.78873 17.2095 6.54972 17.2095H5.49389C4.00072 17.2095 2.79028 15.9991 2.79028 14.5059V13.4502C2.79028 13.2112 2.69533 12.9819 2.52632 12.8129L1.62513 11.9117C0.569295 10.8559 0.569295 9.14401 1.62512 8.08818L2.52632 7.18697C2.69533 7.01797 2.79028 6.78874 2.79028 6.54972V5.4939C2.79028 4.00074 4.00072 2.79028 5.49389 2.79028H6.54972C6.78873 2.79028 7.01795 2.69533 7.18696 2.52633L8.08817 1.62512Z\",\"fill\":\"url(#paint0_linear_6295_120949)\",\"fill-opacity\":\"0.9\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M8.27881 1.81577L8.27881 1.81576C9.2293 0.865233 10.7704 0.865217 11.721 1.81577L12.6222 2.71697L12.6222 2.71701C12.8418 2.93652 13.1395 3.05989 13.4501 3.05989H14.5059C15.8502 3.05989 16.9399 4.14963 16.9399 5.4939V6.54972C16.9399 6.86027 17.0633 7.15805 17.2828 7.3776L17.2829 7.37762L18.1841 8.27882L18.3747 8.08818L18.1841 8.27882C19.1346 9.22937 19.1346 10.7705 18.1841 11.7211L17.2829 12.6223C17.0633 12.8418 16.9399 13.1396 16.9399 13.4502V14.5059C16.9399 15.8502 15.8502 16.9399 14.5059 16.9399H13.4501C13.1395 16.9399 12.8418 17.0633 12.6222 17.2828L12.6222 17.2829L11.721 18.1841C10.7704 19.1346 9.22939 19.1346 8.27881 18.1841L7.37761 17.2829L7.37759 17.2828C7.15804 17.0633 6.86027 16.9399 6.54972 16.9399H5.49389C4.14962 16.9399 3.05989 15.8502 3.05989 14.5059V13.4502C3.05989 13.1397 2.93655 12.8418 2.71696 12.6223C2.71696 12.6223 2.71695 12.6223 2.71694 12.6222L1.81577 11.7211C0.865224 10.7705 0.865226 9.22936 1.81576 8.27882L2.71696 7.37762C2.71696 7.37762 2.71696 7.37762 2.71696 7.37762C2.93654 7.15805 3.05989 6.86024 3.05989 6.54972V5.4939C3.05989 4.14964 4.14963 3.05989 5.49389 3.05989H6.54972C6.86024 3.05989 7.15803 2.93653 7.3776 2.71698L7.37761 2.71697L8.27881 1.81577Z\",\"stroke\":\"url(#paint1_linear_6295_120949)\",\"stroke-opacity\":\"0.8\",\"stroke-width\":\"0.539216\"},\"children\":[]}]}]},{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"mask\":\"url(#mask0_6295_120949)\"},\"children\":[{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"badge-bg\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M8.08817 1.62512C9.14394 0.569299 10.8558 0.56929 11.9116 1.62512L12.8128 2.52633C12.9819 2.69533 13.2111 2.79028 13.4501 2.79028H14.5059C15.9991 2.79028 17.2095 4.00074 17.2095 5.4939V6.54972C17.2095 6.78874 17.3045 7.01796 17.4735 7.18697L18.3747 8.08818C19.4305 9.14401 19.4305 10.8559 18.3747 11.9117L17.4735 12.8129C17.3045 12.9819 17.2095 13.2112 17.2095 13.4502V14.5059C17.2095 15.9991 15.9991 17.2095 14.5059 17.2095H13.4501C13.2111 17.2095 12.9819 17.3045 12.8128 17.4735L11.9116 18.3747C10.8558 19.4305 9.14403 19.4305 8.08817 18.3747L7.18696 17.4735C7.01795 17.3045 6.78873 17.2095 6.54972 17.2095H5.49389C4.00072 17.2095 2.79028 15.9991 2.79028 14.5059V13.4502C2.79028 13.2112 2.69533 12.9819 2.52632 12.8129L1.62513 11.9117C0.569295 10.8559 0.569295 9.14401 1.62512 8.08818L2.52632 7.18697C2.69533 7.01797 2.79028 6.78874 2.79028 6.54972V5.4939C2.79028 4.00074 4.00072 2.79028 5.49389 2.79028H6.54972C6.78873 2.79028 7.01795 2.69533 7.18696 2.52633L8.08817 1.62512Z\",\"fill\":\"#B2CAFF\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M8.08817 1.62512C9.14394 0.569299 10.8558 0.56929 11.9116 1.62512L12.8128 2.52633C12.9819 2.69533 13.2111 2.79028 13.4501 2.79028H14.5059C15.9991 2.79028 17.2095 4.00074 17.2095 5.4939V6.54972C17.2095 6.78874 17.3045 7.01796 17.4735 7.18697L18.3747 8.08818C19.4305 9.14401 19.4305 10.8559 18.3747 11.9117L17.4735 12.8129C17.3045 12.9819 17.2095 13.2112 17.2095 13.4502V14.5059C17.2095 15.9991 15.9991 17.2095 14.5059 17.2095H13.4501C13.2111 17.2095 12.9819 17.3045 12.8128 17.4735L11.9116 18.3747C10.8558 19.4305 9.14403 19.4305 8.08817 18.3747L7.18696 17.4735C7.01795 17.3045 6.78873 17.2095 6.54972 17.2095H5.49389C4.00072 17.2095 2.79028 15.9991 2.79028 14.5059V13.4502C2.79028 13.2112 2.69533 12.9819 2.52632 12.8129L1.62513 11.9117C0.569295 10.8559 0.569295 9.14401 1.62512 8.08818L2.52632 7.18697C2.69533 7.01797 2.79028 6.78874 2.79028 6.54972V5.4939C2.79028 4.00074 4.00072 2.79028 5.49389 2.79028H6.54972C6.78873 2.79028 7.01795 2.69533 7.18696 2.52633L8.08817 1.62512Z\",\"fill\":\"url(#paint2_linear_6295_120949)\",\"fill-opacity\":\"0.9\"},\"children\":[]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"d\":\"M8.44172 1.97868L8.44173 1.97867C9.30224 1.11812 10.6975 1.1181 11.5581 1.97868L12.4593 2.87988L12.4593 2.87995C12.7221 3.14262 13.0784 3.29028 13.4501 3.29028H14.5059C15.723 3.29028 16.7095 4.27687 16.7095 5.4939V6.54972C16.7095 6.9214 16.8572 7.27776 17.1199 7.54049L17.1199 7.54053L18.0211 8.44173L18.3747 8.08818L18.0211 8.44174C18.8817 9.3023 18.8817 10.6976 18.0211 11.5582L17.1199 12.4594C16.8572 12.7221 16.7095 13.0785 16.7095 13.4502V14.5059C16.7095 15.723 15.723 16.7095 14.5059 16.7095H13.4501C13.0784 16.7095 12.7221 16.8573 12.4594 17.1198L12.4593 17.1199L11.5581 18.0211C10.6975 18.8817 9.30233 18.8817 8.44172 18.0211L7.54052 17.1199L7.54048 17.1199C7.27775 16.8572 6.92139 16.7095 6.54972 16.7095H5.49389C4.27686 16.7095 3.29028 15.723 3.29028 14.5059V13.4502C3.29028 13.0786 3.14267 12.7221 2.87984 12.4593L1.97868 11.5582C1.11811 10.6976 1.11811 9.3023 1.97867 8.44173L2.87986 7.54054C2.87987 7.54053 2.87987 7.54053 2.87987 7.54053C3.14266 7.27775 3.29028 6.92134 3.29028 6.54972V5.4939C3.29028 4.27688 4.27687 3.29028 5.49389 3.29028H6.54972C6.92135 3.29028 7.27774 3.14265 7.54051 2.87989L7.54052 2.87988L8.44172 1.97868Z\",\"stroke\":\"url(#paint3_linear_6295_120949)\",\"stroke-opacity\":\"0.8\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"g\",\"attributes\":{\"id\":\"check\",\"filter\":\"url(#filter0_d_6295_120949)\"},\"children\":[{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"fill-rule\":\"evenodd\",\"clip-rule\":\"evenodd\",\"d\":\"M13.4219 6.98125C13.8732 7.28917 13.9829 7.89538 13.667 8.33526L10.04 13.3857C9.87754 13.6119 9.62408 13.7601 9.34287 13.7933C9.06166 13.8266 8.77923 13.7417 8.56605 13.5599L6.49346 11.7922C6.0789 11.4386 6.03689 10.8244 6.39963 10.4203C6.76238 10.0162 7.39252 9.97526 7.80709 10.3288L9.04316 11.3831L12.0328 7.22019C12.3487 6.78031 12.9706 6.67333 13.4219 6.98125Z\",\"fill\":\"url(#paint4_linear_6295_120949)\",\"shape-rendering\":\"crispEdges\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"path\",\"attributes\":{\"id\":\"highlight\",\"opacity\":\"0.5\",\"d\":\"M0 0H15.5556L5.26663 20H0V0Z\",\"fill\":\"url(#paint5_linear_6295_120949)\"},\"children\":[]}]}]},{\"type\":\"element\",\"name\":\"defs\",\"attributes\":{},\"children\":[{\"type\":\"element\",\"name\":\"filter\",\"attributes\":{\"id\":\"filter0_d_6295_120949\",\"x\":\"5.65283\",\"y\":\"6.55542\",\"width\":\"8.69458\",\"height\":\"7.99512\",\"filterUnits\":\"userSpaceOnUse\",\"color-interpolation-filters\":\"sRGB\"},\"children\":[{\"type\":\"element\",\"name\":\"feFlood\",\"attributes\":{\"flood-opacity\":\"0\",\"result\":\"BackgroundImageFix\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"in\":\"SourceAlpha\",\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\",\"result\":\"hardAlpha\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feOffset\",\"attributes\":{\"dy\":\"0.25\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feGaussianBlur\",\"attributes\":{\"stdDeviation\":\"0.25\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feComposite\",\"attributes\":{\"in2\":\"hardAlpha\",\"operator\":\"out\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feColorMatrix\",\"attributes\":{\"type\":\"matrix\",\"values\":\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in2\":\"BackgroundImageFix\",\"result\":\"effect1_dropShadow_6295_120949\"},\"children\":[]},{\"type\":\"element\",\"name\":\"feBlend\",\"attributes\":{\"mode\":\"normal\",\"in\":\"SourceGraphic\",\"in2\":\"effect1_dropShadow_6295_120949\",\"result\":\"shape\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint0_linear_6295_120949\",\"x1\":\"16.302\",\"y1\":\"19.1666\",\"x2\":\"-0.37184\",\"y2\":\"14.82\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"#155AEF\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#5289FF\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint1_linear_6295_120949\",\"x1\":\"8.67462\",\"y1\":\"0.833252\",\"x2\":\"18.9651\",\"y2\":\"12.5066\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.95\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#155AEF\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint2_linear_6295_120949\",\"x1\":\"16.302\",\"y1\":\"19.1666\",\"x2\":\"-0.37184\",\"y2\":\"14.82\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"#155AEF\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#5289FF\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint3_linear_6295_120949\",\"x1\":\"8.67462\",\"y1\":\"0.833252\",\"x2\":\"18.9651\",\"y2\":\"12.5066\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.95\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"#155AEF\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint4_linear_6295_120949\",\"x1\":\"10.0001\",\"y1\":\"6.80542\",\"x2\":\"10.0001\",\"y2\":\"13.8004\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"white\",\"stop-opacity\":\"0.9\"},\"children\":[]}]},{\"type\":\"element\",\"name\":\"linearGradient\",\"attributes\":{\"id\":\"paint5_linear_6295_120949\",\"x1\":\"-4.78632\",\"y1\":\"4.375\",\"x2\":\"16.2164\",\"y2\":\"10.4\",\"gradientUnits\":\"userSpaceOnUse\"},\"children\":[{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"stop-color\":\"white\",\"stop-opacity\":\"0.12\"},\"children\":[]},{\"type\":\"element\",\"name\":\"stop\",\"attributes\":{\"offset\":\"1\",\"stop-color\":\"white\",\"stop-opacity\":\"0.3\"},\"children\":[]}]}]}]}"),
	name: "VerifiedLight"
};
//#endregion
//#region app/components/base/icons/src/public/plugins/VerifiedLight.tsx
var Icon$4 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: VerifiedLight_default
});
Icon$4.displayName = "VerifiedLight";
//#endregion
//#region app/components/plugins/base/badges/verified.tsx
var Verified = ({ className, text }) => {
	const { theme } = useTheme();
	return /* @__PURE__ */ jsx(icon_with_tooltip_default, {
		className,
		theme,
		BadgeIconLight: Icon$4,
		BadgeIconDark: Icon$5,
		popupContent: text
	});
};
//#endregion
//#region utils/mcp.ts
/**
* MCP (Model Context Protocol) utility functions
*/
/**
* Determines if the MCP icon should be used based on the icon source
* @param src - The icon source, can be a string URL or an object with content and background
* @returns true if the MCP icon should be used (when it's an emoji object with 🔗 content)
*/
var shouldUseMcpIcon = (src) => {
	return typeof src === "object" && src?.content === "🔗";
};
/**
* Checks if an app icon should use the MCP icon
* @param iconType - The type of icon ('emoji' | 'image')
* @param icon - The icon content (emoji or file ID)
* @returns true if the MCP icon should be used
*/
var shouldUseMcpIconForAppIcon = (iconType, icon) => {
	return iconType === "emoji" && icon === "🔗";
};
//#endregion
//#region app/components/plugins/card/base/card-icon.tsx
var iconSizeMap = {
	xs: "w-4 h-4 text-base",
	tiny: "w-6 h-6 text-base",
	small: "w-8 h-8",
	medium: "w-9 h-9",
	large: "w-10 h-10"
};
var Icon$3 = ({ className, src, installed = false, installFailed = false, size = "large" }) => {
	const iconClassName = "flex justify-center items-center gap-2 absolute bottom-[-4px] right-[-4px] w-[18px] h-[18px] rounded-full border-2 border-components-panel-bg";
	if (typeof src === "object") return /* @__PURE__ */ jsx("div", {
		className: cn("relative", className),
		children: /* @__PURE__ */ jsx(app_icon_default, {
			size,
			iconType: "emoji",
			icon: src.content,
			background: src.background,
			className: "rounded-md",
			innerIcon: shouldUseMcpIcon(src) ? /* @__PURE__ */ jsx(Icon$8, { className: "h-8 w-8 text-text-primary-on-surface" }) : void 0
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative shrink-0 rounded-md bg-contain bg-center bg-no-repeat", iconSizeMap[size], className),
		style: { backgroundImage: `url(${src})` },
		children: [installed && /* @__PURE__ */ jsx("div", {
			className: cn(iconClassName, "bg-state-success-solid"),
			children: /* @__PURE__ */ jsx(s7, { className: "h-3 w-3 text-text-primary-on-surface" })
		}), installFailed && /* @__PURE__ */ jsx("div", {
			className: cn(iconClassName, "bg-state-destructive-solid"),
			children: /* @__PURE__ */ jsx(P7, { className: "h-3 w-3 text-text-primary-on-surface" })
		})]
	});
};
//#endregion
//#region app/components/plugins/utils.ts
var hasUrlProtocol = (value) => /^[a-z][a-z\d+.-]*:/i.test(value);
var getPluginCardIconUrl = (plugin, icon, tenantId) => {
	if (!icon) return "";
	if (typeof icon === "object") return icon;
	if (hasUrlProtocol(icon) || icon.startsWith("/")) return icon;
	if (plugin.from === "marketplace") return `${MARKETPLACE_API_PREFIX}/${plugin.type === "bundle" ? "bundles" : "plugins"}/${plugin.org}/${plugin.name}/icon`;
	if (!tenantId) return icon;
	return `${API_PREFIX}/workspaces/current/plugin/icon?tenant_id=${tenantId}&filename=${icon}`;
};
var BoxSparkleFill_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "14",
			"height": "14",
			"viewBox": "0 0 14 14",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "Icon" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Vector",
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M11.3891 2.41987C11.6635 2.58871 11.749 2.94802 11.5802 3.22239L10.3324 5.25H11.0833C11.4055 5.25 11.6667 5.51117 11.6667 5.83334V11.6667C11.6667 12.311 11.1444 12.8333 10.5 12.8333H3.50001C2.85568 12.8333 2.33334 12.311 2.33334 11.6667V5.83334C2.33334 5.51117 2.59451 5.25 2.91668 5.25H8.96252L10.5865 2.61094C10.7554 2.33657 11.1147 2.25102 11.3891 2.41987ZM5.83334 7.58334C5.51118 7.58334 5.25001 7.84449 5.25001 8.16667C5.25001 8.48884 5.51118 8.75 5.83334 8.75H8.16668C8.48885 8.75 8.75001 8.48884 8.75001 8.16667C8.75001 7.84449 8.48885 7.58334 8.16668 7.58334H5.83334Z",
					"fill": "currentColor"
				},
				"children": []
			}, {
				"type": "element",
				"name": "g",
				"attributes": {
					"id": "Vector_2",
					"opacity": "0.5"
				},
				"children": [{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M6.91257 1.79347C6.96898 1.76525 7.01477 1.71948 7.043 1.66303L7.32195 1.10508C7.42946 0.890105 7.73623 0.890105 7.84374 1.10508L8.12269 1.66303C8.15093 1.71948 8.19672 1.76525 8.25313 1.79347L8.81108 2.07245C9.0261 2.17994 9.0261 2.48672 8.81108 2.5942L8.25313 2.87318C8.19672 2.9014 8.15093 2.94717 8.12269 3.00362L7.84374 3.56158C7.73623 3.77655 7.42946 3.77655 7.32195 3.56158L7.043 3.00362C7.01477 2.94717 6.96898 2.9014 6.91257 2.87318L6.35461 2.5942C6.13965 2.48672 6.13965 2.17994 6.35461 2.07245L6.91257 1.79347Z",
						"fill": "currentColor"
					},
					"children": []
				}, {
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M3.80145 2.7657C3.85789 2.73748 3.90366 2.69171 3.93189 2.63526L4.11364 2.27174C4.22113 2.05677 4.5279 2.05677 4.63539 2.27174L4.81715 2.63526C4.84537 2.6917 4.89114 2.73748 4.94759 2.7657L5.3111 2.94745C5.52607 3.05494 5.52607 3.36172 5.3111 3.4692L4.94759 3.65096C4.89114 3.67919 4.84537 3.72495 4.81715 3.7814L4.63539 4.14491C4.5279 4.35988 4.22113 4.35988 4.11364 4.14491L3.93189 3.7814C3.90366 3.72495 3.85789 3.67919 3.80145 3.65096L3.43793 3.4692C3.22296 3.36172 3.22296 3.05494 3.43793 2.94745L3.80145 2.7657Z",
						"fill": "currentColor"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "BoxSparkleFill"
};
//#endregion
//#region app/components/base/icons/src/vender/plugin/BoxSparkleFill.tsx
var Icon$2 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: BoxSparkleFill_default
});
Icon$2.displayName = "BoxSparkleFill";
var LeftCorner_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "13",
			"height": "20",
			"viewBox": "0 0 13 20",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"id": "Shape",
				"d": "M0 0H13V20C9.98017 20 7.26458 18.1615 6.14305 15.3576L0 0Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "LeftCorner"
};
//#endregion
//#region app/components/base/icons/src/vender/plugin/LeftCorner.tsx
var Icon$1 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: LeftCorner_default
});
Icon$1.displayName = "LeftCorner";
var Trigger_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "16",
			"height": "16",
			"viewBox": "0 0 16 16",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					"d": "M7.1499 6.35213L7.25146 6.38208L14.2248 9.03898L14.3172 9.08195C14.7224 9.30788 14.778 9.87906 14.424 10.179L14.342 10.2389L11.8172 11.817L10.2391 14.3417C9.96271 14.7839 9.32424 14.751 9.08219 14.317L9.03923 14.2245L6.38232 7.25122C6.18829 6.74188 6.64437 6.24196 7.1499 6.35213ZM9.81201 12.5084L10.7671 10.981L10.8114 10.9185C10.8589 10.8589 10.9163 10.8075 10.9813 10.7668L12.5086 9.81177L8.15251 8.15226L9.81201 12.5084Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M5.2124 10.3977L3.56266 12.0474L2.61995 11.1047L4.26969 9.455L5.2124 10.3977Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M3.66683 7.99992H1.3335V6.66659H3.66683V7.99992Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M5.2124 4.2688L4.26969 5.21151L2.61995 3.56177L3.56266 2.61906L5.2124 4.2688Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M12.0477 3.56177L10.3979 5.21151L9.45524 4.2688L11.105 2.61906L12.0477 3.56177Z",
					"fill": "currentColor"
				},
				"children": []
			},
			{
				"type": "element",
				"name": "path",
				"attributes": {
					"d": "M8.00016 3.66659H6.66683V1.33325H8.00016V3.66659Z",
					"fill": "currentColor"
				},
				"children": []
			}
		]
	},
	name: "Trigger"
};
//#endregion
//#region app/components/base/icons/src/vender/plugin/Trigger.tsx
var Icon = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Trigger_default
});
Icon.displayName = "Trigger";
//#endregion
//#region app/components/plugins/card/base/corner-mark.tsx
var CornerMark = ({ text }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: "absolute right-0 top-0 flex pl-[13px] ",
		children: [/* @__PURE__ */ jsx(Icon$1, { className: "text-background-section" }), /* @__PURE__ */ jsx("div", {
			className: "system-2xs-medium-uppercase h-5 rounded-tr-xl bg-background-section pr-2 leading-5 text-text-tertiary",
			children: text
		})]
	});
};
//#endregion
//#region app/components/plugins/card/base/description.tsx
var Description = ({ className, text, descriptionLineRows }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn("system-xs-regular text-text-tertiary", useMemo(() => {
			if (descriptionLineRows === 1) return "h-4 truncate";
			else if (descriptionLineRows === 2) return "h-8 line-clamp-2";
			else return "h-12 line-clamp-3";
		}, [descriptionLineRows]), className),
		children: text
	});
};
//#endregion
//#region app/components/plugins/card/base/org-info.tsx
var OrgInfo = ({ className, orgName, packageName, packageNameClassName }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-4 items-center space-x-0.5", className),
		children: [orgName && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", {
			className: "system-xs-regular shrink-0 text-text-tertiary",
			children: orgName
		}), /* @__PURE__ */ jsx("span", {
			className: "system-xs-regular shrink-0 text-text-quaternary",
			children: "/"
		})] }), /* @__PURE__ */ jsx("span", {
			className: cn("system-xs-regular w-0 shrink-0 grow truncate text-text-tertiary", packageNameClassName),
			children: packageName
		})]
	});
};
//#endregion
//#region app/components/plugins/card/base/title.tsx
var Title = ({ title }) => {
	return /* @__PURE__ */ jsx("div", {
		className: "system-md-semibold truncate text-text-secondary",
		children: title
	});
};
//#endregion
//#region app/components/plugins/card/base/placeholder.tsx
var LoadingPlaceholder = ({ className }) => /* @__PURE__ */ jsx("div", { className: cn("h-2 rounded-sm bg-text-quaternary opacity-20", className) });
var Placeholder = ({ wrapClassName, loadingFileName }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: wrapClassName,
		children: [/* @__PURE__ */ jsxs(SkeletonRow, { children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-10 w-10 items-center justify-center gap-2 rounded-[10px] border-[0.5px]\n              border-components-panel-border bg-background-default p-1 backdrop-blur-sm",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex h-5 w-5 items-center justify-center",
				children: /* @__PURE__ */ jsx(Icon$9, { className: "text-text-tertiary" })
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "grow",
			children: /* @__PURE__ */ jsxs(SkeletonContainer, { children: [/* @__PURE__ */ jsx("div", {
				className: "flex h-5 items-center",
				children: loadingFileName ? /* @__PURE__ */ jsx(Title, { title: loadingFileName }) : /* @__PURE__ */ jsx(SkeletonRectangle, { className: "w-[260px]" })
			}), /* @__PURE__ */ jsxs(SkeletonRow, {
				className: "h-4",
				children: [
					/* @__PURE__ */ jsx(SkeletonRectangle, { className: "w-[41px]" }),
					/* @__PURE__ */ jsx(SkeletonPoint, {}),
					/* @__PURE__ */ jsx(SkeletonRectangle, { className: "w-[180px]" })
				]
			})] })
		})] }), /* @__PURE__ */ jsx(SkeletonRectangle, { className: "mt-3 w-[420px]" })]
	});
};
//#endregion
//#region app/components/plugins/card/index.tsx
var Card = ({ className, payload, titleLeft, installed, installFailed, hideCornerMark, descriptionLineRows = 2, footer, isLoading = false, loadingFileName, limitedInstall = false }) => {
	const locale = useGetLanguage();
	const { t } = useTranslation$1();
	const { categoriesMap } = useCategories(true);
	const currentWorkspaceId = useSelector((s) => s.currentWorkspace.id);
	const { category, type, name, org, label, brief, icon, icon_dark, verified, badges = [], from } = payload;
	const { theme } = useTheme();
	const iconSrc = getPluginCardIconUrl({
		from,
		name,
		org,
		type
	}, theme === Theme.dark && icon_dark ? icon_dark : icon, currentWorkspaceId);
	const getLocalizedText = (obj) => obj ? renderI18nObject(obj, locale) : "";
	const isPartner = badges.includes("partner");
	const wrapClassName = cn("hover-bg-components-panel-on-panel-item-bg relative overflow-hidden rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-on-panel-item-bg shadow-xs", className);
	if (isLoading) return /* @__PURE__ */ jsx(Placeholder, {
		wrapClassName,
		loadingFileName
	});
	return /* @__PURE__ */ jsxs("div", {
		className: wrapClassName,
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("p-4 pb-3", limitedInstall && "pb-1"),
			children: [
				!hideCornerMark && /* @__PURE__ */ jsx(CornerMark, { text: categoriesMap[type === "bundle" ? type : category]?.label }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex",
					children: [/* @__PURE__ */ jsx(Icon$3, {
						src: iconSrc,
						installed,
						installFailed
					}), /* @__PURE__ */ jsxs("div", {
						className: "ml-3 w-0 grow",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex h-5 items-center",
							children: [
								/* @__PURE__ */ jsx(Title, { title: getLocalizedText(label) }),
								isPartner && /* @__PURE__ */ jsx(Partner, {
									className: "ml-0.5 h-4 w-4",
									text: t("marketplace.partnerTip", { ns: "plugin" })
								}),
								verified && /* @__PURE__ */ jsx(Verified, {
									className: "ml-0.5 h-4 w-4",
									text: t("marketplace.verifiedTip", { ns: "plugin" })
								}),
								titleLeft,
								" "
							]
						}), /* @__PURE__ */ jsx(OrgInfo, {
							className: "mt-0.5",
							orgName: org,
							packageName: name
						})]
					})]
				}),
				/* @__PURE__ */ jsx(Description, {
					className: "mt-3",
					text: getLocalizedText(brief),
					descriptionLineRows
				}),
				!!footer && /* @__PURE__ */ jsx("div", { children: footer })
			]
		}), limitedInstall && /* @__PURE__ */ jsxs("div", {
			className: "relative flex h-8 items-center gap-x-2 px-3 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-toast-warning-bg after:opacity-40",
			children: [/* @__PURE__ */ jsx(D, { className: "h-3 w-3 shrink-0 text-text-warning-secondary" }), /* @__PURE__ */ jsx("p", {
				className: "z-10 grow text-text-secondary system-xs-regular",
				children: t("installModal.installWarning", { ns: "plugin" })
			})]
		})]
	});
};
var card_default = React$1.memo(Card);
//#endregion
//#region app/components/plugins/install-plugin/utils.ts
var pluginManifestToCardPluginProps = (pluginManifest) => {
	return {
		plugin_id: pluginManifest.plugin_unique_identifier,
		type: pluginManifest.category,
		category: pluginManifest.category,
		name: pluginManifest.name,
		version: pluginManifest.version,
		latest_version: "",
		latest_package_identifier: "",
		org: pluginManifest.author,
		author: pluginManifest.author,
		label: pluginManifest.label,
		brief: pluginManifest.description,
		description: pluginManifest.description,
		icon: pluginManifest.icon,
		icon_dark: pluginManifest.icon_dark,
		verified: pluginManifest.verified,
		introduction: "",
		repository: "",
		install_count: 0,
		endpoint: { settings: [] },
		tags: pluginManifest.tags.map((tag) => ({ name: tag })),
		badges: [],
		verification: { authorized_category: "langgenius" },
		from: "package"
	};
};
var pluginManifestInMarketToPluginProps = (pluginManifest) => {
	return {
		plugin_id: pluginManifest.plugin_unique_identifier,
		type: pluginManifest.category,
		category: pluginManifest.category,
		name: pluginManifest.name,
		version: pluginManifest.latest_version,
		latest_version: pluginManifest.latest_version,
		latest_package_identifier: "",
		org: pluginManifest.org,
		label: pluginManifest.label,
		brief: pluginManifest.brief,
		description: pluginManifest.brief,
		icon: pluginManifest.icon,
		verified: true,
		introduction: pluginManifest.introduction,
		repository: "",
		install_count: 0,
		endpoint: { settings: [] },
		tags: [],
		badges: pluginManifest.badges,
		verification: isEmpty(pluginManifest.verification) ? { authorized_category: "langgenius" } : pluginManifest.verification,
		from: pluginManifest.from
	};
};
var parseGitHubUrl = (url) => {
	const match = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/.exec(url);
	return match ? {
		isValid: true,
		owner: match[1],
		repo: match[2]
	} : { isValid: false };
};
var convertRepoToUrl = (repo) => {
	return repo ? `https://github.com/${repo}` : "";
};
//#endregion
//#region app/components/plugins/install-plugin/base/installed.tsx
var Installed = ({ payload, isMarketPayload, isFailed, errMsg, onCancel }) => {
	const { t } = useTranslation();
	const handleClose = () => {
		onCancel();
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-start justify-center gap-4 self-stretch px-6 py-3",
		children: [/* @__PURE__ */ jsx("p", {
			className: "system-md-regular text-text-secondary",
			children: isFailed && errMsg ? errMsg : t(`installModal.${isFailed ? "installFailedDesc" : "installedSuccessfullyDesc"}`, { ns: "plugin" })
		}), payload && /* @__PURE__ */ jsx("div", {
			className: "flex flex-wrap content-start items-start gap-1 self-stretch rounded-2xl bg-background-section-burn p-2",
			children: /* @__PURE__ */ jsx(card_default, {
				className: "w-full",
				payload: isMarketPayload ? pluginManifestInMarketToPluginProps(payload) : pluginManifestToCardPluginProps(payload),
				installed: !isFailed,
				installFailed: isFailed,
				titleLeft: /* @__PURE__ */ jsx(Badge, {
					className: "mx-1",
					size: "s",
					state: BadgeState.Default,
					children: payload.version || payload.latest_version
				})
			})
		})]
	}), /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-end gap-2 self-stretch p-6 pt-5",
		children: /* @__PURE__ */ jsx(Button, {
			variant: "primary",
			className: "min-w-[72px]",
			onClick: handleClose,
			children: t("operation.close", { ns: "common" })
		})
	})] });
};
var installed_default = React$1.memo(Installed);
//#endregion
//#region app/components/plugins/install-plugin/hooks/use-fold-anim-into.ts
var animTime = 750;
var modalClassName = "install-modal";
var COUNT_DOWN_TIME = 15e3;
function getElemCenter(elem) {
	const rect = elem.getBoundingClientRect();
	return {
		x: rect.left + rect.width / 2 + window.scrollX,
		y: rect.top + rect.height / 2 + window.scrollY
	};
}
var useFoldAnimInto = (onClose) => {
	let countDownRunId;
	const clearCountDown = () => {
		clearTimeout(countDownRunId);
	};
	const foldIntoAnim = async () => {
		clearCountDown();
		const modalElem = document.querySelector(`.${modalClassName}`);
		const pluginTaskTriggerElem = document.getElementById("plugin-task-trigger") || document.querySelector(".plugins-nav-button");
		if (!modalElem || !pluginTaskTriggerElem) {
			onClose();
			return;
		}
		const modelCenter = getElemCenter(modalElem);
		const modalElemRect = modalElem.getBoundingClientRect();
		const pluginTaskTriggerCenter = getElemCenter(pluginTaskTriggerElem);
		const xDiff = pluginTaskTriggerCenter.x - modelCenter.x;
		const yDiff = pluginTaskTriggerCenter.y - modelCenter.y;
		const scale = 1 / Math.max(modalElemRect.width, modalElemRect.height);
		modalElem.style.transition = `all cubic-bezier(0.4, 0, 0.2, 1) ${animTime}ms`;
		modalElem.style.transform = `translate(${xDiff}px, ${yDiff}px) scale(${scale})`;
		await sleep(animTime);
		onClose();
	};
	const countDownFoldIntoAnim = async () => {
		countDownRunId = window.setTimeout(() => {
			foldIntoAnim();
		}, COUNT_DOWN_TIME);
	};
	return {
		modalClassName,
		foldIntoAnim,
		clearCountDown,
		countDownFoldIntoAnim
	};
};
//#endregion
//#region app/components/plugins/install-plugin/hooks/use-hide-logic.ts
var useHideLogic = (onClose) => {
	const { modalClassName, foldIntoAnim: doFoldAnimInto, clearCountDown, countDownFoldIntoAnim } = useFoldAnimInto(onClose);
	const [isInstalling, doSetIsInstalling] = useState(false);
	const setIsInstalling = useCallback((isInstalling) => {
		if (!isInstalling) clearCountDown();
		doSetIsInstalling(isInstalling);
	}, [clearCountDown]);
	return {
		modalClassName,
		foldAnimInto: useCallback(() => {
			if (isInstalling) {
				doFoldAnimInto();
				return;
			}
			onClose();
		}, [
			doFoldAnimInto,
			isInstalling,
			onClose
		]),
		setIsInstalling,
		handleStartToInstall: useCallback(() => {
			setIsInstalling(true);
			countDownFoldIntoAnim();
		}, [countDownFoldIntoAnim, setIsInstalling])
	};
};
//#endregion
//#region app/components/plugins/install-plugin/base/version.tsx
var Version = ({ hasInstalled, installedVersion, toInstallVersion }) => {
	return /* @__PURE__ */ jsx(Fragment$1, { children: !hasInstalled ? /* @__PURE__ */ jsx(Badge, {
		className: "mx-1",
		size: "s",
		state: BadgeState.Default,
		children: toInstallVersion
	}) : /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(Badge, {
		className: "mx-1",
		size: "s",
		state: BadgeState.Warning,
		children: `${installedVersion} -> ${toInstallVersion}`
	}) }) });
};
var version_default = React$1.memo(Version);
//#endregion
//#region app/components/plugins/install-plugin/hooks/use-check-installed.tsx
var useCheckInstalled = (props) => {
	const { data, isLoading, error } = useCheckInstalled$1(props);
	return {
		installedInfo: useMemo(() => {
			if (!data) return void 0;
			const res = {};
			data?.plugins.forEach((plugin) => {
				res[plugin.plugin_id] = {
					installedId: plugin.id,
					installedVersion: plugin.declaration.version,
					uniqueIdentifier: plugin.plugin_unique_identifier
				};
			});
			return res;
		}, [data]),
		isLoading,
		error
	};
};
//#endregion
//#region node_modules/.pnpm/std-semver@1.0.8/node_modules/std-semver/dist/index.js
function compareNumber(a, b) {
	if (isNaN(a) || isNaN(b)) throw new Error("Cannot compare against non-numbers");
	return a === b ? 0 : a < b ? -1 : 1;
}
function checkIdentifier(v1 = [], v2 = []) {
	if (v1.length && !v2.length) return -1;
	if (!v1.length && v2.length) return 1;
	return 0;
}
function compareIdentifier(v1 = [], v2 = []) {
	const length = Math.max(v1.length, v2.length);
	for (let i = 0; i < length; i++) {
		const a = v1[i];
		const b = v2[i];
		if (a === void 0 && b === void 0) return 0;
		if (b === void 0) return 1;
		if (a === void 0) return -1;
		if (typeof a === "string" && typeof b === "number") return 1;
		if (typeof a === "number" && typeof b === "string") return -1;
		if (a < b) return -1;
		if (a > b) return 1;
	}
	return 0;
}
/**
* A single `0`, or a non-zero digit followed by zero or more digits.
*/ var NUMERIC_IDENTIFIER = "0|[1-9]\\d*";
/**
* Zero or more digits, followed by a letter or hyphen, and then zero or more letters, digits, or hyphens.
*/ var NON_NUMERIC_IDENTIFIER = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
/**
* Three dot-separated numeric identifiers.
*/ var VERSION_CORE = `(?<major>${NUMERIC_IDENTIFIER})\\.(?<minor>${NUMERIC_IDENTIFIER})\\.(?<patch>${NUMERIC_IDENTIFIER})`;
/**
* A numeric identifier, or a non-numeric identifier.
*/ var PRERELEASE_IDENTIFIER = `(?:${NUMERIC_IDENTIFIER}|${NON_NUMERIC_IDENTIFIER})`;
/**
* A hyphen, followed by one or more dot-separated pre-release version identifiers.
* @example "-pre.release"
*/ var PRERELEASE = `(?:-(?<prerelease>${PRERELEASE_IDENTIFIER}(?:\\.${PRERELEASE_IDENTIFIER})*))`;
/**
* Any combination of digits, letters, or hyphens.
*/ var BUILD_IDENTIFIER = "[0-9A-Za-z-]+";
/**
* A plus sign, followed by one or more period-separated build metadata identifiers.
* @example "+build.meta"
*/ var BUILD = `(?:\\+(?<buildmetadata>${BUILD_IDENTIFIER}(?:\\.${BUILD_IDENTIFIER})*))`;
/**
* A version, followed optionally by a pre-release version and build metadata.
*/ var FULL_VERSION = `v?${VERSION_CORE}${PRERELEASE}?${BUILD}?`;
var FULL_REGEXP = new RegExp(`^${FULL_VERSION}$`);
/**
* A comparator.
* @example `=`, `<`, `<=`, `>`, `>=`
*/ var COMPARATOR = "(?:<|>)?=?";
var XRANGE_IDENTIFIER = `${NUMERIC_IDENTIFIER}|x|X|\\*`;
/**
* A version that can contain wildcards.
* @example "x", "1.x", "1.x.x", "1.2.x", "*", "1.*", "1.*.*", "1.2.*"
*/ var XRANGE = `[v=\\s]*(?<major>${XRANGE_IDENTIFIER})(?:\\.(?<minor>${XRANGE_IDENTIFIER})(?:\\.(?<patch>${XRANGE_IDENTIFIER})${PRERELEASE}?${BUILD}?)?)?`;
new RegExp(`^(?<operator>~>?|\\^|${COMPARATOR})\\s*${XRANGE}$`);
new RegExp(`^(?<operator>${COMPARATOR})\\s*(${FULL_VERSION})$|^$`);
/**
* Returns true if the value is a valid SemVer number.
*
* Must be a number. Must not be NaN. Can be positive or negative infinity.
* Can be between 0 and MAX_SAFE_INTEGER.
* @param value The value to check
* @returns True if its a valid semver number
*/ function isValidNumber(value) {
	return typeof value === "number" && !Number.isNaN(value) && (!Number.isFinite(value) || 0 <= value && value <= Number.MAX_SAFE_INTEGER);
}
var NUMERIC_IDENTIFIER_REGEXP = new RegExp(`^${NUMERIC_IDENTIFIER}$`);
function parsePrerelease(prerelease) {
	return prerelease.split(".").filter(Boolean).map((id) => {
		if (NUMERIC_IDENTIFIER_REGEXP.test(id)) {
			const number = Number(id);
			if (isValidNumber(number)) return number;
		}
		return id;
	});
}
function parseBuild(buildmetadata) {
	return buildmetadata.split(".").filter(Boolean);
}
function parseNumber(input, errorMessage) {
	const number = Number(input);
	if (!isValidNumber(number)) throw new TypeError(errorMessage);
	return number;
}
/**
* Compare two SemVers.
*
* Returns `0` if `version1` equals `version2`, or `1` if `version1` is greater, or `-1` if `version2` is
* greater.
*
* Sorts in ascending order if passed to {@linkcode Array.sort}.
*
* @example Usage
* ```ts
* import { parse, compare } from "@std/semver";
* import { assertEquals } from "@std/assert";
*
* const version1 = parse("1.2.3");
* const version2 = parse("1.2.4");
*
* assertEquals(compare(version1, version2), -1);
* assertEquals(compare(version2, version1), 1);
* assertEquals(compare(version1, version1), 0);
* ```
*
* @param version1 The first SemVer to compare
* @param version2 The second SemVer to compare
* @returns `1` if `version1` is greater, `0` if equal, or `-1` if `version2` is greater
*/ function compare(version1, version2) {
	if (version1 === version2) return 0;
	return compareNumber(version1.major, version2.major) || compareNumber(version1.minor, version2.minor) || compareNumber(version1.patch, version2.patch) || checkIdentifier(version1.prerelease, version2.prerelease) || compareIdentifier(version1.prerelease, version2.prerelease);
}
/**
* Less than comparison for two SemVers.
*
* This is equal to `compare(version1, version2) < 0`.
*
* @example Usage
* ```ts
* import { parse, lessThan } from "@std/semver";
* import { assert } from "@std/assert";
*
* const version1 = parse("1.2.3");
* const version2 = parse("1.2.4");
*
* assert(lessThan(version1, version2));
* assert(!lessThan(version2, version1));
* assert(!lessThan(version1, version1));
* ```
*
* @param version1 the first version to compare
* @param version2 the second version to compare
* @returns `true` if `version1` is less than `version2`, `false` otherwise
*/ function lessThan(version1, version2) {
	return compare(version1, version2) < 0;
}
/**
* Attempt to parse a string as a semantic version, returning a SemVer object.
*
* @example Usage
* ```ts
* import { parse } from "@std/semver/parse";
* import { assertEquals } from "@std/assert";
*
* const version = parse("1.2.3");
* assertEquals(version, {
*   major: 1,
*   minor: 2,
*   patch: 3,
*   prerelease: [],
*   build: [],
* });
* ```
*
* @throws {TypeError} If the input string is invalid.
* @param value The version string to parse
* @returns A valid SemVer
*/ function parse(value) {
	if (typeof value !== "string") throw new TypeError(`Cannot parse version as version must be a string: received ${typeof value}`);
	if (value.length > 256) throw new TypeError(`Cannot parse version as version length is too long: length is ${value.length}, max length is 256`);
	value = value.trim();
	const groups = value.match(FULL_REGEXP)?.groups;
	if (!groups) throw new TypeError(`Cannot parse version: ${value}`);
	return {
		major: parseNumber(groups.major, `Cannot parse version ${value}: invalid major version`),
		minor: parseNumber(groups.minor, `Cannot parse version ${value}: invalid minor version`),
		patch: parseNumber(groups.patch, `Cannot parse version ${value}: invalid patch version`),
		prerelease: groups.prerelease ? parsePrerelease(groups.prerelease) : [],
		build: groups.buildmetadata ? parseBuild(groups.buildmetadata) : []
	};
}
/**
* Greater than or equal to comparison for two SemVers.
*
* This is equal to `compare(version1, version2) >= 0`.
*
* @example Usage
* ```ts
* import { parse, greaterOrEqual } from "@std/semver";
* import { assert } from "@std/assert";
*
* const version1 = parse("1.2.3");
* const version2 = parse("1.2.4");
*
* assert(greaterOrEqual(version2, version1));
* assert(!greaterOrEqual(version1, version2));
* assert(greaterOrEqual(version1, version1));
* ```
*
* @param version1 The first version to compare
* @param version2 The second version to compare
* @returns `true` if `version1` is greater than or equal to `version2`, `false` otherwise
*/ function greaterOrEqual(version1, version2) {
	return compare(version1, version2) >= 0;
}
//#endregion
//#region utils/semver.ts
var parseVersion = (version) => parse(version);
var getLatestVersion = (versionList) => {
	return [...versionList].sort((versionA, versionB) => {
		return compare(parseVersion(versionB), parseVersion(versionA));
	})[0];
};
var compareVersion = (v1, v2) => {
	return compare(parseVersion(v1), parseVersion(v2));
};
var isEqualOrLaterThanVersion = (baseVersion, targetVersion) => {
	return greaterOrEqual(parseVersion(baseVersion), parseVersion(targetVersion));
};
var isEarlierThanVersion = (baseVersion, targetVersion) => {
	return lessThan(parseVersion(baseVersion), parseVersion(targetVersion));
};
//#endregion
export { shouldUseMcpIconForAppIcon as C, usePluginPageTabs as D, useCategories as E, usePluginsWithLatestVersion as O, Icon$3 as S, PLUGIN_PAGE_TABS_MAP as T, OrgInfo as _, useCheckInstalled as a, Icon as b, installed_default as c, pluginManifestInMarketToPluginProps as d, pluginManifestToCardPluginProps as f, Title as g, Placeholder as h, isEqualOrLaterThanVersion as i, useTags as k, convertRepoToUrl as l, LoadingPlaceholder as m, getLatestVersion as n, version_default as o, card_default as p, isEarlierThanVersion as r, useHideLogic as s, compareVersion as t, parseGitHubUrl as u, Description as v, Verified as w, Icon$2 as x, CornerMark as y };
