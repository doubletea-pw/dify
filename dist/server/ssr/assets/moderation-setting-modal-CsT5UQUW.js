import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./dist-mUzjAi-W.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { t as Divider } from "./divider-DZD56ykp.js";
import { r as CustomConfigurationStatusEnum } from "./declarations-DYMEe7hD.js";
import "./config-Dopncj5R.js";
import "./base-BuKAg6Le.js";
import { t as noop } from "./noop--k6oqy4d.js";
import "./IconBase-CEF_UoQI.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import { t as switch_default } from "./switch-CFJdYxEh.js";
import "./select-C87OPWpf.js";
import "./dialog-DCCIZLOh.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import "./use-base-DLpNl2rR.js";
import { a as useLocale, n as useDocLink, o as LanguagesSupported } from "./i18n-lDm19WzR.js";
import "./badge-DnA7gOK5.js";
import "./textarea-Ngtow1st.js";
import { n as ACCOUNT_SETTING_TAB } from "./constants-P0J540jJ.js";
import { n as useModalContext } from "./modal-context-CphlqvPm.js";
import { r as useCodeBasedExtensions, v as useModelProviders } from "./use-common-BJ1aZaXJ.js";
import "./arrows-fbeBWnky.js";
import { n as FormGeneration, t as ApiBasedExtensionSelector } from "./selector-1Eigox7V.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/base/features/new-feature-panel/moderation/moderation-content.tsx
var ModerationContent = ({ title, info, showPreset = true, config, onConfigChange }) => {
	const { t } = useTranslation();
	const handleConfigChange = (field, value) => {
		if (field === "preset_response" && typeof value === "string") value = value.slice(0, 100);
		onConfigChange({
			...config,
			[field]: value
		});
	};
	return /* @__PURE__ */ jsx("div", {
		className: "py-2",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-components-panel-border bg-components-panel-bg",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex h-10 items-center justify-between rounded-lg px-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "shrink-0 text-sm font-medium text-text-primary",
					children: title
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex grow items-center justify-end",
					children: [info && /* @__PURE__ */ jsx("div", {
						className: "mr-2 truncate text-xs text-text-tertiary",
						title: info,
						children: info
					}), /* @__PURE__ */ jsx(switch_default, {
						size: "lg",
						value: config.enabled,
						onChange: (v) => handleConfigChange("enabled", v)
					})]
				})]
			}), config.enabled && showPreset && /* @__PURE__ */ jsxs("div", {
				className: "rounded-lg bg-components-panel-bg px-3 pb-3 pt-1",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex h-8 items-center justify-between text-[13px] font-medium text-text-secondary",
					children: [t("feature.moderation.modal.content.preset", { ns: "appDebug" }), /* @__PURE__ */ jsx("span", {
						className: "text-xs font-normal text-text-tertiary",
						children: t("feature.moderation.modal.content.supportMarkdown", { ns: "appDebug" })
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative h-20 rounded-lg bg-components-input-bg-normal px-3 py-2",
					children: [/* @__PURE__ */ jsx("textarea", {
						value: config.preset_response || "",
						className: "block h-full w-full resize-none appearance-none bg-transparent text-sm text-text-secondary outline-none",
						placeholder: t("feature.moderation.modal.content.placeholder", { ns: "appDebug" }) || "",
						onChange: (e) => handleConfigChange("preset_response", e.target.value)
					}), /* @__PURE__ */ jsxs("div", {
						className: "absolute bottom-2 right-2 flex h-5 items-center rounded-md bg-background-section px-1 text-xs font-medium text-text-quaternary",
						children: [
							/* @__PURE__ */ jsx("span", { children: (config.preset_response || "").length }),
							"/",
							/* @__PURE__ */ jsx("span", {
								className: "text-text-tertiary",
								children: "100"
							})
						]
					})]
				})]
			})]
		})
	});
};
//#endregion
//#region app/components/base/features/new-feature-panel/moderation/moderation-setting-modal.tsx
var systemTypes = [
	"openai_moderation",
	"keywords",
	"api"
];
var ModerationSettingModal = ({ data, onCancel, onSave }) => {
	const { t } = useTranslation();
	const docLink = useDocLink();
	const { notify } = useToastContext();
	const locale = useLocale();
	const { data: modelProviders, isPending: isLoading, refetch: refetchModelProviders } = useModelProviders();
	const [localeData, setLocaleData] = useState(data);
	const { setShowAccountSettingModal } = useModalContext();
	const handleOpenSettingsModal = () => {
		setShowAccountSettingModal({
			payload: ACCOUNT_SETTING_TAB.PROVIDER,
			onCancelCallback: () => {
				refetchModelProviders();
			}
		});
	};
	const { data: codeBasedExtensionList } = useCodeBasedExtensions("moderation");
	const openaiProvider = modelProviders?.data.find((item) => item.provider === "langgenius/openai/openai");
	const systemOpenaiProviderCanUse = (openaiProvider?.system_configuration.enabled ? openaiProvider?.system_configuration.quota_configurations.find((item) => item.quota_type === openaiProvider.system_configuration.current_quota_type) : void 0)?.is_valid;
	const isOpenAIProviderConfigured = openaiProvider?.custom_configuration.status === CustomConfigurationStatusEnum.active || systemOpenaiProviderCanUse;
	const providers = [
		{
			key: "openai_moderation",
			name: t("feature.moderation.modal.provider.openai", { ns: "appDebug" })
		},
		{
			key: "keywords",
			name: t("feature.moderation.modal.provider.keywords", { ns: "appDebug" })
		},
		{
			key: "api",
			name: t("apiBasedExtension.selector.title", { ns: "common" })
		},
		...codeBasedExtensionList ? codeBasedExtensionList.data.map((item) => {
			return {
				key: item.name,
				name: locale === "zh-Hans" ? item.label["zh-Hans"] : item.label["en-US"],
				form_schema: item.form_schema
			};
		}) : []
	];
	const currentProvider = providers.find((provider) => provider.key === localeData.type);
	const handleDataTypeChange = (type) => {
		let config;
		const currProvider = providers.find((provider) => provider.key === type);
		if (systemTypes.findIndex((t) => t === type) < 0 && currProvider?.form_schema) config = currProvider?.form_schema.reduce((prev, next) => {
			prev[next.variable] = next.default;
			return prev;
		}, {});
		setLocaleData({
			...localeData,
			type,
			config
		});
	};
	const handleDataKeywordsChange = (e) => {
		const arr = e.target.value.split("\n").reduce((prev, next) => {
			if (next !== "") prev.push(next.slice(0, 100));
			if (next === "" && prev[prev.length - 1] !== "") prev.push(next);
			return prev;
		}, []);
		setLocaleData({
			...localeData,
			config: {
				...localeData.config,
				keywords: arr.slice(0, 100).join("\n")
			}
		});
	};
	const handleDataContentChange = (contentType, contentConfig) => {
		setLocaleData({
			...localeData,
			config: {
				...localeData.config,
				[contentType]: contentConfig
			}
		});
	};
	const handleDataApiBasedChange = (apiBasedExtensionId) => {
		setLocaleData({
			...localeData,
			config: {
				...localeData.config,
				api_based_extension_id: apiBasedExtensionId
			}
		});
	};
	const handleDataExtraChange = (extraValue) => {
		setLocaleData({
			...localeData,
			config: {
				...localeData.config,
				...extraValue
			}
		});
	};
	const formatData = (originData) => {
		const { enabled, type, config } = originData;
		const { inputs_config, outputs_config } = config;
		const params = {};
		if (type === "keywords") params.keywords = config?.keywords;
		if (type === "api") params.api_based_extension_id = config?.api_based_extension_id;
		if (systemTypes.findIndex((t) => t === type) < 0 && currentProvider?.form_schema) currentProvider.form_schema.forEach((form) => {
			params[form.variable] = config?.[form.variable];
		});
		return {
			type,
			enabled,
			config: {
				inputs_config: inputs_config || { enabled: false },
				outputs_config: outputs_config || { enabled: false },
				...params
			}
		};
	};
	const handleSave = () => {
		/* v8 ignore next -- UI-invariant guard: same condition is used in Save button disabled logic, so when true handleSave has no user-triggerable invocation path. @preserve */
		if (localeData.type === "openai_moderation" && !isOpenAIProviderConfigured) return;
		if (!localeData.config?.inputs_config?.enabled && !localeData.config?.outputs_config?.enabled) {
			notify({
				type: "error",
				message: t("feature.moderation.modal.content.condition", { ns: "appDebug" })
			});
			return;
		}
		if (localeData.type === "keywords" && !localeData.config.keywords) {
			notify({
				type: "error",
				message: t("errorMessage.valueOfVarRequired", {
					ns: "appDebug",
					key: locale !== LanguagesSupported[1] ? "keywords" : "关键词"
				})
			});
			return;
		}
		if (localeData.type === "api" && !localeData.config.api_based_extension_id) {
			notify({
				type: "error",
				message: t("errorMessage.valueOfVarRequired", {
					ns: "appDebug",
					key: locale !== LanguagesSupported[1] ? "API Extension" : "API 扩展"
				})
			});
			return;
		}
		if (systemTypes.findIndex((t) => t === localeData.type) < 0 && currentProvider?.form_schema) {
			for (let i = 0; i < currentProvider.form_schema.length; i++) if (!localeData.config?.[currentProvider.form_schema[i].variable] && currentProvider.form_schema[i].required) {
				notify({
					type: "error",
					message: t("errorMessage.valueOfVarRequired", {
						ns: "appDebug",
						key: locale !== LanguagesSupported[1] ? currentProvider.form_schema[i].label["en-US"] : currentProvider.form_schema[i].label["zh-Hans"]
					})
				});
				return;
			}
		}
		if (localeData.config.inputs_config?.enabled && !localeData.config.inputs_config.preset_response && localeData.type !== "api") {
			notify({
				type: "error",
				message: t("feature.moderation.modal.content.errorMessage", { ns: "appDebug" })
			});
			return;
		}
		if (localeData.config.outputs_config?.enabled && !localeData.config.outputs_config.preset_response && localeData.type !== "api") {
			notify({
				type: "error",
				message: t("feature.moderation.modal.content.errorMessage", { ns: "appDebug" })
			});
			return;
		}
		onSave(formatData(localeData));
	};
	return /* @__PURE__ */ jsxs(Modal, {
		isShow: true,
		onClose: noop,
		className: "!mt-14 !w-[600px] !max-w-none !p-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-text-primary title-2xl-semi-bold",
					children: t("feature.moderation.modal.title", { ns: "appDebug" })
				}), /* @__PURE__ */ jsx("div", {
					role: "button",
					tabIndex: 0,
					className: "cursor-pointer p-1",
					onClick: onCancel,
					onKeyDown: (e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							onCancel();
						}
					},
					children: /* @__PURE__ */ jsx("span", { className: "i-ri-close-line h-4 w-4 text-text-tertiary" })
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "py-2",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-sm font-medium leading-9 text-text-primary",
						children: t("feature.moderation.modal.provider.title", { ns: "appDebug" })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-3 gap-2.5",
						children: providers.map((provider) => /* @__PURE__ */ jsxs("div", {
							className: cn("flex h-8 cursor-default items-center rounded-md border border-components-option-card-option-border bg-components-option-card-option-bg px-2 text-text-secondary system-sm-regular", localeData.type !== provider.key && "cursor-pointer hover:border-components-option-card-option-border-hover hover:bg-components-option-card-option-bg-hover hover:shadow-xs", localeData.type === provider.key && "border-[1.5px] border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg shadow-xs system-sm-medium", localeData.type === "openai_moderation" && provider.key === "openai_moderation" && !isOpenAIProviderConfigured && "text-text-disabled"),
							onClick: () => handleDataTypeChange(provider.key),
							children: [/* @__PURE__ */ jsx("div", { className: cn("mr-2 h-4 w-4 rounded-full border border-components-radio-border bg-components-radio-bg shadow-xs", localeData.type === provider.key && "border-[5px] border-components-radio-border-checked") }), provider.name]
						}, provider.key))
					}),
					!isLoading && !isOpenAIProviderConfigured && localeData.type === "openai_moderation" && /* @__PURE__ */ jsxs("div", {
						className: "mt-2 flex items-center rounded-lg border border-[#FEF0C7] bg-[#FFFAEB] px-3 py-2",
						children: [/* @__PURE__ */ jsx("span", { className: "i-custom-vender-line-general-info-circle mr-1 h-4 w-4 text-[#F79009]" }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center text-xs font-medium text-gray-700",
							children: [
								t("feature.moderation.modal.openaiNotConfig.before", { ns: "appDebug" }),
								/* @__PURE__ */ jsxs("span", {
									className: "cursor-pointer text-primary-600",
									onClick: handleOpenSettingsModal,
									children: [
										"\xA0",
										t("settings.provider", { ns: "common" }),
										"\xA0"
									]
								}),
								t("feature.moderation.modal.openaiNotConfig.after", { ns: "appDebug" })
							]
						})]
					})
				]
			}),
			localeData.type === "keywords" && /* @__PURE__ */ jsxs("div", {
				className: "py-2",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-1 text-sm font-medium text-text-primary",
						children: t("feature.moderation.modal.provider.keywords", { ns: "appDebug" })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mb-2 text-xs text-text-tertiary",
						children: t("feature.moderation.modal.keywords.tip", { ns: "appDebug" })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative h-[88px] rounded-lg bg-components-input-bg-normal px-3 py-2",
						children: [/* @__PURE__ */ jsx("textarea", {
							value: localeData.config?.keywords || "",
							onChange: handleDataKeywordsChange,
							className: "block h-full w-full resize-none appearance-none bg-transparent text-sm text-text-secondary outline-none",
							placeholder: t("feature.moderation.modal.keywords.placeholder", { ns: "appDebug" }) || ""
						}), /* @__PURE__ */ jsxs("div", {
							className: "absolute bottom-2 right-2 flex h-5 items-center rounded-md bg-background-section px-1 text-xs font-medium text-text-quaternary",
							children: [
								/* @__PURE__ */ jsx("span", { children: (localeData.config?.keywords || "").split("\n").filter(Boolean).length }),
								"/",
								/* @__PURE__ */ jsxs("span", {
									className: "text-text-tertiary",
									children: ["100", t("feature.moderation.modal.keywords.line", { ns: "appDebug" })]
								})
							]
						})]
					})
				]
			}),
			localeData.type === "api" && /* @__PURE__ */ jsxs("div", {
				className: "py-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex h-9 items-center justify-between",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-sm font-medium text-text-primary",
						children: t("apiBasedExtension.selector.title", { ns: "common" })
					}), /* @__PURE__ */ jsxs("a", {
						href: docLink("/use-dify/workspace/api-extension/api-extension"),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group flex items-center text-xs text-text-tertiary hover:text-primary-600",
						children: [/* @__PURE__ */ jsx("span", { className: "i-custom-vender-line-education-book-open-01 mr-1 h-3 w-3 text-text-tertiary group-hover:text-primary-600" }), t("apiBasedExtension.link", { ns: "common" })]
					})]
				}), /* @__PURE__ */ jsx(ApiBasedExtensionSelector, {
					value: localeData.config?.api_based_extension_id || "",
					onChange: handleDataApiBasedChange
				})]
			}),
			systemTypes.findIndex((t) => t === localeData.type) < 0 && currentProvider?.form_schema && /* @__PURE__ */ jsx(FormGeneration, {
				forms: currentProvider?.form_schema,
				value: localeData.config,
				onChange: handleDataExtraChange
			}),
			/* @__PURE__ */ jsx(Divider, {
				bgStyle: "gradient",
				className: "my-3 h-px"
			}),
			/* @__PURE__ */ jsx(ModerationContent, {
				title: t("feature.moderation.modal.content.input", { ns: "appDebug" }) || "",
				config: localeData.config?.inputs_config || {
					enabled: false,
					preset_response: ""
				},
				onConfigChange: (config) => handleDataContentChange("inputs_config", config),
				info: localeData.type === "api" && t("feature.moderation.modal.content.fromApi", { ns: "appDebug" }) || "",
				showPreset: localeData.type !== "api"
			}),
			/* @__PURE__ */ jsx(ModerationContent, {
				title: t("feature.moderation.modal.content.output", { ns: "appDebug" }) || "",
				config: localeData.config?.outputs_config || {
					enabled: false,
					preset_response: ""
				},
				onConfigChange: (config) => handleDataContentChange("outputs_config", config),
				info: localeData.type === "api" && t("feature.moderation.modal.content.fromApi", { ns: "appDebug" }) || "",
				showPreset: localeData.type !== "api"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mb-8 mt-1 text-xs font-medium text-text-tertiary",
				children: t("feature.moderation.modal.content.condition", { ns: "appDebug" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					onClick: onCancel,
					className: "mr-2",
					children: t("operation.cancel", { ns: "common" })
				}), /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					onClick: handleSave,
					disabled: localeData.type === "openai_moderation" && !isOpenAIProviderConfigured,
					children: t("operation.save", { ns: "common" })
				})]
			})
		]
	});
};
//#endregion
export { ModerationSettingModal as default };
