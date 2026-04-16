import { Mt as Qm, Rr as qy, Un as c4, t as $0, xt as P7 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import "./dist-mUzjAi-W.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import "./config-Dopncj5R.js";
import "./base-BuKAg6Le.js";
import { n as PortalToFollowElemContent, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as confirm_default } from "./confirm-CKQP3hdx.js";
import { t as ActionButton } from "./action-button-BK9WUMzU.js";
import { t as Input } from "./input-BOHL-qYi.js";
import { i as useToastContext } from "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import { l as createExternalAPI } from "./datasets-hfpkpjNW.js";
import { n as useDocLink } from "./i18n-lDm19WzR.js";
import * as React$1 from "react";
import { memo, useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/datasets/external-api/external-api-modal/Form.tsx
var Form = React$1.memo(({ className, itemClassName, fieldLabelClassName, value, onChange, formSchemas, inputClassName }) => {
	const { t, i18n } = useTranslation();
	const docLink = useDocLink();
	const handleFormChange = (key, val) => {
		if (key === "name") onChange({
			...value,
			[key]: val
		});
		else onChange({
			...value,
			settings: {
				...value.settings,
				[key]: val
			}
		});
	};
	const renderField = (formSchema) => {
		const { variable, type, label, required } = formSchema;
		const fieldValue = variable === "name" ? value[variable] : value.settings[variable] || "";
		return /* @__PURE__ */ jsxs("div", {
			className: cn(itemClassName, "flex flex-col items-start gap-1 self-stretch"),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex w-full items-center justify-between",
				children: [/* @__PURE__ */ jsxs("label", {
					className: cn(fieldLabelClassName, "system-sm-semibold text-text-secondary"),
					htmlFor: variable,
					children: [label[i18n.language] || label.en_US, required && /* @__PURE__ */ jsx("span", {
						className: "ml-1 text-red-500",
						children: "*"
					})]
				}), variable === "endpoint" && /* @__PURE__ */ jsxs("a", {
					href: docLink("/use-dify/knowledge/external-knowledge-api") || "/",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "body-xs-regular flex items-center text-text-accent",
					children: [/* @__PURE__ */ jsx(c4, { className: "mr-1 h-3 w-3 text-text-accent" }), t("externalAPIPanelDocumentation", { ns: "dataset" })]
				})]
			}), /* @__PURE__ */ jsx(Input, {
				type: type === "secret" ? "password" : "text",
				id: variable,
				name: variable,
				value: fieldValue,
				onChange: (val) => handleFormChange(variable, val.target.value),
				required,
				className: cn(inputClassName)
			})]
		}, variable);
	};
	return /* @__PURE__ */ jsx("form", {
		className: cn("flex flex-col items-start justify-center gap-4 self-stretch", className),
		children: formSchemas.map((formSchema) => renderField(formSchema))
	});
});
Form.displayName = "Form";
//#endregion
//#region app/components/datasets/external-api/external-api-modal/index.tsx
var formSchemas = [
	{
		variable: "name",
		type: "text",
		label: { en_US: "Name" },
		required: true
	},
	{
		variable: "endpoint",
		type: "text",
		label: { en_US: "API Endpoint" },
		required: true
	},
	{
		variable: "api_key",
		type: "secret",
		label: { en_US: "API Key" },
		required: true
	}
];
var AddExternalAPIModal = ({ data, onSave, onCancel, datasetBindings, isEditMode, onEdit }) => {
	const { t } = useTranslation();
	const { notify } = useToastContext();
	const [loading, setLoading] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		settings: {
			endpoint: "",
			api_key: ""
		}
	});
	useEffect(() => {
		if (isEditMode && data) setFormData(data);
	}, [isEditMode, data]);
	const hasEmptyInputs = Object.values(formData).some((value) => typeof value === "string" ? value.trim() === "" : Object.values(value).some((v) => v.trim() === ""));
	const handleDataChange = (val) => {
		setFormData(val);
	};
	const handleSave = async () => {
		if (formData && formData.settings.api_key && formData.settings.api_key?.length < 5) {
			notify({
				type: "error",
				message: t("apiBasedExtension.modal.apiKey.lengthError", { ns: "common" })
			});
			setLoading(false);
			return;
		}
		try {
			setLoading(true);
			if (isEditMode && onEdit) {
				const apiKeyToSend = formData.settings.api_key === "[__HIDDEN__]" ? "[__HIDDEN__]" : formData.settings.api_key;
				await onEdit({
					...formData,
					settings: {
						...formData.settings,
						api_key: apiKeyToSend
					}
				});
				notify({
					type: "success",
					message: "External API updated successfully"
				});
			} else {
				const res = await createExternalAPI({ body: formData });
				if (res && res.id) {
					notify({
						type: "success",
						message: "External API saved successfully"
					});
					onSave(res);
				}
			}
			onCancel();
		} catch (error) {
			console.error("Error saving/updating external API:", error);
			notify({
				type: "error",
				message: "Failed to save/update External API"
			});
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsx(PortalToFollowElem, {
		open: true,
		children: /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[60] h-full w-full",
			children: /* @__PURE__ */ jsxs("div", {
				className: "fixed inset-0 flex items-center justify-center bg-black/[.25]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "shadows-shadow-xl relative flex w-[480px] flex-col items-start rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-start gap-2 self-stretch pb-3 pl-6 pr-14 pt-6",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grow self-stretch text-text-primary title-2xl-semi-bold",
								children: isEditMode ? t("editExternalAPIFormTitle", { ns: "dataset" }) : t("createExternalAPI", { ns: "dataset" })
							}), isEditMode && (datasetBindings?.length ?? 0) > 0 && /* @__PURE__ */ jsxs("div", {
								className: "flex items-center text-text-tertiary system-xs-regular",
								children: [t("editExternalAPIFormWarning.front", { ns: "dataset" }), /* @__PURE__ */ jsxs("span", {
									className: "flex cursor-pointer items-center text-text-accent",
									children: [
										"\xA0",
										datasetBindings?.length,
										" ",
										t("editExternalAPIFormWarning.end", { ns: "dataset" }),
										"\xA0",
										/* @__PURE__ */ jsx(tooltip_default, {
											popupClassName: "flex items-center self-stretch w-[320px]",
											popupContent: /* @__PURE__ */ jsxs("div", {
												className: "p-1",
												children: [/* @__PURE__ */ jsx("div", {
													className: "flex items-start self-stretch pb-0.5 pl-2 pr-3 pt-1",
													children: /* @__PURE__ */ jsx("div", {
														className: "text-text-tertiary system-xs-medium-uppercase",
														children: `${datasetBindings?.length} ${t("editExternalAPITooltipTitle", { ns: "dataset" })}`
													})
												}), datasetBindings?.map((binding) => /* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-1 self-stretch px-2 py-1",
													children: [/* @__PURE__ */ jsx($0, { className: "h-4 w-4 text-text-secondary" }), /* @__PURE__ */ jsx("div", {
														className: "text-text-secondary system-sm-medium",
														children: binding.name
													})]
												}, binding.id))]
											}),
											asChild: false,
											position: "bottom",
											children: /* @__PURE__ */ jsx(qy, { className: "h-3.5 w-3.5" })
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ jsx(ActionButton, {
							className: "absolute right-5 top-5",
							onClick: onCancel,
							children: /* @__PURE__ */ jsx(P7, { className: "h-[18px] w-[18px] shrink-0 text-text-tertiary" })
						}),
						/* @__PURE__ */ jsx(Form, {
							value: formData,
							onChange: handleDataChange,
							formSchemas,
							className: "flex flex-col items-start justify-center gap-4 self-stretch px-6 py-3"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-end gap-2 self-stretch p-6 pt-5",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "secondary",
								onClick: onCancel,
								children: t("externalAPIForm.cancel", { ns: "dataset" })
							}), /* @__PURE__ */ jsx(Button, {
								type: "submit",
								variant: "primary",
								onClick: () => {
									if (isEditMode && (datasetBindings?.length ?? 0) > 0) setShowConfirm(true);
									else if (isEditMode && onEdit) onEdit(formData);
									else handleSave();
								},
								disabled: hasEmptyInputs || loading,
								children: t("externalAPIForm.save", { ns: "dataset" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-center gap-1 self-stretch rounded-b-2xl border-t-[0.5px] border-divider-subtle\n              bg-background-soft px-2 py-3 text-text-tertiary system-xs-regular",
							children: [
								/* @__PURE__ */ jsx(Qm, { className: "h-3 w-3 text-text-quaternary" }),
								t("externalAPIForm.encrypted.front", { ns: "dataset" }),
								/* @__PURE__ */ jsx("a", {
									className: "text-text-accent",
									target: "_blank",
									rel: "noopener noreferrer",
									href: "https://pycryptodome.readthedocs.io/en/latest/src/cipher/oaep.html",
									children: "PKCS1_OAEP"
								}),
								t("externalAPIForm.encrypted.end", { ns: "dataset" })
							]
						})
					]
				}), showConfirm && (datasetBindings?.length ?? 0) > 0 && /* @__PURE__ */ jsx(confirm_default, {
					isShow: showConfirm,
					type: "warning",
					title: "Warning",
					content: `${t("editExternalAPIConfirmWarningContent.front", { ns: "dataset" })} ${datasetBindings?.length} ${t("editExternalAPIConfirmWarningContent.end", { ns: "dataset" })}`,
					onCancel: () => setShowConfirm(false),
					onConfirm: handleSave
				})]
			})
		})
	});
};
var external_api_modal_default = memo(AddExternalAPIModal);
//#endregion
export { external_api_modal_default as default };
