import { M as FW, N as Fl, gi as yO, lt as MO } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { o as ModelFeatureEnum, s as ModelFeatureTextEnum } from "./declarations-DYMEe7hD.js";
import { S as sizeFormat, v as modelTypeFormat } from "./credential-item-C22_bUSw.js";
import { i as useLanguage } from "./hooks-BTelimHS.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/header/account-setting/model-provider-page/model-badge/index.tsx
var ModelBadge = ({ className, children }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn("inline-flex h-[18px] shrink-0 items-center justify-center whitespace-nowrap rounded-[5px] border border-divider-deep bg-components-badge-bg-dimm px-[5px] text-text-tertiary system-2xs-medium-uppercase", className),
		children
	});
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-selector/feature-icon.tsx
var FeatureIcon = ({ className, feature, showFeaturesLabel }) => {
	const { t } = useTranslation();
	if (feature === ModelFeatureEnum.vision) {
		if (showFeaturesLabel) return /* @__PURE__ */ jsxs(ModelBadge, {
			className: cn("gap-x-0.5", className),
			children: [/* @__PURE__ */ jsx(FW, { className: "size-3" }), /* @__PURE__ */ jsx("span", { children: ModelFeatureTextEnum.vision })]
		});
		return /* @__PURE__ */ jsx(tooltip_default, {
			popupContent: t("modelProvider.featureSupported", {
				ns: "common",
				feature: ModelFeatureTextEnum.vision
			}),
			children: /* @__PURE__ */ jsx("div", {
				className: "inline-block cursor-help",
				children: /* @__PURE__ */ jsx(ModelBadge, {
					className: cn("w-[18px] justify-center !px-0", className),
					children: /* @__PURE__ */ jsx(FW, { className: "size-3" })
				})
			})
		});
	}
	if (feature === ModelFeatureEnum.document) {
		if (showFeaturesLabel) return /* @__PURE__ */ jsxs(ModelBadge, {
			className: cn("gap-x-0.5", className),
			children: [/* @__PURE__ */ jsx(Fl, { className: "size-3" }), /* @__PURE__ */ jsx("span", { children: ModelFeatureTextEnum.document })]
		});
		return /* @__PURE__ */ jsx(tooltip_default, {
			popupContent: t("modelProvider.featureSupported", {
				ns: "common",
				feature: ModelFeatureTextEnum.document
			}),
			children: /* @__PURE__ */ jsx("div", {
				className: "inline-block cursor-help",
				children: /* @__PURE__ */ jsx(ModelBadge, {
					className: cn("w-[18px] justify-center !px-0", className),
					children: /* @__PURE__ */ jsx(Fl, { className: "size-3" })
				})
			})
		});
	}
	if (feature === ModelFeatureEnum.audio) {
		if (showFeaturesLabel) return /* @__PURE__ */ jsxs(ModelBadge, {
			className: cn("gap-x-0.5", className),
			children: [/* @__PURE__ */ jsx(MO, { className: "size-3" }), /* @__PURE__ */ jsx("span", { children: ModelFeatureTextEnum.audio })]
		});
		return /* @__PURE__ */ jsx(tooltip_default, {
			popupContent: t("modelProvider.featureSupported", {
				ns: "common",
				feature: ModelFeatureTextEnum.audio
			}),
			children: /* @__PURE__ */ jsx("div", {
				className: "inline-block cursor-help",
				children: /* @__PURE__ */ jsx(ModelBadge, {
					className: cn("w-[18px] justify-center !px-0", className),
					children: /* @__PURE__ */ jsx(MO, { className: "size-3" })
				})
			})
		});
	}
	if (feature === ModelFeatureEnum.video) {
		if (showFeaturesLabel) return /* @__PURE__ */ jsxs(ModelBadge, {
			className: cn("gap-x-0.5", className),
			children: [/* @__PURE__ */ jsx(yO, { className: "size-3" }), /* @__PURE__ */ jsx("span", { children: ModelFeatureTextEnum.video })]
		});
		return /* @__PURE__ */ jsx(tooltip_default, {
			popupContent: t("modelProvider.featureSupported", {
				ns: "common",
				feature: ModelFeatureTextEnum.video
			}),
			children: /* @__PURE__ */ jsx("div", {
				className: "inline-block cursor-help",
				children: /* @__PURE__ */ jsx(ModelBadge, {
					className: cn("w-[18px] justify-center !px-0", className),
					children: /* @__PURE__ */ jsx(yO, { className: "size-3" })
				})
			})
		});
	}
	return null;
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-name/index.tsx
var ModelName = ({ modelItem, className, showModelType, modelTypeClassName, showMode, modeClassName, showFeatures, showFeaturesLabel, featuresClassName, showContextSize, children }) => {
	const language = useLanguage();
	if (!modelItem) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center gap-0.5 overflow-hidden truncate text-ellipsis text-components-input-text-filled system-sm-regular", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "truncate",
				title: modelItem.label[language] || modelItem.label.en_US,
				children: modelItem.label[language] || modelItem.label.en_US
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-0.5",
				children: [
					!!(showModelType && modelItem.model_type) && /* @__PURE__ */ jsx(ModelBadge, {
						className: modelTypeClassName,
						children: modelTypeFormat(modelItem.model_type)
					}),
					!!(modelItem.model_properties.mode && showMode) && /* @__PURE__ */ jsx(ModelBadge, {
						className: modeClassName,
						children: modelItem.model_properties.mode.toLocaleUpperCase()
					}),
					!!(showContextSize && modelItem.model_properties.context_size) && /* @__PURE__ */ jsx(ModelBadge, { children: sizeFormat(modelItem.model_properties.context_size) }),
					showFeatures && modelItem.features?.map((feature) => /* @__PURE__ */ jsx(FeatureIcon, {
						feature,
						className: featuresClassName,
						showFeaturesLabel
					}, feature))
				]
			}),
			children
		]
	});
};
//#endregion
export { FeatureIcon as n, ModelBadge as r, ModelName as t };
