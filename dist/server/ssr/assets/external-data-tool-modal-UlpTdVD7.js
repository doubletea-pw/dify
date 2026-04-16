import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import { t as app_icon_default } from "./app-icon-DPKtAo3e.js";
import "./dist-mUzjAi-W.js";
import "./divider-DZD56ykp.js";
import "./config-Dopncj5R.js";
import "./base-BuKAg6Le.js";
import { t as noop } from "./noop--k6oqy4d.js";
import "./IconBase-CEF_UoQI.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import "./input-BOHL-qYi.js";
import { n as SimpleSelect } from "./select-C87OPWpf.js";
import "./dialog-DCCIZLOh.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import "./use-base-DLpNl2rR.js";
import { a as useLocale, n as useDocLink, o as LanguagesSupported } from "./i18n-lDm19WzR.js";
import "./Inner-Cd93zOxF.js";
import "./badge-DnA7gOK5.js";
import "./textarea-Ngtow1st.js";
import "./constants-P0J540jJ.js";
import "./modal-context-CphlqvPm.js";
import { r as useCodeBasedExtensions } from "./use-common-BJ1aZaXJ.js";
import "./arrows-fbeBWnky.js";
import { t as EmojiPicker } from "./emoji-picker-bCOFUD1x.js";
import { n as FormGeneration, t as ApiBasedExtensionSelector } from "./selector-1Eigox7V.js";
import { t as Icon } from "./education-iPxZ2qxn.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/app/configuration/tools/external-data-tool-modal.tsx
var systemTypes = ["api"];
var ExternalDataToolModal = ({ data, onCancel, onSave, onValidateBeforeSave }) => {
	const { t } = useTranslation();
	const docLink = useDocLink();
	const { notify } = useToastContext();
	const locale = useLocale();
	const [localeData, setLocaleData] = useState(data.type ? data : {
		...data,
		type: "api"
	});
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const { data: codeBasedExtensionList } = useCodeBasedExtensions("external_data_tool");
	const providers = [{
		key: "api",
		name: t("apiBasedExtension.selector.title", { ns: "common" })
	}, ...codeBasedExtensionList ? codeBasedExtensionList.data.map((item) => {
		return {
			key: item.name,
			name: locale === "zh-Hans" ? item.label["zh-Hans"] : item.label["en-US"],
			form_schema: item.form_schema
		};
	}) : []];
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
	const handleDataExtraChange = (extraValue) => {
		setLocaleData({
			...localeData,
			config: {
				...localeData.config,
				...extraValue
			}
		});
	};
	const handleValueChange = (value) => {
		setLocaleData({
			...localeData,
			...value
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
	const formatData = (originData) => {
		const { type, config } = originData;
		const params = {};
		if (type === "api") params.api_based_extension_id = config?.api_based_extension_id;
		if (systemTypes.findIndex((t) => t === type) < 0 && currentProvider?.form_schema) currentProvider.form_schema.forEach((form) => {
			params[form.variable] = config?.[form.variable];
		});
		return {
			...originData,
			type,
			enabled: data.type ? data.enabled : true,
			config: { ...params }
		};
	};
	const handleSave = () => {
		if (!localeData.type) {
			notify({
				type: "error",
				message: t("errorMessage.valueOfVarRequired", {
					ns: "appDebug",
					key: t("feature.tools.modal.toolType.title", { ns: "appDebug" })
				})
			});
			return;
		}
		if (!localeData.label) {
			notify({
				type: "error",
				message: t("errorMessage.valueOfVarRequired", {
					ns: "appDebug",
					key: t("feature.tools.modal.name.title", { ns: "appDebug" })
				})
			});
			return;
		}
		if (!localeData.variable) {
			notify({
				type: "error",
				message: t("errorMessage.valueOfVarRequired", {
					ns: "appDebug",
					key: t("feature.tools.modal.variableName.title", { ns: "appDebug" })
				})
			});
			return;
		}
		if (localeData.variable && !/^[a-z_]\w{0,29}$/i.test(localeData.variable)) {
			notify({
				type: "error",
				message: t("varKeyError.notValid", {
					ns: "appDebug",
					key: t("feature.tools.modal.variableName.title", { ns: "appDebug" })
				})
			});
			return;
		}
		if (localeData.type === "api" && !localeData.config?.api_based_extension_id) {
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
		const formattedData = formatData(localeData);
		if (onValidateBeforeSave && !onValidateBeforeSave(formattedData)) return;
		onSave(formatData(formattedData));
	};
	return /* @__PURE__ */ jsxs(Modal, {
		isShow: true,
		onClose: noop,
		className: "!w-[640px] !max-w-none !p-8 !pb-6",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mb-2 text-xl font-semibold text-text-primary",
				children: `${data.type ? t("operation.edit", { ns: "common" }) : t("operation.add", { ns: "common" })} ${t("variableConfig.apiBasedVar", { ns: "appDebug" })}`
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "py-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-sm font-medium leading-9 text-text-primary",
					children: t("apiBasedExtension.type", { ns: "common" })
				}), /* @__PURE__ */ jsx(SimpleSelect, {
					defaultValue: localeData.type,
					items: providers.map((option) => {
						return {
							value: option.key,
							name: option.name
						};
					}),
					onSelect: (item) => handleDataTypeChange(item.value)
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "py-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-sm font-medium leading-9 text-text-primary",
					children: t("feature.tools.modal.name.title", { ns: "appDebug" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					children: [/* @__PURE__ */ jsx("input", {
						value: localeData.label || "",
						onChange: (e) => handleValueChange({ label: e.target.value }),
						className: "mr-2 block h-9 grow appearance-none rounded-lg bg-components-input-bg-normal px-3 text-sm text-components-input-text-filled outline-none",
						placeholder: t("feature.tools.modal.name.placeholder", { ns: "appDebug" }) || ""
					}), /* @__PURE__ */ jsx(app_icon_default, {
						size: "large",
						onClick: () => {
							setShowEmojiPicker(true);
						},
						className: "!h-9 !w-9 cursor-pointer rounded-lg border-[0.5px] border-components-panel-border",
						icon: localeData.icon,
						background: localeData.icon_background
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "py-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-sm font-medium leading-9 text-text-primary",
					children: t("feature.tools.modal.variableName.title", { ns: "appDebug" })
				}), /* @__PURE__ */ jsx("input", {
					value: localeData.variable || "",
					onChange: (e) => handleValueChange({ variable: e.target.value }),
					className: "block h-9 w-full appearance-none rounded-lg bg-components-input-bg-normal px-3 text-sm text-components-input-text-filled outline-none",
					placeholder: t("feature.tools.modal.variableName.placeholder", { ns: "appDebug" }) || ""
				})]
			}),
			localeData.type === "api" && /* @__PURE__ */ jsxs("div", {
				className: "py-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex h-9 items-center justify-between text-sm font-medium text-text-primary",
					children: [t("apiBasedExtension.selector.title", { ns: "common" }), /* @__PURE__ */ jsxs("a", {
						href: docLink("/use-dify/workspace/api-extension/api-extension"),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group flex items-center text-xs font-normal text-text-tertiary hover:text-text-accent",
						children: [/* @__PURE__ */ jsx(Icon, { className: "mr-1 h-3 w-3 text-text-tertiary group-hover:text-text-accent" }), t("apiBasedExtension.link", { ns: "common" })]
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
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex items-center justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					onClick: onCancel,
					className: "mr-2",
					children: t("operation.cancel", { ns: "common" })
				}), /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					onClick: handleSave,
					children: t("operation.save", { ns: "common" })
				})]
			}),
			showEmojiPicker && /* @__PURE__ */ jsx(EmojiPicker, {
				onSelect: (icon, icon_background) => {
					handleValueChange({
						icon,
						icon_background
					});
					setShowEmojiPicker(false);
				},
				onClose: () => {
					handleValueChange({
						icon: "",
						icon_background: ""
					});
					setShowEmojiPicker(false);
				}
			})
		]
	});
};
//#endregion
export { ExternalDataToolModal as default };
