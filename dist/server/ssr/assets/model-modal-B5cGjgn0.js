import "./i18next-CxGFEMD9.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import "./tooltip-ZeeerRdq.js";
import "./dist-mUzjAi-W.js";
import { c as ModelModalModeEnum, i as FormTypeEnum, t as ConfigurationMethodEnum } from "./declarations-DYMEe7hD.js";
import "./config-Dopncj5R.js";
import "./i18n-config-jsJ9YUFd.js";
import "./base-BuKAg6Le.js";
import { i as useAppContext } from "./app-context-BiSzFQEV.js";
import "./IconBase-CEF_UoQI.js";
import "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import "./confirm-CKQP3hdx.js";
import "./action-button-BK9WUMzU.js";
import "./input-BOHL-qYi.js";
import { t as Loading } from "./loading-BryKikzY.js";
import "./toast-BY3OifkP.js";
import "./app-DPjSIfgb.js";
import "./var-DPpHtpXT.js";
import { C as ModelIcon, l as useCredentialData, n as badge_default, r as useModelFormSchemas, u as useAuth } from "./credential-item-C22_bUSw.js";
import "./use-base-DLpNl2rR.js";
import "./client-CLQTU2Oi.js";
import "./common-qRxT6xi0.js";
import "./i18n-lDm19WzR.js";
import "./useDebounceFn-Y4NS6c4S.js";
import "./checkbox-DTSgkYdc.js";
import "./modal-context-CphlqvPm.js";
import "./config-DUQ_rYOW.js";
import "./provider-context-CToT0pwd.js";
import "./use-triggers-DguQxV9N.js";
import "./other-sSUV3aYW.js";
import { c as Icon } from "./general-C8w9hIeL.js";
import { t as Icon$1 } from "./security-O3oX1ShW.js";
import { i as useLanguage } from "./hooks-BTelimHS.js";
import "./use-common-BJ1aZaXJ.js";
import "./dist-CGvyUAMR.js";
import "./use-theme-3YxPQV4B.js";
import { a as AlertDialogContent, i as AlertDialogConfirmButton, n as AlertDialogActions, r as AlertDialogCancelButton, s as AlertDialogTitle, t as AlertDialog } from "./alert-dialog-_9biHzKe.js";
import "./pure-Dr1CeacW.js";
import { r as useRenderI18nObject, t as auth_default } from "./auth-BGs48SaG.js";
import "./radio-4K5OYxdz.js";
import "./ui-hwb8ZSx9.js";
import { n as DialogCloseButton, r as DialogContent, t as Dialog } from "./dialog-CKL1xdm0.js";
import { r as credential_selector_default } from "./model-auth-DmvcMtiT.js";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/header/account-setting/model-provider-page/model-modal/index.tsx
var ModelModal = ({ provider, configurateMethod, currentCustomConfigurationModelFixedFields, onCancel, onSave, model, credential, isModelCredential, mode = ModelModalModeEnum.configProviderCredential }) => {
	const renderI18nObject = useRenderI18nObject();
	const providerFormSchemaPredefined = configurateMethod === ConfigurationMethodEnum.predefinedModel;
	const { isLoading, credentialData } = useCredentialData(provider, providerFormSchemaPredefined, isModelCredential, credential, model);
	const { handleSaveCredential, handleConfirmDelete, deleteCredentialId, closeConfirmDelete, openConfirmDelete, doingAction, handleActiveCredential } = useAuth(provider, configurateMethod, currentCustomConfigurationModelFixedFields, {
		isModelCredential,
		mode
	});
	const { credentials: formSchemasValue, available_credentials } = credentialData;
	const { isCurrentWorkspaceManager } = useAppContext();
	const { t } = useTranslation();
	const language = useLanguage();
	const { formSchemas, formValues, modelNameAndTypeFormSchemas, modelNameAndTypeFormValues } = useModelFormSchemas(provider, providerFormSchemaPredefined, formSchemasValue, credential, model);
	const formRef1 = useRef(null);
	const [selectedCredential, setSelectedCredential] = useState();
	const formRef2 = useRef(null);
	const isEditMode = !!credential && !!Object.keys(formSchemasValue || {}).filter((key) => {
		return key !== "__model_name" && key !== "__model_type" && !!formValues[key];
	}).length && isCurrentWorkspaceManager;
	const handleSave = useCallback(async () => {
		if (mode === ModelModalModeEnum.addCustomModelToModelList && selectedCredential && !selectedCredential?.addNewCredential) {
			handleActiveCredential(selectedCredential, model);
			onCancel();
			return;
		}
		let modelNameAndTypeIsCheckValidated = true;
		let modelNameAndTypeValues = {};
		if (mode === ModelModalModeEnum.configCustomModel) {
			const formResult = formRef1.current?.getFormValues({ needCheckValidatedValues: true }) || {
				isCheckValidated: false,
				values: {}
			};
			modelNameAndTypeIsCheckValidated = formResult.isCheckValidated;
			modelNameAndTypeValues = formResult.values;
		}
		if (mode === ModelModalModeEnum.configModelCredential && model) modelNameAndTypeValues = {
			__model_name: model.model,
			__model_type: model.model_type
		};
		if (mode === ModelModalModeEnum.addCustomModelToModelList && selectedCredential?.addNewCredential && model) modelNameAndTypeValues = {
			__model_name: model.model,
			__model_type: model.model_type
		};
		const { isCheckValidated, values } = formRef2.current?.getFormValues({
			needCheckValidatedValues: true,
			needTransformWhenSecretFieldIsPristine: true
		}) || {
			isCheckValidated: false,
			values: {}
		};
		if (!isCheckValidated || !modelNameAndTypeIsCheckValidated) return;
		const { __model_name, __model_type } = modelNameAndTypeValues;
		const { __authorization_name__, ...rest } = values;
		if (__model_name && __model_type) await handleSaveCredential({
			credential_id: credential?.credential_id,
			credentials: rest,
			name: __authorization_name__,
			model: __model_name,
			model_type: __model_type
		});
		else await handleSaveCredential({
			credential_id: credential?.credential_id,
			credentials: rest,
			name: __authorization_name__
		});
		onSave(values);
	}, [
		handleSaveCredential,
		credential?.credential_id,
		model,
		onSave,
		mode,
		selectedCredential,
		handleActiveCredential
	]);
	const modalTitle = useMemo(() => {
		let label = t("modelProvider.auth.apiKeyModal.title", { ns: "common" });
		if (mode === ModelModalModeEnum.configCustomModel || mode === ModelModalModeEnum.addCustomModelToModelList) label = t("modelProvider.auth.addModel", { ns: "common" });
		if (mode === ModelModalModeEnum.configModelCredential) if (credential) label = t("modelProvider.auth.editModelCredential", { ns: "common" });
		else label = t("modelProvider.auth.addModelCredential", { ns: "common" });
		return /* @__PURE__ */ jsx("div", {
			className: "text-text-primary title-2xl-semi-bold",
			children: label
		});
	}, [
		t,
		mode,
		credential
	]);
	const modalDesc = useMemo(() => {
		if (providerFormSchemaPredefined) return /* @__PURE__ */ jsx("div", {
			className: "mt-1 text-text-tertiary system-xs-regular",
			children: t("modelProvider.auth.apiKeyModal.desc", { ns: "common" })
		});
		return null;
	}, [providerFormSchemaPredefined, t]);
	const modalModel = useMemo(() => {
		if (mode === ModelModalModeEnum.configCustomModel) return /* @__PURE__ */ jsxs("div", {
			className: "mt-2 flex items-center",
			children: [/* @__PURE__ */ jsx(ModelIcon, {
				className: "mr-2 h-4 w-4 shrink-0",
				provider
			}), /* @__PURE__ */ jsx("div", {
				className: "mr-1 text-text-secondary system-md-regular",
				children: renderI18nObject(provider.label)
			})]
		});
		if (model && (mode === ModelModalModeEnum.configModelCredential || mode === ModelModalModeEnum.addCustomModelToModelList)) return /* @__PURE__ */ jsxs("div", {
			className: "mt-2 flex items-center",
			children: [
				/* @__PURE__ */ jsx(ModelIcon, {
					className: "mr-2 h-4 w-4 shrink-0",
					provider,
					modelName: model.model
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mr-1 text-text-secondary system-md-regular",
					children: model.model
				}),
				/* @__PURE__ */ jsx(badge_default, { children: model.model_type })
			]
		});
		return null;
	}, [
		model,
		provider,
		mode,
		renderI18nObject
	]);
	const showCredentialLabel = useMemo(() => {
		if (mode === ModelModalModeEnum.configCustomModel) return true;
		if (mode === ModelModalModeEnum.addCustomModelToModelList) return selectedCredential?.addNewCredential;
	}, [mode, selectedCredential]);
	const showCredentialForm = useMemo(() => {
		if (mode !== ModelModalModeEnum.addCustomModelToModelList) return true;
		return selectedCredential?.addNewCredential;
	}, [mode, selectedCredential]);
	const saveButtonText = useMemo(() => {
		if (mode === ModelModalModeEnum.addCustomModelToModelList || mode === ModelModalModeEnum.configCustomModel) return t("operation.add", { ns: "common" });
		return t("operation.save", { ns: "common" });
	}, [mode, t]);
	const handleDeleteCredential = useCallback(() => {
		handleConfirmDelete();
		onCancel();
	}, [handleConfirmDelete]);
	const handleModelNameAndTypeChange = useCallback((field, value) => {
		const { getForm } = formRef2.current || {};
		if (getForm()) getForm()?.setFieldValue(field, value);
	}, []);
	const notAllowCustomCredential = provider.allow_custom_token === false;
	const handleOpenChange = useCallback((open) => {
		if (!open) onCancel();
	}, [onCancel]);
	const handleConfirmOpenChange = useCallback((open) => {
		if (!open) closeConfirmDelete();
	}, [closeConfirmDelete]);
	return /* @__PURE__ */ jsxs(Dialog, {
		open: true,
		onOpenChange: handleOpenChange,
		children: [/* @__PURE__ */ jsxs(DialogContent, {
			backdropProps: { forceRender: true },
			className: "w-[640px] max-w-[640px] overflow-hidden p-0",
			children: [
				/* @__PURE__ */ jsx(DialogCloseButton, { className: "right-5 top-5 h-8 w-8" }),
				/* @__PURE__ */ jsxs("div", {
					className: "p-6 pb-3",
					children: [
						modalTitle,
						modalDesc,
						modalModel
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "max-h-[calc(100vh-320px)] overflow-y-auto px-6 py-3",
					children: [
						mode === ModelModalModeEnum.configCustomModel && /* @__PURE__ */ jsx(auth_default, {
							formSchemas: modelNameAndTypeFormSchemas.map((formSchema) => {
								return {
									...formSchema,
									name: formSchema.variable
								};
							}),
							defaultValues: modelNameAndTypeFormValues,
							inputClassName: "justify-start",
							ref: formRef1,
							onChange: handleModelNameAndTypeChange
						}),
						mode === ModelModalModeEnum.addCustomModelToModelList && /* @__PURE__ */ jsx(credential_selector_default, {
							credentials: available_credentials || [],
							onSelect: setSelectedCredential,
							selectedCredential,
							disabled: isLoading,
							notAllowAddNewCredential: notAllowCustomCredential
						}),
						showCredentialLabel && /* @__PURE__ */ jsxs("div", {
							className: "mb-3 mt-6 flex items-center text-text-tertiary system-xs-medium-uppercase",
							children: [t("modelProvider.auth.modelCredential", { ns: "common" }), /* @__PURE__ */ jsx("div", { className: "ml-2 h-px grow bg-gradient-to-r from-divider-regular to-background-gradient-mask-transparent" })]
						}),
						isLoading && /* @__PURE__ */ jsx("div", {
							className: "mt-3 flex items-center justify-center",
							children: /* @__PURE__ */ jsx(Loading, {})
						}),
						!isLoading && showCredentialForm && /* @__PURE__ */ jsx(auth_default, {
							formSchemas: formSchemas.map((formSchema) => {
								return {
									...formSchema,
									name: formSchema.variable,
									showRadioUI: formSchema.type === FormTypeEnum.radio
								};
							}),
							defaultValues: formValues,
							inputClassName: "justify-start",
							ref: formRef2
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex justify-between p-6 pt-5",
					children: [provider.help && (provider.help.title || provider.help.url) ? /* @__PURE__ */ jsxs("a", {
						href: provider.help?.url[language] || provider.help?.url.en_US,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-2 inline-block align-middle text-text-accent system-xs-regular",
						onClick: (e) => !provider.help.url && e.preventDefault(),
						children: [provider.help.title?.[language] || provider.help.url[language] || provider.help.title?.en_US || provider.help.url.en_US, /* @__PURE__ */ jsx(Icon, { className: "ml-1 mt-[-2px] inline-block h-3 w-3" })]
					}) : /* @__PURE__ */ jsx("div", {}), /* @__PURE__ */ jsxs("div", {
						className: "ml-2 flex items-center justify-end space-x-2",
						children: [
							isEditMode && /* @__PURE__ */ jsx(Button, {
								variant: "warning",
								onClick: () => openConfirmDelete(credential, model),
								children: t("operation.remove", { ns: "common" })
							}),
							/* @__PURE__ */ jsx(Button, {
								onClick: onCancel,
								children: t("operation.cancel", { ns: "common" })
							}),
							/* @__PURE__ */ jsx(Button, {
								variant: "primary",
								onClick: handleSave,
								disabled: isLoading || doingAction,
								children: saveButtonText
							})
						]
					})]
				}),
				(mode === ModelModalModeEnum.configCustomModel || mode === ModelModalModeEnum.configProviderCredential) && /* @__PURE__ */ jsx("div", {
					className: "border-t-[0.5px] border-t-divider-regular",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center rounded-b-2xl bg-background-section-burn py-3 text-xs text-text-tertiary",
						children: [
							/* @__PURE__ */ jsx(Icon$1, { className: "mr-1 h-3 w-3 text-text-tertiary" }),
							t("modelProvider.encrypted.front", { ns: "common" }),
							/* @__PURE__ */ jsx("a", {
								className: "mx-1 text-text-accent",
								target: "_blank",
								rel: "noopener noreferrer",
								href: "https://pycryptodome.readthedocs.io/en/latest/src/cipher/oaep.html",
								children: "PKCS1_OAEP"
							}),
							t("modelProvider.encrypted.back", { ns: "common" })
						]
					})
				})
			]
		}), /* @__PURE__ */ jsx(AlertDialog, {
			open: !!deleteCredentialId,
			onOpenChange: handleConfirmOpenChange,
			children: /* @__PURE__ */ jsxs(AlertDialogContent, {
				backdropProps: { forceRender: true },
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex flex-col gap-2 p-6 pb-4",
					children: /* @__PURE__ */ jsx(AlertDialogTitle, {
						className: "text-text-primary title-2xl-semi-bold",
						children: t("modelProvider.confirmDelete", { ns: "common" })
					})
				}), /* @__PURE__ */ jsxs(AlertDialogActions, { children: [/* @__PURE__ */ jsx(AlertDialogCancelButton, { children: t("operation.cancel", { ns: "common" }) }), /* @__PURE__ */ jsx(AlertDialogConfirmButton, {
					disabled: doingAction,
					onClick: handleDeleteCredential,
					children: t("operation.confirm", { ns: "common" })
				})] })]
			})
		})]
	});
};
var model_modal_default = memo(ModelModal);
//#endregion
export { model_modal_default as default };
