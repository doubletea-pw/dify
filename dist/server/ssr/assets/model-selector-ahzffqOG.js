import { t as Trans } from "./Trans-UjBkHktY.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { d as PreferredProviderTypeEnum, l as ModelStatusEnum, o as ModelFeatureEnum, r as CustomConfigurationStatusEnum, t as ConfigurationMethodEnum, u as ModelTypeEnum } from "./declarations-DYMEe7hD.js";
import { C as IS_CLOUD_EDITION } from "./config-Dopncj5R.js";
import { t as IconBase } from "./IconBase-CEF_UoQI.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as Toast } from "./toast-BY3OifkP.js";
import { r as getMarketplaceUrl } from "./var-DPpHtpXT.js";
import { C as ModelIcon, D as TooltipContent, E as Tooltip, S as sizeFormat, _ as modelNameMap, b as providerKeyToPluginId, c as useCredentialStatus, d as useActiveProviderCredential, h as MODEL_PROVIDER_QUOTA_GET_PAID, k as TooltipTrigger, t as credential_item_default, u as useAuth, v as modelTypeFormat, y as providerIconMap } from "./credential-item-C22_bUSw.js";
import { p as useQueryClient, t as useMutation } from "./useMutation-CRBpDOZ8.js";
import { n as consoleQuery } from "./client-CLQTU2Oi.js";
import { i as useSystemFeaturesQuery } from "./global-public-context-DpzzsplY.js";
import { n as ACCOUNT_SETTING_TAB } from "./constants-P0J540jJ.js";
import { n as useModalContext, r as useModalContextSelector } from "./modal-context-CphlqvPm.js";
import { n as useProviderContext } from "./provider-context-CToT0pwd.js";
import { p as useInstallPackageFromMarketPlace, t as useRefreshPluginList } from "./use-refresh-plugin-list-C8aKRYG-.js";
import { n as formatNumber } from "./format-BCVnrx09.js";
import { a as useMarketplaceAllPlugins, i as useLanguage, m as useUpdateModelProviders, p as useUpdateModelList, t as useCurrentProviderAndModel } from "./hooks-BTelimHS.js";
import { i as useCurrentWorkspace } from "./use-common-BJ1aZaXJ.js";
import { i as PopoverTrigger, r as PopoverContent, t as Popover } from "./popover-CTEbJchz.js";
import { n as z } from "./dist-CGvyUAMR.js";
import { n as FeatureIcon, r as ModelBadge, t as ModelName } from "./model-name-DBTGJc7a.js";
import { a as checkTaskStatus } from "./skeleton-Brd40zkS.js";
import { a as AlertDialogContent, i as AlertDialogConfirmButton, n as AlertDialogActions, o as AlertDialogDescription, r as AlertDialogCancelButton, s as AlertDialogTitle, t as AlertDialog } from "./alert-dialog-_9biHzKe.js";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/header/account-setting/model-provider-page/derive-model-status.ts
var DERIVED_MODEL_STATUS_BADGE_I18N = {
	"configure-required": "modelProvider.selector.configureRequired",
	"credits-exhausted": "modelProvider.selector.creditsExhausted",
	"api-key-unavailable": "modelProvider.selector.apiKeyUnavailable",
	"disabled": "modelProvider.selector.disabled",
	"incompatible": "modelProvider.selector.incompatible"
};
var DERIVED_MODEL_STATUS_TOOLTIP_I18N = {
	"credits-exhausted": "modelProvider.selector.creditsExhaustedTip",
	"api-key-unavailable": "modelProvider.selector.apiKeyUnavailableTip",
	"incompatible": "modelProvider.selector.incompatibleTip"
};
var deriveModelStatus = (modelId, providerName, currentModelProvider, currentModel, credentialState) => {
	if (!modelId || !providerName) return "empty";
	if (!currentModelProvider) return "incompatible";
	const isCreditsExhaustedWithoutApiKey = credentialState.supportsCredits && credentialState.isCreditsExhausted && !credentialState.hasCredentials;
	if (credentialState.priority === "credits" && credentialState.supportsCredits && credentialState.isCreditsExhausted || isCreditsExhaustedWithoutApiKey) return "credits-exhausted";
	if (!currentModel) return "incompatible";
	if (credentialState.variant === "api-unavailable") return "api-key-unavailable";
	switch (currentModel.status) {
		case ModelStatusEnum.active: return "active";
		case ModelStatusEnum.noConfigure: return "configure-required";
		case ModelStatusEnum.quotaExceeded: return "credits-exhausted";
		case ModelStatusEnum.credentialRemoved: return "api-key-unavailable";
		case ModelStatusEnum.disabled: return "disabled";
		case ModelStatusEnum.noPermission:
		default: return "incompatible";
	}
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/supports-credits.ts
var providerSupportsCredits = (provider, trialModels) => {
	if (!IS_CLOUD_EDITION || !provider?.system_configuration.enabled) return false;
	return !!provider.provider && !!trialModels?.includes(provider.provider);
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/use-trial-credits.ts
var useTrialCredits = () => {
	const { data: currentWorkspace, isPending } = useCurrentWorkspace();
	const totalCredits = currentWorkspace?.trial_credits ?? 0;
	const credits = Math.max(totalCredits - (currentWorkspace?.trial_credits_used ?? 0), 0);
	return {
		credits,
		totalCredits,
		isExhausted: credits <= 0,
		isLoading: isPending && !currentWorkspace,
		nextCreditResetDate: currentWorkspace?.next_credit_reset_date
	};
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/use-credential-panel-state.ts
var DESTRUCTIVE_VARIANTS = new Set([
	"credits-exhausted",
	"no-usage",
	"api-unavailable"
]);
var isDestructiveVariant = (variant) => DESTRUCTIVE_VARIANTS.has(variant);
function deriveVariant(priority, isExhausted, hasCredential, authorized, credentialName) {
	if (priority === "credits") {
		if (!isExhausted) return "credits-active";
		if (hasCredential && authorized) return "api-fallback";
		if (hasCredential && !authorized) return "no-usage";
		return "credits-exhausted";
	}
	if (hasCredential && authorized) return "api-active";
	if (priority === "apiKey" && !isExhausted) return "credits-fallback";
	if (priority === "apiKey" && !hasCredential) return "no-usage";
	if (hasCredential && !authorized) return credentialName ? "api-unavailable" : "api-required-configure";
	return "api-required-add";
}
function useCredentialPanelState(provider) {
	const { isExhausted, credits } = useTrialCredits();
	const { hasCredential, authorized, current_credential_name } = useCredentialStatus(provider);
	const { data: systemFeatures } = useSystemFeaturesQuery();
	const trialModels = systemFeatures?.trial_models;
	const preferredType = provider?.preferred_provider_type;
	const supportsCredits = providerSupportsCredits(provider, trialModels);
	const priority = !supportsCredits ? "apiKeyOnly" : preferredType === PreferredProviderTypeEnum.system ? "credits" : "apiKey";
	const showPrioritySwitcher = supportsCredits;
	return {
		variant: deriveVariant(priority, isExhausted, hasCredential, !!authorized, current_credential_name),
		priority,
		supportsCredits,
		showPrioritySwitcher,
		hasCredentials: hasCredential,
		isCreditsExhausted: isExhausted,
		credentialName: current_credential_name,
		credits
	};
}
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-selector/model-selector-trigger.tsx
var ModelSelectorTrigger = ({ currentProvider, currentModel, defaultModel, open, readonly, className, deprecatedClassName, showDeprecatedWarnIcon = true }) => {
	const { t } = useTranslation();
	const { modelProviders } = useProviderContext();
	const isSelected = !!currentProvider && !!currentModel;
	const isDeprecated = !isSelected && !!defaultModel;
	const isEmpty = !isSelected && !defaultModel;
	const selectedProvider = isSelected ? modelProviders.find((provider) => provider.provider === currentProvider.provider) : void 0;
	const deprecatedProvider = isDeprecated ? modelProviders.find((p) => p.provider === defaultModel.provider) : void 0;
	const resolvedProvider = isSelected ? selectedProvider : deprecatedProvider;
	const selectedProviderState = useCredentialPanelState(resolvedProvider);
	const status = deriveModelStatus(isSelected ? currentModel?.model : defaultModel?.model, isSelected ? currentProvider?.provider : defaultModel?.provider, resolvedProvider, currentModel, selectedProviderState);
	const isActive = status === "active";
	const isDisabled = status !== "active" && status !== "empty";
	const statusI18nKey = DERIVED_MODEL_STATUS_BADGE_I18N[status];
	const tooltipI18nKey = DERIVED_MODEL_STATUS_TOOLTIP_I18N[status];
	const statusLabel = statusI18nKey ? t(statusI18nKey, { ns: "common" }) : null;
	const tooltipLabel = tooltipI18nKey ? t(tooltipI18nKey, { ns: "common" }) : null;
	const isCreditsExhausted = status === "credits-exhausted";
	const shouldShowModelMeta = status === "active";
	const deprecatedStatusLabel = statusLabel || t("modelProvider.selector.incompatible", { ns: "common" });
	const deprecatedTooltipLabel = tooltipLabel || t("modelProvider.selector.incompatibleTip", { ns: "common" });
	return /* @__PURE__ */ jsxs("div", {
		className: cn("group flex h-8 items-center gap-0.5 rounded-lg p-1", isDisabled ? "bg-components-input-bg-disabled" : "bg-components-input-bg-normal", !readonly && !isDisabled && "cursor-pointer hover:bg-components-input-bg-hover", open && !isDisabled && "bg-components-input-bg-hover", className),
		children: [isEmpty ? /* @__PURE__ */ jsx("div", {
			className: "flex h-6 w-6 items-center justify-center",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex h-5 w-5 items-center justify-center rounded-md border-[0.5px] border-components-panel-border-subtle bg-background-default-subtle",
				children: /* @__PURE__ */ jsx("span", { className: "i-ri-brain-2-line h-3.5 w-3.5 text-text-quaternary" })
			})
		}) : /* @__PURE__ */ jsx(ModelIcon, {
			className: "p-0.5",
			provider: isSelected ? currentProvider : deprecatedProvider,
			modelName: isSelected ? currentModel.model : defaultModel?.model
		}), /* @__PURE__ */ jsxs("div", {
			className: cn("flex grow items-center gap-1 truncate px-1 py-[3px]", isDeprecated && deprecatedClassName),
			children: [
				isSelected && /* @__PURE__ */ jsx(ModelName, {
					className: "grow",
					modelItem: currentModel,
					showMode: shouldShowModelMeta,
					showFeatures: shouldShowModelMeta
				}),
				isDeprecated && /* @__PURE__ */ jsx("div", {
					className: "grow truncate text-components-input-text-filled system-sm-regular",
					children: defaultModel.model
				}),
				isEmpty && /* @__PURE__ */ jsx("div", {
					className: "grow truncate text-[13px] text-text-quaternary",
					children: t("detailPanel.configureModel", { ns: "plugin" })
				}),
				isSelected && !readonly && !isActive && statusI18nKey && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					disabled: !tooltipLabel,
					render: /* @__PURE__ */ jsxs("div", {
						className: cn("flex shrink-0 items-center gap-[3px] rounded-md border border-text-warning px-[5px] py-0.5", isCreditsExhausted && "min-w-[20px] justify-center bg-components-badge-bg-dimm"),
						children: [/* @__PURE__ */ jsx("span", { className: "i-ri-alert-fill h-3 w-3 text-text-warning" }), /* @__PURE__ */ jsx("span", {
							className: "whitespace-nowrap text-text-warning system-xs-medium",
							children: statusLabel
						})]
					})
				}), tooltipLabel && /* @__PURE__ */ jsx(TooltipContent, {
					placement: "top",
					children: tooltipLabel
				})] }),
				isDeprecated && showDeprecatedWarnIcon && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center gap-[3px] rounded-md border border-text-warning bg-components-badge-bg-dimm px-[5px] py-0.5",
					children: [/* @__PURE__ */ jsx("span", { className: "i-ri-alert-fill h-3 w-3 text-text-warning" }), /* @__PURE__ */ jsx("span", {
						className: "whitespace-nowrap text-text-warning system-xs-medium",
						children: deprecatedStatusLabel
					})]
				}) }), /* @__PURE__ */ jsx(TooltipContent, {
					placement: "top",
					children: deprecatedTooltipLabel
				})] }),
				!readonly && (isActive || isEmpty) && /* @__PURE__ */ jsx("span", { className: "i-ri-arrow-down-s-line h-3.5 w-3.5 shrink-0 text-text-tertiary" })
			]
		})]
	});
};
//#endregion
//#region utils/tool-call.ts
var supportFunctionCall = (features = []) => {
	if (!features || !features.length) return false;
	return features.some((feature) => [
		ModelFeatureEnum.toolCall,
		ModelFeatureEnum.multiToolCall,
		ModelFeatureEnum.streamToolCall
	].includes(feature));
};
var Balance_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M12 3V20M12 20H6.99999M12 20H17M2.99999 6H7.52785C7.83834 6 8.14457 5.92771 8.42228 5.78885L9.5777 5.21115C9.85541 5.07229 10.1616 5 10.4721 5H13.5279C13.8384 5 14.1446 5.07229 14.4223 5.21115L15.5777 5.78885C15.8554 5.92771 16.1616 6 16.4721 6H21M5.49999 6L3.02043 13.4387C2.71807 14.3458 3.08918 15.3834 4.0053 15.657C5.0117 15.9577 5.98828 15.9577 6.99468 15.657C7.9108 15.3834 8.28191 14.3457 7.97955 13.4387L5.49999 6ZM18.5 6L16.0204 13.4387C15.7181 14.3458 16.0892 15.3834 17.0053 15.657C18.0117 15.9577 18.9883 15.9577 19.9947 15.657C20.9108 15.3834 21.2819 14.3457 20.9796 13.4387L18.5 6Z",
				"stroke": "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "Balance"
};
//#endregion
//#region app/components/base/icons/src/vender/line/financeAndECommerce/Balance.tsx
var Icon$6 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Balance_default
});
Icon$6.displayName = "Balance";
var CoinsStacked01_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "coins-stacked-01" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M12 17C12 19.7614 14.2386 22 17 22C19.7614 22 22 19.7614 22 17C22 14.2386 19.7614 12 17 12C14.2386 12 12 14.2386 12 17ZM12 17C12 15.8742 12.3721 14.8353 13 13.9995V5M12 17C12 17.8254 12.2 18.604 12.5541 19.2901C11.7117 20.0018 9.76584 20.5 7.5 20.5C4.46243 20.5 2 19.6046 2 18.5V5M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M2 14C2 15.1046 4.46243 16 7.5 16C9.689 16 11.5793 15.535 12.4646 14.8618M13 9.5C13 10.6046 10.5376 11.5 7.5 11.5C4.46243 11.5 2 10.6046 2 9.5",
					"stroke": "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "CoinsStacked01"
};
//#endregion
//#region app/components/base/icons/src/vender/line/financeAndECommerce/CoinsStacked01.tsx
var Icon$5 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: CoinsStacked01_default
});
Icon$5.displayName = "CoinsStacked01";
var CreditsCoin_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "10",
			"height": "10",
			"viewBox": "0 0 10 10",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M2 5C2 3.44487 2.58482 1.98537 3.54004 1.04932C2.17681 1.34034 1 2.90001 1 5C1 7.09996 2.17685 8.65912 3.54004 8.9502C2.58496 8.01413 2 6.55501 2 5ZM3 5C3 7.33338 4.4528 9 6 9C7.5472 9 9 7.33338 9 5C9 2.66664 7.5472 1 6 1C4.4528 1 3 2.66664 3 5ZM10 5C10 7.63722 8.3188 10 6 10H4C1.6812 10 0 7.63722 0 5C0 2.3628 1.6812 0 4 0H6C8.3188 0 10 2.3628 10 5Z",
				"fill": "currentColor"
			},
			"children": []
		}, {
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M6.71519 4.09259L6.45385 3.18667C6.42141 3.07421 6.34037 3 6.25 3C6.15963 3 6.07859 3.07421 6.04615 3.18667L5.78481 4.09259C5.74675 4.22464 5.66849 4.32899 5.56945 4.37978L4.88999 4.7282C4.80565 4.77146 4.75 4.87951 4.75 5C4.75 5.12049 4.80565 5.22854 4.88999 5.2718L5.56945 5.62022C5.66849 5.67101 5.74675 5.77536 5.78481 5.90741L6.04615 6.81333C6.07859 6.92579 6.15963 7 6.25 7C6.34037 7 6.42141 6.92579 6.45385 6.81333L6.71519 5.90741C6.75325 5.77536 6.83151 5.67101 6.93055 5.62022L7.61001 5.2718C7.69435 5.22854 7.75 5.12049 7.75 5C7.75 4.87951 7.69435 4.77146 7.61001 4.7282L6.93055 4.37978C6.83151 4.32899 6.75325 4.22464 6.71519 4.09259Z",
				"fill": "currentColor"
			},
			"children": []
		}]
	},
	name: "CreditsCoin"
};
//#endregion
//#region app/components/base/icons/src/vender/line/financeAndECommerce/CreditsCoin.tsx
var Icon$4 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: CreditsCoin_default
});
Icon$4.displayName = "CreditsCoin";
var GoldCoin_default = {
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
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "clip-path": "url(#clip0_7056_1808)" },
			"children": [
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M8.00003 4.82855L8.93639 6.72613L11.0303 7.03037L9.51518 8.50734L9.87276 10.5928L8.00003 9.60795L6.1273 10.5928L6.48488 8.50734L4.96973 7.03037L7.06367 6.72613L8.00003 4.82855Z",
						"stroke": "currentColor",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99998C14.6668 4.31808 11.6821 1.33331 8.00016 1.33331C4.31826 1.33331 1.3335 4.31808 1.3335 7.99998C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666Z",
						"stroke": "currentColor",
						"stroke-width": "1.25",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M8.0001 12.8485C8.33482 12.8485 8.60616 12.5771 8.60616 12.2424C8.60616 11.9077 8.33482 11.6364 8.0001 11.6364C7.66539 11.6364 7.39404 11.9077 7.39404 12.2424C7.39404 12.5771 7.66539 12.8485 8.0001 12.8485Z",
						"fill": "currentColor"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M12.0348 9.91702C12.3695 9.91702 12.6408 9.64567 12.6408 9.31096C12.6408 8.97624 12.3695 8.7049 12.0348 8.7049C11.7001 8.7049 11.4287 8.97624 11.4287 9.31096C11.4287 9.64567 11.7001 9.91702 12.0348 9.91702Z",
						"fill": "currentColor"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M10.4933 5.17391C10.828 5.17391 11.0993 4.90257 11.0993 4.56785C11.0993 4.23313 10.828 3.96179 10.4933 3.96179C10.1585 3.96179 9.88721 4.23313 9.88721 4.56785C9.88721 4.90257 10.1585 5.17391 10.4933 5.17391Z",
						"fill": "currentColor"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M5.50645 5.17391C5.84117 5.17391 6.11251 4.90257 6.11251 4.56785C6.11251 4.23313 5.84117 3.96179 5.50645 3.96179C5.17173 3.96179 4.90039 4.23313 4.90039 4.56785C4.90039 4.90257 5.17173 5.17391 5.50645 5.17391Z",
						"fill": "currentColor"
					},
					"children": []
				},
				{
					"type": "element",
					"name": "path",
					"attributes": {
						"d": "M3.96544 9.91702C4.30015 9.91702 4.5715 9.64567 4.5715 9.31096C4.5715 8.97624 4.30015 8.7049 3.96544 8.7049C3.63072 8.7049 3.35938 8.97624 3.35938 9.31096C3.35938 9.64567 3.63072 9.91702 3.96544 9.91702Z",
						"fill": "currentColor"
					},
					"children": []
				}
			]
		}, {
			"type": "element",
			"name": "defs",
			"attributes": {},
			"children": [{
				"type": "element",
				"name": "clipPath",
				"attributes": { "id": "clip0_7056_1808" },
				"children": [{
					"type": "element",
					"name": "rect",
					"attributes": {
						"width": "16",
						"height": "16",
						"fill": "white"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "GoldCoin"
};
//#endregion
//#region app/components/base/icons/src/vender/line/financeAndECommerce/GoldCoin.tsx
var Icon$3 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: GoldCoin_default
});
Icon$3.displayName = "GoldCoin";
var ReceiptList_default = {
	icon: {
		"type": "element",
		"isRootNode": true,
		"name": "svg",
		"attributes": {
			"width": "24",
			"height": "24",
			"viewBox": "0 0 24 24",
			"fill": "none",
			"xmlns": "http://www.w3.org/2000/svg"
		},
		"children": [{
			"type": "element",
			"name": "path",
			"attributes": {
				"d": "M7.55556 8.33333H12M15.5556 8.33333H16.4444M7.55556 11.8889H12M15.5556 11.8889H16.4444M7.55556 15.4444H12M15.5556 15.4444H16.4444M20 21.6667V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V21.6667L6.66667 19.8889L9.33333 21.6667L12 19.8889L14.6667 21.6667L17.3333 19.8889L20 21.6667Z",
				"stroke": "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			},
			"children": []
		}]
	},
	name: "ReceiptList"
};
//#endregion
//#region app/components/base/icons/src/vender/line/financeAndECommerce/ReceiptList.tsx
var Icon$2 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: ReceiptList_default
});
Icon$2.displayName = "ReceiptList";
var Tag01_default = {
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
			"attributes": {
				"id": "Icon",
				"clip-path": "url(#clip0_17795_9693)"
			},
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon_2",
					"d": "M4.66699 4.6665H4.67283M1.16699 3.03317L1.16699 5.6433C1.16699 5.92866 1.16699 6.07134 1.19923 6.20561C1.22781 6.32465 1.27495 6.43845 1.33891 6.54284C1.41106 6.66057 1.51195 6.76146 1.71373 6.96324L6.18709 11.4366C6.88012 12.1296 7.22664 12.4761 7.62621 12.606C7.97769 12.7202 8.35629 12.7202 8.70777 12.606C9.10735 12.4761 9.45386 12.1296 10.1469 11.4366L11.4371 10.1464C12.1301 9.45337 12.4766 9.10686 12.6065 8.70728C12.7207 8.35581 12.7207 7.9772 12.6065 7.62572C12.4766 7.22615 12.1301 6.87963 11.4371 6.1866L6.96372 1.71324C6.76195 1.51146 6.66106 1.41057 6.54332 1.33842C6.43894 1.27446 6.32514 1.22732 6.20609 1.19874C6.07183 1.1665 5.92915 1.1665 5.64379 1.1665L3.03366 1.1665C2.38026 1.1665 2.05357 1.1665 1.804 1.29366C1.58448 1.40552 1.406 1.58399 1.29415 1.80352C1.16699 2.05308 1.16699 2.37978 1.16699 3.03317ZM4.95866 4.6665C4.95866 4.82759 4.82808 4.95817 4.66699 4.95817C4.50591 4.95817 4.37533 4.82759 4.37533 4.6665C4.37533 4.50542 4.50591 4.37484 4.66699 4.37484C4.82808 4.37484 4.95866 4.50542 4.95866 4.6665Z",
					"stroke": "currentColor",
					"stroke-width": "1.25",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}, {
			"type": "element",
			"name": "defs",
			"attributes": {},
			"children": [{
				"type": "element",
				"name": "clipPath",
				"attributes": { "id": "clip0_17795_9693" },
				"children": [{
					"type": "element",
					"name": "rect",
					"attributes": {
						"width": "14",
						"height": "14",
						"fill": "white"
					},
					"children": []
				}]
			}]
		}]
	},
	name: "Tag01"
};
//#endregion
//#region app/components/base/icons/src/vender/line/financeAndECommerce/Tag01.tsx
var Icon$1 = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Tag01_default
});
Icon$1.displayName = "Tag01";
var Tag03_default = {
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
		"children": [{
			"type": "element",
			"name": "g",
			"attributes": { "id": "tag-03" },
			"children": [{
				"type": "element",
				"name": "path",
				"attributes": {
					"id": "Icon",
					"d": "M14 7.3335L8.93726 2.27075C8.59135 1.92485 8.4184 1.7519 8.21657 1.62822C8.03762 1.51856 7.84254 1.43775 7.63846 1.38876C7.40829 1.3335 7.16369 1.3335 6.67452 1.3335L4 1.3335M2 5.80016L2 7.11651C2 7.44263 2 7.60569 2.03684 7.75914C2.0695 7.89519 2.12337 8.02525 2.19648 8.14454C2.27894 8.2791 2.39424 8.3944 2.62484 8.625L7.82484 13.825C8.35286 14.353 8.61687 14.617 8.92131 14.716C9.1891 14.803 9.47757 14.803 9.74536 14.716C10.0498 14.617 10.3138 14.353 10.8418 13.825L12.4915 12.1753C13.0195 11.6473 13.2835 11.3833 13.3825 11.0789C13.4695 10.8111 13.4695 10.5226 13.3825 10.2548C13.2835 9.95037 13.0195 9.68636 12.4915 9.15834L7.62484 4.29167C7.39424 4.06107 7.27894 3.94577 7.14438 3.86331C7.02508 3.7902 6.89502 3.73633 6.75898 3.70367C6.60553 3.66683 6.44247 3.66683 6.11634 3.66683H4.13333C3.3866 3.66683 3.01323 3.66683 2.72801 3.81215C2.47713 3.93999 2.27316 4.14396 2.14532 4.39484C2 4.68006 2 5.05343 2 5.80016Z",
					"stroke": "currentColor",
					"stroke-width": "1.5",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				},
				"children": []
			}]
		}]
	},
	name: "Tag03"
};
//#endregion
//#region app/components/base/icons/src/vender/line/financeAndECommerce/Tag03.tsx
var Icon = ({ ref, ...props }) => /* @__PURE__ */ jsx(IconBase, {
	...props,
	ref,
	data: Tag03_default
});
Icon.displayName = "Tag03";
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/model-auth-dropdown/credits-exhausted-alert.tsx
function CreditsExhaustedAlert({ hasApiKeyFallback }) {
	const { t } = useTranslation();
	const setShowPricingModal = useModalContextSelector((s) => s.setShowPricingModal);
	const { credits, totalCredits } = useTrialCredits();
	const titleKey = hasApiKeyFallback ? "modelProvider.card.creditsExhaustedFallback" : "modelProvider.card.creditsExhaustedMessage";
	const descriptionKey = hasApiKeyFallback ? "modelProvider.card.creditsExhaustedFallbackDescription" : "modelProvider.card.creditsExhaustedDescription";
	const usedCredits = totalCredits - credits;
	const usagePercent = totalCredits > 0 ? Math.min(usedCredits / totalCredits * 100, 100) : 100;
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-2 mb-1 mt-0.5 rounded-lg bg-background-section-burn p-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-text-primary system-sm-medium",
				children: t(titleKey, { ns: "common" })
			}), /* @__PURE__ */ jsx("div", {
				className: "text-text-tertiary system-xs-regular",
				children: /* @__PURE__ */ jsx(Trans, {
					i18nKey: descriptionKey,
					ns: "common",
					components: { upgradeLink: /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "cursor-pointer border-0 bg-transparent p-0 text-left text-text-accent system-xs-medium",
						onClick: () => setShowPricingModal()
					}) }
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-3 flex flex-col gap-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-text-tertiary system-xs-medium",
					children: t("modelProvider.card.usageLabel", { ns: "common" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-0.5 text-text-tertiary system-xs-regular",
					children: [/* @__PURE__ */ jsx(Icon$4, { className: "h-3 w-3" }), /* @__PURE__ */ jsxs("span", { children: [
						formatNumber(usedCredits),
						"/",
						formatNumber(totalCredits)
					] })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "h-1 overflow-hidden rounded-[6px] bg-components-progress-error-bg",
				children: /* @__PURE__ */ jsx("div", {
					className: "h-full rounded-l-[6px] bg-components-progress-error-progress",
					style: { width: `${usagePercent}%` }
				})
			})]
		})]
	});
}
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/model-auth-dropdown/api-key-section.tsx
function ApiKeySection({ provider, credentials, selectedCredentialId, isActivating, onItemClick, onEdit, onDelete, onAdd }) {
	const { t } = useTranslation();
	const notAllowCustomCredential = provider.allow_custom_token === false;
	if (!credentials.length) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-2 p-2",
		children: [/* @__PURE__ */ jsx("div", {
			className: "rounded-[10px] bg-gradient-to-r from-state-base-hover to-transparent p-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-text-secondary system-sm-medium",
					children: t("modelProvider.card.noApiKeysTitle", { ns: "common" })
				}), /* @__PURE__ */ jsx("div", {
					className: "text-text-tertiary system-xs-regular",
					children: t("modelProvider.card.noApiKeysDescription", { ns: "common" })
				})]
			})
		}), !notAllowCustomCredential && /* @__PURE__ */ jsx(Button, {
			onClick: onAdd,
			className: "w-full",
			children: t("modelProvider.auth.addApiKey", { ns: "common" })
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "border-t border-t-divider-subtle",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-1",
			children: [/* @__PURE__ */ jsx("div", {
				className: "pb-1 pl-7 pr-2 pt-3 text-text-tertiary system-xs-medium-uppercase",
				children: t("modelProvider.auth.apiKeys", { ns: "common" })
			}), /* @__PURE__ */ jsx("div", {
				className: "max-h-[200px] overflow-y-auto",
				children: credentials.map((credential) => /* @__PURE__ */ jsx(credential_item_default, {
					credential,
					disabled: isActivating,
					showSelectedIcon: true,
					selectedCredentialId,
					onItemClick,
					onEdit,
					onDelete
				}, credential.credential_id))
			})]
		}), !notAllowCustomCredential && /* @__PURE__ */ jsx("div", {
			className: "p-2",
			children: /* @__PURE__ */ jsx(Button, {
				onClick: onAdd,
				className: "w-full",
				children: t("modelProvider.auth.addApiKey", { ns: "common" })
			})
		})]
	});
}
var api_key_section_default = memo(ApiKeySection);
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/model-auth-dropdown/credits-fallback-alert.tsx
function CreditsFallbackAlert({ hasCredentials }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ jsx("div", {
		className: "mx-2 mb-1 mt-0.5 rounded-lg bg-background-section-burn p-3",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-text-primary system-sm-medium",
				children: t(hasCredentials ? "modelProvider.card.apiKeyUnavailableFallback" : "modelProvider.card.noApiKeysFallback", { ns: "common" })
			}), hasCredentials && /* @__PURE__ */ jsx("div", {
				className: "text-text-tertiary system-xs-regular",
				children: t("modelProvider.card.apiKeyUnavailableFallbackDescription", { ns: "common" })
			})]
		})
	});
}
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/model-auth-dropdown/usage-priority-section.tsx
var options = [{
	key: PreferredProviderTypeEnum.system,
	labelKey: "modelProvider.card.aiCreditsOption"
}, {
	key: PreferredProviderTypeEnum.custom,
	labelKey: "modelProvider.card.apiKeyOption"
}];
function UsagePrioritySection({ value, disabled, onSelect }) {
	const { t } = useTranslation();
	const selectedKey = value === "credits" ? PreferredProviderTypeEnum.system : PreferredProviderTypeEnum.custom;
	return /* @__PURE__ */ jsx("div", {
		className: "p-1",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1 rounded-lg p-1",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "shrink-0 px-0.5 py-1",
					children: /* @__PURE__ */ jsx("span", { className: "i-ri-arrow-up-double-line block h-4 w-4 text-text-tertiary" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-1 items-center gap-0.5 py-0.5",
					children: [/* @__PURE__ */ jsx("span", {
						className: "truncate text-text-secondary system-sm-medium",
						children: t("modelProvider.card.usagePriority", { ns: "common" })
					}), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						"aria-label": t("modelProvider.card.usagePriorityTip", { ns: "common" }),
						delay: 0,
						render: /* @__PURE__ */ jsx("span", {
							className: "flex h-4 w-4 shrink-0 items-center justify-center",
							children: /* @__PURE__ */ jsx("span", {
								"aria-hidden": true,
								className: "i-ri-question-line h-3.5 w-3.5 text-text-quaternary hover:text-text-tertiary"
							})
						})
					}), /* @__PURE__ */ jsx(TooltipContent, { children: t("modelProvider.card.usagePriorityTip", { ns: "common" }) })] })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex shrink-0 items-center gap-1",
					children: options.map((option) => /* @__PURE__ */ jsx("button", {
						type: "button",
						className: cn("shrink-0 whitespace-nowrap rounded-md px-2 py-1 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-components-button-primary-border disabled:opacity-50", selectedKey === option.key ? "border-[1.5px] border-components-option-card-option-selected-border bg-components-panel-bg text-text-primary shadow-xs system-xs-medium" : "border border-components-option-card-option-border bg-components-option-card-option-bg text-text-secondary system-xs-regular hover:bg-components-option-card-option-bg-hover"),
						disabled,
						onClick: () => onSelect(option.key),
						children: t(option.labelKey, { ns: "common" })
					}, option.key))
				})
			]
		})
	});
}
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/model-auth-dropdown/use-activate-credential.ts
function useActivateCredential(provider) {
	const { t } = useTranslation();
	const updateModelProviders = useUpdateModelProviders();
	const updateModelList = useUpdateModelList();
	const { mutate, isPending } = useActiveProviderCredential(provider.provider);
	const [optimisticId, setOptimisticId] = useState();
	const currentId = provider.custom_configuration.current_credential_id;
	const selectedCredentialId = optimisticId ?? currentId;
	const selectedIdRef = useRef(selectedCredentialId);
	selectedIdRef.current = selectedCredentialId;
	const supportedModelTypesRef = useRef(provider.supported_model_types);
	supportedModelTypesRef.current = provider.supported_model_types;
	return {
		selectedCredentialId,
		isActivating: isPending,
		activate: useCallback((credential) => {
			if (credential.credential_id === selectedIdRef.current) return;
			setOptimisticId(credential.credential_id);
			mutate({ credential_id: credential.credential_id }, {
				onSuccess: () => {
					Toast.notify({
						type: "success",
						message: t("api.actionSuccess", { ns: "common" })
					});
					updateModelProviders();
					supportedModelTypesRef.current.forEach((type) => updateModelList(type));
				},
				onError: () => {
					setOptimisticId(void 0);
					Toast.notify({
						type: "error",
						message: t("actionMsg.modifiedUnsuccessfully", { ns: "common" })
					});
				}
			});
		}, [
			mutate,
			t,
			updateModelProviders,
			updateModelList
		])
	};
}
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/model-auth-dropdown/dropdown-content.tsx
var EMPTY_CREDENTIALS = [];
function DropdownContent({ provider, state, isChangingPriority, onChangePriority, onClose }) {
	const { t } = useTranslation();
	const { available_credentials } = provider.custom_configuration;
	const { openConfirmDelete, closeConfirmDelete, doingAction, handleConfirmDelete, deleteCredentialId, handleOpenModal } = useAuth(provider, ConfigurationMethodEnum.predefinedModel);
	const { selectedCredentialId, isActivating, activate } = useActivateCredential(provider);
	const handleEdit = useCallback((credential) => {
		handleOpenModal(credential);
		onClose();
	}, [handleOpenModal, onClose]);
	const handleDelete = useCallback((credential) => {
		if (credential) openConfirmDelete(credential);
	}, [openConfirmDelete]);
	const handleAdd = useCallback(() => {
		handleOpenModal();
		onClose();
	}, [handleOpenModal, onClose]);
	const showCreditsExhaustedAlert = state.isCreditsExhausted && state.supportsCredits;
	const hasApiKeyFallback = state.variant === "api-fallback" || state.variant === "api-active" && state.priority === "apiKey";
	const showCreditsFallbackAlert = state.priority === "apiKey" && state.supportsCredits && !state.isCreditsExhausted && state.variant !== "api-active";
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
		className: "w-[320px]",
		children: [
			state.showPrioritySwitcher && /* @__PURE__ */ jsx(UsagePrioritySection, {
				value: state.priority,
				disabled: isChangingPriority,
				onSelect: onChangePriority
			}),
			showCreditsFallbackAlert && /* @__PURE__ */ jsx(CreditsFallbackAlert, { hasCredentials: state.hasCredentials }),
			showCreditsExhaustedAlert && /* @__PURE__ */ jsx(CreditsExhaustedAlert, { hasApiKeyFallback }),
			/* @__PURE__ */ jsx(api_key_section_default, {
				provider,
				credentials: available_credentials ?? EMPTY_CREDENTIALS,
				selectedCredentialId,
				isActivating,
				onItemClick: activate,
				onEdit: handleEdit,
				onDelete: handleDelete,
				onAdd: handleAdd
			})
		]
	}), /* @__PURE__ */ jsx(AlertDialog, {
		open: !!deleteCredentialId,
		onOpenChange: (open) => {
			if (!open) closeConfirmDelete();
		},
		children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [/* @__PURE__ */ jsxs("div", {
			className: "p-6 pb-0",
			children: [/* @__PURE__ */ jsx(AlertDialogTitle, {
				className: "text-text-primary system-xl-semibold",
				children: t("modelProvider.confirmDelete", { ns: "common" })
			}), /* @__PURE__ */ jsx(AlertDialogDescription, { className: "mt-1 text-text-secondary system-sm-regular" })]
		}), /* @__PURE__ */ jsxs(AlertDialogActions, { children: [/* @__PURE__ */ jsx(AlertDialogCancelButton, {
			disabled: doingAction,
			children: t("operation.cancel", { ns: "common" })
		}), /* @__PURE__ */ jsx(AlertDialogConfirmButton, {
			disabled: doingAction,
			onClick: handleConfirmDelete,
			children: t("operation.delete", { ns: "common" })
		})] })] })
	})] });
}
var dropdown_content_default = memo(DropdownContent);
//#endregion
//#region app/components/header/account-setting/model-provider-page/provider-added-card/use-change-provider-priority.ts
function useChangeProviderPriority(provider) {
	const { t } = useTranslation();
	const queryClient = useQueryClient();
	const updateModelList = useUpdateModelList();
	const updateModelProviders = useUpdateModelProviders();
	const providerName = provider?.provider ?? "";
	const modelProviderModelListQueryKey = consoleQuery.modelProviders.models.queryKey({ input: { params: { provider: providerName } } });
	const { mutate: changePriority, isPending: isChangingPriority } = useMutation(consoleQuery.modelProviders.changePreferredProviderType.mutationOptions({
		onSuccess: () => {
			Toast.notify({
				type: "success",
				message: t("actionMsg.modifiedSuccessfully", { ns: "common" })
			});
			queryClient.invalidateQueries({
				queryKey: modelProviderModelListQueryKey,
				exact: true,
				refetchType: "none"
			});
			updateModelProviders();
			provider?.configurate_methods.forEach((method) => {
				if (method === ConfigurationMethodEnum.predefinedModel) provider?.supported_model_types.forEach((modelType) => updateModelList(modelType));
			});
		},
		onError: () => {
			Toast.notify({
				type: "error",
				message: t("actionMsg.modifiedUnsuccessfully", { ns: "common" })
			});
		}
	}));
	const handleChangePriority = (key) => {
		changePriority({
			params: { provider: providerName },
			body: { preferred_provider_type: key }
		});
	};
	return {
		isChangingPriority,
		handleChangePriority
	};
}
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-selector/popup-item.tsx
var PopupItem = ({ defaultModel, model, onSelect, onHide }) => {
	const [collapsed, setCollapsed] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { t } = useTranslation();
	const language = useLanguage();
	const { setShowModelModal } = useModalContext();
	const { modelProviders } = useProviderContext();
	const updateModelList = useUpdateModelList();
	const updateModelProviders = useUpdateModelProviders();
	const currentProvider = modelProviders.find((provider) => provider.provider === model.provider);
	const handleSelect = (provider, modelItem) => {
		if (modelItem.status !== ModelStatusEnum.active) return;
		onSelect(provider, modelItem);
	};
	const handleOpenModelModal = () => {
		if (!currentProvider) return;
		setShowModelModal({
			payload: {
				currentProvider,
				currentConfigurationMethod: ConfigurationMethodEnum.predefinedModel
			},
			onSaveCallback: () => {
				updateModelProviders();
				const modelType = model.models[0].model_type;
				if (modelType) updateModelList(modelType);
			}
		});
	};
	const state = useCredentialPanelState(currentProvider);
	const { isChangingPriority, handleChangePriority } = useChangeProviderPriority(currentProvider);
	const isUsingCredits = state.priority === "credits";
	const hasCredits = !state.isCreditsExhausted;
	const isApiKeyActive = state.variant === "api-active" || state.variant === "api-fallback";
	const { credentialName } = state;
	const handleCloseDropdown = useCallback(() => {
		setDropdownOpen(false);
		onHide();
	}, [onHide]);
	if (!currentProvider) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-1",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "sticky top-12 z-[2] flex h-[22px] items-center justify-between bg-components-panel-bg px-3 text-xs font-medium text-text-tertiary",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex cursor-pointer items-center",
				onClick: () => setCollapsed((prev) => !prev),
				children: [model.label[language] || model.label.en_US, /* @__PURE__ */ jsx("span", { className: cn("i-custom-vender-solid-general-arrow-down-round-fill h-4 w-4 text-text-quaternary", collapsed && "-rotate-90") })]
			}), /* @__PURE__ */ jsxs(Popover, {
				open: dropdownOpen,
				onOpenChange: setDropdownOpen,
				children: [/* @__PURE__ */ jsx(PopoverTrigger, { render: /* @__PURE__ */ jsxs("button", {
					type: "button",
					className: "flex cursor-pointer items-center rounded-md px-1.5 py-1 text-text-tertiary system-xs-medium hover:bg-components-button-ghost-bg-hover",
					children: [isUsingCredits ? hasCredits ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Icon$4, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", {
						className: "ml-1",
						children: t("modelProvider.selector.aiCredits", { ns: "common" })
					})] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", { className: "i-ri-alert-fill h-3 w-3 text-text-warning-secondary" }), /* @__PURE__ */ jsx("span", {
						className: "ml-1 text-text-warning",
						children: t("modelProvider.selector.creditsExhausted", { ns: "common" })
					})] }) : credentialName ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", { className: cn("h-1.5 w-1.5 shrink-0 rounded-[2px] border", isApiKeyActive ? "border-components-badge-status-light-success-border-inner bg-components-badge-status-light-success-bg" : "border-components-badge-status-light-error-border-inner bg-components-badge-status-light-error-bg") }), /* @__PURE__ */ jsx("span", {
						className: "ml-1 text-text-tertiary",
						children: credentialName
					})] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 shrink-0 rounded-[2px] border border-components-badge-status-light-disabled-border-inner bg-components-badge-status-light-disabled-bg" }), /* @__PURE__ */ jsx("span", {
						className: "ml-1 text-text-tertiary",
						children: t("modelProvider.selector.configureRequired", { ns: "common" })
					})] }), /* @__PURE__ */ jsx("span", { className: "i-ri-arrow-down-s-line !h-[14px] !w-[14px] translate-y-px text-text-tertiary" })]
				}) }), /* @__PURE__ */ jsx(PopoverContent, {
					placement: "bottom-end",
					children: /* @__PURE__ */ jsx(dropdown_content_default, {
						provider: currentProvider,
						state,
						isChangingPriority,
						onChangePriority: handleChangePriority,
						onClose: handleCloseDropdown
					})
				})]
			})]
		}), !collapsed && model.models.map((modelItem) => /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, { render: /* @__PURE__ */ jsxs("button", {
			type: "button",
			className: cn("group relative flex h-8 w-full items-center gap-1 rounded-lg px-3 py-1.5 text-left", modelItem.status === ModelStatusEnum.active ? "cursor-pointer hover:bg-state-base-hover" : "cursor-not-allowed hover:bg-state-base-hover-alt"),
			onClick: () => handleSelect(model.provider, modelItem),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(ModelIcon, {
						className: cn("h-5 w-5 shrink-0"),
						provider: model,
						modelName: modelItem.model
					}), /* @__PURE__ */ jsx(ModelName, {
						className: cn("text-text-secondary system-sm-medium", modelItem.status !== ModelStatusEnum.active && "opacity-60"),
						modelItem
					})]
				}),
				defaultModel?.model === modelItem.model && defaultModel.provider === currentProvider.provider && /* @__PURE__ */ jsx("span", { className: "i-custom-vender-line-general-check h-4 w-4 shrink-0 text-text-accent" }),
				modelItem.status === ModelStatusEnum.noConfigure && /* @__PURE__ */ jsx("div", {
					className: "hidden cursor-pointer text-xs font-medium text-text-accent group-hover:block",
					onClick: handleOpenModelModal,
					children: t("operation.add", { ns: "common" }).toLocaleUpperCase()
				})
			]
		}) }), /* @__PURE__ */ jsx(TooltipContent, {
			placement: "right",
			variant: "plain",
			popupClassName: "w-[206px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur p-3 backdrop-blur-sm",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-1",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-start gap-2",
						children: [/* @__PURE__ */ jsx(ModelIcon, {
							className: cn("h-5 w-5 shrink-0"),
							provider: model,
							modelName: modelItem.model
						}), /* @__PURE__ */ jsx("div", {
							className: "text-wrap break-words text-text-primary system-md-medium",
							children: modelItem.label[language] || modelItem.label.en_US
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-1",
						children: [
							!!modelItem.model_type && /* @__PURE__ */ jsx(ModelBadge, { children: modelTypeFormat(modelItem.model_type) }),
							!!modelItem.model_properties.mode && /* @__PURE__ */ jsx(ModelBadge, { children: modelItem.model_properties.mode.toLocaleUpperCase() }),
							!!modelItem.model_properties.context_size && /* @__PURE__ */ jsx(ModelBadge, { children: sizeFormat(modelItem.model_properties.context_size) })
						]
					}),
					[
						ModelTypeEnum.textGeneration,
						ModelTypeEnum.textEmbedding,
						ModelTypeEnum.rerank
					].includes(modelItem.model_type) && modelItem.features?.some((feature) => [
						ModelFeatureEnum.vision,
						ModelFeatureEnum.audio,
						ModelFeatureEnum.video,
						ModelFeatureEnum.document
					].includes(feature)) && /* @__PURE__ */ jsxs("div", {
						className: "pt-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: "mb-1 text-text-tertiary system-2xs-medium-uppercase",
							children: t("model.capabilities", { ns: "common" })
						}), /* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-1",
							children: modelItem.features?.map((feature) => /* @__PURE__ */ jsx(FeatureIcon, {
								feature,
								showFeaturesLabel: true
							}, feature))
						})]
					})
				]
			})
		})] }, modelItem.model))]
	});
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-selector/popup.tsx
var Popup = ({ defaultModel, modelList, onSelect, scopeFeatures = [], onHide }) => {
	const { t } = useTranslation();
	const { theme } = z();
	const language = useLanguage();
	const [searchText, setSearchText] = useState("");
	const [marketplaceCollapsed, setMarketplaceCollapsed] = useState(false);
	const { setShowAccountSettingModal } = useModalContext();
	const { modelProviders } = useProviderContext();
	const { plugins: allPlugins, isLoading: isMarketplacePluginsLoading } = useMarketplaceAllPlugins(modelProviders, "");
	const { mutateAsync: installPackageFromMarketPlace } = useInstallPackageFromMarketPlace();
	const { refreshPluginList } = useRefreshPluginList();
	const [installingProvider, setInstallingProvider] = useState(null);
	const { isExhausted: isCreditsExhausted } = useTrialCredits();
	const { data: systemFeatures } = useSystemFeaturesQuery();
	const trialModels = systemFeatures?.trial_models;
	const installedProviderMap = useMemo(() => new Map(modelProviders.map((provider) => [provider.provider, provider])), [modelProviders]);
	const aiCreditVisibleProviders = useMemo(() => {
		if (isCreditsExhausted) return /* @__PURE__ */ new Set();
		return new Set(modelProviders.filter((provider) => providerSupportsCredits(provider, trialModels)).map((provider) => provider.provider));
	}, [
		isCreditsExhausted,
		modelProviders,
		trialModels
	]);
	const showCreditsExhaustedAlert = isCreditsExhausted && modelProviders.some((provider) => providerSupportsCredits(provider, trialModels));
	const hasApiKeyFallback = modelProviders.some((provider) => {
		return provider.custom_configuration?.status === CustomConfigurationStatusEnum.active && providerSupportsCredits(provider, trialModels);
	});
	const handleInstallPlugin = useCallback(async (key) => {
		if (!allPlugins || isMarketplacePluginsLoading || installingProvider) return;
		const pluginId = providerKeyToPluginId[key];
		const plugin = allPlugins.find((p) => p.plugin_id === pluginId);
		if (!plugin) return;
		const uniqueIdentifier = plugin.latest_package_identifier;
		setInstallingProvider(key);
		try {
			const { all_installed, task_id } = await installPackageFromMarketPlace(uniqueIdentifier);
			if (!all_installed) {
				const { check } = checkTaskStatus();
				await check({
					taskId: task_id,
					pluginUniqueIdentifier: uniqueIdentifier
				});
			}
			refreshPluginList(plugin);
		} catch {} finally {
			setInstallingProvider(null);
		}
	}, [
		allPlugins,
		installPackageFromMarketPlace,
		installingProvider,
		isMarketplacePluginsLoading,
		refreshPluginList
	]);
	const installedModelList = useMemo(() => {
		const modelMap = new Map(modelList.map((model) => [model.provider, model]));
		const installedMarketplaceModels = MODEL_PROVIDER_QUOTA_GET_PAID.flatMap((providerKey) => {
			const installedProvider = installedProviderMap.get(providerKey);
			if (!installedProvider) return [];
			const matchedModel = modelMap.get(providerKey);
			if (matchedModel) return [matchedModel];
			if (!aiCreditVisibleProviders.has(providerKey)) return [];
			return [{
				provider: installedProvider.provider,
				icon_small: installedProvider.icon_small,
				icon_small_dark: installedProvider.icon_small_dark,
				label: installedProvider.label,
				models: [],
				status: ModelStatusEnum.active
			}];
		});
		const otherModels = modelList.filter((model) => !MODEL_PROVIDER_QUOTA_GET_PAID.includes(model.provider));
		return [...installedMarketplaceModels, ...otherModels];
	}, [
		aiCreditVisibleProviders,
		installedProviderMap,
		modelList
	]);
	const filteredModelList = useMemo(() => {
		const filtered = installedModelList.map((model) => {
			const matchesProviderSearch = !searchText || model.provider.toLowerCase().includes(searchText.toLowerCase()) || Object.values(model.label).some((label) => label.toLowerCase().includes(searchText.toLowerCase()));
			const filteredModels = model.models.filter((modelItem) => {
				if (modelItem.label[language] !== void 0) return modelItem.label[language].toLowerCase().includes(searchText.toLowerCase());
				return Object.values(modelItem.label).some((label) => label.toLowerCase().includes(searchText.toLowerCase()));
			}).filter((modelItem) => {
				if (scopeFeatures.length === 0) return true;
				return scopeFeatures.every((feature) => {
					if (feature === ModelFeatureEnum.toolCall) return supportFunctionCall(modelItem.features);
					return modelItem.features?.includes(feature) ?? false;
				});
			});
			if (!matchesProviderSearch || filteredModels.length === 0 && !aiCreditVisibleProviders.has(model.provider)) return null;
			return {
				...model,
				models: filteredModels
			};
		}).filter((model) => model !== null);
		if (defaultModel?.provider) filtered.sort((a, b) => {
			return (a.provider === defaultModel.provider ? 0 : 1) - (b.provider === defaultModel.provider ? 0 : 1);
		});
		return filtered;
	}, [
		aiCreditVisibleProviders,
		defaultModel?.provider,
		installedModelList,
		language,
		scopeFeatures,
		searchText
	]);
	const marketplaceProviders = useMemo(() => {
		const installedProviders = new Set(modelProviders.map((provider) => provider.provider));
		return MODEL_PROVIDER_QUOTA_GET_PAID.filter((key) => !installedProviders.has(key));
	}, [modelProviders]);
	return /* @__PURE__ */ jsxs("div", {
		className: "max-h-[480px] overflow-y-auto no-scrollbar",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "sticky top-0 z-10 bg-components-panel-bg pb-1 pl-3 pr-2 pt-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: `
          flex h-8 items-center rounded-lg border pl-[9px] pr-[10px]
          ${searchText ? "border-components-input-border-active bg-components-input-bg-active shadow-xs" : "border-transparent bg-components-input-bg-normal"}
        `,
					children: [
						/* @__PURE__ */ jsx("span", { className: `
              i-ri-search-line mr-[7px] h-[14px] w-[14px] shrink-0
              ${searchText ? "text-text-tertiary" : "text-text-quaternary"}
            ` }),
						/* @__PURE__ */ jsx("input", {
							className: "block h-[18px] grow appearance-none bg-transparent text-[13px] text-text-primary outline-none",
							placeholder: t("form.searchModel", { ns: "datasetSettings" }) || "",
							value: searchText,
							onChange: (e) => setSearchText(e.target.value)
						}),
						searchText && /* @__PURE__ */ jsx("span", {
							className: "i-custom-vender-solid-general-x-circle ml-1.5 h-[14px] w-[14px] shrink-0 cursor-pointer text-text-quaternary",
							onClick: () => setSearchText("")
						})
					]
				}), scopeFeatures.length > 0 && /* @__PURE__ */ jsxs("div", {
					"data-testid": "compatible-models-banner",
					className: "mt-2 flex items-center gap-1 rounded-lg bg-background-section-burn px-2.5 py-2",
					children: [/* @__PURE__ */ jsx("span", { className: "i-ri-information-2-fill h-4 w-4 shrink-0 text-text-accent" }), /* @__PURE__ */ jsx("p", {
						className: "text-text-secondary system-xs-medium",
						children: t("modelProvider.selector.onlyCompatibleModelsShown", { ns: "common" })
					})]
				})]
			}),
			showCreditsExhaustedAlert && /* @__PURE__ */ jsx(CreditsExhaustedAlert, { hasApiKeyFallback }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-1 pb-1",
				children: [
					filteredModelList.map((model) => /* @__PURE__ */ jsx(PopupItem, {
						defaultModel,
						model,
						onSelect,
						onHide
					}, model.provider)),
					!filteredModelList.length && !installedModelList.length && /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-2 rounded-[10px] bg-gradient-to-r from-state-base-hover to-background-gradient-mask-transparent p-4",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-[10px] border-[0.5px] border-components-card-border bg-components-card-bg shadow-lg backdrop-blur-[5px]",
								children: /* @__PURE__ */ jsx("span", { className: "i-ri-brain-2-line h-5 w-5 text-text-tertiary" })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-text-secondary system-sm-medium",
									children: t("modelProvider.selector.noProviderConfigured", { ns: "common" })
								}), /* @__PURE__ */ jsx("p", {
									className: "text-text-tertiary system-xs-regular",
									children: t("modelProvider.selector.noProviderConfiguredDesc", { ns: "common" })
								})]
							}),
							/* @__PURE__ */ jsxs(Button, {
								variant: "primary",
								className: "w-[108px]",
								onClick: () => {
									onHide();
									setShowAccountSettingModal({ payload: ACCOUNT_SETTING_TAB.PROVIDER });
								},
								children: [t("modelProvider.selector.configure", { ns: "common" }), /* @__PURE__ */ jsx("span", { className: "i-ri-arrow-right-line h-4 w-4" })]
							})
						]
					}),
					!filteredModelList.length && installedModelList.length > 0 && /* @__PURE__ */ jsx("div", {
						className: "break-all px-3 py-1.5 text-center text-xs leading-[18px] text-text-tertiary",
						children: `No model found for \u201C${searchText}\u201D`
					}),
					marketplaceProviders.length > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", { className: "mx-2 my-1 border-t border-divider-subtle" }), /* @__PURE__ */ jsxs("div", {
						className: "mb-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-[22px] items-center px-3",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-1 cursor-pointer items-center text-text-primary system-sm-medium",
								onClick: () => setMarketplaceCollapsed((prev) => !prev),
								children: [t("modelProvider.selector.fromMarketplace", { ns: "common" }), /* @__PURE__ */ jsx("span", { className: cn("i-custom-vender-solid-general-arrow-down-round-fill h-4 w-4 text-text-quaternary", marketplaceCollapsed && "-rotate-90") })]
							})
						}), !marketplaceCollapsed && /* @__PURE__ */ jsxs(Fragment$1, { children: [marketplaceProviders.map((key) => {
							const Icon = providerIconMap[key];
							const isInstalling = installingProvider === key;
							return /* @__PURE__ */ jsxs("div", {
								className: "group flex cursor-pointer items-center gap-1 rounded-lg py-0.5 pl-3 pr-0.5 hover:bg-state-base-hover",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex flex-1 items-center gap-2 py-0.5",
									children: [/* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 shrink-0 rounded-md" }), /* @__PURE__ */ jsx("span", {
										className: "text-text-secondary system-sm-regular",
										children: modelNameMap[key]
									})]
								}), /* @__PURE__ */ jsxs(Button, {
									variant: "secondary",
									size: "small",
									className: cn("shrink-0 backdrop-blur-[5px]", !isInstalling && "hidden group-hover:flex"),
									disabled: isInstalling || isMarketplacePluginsLoading,
									onClick: () => handleInstallPlugin(key),
									children: [isInstalling && /* @__PURE__ */ jsx("span", { className: "i-ri-loader-2-line h-3.5 w-3.5 animate-spin" }), isInstalling ? t("installModal.installing", { ns: "plugin" }) : t("modelProvider.selector.install", { ns: "common" })]
								})]
							}, key);
						}), /* @__PURE__ */ jsxs("a", {
							className: "flex cursor-pointer items-center gap-0.5 px-3 pt-1.5",
							href: getMarketplaceUrl("", { theme }),
							target: "_blank",
							rel: "noopener noreferrer",
							children: [/* @__PURE__ */ jsx("span", {
								className: "flex-1 text-text-accent system-xs-regular",
								children: t("modelProvider.selector.discoverMoreInMarketplace", { ns: "common" })
							}), /* @__PURE__ */ jsx("span", { className: "i-ri-arrow-right-up-line !h-3 !w-3 text-text-accent" })]
						})] })]
					})] })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "sticky bottom-0 flex cursor-pointer items-center gap-1 rounded-b-lg border-t border-divider-subtle bg-components-panel-bg px-3 py-2 text-text-tertiary hover:text-text-secondary",
				onClick: () => {
					onHide();
					setShowAccountSettingModal({ payload: ACCOUNT_SETTING_TAB.PROVIDER });
				},
				children: [/* @__PURE__ */ jsx("span", { className: "i-ri-equalizer-2-line h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", {
					className: "system-xs-medium",
					children: t("modelProvider.selector.modelProviderSettings", { ns: "common" })
				})]
			})
		]
	});
};
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-selector/index.tsx
var ModelSelector = ({ defaultModel, modelList, triggerClassName, popupClassName, onSelect, onHide, readonly, scopeFeatures = [], deprecatedClassName, showDeprecatedWarnIcon = true }) => {
	const [open, setOpen] = useState(false);
	const { currentProvider, currentModel } = useCurrentProviderAndModel(modelList, defaultModel);
	const handleSelect = (provider, model) => {
		setOpen(false);
		if (onSelect) onSelect({
			provider,
			model: model.model
		});
	};
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: (newOpen) => {
			if (readonly) return;
			setOpen(newOpen);
		},
		children: [/* @__PURE__ */ jsx(PopoverTrigger, { render: /* @__PURE__ */ jsx("button", {
			type: "button",
			className: "block w-full border-0 bg-transparent p-0 text-left",
			disabled: readonly,
			children: /* @__PURE__ */ jsx(ModelSelectorTrigger, {
				currentProvider,
				currentModel,
				defaultModel,
				open,
				readonly,
				className: triggerClassName,
				deprecatedClassName,
				showDeprecatedWarnIcon
			})
		}) }), /* @__PURE__ */ jsx(PopoverContent, {
			placement: "bottom-start",
			sideOffset: 4,
			className: popupClassName,
			popupClassName: "overflow-hidden rounded-lg",
			popupProps: { style: {
				minWidth: "320px",
				width: "var(--anchor-width, auto)"
			} },
			children: /* @__PURE__ */ jsx(Popup, {
				defaultModel,
				modelList,
				onSelect: handleSelect,
				scopeFeatures,
				onHide: () => {
					setOpen(false);
					onHide?.();
				}
			})
		})]
	});
};
//#endregion
export { Icon$1 as a, isDestructiveVariant as c, DERIVED_MODEL_STATUS_BADGE_I18N as d, DERIVED_MODEL_STATUS_TOOLTIP_I18N as f, Icon as i, useCredentialPanelState as l, useChangeProviderPriority as n, Icon$6 as o, deriveModelStatus as p, dropdown_content_default as r, supportFunctionCall as s, ModelSelector as t, useTrialCredits as u };
