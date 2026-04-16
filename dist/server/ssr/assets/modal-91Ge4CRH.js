import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./dist-mUzjAi-W.js";
import "./config-Dopncj5R.js";
import "./base-BuKAg6Le.js";
import { t as noop } from "./noop--k6oqy4d.js";
import "./IconBase-CEF_UoQI.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./action-button-BK9WUMzU.js";
import "./dialog-DCCIZLOh.js";
import { t as Modal } from "./modal-9VFVByDR.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import { I as updateApiBasedExtension, n as addApiBasedExtension } from "./common-qRxT6xi0.js";
import { n as useDocLink } from "./i18n-lDm19WzR.js";
import { t as Icon } from "./education-iPxZ2qxn.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/header/account-setting/api-based-extension-page/modal.tsx
var ApiBasedExtensionModal = ({ data, onCancel, onSave }) => {
	const { t } = useTranslation();
	const docLink = useDocLink();
	const [localeData, setLocaleData] = useState(data);
	const [loading, setLoading] = useState(false);
	const { notify } = useToastContext();
	const handleDataChange = (type, value) => {
		setLocaleData({
			...localeData,
			[type]: value
		});
	};
	const handleSave = async () => {
		setLoading(true);
		if (localeData && localeData.api_key && localeData.api_key?.length < 5) {
			notify({
				type: "error",
				message: t("apiBasedExtension.modal.apiKey.lengthError", { ns: "common" })
			});
			setLoading(false);
			return;
		}
		try {
			let res = {};
			if (!data.id) res = await addApiBasedExtension({
				url: "/api-based-extension",
				body: localeData
			});
			else {
				res = await updateApiBasedExtension({
					url: `/api-based-extension/${data.id}`,
					body: {
						...localeData,
						api_key: data.api_key === localeData.api_key ? "[__HIDDEN__]" : localeData.api_key
					}
				});
				notify({
					type: "success",
					message: t("actionMsg.modifiedSuccessfully", { ns: "common" })
				});
			}
			if (onSave) onSave(res);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsxs(Modal, {
		isShow: true,
		onClose: noop,
		wrapperClassName: "z-[1002]",
		className: "!w-[640px] !max-w-none !p-8 !pb-6",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mb-2 text-xl font-semibold text-text-primary",
				children: data.name ? t("apiBasedExtension.modal.editTitle", { ns: "common" }) : t("apiBasedExtension.modal.title", { ns: "common" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "py-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-sm font-medium leading-9 text-text-primary",
					children: t("apiBasedExtension.modal.name.title", { ns: "common" })
				}), /* @__PURE__ */ jsx("input", {
					value: localeData.name || "",
					onChange: (e) => handleDataChange("name", e.target.value),
					className: "block h-9 w-full appearance-none rounded-lg bg-components-input-bg-normal px-3 text-sm text-text-primary outline-none",
					placeholder: t("apiBasedExtension.modal.name.placeholder", { ns: "common" }) || ""
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "py-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex h-9 items-center justify-between text-sm font-medium text-text-primary",
					children: [t("apiBasedExtension.modal.apiEndpoint.title", { ns: "common" }), /* @__PURE__ */ jsxs("a", {
						href: docLink("/use-dify/workspace/api-extension/api-extension"),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group flex items-center text-xs font-normal text-text-accent",
						children: [/* @__PURE__ */ jsx(Icon, { className: "mr-1 h-3 w-3" }), t("apiBasedExtension.link", { ns: "common" })]
					})]
				}), /* @__PURE__ */ jsx("input", {
					value: localeData.api_endpoint || "",
					onChange: (e) => handleDataChange("api_endpoint", e.target.value),
					className: "block h-9 w-full appearance-none rounded-lg bg-components-input-bg-normal px-3 text-sm text-text-primary outline-none",
					placeholder: t("apiBasedExtension.modal.apiEndpoint.placeholder", { ns: "common" }) || ""
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "py-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-sm font-medium leading-9 text-text-primary",
					children: t("apiBasedExtension.modal.apiKey.title", { ns: "common" })
				}), /* @__PURE__ */ jsx("div", {
					className: "flex items-center",
					children: /* @__PURE__ */ jsx("input", {
						value: localeData.api_key || "",
						onChange: (e) => handleDataChange("api_key", e.target.value),
						className: "mr-2 block h-9 grow appearance-none rounded-lg bg-components-input-bg-normal px-3 text-sm text-text-primary outline-none",
						placeholder: t("apiBasedExtension.modal.apiKey.placeholder", { ns: "common" }) || ""
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex items-center justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					onClick: onCancel,
					className: "mr-2",
					children: t("operation.cancel", { ns: "common" })
				}), /* @__PURE__ */ jsx(Button, {
					variant: "primary",
					disabled: !localeData.name || !localeData.api_endpoint || !localeData.api_key || loading,
					onClick: handleSave,
					children: t("operation.save", { ns: "common" })
				})]
			})
		]
	});
};
//#endregion
export { ApiBasedExtensionModal as default };
