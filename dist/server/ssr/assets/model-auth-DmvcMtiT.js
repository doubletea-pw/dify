import { Mr as p, Tn as Yx, c as AD, fi as x, rr as f1 } from "./react-D5xHzNYo.js";
import { b as useTranslation } from "./floating-ui.utils.dom-B62kDwTz.js";
import { t as tooltip_default } from "./tooltip-ZeeerRdq.js";
import { t as cn } from "./classnames-LHQnX9lX.js";
import { c as ModelModalModeEnum, t as ConfigurationMethodEnum } from "./declarations-DYMEe7hD.js";
import { n as PortalToFollowElemContent, r as PortalToFollowElemTrigger, t as PortalToFollowElem } from "./portal-to-follow-elem-DU-Awe3a.js";
import { t as Button } from "./button-BqYXL-Bc.js";
import { t as confirm_default } from "./confirm-CKQP3hdx.js";
import { A as Indicator, C as ModelIcon, c as useCredentialStatus, n as badge_default, o as useCanAddedModels, s as useCustomModels, t as credential_item_default, u as useAuth } from "./credential-item-C22_bUSw.js";
import { Fragment, memo, useCallback, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region app/components/header/account-setting/model-provider-page/model-auth/add-credential-in-load-balancing.tsx
var AddCredentialInLoadBalancing = ({ provider, model, configurationMethod, modelCredential, onSelectCredential, onUpdate, onRemove }) => {
	const { t } = useTranslation();
	const { available_credentials } = modelCredential;
	const isCustomModel = configurationMethod === ConfigurationMethodEnum.customizableModel;
	const notAllowCustomCredential = provider.allow_custom_token === false;
	const handleUpdate = useCallback((payload, formValues) => {
		onUpdate?.(payload, formValues);
	}, [onUpdate]);
	return /* @__PURE__ */ jsx(authorized_default, {
		provider,
		renderTrigger: useCallback((open) => {
			return /* @__PURE__ */ jsxs("div", {
				className: cn("system-sm-medium flex h-8 items-center rounded-lg px-3 text-text-accent hover:bg-state-base-hover", open && "bg-state-base-hover"),
				children: [/* @__PURE__ */ jsx(p, { className: "mr-2 h-4 w-4" }), t("modelProvider.auth.addCredential", { ns: "common" })]
			});
		}, [t, isCustomModel]),
		authParams: {
			isModelCredential: isCustomModel,
			mode: ModelModalModeEnum.configModelCredential,
			onUpdate: handleUpdate,
			onRemove
		},
		triggerOnlyOpenModal: !available_credentials?.length && !notAllowCustomCredential,
		items: [{
			title: isCustomModel ? "" : t("modelProvider.auth.apiKeys", { ns: "common" }),
			model: isCustomModel ? model : void 0,
			credentials: available_credentials ?? []
		}],
		showModelTitle: !isCustomModel,
		configurationMethod,
		currentCustomConfigurationModelFixedFields: isCustomModel ? {
			__model_name: model.model,
			__model_type: model.model_type
		} : void 0,
		onItemClick: onSelectCredential,
		placement: "bottom-start",
		popupTitle: isCustomModel ? t("modelProvider.auth.modelCredentials", { ns: "common" }) : ""
	});
};
var add_credential_in_load_balancing_default = memo(AddCredentialInLoadBalancing);
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-auth/add-custom-model.tsx
var AddCustomModel = ({ provider, configurationMethod, currentCustomConfigurationModelFixedFields }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const canAddedModels = useCanAddedModels(provider);
	const noModels = !canAddedModels.length;
	const { handleOpenModal: handleOpenModalForAddNewCustomModel } = useAuth(provider, configurationMethod, currentCustomConfigurationModelFixedFields, {
		isModelCredential: true,
		mode: ModelModalModeEnum.configCustomModel
	});
	const { handleOpenModal: handleOpenModalForAddCustomModelToModelList } = useAuth(provider, configurationMethod, currentCustomConfigurationModelFixedFields, {
		isModelCredential: true,
		mode: ModelModalModeEnum.addCustomModelToModelList
	});
	const notAllowCustomCredential = provider.allow_custom_token === false;
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		placement: "bottom-end",
		offset: {
			mainAxis: 4,
			crossAxis: 0
		},
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => {
				if (noModels) {
					if (notAllowCustomCredential) return;
					handleOpenModalForAddNewCustomModel();
					return;
				}
				setOpen((prev) => !prev);
			},
			children: useCallback((open) => {
				const Item = /* @__PURE__ */ jsxs(Button, {
					variant: "ghost",
					size: "small",
					className: cn("text-text-tertiary", open && "bg-components-button-ghost-bg-hover", notAllowCustomCredential && !!noModels && "cursor-not-allowed opacity-50"),
					children: [/* @__PURE__ */ jsx(x, { className: "mr-1 h-3.5 w-3.5" }), t("modelProvider.addModel", { ns: "common" })]
				});
				if (notAllowCustomCredential && !!noModels) return /* @__PURE__ */ jsx(tooltip_default, {
					asChild: true,
					popupContent: t("auth.credentialUnavailable", { ns: "plugin" }),
					children: Item
				});
				return Item;
			}, [
				t,
				notAllowCustomCredential,
				noModels
			])(open)
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1002]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-[320px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg",
				children: [/* @__PURE__ */ jsx("div", {
					className: "max-h-[304px] overflow-y-auto p-1",
					children: canAddedModels.map((model) => /* @__PURE__ */ jsxs("div", {
						className: "flex h-8 cursor-pointer items-center rounded-lg px-2 hover:bg-state-base-hover",
						onClick: () => {
							handleOpenModalForAddCustomModelToModelList(void 0, model);
							setOpen(false);
						},
						children: [/* @__PURE__ */ jsx(ModelIcon, {
							className: "mr-1 h-5 w-5 shrink-0",
							iconClassName: "h-5 w-5",
							provider,
							modelName: model.model
						}), /* @__PURE__ */ jsx("div", {
							className: "grow truncate text-text-primary system-md-regular",
							title: model.model,
							children: model.model
						})]
					}, model.model))
				}), !notAllowCustomCredential && /* @__PURE__ */ jsxs("div", {
					className: "flex cursor-pointer items-center border-t border-t-divider-subtle p-3 text-text-accent-light-mode-only system-xs-medium",
					onClick: () => {
						handleOpenModalForAddNewCustomModel();
						setOpen(false);
					},
					children: [/* @__PURE__ */ jsx(p, { className: "mr-1 h-4 w-4" }), t("modelProvider.auth.addNewModel", { ns: "common" })]
				})]
			})
		})]
	});
};
var add_custom_model_default = memo(AddCustomModel);
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-auth/authorized/authorized-item.tsx
var AuthorizedItem = ({ provider, model, title, credentials, disabled, onDelete, onEdit, showItemSelectedIcon, selectedCredentialId, onItemClick, showModelTitle, disableDeleteButShowAction, disableDeleteTip }) => {
	const handleEdit = useCallback((credential) => {
		onEdit?.(credential, model);
	}, [onEdit, model]);
	const handleDelete = useCallback((credential) => {
		onDelete?.(credential, model);
	}, [onDelete, model]);
	const handleItemClick = useCallback((credential) => {
		onItemClick?.(credential, model);
	}, [onItemClick, model]);
	return /* @__PURE__ */ jsxs("div", {
		className: "p-1",
		children: [showModelTitle && /* @__PURE__ */ jsxs("div", {
			className: "flex h-9 items-center px-2",
			children: [model?.model && /* @__PURE__ */ jsx(ModelIcon, {
				className: "mr-1 h-5 w-5 shrink-0",
				provider,
				modelName: model.model
			}), /* @__PURE__ */ jsx("div", {
				className: "system-md-medium mx-1 grow truncate text-text-primary",
				title: title ?? model?.model,
				children: title ?? model?.model
			})]
		}), credentials.map((credential) => /* @__PURE__ */ jsx(credential_item_default, {
			credential,
			disabled,
			onDelete: handleDelete,
			onEdit: handleEdit,
			showSelectedIcon: showItemSelectedIcon,
			selectedCredentialId,
			onItemClick: handleItemClick,
			disableDeleteButShowAction,
			disableDeleteTip
		}, credential.credential_id))]
	});
};
var authorized_item_default = memo(AuthorizedItem);
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-auth/authorized/index.tsx
var Authorized = ({ provider, configurationMethod, currentCustomConfigurationModelFixedFields, items, authParams, disabled, renderTrigger, isOpen, onOpenChange, offset = 8, placement = "bottom-end", triggerPopupSameWidth = false, popupClassName, showItemSelectedIcon, onItemClick, triggerOnlyOpenModal, hideAddAction, disableItemClick, popupTitle, showModelTitle, disableDeleteButShowAction, disableDeleteTip }) => {
	const { t } = useTranslation();
	const [isLocalOpen, setIsLocalOpen] = useState(false);
	const mergedIsOpen = isOpen ?? isLocalOpen;
	const setMergedIsOpen = useCallback((open) => {
		if (onOpenChange) onOpenChange(open);
		setIsLocalOpen(open);
	}, [onOpenChange]);
	const { isModelCredential, onUpdate, onRemove, mode } = authParams || {};
	const { openConfirmDelete, closeConfirmDelete, doingAction, handleActiveCredential, handleConfirmDelete, deleteCredentialId, handleOpenModal } = useAuth(provider, configurationMethod, currentCustomConfigurationModelFixedFields, {
		isModelCredential,
		onUpdate,
		onRemove,
		mode
	});
	const handleEdit = useCallback((credential, model) => {
		handleOpenModal(credential, model);
		setMergedIsOpen(false);
	}, [handleOpenModal, setMergedIsOpen]);
	const handleItemClick = useCallback((credential, model) => {
		if (disableItemClick) return;
		if (onItemClick) onItemClick(credential, model);
		else handleActiveCredential(credential, model);
		setMergedIsOpen(false);
	}, [
		handleActiveCredential,
		onItemClick,
		setMergedIsOpen,
		disableItemClick
	]);
	const notAllowCustomCredential = provider.allow_custom_token === false;
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(PortalToFollowElem, {
		open: mergedIsOpen,
		onOpenChange: setMergedIsOpen,
		placement,
		offset,
		triggerPopupSameWidth,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			onClick: () => {
				if (triggerOnlyOpenModal) {
					handleOpenModal();
					return;
				}
				setMergedIsOpen(!mergedIsOpen);
			},
			asChild: true,
			children: renderTrigger(mergedIsOpen)
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1002]",
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("w-[360px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg backdrop-blur-[5px]", popupClassName),
				children: [
					popupTitle && /* @__PURE__ */ jsx("div", {
						className: "px-3 pb-0.5 pt-[10px] text-text-tertiary system-xs-medium",
						children: popupTitle
					}),
					/* @__PURE__ */ jsx("div", {
						className: "max-h-[304px] overflow-y-auto",
						children: items.map((item, index) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(authorized_item_default, {
							provider,
							title: item.title,
							model: item.model,
							credentials: item.credentials,
							disabled,
							onDelete: openConfirmDelete,
							disableDeleteButShowAction,
							disableDeleteTip,
							onEdit: handleEdit,
							showItemSelectedIcon,
							selectedCredentialId: item.selectedCredential?.credential_id,
							onItemClick: handleItemClick,
							showModelTitle
						}), index !== items.length - 1 && /* @__PURE__ */ jsx("div", { className: "h-[1px] bg-divider-subtle" })] }, index))
					}),
					/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-divider-subtle" }),
					isModelCredential && !notAllowCustomCredential && !hideAddAction && /* @__PURE__ */ jsxs("div", {
						onClick: () => handleEdit(void 0, currentCustomConfigurationModelFixedFields ? {
							model: currentCustomConfigurationModelFixedFields.__model_name,
							model_type: currentCustomConfigurationModelFixedFields.__model_type
						} : void 0),
						className: "flex h-[40px] cursor-pointer items-center px-3 text-text-accent-light-mode-only system-xs-medium",
						children: [/* @__PURE__ */ jsx(p, { className: "mr-1 h-4 w-4" }), t("modelProvider.auth.addModelCredential", { ns: "common" })]
					}),
					!isModelCredential && !notAllowCustomCredential && !hideAddAction && /* @__PURE__ */ jsx("div", {
						className: "p-2",
						children: /* @__PURE__ */ jsx(Button, {
							onClick: () => handleEdit(),
							className: "w-full",
							children: t("modelProvider.auth.addApiKey", { ns: "common" })
						})
					})
				]
			})
		})]
	}), deleteCredentialId && /* @__PURE__ */ jsx(confirm_default, {
		isShow: true,
		title: t("modelProvider.confirmDelete", { ns: "common" }),
		isDisabled: doingAction,
		onCancel: closeConfirmDelete,
		onConfirm: handleConfirmDelete
	})] });
};
var authorized_default = memo(Authorized);
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-auth/config-model.tsx
var ConfigModel = ({ onClick, loadBalancingEnabled, loadBalancingInvalid, credentialRemoved }) => {
	const { t } = useTranslation();
	if (loadBalancingInvalid) return /* @__PURE__ */ jsxs("div", {
		className: "system-2xs-medium-uppercase relative flex h-[18px] cursor-pointer items-center rounded-[5px] border border-text-warning bg-components-badge-bg-dimm px-1.5 text-text-warning",
		onClick,
		children: [
			/* @__PURE__ */ jsx(Yx, { className: "mr-0.5 h-3 w-3" }),
			t("modelProvider.auth.authorizationError", { ns: "common" }),
			/* @__PURE__ */ jsx(Indicator, {
				color: "orange",
				className: "absolute right-[-1px] top-[-1px] h-1.5 w-1.5"
			})
		]
	});
	return /* @__PURE__ */ jsxs(Button, {
		variant: "secondary",
		size: "small",
		className: cn("hidden shrink-0 group-hover:flex", credentialRemoved && "flex"),
		onClick,
		children: [
			credentialRemoved && /* @__PURE__ */ jsxs(Fragment$1, { children: [t("modelProvider.auth.credentialRemoved", { ns: "common" }), /* @__PURE__ */ jsx(Indicator, {
				color: "red",
				className: "ml-2"
			})] }),
			!loadBalancingEnabled && !credentialRemoved && !loadBalancingInvalid && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(AD, { className: "mr-1 h-4 w-4" }), t("operation.config", { ns: "common" })] }),
			loadBalancingEnabled && !credentialRemoved && !loadBalancingInvalid && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Yx, { className: "mr-1 h-4 w-4" }), t("modelProvider.auth.configLoadBalancing", { ns: "common" })] })
		]
	});
};
var config_model_default = memo(ConfigModel);
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-auth/config-provider.tsx
var ConfigProvider = ({ provider, currentCustomConfigurationModelFixedFields }) => {
	const { t } = useTranslation();
	const { hasCredential, authorized, current_credential_id, current_credential_name, available_credentials } = useCredentialStatus(provider);
	const notAllowCustomCredential = provider.allow_custom_token === false;
	const renderTrigger = useCallback(() => {
		const text = hasCredential ? t("operation.config", { ns: "common" }) : t("operation.setup", { ns: "common" });
		const Item = /* @__PURE__ */ jsxs(Button, {
			className: "flex grow",
			size: "small",
			variant: !authorized ? "secondary-accent" : "secondary",
			title: text,
			children: [/* @__PURE__ */ jsx(AD, { className: "mr-1 h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
				className: "w-0 grow truncate text-left",
				children: text
			})]
		});
		if (notAllowCustomCredential && !hasCredential) return /* @__PURE__ */ jsx(tooltip_default, {
			asChild: true,
			popupContent: t("auth.credentialUnavailable", { ns: "plugin" }),
			children: Item
		});
		return Item;
	}, [
		authorized,
		hasCredential,
		notAllowCustomCredential,
		t
	]);
	return /* @__PURE__ */ jsx(authorized_default, {
		provider,
		configurationMethod: ConfigurationMethodEnum.predefinedModel,
		currentCustomConfigurationModelFixedFields,
		items: [{
			title: t("modelProvider.auth.apiKeys", { ns: "common" }),
			credentials: available_credentials ?? [],
			selectedCredential: {
				credential_id: current_credential_id ?? "",
				credential_name: current_credential_name ?? ""
			}
		}],
		showItemSelectedIcon: true,
		showModelTitle: true,
		renderTrigger,
		triggerOnlyOpenModal: !hasCredential && !notAllowCustomCredential
	});
};
memo(ConfigProvider);
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-auth/credential-selector.tsx
var CredentialSelector = ({ selectedCredential, credentials, onSelect, disabled, notAllowAddNewCredential }) => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const handleSelect = useCallback((credential) => {
		setOpen(false);
		onSelect(credential);
	}, [onSelect]);
	const handleAddNewCredential = useCallback(() => {
		handleSelect({
			credential_id: "__add_new_credential",
			addNewCredential: true,
			credential_name: t("modelProvider.auth.addNewModelCredential", { ns: "common" })
		});
	}, [handleSelect, t]);
	return /* @__PURE__ */ jsxs(PortalToFollowElem, {
		open,
		onOpenChange: setOpen,
		triggerPopupSameWidth: true,
		children: [/* @__PURE__ */ jsx(PortalToFollowElemTrigger, {
			asChild: true,
			onClick: () => !disabled && setOpen((v) => !v),
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex h-8 w-full items-center justify-between rounded-lg bg-components-input-bg-normal px-2 system-sm-regular",
				children: [
					selectedCredential && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center",
						children: [
							!selectedCredential.addNewCredential && /* @__PURE__ */ jsx(Indicator, { className: "ml-1 mr-2 shrink-0" }),
							/* @__PURE__ */ jsx("div", {
								className: "truncate text-components-input-text-filled system-sm-regular",
								title: selectedCredential.credential_name,
								children: selectedCredential.credential_name
							}),
							selectedCredential.from_enterprise && /* @__PURE__ */ jsx(badge_default, {
								className: "shrink-0",
								children: "Enterprise"
							})
						]
					}),
					!selectedCredential && /* @__PURE__ */ jsx("div", {
						className: "grow truncate text-components-input-text-placeholder system-sm-regular",
						children: t("modelProvider.auth.selectModelCredential", { ns: "common" })
					}),
					/* @__PURE__ */ jsx(f1, { className: "h-4 w-4 text-text-quaternary" })
				]
			})
		}), /* @__PURE__ */ jsx(PortalToFollowElemContent, {
			className: "z-[1002]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "border-ccomponents-panel-border rounded-xl border-[0.5px] bg-components-panel-bg-blur shadow-lg",
				children: [/* @__PURE__ */ jsx("div", {
					className: "max-h-[320px] overflow-y-auto p-1",
					children: credentials.map((credential) => /* @__PURE__ */ jsx(credential_item_default, {
						credential,
						disableDelete: true,
						disableEdit: true,
						disableRename: true,
						onItemClick: handleSelect,
						showSelectedIcon: true,
						selectedCredentialId: selectedCredential?.credential_id
					}, credential.credential_id))
				}), !notAllowAddNewCredential && /* @__PURE__ */ jsxs("div", {
					className: "flex h-10 cursor-pointer items-center border-t border-t-divider-subtle px-7 text-text-accent-light-mode-only system-xs-medium",
					onClick: handleAddNewCredential,
					children: [/* @__PURE__ */ jsx(p, { className: "mr-1 h-4 w-4" }), t("modelProvider.auth.addNewModelCredential", { ns: "common" })]
				})]
			})
		})]
	});
};
var credential_selector_default = memo(CredentialSelector);
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-auth/manage-custom-model-credentials.tsx
var ManageCustomModelCredentials = ({ provider, currentCustomConfigurationModelFixedFields }) => {
	const { t } = useTranslation();
	const customModels = useCustomModels(provider);
	const noModels = !customModels.length;
	const renderTrigger = useCallback((open) => {
		return /* @__PURE__ */ jsx(Button, {
			variant: "ghost",
			size: "small",
			className: cn("mr-0.5 text-text-tertiary", open && "bg-components-button-ghost-bg-hover"),
			children: t("modelProvider.auth.manageCredentials", { ns: "common" })
		});
	}, [t]);
	if (noModels) return null;
	return /* @__PURE__ */ jsx(authorized_default, {
		provider,
		configurationMethod: ConfigurationMethodEnum.customizableModel,
		currentCustomConfigurationModelFixedFields,
		items: customModels.map((model) => ({
			model,
			credentials: model.available_model_credentials ?? [],
			selectedCredential: model.current_credential_id ? {
				credential_id: model.current_credential_id,
				credential_name: model.current_credential_name
			} : void 0
		})),
		renderTrigger,
		authParams: {
			isModelCredential: true,
			mode: ModelModalModeEnum.configModelCredential
		},
		hideAddAction: true,
		disableItemClick: true,
		popupTitle: t("modelProvider.auth.customModelCredentials", { ns: "common" }),
		showModelTitle: true,
		disableDeleteButShowAction: true,
		disableDeleteTip: t("modelProvider.auth.customModelCredentialsDeleteTip", { ns: "common" })
	});
};
var manage_custom_model_credentials_default = memo(ManageCustomModelCredentials);
//#endregion
//#region app/components/header/account-setting/model-provider-page/model-auth/switch-credential-in-load-balancing.tsx
var SwitchCredentialInLoadBalancing = ({ provider, model, customModelCredential, setCustomModelCredential, credentials, onUpdate, onRemove }) => {
	const { t } = useTranslation();
	const notAllowCustomCredential = provider.allow_custom_token === false;
	const handleItemClick = useCallback((credential) => {
		setCustomModelCredential(credential);
	}, [setCustomModelCredential]);
	const renderTrigger = useCallback(() => {
		const selectedCredentialId = customModelCredential?.credential_id;
		const currentCredential = credentials?.find((c) => c.credential_id === selectedCredentialId);
		const empty = !credentials?.length;
		const authRemoved = selectedCredentialId && !currentCredential && !empty;
		const unavailable = currentCredential?.not_allowed_to_use;
		let color = "green";
		if (authRemoved || unavailable) color = "red";
		const Item = /* @__PURE__ */ jsxs(Button, {
			variant: "secondary",
			className: cn("shrink-0 space-x-1", (authRemoved || unavailable) && "text-components-button-destructive-secondary-text", empty && "cursor-not-allowed opacity-50"),
			children: [
				!empty && /* @__PURE__ */ jsx(Indicator, {
					className: "mr-2",
					color
				}),
				authRemoved && t("modelProvider.auth.authRemoved", { ns: "common" }),
				(unavailable || empty) && t("auth.credentialUnavailableInButton", { ns: "plugin" }),
				!authRemoved && !unavailable && !empty && customModelCredential?.credential_name,
				currentCredential?.from_enterprise && /* @__PURE__ */ jsx(badge_default, {
					className: "ml-2",
					children: "Enterprise"
				}),
				/* @__PURE__ */ jsx(f1, { className: "h-4 w-4" })
			]
		});
		if (empty && notAllowCustomCredential) return /* @__PURE__ */ jsx(tooltip_default, {
			asChild: true,
			popupContent: t("auth.credentialUnavailable", { ns: "plugin" }),
			children: Item
		});
		return Item;
	}, [
		customModelCredential,
		t,
		credentials,
		notAllowCustomCredential
	]);
	return /* @__PURE__ */ jsx(authorized_default, {
		provider,
		configurationMethod: ConfigurationMethodEnum.customizableModel,
		currentCustomConfigurationModelFixedFields: model ? {
			__model_name: model.model,
			__model_type: model.model_type
		} : void 0,
		authParams: {
			isModelCredential: true,
			mode: ModelModalModeEnum.configModelCredential,
			onUpdate,
			onRemove
		},
		items: [{
			model,
			credentials: credentials || [],
			selectedCredential: customModelCredential ? {
				credential_id: customModelCredential?.credential_id || "",
				credential_name: customModelCredential?.credential_name || ""
			} : void 0
		}],
		renderTrigger,
		onItemClick: handleItemClick,
		enableAddModelCredential: true,
		showItemSelectedIcon: true,
		popupTitle: t("modelProvider.auth.modelCredentials", { ns: "common" }),
		triggerOnlyOpenModal: !credentials?.length
	});
};
var switch_credential_in_load_balancing_default = memo(SwitchCredentialInLoadBalancing);
//#endregion
export { add_custom_model_default as a, config_model_default as i, manage_custom_model_credentials_default as n, add_credential_in_load_balancing_default as o, credential_selector_default as r, switch_credential_in_load_balancing_default as t };
